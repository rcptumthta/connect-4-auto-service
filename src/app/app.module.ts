import { Module } from "@nestjs/common";

import { ApiModule } from "./api";
import { CommonModule } from "./common";

@Module({
  imports: [CommonModule, ApiModule]
})
export class AppModule {}
