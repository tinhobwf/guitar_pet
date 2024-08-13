class Matrix {
    constructor(){
        this.matriz = [

        ];
    }
}

class Position {
    constructor(arr){
        this.pos0 = false;
        this.pos1 = false;
        this.pos2 = false;
        this.pos3 = false;
    }
}


class Game {
    constructor(){
        this.gerador = document.querySelectorAll('.gerador');
        this.SheetsGeradas = document.querySelector('.Sheet');
        this.points = document.querySelector('#points');

        this.count = 0;
        this.gravityVelocity = 0;

        this.positionsOfMatriz = [];
        this.matriz = [
            [ 1, 1, 0, 0],
            [ 0, 0, 0, 1],
            [ 0, 0, 1, 0],
            [ 0, 1, 0, 0],
            [ 1, 0, 0, 0],
            [ 0, 1, 0, 0],
            [ 1, 0, 0, 0],
            [ 0, 0, 0, 1],
            [ 1, 0, 0, 0],
        ];    
    }    

    startGame(){
        this.getPosition();
        this.intervalSheet();
    }      
    
    
    getPosition(){
        for(let i in this.matriz){
            let posit = -1
            
            console.log("o array é: ", this.matriz[i])
            for(let j of this.matriz[i]){
                posit++
                
                if(j == true){
                    this.positionsOfMatriz.push(posit);
                }    
                
            }    
            posit = 0;
        }    
    }    
    
    intervalSheet(){
        setInterval(() => {
            this.generatesSheet(this.positionsOfMatriz[this.count]);
            this.count++;
        }, 1000); 
    }

    generatesSheet(arg){
        let d = document.createElement('div');
        d.setAttribute('class', 'partitura');
        
        this.gravity(d);
        
        this.gerador[arg].appendChild(d);
    }    

    
    gravity(arg){ 
        this.intervalgravity(arg, 10) //AQUI EU POSO ADICIONAR A VELOCIDADE DA GRAVIDADE DE ACORDO COM A DIFICULDADE
    }
    
    intervalgravity(arg, velocity){
        let count = 0;
        setInterval(() => {
            arg.style.top = `${count++}%`;
            if(count >= 100){
                clearInterval();
                this.deleteSheet(arg);
                arg.style.top = `10%`;
            }
        }, velocity);
    }

    deleteSheet(arg){
        if(arg.style.top >= '100%'){
           arg.style.display = 'none'
        }    
    }    

}    

let uhuh = new Game()
uhuh.startGame();

