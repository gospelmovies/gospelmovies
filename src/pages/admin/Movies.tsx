import AdminLayout from 'components/admin/AdminLayout'
import React from 'react'
import { 
  Container,
  PageTitle,
  Table,
  Th,
  Tr,
  Td,
  TableWrapper
  } from 'styles/admin/Movies.styled'

function Movies() {
  return (
    <AdminLayout>
      <Container>
      <PageTitle>Movies</PageTitle>
      <TableWrapper>
      <Table>
        <Tr>
          <Th>Head 3</Th>
          <Th>Head 3</Th>
          <Th>Head 3</Th>
        </Tr>
        <Tr>
          <Td>mike</Td>
          <Td>mike</Td>
          <Td>mike</Td>
        </Tr>
        <Tr>
          <Td>null</Td>
          <Td>null</Td>
          <Td>null</Td>
        </Tr>
        <Tr>
          <Td>null</Td>
          <Td>null</Td>
          <Td>null</Td>
        </Tr>
      </Table>
      </TableWrapper>
      </Container>
    </AdminLayout>
  )
}

export default Movies
