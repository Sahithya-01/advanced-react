import { Person } from './Person'
import React from 'react'
import { people } from '../../../data'

const List = () => {
  console.log(people)

  return (
    <>
      {people.map((person) => {
        return <Person key={person.id} {...person} />
      })}
    </>
  )
}

export default List
