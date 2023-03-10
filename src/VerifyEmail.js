import { useAuthValue } from './AuthContext'
import { useHistory } from 'react-router-dom'

const { timeActive, setTimeActive } = useAuthValue() 
const [buttonDisabled, setButtomDisabled] = useState(false)
    const history = useHistory
 
 
useEffect(() => {
    const interval = setInterval(() => {
      currentUser?.reload()
      .then(() => {
        if(currentUser?.emailVerified){
          clearInterval(interval)
          history.push('/')
        }
      })
      .catch((err) => {
        alert(err.message)
      })
    }, 1000)
  }, [history, currentUser])
 
        < button
onclick = { resendEmailVerification }
disabled = { timeActive }
    > Resend Email {timeActive && time } </button>
const resendEmailVerification = () => {
    setButtomDisabled(true)
    sendEmailVerification(auth.currentUser)
        .then(() => {
            setButtomDisabled(false)
            setTimeActive(true)
        }).catch((err) => {
            alert(err.message)
            setButtomDisabled(false)
            const [time, setTime] = useState(60)
            const [timeActive,setTimeActive] = useState(false)
        })
    
        useEffect(() => {
            let interval = null
            if(timeActive && time !== 0 ){
              interval = setInterval(() => {
                setTime((time) => time - 1)
              }, 1000)
            }else if(time === 0){
              setTimeActive(false)
              setTime(60)
              clearInterval(interval)
            }
            return () => clearInterval(interval);
          }, [timeActive, time])
    
        
    }
        
     <br><span>{currentUser?.email}</span></br>
import { useEffect, useState } from 'react'
import { auth } from './firebase'
import {sendEmailVerification} from 'firebase/auth'
  