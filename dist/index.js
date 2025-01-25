"use strict";

var interactiveDiv = document.getElementById('interactive-div');
var itemList = document.getElementById('item-list');
var generateHtmlButton = document.getElementById('generate-html-button');
var generatedHtmlTextarea = document.getElementById('generated-html');
var buttonData = ['Connect', 'Disconnect', 'Reset', 'Available', 'Preparing', 'Charging', 'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 'Plug`n`Charge', 'EmergencyButton'];
buttonData.forEach(function (text, index) {
  // Add button elements to the interactive div
  var button = document.createElement('button');
  button.textContent = text;
  button.className = 'interactive-button';
  var buttonsContainer = document.getElementById('buttons-container');
  if (buttonsContainer) {
    buttonsContainer.appendChild(button);
  } else {
    console.error('Buttons container not found');
  }

  // Add corresponding list item with a checkbox
  var listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = "item-checkbox-".concat(index);
  checkbox.addEventListener('change', function (event) {
    button.style.display = event.target.checked ? 'inline-block' : 'none';
  });
  var label = document.createElement('label');
  label.htmlFor = "item-checkbox-".concat(index);
  label.textContent = text;
  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  itemList.appendChild(listItem);

  // Hide button initially
  button.style.display = 'none';
});
function getElementHTML(selector) {
  var element = document.querySelector(selector);
  if (element) {
    return element.outerHTML;
  } else {
    return null;
  }
}
// Generate HTML button click event
var myElementHTML = getElementHTML('#my-element');
if (myElementHTML) {
  // Или, если вы хотите отобразить HTML на странице:
  var preElement = document.createElement('pre');
  preElement.textContent = myElementHTML;
  document.body.appendChild(preElement);
} else {
  console.log('Элемент не найден.');
}
generateHtmlButton.addEventListener('click', function () {
  if (interactiveDiv) {
    var htmlContent = interactiveDiv.outerHTML;
    generatedHtmlTextarea.value = htmlContent;
  } else {
    console.error('Interactive div not found');
  }
});