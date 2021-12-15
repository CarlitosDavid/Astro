
$('#submit').on('click', function() {
    var date = new Date($('#date-input').val());
    day = date.getDate() + 1;
    month = date.getMonth() + 1;  
    year = date.getFullYear();

    var signis;

 if(month === 3 && day >=21)
  signis="Aries";

  else if(month===4 && day <=19)
  signis="Aries";

   else if(month===4 && day >=20)
  signis="Taurus";

   else if(month===5 && day <=20)
  signis="Taurus";

  else if(month===5 && day <=21)
  signis="Gemini";

  else if(month===6 && day <=20)
  signis="Gemini";

  else if(month===6 && day >=21)
  signis="Cancer";

  else if(month===7 && day <=22)
  signis="Cancer";

  else if(month===7 && day >=23)
  signis="Leo";

  else if(month===8 && day <=22)
  signis="Leo";

  else if(month===8 && day >=23)
  signis="Virgo";

  else if(month===9 && day <=22)
  signis="Virgo";

  else if(month===9 && day >=23)
  signis="Libra";

  else if(month===10 && day <=22)
  signis="Libra";

  else if(month===10 && day >=23)
  signis="Scorpio";

  else if(month===11 && day <=21)
  signis="Scorpio";

  else if(month===11 && day >=22)
  signis="Sagittarius";

  else if(month===12 && day <=21)
  signis="Sagittarius";

  else if(month===12 && day >=22)
  signis="Capricorn";

  else if(month===1 && day <=19)
  signis="Capricorn";

  else if(month===1 && day >=20)
  signis="Aquarius";

  else if(month===2 && day <=18)
  signis="Aquarius";

  else if(month===2 && day >=19)
  signis="Pisces";

  else if(month===3 && day <=20)
  signis="Pisces";
  
    var getgp = document.getElementById('yourHoro');
    signis = "Your Sign is: " + signis;

    getgp.innerHTML = signis;

  
});
  