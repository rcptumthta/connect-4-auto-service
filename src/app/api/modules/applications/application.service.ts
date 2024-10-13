import { ApplicationInformationResponseDTO } from "@dto";

import { Injectable } from "@nestjs/common";
import { QueryBus } from "@nestjs/cqrs";

import { InformationQuery } from "./queries";

@Injectable()
export class ApplicationService {
  private readonly _queryBus: QueryBus;

  public constructor(queryBus: QueryBus) {
    this._queryBus = queryBus;
  }

  public information(): Promise<ApplicationInformationResponseDTO> {
    return this._queryBus.execute(new InformationQuery());
  }
}
