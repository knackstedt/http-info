---
title: "PATCH"
description: "Applies partial modifications to a resource."
---

The `PATCH` method applies partial modifications to a resource.

## Usage
While `PUT` replaces the entire resource, `PATCH` only updates the fields specified in the request. `PATCH` is not necessarily [idempotent](/glossary/idempotent/), although it can be designed to be.

### Bun / Node.js
```javascript
const response = await fetch('https://api.example.com/data/123', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ age: 30 }) // Only updating age
});
```
