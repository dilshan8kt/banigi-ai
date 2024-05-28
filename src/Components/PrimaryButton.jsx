import React from 'react'

const PrimaryButton = ({text ,classBtn}) => {
  return (
   <>
   <button className={`primary_btn ${classBtn}`}>{text}</button>
   </>
  )
}

export default PrimaryButton
