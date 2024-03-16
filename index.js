
function findMatching(drivers, name){
    const LowerCaseName = name.toLowerCase();
    return drivers.filter((driver) => driver.toLowerCase()  === LowerCaseName); 
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.startsWith(letters));
}

function matchName(drivers, name){
    const LowerCaseName = name.toLowerCase();
    return drivers.filter((driver) => driver.name.toLowerCase()  === LowerCaseName); 
}