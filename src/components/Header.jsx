import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { Fragment } from 'react'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0'
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0'
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 flex flex-col p-4 mt-4 text-lg tracking-tight origin-top bg-white shadow-xl top-full rounded-2xl text-slate-900 ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#features">Meilleurs taux</MobileNavLink>
            <MobileNavLink href="#testimonials">Témoignages</MobileNavLink>
            <MobileNavLink href="#faqs">FAQ</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />
            <MobileNavLink href="/login">Se connecter</MobileNavLink>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

function LanguagePopover() {
  return (
    <Popover className="relative md:block">
      <Popover.Button className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-full group ring-1 focus:outline-none">
        🌏
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 z-10 w-24 mt-2 origin-top-right bg-white rounded-md shadow-lg lg:right-auto ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu">
          <div className="py-1" role="none">
            <a href="/fr" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Français</a>
            <a href="/en" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>English</a>
            <a href="/de" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Deutsch</a>
            <a href="/es" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Español</a>
            <a href="/it" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Italinao</a>
            <a href="/ko" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>한국인</a>
            <a href="/pl" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Polski</a>
            <a href="/pt" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>Português</a>
            <a href="/ch" className='block px-4 py-1 text-sm text-gray-700 hover:bg-slate-50'>中国人</a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export function Header() {
  const { t } = useTranslation('common')

  return (
    <header className="py-10">
      <Container>
        
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="w-auto h-10" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="#features">{t('meilleursTaux')}</NavLink>
              <NavLink href="#testimonials">{t('temoignages')}</NavLink>
              <NavLink href="#faqs">{t('faq')}</NavLink>
            </div>
          </div>
          
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <div className="hidden md:block">
              <NavLink href="/login">{t('connect')}</NavLink>
            </div>
            <Button href="/register" color="blue">
              <span>
              {t('signIn')} <span className="hidden lg:inline"></span>
              </span>
            </Button>
            
            <LanguagePopover />

            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
