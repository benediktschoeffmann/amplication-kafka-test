import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HumanTitle } from "../human/HumanTitle";
import { TaskTitle } from "../task/TaskTitle";

export const ProjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="Due Date" source="dueDate" />
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="projectOwner.id"
          reference="Human"
          label="Project Owner"
        >
          <SelectInput optionText={HumanTitle} />
        </ReferenceInput>
        <DateTimeInput label="Start Date" source="startDate" />
        <ReferenceArrayInput
          source="tasks"
          reference="Task"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TaskTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
