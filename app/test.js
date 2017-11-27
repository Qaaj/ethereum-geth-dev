/**
 * Created by Jaaq on 11/25/2017.
 */
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
// console.log(web3.eth.getBalance("94f42970ebce4b678bdc9aa829918e926e407aa4"));
//
console.log(web3.eth.sendTransaction({
  from: "0x1524cf839bdaa82b5bb216a5392b0079d4bf22ec",
  to: "0x2A8f9352A51a79DaDc07339ec5609E7B2D72E35d",
  value: web3.toWei(50, "ether")
}))

// console.log(web3.eth);
// setInterval(() => {
//   console.log(web3.eth.getHashrate(console.log))
// }, 1000);
