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
    const destinationAddress = "0x2780bE80bA18d0C27540b9cD75E3C49a58c33229";
    const maxSupply = 8888;
    const maxPerTx = 16;
    const pricePer = ethers.utils.parseEther("0.08");

    // We get the contract to deploy
    const Wanderer = await hre.ethers.getContractFactory("Wanderer");
    const wanderer = await Wanderer.deploy(destinationAddress, maxSupply, maxPerTx, pricePer);

    await wanderer.deployed();

    console.log("Greeter deployed to:", wanderer.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
