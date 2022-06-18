const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Ankara,tr&lang=tr&APPID=11fa29b425d7213d75c11dac4e0021c9&units=metric";

async function havadurumu() {
  const respons = await fetch(url);
  console.log(respons);
}

havadurumu();
