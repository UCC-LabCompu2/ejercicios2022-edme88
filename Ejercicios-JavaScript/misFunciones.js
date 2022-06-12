function calcularSuma() {
    let num1, num2;
    num1 = Number(document.getElementById("nums1").value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementById("totalS").innerHTML = num1 + Number(num2);
}

/**
 * Conversión de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param {String} id - Id de los inputs del formulario
 * @param {Number} valor - El valor de los inputs del formulario
 */
function conversionUnidades(id, valor) {
    let metro, pulgada, pie, yarda;

    if(valor.includes(",")){
        valor = valor.replace(",", ".");
    }

    if(isNaN(valor)){
        alert("Se ingreso un valor incorrecto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }else if(id=="metro"){
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }else if(id=="pulgada"){
        pulgada = valor;

    }else if(id=="pie"){
        pie = valor;
    }else if(id=="yarda"){

    }

    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_yarda.value = yarda.toFixed(4);
}


function convertirGR(id) {
    let grad, rad;

    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI;
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar(valorMO) {
    if(valorMO=="val_mostrar"){
        document.getElementById("unDiv").style.display = 'block';
    }else if(valorMO=="val_ocultar"){
        document.getElementById("unDiv").style.display = 'none';
    }
}

function cargarWeb() {
    let cantidad, unidad, urlComp;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#"+cantidad+"#"+unidad;
    window.open(urlComp);
}

function cargarResultado() {
    let cantidad, unidad, urlComp;

    urlComp = window.location.href;
    urlComp = urlComp.split("#");
    console.log(urlComp);

    cantidad = urlComp[1];
    unidad = urlComp[2];

    document.getElementById("dist").value = cantidad + " " + unidad;
}

function guardarLS() {
    let distancia, unidad;

    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("2_web.html");
}

function cargarLS() {
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen, yMax-tamCuadrado-margen, tamCuadrado, tamCuadrado);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#3c91d2";
    ctx.fill();
}

var bandera;
function dibujar(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
    }

}

function borrarCanvas(){
    let canvas = document.getElementById("lienzoDibujo");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function cargarListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousemove", function (event){
        let canvas = document.getElementById("lienzoDibujo");
        let ctx = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;

        canvas.onmousedown = function (){bandera=true};
        canvas.onmouseup = function (){bandera=false};

        if(bandera){
            ctx.fillRect(posX, posY, 5, 5);
        }

    });
}

/**
 * Dibuja un cuadriculado sobre
 * @method dibujarCuadriculado
 * @return {Number} anchoCanvas
 */
function dibujarCuadriculado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;

    //Dibujar Lineas Horizontales
    for(let i=20; i<yMax;){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(xMax, i);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
    }

    //Dibujar Lineas Verticales
    for(let i=20; i<xMax;){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, yMax);
        ctx.strokeStyle = "#1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
    }

    //Ejex
    ctx.beginPath();
    ctx.moveTo(0, yMax/2);
    ctx.lineTo(xMax, yMax/2);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.font="10pt Verdana";
    ctx.fillStyle = "blue";
    ctx.fillText( "Eje X", canvas.width/2, canvas.height/2);
    ctx.closePath();

    //Eje Y
    ctx.beginPath();
    ctx.moveTo(xMax/2, 0);
    ctx.lineTo(xMax/2, yMax);
    ctx.strokeStyle = "#ff0009";
    ctx.stroke();
    ctx.closePath();
}

/**
 * Dibuja un auto en las coordenas que ingreso el usuario
 * @method dibujarAuto
 * @param {Number} posX - Id de los inputs del formulario
 * @param {Number} posY - El valor de los inputs del formulario
 */
function dibujarAuto(posX, posY){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    console.log(posX, posY);

    img.onload = function (){
        ctx.drawImage(img, posX, posY);
        console.log("Se deberia dibujar la imagen");
    }
}

x = 0;
dx = 2;
function animarAuto(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100);
    }

    if(x>canvas.width){
        x = 0;
    }
    x = x+dx;
}