import {
  AutoIncrement,
  Column,
  Comment,
  DataType,
  ForeignKey,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Task } from './task';
import { TimeStamps } from './timestamps';

@Table({
  tableName: 'trade_logs',
  paranoid: false,
})
export class TradeLog extends TimeStamps<TradeLog> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  public id: number;

  @Comment('任務ID')
  @Column(DataType.INTEGER)
  @ForeignKey(() => Task)
  public taskId: number;

  @Comment('交易時間')
  @Column(DataType.DATE)
  timestamp: Date;

  @Comment('當前價格')
  @Column(DataType.FLOAT)
  currentPrice: number;

  @Comment('動作')
  @Column(DataType.INTEGER)
  action: number;

  @Comment('是否執行')
  @Column(DataType.BOOLEAN)
  isExecuted: boolean;

  @Comment('持倉')
  @Column(DataType.FLOAT)
  holdings: number;

  @Comment('資金')
  @Column(DataType.FLOAT)
  funds: number;

  @Comment('初始資金')
  @Column(DataType.FLOAT)
  initialCapital: number;

  @Comment('訊息')
  @Column(DataType.STRING)
  message: string;
}
