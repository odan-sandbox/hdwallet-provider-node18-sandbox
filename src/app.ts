import HDWalletProvider from "@truffle/hdwallet-provider";

async function main(): Promise<void> {
  const provider = new HDWalletProvider({
    mnemonic:
      "indoor dish desk flag debris potato excuse depart ticket judge file exit",
    providerOrUrl: "http://localhost:8545",
  });

  console.log(provider);
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
