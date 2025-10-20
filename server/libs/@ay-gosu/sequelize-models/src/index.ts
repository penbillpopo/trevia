import SequelizeHierarchy from '@ay/sequelize-hierarchy';
import { Sequelize } from 'sequelize';
import { ModelCtor } from 'sequelize-typescript';
import { Account } from './account';
import { BacktestLog } from './backtest-log';
import { MarketData } from './market-data';
import { Task } from './task';
import { TaskTradeBot } from './task-trade-bot';
import { TradeBot } from './trade-bot';
import { TradeLog } from './trade-log';
import { TradeStrategy } from './trade-strategy';

export * from './account';
export * from './backtest-log';
export * from './market-data';
export * from './task';
export * from './task-trade-bot';
export * from './trade-bot';
export * from './trade-log';
export * from './trade-strategy';

export const Models: ModelCtor[] = [
  Account,
  TradeBot,
  TradeStrategy,
  Task,
  TaskTradeBot,
  BacktestLog,
  TradeLog,
  MarketData,
];
SequelizeHierarchy(Sequelize);
