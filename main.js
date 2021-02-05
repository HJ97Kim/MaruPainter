const colors = document.querySelectorAll('ul.palette_choice_color > li');
const mainColor = document.querySelector('#main_color');
const lightColor = document.querySelector('#light_color');
const darkColor = document.querySelector('#dark_color');
const colorCode = document.querySelectorAll('.color_code');

for (const selectColor of colors) {
  selectColor.addEventListener('click', (event) => {
    if (colorCode[0].innerText === event.target.dataset.primary) { // 같은 색상 클릭시 초기화
      colorCode[0].innerText = '';
      colorCode[1].innerText = '';
      colorCode[2].innerText = '';
      mainColor.style.backgroundColor = '#ffffff';
      lightColor.style.backgroundColor = '#ffffff';
      darkColor.style.backgroundColor = '#ffffff';
    } else {
      mainColor.style.backgroundColor = event.target.dataset.primary;
      colorCode[0].innerText = event.target.dataset.primary;
      colorCode[0].style.color = changeTextColor(event.target.dataset.primary);
      lightColor.style.backgroundColor = event.target.dataset.light;
      colorCode[1].innerText = event.target.dataset.light;
      colorCode[1].style.color = changeTextColor(event.target.dataset.light);
      darkColor.style.backgroundColor = event.target.dataset.dark;
      colorCode[2].innerText = event.target.dataset.dark;
      colorCode[2].style.color = changeTextColor(event.target.dataset.dark);
    }
  });
};

const changeTextColor = (hexcolor) => {
  hexcolor = hexcolor.replace("#", "");
  console.log(hexcolor);
  const r = parseInt(hexcolor.substr(0,2),16);
  const g = parseInt(hexcolor.substr(2,2),16);
  const b = parseInt(hexcolor.substr(4,2),16);
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  return (yiq >= 128) ? 'black' : 'white'; // 어두우면 white 밝으면 black
}
