const toggleEgg = document.querySelector('[data-toggle]')

toggleEgg.addEventListener('click', () => {  
  const currentState = toggleEgg.getAttribute('data-toggle') || 'active'

  if (currentState === 'active') {
    toggleEgg.setAttribute('data-toggle', 'inactive')
  } else {
    toggleEgg.setAttribute('data-toggle', 'active')
  }
})