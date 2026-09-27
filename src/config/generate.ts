import type { DiscoverConfig } from 'autodisco'

export function getGenerateConfig(options: Pick<DiscoverConfig, 'generate'>): DiscoverConfig['generate'] {
  const openapi = typeof options.generate?.openapi === 'object' ? options.generate.openapi : undefined

  return {
    ...options.generate,

    markdown: options.generate?.markdown ?? false,

    openapi: {
      typescript: openapi?.typescript || true,
    },
  }
}
