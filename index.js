const inputElement = document.querySelector("input");
const span = document.querySelector("span");
const p = document.querySelector("p");

const callApi = (e) => {
  console.log("call API ", e.target.value);
  p.innerText = e.target.value;
};
inputElement.addEventListener("input", throttle(callApi, 500));

document.addEventListener("mousemove", () => {
  updateNumber();
});

const updateNumber = throttle(() => {
  span.innerText = ++span.innerText;
}, 500);

function throttle(func, delay = 1000) {
  //   let lastArgs;
  let time = null;
  return (...args) => {
    // lastArgs = args;
    if (time) return;
    time = setTimeout(() => {
      time = null;
      func(...args);
    }, delay);
  };
}
