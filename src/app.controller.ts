import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { PortfolioService } from './portfolio/portfolio.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly portforService: PortfolioService,
  ) {}

  @Get()
  @Render('index')
  async root() {
    const portfolio = await this.portforService.findBy(71);
    return {
      image: portfolio.imageURL,
      ownerFirstName: portfolio.name,
      fullName: portfolio.name,
      experience: portfolio.description,
    };
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
