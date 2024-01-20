console.log("connected")

const resBtn = document.querySelector("#residentsBtn")

const getResidents = (event) =>{ event.preventDefault(); console.log("button clicked")}

resBtn.addEventListener("click", getResidents)