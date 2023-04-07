const labelElement = (text) => {
  const paragraph = document.createElement('p');
  setStyleToElement(paragraph, 'backgroundColor', 'red');
  setStyleToElement(paragraph, 'position', 'absolute');
  setStyleToElement(paragraph, 'bottom', '0px');
  setStyleToElement(paragraph, 'left', '0px');
  setStyleToElement(paragraph, 'width', 'max-content');
  paragraph.textContent = text;
  return paragraph;
};

const lineLeftElement = (top, left) => {
  let lineLeft = document.getElementById('coordinate-left');
  if (!lineLeft) {
    lineLeft = document.createElement('div');
    setStyleToElement(lineLeft, 'position', 'fixed');
    setStyleToElement(lineLeft, 'display', 'relative');
    setStyleToElement(lineLeft, 'left', '0px');
    setStyleToElement(lineLeft, 'border', '1px dotted red');
    setStyleToElement(lineLeft, 'zIndex', 999);
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
    setStyleToElement(lineTop, 'position', 'fixed');
    setStyleToElement(lineTop, 'display', 'relative');
    setStyleToElement(lineTop, 'border', '1px dotted red');
    setStyleToElement(lineTop, 'top', '0px');
    setStyleToElement(lineTop, 'zIndex', 999);
    lineTop.id = 'coordinate-top';
  }
  setStyleToElement(lineTop, 'height', top);
  setStyleToElement(lineTop, 'left', left);
  return lineTop;
};

const createSummaryElement = () => {
  if (!document.getElementById('summary-container')) {
    const summaryContainer = document.createElement('div');
    setStyleToElement(summaryContainer, 'position', 'fixed');
    setStyleToElement(summaryContainer, 'backgroundColor', 'orange');
    setStyleToElement(summaryContainer, 'bottom', '20px');
    setStyleToElement(summaryContainer, 'right', '20px');
    setStyleToElement(summaryContainer, 'zIndex', 999);
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
    const style = getComputedStyle(item);
    pickColor.textContent = `color: ${style.color} </br> backgroundColor: ${style.backgroundColor}`;
    document.body.appendChild(pickColor);
  }
  setStyleToElement(pickColor, 'top', top);
  setStyleToElement(pickColor, 'left', left);
};

const setStyleToElement = (element, property, value) => {
  element.style[property] = value;
  return element;
};
