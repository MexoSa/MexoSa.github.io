import React from 'react'
import s from "./CustomField.module.css"

const CustomField = ({ label, isTouched, isRequired, children }) => {
  return (
    <div className={s.wrapper}>
      {isTouched ? <span className={s.label}>{`${label}`}{isRequired ? <span className={s.star}>*</span> : ''}</span> : ''}
      {children}
    </div>
  )
}

export default CustomField