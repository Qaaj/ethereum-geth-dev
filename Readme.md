# Ethereum DEVnet Container

One geth node, based on Ubuntu 16.04 LTS

#### Features:

- Automatic address generation (generates a new coinbase address)
- Genesis block setup (low difficulty for quick tx confirmations, high gas block limit)
- Mining script (starts mining only when new transactions are present)

It also has:

- Node JS
- Web3 as npm module

---

### Usage:

    docker pull mordhau/ethereum-geth-dev
    docker run -p 8545:8545 mordhau/ethereum-geth-dev

##### How to start development
    
    npm run start
    
##### How to build a new Docker image

    npm run docker:build

##### How to send a test transaction
    npm run test:tx
    
Note:
Open app/test.js and make sure the FROM address exists!
It's displayed during boot and lookes like:

    INFO [11-27|19:33:58] Unlocked account                         address=0x09c178815B0dd26576E1dD7Aba1720402f


