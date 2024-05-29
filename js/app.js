const btnStudies = document.getElementById('studies');
const ventanaEmergente = document.querySelector('.ventana_Emergente');

// Tarjetas de Hoobies and Skills
// const front = document.getElementById('front');
// const logo = document.getElementById('infinito');
// const text_mittle = document.querySelector('.items_texto');

// front.addEventListener('mouseover',()=>{
//     logo.style.width='600px';
//     logo.style.transition="1s";
//     logo.style.marginBottom='100px';
    
//     // Styles of Text 
//     logo.style.transition="1s";
//     text_mittle.style.transition="1s";
//     text_mittle.style.marginBottom="140px";
//     console.log("APARECE TEXTO");
//     text_mittle.style.display="block";
    
// })

// front.addEventListener('mouseout',()=>{
//     logo.style.width='60px';
//     // logo.style.transition="1s";
//     logo.style.marginBottom='0';
//     logo.style.transition="1s";
    
//     // Styles of Text
//     text_mittle.style.display="none";
//     console.log("DESAPARECE TEXTO");
// })

// Logica para Aparecer y Desaparecer un Boton
btnStudies.addEventListener('click', ()=>{
    ventanaEmergente.classList.toggle('aparece');
    console.log('Cambio');
});

console.log('Hellooo')