var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 100) {
    nav.classList.add('navbar-light', 'bg-dark', 'shadow');
  } else {
    nav.classList.remove('bg-light',  'bg-dark', 'shadow');
  }
});


const counters = document.querySelectorAll('.counter');

for(let n of counters) {
  const updateCount = () => {
    const target = + n.getAttribute('data-target');
    const count = + n.innerText;
    const speed = 1000; 
    const inc = target / speed; 
    if(count < target) {
      n.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1);
    } else {
      n.innerText = target;
    }
  }
  updateCount();
}