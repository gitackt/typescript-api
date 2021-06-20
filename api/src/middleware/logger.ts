import { Logger } from 'typeorm'
import { Request, Response } from 'express'

interface Log {
  data: string
  logType: LogType
  timeStamp: number
}

export enum LogType {
  ServerRequest = 'ServerRequest',
  DatabaseQuery = 'DatabaseQuery',
}

interface DBQuery {
  query: string
  parameters?: any[]
  error?: string
  time?: number
}

export const sendLog = (logType: LogType, rowData: any) => {
  const log: Log = {
    data: JSON.stringify(rowData),
    logType,
    timeStamp: new Date().getTime(),
  }
  console.log(log)
}

export const httpLogger = (req: Request, res: Response, next: any) => {
  const params = {
    headers: req.headers,
    userAgent: req.headers['user-agent'],
    referer: req.headers.referer,
    body: req.body,
    baseUrl: req.baseUrl,
    cookies: req.cookies,
    hostname: req.hostname,
    ip: req.ip,
    ips: req.ips,
    originalUrl: req.originalUrl,
    params: req.params,
    path: req.path,
    query: req.query,
    url: req.url,
  }
  sendLog(LogType.ServerRequest, Object.assign(params))

  next()
}

export class DatabaseQueryLogger implements Logger {
  logQuery(query: string, parameters: any[]) {
    const log: DBQuery = { query, parameters }
    sendLog(LogType.DatabaseQuery, log)
  }

  logQueryError(error: string, query: string, parameters: any[]) {
    const log: DBQuery = { query, parameters, error }
    sendLog(LogType.DatabaseQuery, log)
  }

  logQuerySlow(time: number, query: string, parameters: any[]) {
    const log: DBQuery = { query, parameters, time }
    sendLog(LogType.DatabaseQuery, log)
  }

  logSchemaBuild() {}
  logMigration() {}
  log() {}
}
