import './App.css'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '@/components/atoms/LanguageSwitcher'

function App() {

  const { t } = useTranslation()
  return (
    <>
      <h2>{t("line1")}</h2>
      <LanguageSwitcher />
    </>
  )
}

export default App
