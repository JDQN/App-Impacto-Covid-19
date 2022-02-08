const countries = document.querySelector("#main-country");
/* const cases = document.querySelector(".cases"); */

fetch('https://disease.sh/v3/covid-19/countries')
.then(response => response.json())

.then(data => {
  const limit = 1;
  let datas = data.slice(0, limit)
    datas.map(dat => {
    countries.innerHTML += 
    `
    <section class="main">
      <div id="parteSuperior">
      <select name="paises" id="paises">
        <option value="Afganistan">${data.country}</option>
        <option value="Albania">${data.country}</option>
        <option value="Argeria">${data.country}</option>
        <option value="Andorra"></option>
      </select>

    <p type="">Fecha: Enero/24/2022</p>

   </div>
     <div id="parteMedia">
      <div id="parteMediaIzq">

     <div id="chd1">
      <h3>Total Cases</h3>
      <hr>
      <p>${dat.cases}</p>
      <img src="../../icons/covid-defult.svg">
     </div>

     <div id="chd2">
      <h3>Total Deaths</h3>
      <hr>
      <p>${dat.deaths}</p>
      <img src="../../icons/covid-red.svg">
     </div>

     <div id="chd3">
      <h3>Total Recovered</h3>
      <hr>
      <p>${dat.recovered}</p>
      <img src="../icons/covid-green.svg">
     </div>

     <div id="chd4">
      <h3>Total Active</h3>
      <hr>
      <p>${dat.active}</p>
      <img src="../../icons/covid-blue.svg">
     </div>

     <div id="chd5">
      <h3>New Cases</h3>
      <hr>
      <p>${dat.deaths}</p>
      <img src="../../icons/covid-orange.svg">
     </div>

     <div id="chd6">
      <h3>262922</h3>
      <hr>
      <p>2761</p>
      <div>
      <img src="./images/icons/covid-redark.svg">
      </div>
     </div>



      </div>
       <div>
       <div class="elfsight-app-ffab6842-f1ff-42b9-81af-92c0aa45b611"></div>
      
       </div>
   </div>
  </section>`
  });
});

const total = document.querySelector(".total_case")
  const getData = async()=>{
  const resp = await fetch('https://disease.sh/v3/covid-19/countries')
  const data = await resp.json()
  console.log(data)
  total.innerHTML = `<p>${data.cases}</p>`
}

getData()