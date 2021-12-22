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
export function useAwardsAll() {
  const { data, error } = useSWR(`/api/get-awards-all`, fetcher)

  return {
    awardsall: data,
    isLoading: !error && !data,
    isError: error,
  }
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

//load data index
export function useActivtyAll() {
  const { data, error } = useSWR(`/api/get-activity-all`, fetcher)

  return {
    activityall: data,
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

//load data index
export function useCertificateAll() {
  const { data, error } = useSWR(`/api/get-certificate-all`, fetcher)

  return {
    cerall: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useCerti(id: string) {
  return useSWR(`/api/get-certi?id=${id}`, fetcher)
}

//load data index
export function useAppreciation () {
  const { data, error } = useSWR(`/api/get-appreciation `, fetcher)

  return {
    appre: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useAppre(id: string) {
  return useSWR(`/api/get-appre?id=${id}`, fetcher)
}


//load data index
export function useUsedProject () {
  const { data, error } = useSWR(`/api/get-project`, fetcher)

  return {
    usedproject: data,
    isLoading: !error && !data,
    isError: error,
  }
}

// load data get id page
export function useUsedPro(id: string) {
  return useSWR(`/api/get-project-detail?id=${id}`, fetcher)
}


