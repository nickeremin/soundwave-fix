import { createJSONStorage, persist } from "zustand/middleware"
import { createStore } from "zustand/vanilla"


import { createLayoutSlice, type LayoutStore } from "./layout-store"


type HydrateState = {
  _hasHydrated: boolean
}

type HydrateActions = {
  setHasHydrated: (_hasHydrated: boolean) => void
}

type HydrateStore = HydrateState & HydrateActions

export type BoundStore = LayoutStore & HydrateStore

export function createBoundStore() {
  return createStore<BoundStore>()(
    persist(
      (...a) => ({
        _hasHydrated: false,
        setHasHydrated: (_hasHydrated) => a[0](() => ({ _hasHydrated })),
        ...createLayoutSlice(...a),
      }),
      {
        name: "search-storage",
        storage: createJSONStorage(() => localStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHasHydrated(true)
        },
      }
    )
  )
}
