
"use client"
import { useState } from 'react';
import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
import { Container, Image } from 'react-bootstrap';
import CustomNavbar from '../header/page';
import Contact2 from '../components/contact2';
import YourComponent from '../contact/page';
const { TextArea } = Input;

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [showComponent2, setShowComponent2] = useState(false);
  const [showContact, setShowContact] = useState(true);
 

  const handleTextClick = (value) => {
    setSelectedOption(value);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const handleClick = () => {
    setShowComponent2(true);
    setShowContact(false);
  };

  return (
    <>
      <div>
        <CustomNavbar />
        {showContact && (
        <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
          <Container style={{ height: '60%' }}>
              <Form onFinish={onFinish} layout="vertical">
                <div style={{ height: 'auto' }}>
                  <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Contact us</h5>
                  <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Hi there. What can we help you with</h2>
                </div>

                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
                      <div style={{ marginBottom: '3%' }}>
                        <Radio className='buttons' value="Start a project">Start a project</Radio>
                        <Radio className='buttons' value="Join the team">Join the team</Radio>
                        <Radio className='buttons' value="Drop a quick word">Drop a quick word</Radio>
                      </div>
                      <div style={{ marginBottom: '3%' }}>
                        <Radio className='buttons' value="Apply for an Internship">Apply for an Internship</Radio>
                        <Radio className='buttons' value="About Us">About Us</Radio>
                      </div>
                    </Radio.Group>
                  </Col>
                </Row>

                <Row justify="space-between" gutter={[16, 16]}>
                  <Col>
                    <Button className='backbutton' href='/contact'>
                      <Image src="/backarrow.png"  height={15} width={20} alt='image' />
                      Back
                    </Button>
                  </Col>
                  <Col>
                    <div style={{ textAlign: 'right' }}>
                      <Button type="primary" onClick={handleClick}>
                        Continue
                        <Image src="/arrow.png" height={20} width={20} alt='image' />
                      </Button>
                    </div>
                  </Col>
                </Row>

                <Divider />

                <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
                  <Col span={24}>
                    <h6 style={{ width: "100%" }}>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
                    <p style={{ width: "100%" }}>Contact - 98490278087</p>
                  </Col>
                </Row>
              </Form>
          </Container>
        </div>
         )}
      </div>
      {showComponent2 && <Contact2 contactus={{ contactus: selectedOption }} />}
    </>
  );
};

export default Contact;




















// "use client";
// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact2 from '../components/contact2';
// const { TextArea } = Input;
// const Contact = () => {
//   const [form] = Form.useForm();
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };


//   const navigateToAnotherPage = () => {
//     form.validateFields().then(() => {
//       console.log('Form is valid');
//       const formData = { 'Contact us': selectedOption };
//       console.log('Form data:', formData);
//     });
//   };
  
//   const [showComponent, setShowComponent] = useState(false);

