import {
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "./firebase";
import { useHistory } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
const { setTimeActive } = useAuthValue();
const history = useHistory();
const login = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if (!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            setTimeActive(true);
            history.push("/verify-email");
          })
          .catch((err) => alert(err.message));
      } else {
        history.push("/");
      }
    })
    .catch((err) => setError(err.message));
};
<form onSubmit={login} name="login_form"></form>;
