import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";

import { HelloQuery } from "./queries";

@Injectable()
export class ApplicationService {
  private readonly queryBus: QueryBus;

  public constructor(queryBus: QueryBus) {
    this.queryBus = queryBus;
  }

  public hello(): Promise<string> {
    return this.queryBus.execute(new HelloQuery());
  }
}
