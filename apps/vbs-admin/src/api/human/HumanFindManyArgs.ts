import { HumanWhereInput } from "./HumanWhereInput";
import { HumanOrderByInput } from "./HumanOrderByInput";

export type HumanFindManyArgs = {
  where?: HumanWhereInput;
  orderBy?: Array<HumanOrderByInput>;
  skip?: number;
  take?: number;
};
