import { Project } from "../project/Project";

export type Task = {
  assignedTo: string | null;
  createdAt: Date;
  id: string;
  project?: Project | null;
  startDate: Date | null;
  status?: "New" | "Pending" | "Ongoing" | "Done";
  title: string;
  updatedAt: Date;
};
