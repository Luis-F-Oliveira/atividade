import React from 'react'

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent
} from '@/components/ui/card'
import { Forms } from './forms'
import { Dropown } from './dropown'

export default function Page() {
  return (
    <>
      <Card className='w-1/4'>
        <CardHeader className='text-center uppercase'>
          <CardTitle>formulário</CardTitle>
        </CardHeader>
        <CardContent>
          <Forms />
        </CardContent>
      </Card>
      <Dropown />
    </>
  )
}
