import { type LinksFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import Document from '~/components/shared-layout/Document'
import ThemeSwitch from '~/components/shared-layout/ThemeSwitch'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import { type loader } from './__root.server'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import MainHeadline from "~/components/molecules/MainHeadline.tsx"

import HeroImage from "~/assets/jpg/sample-hero.jpg"

import FooterLogoCentre from './components/organisms/Footer/FooterLogoCentre.tsx'
import useTheme from './hooks/useTheme.tsx'
import NewsHeadline from './components/organisms/NewsCard.tsx'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from '@react-email/components'
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
        <HeaderWithSearch />
        <div className="flex-1 ">
          <main className="mx-20 mt-5">
            <div className='flex gap-4'>
              <MainHeadline />
              <MainHeadline />
            </div>
          </main>
          <div className="w-full py-16">
          </div>
        </div>
        <div className='container flex justify-between pb-5'>
          <ThemeSwitch userPreference={data.requestInfo.userPrefs.theme} />
        </div>
        <FooterLogoCentre companyName='JerseyGaming' altText='Company Logo' />
      </div>
    </Document >
  )
}
