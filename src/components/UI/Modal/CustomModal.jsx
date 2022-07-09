import { Button, Modal } from 'antd'
import React from 'react'
import CloseIcon from '../../Icons/CloseIcon'
import "./CreateLocationModal.css"

const CustomModal = ({ isModalOpen, onClose, onOk, title, okText, children }) => {
  return (
    <Modal
      visible={isModalOpen}
      onCancel={onClose}
      width={460}
      centered
      title={title}
      className="modal custom-modal"
      closeIcon={<CloseIcon />}
      footer={[
        <Button key="submit" type="primary" className='deleteBtn' onClick={onOk}>
          {okText}
        </Button>,
      ]}
    >
      {children}
    </Modal>
  )
}

export default CustomModal