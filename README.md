# find-a-day
## Installation

```bash
npm install find-a-day
```

## Import

```javascript
const getDayOfBirth = require('find-a-day'); // .cjs file extension
```
## Format
```bash
Format: 'DD-MM-YYYY' or 'DD/MM/YYYY'
```

## Usage

```javascript
// Example usage:
const dateOfBirth = '15-08-1947'; // Format: 'DD-MM-YYYY' or 'DD/MM/YYYY'
const dayOfWeek = getDayOfBirth(dateOfBirth);
console.log('Birth day is:', dayOfWeek); // Birth day is: Friday
```