import { ApplicationInformationResponseDTO } from "@dto";

import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { InformationQuery } from "./information.query";

@QueryHandler(InformationQuery)
export class InformationQueryHandler implements IQueryHandler<InformationQuery, ApplicationInformationResponseDTO> {
  public execute(_query: InformationQuery): Promise<ApplicationInformationResponseDTO> {
    return Promise.resolve(
      new ApplicationInformationResponseDTO({
        name: "Connect4Auto",
        description: ""
      })
    );
  }
}
