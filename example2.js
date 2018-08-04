function boxNumber(limit) {
    var text = '';
    var text2 = '';
    var nilaiTengah = Math.round(limit /2 );
    //console.log(nilaiTengah)

    for (var counter = 1; counter <= nilaiTengah; counter+=1) {

        if (counter % 2 != 0) {
            text = text + counter.toString();  
        }      
        

    }

    for(var count = nilaiTengah-1; count > 0; count-=1 ) {

        if (count % 2 != 0) {
            text2 = text2 + count.toString();  
        }
     
        //console.log(count)
    }
     console.log(text + text2)
    
}


boxNumber(10);

// 123454321
// 13531

// 12321
// 123321

// 1
