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
          <div className="gap-16 space-y-6 xl:grid xl:grid-cols-2 xl:space-y-0">
            <h1 className="text-5xl font-bold text-very-dark-blue xl:text-6xl">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flex-col space-y-6 xl:flex">
              <p className="flex-1 text-dark-grayish-blue">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="w-max bg-soft-red py-4 px-8 font-bold uppercase tracking-widest text-off-white transition-colors hover:bg-very-dark-blue xl:px-12">
                Read more
              </button>
            </div>
          </div>
        </div>

        <section className="mt-16 flex-col justify-center bg-very-dark-blue p-6 text-off-white xl:mt-0 xl:flex">
          <h2 className="mb-8 text-4xl font-bold text-soft-orange xl:mb-10 xl:text-5xl">
            New
          </h2>

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

      <section className="mt-16 grid-cols-3 gap-8 space-y-8 xl:grid xl:space-y-0">
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
