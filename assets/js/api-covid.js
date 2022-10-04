
let paginaCovid = "https://covid-api.mmediagroup.fr/v1/cases?";

async function obtenerDatosCovid(pais)
{
    let data = await fetch(paginaCovid +
        "country=" + pais)
    .then((response) => response.json())
    .then((data) => {return data})
    .catch( (error) => console.log(error));
    return data;
}