'use client'

import Error from 'next/error'

export default function NotFound() {
    return (
        <html lang='tr'>
            <head>
                <title>404 Not Found</title>
            </head>
            <body>
                <Error withDarkMode statusCode={404} title='Aradığınız sayfa bulunamadı.' />
            </body>
        </html>
    )
}
