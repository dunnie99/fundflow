"use client"
import Supply from "./components/Supply"
import Layout from "../../components/Layout"
import { useState, useContext } from "react"
import Borrow from "./components/Borrow"
import { AppHeadNav } from "../../components/AppHeadNav"



const Compound = () => {
  const [open, setOpen] = useState(false)

  return (
    <Layout>
        <AppHeadNav/>
    <div>
    <div className="flex gap-8 mono_font justify-center mx-auto pt-[30px] text-[#2F3677] relative">
            <h1 onClick={()=>setOpen(true)} className={`cursor-pointer py-[12px] font-[400] text-center text-[32px] text-[#2F3677] ${open && "border-b-[2px]"} border-b-[#2F3677]`}>Supply</h1>
            <h2 onClick={()=>setOpen(false)} className={`cursor-pointer py-[12px] font-[400] text-center text-[32px] text-[#2F3677] ${!open && "border-b-[2px]"} border-b-[#2F3677]`}>Borrow</h2>
        </div>
    {
      open ?
      <Supply />
      :
        <Borrow/>
    }
    </div>
    </Layout>
  )
}

export default Compound