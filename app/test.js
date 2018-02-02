/**
 * Created by Jaaq on 11/25/2017.
 */
const Web3 = require('web3');

// const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const web3 = new Web3(new Web3.providers.HttpProvider("http://52.39.44.21:8545")); // IP is now static
// console.log(web3.eth.getBalance("94f42970ebce4b678bdc9aa829918e926e407aa4"));
//
console.log(web3.eth.sendTransaction({
  from: "0xcdcd18bf630a5e0dc468fb4107448020f7cc0797",
  to: "0x6e791D27a98243bB18daB3921BE1Ac8eac9bFa67",
  value: web3.toWei(666, "ether")
}))

// console.log(web3.eth);
// setInterval(() => {
//   console.log(web3.eth.getHashrate(console.log))
// }, 1000);
