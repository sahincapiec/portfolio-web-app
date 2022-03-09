import { Inject, Injectable } from '@nestjs/common';
import { PORTFOLIO_PROVIDER } from 'src/constants';
import { TimelineService } from 'src/timeline/timeline.service';
import { Portfolio } from './portfolio.entity';

@Injectable()
export class PortfolioService {
  constructor(
    @Inject(PORTFOLIO_PROVIDER)
    private portfolioRepository: typeof Portfolio,
    private timelineService: TimelineService,
  ) {}

  async findBy(id: number): Promise<Portfolio> {
    const portfolio = await this.portfolioRepository.findByPk(id);
    //TODO: load user timeline

    return portfolio;
  }
}
