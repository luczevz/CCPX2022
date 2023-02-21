const a1 = document.getElementById("a1");
const a2 = document.getElementById("a2");
const a3 = document.getElementById("a3");
const a4 = document.getElementById("a4");

const datalancamento = "21 January 2024";

function countDown(){

    const datalance = new Date(datalancamento);
    const hoje = new Date();



    const segTotal = (datalance - hoje)/1000;

    const dias = Math.floor(segTotal / 3600 / 24);
    const horas = Math.floor((segTotal/3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    a1.innerHTML = ` <strong>${dias}D</strong>`;
    a2.innerHTML = ` <strong>${horas}H</strong>`;
    a3.innerHTML = ` <strong>${minutos}M</strong>`;
    a4.innerHTML = ` <strong>${segundos}S</strong>`;
}

countDown();

setInterval(countDown, 1000);





