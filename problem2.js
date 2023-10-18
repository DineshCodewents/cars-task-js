module.exports = function(inventory) {
  let lastcar = inventory[0];
  for (let i = 1; i < inventory.length; i++) {
    if (inventory[i].id > lastcar.id) {
      lastcar = inventory[i];
    }
  }
  return lastcar;
};