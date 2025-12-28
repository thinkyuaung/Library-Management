import React, { useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Nav from '../components/nav';
import { SwitchTransition,CSSTransition } from 'react-transition-group';
import './style.css';
import useTheme from '../hooks/useTheme';

function Layout() {
  let location = useLocation();
  const nodeRef = useRef(null); 
  let {isDark} = useTheme();

  return (
    <div className={`${isDark?'bg-black text-white min-h-screen':'bg-white text-black min-h-screen' }`}>
        <Nav />

      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          classNames='fade'
          timeout={200}
          nodeRef={nodeRef}   
        >
          <div className='max-w-4xl mx-auto'>
            <Outlet />
          </div>
        </CSSTransition>
      </SwitchTransition>

        
        
    </div>
  )
}

export default Layout