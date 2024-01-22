import satori from 'satori'
import { html } from 'satori-html'
import { Resvg } from '@resvg/resvg-js'

import InterRegular from '../../../public/fonts/Inter-Regular.ttf'
import InterBold from '../../../public/fonts/Inter-Bold.ttf'

const ogImageHTML = html`
  <div tw="flex flex-col w-full h-full p-8 bg-slate-200">
    <div tw="flex flex-col justify-between bg-white py-10 px-12 h-full">
      <div style="background: #09090b; width: 170px" tw="flex rounded inline-block px-4 py-3 text-2xl font-bold">
        <span tw="text-white font-bold">Reactjs</span>
        <span tw="text-yellow-300 font-bold ml-1">.tips</span>
      </div>
      <div tw="flex flex-col">
        <h1 tw="flex text-6xl text-slate-900 leading-snug mb-0">Absolute Imports İle Dosyalara Daha Kolay Erişmek</h1>

        <p tw="flex text-slate-700 text-3xl leading-snug">
          Klasör yollarınıza takma adlar vererek proje dosyalarına daha kolay ulaşabilmeyi sağlayan yöntemdir.
        </p>

        <p tw="flex text-slate-800 text-xl">
          <span>reactjs.tips</span>
          <span tw="mx-3">·</span>
          <span>3 dk okuma</span>
          <span tw="mx-3">·</span>
          <span>25 Ocak 2024</span>
        </p>
      </div>
    </div>
  </div>
`

/*
const ogImageHTML = html`
  <div tw="flex flex-col w-full h-full p-8 bg-slate-200">
    <div tw="flex flex-col justify-center bg-white py-10 px-16 h-full">
      <div style="background: #09090b; width: 170px" tw="flex rounded inline-block px-4 py-3 text-2xl font-bold mx-auto">
        <span tw="text-white font-bold">Reactjs</span>
        <span tw="text-yellow-300 font-bold ml-1">.tips</span>
      </div>
      <div tw="flex w-full flex-col">
        <h1 tw="text-center flex text-6xl text-slate-900 leading-snug mb-1">React.js kullananlar için best practiceler, tavsiyeler ve ipuçları</h1>

        <p tw="flex mx-auto text-slate-800 text-2xl">
          <span tw="mr-2">#refactoring,</span>
          <span tw="mr-2">#architecture,</span>
          <span tw="mr-2">#performance</span>
        </p>
      </div>
    </div>
  </div>
`
*/

export async function GET() {
  const out = ogImageHTML

  let svg = await satori(out, {
    fonts: [
      {
        name: 'Inter',
        weight: 400,
        data: Buffer.from(InterRegular),
        style: 'normal'
      },
      {
        name: 'Inter',
        weight: 700,
        data: Buffer.from(InterBold),
        style: 'normal'
      }
    ],
    height: 630,
    width: 1200
  })

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200
    }
  })

  const image = resvg.render()

  return new Response(image.asPng(), {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  })
}
