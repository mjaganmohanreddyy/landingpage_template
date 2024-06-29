import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-y-5  py-10items-center justify-center text-center">
       <div className=" text-5xl text-center mx-auto">📣</div>
        <h1 className="text-center tracking-tighter font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-zinc-700 to-zinc-600 drop-shadow text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight md:leading-tight max-w-lg mx-auto lg:max-w-3xl lg:leading-tight xl:leading-tight font-family">
        Boost your productivity with our cutting-edge software.
        </h1>
        <p className="text-lg opacity-80 leading-relaxed font-fam">
        Try it now and take your productivity to the next level { ' '}
        </p>
        <p className="font-fam"><Link href='/' className=" underline text-green-400 font-fam">Download now</Link> 
         {' '}and start achieving your goals👇</p>
   
    
      </div>
    </section>
  );
};

export default Hero;