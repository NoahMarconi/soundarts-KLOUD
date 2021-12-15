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
npx hardhat deploy-minter --network goerli
```

Then add minter address to the config.


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

## Full sale
npx hardhat start-mint --network goerli
```

## Metadata


