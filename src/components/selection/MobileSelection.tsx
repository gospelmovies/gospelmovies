import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TrendingTab from '../selection/tabs/TrendingTab'

const Container = styled.div`
  margin-bottom: 50px;
`
const Tabs = styled.div`
  display: flex;
  align-items: center;
  gap: 38px;
  padding: 0 5px 0 20px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const Content = styled.div`
  color: white;
  padding: 30px 0 0 20px;
  margin-right: 10px;
`
const SText = styled.h3`
  color: white;
`
const Link = styled.a<{selected: boolean}>`
  color: ${({selected}) => selected ? '#7A01C6' : 'white'};
  font-family: inter-medium;
  line-height: 18px;
  font-size: 15px;
  word-wrap: normal;
`
const LinkCover = styled.div``;

interface MenuTypes {
  text: string
  tab: string
}

const menuItems: MenuTypes[] = [
  {
    text: 'Trending',
    tab: 'trending',
  },
  {
    text: 'New',
    tab: 'new',
  },
  {
    text: 'Hot',
    tab: 'hot',
  },
  {
    text: 'Nigerian',
    tab: 'nigerian',
  },
  {
    text: 'Foreign',
    tab: 'foreign',
  },
  {
    text: 'Drama',
    tab: 'drama',
  },
]

function MobileSelection() {
  const [tab, setTab] = useState('trending')

  const handleSelected = (item: string) => {
    setTab(item)
  }

  return (
    <Container>
      <Tabs>
        {menuItems.map((item: MenuTypes) => (
          <LinkCover key={item.text}>
            <Link selected={tab === item.text.toLowerCase()} onClick={() => handleSelected(item.text.toLowerCase())}>{item.text}</Link>
          </LinkCover>
        ))}
      </Tabs>
      <Content>
          {tab === 'trending' && <TrendingTab /> }
          {tab === 'new' && <SText>new</SText>}
          {tab === 'hot' && <SText>hot</SText>}
          {tab === 'nigerian' && <SText>nigerian</SText>}
          {tab === 'foreign' && <SText>foreign</SText>}
          {tab === 'drama' && <SText>drama</SText>}
      </Content>
    </Container>
  )
}

export default MobileSelection
