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
