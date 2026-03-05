---
title: "HEAD"
description: "Asks for a response identical to that of a GET request, but without the response body."
---

The `HEAD` method asks for a response identical to that of a `GET` request, but without the response body. 

## Usage
This is useful for checking what a `GET` request will return before actually making a `GET` request. For example, validating if a resource exists or checking the `Content-Length` to see file size.

### Bun / Node.js
```javascript
const response = await fetch('https://api.example.com/large-file.mp4', {
    method: 'HEAD'
});
console.log(response.headers.get('content-length'));
```
