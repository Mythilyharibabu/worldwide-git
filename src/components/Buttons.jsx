import React from 'react'

export default function Buttons({onClick,type,children,space}) {
  return (
    <button onClick={onClick} className={`${type} ${space}`}>{children}</button>
  )
}
