export function formatNumber(
  value: number | string | undefined,
  options: { reduce?: boolean; decimals?: number; maxDecimals?: number } = { reduce: true }
): string {
  if (!value || value === '0' || value === 0) {
    return '0';
  }
  if (typeof value === 'string') {
    value = Number(value);
  }
  if (value < 1) {
    let formattedPrice = value.toString();
    let index = formattedPrice.indexOf('.') + 1;
    if (options.maxDecimals && value < 1 / Math.pow(10, options.maxDecimals)) {
      return `<0.${'0'.repeat(options.maxDecimals - 1)}1`;
    } else {
      while (
        index < formattedPrice.length &&
        (formattedPrice[index] === '0' || index < formattedPrice.indexOf('.') + 1)
      ) {
        ++index;
      }
    }
    formattedPrice = formattedPrice.slice(0, index + (options.decimals ?? 2));
    return `${formattedPrice}`;
  }
  if (!options.reduce) {
    return value.toFixed(value < 1000 ? options.decimals ?? 2 : 0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (value < 1000) {
    return value.toFixed(options.decimals ?? 2);
  }
  if (value < 1000000) {
    return (value / 1000).toFixed(options.decimals ?? 2) + 'K';
  }
  if (value < 1000000000) {
    return (value / 1000000).toFixed(options.decimals ?? 2) + 'M';
  }
  if (value < 1000000000000) {
    return (value / 1000000000).toFixed(options.decimals ?? 2) + 'B';
  }
  return (value / 1000000000000).toFixed(options.decimals ?? 2) + 'T';
}
