// 1. Menyusun Barisan Bintang
console.log('1. Menyusun Barisan Bintang');
for (var row =1; row <6; row++) {
    console.log('*');
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');

var rows2 = 5;
var str = '';
for (var counter = 1; counter <= rows2; counter++) {
    str = str+'*';
}
for (var loop = 1; loop <= rows2; loop++) {
    console.log(str);
}


// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
 
var row3 = 5;   
for (var count = 1; count <= row3; count++) { // 2
    var str = '';

    for (counter = 1; counter <= count; counter++) { //2
        str = str+'*';
        //console.log(count)
    }
    console.log(str);
}

   