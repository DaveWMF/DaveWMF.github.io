const API_KEY = "KGNIFQJ3PRYtndGGK4hHgTqxfvHYh3zjByrWYgh5";
let pagina = "https://api.nasa.gov/planetary/apod?";

async function obtenerImagenesPeriodo(fecha, cuenta)
{
    let data = await fetch(pagina +
        "api_key=" + API_KEY +
        "&start_date=" + fecha +
        "&count=" + cuenta)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}

async function obtenerImagen(dia)
{
    let data = await fetch(pagina +
        "api_key=" + API_KEY +
        "&date=" + dia)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}