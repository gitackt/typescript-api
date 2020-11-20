// Express
import { Request } from 'express'

// Logger
import { sendLog, LogType } from '../logger'

export const requestLogger = (req: Request) => {
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
}
