import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";

import { ApplicationModule } from "./modules";

@Module({
  imports: [
    ApplicationModule,
    RouterModule.register([
      {
        path: "applications",
        module: ApplicationModule
      }
    ])
  ]
})
export class ApiModule {}
