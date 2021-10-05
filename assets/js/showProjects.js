const showProjects = projectsList => {
  projectsList.forEach(({ img, title, description, link }) => {
    const divWrapImg = `<a href='${link}' target='blank'><div class='wrap-img'><img class='project-img' src=${img}></div></a>`
    const projectTitle = `<h3 class='project-title'>${title}</h3>`
    const projectDescription = `<p class='project-description'>${description}</p>`

    let divProject = document.createElement('div')
    divProject.setAttribute('class', 'project')
    divProject.innerHTML = divWrapImg + projectTitle + projectDescription

    document.querySelector('#projects-list').appendChild(divProject)
  })
}
