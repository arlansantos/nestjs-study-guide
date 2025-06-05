import { Module } from "@nestjs/common";
import { IntroductionController } from "./introduction.controller";

@Module({
  controllers: [IntroductionController],
})
export class IntroductionModule {}