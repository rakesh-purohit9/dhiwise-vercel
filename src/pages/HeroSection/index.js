import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";

const HeroSectionPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Column className="items-center justify-start self-stretch w-[100%]">
          <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
            <Image
              src="img_sosmedia_1.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[192px] 3xl:my-[21px] h-[24px] lg:h-[19px] lg:ml-[124px] lg:my-[14px] ml-[160px] my-[18px] object-contain w-[10%] xl:h-[22px] xl:ml-[142px] xl:my-[16px]"
              alt="sosmedia"
            />
            <Row className="3xl:mb-[19px] 3xl:ml-[469px] 3xl:mt-[20px] justify-center lg:mb-[12px] lg:ml-[304px] lg:mt-[13px] mb-[16px] ml-[391px] mt-[17px] w-[9%] xl:mb-[14px] xl:ml-[347px] xl:mt-[15px]">
              <Image
                src="img_call_3.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[2px] lg:w-[18px] mb-[3px] object-contain w-[24px] xl:h-[22px] xl:mb-[2px] xl:w-[21px]"
                alt="Call"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs21 font-normal lg:ml-[12px] lg:text-fs14 ml-[16px] text-fs18 text-gray_803 text-left xl:ml-[14px] xl:text-fs16">{`+12 345 6789 0`}</Text>
            </Row>
            <Row className="3xl:mb-[19px] 3xl:ml-[38px] 3xl:mt-[20px] justify-center lg:mb-[12px] lg:ml-[24px] lg:mt-[13px] mb-[16px] ml-[32px] mt-[17px] w-[12%] xl:mb-[14px] xl:ml-[28px] xl:mt-[15px]">
              <Image
                src="img_email_1.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[2px] lg:w-[18px] mb-[3px] object-contain w-[24px] xl:h-[22px] xl:mb-[2px] xl:w-[21px]"
                alt="Email"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs21 font-normal lg:ml-[12px] lg:text-fs14 ml-[16px] text-fs18 text-gray_803 text-left xl:ml-[14px] xl:text-fs16">{`support@homie.com`}</Text>
            </Row>
            <Text className="3xl:mb-[13px] 3xl:ml-[631px] 3xl:mt-[20px] 3xl:text-fs21 font-normal lg:mb-[8px] lg:ml-[409px] lg:mt-[13px] lg:text-fs14 mb-[11px] ml-[526px] mt-[17px] text-fs18 text-gray_803 text-left underline xl:mb-[9px] xl:ml-[467px] xl:mt-[15px] xl:text-fs16">{`EN`}</Text>
            <Text className="3xl:mb-[13px] 3xl:ml-[19px] 3xl:mr-[192px] 3xl:mt-[20px] 3xl:text-fs21 font-normal lg:mb-[8px] lg:ml-[12px] lg:mr-[124px] lg:mt-[13px] lg:text-fs14 mb-[11px] ml-[16px] mr-[160px] mt-[17px] opacity-op5 text-fs18 text-gray_800_87 text-left xl:mb-[9px] xl:ml-[14px] xl:mr-[142px] xl:mt-[15px] xl:text-fs16">{`ID`}</Text>
          </Row>
          <Column className="items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] self-stretch w-[100%]">
            <Line className="bg-gray_504 h-[1px] mx-[auto] opacity-op25 w-[83%]" />
            <Row className="3xl:mb-[36px] 3xl:mt-[34px] font-poppins items-center justify-start lg:mb-[23px] lg:mt-[22px] mb-[30px] mt-[29px] self-stretch w-[100%] xl:mb-[26px] xl:mt-[25px]">
              <Text className="3xl:ml-[192px] 3xl:text-fs43 font-poppins font-semibold lg:ml-[124px] lg:my-[2px] lg:text-fs28 ml-[160px] my-[3px] text-fs36 text-left text-red_500 xl:ml-[142px] xl:my-[2px] xl:text-fs32">{`Gevice`}</Text>
              <Image
                src="img_search_6.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[242px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[157px] lg:my-[4px] lg:w-[37px] ml-[202px] my-[6px] object-contain rounded-radius8 w-[48px] xl:h-[43px] xl:ml-[179px] xl:my-[5px] xl:w-[42px]"
                alt="search"
              />
              <Row className="3xl:ml-[38px] 3xl:my-[7px] bg-gray_103 font-poppins items-center justify-center lg:ml-[24px] lg:my-[4px] ml-[32px] my-[6px] rounded-radius8 w-[34%] xl:ml-[28px] xl:my-[5px]">
                <Text className="3xl:mb-[13px] 3xl:ml-[38px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mb-[8px] lg:ml-[24px] lg:mt-[7px] lg:text-fs14 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-fs18 text-gray_500_88 xl:mb-[9px] xl:ml-[28px] xl:mt-[8px] xl:text-fs16">{`Search here`}</Text>
                <Image
                  src="img_search_7.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[551px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[357px] lg:w-[37px] ml-[459px] object-contain rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[48px] xl:h-[43px] xl:ml-[408px] xl:w-[42px]"
                  alt="search"
                />
              </Row>
              <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mb-[16px] 3xl:ml-[163px] 3xl:mt-[14px] h-[34px] lg:h-[27px] lg:mb-[10px] lg:ml-[105px] lg:mt-[9px] mb-[14px] ml-[136px] mt-[12px] w-[2%] xl:h-[31px] xl:mb-[12px] xl:ml-[120px] xl:mt-[10px]">
                <Image
                  src="img_shoppingbag.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] absolute bottom-[0] h-[32px] left-[0] lg:h-[25px] lg:w-[24px] object-contain w-[32px] xl:h-[29px] xl:w-[28px]"
                  alt="ShoppingBag"
                />
                <div className="2xl:h-[11px] 3xl:h-[13px] 3xl:w-[12px] absolute bg-red_500 h-[10px] lg:h-[8px] lg:w-[7px] right-[0] rounded-radius50 top-[0] w-[10px] xl:h-[9px] xl:w-[8px]"></div>
              </Stack>
              <Image
                src="img_email_2.svg"
                className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[32px] 3xl:my-[16px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[21px] lg:my-[10px] lg:w-[24px] ml-[27px] my-[14px] object-contain w-[32px] xl:h-[29px] xl:ml-[24px] xl:my-[12px] xl:w-[28px]"
                alt="Email"
              />
              <Button className="3xl:ml-[70px] 3xl:px-[9px] 3xl:py-[22px] 3xl:text-fs21 bg-transparent border-bw font-normal font-nunitosans lg:ml-[45px] lg:my-[1px] lg:px-[6px] lg:py-[14px] lg:text-fs14 ml-[59px] my-[2px] px-[8px] py-[19px] rounded-radius16 text-center text-fs18 text-red_500 underline w-[4%] xl:ml-[52px] xl:my-[1px] xl:px-[7px] xl:py-[16px] xl:text-fs16">{`Sign In`}</Button>
              <Button className="2xl:py-[18px] 3xl:ml-[38px] 3xl:mr-[192px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-red_500 border-bw font-normal font-poppins lg:ml-[24px] lg:mr-[124px] lg:px-[27px] lg:py-[14px] lg:text-fs14 ml-[32px] mr-[160px] px-[35px] py-[18.045px] rounded-radius8 text-center text-fs18 text-white_A700 w-[8%] xl:ml-[28px] xl:mr-[142px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Sign Up`}</Button>
            </Row>
          </Column>
          <Row className="font-poppins items-center justify-center mx-[auto] w-[65%]">
            <Text className="3xl:text-fs21 font-normal font-poppins lg:text-fs14 text-fs18 text-gray_803 text-left xl:text-fs16">{`Popular Search`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-poppins lg:ml-[37px] lg:text-fs14 ml-[48px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Computer Set`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-poppins lg:ml-[37px] lg:text-fs14 ml-[48px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Laptops & Tablets`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-poppins lg:ml-[37px] lg:text-fs14 ml-[48px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Phone & Accessories`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-nunitosans lg:ml-[37px] lg:text-fs14 ml-[48px] my-[1px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Printer`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-nunitosans lg:ml-[37px] lg:text-fs14 ml-[48px] my-[1px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Video, Audio, TV`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs21 font-normal font-nunitosans lg:ml-[37px] lg:text-fs14 ml-[48px] my-[1px] text-fs18 text-gray_803 text-left xl:ml-[42px] xl:text-fs16">{`Home Appliance`}</Text>
          </Row>
        </Column>
      </div>
      <Stack className="2xl:h-[481px] 3xl:h-[577px] 3xl:mt-[57px] h-[480px] lg:h-[374px] lg:mt-[37px] mt-[48px] mx-[auto] w-[86%] xl:h-[427px] xl:mt-[42px]">
        <Stack className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-[0] lg:h-[374px] self-stretch w-[100%] xl:h-[427px]">
          <Image
            src="img_image.svg"
            className="2xl:h-[481px] 3xl:h-[577px] 3xl:left-[26px] 3xl:right-[28px] absolute h-[480px] inset-y-[0] left-[22px] lg:h-[374px] lg:left-[17px] lg:right-[18px] object-contain right-[24px] w-[97%] xl:h-[427px] xl:left-[19px] xl:right-[21px]"
            alt="image"
          />
          <Image
            src="img_arrow_8.svg"
            className="2xl:h-[49px] 3xl:h-[58px] 3xl:w-[57px] absolute h-[48px] inset-y-[0] lg:h-[38px] lg:w-[37px] my-[auto] object-contain right-[0] rounded-radius8 w-[48px] xl:h-[43px] xl:w-[42px]"
            alt="arrow"
          />
          <Image
            src="img_arrow_9.svg"
            className="2xl:h-[49px] 3xl:h-[58px] 3xl:w-[57px] absolute h-[48px] inset-y-[0] left-[0] lg:h-[38px] lg:w-[37px] my-[auto] object-contain rounded-radius8 w-[48px] xl:h-[43px] xl:w-[42px]"
            alt="arrow"
          />
        </Stack>
        <Column className="3xl:left-[151px] absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[126px] lg:left-[98px] my-[auto] w-[46%] xl:left-[112px]">
          <Text className="2xl:leading-lh80 3xl:leading-lh96 3xl:mr-[12px] 3xl:text-fs76 font-bold leading-lh8000 lg:leading-lh62 lg:mr-[7px] lg:text-fs49 mr-[10px] text-fs64 text-gray_803 text-left w-[89%] xl:leading-lh71 xl:mr-[8px] xl:text-fs56">{`Technology for your convenience`}</Text>
          <Text className="2xl:leading-lh40 3xl:leading-lh48 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs28 font-normal leading-lh4000 lg:leading-lh31 lg:mr-[7px] lg:mt-[12px] lg:text-fs18 mr-[10px] mt-[16px] text-fs24 text-gray_504 text-left w-[71%] xl:leading-lh35 xl:mr-[8px] xl:mt-[14px] xl:text-fs21">{`For your job, study or housework, everything you need is here`}</Text>
          <Button className="2xl:px-[29px] 2xl:py-[18px] 3xl:mr-[12px] 3xl:mt-[57px] 3xl:px-[35px] 3xl:py-[21px] 3xl:text-fs21 bg-red_500 border-bw font-normal lg:mr-[7px] lg:mt-[37px] lg:px-[22px] lg:py-[14px] lg:text-fs14 mr-[10px] mt-[48px] px-[29.5px] py-[18.045px] rounded-radius8 text-center text-fs18 text-white_A700 w-[20%] xl:mr-[8px] xl:mt-[42px] xl:px-[26px] xl:py-[16px] xl:text-fs16">{`Shop Now`}</Button>
          <Column className="3xl:mt-[10px] items-end lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]"></Column>
        </Column>
      </Stack>
      <div className="3xl:mb-[68px] 3xl:mt-[57px] lg:mb-[44px] lg:mt-[37px] mb-[57px] mt-[48px] mx-[auto] w-[83%] xl:mb-[50px] xl:mt-[42px]">
        <Row className="3xl:gap-[38px] gap-[32px] grid grid-cols-3 items-center justify-evenly lg:gap-[24px] self-stretch w-[100%] xl:gap-[28px]">
          <Row className="bg-white_A700 items-center justify-evenly px-[0] rounded-radius16 shadow-bs8 w-[100%]">
            <Image
              src="img_image_1.svg"
              className="2xl:h-[161px] 3xl:h-[193px] 3xl:my-[48px] 3xl:w-[192px] h-[160px] lg:h-[125px] lg:my-[31px] lg:w-[124px] my-[40px] object-contain w-[160px] xl:h-[143px] xl:my-[35px] xl:w-[142px]"
              alt="image"
            />
            <Column className="3xl:my-[46px] justify-start lg:my-[30px] my-[39px] w-[55%] xl:my-[34px]">
              <Column className="3xl:mr-[12px] font-poppins justify-start lg:mr-[7px] mr-[10px] w-[67%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-normal lg:text-fs18 self-stretch text-fs24 text-gray_803 text-left xl:text-fs21">{`Gaming Laptop`}</Text>
                <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs32 text-left text-red_500 xl:mr-[8px] xl:text-fs28">{`$1000.00`}</Text>
              </Column>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                  <Row className="3xl:my-[10px] items-center justify-evenly lg:my-[7px] my-[9px] px-[0] w-[34%] xl:my-[8px]">
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`-`}</Text>
                    <Button className="2xl:px-[12px] 2xl:py-[4px] 3xl:px-[15px] 3xl:py-[4px] 3xl:text-fs21 bg-transparent border border-gray_500_7f border-solid font-medium lg:px-[9px] lg:py-[3px] lg:text-fs14 px-[12.5px] py-[4.045px] text-center text-fs18 text-gray_803 w-[33%] xl:px-[11px] xl:py-[3px] xl:text-fs16">{`1`}</Button>
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`+`}</Text>
                  </Row>
                  <Button className="2xl:py-[13px] 3xl:px-[33px] 3xl:py-[15px] 3xl:text-fs21 bg-red_500 border-bw font-normal lg:px-[21px] lg:py-[10px] lg:text-fs14 px-[28px] py-[13.045px] rounded-radius8 text-center text-fs18 text-white_A700 w-[57%] xl:px-[24px] xl:py-[11px] xl:text-fs16">{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="bg-white_A700 items-center justify-center rounded-radius16 shadow-bs8 w-[100%]">
            <Image
              src="img_image_2.svg"
              className="2xl:h-[161px] 3xl:h-[193px] 3xl:ml-[28px] 3xl:my-[48px] 3xl:w-[192px] h-[160px] lg:h-[125px] lg:ml-[18px] lg:my-[31px] lg:w-[124px] ml-[24px] my-[40px] object-contain w-[160px] xl:h-[143px] xl:ml-[21px] xl:my-[35px] xl:w-[142px]"
              alt="image"
            />
            <Column className="3xl:mx-[28px] 3xl:my-[46px] justify-start lg:mx-[18px] lg:my-[30px] mx-[24px] my-[39px] w-[55%] xl:mx-[21px] xl:my-[34px]">
              <Column className="3xl:mr-[12px] font-poppins justify-start lg:mr-[7px] mr-[10px] w-[74%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-normal lg:text-fs18 self-stretch text-fs24 text-gray_803 text-left xl:text-fs21">{`Wireless Headset`}</Text>
                <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs32 text-left text-red_500 xl:mr-[8px] xl:text-fs28">{`$175.00`}</Text>
              </Column>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                  <Row className="3xl:my-[10px] items-center justify-evenly lg:my-[7px] my-[9px] px-[0] w-[34%] xl:my-[8px]">
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`-`}</Text>
                    <Button className="2xl:px-[12px] 2xl:py-[4px] 3xl:px-[15px] 3xl:py-[4px] 3xl:text-fs21 bg-transparent border border-gray_500_7f border-solid font-medium lg:px-[9px] lg:py-[3px] lg:text-fs14 px-[12.5px] py-[4.045px] text-center text-fs18 text-gray_803 w-[33%] xl:px-[11px] xl:py-[3px] xl:text-fs16">{`1`}</Button>
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`+`}</Text>
                  </Row>
                  <Button className="2xl:py-[13px] 3xl:px-[33px] 3xl:py-[15px] 3xl:text-fs21 bg-red_500 border-bw font-normal lg:px-[21px] lg:py-[10px] lg:text-fs14 px-[28px] py-[13.045px] rounded-radius8 text-center text-fs18 text-white_A700 w-[57%] xl:px-[24px] xl:py-[11px] xl:text-fs16">{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="bg-white_A700 items-center justify-evenly px-[0] rounded-radius16 shadow-bs8 w-[100%]">
            <Image
              src="img_image_3.svg"
              className="2xl:h-[161px] 3xl:h-[193px] 3xl:my-[48px] 3xl:w-[192px] h-[160px] lg:h-[125px] lg:my-[31px] lg:w-[124px] my-[40px] object-contain w-[160px] xl:h-[143px] xl:my-[35px] xl:w-[142px]"
              alt="image"
            />
            <Column className="3xl:my-[46px] justify-start lg:my-[30px] my-[39px] w-[55%] xl:my-[34px]">
              <Column className="3xl:mr-[12px] font-poppins justify-start lg:mr-[7px] mr-[10px] w-[57%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-normal lg:text-fs18 self-stretch text-fs24 text-gray_803 text-left xl:text-fs21">{`Mobile Phone`}</Text>
                <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs32 text-left text-red_500 xl:mr-[8px] xl:text-fs28">{`$500.00`}</Text>
              </Column>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                  <Row className="3xl:my-[10px] items-center justify-evenly lg:my-[7px] my-[9px] px-[0] w-[34%] xl:my-[8px]">
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`-`}</Text>
                    <Button className="2xl:px-[12px] 2xl:py-[4px] 3xl:px-[15px] 3xl:py-[4px] 3xl:text-fs21 bg-transparent border border-gray_500_7f border-solid font-medium lg:px-[9px] lg:py-[3px] lg:text-fs14 px-[12.5px] py-[4.045px] text-center text-fs18 text-gray_803 w-[33%] xl:px-[11px] xl:py-[3px] xl:text-fs16">{`1`}</Button>
                    <Text className="2xl:my-[2px] 3xl:my-[3px] 3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2.5px] text-fs18 text-gray_803 text-left xl:my-[2px] xl:text-fs16">{`+`}</Text>
                  </Row>
                  <Button className="2xl:py-[13px] 3xl:px-[33px] 3xl:py-[15px] 3xl:text-fs21 bg-red_500 border-bw font-normal lg:px-[21px] lg:py-[10px] lg:text-fs14 px-[28px] py-[13.045px] rounded-radius8 text-center text-fs18 text-white_A700 w-[57%] xl:px-[24px] xl:py-[11px] xl:text-fs16">{`Add to Cart`}</Button>
                </Row>
              </Column>
            </Column>
          </Row>
        </Row>
      </div>
    </Column>
  );
};

export default HeroSectionPage;
