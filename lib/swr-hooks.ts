import useSWR from 'swr'

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json())
}

export function useEntries() {
  const { data, error } = useSWR(`/api/get-awards`, fetcher)

  return {
    entries: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useEntry(id: string) {
  return useSWR(`/api/get-awarding?id=${id}`, fetcher)
}

export function useAwards() {
  const { data, error } = useSWR(`/api/get-awards`, fetcher)

  return {
    awards: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export function useAwarding(id: string) {
  return useSWR(`/api/get-awarding?id=${id}`, fetcher)
}

