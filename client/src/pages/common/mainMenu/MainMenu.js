import { Button, Col, Divider, Layout, Row, Typography } from 'antd';
import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderNavbar } from '../../../components/common/mainMenu';
import { Footer } from '../../../components/common/sharedLayout';

const { Content } = Layout;
const { Title } = Typography;

export default () => {
  return (
   
    <section
    
      style={{
      
        fontFamily: '-apple-system',
        fontSize: "1.5rem",
       
        color: "#707793",
        backgroundColor: "#FECD45",
       
      }}
    >
     

    <Layout className='home layout'>
      <HeaderNavbar />
      <Content>
      <Divider />
            <Divider />
            <Divider />
        <Row align="middle">
          <Col style={{ top: '50px' }} span={24} align="middle">
            <Title level={3}>
              <Texty
                type="left"
                mode="random"
              >
               
                Welcome to the Attendance Tracker
              </Texty>
            </Title>
            <Texty
              type="left"
              mode="smooth"
              interval="20"
            >
            
             The Attendance Tracking App with Face Recognition
            </Texty>
           
            <Divider/>
            
            <Button type='primary' htmlType='submit'>
              <Link to='/signup'>Register</Link>
            
            </Button>
           <Divider/>
           
            <div>
             New User? Do look into the User Guidelines
            </div>
          </Col>
        </Row>
      </Content>
      <Footer />
    </Layout>
  
    </section>
  );
};
