import React from 'react'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { Providers } from '@/components/providers'
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { locales, type Locale } from '@/i18n'

interface Params {
    params: { locale: Locale }
}

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata({ params: { locale } }: Params): Promise<Metadata> {
    const t = await getTranslations({ locale, namespace: 'Index.Metadata' })

    return {
        title: t('title'),
        description: t('description'),
    }
}

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

interface RootLayoutProps extends React.PropsWithChildren, Params {}

export default async function RootLayout({
    children,
    params: { locale },
}: RootLayoutProps): Promise<React.ReactElement> {
    unstable_setRequestLocale(locale)
    const messages = await getMessages()
    return (
        <html lang={locale} suppressHydrationWarning>
            <body className={cn(inter.className)}>
                <Providers
                    messages={messages}
                    locale={locale}
                    enableSystem
                    enableColorScheme
                    attribute='class'
                    defaultTheme='system'
                    storageKey='adisyo-clone-theme'
                >
                    {children}
                </Providers>
            </body>
        </html>
    )
}
