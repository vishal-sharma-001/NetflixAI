import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useEffect} from "react";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from './utils/usersSlice';
import { useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed in
          navigate("/browse");
          dispatch(addUser({uid : user.uid, email : user.email, displyName: user.displayName}))
        // ...
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    return () => unsubscribe()
  }, []) 

  return (
    <div className="App select-none">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
