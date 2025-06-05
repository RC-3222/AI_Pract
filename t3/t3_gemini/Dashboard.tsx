// src/Dashboard.tsx
import React, { useState, useEffect } from 'react';

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    // --- Option 1: For Create React App (CRA) ---
    // Place `heavyLoop.worker.js` in your `public` folder.
    // const workerInstance = new Worker(process.env.PUBLIC_URL + '/heavyLoop.worker.js');

    // --- Option 2: For Vite or modern bundlers that support `new URL` syntax ---
    // Place `heavyLoop.worker.js` somewhere in `src`, e.g., `src/workers/heavyLoop.worker.js`
    // Ensure your bundler is configured to handle .worker.js files or use a plugin.
    const workerInstance = new Worker(new URL('./workers/heavyLoop.worker.js', import.meta.url), { type: 'module' });


    setWorker(workerInstance);

    workerInstance.onmessage = (event: MessageEvent<number>) => {
      console.log("Main: Message received from worker", event.data);
      setD(event.data);
    };

    workerInstance.onerror = (error) => {
      console.error("Worker error:", error);
      // Optionally, set an error state in your component
    };

    // Send a message to the worker to start the calculation
    console.log("Main: Posting message to worker");
    workerInstance.postMessage('start-calculation'); // The message content can be anything

    // Cleanup function: terminate the worker when the component unmounts
    return () => {
      console.log("Main: Terminating worker");
      workerInstance.terminate();
      setWorker(null);
    };
  }, []); // Empty dependency array ensures this runs once on mount and cleans up on unmount

  return (
    <div>
      {d === null ? 'Calculating in worker...' : `Result: ${d}`}
    </div>
  );
}