window.onload = () => {
  document.querySelectorAll('[swap][url]').forEach((element) => {
    element.onclick = () => {
      fetch(element.getAttribute('url'))
        .then((response) => response.text())
        .then((data) => {
          document.querySelector(element.getAttribute('swap')).innerHTML = data;
        })
    }
  });
}
