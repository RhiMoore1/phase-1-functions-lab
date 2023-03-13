// Code your solution in this file!

const headquarters = 42;
const convertBlockToFeet = 264;

function distanceFromHqInBlocks(distance) {
    return Math.abs(distance - headquarters);
}


function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance);
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



/*
function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - headquarters;
    } else if (distance < 42) {
        return headquarters - distance;
    }
}
*/



/*
function distanceTravelledInFeet(start, destination) {
    if((start - destination) <= 0) {
        return (destination - start) * convertBlockToFeet;
    }else if((start - destination) > 0) {
        return (start - destination) * convertBlockToFeet;
    }
}
*/




/*
function calculatesFarePrice(start, destination) {
    if((Math.abs(start - destination) * convertBlockToFeet) <= 400) {
        return 0;
    } else if((Math.abs(start - destination) * convertBlockToFeet) > 400
        && (Math.abs(start - destination) * convertBlockToFeet) < 2000){
        return((((Math.abs(start - destination)) * convertBlockToFeet) - 400) * 0.02);
    } else if((Math.abs(start - destination) * convertBlockToFeet) > 2000 && 
        (Math.abs(start - destination) * convertBlockToFeet) < 2500) {
        return 25;      
    } else if ((Math.abs(start - destination) * convertBlockToFeet) > 2500) {
        return "cannot travel that far";
    }
}
*/
