

"use client"
import { useState } from 'react';
import { Row, Col, Typography, Button, Radio } from 'antd';
import { Navbar, Nav } from 'react-bootstrap';

import { Image } from 'react-bootstrap';
import Link from 'next/link';
import {bootstrap} from'bootstrap/dist/css/bootstrap.min.css';
import {  Container } from 'react-bootstrap'; 
import 'antd/dist/antd';
import CustomNavbar from '../header/page';
const { Title, Paragraph } = Typography;

const YourComponent = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
   <div>
       <div style={{backgroundColor:"#EEF4FA"}}>
    <CustomNavbar />
      <div className='Main' >
    <Container>
      <div className="row pt-5 sm-mt-0"  >
        <div className='col-sm-6 p-3'>
        <Title level={4} className='headroi'>For Better ROI </Title>
        <p className='Hed-title'>Grow your Online Business with us</p>
        <p className='sub-tex'>Reliable and value-driven marketing agency that works with reputable global brands</p>
        <div className='row d-flex justify-content-lg-evenly px-3'>
        <button type="button" class="btn btn-primary btn col-6 w-auto px-3">Touch on it</button>
          <button type="button" class="btn btn-link-light btn col-6 p-2 w-auto px-3 border">Konw more</button>
        </div>
        </div>
        <div className='col-sm-6 p-3'>
        <div className='baner-Image'>
        <Image src="/photo1.png" className='img-fluid' preview={false} />
        </div>
          </div>
      </div>
    </Container>
      </div>
    </div>
    <Container>
     <p level={5} className='main-title' >We are a global marketing agency that combines design expertise with technology and intelligence.</p>
     </Container>
      <div style={{background: "rgba(238, 244, 250, 1)"}}>
      <Container >
     <div>
        <div className=' p-3'>
        <Title level={4} className='headroi'>Our Services</Title>
        <p className='Hed-title'>We are the best choice of <br /> Digital Marketing</p>
        </div> 
        <div className="row">
        <div className='col-sm-4 p-3'>
            <Image
                src={'/performence.png'}
                className='img-fluid images'
                alt='image'
            />
            <p>Performance Marketing</p>
            <p className='sub-tex'>Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways.</p> 
        </div>
        <div className='col-sm-4 p-3'>
        <Image
                src={'/media.png'}
                className='img-fluid images'
                alt='image'
            />
            <p>Media Buying</p>
            <p className='sub-tex'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p> 
          </div>
          <div className='col-sm-4 p-3'>
        <Image
                src={'/content.png'}
                className='img-fluid images'
                alt='image'
            />
            <p>Content Marketing</p>
            <p className='sub-tex'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p> 
          </div>  
      </div>
          <div className="row">
            <div className='col-sm-4 p-3'>
              <Image
                src={'/lead.png'}
                className='img-fluid images'
                alt='image'
              />
              <p>Lead Generation</p>
              <p className='sub-tex'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>
            <div className='col-sm-4 p-3'>
              <Image
                src={'/web.png'}
                className='img-fluid images'
                alt='image'
              />
              <p>Web Development</p>
              <p className='sub-tex'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>
            <div className='col-sm-4 p-3'>
              <Image
                src={'/martech.png'}
                className='img-fluid images'
                alt='image'
              />
              <p>Martech</p>
              <p className='sub-tex'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
            </div>
          </div>
     </div>
     </Container>
      </div>
     <Container className='Main1'>
     <div className="row">
        <div className='col-sm-6 p-3'>
        <Title level={4} className='headroi'>Why Choose Us? </Title>
        <p className='Hed-title'>We have the best team <br /> of marketing experts</p>
        <p className='sub-tex'> Advertising and innovation that will help both retailers and affiliates <br/> grow their businesses in different ways. Advertising and innovation that <br/> will help both retailers and affiliates grow.</p>
        </div>
        <div className='col-sm-6 p-3'>
        <div className='baner-Image'>
        <Image src="/photo2.png" className='img-fluid'  alt='image' />
        </div>
          </div>
      </div>
     </Container>
       <div style={{background: "rgba(242, 242, 242, 1)"}}>
       <Container className='Main1'>
        <div>
        <Title level={4} className='headroi'>Testimonials </Title>
        <p className='Hed-title'>Trust is built with Consistency</p>
        <p className='sub-tex'> “Advertising and innovation that will help both retailers and affiliates grow their businesses <br/> in different ways innovation that will help both retailers and affiliates grow their businesses <br/>in different ways Advertising and innovation that will help both retailers and affiliates grow.”</p>
        <Row justify="space-between" align="middle">
      <Col>
        <div>
          <h2>Gopichand Bolloju</h2>
          <p>CEO of Slog Digital</p>
        </div>
      </Col>
      <Col>
        <Image src="/google1.png" className='baner-Image' alt='image' />
      </Col>
    </Row>
        </div>
        <div>
        <p className='sub-tex'> “Advertising and innovation that will help both retailers and affiliates grow their businesses <br/> in different ways innovation that will help both retailers and affiliates grow their businesses <br/>in different ways Advertising and innovation that will help both retailers and affiliates grow.”</p>
        <Row justify="space-between" align="middle">
      <Col>
        <div>
          <h2>Gopichand Bolloju</h2>
          <p>CEO of Slog Digital</p>
        </div>
      </Col>
      <Col>
        <Image src="/google1.png" className='baner-Image' alt='image' />
      </Col>
    </Row>
        </div>
     </Container>
        </div> 

        <div style={{background: "rgba(238, 244, 250, 1)"}}>
     <Container className='Main1'>
        <div className='baner-Image'>
        <Image src="/allimg.png" className='img-fluid' preview={false} />
        </div>
     </Container>
     </div> 
     <div style={{ backgroundImage: 'linear-gradient(87.65deg, #165DD7 4.35%, #5491CF 100%)' }}>
     <Container className='Main1'>
  <div className='d-flex flex-column align-items-center'>
    <p className='Hed-title text-center'>
      Let’s create a measurable impact <br/> on your business.
    </p> 
    <Button className='mt-3'>
      <Link href="/contact" passHref>
        <p style={{ textDecoration: "none", color: "inherit"}}>
          Design a Quote <Image src="/quitarrow.png" alt='image' />
        </p>
      </Link>
    </Button>
  </div>
