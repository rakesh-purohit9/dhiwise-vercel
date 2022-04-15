import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";

const FAQPage = () => {
  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center self-stretch w-[100%]">
        <Column className="bg-blue_50 font-montserrat items-center justify-start self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="font-inter justify-end self-stretch w-[100%]">
              <Row className="3xl:mb-[38px] 3xl:ml-[124px] 3xl:mt-[48px] items-center justify-start lg:mb-[24px] lg:ml-[80px] lg:mt-[31px] mb-[32px] ml-[104px] mt-[40px] w-[53%] xl:mb-[28px] xl:ml-[92px] xl:mt-[35px]">
                <Image
                  src="img_logo_4.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] h-[32px] lg:h-[25px] object-contain w-[21%] xl:h-[29px]"
                  alt="Logo"
                />
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Covid`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Statistic`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`About`}</Text>
                <Row className="3xl:ml-[48px] items-center justify-center lg:ml-[31px] ml-[40px] w-[10%] xl:ml-[35px]">
                  <Text className="3xl:text-fs19 capitalize font-bold lg:text-fs12 text-bluegray_902 text-fs16 text-left xl:text-fs14">{`Pages`}</Text>
                  <Image
                    src="img_arrowchevrond.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[3px] lg:my-[3px] lg:w-[18px] ml-[4px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:ml-[3px] xl:my-[3px] xl:w-[21px]"
                    alt="ArrowChevronD"
                  />
                </Row>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Contact Us`}</Text>
              </Row>
              <Button className="3xl:mb-[28px] 3xl:ml-[189px] 3xl:mt-[38px] 3xl:px-[38px] 3xl:py-[19px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold lg:mb-[18px] lg:ml-[122px] lg:mt-[24px] lg:px-[24px] lg:py-[12px] lg:text-fs12 mb-[24px] ml-[158px] mt-[32px] px-[32px] py-[16px] rounded-radius8 text-center text-fs16 text-white_A700 w-[11%] xl:mb-[21px] xl:ml-[140px] xl:mt-[28px] xl:px-[28px] xl:py-[14px] xl:text-fs14">{`Help Center`}</Button>
              <Image
                src="img_call_2.svg"
                className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[45px] 3xl:ml-[19px] 3xl:mt-[60px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[29px] lg:ml-[12px] lg:mt-[38px] lg:w-[12px] mb-[38px] ml-[16px] mt-[50px] object-contain w-[16px] xl:h-[15px] xl:mb-[33px] xl:ml-[14px] xl:mt-[44px] xl:w-[14px]"
                alt="Call"
              />
              <Text className="3xl:mb-[36px] 3xl:ml-[9px] 3xl:mr-[122px] 3xl:mt-[50px] 3xl:text-fs19 font-medium lg:mb-[23px] lg:ml-[6px] lg:mr-[79px] lg:mt-[32px] lg:text-fs12 mb-[30px] ml-[8px] mr-[102px] mt-[42px] text-fs16 text-left text-orange_A700 xl:mb-[26px] xl:ml-[7px] xl:mr-[90px] xl:mt-[37px] xl:text-fs14">{`+1234 5678 90`}</Text>
            </Row>
          </div>
          <Text className="3xl:mt-[115px] 3xl:text-fs76 capitalize font-bold lg:mt-[74px] lg:text-fs49 mt-[96px] mx-[auto] text-bluegray_902 text-fs64 text-left xl:mt-[85px] xl:text-fs56">{`Frequently Asked Questions`}</Text>
          <Row className="3xl:mb-[105px] 3xl:mt-[19px] font-inter items-center justify-center lg:mb-[68px] lg:mt-[12px] mb-[88px] mt-[16px] mx-[auto] w-[7%] xl:mb-[78px] xl:mt-[14px]">
            <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Home`}</Text>
            <Image
              src="img_arrowchevronr.svg"
              className="2xl:h-[17px] 3xl:h-[20px] 3xl:my-[9px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[3px] lg:my-[6px] lg:w-[12px] ml-[4px] my-[8px] object-contain w-[16px] xl:h-[15px] xl:ml-[3px] xl:my-[7px] xl:w-[14px]"
              alt="ArrowChevronR"
            />
            <Text className="3xl:text-fs19 capitalize font-bold lg:ml-[3px] lg:text-fs12 ml-[4px] text-bluegray_902 text-center text-fs16 xl:ml-[3px] xl:text-fs14">{`FAQ`}</Text>
          </Row>
        </Column>
      </Column>
      <Column className="3xl:mt-[115px] font-inter items-end lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
        <div className="3xl:mx-[124px] bg-transparent border-bw lg:mx-[80px] mx-[104px] w-[64%] xl:mx-[92px] input-wrap">
          <Image
            src="img_ui_search.svg"
            className="absolute right-[24px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[18px] xl:right-[21px] xl:inset-y-[21px] 3xl:right-[28px] 3xl:inset-y-[28px] inset-y-[24px]"
            alt="UI / Search"
          />
          <Button className="3xl:pl-[19px] 3xl:pr-[79px] 3xl:py-[28px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-medium lg:pl-[12px] lg:pr-[51px] lg:py-[18px] lg:text-fs12 pl-[16px] pr-[66px] py-[24px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[58px] xl:py-[21px] xl:text-fs14">{`Search`}</Button>
        </div>
      </Column>
      <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
        <Row className="justify-start self-stretch w-[100%]">
          <Column className="3xl:mb-[252px] 3xl:ml-[124px] font-montserrat justify-start lg:mb-[163px] lg:ml-[80px] mb-[210px] ml-[104px] w-[15%] xl:mb-[186px] xl:ml-[92px]">
            <Text className="3xl:text-fs28 capitalize font-bold lg:text-fs18 self-stretch text-bluegray_902 text-fs24 text-left xl:text-fs21">{`Table of content`}</Text>
            <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-montserrat justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[69%] xl:mr-[8px] xl:mt-[28px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 capitalize font-semibold lg:mr-[7px] lg:text-fs18 mr-[10px] text-bluegray_401 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`Covid-19`}</Text>
              <Text className="3xl:mt-[48px] 3xl:text-fs28 capitalize font-semibold lg:mt-[31px] lg:text-fs18 mt-[40px] self-stretch text-bluegray_401 text-fs24 text-left xl:mt-[35px] xl:text-fs21">{`Preventions`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 capitalize font-semibold lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-bluegray_401 text-fs24 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs21">{`Symtomps`}</Text>
              <Text className="3xl:mr-[6px] 3xl:mt-[48px] 3xl:text-fs28 capitalize font-semibold lg:mr-[3px] lg:mt-[31px] lg:text-fs18 mr-[5px] mt-[40px] text-bluegray_401 text-fs24 text-left xl:mr-[4px] xl:mt-[35px] xl:text-fs21">{`Treatments`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 capitalize font-bold lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-fs24 text-left text-orange_A700 xl:mr-[8px] xl:mt-[35px] xl:text-fs21">{`Vaccine`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 capitalize font-semibold lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-bluegray_401 text-fs24 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs21">{`Donation`}</Text>
            </Column>
          </Column>
          <Column className="3xl:ml-[115px] 3xl:mr-[124px] font-montserrat justify-start lg:ml-[74px] lg:mr-[80px] lg:mt-[1px] ml-[96px] mr-[104px] mt-[2px] w-[64%] xl:ml-[85px] xl:mr-[92px] xl:mt-[1px]">
            <Column className="items-center self-stretch w-[100%]">
              <Column className="font-inter justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-montserrat items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs28 capitalize font-semibold lg:text-fs18 text-bluegray_902 text-fs24 text-left xl:text-fs21">{`1. What is Covid-19 Vaccine?`}</Text>
                    <Image
                      src="img_uiminus.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[8px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[5px] lg:w-[18px] my-[7px] object-contain w-[24px] xl:h-[22px] xl:my-[6px] xl:w-[21px]"
                      alt="UIMinus"
                    />
                  </Row>
                </Column>
                <Input
                  className="2xl:pb-[30px] 2xl:pt-[5px] 3xl:mt-[19px] 3xl:pb-[36px] 3xl:pt-[6px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid font-normal lg:mt-[12px] lg:pb-[23px] lg:pt-[4px] lg:text-fs12 mt-[16px] pb-[30.5px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_401 pt-[5.5px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:mt-[14px] xl:pb-[27px] xl:pt-[4px] xl:text-fs14"
                  name="Group151"
                  placeholder={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`}
                ></Input>
              </Column>
            </Column>
            <div className="3xl:mt-[38px] bg-transparent border-0 lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px] input-wrap">
              <Image
                src="img_ui_plus.svg"
                className="absolute top-[7px] bottom-[23px] right-[0] bg-transparent border-0 lg:top-[5px] lg:bottom-[17px] xl:top-[6px] xl:bottom-[20px] 3xl:top-[8px] 3xl:bottom-[27px]"
                alt="UI / Plus"
              />
              <Input
                className="3xl:pb-[27px] 3xl:pr-[40px] 3xl:pt-[8px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid capitalize font-semibold lg:pb-[17px] lg:pr-[26px] lg:pt-[5px] lg:text-fs18 pb-[23px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_902 pr-[34px] pt-[7px] text-bluegray_902 text-fs24 text-left w-[100%] xl:pb-[20px] xl:pr-[30px] xl:pt-[6px] xl:text-fs21"
                name="FAQ2"
                placeholder={`2. Are they safe??`}
              ></Input>
            </div>
            <div className="3xl:mt-[38px] bg-transparent border-0 lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px] input-wrap">
              <Image
                src="img_ui_plus.svg"
                className="absolute top-[7px] bottom-[23px] right-[0] bg-transparent border-0 lg:top-[5px] lg:bottom-[17px] xl:top-[6px] xl:bottom-[20px] 3xl:top-[8px] 3xl:bottom-[27px]"
                alt="UI / Plus"
              />
              <Input
                className="3xl:pb-[27px] 3xl:pr-[40px] 3xl:pt-[8px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid capitalize font-semibold lg:pb-[17px] lg:pr-[26px] lg:pt-[5px] lg:text-fs18 pb-[23px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_902 pr-[34px] pt-[7px] text-bluegray_902 text-fs24 text-left w-[100%] xl:pb-[20px] xl:pr-[30px] xl:pt-[6px] xl:text-fs21"
                name="FAQ3"
                placeholder={`3. How do I find a vaccine?`}
              ></Input>
            </div>
            <div className="3xl:mt-[38px] bg-transparent border-0 lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px] input-wrap">
              <Image
                src="img_ui_plus.svg"
                className="absolute top-[7px] bottom-[24px] right-[0] bg-transparent border-0 lg:top-[5px] lg:bottom-[18px] xl:top-[6px] xl:bottom-[21px] 3xl:top-[8px] 3xl:bottom-[28px]"
                alt="UI / Plus"
              />
              <Input
                className="3xl:pb-[28px] 3xl:pr-[40px] 3xl:pt-[8px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid capitalize font-semibold lg:pb-[18px] lg:pr-[26px] lg:pt-[5px] lg:text-fs18 pb-[24px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_902 pr-[34px] pt-[7px] text-bluegray_902 text-fs24 text-left w-[100%] xl:pb-[21px] xl:pr-[30px] xl:pt-[6px] xl:text-fs21"
                name="Group152"
                placeholder={`4. How much vaccine cost?`}
              ></Input>
            </div>
            <div className="3xl:mt-[37px] bg-transparent border-0 lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px] input-wrap">
              <Image
                src="img_ui_plus.svg"
                className="absolute top-[7px] bottom-[23px] right-[0] bg-transparent border-0 lg:top-[5px] lg:bottom-[17px] xl:top-[6px] xl:bottom-[20px] 3xl:top-[8px] 3xl:bottom-[27px]"
                alt="UI / Plus"
              />
              <Input
                className="3xl:pb-[27px] 3xl:pr-[40px] 3xl:pt-[8px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid capitalize font-semibold lg:pb-[17px] lg:pr-[26px] lg:pt-[5px] lg:text-fs18 pb-[23px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_902 pr-[34px] pt-[7px] text-bluegray_902 text-fs24 text-left w-[100%] xl:pb-[20px] xl:pr-[30px] xl:pt-[6px] xl:text-fs21"
                name="FAQ5"
                placeholder={`5. What are possible side effects?`}
              ></Input>
            </div>
            <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Column className="font-inter justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-montserrat justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs28 capitalize font-semibold lg:text-fs18 text-bluegray_902 text-fs24 text-left xl:text-fs21">{`6. Should I get vaccinated if I’ve had Covid-19?`}</Text>
                    <Image
                      src="img_ui_plus.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[12px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[7px] lg:mt-[3px] lg:w-[18px] mb-[10px] mt-[4px] object-contain w-[24px] xl:h-[22px] xl:mb-[8px] xl:mt-[3px] xl:w-[21px]"
                      alt="UIPlus"
                    />
                  </Row>
                </Column>
                <Input
                  className="2xl:pb-[30px] 2xl:pt-[5px] 3xl:mt-[19px] 3xl:pb-[36px] 3xl:pt-[6px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-gray_302 border-solid font-normal lg:mt-[12px] lg:pb-[23px] lg:pt-[4px] lg:text-fs12 mt-[16px] pb-[30.5px] pl-[0] placeholder:bg-transparent placeholder:text-bluegray_401 pt-[5.5px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:mt-[14px] xl:pb-[27px] xl:pt-[4px] xl:text-fs14"
                  name="Group153"
                  placeholder={`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}
                ></Input>
              </Column>
            </Column>
          </Column>
        </Row>
        <div className="3xl:mt-[192px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="justify-evenly px-[0] self-stretch w-[100%]">
              <Column className="3xl:mb-[94px] font-inter justify-start lg:mb-[61px] mb-[79px] w-[21%] xl:mb-[70px]">
                <Image
                  src="img_logo_5.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] object-contain w-[54%] xl:h-[29px] xl:mr-[8px]"
                  alt="Logo"
                />
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[19px] 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs14">{`A company engaged in travel that will make it easier for you when you want to vacation`}</Text>
              </Column>
              <Column className="3xl:mb-[19px] font-inter justify-start lg:mb-[12px] mb-[16px] w-[5%] xl:mb-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Links`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Home`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Covid`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Statistic`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left xl:mt-[14px] xl:text-fs12">{`Contact Us`}</Text>
              </Column>
              <Column className="3xl:mb-[19px] font-inter justify-start lg:mb-[12px] mb-[16px] w-[5%] xl:mb-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`About`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Partners`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Careers`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Press`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left xl:mt-[14px] xl:text-fs12">{`Community`}</Text>
              </Column>
              <Column className="font-inter justify-start w-[22%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Our Office`}</Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left w-[100%] xl:leading-lh21 xl:mt-[14px] xl:text-fs12">
                  {
                    <>
                      {`Indonesia`}
                      <br />
                      {`Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left w-[100%] xl:leading-lh21 xl:mt-[14px] xl:text-fs12">
                  {
                    <>
                      {`Singapore`}
                      <br />
                      {`35 Mandalay Road 13–37 Mandalay Towers Singapore 308215`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[84px] bg-cyan_400 font-inter items-center justify-evenly lg:mt-[54px] mt-[70px] px-[0] self-stretch w-[100%] xl:mt-[62px]">
              <Text className="3xl:my-[19px] 3xl:text-fs16 font-medium lg:my-[12px] lg:text-fs10 my-[16px] text-fs14 text-left text-white_A700 xl:my-[14px] xl:text-fs12">{`@2020 TanahAir Studio. All rights reserved.`}</Text>
              <Row className="3xl:gap-[19px] 3xl:my-[19px] 3xl:pr-[124px] gap-[16px] grid grid-cols-3 items-center justify-center lg:gap-[12px] lg:my-[12px] lg:pr-[80px] my-[16px] pr-[104px] w-[14%] xl:gap-[14px] xl:my-[14px] xl:pr-[92px]">
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:ml-[6px] 3xl:text-fs14 font-bold lg:mx-[3px] lg:text-fs9 ml-[5px] mr-[4px] text-fs12 text-left text-white_A700 xl:ml-[4px] xl:mr-[3px] xl:text-fs10">{`FB`}</Text>
                </Column>
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:ml-[6px] 3xl:mr-[7px] 3xl:text-fs14 font-bold lg:ml-[3px] lg:mr-[4px] lg:text-fs9 ml-[5px] mr-[6px] text-fs12 text-left text-white_A700 xl:ml-[4px] xl:mr-[5px] xl:text-fs10">{`IG`}</Text>
                </Column>
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:text-fs14 font-bold lg:mx-[2px] lg:text-fs9 mx-[3px] text-fs12 text-left text-white_A700 xl:mx-[2px] xl:text-fs10">{`YT`}</Text>
                </Column>
              </Row>
            </Row>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default FAQPage;
