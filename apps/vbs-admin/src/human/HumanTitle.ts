import { Human as THuman } from "../api/human/Human";

export const HUMAN_TITLE_FIELD = "name";

export const HumanTitle = (record: THuman): string => {
  return record.name?.toString() || String(record.id);
};
