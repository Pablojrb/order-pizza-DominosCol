const fetch = require('node-fetch');

// Const
// usar emojis en mac cmd + ctrl + espacio 💩

const API_URL = 'https://order.golo01.dominos.com';
const Mercado = 'COLOMBIA';

// funcion para obterner info de tienda según una direccion dada

async function obtenerTiendaCercaDir(CodigoRegion, tipoOrden, NombreCalle, CalleNumero = ' ', Ciudad = ' ') {
  const response = await fetch(`${API_URL}/store-locator-international/locate/store?regionCode=${CodigoRegion}&type=${tipoOrden}&Street=${NombreCalle}${CalleNumero}&StreetName=${NombreCalle}&Name=&StreetNumber=${CalleNumero}&City=${Ciudad}&Region=${CodigoRegion}&streetAddress1=${NombreCalle}${CalleNumero}&g=1`, {
    headers: {
      Accept: 'application/vnd.com.dominos.ecommerce.store-locator.response+json;version=1.2',
      Market: `${Mercado}`,
      'DPZ-Market': `${Mercado}`,
    },
  });

  return response.json();
}

// funcion para obeter info de tienda segun ID tienda
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

// funcion para invocar el menu de una tienda por su ID 🍔
async function obtenerTiendaMenu(storeID) {
  const response = await fetch(`${API_URL}/power/store/${storeID}/menu?lang=es&includeAssets=true`, {
    headers: {
      Accept: 'application/json, text/javascript, */*; q=0.01',
      Market: `${Mercado}`,
      'DPZ-Market': `${Mercado}`,
    },

  });
  return response.json();
}

// funcion para obtener una tienda segun direccion condicional si hace delivery

async function obtenerTiendaCercaDelivery(CodigoRegion, tipoOrden, NombreCalle, CalleNumero = ' ', Ciudad = ' ') {
  const tiendaResultado = await obtenerTiendaCercaDir(
    tipoOrden,
    CodigoRegion,
    NombreCalle,
    CalleNumero,
    Ciudad,
  );
  return tiendaResultado.Stores.find((store) => store.IsDeliveryStore);
}

// llamado de funciones 🤩🤩🤩🤩🤩🤩

// obtenerTiendaCercaDelivery('ANT', 'Delivery', 'Carrera 46', ' ', 'Rionegro')
//   .then((json) => {
//     // console.log(json.Stores[0]);
//     console.log(json);
//   });

// obtenerTiendaCercaDir('ANT', ' ', 'Calle 46 ', ' ', ' Rionegro')
//   .then((json) => {
//     console.log(json.Stores[0]);
//     // console.log(json);
//   });

obtenerTiendaMenu('17198')
  .then((json) => {
    console.log(json);
  });

// obtenerTiendaInfo('17198')
//   .then((infoTienda) => {
//     console.log(infoTienda);
//   });
