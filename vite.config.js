import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import os from 'os'


function getIPAddress() {
  const networkInterfaces = os.networkInterfaces()
  const interfaces = Object.values(networkInterfaces)
    .flat()
    .filter((iface) => iface.family === 'IPv4' && !iface.internal)

  if (interfaces.length > 0) {
    return interfaces[0].address
  }

  throw new Error('Failed to retrieve IP address from network interfaces.')
}

const ip = getIPAddress()

export default defineConfig({
  plugins: [react()],
  server: {
    host: ip
  }
})

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: '192.168.1.43'
//   }
// })
