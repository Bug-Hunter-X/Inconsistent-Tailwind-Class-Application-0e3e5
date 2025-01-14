```javascript
// Ensure proper Tailwind configuration and no conflicting styles

.my-class {
  @apply text-blue-500 text-xl; // Combining classes in one @apply directive
}

/* OR */

.my-class {
  text-blue-500;
  text-xl; // Using standard CSS instead of @apply
}

/* Further checks:
1. Verify that the Tailwind directives are correctly included in your CSS file.
2. Check for any conflicting styles or CSS overrides.
3. Make sure your project's `tailwind.config.js` is correctly configured.
4. Consider using the browser's developer tools to inspect the applied styles and identify any conflicts.*/
```