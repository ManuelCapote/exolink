import React from 'react'

export default function Discount(props) {
  const discountDiv = (className) => {
    if (props.value !== '0') {
      return <div className={`discount ${className}`}>{props.value}</div>
    } else return <div></div>
  }
  return discountDiv(props.screen)
}
