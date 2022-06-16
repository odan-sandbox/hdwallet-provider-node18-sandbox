import bip39 from "bip39";
import * as WalletOriginal from "ethereumjs-wallet";
import { interopImportCJSDefault } from "node-cjs-interop";

const Wallet = interopImportCJSDefault(WalletOriginal);
const { hdkey } = Wallet;

async function main(): Promise<void> {
  hdkey.fromMasterSeed(bip39.mnemonicToSeedSync("basket actual"));
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
