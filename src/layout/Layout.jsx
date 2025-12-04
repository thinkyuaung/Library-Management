import React, { useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Nav from '../components/nav';
import { SwitchTransition,CSSTransition } from 'react-transition-group';
import './style.css';


function Layout() {
  let location = useLocation();
  const nodeRef = useRef(null); 

  return (
    <div className=''>
        <Nav />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames='fade'
          timeout={200}
          nodeRef={nodeRef}   
        >
          <div className='max-w-3xl mx-auto'>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>

        
        
    </div>
  )
}

export default Layout