document.addEventListener("DOMContentLoaded", () => {
  // * TODO = ADD H1 TO HEADER
//grab header element for placement of H1
  let header = document.getElementById('my-header')
  // header.innerHTML = '<h1>Hello Class!</h1>'
  // header.innerText = "<h1>This won't work</h1>"
  let h1 = document.createElement('h1')
  h1.innerText = 'Hello March'
  header.appendChild(h1)



  // * TODO = ADD ITEMS TO COLOR AND NUMBER LISTS WITH CLASS NAME
  function addItems(items, parent, className) {
    items.forEach(item => {
      let li = document.createElement('li');
      li.innerText = item;
      li.setAttribute('class', className)
      parent.appendChild(li)
    })
}
  let colors = ['Black', 'Pastel Black', 'Dark Gray']
  let colorUl = document.getElementById('colors')
  let colorClass = 'color__item'

  addItems(colors, colorUl, colorClass)

  let nums = [38, 15, 46];
  let numUl = document.getElementById('numbers');
  let numClass = 'num__item'

  addItems(nums, numUl, numClass)

});
