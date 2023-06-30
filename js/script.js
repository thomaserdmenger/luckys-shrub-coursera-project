// repeat animation on banner every 5000ms

const banner = document.querySelector('.banner')

const handleToggle = () => {
  banner.classList.toggle('animation')
}

setInterval(handleToggle, 5000)

// promotion

const promoHeading = document.querySelector('.promo-heading')

const addPromoContent = () => {
  const promoContent = '<p class="promoContent">Get 10 % discount on all Japanese maples</p>'
  promoHeading.insertAdjacentHTML('beforeend', promoContent)
}

const hidePromoContent = e => {
  const promoContent = e.target.querySelector('.promoContent')
  promoHeading.removeChild(promoContent)
}

promoHeading.addEventListener('mouseenter', addPromoContent)
promoHeading.addEventListener('mouseleave', hidePromoContent)
