import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Row } from "components/Row";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { List } from "components/List";

const ArtboardPage = () => {
  return (
    <Column className="bg-gray_105 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[3234px] 3xl:h-[3880px] h-[3231px] lg:h-[2513px] self-stretch w-[100%] xl:h-[2875px]">
        <Stack className="2xl:h-[3234px] 3xl:h-[3880px] absolute h-[3231px] inset-[0] lg:h-[2513px] self-stretch w-[100%] xl:h-[2875px]">
          <Image
            src="img_colorfill1.png"
            className="2xl:h-[3233px] 3xl:h-[3879px] absolute bottom-[1px] h-[3230px] inset-x-[0] lg:h-[2513px] object-cover self-stretch top-[0] w-[100%] xl:h-[2874px]"
            alt="ColorFill1"
          />
          <div className="absolute bottom-[0] right-[0] w-[83%]">
            <Stack className="2xl:h-[82px] 3xl:h-[98px] font-circularstd h-[81px] lg:h-[63px] self-stretch w-[100%] xl:h-[73px]">
              <Image
                src="img_bg_1.svg"
                className="2xl:h-[82px] 3xl:h-[98px] absolute h-[81px] inset-[0] lg:h-[63px] object-cover self-stretch w-[100%] xl:h-[73px]"
                alt="BG"
              />
              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center leading-lh5000 lg:leading-lh38 lg:text-fs10 m-[auto] text-bluegray_408 text-center text-fs14 w-[max-content] xl:leading-lh44 xl:text-fs12">
                <span className="text-bluegray_408 text-fs14 font-circularstd text-center font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                  <>{`2018 Copyrights © `}</>
                </span>
                <span className="text-deep_purple_A200 text-fs14 font-circularstd text-center font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                  <>{`DigitalHeaps`}</>
                </span>
              </Text>
            </Stack>
          </div>
          <Image
            src="img_bg_2.svg"
            className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] left-[0] lg:h-[77px] object-contain top-[0] w-[17%] xl:h-[89px]"
            alt="BG"
          />
          <Stack className="2xl:h-[3138px] 3xl:h-[3765px] absolute h-[3135px] inset-y-[0] left-[0] lg:h-[2439px] my-[auto] w-[17%] xl:h-[2789px]">
            <Image
              src="img_sidebarbg.svg"
              className="2xl:h-[3138px] 3xl:h-[3765px] absolute h-[3135px] inset-[0] lg:h-[2439px] object-cover self-stretch w-[100%] xl:h-[2789px]"
              alt="SidebarBG"
            />
            <Column className="3xl:top-[367px] absolute items-center justify-start lg:top-[238px] self-stretch top-[306px] w-[100%] xl:top-[272px]">
              <Line className="bg-bluegray_202 h-[4px] opacity-op4 self-stretch w-[100%]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Stack className="2xl:h-[60px] 3xl:h-[71px] 3xl:mt-[67px] h-[59px] lg:h-[46px] lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:h-[53px] xl:mt-[49px]">
                <Image
                  src="img_hoverbg.svg"
                  className="2xl:h-[60px] 3xl:h-[71px] absolute h-[59px] inset-[0] lg:h-[46px] object-cover opacity-op1 self-stretch w-[100%] xl:h-[53px]"
                  alt="HoverBG"
                />
                <Line className="2xl:h-[60px] 3xl:h-[71px] absolute bg-deep_purple_A200 h-[59px] left-[0] lg:h-[46px] shadow-bs42 w-[4px] xl:h-[53px]" />
              </Stack>
              <Line className="3xl:mt-[220px] bg-bluegray_202 h-[4px] lg:mt-[143px] mt-[184px] opacity-op4 self-stretch w-[100%] xl:mt-[163px]" />
            </Column>
          </Stack>
          <Image
            src="img_bg_3.svg"
            className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] lg:h-[77px] object-contain right-[0] top-[0] w-[83%] xl:h-[89px]"
            alt="BG"
          />
          <Image
            src="img_breadcrumbbg.svg"
            className="2xl:h-[64px] 3xl:h-[76px] 3xl:top-[115px] absolute h-[63px] lg:h-[49px] lg:top-[74px] object-contain opacity-op1 right-[0] top-[96px] w-[83%] xl:h-[57px] xl:top-[85px]"
            alt="BreadCrumbBG"
          />
        </Stack>
        <Stack className="2xl:h-[3064px] 3xl:h-[3676px] absolute h-[3061px] inset-[0] justify-center lg:h-[2381px] m-[auto] w-[98%] xl:h-[2724px]">
          <Row className="absolute justify-between px-[0] self-stretch top-[0] w-[100%]">
            <Column className="2xl:mt-[14px] 3xl:mt-[17px] font-circularstd justify-start lg:mt-[11px] mt-[14.5px] w-[14%] xl:mt-[12px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd justify-between px-[0] w-[100%]">
                  <Text className="3xl:text-fs31 font-medium lg:text-fs20 text-fs26 text-left text-white_A700 xl:text-fs23">{`Forms`}</Text>
                  <Image
                    src="img_combinedshape.svg"
                    className="2xl:h-[21px] 2xl:mb-[8px] 2xl:mt-[2px] 3xl:h-[25px] 3xl:mb-[9px] 3xl:mt-[2px] h-[20.73px] lg:h-[17px] lg:mb-[6px] lg:mt-[1px] mb-[8.139999px] mt-[2.130001px] object-contain w-[8%] xl:h-[19px] xl:mb-[7px] xl:mt-[1px]"
                    alt="Combinedshape"
                  />
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 2xl:mt-[62px] 3xl:leading-lh60 3xl:mt-[75px] 3xl:mx-[25px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:mt-[48px] lg:mx-[16px] lg:text-fs9 mt-[62.5px] mx-[21px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[42%] xl:leading-lh44 xl:mt-[55px] xl:mx-[18px] xl:text-fs10">{`Navigations`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsnav.svg"
                    className="2xl:h-[176px] 2xl:ml-[18px] 2xl:mt-[29px] 3xl:h-[211px] 3xl:ml-[21px] 3xl:mt-[35px] h-[175px] lg:h-[137px] lg:mb-[3px] lg:ml-[13px] lg:mt-[22px] mb-[4px] ml-[17.990002px] mt-[29.5px] object-contain w-[6%] xl:h-[156px] xl:mb-[3px] xl:ml-[16px] xl:mt-[26px]"
                    alt="IconsNav"
                  />
                  <Text className="2xl:leading-lh54 2xl:mr-[109px] 3xl:leading-lh64 3xl:ml-[19px] 3xl:mr-[131px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[12px] lg:mr-[84px] lg:text-fs12 ml-[16px] mr-[109.20999px] text-fs16 text-gray_612 text-left w-[42%] xl:leading-lh48 xl:ml-[14px] xl:mr-[97px] xl:text-fs14">{`Dashboards Layouts Mailbox Ecommerce`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:mt-[45px] 3xl:mx-[24px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:mt-[29px] lg:mx-[15px] lg:text-fs9 mt-[38px] mx-[20px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[22%] xl:leading-lh44 xl:mt-[33px] xl:mx-[17px] xl:text-fs10">{`Apps`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsapps.svg"
                    className="2xl:h-[288px] 3xl:h-[345px] 3xl:ml-[21px] 3xl:mt-[36px] h-[286.99px] lg:h-[224px] lg:ml-[14px] lg:mt-[23px] mb-[1px] ml-[18px] mt-[30px] object-contain w-[6%] xl:h-[256px] xl:ml-[16px] xl:mt-[26px]"
                    alt="IconsApps"
                  />
                  <Text className="2xl:leading-lh54 2xl:ml-[13px] 2xl:mr-[100px] 3xl:leading-lh64 3xl:ml-[16px] 3xl:mr-[120px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[10px] lg:mr-[77px] lg:text-fs12 ml-[13.989998px] mr-[100.20999px] text-fs16 text-gray_612 text-left w-[45%] xl:leading-lh48 xl:ml-[12px] xl:mr-[89px] xl:text-fs14">{`Calendar Messanger Contacts File Manager To-Do News Feed`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:mt-[44px] 3xl:mx-[25px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:mt-[28px] lg:mx-[16px] lg:text-fs9 mt-[37px] mx-[21px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[25%] xl:leading-lh44 xl:mt-[32px] xl:mx-[18px] xl:text-fs10">{`Pages`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconspages.svg"
                    className="2xl:h-[293px] 2xl:ml-[18px] 2xl:mt-[26px] 3xl:h-[351px] 3xl:ml-[21px] 3xl:mt-[31px] h-[292.01px] lg:h-[228px] lg:ml-[13px] lg:mt-[20px] ml-[17.990002px] mt-[25.98999px] object-contain w-[6%] xl:h-[260px] xl:ml-[16px] xl:mt-[23px]"
                    alt="IconsPages"
                  />
                  <Text className="2xl:leading-lh54 2xl:mr-[97px] 3xl:leading-lh64 3xl:ml-[18px] 3xl:mr-[116px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:mr-[75px] lg:text-fs12 ml-[15px] mr-[97.20999px] text-fs16 text-gray_612 text-left w-[46%] xl:leading-lh48 xl:ml-[13px] xl:mr-[86px] xl:text-fs14">{`Invoices Events 404 Page Projects Coming Soon Profile`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:mt-[44px] 3xl:mx-[25px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:mt-[28px] lg:mx-[16px] lg:text-fs9 mt-[37px] mx-[21px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[48%] xl:leading-lh44 xl:mt-[32px] xl:mx-[18px] xl:text-fs10">{`User Interface`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsui.svg"
                    className="2xl:h-[286px] 2xl:ml-[17px] 2xl:mt-[30px] 3xl:h-[343px] 3xl:ml-[21px] 3xl:mt-[36px] h-[285px] lg:h-[222px] lg:mb-[2px] lg:ml-[13px] lg:mt-[23px] mb-[3px] ml-[17.5px] mt-[30.5px] object-contain w-[6%] xl:h-[254px] xl:mb-[2px] xl:ml-[15px] xl:mt-[27px]"
                    alt="IconsUI"
                  />
                  <Text className="2xl:leading-lh54 2xl:ml-[15px] 2xl:mr-[108px] 3xl:leading-lh64 3xl:ml-[17px] 3xl:mr-[129px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:mr-[84px] lg:text-fs12 ml-[14.989998px] mr-[108.20999px] text-deep_purple_A200 text-fs16 text-left w-[42%] xl:leading-lh48 xl:ml-[13px] xl:mr-[96px] xl:text-fs14">
                    <span className="text-deep_purple_A200 text-fs16 font-circularstd text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{`Elements `}</>
                    </span>
                    <span className="text-gray_612 text-fs16 font-circularstd text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{`Typography Icons Tables  Logout`}</>
                    </span>
                  </Text>
                </Row>
              </Column>
            </Column>
            <Column className="3xl:mb-[1685px] items-center justify-start lg:mb-[1092px] mb-[1404px] w-[83%] xl:mb-[1248px]">
              <Row className="font-circularstd items-center justify-start self-stretch w-[100%]">
                <div className="bg-transparent border-0 w-[23%] input-wrap">
                  <Image
                    src="img_combined_shape_6597.svg"
                    className="absolute top-[37.78px] bottom-[36.78px] left-[23.149994px] bg-transparent border-0 lg:top-[29px] lg:bottom-[28px] lg:left-[18px] xl:top-[33px] xl:bottom-[32px] xl:left-[20px] 2xl:top-[37px] 2xl:bottom-[36px] 2xl:left-[23px] 3xl:top-[45px] 3xl:bottom-[44px] 3xl:left-[27px]"
                    alt="Combined shape 6597"
                  />
                  <Input
                    className="2xl:pb-[36px] 2xl:pl-[46px] 2xl:pt-[37px] 3xl:pb-[44px] 3xl:pl-[55px] 3xl:pt-[45px] 3xl:text-fs18 bg-transparent border-0 font-normal lg:pb-[28px] lg:pl-[36px] lg:pt-[29px] lg:text-fs11 pb-[36.78px] pl-[46.579994px] placeholder:bg-transparent placeholder:text-gray_508 pt-[37.78px] text-fs15 text-gray_508 text-left w-[100%] xl:pb-[32px] xl:pl-[41px] xl:pt-[33px] xl:text-fs13"
                    name="Search"
                    placeholder={`Search...`}
                  ></Input>
                </div>
                <Row className="2xl:ml-[835px] 3xl:ml-[1002px] items-center justify-center lg:ml-[649px] lg:mt-[1px] mb-[1px] ml-[834.80005px] mt-[2px] w-[20%] xl:ml-[742px] xl:mt-[1px]">
                  <Image
                    src="img_01_1.svg"
                    className="2xl:h-[22px] 3xl:h-[26px] 3xl:mb-[18px] 3xl:mt-[16px] h-[21px] lg:h-[17px] lg:mb-[11px] lg:mt-[10px] mb-[15px] mt-[14px] object-contain w-[9%] xl:h-[19px] xl:mb-[13px] xl:mt-[12px]"
                    alt="01"
                  />
                  <Stack className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[15px] 3xl:ml-[37px] 3xl:mt-[14px] h-[25px] lg:h-[20px] lg:mb-[10px] lg:ml-[24px] lg:mt-[9px] mb-[13px] ml-[31px] mt-[12px] w-[7%] xl:h-[23px] xl:mb-[11px] xl:ml-[27px] xl:mt-[10px]">
                    <div className="2xl:h-[24px] 3xl:h-[28px] absolute bg-gray_508 bottom-[0] h-[23px] left-[0] lg:h-[18px] w-[91%] xl:h-[21px]"></div>
                    <Image
                      src="img_circle_1.svg"
                      className="2xl:h-[12px] 3xl:h-[14px] 3xl:w-[13px] absolute h-[11px] lg:h-[9px] lg:w-[8px] object-contain right-[0] top-[0] w-[11px] xl:h-[10px] xl:w-[9px]"
                      alt="Circle"
                    />
                  </Stack>
                  <Row className="3xl:ml-[39px] items-end justify-between lg:ml-[25px] ml-[33px] px-[0] w-[64%] xl:ml-[29px]">
                    <Image
                      src="img_image_8.svg"
                      className="2xl:h-[51px] 3xl:h-[61px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:w-[38px] object-contain w-[50px] xl:h-[45px] xl:w-[44px]"
                      alt="Image"
                    />
                    <Column className="3xl:mt-[19px] font-circularstd justify-start lg:mt-[12px] mt-[16px] w-[69%] xl:mt-[14px]">
                      <Column className="font-circularstd self-stretch w-[100%]">
                        <Text className="3xl:text-fs19 font-normal lg:mr-[3px] lg:text-fs12 mr-[4px] text-fs16 text-gray_612 text-left xl:mr-[3px] xl:text-fs14">{`George Martin`}</Text>
                      </Column>
                      <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:ml-[12px] 3xl:text-fs16 font-materialdesignicons font-normal leading-lh5000 lg:leading-lh38 lg:ml-[7px] lg:text-fs10 ml-[10px] text-center text-fs14 text-gray_612 tracking-ls1 w-[28%] xl:leading-lh44 xl:ml-[8px] xl:text-fs12">{``}</Text>
                    </Column>
                  </Row>
                </Row>
                <Image
                  src="img_combinedshape_1.svg"
                  className="2xl:h-[17px] 2xl:mb-[18px] 2xl:ml-[15px] 2xl:mr-[29px] 3xl:h-[20px] 3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[34px] 3xl:mt-[22px] h-[15.99px] lg:h-[13px] lg:ml-[11px] lg:mr-[22px] lg:my-[14px] mb-[18.010002px] ml-[15.01001px] mr-[29.02002px] mt-[19px] object-contain w-[1%] xl:h-[15px] xl:ml-[13px] xl:mr-[25px] xl:my-[16px]"
                  alt="Combinedshape"
                />
              </Row>
              <Row className="3xl:mt-[33px] font-circularstd items-center justify-between lg:mt-[21px] mt-[28px] px-[0] self-stretch w-[100%] xl:mt-[24px]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[2px] lg:text-fs17 ml-[3px] mt-[1px] text-deep_purple_A200 text-fs22 text-left tracking-ls1 w-[9%] xl:leading-lh48 xl:ml-[2px] xl:text-fs19">{`Basic Forms`}</Text>
                <Stack className="2xl:h-[55px] 3xl:h-[65px] font-circularstd h-[54px] lg:h-[42px] mb-[1px] w-[15%] xl:h-[49px]">
                  <Row className="absolute items-center justify-center left-[0] w-[29%]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[20px] 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[13px] lg:text-fs10 ml-[17px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[13%] xl:leading-lh48 xl:ml-[15px] xl:text-fs12">{`-`}</Text>
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 text-deep_purple_A200 text-fs14 text-left tracking-ls1 w-[61%] xl:leading-lh48 xl:text-fs12">{`Home`}</Text>
                  </Row>
                  <Row className="3xl:left-[74px] absolute items-center justify-center left-[62px] lg:left-[48px] w-[29%] xl:left-[55px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[24px] 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[15px] lg:text-fs10 ml-[20px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[11%] xl:leading-lh48 xl:ml-[17px] xl:text-fs12">{`-`}</Text>
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 text-bluegray_202 text-fs14 text-left tracking-ls1 w-[60%] xl:leading-lh48 xl:text-fs12">{`Forms`}</Text>
                  </Row>
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 right-[0] text-bluegray_202 text-fs14 text-left tracking-ls1 w-[45%] xl:leading-lh48 xl:text-fs12">{`Basic Forms`}</Text>
                </Stack>
              </Row>
            </Column>
          </Row>
          <Column className="3xl:right-[33px] absolute bottom-[0] items-center justify-start lg:right-[21px] right-[28px] w-[81%] xl:right-[24px]">
            <Row className="3xl:gap-[25px] gap-[21px] grid grid-cols-2 items-center justify-between lg:gap-[16px] self-stretch w-[100%] xl:gap-[18px]">
              <Stack className="2xl:h-[415px] 3xl:h-[498px] h-[414px] lg:h-[322px] w-[100%] xl:h-[369px]">
                <Image
                  src="img_textbg.svg"
                  className="2xl:h-[415px] 3xl:h-[498px] absolute h-[414px] inset-[0] lg:h-[322px] object-cover self-stretch w-[100%] xl:h-[369px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[19px] absolute inset-x-[0] justify-start lg:top-[12px] mx-[auto] top-[16px] w-[92%] xl:top-[14px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[140px] 3xl:h-[167px] font-circularstd h-[139px] lg:h-[109px] self-stretch w-[100%] xl:h-[124px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 absolute font-normal leading-lh5400 left-[3px] lg:leading-lh42 lg:left-[2px] lg:text-fs17 text-bluegray_805 text-fs22 text-left top-[0] w-[21%] xl:leading-lh48 xl:left-[2px] xl:text-fs19">{`Basic Forms`}</Text>
                      <Stack className="2xl:h-[99px] 3xl:h-[118px] absolute bottom-[0] font-circularstd h-[98px] lg:h-[77px] self-stretch w-[100%] xl:h-[88px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs12 text-bluegray_805 text-fs16 text-left top-[0] w-[20%] xl:leading-lh48 xl:left-[1px] xl:text-fs14">{`Email Address*`}</Text>
                        <Stack className="2xl:h-[58px] 3xl:h-[69px] absolute bottom-[0] font-circularstd h-[57px] lg:h-[45px] self-stretch w-[100%] xl:h-[51px]">
                          <Image
                            src="img_bg_4.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[27%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`skinner@support.com`}</Text>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Stack className="2xl:h-[102px] 3xl:h-[122px] font-circularstd h-[101px] lg:h-[79px] lg:mt-[1px] mt-[2px] w-[100%] xl:h-[90px] xl:mt-[1px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal leading-lh5400 left-[1px] lg:leading-lh42 lg:text-fs12 text-bluegray_805 text-fs16 text-left top-[0] w-[15%] xl:leading-lh48 xl:text-fs14">{`Password*`}</Text>
                      <Stack className="2xl:h-[61px] 3xl:h-[73px] absolute bottom-[0] font-circularstd h-[60px] lg:h-[47px] self-stretch w-[100%] xl:h-[54px]">
                        <Image
                          src="img_bg_5.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[16%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`************`}</Text>
                      </Stack>
                    </Stack>
                  </Column>
                  <Row className="3xl:mr-[12px] font-circularstd items-center justify-start lg:mr-[7px] mr-[10px] w-[24%] xl:mr-[8px]">
                    <Image
                      src="img_bg_6.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[20px] 3xl:mt-[14px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mb-[13px] lg:mt-[9px] lg:w-[19px] mb-[17px] mt-[12px] object-contain w-[25px] xl:h-[23px] xl:mb-[15px] xl:mt-[10px] xl:w-[22px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[13px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[8px] lg:text-fs12 ml-[11px] text-bluegray_202 text-fs16 text-left w-[79%] xl:leading-lh48 xl:ml-[9px] xl:text-fs14">{`Check Me Out`}</Text>
                  </Row>
                  <Row className="3xl:mr-[12px] items-center justify-start lg:mr-[7px] lg:mt-[3px] mr-[10px] mt-[4px] w-[35%] xl:mr-[8px] xl:mt-[3px]">
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] font-circularstd h-[54px] lg:h-[42px] w-[51%] xl:h-[49px]">
                      <Image
                        src="img_bg_7.svg"
                        className="2xl:h-[43px] 3xl:h-[51px] 3xl:inset-y-[7px] absolute h-[42px] inset-x-[0] inset-y-[6px] lg:h-[33px] lg:inset-y-[4px] object-cover self-stretch w-[100%] xl:h-[38px] xl:inset-y-[5px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[22px] 3xl:right-[21px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[19px] lg:inset-x-[14px] lg:leading-lh42 lg:text-fs14 right-[18px] text-center text-fs18 text-white_A700 w-[70%] xl:inset-x-[16px] xl:leading-lh48 xl:text-fs16">{`Submit`}</Text>
                    </Stack>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[8px] font-circularstd h-[54px] lg:h-[42px] lg:ml-[5px] ml-[7px] w-[47%] xl:h-[49px] xl:ml-[6px]">
                      <Image
                        src="img_bg_8.svg"
                        className="2xl:h-[43px] 3xl:h-[51px] 3xl:inset-y-[7px] absolute h-[42px] inset-x-[0] inset-y-[6px] lg:h-[33px] lg:inset-y-[4px] object-cover self-stretch w-[100%] xl:h-[38px] xl:inset-y-[5px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[18px] 3xl:right-[16px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[15px] lg:leading-lh42 lg:left-[11px] lg:right-[10px] lg:text-fs14 right-[14px] text-bluegray_805 text-center text-fs18 w-[75%] xl:leading-lh48 xl:left-[13px] xl:right-[12px] xl:text-fs16">{`Cancel`}</Text>
                    </Stack>
                  </Row>
                </Column>
              </Stack>
              <Stack className="2xl:h-[415px] 3xl:h-[498px] h-[414px] lg:h-[322px] w-[100%] xl:h-[369px]">
                <Image
                  src="img_textbg_1.svg"
                  className="2xl:h-[415px] 3xl:h-[498px] absolute h-[414px] inset-[0] lg:h-[322px] object-cover self-stretch w-[100%] xl:h-[369px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[19px] absolute font-circularstd inset-x-[0] justify-start lg:top-[12px] mx-[auto] top-[16px] w-[92%] xl:top-[14px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[28%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Horizontal Forms`}</Text>
                  <Column className="items-center lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 2xl:mb-[43px] 3xl:leading-lh64 3xl:mb-[52px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[33px] lg:mt-[2px] lg:text-fs12 mb-[43.5px] ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[20%] xl:leading-lh48 xl:mb-[38px] xl:mt-[2px] xl:text-fs14">{`Email Address*`}</Text>
                      <Stack className="2xl:h-[101px] 3xl:h-[121px] font-circularstd h-[100.5px] lg:h-[79px] w-[79%] xl:h-[90px]">
                        <Image
                          src="img_bg_9.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 lg:top-[1px] text-bluegray_202 text-fs16 text-left top-[2px] w-[34%] xl:leading-lh48 xl:left-[15px] xl:text-fs14 xl:top-[1px]">{`skinner@support.com`}</Text>
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs18 absolute bottom-[0] font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs11 text-bluegray_202 text-fs15 text-left w-[40%] xl:leading-lh48 xl:left-[1px] xl:text-fs13">{`Ex:black-level help text here`}</Text>
                      </Stack>
                    </Row>
                    <Row className="2xl:mt-[4px] 3xl:mt-[5px] font-circularstd items-center justify-between lg:mt-[3px] mt-[4.5px] px-[0] self-stretch w-[100%] xl:mt-[4px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mb-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Password*`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_10.svg"
                          className="absolute top-[19px] bottom-[22px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[17px] xl:top-[16px] xl:bottom-[19px] 3xl:top-[22px] 3xl:bottom-[26px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[26px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[17px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[22px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[19px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`************`}</Button>
                      </div>
                    </Row>
                  </Column>
                  <Row className="3xl:mx-[180px] font-circularstd items-center justify-start lg:mt-[1px] lg:mx-[116px] mt-[2px] mx-[150px] w-[24%] xl:mt-[1px] xl:mx-[133px]">
                    <Image
                      src="img_bg_11.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[20px] 3xl:mt-[14px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mb-[13px] lg:mt-[9px] lg:w-[19px] mb-[17px] mt-[12px] object-contain w-[25px] xl:h-[23px] xl:mb-[15px] xl:mt-[10px] xl:w-[22px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[13px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[8px] lg:text-fs12 ml-[11px] text-bluegray_202 text-fs16 text-left w-[79%] xl:leading-lh48 xl:ml-[9px] xl:text-fs14">{`Remember Me`}</Text>
                  </Row>
                  <Column className="3xl:mt-[27px] items-end lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[687px] font-circularstd h-[54px] lg:h-[42px] lg:ml-[445px] ml-[573px] mr-[1px] w-[18%] xl:h-[49px] xl:ml-[509px]">
                      <Image
                        src="img_bg_12.svg"
                        className="2xl:h-[43px] 3xl:bottom-[6px] 3xl:h-[51px] 3xl:top-[8px] absolute bottom-[5px] h-[42px] inset-x-[0] lg:bottom-[3px] lg:h-[33px] lg:top-[5px] object-cover self-stretch top-[7px] w-[100%] xl:bottom-[4px] xl:h-[38px] xl:top-[6px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[24px] 3xl:right-[22px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[20px] lg:leading-lh42 lg:left-[15px] lg:right-[14px] lg:text-fs14 right-[19px] text-center text-fs18 text-white_A700 w-[69%] xl:leading-lh48 xl:left-[17px] xl:right-[16px] xl:text-fs16">{`Sign In`}</Text>
                    </Stack>
                  </Column>
                </Column>
              </Stack>
            </Row>
            <Stack className="2xl:h-[179px] 3xl:h-[214px] 3xl:mt-[44px] h-[178px] lg:h-[139px] lg:mt-[28px] mt-[37px] self-stretch w-[100%] xl:h-[159px] xl:mt-[32px]">
              <Image
                src="img_textbg_2.svg"
                className="2xl:h-[179px] 3xl:h-[214px] absolute h-[178px] inset-[0] lg:h-[139px] object-cover self-stretch w-[100%] xl:h-[159px]"
                alt="TextBG"
              />
              <Column className="3xl:left-[33px] 3xl:top-[19px] absolute font-circularstd justify-start left-[28px] lg:left-[21px] lg:top-[12px] top-[16px] w-[85%] xl:left-[24px] xl:top-[14px]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[3px] lg:mr-[7px] lg:text-fs17 ml-[4px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[11%] xl:leading-lh48 xl:ml-[3px] xl:mr-[8px] xl:text-fs19">{`Inline Forms`}</Text>
                <Column className="items-center lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                  <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                    <Stack className="2xl:h-[58px] 3xl:h-[69px] h-[57px] lg:h-[45px] w-[36%] xl:h-[51px]">
                      <Image
                        src="img_bg_13.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[21px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[18px] lg:leading-lh42 lg:left-[14px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[28%] xl:leading-lh48 xl:left-[16px] xl:text-fs14">{`Email Address`}</Text>
                    </Stack>
                    <div className="bg-transparent border-bw w-[37%] input-wrap">
                      <Image
                        src="img_bg_14.svg"
                        className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                        alt="BG"
                      />
                      <Button className="3xl:pb-[25px] 3xl:pl-[583px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[378px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[486px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[432px] xl:pt-[16px] xl:text-fs14">{`Password`}</Button>
                    </div>
                    <Image
                      src="img_bg_15.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[20px] 3xl:mt-[18px] h-[25px] lg:h-[20px] lg:mb-[13px] lg:mt-[11px] mb-[17px] mt-[15px] object-contain w-[2%] xl:h-[23px] xl:mb-[15px] xl:mt-[13px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_202 text-fs16 text-left w-[10%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Remember Me`}</Text>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] font-circularstd h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] mt-[1px] w-[10%] xl:h-[49px] xl:mb-[1px]">
                      <Image
                        src="img_bg_16.svg"
                        className="2xl:h-[43px] 3xl:h-[51px] 3xl:inset-y-[7px] absolute h-[42px] inset-x-[0] inset-y-[6px] lg:h-[33px] lg:inset-y-[4px] object-cover self-stretch w-[100%] xl:h-[38px] xl:inset-y-[5px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[22px] 3xl:right-[21px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[19px] lg:inset-x-[14px] lg:leading-lh42 lg:text-fs14 right-[18px] text-center text-fs18 text-white_A700 w-[70%] xl:inset-x-[16px] xl:leading-lh48 xl:text-fs16">{`Submit`}</Text>
                    </Stack>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Row className="3xl:mt-[44px] items-center justify-between lg:mt-[28px] mt-[37px] px-[0] self-stretch w-[100%] xl:mt-[32px]">
              <Stack className="2xl:h-[987px] 3xl:h-[1184px] 3xl:mb-[16px] h-[986px] lg:h-[767px] lg:mb-[10px] mb-[14px] w-[49%] xl:h-[878px] xl:mb-[12px]">
                <Image
                  src="img_textbg_3.svg"
                  className="2xl:h-[987px] 3xl:h-[1184px] absolute h-[986px] inset-[0] lg:h-[767px] object-cover self-stretch w-[100%] xl:h-[878px]"
                  alt="TextBG"
                />
                <Column className="absolute font-circularstd h-[max-content] inset-[0] justify-center m-[auto] w-[92%]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[21%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Basic Inputs`}</Text>
                  <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Basic Input`}</Text>
                      <Image
                        src="img_bg_17.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] mr-[1px] object-contain w-[79%] xl:h-[49px] xl:mb-[1px]"
                        alt="BG"
                      />
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[16%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Placeholder`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_18.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`Your titlt in placeholder`}</Button>
                      </div>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[14%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Password`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_19.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`Password Input`}</Button>
                      </div>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Read Only`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_20.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_19 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`You can’t change me`}</Button>
                      </div>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[18%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Disable Input`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_20.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_19 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`Disable text`}</Button>
                      </div>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] self-stretch w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Select Box`}</Text>
                      <Stack className="2xl:h-[57px] 3xl:h-[68px] font-circularstd h-[56px] lg:h-[44px] mb-[1px] w-[79%] xl:h-[50px]">
                        <Stack className="2xl:h-[57px] 3xl:h-[68px] absolute font-circularstd h-[56px] inset-[0] lg:h-[44px] self-stretch w-[100%] xl:h-[50px]">
                          <Image
                            src="img_bg_21.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[1px] h-[55px] inset-x-[0] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 my-[auto] text-bluegray_202 text-fs16 text-left w-[34%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`Select one value Only`}</Text>
                        </Stack>
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:right-[19px] 3xl:text-fs20 absolute font-materialdesignicons font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[12px] lg:text-fs13 my-[auto] right-[16px] text-bluegray_805 text-fs17 text-right tracking-ls1 w-[7%] xl:leading-lh48 xl:right-[14px] xl:text-fs15">{``}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[17%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Round Input`}</Text>
                      <div className="bg-transparent border-bw w-[79%] input-wrap">
                        <Image
                          src="img_bg_22.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-bluegray_100_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`.form control round`}</Button>
                      </div>
                    </Row>
                    <Stack className="2xl:h-[58px] 3xl:h-[69px] 3xl:mt-[16px] font-circularstd h-[57px] lg:h-[45px] lg:mt-[10px] mt-[14px] w-[100%] xl:h-[51px] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs12 text-bluegray_805 text-fs16 text-left w-[22%] xl:leading-lh48 xl:text-fs14">{`Maximum Length`}</Text>
                      <div className="absolute bg-transparent border-bw mr-[0] right-[0] w-[79%] input-wrap">
                        <div className="input-wrap">
                          <Image
                            src="img_bg_21.svg"
                            className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                            alt="BG"
                          />
                          <Button className="3xl:pb-[25px] 3xl:pl-[669px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[434px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[558px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[496px] xl:pt-[16px] xl:text-fs14">{`Content must in 06 characters`}</Button>
                        </div>
                      </div>
                    </Stack>
                  </Column>
                  <Row className="3xl:mr-[12px] 3xl:mt-[10px] font-circularstd items-center justify-start lg:mr-[7px] lg:mt-[7px] mr-[10px] mt-[9px] w-[46%] xl:mr-[8px] xl:mt-[8px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs12 text-bluegray_805 text-fs16 text-left w-[33%] xl:leading-lh48 xl:text-fs14">{`Static Text`}</Text>
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[54px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[35px] lg:text-fs12 ml-[45px] text-bluegray_202 text-fs16 text-left w-[53%] xl:leading-lh48 xl:ml-[40px] xl:text-fs14">{`skinner@gmail.com`}</Text>
                  </Row>
                  <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[10%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Color`}</Text>
                      <ProgressBar.Line
                        className="2xl:h-[56px] 3xl:h-[67px] bg-gray_600_00 border border-gray_308 border-solid h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] mr-[1px] w-[79%] xl:h-[49px] xl:mb-[1px]"
                        percent="96"
                        strokeColor="#6b707d"
                        trailColor="#6b707d00"
                        name="Group669"
                      ></ProgressBar.Line>
                    </Row>
                    <Row className="3xl:mt-[16px] font-circularstd justify-between lg:mt-[10px] mt-[14px] px-[0] w-[100%] xl:mt-[12px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[16%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Upload File`}</Text>
                      <Stack className="2xl:h-[58px] 3xl:h-[69px] font-circularstd h-[57px] lg:h-[45px] w-[79%] xl:h-[51px]">
                        <Stack className="2xl:h-[58px] 3xl:h-[69px] absolute h-[57px] inset-[0] lg:h-[45px] self-stretch w-[100%] xl:h-[51px]">
                          <Image
                            src="img_bg_23.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[44px] 3xl:text-fs16 absolute bottom-[0] font-normal leading-lh5400 left-[37px] lg:leading-lh42 lg:left-[28px] lg:text-fs10 text-bluegray_202 text-center text-fs14 w-[14%] xl:leading-lh48 xl:left-[32px] xl:text-fs12">{`Browse`}</Text>
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[182px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[152px] lg:leading-lh42 lg:left-[118px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[27%] xl:leading-lh48 xl:left-[135px] xl:text-fs14">{`No file Selected.`}</Text>
                        </Stack>
                        <Image
                          src="img_bg_24.svg"
                          className="2xl:h-[36px] 3xl:h-[43px] 3xl:left-[12px] absolute h-[35px] inset-y-[0] left-[10px] lg:h-[28px] lg:left-[7px] my-[auto] object-contain w-[23%] xl:h-[32px] xl:left-[8px]"
                          alt="BG"
                        />
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[15px] font-circularstd justify-between lg:mt-[10px] mt-[13px] px-[0] self-stretch w-[100%] xl:mt-[11px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[45px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[29px] lg:mt-[3px] lg:text-fs12 mb-[38px] mt-[4px] text-bluegray_805 text-fs16 text-left w-[13%] xl:leading-lh48 xl:mb-[33px] xl:mt-[3px] xl:text-fs14">{`Textarea`}</Text>
                      <Stack className="2xl:h-[97px] 3xl:h-[116px] font-circularstd h-[96px] lg:h-[75px] w-[79%] xl:h-[86px]">
                        <Stack className="2xl:h-[97px] 3xl:h-[116px] absolute h-[96px] inset-[0] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                          <Image
                            src="img_bg_25.svg"
                            className="2xl:h-[96px] 3xl:h-[115px] absolute bottom-[0] h-[95px] inset-x-[0] lg:h-[74px] object-cover self-stretch top-[1px] w-[100%] xl:h-[85px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left top-[0] w-[17%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`Textarea`}</Text>
                        </Stack>
                        <Text className="2xl:bottom-[3px] 3xl:bottom-[4px] 3xl:right-[13px] 3xl:text-fs19 absolute bottom-[3.5px] font-normal lg:bottom-[2px] lg:right-[8px] lg:text-fs12 right-[11px] text-bluegray_202 text-fs16 text-right xl:bottom-[3px] xl:right-[9px] xl:text-fs14">{`. .. ...`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[1001px] 3xl:h-[1201px] h-[1000px] lg:h-[778px] w-[49%] xl:h-[890px]">
                <Image
                  src="img_textbg_4.svg"
                  className="2xl:h-[1001px] 3xl:h-[1201px] absolute h-[1000px] inset-[0] lg:h-[778px] object-cover self-stretch w-[100%] xl:h-[890px]"
                  alt="TextBG"
                />
                <Column className="absolute font-circularstd h-[max-content] inset-[0] justify-center m-[auto] w-[92%]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[1px] lg:mr-[7px] lg:text-fs17 ml-[2px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[22%] xl:leading-lh48 xl:ml-[1px] xl:mr-[8px] xl:text-fs19">{`Input Groups`}</Text>
                  <Column className="3xl:mt-[9px] items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[18%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Input Groups`}</Text>
                      <Stack className="2xl:h-[57px] 3xl:h-[68px] font-circularstd h-[56px] lg:h-[44px] mb-[1px] mr-[1px] w-[78%] xl:h-[50px]">
                        <Image
                          src="img_bg_26.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[1px] h-[55px] inset-x-[0] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_27.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[9%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="3xl:left-[6px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] left-[5px] lg:left-[3px] lg:text-fs12 my-[auto] text-bluegray_202 text-center text-fs16 xl:left-[4px] xl:text-fs14">{`@`}</Text>
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[78px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 left-[65px] lg:leading-lh42 lg:left-[50px] lg:text-fs12 my-[auto] text-bluegray_202 text-fs16 text-left w-[18%] xl:leading-lh48 xl:left-[57px] xl:text-fs14">{`Username`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[6px] items-end lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Stack className="2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[12px] h-[55px] lg:h-[43px] lg:ml-[7px] ml-[10px] w-[78%] xl:h-[49px] xl:ml-[8px]">
                      <Image
                        src="img_bg_28.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] object-contain right-[1px] w-[100%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute font-circularstd h-[55px] lg:h-[43px] right-[0] w-[9%] xl:h-[49px]">
                        <Image
                          src="img_bg_29.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] object-contain right-[1px] w-[98%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="3xl:bottom-[15px] 3xl:text-fs19 absolute bottom-[13px] font-normal lg:bottom-[10px] lg:text-fs12 self-stretch text-bluegray_202 text-center text-fs16 xl:bottom-[11px] xl:text-fs14">{`.00`}</Text>
                      </Stack>
                    </Stack>
                    <Stack className="2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[12px] 3xl:mt-[8px] font-circularstd h-[55px] lg:h-[43px] lg:ml-[7px] lg:mt-[5px] ml-[10px] mt-[7px] w-[78%] xl:h-[49px] xl:ml-[8px] xl:mt-[6px]">
                      <Image
                        src="img_bg_19.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] object-contain right-[1px] w-[100%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Image
                        src="img_bg_30.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] left-[0] lg:h-[43px] object-contain w-[9%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Text className="3xl:bottom-[16px] 3xl:left-[7px] 3xl:text-fs19 absolute bottom-[14px] font-normal left-[6px] lg:bottom-[10px] lg:left-[4px] lg:text-fs12 text-bluegray_202 text-center text-fs16 xl:bottom-[12px] xl:left-[5px] xl:text-fs14">{`$`}</Text>
                      <Image
                        src="img_bg_31.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[1px] w-[9%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Text className="3xl:bottom-[15px] 3xl:text-fs19 absolute bottom-[13px] font-normal lg:bottom-[10px] lg:text-fs12 right-[0] text-bluegray_202 text-center text-fs16 xl:bottom-[11px] xl:text-fs14">{`.00`}</Text>
                    </Stack>
                  </Column>
                  <Column className="3xl:mt-[69px] items-center lg:mt-[45px] mt-[58px] self-stretch w-[100%] xl:mt-[51px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[18%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Input Groups`}</Text>
                      <Stack className="2xl:h-[58px] 3xl:h-[69px] font-circularstd h-[57px] lg:h-[45px] mr-[1px] w-[78%] xl:h-[51px]">
                        <Image
                          src="img_bg_32.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_33.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[9%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="3xl:left-[6px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] left-[5px] lg:left-[3px] lg:text-fs12 my-[auto] text-bluegray_202 text-center text-fs16 xl:left-[4px] xl:text-fs14">{`@`}</Text>
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[78px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[65px] lg:leading-lh42 lg:left-[50px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[18%] xl:leading-lh48 xl:left-[57px] xl:text-fs14">{`Username`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="2xl:mt-[4px] 3xl:mt-[5px] items-end lg:mt-[3px] mt-[4.5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Stack className="2xl:h-[108px] 3xl:h-[130px] 3xl:ml-[180px] font-circularstd h-[107.5px] lg:h-[84px] lg:ml-[116px] ml-[150px] mr-[1px] w-[78%] xl:h-[96px] xl:ml-[133px]">
                      <List
                        className="absolute flex-wrap gap-[0] min-h-[auto] self-stretch top-[1px] w-[100%]"
                        orientation="vertical"
                      >
                        <Stack className="2xl:h-[50px] 2xl:my-[3px] 3xl:h-[59px] 3xl:my-[4px] font-circularstd h-[49px] lg:h-[39px] lg:my-[2px] my-[3.5px] self-stretch w-[100%] xl:h-[44px] xl:my-[3px]">
                          <Image
                            src="img_bg_34.svg"
                            className="2xl:h-[50px] 3xl:h-[59px] absolute h-[49px] inset-y-[0] left-[1px] lg:h-[39px] object-contain right-[0] w-[100%] xl:h-[44px]"
                            alt="BG"
                          />
                          <Image
                            src="img_bg_35.svg"
                            className="2xl:h-[50px] 3xl:h-[59px] absolute h-[49px] left-[0] lg:h-[39px] object-contain w-[9%] xl:h-[44px]"
                            alt="BG"
                          />
                          <Text className="3xl:bottom-[13px] 3xl:text-fs19 absolute bottom-[11px] font-normal left-[4px] lg:bottom-[8px] lg:left-[3px] lg:text-fs12 text-bluegray_202 text-center text-fs16 xl:bottom-[9px] xl:left-[3px] xl:text-fs14">{`@`}</Text>
                        </Stack>
                        <Stack className="2xl:h-[44px] 2xl:my-[3px] 3xl:h-[52px] 3xl:my-[4px] h-[43px] lg:h-[34px] lg:my-[2px] my-[3.5px] w-[100%] xl:h-[39px] xl:my-[3px]">
                          <Image
                            src="img_bg_36.svg"
                            className="2xl:h-[44px] 3xl:h-[52px] absolute h-[43px] inset-[0] lg:h-[34px] object-cover self-stretch w-[100%] xl:h-[39px]"
                            alt="BG"
                          />
                          <Stack className="2xl:h-[44px] 3xl:h-[52px] 3xl:w-[51px] absolute font-circularstd h-[43px] left-[0] lg:h-[34px] lg:w-[33px] w-[43px] xl:h-[39px] xl:w-[38px]">
                            <Image
                              src="img_bg_37.svg"
                              className="2xl:h-[44px] 3xl:h-[52px] absolute h-[43px] left-[0] lg:h-[34px] object-contain w-[95%] xl:h-[39px]"
                              alt="BG"
                            />
                            <Text className="3xl:bottom-[9px] 3xl:text-fs19 absolute bottom-[8px] font-normal lg:bottom-[6px] lg:text-fs12 self-stretch text-bluegray_202 text-center text-fs16 xl:bottom-[7px] xl:text-fs14">{`@`}</Text>
                          </Stack>
                        </Stack>
                      </List>
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[73px] 3xl:text-fs18 absolute font-normal leading-lh5400 left-[61px] lg:leading-lh42 lg:left-[47px] lg:text-fs11 text-bluegray_202 text-fs15 text-left top-[0] w-[17%] xl:leading-lh48 xl:left-[54px] xl:text-fs13">{`Username`}</Text>
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[67px] 3xl:text-fs16 absolute bottom-[0] font-normal leading-lh5400 left-[56px] lg:leading-lh42 lg:left-[43px] lg:text-fs10 text-bluegray_202 text-fs14 text-left w-[17%] xl:leading-lh48 xl:left-[49px] xl:text-fs12">{`Username`}</Text>
                    </Stack>
                  </Column>
                  <Column className="3xl:mt-[60px] items-center lg:mt-[38px] mt-[50px] self-stretch w-[100%] xl:mt-[44px]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[16%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Checkboxs`}</Text>
                      <Image
                        src="img_bg_21.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] mr-[1px] object-contain w-[78%] xl:h-[49px] xl:mb-[1px]"
                        alt="Group649"
                      />
                    </Row>
                    <Row className="3xl:mt-[6px] font-circularstd justify-between lg:mt-[3px] mt-[5px] px-[0] self-stretch w-[100%] xl:mt-[4px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[10%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Radio`}</Text>
                      <Image
                        src="img_bg_32.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] mr-[1px] object-contain w-[78%] xl:h-[49px] xl:mb-[1px]"
                        alt="Group651"
                      />
                    </Row>
                    <Row className="3xl:mt-[67px] font-circularstd justify-between lg:mt-[43px] mt-[56px] px-[0] self-stretch w-[100%] xl:mt-[49px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 ml-[1px] mt-[3px] text-bluegray_805 text-fs16 text-left w-[19%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Button Addons`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] font-circularstd h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] mr-[1px] w-[78%] xl:h-[49px] xl:mb-[1px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Image
                            src="img_bg_38.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Image
                            src="img_bg_39.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] left-[0] lg:h-[43px] object-contain w-[11%] xl:h-[49px]"
                            alt="BG"
                          />
                        </Stack>
                        <Text className="3xl:bottom-[15px] 3xl:left-[7px] 3xl:text-fs19 absolute bottom-[13px] font-normal left-[6px] lg:bottom-[10px] lg:left-[4px] lg:text-fs12 text-center text-fs16 text-white_A700 xl:bottom-[11px] xl:left-[5px] xl:text-fs14">{`Go`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[6px] items-end lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Stack className="2xl:h-[56px] 3xl:h-[67px] 3xl:ml-[181px] font-circularstd h-[55px] lg:h-[43px] lg:ml-[117px] ml-[151px] mr-[1px] w-[78%] xl:h-[49px] xl:ml-[134px]">
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_40.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_41.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[11%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Text className="3xl:bottom-[15px] 3xl:right-[6px] 3xl:text-fs19 absolute bottom-[13px] font-normal lg:bottom-[10px] lg:right-[3px] lg:text-fs12 right-[5px] text-center text-fs16 text-white_A700 xl:bottom-[11px] xl:right-[4px] xl:text-fs14">{`Go`}</Text>
                    </Stack>
                    <List
                      className="3xl:ml-[181px] 3xl:mt-[8px] flex-wrap gap-[0] lg:ml-[117px] lg:mt-[5px] min-h-[auto] ml-[151px] mr-[1px] mt-[7px] w-[78%] xl:ml-[134px] xl:mt-[6px]"
                      orientation="vertical"
                    >
                      <Stack className="2xl:h-[56px] 2xl:my-[3px] 3xl:h-[67px] 3xl:my-[4px] font-roboto h-[55px] lg:h-[43px] lg:my-[2px] my-[3.5px] self-stretch w-[100%] xl:h-[49px] xl:my-[3px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Image
                            src="img_bg_38.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Image
                            src="img_bg_42.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] left-[0] lg:h-[43px] object-contain w-[20%] xl:h-[49px]"
                            alt="BG"
                          />
                        </Stack>
                        <Text className="3xl:bottom-[15px] 3xl:left-[9px] 3xl:text-fs19 absolute bottom-[13px] font-normal left-[8px] lg:bottom-[10px] lg:left-[6px] lg:text-fs12 text-center text-fs16 text-white_A700 xl:bottom-[11px] xl:left-[7px] xl:text-fs14">
                          <span className="text-white_A700 text-fs16 font-circularstd text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                            <>{`Action  `}</>
                          </span>
                          <span className="text-white_A700 text-fs16 font-fontawesomefree text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                            <>{``}</>
                          </span>
                        </Text>
                      </Stack>
                      <Line className="w-[49%] opacity-op5 bg-gray_308 flex-wrap min-h-[auto]" />
                      <Stack className="2xl:h-[56px] 2xl:my-[3px] 3xl:h-[67px] 3xl:my-[4px] font-roboto h-[55px] lg:h-[43px] lg:my-[2px] my-[3.5px] self-stretch w-[100%] xl:h-[49px] xl:my-[3px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Image
                            src="img_bg_32.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Image
                            src="img_bg_43.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[20%] xl:h-[49px]"
                            alt="BG"
                          />
                        </Stack>
                        <Text className="3xl:bottom-[15px] 3xl:right-[9px] 3xl:text-fs19 absolute bottom-[13px] font-normal lg:bottom-[10px] lg:right-[6px] lg:text-fs12 right-[8px] text-center text-fs16 text-white_A700 xl:bottom-[11px] xl:right-[7px] xl:text-fs14">
                          <span className="text-white_A700 text-fs16 font-circularstd text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                            <>{`Action  `}</>
                          </span>
                          <span className="text-white_A700 text-fs16 font-fontawesomefree text-center font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                            <>{``}</>
                          </span>
                        </Text>
                      </Stack>
                    </List>
                  </Column>
                </Column>
              </Stack>
            </Row>
            <Stack className="2xl:h-[398px] 3xl:h-[477px] 3xl:mt-[44px] h-[397px] lg:h-[309px] lg:mt-[28px] mt-[37px] self-stretch w-[100%] xl:h-[354px] xl:mt-[32px]">
              <Image
                src="img_textbg_5.svg"
                className="2xl:h-[398px] 3xl:h-[477px] absolute h-[397px] inset-[0] lg:h-[309px] object-cover self-stretch w-[100%] xl:h-[354px]"
                alt="TextBG"
              />
              <Column className="absolute font-circularstd h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[12%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Input Validation`}</Text>
                <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                  <Column className="font-circularstd justify-start self-stretch w-[100%]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-fs16 text-green_300 text-left w-[11%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Input with Success`}</Text>
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] font-materialdesignicons h-[55px] lg:h-[43px] lg:mb-[1px] mb-[2px] w-[80%] xl:h-[49px] xl:mb-[1px]">
                          <Image
                            src="img_bg_44.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="3xl:right-[34px] 3xl:text-fs24 absolute font-normal h-[max-content] inset-y-[0] lg:right-[22px] lg:text-fs15 my-[auto] right-[29px] text-fs20 text-green_300 text-right xl:right-[25px] xl:text-fs17">{``}</Text>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[359px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[232px] lg:text-fs12 mt-[3px] mx-[299px] text-fs16 text-green_300 text-left xl:mt-[2px] xl:mx-[265px] xl:text-fs14">{`Success! you’ve done it.`}</Text>
                  </Column>
                  <Column className="3xl:mt-[24px] font-circularstd justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-circularstd font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-amber_501 text-fs16 text-left w-[11%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Input with Warning`}</Text>
                        <Input
                          className="3xl:pb-[25px] 3xl:pr-[34px] 3xl:pt-[21px] 3xl:text-fs19 bg-transparent border-0 font-materialdesignicons font-normal lg:mb-[1px] lg:pb-[16px] lg:pr-[22px] lg:pt-[14px] lg:text-fs12 mb-[2px] pb-[21px] placeholder:bg-transparent placeholder:text-amber_501 pr-[29px] pt-[18px] text-amber_501 text-fs16 text-right w-[80%] xl:mb-[1px] xl:pb-[18px] xl:pr-[25px] xl:pt-[16px] xl:text-fs14"
                          name="Group659"
                          placeholder={``}
                        ></Input>
                      </Row>
                    </Column>
                    <Text className="2xl:mt-[3px] 3xl:mt-[4px] 3xl:mx-[360px] 3xl:text-fs18 font-normal lg:mt-[2px] lg:mx-[233px] lg:text-fs11 mt-[3.5px] mx-[300px] text-amber_501 text-fs15 text-left xl:mt-[3px] xl:mx-[266px] xl:text-fs13">{`Help block with warning`}</Text>
                  </Column>
                  <Column className="2xl:mt-[22px] 3xl:mt-[27px] font-circularstd justify-start lg:mt-[17px] mt-[22.5px] self-stretch w-[100%] xl:mt-[20px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-circularstd font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-fs16 text-left text-pink_A200 w-[11%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Input with Darger`}</Text>
                        <Input
                          className="3xl:pb-[21px] 3xl:pr-[34px] 3xl:pt-[25px] 3xl:text-fs19 bg-transparent border-0 font-materialdesignicons font-normal lg:mb-[1px] lg:pb-[14px] lg:pr-[22px] lg:pt-[16px] lg:text-fs12 mb-[2px] pb-[18px] placeholder:bg-transparent placeholder:text-pink_A200 pr-[29px] pt-[21px] text-fs16 text-pink_A200 text-right w-[80%] xl:mb-[1px] xl:pb-[16px] xl:pr-[25px] xl:pt-[18px] xl:text-fs14"
                          name="Group660"
                          placeholder={``}
                        ></Input>
                      </Row>
                    </Column>
                    <Text className="2xl:mt-[3px] 3xl:mt-[4px] 3xl:mx-[360px] 3xl:text-fs18 font-normal lg:mt-[2px] lg:mx-[233px] lg:text-fs11 mt-[3.5px] mx-[300px] text-fs15 text-left text-pink_A200 xl:mt-[3px] xl:mx-[266px] xl:text-fs13">{`Help block with warning`}</Text>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <List
              className="3xl:gap-[25px] 3xl:mt-[44px] flex-wrap gap-[21px] grid grid-cols-2 lg:gap-[16px] lg:mt-[28px] min-h-[auto] mt-[37px] self-stretch w-[100%] xl:gap-[18px] xl:mt-[32px]"
              orientation="horizontal"
            >
              <Stack className="2xl:h-[284px] 3xl:h-[340px] h-[283px] lg:h-[221px] w-[100%] xl:h-[252px]">
                <Image
                  src="img_textbg_6.svg"
                  className="2xl:h-[284px] 3xl:h-[340px] absolute h-[283px] inset-[0] lg:h-[221px] object-cover self-stretch w-[100%] xl:h-[252px]"
                  alt="TextBG"
                />
                <Column className="3xl:left-[38px] 3xl:top-[19px] absolute items-center justify-start left-[32px] lg:left-[24px] lg:top-[12px] top-[16px] w-[45%] xl:left-[28px] xl:top-[14px]">
                  <Row className="justify-start self-stretch w-[100%]">
                    <Column className="3xl:mb-[19px] font-circularstd justify-start lg:mb-[12px] mb-[16px] w-[47%] xl:mb-[14px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[7px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[4px] lg:text-fs17 mr-[6px] text-bluegray_805 text-fs22 text-left w-[96%] xl:leading-lh48 xl:mr-[5px] xl:text-fs19">{`Check Boxes`}</Text>
                      <Column className="items-center self-stretch w-[100%]">
                        <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs12 text-bluegray_805 text-fs16 text-left w-[75%] xl:leading-lh48 xl:text-fs14">{`Check Boxes`}</Text>
                          <Image
                            src="img_box.svg"
                            className="2xl:h-[19px] 2xl:mt-[11px] 3xl:h-[22px] 3xl:mb-[22px] 3xl:mt-[13px] h-[18px] lg:h-[14px] lg:mb-[14px] lg:mt-[8px] mb-[19px] mt-[11.5px] object-contain w-[12%] xl:h-[17px] xl:mb-[16px] xl:mt-[10px]"
                            alt="Box"
                          />
                        </Row>
                      </Column>
                      <Column className="3xl:mt-[12px] items-end lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                        <Stack className="2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[12px] h-[18px] lg:h-[14px] lg:ml-[7px] ml-[10px] w-[12%] xl:h-[17px] xl:ml-[8px]">
                          <Image
                            src="img_shape18copy2.svg"
                            className="2xl:h-[19px] 3xl:h-[22px] absolute h-[18px] inset-[0] lg:h-[14px] object-cover self-stretch w-[100%] xl:h-[17px]"
                            alt="Shape18copy2"
                          />
                          <Stack className="2xl:h-[10px] 3xl:h-[11px] absolute bg-gradient20  border border-black_909 border-solid bottom-[4px] h-[9px] lg:bottom-[3px] lg:h-[7px] lg:right-[2px] right-[3px] w-[58%] xl:bottom-[3px] xl:right-[2px]">
                            <Image
                              src="img_layer559.png"
                              className="2xl:h-[10px] 3xl:h-[11px] absolute h-[9px] inset-[0] lg:h-[7px] object-cover self-stretch w-[100%]"
                              alt="Layer559"
                            />
                          </Stack>
                        </Stack>
                      </Column>
                    </Column>
                    <Stack className="2xl:h-[99px] 3xl:h-[118px] 3xl:ml-[16px] 3xl:mr-[69px] 3xl:mt-[51px] font-circularstd h-[98px] lg:h-[77px] lg:ml-[10px] lg:mr-[45px] lg:mt-[33px] ml-[14px] mr-[58px] mt-[43px] w-[32%] xl:h-[88px] xl:ml-[12px] xl:mr-[51px] xl:mt-[38px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs12 mx-[auto] text-bluegray_202 text-fs16 text-left top-[0] w-[max-content] xl:leading-lh48 xl:text-fs14">{`Unchecked`}</Text>
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[83%] xl:leading-lh48 xl:text-fs14">{`checked`}</Text>
                    </Stack>
                  </Row>
                  <Row className="font-circularstd items-center justify-end self-stretch w-[100%]">
                    <Image
                      src="img_box_1.svg"
                      className="2xl:h-[19px] 2xl:mb-[15px] 3xl:h-[22px] 3xl:mb-[18px] 3xl:ml-[171px] 3xl:mt-[15px] h-[18px] lg:h-[14px] lg:mb-[12px] lg:ml-[111px] lg:mt-[10px] mb-[15.5px] ml-[143px] mt-[13px] object-contain opacity-op5 w-[6%] xl:h-[17px] xl:mb-[13px] xl:ml-[127px] xl:mt-[11px]"
                      alt="Box"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[18px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:text-fs12 ml-[15px] text-bluegray_202 text-fs16 text-left w-[48%] xl:leading-lh48 xl:ml-[13px] xl:text-fs14">{`Disable Unchecked`}</Text>
                  </Row>
                  <Row className="font-circularstd items-center justify-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[19px] 2xl:mt-[12px] 3xl:h-[22px] 3xl:mb-[24px] 3xl:ml-[171px] 3xl:mt-[15px] h-[18px] lg:h-[14px] lg:mb-[15px] lg:ml-[111px] lg:mt-[9px] mb-[20px] ml-[143px] mt-[12.5px] opacity-op5 w-[6%] xl:h-[17px] xl:mb-[17px] xl:ml-[127px] xl:mt-[11px]">
                      <Image
                        src="img_shape18copy2_1.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] absolute h-[18px] inset-[0] lg:h-[14px] object-cover self-stretch w-[100%] xl:h-[17px]"
                        alt="Shape18copy2"
                      />
                      <Stack className="2xl:h-[10px] 3xl:h-[11px] absolute bg-gradient20  border border-black_909 border-solid bottom-[4px] h-[9px] lg:bottom-[3px] lg:h-[7px] lg:right-[2px] right-[3px] w-[58%] xl:bottom-[3px] xl:right-[2px]">
                        <Image
                          src="img_layer559.png"
                          className="2xl:h-[10px] 3xl:h-[11px] absolute h-[9px] inset-[0] lg:h-[7px] object-cover self-stretch w-[100%]"
                          alt="Layer559"
                        />
                      </Stack>
                    </Stack>
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[18px] 3xl:mr-[24px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:mr-[15px] lg:text-fs12 ml-[15px] mr-[20px] text-bluegray_202 text-fs16 text-left w-[43%] xl:leading-lh48 xl:ml-[13px] xl:mr-[17px] xl:text-fs14">{`Disable checked`}</Text>
                  </Row>
                </Column>
              </Stack>
              <Stack className="2xl:h-[284px] 3xl:h-[340px] h-[283px] lg:h-[221px] w-[100%] xl:h-[252px]">
                <Image
                  src="img_textbg_7.svg"
                  className="2xl:h-[284px] 3xl:h-[340px] absolute h-[283px] inset-[0] lg:h-[221px] object-cover self-stretch w-[100%] xl:h-[252px]"
                  alt="TextBG"
                />
                <Column className="3xl:left-[38px] 3xl:top-[19px] absolute items-center justify-start left-[32px] lg:left-[24px] lg:top-[12px] top-[16px] w-[43%] xl:left-[28px] xl:top-[14px]">
                  <Row className="justify-start self-stretch w-[100%]">
                    <Column className="3xl:mb-[19px] justify-start lg:mb-[12px] mb-[16px] w-[50%] xl:mb-[14px]">
                      <Column className="items-center self-stretch w-[100%]">
                        <Stack className="2xl:h-[98px] 3xl:h-[117px] font-circularstd h-[97px] lg:h-[76px] self-stretch w-[100%] xl:h-[87px]">
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 absolute font-normal leading-lh5400 left-[1px] lg:leading-lh42 lg:text-fs17 text-bluegray_805 text-fs22 text-left top-[0] w-[91%] xl:leading-lh48 xl:text-fs19">{`Radio Boxes`}</Text>
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs12 text-bluegray_805 text-fs16 text-left w-[72%] xl:leading-lh48 xl:text-fs14">{`Radio Boxes`}</Text>
                          <Image
                            src="img_radio.svg"
                            className="2xl:h-[19px] 3xl:bottom-[22px] 3xl:h-[22px] absolute bottom-[19px] h-[18px] lg:bottom-[14px] lg:h-[14px] object-contain right-[0] rounded-radius50 w-[11%] xl:bottom-[16px] xl:h-[17px]"
                            alt="Radio"
                          />
                        </Stack>
                      </Column>
                      <Image
                        src="img_radio_1.png"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[12px] 3xl:mt-[12px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:ml-[7px] lg:mt-[7px] lg:w-[14px] ml-[10px] mt-[10px] object-contain w-[18px] xl:h-[17px] xl:ml-[8px] xl:mt-[8px] xl:w-[16px]"
                        alt="Radio"
                      />
                    </Column>
                    <Stack className="2xl:h-[99px] 3xl:h-[118px] 3xl:ml-[18px] 3xl:mr-[48px] 3xl:mt-[51px] font-circularstd h-[98px] lg:h-[77px] lg:ml-[11px] lg:mr-[31px] lg:mt-[33px] ml-[15px] mr-[40px] mt-[43px] w-[34%] xl:h-[88px] xl:ml-[13px] xl:mr-[35px] xl:mt-[38px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs12 mx-[auto] text-bluegray_202 text-fs16 text-left top-[0] w-[max-content] xl:leading-lh48 xl:text-fs14">{`Unchecked`}</Text>
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[84%] xl:leading-lh48 xl:text-fs14">{`Selected`}</Text>
                    </Stack>
                  </Row>
                  <Row className="font-circularstd items-center justify-center self-stretch w-[100%]">
                    <Image
                      src="img_radio_2.svg"
                      className="2xl:h-[19px] 2xl:mb-[15px] 3xl:h-[22px] 3xl:mb-[18px] 3xl:ml-[171px] 3xl:mt-[15px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mb-[12px] lg:ml-[111px] lg:mt-[10px] lg:w-[14px] mb-[15.5px] ml-[143px] mt-[13px] object-contain opacity-op5 w-[18px] xl:h-[17px] xl:mb-[13px] xl:ml-[127px] xl:mt-[11px] xl:w-[16px]"
                      alt="Radio"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[19px] 3xl:mr-[25px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[12px] lg:mr-[16px] lg:text-fs12 ml-[16px] mr-[21px] text-bluegray_202 text-fs16 text-left w-[39%] xl:leading-lh48 xl:ml-[14px] xl:mr-[18px] xl:text-fs14">{`Disable Radio`}</Text>
                  </Row>
                  <Row className="font-circularstd items-center justify-end self-stretch w-[100%]">
                    <Image
                      src="img_radio_3.png"
                      className="2xl:h-[19px] 2xl:mt-[12px] 3xl:h-[22px] 3xl:mb-[24px] 3xl:ml-[171px] 3xl:mt-[15px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mb-[15px] lg:ml-[111px] lg:mt-[9px] lg:w-[14px] mb-[20px] ml-[143px] mt-[12.5px] object-contain opacity-op5 w-[18px] xl:h-[17px] xl:mb-[17px] xl:ml-[127px] xl:mt-[11px] xl:w-[16px]"
                      alt="Radio"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[19px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_202 text-fs16 text-left w-[46%] xl:leading-lh48 xl:ml-[14px] xl:text-fs14">{`Disable Selected`}</Text>
                  </Row>
                </Column>
              </Stack>
            </List>
            <Row className="3xl:mt-[44px] justify-between lg:mt-[28px] mt-[37px] px-[0] self-stretch w-[100%] xl:mt-[32px]">
              <Stack className="2xl:h-[411px] 3xl:h-[493px] h-[410px] lg:h-[319px] w-[49%] xl:h-[365px]">
                <Image
                  src="img_textbg_8.svg"
                  className="2xl:h-[411px] 3xl:h-[493px] absolute h-[410px] inset-[0] lg:h-[319px] object-cover self-stretch w-[100%] xl:h-[365px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[18px] absolute inset-x-[0] justify-start lg:top-[11px] mx-[auto] top-[15px] w-[92%] xl:top-[13px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="items-center justify-start self-stretch w-[100%]">
                      <Stack className="2xl:h-[141px] 3xl:h-[169px] font-circularstd h-[140px] lg:h-[109px] self-stretch w-[100%] xl:h-[125px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 absolute font-normal leading-lh5400 left-[4px] lg:leading-lh42 lg:left-[3px] lg:text-fs17 text-bluegray_805 text-fs22 text-left top-[0] w-[36%] xl:leading-lh48 xl:left-[3px] xl:text-fs19">{`Vertical from with icon`}</Text>
                        <Stack className="2xl:h-[99px] 3xl:h-[118px] absolute bottom-[0] font-circularstd h-[98px] lg:h-[77px] self-stretch w-[100%] xl:h-[88px]">
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs12 text-bluegray_805 text-fs16 text-left top-[0] w-[16%] xl:leading-lh48 xl:left-[1px] xl:text-fs14">{`User Name*`}</Text>
                          <Stack className="2xl:h-[58px] 3xl:h-[69px] absolute bottom-[0] font-materialdesignicons h-[57px] lg:h-[45px] self-stretch w-[100%] xl:h-[51px]">
                            <Image
                              src="img_bg_45.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_46.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[8%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Text className="3xl:left-[8px] 3xl:text-fs19 3xl:top-[18px] absolute font-materialdesignicons font-normal left-[7px] lg:left-[5px] lg:text-fs12 lg:top-[11px] text-center text-fs16 text-gray_612 top-[15px] xl:left-[6px] xl:text-fs14 xl:top-[13px]">{``}</Text>
                            <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[86px] 3xl:text-fs19 absolute bottom-[0] font-circularstd font-normal leading-lh5400 left-[72px] lg:leading-lh42 lg:left-[56px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[15%] xl:leading-lh48 xl:left-[64px] xl:text-fs14">{`User Name`}</Text>
                          </Stack>
                        </Stack>
                      </Stack>
                      <Stack className="2xl:h-[99px] 3xl:h-[118px] font-circularstd h-[98px] lg:h-[77px] self-stretch w-[100%] xl:h-[88px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-circularstd font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs12 text-bluegray_805 text-fs16 text-left top-[0] w-[15%] xl:leading-lh48 xl:left-[1px] xl:text-fs14">{`Password*`}</Text>
                        <Stack className="2xl:h-[58px] 3xl:h-[69px] absolute bottom-[0] font-materialdesignicons h-[57px] lg:h-[45px] self-stretch w-[100%] xl:h-[51px]">
                          <Image
                            src="img_bg_47.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                            alt="BG"
                          />
                          <Image
                            src="img_bg_48.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[8%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="3xl:left-[8px] 3xl:text-fs19 3xl:top-[18px] absolute font-materialdesignicons font-normal left-[7px] lg:left-[5px] lg:text-fs12 lg:top-[11px] text-center text-fs16 text-gray_612 top-[15px] xl:left-[6px] xl:text-fs14 xl:top-[13px]">{``}</Text>
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[86px] 3xl:text-fs19 absolute bottom-[0] font-circularstd font-normal leading-lh5400 left-[72px] lg:leading-lh42 lg:left-[56px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[14%] xl:leading-lh48 xl:left-[64px] xl:text-fs14">{`Password`}</Text>
                        </Stack>
                        <Text className="3xl:bottom-[21px] 3xl:right-[22px] 3xl:text-fs19 absolute bottom-[18px] font-materialdesignicons font-normal lg:bottom-[14px] lg:right-[14px] lg:text-fs12 right-[19px] text-bluegray_202 text-fs16 text-right xl:bottom-[16px] xl:right-[16px] xl:text-fs14">{``}</Text>
                      </Stack>
                    </Column>
                  </Column>
                  <Row className="3xl:mr-[12px] font-circularstd items-center justify-start lg:mr-[7px] lg:mt-[2px] mr-[10px] mt-[3px] w-[24%] xl:mr-[8px] xl:mt-[2px]">
                    <Image
                      src="img_bg_49.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[20px] 3xl:mt-[14px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mb-[13px] lg:mt-[9px] lg:w-[19px] mb-[17px] mt-[12px] object-contain w-[25px] xl:h-[23px] xl:mb-[15px] xl:mt-[10px] xl:w-[22px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[13px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[8px] lg:text-fs12 ml-[11px] text-bluegray_202 text-fs16 text-left w-[79%] xl:leading-lh48 xl:ml-[9px] xl:text-fs14">{`Remember Me`}</Text>
                  </Row>
                  <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                    <Row className="items-center justify-start self-stretch w-[100%]">
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] font-circularstd h-[54px] lg:h-[42px] mb-[1px] w-[18%] xl:h-[49px]">
                        <Image
                          src="img_bg_50.svg"
                          className="2xl:h-[43px] 3xl:h-[51px] 3xl:inset-y-[7px] absolute h-[42px] inset-x-[0] inset-y-[6px] lg:h-[33px] lg:inset-y-[4px] object-cover self-stretch w-[100%] xl:h-[38px] xl:inset-y-[5px]"
                          alt="BG"
                        />
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[22px] 3xl:right-[21px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[19px] lg:inset-x-[14px] lg:leading-lh42 lg:text-fs14 right-[18px] text-center text-fs18 text-white_A700 w-[70%] xl:inset-x-[16px] xl:leading-lh48 xl:text-fs16">{`Submit`}</Text>
                      </Stack>
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[8px] 3xl:mr-[547px] font-circularstd h-[54px] lg:h-[42px] lg:ml-[5px] lg:mr-[354px] ml-[7px] mr-[456px] mt-[1px] w-[16%] xl:h-[49px] xl:ml-[6px] xl:mr-[405px]">
                        <Image
                          src="img_bg_51.svg"
                          className="2xl:h-[43px] 3xl:bottom-[8px] 3xl:h-[51px] 3xl:top-[6px] absolute bottom-[7px] h-[42px] inset-x-[0] lg:bottom-[5px] lg:h-[33px] lg:top-[3px] object-cover self-stretch top-[5px] w-[100%] xl:bottom-[6px] xl:h-[38px] xl:top-[4px]"
                          alt="BG"
                        />
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[18px] 3xl:right-[16px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[15px] lg:leading-lh42 lg:left-[11px] lg:right-[10px] lg:text-fs14 right-[14px] text-bluegray_805 text-center text-fs18 w-[75%] xl:leading-lh48 xl:left-[13px] xl:right-[12px] xl:text-fs16">{`Cancel`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[385px] 3xl:h-[462px] 3xl:mb-[31px] h-[384px] lg:h-[299px] lg:mb-[20px] mb-[26px] w-[49%] xl:h-[342px] xl:mb-[23px]">
                <Image
                  src="img_textbg_9.svg"
                  className="2xl:h-[385px] 3xl:h-[462px] absolute h-[384px] inset-[0] lg:h-[299px] object-cover self-stretch w-[100%] xl:h-[342px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[19px] absolute font-circularstd inset-x-[0] justify-start lg:top-[12px] mx-[auto] top-[16px] w-[92%] xl:top-[14px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 ml-[1px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[28%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Horizontal Forms`}</Text>
                  <Column className="items-center lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                    <List
                      className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                      orientation="vertical"
                    >
                      <Column className="2xl:my-[4px] 3xl:my-[5px] font-circularstd justify-start lg:my-[3px] my-[4.75px] w-[100%] xl:my-[4px]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                            <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[16%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`User Name*`}</Text>
                            <Stack className="2xl:h-[58px] 3xl:h-[69px] font-materialdesignicons h-[57px] lg:h-[45px] w-[79%] xl:h-[51px]">
                              <Image
                                src="img_bg_52.svg"
                                className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                                alt="BG"
                              />
                              <Image
                                src="img_bg_53.svg"
                                className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[11%] xl:h-[49px]"
                                alt="BG"
                              />
                              <Text className="3xl:left-[8px] 3xl:text-fs19 3xl:top-[18px] absolute font-materialdesignicons font-normal left-[7px] lg:left-[5px] lg:text-fs12 lg:top-[11px] text-center text-fs16 text-gray_612 top-[15px] xl:left-[6px] xl:text-fs14 xl:top-[13px]">{``}</Text>
                              <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[86px] 3xl:text-fs19 absolute bottom-[0] font-circularstd font-normal leading-lh5400 left-[72px] lg:leading-lh42 lg:left-[56px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[20%] xl:leading-lh48 xl:left-[64px] xl:text-fs14">{`User Name`}</Text>
                            </Stack>
                          </Row>
                        </Column>
                        <Text className="2xl:mt-[4px] 3xl:mt-[5px] 3xl:mx-[181px] 3xl:text-fs18 font-normal lg:mt-[3px] lg:mx-[117px] lg:text-fs11 mt-[4.5px] mx-[151px] text-bluegray_202 text-fs15 text-left xl:mt-[4px] xl:mx-[134px] xl:text-fs13">{`Ex:black-level help text here.`}</Text>
                      </Column>
                      <Row className="2xl:my-[4px] 3xl:my-[5px] font-circularstd justify-between lg:my-[3px] my-[4.75px] px-[0] self-stretch w-[100%] xl:my-[4px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs12 mt-[3px] text-bluegray_805 text-fs16 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs14">{`Password*`}</Text>
                        <Stack className="2xl:h-[58px] 3xl:h-[69px] font-materialdesignicons h-[57px] lg:h-[45px] w-[79%] xl:h-[51px]">
                          <Stack className="2xl:h-[58px] 3xl:h-[69px] absolute h-[57px] inset-[0] lg:h-[45px] self-stretch w-[100%] xl:h-[51px]">
                            <Image
                              src="img_bg_54.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[2px] h-[55px] inset-x-[0] lg:bottom-[1px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_55.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-y-[0] left-[0] lg:h-[43px] my-[auto] object-contain w-[11%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Text className="3xl:left-[8px] 3xl:text-fs19 3xl:top-[18px] absolute font-materialdesignicons font-normal left-[7px] lg:left-[5px] lg:text-fs12 lg:top-[11px] text-center text-fs16 text-gray_612 top-[15px] xl:left-[6px] xl:text-fs14 xl:top-[13px]">{``}</Text>
                            <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[86px] 3xl:text-fs19 absolute bottom-[0] font-circularstd font-normal leading-lh5400 left-[72px] lg:leading-lh42 lg:left-[56px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[18%] xl:leading-lh48 xl:left-[64px] xl:text-fs14">{`Password`}</Text>
                          </Stack>
                          <Text className="3xl:right-[21px] 3xl:text-fs19 3xl:top-[18px] absolute font-normal lg:right-[14px] lg:text-fs12 lg:top-[11px] right-[18px] text-bluegray_202 text-fs16 text-right top-[15px] xl:right-[16px] xl:text-fs14 xl:top-[13px]">{``}</Text>
                        </Stack>
                      </Row>
                    </List>
                  </Column>
                  <Row className="3xl:mx-[180px] font-circularstd items-center justify-start lg:mt-[2px] lg:mx-[116px] mt-[3px] mx-[150px] w-[24%] xl:mt-[2px] xl:mx-[133px]">
                    <Image
                      src="img_bg_56.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[20px] 3xl:mt-[14px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mb-[13px] lg:mt-[9px] lg:w-[19px] mb-[17px] mt-[12px] object-contain w-[25px] xl:h-[23px] xl:mb-[15px] xl:mt-[10px] xl:w-[22px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[13px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[8px] lg:text-fs12 ml-[11px] text-bluegray_202 text-fs16 text-left w-[79%] xl:leading-lh48 xl:ml-[9px] xl:text-fs14">{`Remember Me`}</Text>
                  </Row>
                  <Column className="items-end lg:mt-[1px] mt-[2px] self-stretch w-[100%] xl:mt-[1px]">
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[12px] font-circularstd h-[54px] lg:h-[42px] lg:ml-[7px] ml-[10px] w-[18%] xl:h-[49px] xl:ml-[8px]">
                      <Image
                        src="img_bg_57.svg"
                        className="2xl:h-[43px] 3xl:h-[51px] absolute bottom-[4px] h-[42px] lg:bottom-[3px] lg:h-[33px] object-cover self-stretch w-[100%] xl:bottom-[3px] xl:h-[38px]"
                        alt="BG"
                      />
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[24px] 3xl:right-[22px] 3xl:text-fs21 absolute font-normal inset-y-[0] leading-lh5400 left-[20px] lg:leading-lh42 lg:left-[15px] lg:right-[14px] lg:text-fs14 right-[19px] text-center text-fs18 text-white_A700 w-[69%] xl:leading-lh48 xl:left-[17px] xl:right-[16px] xl:text-fs16">{`Sign In`}</Text>
                    </Stack>
                  </Column>
                </Column>
              </Stack>
            </Row>
          </Column>
        </Stack>
      </Stack>
    </Column>
  );
};

export default ArtboardPage;
