let chessboard = "";

for(let i = 0;i<=71;i++){
        if(i%9==0){
                chessboard = chessboard +"\n";
        }
        else if(i%2==0){
            chessboard = chessboard +"#";
        }
        else{
            chessboard =chessboard +" ";
        }


}

console.log(chessboard);