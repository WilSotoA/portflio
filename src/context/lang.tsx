import { useState, createContext } from 'react'
import en from '@/lang/en.json'
import es from '@/lang/es.json'

export const LangContext = createContext({
  lang: es,
  changeLanguage: () => {}
})

export function LangProvider ({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState(es)

  const changeLanguage = () => {
    if (lang.language === 'es') {
      setLang(en)
    } else if (lang.language === 'en') {
      setLang(es)
    }
  }

  return (
    <LangContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LangContext.Provider>
  )
}
