const TeamSpacemeshToken = artifacts.require("TeamSpacemeshToken");

module.exports = function(deployer) {
  deployer.deploy(TeamSpacemeshToken);
};
