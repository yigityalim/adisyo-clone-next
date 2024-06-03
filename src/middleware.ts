import { type NextRequest } from 'next/server'
import createIntlMiddleware from 'next-intl/middleware'
import { locales, defaultLocale } from '@/i18n'
import { updateSession } from '@/lib/supabase/middleware'

const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix: 'always',
})

export async function middleware(request: NextRequest) {
    const response = handleI18nRouting(request)
    const res = await updateSession(request)
    return res
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         * Feel free to modify this pattern to include more paths.
         */
        '/',
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
        '/(tr|en)/:path*',
    ],
}
