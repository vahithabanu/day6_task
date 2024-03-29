class UberPriceCalculator {
    constructor(baseFare, costPerKm, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerKm = costPerKm;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distanceInKm, timeInMinutes) {
      const distanceCost = distanceInKm * this.costPerKm;
      const timeCost = timeInMinutes * this.costPerMinute;
      const totalPrice = this.baseFare + distanceCost + timeCost;
      return totalPrice;
    }
  }
  
 
  const uberCalculator = new UberPriceCalculator(3, 1.5, 0.25);
  const distance = 10; // in kilometers
  const time = 20; // in minutes
  const totalPrice = uberCalculator.calculatePrice(distance, time);
  console.log(`Total Uber Price: $${totalPrice}`);
  