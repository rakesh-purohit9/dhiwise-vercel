import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { Input } from "components/Input";
import { List } from "components/List";

const Checkout2Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[3151px] 3xl:h-[3780px] h-[3148px] lg:h-[2449px] self-stretch w-[100%] xl:h-[2801px]">
        <Image
          src="img_pagebackground.svg"
          className="2xl:h-[3151px] 3xl:h-[3780px] absolute h-[3148px] inset-[0] lg:h-[2449px] object-cover self-stretch w-[100%] xl:h-[2801px]"
          alt="pageBackground"
        />
        <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-yellow_900 font-lato items-center justify-start self-stretch w-[100%]">
                <Row className="3xl:mb-[20px] 3xl:ml-[180px] 3xl:mt-[18px] justify-center lg:mb-[13px] lg:ml-[116px] lg:mt-[11px] mb-[17px] ml-[150px] mt-[15px] w-[7%] xl:mb-[15px] xl:ml-[133px] xl:mt-[13px]">
                  <Image
                    src="img_phone_1.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] mt-[1px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                    alt="phone"
                  />
                  <Text className="3xl:ml-[20px] 3xl:text-fs19 font-semibold lg:mb-[1px] lg:ml-[13px] lg:text-fs12 mb-[2px] ml-[17px] text-fs16 text-left text-white_A700 xl:mb-[1px] xl:ml-[15px] xl:text-fs14">{`+221 33 66 22`}</Text>
                </Row>
                <Row className="2xl:mb-[18px] 3xl:mb-[22px] 3xl:ml-[78px] 3xl:mt-[18px] justify-center lg:mb-[14px] lg:ml-[50px] lg:mt-[11px] mb-[18.440002px] ml-[65px] mt-[15px] w-[9%] xl:mb-[16px] xl:ml-[57px] xl:mt-[13px]">
                  <Image
                    src="img_envelope.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] mt-[1px] object-contain w-[13%] xl:h-[17px]"
                    alt="envelope"
                  />
                  <Text className="2xl:ml-[16px] 3xl:ml-[20px] 3xl:text-fs19 font-semibold lg:ml-[13px] lg:text-fs12 mb-[1px] ml-[16.790009px] text-fs16 text-left text-white_A700 xl:ml-[14px] xl:text-fs14">{`support@elextra.io`}</Text>
                </Row>
                <Image
                  src="img_vector_2.svg"
                  className="2xl:h-[24px] 2xl:ml-[574px] 3xl:h-[28px] 3xl:ml-[689px] 3xl:my-[18px] h-[23px] lg:h-[18px] lg:ml-[446px] lg:my-[11px] ml-[574.21px] my-[15px] object-contain w-[1%] xl:h-[21px] xl:ml-[510px] xl:my-[13px]"
                  alt="Vector"
                />
                <Text className="3xl:mb-[22px] 3xl:ml-[21px] 3xl:mt-[18px] 3xl:text-fs19 font-semibold lg:mb-[14px] lg:ml-[14px] lg:mt-[11px] lg:text-fs12 mb-[19px] ml-[18px] mt-[15px] text-fs16 text-left text-white_A700 xl:mb-[16px] xl:ml-[16px] xl:mt-[13px] xl:text-fs14">{`Store Locations`}</Text>
                <Image
                  src="img_vector_3.svg"
                  className="2xl:h-[20px] 3xl:h-[23px] 3xl:ml-[48px] 3xl:my-[20px] h-[19px] lg:h-[15px] lg:ml-[31px] lg:my-[13px] ml-[40px] my-[17px] object-contain w-[1%] xl:h-[17px] xl:ml-[35px] xl:my-[15px]"
                  alt="Vector"
                />
                <Row className="3xl:ml-[16px] 3xl:my-[13px] items-center justify-center lg:ml-[10px] lg:my-[8px] ml-[14px] my-[11px] w-[16%] xl:ml-[12px] xl:my-[9px]">
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-semibold lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`Track Your Order`}</Text>
                  <Line className="2xl:h-[32px] 3xl:h-[38px] 3xl:ml-[54px] bg-deep_orange_200 h-[31px] lg:h-[25px] lg:ml-[35px] ml-[45px] rounded-radius22 w-[2px] xl:h-[28px] xl:ml-[40px]" />
                  <Text className="3xl:ml-[50px] 3xl:my-[7px] 3xl:text-fs19 font-semibold lg:ml-[32px] lg:my-[4px] lg:text-fs12 ml-[42px] my-[6px] text-fs16 text-left text-white_A700 xl:ml-[37px] xl:my-[5px] xl:text-fs14">{`$ Dollar (US)`}</Text>
                </Row>
                <Image
                  src="img_rectangle2.svg"
                  className="2xl:h-[15px] 2xl:mb-[21px] 2xl:mt-[17px] 2xl:w-[14px] 3xl:h-[18px] 3xl:mb-[26px] 3xl:ml-[20px] 3xl:mt-[20px] 3xl:w-[17px] h-[14.19px] lg:h-[12px] lg:mb-[16px] lg:ml-[13px] lg:mt-[13px] lg:w-[11px] mb-[21.71px] ml-[17px] mt-[17.1px] object-contain w-[14.19px] xl:h-[13px] xl:mb-[19px] xl:ml-[15px] xl:mt-[15px] xl:w-[12px]"
                  alt="Rectangle2"
                />
                <Text className="2xl:ml-[38px] 3xl:ml-[46px] 3xl:my-[20px] 3xl:text-fs19 font-semibold lg:ml-[30px] lg:my-[13px] lg:text-fs12 ml-[38.81006px] my-[17px] text-fs16 text-left text-white_A700 xl:ml-[34px] xl:my-[15px] xl:text-fs14">{`EN`}</Text>
                <Image
                  src="img_rectangle2.svg"
                  className="2xl:h-[15px] 2xl:mb-[21px] 2xl:mr-[169px] 2xl:mt-[17px] 2xl:w-[14px] 3xl:h-[18px] 3xl:mb-[26px] 3xl:ml-[20px] 3xl:mr-[203px] 3xl:mt-[20px] 3xl:w-[17px] h-[14.19px] lg:h-[12px] lg:mb-[16px] lg:ml-[13px] lg:mr-[132px] lg:mt-[13px] lg:w-[11px] mb-[21.71px] ml-[17px] mr-[169.81006px] mt-[17.1px] object-contain w-[14.19px] xl:h-[13px] xl:mb-[19px] xl:ml-[15px] xl:mr-[151px] xl:mt-[15px] xl:w-[12px]"
                  alt="Rectangle2"
                />
              </Row>
              <Row className="bg-white_A700 font-lato items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_logo_2.svg"
                  className="2xl:h-[37px] 3xl:h-[44px] 3xl:mb-[68px] 3xl:ml-[180px] 3xl:mt-[67px] h-[36px] lg:h-[28px] lg:mb-[44px] lg:ml-[116px] lg:mt-[43px] mb-[57px] ml-[150px] mt-[56px] object-contain w-[10%] xl:h-[33px] xl:mb-[50px] xl:ml-[133px] xl:mt-[49px]"
                  alt="logo"
                />
                <div className="2xl:ml-[130px] 3xl:mb-[48px] 3xl:ml-[156px] 3xl:mt-[46px] bg-transparent border-bw lg:mb-[31px] lg:ml-[101px] lg:mt-[30px] mb-[40px] ml-[130.43px] mt-[39px] w-[41%] xl:mb-[35px] xl:ml-[116px] xl:mt-[34px] input-wrap">
                  <Image
                    src="img_vector_4.svg"
                    className="absolute right-[41px] border-bw bg-transparent lg:right-[31px] lg:inset-y-[19px] xl:right-[36px] xl:inset-y-[22px] 2xl:inset-y-[25px] 3xl:right-[49px] 3xl:inset-y-[30px] inset-y-[25.545px]"
                    alt="Vector"
                  />
                  <Button className="2xl:py-[25px] 3xl:pl-[36px] 3xl:pr-[90px] 3xl:py-[30px] 3xl:text-fs21 bg-gray_101 border-bw font-normal lg:pl-[23px] lg:pr-[58px] lg:py-[19px] lg:text-fs14 pl-[30px] pr-[75px] py-[25.545px] rounded-radius12 text-fs18 text-gray_801 text-left w-[100%] xl:pl-[26px] xl:pr-[66px] xl:py-[22px] xl:text-fs16">{`Search here...`}</Button>
                </div>
                <Row className="3xl:mb-[48px] 3xl:ml-[82px] 3xl:mr-[180px] 3xl:mt-[46px] font-lato justify-center lg:mb-[31px] lg:ml-[53px] lg:mr-[116px] lg:mt-[30px] mb-[40px] ml-[69px] mr-[150px] mt-[39px] w-[22%] xl:mb-[35px] xl:ml-[61px] xl:mr-[133px] xl:mt-[34px]">
                  <Image
                    src="img_iconmenu.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[27px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[17px] lg:w-[18px] my-[23px] object-contain w-[24px] xl:h-[22px] xl:my-[20px] xl:w-[21px]"
                    alt="iconMenu"
                  />
                  <Stack className="2xl:h-[31px] 2xl:mb-[24px] 3xl:h-[37px] 3xl:mb-[29px] 3xl:ml-[69px] 3xl:mt-[18px] h-[30.29px] lg:h-[24px] lg:mb-[19px] lg:ml-[45px] lg:mt-[11px] mb-[24.709991px] ml-[58px] mt-[15px] w-[8%] xl:h-[27px] xl:mb-[21px] xl:ml-[51px] xl:mt-[13px]">
                    <Stack className="2xl:h-[31px] 3xl:h-[37px] absolute h-[30.29px] inset-y-[0] left-[1px] lg:h-[24px] right-[0] w-[100%] xl:h-[27px]">
                      <Image
                        src="img_basket_1.svg"
                        className="2xl:h-[21px] 3xl:h-[25px] absolute bottom-[0] h-[20.58px] left-[0] lg:h-[17px] object-contain w-[70%] xl:h-[19px]"
                        alt="basket"
                      />
                      <Column className="absolute bg-yellow_901 border-2 border-solid border-white_A700 font-lato items-center justify-start right-[0] rounded-radius50 top-[0] w-[62%]">
                        <Text className="3xl:ml-[6px] 3xl:mr-[7px] 3xl:text-fs19 font-normal lg:mb-[1px] lg:ml-[3px] lg:mr-[4px] lg:text-fs12 mb-[2px] ml-[5px] mr-[6px] text-fs16 text-left text-white_A700 xl:mb-[1px] xl:ml-[4px] xl:mr-[5px] xl:text-fs14">{`4`}</Text>
                      </Column>
                    </Stack>
                    <Image
                      src="img_basket_1.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] absolute bottom-[0] h-[20.58px] left-[0] lg:h-[17px] object-contain w-[70%] xl:h-[19px]"
                      alt="basket"
                    />
                    <Column className="absolute bg-yellow_901 border-2 border-solid border-white_A700 font-lato items-center justify-start right-[1px] rounded-radius50 top-[0] w-[62%]">
                      <Text className="3xl:ml-[6px] 3xl:mr-[7px] 3xl:text-fs19 font-normal lg:mb-[1px] lg:ml-[3px] lg:mr-[4px] lg:text-fs12 mb-[2px] ml-[5px] mr-[6px] text-fs16 text-left text-white_A700 xl:mb-[1px] xl:ml-[4px] xl:mr-[5px] xl:text-fs14">{`4`}</Text>
                    </Column>
                  </Stack>
                  <Stack className="2xl:h-[31px] 2xl:mb-[25px] 3xl:h-[37px] 3xl:mb-[30px] 3xl:ml-[69px] 3xl:mt-[16px] h-[30.369995px] lg:h-[24px] lg:mb-[19px] lg:ml-[45px] lg:mt-[10px] mb-[25.630005px] ml-[58px] mt-[14px] w-[8%] xl:h-[28px] xl:mb-[22px] xl:ml-[51px] xl:mt-[12px]">
                    <Column className="2xl:left-[10px] 3xl:left-[12px] 3xl:top-[8px] absolute justify-start left-[10.08px] lg:left-[7px] lg:top-[5px] top-[7px] w-[29%] xl:left-[8px] xl:top-[6px]">
                      <Image
                        src="img_shape01.svg"
                        className="2xl:h-[3px] 2xl:mr-[7px] 3xl:h-[4px] 3xl:mr-[9px] h-[2.7px] lg:h-[3px] lg:mr-[6px] mr-[7.839966px] object-contain w-[19%] xl:h-[3px] xl:mr-[6px]"
                        alt="shape01"
                      />
                      <Column className="2xl:mt-[6px] 3xl:mt-[7px] items-end lg:mt-[4px] mt-[6.040001px] self-stretch w-[100%] xl:mt-[5px]">
                        <Image
                          src="img_shape09.svg"
                          className="2xl:h-[5px] 2xl:ml-[7px] 3xl:h-[5px] 3xl:ml-[9px] h-[4.01px] lg:h-[4px] lg:ml-[6px] ml-[7.840088px] object-contain w-[19%] xl:h-[4px] xl:ml-[6px]"
                          alt="shape09"
                        />
                      </Column>
                    </Column>
                    <Column className="absolute inset-[0] justify-start self-stretch w-[100%]">
                      <Column className="items-end self-stretch w-[100%]">
                        <Stack className="2xl:h-[22px] 2xl:ml-[2px] 3xl:h-[26px] 3xl:ml-[2px] h-[21px] lg:h-[17px] lg:ml-[1px] ml-[2.2299805px] w-[93%] xl:h-[19px] xl:ml-[1px]">
                          <Image
                            src="img_shape02.svg"
                            className="2xl:bottom-[3px] 2xl:h-[10px] 3xl:bottom-[4px] 3xl:h-[12px] absolute bottom-[3.46px] h-[9.64px] left-[0] lg:bottom-[2px] lg:h-[8px] object-contain w-[57%] xl:bottom-[3px] xl:h-[9px]"
                            alt="shape02"
                          />
                          <Image
                            src="img_shape08.svg"
                            className="2xl:h-[5px] 3xl:h-[5px] absolute bottom-[1px] h-[4.01px] left-[0] lg:h-[4px] object-contain w-[6%] xl:h-[4px]"
                            alt="shape08"
                          />
                          <Column className="absolute bg-yellow_901 border-2 border-solid border-white_A700 font-lato items-center justify-start right-[0] rounded-radius50 w-[68%]">
                            <Text className="3xl:ml-[7px] 3xl:mr-[6px] 3xl:text-fs19 font-normal lg:mb-[1px] lg:ml-[4px] lg:mr-[3px] lg:text-fs12 mb-[2px] ml-[6px] mr-[5px] text-fs16 text-left text-white_A700 xl:mb-[1px] xl:ml-[5px] xl:mr-[4px] xl:text-fs14">{`2`}</Text>
                          </Column>
                        </Stack>
                      </Column>
                      <Column className="items-center self-stretch w-[100%]">
                        <Row className="2xl:gap-[13px] 2xl:pr-[11px] 3xl:gap-[16px] 3xl:pr-[13px] gap-[13.889996px] grid grid-cols-2 items-center justify-between lg:gap-[10px] lg:pr-[9px] pl-[1px] pr-[11.599976px] w-[100%] xl:gap-[12px] xl:pr-[10px]">
                          <Image
                            src="img_shape04.svg"
                            className="2xl:h-[6px] 3xl:h-[7px] h-[5.71px] lg:h-[5px] object-contain w-[100%] xl:h-[6px]"
                            alt="shape04"
                          />
                          <Image
                            src="img_shape03.svg"
                            className="2xl:h-[6px] 3xl:h-[7px] h-[5.71px] lg:h-[5px] object-contain w-[100%] xl:h-[6px]"
                            alt="shape03"
                          />
                        </Row>
                      </Column>
                      <Image
                        src="img_shape06.svg"
                        className="2xl:h-[5px] 3xl:h-[6px] 3xl:mr-[12px] h-[4.9px] lg:h-[4px] lg:mr-[7px] mr-[10px] object-contain w-[11%] xl:h-[5px] xl:mr-[8px]"
                        alt="shape06"
                      />
                      <Column className="items-end self-stretch w-[100%]">
                        <Image
                          src="img_shape07.svg"
                          className="2xl:h-[5px] 2xl:mx-[11px] 3xl:h-[6px] 3xl:mx-[13px] h-[4.9px] lg:h-[4px] lg:mx-[8px] ml-[11.05px] mr-[11.050049px] object-contain w-[11%] xl:h-[5px] xl:mx-[9px]"
                          alt="shape07"
                        />
                      </Column>
                      <Image
                        src="img_shape10.svg"
                        className="2xl:h-[2px] 2xl:ml-[1px] 3xl:h-[3px] 3xl:ml-[2px] 3xl:mr-[12px] h-[1.8px] lg:h-[2px] lg:ml-[1px] lg:mr-[7px] ml-[1.7800293px] mr-[10px] object-contain w-[56%] xl:h-[2px] xl:ml-[1px] xl:mr-[8px]"
                        alt="shape10"
                      />
                      <Image
                        src="img_shape05.svg"
                        className="2xl:h-[6px] 2xl:ml-[6px] 3xl:h-[7px] 3xl:ml-[7px] 3xl:mr-[12px] h-[5.39px] lg:h-[5px] lg:ml-[5px] lg:mr-[7px] ml-[6.4799805px] mr-[10px] object-contain w-[27%] xl:h-[5px] xl:ml-[5px] xl:mr-[8px]"
                        alt="shape05"
                      />
                    </Column>
                  </Stack>
                  <div className="3xl:ml-[74px] bg-transparent border-bw lg:ml-[48px] ml-[62px] w-[37%] xl:ml-[55px] input-wrap">
                    <Image
                      src="img_vector_5.svg"
                      className="absolute left-[32px] border-bw bg-transparent lg:left-[24px] lg:inset-y-[17px] xl:left-[28px] xl:inset-y-[20px] 2xl:inset-y-[22px] 3xl:left-[38px] 3xl:inset-y-[27px] inset-y-[22.545px]"
                      alt="Vector"
                    />
                    <Button className="2xl:py-[22px] 3xl:pl-[84px] 3xl:py-[27px] 3xl:text-fs21 bg-red_50 border-bw font-normal lg:pl-[54px] lg:py-[17px] lg:text-fs14 pl-[70px] py-[22.545px] rounded-radius12 text-fs18 text-gray_802 text-left w-[100%] xl:pl-[62px] xl:py-[20px] xl:text-fs16">{`Jack`}</Button>
                  </div>
                </Row>
              </Row>
              <Row className="bg-white_A700 font-lato justify-start self-stretch shadow-bs5 w-[100%]">
                <Row className="3xl:mb-[43px] 3xl:ml-[180px] 3xl:mt-[7px] items-center justify-center lg:mb-[28px] lg:ml-[116px] lg:mt-[4px] mb-[36px] ml-[150px] mt-[6px] w-[38%] xl:mb-[32px] xl:ml-[133px] xl:mt-[5px]">
                  <Text className="3xl:text-fs19 capitalize font-semibold lg:text-fs12 text-fs16 text-gray_801 text-left xl:text-fs14">{`All Categories`}</Text>
                  <Text className="3xl:ml-[76px] 3xl:text-fs19 capitalize font-semibold lg:ml-[49px] lg:text-fs12 ml-[64px] text-fs16 text-gray_801 text-left xl:ml-[56px] xl:text-fs14">{`accessories`}</Text>
                  <Text className="3xl:ml-[75px] 3xl:text-fs19 capitalize font-semibold lg:ml-[49px] lg:text-fs12 ml-[63px] text-fs16 text-gray_801 text-left xl:ml-[56px] xl:text-fs14">{`Smartphone`}</Text>
                  <Text className="3xl:ml-[75px] 3xl:text-fs19 capitalize font-semibold lg:ml-[49px] lg:text-fs12 ml-[63px] text-fs16 text-gray_801 text-left xl:ml-[56px] xl:text-fs14">{`Computer`}</Text>
                  <Text className="3xl:ml-[72px] 3xl:text-fs19 capitalize font-semibold lg:ml-[46px] lg:text-fs12 ml-[60px] text-fs16 text-gray_801 text-left xl:ml-[53px] xl:text-fs14">{`Gaming Equipments`}</Text>
                </Row>
                <Row className="3xl:mb-[43px] 3xl:ml-[84px] 3xl:mt-[7px] items-center justify-center lg:mb-[28px] lg:ml-[54px] lg:mt-[4px] mb-[36px] ml-[70px] mt-[6px] w-[20%] xl:mb-[32px] xl:ml-[62px] xl:mt-[5px]">
                  <Text className="3xl:text-fs19 capitalize font-semibold lg:text-fs12 text-fs16 text-gray_801 text-left xl:text-fs14">{`TV & Monitors`}</Text>
                  <Text className="3xl:ml-[76px] 3xl:text-fs19 capitalize font-semibold lg:ml-[49px] lg:text-fs12 ml-[64px] text-fs16 text-gray_801 text-left xl:ml-[56px] xl:text-fs14">{`Headphones`}</Text>
                  <Text className="3xl:ml-[74px] 3xl:text-fs19 capitalize font-semibold lg:ml-[48px] lg:text-fs12 ml-[62px] text-fs16 text-gray_801 text-left xl:ml-[55px] xl:text-fs14">{`Speaker`}</Text>
                </Row>
                <Image
                  src="img_vector_6.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] 3xl:mb-[42px] 3xl:ml-[70px] 3xl:mt-[7px] h-[20px] lg:h-[16px] lg:mb-[27px] lg:ml-[45px] lg:mt-[4px] mb-[35px] ml-[59px] mt-[6px] object-contain w-[1%] xl:h-[18px] xl:mb-[31px] xl:ml-[52px] xl:mt-[5px]"
                  alt="Vector"
                />
                <Text className="3xl:mb-[43px] 3xl:ml-[10px] 3xl:mr-[499px] 3xl:mt-[7px] 3xl:text-fs19 capitalize font-normal lg:mb-[28px] lg:ml-[7px] lg:mr-[323px] lg:mt-[4px] lg:text-fs12 mb-[36px] ml-[9px] mr-[416px] mt-[6px] text-fs16 text-gray_902 text-left xl:mb-[32px] xl:ml-[8px] xl:mr-[370px] xl:mt-[5px] xl:text-fs14">{`HOT DEALS`}</Text>
              </Row>
            </Column>
          </div>
          <Column className="3xl:mt-[94px] items-center justify-start lg:mt-[61px] mt-[79px] self-stretch w-[100%] xl:mt-[70px]">
            <Row className="justify-start mx-[auto] w-[84%]">
              <Column className="3xl:mb-[142px] 3xl:mt-[25px] items-center justify-start lg:mb-[92px] lg:mt-[16px] mb-[119px] mt-[21px] w-[63%] xl:mb-[105px] xl:mt-[18px]">
                <Row className="font-poppins items-center justify-start w-[100%]">
                  <Text className="3xl:text-fs36 font-poppins font-semibold lg:text-fs23 text-black_900 text-fs30 text-left xl:text-fs26">{`Shipping Details`}</Text>
                  <Text className="3xl:mb-[14px] 3xl:ml-[637px] 3xl:mt-[13px] 3xl:text-fs21 font-lato font-normal lg:mb-[9px] lg:ml-[413px] lg:mt-[8px] lg:text-fs14 mb-[12px] ml-[531px] mt-[11px] text-fs18 text-gray_604 text-left xl:mb-[10px] xl:ml-[472px] xl:mt-[9px] xl:text-fs16">{`Choose from address book`}</Text>
                  <Image
                    src="img_rectangle2_1.svg"
                    className="2xl:h-[15px] 2xl:mb-[15px] 2xl:mt-[14px] 2xl:w-[14px] 3xl:h-[18px] 3xl:mb-[19px] 3xl:ml-[21px] 3xl:mt-[17px] 3xl:w-[17px] h-[14.19px] lg:h-[12px] lg:mb-[12px] lg:ml-[14px] lg:mt-[11px] lg:w-[11px] mb-[15.910004px] ml-[18px] mt-[14.899994px] object-contain w-[14.19px] xl:h-[13px] xl:mb-[14px] xl:ml-[16px] xl:mt-[13px] xl:w-[12px]"
                    alt="Rectangle2"
                  />
                </Row>
                <Grid className="3xl:gap-[46px] 3xl:mt-[63px] gap-[39px] grid grid-cols-2 lg:gap-[30px] lg:mt-[41px] mt-[53px] w-[100%] xl:gap-[34px] xl:mt-[47px]">
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`First Name`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group105"
                      placeholder={`First Name`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Last Name`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group107"
                      placeholder={`Last Name`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Email Address`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group109"
                      placeholder={`Email Address`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Mobile Phone Number`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group111"
                      placeholder={`Mobile Phone Number`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Address`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group113"
                      placeholder={`Address`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Country`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group115"
                      placeholder={`Country`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Postcode/ZIP`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group117"
                      placeholder={`Postcode/ZIP`}
                    ></Input>
                  </Column>
                  <Column className="font-lato justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Town/City`}</Text>
                    <Input
                      className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                      name="Group119"
                      placeholder={`Town/City`}
                    ></Input>
                  </Column>
                </Grid>
                <Column className="3xl:mt-[36px] font-lato justify-start lg:mt-[23px] mt-[30px] w-[100%] xl:mt-[26px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Note`}</Text>
                  <Input
                    className="3xl:mt-[22px] bg-white_A700 border border-bluegray_104 border-solid lg:mt-[14px] mt-[19px] placeholder:bg-transparent placeholder:text-black_900 rounded-radius12 self-stretch w-[100%] xl:mt-[16px]"
                    name="Group121"
                    placeholder={`Note`}
                  ></Input>
                </Column>
                <Row className="3xl:mt-[68px] font-lato items-center justify-start lg:mt-[44px] mt-[57px] w-[100%] xl:mt-[50px]">
                  <Image
                    src="img_checkbox.svg"
                    className="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] h-[27px] lg:h-[21px] lg:ml-[3px] lg:w-[21px] ml-[4px] object-contain w-[27px] xl:h-[25px] xl:ml-[3px] xl:w-[24px]"
                    alt="checkbox"
                  />
                  <Text className="2xl:mr-[796px] 3xl:ml-[39px] 3xl:mr-[955px] 3xl:text-fs21 font-normal lg:mb-[2px] lg:ml-[25px] lg:mr-[619px] lg:mt-[1px] lg:text-fs14 mb-[3px] ml-[33px] mr-[796.18994px] mt-[2px] text-black_900 text-fs18 text-left xl:mb-[2px] xl:ml-[29px] xl:mr-[708px] xl:mt-[1px] xl:text-fs16">{`Add to address book`}</Text>
                </Row>
              </Column>
              <Column className="2xl:ml-[89px] 3xl:ml-[107px] bg-white_A700 border border-bluegray_104 border-solid font-poppins justify-start lg:ml-[69px] ml-[89.81006px] rounded-radius12 w-[31%] xl:ml-[79px]">
                <Text className="3xl:mt-[40px] 3xl:mx-[40px] 3xl:text-fs24 font-poppins font-semibold lg:mt-[26px] lg:mx-[26px] lg:text-fs15 mt-[34px] mx-[34px] text-black_900 text-fs20 text-left xl:mt-[30px] xl:mx-[30px] xl:text-fs17">{`My Orders`}</Text>
                <Column className="3xl:mt-[34px] items-center lg:mt-[22px] mt-[29px] self-stretch w-[100%] xl:mt-[25px]">
                  <List
                    className="flex-wrap gap-[0] min-h-[auto] mx-[auto] w-[86%]"
                    orientation="vertical"
                  >
                    <Row className="2xl:my-[14px] 3xl:my-[17px] font-lato justify-between lg:my-[11px] my-[14.5px] px-[0] self-stretch w-[100%] xl:my-[12px]">
                      <Text className="3xl:mb-[33px] 3xl:text-fs24 font-semibold lg:mb-[21px] lg:text-fs15 mb-[28px] text-fs20 text-gray_903 text-left xl:mb-[24px] xl:text-fs17">{`1x`}</Text>
                      <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:text-fs14 text-bluegray_400 text-fs18 text-left w-[60%] xl:leading-lh23 xl:text-fs16">{`LED Monitor With High Quality In The World`}</Text>
                      <Text className="3xl:mb-[33px] 3xl:text-fs24 font-semibold lg:mb-[21px] lg:text-fs15 mb-[28px] text-fs20 text-gray_903 text-right xl:mb-[24px] xl:text-fs17">{`$976.33`}</Text>
                    </Row>
                    <Line className="w-[30%] bg-gray_101 flex-wrap min-h-[auto]" />
                    <Row className="2xl:my-[14px] 3xl:my-[17px] font-lato justify-between lg:my-[11px] my-[14.5px] px-[0] self-stretch w-[100%] xl:my-[12px]">
                      <Text className="3xl:text-fs24 font-semibold lg:mb-[1px] lg:text-fs15 mb-[2px] text-fs20 text-gray_903 text-left xl:mb-[1px] xl:text-fs17">{`1x`}</Text>
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-bluegray_400 text-fs18 text-left xl:text-fs16">{`Magic Pen for iPad`}</Text>
                      <Text className="3xl:text-fs24 font-semibold lg:mb-[1px] lg:text-fs15 mb-[2px] text-fs20 text-gray_903 text-right xl:mb-[1px] xl:text-fs17">{`$976.33`}</Text>
                    </Row>
                  </List>
                  <Row className="3xl:mt-[97px] font-lato justify-between lg:mt-[63px] mt-[81px] mx-[auto] px-[0] w-[86%] xl:mt-[72px]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-bluegray_400 text-fs18 text-left xl:text-fs16">{`Subtotal`}</Text>
                    <Text className="3xl:text-fs24 font-semibold lg:mb-[1px] lg:text-fs15 mb-[2px] text-fs20 text-gray_903 text-right xl:mb-[1px] xl:text-fs17">{`$1,952.66`}</Text>
                  </Row>
                  <Row className="3xl:mt-[21px] font-lato justify-start lg:mt-[14px] mt-[18px] mx-[auto] w-[86%] xl:mt-[16px]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-bluegray_400 text-fs18 text-left xl:text-fs16">{`Shipping`}</Text>
                    <Text className="3xl:ml-[27px] 3xl:text-fs24 font-normal lg:mb-[1px] lg:ml-[17px] lg:text-fs15 mb-[2px] ml-[23px] text-fs20 text-gray_503 text-right xl:mb-[1px] xl:ml-[20px] xl:text-fs17">{`Free Shipping`}</Text>
                    <Text className="3xl:ml-[8px] 3xl:text-fs24 font-semibold lg:mb-[1px] lg:ml-[5px] lg:text-fs15 mb-[2px] ml-[7px] text-fs20 text-gray_903 text-right xl:mb-[1px] xl:ml-[6px] xl:text-fs17">{`$0`}</Text>
                  </Row>
                  <Row className="3xl:mt-[21px] font-lato justify-between lg:mt-[14px] mt-[18px] mx-[auto] px-[0] w-[86%] xl:mt-[16px]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-bluegray_400 text-fs18 text-left xl:text-fs16">{`Tax`}</Text>
                    <Text className="3xl:text-fs24 font-semibold lg:mb-[1px] lg:text-fs15 mb-[2px] text-fs20 text-gray_903 text-right xl:mb-[1px] xl:text-fs17">{`$4.00`}</Text>
                  </Row>
                  <Row className="3xl:mt-[84px] font-poppins justify-between lg:mt-[54px] mt-[70px] mx-[auto] px-[0] w-[87%] xl:mt-[62px]">
                    <Text className="3xl:mb-[13px] 3xl:text-fs21 font-medium lg:mb-[8px] lg:mt-[3px] lg:text-fs14 mb-[11px] mt-[4px] text-black_900 text-fs18 text-left xl:mb-[9px] xl:mt-[3px] xl:text-fs16">{`Order Total`}</Text>
                    <Text className="3xl:text-fs33 font-semibold lg:text-fs21 text-fs28 text-right text-yellow_901 xl:text-fs24">{`$1,956.66`}</Text>
                  </Row>
                  <Column className="3xl:mt-[84px] font-poppins justify-start lg:mt-[54px] mt-[70px] self-stretch w-[100%] xl:mt-[62px]">
                    <Text className="3xl:mx-[44px] 3xl:text-fs24 font-semibold lg:mx-[28px] lg:text-fs15 mx-[37px] text-black_900 text-fs20 text-left xl:mx-[32px] xl:text-fs17">{`Payment`}</Text>
                    <Column className="3xl:mt-[40px] items-center lg:mt-[26px] mt-[34px] self-stretch w-[100%] xl:mt-[30px]">
                      <Row className="font-lato justify-start self-stretch w-[100%]">
                        <Image
                          src="img_checkbox.svg"
                          className="2xl:h-[28px] 3xl:h-[33px] 3xl:ml-[44px] 3xl:w-[32px] h-[27px] lg:h-[21px] lg:ml-[28px] lg:w-[21px] ml-[37px] object-contain w-[27px] xl:h-[25px] xl:ml-[32px] xl:w-[24px]"
                          alt="checkbox"
                        />
                        <Text className="3xl:mb-[6px] 3xl:ml-[39px] 3xl:mr-[298px] 3xl:text-fs21 font-normal lg:mb-[3px] lg:ml-[25px] lg:mr-[193px] lg:text-fs14 mb-[5px] ml-[33px] mr-[249px] text-black_900 text-fs18 text-left xl:mb-[4px] xl:ml-[29px] xl:mr-[221px] xl:text-fs16">{`Direct Bank Transfer`}</Text>
                      </Row>
                      <Row className="3xl:mt-[34px] font-lato justify-start lg:mt-[22px] mt-[29px] self-stretch w-[100%] xl:mt-[25px]">
                        <Image
                          src="img_checkbox_1.svg"
                          className="2xl:h-[28px] 3xl:h-[33px] 3xl:ml-[44px] 3xl:w-[32px] h-[27px] lg:h-[21px] lg:ml-[28px] lg:w-[21px] ml-[37px] object-contain w-[27px] xl:h-[25px] xl:ml-[32px] xl:w-[24px]"
                          alt="checkbox"
                        />
                        <Text className="3xl:mb-[6px] 3xl:ml-[39px] 3xl:mr-[427px] 3xl:text-fs21 font-normal lg:mb-[3px] lg:ml-[25px] lg:mr-[276px] lg:text-fs14 mb-[5px] ml-[33px] mr-[356px] text-black_900 text-fs18 text-left xl:mb-[4px] xl:ml-[29px] xl:mr-[316px] xl:text-fs16">{`Paypol`}</Text>
                      </Row>
                      <Row className="3xl:mt-[34px] font-lato justify-start lg:mt-[22px] mt-[29px] self-stretch w-[100%] xl:mt-[25px]">
                        <Image
                          src="img_checkbox_2.svg"
                          className="2xl:h-[28px] 3xl:h-[33px] 3xl:ml-[44px] 3xl:w-[32px] h-[27px] lg:h-[21px] lg:ml-[28px] lg:w-[21px] ml-[37px] object-contain w-[27px] xl:h-[25px] xl:ml-[32px] xl:w-[24px]"
                          alt="checkbox"
                        />
                        <Text className="3xl:mb-[6px] 3xl:ml-[39px] 3xl:mr-[325px] 3xl:text-fs21 font-normal lg:mb-[3px] lg:ml-[25px] lg:mr-[210px] lg:text-fs14 mb-[5px] ml-[33px] mr-[271px] text-black_900 text-fs18 text-left xl:mb-[4px] xl:ml-[29px] xl:mr-[241px] xl:text-fs16">{`Cash On Delivery`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Stack className="2xl:h-[66px] 3xl:h-[79px] 3xl:mt-[56px] font-lato h-[65px] lg:h-[51px] lg:mt-[36px] mt-[47px] mx-[auto] w-[87%] xl:h-[58px] xl:mt-[41px]">
                    <Image
                      src="img_background_3.svg"
                      className="2xl:h-[66px] 3xl:h-[79px] absolute h-[65px] inset-[0] lg:h-[51px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[58px]"
                      alt="background"
                    />
                    <Text className="3xl:text-fs24 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs15 m-[auto] text-fs20 text-gray_50 text-left w-[max-content] xl:text-fs17">{`PLACE ORDER`}</Text>
                  </Stack>
                </Column>
                <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:mb-[70px] 3xl:ml-[44px] 3xl:mr-[40px] 3xl:mt-[34px] 3xl:text-fs21 font-lato font-normal leading-lh3000 lg:leading-lh23 lg:mb-[45px] lg:ml-[28px] lg:mr-[26px] lg:mt-[22px] lg:text-fs14 mb-[59px] ml-[37px] mr-[34px] mt-[29px] text-bluegray_400 text-fs18 text-left w-[86%] xl:leading-lh26 xl:mb-[52px] xl:ml-[32px] xl:mr-[30px] xl:mt-[25px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore e`}</Text>
              </Column>
            </Row>
            <Column className="3xl:mt-[267px] items-center justify-start lg:mt-[173px] mt-[223px] self-stretch w-[100%] xl:mt-[198px]">
              <Row className="font-poppins items-end justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:ml-[193px] 3xl:text-fs36 font-semibold lg:ml-[125px] lg:text-fs23 ml-[161px] text-black_900 text-fs30 text-left xl:ml-[143px] xl:text-fs26">{`Recently viewed`}</Text>
                <Image
                  src="img_navigation.svg"
                  className="2xl:h-[16px] 2xl:mb-[4px] 2xl:mr-[157px] 2xl:mt-[24px] 3xl:h-[19px] 3xl:mb-[5px] 3xl:mr-[189px] 3xl:mt-[29px] h-[15.82px] lg:h-[13px] lg:mb-[3px] lg:mr-[122px] lg:mt-[19px] mb-[4.6400146px] mr-[157.40991px] mt-[24.54004px] object-contain w-[4%] xl:h-[15px] xl:mb-[4px] xl:mr-[140px] xl:mt-[21px]"
                  alt="navigation"
                />
              </Row>
              <Row className="3xl:mt-[73px] font-poppins items-center justify-start lg:mt-[47px] mt-[61px] self-stretch w-[100%] xl:mt-[54px]">
                <div className="2xl:h-[140px] 3xl:h-[167px] 3xl:ml-[193px] bg-gray_400 h-[139px] lg:h-[109px] lg:ml-[125px] ml-[161px] rounded-radius20 w-[6%] xl:h-[124px] xl:ml-[143px]"></div>
                <Column className="3xl:ml-[22px] justify-start lg:ml-[14px] ml-[19px] w-[7%] xl:ml-[16px]">
                  <Text className="3xl:text-fs19 font-medium leading-lh lg:text-fs12 ml-[1px] text-black_900 text-fs16 text-left w-[99%] xl:text-fs14">{`Fitness and activity Tracker`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-semibold lg:mr-[7px] lg:mt-[22px] lg:text-fs15 ml-[1px] mr-[10px] mt-[29px] text-fs20 text-left text-yellow_901 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`$33.3`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[6px] mr-[10px] mt-[8px] w-[81%] xl:mr-[8px] xl:mt-[7px]">
                    <Image
                      src="img_ratings.svg"
                      className="2xl:h-[14px] 2xl:mb-[5px] 3xl:h-[17px] 3xl:my-[6px] h-[13.57px] lg:h-[11px] lg:mb-[4px] lg:mt-[3px] mb-[5.4300537px] mt-[5px] object-contain w-[68%] xl:h-[13px] xl:my-[4px]"
                      alt="ratings"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal lg:ml-[4px] lg:text-fs12 ml-[6px] text-fs16 text-gray_401 text-left xl:ml-[5px] xl:text-fs14">{`(12)`}</Text>
                  </Row>
                </Column>
                <div className="2xl:h-[140px] 3xl:h-[167px] 3xl:ml-[68px] bg-gray_400 h-[139px] lg:h-[109px] lg:ml-[44px] ml-[57px] rounded-radius20 w-[6%] xl:h-[124px] xl:ml-[50px]"></div>
                <Column className="3xl:ml-[22px] justify-start lg:ml-[14px] ml-[19px] w-[7%] xl:ml-[16px]">
                  <Text className="3xl:text-fs19 font-medium leading-lh lg:text-fs12 ml-[1px] text-black_900 text-fs16 text-left w-[99%] xl:text-fs14">{`Ice White Airpods`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-semibold lg:mr-[7px] lg:mt-[22px] lg:text-fs15 ml-[1px] mr-[10px] mt-[29px] text-fs20 text-left text-yellow_901 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`$521.3`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[6px] mr-[10px] mt-[8px] w-[81%] xl:mr-[8px] xl:mt-[7px]">
                    <Image
                      src="img_ratings.svg"
                      className="2xl:h-[14px] 2xl:mb-[5px] 3xl:h-[17px] 3xl:my-[6px] h-[13.57px] lg:h-[11px] lg:mb-[4px] lg:mt-[3px] mb-[5.4300537px] mt-[5px] object-contain w-[68%] xl:h-[13px] xl:my-[4px]"
                      alt="ratings"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal lg:ml-[4px] lg:text-fs12 ml-[6px] text-fs16 text-gray_401 text-left xl:ml-[5px] xl:text-fs14">{`(12)`}</Text>
                  </Row>
                </Column>
                <div className="2xl:h-[140px] 3xl:h-[167px] 3xl:ml-[68px] bg-gray_400 h-[139px] lg:h-[109px] lg:ml-[44px] ml-[57px] rounded-radius20 w-[6%] xl:h-[124px] xl:ml-[50px]"></div>
                <Column className="3xl:ml-[22px] justify-start lg:ml-[14px] ml-[19px] w-[7%] xl:ml-[16px]">
                  <Text className="3xl:text-fs19 font-medium leading-lh lg:text-fs12 ml-[1px] text-black_900 text-fs16 text-left w-[99%] xl:text-fs14">{`Xbox White Joystick`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-semibold lg:mr-[7px] lg:mt-[22px] lg:text-fs15 ml-[1px] mr-[10px] mt-[29px] text-fs20 text-left text-yellow_901 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`$98.4`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[6px] mr-[10px] mt-[8px] w-[81%] xl:mr-[8px] xl:mt-[7px]">
                    <Image
                      src="img_ratings.svg"
                      className="2xl:h-[14px] 2xl:mb-[5px] 3xl:h-[17px] 3xl:my-[6px] h-[13.57px] lg:h-[11px] lg:mb-[4px] lg:mt-[3px] mb-[5.4300537px] mt-[5px] object-contain w-[68%] xl:h-[13px] xl:my-[4px]"
                      alt="ratings"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal lg:ml-[4px] lg:text-fs12 ml-[6px] text-fs16 text-gray_401 text-left xl:ml-[5px] xl:text-fs14">{`(12)`}</Text>
                  </Row>
                </Column>
                <div className="2xl:h-[140px] 3xl:h-[167px] 3xl:ml-[68px] bg-gray_400 h-[139px] lg:h-[109px] lg:ml-[44px] ml-[57px] rounded-radius20 w-[6%] xl:h-[124px] xl:ml-[50px]"></div>
                <Column className="3xl:ml-[22px] justify-start lg:ml-[14px] ml-[19px] w-[7%] xl:ml-[16px]">
                  <Text className="3xl:text-fs19 font-medium leading-lh lg:text-fs12 ml-[1px] text-black_900 text-fs16 text-left w-[99%] xl:text-fs14">{`Hazor Mouse Gaming`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-semibold lg:mr-[7px] lg:mt-[22px] lg:text-fs15 ml-[1px] mr-[10px] mt-[29px] text-fs20 text-left text-yellow_901 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`$21.3`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[6px] mr-[10px] mt-[8px] w-[81%] xl:mr-[8px] xl:mt-[7px]">
                    <Image
                      src="img_ratings.svg"
                      className="2xl:h-[14px] 2xl:mb-[5px] 3xl:h-[17px] 3xl:my-[6px] h-[13.57px] lg:h-[11px] lg:mb-[4px] lg:mt-[3px] mb-[5.4300537px] mt-[5px] object-contain w-[68%] xl:h-[13px] xl:my-[4px]"
                      alt="ratings"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal lg:ml-[4px] lg:text-fs12 ml-[6px] text-fs16 text-gray_401 text-left xl:ml-[5px] xl:text-fs14">{`(12)`}</Text>
                  </Row>
                </Column>
                <div className="2xl:h-[140px] 3xl:h-[167px] 3xl:ml-[68px] bg-gray_400 h-[139px] lg:h-[109px] lg:ml-[44px] ml-[57px] rounded-radius20 w-[6%] xl:h-[124px] xl:ml-[50px]"></div>
                <Column className="3xl:ml-[22px] 3xl:mr-[199px] font-poppins justify-start lg:ml-[14px] lg:mr-[129px] ml-[19px] mr-[166px] w-[7%] xl:ml-[16px] xl:mr-[147px]">
                  <Text className="3xl:text-fs19 font-medium leading-lh lg:text-fs12 ml-[1px] text-black_900 text-fs16 text-left w-[99%] xl:text-fs14">{`Super Boost Headphones`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-semibold lg:mr-[7px] lg:mt-[22px] lg:text-fs15 ml-[1px] mr-[10px] mt-[29px] text-fs20 text-left text-yellow_901 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`$33.3`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[9px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[6px] mr-[10px] mt-[8px] w-[81%] xl:mr-[8px] xl:mt-[7px]">
                    <Image
                      src="img_ratings.svg"
                      className="2xl:h-[14px] 2xl:mb-[5px] 3xl:h-[17px] 3xl:my-[6px] h-[13.57px] lg:h-[11px] lg:mb-[4px] lg:mt-[3px] mb-[5.4300537px] mt-[5px] object-contain w-[68%] xl:h-[13px] xl:my-[4px]"
                      alt="ratings"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal lg:ml-[4px] lg:text-fs12 ml-[6px] text-fs16 text-gray_401 text-left xl:ml-[5px] xl:text-fs14">{`(12)`}</Text>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Image
              src="img_client.svg"
              className="2xl:h-[46px] 3xl:h-[56px] 3xl:mt-[241px] h-[45.87px] lg:h-[36px] lg:mt-[156px] mt-[201px] mx-[auto] object-contain w-[84%] xl:h-[41px] xl:mt-[178px]"
              alt="Client"
            />
            <Row className="2xl:mt-[127px] 3xl:mt-[152px] bg-yellow_901 font-poppins justify-end lg:mt-[98px] mt-[127.12988px] self-stretch w-[100%] xl:mt-[113px]">
              <Image
                src="img_vector_7.svg"
                className="2xl:h-[103px] 3xl:h-[123px] 3xl:mb-[109px] 3xl:ml-[181px] 3xl:mt-[110px] h-[102px] lg:h-[80px] lg:mb-[70px] lg:ml-[117px] lg:mt-[71px] mb-[91px] ml-[151px] mt-[92px] object-contain w-[6%] xl:h-[91px] xl:mb-[80px] xl:ml-[134px] xl:mt-[81px]"
                alt="Vector"
              />
              <Column className="3xl:mb-[90px] 3xl:ml-[86px] 3xl:mt-[69px] font-poppins justify-start lg:mb-[58px] lg:ml-[56px] lg:mt-[45px] mb-[75px] ml-[72px] mt-[58px] w-[35%] xl:mb-[66px] xl:ml-[64px] xl:mt-[51px]">
                <Stack className="2xl:h-[64px] 3xl:h-[76px] 3xl:mr-[12px] font-poppins h-[63px] lg:h-[49px] lg:mr-[7px] mr-[10px] w-[56%] xl:h-[57px] xl:mr-[8px]">
                  <Image
                    src="img_circleelement.svg"
                    className="2xl:h-[52px] 3xl:h-[62px] absolute h-[51px] lg:h-[40px] object-contain right-[0] rounded-radius50 top-[0] w-[14%] xl:h-[46px]"
                    alt="circleElement"
                  />
                  <Text className="3xl:text-fs36 absolute bottom-[0] font-bold left-[0] lg:text-fs23 text-fs30 text-left text-white_A700 xl:text-fs26">{`Sign Up for Newsletter`}</Text>
                </Stack>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[30px] 3xl:text-fs21 font-lato font-normal leading-lh3200 lg:leading-lh24 lg:mt-[19px] lg:text-fs14 mt-[25px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:leading-lh28 xl:mt-[22px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              </Column>
              <Stack className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[122px] 3xl:ml-[126px] 3xl:mt-[123px] font-lato h-[80px] lg:h-[63px] lg:mb-[79px] lg:ml-[81px] lg:mt-[80px] mb-[102px] ml-[105px] mt-[103px] w-[34%] xl:h-[72px] xl:mb-[90px] xl:ml-[93px] xl:mt-[91px]">
                <Input
                  className="3xl:pl-[42px] 3xl:py-[37px] 3xl:text-fs21 absolute bg-white_A700 border-0 font-normal inset-[0] lg:pl-[27px] lg:py-[24px] lg:text-fs14 pl-[35px] placeholder:bg-transparent placeholder:text-black_900_47 py-[31px] rounded-radius12 self-stretch text-black_900_47 text-fs18 text-left w-[100%] xl:pl-[31px] xl:py-[27px] xl:text-fs16"
                  name="Group104"
                  placeholder={`Enter your email here`}
                ></Input>
                <Button className="3xl:px-[42px] 3xl:py-[25px] 3xl:right-[10px] 3xl:text-fs21 absolute bg-gray_701 border-bw font-bold inset-y-[0] lg:px-[27px] lg:py-[16px] lg:right-[7px] lg:text-fs14 my-[auto] px-[35px] py-[21px] right-[9px] rounded-radius12 text-center text-fs18 text-white_A700 w-[29%] xl:px-[31px] xl:py-[18px] xl:right-[8px] xl:text-fs16">{`SUBSCRIBE`}</Button>
              </Stack>
              <Image
                src="img_circleelement_1.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mb-[64px] 3xl:ml-[15px] 3xl:mr-[118px] 3xl:mt-[219px] h-[48px] lg:h-[38px] lg:mb-[42px] lg:ml-[10px] lg:mr-[77px] lg:mt-[142px] mb-[54px] ml-[13px] mr-[99px] mt-[183px] object-contain rounded-radius50 w-[3%] xl:h-[43px] xl:mb-[48px] xl:ml-[11px] xl:mr-[88px] xl:mt-[162px]"
                alt="circleElement"
              />
            </Row>
          </Column>
          <div className="self-stretch w-[100%]">
            <Column className="bg-white_A700 items-center justify-end self-stretch w-[100%]">
              <Row className="3xl:mt-[117px] justify-evenly lg:mt-[76px] mt-[98px] px-[0] self-stretch w-[100%] xl:mt-[87px]">
                <Column className="3xl:mb-[141px] font-lato justify-start lg:mb-[91px] mb-[118px] w-[20%] xl:mb-[104px]">
                  <Image
                    src="img_logo_3.svg"
                    className="2xl:h-[37px] 3xl:h-[44px] 3xl:mr-[12px] h-[36px] lg:h-[28px] lg:mr-[7px] mr-[10px] object-contain w-[51%] xl:h-[33px] xl:mr-[8px]"
                    alt="logo"
                  />
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[44px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[28px] lg:text-fs14 mt-[37px] self-stretch text-black_900_7f text-fs18 text-left w-[100%] xl:leading-lh24 xl:mt-[32px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Image
                    src="img_follow.svg"
                    className="2xl:h-[59px] 3xl:h-[70px] 3xl:mr-[12px] 3xl:mt-[62px] h-[58px] lg:h-[46px] lg:mr-[7px] lg:mt-[40px] mr-[10px] mt-[52px] object-contain w-[89%] xl:h-[52px] xl:mr-[8px] xl:mt-[46px]"
                    alt="Follow"
                  />
                </Column>
                <Column className="3xl:mb-[105px] 3xl:mt-[26px] font-lato justify-start lg:mb-[68px] lg:mt-[17px] mb-[88px] mt-[22px] w-[7%] xl:mb-[78px] xl:mt-[19px]">
                  <Text className="3xl:text-fs24 font-bold lg:text-fs15 self-stretch text-black_900 text-fs20 text-left xl:text-fs17">{`QUICK LINKS`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs21 font-normal leading-lh4400 lg:leading-lh34 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[31px] text-black_900_b2 text-fs18 text-left w-[68%] xl:leading-lh39 xl:mr-[8px] xl:mt-[27px] xl:text-fs16">
                    {
                      <>
                        {`About us`}
                        <br />
                        {`Contact us`}
                        <br />
                        {`Products`}
                        <br />
                        {`Login`}
                        <br />
                        {`Sign Up`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mt-[26px] font-lato justify-start lg:mt-[17px] mt-[22px] w-[9%] xl:mt-[19px]">
                  <Text className="3xl:text-fs24 font-bold lg:text-fs15 self-stretch text-black_900 text-fs20 text-left xl:text-fs17">{`CUSTOMER AREA`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs21 font-normal leading-lh4400 lg:leading-lh34 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[31px] text-black_900_b2 text-fs18 text-left w-[66%] xl:leading-lh39 xl:mr-[8px] xl:mt-[27px] xl:text-fs16">
                    {
                      <>
                        {`My Account`}
                        <br />
                        {`Orders`}
                        <br />
                        {`Tracking List`}
                        <br />
                        {`Terms`}
                        <br />
                        {`Privacy Policy`}
                        <br />
                        {`My Cart`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mb-[44px] 3xl:mt-[26px] font-lato justify-start lg:mb-[28px] lg:mt-[17px] mb-[37px] mt-[22px] w-[26%] xl:mb-[32px] xl:mt-[19px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-bold lg:mr-[7px] lg:text-fs15 mr-[10px] text-black_900 text-fs20 text-left xl:mr-[8px] xl:text-fs17">{`CONTACT`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-black_900 text-fs16 text-left w-[79%] xl:leading-lh21 xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`}</Text>
                  <Column className="3xl:mt-[37px] items-center lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]">
                    <Row className="font-lato items-center justify-between px-[0] self-stretch w-[100%]">
                      <Row className="justify-between px-[0] w-[40%]">
                        <Image
                          src="img_vector_8.svg"
                          className="2xl:h-[52px] 3xl:h-[62px] h-[51px] lg:h-[40px] lg:mt-[2px] mt-[3px] object-contain w-[25%] xl:h-[46px] xl:mt-[2px]"
                          alt="Vector"
                        />
                        <Column className="font-lato justify-start w-[62%]">
                          <Text className="3xl:text-fs16 font-normal lg:text-fs10 self-stretch text-black_900 text-fs14 text-left xl:text-fs12">{`Have any question?`}</Text>
                          <Text className="3xl:mt-[7px] 3xl:text-fs21 font-normal lg:mr-[1px] lg:mt-[4px] lg:text-fs14 mr-[2px] mt-[6px] text-fs18 text-left text-yellow_901 xl:mr-[1px] xl:mt-[5px] xl:text-fs16">{`+ 123 456 789`}</Text>
                        </Column>
                      </Row>
                      <Button className="3xl:mr-[63px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-transparent border border-blue_600 border-solid font-normal lg:mr-[41px] lg:px-[27px] lg:py-[14px] lg:text-fs14 mr-[53px] px-[35px] py-[18px] rounded-radius12 text-blue_600 text-center text-fs18 w-[34%] xl:mr-[47px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`LIVE CHAT`}</Button>
                    </Row>
                    <Row className="3xl:gap-[37px] 3xl:mt-[74px] gap-[31px] grid grid-cols-2 items-center justify-between lg:gap-[24px] lg:mt-[48px] mt-[62px] self-stretch w-[100%] xl:gap-[27px] xl:mt-[55px]">
                      <Row className="bg-gray_904 items-center justify-start rounded-radius12 w-[100%]">
                        <Image
                          src="img_vector_9.svg"
                          className="2xl:h-[39px] 3xl:h-[46px] 3xl:mb-[26px] 3xl:ml-[28px] 3xl:mt-[19px] h-[38px] lg:h-[30px] lg:mb-[17px] lg:ml-[18px] lg:mt-[12px] mb-[22px] ml-[24px] mt-[16px] object-contain w-[13%] xl:h-[34px] xl:mb-[19px] xl:ml-[21px] xl:mt-[14px]"
                          alt="Vector"
                        />
                        <Column className="3xl:mb-[19px] 3xl:ml-[26px] 3xl:mr-[75px] 3xl:mt-[10px] font-lato justify-start lg:mb-[12px] lg:ml-[17px] lg:mr-[49px] lg:mt-[7px] mb-[16px] ml-[22px] mr-[63px] mt-[9px] w-[40%] xl:mb-[14px] xl:ml-[19px] xl:mr-[56px] xl:mt-[8px]">
                          <Text className="3xl:text-fs14 font-normal lg:text-fs9 self-stretch text-fs12 text-left text-white_A700 xl:text-fs10">{`Download on the`}</Text>
                          <Text className="3xl:text-fs24 font-black lg:mt-[2px] lg:text-fs15 mt-[3px] self-stretch text-fs20 text-left text-white_A700 xl:mt-[2px] xl:text-fs17">{`App Store`}</Text>
                        </Column>
                      </Row>
                      <Row className="bg-gray_904 items-end justify-center rounded-radius12 w-[100%]">
                        <Image
                          src="img_vector_10.svg"
                          className="2xl:h-[33px] 3xl:h-[39px] 3xl:mb-[24px] 3xl:ml-[30px] 3xl:mt-[28px] h-[32px] lg:h-[25px] lg:mb-[15px] lg:ml-[19px] lg:mt-[18px] mb-[20px] ml-[25px] mt-[24px] object-contain w-[11%] xl:h-[29px] xl:mb-[17px] xl:ml-[22px] xl:mt-[21px]"
                          alt="Vector"
                        />
                        <Column className="3xl:mb-[19px] 3xl:ml-[28px] 3xl:mr-[56px] 3xl:mt-[10px] font-lato justify-start lg:mb-[12px] lg:ml-[18px] lg:mr-[36px] lg:mt-[7px] mb-[16px] ml-[24px] mr-[47px] mt-[9px] w-[47%] xl:mb-[14px] xl:ml-[21px] xl:mr-[41px] xl:mt-[8px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs14 font-normal lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:text-fs10">{`GET IT ON`}</Text>
                          <Text className="3xl:text-fs24 font-black lg:mt-[2px] lg:text-fs15 mt-[3px] self-stretch text-fs20 text-left text-white_A700 xl:mt-[2px] xl:text-fs17">{`Google Play`}</Text>
                        </Column>
                      </Row>
                    </Row>
                  </Column>
                </Column>
              </Row>
              <Column className="3xl:mt-[86px] bg-white_A700 items-center justify-start lg:mt-[56px] mt-[72px] self-stretch w-[100%] xl:mt-[64px]">
                <Line className="bg-gray_400 h-[1px] self-stretch w-[100%]" />
                <Row className="3xl:mb-[34px] 3xl:mt-[38px] font-lato justify-evenly lg:mb-[22px] lg:mt-[24px] mb-[29px] mt-[32px] px-[0] self-stretch w-[100%] xl:mb-[25px] xl:mt-[28px]">
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:text-fs12 mb-[3px] text-fs16 text-gray_702 text-left xl:mb-[2px] xl:text-fs14">{`ELEXTRA  -   © 2020 All Rights Reserved`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:text-fs12 mb-[3px] text-fs16 text-gray_702 text-left xl:mb-[2px] xl:text-fs14">{`Payment`}</Text>
                  <Row className="font-lato items-center justify-between px-[0] w-[27%]">
                    <Text className="3xl:text-fs21 font-black lg:text-fs14 text-blue_600_a5 text-fs18 text-left xl:text-fs16">{`VASI`}</Text>
                    <Text className="3xl:text-fs21 font-black lg:text-fs14 text-fs18 text-left text-red_A200_a5 xl:text-fs16">
                      <span className="text-red_A200_a5 text-fs18 font-lato text-left font-black lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                        <>{`MASTER`}</>
                      </span>
                      <span className="text-orange_600_a5 text-fs18 font-lato text-left font-black lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                        <>{`KARD`}</>
                      </span>
                    </Text>
                    <Text className="3xl:text-fs21 font-black lg:text-fs14 text-blue_300_a5 text-fs18 text-left xl:text-fs16">{`PEYPOL`}</Text>
                    <Text className="3xl:mr-[180px] 3xl:text-fs21 font-black lg:mr-[116px] lg:text-fs14 mr-[150px] text-fs18 text-left text-yellow_900_a5 xl:mr-[133px] xl:text-fs16">{`BITKOIN`}</Text>
                  </Row>
                </Row>
              </Column>
            </Column>
          </div>
        </Column>
      </Stack>
    </Column>
  );
};

export default Checkout2Page;
