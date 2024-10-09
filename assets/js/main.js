import Game from "./game.js"; 
import Matriz from "./matriz.js";

/*
    [1, 0, 0, 0],    [0]
    [0, 1, 0, 0],    [1]
    [0, 0, 1, 0],    [2]
    [0, 0, 0, 1],    [3]

    [1, 1, 0, 0],    [4]
    [0, 1, 1, 0],    [5]
    [0, 0, 1, 1],    [6]
    [1, 1, 0, 1],    [7]

    [1, 0, 1, 1],    [8]
    [1, 1, 1, 0],    [9]
    [0, 1, 1, 1],    [10]
    [1, 1, 1, 1],    [11]
    [1, 0, 1, 0],    [12]
    [0, 1, 0, 1],    [13]
    [1, 0, 0, 1],    [14]
    [0, 0, 0, 0],    [15]
*/

const m = new Matriz;

const game = new Game(  
    [
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[1],
        m.notes[12],
        m.notes[13],
        m.notes[8],
        m.notes[13],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],    
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[3],
        m.notes[2],
        m.notes[1],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
        m.notes[2],
        m.notes[3],
        m.notes[1],
    ], 
    [ 
        10.447,
        10.665,
        10.860,
        10.996,
        11.183,
        11.341,
        11.500,
        12.228,
        12.243,
        12.936,
        14.247,
        15.005,
        15.698,
        17.023,
        17.804,
        18.555,
        19.528,
        19.874,
        20.551,
        21.259,
        22.732,
        23.468,
        24.109,
        25.531,
        26.193,
        26.871,
        28.315,
        29.000,
        29.817,
        30.775,
        31.121,
        31.769,
        32.513,
        34.931,	
        35.100,	
        35.461,	
        35.781,	
        36.150,	
        36.340,	
        36.531,	
        36.870,	
        37.211,	
        37.601,	
        37.961,	
        38.301,	
        38.596,	
        38.961,	
        39.337,	
        39.711,	
        40.071,	
        40.431,	
        40.600,	
        40.751,	
        41.085,	
        41.406,	
        41.800,	
        41.971,	
        42.140,	
        42.520,	
        42.856,	
        43.210,	
        43.590,	
        43.946,	
        44.287,	
        44.570,	
        44.955,	
        45.297,	
        45.656,	
        46.001,	
        46.191,	
        46.376,	
        46.725,	
        47.071,	
        47.411,	
        47.600,	
        47.770,	
        48.111,	
        48.461,	
        48.650,	
        48.836,	
        49.180,	
        49.540,	
        49.895,	
        50.246,	
        50.420,	
        50.590,	
        50.946,	
        51.311,	
        51.630,	
        51.830,	
        52.020,	
        52.320,	
        52.680,	
        53.036,	
        53.206,	
        53.376,	
        53.750,	
        54.056,	
        54.486,	
        54.826,	
        55.201,	
        55.521,	
        55.880,	
        56.050,	
        56.276,	
        56.600
    ],

    'hopes' //AQUI VOCE COLOCA O NOME DA MUSICA, DE ACORDO COMO ELA ESTA ESCRITA NO ARQUVIO
);


const start = () => game.startGame();
const k = document.querySelector('.staaaaart');
let count = 0;

k.addEventListener('click', () => {
    game.audio.play(); 
    start();
    k.style.display = 'none'; 
})

document.addEventListener('keypress', (e)=>{
    count++;

    let el = e.keyCode;
    if((el == 32 || el == 13) && count === 1){ 
        game.audio.play(); 
        start();
    k.style.display = 'none'; 
    }
})