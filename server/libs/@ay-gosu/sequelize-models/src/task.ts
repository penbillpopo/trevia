import {
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
@Table({
  tableName: 'tasks',
  paranoid: false,
})
export class Task extends TimeStamps<Task> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Comment('任務名稱')
  @Column(DataType.STRING)
  public name: string;

  @Comment('任務類型')
  @Column(DataType.STRING)
  public type: 'trade' | 'backtest';

  @Comment('交易頻率(秒)')
  @Column(DataType.INTEGER)
  public frequency: number;

  @Comment('啟用')
  @Column(DataType.BOOLEAN)
  public enabled: boolean;

  @Comment('任務狀態')
  @Column(DataType.STRING)
  public status: string;

  @Comment('回測開始時間')
  @Column(DataType.DATE)
  public backtestStartTime: Date;

  @Comment('回測結束時間')
  @Column(DataType.DATE)
  public backtestEndTime: Date;

  @HasOne(() => TaskTradeBot)
  public taskTradeBot: TaskTradeBot;

  @Column(DataType.INTEGER)
  @ForeignKey(() => Account)
  public accountId: number;

  @BelongsTo(() => Account, 'accountId')
  public account: Account;
}
