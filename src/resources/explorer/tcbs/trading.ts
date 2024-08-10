import axios from 'axios'
import {
  BASE_URL,
  STOCKS_URL,
  PRICE_BOARD_COLS_MAP,
  type PriceBoardItem
} from './const'
// import { getAssetType } from './utils/parser';

class Trading {
  baseUrl: string
  headers: any

  constructor() {
    this.baseUrl = BASE_URL
    this.headers = {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      Accept: 'application/json, text/plain, */*',
      'Accept-Language': 'en-US,en;q=0.9,vi-VN;q=0.8,vi;q=0.7'
    }
  }

  async priceBoard(symbolList: string[]) {
    const symbols = symbolList.join(',')
    const corsProxy = 'http://localhost:8080/'
    const url = `${corsProxy}${this.baseUrl}/${STOCKS_URL}/v1/stock/second-tc-price?tickers=${symbols}`
    const response = await axios.get(url, { headers: this.headers })
    const data = Object.values(response.data.data)
    const priceBoard = data.map((item: unknown) => {
      const priceBoardItem: any = {}
      Object.keys(item as PriceBoardItem).forEach((key) => {
        priceBoardItem[PRICE_BOARD_COLS_MAP[key]] = (item as PriceBoardItem)[key as keyof PriceBoardItem]
      })
      return priceBoardItem
    })
    return priceBoard
  }
}

export default Trading
