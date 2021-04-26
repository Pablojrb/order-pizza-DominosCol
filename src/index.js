const fetch = require('node-fetch');

// const orderTypes = {
//   Delivery: 'Delivery',

// };
async function obtenerTiendaCercaDir(CodigoRegion, NombreCalle, CalleNumero, Ciudad) {
  const response = await fetch(`https://order.golo01.dominos.com/store-locator-international/locate/store?regionCode=${CodigoRegion}&type=Delivery&Street=${NombreCalle}%${CalleNumero}&StreetName=${NombreCalle}&Name=&StreetNumber=${CalleNumero}&StreetAddress2=&StreetField1=&StreetField2=&StreetRange=&PlaceType=&Type=Delivery&AddressLine1=&AddressLine2=&AddressLine3=&AddressLine4=&UnitNumber=&UnitType=House&PropertyType=&PropertyNumber=&Neighborhood=&SubNeighborhood=&City=${Ciudad}&Region=${CodigoRegion}&PostalCode=&DeliveryInstructions=&CampusID=&BuildingID=&IsDefault=false&UpdateTime=&Coordinates=%5Bobject%20Object%5D&SectorName=&streetAddress1=${NombreCalle}%${CalleNumero}&AddressType=House&g=1`, {
    credentials: 'include',
    headers: {
      Accept: 'application/vnd.com.dominos.ecommerce.store-locator.response+json;version=1.2',
      'Accept-Language': 'es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3',
      Market: 'COLOMBIA',
      'DPZ-Language': 'es',
      'DPZ-Market': 'COLOMBIA',
      'X-DPZ-D': '8922a655-0193-4e87-a56a-dcdfec791b4e',
    },

  });
  const json = await response.json();
  console.log(json);
}
obtenerTiendaCercaDir('MAG','Carrera 17 27 ','2 ','Rodadero');
