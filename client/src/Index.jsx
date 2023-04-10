import React from 'react'
import {Link} from "react-router-dom"
import {UserCircleIcon} from "@heroicons/react/24/outline";
function Index() {
  return (
    <div >
    <header className="p-4 flex justify-center"
  >
<Link to="/login">   <div className="flex gap-2 border h-10 border-gray-300 rounded full pu-2 px-4">
      <UserCircleIcon className="bg-gray-500 text-white rounded-full p-1 top-1"/>
    </div></Link> 
  </header>
    </div>
  )
}

export default Index