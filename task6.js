// 1. Melakukan Looping Menggunakan While

var num = 0;
var count = 0;
while (num <= 40) {
    if (num <=20) {        
        while (count <=20) {
            if (count === 0) {
                console.log('LOOPING PERTAMA');
            } else {
                console.log(count + ' - ' + 'I love coding');
            }
           
            count+=2;            
        }
    } else {
        while (count >= 0) {
            if (count === 22) {
                console.log('LOOPING KEDUA');
            } else {
                console.log(count + ' - ' + 'I will become fullstack developer');
            }
            
            count -=2;
        }
    }

    num++;
}

// 2. Melakukan Looping Menggunakan For

var num2 = 0;
var count2 = 0;

for (num2; num2 <= 40; num2++ ) {
    if (num2 <= 20) {
        for (count2; count2 <= 20; count2++) {
            if (count2 === 0) {
                console.log('LOOPING PERTAMA');
            } else {
                console.log(count2 + ' - ' + 'I love coding');
            }
            
        }
    } else {
        for (count2; count2 >= 1; count2--){
            if (count2 === 21 ) {
                console.log('LOOPING KEDUA');
            } else {
                console.log(count2 + ' - ' + 'I will become fullstack developer');
            }
            
        }
    }
}

// 3. Angka Ganjil dan Genap

for (var counter=1; counter <= 100; counter++) {
    if (counter %2 ===0) {
        console.log(counter+" GENAP");
    } else {
        console.log(counter+" GANJIL")
    }
}