//Fetch (ajax) y  peticiones a servicios / apis rest
let url = 'https://disease.sh/v3/covid-19/countries/'; //Definir la variable, origen de los datos
fetch(url) // Solicitud a la url
    .then( response => response.json() ) // se resuleve la promesa y la pasa a json
    .then( data => mostrarData(data) ) //el objeto data lo manda a consola
    .catch( error => console.log(error) ) //si hay un error sera atrapado con la palabra reservada catch

//Capturar datos que necesitamos
const mostrarData = (data) => {
    console.log(data)
    let body = ''
    for (let i = 0; i<data.length; i++){
        body += 
        `
        <tr>
            <td>
              <div class="card mb-3" style="width: 250px; heigth: 100px;">
                <div class="row " >
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}" class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body ">
                      <p class="card-text">${data[i].country}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            <td>
                 <div class="card mb-3" style="width: 250px;">
                <div class="row  ">
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}" class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body">
                      <p class="card-text">${data[i].todayCases}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            <td>
                <div class="card mb-3" style="width: 250px;">
                <div class="row ">
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}" class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body">
                      <p class="card-text">${data[i].country}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            <td>
                 <div class="card mb-3" style="width: 250px;">
                <div class="row ">
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}" class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body">
                      <p class="card-text">${data[i].country}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            <td>
                 <div class="card mb-3" style="width: 250px; ">
                <div class="row ">
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}"class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body">
                      <p class="card-text">${data[i].country}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            <td>
                 <div class="card mb-3" style="width: 250px;">
                <div class="row ">
                    <div class="col-4">
                     <img src="${data[i].countryInfo.flag}" class="img-fluid  rounded-circle ms-3 mt-3 " alt="...">
                    </div>
                   <div class="col-8">
                     <div class="card-body">
                      <p class="card-text">${data[i].country}</p>
                      <p class="card-text"><small class="text-muted">${data[i].cases}</small></p>
                     </div>
                  </div>
                 </div>
                </div>
            </td>
            
         
         `
    }
    document.getElementById('data').innerHTML = body
}

/* <div class="d-flex bd-highlight">
           <div class="p-2 w-100 bd-highlight"><img src="${data[i].countryInfo.flag}" style="width:11%";></div>
           <div class="p-2 flex-shrink-1 bd-highlight">${data[i].country} ${data[i].cases}</div>
         </div> */