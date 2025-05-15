function generateElement(results){
    var count = 1;
    var con = document.getElementById("content");
    for (let row of results.data) {
                    if(count%3===0){
                      con.innerHTML +='<p class="html2pdf__page-break">';
                    }
                    else{
                      con.innerHTML +='<p>';
                    }
                    
                    con.innerHTML += row;
                    con.innerHTML += '<br>';
                    var s = "";
                    for(let i = 0; i<20;i++){
                      s+= row[0]+" ";
                    }
                    con.innerHTML += s;
                    con.innerHTML += '<br>';
                    con.innerHTML +='</p>';
                    count ++;
                    
                }
}
