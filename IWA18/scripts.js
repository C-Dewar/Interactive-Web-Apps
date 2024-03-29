import{
        state,
        createOrderData,
        updateDragging,
}from "./data.js";

import{
        createOrderHtml,
        html,
        moveToColumn,
        updateDraggingHtml,

}from "./view.js";

// Import the appropriate variables from the corresponding java script files, view and data respectively.

/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event 
 */

const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath();
    let column = null;

    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area;
            break;
        }
    }

    if (!column) return
    updateDragging({ over: column });
    updateDraggingHtml({ over: column });
};

/**
 * sets the id, column (via recursion) and updateDragging function 
 * @param {Event} event
 */

const handleDragStart = (event) => {
    const {id} = event.target.dataset;
    const {column} = state.orders[id];
    updateDragging({source: id, over: column});
};


/** 
 * fetches tthe id and column data and calls moveToColumn function which is imported from the view.js file
 * to append the selected element to the selected column
 * @param {Event} event
 */

const handleDragEnd = (event) => {
    event.preventDefault(); //Prevents a refresh upon the calling of the function 
    const {source, over} = state.dragging;
    moveToColumn(source,over);
}

/**
* Toggles open attribute to show or hide the "data-help-overlay" dialog element
* @param {Event} event 
*/
const handleHelpToggle = (event) => {
    if(event.target.hasAttribute("data-help")) html.help.overlay.toggleAttribute("open");
    if(event.target.hasAttribute("data-help-cancel")) {
        html.help.overlay.toggleAttribute("open");
        html.other.add.focus();
    }
};
// /**
//  * Toggles open attribute to show or hide the Add Order form
//  *  @param {Event} event
//  */ 
// const handleAddToggle = event => {
//     if(event.target.hasAttribute("data-add-cancel")){
//         html.add.overlay.toggleAttribute("open");
//         html.add.form.reset();
//         html.other.add.focus();
//     }
// };
const handleAddToggle = () => {
    const current = html.add.overlay.open

    if (current) {
        html.add.overlay.open = false
        html.add.form.reset()
    } else {
        html.add.overlay.open = true
        html.add.title.focus()
    }
}

/** 
 * Creates new unique object 
 * (randomly assigned variable name created by uniqueId function in Data.js) and stores the user input
 * information within the "state.orders" object. It then creates an element from the object to display on the page
 * @param {Event} event 
 * */

const handleAddSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { title, table } = Object.fromEntries(formData)
    const newOrder = createOrderData({ title, table, column: 'ordered' })

    state.orders[newOrder.id] = newOrder
    const htmlOrder = createOrderHtml(newOrder)
    html.columns[newOrder.column].appendChild(htmlOrder)

    html.add.form.reset()
    html.add.overlay.open = false;
    html.other.add.focus()
}



/**
 * When an element is clicked, the Edit Order form will open, showing the initial values inside the input fields.
 * Clicking the cancel button will hide the edit order form.
 * @param {Event} event 
 */
const handleEditToggle = (event) => {
    const parentElement = event.target.closest(".order");
    if(parentElement?.matches(".order")){
        html.edit.overlay.open = true;
        const id = parentElement.getAttribute("data-id");
        const {title, table, column} = state.orders[id];
        html.edit.title.value = title;
        html.edit.table.value = table;
        html.edit.column.value = column;
        html.edit.id.setAttribute("data-edit-id", id);
    }
    if(event.target.hasAttribute("data-edit-cancel")){
        html.edit.overlay.open = false;
    }
};


/**
 * Updates the specified object in the state orders object 
 * @param {event} event 
 */
const handleEditSubmit = event => {
    event.preventDefault();
    const id = html.edit.id.getAttribute("data-edit-form");
    const order = state.orders[id];
    console.log(order)       
    order.title = html.edit.title.value;
    order.table = html.edit.table.value;
    order.column = html.edit.column.value;
    order.created = new Date();

    handleEditSubmitReset();
};

// const handleEditSubmitReset = () => {
//     // Update state orders based on the edited data in the HTML form
//     const Id = html.edit.id.getAttribute("data-edit-overlay");
//     if (Id) {
//         state.orders[Id].title = html.edit.title.value;
//         state.orders[Id].table = html.edit.table.value;
//         state.orders[Id].column = html.edit.column.value;
//         state.orders[Id].created = new Date();
//     }

//     // Clear HTML columns
//     Object.values(html.columns).forEach(column => {
//         column.innerHTML = "";
//     });

//     // Rebuild HTML elements based on the updated state orders
//     Object.values(state.orders).forEach(item => {
//         const element = createOrderHtml(item);
//         html.columns[item.column].appendChild(element);
//     });

//     // Reset and hide the edit form
//     html.edit.form.reset();
//     html.edit.overlay.open = false;
// };
const handleEditSubmitReset = () => {
    Object.values(html.columns).forEach(column => {
      column.innerHTML = "";
    });
  
    Object.values(state.orders).forEach(item => {
      const element = createOrderHtml(item);
      html.columns[item.column].appendChild(element);
    });
    html.edit.form.reset();
    html.edit.overlay.removeAttribute("open");
  };

/**
 * Deletes the specified object by targeting its unique id
 * @param {Event} event 
 */
const handleEditDelete = (event) => {
    event.preventDefault();
    const id = html.edit.id.getAttribute("data-edit-id");
    delete state.orders[id];
    handleEditSubmitReset();
        
};




html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleEditDelete);


html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
    htmlColumn.addEventListener('dragend', handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
};


// const handleEditSubmit = (event) => {
//   event.preventDefault();

//   const editingID = html.edit.id.value;
//   state.orders[editingID].title = html.edit.title.value;
//   state.orders[editingID].table = html.edit.table.value;
//   state.orders[editingID].column = html.edit.column.value;

//   const htmlSource = document.querySelector(`[data-id="${editingID}"]`);
//   htmlSource.remove();
//   html.columns[state.orders[editingID].column].appendChild(
//     createOrderHtml(state.orders[editingID])
//   );
//   html.edit.overlay.open = false;
//   html.other.add.focus();
// };