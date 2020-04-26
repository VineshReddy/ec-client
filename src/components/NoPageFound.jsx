import React, {useState, useEffect} from 'react'
import { Redirect} from 'react-router-dom'


const NoPageFound = () => {
  const [redirect, setRedirect] = useState(false)
 
  useEffect(()=> {
    let mounted = true
    setTimeout(() =>{
        if(mounted) setRedirect(true)
      }
      , 3000)
    return () => mounted = false
  }, [])

  return (
    <main className="flex-center rem15">
      Sorry, Page doesn't exist, Redirecting...
      {
        redirect ? <Redirect to="/" />: null
      }
    </main>

  )
}

export default NoPageFound
