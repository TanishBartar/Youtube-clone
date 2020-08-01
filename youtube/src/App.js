import React from 'react';
import './page.css';
import Home from './home'
import Rec from './rec'
import Sidebar from './sidebar'
import SidebarRow from './sidebarrow'
function App() {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div className="page">
        <Sidebar/>
        <Rec />
     </div>
    </div>
  )
}

  



export default App;
