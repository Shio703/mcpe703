const timeCont = document.querySelector(".timeCont");

setInterval(() => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  timeCont.innerHTML =
    `${hours.toString().padStart(2, "0")}` +
    ":" +
    `${minutes.toString().padStart(2, "0")}`;
  console.log("tick");
}, 1000);
