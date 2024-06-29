import Image from "next/image"
import Icon from '../../icons/check-icon.svg'


export default function Pricing(){
    return(
    <section id="pricing" className=" max-w-5xl mx-auto py-10">
    <div className=" flex flex-col gap-y-5">
    <h3 className="text-2xl md:text-3xl lg:text-4xl max-w-xs mx-auto md:max-w-lg text-center font-bold leading-[1.15] text-primarydark">
    Don't wait, sign up now and get 50% off your first month!
    </h3>
    </div>

    <div className=" grid md:grid-cols-2 items-start justify-center w-full max-w-5xl md:max-w-4xl mx-auto px-5 md:px-10 lg:px-5 xl:px-2 gap-y-10 gap-x-5 md:gap-x-7 lg:gap-x-14 py-8 lg:py-12 flex-wrap ">
    <div className=" bg-[#f4f4f440] border-zinc-400/30 border  hover:shadow hover:ring-offset-4 hover:ring-2 hover:ring-transparent drop-shadow transition duration-200 active:scale-95 md:flex-1 h-full rounded-xl flex flex-col">
    <div className="p-10 flex flex-col h-full gap-y-5 justify-between items-start cursor-pointer">
     <div className="flex flex-col gap-y-2 items-start">

    <div className="flex items-center gap-x-5">
    <p className="rounded-full text-center py-[1px] w-fit text-lg font-bold text-zinc-500">
    STARTER
    </p>
    <p className="font-medium bg-lime-400 text-sm px-2 py-0.5 rounded-full"> Best Deal</p>
    </div>

    <p className="text-sm text-center  font-medium">
    For Individuals and Small Teams
    </p>

    <div className="flex items-end justify-start gap-x-2">
        <h3 className="mt-5 text-sm font-medium "> 
            <span className="text-2xl lg:text-4xl font-bold text-primarydark"> $299</span>
        </h3>
        <p className="text-sm font-medium">/ per month</p>
    </div>
     </div>

     <div className="flex flex-col gap-y-2.5">
    <div className="flex flex-col gap-y-1">
        <p className="font-bold">
        Include
        </p>
        <p className="font-semibold text-slate-500 text-sm">Everything you get in this plan</p>
    </div>
    <div className="flex gap-x-3">
      <Image src={Icon}alt="" width={20} height={20}/>
      <p className="  text-sm font-medium">Everything in Job Board</p>
    </div>
    <div className="flex gap-x-3">
      <Image src={Icon}alt="" width={20} height={20}/>
      <p className="  text-sm font-medium">Everything in Designer Search</p>
    </div>
    <button className="my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold border border-white hover:shadow hover:ring-offset-4 hover:ring-offset-secondarydark/20 hover:ring-2 hover:ring-transparent drop-shadow transition duration-200 active:scale-95 bg-[#000000] text-white">
    <span className="tracking-tight">Choose Plan</span>
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ml-2" 
    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
    </path></svg>
    </button>
     </div>
    </div>
    </div>

    <div className=" bg-[#f4f4f440] border-zinc-400/30 border hover:shadow transition-all duration-75  md:flex-1 h-full rounded-xl flex flex-col">
    <div className="p-10 flex flex-col h-full gap-y-5 justify-between items-start cursor-pointer">
        <div className="flex flex-col gap-y-2 items-start">
        <div className="flex items-center gap-x-5">
            <p className="rounded-full text-center py-[1px] w-fit text-lg font-bold text-zinc-500">BUSINESS</p>
            </div>
            <p className="text-sm text-center  font-medium">For Individuals and Small Teams</p>
            <div className="flex items-end justify-start gap-x-2">
            <h3 className="mt-5 text-sm font-medium ">
                <span className="text-2xl lg:text-4xl font-bold text-primarydark">$499</span>
                </h3><p className=" text-sm font-medium">/per month</p>
                </div></div><div className=" flex flex-col gap-y-2.5">
                <div className="flex flex-col gap-y-1">
                <p className="font-bold">Include</p>
                <p className="font-semibolf text-slate-500 text-sm">Everything you get in this plan</p>
                </div>
                <div class="flex gap-x-3">
                <Image src={Icon}alt="" width={20} height={20}/>
                <p class="  text-sm font-medium">Swap out listings as needed</p>
                </div>
                <div class="flex gap-x-3"><Image src={Icon}alt="" width={20} height={20}/>
                <p class="  text-sm font-medium">Average of 1.1K targeted clicks/month</p>
                </div><div class="flex gap-x-3">
                    <Image src={Icon}alt="" width={20} height={20}/><p>Full-Time or Freelance Hiring</p>
                </div>
                <button class="my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold border border-white hover:shadow hover:ring-offset-4 hover:ring-2 hover:ring-transparent drop-shadow transition duration-200 active:scale-95 bg-[#000000] text-white">

                <span class="tracking-tight">Choose Plan</span>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                </path></svg>
                </button>
                </div>
                
  </div>
  </div> 
    </div>

    <div className="max-w-4xl mx-auto w-full">
                    <div className=" p-10 flex items-center justify-evenly rounded-xl
         border">
            <div className="flex flex-col gap-y-2"><div>
                <p className="font-bold text-xl">Professional</p>
                <p>For Individuals and Small Teams</p>
                </div><p className="text-3xl font-semibold">Custom pricing</p>
                </div><div><div className=" flex flex-col gap-y-2.5">
                    <div className="flex flex-col gap-y-1">
                    <p className="font-bold">Include</p>
                    <p className="font-semibold text-slate-500 text-sm">Everything you get in this plan</p>
                    </div>
                    <div className="flex gap-x-3">
                <Image src={Icon}alt="" width={20} height={20}/>
                <p className="  text-sm font-medium">Everything in Job Board</p>
                    </div>
                    <div className="flex gap-x-3">
                    <Image src={Icon}alt="" width={20} height={20}/>
                    <p className="  text-sm font-medium">Everything in Designer Search</p>
                    </div>
                    <button className="my-2 flex text-base lg:text-lg items-center justify-center rounded-full h-12 w-full font-bold border border-white hover:shadow hover:ring-offset-4  hover:ring-2 hover:ring-transparent drop-shadow transition duration-200 active:scale-95 bg-[#000000] text-white">
                    <span className="tracking-tight">Choose Plan</span>
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="ml-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
                    </button></div></div></div></div>

    </section>
    )

}


