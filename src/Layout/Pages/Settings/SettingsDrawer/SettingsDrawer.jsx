import React from 'react'
import s from './SettingsDrawer.module.css'
import { NavLink, useLocation } from 'react-router-dom'
import SettingsGeneralIcon from '../../../../components/Icons/SettingsGeneralIcon'
import SettingsVacationIcon from '../../../../components/Icons/SettingsVacationIcon'

const SettingsDrawer = () => {
  const { pathname } = useLocation()

  const isTruePathToLeavetypes = pathname === '/settings/leavetypes'
  const isTruePathToLocations = pathname === '/settings/locations'
  const isTruePathToGeneral = pathname === '/settings/general'
  const isTruePathToVacation = pathname === '/settings/vacation' || isTruePathToLocations || isTruePathToLeavetypes

  return (
    <>
      <h3 className={s.header}>Settings</h3>
      <div className={s.menu}>
        <NavLink to={'/settings/general'} className={`${s.link} ${isTruePathToGeneral && s.activeLink}`}>
          <SettingsGeneralIcon isActive={isTruePathToGeneral} />General</NavLink>
        <NavLink to={'/settings/vacation'} className={`${s.link} ${(isTruePathToVacation) && s.activeLink}`} >
          <SettingsVacationIcon isActive={isTruePathToVacation} />Vacation Manager</NavLink>
        <div className={`${s.subWrapper} ${isTruePathToVacation ? '' : s.close}`}>
          <NavLink to={'/settings/leavetypes'} className={`${s.sublink} ${isTruePathToLeavetypes && s.activeLink}`} >Leave Types</NavLink>
          <NavLink to={'/settings/locations'} className={`${s.sublink} ${isTruePathToLocations && s.activeLink}`} >Locations</NavLink>
        </div>
      </div>
    </>
  )
}

export default SettingsDrawer