const { expect } = require("chai");
const hre = require("hardhat");

describe("ERC20Token contract", function() {
  // global vars
  let Token;
  let erc20Token;
  let owner;
  let addr1;
  let addr2;
  let tokenCap = 21000000;
  let tokenBlockReward = 50;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Token = await ethers.getContractFactory("ERC20Token");
    [owner, addr1, addr2] = await hre.ethers.getSigners();

    erc20Token = await Token.deploy(tokenCap, tokenBlockReward);
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await erc20Token.owner()).to.equal(owner.address);
    });

    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await erc20Token.balanceOf(owner.address);
      expect(await erc20Token.totalSupply()).to.equal(ownerBalance);
    });
  });
});