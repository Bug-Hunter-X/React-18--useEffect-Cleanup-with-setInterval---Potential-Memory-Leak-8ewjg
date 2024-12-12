# React 18+ useEffect Cleanup with setInterval

This repository demonstrates a common issue with the `useEffect` hook in React 18 and later versions when using `setInterval`. Incorrect handling of the cleanup function can lead to memory leaks.

## Bug

The `bug.js` file contains a component that uses `setInterval` to update a counter.  However, the cleanup function might not always correctly clear the interval, especially if the component unmounts before the cleanup function has a chance to run.

## Solution

The `bugSolution.js` file provides a corrected implementation that ensures the interval is always cleared, resolving the potential memory leak.