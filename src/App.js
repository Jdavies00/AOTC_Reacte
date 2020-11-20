import React, { useState } from 'react'
import './App.css';
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { Container, Row, Col } from 'reactstrap';

function App() {

  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [Bearer, setBearertoken ]= useState('')

  return (
    <div>
      <div>
        <Navbar />
      </div>


      Sign up
      <Register
        setUserEmail={setUserEmail}
        userEmail={userEmail}
        setUserName={setUserName}
        userName={userName}
        setUserPassword={setUserPassword}
        userPassword={userPassword}
      />

      <div>
      login
        <Login
          setUserEmail={setUserEmail}
          userEmail={userEmail}

          setBearertoken= {setBearertoken}
          Bearer= {Bearer}

         
         
          setUserPassword={setUserPassword}
          userPassword={userPassword}

        />
      </div>

    </div>

  );


}

export default App;
  //   <Login?
    //     setUserEmail={setUserEmail}
    //     userEmail={userEmail}
    //     setUserName={setUserName}
    //     userName={userName}
    //     setUserPassword={setUserPassword}
    //     userPassword={userPassword}
    //   />
    // </div>,