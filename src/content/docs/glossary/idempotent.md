---
title: "Idempotency"
description: "A layman's explanation of idempotency in HTTP."
---

## What the Hell is "Idempotent"?

In plain English, **idempotent** means that doing something multiple times has exactly the same effect as doing it just once. 

Think of an elevator button. If you press the "Up" button once, the elevator comes. If you aggressively spam the "Up" button twenty times because you're in a hurry, the elevator doesn't come twenty times as fast, and you don't call twenty different elevators. The end result of pushing the button 1 time or 20 times is identical: the elevator is called to your floor.

That's an **idempotent** action!

## In the Context of HTTP

In web APIs, an endpoint is idempotent if it is safe to retry a request over and over without causing unintended side effects (like accidentally charging a user's credit card a dozen times).

### Idempotent Methods
* **[GET](/verbs/get/)**: Fetching a user profile doesn't change anything on the server. You can fetch it 100 times, and the server state stays the same.
* **[PUT](/verbs/put/)**: If you tell the server "Update my username to `JohnDoe`", sending that command 5 times in a row just ensures it is `JohnDoe` each time. 
* **[DELETE](/verbs/delete/)**: Deleting a post removes it. If you try to delete the exact same post again, it's still gone. 

### Non-Idempotent Methods
* **[POST](/verbs/post/)**: If a `POST` request creates a new comment, sending identical `POST` requests 10 times will result in 10 separate, duplicate comments being created.
