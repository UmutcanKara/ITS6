import React, { createContext, useState } from 'react'


export const NotificationContext = createContext({
    notifications: [],
    addNotification: () => {},
    removeNotification: () => {},
})

const NotificationContextProvider = ({ children }) => {
    const [notifications, setNotifications] = useState([])
    const addNotification = notificationMessage => {
        setNotifications([...notifications, notificationMessage])
        console.log("notification added");
        setTimeout(() => {
            removeNotification(notificationMessage)
        }, 3000)
    }
    const removeNotification = notificationMessage => {
        setNotifications(prevState => prevState.filter(notification => notification !== notificationMessage))
        console.log("notification removed");
    }

    const contextValues = {
        notifications,
        addNotification,
        removeNotification
    }

  return (
    <NotificationContext.Provider value={contextValues}>
      {children}
    </NotificationContext.Provider>
  )
}

export default NotificationContextProvider
