import { User } from 'lucide-react'
import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/** Left */}
      <div className="relative flex flex-col items-start bg-[url(../assets/bg-stars.svg)] bg-cover justify-between overflow-hidden border-r border-white/20 px-28 py-16">
        {/** Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/** Stripes */}
        <div className="absolute bottom-0 right-1 top-0 w-2 bg-stripes" />
         {/** Sign in */}
        <a href="" className="flex items-center gap-3 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className="h-5 w-5 bg-gray-500" />
          </div>
          <p className="max-w-[148px] text-sm leading-snug">
            <span className="underline">Crie sua conta</span> e salve suas memórias
          </p>
        </a>
        {/** Hero */}
        <div className="space-y-5">
          <Image src={nlwLogo} alt="NLW Spacetime" />
          <div className="max-w-[420px] space-y-1">
            <h1 className="text-5xl font-bold leading-tight text-gray-50">
              Sua cápsula do tempo
            </h1>
            <p className="text-lg leading-relaxed">
              Colecione momentos marcantes de sua jornada e compartilhe com o mundo!
            </p>
          </div>
          <a href="" className="inline-block rounded-full font-alt bg-green-500 px-5 py-3 text-sm uppercase leading-none hover:text-gray-900 text-black hover:bg-green-600">CADASTRAR LEMBRANÇA</a>
        </div>

      </div>

      {/** Right */}
      <div className=" flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma memória, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar aqui!
            </a>
          </p>
        </div>
      </div>
    </main>
  )
}
