let searchElem = document.getElementById('headerSearch').onclick = () => {
    document.getElementsByClassName('searchBlock__icon')[0].classList.add("active")
}

document.addEventListener('click', function(e) {
  if (e.target.id != 'headerSearch') {
    document.getElementsByClassName('searchBlock__icon')[0].classList.remove("active")
  }
});