import React from 'react'
import SideBar from './SideBar'
import ChatSection from './ChatSection'
import RightSideBar from './RightSideBar'

function Home() {
  return (
    <div className='h-[88vh] flex bg-white'>
        <SideBar/>
        <ChatSection/>
        <RightSideBar/>
    </div>
  )
}

export default Home
 