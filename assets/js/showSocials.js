const showSocials = socialsList => {
  socialsList.forEach(({ img, title, description, link }) => {
    const icon = `<img src=${img} alt="" class="icon">`
    const name = `<p class="redes-title">${title}</p>`
    const value = `<p class="redes-value">${description}</p>`

    const socialBox = `<div class='redes-box'> ${icon} ${name} ${value} </div>`

    const socialLink = document.createElement('a')
    socialLink.setAttribute('href', `${link}`)
    socialLink.setAttribute('target', `blank`)
    socialLink.innerHTML = socialBox

    document.querySelector('#redes-list').appendChild(socialLink)
  })
}
