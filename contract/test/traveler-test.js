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

    it("Should be able to pre-mint one", async function () {
        await traveler.connect(accounts[0]).preMint(accounts[0].address, 1);
    });

    it("Should be able to pre-mint multiple", async function () {
        await traveler.connect(accounts[0]).preMint(accounts[0].address, 42);
    });

    it("Should not able to pre-mint from non-owner", async function () {
        expect(traveler.connect(accounts[1]).preMint(accounts[0].address, 1))
            .to.be.revertedWith("Ownable: caller is not the owner");
    });

    it("Should not able to pre-mint after sale beings", async function () {
        await traveler.connect(accounts[0]).enableSale();
        expect(traveler.connect(accounts[0]).preMint(accounts[0].address, 1))
            .to.be.revertedWith("Sale already in progress");
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

    it("Should not be possible for more than max supply to exist", async function () {
        await traveler.connect(accounts[0]).enableSale();
        for (let i = 0; i < 100; i++) {
            await traveler.connect(accounts[0]).safeMint(accounts[0].address, 10, {
                value: ethers.utils.parseEther("0.5")
            });
        }

        expect(traveler.connect(accounts[0]).safeMint(accounts[0].address, 1, {
            value: ethers.utils.parseEther("0.05")
        })).to.be.revertedWith("Total supply will exceed limit");

    });


});
