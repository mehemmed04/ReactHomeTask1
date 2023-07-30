import React from 'react';

const Sidebar = () => {
  return (
    <div style={{  height: '100vh', backgroundColor: '#9681EB' }}>
        <br></br>

      <h1 style={{color:'white'}}>Bootstrap SideBar</h1>
        <br></br>
        <br></br>
        <p style={{color:'white', fontSize:'20px',fontWeight:'bold'}}><img style={{width:'23px',height:'23px',marginTop:'-6px',marginLeft:'-15px'}} src='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'></img>  Home</p>
        <br></br>
        <p style={{color:'white', fontSize:'20px',fontWeight:'bold'}}><img style={{width:'35px',height:'27px',marginTop:'-6px',marginLeft:'-15px'}} src='https://o.remove.bg/downloads/514d85f6-abd8-4893-b4ef-309a747b728d/340-3406810_info-icon-white-white-info-icon-png-transparent-removebg-preview.png'></img>  About</p>
        <br></br>
        <p style={{color:'white', fontSize:'20px',fontWeight:'bold'}}><img style={{width:'33px',height:'28px',marginTop:'-6px',marginLeft:'-35px'}} src='https://o.remove.bg/downloads/ef6295cd-f461-448f-b106-88016fa132d0/78-784644_circular-question-mark-button-question-mark-icon-white-removebg-preview.png'></img>    FAQ</p>
        <br></br>
        <p style={{color:'white', fontSize:'20px',fontWeight:'bold'}}><img style={{width:'25px',height:'25px',marginTop:'-4px'}} src='https://o.remove.bg/downloads/9e45f354-66af-4d54-a523-14a9e96a086f/phone-icon-white-contact-us-icon-transparent-white-11553435474tl7fefjrod-removebg-preview.png'></img>    Contact</p>

    </div>
  );
};

export default Sidebar;