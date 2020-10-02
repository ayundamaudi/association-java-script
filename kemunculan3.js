var angka = [4,6,6,7,8,1,5,6,2,4,10,5,11,6];
var jumlah, j, i;

// Menghitung kemunculan
console.log("Jumlah kemunculan data dalam array");
angka.sort();
for(j=0; j<angka.length; j++) {
    jumlah = 0;
    for(i=0; i<angka.length; i++) {
        if(angka[j] == angka[i])
        jumlah++;
    }
    
    if(angka[j] != angka[j-1]) {
        console.log(angka[j] + " = " + jumlah);
    }
}   
