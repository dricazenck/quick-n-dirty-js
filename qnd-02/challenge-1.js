// var potencia;

// var quadrado = potencia(2);

// console.log(quadrado(2)); // 4
// console.log(quadrado(3)); // 9
// console.log(quadrado(4)); // 16

// var cubo = potencia(3);

// console.log(cubo(2)); // 8
// console.log(cubo(3)); // 27
// console.log(cubo(4)); // 64

// implementar a função potência usando closure.

var Pow = function(exponent){


	return {
		potecia : function(base) {
			return Math.pow(base,exponent);
		} 

	}

};

var quadrado = Pow(2);

console.log(quadrado.potecia(2));
console.log(quadrado.potecia(3));
console.log(quadrado.potecia(4));

var cubo = Pow(3);

console.log(cubo.potecia(2));
console.log(cubo.potecia(3));
console.log(cubo.potecia(4));



