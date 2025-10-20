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
  tableName: 'market_datas',
  paranoid: false,
})
export class MarketData extends TimeStamps<MarketData> {
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

  @Comment('開盤價格')
  @Column(DataType.DECIMAL(10, 2))
  openPrice: number;

  @Comment('最高價格')
  @Column(DataType.DECIMAL(10, 2))
  highPrice: number;

  @Comment('最低價格')
  @Column(DataType.DECIMAL(10, 2))
  lowPrice: number;

  @Comment('收盤價格')
  @Column(DataType.DECIMAL(10, 2))
  closePrice: number;

  @Comment('成交量')
  @Column(DataType.DECIMAL(10, 2))
  volume: number;
}
