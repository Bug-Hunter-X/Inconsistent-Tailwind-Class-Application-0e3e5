```javascript
// Some Tailwind classes are not applied or are being overridden unexpectedly.

.my-class {
  @apply text-blue-500; // This works
  @apply text-xl; // This does not work
}
```