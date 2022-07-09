import { Tooltip } from 'antd'
import React from 'react'
import InfoIcon from '../../Icons/InfoIcon'
import s from './CustomToolTip.module.css'

const CustomToolTip = ({ text }) => {
  return (
    <Tooltip placement="top" title={text}>
      <span className={s.toolTip}><InfoIcon /></span>
    </Tooltip>
  )
}

export default CustomToolTip