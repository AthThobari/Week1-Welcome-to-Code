// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan 
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua

let maju = 10;
let mundur = 9;
let i = 0;

console.log("LOOPING PERTAMA")
while (i < maju) {
    i++;
    console.log("anda sudah maju sebanyak", i)
    if (i >= maju) {
        break
    }
}


console.log("LOOPING KEDUA")
i = mundur;
while (i > 0) {
    console.log("anda sudah mundur sebanyak", i)
    i--;
}