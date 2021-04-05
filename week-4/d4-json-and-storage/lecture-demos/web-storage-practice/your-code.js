document.addEventListener("DOMContentLoaded", () => {
  // TODO:
  // 1. store the values entered for email, first and last in local storage
  // 2. if values exist in local storage, pre populate relevant inputs
  // with those values

  // 1.
  //seeing if there is anything in local storage and grabbing that value from the key
  const firstStoredValue = localStorage.getItem('first')
  const lastStoredValue = localStorage.getItem('last')
  const emailStoredValue = localStorage.getItem('email')

//grabbing the individual input elements
  const firstName = document.getElementById('first')
  const lastName = document.getElementById('last')
  const emailName = document.getElementById('email')

  //assigning the value of the inputs to be any stored values
  firstName.value = firstStoredValue;
  lastName.value = lastStoredValue;
  emailName.value = emailStoredValue;

  //setting some keys
  const firstNameKey = 'first'
  const lastNameKey = 'last'
  const emailKey = 'email'

  // const firstValue = firstName.value
  // const lastValue = lastName.value
  // const emailValue = emailName.value

  //grabbing the form element
  const form = document.getElementById('my-form')


  //using submit event listener to store input values in local storage
  form.addEventListener('submit', event => {
    // event.preventDefault();
    localStorage.setItem(firstNameKey, firstName.value)
    localStorage.setItem(lastNameKey, lastName.value)
    localStorage.setItem(emailKey, email.value)

  })


});
