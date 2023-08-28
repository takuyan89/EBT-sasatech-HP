export default function footer() {
  return (
    <footer className="items-center bg-white border-t-[1px] flex-none flex-col flex-nowrap h-auto justify-center mx-0 my-0 py-[60px] px-[80px] w-full z-0 ">
      <div className="items-start flex flex-row flex-nowrap h-auto justify-between overflow-x-visible overflow-y-visible px-0 py-0 w-[1020px]">
        <div className="items-start flex-col flex-nowrap h-auto justify-start w-auto ">
          <p className="text-[16px] font-semibold h-auto tracking-widest mt-0 mx-0 mb-[18px] text-center w-auto justify-center">
            合同会社SasaTech
          </p>
          <p className="text-[#333] flex-none text-[12px] not-italic font-normal h-auto tracking-[0.13em] leading-relaxed mx-0 my-0 text-left w-auto justify-start">
            〒150-0002 東京都渋谷区渋谷2-19-15
            <br />
            宮益坂ビルディング609
          </p>
        </div>
        <div className="items-end flex flex-none flex-col-reverse flex-nowrap h-auto justify-between overflow-x-visible overflow-y-visible w-full">
          <p className="text-[#333] text-[12px] not-italic font-normal h-auto tracking-widest leading-relaxed mx-0 my-0 text-left w-auto justify-start">
            ©️2021 SasaTech
          </p>
          <div className="content-center flex items-center flex-none flex-row flex-nowrap h-auto justify-center mt-0 mx-0 mb-[120px] overflow-x-visible overflow-y-visible w-auto">
            <p className="text-[14px] font-medium h-auto tracking-widest my-0 mr-[24px] ml-0 px-0 py-0 text-center w-auto justify-center">
              トップ
            </p>
            <p className="text-[14px] font-medium h-auto tracking-widest my-0 mr-[24px] ml-0 px-0 py-0 text-center w-auto justify-center">
              私たちについて
            </p>
            <p className="text-[14px] font-medium h-auto tracking-widest my-0 mr-[24px] ml-0 px-0 py-0 text-center w-auto justify-center">
              事業内容
            </p>
            <p className="text-[14px] font-medium h-auto tracking-widest my-0 mr-[24px] ml-0 px-0 py-0 text-center w-auto justify-center">
              お知らせ
            </p>
            <p className="text-[14px] font-medium h-auto tracking-widest my-0 mx-0 px-0 py-0 text-center w-auto justify-center">
              お問い合わせ
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
