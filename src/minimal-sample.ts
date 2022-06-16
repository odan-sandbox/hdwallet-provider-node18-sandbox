import crypto from "node:crypto";

async function main(): Promise<void> {
  crypto.createHash("ripemd160").update(Buffer.alloc(0)).digest();
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
