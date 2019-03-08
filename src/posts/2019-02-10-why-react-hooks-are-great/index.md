---
title: Why React Hooks are Great
---

Here's a pretty neat example of how React hooks allow
for abstractions in really neat directions.

The example use case is for a loading spinner. A good loading UX won't show a spinner for the first second or so, because the page might load near-instantly. In that case, you don't want to show a quick flash of a loading spinner, since that would be jarring when you could just wait a big for the screen to show. If the app or data is taking longer than one second to load, _then_ you want to show a loading spinner. And if the user has been waiting for more than _five_ seconds, the component changes the text so the user doesn't load interest.

The first file, the `useTimeout` hook, is very flexible. Notice that it's used twice in the `LoadingMessage` component to easily give it different behavior depending on how long it's been mounted.

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

Here's a [working example on CodePen](https://codepen.io/epeterson320/pen/pGLVLV?editors=0010).
