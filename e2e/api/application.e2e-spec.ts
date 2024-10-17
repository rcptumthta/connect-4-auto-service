import { ApplicationModule } from "@api";
import { CommonModule } from "@common";
import { ApplicationInformationResponseDTO } from "@dto";

import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { Test, TestingModule } from "@nestjs/testing";

import supertest from "supertest";

describe("Application", (): void => {
  let application: NestFastifyApplication;

  beforeAll(async (): Promise<void> => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CommonModule, ApplicationModule]
    }).compile();

    moduleFixture.useLogger(false);

    application = moduleFixture.createNestApplication(new FastifyAdapter());

    await application.init();
    await application.getHttpAdapter().getInstance().ready();
  });

  afterAll(async (): Promise<void> => {
    await application.close();
  });

  it("{/information, GET} ~ OK (200) -> Should return the application information", (): supertest.Test => {
    return supertest(application.getHttpServer()).get("/information").expect((response: supertest.Response): void => {
      const expected: ApplicationInformationResponseDTO = new ApplicationInformationResponseDTO({
        name: "Connect4Auto",
        description: ""
      });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expected);
    });
  });
});
