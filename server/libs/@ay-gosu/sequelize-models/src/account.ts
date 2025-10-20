import {
  AutoIncrement,
  Column,
  DataType,
  Default,
  HasMany,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Unique } from './extra-decorator';
import { TimeStamps } from './timestamps';
import { TradeBot } from './trade-bot';

@Table({
  tableName: 'accounts',
  paranoid: false,
})
export class Account extends TimeStamps<Account> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Unique('account')
  @Column(DataType.STRING)
  public account: string;

  @Column(DataType.STRING)
  public password: string;

  @Column(DataType.STRING)
  public name: string;

  @Column(DataType.STRING)
  public apiKey: string;

  @Column(DataType.STRING)
  public apiSecret: string;

  @Default(false)
  @Column(DataType.BOOLEAN)
  public apiKeyValid: boolean;

  @HasMany(() => TradeBot)
  public tradeBots: TradeBot[];
}
