# hdwallet-provider-node18-sandbox

## ethereumjs-wallet

```bash
$ yarn ts-node-esm src/ethereumjs-wallet-sample.ts
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:133:10)
    at hash160 (/Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:249:21)
    at HDKey.set (/Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:50:24)
    at Function.HDKey.fromMasterSeed (/Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/node_modules/ethereumjs-wallet/node_modules/ethereum-cryptography/vendor/hdkey-without-crypto.js:194:20)
    at Function.fromMasterSeed (/Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/node_modules/ethereumjs-wallet/src/hdkey.ts:13:36)
    at main (file:///Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/src/ethereumjs-wallet-sample.ts:9:9)
    at file:///Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/src/ethereumjs-wallet-sample.ts:12:1
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}
```

## minimal-sample

```bash
$ yarn ts-node-esm src/minimal-sample.ts
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:133:10)
    at main (file:///Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/src/minimal-sample.ts:4:10)
    at file:///Users/odan/source/github.com/odan-sandbox/hdwallet-provider-node18-sandbox/src/minimal-sample.ts:7:1
    at ModuleJob.run (node:internal/modules/esm/module_job:198:25)
    at async Promise.all (index 0)
    at async ESMLoader.import (node:internal/modules/esm/loader:409:24)
    at async loadESM (node:internal/process/esm_loader:85:5)
    at async handleMainPromise (node:internal/modules/run_main:61:12) {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

```
