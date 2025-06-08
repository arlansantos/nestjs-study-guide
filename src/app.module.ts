import { Module } from '@nestjs/common';
import { IntroductionModule } from './overview/01-introduction/introduction.module';
import { CatsModule } from './overview/02-controllers/cats.module';
@Module({
  imports: [IntroductionModule, CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
