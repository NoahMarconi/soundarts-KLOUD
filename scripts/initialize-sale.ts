import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { Logger } from "tslog";
import config from "./config/config";
import { ethers } from "ethers";
import { BaseToken, Minter } from "../dist/types";

const logger: Logger = new Logger();

task("set-price", "Sets Price for Minter Contract")
    .addParam("etherprice", "Price in ether")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("Minter", config.minterAddress) as Minter;
            await instance.setPrice(ethers.utils.parseEther(args.etherprice));   
        }
    );

task("grant-minter-role", "Sets minter as MINTER_ROLE for token")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("BaseToken", config.tokenAddress) as BaseToken;
            await instance.grantRole(await instance.MINTER_ROLE(), config.minterAddress);
        }
    );

task("set-max-supply", "Sets maxSupply on token")
    .addParam("maxsupply", "Sets token maxSupply")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("BaseToken", config.tokenAddress) as BaseToken;
            await instance.setMaxSupply(args.maxsupply);
        }
    );

task("start-signed-mint", "Starts the whitelist signed mint sale")
    .setAction(
        async (args, hre) => {
            const minterInstance = await hre.ethers.getContractAt("Minter", config.minterAddress) as Minter;
            await minterInstance.flipSignedMintState();
        }
    );

task("set-minter-signer", "Sets the address who approves whitelist participants")
    .setAction(
        async (args, hre) => {
            const minterInstance = await hre.ethers.getContractAt("Minter", config.minterAddress) as Minter;
            await minterInstance.setMintSigner(config.minterSigner);
        }
    );

task("start-mint", "Starts the mint sale")
    .setAction(
        async (args, hre) => {
            const minterInstance = await hre.ethers.getContractAt("Minter", config.minterAddress) as Minter;
            await minterInstance.flipSaleState();
        }
    );