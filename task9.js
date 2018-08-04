function shoutOut() {
    return 'Halo Function!';
}

console.log(shoutOut());



function calculateMultiply(num1, num2) {
    var hasilKali = num1 * num2;
    return hasilKali;
}

var num1 = 5;
var num2 = 6;
var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); 



function  processSentence(name, age, address, hobby){
    var sentence = 'Nama saya ' + name + ', umur saya ' + age + ' tahun, alamat saya di ' + address + ' dan saya punyya hobby yaitu ' + hobby  ;
    return sentence;
}

var name = "Hadi";
var age = 22;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "Coding";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);