import React from 'react';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import {Navbar, Feed, PineDetail, CreatePin, Search} from "../components"
const Pins = ({user}) => {
  const [searchTerm, setSeachTerm] = useState("");

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <Navbar user={user} searchTerm={searchTerm} setSeachTerm={setSeachTerm}/>
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/category/:categoryId' element={<Feed />}/>
          <Route path='/pin-detail/:pinId' element={<PineDetail  user={user}/>}/>
          <Route path='/create-pin' element={<CreatePin user={user}/>}/>
          <Route path='/search' element={<Search searchTerm={searchTerm} setSeachTerm={setSeachTerm}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Pins