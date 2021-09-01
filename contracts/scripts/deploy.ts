import { Contract, ContractFactory } from 'ethers';
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat';

async function main(): Promise<void> {
  // Hardhat always runs the compile task when running scripts through it.
  // If this runs in a standalone fashion you may want to call compile manually
  // to make sure everything is compiled
  // await run("compile");
  // We get the contract to deploy
  // const Greeter: ContractFactory = await ethers.getContractFactory('Greeter');
  // const greeter: Contract = await Greeter.deploy('Hello, Buidler!');
  // await greeter.deployed();
  const GrantRegistry: ContractFactory = await ethers.getContractFactory('GrantRegistry');
  const GrantRound: ContractFactory = await ethers.getContractFactory('GrantRound');
  const GrantRoundManager: ContractFactory = await ethers.getContractFactory('GrantRoundManager');

  const minContribution = ethers.BigNumber.from("1000000000000");
  const startTime = Date.now();
  const endTime = startTime + 60000;

  const grantRegistry = await GrantRegistry.deploy();
  console.log(`GrantRegistry adress: ${grantRegistry.address}`);

  const grantRound = await GrantRound.deploy(
      "0x7a8ceF01b0475090319c4D76ca10Bb359750B0FF",//_metadataAdmin
      "0x7a8ceF01b0475090319c4D76ca10Bb359750B0FF",//_payoutAdmin
      `${grantRegistry.address}`,//_Registry
      "0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199",//_donationToken
      "0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199",//_matchingToken
      startTime,//_startTime
      endTime,//_endTime
      "",//_metaPtr
      minContribution//_minContribution
  );
  console.log(`GrantRound adress: ${grantRound.address}`);

  const grantRoundManager = await GrantRoundManager.deploy(
    `${grantRegistry.address}`,//registry
    "0x2D99ABD9008Dc933ff5c0CD271B88309593aB921",//router
    "0x83080D4b5fC60e22dFFA8d14AD3BB41Dde48F199"//_donationToken
  );
  console.log(`GrantRoundManager adress: ${grantRoundManager.address}`);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
void main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
