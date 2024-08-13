export default class Game {
    constructor(matriz){
        this.gerador = document.querySelectorAll('.gerador');
        this.pointsHTML = document.querySelector('#points');
        this.clickers = document.querySelectorAll('.clicker');
        this.points = 0;
        this.sheetGreen = null;
        this.sheetRed = null;
        this.sheetYellow = null;
        this.sheetBlue = null;
        this.count = 0;
        this.matriz = matriz;
    }    

    startGame(){
        this.sequenceNotes();
        this.detectedTouch();
    } 
    
    sequenceNotes(){
        //o 1º parametro é o tempo que as notas vao surgir (EM SEGUNDOS). 0 2º é o índice da matriz que vai ser tocado
        this.timeoutSheet(1, this.matriz[0]); 
        this.timeoutSheet(2, this.matriz[1]); 
        this.timeoutSheet(3, this.matriz[2]); 
        this.timeoutSheet(4, this.matriz[3]); 
        this.timeoutSheet(4.5, this.matriz[4]); 
        this.timeoutSheet(6, this.matriz[5]); 
        this.timeoutSheet(7, this.matriz[6]); 
        this.timeoutSheet(8, this.matriz[8]); 
        this.timeoutSheet(9, this.matriz[9]); 
        this.timeoutSheet(9.5, this.matriz[10]); 
        this.timeoutSheet(10, this.matriz[11]); 
        this.timeoutSheet(10.5, this.matriz[12]); 
        this.timeoutSheet(11, this.matriz[13]); 
        this.timeoutSheet(11.25, this.matriz[14]); 
        this.timeoutSheet(11.5, this.matriz[15]); 
        this.timeoutSheet(12, this.matriz[16]); 
        this.timeoutSheet(12.75, this.matriz[18]); 
        this.timeoutSheet(13, this.matriz[19])
    }

    detectedTouch(){
        document.addEventListener('keydown' , (e) => {

            this.sheetGreen = document.querySelectorAll('.green');
            this.sheetRed = document.querySelectorAll('.red');
            this.sheetYellow = document.querySelectorAll('.yellow');
            this.sheetBlue = document.querySelectorAll('.blue');

            let k = e.key

            k === 'q' || k === 'Q' ? this.sistemOfPoints(this.sheetBlue, this.clickers[0]) : false;

            k === 'w' || k == 'W' ? this.sistemOfPoints(this.sheetRed, this.clickers[1]) : false;

            k === 'e' || k === 'E' ? this.sistemOfPoints(this.sheetYellow, this.clickers[2]) : false;
            
            k === 'r' || k === 'R' ? this.sistemOfPoints(this.sheetBlue, this.clickers[3]) : false;

            this.pointsHTML.innerHTML = this.points;
            
        });

        document.addEventListener('keyup' , (e) => {
            let k = e.key

            k === 'q' || k === 'Q' ? this.clickers[0].removeAttribute('id') : false;

            k === 'w' || k == 'W' ?  this.clickers[1].removeAttribute('id') : false;

            k === 'e' || k === 'E' ? this.clickers[2].removeAttribute('id') : false;
            
            k === 'r' || k === 'R' ? this.clickers[3].removeAttribute('id') : false;
        })
    }

    sistemOfPoints(sheetColor, clicker){
        clicker.setAttribute('id', 'active')

        if(sheetColor[0].style.top >= '87%' && sheetColor[0].style.top <= '97%'){
            sheetColor[0].removeAttribute('class');
            this.points += 1000
        }
        if(sheetColor[0].style.top < '87%'){
            this.points -= 100
        }
    }
    

    timeoutSheet(tempo, sheetPositionArray){
        setTimeout(() => {
            if(sheetPositionArray[0] === 1) this.generatesSheet(0) 

            if(sheetPositionArray[1] === 1) this.generatesSheet(1)
        
            if(sheetPositionArray[2] === 1) this.generatesSheet(2) 
        
            if(sheetPositionArray[3] === 1) this.generatesSheet(3) 
        }, tempo * 1000)
    }
    
    generatesSheet(position){ //o parametro é a posiçao aonde sera adicionado a partitura

        let d = document.createElement('div'); //crio a caixa

        switch(position){ //adiciono a class 'partitura' e uma cor especifica - de acordo com a posiçao - para cada div criada
            case 0:
                d.setAttribute('class', 'partitura green');
            break

            case 1:
                d.setAttribute('class', 'partitura red');
            break

            case 2:
                d.setAttribute('class', 'partitura yellow');
            break

            case 3:
                d.setAttribute('class', 'partitura blue');
            break
        }

        
        this.gravity(d); // adiciono a 'gravidade' na div criada.
        this.addSheetOnGenerator(position, d); //adiciono a div no seu gerador, de acordo com sua posiçao
    }    

    addSheetOnGenerator(position, box){ // 'box' é a partitura gerada        
        this.gerador[position].appendChild(box);
    }

    gravity(partitura, dificulty){ 
        this.intervalgravity(partitura, 10, false) // 1º parametro é a partitura gerada. 2º é a velocidade que as partituras caem. 3º é necessario ser 'true' caso voce vá executar essa funçao novamente.
        this.intervalgravity(partitura, 1, true)
        //MODIFIQUE A GRAVIDADE AQUI...
    }
    
    intervalgravity(box, velocity, disable){ 
        let count = 0;

        let inter = setInterval(() => {
            box.style.top = `${count++}%`; //adiciono % do top a cada velocidade setada.
            if(count >= 100){
                clearInterval(inter);
                this.deleteSheet(box);

                this.points -= 300;
                this.pointsHTML.innerHTML = this.points;
            }
        }, velocity);

        

        disable ? clearInterval(inter) : false; //caso o parametro 'disable' seja true o seiinterval vai parar.
        
    }

    deleteSheet(box) { 
        box.removeAttribute('class')
        box.style.top >= '100%' ? box.style.display = 'none': false;  //adiciono um 'display:none;' na caixa, fazendo assim ela sumir
    } 
}    

