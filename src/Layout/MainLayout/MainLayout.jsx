import React from 'react'
import Footer from '../../Components/Footer/Footer'

import Header from '../../Components/Header/Header'
import Sidebar from "../../Components/Sidebar/Sidebar"
const MainLayout = ({children}) => {
  return (
    <div className="wrapper">
        <Header/>
      <div className="content">{children}</div> 
        <Footer />
    </div>

  )
}

export default MainLayout
