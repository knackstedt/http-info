---
title: "Authorization"
description: "Contains the credentials to authenticate a user agent with a server."
---

Contains the credentials to authenticate a user agent with a server.

## Description
Often uses the "Bearer" scheme holding a token (like a JWT).\n\n## Security Context\n**CWE-312 / CWE-319**: If an `Authorization` header is sent over unencrypted HTTP (without TLS), it is vulnerable to interception.

## Usage Note
Headers are case-insensitive, although they are conventionally written in `Train-Case`.