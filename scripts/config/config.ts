import { utils } from "ethers";

export default {
    name: "SA Token",
    symbol: "SA",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.06"),
    tokenAddress: "0xB8Da418FFC2Cb675B8B3d73dca0E3f10811FBbdD",
    minterAddress: "0x60cF6b2DEd19D72aA398807E89524D1CdF470F20",
    minterSigner: process.env.TEST_PAYEE_0 as string,
    auctionAddress: "",
    payees: [process.env.TEST_PAYEE_0, process.env.TEST_PAYEE_1],
    shares: [80, 20]

}