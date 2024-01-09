# yeast

## What is yeast?

## What have I learned building yeast?
Using Reacts `useContext` hook lets us pass data deeply into a tree. I defined a global AuthContext and am able to access the current user in any children component. Now with using `useContext` we have to define the related client to `use client` as all React hooks run on the client and not on the server. However that doesn't mean that the passed in children components are automatically Client components as well. As long as they don't rely on hooks they stay Server Components.

```typescript
  <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
```
