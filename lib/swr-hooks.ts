import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

//load data index
export function useAwards() {
  const { data, error } = useSWR(`/api/get-awards`, fetcher)

  return {
    awards: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useAwarding(id: string) {
  return useSWR(`/api/get-awarding?id=${id}`, fetcher)
}

