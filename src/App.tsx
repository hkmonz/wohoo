import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import ScrollToTop from './Components/Commons/ScrollTop'
import Base from './Components/Layout/Base'
import Home from './Pages/Home/Home'
import Careers from './Pages/Careers/Careers'
import XSeries from './Pages/XSeries/XSeries'
import Tablet from './Pages/Tablet/Tablet'
import QrCode from './Pages/QrCode/QrCode'
import YSeries from './Pages/YSeries/YSeries'
import ZSeries from './Pages/ZSeries/ZSeries'
import MeetingRoom from './Pages/MeetingRoom/MeetingRoom'
import WellnessDashboard from './Pages/WellnessDashboard/WellnessDashboard'
import Soundboard from './Pages/Soundboard/Soundboard'
import Avatar from './Pages/Avatar/Avatar'

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Base />}>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/x-series" element={<XSeries />} />
          <Route path="/y-series" element={<YSeries />} />
          <Route path="/z-series" element={<ZSeries />} />
          <Route path="/tablet" element={<Tablet />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/wellness-dashboard" element={<WellnessDashboard />} />
          <Route path="/meeting-room-tablet" element={<MeetingRoom />} />
          <Route path="/soundboard" element={<Soundboard />} />
          <Route path="/avatar" element={<Avatar />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </>

  )
}

export default App
