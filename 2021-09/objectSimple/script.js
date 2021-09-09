let person={
    firstName: 'Azar',
    lastName: 'Barfipour',
    Age: '30',
    showBio(firstName,lastName,Age){
        return `I am ${this.firstName} ${this.lastName} and ${this.Age} years old.`;
    }

};
person.Age= 35;
console.log(person.showBio());