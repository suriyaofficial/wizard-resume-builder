import React,{useState}from 'react'
import {AppBar,Toolbar,Typography,Tabs,Tab,useMediaQuery,useTheme}from "@mui/material";
import {Link}from 'react-router-dom'
import './component.css'
import Drawer from './content/Drawer/DrawerComp'
import logo from '../assets/navlogo.jpg'
const Navbar = () => {
  
  const[value,setValue]=useState();
  const theme=useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  
  return (
        <>
          <AppBar position="float"  sx={{background:"#ffffff"}}>
            <Toolbar>
            
              {
                isMatch ?
                (
                  <>
                  <img className='img' src={logo}alt=''/>
                  <Drawer/>
                  </>
                ): (<>
                <img className='img' src={logo}alt=''/>
                  
                  <Tabs 
                sx={{marginLeft:"auto"}}
                textColor= "primary"
                value={value}
                onChange={(e,value)=>setValue(value)}
                indicatorColor="secondary">
                  
                  <Tab component={Link} to={"home"}label="Templete"/>
                  <Tab component={Link} to={"about"}label="About"/>
                 
              </Tabs>
              </>

                )
              }           
              
              </Toolbar>
              
          </AppBar>
          
          
          
        </>
  )
}

export default Navbar


{/* <div className='Nav'>
        <div>
          <img  className='img' src={Navlogo}alt=""></img>
        </div>
        <div className='Nav-items'>
          <Link className='Nav-link'to="home">Templete</Link>
          <Link className='Nav-link'to="about">About Page</Link>
        </div>
    </div> */}
