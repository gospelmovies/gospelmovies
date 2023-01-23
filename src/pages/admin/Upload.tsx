import React, { useState } from 'react'
import AdminLayout from 'components/admin/AdminLayout'
import {
  Container, Field, FileInputField, Form, InputField, Label, PageTitle, TextArea
} from 'styles/admin/Upload.styled'
import { MultiSelect } from "react-multi-select-component";
import { options } from 'constants/sharedConstants';


function Upload() {
  const [selected, setSelected] = useState([]);

  return (
    <AdminLayout>
      <Container>
        <PageTitle>Upload Movie</PageTitle>
        <Form>
          <Field>
            <Label>Movie Title</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie Time</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie Description</Label>
            <TextArea></TextArea>
          </Field>
          <Field>
            <Label>Movie Category</Label>
            <MultiSelect
              options={options}
              value={selected}
              onChange={setSelected}
              labelledBy="Select"
            />
          </Field>
          <Field>
            <Label>Movie Year</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie Producer</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie Cast</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie Rating</Label>
            <InputField type='text' />
          </Field>
          <Field>
            <Label>Movie File</Label>
            <FileInputField type='file' />
          </Field>
        </Form>
      </Container>
    </AdminLayout>
  )
}

export default Upload
