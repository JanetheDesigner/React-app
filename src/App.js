import {useState} from 'react'
import { AuthProvider } from './AuthContext'
import PrivateRoute from './PrivateRoute';

function App() {
  const [timeActive, setTimeActive] = useState(false)

  return (
    <Router>
    //   <PrivateRoute exact path="/" component={Profile} />
            <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Switch>
         ...
        </Switch>
      </AuthProvider>
    // </Router>
  );
}

export default App;


import { useAuthValue } from "./AuthContext"

function childOfAuthProvider() {
    const { currentUser } = useAuthValue()
    console.log(currentUser)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
              
            //   function App() {
            //       const [timeActive,setTimeActive] = useState(false)
        })
    }) 
}



return

import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import Profile from './Profile';

