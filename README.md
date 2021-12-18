# Drop Contracts

## Build

```
npm i
```

```
npm run build
```

## Deploy

First fill out the config file in `./scripts/config/config.ts`

```
npx hardhat deploy-basetoken --network goerli
```

Then add its address to the same config file before running:


```
npx hardhat verify-token --network goerli   
```

Minter next

```
npx hardhat deploy-minter --network goerli
```

Then add minter address to the config.

```
npx hardhat verify-minter --network goerli
```

## Initialize


```
npx hardhat set-price --etherprice "0.05" --network goerli
npx hardhat grant-minter-role --network goerli
npx hardhat set-max-supply --maxsupply 5000 --network goerli
```

## Sales

```
## Whitelist sale
npx hardhat set-minter-signer --network goerli
npx hardhat start-signed-mint --network goerli
npx hardhat set-max-per-wallet --max 8 --network goerli
npx hardhat set-max-per-block --max 8 --network goerli


## Full sale
npx hardhat start-mint --network goerli
```

## Roles

```
npx hardhat grant-token-admin --network goerli --address 0xd3682aC636f4FD74C9b904FC6C7cA8f22D2798f0
npx hardhat grant-token-admin --network goerli --address 0xF331d6bcCDe6544C9bEd326c871960D6d84499E4
npx hardhat grant-minter-admin --network goerli --address 0xd3682aC636f4FD74C9b904FC6C7cA8f22D2798f0
npx hardhat grant-minter-admin --network goerli --address 0xF331d6bcCDe6544C9bEd326c871960D6d84499E4


```

## Metadata


