import { Table, Model, Column, PrimaryKey } from 'sequelize-typescript';
import { STRING } from 'sequelize';
import { INTEGER } from 'sequelize';

@Table({ tableName: 'portfolio', timestamps: false })
export class Portfolio extends Model {
  @PrimaryKey
  @Column({ type: INTEGER, field: 'idportfolio' })
  id: number;

  @Column({ type: STRING })
  name: string;

  @Column({ type: STRING })
  description: string;

  @Column({ type: STRING, field: 'image_url' })
  imageURL: string;

  @Column({ type: STRING, field: 'twitter_user_name' })
  twitterUserName: string;

  @Column({ type: STRING })
  title: string;
}
