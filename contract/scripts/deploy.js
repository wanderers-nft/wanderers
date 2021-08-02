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
    const destinationAddress = "0x3668FfF9416fadE4831D2136cba30e74557E2198";
    const maxSupply = 1000;
    const maxPerTx = 16;
    const pricePer = ethers.utils.parseEther("0.05");

    // We get the contract to deploy
    const Traveler = await hre.ethers.getContractFactory("Wanderer");
    const traveler = await Traveler.deploy(destinationAddress, maxSupply, maxPerTx, pricePer);

    await traveler.deployed();

    console.log("Greeter deployed to:", traveler.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
