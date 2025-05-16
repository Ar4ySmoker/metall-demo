'use client'

import { CartFavoritesProvider } from "@/context/CartFavoritesContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartFavoritesProvider>
      {children}
    </CartFavoritesProvider>
  )
}
