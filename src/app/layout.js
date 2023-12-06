'use client'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';





export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg- secondary">
        <Provider store={store}>
          {children}
        </Provider>
        
        </body>
    </html>
  )
}
