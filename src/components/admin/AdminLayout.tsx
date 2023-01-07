import React, { FunctionComponent, PropsWithChildren } from 'react'
import {
  Container,
  Sidebar,
  Content
} from 'styles/admin/AdminLayout.style'


const AdminLayout: FunctionComponent<PropsWithChildren> = ({children}) => {
  return (
    <Container>
      <Sidebar>
        sidebar content
      </Sidebar>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default AdminLayout

