import React from 'react'

const EnvTest = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY
  
  console.log('Environment test:')
  console.log('API Key:', apiKey)
  console.log('All env vars:', import.meta.env)
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'white', 
      padding: '10px', 
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 9999
    }}>
      <h4>Environment Test</h4>
      <p>API Key: {apiKey ? `${apiKey.substring(0, 10)}...` : 'NOT FOUND'}</p>
      <p>Mode: {import.meta.env.MODE}</p>
      <p>Dev: {import.meta.env.DEV ? 'true' : 'false'}</p>
    </div>
  )
}

export default EnvTest
