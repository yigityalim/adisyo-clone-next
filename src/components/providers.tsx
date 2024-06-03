'use client'
import React, { ComponentProps } from 'react'
import { NextUIProvider } from '@nextui-org/system'
import { ThemeProvider } from 'next-themes'
import { NextIntlClientProvider } from 'next-intl'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import type { Locale } from '@/i18n'
import { useRouter } from '@/lib/navigation'

export interface ProvidersProps
    extends React.PropsWithChildren<ThemeProviderProps>,
        Pick<ComponentProps<typeof NextIntlClientProvider>, 'messages'> {
    locale: Locale
}

const timeZone = 'Europe/Istanbul'

export function Providers({ children, locale = 'tr', messages, ...props }: ProvidersProps): React.ReactElement {
    const router = useRouter()
    return (
        <NextIntlClientProvider timeZone={timeZone} locale={locale} messages={messages}>
            <NextUIProvider locale={locale} navigate={router.push}>
                <ThemeProvider {...props}>{children}</ThemeProvider>
            </NextUIProvider>
        </NextIntlClientProvider>
    )
}
