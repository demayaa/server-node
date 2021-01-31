const ganache = require("ganache-cli");
const server = ganache.server({
    mnemonic: "cherry garden lava garden shop vast lava lava vast album royal royal",
    default_balance_ether: 10000000000000000,
    total_accounts: 1,
    network_id: 3324,
    _chainId: 109,
    _chainIdRpc: 1332,
    defaultTransactionGasLimit: '0x99f90000'
});
server.listen(8454, function(err, blockchain) {
    console.log('server connect')
});
