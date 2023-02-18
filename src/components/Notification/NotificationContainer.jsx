import React, { useContext } from 'react'
import './NotificationContainer.css'

import Notification from './Notification/Notification'
import { NotificationContext } from '../../util/NotificationContext/NotificationContext'

const NotificationContainer = () => {
    const { notifications } = useContext(NotificationContext)
  return (
    <div style={notifications.length === 0 ? {visibility: "hidden"}: {}} className='notification-container' >
      {
        notifications.map((notification,idx) => <Notification message={notification} key={idx} />)
      }
    </div>
  )
}

export default NotificationContainer
