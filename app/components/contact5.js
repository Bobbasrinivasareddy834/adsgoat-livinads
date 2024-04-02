
"use client";
import { useState, useEffect } from 'react';
import React from 'react';
import { Radio, Button, Row, Col, Form, Input, Divider, Modal } from 'antd';
import { Container, Image } from 'react-bootstrap';
import CustomNavbar from '../header/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Contact4 from './contact4';
const { TextArea } = Input;

const Contact5 = (props) => {
    // console.log(props.contactus,"1")
    // console.log(props.Startaproject,"2")
    // console.log(props.Budget,'3')
    // console.log(props.Brief,'4')
  const [form] = Form.useForm();
  const [selectedOption, setSelectedOption] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const [submittable, setSubmittable] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]); 
  const [showback4,setshowback4] =useState(false)
  const [showContact, setShowContact] = useState(true);
  const handleback = () => {
    setshowback4(true);
    setShowContact(false);
  };
  
  const logToConsole = (log) => {
    setConsoleLogs(prevLogs => [...prevLogs, log]); 
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await fetch('/api/data', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ consoleLogs }), 
        });
         console.log(consoleLogs,'bodysdata')
        if (!response.ok) {
          console.error('Error response:', response.status, response.statusText);
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Caught error:', error);
      }
    };
      postData();
  }, [consoleLogs]);
  

//   useEffect(() => {
//     console.log(consoleLogs); 
//   }, [consoleLogs]);

  const onFinish = async (values) => {
    const formValuesLog = { FormValues: values };
    console.log('Form values:', values);
    logToConsole(props.contactus);
    logToConsole(props.Startaproject);
    logToConsole(props.Budget);
    logToConsole(props.Brief);
    logToConsole(formValuesLog);
  };

   
  
  const router = useRouter(); 
  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setModalVisible(false);
      setConfirmLoading(false);
      router.push('/contact'); 
    }, 2000);
  };

const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalVisible(false);
    router.push('/contact'); 
  };

  const handleTextClick = (value) => {
    setSelectedOption(value);
  };


  useEffect(() => {
    form
      .validateFields()
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form]);

  return (
    <>
      <div>
        <CustomNavbar />
        {showContact &&(
        <div className='Main'>
          <Container style={{ height: '60%' }}>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item>
                <h5>Brief</h5>
                <h2 className='Ctittle'>Now please fill out this questionnaire about your project. It’s like a Buzzfeed quiz</h2>
              </Form.Item>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="fullName"
                    label="Full Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your full name',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter your Full Name" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="email"
                    label="Email Address"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your email address',
                      },
                      {
                        type: 'email',
                        message: 'Please enter a valid email address',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter your email address" />
                  </Form.Item>
                </Col>

              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="Phone Number"
                    label="Phone Number"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Phone Number',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter your Phone Number" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="Company Name"
                    label="Company Name"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Company Name',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter your Company Name" />
                  </Form.Item>
                </Col>

              </Row>
              <Row gutter={16}>
                <Col span={12}>
                  <Form.Item
                    name="Description"
                    label="Description"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Description',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter your Description" />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item
                    name="Your Deadline"
                    label="Your Deadline"
                    rules={[
                      {
                        required: true,
                        message: 'Please enter your Your Deadline',
                      },
                      {
                        type: 'date',
                        message: 'Please enter a valid Your Deadline',
                      },
                    ]}
                  >
                    <Input style={{ height: '50px' }} placeholder="Enter this format YYYY/MM/DD" />
                  </Form.Item>
                </Col>

              </Row>

              <Row justify="space-between" gutter={[16, 16]}>
                <Col>
                  <Button className='backbutton' onClick={handleback}>
                    <Image src="/backarrow.png" height={15} width={20} alt='image' />
                    Back
                  </Button>  
                </Col>
                <Col>
                  <div style={{ textAlign: 'right' }}>
                    <Button type="primary" htmlType="submit" onClick={showModal} >Submit</Button>
                  </div>
                </Col>
              </Row>
              <Modal
                title="Title"
                visible={modalVisible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                <div>
        <Image src="/thankyou.png" width={20} height={20} className='thankyouimage' alt='image'/>
        </div>
        <div className='modeltext'>
        <h2 className='modelhead'>Thank You</h2>
        <p className='modelpara'>Your details has been successfully submitted. We’ll be in touch with you shortly.</p>
        </div>
         </Modal>
              <Divider />

              <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
                <Col span={24}>
                  <h6>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
                  <p>Contact - 98490278087</p>
                </Col>
              </Row>
            </Form>
          </Container>
        </div>
        )}
      </div>
      {showback4 && <Contact4 />}
    </>
  );
};
export default Contact5;

















// "use client";
// import { useState, useEffect } from 'react';
// import React from 'react';
// import { Radio, Button, Row, Col, Form, Input, Divider, Modal } from 'antd';
// import { Container, Image } from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// const { TextArea } = Input;

