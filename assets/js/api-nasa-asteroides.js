const API_KEY = "KGNIFQJ3PRYtndGGK4hHgTqxfvHYh3zjByrWYgh5";
let pagina = "https://api.nasa.gov/neo/rest/v1/feed?";

async function obtenerAsteroidesActuales()
{
    var hoy = new Date().toISOString().substring(0,10);
    let data = await fetch(pagina +
        "api_key=" + API_KEY +
        "&start_date=" + hoy +
        "&end_date=" + hoy)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}