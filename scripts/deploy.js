const hre = require("hardhat");

async function main() {
  const ERC20 = await hre.ethers.getContractFactory("ERC20");
  const erc20 = await ERC20.deploy(21000000, 50);

  await erc20.deployed();

  console.log("ERC20 token contract was deployed: ", ERC20.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});