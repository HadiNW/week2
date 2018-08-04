// 1. Menyusun Barisan Bintang
// for (var row =1; row <6; row++) {
//     console.log('*');
// }


// 2. Menyusun Barisan Bintang Dengan Nested Looping


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
 
var row3 = 5;   
for (var count = 1; count <= row3; count++) { // 2
    var str = '';

    for (counter = 1; counter <= count; counter++) { //2
        str = str+'*';
        //console.log(count)
    }
    console.log(str);
}

   