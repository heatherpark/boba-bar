export const drinkOptions = {
  bases: {
    milkTea: [
      { flavor: "green", price: 2 }, 
      { flavor: "black", price: 2 }, 
      { flavor: "oolong", price: 2 }
    ]
  },
  ice: ["0%", "25%", "50%", "75%", "100%"],
  sugar: ["0%", "25%", "50%", "75%", "100%"],
  addOns: [
    { displayName: "boba", price: 0.5, value: "boba" }, 
    { displayName: "egg pudding", price: 0.75, value: "eggPudding" }, 
    { displayName: "grass jelly", price: 0.8, value: "grassJelly" }]
};