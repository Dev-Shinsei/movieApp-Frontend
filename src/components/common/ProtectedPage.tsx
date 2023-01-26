import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthModalOpen } from '../../redux/features/authModalSlice'

interface ProtectedPageProps {
  children: JSX.Element
}

const ProtectedPage = ({ children }: ProtectedPageProps) => {
  const dispatch = useDispatch()
  const { user } = useSelector((state: any) => state.user)

  useEffect(() => {
    dispatch(setAuthModalOpen(!user))
  }, [user, dispatch])
  return (
    user ? children : null
  )
}

export default ProtectedPage