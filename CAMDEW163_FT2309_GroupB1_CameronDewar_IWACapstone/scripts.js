// Import variables from library/book data JavaScript file
import { authors, books, BOOKS_PER_PAGE, genres } from "./data.js";

// Validate the existence of books array
if (!books || !Array.isArray(books)) {
    throw new Error('Invalid source data');
}

const PREVIEW_RANGE = [0, BOOKS_PER_PAGE];

// Validate the existence of PREVIEW_RANGE and its length
if (!PREVIEW_RANGE || PREVIEW_RANGE.length < 2) {
    throw new Error('Invalid preview range');
}

// Global scope variables
let filteredBooks = books;
let currentPage = 1;

const themeCss = {
    "day": { dark: "10, 10, 20", light: "255, 255, 255" },
    "night": { dark: "255, 255, 255", light: "10, 10, 20" },
};

// Query Selectors
// Header Elements
const dataSearchButton = document.querySelector('[data-header-search]');
const dataUserSettingsButton = document.querySelector('[data-header-overlay]');

// Search Overlay Elements
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');
const dataSearchForm = document.querySelector('[data-search-form]');

// User Setting Overlay Elements
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataSettingsTheme = document.querySelector('[data-settings-theme]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const dataSettingsForm = document.querySelector('[data-settings-form]');

// Active Book Overlay Elements
const dataListBookActive = document.querySelector('[data-list-active]');
const dataBookSelectedBlur = document.querySelector('[data-list-blur]');
const dataBookSelectedImage = document.querySelector('[data-list-image]');
const dataBookSelectedTitle = document.querySelector('[data-list-title]');
const dataBookSelectedSubtitle = document.querySelector('[data-list-subtitle]');
const dataBookSelectedDescription = document.querySelector('[data-list-description]');
const dataListBookClose = document.querySelector('[data-list-close]');

// Main Book List Content Elements
const dataListItems = document.querySelector('[data-list-items]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataShowMoreButton = document.querySelector('[data-list-button]');

// Function to create a book preview element
const createBookPreview = ({ author, id, image, title }) => {
    const element = document.createElement('button');
    element.className = "preview";
    element.dataset.preview = id;
    element.innerHTML = `
        <div>
            <img class='preview__image' src="${image}" alt="book cover">
        </div>
        <div class='preview__info'>
            <dt class="preview__title">${title}</dt>
            <dt class="preview__author"> by ${authors[author]}</dt>
        `;
    return element;
};

// Function to update the "Show more" button
const updateRemainingButton = () => {
    const remainingBooksCount = filteredBooks.length - (currentPage * BOOKS_PER_PAGE);
    const remainingBooksDisplay = remainingBooksCount > 0 ? remainingBooksCount : 0;

    dataShowMoreButton.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${remainingBooksDisplay})</span>
    `;

    dataShowMoreButton.disabled = !(remainingBooksCount > 0);
};

// Function to create a fragment of book previews
const createPreviewsFragment = (startIndex = PREVIEW_RANGE[0], endIndex = PREVIEW_RANGE[1]) => {
    const fragment = document.createDocumentFragment();

    for (let i = startIndex; i < Math.min(filteredBooks.length - 1, endIndex); i++) {
        const { author, id, image, title } = filteredBooks[i];
        const preview = createBookPreview({ author, id, image, title });

        fragment.appendChild(preview);
    }

    updateRemainingButton();

    return fragment;
};

// Initial display of book previews
dataListItems.appendChild(createPreviewsFragment());
dataListItems.style.display = "grid";

// Create genres options
let genresFragment = document.createDocumentFragment();
const genresOptionAll = document.createElement('option');
genresOptionAll.value = 'any';
genresFragment.innerText = 'All Genres';
genresFragment.appendChild(genresOptionAll);

for (const [id, name] of Object.entries(genres)) {
    const option = document.createElement('option');
    option.value = id;
    option.innerHTML = name;
    genresFragment.appendChild(option);
}
dataSearchGenres.appendChild(genresFragment);

// Create authors options
let authorsFragment = document.createDocumentFragment();
const authorsOptionAll = document.createElement('option');
authorsOptionAll.value = 'any';
authorsFragment.innerText = 'All Authors';
authorsFragment.appendChild(authorsOptionAll);

for (const [id, name] of Object.entries(authors)) {
    const option = document.createElement('option');
    option.value = id;
    option.innerHTML = name;
    authorsFragment.appendChild(option);
}
dataSearchAuthors.appendChild(authorsFragment);

// Event Listeners
// Header Elements
dataSearchButton.addEventListener('click', () => {
    filteredBooks = books;
    dataSearchOverlay.open = true;
    dataSearchOverlay.focus();
    dataSearchCancel.enabled = true;
});

dataUserSettingsButton.addEventListener('click', () => {
    dataSettingsOverlay.open = true;
    dataSettingsOverlay.focus();
    dataSettingsCancel.enabled = true;
});

// Search Overlay Elements
dataSearchCancel.addEventListener('click', () => {
    dataSearchOverlay.open = false;
});

dataSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    currentPage = 1;

    const filtersTitle = filters.title.trim().toLowerCase();
    const filtersAuthor = filters.author;
    const filtersGenre = filters.genre;

    filteredBooks = books.filter((book) => {
        const titleMatch = filtersTitle === '' || book.title.toLowerCase().includes(filtersTitle);
        const authorMatch = filtersAuthor === 'any' || book.author === filtersAuthor;
        const genreMatch = filtersGenre === 'any' || book.genres.includes(filtersGenre);

        return titleMatch && authorMatch && genreMatch;
    });

    filteredBooks.length < 1 ? dataListMessage.classList.add('list__message_show') : dataListMessage.classList.remove('list__message_show');

    dataListItems.innerHTML = '';
    dataListItems.appendChild(createPreviewsFragment());
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dataSearchOverlay.open = false;
    dataSearchForm.reset();
});

// User Setting Overlay Elements
dataSettingsCancel.addEventListener('click', () => {
    dataSettingsCancel.enabled = false;
    dataSettingsOverlay.open = false;
});

dataSettingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const theme = dataSettingsTheme.value;
    document.documentElement.style.setProperty('--color-dark', themeCss[theme].dark);
    document.documentElement.style.setProperty('--color-light', themeCss[theme].light);
    dataSettingsOverlay.open = false;
});

// Active Book Overlay Elements
dataListItems.addEventListener('click', (event) => {
    const previewId = event.target.closest('.preview')?.dataset.preview;

    if (!previewId) return;

    const selectedBook = books.find((book) => book.id === previewId);

    if (!selectedBook) return;

    const { image, title, author, published, description } = selectedBook;
    dataListBookActive.open = true;
    dataBookSelectedBlur.src = image;
    dataBookSelectedImage.src = image;
    dataBookSelectedTitle.innerText = title;
    dataBookSelectedSubtitle.innerHTML = `${authors[author]} (${(new Date(published)).getFullYear()})`;
    dataBookSelectedDescription.innerText = description;
});

dataListBookClose.addEventListener('click', () => {
    dataListBookActive.open = false;
    dataListBookClose.enabled = false;
});

// Main Book List Content Elements
dataShowMoreButton.addEventListener('click', () => {
    const startIndex = currentPage * BOOKS_PER_PAGE;
    const endIndex = (currentPage + 1) * BOOKS_PER_PAGE;

    if (endIndex <= filteredBooks.length) {
        const fragment = createPreviewsFragment(startIndex, endIndex);
        dataListItems.appendChild(fragment);
        dataShowMoreButton.enabled = true;
        currentPage += 1;
        updateRemainingButton();
    } else {
        dataShowMoreButton.enabled = false;
        dataShowMoreButton.innerText = 'No more books';
    }
});


console.log(data.description.length)


// Overflow Y: A"value" scroll:  potential solution for including the full description