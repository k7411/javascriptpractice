const makeNoise = function(){
    console.log("Pling!");
};

const power = function (base, exponent){
    let result = 1;
    for(let i =0;i<exponent;i++){
        result = result*base;
    }
    return result;
};

makeNoise();

console.log(power(2,18));
