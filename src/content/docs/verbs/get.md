---
title: "GET"
description: "Retrieves representation of the specified resource. Requests using GET should only retrieve data and have no other effect."
---

The `GET` method requests a representation of the specified resource. Requests using `GET` should only be used to request data (they shouldn't include data).

## Usage

`GET` is considered a "safe" method because it does not alter the state of the server. It is also "[idempotent](/glossary/idempotent/)", meaning multiple identical requests should have the same effect as a single request.

### Bun / Node.js
When using `fetch` in Bun or Node.js (v18+), `GET` is the default method.
```javascript
const response = await fetch('https://api.example.com/data');
const data = await response.json();
```

## Caveats
- Browsers cache `GET` requests by default. Make sure to use appropriate cache headers (`Cache-Control`) to prevent stale data.
- Do not pass sensitive info (like passwords) in the URL query string of a `GET` request.
