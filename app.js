const mostrar = document.querySelector(".historia");
const transfondo = `Tres chicos de 23 años entran a una heladería a comprar un helado, pero hay un problema. Los precios no están al lado de cada estante con su respectivo helado. Ellos quieren comprar el helado más caro que pueden con el dinero que tienen.`;
mostrar.textContent = transfondo;

//Dinero
let Kofla = 3;
let Pedro = 1.7;
let Roberto = 1.5;

// Precios de los helados
const helados = {
    vasitoVainilla: `Vasito de helado de vainilla a $0.99`,
    vasitoNataYFresa: `Vasito de helado nata y fresa a $0.99`,
    vasitoVainillaYChocolate: `Vasito de helado vainilla y chocolate a $0.99`,
    vasitoTurron: `Vasito de helado turrón a $0.99`,
    conosLimon: `Cono de limón a $1.99`,
    conosNata: `Cono de nata a $1.99`,
    conosCacao: `Cono de Cacao a $1.99`,
    conosNataFresa: `Cono de Nata Fresa a $1.99`,
    bombomPinkStar: `Bombón pink star a $2.59`
};

const formularioKofla = document.getElementById("datosKofla");
formularioKofla.addEventListener('submit', function(event) {
    event.preventDefault();

    const dinero = parseFloat(document.getElementById("dineroKofla").value);
    const respuesta = document.getElementById("respuestaKofla");

    if (dinero >= 0.99 && dinero <= 1.98) {
        let vuelto = dinero - 0.99;
        let contesta = `Heladero: - Tenemos un ${helados.vasitoVainilla}, ${helados.vasitoNataYFresa}, ${helados.vasitoVainillaYChocolate} o un ${helados.vasitoTurron}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 1.99 && dinero <= 2.58) {
        let vuelto = dinero - 1.99;
        let contesta = `Heladero: - Bueno Kofla podes comprarte un ${helados.conosLimon}, ${helados.conosNata}, ${helados.conosCacao} o un ${helados.conosNataFresa}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 2.59 ) {
        let vuelto = dinero -2.59;
        let contesta = `Heladero: - Estimado Kofla le alcanza para comprarse el ${helados.bombomPinkStar}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else {
        let contesta = `Heladero: - No te alcanza pará un helado Kofla.`;
        respuesta.textContent = contesta;
    }
});

const formularioPedro = document.getElementById("datosPedro");
formularioPedro.addEventListener('submit', function(event) {
    event.preventDefault();

    const dinero = parseFloat(document.getElementById("dineroPedro").value);
    const respuesta = document.getElementById("respuestaPedro");

    if (dinero >= 0.99 && dinero <= 1.98) {
        let vuelto = dinero - 0.99;
        let contesta = `Heladero: - Tenemos un ${helados.vasitoVainilla}, ${helados.vasitoNataYFresa}, ${helados.vasitoVainillaYChocolate} o un ${helados.vasitoTurron}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 1.99 && dinero <= 2.58) {
        let vuelto = dinero - 1.99;
        let contesta = `Heladero: - Bueno Pedro podes comprarte un ${helados.conosLimon}, ${helados.conosNata}, ${helados.conosCacao} o un ${helados.conosNataFresa}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 2.59 ) {
        let vuelto = dinero - 2.59;
        let contesta = `Heladero: - Estimado Pedro le alcanza para comprarse el ${helados.bombomPinkStar}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else {
        let contesta = `Heladero: - No te alcanza pará un helado Pedro.`;
        respuesta.textContent = contesta;
    }
});

const formulario03 = document.getElementById("datosRoberto");
formulario03.addEventListener('submit', function(event) {
    event.preventDefault();

    const dinero = parseFloat(document.getElementById("dineroRoberto").value);
    const respuesta = document.getElementById("respuestaRoberto");

    if (dinero >= 0.99 && dinero <= 1.98) {
        let vuelto = dinero - 0.99;
        let contesta = `Heladero: - Tenemos un ${helados.vasitoVainilla}, ${helados.vasitoNataYFresa}, ${helados.vasitoVainillaYChocolate} o un ${helados.vasitoTurron}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 1.99 && dinero <= 2.58) {
        let vuelto = dinero - 1.99;
        let contesta = `Heladero: - Bueno Roberto podes comprarte un ${helados.conosLimon}, ${helados.conosNata}, ${helados.conosCacao} o un ${helados.conosNataFresa}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else if (dinero >= 2.59 ) {
        let vuelto = dinero - 2.59;
        let contesta = `Heladero: - Estimado Roberto le alcanza para comprarse el ${helados.bombomPinkStar}. Tú vuelto es de $${vuelto.toFixed(2)}`;
        respuesta.textContent = contesta;
    } else {
        let contesta = `Heladero: - No te alcanza pará un helado Roberto.`;
        respuesta.textContent = contesta;
    }
});