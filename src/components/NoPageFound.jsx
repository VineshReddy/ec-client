import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'


const NoPageFound = () => {
  let history = useHistory()
 
  useEffect(()=> {
    let mounted = true
    setTimeout(() => {
      if(mounted) history.push('/')
    } , 3000)

    return () => mounted = false
  }, [])

  return (
    <main className="flex-center rem15">
      Sorry, Page doesn't exist, Redirecting...
    </main>

  )
}

export default NoPageFound
