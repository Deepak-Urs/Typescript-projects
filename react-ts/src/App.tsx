import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

let name: string;
let age: number | string; //-> union
let isStudent: boolean;
let hobbies: string[];
let role: [number, string]; //-> Tuple

//object
type Person = {
  age?: number
  name: string
}
let person: Person = {
  name: "Deepak",
}

// extending TYPEs
type P2 = Person & {
  id: number,
  address: string
}
let totalPerson: P2 = {
  id: 1,
  address: 'abc',
  age: 27,
  name: 'Deepak'
}
console.log(totalPerson);

interface P3 {
  miscellaneous: string
}

interface P4 {
  important: string
}


interface P5 extends P3, P4 {
  remarks: string
}

interface P6 extends Person, P2 {
  remarks: string
}

//class RegularPerson implements P5 {
  
//}

//class SpecialPerson implements P6 {

//}

//function printName(name:String) {
//  console.log(name);
//}
//printName('Deepak')

let printName: (name: string) => void;
//printName('Deepak')


function App() {
  return (
    <div className='App'>
      <Header title='Hello World' />
      
    </div>  
  );
}

export default App;
