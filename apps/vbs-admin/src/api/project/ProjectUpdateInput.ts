import { HumanWhereUniqueInput } from "../human/HumanWhereUniqueInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  description?: string | null;
  dueDate?: Date | null;
  name?: string;
  projectOwner?: HumanWhereUniqueInput | null;
  startDate?: Date | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
