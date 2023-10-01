import Image from "next/image";
import header from "../components/header";
import footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header />
      <section className="relative mt-[-100px] mb-0 mx-0 py-[25px] px-[20px] z-[5] w-full max-w-full items-center flex-none flex-col flex-nowrap h-auto justify-center overflow-x-hidden overflow-y-hidden  md:mt-[-90px]   md:py-10 md:px-[60px] md:w-full md:z-[2] md:max-w-full">
        <div className="shadow-[0_2px_25px_0_rgba(0,0,0,0.2)] flex-col flex-nowrap py-[25px] px-[25px] items-start bg-white border-y-0 rounded border-solid border-[#ddddd] flex-none h-auto justify-start w-[64rem] max-w-full md:py-[40px] md:px-[40px]  lg:shadow-[0_2px_40px_0_rgba(0,0,0,0.2)] lg:flex-row lg:flex-nowrap    lg:py-10 lg:px-[60px]  ">
          <div className="flex flex-col flex-nowrap items-start h-auto justify-between p-0 w-full max-w-full md:flex-row md:flex-nowrap">
            <p className="m-0 max-w-full flex-none text-sm font-semibold h-auto tracking-widest p-0 text-left w-auto justify-start flex-row leading-normal md:mr-[24px] md:max-w-[calc(100%_-_24px)] lg:mr-9 lg:max-w-[calc(100%_-_36px)]">
              お知らせ
            </p>

            <div className="m-0 w-full max-w-full md:mr-[25px] md:max-w-[calc(100%_-_25px)] items-start flex-1 flex-row flex-nowrap justify-start ">
              <div className="flex items-start flex-col flex-nowrap justify-start m-0 w-full max-w-full flex-1 md:flex-row h-auto ">
                <p className="flex-none text-xs mb-[6px] md:mb-0 p-0 w-full md:w-auto max-w-full md:mr-[16px] md:flex-none md:text-sm md:max-w-[calc(100%_-_16px)] font-normal h-auto  text-[#a7a7a7] lg:mr-[24px] lg:max-w-[calc(100%_-_24px)] justify-start">
                  2022/02/01　
                </p>
                <a className="whitespace-nowrap text-xs w-full max-w-full leading-normal tracking-normal md:text-sm font-normal h-auto md:mr-[40px] text-left justify-start">
                  月額7,700円から、高品質のホームページ制作
                  <br className="visible lg:invisible" /> -
                  kumitoruをローンチしました。
                </a>
              </div>
            </div>

            <a className="flex flex-none h-auto items-center flex-row flex-nowrap justify-start p-0 w-auto max-w-full">
              <div className="border-[#017d61] border rounded-xs flex-none h-[1px] mr-[10px] w-[12px] max-w-[calc(100%_-_10px)]"></div>
              <p className="text-[#017d61] flex-none text-xs font-normal h-auto tracking-widest m-0 p-0 text-left w-auto max-w-full justify-start ">
                もっと見る
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className="flex-col flex-nowrap mt-[20px] w-full max-w-full items-start	bg-white flex-none md:flex-row	md:m-0	h-auto justify-start overflow-y-visible overflow-x-visible  z-[1]">
        <div className="flex items-start flex-none flex-col flex-nowrap md:itmes-center md:flex-row	justify-start p-0 w-full max-w-full">
          <div className="flex-none w-10/12 max-w-[83%] items-center flex-row flex-nowrap justify-end md:w-5/12 md:max-w-[42%]">
            <div className="relative flex-none h-[160px] w-full max-w-full items-center rounded flex-col flex-nowrap md:h-[360px] justify-center before:bg-[url(https://images.unsplash.com/photo-1596079890744-c1a0462d0975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8NDZ8fGNvbXBhbnl8ZW58MHx8fHwxNjQzMzY5MDc3&ixlib=rb-1.2.1&q=80&w=1080)] before:bg-center before:bg-cover before:h-full before:left-0 before:pointer-events-none  before:top-0 before:w-full before:absolute"></div>
          </div>
          <div className="py-[24px] px-[32px] md:py-[40px] md:px-[60px] items-start flex-1 flex-col flex-nowrap	justify-center opacity-100 w-auto">
            <div className="items-start flex-col flex-nowrap justify-start max-w-full">
              <p className="text-xs text-[#017d61] flex-none font-normal  tracking-normal mb-[12px] text-left h-auto w-auto max-w-full justify-start">
                philosophy
              </p>
              <p className="text-xl flex flex-none  h-auto tracking-normal md:tracking-[.25em] mb-[16px] text-left w-auto font-medium max-w-full justify-start leading-relaxed">
                私たちは、テクノロジーを駆使して
                <br />
                課題解決に取り組む企業です。
              </p>
              <p className="text-sm flex-none font-normal h-auto tracking-normal leading-normal mb-[16px] text-left w-auto max-w-full justify-start">
                インターネットが普及しスマートフォンを多くの人が持
                <br />
                つようになった現代において、課題解決とテクノロジー
                <br />
                は密接な関係にあります。
                Sasatechでは、プログラミングやデザイン、マーケティ
                <br />
                ングなど、あらゆる側面で課題解決の道を模索します。
              </p>
              <a className="flex items-center flex-none h-auto flex-row flex-nowrap p-0 w-auto max-w-full">
                <div className="border-[#017d61] border rounded-xs flex-none h-[1px] mr-[10px] w-[12px] max-w-[calc(100%_-_10px)]"></div>
                <p className="text-[#017d61] flex-none text-xs font-normal h-auto tracking-widest m-0 p-0 text-left w-auto max-w-full justify-start ">
                  もっと見る
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex relative mt-[40px] pt-[80px] pb-[60px] px-[32px] md:pt-[60px] md:pb-[100px] md:px-[40px] lg:px-[120px] items-center flex-none flex-col flex-nowrap h-auto justify-center w-full max-w-full">
        <div className="flex flex-none justify-start overflow-x-visible overflow-y-visible md:hidden items-start flex-col flex-nowrap h-auto lg:justify-center left-0 lg:overflow-x-hidden lg:overflow-y-hidden absolute top-0 w-full z-[-1] max-w-full ">
          <div className="flex flex-none absolute bg-[#000000] h-[380px] lg:relative origin-top-left w-full z-[5] max-w-full"></div>
        </div>
        <div className="flex relative mb-[24px] items-start flex-none flex-col flex-nowrap justify-center lg:mb-[48px] w-[1280px] max-w-full">
          <p className="text-[#FFFFFF] md:text-[#017d61] flex-none text-xs h-auto w-auto max-w-full mb-[8px]">
            business
          </p>
          <div className="mb-[24px] max-w-full flex-row flex-nowrap justify-center flex">
            <p className="text-[#FFFFFF] md:text-[#111111] text-xl h-auto tracking-widest mr-[24px] w-auto max-w-[calc(100%_-_24px)] justify-start ">
              事業内容
            </p>
            <a className="flex items-center flex-row flex-nowrap h-[24px] w-auto max-w-full">
              <div className="md:border-[#017d61] border rounded-xs border-[#FFFFFF] h-[1px] mr-[10px] w-[12px] max-w-[calc(100%_-_10px)]"></div>
              <p className="text-[#FFFFFF] md:text-[#017d61] text-xs font-normal h-auto tracking-widest m-0 p-0 text-left w-auto max-w-full justify-start">
                もっと見る
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-nowrap max-w-full items-start md:flex-row justify-center md:mr-[40px] md:mb-[20px] w-[1280px] md:max-w-[calc(100%_-_40px)">
          <div className="flex mb-[36px] w-full max-w-full flex-col flex-nowrap items-center justify-center md:mr-[60px] md:mb-0 md:w-[calc(50%_-_60px)] md:max-w-[calc(50%_-_60px)]">
            <div className="h-[240px] w-full max-w-full items-center relative rounded flex-none flex-col flex-nowrap md:h-[320px] justify-center mb-[28px] before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1020x489_v-fs_webp_e4bf960a-4fc5-4017-aa52-dc613930a036.webp)] before:bg-top before:h-full before:left-0 before:top-0 before:w-full before:absolute before:rounded"></div>
            <div className="h-full w-full max-w-full ">
              <p className="text-sm h-auto mb-[4px] w-full max-w-full justify-start">
                エンターテイメント事業
              </p>
              <p className="text-xs h-auto w-full max-w-full">
                メイドカフェ事業やアイドル事業などを始めとした、エンターテ
                <br />
                イメント領域のマーケティング支援やシステム開発を行っています。
              </p>
            </div>
          </div>
          <div className="mb-[36px] w-full max-w-full md:mt-[100px] md:mb-0 md:ml-[60px] md:w-[calc(50%_-_60px)] md:max-w-[calc(50%_-_60px)]">
            <div className="h-[240px] w-full max-w-full items-center relative flex-none flex-col flex-nowrap md:h-[320px] justify-center mb-[28px] before:bg-[url(https://storage.googleapis.com/studio-design-asset-files/projects/BmqM7meeWX/s-1200x630_v-fms_webp_9235feb3-fff4-4a0c-be81-80803b332ad7_middle.webp)] before:bg-top before:h-full before:left-0 before:top-0 before:w-full before:absolute"></div>
            <div className="h-full w-full max-w-full">
              <p className="text-sm h-auto mb-[4px] w-full max-w-full justify-start">
                月額制Web制作サービス「kumitoru」の開発, 運営
              </p>
              <a className="text-[#017d61] text-xs h-auto w-full max-w-full justify-start">
                https://kumitoru.com/
              </a>
              <p className="text-xs h-auto w-full max-w-full mt-[8px] ">
                初期費用なしかつ格安の月額制で、お客様の意図を汲み取ったオ
                <br />
                リジナルのホームページを制作します。
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-nowrap max-w-full items-start md:flex-row justify-center md:ml-[40px] w-[1280px] md:max-w-[calc(100%_-_40px)">
          <div className="mb-[36px] w-full max-w-full items-center justify-center md:mr-[60px] md:mb-0 md:w-[calc(50%_-_60px)] md:max-w-[calc(50%_-_60px)]">
            <div className="h-[240px] w-full max-w-full items-center relative flex-none flex-col flex-nowrap md:h-[320px] justify-center mb-[28px] before:bg-[url(https://images.unsplash.com/photo-1579403124614-197f69d8187b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8OHx8cHJvZ3JhbXxlbnwwfHx8fDE2NDM0NDE4MDU&ixlib=rb-1.2.1&q=80&w=1080)] before:bg-top before:h-full before:left-0 before:top-0 before:w-full before:absolute before:rounded"></div>
            <div className="h-full w-full max-w-full ">
              <p className="text-sm h-auto mb-[8px] w-full max-w-full justify-start">
                WEBアプリケーションの開発, 運用
              </p>
              <p className="whitespace-nowrap text-xs h-auto w-full max-w-full">
                「国内メディアのシステム開発」「大手金融機関のホームページ
                <br />
                制作」「芸能事務所の社内向けツールの開発」など、主にNuxtを
                <br />
                用いて様々なWebアプリケーションを開発・運用しています。
              </p>
            </div>
          </div>
          <div className="w-full max-w-full md:mt-[100px] md:ml-[60px] md:w-[calc(50%_-_60px)] md:max-w-[calc(50%_-_60px)]">
            <div className="h-[240px] w-full max-w-full items-center relative flex-none flex-col flex-nowrap md:h-[320px] justify-center mb-[28px] before:bg-[url(https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8MTB8fGRhdGF8ZW58MHx8fHwxNjQzNTE3ODQz&ixlib=rb-1.2.1&q=80&w=1080)] before:bg-top before:h-full before:left-0 before:top-0 before:w-full before:absolute "></div>
            <div className="h-full w-full max-w-full">
              <p className="text-sm h-auto mb-[8px] w-full max-w-full justify-start">
                金融領域をはじめとしたデータ分析
              </p>
              <p className="whitespace-nowrap text-xs h-auto w-full max-w-full">
                金融機関の売買審査のアルゴリズム制作、AWS・GCP
                <br />
                を使用した ビックデータの構築を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className=" flex flex-col h-auto md:flex-row w-full max-w-full">
        <div className="h-auto mb-[16px] md:mx-0 mx-[16px] pt-[32px] pb-[48px] px-[24px] w-[calc(100%_-_32px)] max-w-[calc(100%_-_32px)] md:py-[80px] md:px-[40px] lg:h-[320px] lg:py-[100px] lg:px-[80px] md:w-[50%] md:max-w-[50%] relative before:bg-[url(https://images.unsplash.com/photo-1620243295502-9a7d2ddeadd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mzh8fHRlbGVwaG9uZXxlbnwwfHx8fDE2NDM3NDgxMzc&ixlib=rb-1.2.1&q=80&w=1080)] before:brightness-[0.6] before:bg-center before:bg-cover before:h-full before:left-0 before:absolute before:top-0 before:w-full before:z-[-2] before:rounded before:md:w-full">
          <a className="flex relative w-full max-w-full items-end flex-row justify-between py-[24px] px-[12px] lg:w-[480px]">
            <div className="border border-[#FFFFFF] bottom-0 h-[1px] left-0 absolute w-full max-w-full"></div>
            <div className="items-start w-auto max-w-full">
              <p className="text-[#FFFFFF] text-sm h-auto tracking-widest mb-[12px]">
                お問い合わせ
              </p>
              <p className="text-[#FFF] text-xl h-auto tracking-widest w-auto max-w-full">
                Contact us
              </p>
            </div>
            <p className="text-[#FFF] text-xl h-auto tracking-widest w-auto max-w-full">
              →
            </p>
          </a>
        </div>
        <div className="h-auto mb-[16px] md:mx-0 mx-[16px] pt-[32px] pb-[48px] px-[24px] w-[calc(100%_-_32px)] max-w-[calc(100%_-_32px)] md:py-[80px] md:px-[40px] lg:h-[320px] lg:py-[100px] lg:px-[80px] md:w-[50%] md:max-w-[50%] relative before:bg-[url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw2MzQ2fDB8MXxzZWFyY2h8Mnx8c3VpdHN8ZW58MHx8fHwxNjQzNjk2MTU1&ixlib=rb-1.2.1&q=80&w=1080)] before:brightness-[0.6] before:bg-center before:bg-cover before:h-full before:left-0 before:absolute before:top-0 before:w-full before:z-[-2] before:rounded before:md:w-full">
          <a className="flex relative w-full max-w-full items-end flex-row justify-between py-[24px] px-[12px] lg:w-[480px]">
            <div className="border border-[#FFFFFF] bottom-0 h-[1px] left-0 absolute w-full max-w-full"></div>
            <div className="items-start w-auto max-w-full">
              <p className="text-[#FFFFFF] text-sm h-auto tracking-widest mb-[12px]">
                採用情報
              </p>
              <p className="text-[#FFF] text-xl h-auto tracking-widest w-auto max-w-full">
                Recruit
              </p>
            </div>
            <p className="text-[#FFF] text-xl h-auto tracking-widest w-auto max-w-full">
              →
            </p>
          </a>
        </div>
      </div>
      <footer />
    </>
  );
}
