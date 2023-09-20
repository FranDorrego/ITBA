import React from 'react'
import { useSearchParams } from 'next/navigation'

export default function dashboard() {

    const user = useSearchParams();
    const usuario = user.get('user')
  return (
    <h1>{usuario}</h1>
  )
}
