export default class Game {
    constructor(matriz, velocity){
        this.gerador = document.querySelectorAll('.gerador');
        this.pointsHTML = document.querySelector('#points');
        this.clickers = document.querySelectorAll('.clicker');
        this.audio = document.querySelector('.audio')
        this.points = 0;
        this.sheetGreen = null;
        this.sheetRed = null;
        this.sheetYellow = null;
        this.sheetBlue = null;
        this.count = 0;
        this.matriz = matriz;
        this.velocity = velocity
    }    

    startGame(){
        this.sequenceNotes();
        this.detectedTouch();
    } 
    
    sequenceNotes(){
        //o 1º parametro é o tempo que as notas vao surgir (EM SEGUNDOS). 0 2º é o índice da matriz que vai ser tocado
        this.timeoutSheet(this.velocity[0], this.matriz[3]); 
        this.timeoutSheet(this.velocity[1], this.matriz[3]); 
        this.timeoutSheet(this.velocity[2], this.matriz[3]); 
        this.timeoutSheet(this.velocity[3], this.matriz[3]); 
        this.timeoutSheet(this.velocity[4], this.matriz[3]); 
        this.timeoutSheet(this.velocity[5], this.matriz[3]); 
        this.timeoutSheet(this.velocity[6], this.matriz[3]); 
        this.timeoutSheet(this.velocity[7], this.matriz[3]); 
        this.timeoutSheet(this.velocity[8], this.matriz[3]); 
        this.timeoutSheet(this.velocity[9], this.matriz[3]); 
        this.timeoutSheet(this.velocity[10], this.matriz[3]); 
        this.timeoutSheet(this.velocity[11], this.matriz[3]); 
        this.timeoutSheet(this.velocity[12], this.matriz[3]); 
        this.timeoutSheet(this.velocity[13], this.matriz[3]); 
        this.timeoutSheet(this.velocity[14], this.matriz[3]); 
        this.timeoutSheet(this.velocity[15], this.matriz[3]); 
        this.timeoutSheet(this.velocity[16], this.matriz[3]); 
        this.timeoutSheet(this.velocity[17], this.matriz[3]); 
        this.timeoutSheet(this.velocity[18], this.matriz[3]); 

        this.timeoutSheet(this.velocity[19], this.matriz[0]); 
        this.timeoutSheet(this.velocity[20], this.matriz[1]); 
        this.timeoutSheet(this.velocity[21], this.matriz[0]); 
        this.timeoutSheet(this.velocity[22], this.matriz[1]); 
        this.timeoutSheet(this.velocity[23], this.matriz[2]); 
        
        this.timeoutSheet(this.velocity[24], this.matriz[1]); 
        this.timeoutSheet(this.velocity[25], this.matriz[2]); 
        this.timeoutSheet(this.velocity[26], this.matriz[1]); 
        this.timeoutSheet(this.velocity[27], this.matriz[2]); 

        this.timeoutSheet(this.velocity[28], this.matriz[0]); 
        this.timeoutSheet(this.velocity[29], this.matriz[1]); 
        this.timeoutSheet(this.velocity[30], this.matriz[0]); 
        this.timeoutSheet(this.velocity[31], this.matriz[1]); 


        this.timeoutSheet(this.velocity[32], this.matriz[2]); 
        this.timeoutSheet(this.velocity[33], this.matriz[1]); 
        this.timeoutSheet(this.velocity[34], this.matriz[2]); 
        this.timeoutSheet(this.velocity[35], this.matriz[1]); 
        this.timeoutSheet(this.velocity[36], this.matriz[2]); 
        
        this.timeoutSheet(this.velocity[37], this.matriz[0]); 
        this.timeoutSheet(this.velocity[38], this.matriz[1]); 
        this.timeoutSheet(this.velocity[39], this.matriz[0]); 
        this.timeoutSheet(this.velocity[40], this.matriz[1]); 

        this.timeoutSheet(this.velocity[41], this.matriz[2]); 
        this.timeoutSheet(this.velocity[42], this.matriz[1]); 
        this.timeoutSheet(this.velocity[43], this.matriz[2]); 
        this.timeoutSheet(this.velocity[44], this.matriz[1]); 

    }

    detectedTouch(){
        document.addEventListener('keydown' , (e) => {
            

            this.sheetGreen = document.querySelectorAll('.green');
            this.sheetRed = document.querySelectorAll('.red');
            this.sheetYellow = document.querySelectorAll('.yellow');
            this.sheetBlue = document.querySelectorAll('.blue');

            let k = e.key

            k === 'd' || k === 'D' ? this.sistemOfPoints(this.sheetGreen, this.clickers[0]) : false;

            k === 'f' || k == 'F' ? this.sistemOfPoints(this.sheetRed, this.clickers[1]) : false;

            k === 'h' || k === 'H' ? this.sistemOfPoints(this.sheetYellow, this.clickers[2]) : false;
            
            k === 'j' || k === 'J' ? this.sistemOfPoints(this.sheetBlue, this.clickers[3]) : false;

            this.pointsHTML.innerHTML = this.points;
            
        });

        document.addEventListener('keyup' , (e) => {
            let k = e.key

            k === 'd' || k === 'D' ? this.clickers[0].removeAttribute('id') : false;

            k === 'f' || k == 'F' ?  this.clickers[1].removeAttribute('id') : false;

            k === 'h' || k === 'H' ? this.clickers[2].removeAttribute('id') : false;
            
            k === 'j' || k === 'J' ? this.clickers[3].removeAttribute('id') : false;
        })
    }

    sistemOfPoints(sheetColor, clicker){
        clicker.setAttribute('id', 'active')

        if(sheetColor[0].style.top >= '87%' && sheetColor[0].style.top <= '93%'){
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

