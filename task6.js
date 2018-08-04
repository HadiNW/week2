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

// kelipatan 3 counter2
for (var counter2 =1; counter2 <= 100; counter2+=2) {
    if (counter2 % 3 ===0) {
        console.log(counter2+" Kelipatan 3");
    } 
}

// kelipatan 6 counter6
for (var counter3=1; counter3 <= 100; counter3+=5) {
    if (counter3 % 6 ===0) {
        console.log(counter3+" Kelipatan 6");
    } 
}

for (var counter4=1; counter4 <= 100; counter4+=9) {
    if (counter4 % 10 ===0) {
        console.log(counter4+" Kelipatan 10");
    }  
}