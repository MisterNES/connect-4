// using document.querySelector:
// grabbing by className => document.querySelector('.<className>');
// grabbing by ID  => document.querySelector('#<id>');
// grabbing by tagname => document.querySelector('<tagname>');

document.addEventListener("DOMContentLoaded", () => {
  // innerHTML vs innerText
  // let otherHeader = document.getElementById('other-header');
  // otherHeader.innerText = '<h1>Woohoo</h1>';
  // otherHeader.innerHTML = '<h1>Woohoo</h1>';
  //
  // TODO = CAPITALIZE H1 TEXT

  // let h1 = document.querySelector('h1')
  let h1 = document.getElementById('my-header')
  let newText = h1.innerHTML.toUpperCase()
  h1.innerHTML = newText;
  // TODO = CAPITALIZE LABELS

  let labels = document.querySelectorAll('label');
  labels.forEach(label => {
    label.innerHTML = label.innerHTML.toUpperCase();
  })
  // TODO = CAPITALIZE LIST ITEMS

  let items = document.getElementsByTagName('li')
  Array.from(items).forEach(item => {
    item.innerText = item.innerText.toUpperCase();
  })

  let newUL = document.createElement('ul')
  newUL.innerText = '<li>thing1</li> <li>thing2</li>'
  document.body.appendChild(newUL)
});
