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
  // Don't show 'loading' before one second, to
  // avoid flicker of loading content
  const hasBeenWaiting = useTimeout(1000);

  // After 5 seconds, switch text to "Still loading..."
  const hasBeenWaitingLong = useTimeout(5000);
  const text = (hasBeenWaitingLong) ? "Still loading..." : "Loading...";

  if (!hasBeenWaiting) return null;
  return <p>{text}</p>;
}
```

The first file, the `useTimeout` hook, is very flexible. Notice that it's
used twice in the `LoadingMessage` component to easily give it different
behavior depending on how long it's been mounted.