</Container>

      </div>
     <Container>
     <p className='fotter Main1'> Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</p>
        <p className='sub-tex'>Contact - 98490278087</p>
     </Container>
   </div>
  );
};

export default YourComponent;











































// "use client"
// import { useState } from 'react';
// import { Row, Col, Typography, Button, Radio } from 'antd';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {  Container } from 'react-bootstrap'; 
// import 'antd/dist/antd';
// import CustomNavbar from '../header/page';
// const { Title, Paragraph } = Typography;

// const YourComponent = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//    <div>
//        <div style={{backgroundColor:"#EEF4FA"}}>
//     <CustomNavbar />
//       <div style={{ paddingTop: '150px', paddingBottom: '150px' }}>
//     <Container>
//     <Row gutter={[16, 16]} justify="center">
//   <Col xs={24} sm={24} md={12} lg={12}>
//     <Typography>
//       <div style={{ width: '620px' }}>
//         <Title level={4} className='headroi'>
//           For Better ROI
//         </Title>
//         <Title style={{fontSize:"65px"}}>
//           Grow your Online <br />  Business with us
//         </Title>
//         <Paragraph>
//           Reliable and value-driven marketing agency that works with <br /> reputable global brands
//         </Paragraph>
//         <div className='buttoncontainer'>
//           <Button type="primary" className='getbutton'><Link href='/contact' className='getintouch'>Get In Touch</Link></Button>
//           <Button className='knowbutton'><Link href="#knowmore" className='knowmorelink'>Know More</Link></Button>
//         </div>
//       </div>
//     </Typography>
//   </Col>
//   <Col xs={24} sm={24} md={12} lg={12}>
//     <div style={{ textAlign: 'center' }}>
//       <Image src="/photo1.png" className='image1' width={540} height={540} preview={false} />
//     </div>
//   </Col>
// </Row>
//     </Container>
//       </div>
//     </div>
//     <div style={{ width: '100%', maxWidth: '1440px', height:"493px", margin: '0 auto', padding: '150px 24px', gap: '10px'}}>
//     <Container>
//       <Title style={{fontSize:"45px"}}> We are a global marketing agency that <br/> combines design expertise with technology <br /> and intelligence.</Title>
//     </Container>
//       </div>
//       <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', paddingTop: '150px', paddingLeft: '108px', paddingRight: '108px', gap: '10px',backgroundColor:" #EEF4FA " }}>
//       <Row gutter={[16, 16]} justify="center">
//         <Col xs={24} sm={24} md={24} lg={24} xl={24}>
//           <div >
//             <Title level={5} className='ourhead' style={{color:'blue'}} >Our Services</Title>
//             <Title level={2} style={{fontSize:"63px"}}>We are the best choice of <br /> Digital Marketing</Title>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//          <div>
//             <div>
//             <Image
//                 src={'/performence.png'}
//                 height={80}
//                 width={80}
//                 className='images'
//                 alt='image'
//             />
//             </div>
//             <Title level={4} className='con3Tittle'>Performance Marketing</Title>
//             <p className='con3para'>Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways.</p>
//         </div>
//        </Col>

