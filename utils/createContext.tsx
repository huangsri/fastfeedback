import { createContext, Provider, useContext, Context } from 'react'

export function createCtx<
  T extends Record<string, unknown> | null,
>(): readonly [
  <K>() => T & K,
  Provider<T | undefined>,
  Context<T | undefined>,
] {
  const ctx = createContext<T | undefined>(undefined)

  function useCtx<K>() {
    const c = useContext(ctx)

    if (c === undefined) {
      throw new Error('useCtx must be inside a Provider with a value')
    }

    return c as T & K
  }

  return [useCtx, ctx.Provider, ctx] as const
}
