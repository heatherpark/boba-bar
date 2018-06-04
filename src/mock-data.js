export const drinkOptions = {
  bases: {
    milkTea: {
      price: 2,
      displayName: 'milk tea',
      flavors: ['green', 'black', 'oolong']
    },
    slush: {
      price: 3,
      displayName: 'slush',
      flavors: ['passion fruit', 'green apple', 'strawberry kiwi']
    }
  },
  ice: ["0%", "25%", "50%", "75%", "100%"],
  sugar: ["0%", "25%", "50%", "75%", "100%"],
  addOns: [
    { displayName: "boba", price: 0.5, value: "boba" }, 
    { displayName: "egg pudding", price: 0.75, value: "eggPudding" }, 
    { displayName: "grass jelly", price: 0.8, value: "grassJelly" }]
};