import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata={title:'CodeMentor — Learn. Code. Compile. Master.',description:'Interactive C, C++ and Java learning platform.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
