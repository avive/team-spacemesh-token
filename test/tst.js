// Team Spacemesh Token
const Token = artifacts.require("TeamSpacemeshToken");
const log = console.log;

contract("TeamSpacemeshToken", async accounts => {
  it("Transfer tokens", async () => {
    const instance = await Token.new();
    const owner = accounts[0];
    const receiver = accounts[1];
    const tokens = 3;
    const ownerBalance1 = await instance.balanceOf(owner);
    await instance.transfer(receiver, tokens, { from: owner});
    const tokenBalance = await instance.balanceOf(receiver);
    assert.equal(tokenBalance.toNumber(), tokens);
    const ownerBalance2 = await instance.balanceOf(owner);
    assert.equal(ownerBalance1.toNumber() - ownerBalance2.toNumber(), tokens);
  });

  it("Mint new tokens to a receiver", async () => {
      const instance = await Token.new();
      const owner = accounts[0];
      const receiver = accounts[1];
      const tokens = 3;
      const ownerBalance1 = await instance.balanceOf(owner);
      await instance.mint(receiver, tokens, { from: owner});
      const tokenBalance = await instance.balanceOf(receiver);
      assert.equal(tokenBalance.toNumber(), tokens);
      const ownerBalance2 = await instance.balanceOf(owner);
      assert.equal(ownerBalance2.toNumber(), ownerBalance1.toNumber());
  });
});
