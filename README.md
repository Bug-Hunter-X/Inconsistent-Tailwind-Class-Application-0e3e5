# Inconsistent Tailwind Class Application Bug

This repository demonstrates a bug where certain Tailwind CSS utility classes are not applied correctly or are overridden unexpectedly.  The main issue lies in the inconsistent behavior of `@apply` directive with different classes.

## Problem

In the provided `bug.js` file, the `text-blue-500` class applies correctly, while `text-xl` does not.  This inconsistency in behavior is unpredictable and makes it difficult to reliably style elements using Tailwind CSS.

## Solution

The `bugSolution.js` file provides a solution by properly ensuring that the Tailwind directives are correctly applied and no conflicting styles are present.