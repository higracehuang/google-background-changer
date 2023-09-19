let isLightBlue = false;

function toggleBackgroundColor() {
  if (isLightBlue) {
    document.body.style.backgroundColor = ''; 
  } else {
    document.body.style.backgroundColor = 'lightblue';
  }
  isLightBlue = !isLightBlue;
}

const logo = document.querySelector('img[alt="Google"]');
if (logo) {
  logo.addEventListener('click', toggleBackgroundColor);
}