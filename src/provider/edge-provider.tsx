"use client"

import {
  EdgeStoreProviderOrigin,
  EdgeStoreProviderType,
} from "@/lib/edge-store"

const EdgeStoreProvider: EdgeStoreProviderType = ({ children, basePath }) => {
  return (
    <EdgeStoreProviderOrigin basePath={basePath}>
      {children}
    </EdgeStoreProviderOrigin>
  )
}

export default EdgeStoreProvider
