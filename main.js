/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1,
utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

var eseRcizio = new Vue({
    el:'#container',
    data: {
        message:'Questo nuovo  framework mi sta piacendo per ora',
        immagine:'https://unsplash.it/300/300?image=',
        miaclss:'red',
        testorand :`
        <span>prova per inserire dell'HTML:</span>
        <h1>ci sono riuscito  ecco i due testi</h1>
        
        `
    },
    methods:{
       cambiaImg: function(){
        this.immagine ="https://unsplash.it/g/640/425"
        } 
    } 
});


