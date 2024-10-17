import { ApplicationInformationResponseDTO } from "@dto";

import { TestBed } from "@automock/jest";
import { QueryBus } from "@nestjs/cqrs";

import { ApplicationService } from "./application.service";

describe("ApplicationService", (): void => {
  let service: ApplicationService;
  let queryBus: jest.Mocked<QueryBus>;

  beforeAll((): void => {
    const { unit, unitRef } = TestBed.create(ApplicationService).compile();

    service = unit;
    queryBus = unitRef.get(QueryBus);
  });

  it("Should be defined", (): void => {
    expect(service).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return the application information", async (): Promise<void> => {
      const mock: ApplicationInformationResponseDTO = new ApplicationInformationResponseDTO({
        name: "Connect4Auto",
        description: ""
      });

      queryBus.execute.mockResolvedValueOnce(mock);

      const response: ApplicationInformationResponseDTO = await service.information();

      expect(response).toEqual(mock);
    });
  });
});
