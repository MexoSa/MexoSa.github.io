import { Avatar, Dropdown, Menu } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import DropDownIcon from '../../../../components/Icons/DropDownIcon'
import CustomModal from '../../../../components/UI/Modal/CustomModal'
import { deleteLocationCard, setLocationCardDefault } from '../../../../store/actions/locationCardActions'
import s from './SettingsCardLocations.module.css'
import warning from "../../../../images/warning.png"

const SettingsCardLocations = ({ data: { locationName, isDefault, users, id } }) => {
  const dispatch = useDispatch()

  const [isModalOpen, setIsModalOpen] = useState(false)

  const setDefault = () => {
    dispatch(setLocationCardDefault(id))
  }

  const deleteLocation = () => {
    dispatch(deleteLocationCard(id))
    setIsModalOpen(false)
  }

  const menu = (
    <Menu>
      <Menu.Item key={'edit'}>Edit</Menu.Item>
      <Menu.Item key={'setDefault'} onClick={setDefault}>Set as Default</Menu.Item>
      <Menu.Item key={'delete'} onClick={() => setIsModalOpen(true)}>Delete</Menu.Item>
    </Menu>
  )

  return (
    <div className={s.cardWrapper}>
      <div className={s.cardTitle}>
        <a href='##' className={s.title}>
          {locationName}
        </a>
        {isDefault ? <span className={s.default}>default</span> : ''}
      </div>
      <div className={s.cardContent}>
        <div className={s.cardLinks}>
          <div className={s.cardLink}>
            <div>Holidays</div>
            <a href="##">View Holidays</a>
          </div>
          <div className={s.cardLink}>
            <div>Leave Policies</div>
            <a href="##">View Leave Policies</a>
          </div>
        </div>
        <div className={s.cardUsers}>
          <Avatar.Group
            maxCount={7}
            size={30}
            gap={10}
            maxPopoverTrigger='focus'
            maxStyle={{
              color: '#00A0EC',
              backgroundColor: 'inherit',
            }}
          >
            {
              users.map((item, index) => {
                return item?.avatar ?
                  <Avatar key={index} src={item.avatar} /> :
                  <Avatar
                    style={{
                      color: 'white',
                      backgroundColor: '#00A0EC',
                      fontSize: '12px',
                      fontWeight: '600',
                    }}
                    key={index}
                  >
                    {item.slice(0, 2)}
                  </Avatar>
              })
            }
          </Avatar.Group>
        </div>
      </div>
      {!isDefault ?
        <Dropdown
          placement="bottomRight"
          overlay={menu}
          trigger={['click']}
          className={s.dropDown}
        >
          <a href='##' onClick={(e) => e.preventDefault()}>
            <DropDownIcon />
          </a>
        </Dropdown>
        : ''
      }
      <CustomModal
        title={'Delete Location'}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onOk={deleteLocation}
        okText={'Yes, Delete'}
      >
        <div className={s.deleteModalWRapper}>
          <p>Are you sure want to delete “USA” Location? </p>
          <div>
            <img src={warning} alt="warning icon" />
            <p>
              Deleting a location might impact the users' configuration and leave information (e.g. the initial brought forward days).
            </p>
          </div>
        </div>
      </CustomModal>
    </div>
  )
}

export default SettingsCardLocations