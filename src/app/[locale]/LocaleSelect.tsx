"use client"

import { use } from "react"
import { useCurrentLocale } from '../../../locales/client'
import { useChangeLocale } from '../../../locales/client'

export const LocaleSelect = () => {
     const locale = useCurrentLocale();
    const changeLocale = useChangeLocale();

    return (
        <select className="locale-select  rounded-lg p-2 border outline-none" value={locale} onChange={(e) => changeLocale(e.target.value as "en" | "fr" | "pt")}>
            <option value="en" >English</option>
            <option value="fr">Français</option>
            <option value="pt">Português</option>
        </select>
    )
}