import { ripemd160 } from "../node_modules/ethereum-cryptography/ripemd160.js";

async function main(): Promise<void> {
  console.log(ripemd160(new Uint8Array(2)));
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
