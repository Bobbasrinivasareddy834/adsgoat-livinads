
"use client"
import { useState } from 'react';
import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
import { Container, Image } from 'react-bootstrap';
import CustomNavbar from '../header/page';
import Contact5 from './contact5';
import Contact3 from './contact3';
const { TextArea } = Input;

const Contact4 = (props) => {
    // console.log(props.Budget)
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState('');
  const [showComponent5, setShowComponent5] = useState(false);
  const [description, setDescription] = useState('');
  const [showContact, setShowContact] = useState(true);
  const [showback3,setshowback3] =useState(false)

  const handleTextClick = (value) => {
    setSelectedOption(value);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const handleClick = () => {
    setShowComponent5(true);
    setShowContact(false);
  };
  const handleback = () => {
    setshowback3(true);
    setShowContact(false);
  };

  const handleTextAreaChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <>
      <div>
        <CustomNavbar />
        {showContact && (
          <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
            <Container style={{ height: '60%' }}>
              <Form form={form} onFinish={onFinish} layout="vertical">
                <Form.Item style={{ height: 'auto' }}>
                  <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Brief</h5>
                  <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Anything Else you’d like to add?</h2>
                </Form.Item>

                <Form.Item
                  name="TextArea"
                  rules={[{ required: true, message: 'Add your Description' }]}
                >
                  <TextArea onChange={handleTextAreaChange} />
                </Form.Item>
                <Row justify="space-between" gutter={[16, 16]}>
                  <Col>
                    <Button className='backbutton' onClick={handleback}>
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
      {showback3 && <Contact3 />}
      {showComponent5 && (
                <Contact5 
                Brief={{Brief:description}}
                Budget={ props.Budget }
                    contactus={props.contactus} 
                    Startaproject= {props.Startaproject}
                />
            )}
    </>
  );
};

export default Contact4;






// "use client"
// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact5 from './contact5';
// import Contact3 from './contact3';
// const { TextArea } = Input;

// const Contact4 = (props) => {
//     // console.log(props.Budget)
//   const [form] = Form.useForm();
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showComponent5, setShowComponent5] = useState(false);
//   const [description, setDescription] = useState('');
//   const [showContact, setShowContact] = useState(true);
//   const [showback3,setshowback3] =useState(false)

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   const handleClick = () => {
//     setShowComponent5(true);
//     setShowContact(false);
//   };
//   const handleback = () => {
//     setshowback3(true);
//     setShowContact(false);
//   };

//   const handleTextAreaChange = (e) => {
//     setDescription(e.target.value);
//   };

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         {showContact && (
//           <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//             <Container style={{ height: '60%' }}>
//               <Form form={form} onFinish={onFinish} layout="vertical">
//                 <Form.Item style={{ height: 'auto' }}>
//                   <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Brief</h5>
//                   <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Anything Else you’d like to add?</h2>
//                 </Form.Item>

//                 <Form.Item
//                   name="TextArea"
//                   rules={[{ required: true, message: 'Add your Description' }]}
//                 >
//                   <TextArea onChange={handleTextAreaChange} />
//                 </Form.Item>
//                 <Row justify="space-between" gutter={[16, 16]}>
//                   <Col>
//                     <Button className='backbutton'>
//                       <Image src="/backarrow.png" onClick={handleback} height={15} width={20} alt='image' />
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
//             </Container>
//           </div>
//         )}
//       </div>
//       {showback3 && <Contact3 />}
//       {showComponent5 && (
//                 <Contact5 
//                 Brief={{Brief:description}}
//                 Budget={ props.Budget }
//                     contactus={props.contactus} 
//                     Startaproject= {props.Startaproject}
//                 />
//             )}
//     </>
//   );
// };

// export default Contact4;


// "use client";
// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact5 from './contact5';

// const { TextArea } = Input;

// const Contact4 = (props) => {
//     console.log(props.Budget,'budget')
//   const [form] = Form.useForm();
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showComponent5, setShowComponent5] = useState(false);
//   const [showContact, setShowContact] = useState(true);

//   const handleClick = () => {
//     setShowComponent5(true);
//     setShowContact(false);
//   };

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         {showContact && (
//         <div style={{  height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//         <Container style={{  height: '60%'}}>
//         <Form form={form} onFinish={onFinish} layout="vertical">
//       <Form.Item style={{ height: 'auto' }}>
//         <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Brief</h5>
//         <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>Anything Else you’d like to add?</h2>
//       </Form.Item>

//       <Form.Item
//   name="TextArea"
//   rules={[{ required: true, message: 'Add your Description' }]}
// >
//   <Input.TextArea />
// </Form.Item>
//       <Row justify="space-between" gutter={[16, 16]}>
//         <Col>
//           <Button className='backbutton'>
//             <Image src="/backarrow.png" height={15} width={20} alt='image' />
//             Back
//           </Button>
//         </Col>
//         <Col>
//           <div style={{ textAlign: 'right' }}>
//             <Button type="primary" onClick={handleClick} >
//               Continue
//               <Image src="/arrow.png" height={20} width={20} alt='image' />
//             </Button>
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
//         )}
//       </div>
//       {showComponent5 && <Contact5 Brief ={selectedOption} />}
//     </>
//   );
// };

// export default Contact4;