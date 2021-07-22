const {expect} = require("chai");

describe("Greeter", function () {
    let traveler;
    let accounts;

    beforeEach(async function () {
        accounts = await ethers.getSigners();

        const Traveler = await ethers.getContractFactory("Traveler");
        traveler = await Traveler.connect(accounts[0]).deploy(accounts[0].address, 1000, 16);
        await traveler.deployed();
    })

    it("Should be able to mint one", async function () {
        await traveler.connect(accounts[0]).enableSale();
        await traveler.connect(accounts[0]).safeMint(accounts[0].address, 1);
    });

    it("Should be able to mint up to limit", async function () {
        await traveler.connect(accounts[0]).enableSale();
        await traveler.connect(accounts[0]).safeMint(accounts[0].address, 16);
    });

});
