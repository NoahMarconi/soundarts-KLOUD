import { task } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import { Logger } from "tslog";
import { isAddress } from "@ethersproject/address";

const logger: Logger = new Logger();

task("set-baseuri", "set BaseUri")
    .addParam("projectaddress", "Project address")
    .addParam("baseuri", "Base URI to Set")
    .setAction(
        async (args, hre) => {
            const instance = await hre.ethers.getContractAt("KLOUD", args.projectaddress);

            await instance.setBaseURI(args.baseuri);
        }
    );
