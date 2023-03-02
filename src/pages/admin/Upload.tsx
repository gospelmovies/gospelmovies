import React, { useState } from 'react'
import AdminLayout from 'components/admin/AdminLayout'
import {
  Container, Field, FileInputField, Form, InputField, Label, PageTitle, SelectInput, TextArea
} from 'styles/admin/Upload.styled'
import { MultiSelect } from "react-multi-select-component";
import { options } from 'constants/sharedConstants';


function Upload() {
  const [selected, setSelected] = useState([]);

  return (
    <AdminLayout>
     
        <PageTitle>Upload Movie</PageTitle>
        <Form>
          <Field>
            <Label>Movie Title</Label>
            <InputField type='text' placeholder='The Lords Prayer' />
          </Field>
          <Field>
            <Label>Movie Time</Label>
            <InputField type='text' placeholder='5 Hours'  />
          </Field>
          <Field>
            <Label>Movie Description</Label>
            <TextArea placeholder='TWe learnt how to pray' ></TextArea>
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
            <InputField type='text' placeholder='2022'   />
          </Field>
          <Field>
            <Label>Movie Producer</Label>
            <InputField type='text' placeholder=' Hillsong ' />
          </Field>
          <Field>
            <Label>Movie Cast</Label>
            <InputField type='text'  placeholder='The Crew' />
          </Field>
          <Field>
            <Label>Movie Rating</Label>
           <SelectInput>
            <option>Rating</option>
            <option value={'1'}>1</option>
            <option value={'2'}>2</option>
            <option value={'3'}>3</option>
            <option value={'4'}>4</option>
            <option value={'5'}>5</option>
           </SelectInput>
          </Field>
          <Field>
            <Label>Movie File</Label>
            <FileInputField type='file' />
          </Field>
        </Form>

    </AdminLayout>
  )
}

export default Upload
