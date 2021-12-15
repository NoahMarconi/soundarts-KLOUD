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
npx hardhat deploy-basetoken
```

Then add its address to the same config file before running:

```
npx hardhat deploy-minter
```

Then add minter address to the config.


## Initialize


```
npx hardhat set-price --etherprice "0.05"
npx hardhat grant-minter-role
npx hardhat set-max-supply --maxsupply 5000
```

## Sales

```
## Whitelist sale
npx hardhat set-minter-signer
npx hardhat start-signed-mint

## Full sale
npx hardhat start-mint
```

## Metadata


