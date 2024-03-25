const { version } = require("../package.json");
const hypra = require("./tokens/hypra.json");

module.exports = async function buildList() {
  const parsed = version.split(".");
  const l1List = {
    name: "Retherswap Default",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI: "https://raw.githubusercontent.com/Retherswap/default-token-list/main/supported_chains/hypra/0x0000000000079c645A9bDE0Bd8Af1775FAF5598A/logo.png",
    keywords: ["retherswap", "default", "list"],
    tokens: [
      ...hypra
    ]
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
  return l1List;
};