window.onload = () => {
  document.querySelectorAll('[url][fn]').forEach((element) => {
    const attr = element.attributes;
    element[attr.fn.value] = () => {
      fetch(attr.url.value)
        .then((response) => response.json())
        .then((data) => {
          Object.entries(data).forEach((ele) => {
            Object.entries(ele[1]).forEach((chan) => {
              document.querySelector(ele[0])[chan[0]] = chan[1];
            });
          });
        })
    };
  });
};
