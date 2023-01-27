// react
import React from 'react'

// components
import Header from './Header'

// styles
import classes from "./Layout.module.scss"

const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <div className={classes.container}>
        {children}
      </div>
    </>
  )
}

export default Layout
