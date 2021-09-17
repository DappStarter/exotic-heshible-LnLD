require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace sell tackle spot crazy reflect noise home harvest beach bone general'; 
let testAccounts = [
"0x587677d60f00cee769b141e193017f6b421f70f0b20040b89ccd9e681bed268b",
"0x9eb9cb95d0191c1b9c7161183edf77af34efb8e6361afebb9fac9aa5082866a0",
"0xf56424cd9909d488583ca0b3d3152e36c90ecdd9482ce2f471275f80f51f13f1",
"0x9c3abf14cbb69d68144c44e74bb436911b70630bca6e775a42b36e6c73894202",
"0x4e28dd8bb99bd8f3b036072b47016f244a547564790b1c56913d701cac7150c2",
"0x11bd4ad5c9ecba0614b16f81f3df500ce1dd2e32b049cf6fea220fb5719d47b6",
"0xf3d1cfb0a7bc361ca4eafc524c3bfa210216f87496f6f56486ecd8fa2a920d71",
"0xb2ecf1b2da6955ade51602a57e7ca8fb3b8878058e5682760eed009a55106cea",
"0x1580c68372480768d18691776ded6489eb11d2b7cb849f9898b270dfa9b46043",
"0xf7d28b96cc4e77ac9e069d12c31ae5b1ebe39ec452808967ed5a09bda4d6c97a"
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


