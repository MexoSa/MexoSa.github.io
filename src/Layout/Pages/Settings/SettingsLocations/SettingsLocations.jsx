import Button from '../../../../components/UI/Button/Button'
import React, { useState } from 'react'
import s from './SettingsLocations.module.css'
import CreateLocationModal from '../../../../components/UI/Modal/CreateLocationModal'
import { useSelector } from 'react-redux'
import SettingsCardLocations from '../SettingsCardLocations/SettingsCardLocations'

const SettingsLocations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const locationCard = useSelector(state => state.locationCardReducer)
  console.log(locationCard)

  return (
    <>
      <div className={s.titleWrapper}>
        <div className={s.title}>
          <h1>Locations</h1>
          <p>Create new users or update the existng users. You can then set their permissons here too. </p>
        </div>
        <Button text={'Create Location'} onClick={() => setIsModalOpen(true)} />
        <CreateLocationModal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
      <div className={s.cardWrapper}>
        {
          locationCard.map((item, index) => {
            return (
              <SettingsCardLocations key={index} data={item} />
            )
          })
        }
      </div>
    </>
  )
}

export default SettingsLocations