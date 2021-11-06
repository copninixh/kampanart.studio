import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'


function Certified({ c_id, c_name, c_org }) {


  return (
    <div>
      <div className="flex items-center">
        <Link href={`/awards/${c_id}`}>
          <a className="font-bold py-2">{c_name}</a>
        </Link>
        <div className="flex ml-4">

        </div>
      </div>
      <p>{c_org}</p>
    </div>
  )
}

export default Certified
