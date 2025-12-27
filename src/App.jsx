import React from 'react'
import Home from './pages/HomePage'
import Navbar from './components/Navbar'
import MailboxDetails from './pages/MailboxDetails'
import MailboxForm from './pages/MailboxForm'
import MailboxList from './pages/MailboxList'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/mailboxes' element={<MailboxList/>}></Route>
        <Route path='/new-mailbox' element={<MailboxForm />}></Route>
        <Route path='/mailboxes/:id' element={<MailboxDetails />}></Route>
      </Routes>
      
    </div>
  )
}

export default App
