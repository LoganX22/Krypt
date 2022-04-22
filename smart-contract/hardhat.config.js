require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/WhqQxYs2DBaoisDwtMLTOJ22fnL1kBt2",
      accounts: [
        "80a255991142ceae580b009a4a5b410778321027238ce8a6d78a97b5c1446668",
      ],
    },
  },
};
