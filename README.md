# ts-time-interval

Time interval helper class and functions for TypeScript

## Installation

```
npm install ts-time-interval
```

## Example #1
Using the helper functions to create `TimeInterval` instances.

```
import { seconds, minutes } from 'ts-time-interval';

const s = seconds(60);
const m = minutes(1);
const sum = s.add(m);

console.log(sum.minutes); // prints "2"
```

## Example #2
Creating `TimeInterval` instances directly. Constructor expects a number representing milliseconds.

```
import { TimeInterval } from 'ts-time-interval';

const a = new TimeInterval(60000);
const b = new TimeInterval(60000);
const sum = a.add(b);

console.log(sum.minutes); // prints "2"
```
