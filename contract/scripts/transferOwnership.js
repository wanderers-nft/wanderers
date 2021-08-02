// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
    // Hardhat always runs the compile task when running scripts with its command
    // line interface.
    //
    // If this script is run directly using `node` you may want to call compile
    // manually to make sure everything is compiled
    // await hre.run('compile');

    // RINKEBY
    const contractLocation = "0xc4a7dd7cDA89877952741A9eC48483462C602255";
    const transferOwnershipTo = "0x3668FfF9416fadE4831D2136cba30e74557E2198";

    // We get the deployed contract
    const traveler = await hre.ethers.getContractAt("Wanderer", contractLocation);

    const tx = await traveler.transferOwnership(transferOwnershipTo);
    const receipt = await tx.wait();

    console.log("Greeter deployed to:", receipt.transactionHash);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });