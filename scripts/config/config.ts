import { util } from "chai";
import { utils } from "ethers";

export default {
    name: "KLOUD_2021_5000",
    symbol: "KLOUD",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.25"),
    tokenAddress: "0x14A90EBD78A95789C14729b5Af269bBbC90fda56",
    minterAddress: "0x041e636595CFA3b11E2a27E07A0848C836157551",
    auctionAddress: "0x8D4EA20CDF9A35BA7c7A5990C826b049334dDD17",
    timeBuffer: 600,
    reservePrice: utils.parseEther("2"),
    minBidIncrementPercentage: 5,
    duration: 86400,
    wethAddress: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6", // mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    minterSigner: process.env.TEST_PAYEE_0 as string,
    payees: [process.env.TEST_PAYEE_0, process.env.TEST_PAYEE_1],
    shares: [80, 20]

}