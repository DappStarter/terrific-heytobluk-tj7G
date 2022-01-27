require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner clog orient spot grief ranch remember arrow just pet sudden such'; 
let testAccounts = [
"0x5be177adb0b62fa7a9f798946d6bdab49afb8fbd88dd4129743f21b434deaffe",
"0xbee074a3d139a04030827afdc8b354a348d5ea5e94f44d87204fa7bf403cb032",
"0x2a2f313fb56ea90540e869fe8c9e7d661ba1d806d104b72e7e6b4b7c7a485f1e",
"0xac184c45392f00726244dfda2a44fad13aae837c85de468c63f3e71608bdfa94",
"0x4a34e1c450aeb01223171372c9d7b3b4eaafcb033284c7a88e227b7778f7c28a",
"0x402d75c8e7ac948519a425db1e39cba71bbe16430db7a2606672b46ebaadb5f1",
"0x8e6467646b1d718cd6bdc05cf4ffd3b5fc69e10ae752506edc859a7e9365fbbf",
"0xe440e9cd8d893ba8c0b5d90dbdc33a5965bd7dd217d0199061ec155713a71f05",
"0x5d26c0f5367fafe890cb4e2d28a636ba63768a20f36212b9909c67b6f2634359",
"0xdf5d094fddd87ccc738f35cbdd6996b38fce9cca97643af911ce5e7d794e17da"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


