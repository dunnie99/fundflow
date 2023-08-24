"use client"
import { AppHeadNav } from "./AppHeadNav";


export default function Layout({children}) {

    const gradientStyle = {
        background: 'linear-gradient(112.87deg, #80F2BC 12.24%, #1E30D1 89.76%), linear-gradient(0deg, rgba(130, 135, 174, 0.6), rgba(130, 135, 174, 0.6)',
      };
  return (
    <main>
        <section className="w-[100%] h-screen" style={gradientStyle}>
          {/* <AppHeadNav/> */}
{children}
        </section>
    </main>
  )
}
