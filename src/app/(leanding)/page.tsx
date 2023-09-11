import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const LeandingPage = () => {
  return (
    <div>LeandingPage (unprotected)
      <div className='gap-2'>
        <Link href="/sign-in">
        <Button>
          login
        </Button>
        </Link>
        <Link href="/sign-up">
        <Button>
          register
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default LeandingPage;