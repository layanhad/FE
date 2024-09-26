const highlightableElements = document.querySelectorAll('.highlightable');

function addHighlight(event) {
    event.target.classList.add('highlighted');
}
function removeHighlight(event) {
    event.target.classList.remove('highlighted');
}

highlightableElements.forEach(element => {
    element.addEventListener('mouseover', addHighlight);
    element.addEventListener('mouseout', removeHighlight);
});