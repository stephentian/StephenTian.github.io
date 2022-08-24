# How to Import JS without build tools

As we all know, ES Module is a new Modular solution in ES6.

```js
import dayjs from "https://cdn.skypack.dev/dayjs@1.10.7";
// use
dayjs("2022-08-12").format("YYYY-MM-DD");
```

In CommonJS, Need npm

```js
const dayjs = require('dayjs'); // CommonJS

import dayjs from 'dayjs'; // webpack
```

## import maps

```js
<script type="importmap">
{
 "imports": {
  "dayjs": "[heep](https://cdn.skypack.dev/dayjs@1.10.7)"
 }
}
</script>
```

```js
<script type="module">
 import dayjs from 'dayjs';

 console.log(dayjs("2022-08-12").format("YYYY-MM-DD"));
</script>
```
