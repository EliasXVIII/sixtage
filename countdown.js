const tiempoRestante = deadline => {

    let tiempoActual = new Date(),

        tiempoFaltante = (new Date(deadline) - tiempoActual + 1000) /1000,

        segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2),
        minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2),
        horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2),
        diasFaltantes = Math.floor(tiempoFaltante / (3600 * 24))

    return{
        tiempoFaltante,
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes
    }
};

const  cuentaRegresiva = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const actualizacionTiempo = setInterval( () => {
        let t = tiempoRestante(deadline);
        el.innerHTML = `${t.diasFaltantes}días:${t.horasFaltantes}horas:${t.minutosFaltantes}minutos:${t.segundosFaltantes}segundos`;

        if (t.tiempoFaltante <= 1) {
            clearInterval(actualizacionTiempo)
            el.innerHTML = finalMessage;
        }
    }, 1000)
};

cuentaRegresiva('Feb 28 2024 09:30:00 GMT+0100', 'contenedorCuentaAtras_JI', 'llego primavera');


// https://youtu.be/ZbF5qomB8XM?si=t2rYyupPUMEehWQZ