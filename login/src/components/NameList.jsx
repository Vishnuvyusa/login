import React from "react";
import Person from "./Person";

function NameList() {
  const pers = [
    {
      id: 1,
      name: "Vishnu",
      age: 32,
      skill: "java"
    },
    {
      id: 2,
      name: "Sharma",
      age: 35,
      skill: "UI"
    },
    {
      id: 3,
      name: "Anu Priya",
      age: 26,
      skill: "Home science"
    },
    {
      id: 4,
      name: "Rahul",
      age: 21,
      skill: "Dot net"
    }
  ];

  const personList = pers.map(person =>  <Person key={person.id} person={person}/>)

  return <div>{personList}</div>
  
}

export default NameList;
