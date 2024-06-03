'use client'
import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from '@nextui-org/dropdown'
import { Button } from '@nextui-org/button'
import { useLocale, useTranslations } from 'next-intl'

function _LocaleSwitcher() {
    const locale = useLocale()
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([locale]))
    const t = useTranslations('Locale')

    return (
        <Dropdown placement='bottom-end' showArrow backdrop='blur'>
            <DropdownTrigger>
                <Button variant='bordered' className='capitalize'>
                    {t('change')}
                </Button>
            </DropdownTrigger>
            <DropdownMenu
                aria-label='Language'
                title={t('change')}
                variant='flat'
                disallowEmptySelection
                selectionMode='single'
                selectedKeys={selectedKeys}
                // @ts-ignore
                onSelectionChange={setSelectedKeys}
            >
                <DropdownSection title={t('title')}>
                    <DropdownItem key='tr' href='tr'>
                        🇹🇷 Türkçe
                    </DropdownItem>
                    <DropdownItem key='en' href='en'>
                        🇬🇧 English
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    )
}

export const LocaleSwitcher = React.memo(_LocaleSwitcher)
