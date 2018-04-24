class Tamagotchi{
  constructor(name){
    this.name = name;
    this.hunger = 100;
    this.expired = false;
  }
  setReset(){
    this.hunger = 100;
  }
  getHunger(){
    setInterval(() => {
      this.hunger --;
    }, 1000);
  }
  feed(){
    this.hunger += 10;
  }
  expire(){
    setInterval(() => {
      if(this.hunger <= 0){
        this.expired = true;
      }
      if(this.expired) {
        console.log("pet is dead");
      }
    }, 1000);
  }
}

export { Tamagotchi };
