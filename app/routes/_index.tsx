import MainHeadline from '#app/components/molecules/MainHeadline.js'
import { type MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [{ title: 'Island Gamer' }]

export default function Index() {
  return (
    <>
      <main className="mx-20 mt-5">
        <div className='flex gap-4'>
          <MainHeadline />
          <MainHeadline />
        </div>
      </main>
    </>
  )
}
