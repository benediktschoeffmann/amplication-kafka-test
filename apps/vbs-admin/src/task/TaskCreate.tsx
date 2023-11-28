import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { ProjectTitle } from "../project/ProjectTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Assigned To" source="assignedTo" />
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "New", value: "New" },
            { label: "Pending", value: "Pending" },
            { label: "Ongoing", value: "Ongoing" },
            { label: "Done", value: "Done" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
