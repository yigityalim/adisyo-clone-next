import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { IntlErrorCode } from 'next-intl'

type Locale = (typeof locales)[number]
type LocalePrefix = 'as-needed' | 'always' | 'never'

const locales = ['tr', 'en']
const localePrefix = 'always'
const defaultLocale = 'tr' satisfies (typeof locales)[number]

export default getRequestConfig(async ({ locale }) => {
    if (!locales.includes(locale)) notFound()

    return {
        messages: (await import(`../messages/${locale}.json`)).default,
        timeZone: 'Europe/Istanbul',
        now: new Date(),
        formats: {
            dateTime: {
                short: {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                },
            },
            number: {
                precise: {
                    maximumFractionDigits: 5,
                },
            },
            list: {
                enumeration: {
                    style: 'long',
                    type: 'conjunction',
                },
            },
        },
        onError(error) {
            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                console.error(error)
            } else {
                // logging
            }
        },
        getMessageFallback({ namespace, key, error }) {
            const path = [namespace, key].filter((part) => part != null).join('.')

            if (error.code === IntlErrorCode.MISSING_MESSAGE) {
                return `${path} daha çevrilmemiş`
            } else {
                return 'Sevgili geliştirici, lütfen bu mesajı düzeltin: ' + path
            }
        },
    }
})

export { useTranslations, useLocale, useMessages, useNow, useFormatter, useTimeZone } from 'next-intl'
export {
    getLocale,
    getFormatter,
    getMessages,
    getNow,
    getTranslations,
    getRequestConfig,
    getTimeZone,
} from 'next-intl/server'

export { locales, localePrefix, defaultLocale }
export type { Locale, LocalePrefix }
