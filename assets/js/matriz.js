export default class Matriz{
    constructor(){
        this.time = [' '];
        this.x = 0;
        this.notes = [
            [1, 0, 0, 0], // [0]
            [0, 1, 0, 0], // [1]
            [0, 0, 1, 0], // [2]
            [0, 0, 0, 1], // [3]

            [1, 1, 0, 0], // [4]
            [0, 1, 1, 0], // [5]
            [0, 0, 1, 1], // [6]

            [1, 1, 0, 1], // [7]
            [1, 0, 1, 1], // [8]

            [1, 1, 1, 0], // [9]
            [0, 1, 1, 1], // [10]

            [1, 1, 1, 1], // [11]

            [1, 0, 1, 0], // [12]
            [0, 1, 0, 1], // [13]
            [1, 0, 0, 1], // [14]
            [0, 0, 0, 0] // [15]
        ];
    }

    getIndexOfTime(arg){
        while(this.x < arg){
            this.x += 0.10;
            this.time.push(this.x.toFixed(2));
        }
    }
} //SE DER PAU É PQ OS NUMEROS SAO STRING