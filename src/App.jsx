import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageLayout from './Layout/PageLayout'
import Settings from './Layout/Pages/Settings/Settings'
import SettingsLocations from './Layout/Pages/Settings/SettingsLocations/SettingsLocations'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<PageLayout />} >
        <Route path='/dashboard' element={<div>Dashboard</div>} />
        <Route path='/users' element={<div>Users</div>} />
        <Route path='/settings' element={<Settings />} >
          <Route path='/settings/general' element={<div>General Settings</div>} />
          <Route path='/settings/vacation' element={<div>Vacation Manager</div>} />
          <Route path='leavetypes' element={<div>Leave Types</div>} />
          <Route path='locations' element={<SettingsLocations />} />
        </Route>
        <Route path='/pl' element={<div>P&L</div>} />
        <Route path='/vacation' element={<div>Vacation Manager</div>} />
        <Route path="/*" element={<div>404 Page not found</div>} />
      </Route>
    </Routes>
  )
}

export default App