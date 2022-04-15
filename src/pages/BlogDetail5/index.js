import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Slider } from "components/Slider";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";
import { Stack } from "components/Stack";

const BlogDetail5Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-end self-stretch w-[100%]">
        <Column className="font-firasans items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="bg-white_A700 font-firasans items-center justify-center self-stretch w-[100%]">
              <Row className="3xl:mb-[28px] 3xl:ml-[450px] 3xl:mt-[30px] items-center justify-center lg:mb-[18px] lg:ml-[291px] lg:mt-[19px] mb-[24px] ml-[375px] mt-[25px] w-[21%] xl:mb-[21px] xl:ml-[333px] xl:mt-[22px]">
                <Row className="items-center justify-between px-[0] w-[68%]">
                  <Image
                    src="img_oceanengine.svg"
                    className="2xl:h-[61px] 2xl:my-[10px] 3xl:h-[73px] 3xl:my-[12px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:my-[8px] lg:w-[46px] my-[10.5px] object-contain w-[60px] xl:h-[54px] xl:my-[9px] xl:w-[53px]"
                    alt="oceanengine"
                  />
                  <Column className="font-firasans justify-center w-[72%]">
                    <Text className="2xl:text-fs28 3xl:mt-[12px] 3xl:mx-[12px] 3xl:text-fs34 font-bold font-firasans lg:mt-[7px] lg:mx-[7px] lg:text-fs22 mt-[10px] mx-[10px] text-bluegray_904 text-fs28399999618530273 text-left uppercase xl:mt-[8px] xl:mx-[8px] xl:text-fs25">{`IT DEVeloper`}</Text>
                    <Text className="3xl:mb-[12px] 3xl:mx-[12px] 3xl:text-fs19 font-opensans font-semibold lg:mb-[7px] lg:mx-[7px] lg:text-fs12 mb-[10px] mx-[10px] text-bluegray_904 text-fs16 text-left xl:mb-[8px] xl:mx-[8px] xl:text-fs14">{`Your Best Partner`}</Text>
                  </Column>
                </Row>
                <Line className="2xl:h-[61px] 2xl:my-[10px] 3xl:h-[73px] 3xl:ml-[19px] 3xl:my-[12px] bg-bluegray_904 h-[60px] lg:h-[47px] lg:ml-[12px] lg:my-[8px] ml-[16px] my-[10.5px] w-[1px] xl:h-[54px] xl:ml-[14px] xl:my-[9px]" />
                <Column className="2xl:my-[14px] 3xl:ml-[18px] 3xl:my-[17px] font-firasans justify-start lg:ml-[11px] lg:my-[11px] ml-[15px] my-[14.5px] w-[24%] xl:ml-[13px] xl:my-[12px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_904 text-center text-fs16 xl:mr-[8px] xl:text-fs14">{`Call Now`}</Text>
                  <Column className="3xl:mt-[7px] font-roboto items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-bluegray_904 text-center text-fs16 xl:text-fs14">{`+62 899 7789`}</Text>
                  </Column>
                </Column>
              </Row>
              <Text className="2xl:ml-[254px] 3xl:mb-[61px] 3xl:ml-[305px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-bold lg:mb-[39px] lg:ml-[198px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[254.75px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[226px] xl:mt-[46px] xl:text-fs14">{`Home`}</Text>
              <Row className="3xl:mb-[22px] 3xl:ml-[33px] 3xl:mt-[24px] items-center justify-center lg:mb-[14px] lg:ml-[21px] lg:mt-[15px] mb-[19px] ml-[28px] mt-[20px] w-[11%] xl:mb-[16px] xl:ml-[24px] xl:mt-[17px]">
                <Text className="3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:my-[24px] lg:text-fs12 my-[32px] text-bluegray_904 text-center text-fs16 xl:my-[28px] xl:text-fs14">{`About`}</Text>
                <Row className="3xl:ml-[26px] items-center justify-center lg:ml-[17px] ml-[22px] w-[40%] xl:ml-[19px]">
                  <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Project`}</Text>
                  <Image
                    src="img_chevrondown_15.svg"
                    className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[16%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
                    alt="chevrondown"
                  />
                </Row>
                <Text className="2xl:ml-[22px] 3xl:ml-[26px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[17px] lg:my-[24px] lg:text-fs12 ml-[22.01001px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[19px] xl:my-[28px] xl:text-fs14">{`Price`}</Text>
              </Row>
              <Text className="3xl:mb-[61px] 3xl:ml-[33px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-normal lg:mb-[39px] lg:ml-[21px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[28px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[24px] xl:mt-[46px] xl:text-fs14">{`Team`}</Text>
              <Text className="3xl:mb-[61px] 3xl:ml-[33px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-normal lg:mb-[39px] lg:ml-[21px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[28px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[24px] xl:mt-[46px] xl:text-fs14">{`Contact`}</Text>
              <Row className="3xl:mb-[22px] 3xl:ml-[26px] 3xl:mr-[450px] 3xl:mt-[24px] font-firasans items-center justify-center lg:mb-[14px] lg:ml-[17px] lg:mr-[291px] lg:mt-[15px] mb-[19px] ml-[22px] mr-[375px] mt-[20px] w-[3%] xl:mb-[16px] xl:ml-[19px] xl:mr-[333px] xl:mt-[17px]">
                <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Blog`}</Text>
                <Image
                  src="img_chevrondown_16.svg"
                  className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[21%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
                  alt="chevrondown"
                />
              </Row>
            </Row>
          </div>
          <Text className="2xl:text-fs50 3xl:mt-[231px] 3xl:text-fs60 capitalize font-bold font-firasans leading-lh lg:mt-[150px] lg:text-fs39 mt-[193px] mx-[auto] text-bluegray_904 text-fs5052069854736328 text-left w-[40%] xl:mt-[171px] xl:text-fs44">{`One of your best product become more stand out`}</Text>
          <Text className="3xl:mt-[52px] 3xl:text-fs19 font-normal font-opensans lg:mt-[34px] lg:text-fs12 mt-[44px] mx-[auto] text-fs16 text-gray_703 text-left w-[40%] xl:mt-[39px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-opensans lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_703 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Row className="3xl:mt-[78px] font-firasans items-center justify-center lg:mt-[50px] mt-[65px] mx-[auto] w-[38%] xl:mt-[57px]">
            <Line className="2xl:h-[97px] 3xl:h-[116px] bg-deep_orange_800 h-[96px] lg:h-[75px] w-[7px] xl:h-[86px]" />
            <Text className="2xl:text-fs21 3xl:ml-[66px] 3xl:text-fs25 capitalize font-bold lg:ml-[42px] lg:text-fs16 ml-[55px] text-bluegray_904 text-fs21327999114990234 text-left w-[92%] xl:ml-[48px] xl:text-fs18">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor exercitation incididunt aliquip. Nulla Lorem mollit cupidatat.`}</Text>
          </Row>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-opensans lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_703 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <div className="2xl:h-[631px] 3xl:h-[757px] 3xl:mt-[78px] bg-gray_400 h-[630px] lg:h-[490px] lg:mt-[50px] mt-[65px] mx-[auto] rounded-radius2 w-[51%] xl:h-[561px] xl:mt-[57px]"></div>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-opensans lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_703 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-opensans lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_703 text-left tracking-ls1 xl:mt-[57px] xl:text-fs14">{`Source: www.ourblog.com/blog/`}</Text>
          <Line className="3xl:mt-[78px] bg-bluegray_101 h-[1px] lg:mt-[50px] mt-[65px] mx-[auto] w-[51%] xl:mt-[57px]" />
          <Row className="3xl:mt-[68px] font-opensans items-center justify-start lg:mt-[44px] mt-[57px] mx-[auto] w-[51%] xl:mt-[50px]">
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 mb-[1px] text-fs16 text-gray_703 text-left tracking-ls1 xl:text-fs14">{`Tags: SEO, Branding, Business`}</Text>
            <Text className="3xl:ml-[603px] 3xl:text-fs19 font-normal lg:ml-[391px] lg:text-fs12 ml-[503px] mt-[1px] text-fs16 text-gray_703 text-left tracking-ls1 xl:ml-[447px] xl:text-fs14">{`Share:`}</Text>
            <Image
              src="img_group128_2.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[28px] h-[24px] lg:h-[19px] lg:ml-[18px] lg:my-[2px] ml-[24px] my-[3px] object-contain w-[16%] xl:h-[22px] xl:ml-[21px] xl:my-[2px]"
              alt="Group128"
            />
          </Row>
          <Column className="3xl:mt-[122px] font-firasans items-center justify-start lg:mt-[79px] mt-[102px] self-stretch w-[100%] xl:mt-[90px]">
            <Row className="justify-center self-stretch w-[100%]">
              <Image
                src="img_component3_5.svg"
                className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[30px] 3xl:ml-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[19px] lg:ml-[369px] lg:mt-[8px] lg:w-[38px] mb-[25px] ml-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[22px] xl:ml-[422px] xl:mt-[9px] xl:w-[44px]"
                alt="Component3"
              />
              <Slider
                infinite
                mouseTracking
                disableButtonsControls
                responsive={{
                  0: { items: 1 },
                  568: { items: 1 },
                  1024: { items: 1 },
                }}
                ref={ref}
                className="3xl:ml-[21px] lg:ml-[14px] ml-[18px] w-[43%] xl:ml-[16px]"
                items={[
                  <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                    <Column className="font-firasans justify-start w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold font-firasans leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_703 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                    </Column>
                    <Column className="font-firasans justify-start w-[100%]">
                      <Column className="font-firasans self-stretch w-[100%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                      </Column>
                      <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_703 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                    </Column>
                  </Row>,

                  <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                    <Column className="font-firasans justify-start w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold font-firasans leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_703 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                    </Column>
                    <Column className="font-firasans justify-start w-[100%]">
                      <Column className="font-firasans self-stretch w-[100%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                      </Column>
                      <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_703 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                    </Column>
                  </Row>,

                  <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                    <Column className="font-firasans justify-start w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold font-firasans leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_703 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                    </Column>
                    <Column className="font-firasans justify-start w-[100%]">
                      <Column className="font-firasans self-stretch w-[100%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold leading-lh lg:text-fs16 self-stretch text-bluegray_904 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                      </Column>
                      <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-opensans lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_703 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                    </Column>
                  </Row>,
                ]}
              />
              <Image
                src="img_component4_5.svg"
                className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[30px] 3xl:ml-[21px] 3xl:mr-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[19px] lg:ml-[14px] lg:mr-[369px] lg:mt-[8px] lg:w-[38px] mb-[25px] ml-[18px] mr-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[22px] xl:ml-[16px] xl:mr-[422px] xl:mt-[9px] xl:w-[44px]"
                alt="Component4"
              />
            </Row>
            <Text className="2xl:text-fs21 3xl:mt-[157px] 3xl:text-fs25 capitalize font-bold font-firasans lg:mt-[101px] lg:text-fs16 mt-[131px] mx-[auto] text-bluegray_904 text-fs21327999114990234 text-left xl:mt-[116px] xl:text-fs18">{`Leave a Comment`}</Text>
            <Text className="3xl:mt-[48px] 3xl:text-fs19 font-normal font-opensans lg:mt-[31px] lg:text-fs12 mt-[40px] mx-[auto] text-fs16 text-gray_703 text-left w-[50%] xl:mt-[35px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
            <Input
              className="2xl:pb-[24px] 3xl:mt-[120px] 3xl:pb-[29px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[77px] lg:pb-[19px] lg:text-fs12 mt-[100px] mx-[auto] pb-[24.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_703 pt-[1px] text-fs16 text-gray_703 text-left w-[51%] xl:mt-[88px] xl:pb-[21px] xl:text-fs14"
              name="Group131"
              placeholder={`Subject *`}
            ></Input>
            <Input
              className="2xl:mt-[60px] 2xl:pb-[24px] 3xl:mt-[72px] 3xl:pb-[29px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[19px] lg:text-fs12 mt-[59.98999px] mx-[auto] pb-[24.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_703 pt-[1px] text-fs16 text-gray_703 text-left w-[51%] xl:mt-[53px] xl:pb-[21px] xl:text-fs14"
              name="Group132"
              placeholder={`Your Name *`}
            ></Input>
            <Input
              className="2xl:pb-[24px] 3xl:mt-[72px] 3xl:pb-[29px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[19px] lg:text-fs12 mt-[60px] mx-[auto] pb-[24.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_703 pt-[1px] text-fs16 text-gray_703 text-left w-[51%] xl:mt-[53px] xl:pb-[21px] xl:text-fs14"
              name="Group133"
              placeholder={`Your Email *`}
            ></Input>
            <div className="2xl:mt-[60px] 3xl:mt-[72px] 3xl:mx-[12px] bg-transparent border-0 lg:mt-[46px] lg:mx-[7px] mt-[59.98999px] mx-[10px] w-[51%] xl:mt-[53px] xl:mx-[8px] input-wrap">
              <Image
                src="img_grid_grid_2.svg"
                className="absolute top-[1px] bottom-[36.375px] right-[0] bg-transparent border-0 lg:bottom-[28px] xl:bottom-[32px] 2xl:bottom-[36px] 3xl:bottom-[43px]"
                alt="grid / grid"
              />
              <TextArea
                className="2xl:pb-[36px] 3xl:pb-[43px] 3xl:pr-[60px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-opensans lg:pb-[28px] lg:pr-[38px] lg:text-fs12 pb-[36.375px] pl-[0] placeholder:bg-transparent placeholder:text-gray_703 pr-[50px] pt-[1px] text-fs16 text-gray_703 text-left w-[100%] xl:pb-[32px] xl:pr-[44px] xl:text-fs14"
                name="Group134"
                placeholder={`Enter Your Comment`}
              ></TextArea>
            </div>
          </Column>
        </Column>
        <Column className="3xl:mt-[120px] font-roboto items-end lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Button className="2xl:py-[17px] 3xl:mx-[570px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-deep_orange_800 border-bw font-bold lg:mx-[369px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mx-[475px] px-[32px] py-[17.375px] text-center text-fs16 text-white_A700 uppercase w-[13%] xl:mx-[422px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Submit Your Message`}</Button>
        </Column>
        <Column className="3xl:mt-[300px] items-center lg:mt-[194px] mt-[250px] self-stretch w-[100%] xl:mt-[222px]">
          <div className="self-stretch w-[100%]">
            <Stack className="2xl:h-[604px] 3xl:h-[725px] h-[603.5px] lg:h-[470px] mb-[1px] self-stretch w-[100%] xl:h-[537px]">
              <Column className="absolute font-opensans inset-[0] justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Image
                    src="img_subtract.svg"
                    className="2xl:h-[505px] 3xl:h-[606px] h-[504px] lg:h-[392px] object-cover self-stretch w-[100%] xl:h-[449px]"
                    alt="Subtract"
                  />
                </Column>
                <Text className="3xl:pl-[42px] 3xl:py-[42px] 3xl:text-fs19 bg-deep_orange_800 font-bold lg:pl-[27px] lg:py-[27px] lg:text-fs12 pl-[35px] py-[35px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[31px] xl:py-[31px] xl:text-fs14">{`Copyright © 2020. All right reserved`}</Text>
              </Column>
              <Row className="2xl:top-[127px] 3xl:top-[153px] absolute justify-evenly lg:top-[99px] px-[0] self-stretch top-[127.5px] w-[100%] xl:top-[113px]">
                <Row className="3xl:mb-[157px] items-center justify-between lg:mb-[101px] lg:mt-[1px] mb-[131px] mt-[2px] px-[0] w-[32%] xl:mb-[116px] xl:mt-[1px]">
                  <Image
                    src="img_oceanengine_1.svg"
                    className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[456px] 3xl:my-[12px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:ml-[295px] lg:my-[7px] lg:w-[46px] ml-[380px] my-[10px] object-contain w-[60px] xl:h-[54px] xl:ml-[338px] xl:my-[8px] xl:w-[53px]"
                    alt="oceanengine"
                  />
                  <Column className="font-firasans justify-center w-[27%]">
                    <Text className="2xl:mt-[9px] 2xl:text-fs28 3xl:ml-[12px] 3xl:mt-[11px] 3xl:text-fs34 font-bold font-firasans lg:ml-[7px] lg:mt-[7px] lg:text-fs22 ml-[10px] mt-[9.5px] text-fs28399999618530273 text-left text-white_A700 uppercase xl:ml-[8px] xl:mt-[8px] xl:text-fs25">{`IT DEVeloper`}</Text>
                    <Text className="2xl:mb-[9px] 3xl:mb-[11px] 3xl:mx-[12px] 3xl:text-fs19 font-opensans font-semibold lg:mb-[7px] lg:mx-[7px] lg:text-fs12 mb-[9.5px] mx-[10px] text-fs16 text-left text-white_A700 xl:mb-[8px] xl:mx-[8px] xl:text-fs14">{`Your Best Partner`}</Text>
                  </Column>
                </Row>
                <Row className="justify-between px-[0] w-[63%]">
                  <Column className="font-firasans justify-start w-[12%]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Usefull Link`}</Text>
                    <Column className="3xl:mr-[12px] 3xl:mt-[36px] justify-start lg:mr-[7px] lg:mt-[23px] ml-[1px] mr-[10px] mt-[30px] w-[92%] xl:mr-[8px] xl:mt-[26px]">
                      <Row className="font-firasans items-center justify-start self-stretch w-[100%]">
                        <Image
                          src="img_arrowchevron_2.svg"
                          className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                          alt="arrowchevron"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[33px] 3xl:text-fs19 capitalize font-bold lg:ml-[11px] lg:mr-[21px] lg:text-fs12 ml-[15px] mr-[28px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[24px] xl:text-fs14">{`About Us`}</Text>
                      </Row>
                      <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_arrowchevron_2.svg"
                          className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                          alt="arrowchevron"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[28px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[18px] lg:text-fs12 ml-[15px] mr-[24px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[21px] xl:text-fs14">{`Our Team`}</Text>
                      </Row>
                      <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Row className="font-firasans items-center justify-start self-stretch w-[100%]">
                          <Image
                            src="img_arrowchevron_2.svg"
                            className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                            alt="arrowchevron"
                          />
                          <Text className="3xl:ml-[18px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`Pricing Plans`}</Text>
                        </Row>
                      </Column>
                      <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_arrowchevron_2.svg"
                          className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                          alt="arrowchevron"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[74px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[48px] lg:text-fs12 ml-[15px] mr-[62px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[55px] xl:text-fs14">{`Blog`}</Text>
                      </Row>
                      <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_arrowchevron_2.svg"
                          className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                          alt="arrowchevron"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[36px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[23px] lg:text-fs12 ml-[15px] mr-[30px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[26px] xl:text-fs14">{`404 Page`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="3xl:mb-[56px] font-firasans justify-start lg:mb-[36px] mb-[47px] w-[22%] xl:mb-[41px]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Head Office`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Column className="font-opensans justify-start w-[100%]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`(671) 555-0110`}</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="2xl:mr-[380px] 3xl:mb-[121px] 3xl:mr-[456px] font-firasans justify-start lg:mb-[78px] lg:mr-[295px] mb-[101px] mr-[380.5px] w-[22%] xl:mb-[89px] xl:mr-[338px]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Opening Hour`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Column className="font-opensans justify-start w-[100%]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Mon - Sat : 8:00 - 17:00`}</Text>
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Sun : Closed`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
              </Row>
            </Stack>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default BlogDetail5Page;
