import Chat from "./components/Chat";
import Navbar from "./components/Navbar"
import {auth} from "./firebase"
import {useAuthState} from "react-firebase-hooks/auth"
function App() {
  const style = {
    appContainer:'max-w-[728px] mx-auto text-center',
    sectionContainer:'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'
  };
  const [user] = useAuthState(auth)
 
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
          {/* Navbar Component*/}
          <Navbar/>
          {/* Chat Component  */}
          {user ? <Chat/> :null}
          
      </section>
    </div>
  )
}

export default App
