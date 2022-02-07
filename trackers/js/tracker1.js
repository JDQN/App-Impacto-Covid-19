
document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
  })
  
  const obtenerDatos = async () => {
      console.log('obteniendo datos')
  
      try {
          const res = await fetch("https://disease.sh/v3/covid-19/countries?sort=cases");
          const countries = await res.json()
  
          pintarCards(countries)
      } catch (error) {
          
      }
  }
  
  const pintarCards = countries => { 
    const Card = document.getElementById('card'); 
    const templateCards = document.getElementById('template-card').content; 
    const fragment = document.createDocumentFragment() 
 
    //console.log(data); 
    for (let i = 0; i < 10; i++) { 
        const clone = templateCards.cloneNode(true) 
        clone.querySelector(".texto-top").textContent = countries[i].cases; 
        clone.querySelector(".img-text_top").textContent = countries[i].country; 
        let flag = countries[i].countryInfo.flag; 
        clone.querySelector(".img-bandera").setAttribute("src", flag); 
        fragment.appendChild(clone) 
    } 
    Card.appendChild(fragment); 
}
  
