import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { List } from "components/List";

const Artboard1Page = () => {
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
            src="img_bg_58.svg"
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
                src="img_bg_59.svg"
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
              src="img_sidebarbg_1.svg"
              className="2xl:h-[1511px] 3xl:h-[1812px] absolute h-[1509px] inset-[0] lg:h-[1174px] object-cover self-stretch w-[100%] xl:h-[1343px]"
              alt="SidebarBG"
            />
            <Column className="3xl:bottom-[129px] absolute bottom-[108px] items-center justify-start lg:bottom-[84px] self-stretch w-[100%] xl:bottom-[96px]">
              <Line className="bg-bluegray_202 h-[4px] opacity-op4 self-stretch w-[100%]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Stack className="2xl:h-[60px] 3xl:h-[71px] 3xl:mt-[67px] h-[59px] lg:h-[46px] lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:h-[53px] xl:mt-[49px]">
                <Image
                  src="img_hoverbg_1.svg"
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
        <Stack className="2xl:h-[1557px] 3xl:h-[1868px] absolute h-[1555px] inset-[0] justify-center lg:h-[1210px] m-[auto] w-[98%] xl:h-[1384px]">
          <Row className="absolute inset-[0] justify-between px-[0] self-stretch w-[100%]">
            <Column className="3xl:mt-[129px] font-circularstd justify-start lg:mt-[84px] mt-[108px] w-[8%] xl:mt-[96px]">
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:text-fs9 ml-[3.5px] mr-[10px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[72%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:text-fs10">{`Navigations`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsnav_1.svg"
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
                    src="img_iconsapps_1.svg"
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
                    src="img_iconspages_1.svg"
                    className="2xl:h-[293px] 2xl:mt-[26px] 3xl:h-[351px] 3xl:mt-[31px] h-[292.01px] lg:h-[228px] lg:mt-[20px] ml-[1px] mt-[25.98999px] object-contain w-[10%] xl:h-[260px] xl:mt-[23px]"
                    alt="IconsPages"
                  />
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[18px] 3xl:text-fs19 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-gray_612 text-left w-[80%] xl:leading-lh48 xl:ml-[13px] xl:text-fs14">{`Invoices Events 404 Page Projects Coming Soon Profile`}</Text>
                </Row>
              </Column>
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:mt-[44px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:mt-[28px] lg:text-fs9 ml-[3.5px] mr-[10px] mt-[37px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[82%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:mt-[32px] xl:text-fs10">{`User Interface`}</Text>
              <Column className="items-center mt-[1px] self-stretch w-[100%]">
                <Row className="font-circularstd items-center justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsui_1.svg"
                    className="2xl:h-[286px] 3xl:h-[343px] 3xl:mb-[21px] 3xl:mt-[22px] h-[285px] lg:h-[222px] lg:my-[14px] mb-[18px] mt-[19px] object-contain w-[10%] xl:h-[254px] xl:my-[16px]"
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
            <Column className="3xl:mb-[1703px] items-center justify-start lg:mb-[1103px] mb-[1419px] w-[84%] xl:mb-[1262px]">
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
                    <Stack className="2xl:h-[24px] 3xl:h-[28px] absolute bg-gray_508 bottom-[0] h-[23px] left-[0] lg:h-[18px] w-[91%] xl:h-[21px]">
                      <Image
                        src="img_iconnotificati.png"
                        className="2xl:h-[24px] 3xl:h-[28px] absolute h-[23px] inset-[0] lg:h-[18px] object-cover self-stretch w-[100%] xl:h-[21px]"
                        alt="IconNotificati"
                      />
                    </Stack>
                    <Image
                      src="img_circle_2.svg"
                      className="2xl:h-[12px] 3xl:h-[14px] 3xl:w-[13px] absolute h-[11px] lg:h-[9px] lg:w-[8px] object-contain right-[0] top-[0] w-[11px] xl:h-[10px] xl:w-[9px]"
                      alt="Circle"
                    />
                  </Stack>
                  <Row className="3xl:ml-[39px] items-end justify-between lg:ml-[25px] ml-[33px] px-[0] w-[64%] xl:ml-[29px]">
                    <Image
                      src="img_image_9.svg"
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
                  className="2xl:h-[17px] 2xl:mb-[18px] 2xl:ml-[15px] 2xl:mr-[31px] 3xl:h-[20px] 3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[37px] 3xl:mt-[22px] h-[15.99px] lg:h-[13px] lg:ml-[11px] lg:mr-[24px] lg:my-[14px] mb-[18.010002px] ml-[15.01001px] mr-[31.02002px] mt-[19px] object-contain w-[1%] xl:h-[15px] xl:ml-[13px] xl:mr-[27px] xl:my-[16px]"
                  alt="Combinedshape"
                />
              </Row>
              <Row className="3xl:mt-[32px] font-circularstd items-center justify-between lg:mt-[21px] mt-[27px] px-[0] self-stretch w-[100%] xl:mt-[24px]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[3px] lg:mt-[1px] lg:text-fs17 ml-[4px] mt-[2px] text-deep_purple_A200 text-fs22 text-left tracking-ls1 w-[9%] xl:leading-lh48 xl:ml-[3px] xl:mt-[1px] xl:text-fs19">{`Form Mask`}</Text>
                <Row className="font-circularstd items-center justify-evenly mb-[1px] px-[0] w-[15%]">
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[28%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-deep_purple_A200 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Home`}</Text>
                    <Text className="2xl:leading-lh54 2xl:right-[12px] 3xl:leading-lh64 3xl:right-[15px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12.5px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[54%] xl:leading-lh48 xl:right-[11px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[28%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-bluegray_202 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Forms`}</Text>
                    <Text className="2xl:leading-lh54 2xl:right-[12px] 3xl:leading-lh64 3xl:right-[15px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12.5px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[55%] xl:leading-lh48 xl:right-[11px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 mt-[1px] text-bluegray_202 text-fs14 text-left tracking-ls1 w-[44%] xl:leading-lh48 xl:text-fs12">{`Form Mask`}</Text>
                </Row>
              </Row>
            </Column>
          </Row>
          <Stack className="2xl:h-[1141px] 3xl:h-[1369px] 3xl:right-[36px] absolute h-[1140px] inset-y-[0] lg:h-[887px] lg:right-[23px] my-[auto] right-[30px] w-[82%] xl:h-[1015px] xl:right-[26px]">
            <Image
              src="img_textbg_10.svg"
              className="2xl:h-[1141px] 3xl:h-[1369px] absolute h-[1140px] inset-[0] lg:h-[887px] object-cover self-stretch w-[100%] xl:h-[1015px]"
              alt="TextBG"
            />
            <Column className="absolute font-circularstd h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
              <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_805 text-fs22 text-left w-[11%] xl:leading-lh48 xl:mr-[8px] xl:text-fs19">{`Form Addons`}</Text>
              <Column className="3xl:mt-[8px] items-center lg:mt-[5px] mt-[7px] self-stretch w-[100%] xl:mt-[6px]">
                <Column className="font-circularstd justify-start self-stretch w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[3px] lg:text-fs14 mt-[4px] text-bluegray_805 text-fs18 text-left w-[5%] xl:leading-lh48 xl:mt-[3px] xl:text-fs16">{`Date*`}</Text>
                      <Stack className="2xl:h-[57px] 3xl:h-[68px] font-circularstd h-[56px] lg:h-[44px] lg:mb-[1px] mb-[2px] w-[84%] xl:h-[50px] xl:mb-[1px]">
                        <Image
                          src="img_bg_61.svg"
                          className="2xl:h-[56px] 3xl:h-[67px] absolute bottom-[1px] h-[55px] inset-x-[0] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 my-[auto] text-bluegray_202 text-fs16 text-left w-[9%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`__/__/____`}</Text>
                      </Stack>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mt-[1px] lg:mx-[180px] lg:text-fs12 mt-[2px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:mx-[206px] xl:text-fs14">{`Data format dd/mm/yyyy`}</Text>
                </Column>
                <Column className="3xl:mt-[24px] font-circularstd justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[3px] lg:text-fs14 mt-[4px] text-bluegray_805 text-fs18 text-left w-[6%] xl:leading-lh48 xl:mt-[3px] xl:text-fs16">{`Phone*`}</Text>
                      <Input
                        className="3xl:pb-[22px] 3xl:pl-[21px] 3xl:pt-[24px] 3xl:text-fs19 bg-transparent border-0 font-normal lg:mb-[2px] lg:pb-[14px] lg:pl-[14px] lg:pt-[15px] lg:text-fs12 mb-[3px] pb-[19px] pl-[18px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[20px] text-bluegray_202 text-fs16 text-left w-[84%] xl:mb-[2px] xl:pb-[16px] xl:pl-[16px] xl:pt-[17px] xl:text-fs14"
                        name="Group672"
                        placeholder={`(___) ___-____`}
                      ></Input>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mx-[180px] lg:text-fs12 mt-[1px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mx-[206px] xl:text-fs14">{`Data format (999) 999-9999`}</Text>
                </Column>
                <Column className="3xl:mt-[25px] font-circularstd justify-start lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[3px] lg:text-fs14 mt-[4px] text-bluegray_805 text-fs18 text-left w-[8%] xl:leading-lh48 xl:mt-[3px] xl:text-fs16">{`Int’l Phone*`}</Text>
                      <div className="bg-transparent border-bw mb-[1px] w-[84%] input-wrap">
                        <Image
                          src="img_bg_62.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[1510px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[978px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[1258px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[1119px] xl:pt-[16px] xl:text-fs14">{`+40 ___ ___ ___`}</Button>
                      </div>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mt-[1px] lg:mx-[180px] lg:text-fs12 mt-[2px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:mx-[206px] xl:text-fs14">{`Data format +40 999 999 999`}</Text>
                </Column>
                <List
                  className="3xl:mt-[24px] flex-wrap gap-[0] lg:mt-[15px] min-h-[auto] mt-[20px] self-stretch w-[100%] xl:mt-[17px]"
                  orientation="vertical"
                >
                  <Row className="3xl:my-[12px] font-circularstd justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[31px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[20px] lg:mt-[3px] lg:text-fs14 mb-[26px] mt-[4px] text-bluegray_805 text-fs18 text-left w-[5%] xl:leading-lh48 xl:mb-[23px] xl:mt-[3px] xl:text-fs16">{`SSN*`}</Text>
                    <Column className="font-circularstd justify-start w-[84%]">
                      <Column className="items-center self-stretch w-[100%]">
                        <Stack className="2xl:h-[63px] 3xl:h-[75px] font-circularstd h-[62px] lg:h-[49px] self-stretch w-[100%] xl:h-[56px]">
                          <Image
                            src="img_bg_63.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[10%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`___-__-____`}</Text>
                        </Stack>
                      </Column>
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:ml-[2px] lg:mr-[7px] lg:text-fs12 ml-[3px] mr-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs14">{`Data format e.g '999-99-9999'`}</Text>
                    </Column>
                  </Row>
                  <Row className="3xl:my-[12px] font-circularstd justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[31px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[20px] lg:mt-[3px] lg:text-fs14 mb-[26px] mt-[4px] text-bluegray_805 text-fs18 text-left w-[9%] xl:leading-lh48 xl:mb-[23px] xl:mt-[3px] xl:text-fs16">{`Product Key*`}</Text>
                    <Column className="font-circularstd justify-start w-[84%]">
                      <Column className="items-center self-stretch w-[100%]">
                        <Stack className="2xl:h-[63px] 3xl:h-[75px] font-circularstd h-[62px] lg:h-[49px] self-stretch w-[100%] xl:h-[56px]">
                          <Image
                            src="img_bg_64.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[10%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`__-___-____`}</Text>
                        </Stack>
                      </Column>
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:ml-[2px] lg:mr-[7px] lg:text-fs12 ml-[3px] mr-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs14">{`Data format e.g a*-999-a999`}</Text>
                    </Column>
                  </Row>
                </List>
                <Column className="3xl:mt-[24px] font-circularstd justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[3px] lg:text-fs14 mt-[4px] text-bluegray_805 text-fs18 text-left w-[8%] xl:leading-lh48 xl:mt-[3px] xl:text-fs16">{`Currency*`}</Text>
                      <Input
                        className="3xl:pb-[22px] 3xl:pl-[20px] 3xl:pt-[25px] 3xl:text-fs19 bg-transparent border-0 font-normal lg:mb-[1px] lg:pb-[14px] lg:pl-[13px] lg:pt-[16px] lg:text-fs12 mb-[2px] pb-[19px] pl-[17px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[21px] text-bluegray_202 text-fs16 text-left w-[84%] xl:mb-[1px] xl:pb-[16px] xl:pl-[15px] xl:pt-[18px] xl:text-fs14"
                        name="Group675"
                        placeholder={`$ ___,___,___.__`}
                      ></Input>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mt-[1px] lg:mx-[180px] lg:text-fs12 mt-[2px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:mx-[206px] xl:text-fs14">{`Data format $ 999,999,999.99`}</Text>
                </Column>
                <List
                  className="3xl:mt-[24px] flex-wrap gap-[0] lg:mt-[15px] min-h-[auto] mt-[20px] self-stretch w-[100%] xl:mt-[17px]"
                  orientation="vertical"
                >
                  <Row className="3xl:my-[12px] font-circularstd justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[31px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[20px] lg:mt-[3px] lg:text-fs14 mb-[26px] mt-[4px] text-bluegray_805 text-fs18 text-left w-[11%] xl:leading-lh48 xl:mb-[23px] xl:mt-[3px] xl:text-fs16">{`Purchase Order*`}</Text>
                    <Column className="font-circularstd justify-start w-[84%]">
                      <Column className="items-center self-stretch w-[100%]">
                        <Stack className="2xl:h-[63px] 3xl:h-[75px] font-circularstd h-[62px] lg:h-[49px] self-stretch w-[100%] xl:h-[56px]">
                          <Image
                            src="img_bg_65.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[10%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`___-___-___`}</Text>
                        </Stack>
                      </Column>
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:ml-[2px] lg:mr-[7px] lg:text-fs12 ml-[3px] mr-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs14">{`Data format aaa-999-***`}</Text>
                    </Column>
                  </Row>
                  <Row className="3xl:my-[12px] font-circularstd justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[31px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[20px] lg:mt-[3px] lg:text-fs14 mb-[26px] mt-[4px] text-bluegray_805 text-fs18 text-left w-[8%] xl:leading-lh48 xl:mb-[23px] xl:mt-[3px] xl:text-fs16">{`Eye Script*`}</Text>
                    <Column className="font-circularstd justify-start w-[84%]">
                      <Column className="items-center self-stretch w-[100%]">
                        <Stack className="2xl:h-[63px] 3xl:h-[75px] font-circularstd h-[62px] lg:h-[49px] self-stretch w-[100%] xl:h-[56px]">
                          <Image
                            src="img_bg_66.svg"
                            className="2xl:h-[56px] 3xl:h-[67px] absolute h-[55px] lg:h-[43px] object-cover self-stretch top-[0] w-[100%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:left-[20px] 3xl:text-fs19 absolute bottom-[0] font-normal leading-lh5400 left-[17px] lg:leading-lh42 lg:left-[13px] lg:text-fs12 text-bluegray_202 text-fs16 text-left w-[11%] xl:leading-lh48 xl:left-[15px] xl:text-fs14">{`~_.__ ~_.__ ___`}</Text>
                        </Stack>
                      </Column>
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:ml-[2px] lg:mr-[7px] lg:text-fs12 ml-[3px] mr-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs14">{`Data format ~9.99 ~9.99 999`}</Text>
                    </Column>
                  </Row>
                </List>
                <Column className="3xl:mt-[24px] font-circularstd justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[3px] lg:text-fs14 mt-[4px] text-bluegray_805 text-fs18 text-left w-[7%] xl:leading-lh48 xl:mt-[3px] xl:text-fs16">{`Percent*`}</Text>
                      <div className="bg-transparent border-bw mb-[1px] w-[84%] input-wrap">
                        <Image
                          src="img_bg_67.svg"
                          className="absolute top-[19px] bottom-[21px] left-[0] border-bw bg-transparent lg:top-[14px] lg:bottom-[16px] xl:top-[16px] xl:bottom-[18px] 3xl:top-[22px] 3xl:bottom-[25px]"
                          alt="BG"
                        />
                        <Button className="3xl:pb-[25px] 3xl:pl-[1510px] 3xl:pt-[22px] 3xl:text-fs19 bg-gray_600_00 border border-gray_308 border-solid font-normal lg:pb-[16px] lg:pl-[978px] lg:pt-[14px] lg:text-fs12 pb-[21px] pl-[1258px] pt-[19px] text-bluegray_202 text-fs16 text-left w-[100%] xl:pb-[18px] xl:pl-[1119px] xl:pt-[16px] xl:text-fs14">{`__%`}</Button>
                      </div>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mt-[1px] lg:mx-[180px] lg:text-fs12 mt-[2px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:mx-[206px] xl:text-fs14">{`Data format e.g '99%'`}</Text>
                </Column>
                <Column className="3xl:mt-[24px] font-circularstd justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-circularstd justify-evenly px-[0] self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[2px] lg:text-fs14 mt-[3px] text-bluegray_805 text-fs18 text-left w-[15%] xl:leading-lh48 xl:mt-[2px] xl:text-fs16">{`Phone (Autoclear=False)`}</Text>
                      <Input
                        className="3xl:pb-[22px] 3xl:pl-[21px] 3xl:pt-[24px] 3xl:text-fs19 bg-transparent border-0 font-normal lg:mb-[1px] lg:pb-[14px] lg:pl-[14px] lg:pt-[15px] lg:text-fs12 mb-[2px] pb-[19px] pl-[18px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[20px] text-bluegray_202 text-fs16 text-left w-[84%] xl:mb-[1px] xl:pb-[16px] xl:pl-[16px] xl:pt-[17px] xl:text-fs14"
                        name="Group673"
                        placeholder={`(___) ___-____`}
                      ></Input>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[278px] 3xl:text-fs19 font-normal lg:mt-[1px] lg:mx-[180px] lg:text-fs12 mt-[2px] mx-[232px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:mx-[206px] xl:text-fs14">{`Data format e.g (999)999-9999`}</Text>
                </Column>
              </Column>
            </Column>
          </Stack>
        </Stack>
      </Stack>
    </Column>
  );
};

export default Artboard1Page;
