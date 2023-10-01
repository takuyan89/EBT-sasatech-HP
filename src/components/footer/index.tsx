export default function footer() {
  return (
    <>
      <footer className="items-start py-[40px] px-[32px] lg:items-center border-t border-solid border-[#ddd] h-auto md:py-[60px] md:px-[80px] w-full max-w-full">
        <div className="items-start flex flex-col md:flex-row h-auto justify-between w-[1020px] max-w-full">
          <div className="mb-[16px] max-w-full h-auto w-auto">
            <p className="font-semibold h-auto tracking-widest mb-[18px] w-auto max-w-full">
              合同会社SasaTech
            </p>
            <p className="text-xs lg:text-sm h-auto tracking-widest w-auto max-w-full">
              〒150-0002
              <br />
              東京都渋谷区渋谷2-19-15
              <br />
              宮益坂ビルディング609
            </p>
          </div>
          <div className="flex justify-between flex-col-reverse items-end w-auto h-auto max-w-full">
            <p className="text-xs tracking-widest w-auto max-w-full">
              &copy;2021 SasaTech
            </p>
            <div className="md:mb-[120px] invisible md:visible">
              <a className="text-xs lg:text-sm mr-[12px] max-w-[calc(100%_-_12px)] lg:mr-[24px] lg:max-w-[calc(100%_-_24px)] w-auto">
                トップ
              </a>
              <a className="text-xs lg:text-sm mr-[12px] max-w-[calc(100%_-_12px)] lg:mr-[24px] lg:max-w-[calc(100%_-_24px)] w-auto">
                私たちについて
              </a>
              <a className="text-xs lg:text-sm mr-[12px] max-w-[calc(100%_-_12px)] lg:mr-[24px] lg:max-w-[calc(100%_-_24px)] w-auto">
                事業内容
              </a>
              <a className="text-xs lg:text-sm mr-[12px] max-w-[calc(100%_-_12px)] w-auto">
                お知らせ
              </a>
              <a className="text-xs">お問い合わせ</a>
            </div>
          </div>
        </div>
      </footer>
      {/* <div className="bottom-[28px] h-[180px] left-auto right-[120px] top-auto fixed w-[320px] max-w-full z-[50]">
        <div className="bottom-[12px] right-[12px] h-[46px] fixed block">
          <button>
            <span className="inline-block"></span>
            <span>Contact Us</span>
          </button>
        </div>
      </div> */}
    </>
  );
}
