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