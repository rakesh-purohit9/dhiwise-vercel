import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { List } from "components/List";
import { Slider } from "components/Slider";
import { Line } from "components/Line";

const Blogalt1Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[909px] 3xl:h-[1091px] h-[908px] lg:h-[707px] self-stretch w-[100%] xl:h-[808px]">
          <Stack className="2xl:h-[909px] 3xl:h-[1091px] absolute h-[908px] inset-[0] lg:h-[707px] self-stretch w-[100%] xl:h-[808px]">
            <Image
              src="img_background_18.svg"
              className="2xl:h-[743px] 3xl:h-[891px] absolute h-[742px] lg:h-[578px] object-cover self-stretch top-[0] w-[100%] xl:h-[661px]"
              alt="Background"
            />
            <Stack className="2xl:h-[382px] 3xl:h-[458px] absolute bottom-[0] h-[381px] inset-x-[0] lg:h-[297px] mx-[auto] w-[79%] xl:h-[339px]">
              <Column className="absolute bg-white_A700 border border-indigo_50 border-solid bottom-[0] inset-x-[0] justify-start rounded-radius16 self-stretch shadow-bs17 top-[1px] w-[100%]">
                <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                    <Image
                      src="img_layer.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                      alt="Layer"
                    />
                    <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                </Column>
                <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                  <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                    <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_icon_28.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
              <div className="2xl:h-[382px] 3xl:h-[458px] absolute bg-red_A201 border-bw3 border-solid border-white_A700 h-[381px] left-[0] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] w-[50%] xl:h-[339px]"></div>
            </Stack>
          </Stack>
          <Column className="3xl:top-[31px] absolute font-hkgrotesk inset-x-[0] items-center justify-start lg:top-[20px] mx-[auto] top-[26px] w-[79%] xl:top-[23px]">
            <Row className="items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_logo_11.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[9px] 3xl:mt-[14px] h-[28px] lg:h-[22px] lg:mb-[6px] lg:mt-[9px] mb-[8px] mt-[12px] object-contain w-[8%] xl:h-[25px] xl:mb-[7px] xl:mt-[10px]"
                alt="Logo"
              />
              <Row className="3xl:ml-[547px] 3xl:my-[15px] font-opensans items-center justify-center lg:ml-[354px] lg:my-[10px] ml-[456px] my-[13px] w-[37%] xl:ml-[405px] xl:my-[11px]">
                <Text className="3xl:text-fs19 font-semibold lg:text-fs12 text-center text-fs16 text-white_A700 xl:text-fs14">{`Home`}</Text>
                <Row className="3xl:ml-[48px] items-center justify-center lg:ml-[31px] ml-[40px] w-[20%] xl:ml-[35px]">
                  <Text className="3xl:text-fs19 font-semibold lg:text-fs12 text-center text-fs16 text-white_A700 xl:text-fs14">{`Landings`}</Text>
                  <Image
                    src="img_angledown_1.svg"
                    className="2xl:h-[6px] 2xl:mb-[8px] 2xl:ml-[4px] 2xl:mt-[7px] 3xl:h-[7px] 3xl:mb-[10px] 3xl:ml-[4px] 3xl:mt-[9px] h-[5.65px] lg:h-[5px] lg:ml-[3px] lg:my-[6px] mb-[8.419998px] ml-[4.119995px] mr-[1px] mt-[7.9300003px] object-contain w-[11%] xl:h-[6px] xl:ml-[3px] xl:my-[7px]"
                    alt="angledown"
                  />
                </Row>
                <Row className="3xl:ml-[48px] items-center justify-center lg:ml-[31px] ml-[40px] w-[14%] xl:ml-[35px]">
                  <Text className="3xl:text-fs19 font-semibold lg:text-fs12 text-center text-fs16 text-white_A700 xl:text-fs14">{`Pages`}</Text>
                  <Image
                    src="img_angledown_1.svg"
                    className="2xl:h-[6px] 2xl:mb-[8px] 2xl:ml-[4px] 2xl:mt-[7px] 3xl:h-[7px] 3xl:mb-[10px] 3xl:ml-[4px] 3xl:mt-[9px] h-[5.65px] lg:h-[5px] lg:ml-[3px] lg:my-[6px] mb-[8.419998px] ml-[4.119995px] mt-[7.9300003px] object-contain w-[15%] xl:h-[6px] xl:ml-[3px] xl:my-[7px]"
                    alt="angledown"
                  />
                </Row>
                <Text className="2xl:ml-[40px] 3xl:ml-[48px] 3xl:text-fs19 font-semibold lg:ml-[31px] lg:text-fs12 ml-[40.130005px] text-center text-fs16 text-white_A700 xl:ml-[35px] xl:text-fs14">{`Docs`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-semibold lg:ml-[31px] lg:text-fs12 ml-[40px] text-center text-fs16 text-white_A700 xl:ml-[35px] xl:text-fs14">{`Help`}</Text>
              </Row>
              <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[48px] font-opensans h-[48px] lg:h-[38px] lg:ml-[31px] ml-[40px] w-[11%] xl:h-[43px] xl:ml-[35px]">
                <Image
                  src="img_background_19.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] absolute h-[48px] inset-[0] lg:h-[38px] object-cover self-stretch w-[100%] xl:h-[43px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs19 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs12 m-[auto] text-center text-fs16 text-white_A700 w-[max-content] xl:text-fs14">{`Get it now`}</Text>
              </Stack>
            </Row>
            <Text className="3xl:mt-[175px] 3xl:text-fs57 font-bold lg:mt-[113px] lg:text-fs37 mt-[146px] mx-[auto] text-center text-fs48 text-white_A700 tracking-ls1 xl:mt-[129px] xl:text-fs42">{`Our Newsroom`}</Text>
            <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[48px] h-[56px] lg:h-[44px] lg:mt-[31px] mt-[40px] mx-[auto] w-[67%] xl:h-[50px] xl:mt-[35px]">
              <Column className="absolute font-opensans inset-[0] items-center justify-start rounded-radius8 self-stretch shadow-bs18 w-[100%]">
                <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                  <Image
                    src="img_search_9.svg"
                    className="absolute left-[20px] bg-transparent border-0 lg:left-[15px] lg:inset-y-[16px] xl:left-[17px] xl:inset-y-[19px] 2xl:inset-y-[21px] 3xl:left-[24px] 3xl:inset-y-[25px] inset-y-[21.375px]"
                    alt="search"
                  />
                  <Input
                    className="2xl:py-[21px] 3xl:pl-[55px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-semibold lg:pl-[35px] lg:py-[16px] lg:text-fs12 pl-[46px] placeholder:bg-transparent placeholder:text-bluegray_301 py-[21.375px] rounded-radius8 text-bluegray_301 text-fs16 text-left w-[100%] xl:pl-[40px] xl:py-[19px] xl:text-fs14"
                    name="Group374"
                    placeholder={`Search article`}
                  ></Input>
                </div>
              </Column>
              <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:right-[9px] absolute font-opensans h-[40px] inset-y-[0] lg:h-[32px] lg:right-[6px] my-[auto] right-[8px] w-[12%] xl:h-[36px] xl:right-[7px]">
                <Image
                  src="img_background_20.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs19 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs12 m-[auto] text-center text-fs16 text-white_A700 w-[max-content] xl:text-fs14">{`Search`}</Text>
              </Stack>
            </Stack>
            <Row className="3xl:mt-[27px] font-opensans items-end justify-center lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
              <Text className="3xl:ml-[228px] 3xl:mt-[7px] 3xl:text-fs19 font-semibold lg:mb-[3px] lg:ml-[147px] lg:mt-[4px] lg:text-fs12 mb-[4px] ml-[190px] mt-[6px] text-fs16 text-left text-white_A700 xl:mb-[3px] xl:ml-[169px] xl:mt-[5px] xl:text-fs14">{`Popular Tags :`}</Text>
              <Button className="3xl:ml-[20px] 3xl:px-[21px] 3xl:py-[10px] 3xl:text-fs16 bg-transparent border border-solid border-white_A700 font-normal lg:ml-[13px] lg:px-[14px] lg:py-[7px] lg:text-fs10 ml-[17px] px-[18px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[7%] xl:ml-[15px] xl:px-[16px] xl:py-[8px] xl:text-fs12">{`Design`}</Button>
              <Button className="3xl:ml-[19px] 3xl:px-[21px] 3xl:py-[10px] 3xl:text-fs16 bg-transparent border border-solid border-white_A700 font-normal lg:ml-[12px] lg:px-[14px] lg:py-[7px] lg:text-fs10 ml-[16px] px-[18px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[12%] xl:ml-[14px] xl:px-[16px] xl:py-[8px] xl:text-fs12">{`User Experience`}</Button>
              <Button className="3xl:ml-[19px] 3xl:mr-[521px] 3xl:px-[21px] 3xl:py-[10px] 3xl:text-fs16 bg-transparent border border-solid border-white_A700 font-normal lg:ml-[12px] lg:mr-[337px] lg:px-[14px] lg:py-[7px] lg:text-fs10 ml-[16px] mr-[434px] px-[18px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[12%] xl:ml-[14px] xl:mr-[386px] xl:px-[16px] xl:py-[8px] xl:text-fs12">{`User Interfaces`}</Button>
            </Row>
          </Column>
        </Stack>
        <Column className="3xl:mt-[115px] items-center justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Column className="font-hkgrotesk justify-start self-stretch w-[100%]">
            <Text className="3xl:mx-[180px] 3xl:text-fs43 font-bold lg:mx-[116px] lg:text-fs28 mx-[150px] text-bluegray_803 text-fs36 text-left tracking-ls1 xl:mx-[133px] xl:text-fs32">{`Popular Articles`}</Text>
            <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
              <Row className="font-opensans justify-between px-[0] self-stretch w-[100%]">
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[180px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[116px] lg:text-fs14 ml-[150px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:ml-[133px] xl:text-fs16">{`We share common trends, strategies ideas, opinions, short & long stories from the team behind company.`}</Text>
                <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:mb-[15px] 3xl:mr-[180px] h-[48px] lg:h-[38px] lg:mb-[10px] lg:mr-[116px] mb-[13px] mr-[150px] w-[10%] xl:h-[43px] xl:mb-[11px] xl:mr-[133px]">
                  <Image
                    src="img_background_21.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] absolute h-[48px] inset-[0] lg:h-[38px] object-cover self-stretch w-[100%] xl:h-[43px]"
                    alt="Background"
                  />
                  <Row className="absolute font-opensans h-[max-content] inset-[0] items-center justify-center m-[auto] w-[66%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-blue_700 text-center text-fs16 xl:text-fs14">{`View all`}</Text>
                    <Image
                      src="img_arrowright.svg"
                      className="2xl:h-[12px] 2xl:mb-[5px] 2xl:ml-[16px] 2xl:mt-[4px] 3xl:h-[15px] 3xl:mb-[6px] 3xl:ml-[19px] 3xl:mt-[5px] h-[11.94px] lg:h-[10px] lg:mb-[4px] lg:ml-[12px] lg:mt-[3px] mb-[5.2800293px] ml-[16.380005px] mt-[4.7800293px] object-contain w-[13%] xl:h-[11px] xl:ml-[14px] xl:my-[4px]"
                      alt="arrowright"
                    />
                  </Row>
                </Stack>
              </Row>
            </Column>
          </Column>
          <List
            className="3xl:gap-[36px] 3xl:mt-[57px] flex-wrap gap-[30px] grid grid-cols-2 lg:gap-[23px] lg:mt-[37px] min-h-[auto] mt-[48px] mx-[auto] w-[79%] xl:gap-[26px] xl:mt-[42px]"
            orientation="horizontal"
          >
            <Stack className="2xl:h-[601px] 3xl:h-[721px] h-[600px] lg:h-[467px] shadow-bs19 w-[100%] xl:h-[534px]">
              <Image
                src="img_image_4.png"
                className="2xl:h-[601px] 3xl:h-[721px] absolute h-[600px] inset-[0] lg:h-[467px] object-cover self-stretch w-[100%] xl:h-[534px]"
                alt="Image"
              />
              <Column className="absolute font-opensans h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] font-opensans h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] w-[21%] xl:h-[29px] xl:mr-[8px]">
                  <Image
                    src="img_layer_1.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                    alt="Layer"
                  />
                  <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                </Stack>
                <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:ml-[19px] 3xl:mt-[327px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:ml-[12px] lg:mt-[212px] lg:text-fs28 ml-[16px] mt-[273px] text-fs36 text-left text-white_A700 tracking-ls1 w-[97%] xl:leading-lh42 xl:ml-[14px] xl:mt-[242px] xl:text-fs32">{`How to prevent and protect your family from Carbon monoxide`}</Text>
                <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:ml-[19px] items-center justify-start lg:ml-[12px] ml-[16px] w-[34%] xl:ml-[14px]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_icon_29.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[601px] 3xl:h-[721px] h-[600px] lg:h-[467px] shadow-bs19 w-[100%] xl:h-[534px]">
              <Image
                src="img_base_2.png"
                className="2xl:h-[601px] 3xl:h-[721px] absolute h-[600px] inset-[0] lg:h-[467px] object-cover self-stretch w-[100%] xl:h-[534px]"
                alt="Base"
              />
              <Column className="absolute font-opensans h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
                <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] font-opensans h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] w-[21%] xl:h-[29px] xl:mr-[8px]">
                  <Image
                    src="img_layer_1.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                    alt="Layer"
                  />
                  <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                </Stack>
                <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:ml-[19px] 3xl:mt-[385px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:ml-[12px] lg:mt-[249px] lg:text-fs28 ml-[16px] mt-[321px] text-fs36 text-left text-white_A700 tracking-ls1 w-[97%] xl:leading-lh42 xl:ml-[14px] xl:mt-[285px] xl:text-fs32">{`Motherhood is the hardest and the best job ever`}</Text>
                <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:ml-[19px] items-center justify-start lg:ml-[12px] ml-[16px] w-[35%] xl:ml-[14px]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[69%] xl:ml-[10px]">
                        <Text className="3xl:text-fs19 font-semibold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Joshua William`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start lg:mr-[2px] mr-[3px] w-[97%] xl:mr-[2px]">
                            <Image
                              src="img_icon_28.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon3"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </List>
        </Column>
        <Column className="3xl:mt-[115px] items-center justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Column className="font-hkgrotesk justify-start self-stretch w-[100%]">
            <Text className="3xl:mx-[180px] 3xl:text-fs43 font-bold lg:mx-[116px] lg:text-fs28 mx-[150px] text-bluegray_803 text-fs36 text-left tracking-ls1 xl:mx-[133px] xl:text-fs32">{`Recent Articles`}</Text>
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-opensans items-end justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:ml-[180px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:ml-[116px] lg:mt-[12px] lg:text-fs14 ml-[150px] mt-[16px] text-bluegray_602 text-fs18 text-left xl:ml-[133px] xl:mt-[14px] xl:text-fs16">{`Here’s what we've been up to recently.`}</Text>
                <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[180px] h-[48px] lg:h-[38px] lg:mr-[116px] mr-[150px] w-[10%] xl:h-[43px] xl:mr-[133px]">
                  <Image
                    src="img_background_21.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] absolute h-[48px] inset-[0] lg:h-[38px] object-cover self-stretch w-[100%] xl:h-[43px]"
                    alt="Background"
                  />
                  <Row className="absolute font-opensans h-[max-content] inset-[0] items-center justify-center m-[auto] w-[66%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-blue_700 text-center text-fs16 xl:text-fs14">{`View all`}</Text>
                    <Image
                      src="img_arrowright.svg"
                      className="2xl:h-[12px] 2xl:mb-[5px] 2xl:ml-[16px] 2xl:mt-[4px] 3xl:h-[15px] 3xl:mb-[6px] 3xl:ml-[19px] 3xl:mt-[5px] h-[11.94px] lg:h-[10px] lg:mb-[4px] lg:ml-[12px] lg:mt-[3px] mb-[5.2800293px] ml-[16.380005px] mt-[4.7800293px] object-contain w-[13%] xl:h-[11px] xl:ml-[14px] xl:my-[4px]"
                      alt="arrowright"
                    />
                  </Row>
                </Stack>
              </Row>
            </Column>
          </Column>
          <List
            className="3xl:gap-[36px] 3xl:mt-[57px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:mt-[37px] min-h-[auto] mt-[48px] mx-[auto] w-[79%] xl:gap-[26px] xl:mt-[42px]"
            orientation="horizontal"
          >
            <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
              <Image
                src="img_image_5.png"
                className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                alt="Image"
              />
              <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Work`}</Text>
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`Majority of peole will work in jobs that don’t exist today.`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="items-center justify-between px-[0] w-[55%]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="font-opensans justify-start w-[68%]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Lina Hicks`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_icon_29.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon3"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
              <Image
                src="img_image_5.png"
                className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                alt="Image"
              />
              <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Data`}</Text>
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`Thanks to never-ending piles of data & the amount of insight`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="items-center justify-between px-[0] w-[55%]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="font-opensans justify-start w-[68%]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Tyler Murray`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_icon_28.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon3"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
              <Image
                src="img_image_5.png"
                className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                alt="Image"
              />
              <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Learning`}</Text>
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`A constant ability to learn will be on the most crucial skills`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="items-center justify-between px-[0] w-[55%]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                      <Column className="font-opensans justify-start w-[68%]">
                        <Text className="3xl:text-fs19 font-semibold lg:mr-[3px] lg:text-fs12 mr-[4px] text-fs16 text-left text-white_A700 xl:mr-[3px] xl:text-fs14">{`Warren Casey`}</Text>
                        <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                          <Row className="font-opensans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_icon_28.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                              alt="Icon3"
                            />
                            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                          </Row>
                        </Column>
                      </Column>
                    </Row>
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </List>
        </Column>
        <Column className="3xl:mt-[115px] items-center justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Column className="font-hkgrotesk justify-start self-stretch w-[100%]">
            <Text className="3xl:mx-[180px] 3xl:text-fs43 font-bold lg:mx-[116px] lg:text-fs28 mx-[150px] text-bluegray_803 text-fs36 text-left tracking-ls1 xl:mx-[133px] xl:text-fs32">{`Case Studies`}</Text>
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-opensans items-end justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:ml-[180px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:ml-[116px] lg:mt-[12px] lg:text-fs14 ml-[150px] mt-[16px] text-bluegray_602 text-fs18 text-left xl:ml-[133px] xl:mt-[14px] xl:text-fs16">{`Here’s what we've been up to recently.`}</Text>
                <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[180px] h-[48px] lg:h-[38px] lg:mr-[116px] mr-[150px] w-[10%] xl:h-[43px] xl:mr-[133px]">
                  <Image
                    src="img_background_21.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] absolute h-[48px] inset-[0] lg:h-[38px] object-cover self-stretch w-[100%] xl:h-[43px]"
                    alt="Background"
                  />
                  <Row className="absolute font-opensans h-[max-content] inset-[0] items-center justify-center m-[auto] w-[66%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-blue_700 text-center text-fs16 xl:text-fs14">{`View all`}</Text>
                    <Image
                      src="img_arrowright.svg"
                      className="2xl:h-[12px] 2xl:mb-[5px] 2xl:ml-[16px] 2xl:mt-[4px] 3xl:h-[15px] 3xl:mb-[6px] 3xl:ml-[19px] 3xl:mt-[5px] h-[11.94px] lg:h-[10px] lg:mb-[4px] lg:ml-[12px] lg:mt-[3px] mb-[5.2800293px] ml-[16.380005px] mt-[4.7800293px] object-contain w-[13%] xl:h-[11px] xl:ml-[14px] xl:my-[4px]"
                      alt="arrowright"
                    />
                  </Row>
                </Stack>
              </Row>
            </Column>
          </Column>
          <Stack className="2xl:h-[382px] 3xl:h-[458px] 3xl:mt-[57px] h-[381px] lg:h-[297px] lg:mt-[37px] mt-[48px] mx-[auto] w-[83%] xl:h-[339px] xl:mt-[42px]">
            <Slider
              infinite
              mouseTracking
              disableButtonsControls
              responsive={{
                0: { items: 2 },
                568: { items: 2 },
                1024: { items: 2 },
              }}
              ref={ref}
              className="3xl:inset-x-[32px] absolute inset-x-[27px] inset-y-[0] lg:inset-x-[21px] w-[95%] xl:inset-x-[24px]"
              items={[
                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,

                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,

                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,

                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,

                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,

                <div className="2xl:h-[382px] 3xl:h-[458px] bg-red_A201 h-[381px] lg:h-[297px] rounded-bl-[16px] rounded-br-[0] rounded-tl-[16px] rounded-tr-[0] xl:h-[339px]"></div>,

                <Column className="bg-white_A700 border border-indigo_50 border-solid justify-start rounded-radius16 self-stretch shadow-bs17">
                  <Column className="3xl:mt-[38px] font-opensans items-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mx-[523px] font-opensans h-[32px] lg:h-[25px] lg:mx-[339px] mx-[436px] w-[9%] xl:h-[29px] xl:mx-[387px]">
                      <Image
                        src="img_layer.svg"
                        className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                        alt="Layer"
                      />
                      <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                    </Stack>
                    <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:mt-[19px] 3xl:mx-[94px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:mt-[12px] lg:mx-[61px] lg:text-fs28 mt-[16px] mx-[79px] text-bluegray_803 text-fs36 text-left tracking-ls1 w-[40%] xl:leading-lh42 xl:mt-[14px] xl:mx-[70px] xl:text-fs32">{`Cheap Airline Tickets Great Ways To Save`}</Text>
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[72px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[46px] lg:text-fs14 mt-[20px] mx-[60px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[17px] xl:mx-[53px] xl:text-fs16">{`In this digital generation where information can be easily obtained within seconds, business cards ...`}</Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:mt-[51px] items-center lg:mb-[24px] lg:mt-[33px] mb-[32px] mt-[43px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[38px]">
                    <Row className="font-opensans items-center justify-end self-stretch w-[100%]">
                      <Row className="3xl:ml-[722px] items-center justify-center lg:ml-[468px] ml-[602px] w-[14%] xl:ml-[535px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_803 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:ml-[325px] 3xl:mr-[57px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:ml-[210px] lg:mr-[37px] lg:mt-[9px] lg:text-fs12 mb-[11px] ml-[271px] mr-[48px] mt-[12px] text-bluegray_602 text-fs16 text-right xl:mb-[9px] xl:ml-[241px] xl:mr-[42px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>,
              ]}
            />
            <Image
              src="img_button_3.svg"
              className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-y-[0] lg:h-[44px] my-[auto] object-contain right-[0] w-[5%] xl:h-[50px]"
              alt="Button"
            />
            <Image
              src="img_button_4.svg"
              className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-y-[0] left-[0] lg:h-[44px] my-[auto] object-contain w-[5%] xl:h-[50px]"
              alt="Button"
            />
          </Stack>
        </Column>
        <Column className="3xl:mt-[115px] font-hkgrotesk justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Text className="3xl:mx-[180px] 3xl:text-fs43 font-bold font-hkgrotesk lg:mx-[116px] lg:text-fs28 mx-[150px] text-bluegray_803 text-fs36 text-left tracking-ls1 xl:mx-[133px] xl:text-fs32">{`All Articles`}</Text>
          <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:mx-[180px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:mx-[116px] lg:text-fs14 mt-[16px] mx-[150px] text-bluegray_602 text-fs18 text-left w-[42%] xl:leading-lh28 xl:mt-[14px] xl:mx-[133px] xl:text-fs16">{`We share common trends, strategies ideas, opinions, short & long stories from the team behind company.`}</Text>
          <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
            <List
              className="3xl:gap-[36px] flex-wrap gap-[30px] grid grid-cols-2 lg:gap-[23px] min-h-[auto] mx-[auto] w-[79%] xl:gap-[26px]"
              orientation="horizontal"
            >
              <Stack className="2xl:h-[601px] 3xl:h-[721px] h-[600px] lg:h-[467px] shadow-bs19 w-[100%] xl:h-[534px]">
                <Image
                  src="img_image_4.png"
                  className="2xl:h-[601px] 3xl:h-[721px] absolute h-[600px] inset-[0] lg:h-[467px] object-cover self-stretch w-[100%] xl:h-[534px]"
                  alt="Image"
                />
                <Column className="absolute font-opensans h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
                  <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] font-opensans h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] w-[21%] xl:h-[29px] xl:mr-[8px]">
                    <Image
                      src="img_layer_1.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                      alt="Layer"
                    />
                    <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:ml-[19px] 3xl:mt-[327px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:ml-[12px] lg:mt-[212px] lg:text-fs28 ml-[16px] mt-[273px] text-fs36 text-left text-white_A700 tracking-ls1 w-[97%] xl:leading-lh42 xl:ml-[14px] xl:mt-[242px] xl:text-fs32">{`How to prevent and protect your family from Carbon monoxide`}</Text>
                  <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="3xl:ml-[19px] items-center justify-start lg:ml-[12px] ml-[16px] w-[34%] xl:ml-[14px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[68%] xl:ml-[10px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Viola Manisa`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_29.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[601px] 3xl:h-[721px] h-[600px] lg:h-[467px] shadow-bs19 w-[100%] xl:h-[534px]">
                <Image
                  src="img_base_2.png"
                  className="2xl:h-[601px] 3xl:h-[721px] absolute h-[600px] inset-[0] lg:h-[467px] object-cover self-stretch w-[100%] xl:h-[534px]"
                  alt="Base"
                />
                <Column className="absolute font-opensans h-[max-content] inset-[0] justify-center m-[auto] w-[86%]">
                  <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] font-opensans h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] w-[21%] xl:h-[29px] xl:mr-[8px]">
                    <Image
                      src="img_layer_1.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] absolute h-[32px] inset-[0] lg:h-[25px] object-cover self-stretch w-[100%] xl:h-[29px]"
                      alt="Layer"
                    />
                    <Text className="3xl:bottom-[6px] 3xl:text-fs16 absolute bottom-[5px] font-semibold inset-x-[0] lg:bottom-[3px] lg:text-fs10 mx-[auto] text-center text-fs14 text-teal_402 w-[max-content] xl:bottom-[4px] xl:text-fs12">{`FEATURED`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:ml-[19px] 3xl:mt-[385px] 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:ml-[12px] lg:mt-[249px] lg:text-fs28 ml-[16px] mt-[321px] text-fs36 text-left text-white_A700 tracking-ls1 w-[97%] xl:leading-lh42 xl:ml-[14px] xl:mt-[285px] xl:text-fs32">{`Motherhood is the hardest and the best job ever`}</Text>
                  <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="3xl:ml-[19px] items-center justify-start lg:ml-[12px] ml-[16px] w-[35%] xl:ml-[14px]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="3xl:ml-[14px] font-opensans justify-start lg:ml-[9px] ml-[12px] w-[69%] xl:ml-[10px]">
                          <Text className="3xl:text-fs19 font-semibold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Joshua William`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start lg:mr-[2px] mr-[3px] w-[97%] xl:mr-[2px]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon3"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </List>
            <List
              className="3xl:gap-[36px] 3xl:mt-[36px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:mt-[23px] min-h-[auto] mt-[30px] mx-[auto] w-[79%] xl:gap-[26px] xl:mt-[26px]"
              orientation="horizontal"
            >
              <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
                <Image
                  src="img_image_5.png"
                  className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                  alt="Image"
                />
                <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Work`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`Majority of peole will work in jobs that don’t exist today.`}</Text>
                  <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="items-center justify-between px-[0] w-[55%]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="font-opensans justify-start w-[68%]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Lina Hicks`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_29.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon3"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
                <Image
                  src="img_image_5.png"
                  className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                  alt="Image"
                />
                <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Data`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`Thanks to never-ending piles of data & the amount of insight`}</Text>
                  <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="items-center justify-between px-[0] w-[55%]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="font-opensans justify-start w-[68%]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Tyler Murray`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon3"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] shadow-bs19 w-[100%] xl:h-[445px]">
                <Image
                  src="img_image_5.png"
                  className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                  alt="Image"
                />
                <Column className="3xl:bottom-[48px] absolute bottom-[40px] font-hkgrotesk inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[82%] xl:bottom-[35px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs33 font-bold font-hkgrotesk lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Future of Learning`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[14px] 3xl:text-fs24 font-normal font-opensans leading-lh3600 lg:leading-lh28 lg:mt-[9px] lg:text-fs15 mt-[12px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[10px] xl:text-fs17">{`A constant ability to learn will be on the most crucial skills`}</Text>
                  <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                    <Row className="font-opensans items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="items-center justify-between px-[0] w-[55%]">
                        <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-red_A201 h-[40px] lg:h-[32px] lg:mb-[2px] lg:mt-[1px] lg:w-[31px] mb-[3px] mt-[2px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[2px] xl:mt-[1px] xl:w-[35px]"></div>
                        <Column className="font-opensans justify-start w-[68%]">
                          <Text className="3xl:text-fs19 font-semibold lg:mr-[3px] lg:text-fs12 mr-[4px] text-fs16 text-left text-white_A700 xl:mr-[3px] xl:text-fs14">{`Warren Casey`}</Text>
                          <Column className="items-center lg:mt-[3px] mt-[4px] self-stretch w-[100%] xl:mt-[3px]">
                            <Row className="font-opensans justify-start self-stretch w-[100%]">
                              <Image
                                src="img_icon_28.svg"
                                className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mt-[1px] lg:w-[12px] mb-[1px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mt-[1px] xl:w-[14px]"
                                alt="Icon3"
                              />
                              <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] text-bluegray_602 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Verified writer`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Row>
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs19 font-semibold lg:mb-[8px] lg:mt-[9px] lg:text-fs12 mb-[11px] mt-[12px] text-bluegray_301 text-fs16 text-right xl:mb-[9px] xl:mt-[10px] xl:text-fs14">{`02 May`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </List>
            <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[57px] h-[48px] lg:h-[38px] lg:mt-[37px] mt-[48px] mx-[auto] w-[13%] xl:h-[43px] xl:mt-[42px]">
              <Image
                src="img_background_22.svg"
                className="2xl:h-[49px] 3xl:h-[58px] absolute h-[48px] inset-[0] lg:h-[38px] object-cover self-stretch w-[100%] xl:h-[43px]"
                alt="Background"
              />
              <Row className="absolute font-opensans h-[max-content] inset-[0] justify-center m-[auto] w-[75%]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-blue_700 text-center text-fs16 xl:text-fs14">{`More articles`}</Text>
                <Image
                  src="img_icon_30.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[19px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[12px] lg:mt-[3px] mb-[2px] ml-[16px] mt-[4px] object-contain w-[10%] xl:h-[15px] xl:mb-[1px] xl:ml-[14px] xl:mt-[3px]"
                  alt="Icon"
                />
              </Row>
            </Stack>
          </Column>
        </Column>
        <Stack className="2xl:h-[1378px] 3xl:h-[1654px] 3xl:mt-[38px] h-[1377px] lg:h-[1071px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:h-[1225px] xl:mt-[28px]">
          <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_wave.svg"
                className="2xl:h-[176px] 3xl:h-[211px] h-[175px] lg:h-[137px] object-cover self-stretch w-[100%] xl:h-[156px]"
                alt="Wave"
              />
              <div className="2xl:h-[535px] 3xl:h-[642px] bg-bluegray_906 h-[534px] lg:h-[416px] self-stretch w-[100%] xl:h-[476px]"></div>
              <Line className="bg-bluegray_907 h-[1px] mx-[auto] w-[79%]" />
            </Column>
            <div className="self-stretch w-[100%]">
              <Column className="bg-bluegray_906 font-opensans items-center justify-end self-stretch w-[100%]">
                <Row className="3xl:mt-[153px] justify-evenly lg:mt-[99px] mt-[128px] px-[0] self-stretch w-[100%] xl:mt-[113px]">
                  <Column className="3xl:mb-[115px] font-opensans justify-start lg:mb-[74px] mb-[96px] w-[17%] xl:mb-[85px]">
                    <Image
                      src="img_logo_11.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:mr-[12px] h-[28px] lg:h-[22px] lg:mr-[7px] mr-[10px] object-contain w-[38%] xl:h-[25px] xl:mr-[8px]"
                      alt="Logo"
                    />
                    <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[33px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[21px] lg:text-fs12 mt-[28px] self-stretch text-bluegray_602 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[24px] xl:text-fs14">{`Build a modern and creative website with crealand`}</Text>
                    <Image
                      src="img_group_4.svg"
                      className="2xl:h-[31px] 3xl:h-[37px] 3xl:mr-[12px] 3xl:mt-[31px] h-[30px] lg:h-[24px] lg:mr-[7px] lg:mt-[20px] mr-[10px] mt-[26px] object-contain w-[88%] xl:h-[27px] xl:mr-[8px] xl:mt-[23px]"
                      alt="Group"
                    />
                  </Column>
                  <Row className="3xl:gap-[36px] 3xl:pr-[297px] gap-[30px] grid grid-cols-4 items-center justify-between lg:gap-[23px] lg:pr-[192px] pr-[248px] w-[69%] xl:gap-[26px] xl:pr-[220px]">
                    <Column className="font-opensans justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_602 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Product`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Landingpage`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Features`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Documentation`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Referral Program`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Pricing`}</Text>
                    </Column>
                    <Column className="font-opensans justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_602 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Services`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Documentation`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Design`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Themes`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Illustrations`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`UI Kit`}</Text>
                    </Column>
                    <Column className="font-opensans justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_602 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Company`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`About`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Terms`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Privacy Policy`}</Text>
                      <Text className="3xl:mb-[55px] 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mb-[46px] mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mb-[40px] xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Careers`}</Text>
                    </Column>
                    <Column className="font-opensans justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_602 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`More`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Documentation`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`License`}</Text>
                      <Text className="3xl:mb-[110px] 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mb-[71px] lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mb-[92px] mr-[10px] mt-[24px] text-bluegray_301 text-fs16 text-left xl:mb-[81px] xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Changelog`}</Text>
                    </Column>
                  </Row>
                </Row>
                <Image
                  src="img_heart_2.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[115px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[74px] lg:w-[43px] mt-[96px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[85px] xl:w-[49px]"
                  alt="Heart"
                />
                <Text className="3xl:mb-[98px] 3xl:mt-[28px] 3xl:text-fs19 font-semibold lg:mb-[63px] lg:mt-[18px] lg:text-fs12 mb-[82px] mt-[24px] mx-[auto] text-bluegray_602 text-center text-fs16 xl:mb-[72px] xl:mt-[21px] xl:text-fs14">{`Copyright © 2019. Crafted with love.`}</Text>
              </Column>
            </div>
          </Column>
          <Row className="3xl:right-[82px] 3xl:top-[222px] absolute justify-between lg:right-[53px] lg:top-[143px] px-[0] right-[69px] top-[185px] w-[85%] xl:right-[61px] xl:top-[164px]">
            <Column className="3xl:mb-[110px] 3xl:mt-[67px] font-hkgrotesk justify-start lg:mb-[71px] lg:mt-[43px] mb-[92px] mt-[56px] w-[45%] xl:mb-[81px] xl:mt-[49px]">
              <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:text-fs43 font-bold font-hkgrotesk leading-lh4800 lg:leading-lh37 lg:text-fs28 self-stretch text-fs36 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh42 xl:text-fs32">{`Get our stories delivered From us to your inbox weekly.`}</Text>
              <Row className="3xl:mr-[12px] 3xl:mt-[57px] items-center justify-start lg:mr-[7px] lg:mt-[37px] mr-[10px] mt-[48px] w-[89%] xl:mr-[8px] xl:mt-[42px]">
                <Column className="font-opensans items-center justify-start rounded-radius8 w-[65%]">
                  <Input
                    className="2xl:py-[18px] 3xl:pl-[19px] 3xl:py-[22px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pl-[12px] lg:py-[14px] lg:text-fs12 pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_600_9e py-[18.375px] rounded-radius8 self-stretch text-bluegray_600_9e text-fs16 text-left w-[100%] xl:pl-[14px] xl:py-[16px] xl:text-fs14"
                    name="Group375"
                    placeholder={`Your Email`}
                  ></Input>
                </Column>
                <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[9px] font-opensans h-[56px] lg:h-[44px] lg:ml-[6px] ml-[8px] w-[34%] xl:h-[50px] xl:ml-[7px]">
                  <Image
                    src="img_background_23.svg"
                    className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs21 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Get started`}</Text>
                </Stack>
              </Row>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[28px] 3xl:text-fs19 font-normal font-opensans leading-lh2800 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_602 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.`}</Text>
            </Column>
            <Stack className="2xl:h-[428px] 3xl:h-[513px] h-[427px] lg:h-[333px] w-[47%] xl:h-[380px]">
              <Image
                src="img_right.svg"
                className="2xl:h-[386px] 3xl:h-[463px] absolute bottom-[0] h-[385px] lg:h-[300px] object-cover self-stretch w-[100%] xl:h-[343px]"
                alt="Right"
              />
              <Column className="absolute bg-white_A700 font-hkgrotesk inset-x-[0] justify-start mx-[auto] rounded-radius16 shadow-bs20 top-[0] w-[81%]">
                <Column className="3xl:mt-[9px] items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
                  <div className="2xl:h-[213px] 3xl:h-[255px] 3xl:ml-[10px] 3xl:mr-[8px] bg-red_A201 h-[212px] lg:h-[165px] lg:ml-[7px] lg:mr-[5px] ml-[9px] mr-[7px] rounded-radius12 w-[97%] xl:h-[189px] xl:ml-[8px] xl:mr-[6px]"></div>
                </Column>
                <Text className="3xl:mt-[33px] 3xl:mx-[38px] 3xl:text-fs28 font-bold font-hkgrotesk lg:mt-[21px] lg:mx-[24px] lg:text-fs18 mt-[28px] mx-[32px] text-bluegray_803 text-fs24 text-left tracking-ls1 xl:mt-[24px] xl:mx-[28px] xl:text-fs21">{`The best aticles every week`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mb-[38px] 3xl:mt-[14px] 3xl:mx-[38px] 3xl:text-fs21 font-normal font-opensans leading-lh3200 lg:leading-lh24 lg:mb-[24px] lg:mt-[9px] lg:mx-[24px] lg:text-fs14 mb-[32px] mt-[12px] mx-[32px] text-bluegray_602 text-fs18 text-left w-[71%] xl:leading-lh28 xl:mb-[28px] xl:mt-[10px] xl:mx-[28px] xl:text-fs16">{`Our insurance plans offers are priced the same everywhere else.`}</Text>
              </Column>
            </Stack>
          </Row>
        </Stack>
      </Column>
    </Column>
  );
};

export default Blogalt1Page;
