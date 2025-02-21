
const CBAMBanner = () => {
    return (
        <div className="w-full p-5 mt-10 rounded-lg text-center text-base border ">
            <h2 className="text-2xl font-bold text-blue-500 my-4">하나루프 Special Offer</h2>
            EU 탄소국경조정제도(CBAM) 시행으로 수출기업 보고서 부담, 더는 고민하지 마세요. <br/>
            <b>선정된 기업을 대상으로 무상 진단!</b> <br/>
            누락된 부분까지 꼼꼼하게 점검해드립니다.

            <div className="w-full h-full flex justify-center p-6">
                <button className="hover:text-white bg-blue-500 text-white rounded-md p-3">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSct04RcNKwwkGC1DKiqhXgzLG77tXjetV1NJL9prE4pJ-vpnw/viewform" target="_blank" className="no-underline">CBAM 보고서 진단 신청</a>
                </button>
            </div>
        </div>
    )
}

export default CBAMBanner