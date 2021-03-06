// Team Spacemesh Token
pragma solidity >=0.5.0 <0.6.0;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
contract TeamSpacemeshToken is ERC20Mintable, ERC20Detailed {
    constructor() ERC20Detailed("Team Spacemesh Token", "TST", 0) public {
        _mint(msg.sender, 1000);
    }
}
