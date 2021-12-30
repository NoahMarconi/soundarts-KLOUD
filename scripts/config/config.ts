import { util } from "chai";
import { utils } from "ethers";

export default {
    name: "KLOUD_2021_5000",
    symbol: "KLOUD",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.125"),
    tokenAddress: "0x76E2e8720Acf11eB1b24947795BcC2a04aF52cC6",
    minterAddress: "0x0BB1B8339d7c56a23c96b67317518425a9110b66",
    auctionAddress: "0x8778f17aE22DcfeFC9f2caEd98f23F05A8DA44a6",
    timeBuffer: 600,
    reservePrice: utils.parseEther("2"),
    minBidIncrementPercentage: 5,
    duration: 86400,
    wethAddress: 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2, // "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6" 
    minterSigner: process.env.TEST_PAYEE_0 as string,
    payees: [process.env.TEST_PAYEE_0, process.env.TEST_PAYEE_1],
    shares: [80, 20]

}