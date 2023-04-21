// Code your solution in this file!

const headquarters = 42;
const convertBlockToFeet = 264;

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - headquarters);
}


function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * convertBlockToFeet; 
}


function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * convertBlockToFeet;
}


function calculatesFarePrice(start, destination) {
    let totalTravel = (Math.abs(start - destination) * convertBlockToFeet);
    if (totalTravel <= 400){
        return 0;
    } else if (totalTravel > 400 && totalTravel < 2000) {
        return (totalTravel - 400) * 0.02;
    } else if ( totalTravel > 2000 && totalTravel < 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }  
}
