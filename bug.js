```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of the cleanup function
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(id); // Cleanup function to clear the interval
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```