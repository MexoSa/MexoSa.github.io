import { Avatar, Badge, Row } from 'antd'
import React from 'react'
import s from './MainSiderBar.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import VacationIcon from '../Icons/VacationIcon'
import logo from '../../images/logo.png'
import DashboardIcon from '../Icons/DashboardIcon'
import PlIcon from '../Icons/PlIcon'
import UsersIcon from '../Icons/UsersIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import bell from '../../images/bell.svg'

const MainSiderBar = ({ setIsOpen }) => {
  const location = useLocation()
  const pathname = `/${location.pathname.split('/')[1]}`

  const sideBarItem = [
    {
      title: 'Dashboard',
      Icon: DashboardIcon,
      path: '/dashboard',
    },
    {
      title: 'Users',
      Icon: UsersIcon,
      path: '/users',
    },
    {
      title: 'Settings',
      Icon: SettingsIcon,
      path: '/settings',
    },
    {
      title: 'P&L',
      Icon: PlIcon,
      path: '/pl',
    },
    {
      title: 'Vacation Manager',
      Icon: VacationIcon,
      path: '/vacation',
    },
  ]

  return (
    <div className={s.wrapper} >
      <Row justify='center' className={s.logo}>
        <img src={logo} alt='logo' />
      </Row>
      <Row justify='center' className={s.menu}>
        {
          sideBarItem.map(({ title, Icon, path }) => (
            <NavLink to={path} className={path === pathname ? s.sidebarItemActive : s.sideBarItem} key={title} onClick={() => setIsOpen(prev => !prev)}>
              <Icon isActive={path === pathname} />
              <span>{title}</span>
            </NavLink>
          ))
        }
      </Row>
      <Row justify='center' className={s.notification}>
        <Badge dot color={'blue'}>
          <img src={bell} alt='bell' />
        </Badge>
      </Row>
      <Row justify='center'>
        <Avatar className={s.profileAvatar}>JS</Avatar>
      </Row>
    </div >
  )
}

export default MainSiderBar
