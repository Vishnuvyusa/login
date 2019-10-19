import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}, my age  {person.age} and i know {person.skill}</h1>
        </div>
    )
}

export default Person
