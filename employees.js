////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name, shifts.

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on the object.
*/

//CODE HERE
class employee {
    constructor(name, shifts){
        this.name = name;
        this.shifts = shifts;
    }    

    getSchedule() {
        console.log (`${this.name} works on ${this.shifts}`)
    }
}


/*
    Create a new instance of your class.
    Save it to a variable called `empOne`.

    You can use this sample data or make
    up your own:
    name: Jess
    shifts: weekday mornings, weekday afternoons
*/

//CODE HERE
const empOne = new employee("Jess", "weekday mornings, weekday afternoons")
/*
    Call the `getSchedule` method on the
    `empOne` object.
*/

//CODE HERE

empOne.getSchedule()

/*
    Make a copy of the empOne object
    using the spread operator.
    Save it to a variable called `empTwo`.

    Change the name of `empTwo` to 'Nick'.

    Hint: you can do this inline with the 
    spread operator or reassign it using 
    dot or bracket notation.
*/

//CODE HERE
//const empTwo = { ...empOne } //this one confused me i had to google the spread operator
//empTwo.name = ('Nick', empOne)
const empTwo = new employee("nick", empOne.shifts)
//console.log(empTwo)
// I tried this one so many times to work with the spread but i could never get it to fully work i left my
//work in comments idk what i did wrong. 

empTwo.getSchedule()



//////////////////PROBLEM 2////////////////////
/*  
    Write a class called Manager that *extends* 
    the Employee class. In the constructor, 
    make sure you require all of the parameters 
    from the Employee class as well as 1 
    new one: employees, which will be an array of 
    employees that report to this manager. 
    (Hint: don't forget to call the super function)

    Create a method called `getEmployees` that
    console.logs a string:
    [NAME] manages [EMPLOYEES]
    Where NAME and EMPLOYEES reference the values
    stored on the object.

    Create a second method called `addEmployee`
    that takes in one argument, `emp`, which
    should be a string of an employee name.
    The function should push the name into 
    the employees array. 
*/

//CODE HERE
class manager extends employee {
    constructor(name, shifts, employees) {
        super(name, shifts)
        this.employees = employees || []
    }
    getEmployees() {
        const employeeNames = this.employees.join(' and ')
        console.log(`${this.name} manages ${employeeNames}`)
      }
      addEmployee(emp){
        this.employees.push(emp)
      }
}


/*
    Create a new instance of your class.
    Save it to a variable called `manager`. NOTE is this written correctly? shouldnt this be called 
    somthingelse?

    You can use this sample data or make
    up your own:
    name: Winston
    shifts: weekday mornings, weekday afternoons
    employees: Cece and Schmidt
*/

//CODE HERE
const myManager = new manager('Winston', ['weekday mornings', 'weekday afternoons'], ['Cece', 'Schmidt'])

/*
    Call the `getEmployees` method on the
    `manager` object.  
*/

//CODE HERE
myManager.getEmployees()
/*
    Call the `addEmployee` method on the 
    `manager` object passing in the string 
    'Coach' or whatever name you'd like.
*/

//CODE HERE 
myManager.addEmployee('Coach')
/*
    Call the `getEmployees` method on the
    `manager` object again to confirm 
    that an employee was added.
*/

//CODE HERE
myManager.getEmployees()

//This took me so much trial and error I just kept getting small things wrong. Im still unsure of a few things
// I finally got it to console.log which was miracle. 