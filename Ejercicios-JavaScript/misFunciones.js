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