import { HumanWhereUniqueInput } from "../human/HumanWhereUniqueInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name: string;
  projectOwner?: HumanWhereUniqueInput | null;
  startDate?: Date | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
