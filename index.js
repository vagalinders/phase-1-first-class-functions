function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    function inner() {
    
    }
    return inner
}

function returnsAnAnonymousFunction(){
    return (function (){
    })

}

function returnFirstTwoDrivers(drivers){
    const first2 = drivers.slice(0, 2);
    return first2;


}


function returnLastTwoDrivers(drivers){
    const last2 = drivers.slice(-2);
    return last2;


}

function selectingDrivers(){
    
    const firstlast2 = returnFirstTwoDrivers(selectingDrivers);
    return returnFirstTwoDrivers(returnLastTwoDrivers);

}



console.log(returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']));
console.log(selectingDrivers());