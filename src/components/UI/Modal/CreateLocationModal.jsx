import React, { useState } from 'react'
import { Button, Checkbox, Form, Input, Modal, Select } from 'antd'
import "./CreateLocationModal.css"
import CloseIcon from '../../Icons/CloseIcon'
import CustomField from '../CustomField/CustomField'
import CustomToolTip from '../ToolTip/CustomToolTip'
import data from './data.js'
import { useDispatch } from 'react-redux'
import { locationCardAction } from '../../../store/actions/locationCardActions'

const CreateLocationModal = ({ isModalOpen, onClose }) => {
  const dispatch = useDispatch()

  const onFinish = (reset) => {
    onClose()
    reset()
  }

  const onCreate = (value) => {
    console.log(value)
    dispatch(locationCardAction(value))
    onClose()
  }

  const [selectedUsersItems, setSelectedUsersItems] = useState([])
  const filteredUsersOptions = data.usersOptions.filter((o) => !selectedUsersItems.includes(o))

  return (
    <Modal
      visible={isModalOpen}
      onCancel={onClose}
      width={550}
      centered
      title="Create Locations"
      className="modal"
      closeIcon={<CloseIcon />}
      footer={null}
    >
      <Form name="createLocations"
        onFinish={onCreate}
        labelAlign='vertical'
        autoComplete="off"
        initialValues={{
          leaveQuotaResetBasedOn: 'Accounting year',
          noBroughtForwardExpiryDate: true,
          isDefault: false,
          weekStartsOn: 'Monday',
          timeZone: "(UTC+03:00) Minsk",
          fiscalYearStart: {
            month: 'January',
            day: 1,
          }
        }}>
        <Form.Item shouldUpdate>
          {({ isFieldTouched }) => {
            const isTouched = isFieldTouched('locationName')
            return (
              <CustomField label={'Name'} isTouched={isTouched} isRequired={true}>
                <Form.Item
                  name={'locationName'}
                  rules={[{ required: true, message: 'Please input location name!' }]}
                >
                  <Input placeholder="Location name" />
                </Form.Item>
              </CustomField>
            )
          }}
        </Form.Item>

        <Form.Item
          name={'workWeek'}
          label="Work Week"
          rules={[{ required: true, message: 'Please select work week!' }]}
        >
          <Checkbox.Group options={data.workWeekOptions} />
        </Form.Item>

        <Form.Item shouldUpdate>
          <CustomField label={'Leave Quota Reset Based On'} isTouched={true} isRequired={false}>
            <Form.Item
              name={'leaveQuotaResetBasedOn'}
            >
              <Select>
                <Select.Option value='Accounting year'>Accounting year</Select.Option>
                <Select.Option value='User Employment Date'>User Employment Date</Select.Option>
              </Select>
            </Form.Item>
            <CustomToolTip
              text={data.tooltipText['Accounting year']}
            />
          </CustomField>
        </Form.Item>


        <Form.Item shouldUpdate className='fiscalYearWrapper'>
          <CustomField label={'Fiscal Year Start'} isTouched={true} isRequired={false}>
            <Form.Item
              name={['fiscalYearStart', 'month']}
            >
              <Select style={{ width: 125 }}>
                {
                  data.monthOptions.map(({ label }, index) => {
                    return <Select.Option key={index} value={label}>{label}</Select.Option>
                  })
                }
              </Select>
            </Form.Item>
          </CustomField>
          <Form.Item
            name={['fiscalYearStart', 'day']}
          >
            <Select style={{ width: 80 }}>
              {
                data.dayOptions.map((value, index) => {
                  return <Select.Option key={index} value={value}>{value}</Select.Option>
                })
              }
            </Select>
          </Form.Item>
        </Form.Item>

        <Form.Item shouldUpdate>
          <Form.Item name={'noBroughtForwardExpiryDate'} valuePropName="checked">
            <Checkbox>No Brought Forward Expiry Date</Checkbox>
          </Form.Item>
          <CustomToolTip
            text={data.tooltipText['NoBroughtForwardExpiryDate']}
          />
        </Form.Item>

        <Form.Item shouldUpdate>
          <CustomField label='Week Starts On' isTouched={true} isRequired={false}>
            <Form.Item name='weekStartsOn'>
              <Select style={{ width: 145 }}>
                {
                  data.workWeekOptions.map(option => (
                    <Select.Option key={option.value} value={option.value}>{option.label}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
          </CustomField>
        </Form.Item>

        <Form.Item shouldUpdate>
          <CustomField label='Time Zone' isTouched={true} isRequired={true}>
            <Form.Item name='timeZone' rules={[{ required: true, message: 'Please select time zone!' }]}>
              <Select>
                {
                  data.timeZone.map(option => (
                    <Select.Option key={option.value} value={option.value}>{option.value}</Select.Option>
                  ))
                }
              </Select>
            </Form.Item>
            <CustomToolTip
              text={data.tooltipText['TimeZone']}
            />
          </CustomField>
        </Form.Item>

        <Form.Item shouldUpdate>
          {({ isFieldTouched }) => {
            const isTouched = isFieldTouched('Users')
            return (
              <CustomField label={'Users'} isTouched={isTouched} isRequired={true}>
                <Form.Item
                  className='usersWrapper'
                  name={'users'}
                  rules={[{ required: true, message: 'Please choose users!' }]}
                >
                  <Select
                    mode="multiple"
                    placeholder="Add Users"
                    value={selectedUsersItems}
                    onChange={setSelectedUsersItems}
                  >
                    {filteredUsersOptions.map((item) => (
                      <Select.Option key={item} value={item}>
                        {item}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </CustomField>
            )
          }}
        </Form.Item>

        <Form.Item shouldUpdate>
          <Form.Item name={'isDefault'} valuePropName="checked">
            <Checkbox>
              Make This Location Default
            </Checkbox>
          </Form.Item>
          <CustomToolTip
            text={data.tooltipText['isDefault']}
          />
        </Form.Item>
        <div className='leavePolicy'>
          Once you've created a Location, assign a <a href="##">Leave Policy</a> to the Location, in order to enable Users to request Leave. To assign a Leave Policy, go to Location &gt; Leave Policies &gt; Assign Leave Policy.
        </div>
        <Form.Item shouldUpdate>
          {({ resetFields }) => (
            <div className='formBtnWrapper'>
              <Form.Item >
                <Button onClick={() => onFinish(resetFields)}>Cancel</Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType='submit'>Create</Button>
              </Form.Item>
            </div>
          )}
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateLocationModal