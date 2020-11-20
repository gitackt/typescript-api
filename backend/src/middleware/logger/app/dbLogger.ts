// TypeORM
import { Logger } from 'typeorm'

// Logger
import { sendLog, LogType } from '../logger'

interface DBQuery {
  query: string
  parameters?: any[]
  error?: string
  time?: number
}

export class DatabaseQueryLogger implements Logger {
  logQuery(query: string, parameters?: any[]) {
    const log: DBQuery = { query, parameters }
    sendLog(LogType.DatabaseQuery, log)
  }

  logQueryError(error: string, query: string, parameters?: any[]) {
    const log: DBQuery = { query, parameters, error }
    sendLog(LogType.DatabaseQuery, log)
  }

  logQuerySlow(time: number, query: string, parameters?: any[]) {
    const log: DBQuery = { query, parameters, time }
    sendLog(LogType.DatabaseQuery, log)
  }

  logSchemaBuild() {}
  logMigration() {}
  log() {}
}
