import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'


function Appreciation ({ a_id, a_name, a_org }) {


  return (
    <div>
      <div className="flex items-center">
        <Link href={`/activities/${a_id}`}>
          <a className="font-bold py-2">{a_name}</a>
        </Link>
        <div className="flex ml-4">

        </div>
      </div>
      <p>{a_org}</p>
    </div>
  )
}

export default Appreciation 
