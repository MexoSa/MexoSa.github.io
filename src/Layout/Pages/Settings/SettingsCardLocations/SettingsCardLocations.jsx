import { Avatar, Dropdown, Menu } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import DropDownIcon from '../../../../components/Icons/DropDownIcon'
import { setLocationCardDefault } from '../../../../store/actions/locationCardActions'
import s from './SettingsCardLocations.module.css'

const SettingsCardLocations = ({ data: { locationName, isDefault, users, id } }) => {
  const dispatch = useDispatch()

  const setDefault = () => {
    dispatch(setLocationCardDefault(id))
  }

  const menu = (
    <Menu>
      <Menu.Item key={'edit'}>Edit</Menu.Item>
      <Menu.Item key={'setDefault'} onClick={setDefault}>Set as Default</Menu.Item>
      <Menu.Item key={'delete'}>Delete</Menu.Item>
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
    </div>
  )
}

export default SettingsCardLocations