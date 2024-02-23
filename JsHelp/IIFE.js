/*
An IIFE (Immediately Invoked Function Expression) 
is a JavaScript function that runs as soon as it is defined.
*/

((a, b) => {
    console.log(a ** b);
})(2, 3)

const user = (function () {
    const Pair = {
        name: 'Miraj',
        Id: 3
    };

    validate = () => {
        console.log(Pair.Id, ' AND ', Pair.name);
    }

    let Name, ID;

    getUserName = (n) => {
        Name = n;
    }
    getUserID = (id) => {
        ID = id;
    }

    Permit = () => {
        return (ID === Pair.Id && Name === Pair.name);
    }
    return { getUserName, getUserID, validate, Permit }
}
)();

console.log(user.validate());
user.getUserName('Miraj')
user.getUserID('5')
console.log(user.Permit());

//To encapsulate code and avoid global namespace pollution. we use this