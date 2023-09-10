window.onload = () => {
  document.querySelectorAll('[target][url][fn]').forEach((element) => {
    const attr = element.attributes;
    element[attr.fn.value] = () => {
      fetch(attr.url.value)
        .then((response) => response.json())
        .then((data) => {
          document.querySelector(attr.target.value)[data.change] = data.value;
        })
    }
  });
}
