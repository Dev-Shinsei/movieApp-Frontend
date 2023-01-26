import { ThemeProvider } from '@mui/material'
import { useSelector } from 'react-redux'
import themeConfigs from './configs/theme.configs'
import { ToastContainer } from 'react-toastify'
import { CssBaseline } from '@mui/material'

const App = () => {
  const { themeMode } = useSelector((state: any) => state.themeMode)
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      {/* config Toastify*/}
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        theme={themeMode}
      />
      {/* MUI reset css */}
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
