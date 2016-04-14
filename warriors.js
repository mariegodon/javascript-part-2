function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.power = (Math.floor(Math.random() * 99)) + 1;
    this.level = 1;
    this.weapon = "wooden sword"
}

Warrior.prototype = {
    fight: function() {
        console.log(" rushes to the arena with ");
    },
    faceoff: function(opponent) {
        console.log(this.name) + this.fight() + console.log(opponent.name);
        if (opponent.power > this.power) {
            console.log(opponent.name + " destroyed you. " + opponent.name + "'s Power: " + opponent.power + " vs " + this.name + "'s power: " + this.power);
        } else if (this.power > opponent.power) {
            console.log("Victory to you! " + opponent.name + "'s Power: " + opponent.power + " vs " + this.name + "'s power: " + this.power);
        } else if (this.power === opponent.power) {
            console.log("Its a draw. Prepare for the next battle.");
        }
    }
}

var war1 = new Warrior("Beast", "M");
var war2 = new Warrior("Olga", "F");
var war3 = new Warrior("Tyrion", "M");
var war4 = new Warrior("Khaleesi", "F");

//war1.faceoff(war2);
//war1.faceoff(war3);
//war3.faceoff(war4);
//war4.faceoff(war2);
