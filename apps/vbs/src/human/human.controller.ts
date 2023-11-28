import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HumanService } from "./human.service";
import { HumanControllerBase } from "./base/human.controller.base";

@swagger.ApiTags("humans")
@common.Controller("humans")
export class HumanController extends HumanControllerBase {
  constructor(protected readonly service: HumanService) {
    super(service);
  }
}