// const Contact5 = (props) => {
//     // console.log(props.contactus,"1")
//     // console.log(props.Startaproject,"2")
//     // console.log(props.Budget,'3')
//     // console.log(props.Brief,'4')
//   const [form] = Form.useForm();
//   const [selectedOption, setSelectedOption] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState('Content of the modal');
//   const [submittable, setSubmittable] = useState(false);
//   const [consoleLogs, setConsoleLogs] = useState([]); 


//   const logToConsole = (log) => {
//     setConsoleLogs(prevLogs => [...prevLogs, log]); 
//   };

//   useEffect(() => {
//     const postData = async () => {
//       try {
//         const response = await fetch('/api/data', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ consoleLogs }), 
//         });
//          console.log(consoleLogs,'bodysdata')
//         if (!response.ok) {
//           console.error('Error response:', response.status, response.statusText);
//           throw new Error('Network response was not ok');
//         }
//       } catch (error) {
//         console.error('Caught error:', error);
//       }
//     };
//       postData();
//   }, [consoleLogs]);
  

// //   useEffect(() => {
// //     console.log(consoleLogs); 
// //   }, [consoleLogs]);

//   const onFinish = async (values) => {
//     const formValuesLog = { FormValues: values };
//     console.log('Form values:', values);
//     logToConsole(props.contactus);
//     logToConsole(props.Startaproject);
//     logToConsole(props.Budget);
//     logToConsole(props.Brief);
//     logToConsole(formValuesLog);
//   };

   
  
//   const router = useRouter(); 
//   const showModal = () => {
//     setModalVisible(true);
//   };

//   const handleOk = () => {
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setModalVisible(false);
//       setConfirmLoading(false);
//       router.push('/contact'); 
//     }, 2000);
//   };

// const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setModalVisible(false);
//     router.push('/contact'); 
//   };

//   const handleTextClick = (value) => {
//     setSelectedOption(value);
//   };


//   useEffect(() => {
//     form
//       .validateFields()
//       .then(() => setSubmittable(true))
//       .catch(() => setSubmittable(false));
//   }, [form]);

//   return (
//     <>
//       <div>
//         <CustomNavbar />
//         <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//           <Container style={{ height: '60%' }}>
//             <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
//               <Form.Item>
//                 <h5>Brief</h5>
//                 <h2>Now please fill out this questionnaire about your project. It’s like a Buzzfeed quiz</h2>
//               </Form.Item>
//               <Row gutter={16}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="fullName"
//                     label="Full Name"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your full name',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter your Full Name" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="email"
//                     label="Email Address"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your email address',
//                       },
//                       {
//                         type: 'email',
//                         message: 'Please enter a valid email address',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter your email address" />
//                   </Form.Item>
//                 </Col>

//               </Row>
//               <Row gutter={16}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="Phone Number"
//                     label="Phone Number"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your Phone Number',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter your Phone Number" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="Company Name"
//                     label="Company Name"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your Company Name',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter your Company Name" />
//                   </Form.Item>
//                 </Col>

//               </Row>
//               <Row gutter={16}>
//                 <Col span={12}>
//                   <Form.Item
//                     name="Description"
//                     label="Description"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your Description',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter your Description" />
//                   </Form.Item>
//                 </Col>
//                 <Col span={12}>
//                   <Form.Item
//                     name="Your Deadline"
//                     label="Your Deadline"
//                     rules={[
//                       {
//                         required: true,
//                         message: 'Please enter your Your Deadline',
//                       },
//                       {
//                         type: 'date',
//                         message: 'Please enter a valid Your Deadline',
//                       },
//                     ]}
//                   >
//                     <Input style={{ height: '50px' }} placeholder="Enter this format YYYY/MM/DD" />
//                   </Form.Item>
//                 </Col>

//               </Row>

//               <Row justify="space-between" gutter={[16, 16]}>
//                 <Col>
//                   <Button className='backbutton' href='/contact4'>
//                     <Image src="/backarrow.png" height={15} width={20} alt='image' />
//                     Back
//                   </Button>
//                 </Col>
//                 <Col>
//                   <div style={{ textAlign: 'right' }}>
//                     <Button type="primary" htmlType="submit" onClick={showModal} >Submit</Button>
//                   </div>
//                 </Col>
//               </Row>
//               <Modal
//                 title="Title"
//                 visible={modalVisible}
//                 onOk={handleOk}
//                 confirmLoading={confirmLoading}
//                 onCancel={handleCancel}
//               >
//                 <div>
//         <Image src="/thankyou.png" width={20} height={20} className='thankyouimage' alt='image'/>
//         </div>
//         <div className='modeltext'>
//         <h2 className='modelhead'>Thank You</h2>
//         <p className='modelpara'>Your details has been successfully submitted. We’ll be in touch with you shortly.</p>
//         </div>
//          </Modal>
//               <Divider />

//               <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
//                 <Col span={24}>
//                   <h6>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
//                   <p>Contact - 98490278087</p>
//                 </Col>
//               </Row>
//             </Form>
//           </Container>
//         </div>
//       </div>
//     </>
//   );
// };
// export default Contact5;











