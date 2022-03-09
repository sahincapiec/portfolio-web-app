import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './portfolio/portfolio.module';
import { PortfolioService } from './portfolio/portfolio.service';

@Module({
  imports: [PortfolioModule],
  controllers: [AppController],
  providers: [AppService, PortfolioService],
})
export class AppModule {}
