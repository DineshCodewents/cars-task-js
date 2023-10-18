function getCarById(id , inventory) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].id === id) {
      return inventory[i];
    }
  }
  return null;
}

module.exports = getCarById