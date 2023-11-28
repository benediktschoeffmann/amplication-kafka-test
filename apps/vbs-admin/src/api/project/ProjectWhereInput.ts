import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { HumanWhereUniqueInput } from "../human/HumanWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  description?: StringNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  projectOwner?: HumanWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
  tasks?: TaskListRelationFilter;
};
