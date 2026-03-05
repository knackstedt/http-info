---
title: "POST"
description: "Submits an entity to the specified resource, often causing a change in state or side effects on the server."
---

The `POST` method submits an entity to the specified resource, often causing a change in state or side effects on the server.

## Usage

Unlike `GET` or `PUT`, `POST` is not [idempotent](/glossary/idempotent/). Multiple identical `POST` requests may result in multiple resources being created.

### Bun / Node.js
```javascript
const response = await fetch('https://api.example.com/data', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ key: 'value' })
});
```

## Common Vulnerabilities (CWE/CVE Context)
- **CSRF (Cross-Site Request Forgery):** If endpoints that use `POST` to change state aren't protected by CSRF tokens or `SameSite` cookies, attackers can trick users into submitting malicious state changes.
