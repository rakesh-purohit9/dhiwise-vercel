import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { List } from "components/List";

const Artboard3Page = () => {
  return (
    <Column className="bg-gray_105 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1607px] 3xl:h-[1928px] h-[1605px] lg:h-[1249px] self-stretch w-[100%] xl:h-[1428px]">
        <Stack className="2xl:h-[1607px] 3xl:h-[1928px] absolute font-circularstd h-[1605px] inset-[0] lg:h-[1249px] self-stretch w-[100%] xl:h-[1428px]">
          <Image
            src="img_colorfill1_1.png"
            className="2xl:h-[1602px] 3xl:bottom-[6px] 3xl:h-[1922px] absolute bottom-[5px] h-[1600px] inset-x-[0] lg:bottom-[3px] lg:h-[1245px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[4px] xl:h-[1424px]"
            alt="ColorFill1"
          />
          <Image
            src="img_bg_94.svg"
            className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] left-[0] lg:h-[77px] object-contain top-[0] w-[17%] xl:h-[89px]"
            alt="BG"
          />
          <Row className="2xl:top-[32px] 3xl:left-[32px] 3xl:top-[39px] absolute items-end justify-between left-[27px] lg:left-[21px] lg:top-[25px] px-[0] top-[32.5px] w-[14%] xl:left-[24px] xl:top-[28px]">
            <Text className="3xl:text-fs31 font-medium lg:text-fs20 text-fs26 text-left text-white_A700 xl:text-fs23">{`Forms`}</Text>
            <Image
              src="img_combinedshape_2.svg"
              className="2xl:h-[21px] 2xl:mb-[4px] 2xl:mt-[6px] 3xl:h-[25px] 3xl:mb-[4px] 3xl:mt-[7px] h-[20.73px] lg:h-[17px] lg:mb-[3px] lg:mt-[4px] mb-[4.1399994px] mt-[6.130001px] object-contain w-[8%] xl:h-[19px] xl:mb-[3px] xl:mt-[5px]"
              alt="Combinedshape"
            />
          </Row>
          <div className="absolute bottom-[4px] lg:bottom-[3px] right-[0] w-[83%] xl:bottom-[3px]">
            <Stack className="2xl:h-[82px] 3xl:h-[98px] font-circularstd h-[81px] lg:h-[63px] self-stretch w-[100%] xl:h-[73px]">
              <Image
                src="img_bg_95.svg"
                className="2xl:h-[82px] 3xl:h-[98px] absolute h-[81px] inset-[0] lg:h-[63px] object-cover self-stretch w-[100%] xl:h-[73px]"
                alt="BG"
              />
              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center leading-lh5000 lg:leading-lh38 lg:text-fs10 m-[auto] text-bluegray_408 text-center text-fs14 w-[max-content] xl:leading-lh44 xl:text-fs12">
                <span className="text-bluegray_408 text-fs14 font-circularstd text-center font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                  <>{`Copyrights © `}</>
                </span>
                <span className="text-deep_purple_A200 text-fs14 font-circularstd text-center font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                  <>{`DigitalHeaps`}</>
                </span>
              </Text>
            </Stack>
          </div>
          <Stack className="2xl:h-[1511px] 3xl:h-[1812px] absolute bottom-[0] h-[1509px] left-[0] lg:h-[1174px] w-[17%] xl:h-[1343px]">
            <Image
              src="img_sidebarbg_3.svg"
              className="2xl:h-[1511px] 3xl:h-[1812px] absolute h-[1509px] inset-[0] lg:h-[1174px] object-cover self-stretch w-[100%] xl:h-[1343px]"
              alt="SidebarBG"
            />
            <Column className="3xl:bottom-[129px] absolute bottom-[108px] items-center justify-start lg:bottom-[84px] self-stretch w-[100%] xl:bottom-[96px]">
              <Line className="bg-bluegray_202 h-[4px] opacity-op4 self-stretch w-[100%]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Stack className="2xl:h-[60px] 3xl:h-[71px] 3xl:mt-[67px] h-[59px] lg:h-[46px] lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:h-[53px] xl:mt-[49px]">
                <Image
                  src="img_hoverbg_3.svg"
                  className="2xl:h-[60px] 3xl:h-[71px] absolute h-[59px] inset-[0] lg:h-[46px] object-cover opacity-op1 self-stretch w-[100%] xl:h-[53px]"
                  alt="HoverBG"
                />
                <Line className="2xl:h-[60px] 3xl:h-[71px] absolute bg-deep_purple_A200 h-[59px] left-[0] lg:h-[46px] shadow-bs42 w-[4px] xl:h-[53px]" />
              </Stack>
              <Line className="3xl:mt-[220px] bg-bluegray_202 h-[4px] lg:mt-[143px] mt-[184px] opacity-op4 self-stretch w-[100%] xl:mt-[163px]" />
            </Column>
          </Stack>
          <Image
            src="img_bg_60.svg"
            className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] lg:h-[77px] object-contain right-[0] top-[0] w-[83%] xl:h-[89px]"
            alt="BG"
          />
          <Image
            src="img_breadcrumbbg_1.svg"
            className="2xl:h-[64px] 3xl:h-[76px] 3xl:top-[115px] absolute h-[63px] lg:h-[49px] lg:top-[74px] object-contain opacity-op1 right-[0] top-[96px] w-[83%] xl:h-[57px] xl:top-[85px]"
            alt="BreadCrumbBG"
          />
        </Stack>
        <Stack className="2xl:h-[1542px] 3xl:h-[1850px] absolute h-[1540px] inset-[0] justify-center lg:h-[1198px] m-[auto] w-[97%] xl:h-[1370px]">
          <Row className="absolute inset-[0] justify-between px-[0] self-stretch w-[100%]">
            <Column className="3xl:mt-[129px] font-circularstd justify-start lg:mt-[84px] mt-[108px] w-[8%] xl:mt-[96px]">
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:text-fs9 ml-[3.5px] mr-[10px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[72%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:text-fs10">{`Navigations`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsnav_3.svg"
                    className="2xl:h-[176px] 2xl:mt-[29px] 3xl:h-[211px] 3xl:mt-[35px] h-[175px] lg:h-[137px] lg:mb-[3px] lg:mt-[22px] mb-[4px] ml-[1px] mt-[29.5px] object-contain w-[10%] xl:h-[156px] xl:mb-[3px] xl:mt-[26px]"
                    alt="IconsNav"
                  />
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[19px] 3xl:mr-[14px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[12px] lg:mr-[9px] lg:text-fs12 ml-[16px] mr-[12px] text-fs16 text-gray_612 text-left w-[72%] xl:leading-lh48 xl:ml-[14px] xl:mr-[10px] xl:text-fs14">{`Dashboards Layouts Mailbox Ecommerce`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 2xl:ml-[2px] 3xl:leading-lh60 3xl:ml-[3px] 3xl:mr-[12px] 3xl:mt-[45px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[1px] lg:mr-[7px] lg:mt-[29px] lg:text-fs9 ml-[2.5px] mr-[10px] mt-[38px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[38%] xl:leading-lh44 xl:ml-[2px] xl:mr-[8px] xl:mt-[33px] xl:text-fs10">{`Apps`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsapps_3.svg"
                    className="2xl:h-[288px] 3xl:h-[345px] 3xl:mt-[36px] h-[286.99px] lg:h-[224px] lg:mt-[23px] mb-[1px] ml-[1px] mt-[30px] object-contain w-[11%] xl:h-[256px] xl:mt-[26px]"
                    alt="IconsApps"
                  />
                  <Text className="2xl:leading-lh54 2xl:ml-[13px] 3xl:leading-lh64 3xl:ml-[16px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[10px] lg:mr-[2px] lg:text-fs12 ml-[13.989998px] mr-[3px] text-fs16 text-gray_612 text-left w-[78%] xl:leading-lh48 xl:ml-[12px] xl:mr-[2px] xl:text-fs14">{`Calendar Messanger Contacts File Manager To-Do News Feed`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[44px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:mt-[28px] lg:text-fs9 ml-[3.5px] mr-[10px] mt-[37px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[43%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:mt-[32px] xl:text-fs10">{`Pages`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconspages_3.svg"
                    className="2xl:h-[293px] 2xl:mt-[26px] 3xl:h-[351px] 3xl:mt-[31px] h-[292.01px] lg:h-[228px] lg:mt-[20px] ml-[1px] mt-[25.98999px] object-contain w-[10%] xl:h-[260px] xl:mt-[23px]"
                    alt="IconsPages"
                  />
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[18px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-gray_612 text-left w-[80%] xl:leading-lh48 xl:ml-[13px] xl:text-fs14">{`Invoices Events 404 Page Projects Coming Soon Profile`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[44px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:mt-[28px] lg:text-fs9 ml-[3.5px] mr-[10px] mt-[37px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[82%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:mt-[32px] xl:text-fs10">{`User Interface`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsui_3.svg"
                    className="2xl:h-[286px] 2xl:mt-[30px] 3xl:h-[343px] 3xl:mt-[36px] h-[285px] lg:h-[222px] lg:mb-[2px] lg:mt-[23px] mb-[3px] mt-[30.5px] object-contain w-[10%] xl:h-[254px] xl:mb-[2px] xl:mt-[27px]"
                    alt="IconsUI"
                  />
                  <Text className="2xl:leading-lh54 2xl:ml-[15px] 3xl:leading-lh64 3xl:ml-[17px] 3xl:mr-[13px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:mr-[8px] lg:text-fs12 ml-[14.989998px] mr-[11px] text-deep_purple_A200 text-fs16 text-left w-[73%] xl:leading-lh48 xl:ml-[13px] xl:mr-[9px] xl:text-fs14">
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
            <Column className="3xl:mb-[1685px] items-center justify-start lg:mb-[1092px] mb-[1404px] w-[84%] xl:mb-[1248px]">
              <Row className="font-circularstd items-center justify-start self-stretch w-[100%]">
                <div className="bg-transparent border-0 w-[23%] input-wrap">
                  <Image
                    src="img_combined_shape_6597.svg"
                    className="absolute top-[37.78px] bottom-[36.78px] left-[23.149994px] bg-transparent border-0 lg:top-[29px] lg:bottom-[28px] lg:left-[18px] xl:top-[33px] xl:bottom-[32px] xl:left-[20px] 2xl:top-[37px] 2xl:bottom-[36px] 2xl:left-[23px] 3xl:top-[45px] 3xl:bottom-[44px] 3xl:left-[27px]"
                    alt="Combined shape 6597"
                  />
                  <Input
                    className="2xl:pb-[36px] 2xl:pl-[46px] 2xl:pt-[37px] 3xl:pb-[44px] 3xl:pl-[55px] 3xl:pt-[45px] 3xl:text-fs18 bg-transparent border-0 font-normal lg:pb-[28px] lg:pl-[36px] lg:pt-[29px] lg:text-fs11 pb-[36.78px] pl-[46.589994px] placeholder:bg-transparent placeholder:text-gray_508 pt-[37.78px] text-fs15 text-gray_508 text-left w-[100%] xl:pb-[32px] xl:pl-[41px] xl:pt-[33px] xl:text-fs13"
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
                      src="img_circle_3.svg"
                      className="2xl:h-[12px] 3xl:h-[14px] 3xl:w-[13px] absolute h-[11px] lg:h-[9px] lg:w-[8px] object-contain right-[0] top-[0] w-[11px] xl:h-[10px] xl:w-[9px]"
                      alt="Circle"
                    />
                  </Stack>
                  <Row className="3xl:ml-[39px] items-end justify-between lg:ml-[25px] ml-[33px] px-[0] w-[64%] xl:ml-[29px]">
                    <Image
                      src="img_image_11.svg"
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
                  className="2xl:h-[17px] 2xl:mb-[18px] 2xl:ml-[15px] 2xl:mr-[25px] 3xl:h-[20px] 3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[30px] 3xl:mt-[22px] h-[15.99px] lg:h-[13px] lg:ml-[11px] lg:mr-[19px] lg:my-[14px] mb-[18.010002px] ml-[15.01001px] mr-[25.02002px] mt-[19px] object-contain w-[1%] xl:h-[15px] xl:ml-[13px] xl:mr-[22px] xl:my-[16px]"
                  alt="Combinedshape"
                />
              </Row>
              <Row className="3xl:mt-[32px] font-circularstd items-center justify-between lg:mt-[21px] mt-[27px] px-[0] self-stretch w-[100%] xl:mt-[24px]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[3px] lg:mt-[1px] lg:text-fs17 ml-[4px] mt-[2px] text-deep_purple_A200 text-fs22 text-left tracking-ls1 w-[10%] xl:leading-lh48 xl:ml-[3px] xl:mt-[1px] xl:text-fs19">{`Form Pickers`}</Text>
                <Row className="font-circularstd items-center justify-evenly mb-[1px] px-[0] w-[15%]">
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[27%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-deep_purple_A200 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Home`}</Text>
                    <Text className="2xl:leading-lh54 2xl:right-[12px] 3xl:leading-lh64 3xl:right-[15px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12.5px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[54%] xl:leading-lh48 xl:right-[11px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[27%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-bluegray_202 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Forms`}</Text>
                    <Text className="2xl:leading-lh54 2xl:right-[12px] 3xl:leading-lh64 3xl:right-[15px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12.5px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[55%] xl:leading-lh48 xl:right-[11px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 mt-[1px] text-bluegray_202 text-fs14 text-left tracking-ls1 w-[46%] xl:leading-lh48 xl:text-fs12">{`Form Pickers`}</Text>
                </Row>
              </Row>
            </Column>
          </Row>
          <Column className="3xl:right-[28px] 3xl:top-[232px] absolute items-center justify-start lg:right-[18px] lg:top-[150px] right-[24px] top-[194px] w-[83%] xl:right-[21px] xl:top-[172px]">
            <Stack className="2xl:h-[212px] 3xl:h-[254px] h-[211px] lg:h-[165px] w-[100%] xl:h-[188px]">
              <Image
                src="img_textbg_14.svg"
                className="2xl:h-[212px] 3xl:h-[254px] absolute h-[211px] inset-[0] lg:h-[165px] object-cover self-stretch w-[100%] xl:h-[188px]"
                alt="TextBG"
              />
              <Row className="3xl:top-[18px] absolute inset-x-[0] items-end justify-between lg:top-[11px] mx-[auto] px-[0] top-[15px] w-[96%] xl:top-[13px]">
                <Stack className="2xl:h-[147px] 3xl:h-[176px] font-circularstd h-[146px] lg:h-[114px] w-[49%] xl:h-[130px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 absolute font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs17 text-bluegray_805 text-fs22 text-left top-[0] w-[33%] xl:leading-lh48 xl:left-[1px] xl:text-fs19">{`Clockpicker (Default)`}</Text>
                  <Stack className="2xl:h-[100px] 3xl:h-[119px] absolute bottom-[0] h-[99px] lg:h-[77px] self-stretch w-[100%] xl:h-[89px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-circularstd font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[28%] xl:leading-lh48 xl:left-[1px] xl:text-fs16">{`A Simple Clockpicker`}</Text>
                    <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[0] h-[55px] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                      <Image
                        src="img_bg_96.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Image
                        src="img_bg_97.svg"
                        className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[8%] xl:h-[49px]"
                        alt="BG"
                      />
                    </Stack>
                    <Text className="3xl:bottom-[18px] 3xl:text-fs21 absolute bottom-[15px] font-materialdesignicons font-normal lg:bottom-[11px] lg:right-[3px] lg:text-fs14 right-[4px] text-bluegray_202 text-center text-fs18 xl:bottom-[13px] xl:right-[3px] xl:text-fs16">{``}</Text>
                  </Stack>
                  <Text className="3xl:bottom-[14px] 3xl:left-[26px] 3xl:text-fs21 absolute bottom-[12px] font-normal left-[22px] lg:bottom-[9px] lg:left-[17px] lg:text-fs14 text-bluegray_202 text-fs18 text-left xl:bottom-[10px] xl:left-[19px] xl:text-fs16">{`09:30`}</Text>
                </Stack>
                <Stack className="2xl:h-[100px] 3xl:h-[119px] 3xl:mt-[56px] font-circularstd h-[99px] lg:h-[77px] lg:mt-[36px] mt-[47px] w-[49%] xl:h-[89px] xl:mt-[41px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-circularstd font-normal leading-lh5400 left-[3px] lg:leading-lh42 lg:left-[2px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[32%] xl:leading-lh48 xl:left-[2px] xl:text-fs16">{`Clockpicker with Position`}</Text>
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[0] font-circularstd h-[55px] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                    <Input
                      className="3xl:pb-[18px] 3xl:pl-[26px] 3xl:pt-[26px] 3xl:text-fs21 absolute bg-transparent border-0 font-normal inset-[0] lg:pb-[11px] lg:pl-[17px] lg:pt-[17px] lg:text-fs14 pb-[15px] pl-[22px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[22px] self-stretch text-bluegray_202 text-fs18 text-left w-[100%] xl:pb-[13px] xl:pl-[19px] xl:pt-[19px] xl:text-fs16"
                      name="Group691"
                      placeholder={`09:30`}
                    ></Input>
                    <Image
                      src="img_bg_97.svg"
                      className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[8%] xl:h-[49px]"
                      alt="BG"
                    />
                  </Stack>
                  <Text className="3xl:bottom-[18px] 3xl:text-fs21 absolute bottom-[15px] font-materialdesignicons font-normal lg:bottom-[11px] lg:right-[3px] lg:text-fs14 right-[4px] text-bluegray_202 text-center text-fs18 xl:bottom-[13px] xl:right-[3px] xl:text-fs16">{``}</Text>
                </Stack>
              </Row>
            </Stack>
            <Stack className="2xl:h-[217px] 3xl:h-[260px] 3xl:mt-[40px] h-[216px] lg:h-[168px] lg:mt-[26px] mt-[34px] w-[100%] xl:h-[193px] xl:mt-[30px]">
              <Image
                src="img_textbg_15.svg"
                className="2xl:h-[217px] 3xl:h-[260px] absolute h-[216px] inset-[0] lg:h-[168px] object-cover self-stretch w-[100%] xl:h-[193px]"
                alt="TextBG"
              />
              <Row className="3xl:top-[21px] absolute inset-x-[0] items-end justify-start lg:top-[14px] mx-[auto] top-[18px] w-[96%] xl:top-[16px]">
                <Column className="font-circularstd justify-start w-[33%]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[3px] lg:mr-[7px] lg:text-fs17 ml-[4px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[49%] xl:leading-lh48 xl:ml-[3px] xl:mr-[8px] xl:text-fs19">{`Clockpicker (Default)`}</Text>
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[100px] 3xl:h-[119px] font-circularstd h-[99px] lg:h-[77px] self-stretch w-[100%] xl:h-[89px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[3px] lg:leading-lh42 lg:left-[2px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[41%] xl:leading-lh48 xl:left-[2px] xl:text-fs16">{`Click to Select Color`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[0] h-[55px] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_98.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <ProgressBar.Line
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bg-gray_600_00 border border-gray_308 border-solid h-[55px] lg:h-[43px] right-[0] w-[12%] xl:h-[49px]"
                          percent="30"
                          strokeColor="#f2d938"
                          trailColor="#6b707d00"
                          name="Group694"
                        ></ProgressBar.Line>
                      </Stack>
                      <Text className="3xl:bottom-[15px] 3xl:left-[21px] 3xl:text-fs21 absolute bottom-[13px] font-normal left-[18px] lg:bottom-[10px] lg:left-[14px] lg:text-fs14 text-bluegray_202 text-fs18 text-left xl:bottom-[11px] xl:left-[16px] xl:text-fs16">{`#f3da39`}</Text>
                    </Stack>
                  </Column>
                </Column>
                <List
                  className="3xl:gap-[20px] 3xl:ml-[20px] 3xl:mt-[62px] flex-wrap gap-[17px] grid grid-cols-2 lg:gap-[13px] lg:ml-[13px] lg:mt-[40px] min-h-[auto] ml-[17px] mt-[52px] w-[66%] xl:gap-[15px] xl:ml-[15px] xl:mt-[46px]"
                  orientation="horizontal"
                >
                  <Stack className="2xl:h-[100px] 3xl:h-[119px] font-circularstd h-[99px] lg:h-[77px] w-[100%] xl:h-[89px]">
                    <Stack className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] inset-[0] lg:h-[77px] self-stretch w-[100%] xl:h-[89px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[3px] lg:leading-lh42 lg:left-[2px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[26%] xl:leading-lh48 xl:left-[2px] xl:text-fs16">{`Clockpicker`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[0] h-[55px] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_98.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <ProgressBar.Line
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bg-gray_600_00 border border-gray_308 border-solid h-[55px] lg:h-[43px] right-[0] w-[12%] xl:h-[49px]"
                          percent="30"
                          strokeColor="#4fe35e"
                          trailColor="#6b707d00"
                          name="Group695"
                        ></ProgressBar.Line>
                      </Stack>
                    </Stack>
                    <Text className="3xl:bottom-[14px] 3xl:left-[21px] 3xl:text-fs21 absolute bottom-[12px] font-normal left-[18px] lg:bottom-[9px] lg:left-[14px] lg:text-fs14 text-bluegray_202 text-fs18 text-left xl:bottom-[10px] xl:left-[16px] xl:text-fs16">{`#50e25e`}</Text>
                  </Stack>
                  <Stack className="2xl:h-[100px] 3xl:h-[119px] font-circularstd h-[99px] lg:h-[77px] w-[100%] xl:h-[89px]">
                    <Stack className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] inset-[0] lg:h-[77px] self-stretch w-[100%] xl:h-[89px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[3px] lg:leading-lh42 lg:left-[2px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[41%] xl:leading-lh48 xl:left-[2px] xl:text-fs16">{`Click to Select Color`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[0] h-[55px] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_98.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <ProgressBar.Line
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bg-gray_600_00 border border-gray_308 border-solid h-[55px] lg:h-[43px] right-[0] w-[12%] xl:h-[49px]"
                          percent="30"
                          strokeColor="#ff5963"
                          trailColor="#6b707d00"
                          name="Group696"
                        ></ProgressBar.Line>
                      </Stack>
                    </Stack>
                    <Text className="3xl:bottom-[15px] 3xl:left-[21px] 3xl:text-fs21 absolute bottom-[13px] font-normal left-[18px] lg:bottom-[10px] lg:left-[14px] lg:text-fs14 text-bluegray_202 text-fs18 text-left xl:bottom-[11px] xl:left-[16px] xl:text-fs16">{`#ff5964`}</Text>
                  </Stack>
                </List>
              </Row>
            </Stack>
            <Row className="3xl:mt-[48px] justify-between lg:mt-[31px] mt-[40px] px-[0] self-stretch w-[100%] xl:mt-[35px]">
              <Stack className="2xl:h-[468px] 3xl:h-[561px] h-[467px] lg:h-[364px] lg:ml-[2px] ml-[3px] w-[32%] xl:h-[416px] xl:ml-[2px]">
                <Image
                  src="img_textbg_16.svg"
                  className="2xl:h-[468px] 3xl:h-[561px] absolute h-[467px] inset-[0] lg:h-[364px] object-cover self-stretch w-[100%] xl:h-[416px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[19px] absolute font-circularstd inset-x-[0] justify-start lg:top-[12px] mx-[auto] top-[16px] w-[88%] xl:top-[14px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[44%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Datapicker Inline`}</Text>
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[357px] 3xl:h-[428px] font-circularstd h-[356px] lg:h-[277px] self-stretch w-[100%] xl:h-[317px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs19 absolute font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs12 text-bluegray_202 text-fs16 text-left top-[0] w-[91%] xl:leading-lh48 xl:text-fs14">{`You also can set the datepicker to be inline and flat.`}</Text>
                      <Column className="absolute bottom-[0] font-circularstd justify-start self-stretch w-[100%]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Row className="font-materialdesignicons items-center justify-between px-[0] self-stretch w-[100%]">
                            <Text className="3xl:text-fs31 font-materialdesignicons font-normal lg:mb-[1px] lg:text-fs20 mb-[2px] text-fs26 text-gray_612 text-left xl:mb-[1px] xl:text-fs23">{``}</Text>
                            <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs21 font-bold font-circularstd leading-lh5000 lg:leading-lh38 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-center text-fs18 w-[25%] xl:leading-lh44 xl:mt-[1px] xl:text-fs16">{`May 2018`}</Text>
                            <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:mr-[42px] 3xl:text-fs27 font-materialdesignicons font-normal leading-lh5000 lg:leading-lh38 lg:mr-[27px] lg:text-fs17 mr-[35px] my-[1px] text-fs23 text-gray_612 text-right w-[9%] xl:leading-lh44 xl:mr-[31px] xl:text-fs20">{``}</Text>
                          </Row>
                        </Column>
                        <Text className="3xl:mt-[10px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 ml-[1px] mt-[9px] text-bluegray_805 text-fs16 text-left xl:mt-[8px] xl:text-fs14">{`Sun         Mon         Tue         Wed         Thu         Fri         Sat`}</Text>
                        <Column className="3xl:mt-[16px] items-center lg:mt-[10px] mt-[14px] self-stretch w-[100%] xl:mt-[12px]">
                          <Stack className="2xl:h-[222px] 3xl:h-[266px] 3xl:ml-[7px] h-[221px] lg:h-[172px] lg:ml-[4px] lg:mr-[3px] ml-[6px] mr-[4px] w-[98%] xl:h-[197px] xl:ml-[5px] xl:mr-[3px]">
                            <Stack className="2xl:h-[222px] 3xl:h-[266px] absolute font-circularstd h-[221px] inset-[0] lg:h-[172px] self-stretch w-[100%] xl:h-[197px]">
                              <Image
                                src="img_circle_4.svg"
                                className="2xl:h-[219px] 3xl:h-[262px] absolute h-[218px] inset-y-[0] left-[0] lg:h-[170px] my-[auto] object-contain w-[93%] xl:h-[194px]"
                                alt="Circle"
                              />
                              <Text className="3xl:text-fs19 absolute font-normal lg:text-fs12 right-[0] text-fs16 text-gray_612 text-left top-[0] xl:text-fs14">{`01            02           03         04`}</Text>
                              <Text className="3xl:bottom-[92px] 3xl:text-fs19 absolute bottom-[77px] font-normal inset-x-[0] lg:bottom-[59px] lg:text-fs12 mx-[auto] text-fs16 text-gray_612 text-left w-[max-content] xl:bottom-[68px] xl:text-fs14">{`19          20            21               22            23           24          25`}</Text>
                            </Stack>
                            <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[99%]">
                              <Stack className="2xl:h-[40px] 3xl:h-[47px] font-circularstd h-[39px] lg:h-[31px] self-stretch w-[100%] xl:h-[35px]">
                                <Image
                                  src="img_circle_5.svg"
                                  className="2xl:h-[40px] 3xl:h-[47px] 3xl:left-[136px] 3xl:w-[46px] absolute h-[39px] left-[114px] lg:h-[31px] lg:left-[88px] lg:w-[30px] object-contain w-[39px] xl:h-[35px] xl:left-[101px] xl:w-[34px]"
                                  alt="Circle"
                                />
                                <Text className="3xl:bottom-[8px] 3xl:text-fs19 3xl:top-[9px] absolute bottom-[7px] font-normal inset-x-[0] lg:bottom-[5px] lg:text-fs12 lg:top-[6px] self-stretch text-fs16 text-gray_612 text-left top-[8px] xl:bottom-[6px] xl:text-fs14 xl:top-[7px]">
                                  <span className="text-gray_612 text-fs16 font-circularstd text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                                    <>{`05          06            `}</>
                                  </span>
                                  <span className="text-white_A700 text-fs16 font-circularstd text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                                    <>{`07`}</>
                                  </span>
                                  <span className="text-gray_612 text-fs16 font-circularstd text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                                    <>{`             08            09           10           11`}</>
                                  </span>
                                </Text>
                              </Stack>
                              <Column className="3xl:mt-[10px] font-circularstd justify-start lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]">
                                <Text className="3xl:text-fs19 font-normal lg:mr-[1px] lg:text-fs12 mr-[2px] text-fs16 text-gray_612 text-left xl:mr-[1px] xl:text-fs14">{`12           13             14              15             16            17          18`}</Text>
                                <Text className="3xl:mr-[12px] 3xl:mt-[67px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[43px] lg:text-fs12 mr-[10px] mt-[56px] text-fs16 text-gray_612 text-left xl:mr-[8px] xl:mt-[49px] xl:text-fs14">{`26          27           28               29           30            31`}</Text>
                              </Column>
                            </Column>
                          </Stack>
                        </Column>
                      </Column>
                    </Stack>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[396px] 3xl:h-[475px] 3xl:mb-[86px] h-[395px] lg:h-[308px] lg:mb-[56px] mb-[72px] w-[66%] xl:h-[352px] xl:mb-[64px]">
                <Image
                  src="img_textbg_17.svg"
                  className="2xl:h-[396px] 3xl:h-[475px] absolute h-[395px] inset-[0] lg:h-[308px] object-cover self-stretch w-[100%] xl:h-[352px]"
                  alt="TextBG"
                />
                <Column className="3xl:left-[38px] 3xl:top-[19px] absolute font-circularstd justify-start left-[32px] lg:left-[24px] lg:top-[12px] top-[16px] w-[88%] xl:left-[28px] xl:top-[14px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[27%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Bootstrap Date Picker`}</Text>
                  <Column className="3xl:mt-[8px] items-center lg:mt-[5px] mt-[7px] self-stretch w-[100%] xl:mt-[6px]">
                    <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[8%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Input`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] font-circularstd h-[55px] lg:h-[43px] mb-[1px] w-[77%] xl:h-[49px]">
                        <Image
                          src="img_bg_99.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="3xl:bottom-[15px] 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[13px] font-normal left-[17px] lg:bottom-[10px] lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left xl:bottom-[11px] xl:left-[15px] xl:text-fs14">{`Select Date`}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-between lg:mt-[11px] mt-[15px] px-[0] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[14%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Input Group`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] font-circularstd h-[55px] lg:h-[43px] mb-[1px] w-[77%] xl:h-[49px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute font-circularstd h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Input
                            className="3xl:pb-[20px] 3xl:pl-[20px] 3xl:pt-[26px] 3xl:text-fs19 absolute bg-transparent border-0 font-normal inset-[0] lg:pb-[13px] lg:pl-[13px] lg:pt-[17px] lg:text-fs12 pb-[17px] pl-[17px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[22px] self-stretch text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[15px] xl:pt-[19px] xl:text-fs14"
                            name="Group692"
                            placeholder={`20/03/2018`}
                          ></Input>
                          <Image
                            src="img_bg_100.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[8%] xl:h-[49px]"
                            alt="BG"
                          />
                        </Stack>
                        <Text className="3xl:right-[6px] 3xl:text-fs19 absolute font-materialdesignicons font-normal h-[max-content] inset-y-[0] lg:right-[3px] lg:text-fs12 my-[auto] right-[5px] text-bluegray_202 text-center text-fs16 xl:right-[4px] xl:text-fs14">{``}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-between lg:mt-[11px] mt-[15px] px-[0] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[16%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Helper Buttons`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] font-circularstd h-[55px] lg:h-[43px] mb-[1px] w-[77%] xl:h-[49px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute font-circularstd h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Input
                            className="3xl:pb-[20px] 3xl:pl-[20px] 3xl:pt-[26px] 3xl:text-fs19 absolute bg-transparent border-0 font-normal inset-[0] lg:pb-[13px] lg:pl-[13px] lg:pt-[17px] lg:text-fs12 pb-[17px] pl-[17px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[22px] self-stretch text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[15px] xl:pt-[19px] xl:text-fs14"
                            name="Group693"
                            placeholder={`20/03/2018`}
                          ></Input>
                          <Image
                            src="img_bg_100.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-contain right-[0] w-[8%] xl:h-[49px]"
                            alt="BG"
                          />
                        </Stack>
                        <Text className="3xl:right-[6px] 3xl:text-fs19 absolute font-materialdesignicons font-normal h-[max-content] inset-y-[0] lg:right-[3px] lg:text-fs12 my-[auto] right-[5px] text-bluegray_202 text-center text-fs16 xl:right-[4px] xl:text-fs14">{``}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-between lg:mt-[11px] mt-[15px] px-[0] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[13%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Date Range`}</Text>
                      <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] mb-[1px] w-[77%] xl:h-[49px]">
                        <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute font-circularstd h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                          <Stack className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_101.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] inset-[0] lg:h-[43px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_102.svg"
                              className="2xl:h-[56px] 3xl:h-[67px] 3xl:inset-x-[384px] absolute h-[55px] inset-x-[320px] inset-y-[0] lg:h-[43px] lg:inset-x-[248px] object-contain w-[8%] xl:h-[49px] xl:inset-x-[284px]"
                              alt="BG"
                            />
                          </Stack>
                          <Text className="3xl:bottom-[14px] 3xl:text-fs19 absolute bottom-[12px] font-normal inset-x-[0] lg:bottom-[9px] lg:text-fs12 mx-[auto] text-bluegray_202 text-center text-fs16 w-[max-content] xl:bottom-[10px] xl:text-fs14">{`To`}</Text>
                        </Stack>
                        <Row className="3xl:bottom-[15px] 3xl:gap-[316px] 3xl:left-[21px] absolute bottom-[13px] font-circularstd gap-[264px] grid grid-cols-2 items-center justify-between left-[18px] lg:bottom-[10px] lg:gap-[205px] lg:left-[14px] w-[69%] xl:bottom-[11px] xl:gap-[234px] xl:left-[16px]">
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[100%] xl:text-fs14">{`01/03/2018`}</Text>
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[100%] xl:text-fs14">{`31/03/2018`}</Text>
                        </Row>
                      </Stack>
                    </Row>
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

export default Artboard3Page;
