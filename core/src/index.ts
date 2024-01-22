let id: number = 5
let company: string = 'Google'
let isPublished: boolean = true
let x: any = 'hello'

// isPublished = 1 --> error
// x = true --> no error

// arrays
let ids: number[] = [1,2,3,4,5]
let arr: any[] = [1, true, 'hi']

//Tuples
let person: [number, string, boolean] = [1, 'abcd', true]
// Tuple arrays
let employee: [number, string][] = [
    [1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']
]

// unions
let pid: number | string
pid = 22
pid = '22'

// enums
enum direction1 {
    up, down, left, right
}
//console.log(direction1.up);

enum direction2 {
    up='up', down='d', left='l', right='r'
}
//console.log(direction2);


//objects
type User = {
    id: number,
    name: string
}
const user: User = {
    id: 1,
    name: 'John'
}
//console.log(user);

// Type Assertion
let cid: any = 1
// 1 - Method1
let cId = <number>cid
// 2 - Method2
let ciD = cid as number


// Functions
function addNum(a: number, b:number): number {
    return a + b
}
console.log(addNum(1, 2))

function msg(message: string | number): void {
    console.log(message)
}
msg('hello')


// Interfaces
interface UserInterface {
    id: number,
    name: string
}

const user1: UserInterface = {
    id: 1,
    name: 'John'
}
//console.log(user);

// diff b/n Interfaces and Types
// TYPE can be used with primitives and unions but INTERFACES cannot be used for the same
type Point = number | string
const p1: Point = 1

// optional and readonly properties in TS
interface UI2 {
    readonly id: number,
    name: string,
    age?: number
}


// Function Interfaces
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc = (x:number, y:number): number => x + y
const sub: MathFunc = (x:number, y:number): number => x - y
console.log(add(2,3));
console.log(sub(3,2));


interface PersonInterface {
    readonly id: number,
    name: string
    register(): string
}

// Classes
class Person implements PersonInterface {
    id: number
    name: string

    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered!`
    }
}

const mike = new Person(1, 'mike jordan')
console.log(mike.register())
//console.log(mike.id); // Property 'id' is private and only accessible within class 'Person'.
//console.log(mike.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses.



// Subclasses
class Employee extends Person {
    title: string

    constructor(id: number, name: string, title: string) {
        super(id, name)
        this.title= title
    }
}
const emp = new Employee(3, 'Shawn', 'Developer')
console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}
let strArr = getArray<string>(['a', 'b', 'c', 'd'])
let numArr = getArray<number>([1,2,3,4,5])



