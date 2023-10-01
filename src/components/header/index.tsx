import Image from "next/image";

export default function header() {
  return (
    <>
      <header className="text-white pt-[180px] pb-[160px] px-[25px] md:px-[100px]  items-center relative rounded flex-none flex-col flex-nowrap h-auto  justify-start mx-0 my-0 w-full z-[1] max-w-full before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-2400x1600_v-frms_webp_1cba9348-5174-4c01-8302-b557d2f04227.webp)] before:brightness-[0.4] before:contrast-[1.3] before:bg-center before:bg-cover before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:z-[-2] before:absolute">
        <div className="items-start flex-none flex-col flex-nowrap justify-center max-w-full w-[920px] ">
          <p className="text-3xl leading-relaxed tracking-[.25em] flex-none font-semibold h-auto mb-[17px]  p-0 text-left w-full max-w-full justify-start">
            テクノロジーを通じて、
            <br />
            節度を持った革新を生み出す。
          </p>
          <p className="flex-none text-sm h-auto m-0 text-left w-full max-w-full justify-start sm:leading-6">
            私たちは、ただ目新しいものを生み出すテックカンパニーではありません。
            <br />
            節度を持ち、課題の本質を捉え、最適な形でのソリューションを生み出します。
          </p>
        </div>
        <div className="pt-[40px] pb-[25px] px-[25px] items-center flex-none flex-row h-auto justify-between left-0 m-0 absolute right-0 top-0 w-full   max-w-full z-5 flex-nowrap flex  bottom-auto md:py-[40px] md:px-[60px]">
          <a className="flex">
            <Image
              src="/static/logo.webp"
              alt=""
              width={100}
              height={100}
              className="w-[120px] max-w-full h-auto m-0 p-0 md:flex-none md:w-[160px]"
            />
          </a>
          <button className="flex items-end flex-col flex-nowrap h-[32px] justify-center m-0 p-0 w-[40px] max-w-full lg:hidden">
            <div className="flex items-end flex-none flex-col flex-nowrap h-[18px] justify-between p-0 w-[28px] max-w-full">
              <div className="border rounded-sm flex-none h-[2px] w-7/12 max-w-[60%]"></div>
              <div className="border rounded-sm flex-none h-[2px] w-full max-w-full"></div>
              <div className="border rounded-sm flex-none h-[2px] w-5/6 max-w-[80%]"></div>
            </div>
          </button>
          <div className="space-x-12 font-bold invisible lg:visible">
            <a href="">トップ</a>
            <a href="">私たちについて</a>
            <a href="">事業内容</a>
            <a href="">お問い合わせ</a>
          </div>
        </div>
      </header>
    </>
  );
}