//   const handleClick = () => {
//     setShowComponent(true);
//   }

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         <div style={{  height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//         <Container style={{  height: '60%'}}>
//         <Form form={form} onFinish={onFinish} layout="vertical">
//       <Form.Item style={{ height: 'auto' }}>
//         <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Contact us</h5>
//         <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Hi there. What can we help you with</h2>
//       </Form.Item>

//       <Row gutter={[16, 16]}>
//         <Col span={24}>
//           <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
//             <div style={{ marginBottom: '3%' }}>
//               <Radio className='buttons' value="Start a project">Start a project</Radio>
//               <Radio className='buttons' value="Join the team">Join the team</Radio>
//               <Radio className='buttons' value="Drop a quick word">Drop a quick word</Radio>
//             </div>
//             <div style={{ marginBottom: '3%' }}>
//               <Radio className='buttons' value="Apply for an Internship">Apply for an Internship</Radio>
//               <Radio className='buttons' value="About Us">About Us</Radio>
//             </div>
//           </Radio.Group>
//         </Col>
//       </Row>

//       <Row justify="space-between" gutter={[16, 16]}>
//         <Col>
//           <Button className='backbutton'>
//             <Image src="/backarrow.png"  height={15} width={20} alt='image' />
//             Back
//           </Button>
//         </Col>
//         <Col>
//           <div style={{ textAlign: 'right' }}>
//             <Button type="primary" onClick={handleClick}>
//               Continue
//               <Image src="/arrow.png" height={20} width={20} alt='image' />
//             </Button>
//             {showComponent && <Contact2 />}
//           </div>
//         </Col>
//       </Row>

//       <Divider />

//       <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
//         <Col span={24}>
//           <h6 style={{ width: "100%" }}>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
//           <p style={{ width: "100%" }}>Contact - 98490278087</p>
//         </Col>
//       </Row>
//     </Form>
//         </Container>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Contact;

// "use client"
// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact2 from '../components/contact2';

// const { TextArea } = Input;

// const Contact = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showComponent, setShowComponent] = useState(false);

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   const handleClick = () => {
//     setShowComponent(true);
//   };

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//           <Container style={{ height: '60%' }}>
//             <Form onFinish={onFinish} layout="vertical">
//               <div style={{ height: 'auto' }}>
//                 <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Contact us</h5>
//                 <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Hi there. What can we help you with</h2>
//               </div>

//               <Row gutter={[16, 16]}>
//                 <Col span={24}>
//                   <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
//                     <div style={{ marginBottom: '3%' }}>
//                       <Radio className='buttons' value="Start a project">Start a project</Radio>
//                       <Radio className='buttons' value="Join the team">Join the team</Radio>
//                       <Radio className='buttons' value="Drop a quick word">Drop a quick word</Radio>
//                     </div>
//                     <div style={{ marginBottom: '3%' }}>
//                       <Radio className='buttons' value="Apply for an Internship">Apply for an Internship</Radio>
//                       <Radio className='buttons' value="About Us">About Us</Radio>
//                     </div>
//                   </Radio.Group>
//                 </Col>
//               </Row>

//               <Row justify="space-between" gutter={[16, 16]}>
//                 <Col>
//                   <Button className='backbutton'>
//                     <Image src="/backarrow.png" height={15} width={20} alt='image' />
//                     Back
//                   </Button>
//                 </Col>
//                 <Col>
//                   <div style={{ textAlign: 'right' }}>
//                     <Button type="primary" onClick={handleClick}>
//                       Continue
//                       <Image src="/arrow.png" height={20} width={20} alt='image' />
//                     </Button>
//                     {showComponent && <Contact2 />}
//                   </div>
//                 </Col>
//               </Row>

//               <Divider />

//               <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
//                 <Col span={24}>
//                   <h6 style={{ width: "100%" }}>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
//                   <p style={{ width: "100%" }}>Contact - 98490278087</p>
//                 </Col>
//               </Row>
//             </Form>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;



// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact2 from '../components/contact2';

// const { TextArea } = Input;

// const Contact = () => {
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showComponent2, setShowComponent2] = useState(false);
//   const [showContact, setShowContact] = useState(true);

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   const handleClick = () => {
//     setShowComponent2(true);
//     setShowContact(false);
//   };

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         {showContact && (
//         <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//           <Container style={{ height: '60%' }}>
//               <Form onFinish={onFinish} layout="vertical">
//                 <div style={{ height: 'auto' }}>
//                   <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Contact us</h5>
//                   <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Hi there. What can we help you with</h2>
//                 </div>

//                 <Row gutter={[16, 16]}>
//                   <Col span={24}>
//                     <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
//                       <div style={{ marginBottom: '3%' }}>
//                         <Radio className='buttons' value="Start a project">Start a project</Radio>
//                         <Radio className='buttons' value="Join the team">Join the team</Radio>
//                         <Radio className='buttons' value="Drop a quick word">Drop a quick word</Radio>
//                       </div>
//                       <div style={{ marginBottom: '3%' }}>
//                         <Radio className='buttons' value="Apply for an Internship">Apply for an Internship</Radio>
//                         <Radio className='buttons' value="About Us">About Us</Radio>
//                       </div>
//                     </Radio.Group>
//                   </Col>
//                 </Row>

//                 <Row justify="space-between" gutter={[16, 16]}>
//                   <Col>
//                     <Button className='backbutton'>
//                       <Image src="/backarrow.png" height={15} width={20} alt='image' />
//                       Back
//                     </Button>
//                   </Col>
//                   <Col>
//                     <div style={{ textAlign: 'right' }}>
//                       <Button type="primary" onClick={handleClick}>
//                         Continue
//                         <Image src="/arrow.png" height={20} width={20} alt='image' />
//                       </Button>
//                     </div>
//                   </Col>
//                 </Row>

//                 <Divider />

//                 <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
//                   <Col span={24}>
//                     <h6 style={{ width: "100%" }}>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
//                     <p style={{ width: "100%" }}>Contact - 98490278087</p>
//                   </Col>
//                 </Row>
//               </Form>
//           </Container>
//         </div>
//          )}
//       </div>
//       {showComponent2 && <Contact2 contactus={{ contactus: selectedOption }} />}
//     </>
//   );
// };

// export default Contact;



