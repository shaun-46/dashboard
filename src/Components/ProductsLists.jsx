import { Button, Flex, Typography, Card, Image } from 'antd'
import React from 'react'
import plantData from '../plantData';

const{Meta} = Card;

const ProductsLists = () => {
  return (
  <div>
     <Flex align='center' justify='space-between'>

    <Typography.Title level={3} strong className='primary--color'>
        My Listings
    </Typography.Title>
    <Button type='link' className='gray--color'>
        View All
    </Button>
        
    </Flex> 

    <Flex align='center' gap='large'>
        {plantData.map((plant)=> <Card key={plant.id} hoverable className='plant-card'>
            <Image src={plant.picture} style={{width:'89px'}}/>
            <Meta title={plant.name} style={{marginTop:'0.5rem'}}/>
        </Card>)}
    </Flex>
  </div>
  )
}

export default ProductsLists
