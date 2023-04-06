// document
//   .querySelectorAll('div')
//   .forEach((item) => (item.style.backgroundColor = 'white'));
let oldBorder = '';
document.addEventListener('mouseover', (event) => {
  oldBackground = event.target.style.border;
  event.target.style.border = '2px solid orange';
});
document.addEventListener('mouseout', (event) => {
  event.target.style.border = oldBorder;
  console.log(oldBorder);
});
