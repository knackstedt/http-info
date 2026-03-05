---
title: "OPTIONS"
description: "Describes the communication options for the target resource."
---

The `OPTIONS` method is used to describe the communication options for the target resource. 

## Usage
It is heavily used in **CORS** (Cross-Origin Resource Sharing) as a "preflight" request to determine if the actual request is safe to send.

### CORS Preflight Example
Browsers emit an `OPTIONS` request automatically when a cross-origin request requires it (e.g. using custom headers).
```http
OPTIONS /resource HTTP/1.1
Host: api.example.com
Origin: https://example.com
Access-Control-Request-Method: POST
```
The server responds with `Access-Control-Allow-Methods` and other relevant CORS headers.
