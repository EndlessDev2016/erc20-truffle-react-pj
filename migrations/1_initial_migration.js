var Migrations = artifacts.require("./Migrations.sol");

module.exports = function (deployer) {
  // console.log('------init migrations :: ----^-^---- :: ', deployer);
  deployer.deploy(Migrations);
};
