import ArticalCard from "/app/artical-card";
import Divider from "/app/divider";
import ImageSwitch from "/app/image-switch";
import NewArticalCard from "/app/new-artical-card";

import imgGamingGrowth from "/public/image-gaming-growth.jpg";
import imgRetroPcs from "/public/image-retro-pcs.jpg";
import imgTopLaptops from "/public/image-top-laptops.jpg";
import imgWeb3Desktop from "/public/image-web-3-desktop.jpg";
import imgWeb3Mobile from "/public/image-web-3-mobile.jpg";

export default function Page() {
  return (
    <>
      <div className="grid-cols-3 gap-8 xl:grid">
        <div className="col-span-2 space-y-6">
          <ImageSwitch mobileSrc={imgWeb3Mobile} desktopSrc={imgWeb3Desktop} />
          <div className="grid-cols-2 space-y-6 xl:grid xl:space-y-0">
            <h1 className="text-5xl font-bold xl:text-7xl">
              The bright future of web 3.0?
            </h1>
            <div className="flex-col space-y-6 xl:flex">
              <p className="flex-1 text-gray-500 xl:text-lg">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="w-max bg-rose-400 py-4 px-8 font-medium uppercase tracking-widest text-white">
                Read more
              </button>
            </div>
          </div>
        </div>

        <section className="mt-16 flex-col justify-center space-y-8 bg-slate-900 p-6 text-slate-50 xl:mt-0 xl:flex xl:space-y-6">
          <h2 className="text-4xl font-bold">New</h2>

          <div className="space-y-8">
            <NewArticalCard
              title="Hydrogen VS Electric Cars"
              subtitle="Will hydrogen-fueled cars ever catch up to EVs"
            />
            <Divider />
            <NewArticalCard
              title="The Downsides of AI Artistry"
              subtitle="What are the possible adverse effects of on-demand AI image generation?"
            />
            <Divider />
            <NewArticalCard
              title="Is VC Funding Drying Up?"
              subtitle="Private funding by VC firms is down 50% YOY. We take a look at what that means."
            />
          </div>
        </section>
      </div>

      <section className="mt-16 grid-cols-3 space-y-8 xl:grid xl:space-y-0">
        <ArticalCard
          imgSrc={imgRetroPcs}
          index="01"
          title="Reviving Retro PCs"
          subtitle="What happens when old PCs are given modern upgrades?"
        />
        <ArticalCard
          imgSrc={imgTopLaptops}
          index="02"
          title="Top 10 Laptops of 2022"
          subtitle="Our best picks for various needs and budgets."
        />
        <ArticalCard
          imgSrc={imgGamingGrowth}
          index="03"
          title="The Growth of Gaming"
          subtitle="How the pandemic has sparked fresh opportunities."
        />
      </section>
    </>
  );
}
