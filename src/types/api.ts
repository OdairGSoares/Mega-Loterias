export interface ApiError {
  message: string;
  code: string;
}

export class LotteryApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'LotteryApiError';
  }
}

export function isLotteryApiError(error: unknown): error is LotteryApiError {
  return error instanceof LotteryApiError;
}