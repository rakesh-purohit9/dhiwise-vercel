import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Image } from "components/Image";
import { Stack } from "components/Stack";

const Page4 = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Row className="items-center justify-end self-stretch w-[100%]">
        <Column className="2xl:ml-[181px] 3xl:mb-[232px] 3xl:ml-[217px] 3xl:mt-[236px] font-opensans justify-start lg:mb-[150px] lg:ml-[141px] lg:mt-[153px] mb-[194px] ml-[181.55px] mt-[197px] w-[30%] xl:mb-[172px] xl:ml-[161px] xl:mt-[175px]">
          <Column className="items-center w-[100%]">
            <Column className="font-opensans justify-start w-[100%]">
              <Text className="2xl:text-fs52 3xl:mr-[12px] 3xl:text-fs62 font-bold lg:mr-[7px] lg:text-fs40 mr-[10px] text-fs52242088317871094 text-gray_922 text-left xl:mr-[8px] xl:text-fs46">{`Log in`}</Text>
              <Text className="2xl:ml-[6px] 2xl:mt-[23px] 2xl:text-fs13 3xl:ml-[8px] 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs16 font-normal lg:ml-[5px] lg:mr-[7px] lg:mt-[18px] lg:text-fs10 ml-[6.9599915px] mr-[10px] mt-[23.51001px] opacity-op5 text-fs1393122386932373 text-gray_900_88 text-left xl:ml-[6px] xl:mr-[8px] xl:mt-[20px] xl:text-fs12">{`enter to continue and explore within your grasp.`}</Text>
            </Column>
          </Column>
          <Text className="2xl:mt-[82px] 2xl:text-fs13 3xl:mr-[12px] 3xl:mt-[99px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[64px] lg:text-fs10 mr-[10px] mt-[82.72px] opacity-op5 text-fs1393122386932373 text-gray_900_88 text-left xl:mr-[8px] xl:mt-[73px] xl:text-fs12">{`Email Addres`}</Text>
          <Input
            className="2xl:mt-[16px] 2xl:pb-[20px] 2xl:pt-[1px] 2xl:text-fs20 3xl:mr-[12px] 3xl:mt-[19px] 3xl:pb-[24px] 3xl:pt-[2px] 3xl:text-fs25 bg-transparent border-0 border-b-[0.87px] border-gray_900_6c border-solid font-semibold lg:mr-[7px] lg:mt-[12px] lg:pb-[15px] lg:pt-[1px] lg:text-fs16 mr-[10px] mt-[16.540009px] pb-[20.075px] pl-[0] placeholder:bg-transparent placeholder:text-gray_900_88 pt-[1.7950001px] text-fs20896835327148438 text-gray_900_88 text-left w-[91%] xl:mr-[8px] xl:mt-[14px] xl:pb-[17px] xl:pt-[1px] xl:text-fs18"
            name="Group505"
            placeholder={`Youraddres@email.com`}
          ></Input>
          <Text className="2xl:mt-[62px] 2xl:text-fs13 3xl:mr-[12px] 3xl:mt-[75px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[48px] lg:text-fs10 mr-[10px] mt-[62.69998px] opacity-op5 text-fs1393122386932373 text-gray_900_88 text-left xl:mr-[8px] xl:mt-[55px] xl:text-fs12">{`Password`}</Text>
          <div className="2xl:mt-[16px] 3xl:mr-[12px] 3xl:mt-[19px] bg-transparent border-0 lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16.53003px] w-[91%] xl:mr-[8px] xl:mt-[14px] input-wrap">
            <Image
              src="img_eyes.svg"
              className="absolute top-[1.7950001px] bottom-[20.085001px] right-[1px] bg-transparent border-0 lg:top-[1px] lg:bottom-[15px] xl:top-[1px] xl:bottom-[17px] 2xl:top-[1px] 2xl:bottom-[20px] 3xl:top-[2px] 3xl:bottom-[24px]"
              alt="Eyes"
            />
            <Input
              className="2xl:pb-[20px] 2xl:pr-[38px] 2xl:pt-[1px] 2xl:text-fs20 3xl:pb-[24px] 3xl:pr-[45px] 3xl:pt-[2px] 3xl:text-fs25 bg-transparent border-0 border-b-[0.87px] border-gray_900_6c border-solid font-semibold lg:pb-[15px] lg:pr-[29px] lg:pt-[1px] lg:text-fs16 pb-[20.085001px] pl-[0] placeholder:bg-transparent placeholder:text-gray_900_88 pr-[38.30000244px] pt-[1.7950001px] text-fs20896835327148438 text-gray_900_88 text-left w-[100%] xl:pb-[17px] xl:pr-[34px] xl:pt-[1px] xl:text-fs18"
              name="Group506"
              placeholder={`Enter your password`}
            ></Input>
          </div>
          <Column className="2xl:mt-[61px] 3xl:mt-[74px] items-center lg:mt-[48px] mt-[61.819946px] w-[100%] xl:mt-[54px]">
            <Stack className="2xl:h-[91px] 3xl:h-[109px] font-opensans h-[90.55px] lg:h-[71px] self-stretch w-[100%] xl:h-[81px]">
              <Text className="2xl:pb-[26px] 2xl:pt-[27px] 2xl:text-fs20 3xl:pb-[31px] 3xl:pl-[42px] 3xl:pt-[32px] 3xl:text-fs25 absolute bg-deep_purple_A400 font-semibold leading-lh lg:pl-[27px] lg:py-[20px] lg:text-fs16 pb-[26.129944px] pl-[35px] pt-[26.990051px] rounded-radius871 self-stretch text-fs20896835327148438 text-left text-white_A700 top-[0] w-[100%] xl:pb-[23px] xl:pl-[31px] xl:pt-[24px] xl:text-fs18">{`Login to Continue`}</Text>
              <div className="2xl:h-[82px] 3xl:h-[99px] absolute bg-deep_purple_A400_3f bottom-[0] h-[81.85px] inset-x-[0] lg:h-[64px] mx-[auto] rounded-radius871 w-[95%] xl:h-[73px]"></div>
            </Stack>
          </Column>
          <Text className="2xl:ml-[6px] 2xl:mt-[36px] 2xl:text-fs13 3xl:ml-[8px] 3xl:mr-[12px] 3xl:mt-[43px] 3xl:text-fs16 font-normal lg:ml-[5px] lg:mr-[7px] lg:mt-[28px] lg:text-fs10 ml-[6.9599915px] mr-[10px] mt-[36.57007px] text-fs1393122386932373 text-gray_922 text-left xl:ml-[6px] xl:mr-[8px] xl:mt-[32px] xl:text-fs12">
            <span className="text-gray_922 text-fs1393122386932373 font-opensans text-left font-normal lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
              <>{`Don’t have an account ? `}</>
            </span>
            <span className="text-deep_purple_A400 text-fs1393122386932373 font-opensans text-left font-bold lg:text-fs10 xl:text-fs12 2xl:text-fs13 3xl:text-fs16">
              <>{`Sign up`}</>
            </span>
          </Text>
        </Column>
        <Stack className="2xl:h-[1025px] 2xl:ml-[131px] 3xl:h-[1230px] 3xl:ml-[157px] bg-gray_100_6c h-[1024px] lg:h-[797px] lg:ml-[102px] ml-[131.54999px] opacity-op2 w-[49%] xl:h-[911px] xl:ml-[117px]">
          <Image
            src="img_bgabstract.svg"
            className="2xl:h-[594px] 3xl:h-[713px] absolute h-[593.26px] inset-[0] justify-center lg:h-[462px] m-[auto] object-contain w-[69%] xl:h-[528px]"
            alt="bgabstract"
          />
        </Stack>
      </Row>
    </Column>
  );
};

export default Page4;
