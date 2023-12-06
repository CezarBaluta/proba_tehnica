import React, {useEffect, useState} from 'react'
import  Navbar  from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
function App() {

  const [backendData, setBackendData] = useState([{}])
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  
  useEffect(() => {
    
    if (isLoggedIn) {
      fetch('/api')
        .then((res) => res.json())
        .then((data) => {
          setBackendData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  },[isLoggedIn]);

  const Login = (token) => {
    localStorage.setItem('token', token);
    setIsLoggedIn(true);

  };

  const Logout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className = "App">
      <Navbar isLoggedIn={isLoggedIn} onLogin={Login} onLogout={Logout} />
      <Footer />
     {/*
      {(typeof backendData.message === 'undefined') ? (
        <p>Loading...</p>
      ): (
        backendData.message.map((item, index) => (
          <p key={index}>{item}</p>
        ))
      )}
        */}
    </div>
  )
}

export default App