
const calcularDistanciaEntreDosCoordenadas = (lat1, lon1, lat2, lon2) => {
    // Convertir todas las coordenadas a radianes
    lat1 = gradosARadianes(lat1);
    lon1 = gradosARadianes(lon1);
    lat2 = gradosARadianes(lat2);
    lon2 = gradosARadianes(lon2);
    // Aplicar fórmula
    const RADIO_TIERRA_EN_KILOMETROS = 6371;
    let diferenciaEntreLongitudes = (lon2 - lon1);
    let diferenciaEntreLatitudes = (lat2 - lat1);
    let a = Math.pow(Math.sin(diferenciaEntreLatitudes / 2.0), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(diferenciaEntreLongitudes / 2.0), 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return RADIO_TIERRA_EN_KILOMETROS * c;
};

const gradosARadianes = (grados) => {
    return grados * Math.PI / 180;
};
//PUNTO A  
//19.2861685, -99.6598302    
const A = {
    latitud: 19.492122446671466,
    longitud: -99.13361906026496,
};
// PUNTO B 
// 19.294261, -99.7012547     
const B = {
    latitud: 19.405477552627655,
    longitud: -99.09982168910295,
};
const distanciaEnKilometros = calcularDistanciaEntreDosCoordenadas(A.latitud, A.longitud, B.latitud, B.longitud);

//Calcular tiempo.

    let distancia; 
    let velocidad;
    let tiempo;
    
        distancia = (distanciaEnKilometros)*1000;
        velocidad = (15*1000)/3600; //15 valor de prueba: velocidad.
        tiempo = Math.round((distancia/velocidad)/60);