pragma solidity =0.5.16;

import '../RetherswapERC20.sol';

contract ERC20 is RetherswapERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
