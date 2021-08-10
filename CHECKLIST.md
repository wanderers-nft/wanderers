# Launch checklist

## Prelaunch

1. Set up Gnosis safe with appropriate owners
2. Fund the launch key with ether.

## Asset generation

3. Use `make.py` to generate PNG sequences.
4. Backup PNG sequences using `restic`.
5. Use `ff.sh` to generate videos.
6. Backup videos using `restic`.
7. Use `ipfs add -r <path-to-videos>` to generate a CID for the set of videos.
8. Copy the CID to `metadata.py`.
9. With a random number generator, fill in the appropriate IDs and names for the unmarked traits.
10. Use `metadata.py` to generate metadata.
11. Use `ipfs add -r <path-to-metadata>` to generate a CID for the set of metadata.

## Contract deployment

12. Copy the **metadata** CID to `Wanderers.sol`
13. Run `npx hardhat run scripts/deploy.js --network mainnet` to deploy the contract onto mainnet.
14. Fill in `contractLocation` and `transferOwnershipTo` as appropriate in `transferOwnership.js`.
15. Run `npx hardhat run scripts/transferOwnership.js --network mainnet` to transfer ownership.
16. Run `npx hardhat flatten > flatten.sol`, removing all instances of the SPDX identifier except for the top one.
17. Verify the contract on `etherscan.com/address/<address>`.
18. Update `Buy.tsx` to the appropriate contract address.
19. Update `About.tsx` to enable sale buttons.
20. Run `yarn run deploy` to update the site.

## Pre-minting & launch

21. Pre-mint the appropriate quantity for giveaways. Destination address is the Gnosis safe.
22. Set up storefront using OpenSea.
23. Transfer ownership to the Gnosis safe.
24. Pre-mint the appropriate quantity for pre-sale. Destination address is the Gnosis safe.
25. Call `enableSale` to enable sale.

## Postlaunch

26. Run `ipfs daemon` to start node.
27. Pin the metadata and video CID to the local node.
28. Go to https://pinata.cloud and pin contents.