
function boxNumber(limit) {
    var text = '';
    var nilaiTengah;
    for (var count = 1; count < limit+1; count++) {       
       text = text + count.toString();
    if (count === limit){
        console.log(text);
        nilaiTengah = Math.round(count / 2);
        console.log(nilaiTengah);
        
        var repls = text;
        var show = repls[1].re
        
         
    }
       
    }
}

boxNumber(5);