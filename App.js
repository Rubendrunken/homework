import { createContext, useContext, useState } from 'react';
import './App.css';
import { useUser,UserProvider } from './context/UserProvider';

// function App() {

//   return (
//     <ThemeProvider>
//       <UserProvider>
//         <Theme/>
//         <User/>
//       </UserProvider>
//     </ThemeProvider>
//   );
// }

// function Theme(){
//   console.log("theme render");
//   const {theme,setTheme} = useTheme()
//   const style= {
//     dark : "gray",
//     light : "yellow"
//   }
//   return(<>
//     <p style={{background : style[theme]}}>{theme}</p>
//     <button onClick={()=>{
//       setTheme(theme === "dark" ? "light" : "dark")
//     }}>change</button>
//   </>
//   )
// }

// function User(){
//   console.log("user render");
//   const {user,setUser} = useUser()
//   return(
//     <p>
//       {user.name}
//       <button onClick={()=>{
//         setUser({name : user.name === "Ruben" ? "aaaaa" : "Ruben"})
//       }}>change user</button>
//     </p>
//   )
// }

import { BrowserRouter ,Routes ,Route} from 'react-router-dom';
import Router from './router/Router';
import Nav from "./pages/Header"
import Manu from './pages/Manu';
import { ADAD,ThemeProvider } from './pages/comments/context/ThemeProvider';
function App(){
    return(
        <ThemeProvider> 
            <BrowserRouter>
                {/* <Nav/>
                <Manu/> */}
                <Router/>
            </BrowserRouter>
        </ThemeProvider>    


    )
}

export default App;
