import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";

import { AppModule } from "./app/app.module";

class Application {
  private readonly logger: Logger = new Logger("Bootstrap");

  public async run(): Promise<void> {
    try {
      const application: NestFastifyApplication = await NestFactory.create(AppModule, new FastifyAdapter());

      await application.init();
      await application.listen({
        port: 3000,
        host: "127.0.0.1"
      });

      this.logger.log("Running in development mode");
      this.logger.log("Listening on 127.0.0.1:3000 (HTTP)");
      this.logger.log("Application started successfully");
    } catch (error) {
      this.logger.fatal("Application failed to start");
      this.logger.fatal(error);
    }
  }
}

new Application().run();
