import { Flex, Typography , Button, Card, Avatar, Tooltip, Divider } from 'antd'
import React from 'react'

const SellerLists = () => {
  return (
    <Flex align='center' justify='space-between' gap='large'>
      <Flex vertical='row' gap='small' className='top-seller'>
        <Flex  align='center' justify='space-between'>
            <Typography.Title level={5}strong className='primary--color'>Top Seller</Typography.Title>
            <Button type='link' className='gray--color'>View All</Button>

        </Flex>
        <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{color:'#f5a600' , backgroundColor:'#fde3cf' , cursor:'progress'}}>
                    <Tooltip title='User 1' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/zCoI2CHTqI1JgSalH-VzHcWYWsvokBgdc2DoZPLCzPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc"/>
                    </Tooltip>

                    <Tooltip title='User 2' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/YK7RS8QeFL-y9JA8FBN80FTHRDBSebY5dMrbkwncU4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/cm9maWxlLXBpYy5q/cGc"/>
                    </Tooltip>

                    <Tooltip title='User 3' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/s3zl1_oh8BnkTT3_Y8RobVIKCjBmb7vyOuktaZsAPLA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzM5NC0z/OTQ3MDE5X3JvdW5k/LXByb2ZpbGUtcGlj/dHVyZS1wbmctdHJh/bnNwYXJlbnQtcG5n/LnBuZw"/>
                    </Tooltip>

                    <Tooltip title='User 4' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/jwvXD-SFgeSO3ojM6Vwy1SFTVhf3SSfMtCzcSwEPcxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL3JvdW5kLWJv/cmRlci5qcGc"/>
                    </Tooltip>

                    <Tooltip title='User 5' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/V0N8YkzUsaEuMIC2WMiPNERg1uvxHG6QwzqX_50LAT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvMWZiMjIz/YTYyNi9ibHVyX2Jh/Y2tncm91bmRfYWZ0/ZXJfLndlYnA"/>
                    </Tooltip>

                    <Tooltip title='User 6' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/OoUPUeaM-NuE52WLvsyUlWmvhnU_dtqDYqysmGesyik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvOTcyOGZh/MTViZC9yb3VuZF9w/cm9maWxfcGljdHVy/ZV9hZnRlcl8ud2Vi/cA"/>
                    </Tooltip>
                </Avatar.Group>

                <Divider type='vertical' className='divider' />
                <Flex vertical='row'>
                    <Typography.Text type='secondary' strong>
                        1200 Plant Sold
                    </Typography.Text>

                    <Typography.Text type='secondary' strong>
                        10 Sellers
                    </Typography.Text>
                </Flex>
            </Flex>
        </Card>
      </Flex>


      <Flex vertical='row' gap='small' className='featured-seller'>
        <Flex  align='center' justify='space-between'>
            <Typography.Title level={5}strong className='primary--color'>
                Featured Seller
            </Typography.Title>
            <Button type='link' className='gray--color'>View All</Button>
        </Flex>

        <Card>
            <Flex align='center' justify='space-evenly'>
                <Avatar.Group maxCount={5} maxPopoverTrigger='click' size='large' maxStyle={{color:'#f5a600' , backgroundColor:'#fde3cf' , cursor:'progress'}}>
                    <Tooltip title='User 1' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/zCoI2CHTqI1JgSalH-VzHcWYWsvokBgdc2DoZPLCzPA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/aG90by5qcGc"/>
                    </Tooltip>

                    <Tooltip title='User 2' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/YK7RS8QeFL-y9JA8FBN80FTHRDBSebY5dMrbkwncU4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL2NpcmNsZS1w/cm9maWxlLXBpYy5q/cGc"/>
                    </Tooltip>

                    <Tooltip title='User 3' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/s3zl1_oh8BnkTT3_Y8RobVIKCjBmb7vyOuktaZsAPLA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2luZHBuZy5jb20v/cGljYy9tLzM5NC0z/OTQ3MDE5X3JvdW5k/LXByb2ZpbGUtcGlj/dHVyZS1wbmctdHJh/bnNwYXJlbnQtcG5n/LnBuZw"/>
                    </Tooltip>

                    <Tooltip title='User 4' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/jwvXD-SFgeSO3ojM6Vwy1SFTVhf3SSfMtCzcSwEPcxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9ja29mdW4uY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE5/LzEyL3JvdW5kLWJv/cmRlci5qcGc"/>
                    </Tooltip>

                    <Tooltip title='User 5' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/V0N8YkzUsaEuMIC2WMiPNERg1uvxHG6QwzqX_50LAT8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvMWZiMjIz/YTYyNi9ibHVyX2Jh/Y2tncm91bmRfYWZ0/ZXJfLndlYnA"/>
                    </Tooltip>

                    <Tooltip title='User 6' placement='top'>
                        <Avatar src="https://imgs.search.brave.com/OoUPUeaM-NuE52WLvsyUlWmvhnU_dtqDYqysmGesyik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdG9y/eWJsb2stY2RuLnBo/b3Rvcm9vbS5jb20v/Zi8xOTE1NzYvMTIw/MHg4MDAvOTcyOGZh/MTViZC9yb3VuZF9w/cm9maWxfcGljdHVy/ZV9hZnRlcl8ud2Vi/cA"/>
                    </Tooltip>
                </Avatar.Group>

                <Divider type='vertical' className='divider' />
                <Flex vertical='row'>
                    <Typography.Text type='secondary' strong>
                        1820 Plant Sold
                    </Typography.Text>

                    <Typography.Text type='secondary' strong>
                        18 Sellers
                    </Typography.Text>
                </Flex>
            </Flex>
        </Card>
      </Flex>

    </Flex>

  )
}

export default SellerLists
