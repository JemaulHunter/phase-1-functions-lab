function distanceTravelledInfFeet(start, destination) {
    return Math.abs(start - destination) * 264
}
function distanceTravelledInfFeet(start, destination) {
    return Math.abs(start - destination) * 264
}

const distanceTravelledInFeet = (start, destination) => Math.abs(start - destination)

// const functionName = function(param, param) {
    //Stuff
//}
function calculatesFarepreice(start, destination) {
    const traveled = distanceTravelledInFeet(start, destination);
    //travel less than 400 so, 0-399
    if(traveled < 400) {
        //traveled between 400 2000
    } else if (traveled < 2000) {
        //traveled >= 400 && traveled < 2000
        return (traveled - 400) * .02
        //traveled between: 2000 to 2500
   } else if (traveled <= 2500){
    return 25
   }else {
    return 'cannot travel that far'
   }
}
  