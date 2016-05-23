function getDOMNode (id) {
  return document.getElementById(id);
}

const projectsHtml = app.templates.projects;

getDOMNode('projects-details').innerHTML = projectsHtml(projects);


const socialHtml = app.templates.social;

getDOMNode('social').innerHTML = socialHtml(social);

getDOMNode('blog-details').innerHTML = projectsHtml(blogs);

function lazyload (elem) {
  const lazyLoadImage = elem.getAttribute('data-background');
  const img = new Image();
  img.src = lazyLoadImage;
  img.onload = function () {
    elem.style.backgroundImage = `url(${lazyLoadImage})`;
  }
}

const lazyLoadElems = document.querySelectorAll('[data-background]');

for(let i = 0 ; i<lazyLoadElems.length; i++){
  lazyload(lazyLoadElems[i])
}
