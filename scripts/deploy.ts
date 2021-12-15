import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { Logger } from "tslog";
import config from "./config/config";

const logger: Logger = new Logger();

task("deploy-basetoken", "Deploys BaseToken contract")
    .setAction(
        async (args, hre) => {
            const factory = await hre.ethers.getContractFactory(`contracts/BaseToken.sol:BaseToken`);
            const instance = await factory.deploy(config.name, config.symbol);

            await instance.deployed();

            logger.info(instance.address);
        }
    );


task("deploy-minter", "Deploys Minter contract")
    .setAction(
        async (args, hre) => {
            const factory = await hre.ethers.getContractFactory(`contracts/Minter.sol:Minter`);
            const instance = await factory.deploy(config.minterAddress, config.payees, config.shares);

            await instance.deployed();

            logger.info(instance.address);
        }
    );