import { Portfolio } from './portfolio.entity';
import { PORTFOLIO_PROVIDER } from '../constants';

export const portfolioProviders = [
  {
    provide: PORTFOLIO_PROVIDER,
    useValue: Portfolio,
  },
];
