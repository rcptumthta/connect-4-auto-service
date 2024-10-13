import { Module } from "@nestjs/common";

import { InformationQueryHandler } from "./queries";

import { ApplicationController } from "./application.controller";
import { ApplicationService } from "./application.service";

@Module({
  controllers: [ApplicationController],
  providers: [InformationQueryHandler, ApplicationService]
})
export class ApplicationModule { }
