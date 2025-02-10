const hourCont = document.querySelector(".hourCont");
const minuteCont = document.querySelector(".minuteCont");

setInterval(() => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  hourCont.innerHTML = `${hours.toString().padStart(2, "0")}`;
  minuteCont.innerHTML = `${minutes.toString().padStart(2, "0")}`;
  console.log("tick");
}, 1000);
