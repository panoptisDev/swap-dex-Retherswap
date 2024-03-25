/**
 * A currency is any fungible financial instrument on Ethereum, including Ether and all ERC20 tokens.
 *
 * The only instance of the base class `Currency` is Ether.
 */
export declare class Currency {
    readonly decimals: number;
    readonly symbol?: string;
    readonly name?: string;
    /**
     * Constructs an instance of the base class `Currency`. There is no instance of the base class 'Currency'
     * @param decimals decimals of the currency
     * @param symbol symbol of the currency
     * @param name of the currency
     */
    protected constructor(decimals: number, symbol?: string, name?: string);
}
export declare class nativeCurrency extends Currency {
    symbol?: string;
    name?: string;
    changeNameAndSymbol(newName: string, newSymbol: string): void;
    /**
     * The only instance of the base class `nativeCurrency`.
     */
    static readonly ETHER: nativeCurrency;
}
declare const ETHER: nativeCurrency;
export { ETHER };
