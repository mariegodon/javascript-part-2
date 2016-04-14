function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = []
}

function Email(address, type) {
    this.address = address;


    this.type = function(type) {
        switch (type) {
            case "work":
                return "work";
                break;
            case "home":
                return "home";
                break;
            case "office":
                return "office";
                break;
            default:
                return "other";
        }
    }(type)

}


Person.prototype = {
    addEmail: function(address, type) {
        var newMail = new Email(address, type);
        this.emails.push(newMail);
    }
}

var sally = new Person("Sally", "X");
console.log(sally);
sally.addEmail("sally@gmail", "home");
console.log(sally);
sally.addEmail("sally@home", "work");
console.log(sally);