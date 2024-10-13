import { ApplicationInformationResponseDTO } from "@dto";

import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";

import { ApplicationService } from "./application.service";

@Controller()
export class ApplicationController {
  private readonly _service: ApplicationService;

  public constructor(service: ApplicationService) {
    this._service = service;
  }

  @Get("information")
  @HttpCode(HttpStatus.OK)
  public information(): Promise<ApplicationInformationResponseDTO> {
    return this._service.information();
  }
}
