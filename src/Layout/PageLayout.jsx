import { Layout } from 'antd'
import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import DrawerBar from '../components/DrawerBar/DrawerBar'
import MainSiderBar from '../components/MainSiderBar/MainSiderBar'
import SettingsDrawer from './Pages/Settings/SettingsDrawer/SettingsDrawer'
import s from './PageLayout.module.css'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'

const PageLayout = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Layout className='content' >
      <MainSiderBar setIsOpen={setIsOpen} />
      <Routes>
        <Route path='/' element={<DrawerBar isOpen={isOpen} setIsOpen={setIsOpen} />} >
          <Route path='dashboard/*' element={<h3>Dashboard</h3>} />
          <Route path='users/*' element={<h3>Users</h3>} />
          <Route path='settings/*' element={<SettingsDrawer />} />
          <Route path='pl/*' element={<h3>P&L</h3>} />
          <Route path='vacation/*' element={<h3>Vacation Manager</h3>} />
        </Route>
      </Routes>
      <div className={s.content}>
        <BreadCrumb />
        <Outlet />
      </div>
    </Layout>
  )
}

export default PageLayout