const TeamSpacemeshToken = artifacts.require("TeamSpacemeshToken");
TeamSpacemeshToken.synchronization_timeout = 3000;

module.exports = function(deployer) {
  deployer.deploy(TeamSpacemeshToken);
};
