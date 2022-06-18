const url =
  "http://api.openweathermap.org/data/2.5/weather?q=London,uk&lang=tr&APPID=11fa29b425d7213d75c11dac4e0021c9&units=metric";
const kutu = document.getElementById("kutu");
const input = document.getSelection();

async function havadurumu() {
    const respons = await fetch(url);
    const responsjs = await respons.json();
    const imgicon = await responsjs.weather[0].icon;
    const imgurl = `http://openweathermap.org/img/wn/${imgicon}@2x.png`;
    const imgurlres = await fetch(imgurl);


  kutu.innerHTML = `
          <div class="card mt-5 text-center" style="width: 20rem">
          <div class="card-body">
            <p class="card-title h1 mt-3">${responsjs.name}<sup class="ülke">${responsjs.sys.country}</sup></p>
            <p class="card-text mt-3 h2 sıcaklık">
              35<sup class="derece">°C</sup>
            </p>
            <img
              src="${imgurlres.url}"
              class="card-img-top"
              alt="..."
            />
            <p class="card-text fs-1">${responsjs.weather[0].description}</p>
          </div>  
  `;
  console.log(responsjs);
}

havadurumu();
