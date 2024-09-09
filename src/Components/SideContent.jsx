import { Flex } from 'antd'
import React from 'react'
import ContentSide from './ContentSide'
import Activity from './Activity'

const SideContent = () => {
  return (
    <Flex vertical gap='2.3rem' style={{width :350}}>
      <ContentSide/>
      <Activity/>
    </Flex>
  )
}

export default SideContent
