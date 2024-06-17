"use strict";

const definirCompra = (n)=> {
    let din = prompt(`Dinero de ${n}`);
    if (din >= 0.66 && din < 0.1) return (`${n}: helado de agua`);
    if (din >= 1 && din < 1.6) return (`${n}: helado de crema`);
    if (din >= 1.6 && din < 1.7) return (`${n}: helado de heladix`);
    if (din >= 1.7 && din < 1.8) return (`${n}: helado de heladovich`);
    if (din >= 1.8 && din < 2.9) return (`${n}: helado de helardo`);
    if (din >= 2.9) return (`${n}: helado de cofites o pote de 1/4kg`);
    else return (`${n}: no te alcanza`)
}

console.log(definirCompra(`Kofla`));
console.log(definirCompra(`Pedro`));
console.log(definirCompra(`Roberto`));