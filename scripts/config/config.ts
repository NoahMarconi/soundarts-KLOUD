import { utils } from "ethers";

export default {
    name: "SA Token",
    symbol: "SA",
    baseUri: "",
    maxSupply: 5000,
    price: utils.parseEther("0.06"),
    tokenAddress: "0xB8Da418FFC2Cb675B8B3d73dca0E3f10811FBbdD",
    minterAddress: "0x84B03B0dE00c93B67bEc879838FB333746CD009c",
    minterSigner: process.env.TEST_PAYEE_0 as string,
    auctionAddress: "",
    payees: [process.env.TEST_PAYEE_0, process.env.TEST_PAYEE_1],
    shares: [80, 20]

}