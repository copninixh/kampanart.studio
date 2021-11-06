import { useState } from 'react'
import Link from 'next/link'
import { mutate } from 'swr'


function Volun({ v_id, v_name, v_org }) {


  return (
    <div>
      <div className="flex items-center">
        <Link href={`/volunteer/${v_id}`}>
          <a className="font-bold py-2">{v_name}</a>
        </Link>
        <div className="flex ml-4">

        </div>
      </div>
      <p>{v_org}</p>
    </div>
  )
}

export default Volun
