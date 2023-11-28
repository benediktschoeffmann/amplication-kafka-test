import { Project } from "../project/Project";

export type Human = {
  createdAt: Date;
  email: string;
  id: string;
  name: string;
  password: string;
  projects?: Project | null;
  updatedAt: Date;
};
