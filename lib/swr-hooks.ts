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

//load data index
export function useActivty() {
  const { data, error } = useSWR(`/api/get-activity`, fetcher)

  return {
    activity: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useActivities(id: string) {
  return useSWR(`/api/get-activites?id=${id}`, fetcher)
}

//load data index
export function useVolunteer() {
  const { data, error } = useSWR(`/api/get-volunteer`, fetcher)

  return {
    volunt: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useVolunteering(id: string) {
  return useSWR(`/api/get-volunteering?id=${id}`, fetcher)
}


//load data index
export function useCertificate() {
  const { data, error } = useSWR(`/api/get-certificate`, fetcher)

  return {
    cer: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useCerti(id: string) {
  return useSWR(`/api/get-certi?id=${id}`, fetcher)
}

