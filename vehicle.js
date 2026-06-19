export default class Vehicle {
  constructor(owner) {
    this.owner = owner;
  }

  fetchOwner(){
    return this.owner;
  }
}

export const noOfCars = 70;