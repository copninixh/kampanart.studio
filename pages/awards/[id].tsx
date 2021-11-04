import { useRouter } from 'next/router'

import { useAwarding } from '@/lib/swr-hooks'


export default function EditEntryPage() {
  const router = useRouter()
  const id = router.query.id?.toString()
  const { data } = useAwarding(id)

  if (data) {
    return (
      <>
          <h1 className="font-bold text-3xl my-2">{data.a_name}</h1>
          <p>{data.a_awards}</p>
 
      </>
    )
  } else {
    return (
      <>
    
          <h1 className="font-bold text-3xl my-2">...</h1>
          <p>...</p>

      </>
    )
  }
}