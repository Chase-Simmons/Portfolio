const highlight = document.createElement('span');

highlight.classList.add('nav-highlight');
document.body.append(highlight);
highlight.style.transform = `translate(5000px, 27px)`;

export default highlight;
