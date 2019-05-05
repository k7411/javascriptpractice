function printdigit(no,animal){
        let animalnum= String(no);
        while(animalnum.length<3){
            animalnum="0"+animalnum;
        }

      console.log(`${animalnum} animal`);
}

printdigit(8,"Dog");