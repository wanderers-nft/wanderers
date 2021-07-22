const {expect} = require("chai");

describe("Traveler", function () {
    let traveler;
    let accounts;

    beforeEach(async function () {
        accounts = await ethers.getSigners();

        const Traveler = await ethers.getContractFactory("Traveler");
        traveler = await Traveler.connect(accounts[0]).deploy(
            accounts[1].address,
            1000,
            16,
            ethers.utils.parseEther("0.05")
        );
        await traveler.deployed();
    })

    it("Should be able to mint one", async function () {
        await traveler.connect(accounts[0]).enableSale();
        await traveler.connect(accounts[0]).safeMint(accounts[0].address, 1, {
            value: ethers.utils.parseEther("0.05")
        });
    });

    it("Should be able to mint up to limit", async function () {
        await traveler.connect(accounts[0]).enableSale();
        await traveler.connect(accounts[0]).safeMint(accounts[0].address, 16, {
            value: ethers.utils.parseEther("0.8")
        });
    });

    it("Should not able to mint exceeding limit", async function () {
        await traveler.connect(accounts[0]).enableSale();
        expect(traveler.connect(accounts[0]).safeMint(accounts[0].address, 256, {
            value: ethers.utils.parseEther("32")
        })).to.be.revertedWith("Requested quantity more than maximum");
    });

    it("Should not accept too little payment", async function () {
        await traveler.connect(accounts[0]).enableSale();
        expect(traveler.connect(accounts[0]).safeMint(accounts[0].address, 10, {
            value: ethers.utils.parseEther("0.01")
        })).to.be.revertedWith("Not enough ether sent");
    });

});
