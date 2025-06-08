import { Controller, Get } from "@nestjs/common";

@Controller('introduction')
export class IntroductionController {

  @Get()
  get(){
    return "Welcome to the Introduction!";
  }
}