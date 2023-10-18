function getallcar(inventory) {
    const carYears = [];
    for (let i = 0; i < inventory.length; i++) {
        carYears.push(inventory[i].car_year);
    }
    return carYears;
}

function getolder(caryears) {
    const oldercars = [];
    for (let i = 0; i < caryears.length; i++) {
        if (caryears[i] < 2000) {
            oldercars.push(caryears[i]);
        }
    }
    return oldercars;
}
module.exports.getallcar = getallcar;
module.exports.getolder = getolder;

