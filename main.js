const colors = document.querySelectorAll('ul.palette_choice_color > li');
const mainColor = document.querySelector('#main_color');
const lightColor = document.querySelector('#light_color');
const darkColor = document.querySelector('#dark_color');
const colorCode = document.querySelectorAll('.color_code');

for (const selectColor of colors) {
  selectColor.addEventListener('click', (event) => {
    if (colorCode[0].innerText === event.target.dataset.primary) {
      colorCode[0].innerText = '';
      colorCode[1].innerText = '';
      colorCode[2].innerText = '';
      mainColor.style.backgroundColor = '#ffffff';
      lightColor.style.backgroundColor = '#ffffff';
      darkColor.style.backgroundColor = '#ffffff';
    } else {
      mainColor.style.backgroundColor = event.target.dataset.primary;
      colorCode[0].innerText = event.target.dataset.primary;
      lightColor.style.backgroundColor = event.target.dataset.light;
      colorCode[1].innerText = event.target.dataset.light;
      darkColor.style.backgroundColor = event.target.dataset.dark;
      colorCode[2].innerText = event.target.dataset.dark;
    }
  });
};
