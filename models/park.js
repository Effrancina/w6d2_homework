const Dinosaur = require('../specs/dinosaur_spec.js');

const Park = function (name, tprice, dinosaurs = []) {
    this.name = name;
    this.tprice = tprice;
    this.dinosaurs = dinosaurs;
  }

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.shift(indexOfDinosaur, 0);
};

Park.prototype.popularDinosaur = function () {
    let mostPopularDinosaur;
    for (let i=0; i > mostPopularDinosaur || mostPopularDinosaur===None; i++) {
        if (i > mostPopularDinosaur) {
            i=mostPopularDinosaur;
        }
        
    }
    console.log(mostPopularDinosaur)
};





module.exports = Park;