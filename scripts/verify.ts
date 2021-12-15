import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import ownerConfig from "./config/config";

task("verify-token", "Verifies Token Contract")
    .setAction(
        async (args, hre) => {
            // await hre.run("verify:verify", {
            //     address: ownerConfig.tokenAddress,
            //     constructorArguments: tokenConf,
            //     contract: "contracts/[CONTRACT].sol:[CONTRACT]"
            // });
        }
    );

