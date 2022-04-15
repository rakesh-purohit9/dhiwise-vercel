import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Input } from "components/Input";

const Page3 = () => {
  return (
    <Column className="bg-gray_400 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[658px] 2xl:mx-[176px] 3xl:h-[789px] 3xl:mb-[24px] 3xl:mt-[232px] 3xl:mx-[211px] h-[657px] lg:h-[511px] lg:mb-[15px] lg:mt-[150px] lg:mx-[136px] mb-[20px] mt-[194px] mx-[175.88px] w-[38%] xl:h-[585px] xl:mb-[17px] xl:mt-[172px] xl:mx-[156px]">
        <div className="2xl:h-[641px] 3xl:h-[769px] absolute bg-blue_A200_3d h-[640.35px] inset-[0] justify-center lg:h-[499px] m-[auto] rounded-radius833 w-[92%] xl:h-[570px]"></div>
        <Row className="2xl:bottom-[16px] 3xl:bottom-[19px] absolute bg-white_A700 bottom-[16.65px] inset-x-[0] justify-start lg:bottom-[12px] rounded-radius833 self-stretch top-[0] w-[100%] xl:bottom-[14px]">
          <Image
            src="defaultNoData.png"
            className="2xl:h-[7px] 2xl:mb-[434px] 2xl:ml-[51px] 3xl:h-[8px] 3xl:mb-[521px] 3xl:ml-[61px] 3xl:mt-[240px] 3xl:w-[7px] h-[6px] lg:h-[5px] lg:mb-[337px] lg:ml-[39px] lg:mt-[155px] lg:w-[4px] mb-[434.34998px] ml-[51.119995px] mt-[200px] object-contain opacity-op6 w-[6px] xl:mb-[386px] xl:ml-[45px] xl:mt-[177px] xl:w-[5px]"
            alt="Vector"
          />
          <Column className="2xl:mb-[77px] 2xl:ml-[12px] 2xl:mr-[69px] 2xl:mt-[89px] 3xl:mb-[92px] 3xl:ml-[15px] 3xl:mr-[83px] 3xl:mt-[107px] font-opensans justify-start lg:mb-[60px] lg:ml-[9px] lg:mr-[54px] lg:mt-[69px] mb-[77.43994px] ml-[12.820007px] mr-[69.95001px] mt-[89.92999px] w-[74%] xl:mb-[68px] xl:ml-[11px] xl:mr-[62px] xl:mt-[80px]">
            <Column className="self-stretch w-[100%]">
              <Text className="2xl:mx-[20px] 2xl:text-fs33 3xl:mx-[24px] 3xl:text-fs39 font-bold lg:mx-[16px] lg:text-fs25 mx-[20.820007px] text-fs333079833984375 text-gray_922 text-left xl:mx-[18px] xl:text-fs29">{`Login to your Account`}</Text>
              <Text className="2xl:mt-[11px] 2xl:mx-[50px] 2xl:text-fs13 3xl:mt-[13px] 3xl:mx-[60px] 3xl:text-fs15 font-normal lg:mt-[9px] lg:mx-[39px] lg:text-fs10 ml-[50.799988px] mr-[50.789978px] mt-[11.649994px] opacity-op6 text-fs13323193550109863 text-gray_900_90 text-left xl:mt-[10px] xl:mx-[45px] xl:text-fs11">{`Enter to continue and explore within your grasp`}</Text>
              <div className="2xl:mt-[60px] 3xl:mt-[71px] bg-transparent border-0 lg:mt-[46px] mt-[59.95999px] self-stretch w-[100%] xl:mt-[53px] input-wrap">
                <Image
                  src="img_vector_14.svg"
                  className="absolute top-[25.295px] bottom-[26.955px] left-[32.47px] bg-transparent border-0 lg:top-[19px] lg:bottom-[20px] lg:left-[25px] xl:top-[22px] xl:bottom-[23px] xl:left-[28px] 2xl:top-[25px] 2xl:bottom-[26px] 2xl:left-[32px] 3xl:top-[30px] 3xl:bottom-[32px] 3xl:left-[38px]"
                  alt="Vector"
                />
                <Input
                  className="2xl:pb-[26px] 2xl:pl-[57px] 2xl:pt-[25px] 2xl:text-fs13 3xl:pb-[32px] 3xl:pl-[68px] 3xl:pt-[30px] 3xl:text-fs15 bg-transparent border-bw083 border-gray_900_75 border-solid font-semibold lg:pb-[20px] lg:pl-[44px] lg:pt-[19px] lg:text-fs10 pb-[26.955px] pl-[57.46px] placeholder:bg-transparent placeholder:text-gray_900_90 pt-[25.295px] rounded-radius833 text-fs13323193550109863 text-gray_900_90 text-left w-[100%] xl:pb-[23px] xl:pl-[51px] xl:pt-[22px] xl:text-fs11"
                  name="Group3"
                  placeholder={`Enter email or phone`}
                ></Input>
              </div>
            </Column>
            <Row className="2xl:mt-[22px] 3xl:mt-[26px] border-bw083 border-gray_900_75 border-solid items-center justify-start lg:mt-[17px] mt-[22.480011px] rounded-radius833 self-stretch w-[100%] xl:mt-[19px]">
              <Image
                src="img_vector_15.svg"
                className="2xl:h-[17px] 2xl:mb-[25px] 2xl:ml-[33px] 2xl:mt-[23px] 3xl:h-[20px] 3xl:mb-[30px] 3xl:ml-[39px] 3xl:mt-[28px] h-[16.65px] lg:h-[13px] lg:mb-[20px] lg:ml-[25px] lg:mt-[18px] mb-[25.809998px] ml-[33.309998px] mt-[23.319977px] object-contain opacity-op5 w-[3%] xl:h-[15px] xl:mb-[22px] xl:ml-[29px] xl:mt-[20px]"
                alt="Vector"
              />
              <Text className="2xl:mb-[24px] 2xl:ml-[24px] 2xl:mt-[23px] 2xl:text-fs13 3xl:ml-[29px] 3xl:my-[28px] 3xl:text-fs15 font-semibold lg:ml-[19px] lg:my-[18px] lg:text-fs10 mb-[24.140015px] ml-[24.97998px] mt-[23.319977px] opacity-op6 text-fs13323193550109863 text-gray_900_90 text-left xl:mb-[21px] xl:ml-[22px] xl:mt-[20px] xl:text-fs11">{`Password`}</Text>
              <Image
                src="img_group_10.svg"
                className="2xl:h-[14px] 2xl:mb-[25px] 2xl:ml-[214px] 2xl:mr-[38px] 2xl:mt-[26px] 3xl:h-[17px] 3xl:mb-[30px] 3xl:ml-[256px] 3xl:mr-[45px] 3xl:mt-[31px] h-[13.74px] lg:h-[11px] lg:mb-[19px] lg:ml-[166px] lg:mr-[29px] lg:mt-[20px] mb-[25.599976px] ml-[214.01001px] mr-[38.309998px] mt-[26.440033px] object-contain opacity-op4 w-[5%] xl:h-[13px] xl:mb-[22px] xl:ml-[190px] xl:mr-[34px] xl:mt-[23px]"
                alt="Group"
              />
            </Row>
            <Row className="2xl:mt-[18px] 3xl:mt-[22px] items-center justify-end lg:mt-[14px] mt-[18.330017px] self-stretch w-[100%] xl:mt-[16px]">
              <div className="2xl:h-[14px] 2xl:ml-[6px] 2xl:my-[2px] 2xl:w-[13px] 3xl:h-[16px] 3xl:ml-[7px] 3xl:my-[3px] 3xl:w-[15px] border-bw083 border-gray_900_90 border-solid h-[13.32px] lg:h-[11px] lg:ml-[5px] lg:my-[1px] lg:w-[10px] ml-[6.6599884px] my-[2.5px] opacity-op6 rounded-radius50 w-[13.32px] xl:h-[12px] xl:ml-[5px] xl:my-[2px] xl:w-[11px]"></div>
              <Text className="2xl:ml-[12px] 2xl:text-fs13 3xl:ml-[15px] 3xl:text-fs15 font-semibold lg:ml-[9px] lg:text-fs10 ml-[12.5px] opacity-op6 text-fs13323193550109863 text-gray_900_90 text-left xl:ml-[11px] xl:text-fs11">{`Remember Me`}</Text>
              <Text className="2xl:ml-[163px] 2xl:mr-[1px] 2xl:text-fs13 3xl:ml-[195px] 3xl:mr-[2px] 3xl:text-fs15 font-semibold lg:ml-[126px] lg:mr-[1px] lg:text-fs10 ml-[163.20001px] mr-[1.6699829px] opacity-op5 text-fs13323193550109863 text-gray_900_88 text-left xl:ml-[145px] xl:mr-[1px] xl:text-fs11">{`Forgot password?`}</Text>
            </Row>
            <Stack className="2xl:h-[87px] 2xl:mt-[30px] 3xl:h-[104px] 3xl:mt-[36px] h-[86.6px] lg:h-[68px] lg:mt-[23px] mt-[30.809998px] self-stretch w-[100%] xl:h-[78px] xl:mt-[27px]">
              <div className="2xl:h-[79px] 3xl:h-[94px] absolute bg-blue_A100_19 bottom-[1px] h-[78.27px] inset-x-[0] lg:h-[61px] mx-[auto] rounded-radius833 w-[95%] xl:h-[70px]"></div>
              <Text className="2xl:py-[22px] 2xl:text-fs14 3xl:pl-[42px] 3xl:py-[26px] 3xl:text-fs17 absolute bg-blue_A200 font-semibold leading-lh lg:pl-[27px] lg:py-[17px] lg:text-fs11 pl-[35px] py-[22.47998px] rounded-radius833 self-stretch text-fs14988593101501465 text-left text-white_A700 top-[0] w-[100%] xl:pl-[31px] xl:py-[19px] xl:text-fs13">{`Login to Continue`}</Text>
            </Stack>
            <Text className="2xl:ml-[104px] 2xl:mr-[103px] 2xl:mt-[11px] 2xl:text-fs13 3xl:ml-[124px] 3xl:mr-[123px] 3xl:mt-[14px] 3xl:text-fs15 font-normal lg:mt-[9px] lg:mx-[80px] lg:text-fs10 ml-[104.09px] mr-[103.25px] mt-[11.660034px] text-fs13323193550109863 text-gray_922 text-left xl:ml-[92px] xl:mr-[91px] xl:mt-[10px] xl:text-fs11">
              <span className="text-gray_922 text-fs13323193550109863 font-opensans text-left font-normal lg:text-fs10 xl:text-fs11 2xl:text-fs13 3xl:text-fs15">
                <>{`Don’t have an account ? `}</>
              </span>
              <span className="text-blue_A200 text-fs13323193550109863 font-opensans text-left font-bold lg:text-fs10 xl:text-fs11 2xl:text-fs13 3xl:text-fs15">
                <>{`Sign up`}</>
              </span>
            </Text>
          </Column>
        </Row>
      </Stack>
    </Column>
  );
};

export default Page3;