//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/media.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Media Buying</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/content.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Content Marketing</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/lead.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Lead Generation</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/web.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Web Development</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/martech.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Martech </Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//       </Row>
//     </div> 
//     <div style={{ width: '100%', maxWidth: '1440px', top: '3343.86px', left: '5547px', padding: '150px 108px 150px 108px', gap: '10px' }}>
//     <Container>
//         <Row gutter={[16, 16]} justify="center">
//           <Col xs={24} sm={24} md={12} lg={12} xl={12}>
//             <div>
//               <h4>
//                 Why Choose Us?
//               </h4>
//               <Title level={2} className='con4Tittle' style={{fontSize:"48px"}}>
//                 We have the best team <br /> of marketing experts
//               </Title>
//               <Paragraph className='con4para' style={{fontSize:"18px"}}>
//                 Advertising and innovation that will help both retailers and affiliates <br/> grow their businesses in different ways. Advertising and innovation that <br/> will help both retailers and affiliates grow.
//               </Paragraph>
//               <div>
//                 <Row gutter={[16, 16]} justify="start" className='plus'>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>450M</h1>
//                       <p className='salepara'>Sales Growth</p>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>200M</h1>
//                       <p className='salepara'>Page Visits</p>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>90M+</h1>
//                       <p className='salepara'>Engagements</p>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </div>
//           </Col>
//           <Col xs={24} sm={24} md={12} lg={12} xl={12}>
//             <div>
//               <div className='imageconatiner1'>
//                 <Image src="/photo2.png" className='image2' width={540} height={500} alt='image' />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     <div style={{ width: '100%', maxWidth: '1440px', height: '750px', padding: '126px 62px', gap: '10px', background: 'rgba(242, 242, 242, 1)' }}>
//       <Container style={{ width: '1224px', height: '736px', gap: '40px' }}>
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             <h5 className='con5he' style={{color:'blue'}}>Testimonials</h5>
//             <h2 className='con5Tittle' style={{fontSize:"48px"}}>Trust is built with Consistency</h2>
//             <Paragraph className='con5para'>“Advertising and innovation that will help both retailers and affiliates grow their businesses <br/> in different ways innovation that will help both retailers and affiliates grow their businesses <br/>in different ways Advertising and innovation that will help both retailers and affiliates grow.”</Paragraph>
//             <Row justify="space-between" align="middle" style={{ width: '900px', height: '70px' }}>
//       <Col>
//         <div>
//           <h2>Gopichand Bolloju</h2>
//           <p>CEO of Slog Digital</p>
//         </div>
//       </Col>
//       <Col>
//         <Image src="/google1.png" height={40} width={120} alt='image' />
//       </Col>
//     </Row>
//           </Col>
//         </Row>
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             <hr />
//             <Paragraph>“Advertising and innovation that will help both retailers and affiliates grow their businesses<br /> in different ways innovation that will help both retailers and affiliates grow their businesses<br/> in different ways Advertising and innovation that will help both retailers and affiliates grow.”</Paragraph>
//             <Row justify="space-between" align="middle" style={{ width: '900px', height: '70px' }} >
//               <Col>
//                 <div>
//                   <h2>Gopichand Bolloju</h2>
//                   <p>CEO of Slog Digital</p>
//                 </div>
//               </Col>
//               <Col>
//                 <Image src="/google1.png" height={40} width={120} alt='image' />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     <div style={{
//      width: '100%', maxWidth: '1440px',
//       height: '735.66px',
//       top: '5131.86px',
//       left: '5547px',
//       padding: '150px 108px 150px 108px',
//       gap: '10px',
//       background: 'rgba(238, 244, 250, 1)',
//     }}>
//       <Row justify="center" align="middle">
//         <Col>
//           <div style={{ width: '1224px', height: '435.66px', gap: '64px' }}>
//             <Image src="/allimg.png" width={1140} height={263}className='allimg' alt='image' />
//           </div>
//         </Col>
//       </Row>
//     </div>
//     <div style={{ 
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
//   width: '100%', 
//   maxWidth: '1440px', 
//   height: '443px', 
//   backgroundColor: '#3328ff',
//   padding: '20px' 
// }}>
//  <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//   <Title level={1} className='con7Tittle' style={{ fontSize: '64px', textAlign: 'center' }}>
//     Let’s create a measurable impact <br/> on your business.
//   </Title>
//   <Button style={{ textAlign: 'center' }}>
//     <Link href="/contact" passHref>
//       <p style={{ textDecoration: "none", margin: 0 }}>
//         Design a Quote <Image src="/quitarrow.png" height={22} width={25} alt='image' />
//       </p>
//     </Link>
//   </Button>
// </Container>

