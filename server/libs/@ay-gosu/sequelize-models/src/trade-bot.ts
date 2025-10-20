import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  Comment,
  DataType,
  ForeignKey,
  HasOne,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from './account';
import { TaskTradeBot } from './task-trade-bot';
import { TimeStamps } from './timestamps';
import { TradeStrategy } from './trade-strategy';
@Table({
  tableName: 'trade_bots',
  paranoid: false,
})
export class TradeBot extends TimeStamps<TradeBot> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Comment('名稱')
  @Column(DataType.STRING)
  public name: string;

  @Comment('交易所')
  @Column(DataType.STRING)
  public exchange: string;

  @Comment('目標幣種')
  @Column(DataType.STRING)
  public symbol: string;

  @Comment('初始資金')
  @Column(DataType.FLOAT)
  public initialCapital: number;

  @Comment('停損')
  @AllowNull(true)
  @Column(DataType.FLOAT)
  public stopLoss: number;

  @Comment('止盈')
  @AllowNull(true)
  @Column(DataType.FLOAT)
  public takeProfit: number;

  @Comment('描述')
  @Column(DataType.STRING)
  public description: string;

  @Column(DataType.INTEGER)
  @ForeignKey(() => Account)
  public accountId: number;

  @BelongsTo(() => Account, 'accountId')
  public account: Account;

  @Column(DataType.INTEGER)
  @ForeignKey(() => TradeStrategy)
  public tradeStrategyId: number;

  @BelongsTo(() => TradeStrategy, 'tradeStrategyId')
  public tradeStrategy: TradeStrategy;

  @HasOne(() => TaskTradeBot)
  public taskTradeBot: TaskTradeBot;
}
