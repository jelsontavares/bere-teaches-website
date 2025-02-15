"use client"

import { use } from "react"
import { useCurrentLocale } from '../../../locales/client'
import { useChangeLocale } from '../../../locales/client'

export const LocaleSelect = () => {
     const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <select className="locale-select bg-secondary rounded-lg p-2 outline-none border-0" value={locale} onChange={(e) => changeLocale(e.target.value as "en" | "fr" | "pt")}>
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="pt">Português</option>
        </select>
    )
}