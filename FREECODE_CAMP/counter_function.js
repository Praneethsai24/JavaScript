function createcounter(){
    let num = 0;
    return function(){
        num++
        return num;
    };
}
const count = createcounter();