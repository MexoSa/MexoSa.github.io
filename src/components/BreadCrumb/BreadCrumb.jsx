import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import DashboardIcon from '../Icons/DashboardIcon'
import PlIcon from '../Icons/PlIcon'
import SettingsIcon from '../Icons/SettingsIcon'
import UsersIcon from '../Icons/UsersIcon'
import VacationIcon from '../Icons/VacationIcon'
import s from './BreadCrumb.module.css'
import Separator from './Separator'

const BreadCrumb = () => {

  const breadcrumbNameMap = {
    '/settings': {
      title: 'Settings',
      icon: <SettingsIcon />,
    },
    '/users': {
      title: 'Users',
      icon: <UsersIcon />,
    },
    '/pl': {
      title: 'P&L',
      icon: <PlIcon />,
    },
    '/vacation': {
      title: 'Vacation Manager',
      icon: <VacationIcon />,
    },
    '/dashboard': {
      title: 'Dashboard',
      icon: <DashboardIcon />,
    },
    '/settings/general': {
      title: 'General',
    },
    '/settings/vacation': {
      title: 'Vacation Manager',
    },
    '/settings/locations': {
      title: 'Vacation Manager',
    },
    '/settings/leavetypes': {
      title: 'Vacation Manager',
    },
  }

  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter(i => i)

  const breadcrumbItems = pathSnippets.map((_, index) => {

    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url} >
        <Link className={s.breadCrumb} to={url}>{breadcrumbNameMap[url]?.icon}{breadcrumbNameMap[url]?.title}</Link>
      </Breadcrumb.Item>
    )
  })

  return (
    <div className={s.breadcrumbWrapper}>
      <Breadcrumb separator={<Separator />}> {breadcrumbItems}</Breadcrumb>
    </div>
  )
}

export default BreadCrumb