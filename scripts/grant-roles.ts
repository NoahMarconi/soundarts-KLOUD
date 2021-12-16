import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import config from "./config/config";
import { BaseToken, Minter } from "../dist/types";

task("grant-token-admin", "Grants Default Admin Role")
    .addParam("address", "Address to grant role to")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("BaseToken", config.tokenAddress) as BaseToken;
            await instance.grantRole(await instance.DEFAULT_ADMIN_ROLE(), args.address);
        }
    );

task("grant-minter-admin", "Grants Default Admin Role")
    .addParam("address", "Address to grant role to")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("Minter", config.minterAddress) as Minter;
            await instance.grantRole(await instance.ADMIN_ROLE(), args.address);
        }
    );
