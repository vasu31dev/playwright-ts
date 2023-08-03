import {
  Reporter,
  TestCase,
  TestError,
  TestResult,
  TestStep,
} from '@playwright/test/reporter';
import winston from 'winston';

const customColors = {
  info: 'green',
  error: 'red',
};
winston.addColors(customColors);
export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    }),
  ),
  transports: [
    new winston.transports.Console(),
    // If you want to log to a file uncomment below line
    // new winston.transports.File({ filename: 'logs/info.log', level: 'info' }),
  ],
});

export default class CustomReporterConfig implements Reporter {
  onTestBegin(test: TestCase): void {
    logger.info(`\x1b[34mTest Case Started : ${test.title}\x1b[0m`); // Blue color
  }

  onTestEnd(test: TestCase, result: TestResult): void {
    if (result.status === 'passed') {
      logger.info(`Test Case Passed : ${test.title}`);
    } else if (result.status === 'skipped') {
      logger.info(`\x1b[33mTest Case Skipped : ${test.title}\x1b[0m`); // Yellow color
    } else if (result.status === 'failed' && result.error) {
      // Playwright inbuild reporter logs the error
      // logger.error(
      //   `Test Case Failed: ${test.title} Error: ${result.error.message}`,
      // );
    }
  }

  onStepBegin(test: TestCase, result: TestResult, step: TestStep): void {
    if (step.category === `test.step`) {
      logger.info(`Executing Step : ${step.title}`);
    }
  }

  onError(error: TestError): void {
    logger.error(error.message);
  }
}
