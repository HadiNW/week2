function konversiMenit(menit) {
  var jam = Math.floor((menit / 60)).toString();
  var sisa = (menit % 60).toString();
  if (sisa.length === 2) {
      var hasilMenit = jam+':'+sisa
  } else {
    var hasilMenit = jam+':0'+sisa
  }
  return hasilMenit;
//   console.log(jam);
//   console.log(sisa)
//   console.log(hasilMenit)
}
konversiMenit()

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00