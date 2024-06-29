import Image from "next/image";
import Productivity from "../../icons/productivity.svg"
import Effeciency from '../../icons/money.svg'
import reward from '../../icons/reward.svg'
import rewards from '../../icons/reward-2.svg'
import together from '../../icons/togethersvg.svg'
import mic from '../../icons/mic.svg'



export default function Features(){
    return(
        <section id="features" className="py-20 bg-no-repeat bg-gradient-to-r from-purple-500 to-pink-500  bg-cover bg-center bg-origin-padding">
          
         <div className=" flex flex-col items-center gap-y-5">
        <h2 className="text-center text-white text-3xl lg:text-5xl max-w-2xl lg:leading-tight tracking-tight font-extrabold mx-auto font">
        With intuitive features and user-friendly interface
        </h2>
        <p className="font-medium lg:text-lg max-w-[18rem] md:max-w-md mx-auto md:mx-auto text-white text-center">Exist a lot of ways to cooperate with advertiser, as well as advertisers working together</p>

        <button className="w-fit px-3 lg:px-10 py-2 bg-white rounded-full active:scale-95 transition-all duration-150 ease-linear flex items-center justify-center">
            <span className="text-center text-black text-sm lg:text-base font-semibold leading-normal">Find our Advitisers</span>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="text-black text-xl ml-2 items-center" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg>
            </button>
         </div>
         <div className=" max-w-5xl mx-auto grid md:grid-cols-3 py-10 px-5">
         <div className="flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">
          <div>
          <Image
              src={Productivity}
              alt="celebration symbol"
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
          </div>

          <div className="flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
            <h2 className=" font-bold text-xl text-white">
                productivity
            </h2>

            <p className="font-medium text-base text-slate-200 font" > 
                <span data-br=":r0:" data-brr="1" style={{ display:'inline-block', verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'177px'}}> Reach a wider audience by collaborating with other advertisers in your niche!</span>
                </p>
          </div>
          </div>

          <div className=" flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">

          <div>
          <Image
              src={Effeciency}
              alt="celebration symbol"
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
          </div>
          <div className=" flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
            <h2 className=" font-bold text-xl text-white"> Efficiency</h2>
            <p className=" font-medium text-sm text-slate-200">
            <span data-br=":r1:" data-brr="1" style={{ display:'inline-block', verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'217px'}} className=" font" > Earn commission by promoting products and services you love and believe in!</span>
            </p>
          </div>
          </div>
          <div className="flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">
          <div>
          <Image
              src={mic}
              alt="celebration symbol"
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
          </div>
          <div class="flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
            <h2 class="font-bold text-xl text-white">Simplification</h2>
            <p class="font-medium text-sm text-slate-200">
                 <span data-br=":r1:" data-brr="1" style={{ display:'inline-block', verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'217px'}} className=" font" >  Find an expert for your next podcast and invite them as your quests to provider value for your followers</span>
                 </p>
          </div>
         </div>
         <div className="flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">
         <div>
          <Image
              src={rewards}
              alt="celebration symbol"
              className="w-8"
              priority={true}
              width={32}
              height={32}
            />
          </div>
          <div class="flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
            <h2 class="font-bold text-xl text-white">App</h2>
           
            <p class="font-medium text-sm text-slate-200">
                 <span data-br=":r1:" data-brr="1" style={{ display:'inline-block', verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'187px'}} className=" font" >  
                 Get paid to promote brands and products you love, while also creating authentic content for your followers
                    </span>
                 </p>
         </div>
         </div>
         <div className="flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">
         <div>
          <Image 
          src={together} 
          alt="twins"
          width={32}
          height={32}/>
         </div>

         <div className="flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
          <h2 className="font-bold text-xl text-white">App</h2>
          <p class="font-medium text-sm text-slate-200">
                 <span data-br=":r1:" data-brr="1" style={{ display:'inline-block', verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'187px'}} className=" font" >  
                 Get paid to promote brands and products you love, while also creating authentic content for your followers
                    </span>
                 </p>
         </div>
         </div>
         <div className="flex flex-col lg:border-r lg:border-b [&:nth-child(3)]:border-r-0 last:border-r-0 border-white/20 [&:nth-child(4)]:border-b-0 [&:nth-child(5)]:border-b-0 [&:nth-child(6)]:border-b-0 border-dashed items-center justify-evenly p-3.5">
         <div>
          <Image src={reward} alt="twins" width={32}
              height={32}/>
         </div>

         <div className="flex max-w-sm mx-auto flex-col gap-y-2 items-center justify-center text-center">
          <h2 className="font-bold text-xl text-white">App</h2>
          <p class="font-medium text-sm text-slate-200">
                 <span data-br=":r1:" data-brr="1" 
                 style={{ display:'inline-block',
                 verticalAlign:'top', textDecoration:"inherit", textWrap:"balance",  maxWidth:'187px'}} 
                 className=" font" >  
                 Get paid to promote brands and products you love, while also creating authentic content for your followers
                    </span>
                 </p>
         </div>
         </div>
         </div>
        </section>
    )
}


