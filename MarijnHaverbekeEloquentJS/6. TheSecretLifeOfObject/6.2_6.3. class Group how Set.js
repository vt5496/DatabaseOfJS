class Group {
    get length() {return Object.keys(this).length}

    add(value) {
        Object.keys(this).filter(key => this[key] === value)[0] ?
            console.log(`I have: ${value}`) :
            this[this.length] = value
    }

    delete(value) {
        Object.keys(this).forEach(key => {
            if (this[key] === value) {
                console.log(`I deleted ${value}`)
                delete this[key]
            }
        })
    }

    has(value) {
        return Object.keys(this).filter((key, index) =>
           this[key] === value).length !== 0
    }

    static from(objIter){
        const group = new Group();
        for (let key of objIter) {group.add(key)}
        return group
    }

     [Symbol.iterator] = function() {return new groupIterator(this)}
}

class groupIterator {
    constructor(obj) {
        this.from = 0;
        this.to = Object.keys(obj).length
        this.obj = obj;
    }

    next(){
        if (this.from === this.to) return {done: true}
        let value = this.obj[this.from];
        this.from += 1;
        return {value, done: false}
    }
}



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true


console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
