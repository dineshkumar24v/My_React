import React from 'react'

const Dashboard = () => {

  let rolePrompt = prompt('enter role').toLowerCase()

  return (
    <div>
      {rolePrompt === 'admin' ? <AdminDashboard/> : <UserDashboard/>}    
    </div>
  )
}

export default Dashboard
