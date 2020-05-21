import React, {useState, useEffect} from 'react'


export default function Snackbar() {
  const [on, setOn] = useState(true)

  const handleClose = () => {
    setOn(state => ({on: !on}))
  }

  useEffect = () => {

  }


  return (
      on? (
        <div className="snackbar" onClick={handleClose}>
          Error:  Invalid Credentials
        </div>)
      :null

  )
}


