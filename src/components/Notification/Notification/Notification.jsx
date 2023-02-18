import React, { useContext } from 'react'
import './Notification.css'

import Button from '../../Button/Button'
import { NotificationContext } from '../../../util/NotificationContext/NotificationContext'

const Notification = ({ message }) => {
    const { removeNotification } = useContext(NotificationContext)
    const onClickHandler = (e) => {
        e.preventDefault();
        removeNotification(message)
    }
  return (
    <div className='notification'>
      <h3>
        {message}
      </h3>
      <button type='button' onClick={e => onClickHandler(e)} >X</button>
    </div>
  )
}

export default Notification