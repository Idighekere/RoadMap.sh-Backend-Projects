---
title: React Hooks Explained
excerpt: >-
  Understanding React Hooks and how they revolutionize state management in
  functional components.
date: '2025-02-24T19:46:50.245Z'
author: Idighs
lastModified: '2025-02-24T19:46:50.245Z'
slug: react-hooks-explained
---
React Hooks have revolutionized how we write React components. Let's dive deep into understanding and using them effectively.

## Common Hooks

### 1. useState

```javascript
function Counter() {
    const [count, setCount] = useState(0);
    
    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}
```

### 2. useEffect

```javascript
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        fetchUser(userId).then(data => setUser(data));
    }, [userId]);
    
    if (!user) return 'Loading...';
    return <div>{user.name}</div>;
}
```

## Custom Hooks

Creating reusable logic with custom hooks:

```javascript
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });
    
    // ... implementation details
}
```
