// change nav item to bold when click
const handleNavClick = (e) => {
  const navElement = () => {
    // get element & children
    let elm = document.getElementsByClassName('nav-container')
    let children = elm[0].children
    // change childrent to array
    let array = [...children]
    // reset all class name to original
    array.forEach((element) => {
      element.className = 'nav-link'
    })
    // change to active
    e.className = 'nav-link-active'
  }

  navElement()
}
const handleNavMobile = () => {
  // Open Nav Menu when Clicked
  let elm = document.getElementsByClassName('nav-container')
  elm[0].style.display = 'flex'
  setTimeout(() => {
    elm[0].style.display = 'none'
  }, 3000)
}

const formData = () => {
  let nameInput = document.getElementById('name')
  let companyInput = document.getElementById('company')
  let emailInput = document.getElementById('email')
  let phoneInput = document.getElementById('phone')
  let messageInput = document.getElementById('message')
  alert(
    'Thank you ' +
      nameInput.value +
      'for contacting us.\n' +
      '\nMessage Detail :\n ' +
      '\n Company : ' +
      companyInput.value +
      '\n E-Mail : ' +
      emailInput.value +
      '\n Phone : ' +
      phoneInput.value +
      '\n Message : ' +
      messageInput.value,
  )
  nameInput.value = ''
  companyInput.value = ''
  emailInput.value = ''
  phoneInput.value = ''
  messageInput.value = ''
}
