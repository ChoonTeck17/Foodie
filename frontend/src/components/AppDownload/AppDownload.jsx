import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div class="app-download" id="App-Download">AppDownload
        <p>
            For better experience, please download this
        </p>
            <div className="app-download-platform">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
    </div>
  )
}

export default AppDownload