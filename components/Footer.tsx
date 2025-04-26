import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
      <div className='flex items-center justify-center gap-20'>
          <div>
              <Link href="/terms">
                  <h1 className='text-sm text-[#3c3c3c]'>Privacy Policy</h1>
              </Link>
          </div>
          <h1 className='text-sm text-[#3c3c3c]'>Made with ❤️ by <Link href="https://github.com/alimomtaznoor">@alimomtaznoor</Link></h1>
    </div>
  )
}

export default Footer