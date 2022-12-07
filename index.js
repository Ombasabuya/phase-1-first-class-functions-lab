const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(){
    return drivers.slice(0,2);
}
returnFirstTwoDrivers();

function returnLastTwoDrivers(){
    return drivers.slice(-2);
}
returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = function (fareMultiplier) {
    return function(value) {
      return fareMultiplier * value;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
  

function selectDifferentDrivers(arrayOfDrivers, funct){
    return funct(arrayOfDrivers);
}