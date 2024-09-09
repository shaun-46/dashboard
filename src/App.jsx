import React, { useState } from 'react';
import { Button, Flex, Layout } from 'antd';
import {MenuUnfoldOutlined , MenuFoldOutlined} from '@ant-design/icons';
import Sidebar from './Components/Sidebar';
import'./App.css'
import CustomHeader from './Components/Header';
import MainContent from './Components/MainContent';
import SideContent from './Components/SideContent';

const {Sider , Header , Content}= Layout;

const App = () => {

  const[collapsed,setCollapsed]=useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>
        <Sidebar/>

        <Button type='text' icon={collapsed ?<MenuUnfoldOutlined/> : <MenuFoldOutlined/>} onClick={()=> setCollapsed(!collapsed)}
        className='trigger-btn'/>



      </Sider>
      <Layout>
        <Header className='header'>
          <CustomHeader/>
        </Header>
        <Content className='content'>

          <Flex gap="large">
            <MainContent/>
            <SideContent/>
          </Flex>
        
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
