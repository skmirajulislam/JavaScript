class Employee {
    constructor(Name, month, Post, Salary) {
        this.name = Name;
        this.month = month;
        this.Post = Post;
        this.salary = Salary;
    }

    #Money() { //private method
        return this.salary * this.month;
    }

    Information() {
        return { // returning object
            'Name': this.name,
            'Post': this.Post,
            'Salary': this.#Money()
        };
    }

    ArmyDetails() {
        return ( // returning String
            'Name : '+ this.name +
            '\nPost : '+ this.Post +
            '\nSalary : '+ this.#Money()
        );
    }

    static oneTime(employeeInstance) {
        console.table([employeeInstance.Information()]);
    }

    static Details() {
        return '---: INA GURKHA REGIMENT :---';
    }
}

const Data = new Employee('Miraj', 2, 'Rifleman', 20000);

console.log(Employee.Details());
console.log(Data.ArmyDetails())

console.log(Employee.Details());
Employee.oneTime(Data);
