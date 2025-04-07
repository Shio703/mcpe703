const hourCont = document.querySelector(".hourCont");
const minuteCont = document.querySelector(".minuteCont");

const clockStarter = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  hourCont.innerHTML = `${hours.toString().padStart(2, "0")}`;
  minuteCont.innerHTML = `${minutes.toString().padStart(2, "0")}`;
};
clockStarter();

setInterval(() => {
  clockStarter();
  console.log("tick");
}, 1000);
