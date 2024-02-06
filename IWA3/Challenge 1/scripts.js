//scripts.js
import { company } from "./configuration.js";
import { year } from "./configuration.js";
//corrected syntax as well as added curly brackets to ensure variables are presented as string values
const message = "© " + company + year;
const footer = document.querySelector("footer");
//used document.querySelector to call the footer and asign the contents of the message constant value to be displayed within it
footer.innerHTML = message;