import winston from 'winston'
import path from 'path'
import DailyRotateFile from 'winston-daily-rotate-file'

const filename = path.join(__dirname, 'created-logfile.log')

const customFormat = winston.format.printf((info) => {
    return `[electron ${info.level}] ${info.timestamp}:${info.message}`
})

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        customFormat,
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename }),
        // 日志分割
        new DailyRotateFile({
            filename: path.join(__dirname, './', 'logs', '%DATE%.log'),
            datePattern: 'YYYY-MM-DD',
            json: false
        })
    ]
})

logger.info(filename)

logger.error('发生错误')

export default logger