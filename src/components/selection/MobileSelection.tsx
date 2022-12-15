import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

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
`
const SText = styled.h3`
  color: white;
`
const Link = styled.a<{selected: boolean}>`
  color: ${({selected}) => selected ? 'green' : 'white'};
  font-family: inter-medium;
  line-height: 18px;
  font-size: 15px;
  word-wrap: normal;
  white-space: nowrap;
  &:first-child {
    color: linear-gradient(180deg, #d50120 0%, #7a01c6 111.11%);
  }
  &.active {
    color: green;
  }
`
const LinkCover = styled.div`
  /* color: white; */
`

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
    text: 'Picks',
    tab: 'picks',
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

// type SetTabType = React.Dispatch<MenuTypes>
// type setTabItemType = React.Dispatch<string>

function MobileSelection() {
  const [tab, setTab] = useState('trending')

  const handleSelected = (item: string) => {
    setTab(item)
  }

  return (
    <Container>
      <Tabs>
        {menuItems.map((item: any) => (
          <LinkCover key={item.text}>
            <Link selected={tab === item.text.toLowerCase()} onClick={() => handleSelected(item.text.toLowerCase())}>{item.text}</Link>
          </LinkCover>
        ))}
      </Tabs>
      <Content>
          {tab === 'trending' && <SText>trending</SText>}
          {tab === 'new' && <SText>new</SText>}
          {tab === 'picks' && <SText>picks</SText>}
          {tab === 'nigerian' && <SText>nigerian</SText>}
          {tab === 'foreign' && <SText>foreign</SText>}
          {tab === 'drama' && <SText>drama</SText>}
      </Content>
    </Container>
  )
}

export default MobileSelection
