function getDOMNode (id) {
  return document.getElementById(id);
}

const projectsHtml = app.templates.projects;

getDOMNode('projects-details').innerHTML = projectsHtml(projects);


const socialHtml = app.templates.social;

getDOMNode('social').innerHTML = socialHtml(social);

getDOMNode('blog-details').innerHTML = projectsHtml(blogs);
