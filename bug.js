```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect running');
    return () => {
      // Cleanup function: runs before the next effect runs, or when component unmounts
      console.log('Cleanup function running');
    };
  }, []); // Empty dependency array ensures effect runs only once after mount

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```