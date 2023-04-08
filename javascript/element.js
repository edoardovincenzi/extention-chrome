const labelElement = (text) => {
  const paragraph = document.createElement('p');
  paragraph.classList.add('labelLine');
  paragraph.textContent = text;
  return paragraph;
};

const lineLeftElement = (top, left) => {
  let lineLeft = document.getElementById('coordinate-left');
  if (!lineLeft) {
    lineLeft = document.createElement('div');
    lineLeft.classList.add('lineLeft');
    lineLeft.id = 'coordinate-left';
  }
  setStyleToElement(lineLeft, 'width', left);
  setStyleToElement(lineLeft, 'top', top);
  return lineLeft;
};

const lineTopElement = (top, left) => {
  let lineTop = document.getElementById('coordinate-top');
  if (!lineTop) {
    lineTop = document.createElement('div');
    lineTop.classList.add('lineTop');
    lineTop.id = 'coordinate-top';
  }
  setStyleToElement(lineTop, 'height', top);
  setStyleToElement(lineTop, 'left', left);
  return lineTop;
};

const createSummaryElement = () => {
  if (!document.getElementById('summary-container')) {
    const summaryContainer = document.createElement('div');
    summaryContainer.classList.add('summaryContainer');
    summaryContainer.id = 'summary-container';
    summaryContainer.textContent = 'item.left ';
    document.body.appendChild(summaryContainer);
  }
};

const createPickColor = (top, left, item) => {
  let pickColor = document.getElementById('pick-color');
  if (!pickColor) {
    pickColor = document.createElement('div');
    pickColor.classList.add('pick_color');
    pickColor.id = 'pick-color';
    document.body.appendChild(pickColor);
  }
  const style = getComputedStyle(item);
  pickColor.textContent = `color: ${style.color} </br> backgroundColor: ${style.backgroundColor}`;
  setStyleToElement(pickColor, 'top', top);
  setStyleToElement(pickColor, 'left', left);
};

const setStyleToElement = (element, property, value) => {
  element.style[property] = value;
  return element;
};
