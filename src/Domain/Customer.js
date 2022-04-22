function Customer(age, name) {
    this.name = name || null;
    this.age  = age  || null;
}

Customer.prototype.getAge = function() {
    return this.age;
}

Customer.prototype.setAge = function(age) {
    this.age = age;
}

Customer.prototype.getName = function() {
    return this.name;
}

Customer.prototype.setName = function(name) {
    this.name = name;
}

Customer.prototype.validate = function() {
    validation = true;

    if(this.name == 'undefined' || this.name == '' || this.name == null) {
        validation = false;
        console.log("El name esta mal");
    }
    if(this.age == 'undefined' || this.age == null) {
        validation = false;
        console.log("El age esta mal");
    }

    return validation;
}

Customer.prototype.fill = function(newFields) {
    for (var field in newFields) {
        if (this.hasOwnProperty(field) && newFields.hasOwnProperty(field)) {
            if (this[field] !== 'undefined') {
                this[field] = newFields[field];
            }
        }
    }

};

Customer.prototype.toData = function(newFields) {
    return {
            name: this.getName(),
            age: this.getAge(),
    };
};

module.exports = Customer;