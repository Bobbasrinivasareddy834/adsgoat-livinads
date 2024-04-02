
"use client";
import { useState } from 'react';
import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
import { Container, Image } from 'react-bootstrap';
import CustomNavbar from '../header/page';
import Contact4 from './contact4';
import Contact2 from './contact2';
const { TextArea } = Input;

const Contact3 = (props) => {
    // console.log(props.Startaproject,"Startaproject")
    // console.log(props.contactus,'contactus')
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState('');
  const [showComponent4, setShowComponent4] = useState(false);
  const [showContact, setShowContact] = useState(true);
  const [showback2,setshowback2] =useState(false)

  const handleback = () => {
    setshowback2(true);
    setShowContact(false);
  };

  const handleClick = () => {
    setShowComponent4(true);
    setShowContact(false);
  };

  const handleTextClick = (value) => {
    setSelectedOption(value);
  };

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const navigateToAnotherPage = () => {
    form.validateFields().then(() => {
      console.log('Form is valid');
      const formData = { 'Start a project': selectedOption };
      console.log('Form data:', formData);
    });
  };
  
//   const [showComponent, setShowComponent] = useState(false);

//   const handleClick = () => {
//     setShowComponent(true);
//   }

  return (
    <>
      <div>
        <CustomNavbar />
        {showContact && (
        <div className='Main'>
        <Container style={{  height: '60%'}}>
        <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item style={{ height: 'auto' }}>
        <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Budget</h5>
        <h2 className='Ctittle'>What’s your budget range for this UX & Web<br/> Design project?</h2>
      </Form.Item>

      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
          <div  className='lg-mb-4 sm-mb-4'>
              <Radio className='buttons mb-3' value="20k - 25k">20k - 25k</Radio>
              <Radio className='buttons mb-3' value="40k - 45k">40k - 45k</Radio>
              <Radio className='buttons mb-3' value="60k - 65k">60k - 65k</Radio>
              <Radio className='buttons mb-3' value="100k - 105k">100k - 105k</Radio>
            </div>
          </Radio.Group>
        </Col>
      </Row>

      <Row justify="space-between" gutter={[16, 16]}>
        <Col>
          <Button className='backbutton' onClick={handleback}>
            <Image src="/backarrow.png"  height={15} width={20} alt='image' />
            Back
          </Button>
        </Col>
        <Col>
          <div style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={handleClick}  disabled={!selectedOption} >
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
          {showback2 && <Contact2 />}
      {showComponent4 && (
                <Contact4 
                Budget={{ Budget: selectedOption }}
                    contactus={props.contactus} 
                    Startaproject= {props.Startaproject}
                />
            )}
    </>
  );
};

export default Contact3;
































// "use client";
// import { useState } from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact4 from './contact4';
// import Contact2 from './contact2';
// const { TextArea } = Input;

// const Contact3 = (props) => {
//     // console.log(props.Startaproject,"Startaproject")
//     // console.log(props.contactus,'contactus')
//   const [form] = Form.useForm();
//   const [selectedOption, setSelectedOption] = useState('');
//   const [showComponent4, setShowComponent4] = useState(false);
//   const [showContact, setShowContact] = useState(true);
//   const [showback2,setshowback2] =useState(false)

//   const handleback = () => {
//     setshowback2(true);
//     setShowContact(false);
//   };

//   const handleClick = () => {
//     setShowComponent4(true);
//     setShowContact(false);
//   };

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };

//   const onFinish = (values) => {
//     console.log('Received values:', values);
//   };

//   const navigateToAnotherPage = () => {
//     form.validateFields().then(() => {
//       console.log('Form is valid');
//       const formData = { 'Start a project': selectedOption };
//       console.log('Form data:', formData);
//     });
//   };
  
// //   const [showComponent, setShowComponent] = useState(false);

// //   const handleClick = () => {
// //     setShowComponent(true);
// //   }

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         {showContact && (
//         <div style={{  height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//         <Container style={{  height: '60%'}}>
//         <Form form={form} onFinish={onFinish} layout="vertical">
//       <Form.Item style={{ height: 'auto' }}>
//         <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Budget</h5>
//         <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>What’s your budget range for this UX & Web<br/> Design project?</h2>
//       </Form.Item>

//       <Row gutter={[16, 16]}>
//         <Col span={24}>
//           <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
//             <div style={{ marginBottom: '3%' }}>
//               <Radio className='buttons' value="20k - 25k">20k - 25k</Radio>
//               <Radio className='buttons' value="40k - 45k">40k - 45k</Radio>
//               <Radio className='buttons' value="60k - 65k">60k - 65k</Radio>
//               <Radio className='buttons' value="100k - 105k">100k - 105k</Radio>
//             </div>
//           </Radio.Group>
//         </Col>
//       </Row>

//       <Row justify="space-between" gutter={[16, 16]}>
//         <Col>
//           <Button className='backbutton'>
//             <Image src="/backarrow.png"  onClick={handleback} height={15} width={20} alt='image' />
//             Back
//           </Button>
//         </Col>
//         <Col>
//           <div style={{ textAlign: 'right' }}>
//           <Button type="primary" onClick={handleClick}  disabled={!selectedOption} >
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
//       {showback2 && <Contact2 />}
//       {showComponent4 && (
//                 <Contact4 
//                 Budget={{ Budget: selectedOption }}
//                     contactus={props.contactus} 
//                     Startaproject= {props.Startaproject}
//                 />
//             )}
//     </>
//   );
// };

// export default Contact3;
