import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { HelloQuery } from "./hello.query";

@QueryHandler(HelloQuery)
export class HelloQueryHandler implements IQueryHandler<HelloQuery, string> {
  public execute(_query: HelloQuery): Promise<string> {
    return Promise.resolve("Hello World");
  }
}
