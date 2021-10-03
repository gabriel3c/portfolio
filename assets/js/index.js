
const projects = [
    {
        img:'./assets/images/projects/pokedex.jpg',
        title:'Pokedex',
        description: "Consumo de API's, utilizando HTML, CSS e JS", 
        link:'https://www.google.com/'
    },
    {
        img:'./assets/images/projects/calculator.jpg',
        title:'Calculadora com bloco de resultados',
        description: "Projeto utilizando HTML, CSS e JS",
        link:'https://www.youtube.com/'
    }
]

const socials = [
    {
        img:'./assets/images/icons/whatsapp.png',
        title:'Whatsapp',
        description: '(53) 99961-5831', 
        link:'https://api.whatsapp.com/send?1=pt_BR&phone=5553999615831'
    },
    {
        img:'./assets/images/icons/linkedin.png',
        title:'Linkedin',
        description: 'Gabriel Reinhardt', 
        link:'https://www.linkedin.com/in/gabrielhardt/'
    },
    {
        img:'./assets/images/icons/github.png',
        title:'Github',
        description: '/gabriel3c', 
        link:'https://www.github.com/gabriel3c'
    },
    {
        img:'./assets/images/icons/gmail.png',
        title:'Email',
        description: 'gabrielmreinhardt<br>@gmail.com', 
        link:'https://api.whatsapp.com/send?1=pt_BR&phone=5553999615831'
    },
]

// lista de projetos
const showProjects = (projectsList) =>{
    projectsList.forEach(({img, title, description, link}) => {     
        const divWrapImg = `<a href='${link}'><div class='wrap-img'><img class='project-img' src=${img}></div></a>`
        const projectTitle = `<h3 class='project-title'>${title}</h3>`
        const projectDescription = `<p class='project-description'>${description}</p>`

        let divProject = document.createElement('div')
        divProject.setAttribute('class', 'project')
        divProject.innerHTML = divWrapImg + projectTitle + projectDescription

        document.querySelector('#projects-list').appendChild(divProject)
    })
}


//lista socials

const showSocials = (socialsList) => {
    socialsList.forEach(({img, title, description, link}) => {

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

window.onload = () =>{
    showProjects(projects)
    showSocials(socials)
}