import React from "react";

const Home = () => {
  return (
    <section className="bg-fixed bg-no-repeat bg-cover bg-bgHomeMobile tb:bg-bgHomeTablet dt:bg-bgHomeDesktop text-white w-full h-screen pt-8">
      <div className="flex flex-col dt:pb-[131px] dt:flex-row justify-start dt:justify-between items-center dt:items-end w-full h-full gap-[64px] tb:gap-[120px] dt:gap-0">
        {/* Text Container */}
        <div className="mt-[112px] tb:mt-[202px] px-[24px] tb:px-[159px] w-full dt:w-auto flex dt:inline-flex flex-col items-center dt:items-start justify-center gap-[16px] dt:gap-[24px]">
          <h2 className="text-primary2 uppercase text-center dt:text-left text-[16px] tb:text-[20px] dt:text-[28px] font-barlowcondensed tracking-[2.7px] tb:tracking-[3.375px] dt:tracking-[4.725px]">
            So, you want to travel to
          </h2>
          <h1 className="text-primary3 uppercase text-center dt:text-left text-[80px] tb:text-[150px] font-bellefair leading-[100px] tb:leading-[150px] dt:leading-normal">
            Space
          </h1>
          <p className="text-primary2 text-center dt:w-[444px] dt:text-left text-[15px] tb:text-[16px] dt:text-[18px] font-barlow leading-[25px] tb:leading-[28px] dt:leading-[32px]">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </div>
        {/* Button Container */}
        <button className="flex items-center justify-center w-[150px] tb:w-[242px] dt:w-[274px] h-[150px] tb:h-[242px] dt:h-[274px] dt:mr-[165px] bg-primary3 rounded-full relative dt:pulse">
          <h1 className="uppercase text-primary1 text-center text-[20px] tb:text-[32px] font-bellefair leading-[1.25px] tb:leading-[2px]">
            Explore
          </h1>
        </button>
      </div>
    </section>
  );
};

export default Home;
