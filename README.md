# utets

General purpose utility library for TypeScript with common types and functions

# Functions

## random

The random function returns a random number between 0 and 1 or two specified numbers.

Examples

```typescript
import { random } from 'utets';

consol.log(random()); // Random number between 0 and 1
console.log(random(10, 100)); // Random number between 10 and 100
console.log(random(1)); // Throws an error
```
