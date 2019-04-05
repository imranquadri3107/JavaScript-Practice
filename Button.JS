// Working with Button

function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     addClickFunctionality(button, i);
     body.appendChild(button);
   }
}
 
createButtons();

function addClickFunctionality(button, num){
  button.onclick = function() {
          alert('This is button ' + num);
     };
}
