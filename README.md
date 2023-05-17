# 🐾 Paw
Paw is a lightweight wrapper for the `sessionStorage` API, designed to provide seamless support for both client-side and server-side rendering (SSR) environments. It simplifies the process of storing and retrieving values in the browser's session storage.

<br />

## Installation
You can install `Paw` using your preferred package manager:

```sh
$ npm install paw-storage
# yarn add paw-storage
```

<br />

## Usage
To use Paw, you can import the `PawStorage` class and create an instance of it:

```TypeScript
import PawStorage from "paw-storage";

const paw = new PawStorage();
```

<br />

### Setting Values
To store a value in the session storage, use the `set` method:

```TypeScript
paw.set("message", "✨ Soft, like a kitten's paw!")
```

The value can be of any type, including strings, numbers, objects, or arrays.

<br />

### Retrieving Values
To retrieve a value from the session storage, use the `get` method:

```TypeScript
const message = paw.get("message"); // ✨ Soft, like a kitten's paw!
```

The `get` method returns the value associated with the specified key. If the key is not found, it returns `null`.

<br />

## Server-Side Rendering (SSR) Support
Paw is designed to handle server-side rendering (SSR) scenarios. It automatically detects whether the code is running on the server or in the browser environment, enabling seamless usage in both contexts.

When running on the server, Paw provides a simulated storage mechanism by using dynamic properties to store and retrieve values. This allows you to still access stored values even when the actual session storage is not available.
