import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth"
import GoogleButton from "react-google-button"
import { auth } from '../firebase'
const style = {
  wrapper:'flex justify-center '
}
const googleLogin = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth,provider);
}
const Login = () => {
  
  return (
    <div className={style.wrapper}>
      <GoogleButton className="focus:outline-none" onClick={googleLogin}/>
     </div>
  )
}

export default Login