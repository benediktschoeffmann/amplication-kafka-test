import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type HumanCreateInput = {
  email: string;
  name: string;
  password: string;
  projects?: ProjectWhereUniqueInput | null;
};
