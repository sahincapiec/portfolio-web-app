import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { TimelineModule } from 'src/timeline/timeline.module';
import { portfolioProviders } from './portfolio.providers';
import { PortfolioService } from './portfolio.service';

@Module({
  imports: [DatabaseModule, TimelineModule],
  providers: [PortfolioService, ...portfolioProviders],
  exports: [PortfolioService, ...portfolioProviders, TimelineModule],
})
export class PortfolioModule {}
