export default {
    created(){
        obtenerDatosCovid("Mexico")
        .then(function(data){
            document.getElementById("datosPais").innerHTML = data.All.country + ", "+ data.All.location +", " + data.All.continent + ".";
            document.getElementById("habitantes").innerHTML = "" + data.All.population;
            document.getElementById("esperanza").innerHTML = "" + data.All.life_expectancy;
            document.getElementById("contagios").style = "height:" + (100-Math.floor(data.All.confirmed*500/data.All.population)) + "%;";
            document.getElementById("contagios").innerHTML = "" + Math.floor(data.All.confirmed).toLocaleString("es-MX");
            document.getElementById("muertes").style = "height:" + (100-Math.floor(data.All.deaths*500/data.All.population)) + "%;";
            document.getElementById("muertes").innerHTML = "" + Math.floor(data.All.deaths).toLocaleString("es-MX");
        });
    },
    template:
    `
    <div class="card-principal card-whole">
        <h1>Covid-19: México</h1>
        <div class="cont-flex">
            <div class="cont-inline col-6 cont-vert-center">
            <br>
                <div><p id="datosPais"></p></div>
                <div><p>Habitantes:<label id="habitantes"></label></p> </div>
                <div><p>Esperanza de vida(años):<label id="esperanza"></label></p> </div>
            </div>
            <div class="cont-inline col-6 cont-center">
                <div class="bar-field">
                    <div class="bar-container bg-blue"><div class="bar-fill" id="contagios"></div></div>
                    <div class="bar-text">Contagios</div>
                </div>
                <div class="bar-field">
                    <div class="bar-container bg-darkred"><div class="bar-fill" id="muertes"></div></div>
                    <div class="bar-text">Muertes</div>
                </div>
            </div>
        </div>
    </div>
    `
}

