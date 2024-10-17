import { ApplicationInformationResponseDTO } from "@dto";

import { TestBed } from "@automock/jest";

import { ApplicationController } from "./application.controller";
import { ApplicationService } from "./application.service";

describe("ApplicationService", (): void => {
  let controller: ApplicationController;
  let service: jest.Mocked<ApplicationService>;

  beforeAll((): void => {
    const { unit, unitRef } = TestBed.create(ApplicationController).compile();

    controller = unit;
    service = unitRef.get(ApplicationService);
  });

  it("Should be defined", (): void => {
    expect(controller).toBeDefined();
  });

  describe("Success cases", (): void => {
    it("Should return the application information", async (): Promise<void> => {
      const mock: ApplicationInformationResponseDTO = new ApplicationInformationResponseDTO({
        name: "Connect4Auto",
        description: ""
      });

      service.information.mockResolvedValueOnce(mock);

      const response: ApplicationInformationResponseDTO = await service.information();

      expect(response).toEqual(mock);
    });
  });
});
