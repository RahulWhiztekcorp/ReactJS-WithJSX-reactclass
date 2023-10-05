import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom'
import Product from './Product.js';
import Test from './TEST/test';
import Orders from './TEST/Orders';
import Profile from './TEST/Profile';
import Cart from './TEST/Cart';
import UserPage from './TEST/UserPage'
import CustomHook from './TEST/CustomHook'
import HomePage from './components/Home'
import { createContext } from 'react';
let loggedIn = true;
export const context = createContext()
function App() {
  let isadmin = false ;

  return (
    <>
        {/* <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="homepage" element={<HomePage data={isadmin}/>} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path='user/:id/:name'element={<UserPage/>}>
              <Route path='orders' element={<Orders/>}>
                <Route path='cart' element={<Cart/>}/>
              </Route>
              <Route path='profile' element={<Profile/>}/>
            </Route>
            <Route exact path="customhook" element={<CustomHook />} />
          </Routes>
        </BrowserRouter> */}

        {/* 04-10-2023 */}
        <div>
          <context.Provider value={isadmin}>
            <HomePage></HomePage>
          </context.Provider>
          {/* <HomePage data={isadmin}/> */}
        </div>
        {/*  */}
        {/*<div className='container'>
          {
            isadmin ? (<Admin></Admin>) : null
          }
        </div> */}
        {/* <img src={user} /> */}
        {/* <Product/> */}
    </>
  );
}

function Home() {
  return (<div style={{background:'green',color:'white',padding:'20px'}}><h1>This is from Home Component</h1></div>)
}
function About() {
  return (<div style={{background:'blue',color:'white',padding:'20px'}}><h1>This is from About Component</h1></div>)
}
function Contact() {
  return (<div style={{background:'pink',color:'black',padding:'20px'}}><h1>This is from Contact Component</h1></div>)
}

function Header() {

  function myFunction() {
    document.getElementById("myBtn").disabled = true;
  }
  return (
    <>
      <div className='nav'>
        <ul>
          {/* <li>< img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31" /></li>
          <li>Microsoft 365</li>
          <li>Teams</li>
          <li>Windows</li>
          <li>Surface</li>
          <li>Xbox</li>
          <li>Support</li>
          <li className='btn'>
            <button onClick={myFunction}>All Microsoft</button>
          </li>
          <li>Search</li>
          <li>Cart</li>
          <li>Sign in</li> */}
          <li><Link to='home' style={{textDecoration:'none'}}>Home</Link></li>
          <li><Link to='about' style={{textDecoration:'none'}}>About</Link></li>
          <li><Link to='contact' style={{textDecoration:'none'}}>Contact Us</Link></li>
          <li><Link to='user' style={{textDecoration:'none'}}>User</Link></li>
        </ul>
      </div>
      {/*<div className='div'>
        <ul>
          <li>
            <span>Software</span>
            <ol>
              <li><a href=''>Windows Apps</a></li>
              <li><a href=''>AI</a></li>
              <li><a href=''>OneDrive</a></li>
              <li><a href=''>Outlook</a></li>
              <li><a href=''>Skype</a></li>
              <li><a href=''>OneNote</a></li>
              <li><a href=''>Microsoft Teams</a></li>
            </ol>
          </li>
          <li>
            <span>PCs & Devices</span>
            <ol>
              <li><a href=''>Shop Xbox</a></li>
              <li><a href=''>Accessories</a></li>
            </ol>
          </li>
          <li>
            <span>Entertainment</span>
            <ol>
              <li><a href=''>Xbox Game Pass Ultimate</a></li>
              <li><a href=''>Xbox Live Gold</a></li>
              <li><a href=''>Xbox games</a></li>
              <li><a href=''>PC games</a></li>
              <li><a href=''>Windows digital games</a></li>
            </ol>
          </li>
          <li>
            <span>Business</span>
            <ol>
              <li><a href=''>Microsoft Cloud</a></li>
              <li><a href=''>Microsoft Security</a></li>
              <li><a href=''>Azure</a></li>
              <li><a href=''>Dynamics 365</a></li>
              <li><a href=''>Microsoft 365 for business</a></li>
              <li><a href=''>Microsoft Industry</a></li>
              <li><a href=''>Microsoft Power Platform</a></li>
              <li><a href=''>Windows 365</a></li>
            </ol>
          </li>
          <li>
            <span>Developer & IT</span>
            <ol>
              <li><a href=''>Developer Center</a></li>
              <li><a href=''>Documentation</a></li>
              <li><a href=''>Microsoft Learn</a></li>
              <li><a href=''>Microsoft Tech Community</a></li>
              <li><a href=''>Azure Marketplace</a></li>
              <li><a href=''>AppSource</a></li>
              <li><a href=''>Visual Studio</a></li>
            </ol>
          </li>
          <li>
            <span>Other</span>
            <ol>
              <li><a href=''>Free downloads & security</a></li>
              <li><a href=''>Education</a></li>
              <li><a href=''>Gift Cards</a></li>
              <li><a href=''>Licensing</a></li>
            </ol>
          </li>
        </ul>
      </div> */}
    </>
  )
}

function Admin() {
  return (
    <h1>This is admin dashboard</h1>
  )
}
export default App;
