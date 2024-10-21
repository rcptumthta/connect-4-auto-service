import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

import { ApplicationService } from "./application.service";

@Controller()
export class ApplicationController {
  private readonly service: ApplicationService;

  public constructor(service: ApplicationService) {
    this.service = service;
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  public index(): Promise<string> {
    return this.service.hello();
  }
}
