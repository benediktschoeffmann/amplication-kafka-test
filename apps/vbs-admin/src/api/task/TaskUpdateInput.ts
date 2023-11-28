import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskUpdateInput = {
  assignedTo?: string | null;
  project?: ProjectWhereUniqueInput | null;
  startDate?: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title?: string;
};
