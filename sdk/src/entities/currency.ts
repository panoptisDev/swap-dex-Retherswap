import JSBI from 'jsbi'

import { SolidityType } from '../constants'
import { validateSolidityTypeInstance } from '../utils'

/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export class Currency {
  public readonly decimals: number
  public readonly symbol?: string
  public readonly name?: string

  /**
   * Constructs an instance of the base class `Currency`. There is no instance of the base class 'Currency'
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(decimals: number, symbol?: string, name?: string) {
    validateSolidityTypeInstance(JSBI.BigInt(decimals), SolidityType.uint8)

    this.decimals = decimals
    this.symbol = symbol
    this.name = name
  }
}

export class nativeCurrency extends Currency {
  public symbol?: string
  public name?: string

  public changeNameAndSymbol(newName: string, newSymbol: string) {
    this.name = newName;
    this.symbol = newSymbol;
  }

  /**
   * The only instance of the base class `nativeCurrency`.
   */
  public static readonly ETHER: nativeCurrency = new nativeCurrency(18, 'ETH', 'Ether')
}

const ETHER = nativeCurrency.ETHER
export { ETHER }
