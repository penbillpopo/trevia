import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from './account';
import { TimeStamps } from './timestamps';
import { TradeBot } from './trade-bot';

// 策略条件接口
interface StrategyCondition {
  type: string;
  parameters: any;
}

// 逻辑条件接口
interface LogicCondition {
  logic: 'AND' | 'OR';
  conditions: (LogicCondition | StrategyCondition)[];
}

// 整体结构接口
interface StrategyGroup {
  logic: 'AND' | 'OR';
  conditions: (LogicCondition | StrategyCondition)[];
}

@Table({
  tableName: 'trade_strategies',
  paranoid: false,
})
export class TradeStrategy extends TimeStamps<TradeStrategy> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Column(DataType.STRING)
  public name: string;

  @Column(DataType.JSON)
  public strategyGroup: StrategyGroup;

  @HasMany(() => TradeBot)
  public tradeBots: TradeBot[];

  @Column(DataType.INTEGER)
  @ForeignKey(() => Account)
  public accountId: number;

  @BelongsTo(() => Account, 'accountId')
  public account: Account;
}
