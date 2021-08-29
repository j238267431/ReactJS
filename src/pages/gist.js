import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGists } from '../store/gists'

const API_URL_PUBLIC = (page) =>
  `https://api.github.com/gists/public?page=${page}`

const useGists = () => {
  const [gists, setGists] = useState([])
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(null)

  // способ 1

  // const getGists = () => {
  //   setPending(true)
  //   fetch(API_URL_PUBLIC)
  //     .then((response) => response.json())
  //     .then((data) => setGists(data))
  //     .catch((e) => setError(e))
  //     .finally(() => setPending(false))
  // }

  // способ 2

  const getGists = async (page = 1) => {
    try {
      setPending(true)
      const response = await fetch(API_URL_PUBLIC(page))
      const result = await response.json()
      setGists(result)
    } catch (e) {
      setError(e)
    } finally {
      setPending(false)
    }
  }

  useEffect(() => {
    getGists()
  }, [])

  return { gists, pending, error, getGists }
}

export const Gists = () => {
  // const { gists, pending, error, getGists } = useGists()
  const { gistsPending, gists, gistsError } = useSelector(
    (state) => state.gists,
  )

  const dispatch = useDispatch()

  useEffect(() => {
    if (!gists.length) {
      dispatch(getGists())
    }
  }, [dispatch, gists])

  if (gistsPending) {
    return <h1>pending...</h1>
  }
  if (gistsError) {
    return <h1>error</h1>
  }

  return (
    <div>
      {/* <button onClick={getGists}>get gists</button> */}
      {Array.from({ length: 10 }).map((_, index) => (
        <button key={index} onClick={() => dispatch(getGists(index + 1))}>
          button {index}
        </button>
      ))}

      <ul>
        {gists.map((gist, index) => (
          <li key={index}>{gist.description}</li>
        ))}
      </ul>
    </div>
  )
}
