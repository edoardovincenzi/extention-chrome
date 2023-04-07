let oldBackground = '';
document.addEventListener('mouseover', (event) => {
  const item = event.target;
  oldBackground = item.style.backgroundColor;
  item.style.backgroundColor = 'rgba(255, 205, 5, 0.24)';
  const { top: topToPage, left: leftToPage } = item.getBoundingClientRect();
  const existID = document.getElementById('test-extention');
  if (!existID) {
    const el = document.createElement('div');
    setStyleToElement(el, 'position', 'absolute');
    setStyleToElement(el, 'backgroundColor', 'orange');
    setStyleToElement(el, 'top', '20px');
    setStyleToElement(el, 'left', '20px');
    setStyleToElement(el, 'zIndex', 999);
    createUpdateVisualCoordinatesTopToElement(topToPage, leftToPage);
    createUpdateVisualCoordinatesLeftToElement(topToPage, leftToPage);
    el.id = 'test-extention';
    el.textContent =
      'item.left ' + leftToPage + '___' + 'item.top ' + topToPage;
    document.body.appendChild(el);
  } else {
    existID.textContent =
      'item.left ' + leftToPage + '___' + 'item.top ' + topToPage;
    createUpdateVisualCoordinatesTopToElement(topToPage, leftToPage);
    createUpdateVisualCoordinatesLeftToElement(topToPage, leftToPage);
  }
});

document.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = oldBackground;
});

const setStyleToElement = (element, property, value) => {
  element.style[property] = value;
  return element;
};

const createUpdateVisualCoordinatesTopToElement = (top, left) => {
  top = `${top}px`;
  left = `${left}px`;
  const existElement = document.getElementById('coordinate-top');
  if (!existElement) {
    const el = document.createElement('div');
    const p = document.createElement('p');
    setStyleToElement(p, 'backgroundColor', 'red');
    setStyleToElement(p, 'position', 'absolute');
    setStyleToElement(p, 'bottom', '0px');
    setStyleToElement(p, 'left', '0px');
    setStyleToElement(p, 'width', 'max-content');
    p.textContent = `top: ${top}`;
    setStyleToElement(el, 'position', 'absolute');
    setStyleToElement(el, 'display', 'relative');
    setStyleToElement(el, 'width', '2px');
    setStyleToElement(el, 'height', top);
    setStyleToElement(el, 'top', '0px');
    setStyleToElement(el, 'left', left);
    setStyleToElement(el, 'backgroundColor', 'red');
    setStyleToElement(el, 'zIndex', 999);
    el.id = 'coordinate-top';
    el.appendChild(p);
    document.body.appendChild(el);
  } else {
    existElement.children[0].textContent = `top: ${top}`;
    setStyleToElement(existElement, 'height', top);
    setStyleToElement(existElement, 'left', left);
  }
};
const createUpdateVisualCoordinatesLeftToElement = (top, left) => {
  top = `${top}px`;
  left = `${left}px`;
  const existElement = document.getElementById('coordinate-left');
  if (!existElement) {
    const el = document.createElement('div');
    const p = document.createElement('p');
    setStyleToElement(p, 'backgroundColor', 'red');
    setStyleToElement(p, 'position', 'absolute');
    setStyleToElement(p, 'bottom', '0px');
    setStyleToElement(p, 'left', '0px');
    setStyleToElement(p, 'width', 'max-content');
    p.textContent = `left: ${left}`;
    setStyleToElement(el, 'position', 'absolute');
    setStyleToElement(el, 'display', 'relative');
    setStyleToElement(el, 'width', left);
    setStyleToElement(el, 'height', '2px');
    setStyleToElement(el, 'top', top);
    setStyleToElement(el, 'left', '0px');
    setStyleToElement(el, 'backgroundColor', 'red');
    setStyleToElement(el, 'zIndex', 999);
    el.id = 'coordinate-left';
    el.appendChild(p);
    document.body.appendChild(el);
  } else {
    existElement.children[0].textContent = `left: ${left}`;
    setStyleToElement(existElement, 'width', left);
    setStyleToElement(existElement, 'top', top);
  }
};
