import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type HumanUpdateInput = {
  email?: string;
  name?: string;
  password?: string;
  projects?: ProjectWhereUniqueInput | null;
};
