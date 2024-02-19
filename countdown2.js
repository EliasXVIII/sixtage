const days = document.getElementById('diasJi'),
      hours = document.getElementById('horasJi'),
      min =  document.getElementById('minutosJi'),
      sec = document.getElementById('segundosJi');

const primavera = new Date("March 20, 2024 00:00:00").getTime();

setInterval(() => {
    let hoy = new Date().getTime()

    let tiempoRest = primavera - hoy;
    
    // Conversion de ms a dias, horas, min y sec
    
    let dias = Math.floor(tiempoRest/86400000),
        horas = Math.floor(tiempoRest/3600000) % 24,
        minutos = Math.floor(tiempoRest/60000) % 60,
        segundos = Math.floor(tiempoRest/1000) % 60;
    
    // Mostrar en pantalla los resultados 
    days.innerHTML = dias;
    hours.innerHTML = horas;
    min.innerHTML = minutos;
    sec.innerHTML = segundos; 

    if (horas < 10) hours.innerHTML = "0" + horas;
    if (minutos < 10) min.innerHTML = "0" + minutos;
    if (segundos < 10) sec.innerHTML = "0" + segundos;


}, 1000);


// https://youtu.be/inhBH8VhmzM?si=PdRzcVzv64sQabmF




