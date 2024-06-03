import { LocaleSwitcher } from '@/components/locale-switcher'
import { useTranslations } from '@/i18n'

export default function Index() {
    const t = useTranslations('Index')
    return (
        <div className='container mx-auto flex h-full flex-col items-center justify-center gap-8'>
            <h1 className='text-danger-500'>{t('title')}</h1>
            <LocaleSwitcher />
        </div>
    )
}