// </div>

// <div style={{paddingTop:'20px'}}>
//   <Container>
//     <Paragraph className='con8Tittle' style={{fontSize:'24px'}} >
//       Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
//     </Paragraph>
//     <Paragraph className='con8Tittle' style={{fontSize:'20px'}}>
//       Contact - 98490278087
//     </Paragraph>
//   </Container>
// </div>

//    </div>
//   );
// };

// export default YourComponent;




























// "use client"
// import { useState } from 'react';
// import { Row, Col, Typography, Button, Radio } from 'antd';
// import { Navbar, Nav } from 'react-bootstrap';
// import { Image } from 'react-bootstrap';
// import Link from 'next/link';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {  Container } from 'react-bootstrap'; 
// import 'antd/dist/antd';
// import CustomNavbar from '../header/page';
// const { Title, Paragraph } = Typography;

// const YourComponent = () => {
//   const [expanded, setExpanded] = useState(false);

//   const toggleNavbar = () => {
//     setExpanded(!expanded);
//   };

//   return (
//    <div>
//        <div style={{backgroundColor:"#EEF4FA"}}>
//     <CustomNavbar />
//       <div style={{ paddingTop: '150px', paddingBottom: '150px' }}>
//     <Container>
//     <Row gutter={[16, 16]} justify="center">
//   <Col xs={24} sm={24} md={12} lg={12}>
//     <Typography>
//       <div style={{ width: '620px' }}>
//         <Title level={4} className='headroi'>
//           For Better ROI
//         </Title>
//         <Title style={{fontSize:"65px"}}>
//           Grow your Online <br />  Business with us
//         </Title>
//         <Paragraph>
//           Reliable and value-driven marketing agency that works with <br /> reputable global brands
//         </Paragraph>
//         <div className='buttoncontainer'>
//           <Button type="primary" className='getbutton'><Link href='/contact' className='getintouch'>Get In Touch</Link></Button>
//           <Button className='knowbutton'><Link href="#knowmore" className='knowmorelink'>Know More</Link></Button>
//         </div>
//       </div>
//     </Typography>
//   </Col>
//   <Col xs={24} sm={24} md={12} lg={12}>
//     <div style={{ textAlign: 'center' }}>
//       <Image src="/photo1.png" className='image1' width={540} height={540} preview={false} />
//     </div>
//   </Col>
// </Row>
//     </Container>
//       </div>
//     </div>
//     <div style={{ width: '100%', maxWidth: '1440px', height:"493px", margin: '0 auto', padding: '150px 24px', gap: '10px'}}>
//     <Container>
//       <Title style={{fontSize:"45px"}}> We are a global marketing agency that <br/> combines design expertise with technology <br /> and intelligence.</Title>
//     </Container>
//       </div>
//       <div style={{ width: '100%', maxWidth: '1440px', margin: '0 auto', paddingTop: '150px', paddingLeft: '108px', paddingRight: '108px', gap: '10px',backgroundColor:" #EEF4FA " }}>
//       <Row gutter={[16, 16]} justify="center">
//         <Col xs={24} sm={24} md={24} lg={24} xl={24}>
//           <div >
//             <Title level={5} className='ourhead' style={{color:'blue'}} >Our Services</Title>
//             <Title level={2} style={{fontSize:"63px"}}>We are the best choice of <br /> Digital Marketing</Title>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//          <div>
//             <div>
//             <Image
//                 src={'/performence.png'}
//                 height={80}
//                 width={80}
//                 className='images'
//                 alt='image'
//             />
//             </div>
//             <Title level={4} className='con3Tittle'>Performance Marketing</Title>
//             <p className='con3para'>Advertising and innovation that will help both retailers and affiliates grow their businesses in different ways.</p>
//         </div>
//        </Col>

