var MyToken = artifacts.require("./MyToken.sol");
var MyTokenSales = artifacts.require("./MyTokenSale.sol");
var KycContract = artifacts.require("./KycContract.sol");
require('dotenv').config({ path: '../.env' });

module.exports = async function (deployer) {
  // let addr = await web3.eth.getAccounts();

  // await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  // console.log('------init migrations :: ----^-^---- :: ', deployer);
  // // MyTokenに1000000(initialSupply)が渡される。
  // await deployer.deploy(KycContract);
  // await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);

  // let tokenInstance = await MyToken.deployed();
  // await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
  // // await instance.transfer(MyTokenSale.address, 1000000);



  let addr = await web3.eth.getAccounts();
  await deployer.deploy(MyToken, process.env.INITIAL_TOKENS);
  await deployer.deploy(KycContract);
  console.log('---------st------------')
  console.log(1, addr[0], MyToken.address, KycContract.address);
  console.log('---------ed----------')
  await deployer.deploy(MyTokenSales, 1, addr[0], MyToken.address, KycContract.address);
  let tokenInstance = await MyToken.deployed();
  await tokenInstance.transfer(MyTokenSales.address, process.env.INITIAL_TOKENS);
};
