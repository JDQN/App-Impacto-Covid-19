
document.addEventListener("DOMContentLoaded", () => {
    obtenerDatos()
  })
  
  const obtenerDatos = async () => {
      console.log('obteniendo datos')
  
      try {
          const res = await fetch("https://disease.sh/v3/covid-19/countries/");
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
      countries.forEach(item => {
          console.log(item)
  
          const clone = templateCards.cloneNode(true)
          clone.querySelector(".texto-top").textContent = item.cases;
          clone.querySelector(".img-text_top").textContent = item.country;
          // clone.querySelector("img").setAttribute("src", item.countryInfo.flag);
  
  
          fragment.appendChild(clone)
          
      });
  
      Card.appendChild(fragment);
  
  }