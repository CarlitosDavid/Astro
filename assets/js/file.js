import { HoroscopesAPI } from 'horoscopes-api'; 
 
let today = new Date();
let aries = HoroscopesApi.horoscope('aries', today);
console.log(aries); 