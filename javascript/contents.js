let oldBackground = '';
document.addEventListener('mouseover', (event) => {
  const item = event.target;
  oldBackground = item.style.backgroundColor;
  // item.style.backgroundColor = 'rgba(255, 205, 5, 0.24)';
  const { top, left } = item.getBoundingClientRect();
  const topPagePx = `${top}px`;
  const leftPagePx = `${left}px`;
  createSummaryElement();
  coordinatesTopToElement(topPagePx, leftPagePx);
  coordinatesLeftToElement(topPagePx, leftPagePx);
  createPickColor(topPagePx, leftPagePx, item);
});

document.addEventListener('mouseout', (event) => {
  event.target.style.backgroundColor = oldBackground;
});

const coordinatesTopToElement = (topPagePx, leftPagePx) => {
  const coordinateTopElement = document.getElementById('coordinate-top');
  if (!coordinateTopElement) {
    const paragraph = labelElement(`top: ${topPagePx}`);
    const lineTop = lineTopElement(topPagePx, leftPagePx);
    lineTop.appendChild(paragraph);
    document.body.appendChild(lineTop);
  } else {
    coordinateTopElement.children[0].textContent = `top: ${topPagePx}`;
    setStyleToElement(coordinateTopElement, 'height', topPagePx);
    setStyleToElement(coordinateTopElement, 'left', leftPagePx);
  }
};
const coordinatesLeftToElement = (topPagePx, leftPagePx) => {
  const coordinateLeftElement = document.getElementById('coordinate-left');
  if (!coordinateLeftElement) {
    const paragraph = labelElement(`left: ${leftPagePx}`);
    const lineLeft = lineLeftElement(topPagePx, leftPagePx);
    lineLeft.appendChild(paragraph);
    document.body.appendChild(lineLeft);
  } else {
    coordinateLeftElement.children[0].textContent = `left: ${leftPagePx}`;
    setStyleToElement(coordinateLeftElement, 'width', leftPagePx);
    setStyleToElement(coordinateLeftElement, 'top', topPagePx);
  }
};
