function getallcaryear(inventory) {
    const caryears = [];
    for (let i = 0; i < inventory.length; i++) {
      caryears.push(inventory[i].car_year);
    }
    return caryears;
}
  module.exports= getallcaryear