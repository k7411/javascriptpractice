function beancounting(word){
    let num=0;
    for(let count =0 ;count<word.length;count++){
        
        if(word[count]=="B"){
            num++;
            
        }
    }
    console.log(num);

};

function countChar(word,char){
    let num=0;
    for(let count =0 ;count<word.length;count++){
        
        if(word[count]==char){
            num++;
            
        }
    }
    console.log(num);

};

countChar("heloo aloha","a");
