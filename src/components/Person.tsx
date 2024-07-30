import React from 'react';
import { Personprops } from './Person.types';

//Object Props Type

const Person = (props:Personprops) => {
  return (
    <div>{props.name.first} {props.name.last}</div>
  )
}

export default Person