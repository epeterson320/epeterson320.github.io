---
title: Why React Hooks are Great
---

**useTimeout.js**

```javascript
import { useEffect, useState } from 'react';

export default function useTimeout(ms) {
  const [isDone, setDone] = useState(false);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDone(true);
    }, ms);
    const cleanup = () => clearTimeout(timerId);
    return cleanup;
  }, []);
  return isDone;
}
```
**LoadingMessage.jsx**

```javascript
import React from 'react';
import useTimeout from './useTimeout';

export default function LoadingMessage() {
  const hasBeenWaiting = useTimeout(1000);
  const hasBeenWaitingLong = useTimeout(5000);

  const text = (hasBeenWaitingLong) ? "Still loading..." : "Loading...";
  return hasBeenWaiting && <p>{text}</p>;
}
```
