import { createPublicClient, createWalletClient, http, type Address } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { scrollSepolia } from 'viem/chains';

let mnemonic = process.env.NMONIC as Address;

if (!mnemonic) {
    throw new Error('No mnemonic found. Set the NMONIC environment variable.');
}

if (!mnemonic.startsWith('0x')) {
    mnemonic = `0x${mnemonic}`;
}

const account = privateKeyToAccount(mnemonic);

const publicClient = createPublicClient({
    chain: scrollSepolia,
    transport: http(),
});

const walletClient = createWalletClient({
    account,
    chain: scrollSepolia,
    transport: http(),
});

export { publicClient, walletClient, account };
