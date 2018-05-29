const store = {drivers: [], passengers: [], trips: []}
let driverCtr = 0;
let passengerCtr = 0;
let tripCtr = 0;
class Driver{
  constructor(name){
    this.id = ++driverCtr;
    this.name= name;
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.driverId === this.id;
    }.bind(this))
  }
  passengers(){
    return this.trips().map(function(trip){
      return trip.passenger();
    })
  }
}
class Passenger{
  constructor(name){
    this.id = ++passengerCtr;
    this.name = name;
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id;
    }.bind(this))
  }
  drivers(){
    return this.trips().map(function(trip){
      return trip.driver();
    })
  }
}
class Trip{
  constructor(driver, passenger){
    this.id = ++tripCtr;
    if (driver) { this.driverId = driver.id;}
    if (passenger) {this.passengerId = passenger.id;}
    store.trips.push(this);
  }
  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id === this.passengerId;
    }.bind(this))
  }
  driver(){
    return store.drivers.find(function(driver){
      return driver.id === this.driverId
    }.bind(this))
  }
}
