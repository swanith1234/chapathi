import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App userData={{"name":"chapathi","emailId":"pidugubunny534@gmail.com","phoneNo":"23783478345","projects":[{"title":"chapathi","description":"chapathi","technologies":["Angular"],"repoLink":"chapathi","_id":"674b17321e008ae54dd95416"}],"resume":"","experiences":[{"companyName":"chapathi","role":"chapathi","description":"chapathi","technologiesUsed":[],"duration":"chapathi","_id":"674b17321e008ae54dd95417"}],"techStacks":[],"contactDetails":[],"codingProfilesU":[],"certifications":[],"achievements":[{"title":"chapathi","description":"chapathi","_id":"674b17321e008ae54dd95418"}],"about":"chapathi","profilePhoto":"","_id":"674b17321e008ae54dd95415","createdAt":"2024-11-30T13:46:26.375Z","updatedAt":"2024-11-30T13:46:26.375Z","__v":0}} />
  </StrictMode>,
)
