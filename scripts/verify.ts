import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import config from "./config/config";

task("verify-token", "Verifies Token Contract")
    .setAction(
        async (args, hre) => {
            await hre.run("verify:verify", {
                address: config.tokenAddress,
                constructorArguments: [config.name, config.symbol],
                contract: "contracts/BaseToken.sol:BaseToken"
            });
        }
    );

