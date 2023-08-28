import Image from "next/image";
import header from "../components/header";
import footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header />

      <div className="items-center flex-none flex-col flex-nowrap h-auto justify-center  mt-[-90px] mb-0 mx-0 overflow-x-hidden overflow-y-hidden py-10 px-[60px] w-full z-[2] max-w-full">
        <div className="items-start bg-white mx-auto border-y-0 rounded border-solid border-[#ddddd] shadow-[0_2px_40px_0_rgba(0,0,0,0.2)] flex-none flex-col flex-nowrap h-auto justify-start py-10 px-[60px] w-[64rem] max-w-full ">
          <div>
            <span className="inline font-semibold text-[14px] h-auto tracking-widest leading-normal mr-9">
              お知らせ　
            </span>
            <span className="text-[#a7a7a7] text-[14px] leading-normal tracking-normal mr-6">
              2022/02/01　
            </span>
            <a className="text-[14px] leading-normal tracking-normal mr-10">
              月額7,700円から、高品質のホームページ制作 -
              kumitoruをローンチしました。
            </a>
            <a className="text-[#017d61] h-px">
              <span className="mr-2.5 w-3">--</span>
              <span className="text-[12px]">もっと見る</span>
            </a>
          </div>
        </div>
      </div>

      <div className="items-start	bg-white flex-none flex-row	flex-nowrap	h-auto justify-start overflow-y-visible overflow-x-visible w-full z-[1]">
        <div className="items-center flex-none flex-row flex-nowrap	justify-start w-full h-[22.5em]">
          <div className="items-center absolute flex-none flex-row flex-nowrap justify-end h-[22.5em] w-5/12">
            <Image
              src="/static/hello.jpeg"
              alt=""
              fill={true}
              className=" rounded h-full"
            />
          </div>
          <div className="py-[40px] px-[60px] items-start flex-1 flex-col flex-nowrap	justify-center opacity-100 w-auto ml-[600px] h-[22.5em] ">
            <div className="items-start flex-col flex-nowrap justify-start ">
              <p className="text-[#017d61] flex-none text-[12px] font-normal  tracking-normal leading-normal mb-[12px] text-left h-auto w-auto justify-start">
                philosophy
              </p>
              <p className="text-[18px]  h-auto tracking-[.25em] leading-relaxed mb-[16px] text-left w-auto font-medium">
                私たちは、テクノロジーを駆使して
                <br />
                課題解決に取り組む企業です。
              </p>
              <p className="flex-none text-[14px] font-normal h-auto tracking-normal leading-normal mb-[16px] text-left w-auto justify-start">
                インターネットが普及しスマートフォンを多くの人が持つようになった現代において、課題解決とテクノ
                <br />
                ロジーは密接な関係にあります。
                Sasatechでは、プログラミングやデザイン、マーケティングなど、あらゆる側面で課題解決の道を模索し
                <br />
                ます。
              </p>
              <p className="items-center flex-none flex-row flex-nowrap h-[24px] w-auto text-[#017d61]">
                <span className="flex-none h-[1px] mr-[12px] w-[12px] ">
                  --
                </span>{" "}
                <span className="text-[12px] h-auto tracking-widest leading-none text-left w-auto justify-start">
                  もっと見る
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="items-center bg-white flex-none flex-col flex-nowrap h-auto justify-center mt-[40px] px-[120px] pt-[60px] pb-[100px]">
        <div className="items-start flex-none flex-col flex-nowrap mb-[48px] justify-center w-[1280px]">
          <p className="text-[#017d61] text-[12px] font-normal h-auto leading-normal mb-[8px] text-left w-auto justify-start">
            business
          </p>
          <div className="items-center flex-row flex-nowrap justify-center">
            <p className="flex-none font-semibold text-[24px] h-auto tracking-widest leading-normal mr-[24px] text-left w-auto justify-start">
              事業内容{" "}
              <span className=" text-[12px]flex-none h-[1px] mr-[10px] w-[12px] text-[#017d61] items-center justify-center">
                --
              </span>{" "}
              <span className="text-[12px] h-auto tracking-widest leading-none text-left w-auto  text-[#017d61] items-center  flex-none justify-center">
                もっと見る
              </span>
            </p>
          </div>
        </div>

        <div className="items-start flex flex-none flex-row flex-nowrap justify-center mt-[0px] mr-[40px] mb-[20px] ml-[0px] px-0 py-0 w-[1280px] ">
          <div className="items-start  flex-none flex-col flex-nowrap justify-center my-[0px] mr-[60px] ml-[0px] px-0 py-0 w-[calc(50%_-_60px)]">
            <div className="items-center relative rounded flex-none flex-col flex-nowrap h-[320px] justify-center mx-[0px] mt-[0px] mb-[28px] w-full before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1020x489_v-fs_webp_e4bf960a-4fc5-4017-aa52-dc613930a036.webp)] before:bg-top before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:absolute"></div>
            <div className="items-center flex-none flex-col flex-nowrap h-full justify-center px-[0px] py-[0px] w-full">
              <p className="flex-none text-[14px] h-auto tracking-normal leading-normal mt-[0px] mx-0 mb-[4px] px-0 py-0 text-left w-full justify-start font-semibold">
                エンターテイメント事業
              </p>
              <p className="flex-none text-[12px] font-normal h-auto tracking-normal leading-relaxed mx-0 my-0 px-0 py-0 text-left w-full justify-start">
                メイドカフェ事業やアイドル事業などを始めとした、エンターテイメント領域のマーケティング支援やシステム開発を行っています
              </p>
            </div>
          </div>

          <div className="items-center flex-none flex-col flex-nowrap justify-center mt-[100px] mx-[0px] mb-[60px] px-0 py-0 w-[calc(50%_-_60px)]">
            <div className="items-center relative rounded flex-none flex-col flex-nowrap h-[320px] justify-center mx-[0px] mt-[0px] mb-[28px] w-full before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1200x630_v-fms_webp_9235feb3-fff4-4a0c-be81-80803b332ad7_middle.webp)] before:bg-top before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:absolute"></div>
            <div className="items-center flex-none flex-col flex-nowrap h-full justify-center px-0 py-0 w-full">
              <p className="flex-none text-[14px] font-semibold h-full tracking-normal leading-normal mt-0 mx-0 mb-[4px] px-0 py-0 text-left w-full justify-start">
                月額制Web制作サービス「kumitoru」の開発, 運営
              </p>
              <p className="text-[#017d61] text-[12px] font-normal h-full tracking-normal leading-normal mt-0 mx-0 mb-[8px] px-0 py-0 text-left w-full justify-start">
                https://kumitoru.com/
              </p>
              <p className="flex-none text-[12px] font-normal h-full tracking-normal leading-relaxed mx-0 my-0 px-0 py-0 text-left w-full justify-start">
                初期費用なしかつ格安の月額制で、お客様の意図を汲み取ったオリジナルのホームページを制作
                <br />
                します。
              </p>
            </div>
          </div>
        </div>

        <div className="items-start flex flex-none flex-row flex-nowrap justify-center my-0 mr-0 ml-[40px] px-0 py-0 w-[1280px]">
          <div className="items-center flex-none flex-col flex-nowrap justify-center my-0 mr-[60px] ml-0 w-[calc(50%_-_60px)]">
            <div className="items-center relative rounded flex-none flex-col flex-nowrap h-[320px] justify-center mx-[0px] mt-[0px] mb-[28px] w-full before:bg-[url(https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8OHx8cHJvZ3JhbXxlbnwwfHx8fDE2NDM0NDE4MDU&ixlib=rb-1.2.1&q=80&w=1080)] before:bg-top before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:absolute"></div>
            <div className="items-center flex-none flex-col flex-nowrap h-full justify-center px-0 py-0 w-full">
              <p className="flex-none text-[14px] h-auto tracking-normal leading-normal mt-[0px] mx-0 mb-[4px] px-0 py-0 text-left w-full justify-start font-semibold">
                WEBアプリケーションの開発, 運用
              </p>
              <p className="flex-none text-[12px] font-normal h-auto tracking-normal leading-relaxed mx-0 my-0 px-0 py-0 text-left w-full justify-start">
                「国内メディアのシステム開発」「大手金融機関のホームページ制作」「芸能事務所の社内向け
                <br />
                ツールの開発」など、主にNuxtを用いて様々なWebアプリケーションを開発・運用していま
                <br />
                す。
              </p>
            </div>
          </div>

          <div className="items-center flex-none flex-col flex-nowrap justify-center mt-[100px] mr-0 mb-0 ml-[60px] px-0 py-0 w-[calc(50%_-_60px)]">
            <div className="items-center relative rounded flex-none flex-col flex-nowrap h-[320px] justify-center mx-[0px] mt-[0px] mb-[28px] w-full before:bg-[url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8fHwxNjQzNTE3ODQz&ixlib=rb-1.2.1&q=80&w=1080)] before:bg-top before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:absolute"></div>
            <div className="items-center flex-none flex-col flex-nowrap h-full justify-center px-0 py-0 w-full">
              <p className="flex-none text-[14px] h-auto tracking-normal leading-normal mt-[0px] mx-0 mb-[4px] px-0 py-0 text-left w-full justify-start font-semibold">
                金融領域をはじめとしたデータ分析
              </p>
              <p className="flex-none text-[12px] font-normal h-auto tracking-normal leading-relaxed mx-0 my-0 px-0 py-0 text-left w-full justify-start">
                金融機関の売買審査のアルゴリズム制作、AWS・GCPを使用したビックデータの構築を行って
                <br />
                います。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="items-stretch flex bg-black flex-none flex-row flex-nowrap h-auto justify-center px-0 py-0 w-full">
        <div className="items-center z-0 relative flex-none flex-nowrap flex-col h-[320px] justify-center py-[100px] px-[80px] w-3/6 before:bg-[url(https://images.unsplash.com/photo-1620243295502-9a7d2ddeadd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mzh8fHRlbGVwaG9uZXxlbnwwfHx8fDE2NDM3NDgxMzc&ixlib=rb-1.2.1&q=80&w=1080)] before:brightness-[0.6] before:bg-center before:bg-cover before:h-full before:left-0 before:pointer-events-none before:absolute before:top-0 before:w-full before:z-[-2]">
          <div className="items-end flex flex-none flex-row flex-nowrap justify-between py-[24px] px-[12px] w-[480px]">
            <div className="bg-white bottom-0 flex-none h-[1px] left-0 mx-0 my-0 absolute right-0 w-full"></div>
            <div className="items-start flex-none flex-col flex-nowrap justify-center px-0 py-0 w-auto">
              <p className="text-white flex-none text-[14px] font-normal h-auto tracking-widest leading-none mt-0 mx-0 mb-[12px] px-0 py-0 text-left w-auto justify-start">
                お問い合わせ
              </p>
              <p className="text-white flex-none text-[22px] h-auto tracking-widest leading-none mx-0 my-0 px-0 py-0 text-left w-auto justify-start font-bold">
                Contact us
              </p>
            </div>
            <p className="text-white text-[22px] font-normal h-auto tracking-widest leading-none mx-0 my-0 px-0 py-0 text-left w-auto justify-start">
              →
            </p>
          </div>
        </div>
        <div className="items-center z-0 relative flex-none flex-nowrap flex-col h-[320px] justify-center py-[100px] px-[80px] w-3/6 before:bg-[url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c3VpdHN8ZW58MHx8fHwxNjQzNjk2MTU1&ixlib=rb-1.2.1&q=80&w=1080)] before:brightness-[0.6] before:bg-center before:bg-cover before:h-full before:left-0 before:pointer-events-none before:absolute before:top-0 before:w-full before:z-[-2]">
          <div className="items-end flex flex-none flex-row flex-nowrap justify-between py-[24px] px-[12px] w-[480px]">
            <div className="bg-white bottom-0 flex-none h-[1px] left-0 mx-0 my-0 absolute right-0 w-full"></div>
            <div className="items-start flex-none flex-col flex-nowrap justify-center px-0 py-0 w-auto">
              <p className="text-white flex-none text-[14px] font-normal h-auto tracking-widest leading-none mt-0 mx-0 mb-[12px] px-0 py-0 text-left w-auto justify-start">
                採用情報
              </p>
              <p className="text-white flex-none text-[22px] h-auto tracking-widest leading-none mx-0 my-0 px-0 py-0 text-left w-auto justify-start font-bold">
                Recruit
              </p>
            </div>
            <p className="text-white text-[22px] font-normal h-auto tracking-widest leading-none mx-0 my-0 px-0 py-0 text-left w-auto justify-start">
              →
            </p>
          </div>
        </div>
      </div>

      <footer />
    </>
  );
}
