import { createEdgeStoreProvider } from "@edgestore/react"

import { type EdgeStoreRouter } from "../app/api/edgestore/[...edgestore]/route"

const { EdgeStoreProvider: EdgeStoreProviderOrigin, useEdgeStore } =
  createEdgeStoreProvider<EdgeStoreRouter>()

type EdgeStoreProviderType = typeof EdgeStoreProviderOrigin

export { EdgeStoreProviderOrigin, useEdgeStore, type EdgeStoreProviderType }
