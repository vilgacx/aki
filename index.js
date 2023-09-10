window.onload = () => {
  document.querySelectorAll('[url][fn]').forEach((element) => {
    const attr = element.attributes;
    element[attr.fn.value] = () => {
      fetch(attr.url.value)
        .then((response) => response.json())
        .then((data) => {
          Object.keys(data).forEach((ele) => {
            Object.entries(data[ele]).forEach((chan) => {
              document.querySelector(ele)[chan[0]] = chan[1];
            });
          });
        })
    };
  });
};
