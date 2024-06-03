import { useTranslations } from 'next-intl'
import '@/styles/globals.css'
import { Link } from '@nextui-org/link'

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage')
    return (
        <div className='flex h-full flex-col items-center justify-center gap-y-4'>
            <h1 className='text-4xl font-bold'>404 {t('title')}</h1>
            <p className='text-lg'>{t('message')}</p>
            <Link href='/' className='mt-4 px-4 py-2 text-start'>
                {t('backToHome')}
            </Link>
        </div>
    )
}
