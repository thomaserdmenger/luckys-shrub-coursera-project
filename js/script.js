// repeat animation on banner every 5000ms

const banner = document.querySelector('.banner')

const handleToggle = () => {
  banner.classList.toggle('animation')
}

setInterval(handleToggle, 5000)
