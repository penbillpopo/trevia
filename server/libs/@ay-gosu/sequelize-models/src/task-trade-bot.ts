import {
  AutoIncrement,
  BelongsTo,
  Column,
  Comment,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Task } from './task';
import { TimeStamps } from './timestamps';
import { TradeBot } from './trade-bot';

@Table({
  tableName: 'task_trade_bots',
  paranoid: false,
})
export class TaskTradeBot extends TimeStamps<TaskTradeBot> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Comment('任務ID')
  @Column(DataType.INTEGER)
  @ForeignKey(() => Task)
  public taskId: number;

  @BelongsTo(() => Task, 'taskId')
  public task: Task;

  @Comment('交易機器人ID')
  @Column(DataType.INTEGER)
  @ForeignKey(() => TradeBot)
  public tradeBotId: number;

  @BelongsTo(() => TradeBot, 'tradeBotId')
  public tradeBot: TradeBot;
}
