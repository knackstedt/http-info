---
title: "Set-Cookie"
description: "Sends cookies from the server to the user agent."
---

Sends cookies from the server to the user agent.

## Description
Used to store state, like session IDs. Important flags include `HttpOnly` (preventing JS access), `Secure` (only sent over HTTPS), and `SameSite` (preventing CSRF).

## Usage Note
Headers are case-insensitive, although they are conventionally written in `Train-Case`.