//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/media.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Media Buying</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/content.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Content Marketing</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/lead.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Lead Generation</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/web.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Web Development</Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//         <Col xs={24} sm={24} md={8} lg={8} xl={8}>
//           <div >
//             <div>
//               <Image src={'/martech.png'} height={80} width={80} className='images' alt='image' />
//             </div>
//             <Title level={5} className='con3Tittle'>Martech </Title>
//             <p className='con3para'>Place ads about your company, services, or products on websites that help drive more sales in the online market.</p>
//           </div>
//         </Col>
//       </Row>
//     </div> 
//     <div style={{ width: '100%', maxWidth: '1440px', top: '3343.86px', left: '5547px', padding: '150px 108px 150px 108px', gap: '10px' }}>
//     <Container>
//         <Row gutter={[16, 16]} justify="center">
//           <Col xs={24} sm={24} md={12} lg={12} xl={12}>
//             <div>
//               <h4>
//                 Why Choose Us?
//               </h4>
//               <Title level={2} className='con4Tittle' style={{fontSize:"48px"}}>
//                 We have the best team <br /> of marketing experts
//               </Title>
//               <Paragraph className='con4para' style={{fontSize:"18px"}}>
//                 Advertising and innovation that will help both retailers and affiliates <br/> grow their businesses in different ways. Advertising and innovation that <br/> will help both retailers and affiliates grow.
//               </Paragraph>
//               <div>
//                 <Row gutter={[16, 16]} justify="start" className='plus'>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>450M</h1>
//                       <p className='salepara'>Sales Growth</p>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>200M</h1>
//                       <p className='salepara'>Page Visits</p>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='numbermargin'>
//                       <h1 className='head450'>90M+</h1>
//                       <p className='salepara'>Engagements</p>
//                     </div>
//                   </Col>
//                 </Row>
//               </div>
//             </div>
//           </Col>
//           <Col xs={24} sm={24} md={12} lg={12} xl={12}>
//             <div>
//               <div className='imageconatiner1'>
//                 <Image src="/photo2.png" className='image2' width={540} height={500} alt='image' />
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     <div style={{ width: '100%', maxWidth: '1440px', height: '750px', padding: '126px 62px', gap: '10px', background: 'rgba(242, 242, 242, 1)' }}>
//       <Container style={{ width: '1224px', height: '736px', gap: '40px' }}>
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             <h5 className='con5he' style={{color:'blue'}}>Testimonials</h5>
//             <h2 className='con5Tittle' style={{fontSize:"48px"}}>Trust is built with Consistency</h2>
//             <Paragraph className='con5para'>“Advertising and innovation that will help both retailers and affiliates grow their businesses <br/> in different ways innovation that will help both retailers and affiliates grow their businesses <br/>in different ways Advertising and innovation that will help both retailers and affiliates grow.”</Paragraph>
//             <Row justify="space-between" align="middle" style={{ width: '900px', height: '70px' }}>
//       <Col>
//         <div>
//           <h2>Gopichand Bolloju</h2>
//           <p>CEO of Slog Digital</p>
//         </div>
//       </Col>
//       <Col>
//         <Image src="/google1.png" height={40} width={120} alt='image' />
//       </Col>
//     </Row>
//           </Col>
//         </Row>
//         <Row gutter={[16, 16]}>
//           <Col span={24}>
//             <hr />
//             <Paragraph>“Advertising and innovation that will help both retailers and affiliates grow their businesses<br /> in different ways innovation that will help both retailers and affiliates grow their businesses<br/> in different ways Advertising and innovation that will help both retailers and affiliates grow.”</Paragraph>
//             <Row justify="space-between" align="middle" style={{ width: '900px', height: '70px' }} >
//               <Col>
//                 <div>
//                   <h2>Gopichand Bolloju</h2>
//                   <p>CEO of Slog Digital</p>
//                 </div>
//               </Col>
//               <Col>
//                 <Image src="/google1.png" height={40} width={120} alt='image' />
//               </Col>
//             </Row>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//     <div style={{
//      width: '100%', maxWidth: '1440px',
//       height: '735.66px',
//       top: '5131.86px',
//       left: '5547px',
//       padding: '150px 108px 150px 108px',
//       gap: '10px',
//       background: 'rgba(238, 244, 250, 1)',
//     }}>
//       <Row justify="center" align="middle">
//         <Col>
//           <div style={{ width: '1224px', height: '435.66px', gap: '64px' }}>
//             <Image src="/allimg.png" width={1140} height={263}className='allimg' alt='image' />
//           </div>
//         </Col>
//       </Row>
//     </div>
//     <div style={{ 
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   flexDirection: 'column',
//   width: '100%', 
//   maxWidth: '1440px', 
//   height: '443px', 
//   backgroundColor: '#3328ff',
//   padding: '20px' 
// }}>
//  <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//   <Title level={1} className='con7Tittle' style={{ fontSize: '64px', textAlign: 'center' }}>
//     Let’s create a measurable impact <br/> on your business.
//   </Title>
//   <Button style={{ textAlign: 'center' }}>
//     <Link href="/contact" passHref>
//       <p style={{ textDecoration: "none", margin: 0 }}>
//         Design a Quote <Image src="/quitarrow.png" height={22} width={25} alt='image' />
//       </p>
//     </Link>
//   </Button>
// </Container>

// </div>

// <div style={{paddingTop:'20px'}}>
//   <Container>
//     <Paragraph className='con8Tittle' style={{fontSize:'24px'}} >
//       Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081
//     </Paragraph>
//     <Paragraph className='con8Tittle' style={{fontSize:'20px'}}>
//       Contact - 98490278087
//     </Paragraph>
//   </Container>
// </div>

//    </div>
//   );
// };

// export default YourComponent;

