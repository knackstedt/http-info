---
title: "Access-Control-Allow-Origin"
description: "Indicates whether the response can be shared with requesting code from the given origin."
---

Indicates whether the response can be shared with requesting code from the given origin.

## Description
Returned in response to a CORS preflight request or normal CORS request. Crucial for web security.\n\n## Security Context\nCareless use of `Access-Control-Allow-Origin: *` can expose sensitive APIs to malicious websites if they operate on the authenticated user's behalf.

## Usage Note
Headers are case-insensitive, although they are conventionally written in `Train-Case`.