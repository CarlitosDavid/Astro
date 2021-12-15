$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today',
    success:function(data){
    console.log(data);
    }
     });

const sighs = Array("Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Viro", "Libra", "Scorpio", "Sagittarius");
document.getElementById("yourHoro").innerHTML = sighs;