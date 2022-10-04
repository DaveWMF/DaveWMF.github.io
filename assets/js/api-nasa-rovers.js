const API_KEY = "KGNIFQJ3PRYtndGGK4hHgTqxfvHYh3zjByrWYgh5";
let pagina = "https://api.nasa.gov/mars-photos/api/v1/rovers/";

async function obtenerRover(nombre)
{
    let data = await fetch(pagina +
        nombre + "/" + 
        "api_key=" + API_KEY +
        "&start_date=" + fecha +
        "&count=" + cuenta)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}