// Recuperer info formu //
const formulaire = document.querySelector('form') ;
formulaire.addEventListener ("submit",(event) => {
    event.preventDefault();
});
////////////////

// Mettre info dans le lien //
let boutton = document.getElementById("soumettre") ;
boutton.addEventListener ("click", async() => {
   let abreviation = document.getElementById("abre-utilisateur").value;
   console.log(abreviation)
    
document.getElementById('image').src = 'https://flagsapi.com/'+abreviation+'/flat/64.png';
});



  //  let data = await fetch('https://flagsapi.com/'+abreviation+'/flat/64.png', {
   //   method: 'GET',
   //   mode : 'no-cors' })
   // console.log (data)