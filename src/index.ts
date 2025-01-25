const interactiveDiv = document.getElementById('interactive-div')!;
const itemList = document.getElementById('item-list')!;
const generateHtmlButton = document.getElementById('generate-html-button')!;
const generatedHtmlTextarea = document.getElementById('generated-html')! as HTMLTextAreaElement;

var buttonData = [
  'Connect', 'Disconnect', 'Reset','Available', 'Preparing',  'Charging', 
  'Finishing', 'Reserved', 'Unavailable', 'Faulted', 'Stop Transaction', 
  'Plug`n`Charge', 'EmergencyButton'
];

buttonData.forEach((text, index) => {
  // Add button elements to the interactive div
  const button = document.createElement('button');
  button.textContent = text;
  button.className = 'interactive-button';
  const buttonsContainer = document.getElementById('buttons-container');
  if (buttonsContainer) {
    buttonsContainer.appendChild(button);
  } else {
    console.error('Buttons container not found');
  }

  // Add corresponding list item with a checkbox
  const listItem = document.createElement('li');
  listItem.style.display = 'flex';
  listItem.style.alignItems = 'center';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = `item-checkbox-${index}`;
  checkbox.addEventListener('change', (event) => {
    button.style.display = (event.target as HTMLInputElement).checked ? 'inline-block' : 'none';
  });

  const label = document.createElement('label');
  label.htmlFor = `item-checkbox-${index}`;
  label.textContent = text;

  listItem.appendChild(checkbox);
  listItem.appendChild(label);
  itemList.appendChild(listItem);

  // Hide button initially
  button.style.display = 'none';
});

function getElementHTML(selector: string) {
  var element = document.querySelector(selector);
  if (element) {
      return element.outerHTML;
  }
  else {
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
}
else {
    console.log('Элемент не найден.');
}
generateHtmlButton.addEventListener('click', () => {
    if (interactiveDiv) {
      const htmlContent = interactiveDiv.outerHTML;
      generatedHtmlTextarea.value = htmlContent;
    } else {
      console.error('Interactive div not found');
    }
  });