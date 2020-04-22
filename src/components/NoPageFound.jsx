import React, {useState, useEffect} from 'react'
import { Redirect} from 'react-router-dom'


const NoPageFound = () => {
  const [redirect, setRedirect] = useState(false)
 
  useEffect(()=> {
    setTimeout(() =>
      setRedirect(true)
      , 3000)
  })

  return (
    <main class="flex-center rem15">
      Sorry, Page doesn't exist, Redirecting...
      {
        redirect ? <Redirect to="/" />: null
      }
    </main>

  )
}

export default NoPageFound
