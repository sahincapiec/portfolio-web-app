import { Sequelize } from 'sequelize-typescript';
import { DATABASE_PROVIDER } from 'src/constants';
import * as config from 'config';
import { Portfolio } from 'src/portfolio/portfolio.entity';

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async () => {
      const sequelize = new Sequelize(config.database);
      sequelize.addModels([Portfolio]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
