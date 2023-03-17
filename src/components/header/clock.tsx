import React, { useState, useEffect } from 'react'
import styles from "./header.module.css" 

export const Clock = () => {
  var [date, setDate] = useState(new Date())

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)
    }
  })

  return (
    <div className={styles.middle}>
      <span>
        {date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </span>
    </div>
  )
}

export default Clock
