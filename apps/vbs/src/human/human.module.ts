import { Module } from "@nestjs/common";
import { HumanModuleBase } from "./base/human.module.base";
import { HumanService } from "./human.service";
import { HumanController } from "./human.controller";
import { HumanResolver } from "./human.resolver";

@Module({
  imports: [HumanModuleBase],
  controllers: [HumanController],
  providers: [HumanService, HumanResolver],
  exports: [HumanService],
})
export class HumanModule {}
