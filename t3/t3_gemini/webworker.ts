// public/heavyLoop.worker.js
// OR src/workers/heavyLoop.worker.js (if using Vite/modern bundler setup)

self.onmessage = function(event) {
  // You could pass parameters via event.data if needed
  // For this example, we'll just trigger the calculation
  console.log("Worker: Message received from main script", event.data);

  let t = 0;
  // The heavy loop
  for (let i = 0; i < 1e8; i++) { // 100 million iterations
    t += i;
  }

  console.log("Worker: Calculation complete, posting result back");
  self.postMessage(t); // Send the result back to the main thread
};