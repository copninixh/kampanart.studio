import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'


function Awarding({ a_id, a_name, a_awards }) {


  return (
    <div>
      <div className="flex items-center">
        <Link href={`/awards/${a_id}`}>
          <a className="font-bold py-2">{a_name}</a>
        </Link>
        <div className="flex ml-4">

        </div>
      </div>
      <p>{a_awards}</p>
    </div>
  )
}

export default Awarding
