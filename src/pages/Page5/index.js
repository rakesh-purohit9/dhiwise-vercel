import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Button } from "components/Button";

const Page5 = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Row className="justify-start self-stretch w-[100%]">
        <Image
          src="img_imghere_1.svg"
          className="2xl:h-[1025px] 3xl:h-[1230px] h-[1024px] lg:h-[797px] object-contain w-[45%] xl:h-[911px]"
          alt="imghere"
        />
        <Column className="2xl:mb-[190px] 2xl:ml-[109px] 3xl:mb-[228px] 3xl:ml-[131px] 3xl:mr-[201px] 3xl:mt-[70px] font-opensans justify-start lg:mb-[148px] lg:ml-[85px] lg:mr-[130px] lg:mt-[45px] mb-[190.46002px] ml-[109.46997px] mr-[168px] mt-[59px] w-[35%] xl:mb-[169px] xl:ml-[97px] xl:mr-[149px] xl:mt-[52px]">
          <Column className="items-end w-[100%]">
            <Text className="3xl:ml-[12px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[10px] text-fs16 text-gray_922 text-left xl:ml-[8px] xl:text-fs14">
              <span className="text-gray_922 text-fs16 font-opensans text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`Do you have account? `}</>
              </span>
              <span className="text-indigo_500 text-fs16 font-opensans text-left font-bold lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`Sign in`}</>
              </span>
            </Text>
          </Column>
          <Text className="2xl:mt-[125px] 2xl:text-fs35 3xl:mr-[12px] 3xl:mt-[150px] 3xl:text-fs42 font-bold lg:mr-[7px] lg:mt-[97px] lg:text-fs27 mr-[10px] mt-[125.17999px] text-fs35079708099365234 text-gray_922 text-left xl:mr-[8px] xl:mt-[111px] xl:text-fs31">{`Create Account`}</Text>
          <Text className="2xl:mt-[19px] 2xl:text-fs14 3xl:mr-[12px] 3xl:mt-[23px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:mt-[15px] lg:text-fs10 mr-[10px] mt-[19.289993px] opacity-op5 text-fs14031883239746094 text-gray_900_88 text-left w-[86%] xl:mr-[8px] xl:mt-[17px] xl:text-fs12">
            {
              <>
                {`Follow the instructions to make it easier to register and you will be `}
                <br />
                {`able to explore inside.`}
              </>
            }
          </Text>
          <div className="2xl:mt-[28px] 3xl:mr-[12px] 3xl:mt-[34px] bg-transparent border-0 lg:mr-[7px] lg:mt-[22px] mr-[10px] mt-[28.950012px] w-[97%] xl:mr-[8px] xl:mt-[25px] input-wrap">
            <Image
              src="img_vector_16.svg"
              className="absolute top-[30.295px] bottom-[30.994999px] left-[40.340027px] bg-transparent border-0 lg:top-[23px] lg:bottom-[24px] lg:left-[31px] xl:top-[26px] xl:bottom-[27px] xl:left-[35px] 2xl:top-[30px] 2xl:bottom-[31px] 2xl:left-[40px] 3xl:top-[36px] 3xl:bottom-[37px] 3xl:left-[48px]"
              alt="Vector"
            />
            <Input
              className="2xl:pb-[31px] 2xl:pl-[67px] 2xl:pt-[30px] 2xl:text-fs15 3xl:pb-[37px] 3xl:pl-[80px] 3xl:pt-[36px] 3xl:text-fs18 bg-gray_102 border-0 font-semibold lg:pb-[24px] lg:pl-[52px] lg:pt-[23px] lg:text-fs12 pb-[30.994999px] pl-[67.09002699999999px] placeholder:bg-transparent placeholder:text-gray_900_88 pt-[30.295px] rounded-radius877 text-fs15785868644714355 text-gray_900_88 text-left w-[100%] xl:pb-[27px] xl:pl-[59px] xl:pt-[26px] xl:text-fs14"
              name="Group507"
              placeholder={`Username`}
            ></Input>
          </div>
          <div className="2xl:mt-[25px] 3xl:mr-[12px] 3xl:mt-[30px] bg-transparent border-0 lg:mr-[7px] lg:mt-[19px] mr-[10px] mt-[25.429993px] w-[97%] xl:mr-[8px] xl:mt-[22px] input-wrap">
            <Image
              src="img_group_12.svg"
              className="absolute top-[32.045002px] bottom-[32.055px] left-[41.22003px] bg-transparent border-0 lg:left-[32px] lg:inset-y-[24px] xl:left-[36px] xl:inset-y-[28px] 2xl:left-[41px] 2xl:inset-y-[32px] 3xl:left-[49px] 3xl:inset-y-[38px]"
              alt="Group"
            />
            <Input
              className="2xl:pl-[67px] 2xl:py-[32px] 2xl:text-fs15 3xl:pl-[80px] 3xl:py-[38px] 3xl:text-fs18 bg-gray_102 border-0 font-semibold lg:pl-[52px] lg:py-[24px] lg:text-fs12 pb-[32.055px] pl-[67.01003px] placeholder:bg-transparent placeholder:text-gray_900_88 pt-[32.045002px] rounded-radius877 text-fs15785868644714355 text-gray_900_88 text-left w-[100%] xl:pl-[59px] xl:py-[28px] xl:text-fs14"
              name="Group508"
              placeholder={`Email`}
            ></Input>
          </div>
          <Column className="2xl:mt-[25px] 3xl:mt-[30px] items-center lg:mt-[19px] mt-[25.429993px] w-[100%] xl:mt-[22px]">
            <Row className="2xl:mr-[16px] 3xl:mr-[19px] bg-gray_102 font-opensans items-center justify-start lg:mr-[12px] mr-[16.410034px] rounded-radius877 w-[97%] xl:mr-[14px]">
              <Image
                src="img_vector_17.svg"
                className="2xl:h-[19px] 2xl:mb-[32px] 2xl:ml-[42px] 2xl:mt-[25px] 3xl:h-[23px] 3xl:mb-[38px] 3xl:ml-[50px] 3xl:mt-[30px] h-[18.42px] lg:h-[15px] lg:mb-[25px] lg:ml-[32px] lg:mt-[19px] mb-[32.44995px] ml-[42.100037px] mt-[25.430054px] object-contain opacity-op5 w-[3%] xl:h-[17px] xl:mb-[28px] xl:ml-[37px] xl:mt-[22px]"
                alt="Vector"
              />
              <Text className="2xl:ml-[36px] 2xl:mr-[324px] 2xl:my-[27px] 2xl:text-fs15 3xl:ml-[44px] 3xl:mr-[389px] 3xl:my-[32px] 3xl:text-fs18 font-semibold lg:ml-[28px] lg:mr-[252px] lg:my-[21px] lg:text-fs12 mb-[27.199951px] ml-[36.829956px] mr-[324.49px] mt-[27.180054px] opacity-op5 text-fs15785868644714355 text-gray_900_88 text-left xl:ml-[32px] xl:mr-[288px] xl:my-[24px] xl:text-fs14">{`Password`}</Text>
            </Row>
          </Column>
          <Text className="2xl:mt-[27px] 2xl:py-[27px] 2xl:text-fs15 3xl:mr-[12px] 3xl:mt-[32px] 3xl:pl-[42px] 3xl:py-[32px] 3xl:text-fs18 bg-indigo_500 font-semibold leading-lh lg:mr-[7px] lg:mt-[21px] lg:pl-[27px] lg:py-[21px] lg:text-fs12 mr-[10px] mt-[27.180054px] pl-[35px] py-[27.190002px] rounded-radius877 text-fs15785868644714355 text-left text-white_A700 w-[97%] xl:mr-[8px] xl:mt-[24px] xl:pl-[31px] xl:py-[24px] xl:text-fs14">{`Create Account`}</Text>
          <Column className="2xl:mt-[33px] 3xl:mt-[39px] items-center lg:mt-[25px] mt-[33.28003px] w-[100%] xl:mt-[29px]">
            <Row className="2xl:gap-[20px] 2xl:pl-[5px] 2xl:pr-[16px] 3xl:gap-[25px] 3xl:pl-[6px] 3xl:pr-[19px] font-opensans gap-[20.879944px] grid grid-cols-2 items-center justify-between lg:gap-[16px] lg:pl-[4px] lg:pr-[12px] pl-[5.1800537px] pr-[16.330078px] w-[100%] xl:gap-[18px] xl:pl-[4px] xl:pr-[14px]">
              <Row className="border-bw088 border-gray_900_75 border-solid items-center justify-center mb-[1px] rounded-radius877 w-[100%]">
                <Image
                  src="img_image4_2.png"
                  className="2xl:h-[21px] 2xl:mb-[23px] 2xl:ml-[75px] 2xl:mt-[22px] 2xl:w-[20px] 3xl:h-[25px] 3xl:ml-[90px] 3xl:my-[27px] 3xl:w-[24px] h-[20.32px] lg:h-[16px] lg:ml-[58px] lg:my-[17px] lg:w-[15px] mb-[23.090027px] ml-[75.47998px] mt-[22.949951px] object-contain w-[20.32px] xl:h-[19px] xl:ml-[67px] xl:my-[20px] xl:w-[18px]"
                  alt="image4"
                />
                <Text className="2xl:mb-[22px] 2xl:ml-[13px] 2xl:mr-[74px] 2xl:mt-[23px] 2xl:text-fs14 3xl:mb-[27px] 3xl:ml-[15px] 3xl:mr-[89px] 3xl:mt-[28px] 3xl:text-fs16 font-semibold lg:mb-[17px] lg:ml-[10px] lg:mr-[58px] lg:mt-[18px] lg:text-fs10 mb-[22.980042px] ml-[13.01001px] mr-[74.60004px] mt-[23.95996px] text-fs14031883239746094 text-gray_922 text-left tracking-ls1 xl:mb-[20px] xl:ml-[11px] xl:mr-[66px] xl:mt-[21px] xl:text-fs12">{`Google`}</Text>
              </Row>
              <div className="bg-transparent border-bw my-[1px] w-[100%] input-wrap">
                <Image
                  src="img_vector_18.svg"
                  className="absolute top-[20.655px] bottom-[20.855px] left-[62.32007px] border-bw bg-transparent lg:left-[48px] lg:inset-y-[16px] xl:left-[55px] xl:inset-y-[18px] 2xl:left-[62px] 2xl:inset-y-[20px] 3xl:top-[24px] 3xl:bottom-[25px] 3xl:left-[74px]"
                  alt="Vector"
                />
                <Button className="2xl:pl-[99px] 2xl:py-[20px] 2xl:text-fs14 3xl:pb-[25px] 3xl:pl-[119px] 3xl:pt-[24px] 3xl:text-fs16 bg-transparent border-bw088 border-gray_900_75 border-solid font-semibold lg:pl-[77px] lg:py-[16px] lg:text-fs10 pb-[20.855px] pl-[99.58007px] pt-[20.655px] rounded-radius877 text-fs14031883239746094 text-gray_922 text-left tracking-ls1 w-[100%] xl:pl-[88px] xl:py-[18px] xl:text-fs12">{`Facebook`}</Button>
              </div>
            </Row>
          </Column>
        </Column>
      </Row>
    </Column>
  );
};

export default Page5;
