import { util } from "chai";
import { utils } from "ethers";

export default {
    name: "SA Token",
    symbol: "SA",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.06"),
    tokenAddress: "0xB8Da418FFC2Cb675B8B3d73dca0E3f10811FBbdD",
    minterAddress: "0x60cF6b2DEd19D72aA398807E89524D1CdF470F20",
    auctionAddress: "0xF7D2dD0b42e2eCd003B7560f1b10Aea7e5a2A021",
    timeBuffer: 600,
    reservePrice: utils.parseEther("2"),
    minBidIncrementPercentage: 5,
    duration: 86400,
    wethAddress: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6", // mainnet 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
    minterSigner: process.env.TEST_PAYEE_0 as string,
    payees: [process.env.TEST_PAYEE_0, process.env.TEST_PAYEE_1],
    shares: [80, 20]

}