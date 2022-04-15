import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { List } from "components/List";

const Artboard2Page = () => {
  return (
    <Column className="bg-gray_105 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[2316px] 3xl:h-[2779px] h-[2314px] lg:h-[1800px] self-stretch w-[100%] xl:h-[2059px]">
        <Stack className="2xl:h-[2316px] 3xl:h-[2779px] absolute font-circularstd h-[2314px] inset-[0] lg:h-[1800px] self-stretch w-[100%] xl:h-[2059px]">
          <Image
            src="img_colorfill1_2.png"
            className="2xl:h-[2315px] 3xl:h-[2778px] absolute bottom-[1px] h-[2313px] inset-x-[0] lg:h-[1799px] object-cover self-stretch top-[0] w-[100%] xl:h-[2058px]"
            alt="ColorFill1"
          />
          <Image
            src="img_bg_68.svg"
            className="2xl:h-[100px] 3xl:h-[119px] absolute h-[99px] left-[0] lg:h-[77px] object-contain top-[0] w-[17%] xl:h-[89px]"
            alt="BG"
          />
          <Row className="2xl:top-[33px] 3xl:left-[33px] 3xl:top-[40px] absolute items-center justify-between left-[28px] lg:left-[21px] lg:top-[26px] px-[0] top-[33.5px] w-[14%] xl:left-[24px] xl:top-[29px]">
            <Text className="3xl:text-fs31 font-medium lg:text-fs20 text-fs26 text-left text-white_A700 xl:text-fs23">{`Forms`}</Text>
            <Image
              src="img_combinedshape_3.svg"
              className="2xl:h-[21px] 2xl:my-[5px] 3xl:h-[25px] 3xl:my-[6px] h-[20.73px] lg:h-[17px] lg:my-[3px] mb-[5.1399994px] mt-[5.130001px] object-contain w-[8%] xl:h-[19px] xl:my-[4px]"
              alt="Combinedshape"
            />
          </Row>
          <div className="absolute bottom-[0] right-[0] w-[83%]">
            <Stack className="2xl:h-[82px] 3xl:h-[98px] font-circularstd h-[81px] lg:h-[63px] self-stretch w-[100%] xl:h-[73px]">
              <Image
                src="img_bg_69.svg"
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
          <Stack className="2xl:h-[2220px] 3xl:h-[2664px] absolute bottom-[0] h-[2218px] left-[0] lg:h-[1726px] w-[17%] xl:h-[1974px]">
            <Image
              src="img_sidebarbg_2.svg"
              className="2xl:h-[2220px] 3xl:h-[2664px] absolute h-[2218px] inset-[0] lg:h-[1726px] object-cover self-stretch w-[100%] xl:h-[1974px]"
              alt="SidebarBG"
            />
            <Column className="3xl:top-[367px] absolute items-center justify-start lg:top-[238px] self-stretch top-[306px] w-[100%] xl:top-[272px]">
              <Line className="bg-bluegray_202 h-[4px] opacity-op4 self-stretch w-[100%]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Line className="3xl:mt-[468px] bg-bluegray_202 h-[4px] lg:mt-[303px] mt-[390px] opacity-op4 self-stretch w-[100%] xl:mt-[346px]" />
              <Stack className="2xl:h-[60px] 3xl:h-[71px] 3xl:mt-[67px] h-[59px] lg:h-[46px] lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:h-[53px] xl:mt-[49px]">
                <Image
                  src="img_hoverbg_2.svg"
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
        <Stack className="2xl:h-[2146px] 3xl:h-[2575px] 3xl:top-[26px] absolute h-[2144px] inset-x-[0] lg:h-[1668px] lg:top-[17px] mx-[auto] top-[22px] w-[98%] xl:h-[1908px] xl:top-[19px]">
          <Row className="absolute justify-between px-[0] self-stretch top-[0] w-[100%]">
            <Column className="3xl:mt-[129px] font-circularstd justify-start lg:mt-[84px] mt-[108px] w-[8%] xl:mt-[96px]">
              <Text className="2xl:leading-lh50 2xl:ml-[3px] 3xl:leading-lh60 3xl:ml-[4px] 3xl:mr-[12px] 3xl:text-fs14 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[2px] lg:mr-[7px] lg:text-fs9 ml-[3.5px] mr-[10px] text-bluegray_202 text-fs12 text-left tracking-ls1 uppercase w-[72%] xl:leading-lh44 xl:ml-[3px] xl:mr-[8px] xl:text-fs10">{`Navigations`}</Text>
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-circularstd items-end justify-start self-stretch w-[100%]">
                  <Image
                    src="img_iconsnav_2.svg"
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
                    src="img_iconsapps_2.svg"
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
                    src="img_iconspages_2.svg"
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
                    src="img_iconsui_2.svg"
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
                    <Stack className="2xl:h-[24px] 3xl:h-[28px] absolute bg-gray_508 bottom-[0] h-[23px] left-[0] lg:h-[18px] w-[91%] xl:h-[21px]">
                      <Image
                        src="img_iconnotificati.png"
                        className="2xl:h-[24px] 3xl:h-[28px] absolute h-[23px] inset-[0] lg:h-[18px] object-cover self-stretch w-[100%] xl:h-[21px]"
                        alt="IconNotificati"
                      />
                    </Stack>
                    <Image
                      src="img_circle_3.svg"
                      className="2xl:h-[12px] 3xl:h-[14px] 3xl:w-[13px] absolute h-[11px] lg:h-[9px] lg:w-[8px] object-contain right-[0] top-[0] w-[11px] xl:h-[10px] xl:w-[9px]"
                      alt="Circle"
                    />
                  </Stack>
                  <Row className="3xl:ml-[39px] items-end justify-between lg:ml-[25px] ml-[33px] px-[0] w-[64%] xl:ml-[29px]">
                    <Image
                      src="img_image_10.svg"
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
                  className="2xl:h-[17px] 2xl:mb-[18px] 2xl:ml-[15px] 2xl:mr-[30px] 3xl:h-[20px] 3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[36px] 3xl:mt-[22px] h-[15.99px] lg:h-[13px] lg:ml-[11px] lg:mr-[23px] lg:my-[14px] mb-[18.010002px] ml-[15.01001px] mr-[30.02002px] mt-[19px] object-contain w-[1%] xl:h-[15px] xl:ml-[13px] xl:mr-[26px] xl:my-[16px]"
                  alt="Combinedshape"
                />
              </Row>
              <Row className="3xl:mt-[32px] font-circularstd items-center justify-between lg:mt-[21px] mt-[27px] px-[0] self-stretch w-[100%] xl:mt-[24px]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[3px] lg:mt-[1px] lg:text-fs17 ml-[4px] mt-[2px] text-deep_purple_A200 text-fs22 text-left tracking-ls1 w-[12%] xl:leading-lh48 xl:ml-[3px] xl:mt-[1px] xl:text-fs19">{`Form Validation`}</Text>
                <Row className="font-circularstd items-center justify-evenly mb-[1px] px-[0] w-[16%]">
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[25%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-deep_purple_A200 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Home`}</Text>
                    <Text className="2xl:leading-lh54 2xl:right-[12px] 3xl:leading-lh64 3xl:right-[15px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12.5px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[54%] xl:leading-lh48 xl:right-[11px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Stack className="2xl:h-[56px] 3xl:h-[67px] h-[55px] lg:h-[43px] w-[25%] xl:h-[49px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 absolute bottom-[0] font-normal inset-x-[0] leading-lh5400 lg:leading-lh42 lg:text-fs10 self-stretch text-bluegray_202 text-fs14 text-left top-[1px] tracking-ls1 w-[100%] xl:leading-lh48 xl:text-fs12">{`Forms`}</Text>
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:right-[14px] 3xl:text-fs16 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 lg:leading-lh42 lg:right-[9px] lg:text-fs10 my-[auto] right-[12px] text-deep_purple_A200 text-fs14 text-right tracking-ls1 w-[54%] xl:leading-lh48 xl:right-[10px] xl:text-fs12">{`-`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs16 font-normal leading-lh5400 lg:leading-lh42 lg:text-fs10 mt-[1px] text-bluegray_202 text-fs14 text-left tracking-ls1 w-[50%] xl:leading-lh48 xl:text-fs12">{`Form Validation`}</Text>
                </Row>
              </Row>
            </Column>
          </Row>
          <Column className="3xl:right-[34px] absolute bottom-[0] items-center justify-start lg:right-[22px] right-[29px] w-[82%] xl:right-[25px]">
            <Row className="justify-between px-[0] self-stretch w-[100%]">
              <Stack className="2xl:h-[655px] 3xl:h-[786px] h-[654px] lg:h-[509px] w-[49%] xl:h-[582px]">
                <Image
                  src="img_textbg_11.svg"
                  className="2xl:h-[655px] 3xl:h-[786px] absolute h-[654px] inset-[0] lg:h-[509px] object-cover self-stretch w-[100%] xl:h-[582px]"
                  alt="TextBG"
                />
                <Column className="3xl:left-[36px] 3xl:top-[18px] absolute justify-start left-[30px] lg:left-[23px] lg:top-[11px] top-[15px] w-[79%] xl:left-[26px] xl:top-[13px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[144px] 3xl:h-[172px] font-circularstd h-[143px] lg:h-[112px] w-[100%] xl:h-[128px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs26 absolute font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs17 text-bluegray_805 text-fs22 text-left top-[0] w-[43%] xl:leading-lh48 xl:text-fs19">{`jQuery From Validation`}</Text>
                      <Stack className="2xl:h-[97px] 3xl:h-[116px] absolute bottom-[0] font-circularstd h-[96px] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[14%] xl:leading-lh48 xl:left-[1px] xl:text-fs16">{`Name*`}</Text>
                        <Image
                          src="img_bg_70.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute bottom-[0] h-[54px] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="3xl:bottom-[15px] absolute bottom-[13px] font-circularstd inset-x-[0] items-center justify-between lg:bottom-[10px] mx-[auto] px-[0] w-[95%] xl:bottom-[11px]">
                        <Text className="3xl:text-fs19 font-circularstd font-normal lg:text-fs12 text-bluegray_202 text-fs16 text-left xl:text-fs14">{`Valentino Morose`}</Text>
                        <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:text-fs12 text-fs16 text-green_300 text-right tracking-ls1 xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                    <Stack className="2xl:h-[97px] 3xl:h-[116px] h-[96px] lg:h-[75px] mt-[1px] w-[100%] xl:h-[86px]">
                      <Stack className="2xl:h-[97px] 3xl:h-[116px] absolute font-circularstd h-[96px] inset-[0] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[1px] lg:leading-lh42 lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[17%] xl:leading-lh48 xl:text-fs16">{`Email ID*`}</Text>
                        <Image
                          src="img_bg_71.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute bottom-[0] h-[54px] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="3xl:bottom-[15px] absolute bottom-[13px] font-circularstd inset-x-[0] justify-between lg:bottom-[10px] mx-[auto] px-[0] w-[95%] xl:bottom-[11px]">
                        <Text className="3xl:text-fs19 font-circularstd font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] text-bluegray_202 text-fs16 text-left xl:mb-[1px] xl:text-fs14">{`va.morose@support.com`}</Text>
                        <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mt-[1px] lg:text-fs12 mt-[2px] text-fs16 text-green_300 text-right tracking-ls1 xl:mt-[1px] xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                    <Stack className="2xl:h-[285px] 3xl:h-[341px] h-[284px] lg:h-[221px] lg:mt-[1px] mt-[2px] self-stretch w-[100%] xl:h-[253px] xl:mt-[1px]">
                      <Column className="absolute font-circularstd inset-x-[0] justify-start top-[0] w-[100%]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Stack className="2xl:h-[97px] 3xl:h-[116px] h-[96px] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                            <Stack className="2xl:h-[97px] 3xl:h-[116px] absolute font-circularstd h-[96px] inset-[0] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                              <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[2px] lg:leading-lh42 lg:left-[1px] lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[19%] xl:leading-lh48 xl:left-[1px] xl:text-fs16">{`Phone No*`}</Text>
                              <Image
                                src="img_bg_72.svg"
                                className="2xl:h-[55px] 3xl:h-[65px] absolute bottom-[0] h-[54px] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                                alt="BG"
                              />
                            </Stack>
                            <Row className="3xl:bottom-[15px] absolute bottom-[13px] font-circularstd inset-x-[0] items-center justify-between lg:bottom-[10px] mx-[auto] px-[0] w-[95%] xl:bottom-[11px]">
                              <Text className="3xl:text-fs19 font-circularstd font-normal lg:text-fs12 text-bluegray_202 text-fs16 text-left xl:text-fs14">{`Mobile No`}</Text>
                              <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:text-fs12 text-fs16 text-pink_A200 text-right tracking-ls1 xl:text-fs14">{``}</Text>
                            </Row>
                          </Stack>
                        </Column>
                        <Text className="3xl:mr-[12px] 3xl:mt-[6px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs12 ml-[1px] mr-[10px] mt-[5px] text-fs16 text-left text-pink_A200 xl:mr-[8px] xl:mt-[4px] xl:text-fs14">{`Please enter your phone no`}</Text>
                      </Column>
                      <Column className="absolute bottom-[0] font-circularstd inset-x-[0] justify-start w-[100%]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Stack className="2xl:h-[138px] 3xl:h-[166px] font-circularstd h-[137.5px] lg:h-[107px] self-stretch w-[100%] xl:h-[123px]">
                            <Stack className="2xl:h-[138px] 3xl:h-[166px] absolute font-circularstd h-[137.5px] inset-[0] lg:h-[107px] self-stretch w-[100%] xl:h-[123px]">
                              <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs14 text-bluegray_805 text-fs18 text-left top-[0] w-[17%] xl:leading-lh48 xl:text-fs16">{`Address*`}</Text>
                              <Stack className="2xl:h-[96px] 3xl:h-[115px] absolute bottom-[0] h-[95.5px] lg:h-[75px] self-stretch w-[100%] xl:h-[85px]">
                                <Image
                                  src="img_bg_73.svg"
                                  className="2xl:h-[95px] 3xl:h-[113px] absolute bottom-[1px] h-[94px] inset-x-[0] lg:h-[74px] object-cover self-stretch top-[0] w-[100%] xl:h-[84px]"
                                  alt="BG"
                                />
                                <Text className="3xl:right-[8px] 3xl:text-fs19 absolute bottom-[0] font-normal lg:right-[5px] lg:text-fs12 right-[7px] text-bluegray_202 text-fs16 text-right xl:right-[6px] xl:text-fs14">{`. .. ...`}</Text>
                              </Stack>
                              <Text className="3xl:left-[21px] 3xl:text-fs19 absolute font-normal h-[max-content] inset-y-[0] left-[18px] lg:left-[14px] lg:text-fs12 my-[auto] text-bluegray_202 text-fs16 text-left xl:left-[16px] xl:text-fs14">{`Details`}</Text>
                            </Stack>
                            <Text className="3xl:right-[18px] 3xl:text-fs19 absolute font-materialdesignicons font-normal h-[max-content] inset-y-[0] lg:right-[11px] lg:text-fs12 my-[auto] right-[15px] text-fs16 text-pink_A200 text-right tracking-ls1 xl:right-[13px] xl:text-fs14">{``}</Text>
                          </Stack>
                        </Column>
                        <Text className="2xl:mt-[3px] 3xl:mr-[12px] 3xl:mt-[4px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[2px] lg:text-fs12 ml-[1px] mr-[10px] mt-[3.5px] text-fs16 text-left text-pink_A200 xl:mr-[8px] xl:mt-[3px] xl:text-fs14">{`Please enter your Address`}</Text>
                      </Column>
                    </Stack>
                  </Column>
                  <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:mr-[12px] 3xl:mt-[15px] font-circularstd h-[54px] lg:h-[42px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[13px] w-[20%] xl:h-[49px] xl:mr-[8px] xl:mt-[11px]">
                    <Image
                      src="img_bg_74.svg"
                      className="2xl:h-[42px] 3xl:bottom-[6px] 3xl:h-[50px] absolute bottom-[5px] h-[41px] lg:bottom-[3px] lg:h-[32px] object-cover self-stretch w-[100%] xl:bottom-[4px] xl:h-[37px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:inset-x-[21px] 3xl:leading-lh64 3xl:text-fs21 absolute font-normal inset-x-[18px] inset-y-[0] leading-lh5400 lg:inset-x-[14px] lg:leading-lh42 lg:text-fs14 text-center text-fs18 text-white_A700 w-[71%] xl:inset-x-[16px] xl:leading-lh48 xl:text-fs16">{`Submit`}</Text>
                  </Stack>
                </Column>
              </Stack>
              <Stack className="2xl:h-[576px] 3xl:h-[691px] 3xl:mb-[94px] h-[575px] lg:h-[448px] lg:mb-[61px] mb-[79px] w-[49%] xl:h-[512px] xl:mb-[70px]">
                <Image
                  src="img_textbg_12.svg"
                  className="2xl:h-[576px] 3xl:h-[691px] absolute h-[575px] inset-[0] lg:h-[448px] object-cover self-stretch w-[100%] xl:h-[512px]"
                  alt="TextBG"
                />
                <Column className="3xl:top-[18px] absolute font-circularstd inset-x-[0] justify-start lg:top-[11px] mx-[auto] top-[15px] w-[95%] xl:top-[13px]">
                  <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[1px] lg:mr-[7px] lg:text-fs17 ml-[2px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[36%] xl:leading-lh48 xl:ml-[1px] xl:mr-[8px] xl:text-fs19">{`jQuery From Validation`}</Text>
                  <Column className="3xl:mt-[9px] items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
                    <Row className="font-circularstd items-center justify-start self-stretch w-[100%]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[1px] lg:mt-[1px] lg:text-fs14 ml-[2px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[12%] xl:leading-lh48 xl:ml-[1px] xl:mt-[1px] xl:text-fs16">{`Name*`}</Text>
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[91px] 3xl:mr-[249px] font-materialdesignicons h-[54px] lg:h-[42px] lg:mb-[1px] lg:ml-[59px] lg:mr-[161px] mb-[2px] ml-[76px] mr-[208px] w-[49%] xl:h-[49px] xl:mb-[1px] xl:ml-[67px] xl:mr-[185px]">
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute font-materialdesignicons h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                          <Image
                            src="img_bg_75.svg"
                            className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[88%] xl:h-[49px]"
                            alt="BG"
                          />
                          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal leading-lh5400 lg:leading-lh42 lg:text-fs14 right-[0] text-center text-fs18 text-green_300 tracking-ls1 w-[14%] xl:leading-lh48 xl:text-fs16">{``}</Text>
                        </Stack>
                        <Text className="3xl:left-[20px] 3xl:text-fs19 absolute font-circularstd font-normal h-[max-content] inset-y-[0] left-[17px] lg:left-[13px] lg:text-fs12 my-[auto] text-bluegray_202 text-fs16 text-left xl:left-[15px] xl:text-fs14">{`Desmond Eagle`}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[14%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Email ID*`}</Text>
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:ml-[69px] 3xl:mr-[249px] font-circularstd h-[54px] lg:h-[42px] lg:mb-[1px] lg:ml-[45px] lg:mr-[161px] mb-[2px] ml-[58px] mr-[208px] w-[49%] xl:h-[49px] xl:mb-[1px] xl:ml-[51px] xl:mr-[185px]">
                        <Input
                          className="3xl:pb-[21px] 3xl:pl-[19px] 3xl:pt-[24px] 3xl:text-fs19 absolute bg-transparent border-0 font-circularstd font-normal left-[0] lg:pb-[14px] lg:pl-[12px] lg:pt-[15px] lg:text-fs12 pb-[18px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[20px] text-bluegray_202 text-fs16 text-left w-[88%] xl:pb-[16px] xl:pl-[14px] xl:pt-[17px] xl:text-fs14"
                          name="BG"
                          placeholder={`desmond@support.com`}
                        ></Input>
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-materialdesignicons font-normal leading-lh5400 lg:leading-lh42 lg:text-fs14 right-[0] text-center text-fs18 text-green_300 tracking-ls1 w-[14%] xl:leading-lh48 xl:text-fs16">{``}</Text>
                      </Stack>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-between lg:mt-[11px] mt-[15px] px-[0] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 ml-[1px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[18%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Contact No*`}</Text>
                      <Input
                        className="3xl:pb-[20px] 3xl:pl-[20px] 3xl:pt-[25px] 3xl:text-fs19 bg-transparent border-0 font-normal lg:mb-[1px] lg:pb-[13px] lg:pl-[13px] lg:pt-[16px] lg:text-fs12 mb-[2px] pb-[17px] pl-[17px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[21px] text-bluegray_202 text-fs16 text-left w-[43%] xl:mb-[1px] xl:pb-[15px] xl:pl-[15px] xl:pt-[18px] xl:text-fs14"
                        name="BG"
                        placeholder={`No`}
                      ></Input>
                      <Text className="3xl:my-[19px] 3xl:text-fs19 font-normal lg:my-[12px] lg:text-fs12 my-[16px] text-fs16 text-left text-pink_A200 xl:my-[14px] xl:text-fs14">{`Please enter your Contact No`}</Text>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[10%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`City*`}</Text>
                      <Input
                        className="3xl:ml-[109px] 3xl:pb-[16px] 3xl:pl-[20px] 3xl:pt-[28px] 3xl:text-fs19 bg-transparent border-0 font-normal lg:mb-[1px] lg:ml-[70px] lg:pb-[10px] lg:pl-[13px] lg:pt-[18px] lg:text-fs12 mb-[2px] ml-[91px] pb-[14px] pl-[17px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[24px] text-bluegray_202 text-fs16 text-left w-[43%] xl:mb-[1px] xl:ml-[80px] xl:pb-[12px] xl:pl-[15px] xl:pt-[21px] xl:text-fs14"
                        name="BG"
                        placeholder={`City`}
                      ></Input>
                      <Text className="3xl:ml-[13px] 3xl:mr-[61px] 3xl:my-[19px] 3xl:text-fs19 font-normal lg:ml-[8px] lg:mr-[39px] lg:my-[12px] lg:text-fs12 ml-[11px] mr-[51px] my-[16px] text-fs16 text-left text-pink_A200 xl:ml-[9px] xl:mr-[45px] xl:my-[14px] xl:text-fs14">{`Please select your city`}</Text>
                    </Row>
                    <Row className="3xl:mt-[18px] font-circularstd justify-between lg:mt-[11px] mt-[15px] px-[0] w-[100%] xl:mt-[13px]">
                      <Text className="2xl:leading-lh54 2xl:mb-[42px] 3xl:leading-lh64 3xl:mb-[51px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[33px] lg:mt-[1px] lg:text-fs14 mb-[42.5px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[18%] xl:leading-lh48 xl:mb-[37px] xl:mt-[1px] xl:text-fs16">{`Description*`}</Text>
                      <Stack className="2xl:h-[99px] 3xl:h-[119px] h-[98.5px] lg:h-[77px] w-[43%] xl:h-[88px]">
                        <TextArea
                          className="3xl:pb-[46px] 3xl:pl-[19px] 3xl:pt-[28px] 3xl:text-fs19 absolute bg-transparent border-0 font-normal lg:pb-[30px] lg:pl-[12px] lg:pt-[18px] lg:text-fs12 pb-[39px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_202 pt-[24px] self-stretch text-bluegray_202 text-fs16 text-left top-[0] w-[100%] xl:pb-[34px] xl:pl-[14px] xl:pt-[21px] xl:text-fs14"
                          name="Group680"
                          placeholder={`Your Comments`}
                        ></TextArea>
                        <Text className="3xl:right-[7px] 3xl:text-fs19 absolute bottom-[0] font-normal lg:right-[4px] lg:text-fs12 right-[6px] text-bluegray_202 text-fs16 text-right tracking-ls1 xl:right-[5px] xl:text-fs14">{`. .. ...`}</Text>
                      </Stack>
                      <Text className="2xl:mb-[38px] 3xl:mb-[46px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[29px] lg:mt-[28px] lg:text-fs12 mb-[38.5px] mt-[36px] text-fs16 text-left text-pink_A200 xl:mb-[34px] xl:mt-[32px] xl:text-fs14">{`Please enter your Description`}</Text>
                    </Row>
                  </Column>
                  <Stack className="2xl:h-[55px] 2xl:mt-[16px] 3xl:h-[65px] 3xl:mt-[19px] 3xl:mx-[193px] font-circularstd h-[54px] lg:h-[42px] lg:mt-[12px] lg:mx-[125px] mt-[16.5px] mx-[161px] w-[17%] xl:h-[49px] xl:mt-[14px] xl:mx-[143px]">
                    <Image
                      src="img_bg_76.svg"
                      className="2xl:h-[42px] 3xl:bottom-[7px] 3xl:h-[50px] 3xl:top-[8px] absolute bottom-[6px] h-[41px] inset-x-[0] lg:bottom-[4px] lg:h-[32px] lg:top-[5px] object-cover self-stretch top-[7px] w-[100%] xl:bottom-[5px] xl:h-[37px] xl:top-[6px]"
                      alt="BG"
                    />
                    <Text className="2xl:leading-lh54 3xl:inset-x-[21px] 3xl:leading-lh64 3xl:text-fs21 absolute font-normal inset-x-[18px] inset-y-[0] leading-lh5400 lg:inset-x-[14px] lg:leading-lh42 lg:text-fs14 text-center text-fs18 text-white_A700 w-[71%] xl:inset-x-[16px] xl:leading-lh48 xl:text-fs16">{`Submit`}</Text>
                  </Stack>
                </Column>
              </Stack>
            </Row>
            <Stack className="2xl:h-[1258px] 3xl:h-[1510px] 3xl:mt-[45px] h-[1257px] lg:h-[978px] lg:mt-[29px] mt-[38px] self-stretch w-[100%] xl:h-[1119px] xl:mt-[33px]">
              <Image
                src="img_textbg_13.svg"
                className="2xl:h-[1258px] 3xl:h-[1510px] absolute h-[1257px] inset-[0] lg:h-[978px] object-cover self-stretch w-[100%] xl:h-[1119px]"
                alt="TextBG"
              />
              <Column className="absolute font-circularstd h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[7px] 3xl:mr-[12px] 3xl:text-fs26 font-normal leading-lh5400 lg:leading-lh42 lg:ml-[4px] lg:mr-[7px] lg:text-fs17 ml-[6px] mr-[10px] text-bluegray_805 text-fs22 text-left w-[19%] xl:leading-lh48 xl:ml-[5px] xl:mr-[8px] xl:text-fs19">{`Bootstrap From Validation`}</Text>
                <List
                  className="3xl:mt-[57px] 3xl:mx-[250px] flex-wrap gap-[0] lg:mt-[37px] lg:mx-[162px] min-h-[auto] mt-[48px] mx-[209px] w-[60%] xl:mt-[42px] xl:mx-[185px]"
                  orientation="vertical"
                >
                  <Row className="3xl:my-[9px] font-circularstd items-center justify-between lg:my-[6px] my-[8px] px-[0] w-[100%] xl:my-[7px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[14%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`First Name*`}</Text>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_77.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_78.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                        <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[2px] lg:text-fs12 mb-[3px] text-fs16 text-green_300 text-left tracking-ls1 xl:mb-[2px] xl:text-fs14">{``}</Text>
                        <Text className="3xl:text-fs19 font-circularstd font-normal lg:ml-[1px] lg:mt-[2px] lg:text-fs12 ml-[2px] mt-[3px] text-bluegray_202 text-fs16 text-left tracking-ls1 xl:ml-[1px] xl:mt-[2px] xl:text-fs14">{`Druid`}</Text>
                        <Text className="3xl:ml-[627px] 3xl:text-fs19 font-materialdesignicons font-normal lg:ml-[406px] lg:mt-[2px] lg:text-fs12 ml-[523px] mt-[3px] text-fs16 text-green_300 text-right tracking-ls1 xl:ml-[465px] xl:mt-[2px] xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                  </Row>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Row className="3xl:my-[9px] font-circularstd items-center justify-between lg:my-[6px] my-[8px] px-[0] w-[100%] xl:my-[7px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[14%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Last Name*`}</Text>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_79.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_80.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                        <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[2px] lg:text-fs12 mb-[3px] text-fs16 text-green_300 text-left tracking-ls1 xl:mb-[2px] xl:text-fs14">{``}</Text>
                        <Text className="3xl:text-fs19 font-circularstd font-normal lg:ml-[1px] lg:mt-[2px] lg:text-fs12 ml-[2px] mt-[3px] text-bluegray_202 text-fs16 text-left tracking-ls1 xl:ml-[1px] xl:mt-[2px] xl:text-fs14">{`Wensleydale`}</Text>
                        <Text className="3xl:ml-[561px] 3xl:text-fs19 font-materialdesignicons font-normal lg:ml-[364px] lg:mt-[2px] lg:text-fs12 ml-[468px] mt-[3px] text-fs16 text-green_300 text-right tracking-ls1 xl:ml-[416px] xl:mt-[2px] xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                  </Row>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Row className="3xl:my-[9px] font-circularstd items-center justify-between lg:my-[6px] my-[8px] px-[0] w-[100%] xl:my-[7px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[13%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Phone No*`}</Text>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_79.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_80.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[95%]">
                        <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] text-fs16 text-green_300 text-left tracking-ls1 xl:mb-[1px] xl:text-fs14">{``}</Text>
                        <Text className="3xl:text-fs19 font-circularstd font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] text-bluegray_202 text-fs16 text-left tracking-ls1 xl:mb-[1px] xl:text-fs14">{`(+1) 408-657-9007`}</Text>
                        <Text className="3xl:ml-[516px] 3xl:text-fs19 font-materialdesignicons font-normal lg:ml-[334px] lg:mt-[1px] lg:text-fs12 ml-[430px] mt-[2px] text-fs16 text-green_300 text-right tracking-ls1 xl:ml-[382px] xl:mt-[1px] xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                  </Row>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Row className="3xl:my-[9px] font-circularstd items-center justify-between lg:my-[6px] my-[8px] px-[0] w-[100%] xl:my-[7px]">
                    <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[12%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Address*`}</Text>
                    <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                      <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                        <Image
                          src="img_bg_81.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                          alt="BG"
                        />
                        <Image
                          src="img_bg_82.svg"
                          className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                          alt="BG"
                        />
                      </Stack>
                      <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[96%]">
                        <Column className="justify-start w-[56%]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-materialdesignicons font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-green_300 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{``}</Text>
                          <Text className="3xl:ml-[58px] 3xl:text-fs19 font-circularstd font-normal lg:ml-[38px] lg:text-fs12 ml-[49px] text-bluegray_202 text-fs16 text-left tracking-ls1 xl:ml-[43px] xl:text-fs14">{`1689 Friendship Lane San Jose, CA 95113`}</Text>
                        </Column>
                        <Text className="3xl:text-fs19 font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] text-fs16 text-green_300 text-right tracking-ls1 xl:mb-[1px] xl:text-fs14">{``}</Text>
                      </Row>
                    </Stack>
                  </Row>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[8%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`City*`}</Text>
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                          <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_83.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_84.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[95%]">
                            <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[2px] lg:text-fs12 mb-[3px] text-fs16 text-left text-pink_A200 xl:mb-[2px] xl:text-fs14">{``}</Text>
                            <Text className="3xl:text-fs19 font-circularstd font-normal lg:ml-[2px] lg:mt-[2px] lg:text-fs12 ml-[3px] mt-[3px] text-bluegray_202 text-fs16 text-left xl:ml-[2px] xl:mt-[2px] xl:text-fs14">{`City`}</Text>
                            <Text className="3xl:ml-[644px] 3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[1px] lg:ml-[417px] lg:text-fs12 mb-[2px] ml-[537px] mt-[1px] text-fs16 text-pink_A200 text-right xl:mb-[1px] xl:ml-[477px] xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[210px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[136px] lg:text-fs12 mt-[3px] mx-[175px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[2px] xl:mx-[155px] xl:text-fs14">{`Please select your city`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[9%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`State*`}</Text>
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                          <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_85.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_86.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                            <Text className="3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] text-fs16 text-left text-pink_A200 xl:mb-[1px] xl:text-fs14">{``}</Text>
                            <Text className="3xl:text-fs19 font-circularstd font-normal lg:mt-[1px] lg:text-fs12 ml-[1px] mt-[2px] text-bluegray_202 text-fs16 text-left xl:mt-[1px] xl:text-fs14">{`State`}</Text>
                            <Text className="3xl:ml-[636px] 3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[1px] lg:ml-[412px] lg:text-fs12 mb-[2px] ml-[530px] text-fs16 text-pink_A200 text-right xl:mb-[1px] xl:ml-[471px] xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[210px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[136px] lg:text-fs12 mt-[3px] mx-[175px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[2px] xl:mx-[155px] xl:text-fs14">{`Please select your state`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] self-stretch w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[13%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`ZIP Code*`}</Text>
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[80%] xl:h-[49px] xl:mb-[1px]">
                          <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_87.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_88.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[96%]">
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 mb-[1px] text-fs16 text-left text-pink_A200 xl:text-fs14">{``}</Text>
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 mt-[1px] text-fs16 text-pink_A200 text-right xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[211px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[136px] lg:text-fs12 mt-[3px] mx-[176px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[2px] xl:mx-[156px] xl:text-fs14">{`Please supply a vaild ZIP Code`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mb-[45px] 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mb-[29px] lg:mt-[1px] lg:text-fs14 mb-[38px] mt-[2px] text-bluegray_805 text-fs18 text-left w-[9%] xl:leading-lh48 xl:mb-[33px] xl:mt-[1px] xl:text-fs16">{`About`}</Text>
                        <Stack className="2xl:h-[95px] 3xl:h-[113px] h-[94px] lg:h-[74px] w-[81%] xl:h-[84px]">
                          <Stack className="2xl:h-[95px] 3xl:h-[113px] absolute h-[94px] inset-[0] lg:h-[74px] self-stretch w-[100%] xl:h-[84px]">
                            <Image
                              src="img_bg_89.svg"
                              className="2xl:h-[95px] 3xl:h-[113px] absolute h-[94px] inset-[0] lg:h-[74px] object-cover self-stretch w-[100%] xl:h-[84px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_90.svg"
                              className="2xl:h-[95px] 3xl:h-[113px] absolute h-[94px] left-[0] lg:h-[74px] object-contain w-[7%] xl:h-[84px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="3xl:top-[20px] absolute font-materialdesignicons inset-x-[0] justify-between lg:top-[13px] mx-[auto] px-[0] top-[17px] w-[96%] xl:top-[15px]">
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 mt-[1px] text-fs16 text-left text-pink_A200 xl:text-fs14">{``}</Text>
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 mb-[1px] text-fs16 text-pink_A200 text-right xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mt-[6px] 3xl:mx-[210px] 3xl:text-fs19 font-normal lg:mt-[3px] lg:mx-[136px] lg:text-fs12 mt-[5px] mx-[175px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[4px] xl:mx-[155px] xl:text-fs14">{`Please enter at leart 10 characters and no more than 250`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[11%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Email ID*`}</Text>
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                          <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_87.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_88.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] justify-center m-[auto] w-[96%]">
                            <Text className="2xl:mb-[12px] 3xl:mb-[15px] 3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[9px] lg:mt-[1px] lg:text-fs12 mb-[12.5px] mt-[2px] text-fs16 text-left text-pink_A200 xl:mb-[11px] xl:mt-[1px] xl:text-fs14">{``}</Text>
                            <Text className="2xl:mt-[14px] 3xl:mt-[17px] 3xl:text-fs19 font-circularstd font-normal lg:mt-[11px] lg:text-fs12 mt-[14.5px] text-bluegray_202 text-fs16 text-left xl:mt-[12px] xl:text-fs14">{`Enter your Email`}</Text>
                            <Text className="3xl:ml-[541px] 3xl:text-fs19 font-materialdesignicons font-normal lg:mb-[2px] lg:ml-[350px] lg:text-fs12 mb-[3px] ml-[451px] text-fs16 text-pink_A200 text-right xl:mb-[2px] xl:ml-[401px] xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[210px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[136px] lg:text-fs12 mt-[3px] mx-[175px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[2px] xl:mx-[155px] xl:text-fs14">{`Please enter your email Id`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Column className="3xl:my-[9px] font-circularstd justify-start lg:my-[6px] my-[8px] w-[100%] xl:my-[7px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-circularstd items-center justify-between px-[0] self-stretch w-[100%]">
                        <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 font-normal leading-lh5400 lg:leading-lh42 lg:mt-[1px] lg:text-fs14 mt-[2px] text-bluegray_805 text-fs18 text-left w-[13%] xl:leading-lh48 xl:mt-[1px] xl:text-fs16">{`Password*`}</Text>
                        <Stack className="2xl:h-[55px] 3xl:h-[65px] h-[54px] lg:h-[42px] lg:mb-[1px] mb-[2px] w-[81%] xl:h-[49px] xl:mb-[1px]">
                          <Stack className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] self-stretch w-[100%] xl:h-[49px]">
                            <Image
                              src="img_bg_85.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-[0] lg:h-[42px] object-cover self-stretch w-[100%] xl:h-[49px]"
                              alt="BG"
                            />
                            <Image
                              src="img_bg_86.svg"
                              className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] left-[0] lg:h-[42px] object-contain w-[7%] xl:h-[49px]"
                              alt="BG"
                            />
                          </Stack>
                          <Row className="absolute font-materialdesignicons h-[max-content] inset-[0] items-center justify-center m-[auto] px-[0] w-[96%]">
                            <Column className="justify-start w-[21%]">
                              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-pink_A200 xl:mr-[8px] xl:text-fs14">{``}</Text>
                              <Column className="font-circularstd items-end self-stretch w-[100%]">
                                <Text className="3xl:ml-[12px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[8px] xl:text-fs14">{`Password`}</Text>
                              </Column>
                            </Column>
                            <Text className="3xl:text-fs19 font-normal lg:mb-[1px] lg:text-fs12 mb-[2px] mt-[1px] text-fs16 text-pink_A200 text-right xl:mb-[1px] xl:text-fs14">{``}</Text>
                          </Row>
                        </Stack>
                      </Row>
                    </Column>
                    <Text className="3xl:mx-[210px] 3xl:text-fs19 font-normal lg:mt-[2px] lg:mx-[136px] lg:text-fs12 mt-[3px] mx-[175px] text-fs16 text-left text-pink_A200 tracking-ls1 xl:mt-[2px] xl:mx-[155px] xl:text-fs14">{`Please enter your password`}</Text>
                  </Column>
                  <Line className="w-[100%] opacity-op8 bg-black_900 flex-wrap min-h-[auto]" />
                  <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:my-[9px] h-[56px] lg:h-[44px] lg:my-[6px] my-[8px] w-[100%] xl:h-[50px] xl:my-[7px]">
                    <Stack className="2xl:h-[57px] 3xl:h-[68px] absolute font-circularstd h-[56px] inset-[0] lg:h-[44px] self-stretch w-[100%] xl:h-[50px]">
                      <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:text-fs21 absolute font-normal h-[max-content] inset-y-[0] leading-lh5400 left-[0] lg:leading-lh42 lg:text-fs14 my-[auto] text-bluegray_805 text-fs18 text-left w-[21%] xl:leading-lh48 xl:text-fs16">{`Confirm Password*`}</Text>
                      <Image
                        src="img_bg_91.svg"
                        className="2xl:h-[55px] 3xl:h-[65px] absolute h-[54px] inset-y-[0] lg:h-[42px] my-[auto] object-contain right-[0] w-[81%] xl:h-[49px]"
                        alt="BG"
                      />
                      <Image
                        src="img_bg_92.svg"
                        className="2xl:h-[55px] 3xl:h-[65px] 3xl:left-[208px] absolute h-[54px] inset-y-[0] left-[174px] lg:h-[42px] lg:left-[135px] my-[auto] object-contain w-[6%] xl:h-[49px] xl:left-[154px]"
                        alt="BG"
                      />
                    </Stack>
                    <Column className="3xl:left-[226px] absolute font-materialdesignicons h-[max-content] inset-y-[0] justify-start left-[189px] lg:left-[147px] my-[auto] w-[23%] xl:left-[168px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_202 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{``}</Text>
                      <Column className="font-circularstd items-end self-stretch w-[100%]">
                        <Text className="3xl:ml-[12px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[10px] text-bluegray_202 text-fs16 text-left xl:ml-[8px] xl:text-fs14">{`Confirm Password`}</Text>
                      </Column>
                    </Column>
                  </Stack>
                </List>
                <Stack className="2xl:h-[55px] 3xl:h-[65px] 3xl:mt-[46px] 3xl:mx-[461px] font-circularstd h-[54px] lg:h-[42px] lg:mt-[30px] lg:mx-[298px] mt-[39px] mx-[384px] w-[8%] xl:h-[49px] xl:mt-[34px] xl:mx-[341px]">
                  <Image
                    src="img_bg_93.svg"
                    className="2xl:h-[42px] 3xl:bottom-[7px] 3xl:h-[50px] 3xl:top-[8px] absolute bottom-[6px] h-[41px] inset-x-[0] lg:bottom-[4px] lg:h-[32px] lg:top-[5px] object-cover self-stretch top-[7px] w-[100%] xl:bottom-[5px] xl:h-[37px] xl:top-[6px]"
                    alt="BG"
                  />
                  <Text className="2xl:leading-lh54 3xl:inset-x-[32px] 3xl:leading-lh64 3xl:text-fs21 absolute font-normal inset-x-[27px] inset-y-[0] leading-lh5400 lg:inset-x-[21px] lg:leading-lh42 lg:text-fs14 text-center text-fs18 text-white_A700 w-[56%] xl:inset-x-[24px] xl:leading-lh48 xl:text-fs16">{`Send`}</Text>
                </Stack>
              </Column>
            </Stack>
          </Column>
        </Stack>
      </Stack>
    </Column>
  );
};

export default Artboard2Page;
