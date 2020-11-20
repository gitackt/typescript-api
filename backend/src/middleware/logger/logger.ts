import { Request, Response } from 'express'
import { requestLogger } from './app/serverLogger'

interface Log {
  data: string
  logType: LogType
  timeStamp: number
}

export enum LogType {
  ServerRequest = 'ServerRequest',
  DatabaseQuery = 'DatabaseQuery',
}

export const sendLog = (logType: LogType, rowData: any) => {
  const log: Log = {
    data: JSON.stringify(rowData),
    logType,
    timeStamp: new Date().getTime(),
  }
  // Send logs to cloud storage, s3, stdout...
  console.log(log.timeStamp + ': ' + log.logType)
}

export const httpLogger = (req: Request, res: Response, next: any) => {
  requestLogger(req)
  next()
}
