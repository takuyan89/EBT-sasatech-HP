import Image from "next/image";

export default function header() {
  return (
    <>
      <header className="text-white pt-60 pr-44 pb-44 pl-60 ">
        <nav className="max-w-full z-5 w-full absolute mx-0 my-0 left-0 right-0 top-0 h-auto flex-nowrap flex justify-between container py-10 px-14 items-center bottom-auto">
          <div className="flex">
            <Image src="/static/logo.png" alt="" width={50} height={50} />
            <div className="text-4xl">SasaTech</div>
          </div>
          <div className="space-x-12 font-bold">
            <a href="">トップ</a>
            <a href="">私たちについて</a>
            <a href="">事業内容</a>
            <a href="">お問い合わせ</a>
          </div>
        </nav>
        <div className=" m-0 p-0 pl-64 max-w-full items-start flex-none w-[920px] justify-center">
          <div className="text-[28px]  font-normal tracking-[.25em] mb-4">
            <div>
              テクノロジーを通じて、
              <br />
              節度を持った革新を生み出す。
            </div>
          </div>
          <div className="text-[14px]">
            <div>
              私たちは、ただ目新しいものを生み出すテックカンパニーではありません。
              <br />
              節度を持ち、課題の本質を捉え、最適な形でのソリューションを生み出します。
            </div>
          </div>
        </div>

        <Image
          className={
            "h-full bg-top z-[-2] absolute bg-cover brightness-[0.4] contrast-[1.3] grayscale-[0.2]"
          }
          src="/static/bg.png"
          layout={`fill`}
          objectFit={`cover`}
          alt=""
        />
      </header>
    </>
  );
}
