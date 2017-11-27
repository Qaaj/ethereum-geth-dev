var debounce, eth, now;

pendingTransactions = function() {
  if (!eth.pendingTransactions) {
    return txpool.status.pending || txpool.status.queued;
  } else if (typeof eth.pendingTransactions === 'function') {
    return eth.pendingTransactions().length > 0;
  } else {
    return eth.pendingTransactions.length > 0 || eth.getBlock('pending').transactions.length > 0;
  }
};

(function() {
  
  eth.filter('pending', function(error, result){
    console.log('Pending: ', result);
    if(miner.hashrate !== 0){
      console.log("Pending TX and not mining. Starting miner.");
      miner.start(1); // Threads
    }
  });
  
  eth.filter('latest', function(error, result){
    console.log('Latest: ', result);
    if(!pendingTransactions()){
      console.log("All transactions processed. Stopping miner.");
      miner.stop();
    }
  });
})();
