import { utils } from "ethers";

export default {
    name: "Test Token",
    symbol: "TT",
    baseUri: "",
    maxSupply: 100,
    price: utils.parseEther("0.06"),
    tokenAddress: "",
    minterAddress: "",
    minterSigner: "",
    auctionAddress: "",
    payees: [],
    shares: [1, 1]

}