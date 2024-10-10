import { useEffect, useState } from 'react'

const ziskejSekundy = () => {
  const ted = new Date()
  return ted.getSeconds() + ted.getMinutes() * 60 + ted.getHours() * 60 * 60
}

export const useCasVSekundach = () => {
  const [sekundy, setSekundy] = useState(ziskejSekundy())

  useEffect(() => {
    const odpocet = setTimeout(() => {
      setSekundy(ziskejSekundy())
    }, 1000 - new Date().getMilliseconds())

    return () => {
      clearTimeout(odpocet)
    }
  }, [sekundy])

  return sekundy
}
