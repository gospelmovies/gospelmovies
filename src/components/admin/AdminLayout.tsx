import React, { FunctionComponent, PropsWithChildren } from 'react'
import {
  Container,
  Sidebar,
  Content,
  MenuItem,
  MenuIcon,
  MenuLink
} from 'styles/admin/AdminLayout.style'
import icon from 'assets/images/notificon.png'

const menu = [
  {
    name: 'Dashboard',
    link: '/admin/dashboard',
    icon: 'dashboard'
  },
  {
    name: 'Users',
    link: '/admin/users',
    icon: 'users'
  },
]

const AdminLayout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <Container>
      <Sidebar>
        <MenuItem>
          <MenuIcon src={icon} />
          <MenuLink href='/'>Upload</MenuLink>
        </MenuItem>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default AdminLayout

