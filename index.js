window.onload = () => {
  document.querySelectorAll('[target][url][fn]').forEach((element) => {
    const attr = element.attributes;
    element[attr.fn.value] = () => {
      fetch(attr.url.value)
        .then((response) => response.json())
        .then((data) => {
          data.change.forEach((chan,index) => {
            (typeof(data.target) === "string") ? document.querySelector(data.target)[chan] = data.value[index] : document.querySelector(data.target[index])[chan] = data.value[index];
          }); 
        })
    }
  });
}
