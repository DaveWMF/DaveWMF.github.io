const API_KEY = "KGNIFQJ3PRYtndGGK4hHgTqxfvHYh3zjByrWYgh5";
let pagina = "https://api.nasa.gov/planetary/apod?api_key";

function obtenerImagenesPeriodo(fecha, cuenta)
{
    fetch(pagina)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch( (error) => console.log(error));
}

function obtenerImagen(dia)
{
    fetch(pagina +
        "api_key=" + API_KEY +
        "&date=" + dia)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch( (error) => console.log(error));
}

function obtenerImagenDelDia()
{
    fetch(pagina +
        "api_key=" + API_KEY)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch( (error) => console.log(error));
}