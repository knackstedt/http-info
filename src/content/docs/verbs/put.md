---
title: "PUT"
description: "Replaces all current representations of the target resource with the request payload."
---

The `PUT` method replaces all current representations of the target resource with the request payload.

## Usage
`PUT` is [idempotent](/glossary/idempotent/). Sending exactly the same `PUT` request multiple times will always result in the same state on the server. If the resource does not exist, it may create it.

### Bun / Node.js
```javascript
const response = await fetch('https://api.example.com/data/123', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'updated name' })
});
```
