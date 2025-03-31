// script.js
console.log('Hello from external JavaScript!');

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('#myButton');
  if (button) {
    button.addEventListener('click', () => {
      document.body.style.backgroundColor = 'lightblue';
    });
  }
});
