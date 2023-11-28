import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type HumanWhereInput = {
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  password?: StringFilter;
  projects?: ProjectWhereUniqueInput;
};
