"use client"
import { useState } from 'react';
import { Navbar, Container, Nav, Image } from 'react-bootstrap'; // Import Ant Design components
import 'bootstrap/dist/css/bootstrap.min.css';
const CustomNavbar = () => {
  
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
    collapseOnSelect
    expand="lg"
    className="bg-body-tertiary fixed-top nav"
    expanded={expanded}
    style={{backgroundColor:"#EEF4FA",textAlign:'center'}}
  >
    <Container className='navmain1 d-flex justify-content-between' > 
      <Navbar.Brand href="#home" className='navbar'>
        <Image src="/group.png" width={40} height={40} className='navimage'/>
        <h2 className='liveads' style={{marginLeft:'10px'}}>LiveInAds</h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

        </Nav>
        <Nav className="ml-autome-auto d-flex align-items-center">
          <Nav.Link href="#home" ><h5 className='navhome'>Home</h5></Nav.Link>
          <Nav.Link href="#ourservices" ><h5 className='navhome'>Services</h5></Nav.Link>
          <Nav.Link href="#whychooseus" ><h5 className='navhome'>About Us</h5></Nav.Link>
          <Nav.Link eventKey={2} href="/contact1">
          <button className='button contactnavbutton'>
      Contact Us <Image src="/arrow.png" height={20} width={20} />
    </button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default CustomNavbar;











// "use client"
// import { useState } from 'react';
// import { Navbar, Container, Nav, Image } from 'react-bootstrap'; // Import Ant Design components
// import 'bootstrap/dist/css/bootstrap.min.css';
// const CustomNavbar = () => {
  
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Navbar
//     collapseOnSelect
//     expand="lg"
//     className="bg-body-tertiary fixed-top nav"
//     expanded={expanded}
//     style={{backgroundColor:"#EEF4FA",textAlign:'center'}}
//   >
//     <Container className='navmain1 d-flex justify-content-between' > 
//       <Navbar.Brand href="#home" className='navbar'>
//         <Image src="/group.png" width={40} height={40} className='navimage'/>
//         <h2 className='liveads' style={{marginLeft:'10px'}}>LiveInAds</h2>
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavbar} />
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="me-auto">

//         </Nav>
//         <Nav className="ml-autome-auto d-flex align-items-center">
//           <Nav.Link href="#home" ><h5 className='navhome'>Home</h5></Nav.Link>
//           <Nav.Link href="#ourservices" ><h5 className='navhome'>Services</h5></Nav.Link>
//           <Nav.Link href="#whychooseus" ><h5 className='navhome'>About Us</h5></Nav.Link>
//           <Nav.Link eventKey={2} href="/contact1">
//           <button className='button contactnavbutton'>
//       Contact Us <Image src="/arrow.png" height={20} width={20} />
//     </button>
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
//   );
// };

// export default CustomNavbar;
