export default class Game {
    constructor(matriz, time, music){
        this.game = document.querySelector('.game');
        this.gerador = document.querySelectorAll('.gerador');
        this.pointsHTML = document.querySelector('#points');
        this.clickers = document.querySelectorAll('.clicker');
        this.partituras = document.querySelectorAll('.partitura');
        this.audio = document.querySelector('#song');
        this.sheetGreen = null;
        this.sheetRed = null;
        this.sheetYellow = null;
        this.sheetBlue = null;
        this.points = 0;
        this.count = 0;
        this.matriz = matriz;
        this.time = time;
        this.music = music;
    }  
    
    startGame(){
        this.choiceMusic(this.music);
        this.sequenceNotes(this.matriz);
        this.detectedTouch();
        this.analyzeSheets();
    } 
    
    choiceMusic(music){
        const sourc = document.createElement('source');
        [['src', `./assets/audio/${music}.mp3`], ['type', 'audio/mp3']].forEach(([key, value]) => sourc.setAttribute(key, value));
        this.audio.appendChild(sourc);
        
        // sourc.setAttribute('src', `./assets/audio/${music}.mp3`);
        // sourc.setAttribute('type', 'audio/mp3');
    }
    
    sequenceNotes(matriz){
        for(let i in matriz){       
            //o 1º parametro é o tempo que as notas vao surgir (EM SEGUNDOS). 0 2º é o índice da matriz que vai ser tocado
            this.timeoutSheet(this.time[i] - 0.80, matriz[i]); 
        }
    }

    detectedTouch(){
        document.addEventListener('keydown', (e) => {
            this.sheetGreen = document.querySelectorAll('.green');
            this.sheetRed = document.querySelectorAll('.red');
            this.sheetYellow = document.querySelectorAll('.yellow');
            this.sheetBlue = document.querySelectorAll('.blue');

            let k = e.key;

            k === 'a' || k === 'A' ? this.sistemOfPoints(this.sheetGreen, this.clickers[0]) : false;

            k === 's' || k == 'S' ? this.sistemOfPoints(this.sheetRed, this.clickers[1]) : false;

            k === 'j' || k === 'J' ? this.sistemOfPoints(this.sheetYellow, this.clickers[2]) : false;
            
            k === 'k' || k === 'K' ? this.sistemOfPoints(this.sheetBlue, this.clickers[3]) : false;        
        });

        document.addEventListener('keyup', (e) => { //estilinho de VIADO nos clicker aqui
            let k = e.key;

            k === 'a' || k === 'A' ? this.clickers[0].removeAttribute('id') : false;

            k === 's' || k == 'S' ?  this.clickers[1].removeAttribute('id') : false;

            k === 'j' || k === 'J' ? this.clickers[2].removeAttribute('id') : false;
            
            k === 'k' || k === 'K' ? this.clickers[3].removeAttribute('id') : false;

        });
    }

    sistemOfPoints(sheetColor, clicker){
        clicker.setAttribute('id', 'active');

        if(sheetColor[0]){
            if(sheetColor[0].style.top >= '80%' && sheetColor[0].style.top <= '95%'){
                sheetColor[0].removeAttribute('class');
                this.points += 500;
            }

            if(sheetColor[0].style.top < '70%'){
                this.points -= 100;
            }
        }
    }

    analyzeSheets(){
        setInterval(()=>{
            this.partituras = document.querySelectorAll('.partitura'); //ATUALIZO A CADA MILESIMO TODAS AS PARTITURAS QUE ESTAO NA TELA

            console.log(this.partituras)
            for(let i of this.partituras){
                if(i.style.top == '100%'){
                    i.parentNode.removeChild(i), //DELETA AQUI
                    this.points -= 500; //tira os pontos
                }
            }

            this.pointsHTML.innerHTML = this.points; //adiciona os pontos a cada milesimo
        }, 0.1)
    }
    
    timeoutSheet(tempo, sheetPositionArray){ //gera as notas de acordo com a matriz.
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

    gravity(partitura){ 
        this.intervalgravity(partitura, 10, false)
        //MODIFIQUE A GRAVIDADE AQUI...
    }
    
    intervalgravity(box, velocity, disable){ 
        let count = 0;

        let inter = setInterval(() => {
            box.style.top = `${count++}%`; //adiciono % do top a cada velocidade setada.
        }, velocity);

        disable ? clearInterval(inter) : false; //caso o parametro 'disable' seja true o seiinterval vai parar.
    }
}    