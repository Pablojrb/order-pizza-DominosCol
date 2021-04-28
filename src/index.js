const fetch = require('node-fetch');

// Const
// usar emojis en mac cmd + ctrl + espacio 💩

const API_URL = 'https://order.golo01.dominos.com';
const Mercado = 'COLOMBIA';

async function obtenerTiendaCercaDir(CodigoRegion, Delivery = 'Delivery', NombreCalle, CalleNumero = ' ', Ciudad = ' ') {
  const response = await fetch(`${API_URL}/store-locator-international/locate/store?regionCode=${CodigoRegion}&type=${Delivery}&Street=${NombreCalle}${CalleNumero}&StreetName=${NombreCalle}&Name=&StreetNumber=${CalleNumero}&City=${Ciudad}&Region=${CodigoRegion}&streetAddress1=${NombreCalle}${CalleNumero}&g=1`, {
    headers: {
      Accept: 'application/vnd.com.dominos.ecommerce.store-locator.response+json;version=1.2',
      Market: `${Mercado}`,
      'DPZ-Market': `${Mercado}`,
    },
  });

  return response.json();
}

async function obtenerTiendaInfo(storeID) {
  const response = await fetch(`${API_URL}/power/store/${storeID}/profile`, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      Market: `${Mercado}`,
      'DPZ-Market': `${Mercado}`,
    },
  });
  return response.json();
}

// obtenerTiendaCercaDir('MAG', ' ', 'Carrera 17 27', '2', 'Rodadero')
//   .then((json) => {
//     console.log(json.Stores[0]);
//   });

obtenerTiendaInfo('17198')
  .then((infoTienda) => {
    console.log(infoTienda);
  });
