export const BASE_URL = 'https://apipubaws.tcbs.com.vn'
export const STOCKS_URL = 'stock-insight'
export const FUTURE_URL = 'futures-insight'
export const ANALYSIS_URL = 'tcanalysis'

export const INTERVAL_MAP: { [key: string]: string } = {
  '1m': '1',
  '5m': '5',
  '15m': '15',
  '30m': '30',
  '1H': '60',
  '1D': 'D',
  '1W': 'W',
  '1M': 'M'
}

export const OHLC_MAP: { [key: string]: string } = {
  tradingDate: 'time',
  open: 'open',
  high: 'high',
  low: 'low',
  close: 'close',
  volume: 'volume'
}

// Pandas data type mapping for history price data
export const OHLC_DTYPE: { [key: string]: string } = {
  time: 'datetime64[ns]', // Convert timestamps to datetime
  open: 'float64',
  high: 'float64',
  low: 'float64',
  close: 'float64',
  volume: 'int64'
}

export const INTRADAY_MAP: { [key: string]: string } = {
  t: 'time',
  p: 'price',
  v: 'volume',
  a: 'match_type'
}

export const INTRADAY_DTYPE: { [key: string]: string } = {
  price: 'float64',
  volume: 'int64',
  time: 'datetime64[ns]',
  match_type: 'category'
}

export const PRICE_BOARD_COLS_MAP: { [key: string]: string } = {
  t: 'Mã cổ phiếu',
  fv: 'KLBD/TB5D',
  mav: 'Tốc độ giao dịch',
  nstv: 'KLGD ròng(CM)',
  nstp: '%KLGD ròng (CM)',
  rsi: 'RSI',
  macdv: 'MACD Hist',
  macdsignal: 'MACD Signal',
  tsignal: 'Tín hiệu Kỹ thuật',
  avgsignal: 'Tín hiệu Trung bình động',
  ma20: 'MA20',
  ma50: 'MA50',
  ma100: 'MA100',
  session: 'Phiên +/- ',
  mw3d: '% thay đổi giá 3D',
  mw1m: '% thay đổi giá 1M',
  mw3m: '% thay đổi giá 3M',
  mw1y: '% thay đổi giá 1Y',
  rs3d: 'RS 3D',
  rs1m: 'RS 1M',
  rs3m: 'RS 3M',
  rs1y: 'RS 1Y',
  rsavg: 'RS Trung bình',
  hp1m: 'Đỉnh 1M',
  hp3m: 'Đỉnh 3M',
  hp1y: 'Đỉnh 1Y',
  lp1m: 'Đáy 1M',
  lp3m: 'Đáy 3M',
  lp1y: 'Đáy 1Y',
  hp1yp: '%Đỉnh 1Y',
  lp1yp: '%Đáy 1Y',
  pe: 'P/E',
  pb: 'P/B',
  roe: 'ROE',
  oscore: 'TCRating',
  av: 'Khối lượng Dư bán',
  bv: 'Khối lượng Dư mua',
  ev: 'TCBS định giá',
  hmp: 'Khớp nhiều nhất',
  mscore: 'Đ.góp VNINDEX',
  delta1m: '%Giá - %VNI (1M)',
  delta1y: '%Giá - %VNI (1Y)',
  seq: 'sequence',
  vnid3d: '% thay đổi giá của VNINDEX 3D',
  vnid1m: '% thay đổi giá của VNINDEX 1M',
  vnid3m: '% thay đổi giá của VNINDEX 3M',
  vnid1y: '% thay đổi giá của VNINDEX 1Y',
  cp: 'Giá',
  vnipe: 'VNINDEX P/E',
  vnipb: 'VNINDEX P/B'
}

export interface PriceBoardItem {
  t: string
  fv: number
  mav: number
  nstv: number
  nstp: number
  rsi: number
  macdv: number
  macdsignal: number
  tsignal: number
  avgsignal: number
  ma20: number
  ma50: number
  ma100: number
  session: number
  mw3d: number
  mw1m: number
  mw3m: number
  mw1y: number
  rs3d: number
  rs1m: number
  rs3m: number
  rs1y: number
  rsavg: number
  hp1m: number
  hp3m: number
  hp1y: number
  lp1m: number
  lp3m: number
  lp1y: number
  hp1yp: number
  lp1yp: number
  pe: number
  pb: number
  roe: number
  oscore: number
  av: number
  bv: number
  ev: number
  hmp: number
  mscore: number
  delta1m: number
  delta1y: number
  seq: number
  vnid3d: number
  vnid1m: number
  vnid3m: number
  vnid1y: number
  cp: number
  vnipe: number
  vnipb: number
}

export const FINANCIAL_REPORT_MAP: { [key: string]: string } = {
  balance_sheet: 'balancesheet',
  income_statement: 'incomestatement',
  cash_flow: 'cashflow'
}

export const FINANCIAL_REPORT_PERIOD_MAP: { [key: string]: number } = {
  quarter: 0,
  year: 1
}
