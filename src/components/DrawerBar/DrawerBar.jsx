import { Layout } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import s from './DrawerBar.module.css'
import arrow from '../../images/arrow.png'

const DrawerBar = ({ isOpen, setIsOpen }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    setIsOpen(false)
  }, [setIsOpen, pathname])

  return (

    <Layout.Sider width="240" className={s.wrapper} collapsed={isOpen} collapsedWidth={0} defaultCollapsed={false}>
      <Outlet />
      <div className={s.collapsedBtn} onClick={() => setIsOpen(prev => !prev)}><img className={isOpen ? s.rotateBtn : ''} src={arrow} alt='arrow' /></div>
    </Layout.Sider>
  )
}

export default DrawerBar