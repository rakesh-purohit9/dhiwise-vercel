import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Input } from "components/Input";

const Page6 = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Row className="justify-end self-stretch w-[100%]">
        <Column className="2xl:mb-[134px] 2xl:ml-[159px] 3xl:mb-[161px] 3xl:ml-[191px] 3xl:mt-[97px] items-center justify-start lg:mb-[104px] lg:ml-[124px] lg:mt-[63px] mb-[134.88px] ml-[159.46px] mt-[81px] w-[34%] xl:mb-[119px] xl:ml-[141px] xl:mt-[72px]">
          <Row className="font-opensans justify-start w-[100%]">
            <div className="2xl:h-[29px] 2xl:ml-[45px] 2xl:w-[28px] 3xl:h-[35px] 3xl:ml-[54px] 3xl:mt-[6px] 3xl:w-[34px] bg-orange_500 h-[28.34px] lg:h-[23px] lg:ml-[35px] lg:mt-[3px] lg:w-[22px] ml-[45.009995px] mt-[5px] rounded-radius50 w-[28.34px] xl:h-[26px] xl:ml-[40px] xl:mt-[4px] xl:w-[25px]"></div>
            <Text className="2xl:mb-[5px] 2xl:ml-[9px] 2xl:mr-[342px] 2xl:text-fs20 3xl:mb-[7px] 3xl:ml-[11px] 3xl:mr-[410px] 3xl:text-fs24 font-extrabold lg:mb-[4px] lg:ml-[7px] lg:mr-[266px] lg:text-fs15 mb-[5.829994px] ml-[9.169998px] mr-[342.16px] text-fs20006437301635742 text-gray_922 text-left tracking-ls1 xl:mb-[5px] xl:ml-[8px] xl:mr-[304px] xl:text-fs17">{`EPICEK`}</Text>
          </Row>
          <Stack className="2xl:h-[628px] 2xl:mt-[148px] 3xl:h-[753px] 3xl:mt-[177px] h-[626.87px] lg:h-[488px] lg:mt-[115px] mt-[147.91px] w-[100%] xl:h-[558px] xl:mt-[131px]">
            <Column className="2xl:right-[17px] 3xl:right-[20px] absolute bg-white_A700 font-opensans inset-y-[0] justify-start left-[0] lg:right-[13px] right-[17.05px] rounded-radius1667 w-[97%] xl:right-[15px]">
              <Text className="2xl:mx-[33px] 2xl:text-fs33 3xl:mx-[40px] 3xl:text-fs40 font-bold lg:mx-[25px] lg:text-fs25 ml-[33.339996px] mr-[33.34px] mt-[1px] text-fs3334406280517578 text-gray_922 text-left xl:mx-[29px] xl:text-fs29">{`Login to your account!`}</Text>
              <Row className="2xl:mt-[29px] 2xl:mx-[33px] 3xl:mt-[35px] 3xl:mx-[40px] border-bw083 border-gray_900_75 border-solid items-center justify-start lg:mt-[22px] lg:mx-[25px] ml-[33.339996px] mr-[33.34px] mt-[29.179993px] rounded-radius834 w-[46%] xl:mt-[25px] xl:mx-[29px]">
                <Image
                  src="img_image4_3.png"
                  className="2xl:h-[20px] 2xl:mb-[23px] 2xl:ml-[30px] 2xl:mt-[22px] 2xl:w-[19px] 3xl:h-[24px] 3xl:mb-[28px] 3xl:ml-[36px] 3xl:mt-[27px] 3xl:w-[23px] h-[19.52px] lg:h-[16px] lg:mb-[18px] lg:ml-[23px] lg:mt-[17px] lg:w-[15px] mb-[23.339996px] ml-[30.009995px] mt-[22.570007px] object-contain w-[19.52px] xl:h-[18px] xl:ml-[26px] xl:my-[20px] xl:w-[17px]"
                  alt="image4"
                />
                <Text className="2xl:mb-[21px] 2xl:ml-[9px] 2xl:mr-[42px] 2xl:mt-[23px] 2xl:text-fs13 3xl:mb-[25px] 3xl:ml-[11px] 3xl:mr-[50px] 3xl:mt-[28px] 3xl:text-fs16 font-semibold lg:mb-[16px] lg:ml-[7px] lg:mr-[32px] lg:mt-[18px] lg:text-fs10 mb-[21.639954px] ml-[9.660004px] mr-[42.25px] mt-[23.870026px] text-fs13337624549865723 text-gray_922 text-left tracking-ls1 xl:mb-[19px] xl:ml-[8px] xl:mr-[37px] xl:mt-[21px] xl:text-fs11">{`Login with Google`}</Text>
              </Row>
              <Text className="2xl:mt-[32px] 2xl:mx-[33px] 2xl:text-fs13 3xl:mt-[38px] 3xl:mx-[40px] 3xl:text-fs16 font-normal lg:mt-[24px] lg:mx-[25px] lg:text-fs10 ml-[33.339996px] mr-[33.34px] mt-[32.100006px] opacity-op5 text-fs13337624549865723 text-gray_900_88 text-left xl:mt-[28px] xl:mx-[29px] xl:text-fs11">{`Email Addres`}</Text>
              <Input
                className="2xl:mt-[15px] 2xl:mx-[33px] 2xl:pb-[19px] 2xl:pt-[1px] 2xl:text-fs20 3xl:mt-[19px] 3xl:mx-[40px] 3xl:pb-[23px] 3xl:pt-[2px] 3xl:text-fs24 bg-transparent border-0 border-b-[0.83px] border-gray_900_6c border-solid font-semibold lg:mt-[12px] lg:mx-[25px] lg:pb-[14px] lg:pt-[1px] lg:text-fs15 ml-[33.339996px] mr-[33.34px] mt-[15.840027px] pb-[19.220001px] pl-[0] placeholder:bg-transparent placeholder:text-gray_922 pt-[1.7200003px] text-fs20006437301635742 text-gray_922 text-left w-[78%] xl:mt-[14px] xl:mx-[29px] xl:pb-[17px] xl:pt-[1px] xl:text-fs17"
                name="Group513"
                placeholder={`Youraddres@email.com`}
              ></Input>
              <Text className="2xl:mt-[60px] 2xl:mx-[33px] 2xl:text-fs13 3xl:mt-[72px] 3xl:mx-[40px] 3xl:text-fs16 font-normal lg:mt-[46px] lg:mx-[25px] lg:text-fs10 ml-[33.339996px] mr-[33.34px] mt-[60.02002px] opacity-op5 text-fs13337624549865723 text-gray_900_88 text-left xl:mt-[53px] xl:mx-[29px] xl:text-fs11">{`Password`}</Text>
              <div className="2xl:mt-[15px] 2xl:mx-[33px] 3xl:mt-[19px] 3xl:mx-[40px] bg-transparent border-0 lg:mt-[12px] lg:mx-[25px] ml-[33.339996px] mr-[33.34px] mt-[15.839966px] w-[78%] xl:mt-[14px] xl:mx-[29px] input-wrap">
                <Image
                  src="img_eyes_1.svg"
                  className="absolute top-[1.7200003px] bottom-[19.220001px] right-[1px] bg-transparent border-0 lg:top-[1px] lg:bottom-[14px] xl:top-[1px] xl:bottom-[17px] 2xl:top-[1px] 2xl:bottom-[19px] 3xl:top-[2px] 3xl:bottom-[23px]"
                  alt="Eyes"
                />
                <Input
                  className="2xl:pb-[19px] 2xl:pr-[37px] 2xl:pt-[1px] 2xl:text-fs20 3xl:pb-[23px] 3xl:pr-[44px] 3xl:pt-[2px] 3xl:text-fs24 bg-transparent border-0 border-b-[0.83px] border-gray_900_6c border-solid font-semibold lg:pb-[14px] lg:pr-[28px] lg:pt-[1px] lg:text-fs15 pb-[19.220001px] pl-[0] placeholder:bg-transparent placeholder:text-gray_922 pr-[37.090034179999996px] pt-[1.7200003px] text-fs20006437301635742 text-gray_922 text-left w-[100%] xl:pb-[17px] xl:pr-[32px] xl:pt-[1px] xl:text-fs17"
                  name="Group514"
                  placeholder={`Enter your password`}
                ></Input>
              </div>
              <Column className="2xl:mt-[59px] 3xl:mt-[71px] items-center lg:mt-[46px] mt-[59.190002px] self-stretch w-[100%] xl:mt-[52px]">
                <Stack className="2xl:h-[87px] 3xl:h-[105px] font-opensans h-[86.69px] lg:h-[68px] mx-[auto] w-[85%] xl:h-[78px]">
                  <div className="2xl:h-[79px] 3xl:h-[95px] absolute bg-deep_purple_A400_3f bottom-[0] h-[78.36px] inset-x-[0] lg:h-[61px] mx-[auto] rounded-radius834 w-[95%] xl:h-[70px]"></div>
                  <Text className="2xl:py-[25px] 2xl:text-fs20 3xl:pb-[30px] 3xl:pl-[42px] 3xl:pt-[31px] 3xl:text-fs24 absolute bg-orange_500 font-semibold leading-lh lg:pb-[19px] lg:pl-[27px] lg:pt-[20px] lg:text-fs15 pb-[25.01001px] pl-[35px] pt-[25.839966px] rounded-radius834 self-stretch text-fs20006437301635742 text-left text-white_A700 top-[0] w-[100%] xl:pl-[31px] xl:py-[22px] xl:text-fs17">{`Login to Continue`}</Text>
                </Stack>
              </Column>
              <Text className="2xl:mb-[36px] 2xl:mt-[35px] 2xl:mx-[40px] 2xl:text-fs13 3xl:mb-[44px] 3xl:mt-[42px] 3xl:mx-[48px] 3xl:text-fs16 font-normal lg:mb-[28px] lg:mt-[27px] lg:mx-[31px] lg:text-fs10 mb-[36.679993px] ml-[40.009995px] mr-[40.01px] mt-[35.01996px] text-fs13337624549865723 text-gray_922 text-left xl:mb-[32px] xl:mt-[31px] xl:mx-[35px] xl:text-fs11">
                <span className="text-gray_922 text-fs13337624549865723 font-opensans text-left font-normal lg:text-fs10 xl:text-fs11 2xl:text-fs13 3xl:text-fs16">
                  <>{`Don’t have an account ? `}</>
                </span>
                <span className="text-orange_800 text-fs13337624549865723 font-opensans text-left font-bold lg:text-fs10 xl:text-fs11 2xl:text-fs13 3xl:text-fs16">
                  <>{`Sign up`}</>
                </span>
              </Text>
            </Column>
            <Row className="2xl:top-[79px] 3xl:top-[95px] absolute border-bw083 border-gray_900_75 border-solid font-opensans items-center justify-center lg:top-[61px] right-[0] rounded-radius834 top-[79.66px] w-[45%] xl:top-[70px]">
              <Image
                src="img_vector_19.svg"
                className="2xl:h-[26px] 2xl:ml-[19px] 2xl:my-[18px] 2xl:w-[25px] 3xl:h-[32px] 3xl:ml-[23px] 3xl:my-[22px] 3xl:w-[31px] h-[25.84px] lg:h-[21px] lg:ml-[15px] lg:my-[14px] lg:w-[20px] ml-[19.619995px] my-[18.339996px] object-contain w-[25.84px] xl:h-[23px] xl:ml-[17px] xl:my-[16px] xl:w-[22px]"
                alt="Vector"
              />
              <Text className="2xl:mb-[21px] 2xl:ml-[14px] 2xl:mr-[24px] 2xl:mt-[22px] 2xl:text-fs13 3xl:mb-[26px] 3xl:ml-[17px] 3xl:mr-[29px] 3xl:mt-[27px] 3xl:text-fs16 font-semibold lg:mb-[16px] lg:ml-[11px] lg:mr-[19px] lg:mt-[17px] lg:text-fs10 mb-[21.669983px] ml-[14.170013px] mr-[24.559998px] mt-[22.51001px] text-fs13337624549865723 text-gray_922 text-left tracking-ls1 xl:mb-[19px] xl:ml-[12px] xl:mr-[21px] xl:mt-[20px] xl:text-fs11">{`Login with Facebook`}</Text>
            </Row>
          </Stack>
        </Column>
        <Image
          src="img_imghere_2.svg"
          className="2xl:h-[1025px] 3xl:h-[1230px] 3xl:ml-[135px] h-[1024px] lg:h-[797px] lg:ml-[87px] ml-[113px] object-contain w-[47%] xl:h-[911px] xl:ml-[100px]"
          alt="imghere"
        />
      </Row>
    </Column>
  );
};

export default Page6;
