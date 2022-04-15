import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { FloatingInput } from "components/FloatingInput";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Image } from "components/Image";

const Page2 = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Row className="font-nunito justify-end self-stretch w-[100%]">
        <Column className="2xl:ml-[190px] 3xl:mb-[194px] 3xl:ml-[228px] 3xl:mt-[270px] justify-start lg:mb-[126px] lg:ml-[147px] lg:mt-[175px] mb-[162px] ml-[189.96px] mt-[225px] w-[34%] xl:mb-[144px] xl:ml-[168px] xl:mt-[200px]">
          <Text className="2xl:text-fs34 3xl:text-fs41 font-bold lg:text-fs26 text-fs3440107727050781 text-indigo_903 text-left xl:text-fs30">{`Get started with easily register`}</Text>
          <Text className="2xl:mt-[12px] 2xl:text-fs20 3xl:mr-[12px] 3xl:mt-[15px] 3xl:text-fs24 font-normal lg:mr-[7px] lg:mt-[10px] lg:text-fs16 mr-[10px] mt-[12.900024px] opacity-op5 text-fs20640647888183594 text-indigo_900_87 text-left xl:mr-[8px] xl:mt-[11px] xl:text-fs18">{`Free register and you can enjoy it`}</Text>
          <FloatingInput
            className="peer focus:border-blue-600 placeholder-transparent focus:outline-none w-full h-10 2xl:pb-[28px] 2xl:pt-[36px] 2xl:text-fs20 3xl:pb-[34px] 3xl:pt-[44px] 3xl:px-[42px] 3xl:text-fs24 bg-transparent border-0 font-semibold lg:pb-[22px] lg:pt-[28px] lg:px-[27px] lg:text-fs16 pb-[28.425px] placeholder:bg-white_A700 placeholder:left-[55.03999999999999px] placeholder:text-indigo_900_99 pt-[36.775px] px-[35px] text-fs20640647888183594 text-indigo_903 text-left xl:pb-[25px] xl:pt-[32px] xl:px-[31px] xl:text-fs18"
            name="Emailaddres"
            labelClasses="absolute -translate-y-1/2 transition-all peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-1/2 bg-white_A700 left-[55.03999999999999px] text-indigo_900_99 peer-placeholder-shown:font-semibold peer-placeholder-shown:leading-lh1 peer-placeholder-shown:text-fs20640647888183594 peer-placeholder-shown:font-fontfamily peer-placeholder-shown:text-indigo_903 peer-focus:font-semibold peer-focus:leading-lh1 peer-focus:text-fs20640647888183594 peer-focus:font-fontfamily peer-focus:text-indigo_903"
            wrapperClasses="2xl:ml-[3px] 2xl:mt-[39px] 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[47px] bg-transparent border-0 lg:ml-[2px] lg:mr-[7px] lg:mt-[30px] ml-[3.4399872px] mr-[10px] mt-[39.559998px] w-[75%] xl:ml-[3px] xl:mr-[8px] xl:mt-[35px]"
            labelText="Email Addres"
            defaultText="Ladushing691@gmail.com"
          ></FloatingInput>
          <FloatingInput
            className="peer focus:border-blue-600 placeholder-transparent focus:outline-none w-full h-10 2xl:pb-[28px] 2xl:pt-[36px] 2xl:text-fs20 3xl:pb-[34px] 3xl:pt-[44px] 3xl:px-[42px] 3xl:text-fs24 bg-transparent border-0 font-semibold lg:pb-[22px] lg:pt-[28px] lg:px-[27px] lg:text-fs16 pb-[28.435001px] placeholder:bg-white_A700 placeholder:left-[67.93999999999997px] placeholder:text-indigo_900_99 pt-[36.775px] px-[35px] text-fs20640647888183594 text-indigo_903 text-left xl:pb-[25px] xl:pt-[32px] xl:px-[31px] xl:text-fs18"
            name="Fullname"
            labelClasses="absolute -translate-y-1/2 transition-all peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-1/2 bg-white_A700 left-[67.93999999999997px] text-indigo_900_99 peer-placeholder-shown:font-semibold peer-placeholder-shown:leading-lh1 peer-placeholder-shown:text-fs20640647888183594 peer-placeholder-shown:font-fontfamily peer-placeholder-shown:text-indigo_903 peer-focus:font-semibold peer-focus:leading-lh1 peer-focus:text-fs20640647888183594 peer-focus:font-fontfamily peer-focus:text-indigo_903"
            wrapperClasses="2xl:ml-[3px] 2xl:mt-[34px] 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[41px] bg-transparent border-0 lg:ml-[2px] lg:mr-[7px] lg:mt-[26px] ml-[3.4399872px] mr-[10px] mt-[34.409973px] w-[75%] xl:ml-[3px] xl:mr-[8px] xl:mt-[30px]"
            labelText="Full name"
            defaultText="Ladushing GTG"
          ></FloatingInput>
          <FloatingInput
            className="peer focus:border-blue-600 placeholder-transparent focus:outline-none w-full h-10 2xl:pb-[27px] 2xl:pt-[34px] 2xl:text-fs34 2xl:tracking-ls4 3xl:pb-[33px] 3xl:pt-[41px] 3xl:px-[42px] 3xl:text-fs41 3xl:tracking-ls5 bg-transparent border-0 font-extrabold lg:pb-[21px] lg:pt-[27px] lg:px-[27px] lg:text-fs26 lg:tracking-ls3 pb-[27.895px] placeholder:bg-white_A700 placeholder:left-[67.93999999999997px] placeholder:text-indigo_900_99 pt-[34.775px] px-[35px] text-fs3440107727050781 text-indigo_903 text-left tracking-ls4988156204223633 xl:pb-[24px] xl:pt-[30px] xl:px-[31px] xl:text-fs30 xl:tracking-ls4"
            name="Password"
            labelClasses="absolute -translate-y-1/2 transition-all peer-focus:-translate-y-1/2 peer-placeholder-shown:translate-y-1/2 bg-white_A700 left-[67.93999999999997px] text-indigo_900_99 peer-placeholder-shown:font-extrabold peer-placeholder-shown:leading-lh1 peer-placeholder-shown:text-fs3440107727050781 peer-placeholder-shown:font-fontfamily peer-placeholder-shown:text-indigo_903 peer-focus:font-extrabold peer-focus:leading-lh1 peer-focus:text-fs3440107727050781 peer-focus:font-fontfamily peer-focus:text-indigo_903"
            wrapperClasses="2xl:ml-[3px] 2xl:mt-[34px] 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[41px] bg-transparent border-0 lg:ml-[2px] lg:mr-[7px] lg:mt-[26px] ml-[3.4399872px] mr-[10px] mt-[34.400024px] w-[75%] xl:ml-[3px] xl:mr-[8px] xl:mt-[30px]"
            labelText="Password"
            defaultText="......."
          ></FloatingInput>
          <Column className="2xl:mt-[48px] 3xl:mt-[57px] items-center lg:mt-[37px] mt-[48.169983px] w-[100%] xl:mt-[42px]">
            <Row className="font-nunito items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[82px] 2xl:ml-[3px] 3xl:h-[99px] 3xl:ml-[4px] h-[81.7px] lg:h-[64px] lg:ml-[2px] ml-[3.4399872px] w-[42%] xl:h-[73px] xl:ml-[3px]">
                <div className="2xl:h-[68px] 3xl:h-[82px] absolute bg-indigo_A700 h-[67.94px] lg:h-[53px] rounded-radius86 self-stretch top-[0] w-[100%] xl:h-[61px]"></div>
                <Button className="2xl:pb-[35px] 2xl:pt-[7px] 2xl:text-fs20 3xl:pb-[42px] 3xl:pl-[42px] 3xl:pt-[9px] 3xl:text-fs24 absolute bg-indigo_A700_59 border-bw bottom-[0] font-semibold inset-x-[0] lg:pb-[27px] lg:pl-[27px] lg:pt-[6px] lg:text-fs16 mx-[auto] pb-[35.315002px] pl-[35px] pt-[7.7950006px] rounded-radius86 text-fs20640647888183594 text-left text-white_A700 w-[85%] xl:pb-[31px] xl:pl-[31px] xl:pt-[6px] xl:text-fs18">{`Sign up`}</Button>
              </Stack>
              <Text className="2xl:ml-[26px] 2xl:my-[26px] 2xl:text-fs20 3xl:ml-[32px] 3xl:my-[32px] 3xl:text-fs24 font-semibold lg:ml-[20px] lg:my-[20px] lg:text-fs16 mb-[26.659973px] ml-[26.660004px] mt-[26.660034px] text-fs20640647888183594 text-indigo_903 text-left xl:ml-[23px] xl:my-[23px] xl:text-fs18">{`or`}</Text>
              <Stack className="2xl:h-[50px] 2xl:mb-[19px] 2xl:ml-[28px] 2xl:mt-[12px] 2xl:w-[49px] 3xl:h-[59px] 3xl:mb-[23px] 3xl:ml-[34px] 3xl:mt-[15px] 3xl:w-[58px] bg-white_A700 h-[49.02px] lg:h-[39px] lg:mb-[15px] lg:ml-[22px] lg:mt-[10px] lg:w-[38px] mb-[19.779968px] ml-[28.380005px] mt-[12.900024px] rounded-radius50 shadow-bs26 w-[49.02px] xl:h-[44px] xl:mb-[17px] xl:ml-[25px] xl:mt-[11px] xl:w-[43px]">
                <Image
                  src="img_image4_1.png"
                  className="2xl:h-[20px] 2xl:w-[19px] 3xl:h-[24px] 3xl:w-[23px] absolute h-[19.87px] inset-[0] justify-center lg:h-[16px] lg:w-[15px] m-[auto] object-contain w-[19.87px] xl:h-[18px] xl:w-[17px]"
                  alt="image4"
                />
              </Stack>
              <Stack className="2xl:h-[50px] 2xl:mb-[18px] 2xl:ml-[24px] 2xl:mr-[83px] 2xl:mt-[13px] 2xl:w-[49px] 3xl:h-[59px] 3xl:mb-[22px] 3xl:ml-[28px] 3xl:mr-[100px] 3xl:mt-[16px] 3xl:w-[58px] bg-white_A700 h-[49.02px] lg:h-[39px] lg:mb-[14px] lg:ml-[18px] lg:mr-[64px] lg:mt-[10px] lg:w-[38px] mb-[18.919983px] ml-[24.080017px] mr-[83.42993px] mt-[13.76001px] rounded-radius50 shadow-bs26 w-[49.02px] xl:h-[44px] xl:mb-[16px] xl:ml-[21px] xl:mr-[74px] xl:mt-[12px] xl:w-[43px]">
                <Image
                  src="img_vector_13.svg"
                  className="2xl:h-[27px] 2xl:w-[26px] 3xl:h-[33px] 3xl:w-[32px] absolute h-[26.66px] inset-[0] justify-center lg:h-[21px] lg:w-[20px] m-[auto] object-contain w-[26.66px] xl:h-[24px] xl:w-[23px]"
                  alt="Vector"
                />
              </Stack>
            </Row>
          </Column>
        </Column>
        <Image
          src="img_imghere.svg"
          className="2xl:h-[1027px] 2xl:ml-[100px] 3xl:h-[1232px] 3xl:ml-[120px] h-[1026px] lg:h-[798px] lg:ml-[77px] ml-[99.96002px] object-contain w-[46%] xl:h-[913px] xl:ml-[88px]"
          alt="imghere"
        />
      </Row>
    </Column>
  );
};

export default Page2;
