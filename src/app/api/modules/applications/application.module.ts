import { Module } from "@nestjs/common";

import { HelloQueryHandler } from "./queries";

import { ApplicationController } from "./application.controller";
import { ApplicationService } from "./application.service";

@Module({
  controllers: [ApplicationController],
  providers: [HelloQueryHandler, ApplicationService]
})
export class ApplicationModule {}
