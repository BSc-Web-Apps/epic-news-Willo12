import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { useLoaderData } from '@remix-run/react'

import { type loader } from './__root.server'

import useTheme from './hooks/useTheme.tsx'
export const links: LinksFunction = () => {
  return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
  const data = useLoaderData<typeof loader>();
  const nonce = useNonce()
  const theme = useTheme()
  return (
    <Document nonce={nonce} theme={theme}>
      <div className="flex h-screen flex-col justify-between">
        <div className="flex-1 ">
          <main className="grid h-full place-items-center">
            <h1 className="text-mega">bruh</h1>
            <button className='bg-blue-500 px-6 py-2 rounded-lg text-3xl hover:bg-blue-800 hover:text-4xl transition-all duration-500 border-red-900 border-8 '>Learn more</button>
          </main>
        </div>
        <div className='container flex justify-between pb-5'>
          <ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
        </div>
        <div className='bg-blue-500 border border-blue-300'>
          <button className='p-4 text-blue-900'>open</button>
        </div>
        <div className='bg-blue-500 border border-blue-300'>
          <button className='p-4 text-blue-900'>close</button>
        </div>
      </div>
    </Document>
  )
}
