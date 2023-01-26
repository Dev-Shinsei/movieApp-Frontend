import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setAppState } from "../../redux/features/appStateSlice"

interface PageWrapperProps {
  state: any,
  children: JSX.Element
}

const PageWrapper = ({ state, children }: PageWrapperProps) => {
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo(0, 0)
    dispatch(setAppState(state))
  }, [state, dispatch])
  return (
    children
  )
}

export default PageWrapper