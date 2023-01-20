import React, { FunctionComponent, PropsWithChildren } from 'react'
import {
  Container,
  Sidebar,
  Content,
  MenuItem,
  MenuLink,
  IconTag,
  DashboardHeader,
  Logo,
  DashboardMenu,
} from 'styles/admin/AdminLayout.style'
import logo from 'assets/images/cross.svg'
import {menu} from 'constants/sharedConstants'


const AdminLayout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <Container>
      <Sidebar>
        <DashboardHeader>
          <Logo src={logo} />
        </DashboardHeader>
        <DashboardMenu>
        {
          menu.map(item => (
            <MenuItem key={item.name} to={item.link}>
                <IconTag className={item.icon}></IconTag>
                <MenuLink>{item.name}</MenuLink>
            </MenuItem>
          ))
        }
        </DashboardMenu>
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default AdminLayout

