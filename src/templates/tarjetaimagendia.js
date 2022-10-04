export default {
    created(){
        var today = new Date();
        
        obtenerImagen(today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate())
        .then(function(data){
            document.getElementById("tarjeta-imagen").style = "background-image:url("+data.url+");";
        });
    },
    template:
    `
    <div id="tarjeta-imagen" class="card">
        <a href="imagen.html">
            <h1>Imagen del día</h1>
            <p>Ven y conoce las fotos que la NASA tiene para ti...</p>
        </a>
    </div>
    
    `
}

