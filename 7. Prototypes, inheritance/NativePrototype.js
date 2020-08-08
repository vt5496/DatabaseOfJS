let cl = (str) => {console.log(str)}

let str = 'str',
    num = 13,
    bl = true,
    id = Symbol('id'),
    nl = null,
    und = undefined,
    obj = {first: 'first'},
    arr = [],
    gen = function* () {
        yield 1;
        yield 2
    },
    clas = class newObj {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    },
    constr = function User(name, age) {
        this.name = name;
        this.age = age
    }

    cl(`#1 string ${Object.getPrototypeOf(obj)}`);

