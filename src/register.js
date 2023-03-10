import { useAuthValue } from './AuthContext'
const {setTimeActive} = useAuthValue
const validatePassword = () => {
    let isValid = true
    if (password !== '' && confirmPassword !== '') {
        if (password !== confirmPassword) {
            isValid = false
            setError('Passwords does not match')
        }
    }
    return isValid
}
// import { auth } from './firebase'
import {useHistory, Link} from 'react-router-dom'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
import {createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
const register = e => {
    e.preventDefault()
    setError('')
    if (validatePassword()) {
        //create a new user with email and password using firebase
        // createUserWithEmailAndPassword(auth, email, password)
            // then((res) => {
            //     sendEmailVerification(auth.currentUser)
        then(() => {
            setTimeActive(true)
        })
                    .then(() => {
                        history.push('/verify-email')
                    }).catch((err) => alert(err.message))
        } 
                console.log(res.user)
        // .catch(err => setError(err.message))
    

    const history = useHistory() 
    setEmail('')
    setpassword('')
    setConfirmPassword('')
    }

<form onSubmit={register} name='registration_form'></form>
  