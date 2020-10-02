var bil = [1,5,4,6,2,8,9,11,10,15];

var bilgenap = [];
var bilganjil = [];

	for(i=0; i < bil.length; i++){
		if (bil[i] % 2 == 0) {
			bilgenap.push(bil[i]);
		}else{
			bilganjil.push(bil[i]);
		}
	}
console.log("Genap =");
console.log(bilgenap);
console.log("Ganjil =");
console.log(bilganjil);

