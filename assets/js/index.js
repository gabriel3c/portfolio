const projects = [
  {
    img: './assets/images/projects/doguinho.jpg',
    title: 'Projeto Doguinho',
    description: 'Landing page de ONG Fictícia, utilizando Bootstrap',
    link: 'https://gabriel3c.github.io/Landing-Page-Doguinho-Bootstrap/',
  },
  {
    img: './assets/images/projects/pokedex.jpg',
    title: 'Pokedex',
    description: "Consumo de API's, utilizando HTML, CSS e JS",
    link: 'https://gabriel3c.github.io/Pokedex-Consuming-API/',
  },
  {
    img: './assets/images/projects/calc.jpg',
    title: 'Calculadora com bloco de resultados',
    description: 'Projeto utilizando HTML, CSS e JS',
    link: 'https://gabriel3c.github.io/Calculator/',
  },
]

const socials = [
  {
    img: './assets/images/icons/whatsapp.png',
    title: 'Whatsapp',
    description: '(53) 99961-5831',
    link: 'https://api.whatsapp.com/send?1=pt_BR&phone=5553999615831',
  },
  {
    img: './assets/images/icons/linkedin.png',
    title: 'Linkedin',
    description: 'Gabriel Reinhardt',
    link: 'https://www.linkedin.com/in/gabrielhardt/',
  },
  {
    img: './assets/images/icons/github.png',
    title: 'Github',
    description: '/gabriel3c',
    link: 'https://www.github.com/gabriel3c',
  },
  {
    img: './assets/images/icons/gmail.png',
    title: 'Email',
    description: 'gabrielmreinhardt<br>@gmail.com',
    link: 'mailto:gabrielmreinhardt@gmail.com',
  },
]

// lista de projetos

//lista socials

const mobileMenu = () => {
  const menuNav = document.getElementById('menu')
  menuNav.classList.toggle('active')
  console.log(menuNav.classList)
}

const closeMenu = e => {
  console.log('chamei o close')
  const menuNav = document.getElementById('menu')
  menuNav.classList.remove('active')
}

window.onload = () => {
  showProjects(projects)
  showSocials(socials)

  //botao menu responsivo hamburguer
  const btn = document.getElementById('btn-mobile')
  btn.addEventListener('click', mobileMenu)

  const navItems = [...document.getElementsByClassName('nav-items')]
  navItems.forEach(item => item.addEventListener('click', closeMenu))
}
