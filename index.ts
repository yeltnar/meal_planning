const fud = require("./list.json");

fud.entres.forEach(( cur )=>{
    const random_side = getRandomSide( fud.sides );
    console.log(`${cur.title} --- ${random_side}`);
});

function getRandomSide( arr:string ){
    const index = Math.floor(arr.length * Math.random());
    return arr[index];
}
