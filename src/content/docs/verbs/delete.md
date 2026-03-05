---
title: "DELETE"
description: "Deletes the specified resource."
---

The `DELETE` method deletes the specified resource.

## Usage
`DELETE` is [idempotent](/glossary/idempotent/). Calling it multiple times on the same resource will leave the server in the same final state (the resource is gone), though responses might differ ([200 OK](/status-codes/2xx/200/) or [204 No Content](/status-codes/2xx/204/) for the first, [404 Not Found](/status-codes/4xx/404/) for subsequent ones).

### Bun / Node.js
```javascript
const response = await fetch('https://api.example.com/data/123', {
    method: 'DELETE'
});
```
