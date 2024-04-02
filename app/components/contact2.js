
"use client";
import React, { useState } from 'react';
import { Button, Col, Divider, Form, Image, Row, Radio } from 'antd';
import { Container} from 'react-bootstrap';
import CustomNavbar from '../header/page';
import Contact3 from './contact3';
import Contact from '../contact1/page';

const Contact2 = (props) => {
    const [form] = Form.useForm();
    const [selectedOption, setSelectedOption] = useState('');
    const [showComponent3, setShowComponent3] = useState(false);
    const [showContact, setShowContact] = useState(true);

    const handleClick = () => {
        setShowComponent3(true);
        setShowContact(false);
    };

    const handleTextClick = (value) => {
        setSelectedOption(value);
    };

    const onFinish = (values) => {
        console.log('Received values:', values);
    };

    return (
        <>
            <div>
                <CustomNavbar />
                {showContact && (
                    <div className='Main'>
                        <Container style={{ height: '60%' }}>
                            <Form form={form} onFinish={onFinish} layout="vertical">
                                <Form.Item style={{ height: 'auto' }}>
                                    <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Start a project</h5>
                                    <h2 className='Ctittle'>So you want to work with us? We are pretty #goal- <br />oriented. What can we do for you?</h2>
                                </Form.Item>

                                <Row gutter={[16, 16]}>
                                    <Col span={24}>
                                        <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
                                             <div  className='lg-mb-4 sm-mb-4'>
                                                <Radio className='buttons mb-3' value="Performance Marketing">Performance Marketing</Radio>
                                                <Radio className='buttons mb-3' value="Media Buying">Media Buying</Radio>
                                                <Radio className='buttons mb-3' value="Web Development">Web Development</Radio>
                                            </div>
                                             <div  className='lg-mb-4 sm-mb-4'>
                                                <Radio className='buttons mb-3' value="Content Marketing">Content Marketing</Radio>
                                                <Radio className='buttons mb-3' value="Martech">Martech</Radio>
                                                <Radio className='buttons mb-3' value="Lead Generation">Lead Generation</Radio>
                                            </div>
                                        </Radio.Group>
                                    </Col>
                                </Row>

                                <Row justify="space-between" gutter={[16, 16]}>
                                    <Col>
                                        <Button className='backbutton' href='/contact1'>
                                            <Image src="/backarrow.png" height={15} width={20} alt='image' />
                                            Back
                                        </Button>
                                    </Col>
                                    <Col>
                                        <div style={{ textAlign: 'right' }}>
                                            <Button type="primary" onClick={handleClick} disabled={!selectedOption} >
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
            {/* {showback1 && <Contact />} */}
            {showComponent3 && (
                <Contact3 
                    Startaproject={{selectedOption}}
                    contactus={props.contactus} 
                />
            )}
        </>
    );
};

export default Contact2;






































// "use client";
// import React, { useState } from 'react';
// import { Button, Col, Divider, Form, Image, Row, Radio } from 'antd';
// import { Container} from 'react-bootstrap';
// import CustomNavbar from '../header/page';
// import Contact3 from './contact3';

// const Contact2 = (props) => {
//     const [form] = Form.useForm();
//     const [selectedOption, setSelectedOption] = useState('');
//     const [showComponent3, setShowComponent3] = useState(false);
//     const [showContact, setShowContact] = useState(true);

//     const handleClick = () => {
//         setShowComponent3(true);
//         setShowContact(false);
//     };

//     const handleTextClick = (value) => {
//         setSelectedOption(value);
//     };

//     const onFinish = (values) => {
//         console.log('Received values:', values);
//     };

//     return (
//         <>
//             <div>
//                 <CustomNavbar />
//                 {showContact && (
//                     <div style={{ height: '100%', padding: '10%', backgroundColor: '#f0f0f0' }}>
//                         <Container style={{ height: '60%' }}>
//                             <Form form={form} onFinish={onFinish} layout="vertical">
//                                 <Form.Item style={{ height: 'auto' }}>
//                                     <h5 style={{ height: '5%', fontFamily: 'Satoshi', fontSize: '24px', fontWeight: 700, lineHeight: '32.4px', textAlign: 'left' }}>Start a project</h5>
//                                     <h2 style={{ fontFamily: 'Satoshi', fontSize: '48px', fontWeight: 900, lineHeight: '64.8px', textAlign: 'left', width: '100%', height: '10%' }}>So you want to work with us? We are pretty #goal- <br />oriented. What can we do for you?</h2>
//                                 </Form.Item>

//                                 <Row gutter={[16, 16]}>
//                                     <Col span={24}>
//                                         <Radio.Group onChange={(e) => handleTextClick(e.target.value)} value={selectedOption}>
//                                             <div style={{ marginBottom: '3%' }}>
//                                                 <Radio className='buttons' value="Performance Marketing">Performance Marketing</Radio>
//                                                 <Radio className='buttons' value="Media Buying">Media Buying</Radio>
//                                                 <Radio className='buttons' value="Web Development">Web Development</Radio>
//                                             </div>
//                                             <div style={{ marginBottom: '3%' }}>
//                                                 <Radio className='buttons' value="Content Marketing">Content Marketing</Radio>
//                                                 <Radio className='buttons' value="Martech">Martech</Radio>
//                                                 <Radio className='buttons' value="Lead Generation">Lead Generation</Radio>
//                                             </div>
//                                         </Radio.Group>
//                                     </Col>
//                                 </Row>

//                                 <Row justify="space-between" gutter={[16, 16]}>
//                                     <Col>
//                                         <Button className='backbutton'>
//                                             <Image src="/backarrow.png" height={15} width={20} alt='image' />
//                                             Back
//                                         </Button>
//                                     </Col>
//                                     <Col>
//                                         <div style={{ textAlign: 'right' }}>
//                                             <Button type="primary" onClick={handleClick} disabled={!selectedOption} >
//                                                 Continue
//                                                 <Image src="/arrow.png" height={20} width={20} alt='image' />
//                                             </Button>
//                                         </div>
//                                     </Col>
//                                 </Row>

//                                 <Divider />

//                                 <Row gutter={[16, 16]} style={{ width: "100%", height: "100%", padding: "2.5%", gap: "4.4444%", textAlign: 'center' }}>
//                                     <Col span={24}>
//                                         <h6 style={{ width: "100%" }}>Address - AdsGoat Pvt Ltd, 2nd Floor, RAM SVR Building, HUDA Tech Enclave, Hitech City, Hyderabad - 500081</h6>
//                                         <p style={{ width: "100%" }}>Contact - 98490278087</p>
//                                     </Col>
//                                 </Row>
//                             </Form>
//                         </Container>
//                     </div>
//                 )}
//             </div>
//             {showComponent3 && (
//                 <Contact3 
//                     Startaproject={{selectedOption}}
//                     contactus={props.contactus} 
//                 />
//             )}
//         </>
//     );
// };

// export default Contact2;
