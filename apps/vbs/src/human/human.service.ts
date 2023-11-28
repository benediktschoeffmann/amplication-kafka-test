import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HumanServiceBase } from "./base/human.service.base";

@Injectable()
export class HumanService extends HumanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
