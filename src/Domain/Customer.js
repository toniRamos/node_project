function Customer(dataFill) {
    this.name = null;
    this.age  = null;

    this.fill(dataFill);
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
    message = '';

    if(this.name == 'undefined' || this.name == '' || this.name == null) {
        validation = false;
        message += 'name is not defined';
    }

    if(this.age == 'undefined' || this.age == null) {
        validation = false;
        message += ' age is not defined';
    }

    if(!validation) {
        throw new Error('The customer model could not be successfully instantiated; '+ message)
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

    this.validate();
};

Customer.prototype.toData = function(newFields) {
    return {
            name: this.getName(),
            age: this.getAge(),
    };
};

module.exports = Customer;