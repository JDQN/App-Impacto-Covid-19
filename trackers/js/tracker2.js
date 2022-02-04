
//Fetch (ajax) y  peticiones a servicios / apis rest
let url = 'https://disease.sh/v3/covid-19/countries'; //Definir la variable, origen de los datos
fetch(url) // Solicitud a la url
    .then( response => response.json() ) // se resuleve la promesa y la pasa a json
    .then( data => mostrarData(data) ) //el objeto data lo manda a consola
    .catch( error => console.log(error) ) //si hay un error sera atrapado con la palabra reservada catch

//Capturar datos que necesitamos
const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += `<tr>
                    <td>${data[i].flag}</td>
                    <td>${data[i].country}</td>
                    <td>${data[i].cases}</td>
                    <td>${data[i].todayCases}</td>
                    <td>${data[i].deaths}</td>
                    <td>${data[i].recovered}</td>
                    <td>${data[i].active}</td>
                    <td>${data[i].critical}</td>
                    <td>${data[i].tests}</td>
                 </tr>`
    }
    document.getElementById('data').innerHTML = body
}