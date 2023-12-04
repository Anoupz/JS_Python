import { useEffect, useState } from 'react'
import TableLayout from './DataGrid/Table.tsx'
import PaginationLayout from './DataGrid/Pagination.tsx'

const columns = ['name', 'population', 'climate', 'terrain']

export const DataGrid = () => {
  const [pageInfo, setPageInfo] = useState({
    loading: false,
    count: 0,
    results: null,
    next: null,
    previous: null,
  })

  const fetchData = (url: string) => {
    setPageInfo({ ...pageInfo, loading: true, results: null })
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setPageInfo({
          loading: false,
          results: data.results,
          count: data.count,
          next: data.next,
          previous: data.previous,
        })
      })
  }

  useEffect(() => {
    fetchData('https://swapi.dev/api/planets/')
  }, [])

  const onHandleNext = () => {
    if (pageInfo.next === null) {
      return
    }
    fetchData(pageInfo.next)
  }

  const onHandleBack = () => {
    if (pageInfo.previous === null) {
      return
    }
    fetchData(pageInfo.previous)
  }

  if (pageInfo.loading || !pageInfo.results) {
    return <div>Loading...</div>
  }

  return (
    <>
      <TableLayout data={pageInfo.results} columns={columns} />
      <PaginationLayout
        onBackClick={onHandleBack}
        onNextClick={onHandleNext}
        isBackDisabled={!pageInfo.previous}
        isNextDisabled={!pageInfo.next}
      />
    </>
  )
}
