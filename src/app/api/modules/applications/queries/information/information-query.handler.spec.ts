import { ApplicationInformationResponseDTO } from "@dto";

import { TestBed } from "@automock/jest";

import { InformationQueryHandler } from "./information-query.handler";
import { InformationQuery } from "./information.query";

describe("InformationQueryHandler", (): void => {
  let handler: InformationQueryHandler;

  beforeAll((): void => {
    const { unit } = TestBed.create(InformationQueryHandler).compile();

    handler = unit;
  });

  it("Should be defined", (): void => {
    expect(handler).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return the application information", async (): Promise<void> => {
      const response: ApplicationInformationResponseDTO = await handler.execute(new InformationQuery());
      const expected: ApplicationInformationResponseDTO = new ApplicationInformationResponseDTO({
        name: "Connect4Auto",
        description: ""
      });

      expect(response).toEqual(expected);
    });
  });
});
