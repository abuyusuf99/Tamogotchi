const tamogotchi = {
  name: "Cat",
  meal: 1,
  energy: 2,
  mood: 4,

  getStatus: function () {
   let mealStatus = this.meal < 3 ? 'я голоден' : 'я не голоден'
   let energyStatus = this.energy  < 3 ? 'я устал' : 'я не устал'
   let moodStatus = this.mood < 3 ? 'мне скучно' : 'мне не скучно'
   let test = (`Имя: ${this.name} Еда:${mealStatus} (${this.meal})  Энергия: ${energyStatus} (${this.energy}) Настроение: ${moodStatus} (${this.mood})`);
  if(this.meal <= 0 || this.mood <= 0 || this.energy <= 0){
    return this.name = 'Умер:) '
  }
   return test

  },
  setName: function (Muslim) {
    this.name = Muslim;
  },
  eat: function () {
    if (this.meal < 5) {
      this.meal++;
      this.mood--;
    }
  },
  sleep: function () {
    if (this.energy < 5) {
      this.energy++;
      this.meal--;
    }
  },
  play: function () {
    if (this.mood < 5) {
      this.mood++;
      this.energy--;
    }
  },

}
// tamogotchi.eat()
tamogotchi.eat()
tamogotchi.eat()
tamogotchi.eat()
tamogotchi.eat()
console.log(tamogotchi.getStatus());
