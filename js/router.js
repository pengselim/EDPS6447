// https://www.w3schools.com/js/js_switch.asp

var view = "view_landing";

switch(view) {
  case "view_landing":
    // code block
        console.log("Show the landing UI view");
    break;
  case "view_forecast":
    // code block
        console.log("Show the forecast UI view");
    break;
  default:
    // code block
        console.log("Error: The requested view is not recognized by the router");
}