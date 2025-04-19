import { Module } from '@nestjs/common';
import { OverviewModule } from './overview/overview.module';

@Module({
  imports: [OverviewModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
