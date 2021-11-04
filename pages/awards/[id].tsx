import { useRouter } from 'next/router'

import { useAwarding } from '@/lib/swr-hooks'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useAwarding(id)

  if (data) {
    return (
      <div>
          <h1 className="">{data.a_name}</h1>
          <p>{data.a_awards}</p>
 
      </div>
    )
  } else {
    return (
      <div>
    
          <h1 className="">Loading Data</h1>
          <p>...</p>

      </div>
    )
  }
}