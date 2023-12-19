import React from 'react';
import Footer from '@theme-original/Footer';

export default function FooterWrapper(props) {
  return (
    <>
      <Footer {...props} />
      <div className='py-2 bg-[#303846] text-white text-center'>
        <div>서울특별시 강남구 선릉로93길 40, 나라키움 역삼A빌딩 4층</div>
        <div>email: info@hanaloop.com  |  phone: +82 0507-1337-9251</div>
      </div>

    </>
  );
}
