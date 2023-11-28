import * as graphql from "@nestjs/graphql";
import { HumanResolverBase } from "./base/human.resolver.base";
import { Human } from "./base/Human";
import { HumanService } from "./human.service";

@graphql.Resolver(() => Human)
export class HumanResolver extends HumanResolverBase {
  constructor(protected readonly service: HumanService) {
    super(service);
  }
}
