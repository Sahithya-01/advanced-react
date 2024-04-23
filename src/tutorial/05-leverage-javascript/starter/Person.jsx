import avatar from '../../../assets/default-avatar.svg'
import React from 'react'
export function Person({ name, nickName = 'default value', images }) {
  const img = images?.[0]?.small?.url || avatar
  //Where the logical or (|| ) operator takes the right operand in the case of a falsy value — which includes empty string, 0, false, NaN, etc. The nullish coalescing operator (?? ) takes the right operand only when the left side is set to null or undefined .
  return (
    <div>
      <img src={img} alt={name} style={{ width: '75px' }}></img>
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  )
}
