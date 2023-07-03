import { Alert, Snackbar } from '@mui/material'
import React from 'react'

function Notification (props) {
  console.log("props",props.setNotify)
  const {notify} = props
  console.log("notify",notify.isOpen,notify.type,notify.message,notify)

  return (
    <div>
      <Snackbar 
      open={notify.isOpen}
      autoHideDuration={5000}
      >
        <Alert security={notify.type}>
{notify.message}
        </Alert>
      </Snackbar>
      
    </div>
  )
}

export default Notification