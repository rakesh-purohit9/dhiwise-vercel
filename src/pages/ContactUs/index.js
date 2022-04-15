import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { List } from "components/List";

const ContactUsPage = () => {
  return (
    <Column className="bg-gray_102 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-ptsans justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[29px] 3xl:h-[34px] h-[28px] lg:h-[22px] self-stretch w-[100%] xl:h-[25px]">
                <Image
                  src="img_bg.svg"
                  className="2xl:h-[29px] 3xl:h-[34px] absolute h-[28px] inset-[0] lg:h-[22px] object-cover self-stretch w-[100%] xl:h-[25px]"
                  alt="bg"
                />
                <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[58%]">
                  <Row className="font-ptsans justify-between my-[1px] px-[0] w-[36%]">
                    <Row className="justify-between px-[0] w-[49%]">
                      <Image
                        src="img_clock_1.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] h-[15px] lg:h-[12px] lg:mt-[1px] mt-[2px] object-contain w-[7%] xl:h-[14px] xl:mt-[1px]"
                        alt="clock"
                      />
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_800 text-fs14 text-left xl:text-fs12">{`Mon - Fri:`}</Text>
                      <Text className="3xl:text-fs16 font-bold lg:text-fs10 text-bluegray_800 text-fs14 text-left xl:text-fs12">{`9:00am - 9:00pm`}</Text>
                    </Row>
                    <Line className="2xl:h-[17px] 3xl:h-[20px] bg-bluegray_800 h-[16px] lg:h-[13px] mt-[1px] w-[1px] xl:h-[15px]" />
                    <Row className="font-ptsans justify-evenly px-[0] w-[45%]">
                      <Image
                        src="img_phone.svg"
                        className="2xl:h-[13px] 3xl:h-[15px] h-[12px] lg:h-[10px] lg:mb-[2px] lg:mt-[1px] mb-[3px] mt-[2px] object-contain w-[11%] xl:h-[11px] xl:mb-[2px] xl:mt-[1px]"
                        alt="phone"
                      />
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_800 text-fs14 text-left xl:text-fs12">{`Call us:`}</Text>
                      <Text className="3xl:text-fs16 font-bold lg:text-fs10 text-bluegray_800 text-fs14 text-left xl:text-fs12">{`+1-202-555-0168`}</Text>
                    </Row>
                  </Row>
                  <Row className="3xl:ml-[579px] font-ptsans items-center justify-center lg:ml-[375px] ml-[483px] my-[1px] w-[10%] xl:ml-[429px]">
                    <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_800 text-fs14 text-left xl:text-fs12">{`Language:`}</Text>
                    <Text className="3xl:text-fs16 font-bold lg:ml-[3px] lg:text-fs10 ml-[4px] text-bluegray_800 text-fs14 text-left xl:ml-[3px] xl:text-fs12">{`English`}</Text>
                  </Row>
                  <Row className="3xl:ml-[24px] font-ptsans justify-evenly lg:ml-[15px] ml-[20px] px-[0] w-[8%] xl:ml-[17px]">
                    <Text className="3xl:text-fs16 font-normal lg:text-fs10 mb-[1px] text-bluegray_800 text-fs14 text-left xl:text-fs12">{`Currency:`}</Text>
                    <Text className="3xl:text-fs16 font-bold lg:mt-[1px] lg:text-fs10 mt-[2px] text-bluegray_800 text-fs14 text-left xl:mt-[1px] xl:text-fs12">{`USD$`}</Text>
                  </Row>
                </Row>
              </Stack>
              <Row className="font-viga items-center justify-start self-stretch w-[100%]">
                <Stack className="2xl:h-[44px] 2xl:mb-[31px] 2xl:mt-[33px] 3xl:h-[52px] 3xl:mb-[38px] 3xl:ml-[488px] 3xl:mt-[39px] font-viga h-[43.000004px] lg:h-[34px] lg:mb-[24px] lg:ml-[316px] lg:mt-[25px] mb-[31.809998px] ml-[407px] mt-[33.19px] w-[4%] xl:h-[39px] xl:mb-[28px] xl:ml-[362px] xl:mt-[29px]">
                  <Text className="3xl:text-fs38 absolute font-normal inset-[0] lg:text-fs24 self-stretch text-center text-fs32 text-gray_900 xl:text-fs28">{`Disho`}</Text>
                  <Image
                    src="img_1freshnesspatt.png"
                    className="2xl:h-[10px] 2xl:left-[19px] 2xl:top-[3px] 3xl:h-[12px] 3xl:left-[23px] 3xl:top-[3px] absolute h-[9.85px] left-[19.79px] lg:h-[8px] lg:left-[15px] lg:top-[2px] object-contain top-[3.13px] w-[21%] xl:h-[9px] xl:left-[17px] xl:top-[2px]"
                    alt="1FreshnessPatt"
                  />
                </Stack>
                <Text className="3xl:mb-[52px] 3xl:ml-[68px] 3xl:mt-[55px] 3xl:text-fs19 font-bold font-ptsans lg:mb-[34px] lg:ml-[44px] lg:mt-[35px] lg:text-fs12 mb-[44px] ml-[57px] mt-[46px] text-bluegray_800 text-fs16 text-left xl:mb-[39px] xl:ml-[50px] xl:mt-[40px] xl:text-fs14">{`Home`}</Text>
                <Image
                  src="img_angledown.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[54px] 3xl:ml-[7px] 3xl:mt-[56px] h-[16px] lg:h-[13px] lg:mb-[35px] lg:ml-[4px] lg:mt-[36px] mb-[45px] ml-[6px] mt-[47px] object-contain w-[1%] xl:h-[15px] xl:mb-[40px] xl:ml-[5px] xl:mt-[41px]"
                  alt="angledown"
                />
                <Text className="3xl:mb-[52px] 3xl:ml-[31px] 3xl:mt-[55px] 3xl:text-fs19 font-normal font-ptsans lg:mb-[34px] lg:ml-[20px] lg:mt-[35px] lg:text-fs12 mb-[44px] ml-[26px] mt-[46px] text-bluegray_800 text-fs16 text-left xl:mb-[39px] xl:ml-[23px] xl:mt-[40px] xl:text-fs14">{`Shop`}</Text>
                <Image
                  src="img_angledown.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[54px] 3xl:ml-[6px] 3xl:mt-[56px] h-[16px] lg:h-[13px] lg:mb-[35px] lg:ml-[3px] lg:mt-[36px] mb-[45px] ml-[5px] mt-[47px] object-contain w-[1%] xl:h-[15px] xl:mb-[40px] xl:ml-[4px] xl:mt-[41px]"
                  alt="angledown"
                />
                <Text className="3xl:mb-[52px] 3xl:ml-[32px] 3xl:mt-[55px] 3xl:text-fs19 font-normal font-ptsans lg:mb-[34px] lg:ml-[21px] lg:mt-[35px] lg:text-fs12 mb-[44px] ml-[27px] mt-[46px] text-bluegray_800 text-fs16 text-left xl:mb-[39px] xl:ml-[24px] xl:mt-[40px] xl:text-fs14">{`Pages`}</Text>
                <Image
                  src="img_angledown.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[54px] 3xl:ml-[8px] 3xl:mt-[56px] h-[16px] lg:h-[13px] lg:mb-[35px] lg:ml-[5px] lg:mt-[36px] mb-[45px] ml-[7px] mt-[47px] object-contain w-[1%] xl:h-[15px] xl:mb-[40px] xl:ml-[6px] xl:mt-[41px]"
                  alt="angledown"
                />
                <Text className="3xl:mb-[52px] 3xl:ml-[31px] 3xl:mt-[55px] 3xl:text-fs19 font-normal font-ptsans lg:mb-[34px] lg:ml-[20px] lg:mt-[35px] lg:text-fs12 mb-[44px] ml-[26px] mt-[46px] text-bluegray_800 text-fs16 text-left xl:mb-[39px] xl:ml-[23px] xl:mt-[40px] xl:text-fs14">{`Blog`}</Text>
                <Image
                  src="img_angledown.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[54px] 3xl:ml-[6px] 3xl:mt-[56px] h-[16px] lg:h-[13px] lg:mb-[35px] lg:ml-[3px] lg:mt-[36px] mb-[45px] ml-[5px] mt-[47px] object-contain w-[1%] xl:h-[15px] xl:mb-[40px] xl:ml-[4px] xl:mt-[41px]"
                  alt="angledown"
                />
                <Text className="3xl:mb-[49px] 3xl:ml-[31px] 3xl:mt-[55px] 3xl:text-fs19 font-normal font-ptsans lg:mb-[31px] lg:ml-[20px] lg:mt-[35px] lg:text-fs12 mb-[41px] ml-[26px] mt-[46px] text-bluegray_800 text-fs16 text-left xl:mb-[36px] xl:ml-[23px] xl:mt-[40px] xl:text-fs14">{`Contact`}</Text>
                <Text className="3xl:mb-[32px] 3xl:ml-[51px] 3xl:mt-[34px] 3xl:pb-[15px] 3xl:pl-[31px] 3xl:pt-[19px] 3xl:text-fs21 bg-white_A700 border border-bluegray_102 border-solid font-normal font-ptsans leading-lh lg:mb-[21px] lg:ml-[33px] lg:mt-[22px] lg:pb-[10px] lg:pl-[20px] lg:pt-[12px] lg:text-fs14 mb-[27px] ml-[43px] mt-[29px] pb-[13px] pl-[26px] pt-[16px] rounded-bl-[26.5px] rounded-br-[0] rounded-tl-[26.5px] rounded-tr-[0] text-fs18 text-gray_601 text-left w-[16%] xl:mb-[24px] xl:ml-[38px] xl:mt-[25px] xl:pb-[11px] xl:pl-[23px] xl:pt-[14px] xl:text-fs16">{`Search for product…`}</Text>
                <Image
                  src="img_btn.svg"
                  className="2xl:h-[53px] 3xl:h-[63px] 3xl:mb-[32px] 3xl:mt-[34px] h-[52px] lg:h-[41px] lg:mb-[21px] lg:mt-[22px] mb-[27px] mt-[29px] object-contain w-[5%] xl:h-[47px] xl:mb-[24px] xl:mt-[25px]"
                  alt="Btn"
                />
                <Image
                  src="img_account.svg"
                  className="2xl:h-[53px] 2xl:mb-[24px] 2xl:mt-[31px] 3xl:h-[63px] 3xl:mb-[29px] 3xl:ml-[27px] 3xl:mt-[37px] 3xl:w-[62px] h-[52px] lg:h-[41px] lg:mb-[19px] lg:ml-[17px] lg:mt-[24px] lg:w-[40px] mb-[24.64px] ml-[23px] mt-[31.36px] object-contain w-[52px] xl:h-[47px] xl:mb-[21px] xl:ml-[20px] xl:mt-[27px] xl:w-[46px]"
                  alt="Account"
                />
                <Stack className="2xl:h-[59px] 3xl:h-[70px] 3xl:ml-[15px] 3xl:mr-[491px] 3xl:my-[30px] 3xl:w-[69px] h-[58px] lg:h-[46px] lg:ml-[10px] lg:mr-[318px] lg:my-[19px] lg:w-[45px] ml-[13px] mr-[409px] my-[25px] w-[58px] xl:h-[52px] xl:ml-[11px] xl:mr-[363px] xl:my-[22px] xl:w-[51px]">
                  <Stack className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] absolute bg-white_A700 bottom-[0] h-[52px] left-[0] lg:h-[41px] lg:w-[40px] rounded-radius50 shadow-bs2 w-[52px] xl:h-[47px] xl:w-[46px]">
                    <Image
                      src="img_shoppingbasket.svg"
                      className="2xl:h-[19px] 3xl:h-[22px] 3xl:inset-y-[20px] absolute h-[18px] inset-x-[0] inset-y-[17px] lg:h-[14px] lg:inset-y-[13px] object-cover self-stretch w-[100%] xl:h-[17px] xl:inset-y-[15px]"
                      alt="shoppingbasket"
                    />
                  </Stack>
                  <Column className="absolute bg-light_green_600 font-ptsans items-center justify-start right-[0] rounded-radius50 top-[0] w-[40%]">
                    <Text className="3xl:text-fs16 font-bold lg:mb-[1px] lg:ml-[3px] lg:mr-[2px] lg:mt-[2px] lg:text-fs10 mb-[2px] ml-[4px] mr-[3px] mt-[3px] text-center text-fs14 text-white_A700 xl:mb-[1px] xl:ml-[3px] xl:mr-[2px] xl:mt-[2px] xl:text-fs12">{`2`}</Text>
                  </Column>
                </Stack>
              </Row>
            </Column>
          </div>
        </Column>
        <Text className="3xl:pb-[18px] 3xl:pl-[42px] 3xl:pt-[19px] 3xl:text-fs16 bg-gray_200 font-normal leading-lh lg:pb-[11px] lg:pl-[27px] lg:pt-[12px] lg:text-fs10 pb-[15px] pl-[35px] pt-[16px] self-stretch text-bluegray_800 text-fs14 text-left w-[100%] xl:pb-[13px] xl:pl-[31px] xl:pt-[14px] xl:text-fs12">{`Home | Contact Us`}</Text>
        <Column className="items-center self-stretch w-[100%]">
          <Stack className="2xl:h-[546px] 3xl:h-[655px] h-[545px] lg:h-[424px] self-stretch w-[100%] xl:h-[485px]">
            <Stack className="2xl:h-[422px] 3xl:h-[506px] absolute bg-bluegray_103 h-[421px] lg:h-[328px] self-stretch top-[0] w-[100%] xl:h-[375px]">
              <Image
                src="img_placeholderimg.png"
                className="2xl:h-[422px] 3xl:h-[506px] 3xl:right-[10px] absolute h-[421px] inset-y-[0] left-[0] lg:h-[328px] lg:right-[7px] object-contain right-[9px] w-[100%] xl:h-[375px] xl:right-[8px]"
                alt="placeholderimg"
              />
            </Stack>
            <Row className="absolute bg-white_A700 bottom-[0] inset-x-[0] items-center justify-center mx-[auto] rounded-radius12 shadow-bs3 w-[58%]">
              <Column className="3xl:mb-[48px] 3xl:ml-[52px] 3xl:mt-[32px] font-viga justify-start lg:mb-[31px] lg:ml-[34px] lg:mt-[21px] mb-[40px] ml-[44px] mt-[27px] w-[44%] xl:mb-[35px] xl:ml-[39px] xl:mt-[24px]">
                <Column className="3xl:mr-[12px] font-viga justify-start lg:mr-[7px] mr-[10px] w-[33%] xl:mr-[8px]">
                  <Text className="3xl:text-fs40 font-normal lg:text-fs26 self-stretch text-fs34 text-gray_900 text-left xl:text-fs30">{`Contact us`}</Text>
                  <Line className="3xl:mr-[12px] bg-amber_A200 h-[3px] lg:mr-[7px] lg:mt-[3px] mr-[10px] mt-[4px] w-[61%] xl:mr-[8px] xl:mt-[3px]" />
                </Column>
                <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mt-[24px] 3xl:text-fs19 font-normal font-ptsans leading-lh2200 lg:leading-lh17 lg:mt-[15px] lg:text-fs12 mt-[20px] self-stretch text-bluegray_800 text-fs16 text-left w-[100%] xl:leading-lh19 xl:mt-[17px] xl:text-fs14">{`Donec ornare lacinia nulla, id ornare ligula euismod nec. Mauris pulvinar tincidunt ante. Vivamus sit amet augue`}</Text>
                <Image
                  src="img_socialmedia.svg"
                  className="2xl:h-[22px] 3xl:h-[26px] 3xl:mr-[12px] 3xl:mt-[16px] h-[21px] lg:h-[17px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[14px] object-contain w-[44%] xl:h-[19px] xl:mr-[8px] xl:mt-[12px]"
                  alt="Socialmedia"
                />
                <Column className="3xl:mt-[26px] items-center lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                  <Row className="font-viga justify-start self-stretch w-[100%]">
                    <Image
                      src="img_icon_6.svg"
                      className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] h-[52px] lg:h-[41px] lg:w-[40px] mb-[1px] object-contain w-[52px] xl:h-[47px] xl:w-[46px]"
                      alt="Icon"
                    />
                    <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[19px] 3xl:mr-[290px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:ml-[12px] lg:mr-[188px] lg:mt-[2px] lg:text-fs12 ml-[16px] mr-[242px] mt-[3px] text-fs16 text-gray_900 text-left w-[37%] xl:leading-lh21 xl:ml-[14px] xl:mr-[215px] xl:mt-[2px] xl:text-fs14">
                      {
                        <>
                          {`350 Bay Meadows St.`}
                          <br />
                          {`Reynoldsburg, OH 43068`}
                        </>
                      }
                    </Text>
                  </Row>
                </Column>
                <Row className="3xl:mr-[12px] 3xl:mt-[27px] items-end justify-start lg:mr-[7px] lg:mt-[17px] mr-[10px] mt-[23px] w-[53%] xl:mr-[8px] xl:mt-[20px]">
                  <Image
                    src="img_icon_7.svg"
                    className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] h-[52px] lg:h-[41px] lg:w-[40px] object-contain w-[52px] xl:h-[47px] xl:w-[46px]"
                    alt="Icon"
                  />
                  <Column className="3xl:ml-[19px] 3xl:mt-[8px] font-ptsans justify-start lg:mb-[1px] lg:ml-[12px] lg:mt-[5px] mb-[2px] ml-[16px] mt-[7px] w-[74%] xl:mb-[1px] xl:ml-[14px] xl:mt-[6px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_601 text-left xl:text-fs14">{`Mon - Fri: 9:00 am - 9:00 pm`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] mt-[1px] text-fs18 text-gray_900 text-left xl:mr-[8px] xl:text-fs16">{`+1-202-555-0168`}</Text>
                  </Column>
                </Row>
              </Column>
              <Stack className="2xl:h-[369px] 3xl:h-[442px] 3xl:ml-[42px] bg-white_A700 h-[368px] lg:h-[287px] lg:ml-[27px] ml-[35px] rounded-bl-[0] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px] w-[48%] xl:h-[328px] xl:ml-[31px]">
                <Image
                  src="img_e2f3d673e95d3d4.png"
                  className="2xl:h-[369px] 3xl:h-[442px] absolute h-[368px] inset-[0] lg:h-[287px] object-cover rounded-bl-[0] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px] self-stretch w-[100%] xl:h-[328px]"
                  alt="e2f3d673e95d3d4"
                />
                <Image
                  src="img_icon_8.svg"
                  className="2xl:h-[53px] 3xl:h-[63px] 3xl:left-[186px] 3xl:top-[150px] 3xl:w-[62px] absolute h-[52px] left-[155px] lg:h-[41px] lg:left-[120px] lg:top-[97px] lg:w-[40px] object-contain top-[125px] w-[52px] xl:h-[47px] xl:left-[137px] xl:top-[111px] xl:w-[46px]"
                  alt="Icon"
                />
              </Stack>
            </Row>
          </Stack>
          <List
            className="3xl:gap-[42px] 3xl:mt-[58px] flex-wrap gap-[35px] grid grid-cols-3 lg:gap-[27px] lg:mt-[38px] min-h-[auto] mt-[49px] mx-[auto] w-[58%] xl:gap-[31px] xl:mt-[43px]"
            orientation="horizontal"
          >
            <Row className="bg-white_A700 items-center justify-start rounded-radius12 shadow-bs3 w-[100%]">
              <Image
                src="defaultNoData.png"
                className="2xl:h-[38px] 3xl:h-[45px] 3xl:mb-[40px] 3xl:ml-[48px] 3xl:mt-[49px] h-[37px] lg:h-[29px] lg:mb-[26px] lg:ml-[31px] lg:mt-[31px] mb-[34px] ml-[40px] mt-[41px] object-contain w-[13%] xl:h-[33px] xl:mb-[30px] xl:ml-[35px] xl:mt-[36px]"
                alt="truck"
              />
              <Line className="2xl:h-[67px] 2xl:ml-[18px] 3xl:h-[80px] 3xl:ml-[21px] 3xl:my-[27px] bg-bluegray_102 h-[66px] lg:h-[52px] lg:ml-[14px] lg:my-[17px] ml-[18.230011px] my-[23px] w-[1px] xl:h-[59px] xl:ml-[16px] xl:my-[20px]" />
              <Column className="2xl:ml-[25px] 2xl:mr-[21px] 3xl:mb-[15px] 3xl:ml-[30px] 3xl:mr-[26px] 3xl:mt-[26px] font-viga justify-start lg:mb-[10px] lg:ml-[19px] lg:mr-[16px] lg:mt-[17px] mb-[13px] ml-[24.99997px] mr-[21.77002px] mt-[22px] w-[56%] xl:mb-[11px] xl:ml-[22px] xl:mr-[19px] xl:mt-[19px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs26 font-normal font-viga lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_800 text-fs22 text-left xl:mr-[8px] xl:text-fs19">{`Fast Delivery`}</Text>
                <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mt-[9px] 3xl:text-fs19 font-normal font-ptsans leading-lh2200 lg:leading-lh17 lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_800 text-fs16 text-left w-[100%] xl:leading-lh19 xl:mt-[7px] xl:text-fs14">{`Within 2-3 hours after ordering`}</Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-center rounded-radius12 shadow-bs3 w-[100%]">
              <Image
                src="defaultNoData.png"
                className="2xl:h-[38px] 3xl:h-[45px] 3xl:mb-[40px] 3xl:ml-[40px] 3xl:mt-[49px] h-[37px] lg:h-[29px] lg:mb-[26px] lg:ml-[26px] lg:mt-[31px] mb-[34px] ml-[34px] mt-[41px] object-contain w-[10%] xl:h-[33px] xl:mb-[30px] xl:ml-[30px] xl:mt-[36px]"
                alt="clock"
              />
              <Line className="2xl:h-[67px] 2xl:ml-[33px] 3xl:h-[80px] 3xl:ml-[39px] 3xl:my-[27px] bg-bluegray_102 h-[66px] lg:h-[52px] lg:ml-[25px] lg:my-[17px] ml-[33.22998px] my-[23px] w-[1px] xl:h-[59px] xl:ml-[29px] xl:my-[20px]" />
              <Column className="2xl:ml-[24px] 3xl:mb-[36px] 3xl:ml-[29px] 3xl:mr-[26px] 3xl:mt-[37px] font-viga justify-start lg:mb-[23px] lg:ml-[19px] lg:mr-[17px] lg:mt-[24px] mb-[30px] ml-[24.77002px] mr-[22px] mt-[31px] w-[56%] xl:mb-[26px] xl:ml-[22px] xl:mr-[19px] xl:mt-[27px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs26 font-normal font-viga lg:mr-[7px] lg:text-fs17 mr-[10px] text-bluegray_800 text-fs22 text-left xl:mr-[8px] xl:text-fs19">{`Opening Hours`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal font-ptsans lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_800 text-fs16 text-left xl:mt-[7px] xl:text-fs14">{`Mon.-Fri.: 9.00 am- 9.00 pm`}</Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-end rounded-radius12 shadow-bs3 w-[100%]">
              <Image
                src="defaultNoData.png"
                className="2xl:h-[38px] 3xl:h-[45px] 3xl:mb-[40px] 3xl:ml-[44px] 3xl:mt-[49px] h-[37px] lg:h-[29px] lg:mb-[26px] lg:ml-[28px] lg:mt-[31px] mb-[34px] ml-[37px] mt-[41px] object-contain w-[10%] xl:h-[33px] xl:mb-[30px] xl:ml-[32px] xl:mt-[36px]"
                alt="seedling"
              />
              <Line className="2xl:h-[67px] 2xl:ml-[30px] 3xl:h-[80px] 3xl:ml-[36px] 3xl:my-[27px] bg-bluegray_102 h-[66px] lg:h-[52px] lg:ml-[23px] lg:my-[17px] ml-[30.22998px] my-[23px] w-[1px] xl:h-[59px] xl:ml-[26px] xl:my-[20px]" />
              <Column className="2xl:ml-[24px] 3xl:ml-[29px] 3xl:mr-[26px] 3xl:my-[21px] font-viga justify-start lg:ml-[19px] lg:mr-[17px] lg:my-[14px] ml-[24.77002px] mr-[22px] my-[18px] w-[56%] xl:ml-[22px] xl:mr-[19px] xl:my-[16px]">
                <Text className="2xl:leading-lh25 3xl:leading-lh30 3xl:text-fs26 font-normal font-viga leading-lh2500 lg:leading-lh19 lg:text-fs17 self-stretch text-bluegray_800 text-fs22 text-left w-[100%] xl:leading-lh22 xl:text-fs19">{`Eco-friendly packaging`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal font-ptsans lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_800 text-fs16 text-left xl:mt-[7px] xl:text-fs14">{`Sustainable materials`}</Text>
              </Column>
            </Row>
          </List>
          <Row className="3xl:mt-[76px] justify-center lg:mt-[49px] mt-[64px] mx-[auto] w-[57%] xl:mt-[56px]">
            <Column className="justify-start w-[48%]">
              <Column className="3xl:mr-[12px] font-viga justify-start lg:mr-[7px] mr-[10px] w-[30%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-normal lg:text-fs18 self-stretch text-fs24 text-gray_900 text-left xl:text-fs21">{`Delivery terms`}</Text>
                <Line className="3xl:mr-[12px] 3xl:mt-[14px] bg-amber_A200 h-[3px] lg:mr-[7px] lg:mt-[9px] mr-[10px] mt-[12px] w-[63%] xl:mr-[8px] xl:mt-[10px]" />
              </Column>
              <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                <Column className="justify-start self-stretch w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[147px] 3xl:h-[176px] font-ptsans h-[146px] lg:h-[114px] self-stretch w-[100%] xl:h-[130px]">
                      <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:text-fs19 absolute font-normal leading-lh2200 lg:leading-lh17 lg:text-fs12 self-stretch text-bluegray_800 text-fs16 text-left top-[0] w-[100%] xl:leading-lh19 xl:text-fs14">{`Integer et lacus vel magna tempus dictum et id nunc. Curabitur sit amet purus a quam luctus hendrerit eu quis neque. Suspendisse eget ultrices mi. Donec nec elit ac purus cursus fermentum a eget ligula. Integer nunc risus, aliquet pellentesque accumsan a, sagittis vitae quam. Vivamus dictum eros a massa ullamcorper`}</Text>
                      <Row className="absolute bottom-[0] font-ptsans justify-start left-[0] w-[43%]">
                        <Image
                          src="img_infocircle.svg"
                          className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[1px] lg:w-[14px] mt-[2px] object-contain w-[18px] xl:h-[17px] xl:mt-[1px] xl:w-[16px]"
                          alt="infocircle"
                        />
                        <Text className="3xl:ml-[10px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[9px] text-bluegray_800 text-fs16 text-left xl:ml-[8px] xl:text-fs14">{`Maecenas id risus fermentum`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                  <Row className="3xl:mr-[12px] 3xl:mt-[19px] font-ptsans justify-start lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[95%] xl:mr-[8px] xl:mt-[14px]">
                    <Image
                      src="img_infocircle.svg"
                      className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[49px] h-[18px] lg:h-[14px] lg:mb-[31px] lg:mt-[1px] mb-[41px] mt-[2px] object-contain w-[4%] xl:h-[17px] xl:mb-[36px] xl:mt-[1px]"
                      alt="infocircle"
                    />
                    <Text className="3xl:ml-[7px] 3xl:text-fs19 font-normal leading-lh lg:ml-[4px] lg:text-fs12 ml-[6px] text-bluegray_800 text-fs16 text-left w-[95%] xl:ml-[5px] xl:text-fs14">{`Curabitur at arcu urna. Sed lobortis justo iaculis blandit malesuada. Etiam sit amet enim nec erat malesuada dapibus eget`}</Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="3xl:mb-[58px] 3xl:ml-[43px] justify-start lg:mb-[38px] lg:ml-[28px] mb-[49px] ml-[36px] w-[48%] xl:mb-[43px] xl:ml-[32px]">
              <Column className="3xl:mr-[12px] font-viga justify-start lg:mr-[7px] mr-[10px] w-[40%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-normal lg:text-fs18 self-stretch text-fs24 text-gray_900 text-left xl:text-fs21">{`Licenses & Permits`}</Text>
                <Line className="3xl:mr-[12px] 3xl:mt-[14px] bg-red_A200 h-[3px] lg:mr-[7px] lg:mt-[9px] mr-[10px] mt-[12px] w-[47%] xl:mr-[8px] xl:mt-[10px]" />
              </Column>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="font-ptsans justify-start self-stretch w-[100%]">
                  <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:text-fs19 font-normal leading-lh2200 lg:leading-lh17 lg:text-fs12 self-stretch text-bluegray_800 text-fs16 text-left w-[100%] xl:leading-lh19 xl:text-fs14">{`Aliquam pulvinar ligula eu nulla condimentum aliquam. Suspendisse vel condimentum urna. Vivamus ultricies, dui quis pharetra posuere, enim leo pretium arcu, convallis consectetur`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[12px] font-ptsans justify-start lg:mr-[7px] lg:mt-[7px] mr-[10px] mt-[10px] w-[55%] xl:mr-[8px] xl:mt-[8px]">
                    <Image
                      src="img_filedownload.svg"
                      className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] lg:mt-[1px] mt-[2px] object-contain w-[5%] xl:h-[17px] xl:mt-[1px]"
                      alt="filedownload"
                    />
                    <Text className="3xl:ml-[15px] 3xl:text-fs19 font-bold lg:ml-[10px] lg:text-fs12 ml-[13px] text-bluegray_800 text-fs16 text-left xl:ml-[11px] xl:text-fs14">{`Maecenas id risus fermentum ( 365 Kb)`}</Text>
                  </Row>
                  <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Row className="font-ptsans justify-start self-stretch w-[100%]">
                      <Image
                        src="img_fileword.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[37px] h-[18px] lg:h-[14px] lg:mb-[24px] mb-[31px] mt-[1px] object-contain w-[3%] xl:h-[17px] xl:mb-[27px]"
                        alt="fileword"
                      />
                      <Text className="3xl:ml-[15px] 3xl:text-fs19 font-bold leading-lh lg:ml-[10px] lg:text-fs12 ml-[13px] text-bluegray_800 text-fs16 text-left w-[95%] xl:ml-[11px] xl:text-fs14">{`Fusce in arcu nisl. Proin interdum ullamcorper diam. Sed eget placerat neque, sed lacinia libero. Mauris a metus ut dolor gravida posuere`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Row>
          <Row className="3xl:mt-[94px] items-center justify-evenly lg:mt-[61px] mt-[79px] px-[0] self-stretch w-[100%] xl:mt-[70px]">
            <Image
              src="img_placeholder.png"
              className="2xl:h-[320px] 3xl:h-[384px] 3xl:w-[383px] h-[319px] lg:h-[249px] lg:w-[248px] my-[1px] object-contain w-[319px] xl:h-[284px] xl:w-[283px]"
              alt="Placeholder"
            />
            <Image
              src="img_placeholder_1.png"
              className="2xl:h-[321px] 3xl:h-[385px] 3xl:w-[384px] h-[320px] lg:h-[249px] lg:w-[248px] object-contain w-[320px] xl:h-[285px] xl:w-[284px]"
              alt="Placeholder"
            />
            <Stack className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] w-[33%] xl:h-[285px]">
              <Row className="absolute gap-[0] grid grid-cols-2 inset-[0] items-center justify-evenly self-stretch w-[100%]">
                <Image
                  src="img_placeholder_2.png"
                  className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
                  alt="Placeholder"
                />
                <Image
                  src="img_placeholder_1.png"
                  className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
                  alt="Placeholder"
                />
              </Row>
              <Column className="absolute bg-white_A700_8a font-ptsans h-[max-content] inset-[0] items-center justify-center m-[auto] rounded-radius245 w-[35%]">
                <Text className="3xl:mt-[9px] 3xl:text-fs19 font-bold lg:mt-[6px] lg:text-fs12 mt-[8px] mx-[auto] text-bluegray_800 text-center text-fs16 xl:mt-[7px] xl:text-fs14">{`@Disho Grocery`}</Text>
                <Line className="3xl:mb-[14px] bg-light_green_600 h-[3px] lg:mb-[9px] lg:mt-[3px] mb-[12px] mt-[4px] mx-[auto] w-[49%] xl:mb-[10px] xl:mt-[3px]" />
              </Column>
            </Stack>
            <Image
              src="img_placeholder_2.png"
              className="2xl:h-[321px] 3xl:h-[385px] 3xl:w-[384px] h-[320px] lg:h-[249px] lg:w-[248px] object-contain w-[320px] xl:h-[285px] xl:w-[284px]"
              alt="Placeholder"
            />
            <Image
              src="img_placeholder_1.png"
              className="2xl:h-[321px] 3xl:h-[385px] 3xl:w-[384px] h-[320px] lg:h-[249px] lg:w-[248px] object-contain w-[320px] xl:h-[285px] xl:w-[284px]"
              alt="Placeholder"
            />
          </Row>
          <Row className="bg-white_A700_aa items-center justify-center w-[100%]">
            <Column className="3xl:mb-[49px] 3xl:ml-[487px] 3xl:mt-[50px] font-viga justify-start lg:mb-[31px] lg:ml-[315px] lg:mt-[32px] mb-[41px] ml-[406px] mt-[42px] w-[28%] xl:mb-[36px] xl:ml-[361px] xl:mt-[37px]">
              <Text className="3xl:text-fs40 font-normal lg:text-fs26 self-stretch text-fs34 text-gray_900 text-left xl:text-fs30">{`Save  20% on first shopping`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[8px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[5px] lg:text-fs12 mr-[10px] mt-[7px] text-fs16 text-gray_900 text-left xl:mr-[8px] xl:mt-[6px] xl:text-fs14">{`Sign Up to Newsletter`}</Text>
            </Column>
            <Row className="3xl:ml-[43px] 3xl:mr-[489px] 3xl:my-[63px] font-ptsans items-center justify-center lg:ml-[28px] lg:mr-[317px] lg:my-[41px] ml-[36px] mr-[408px] my-[53px] w-[28%] xl:ml-[32px] xl:mr-[362px] xl:my-[47px]">
              <Text className="3xl:pb-[16px] 3xl:pl-[31px] 3xl:pt-[19px] 3xl:text-fs21 bg-white_A700 border border-bluegray_102 border-solid font-normal leading-lh lg:pb-[10px] lg:pl-[20px] lg:pt-[12px] lg:text-fs14 pb-[14px] pl-[26px] pt-[16px] rounded-bl-[26.5px] rounded-br-[0] rounded-tl-[26.5px] rounded-tr-[0] text-fs18 text-gray_601 text-left w-[64%] xl:pb-[12px] xl:pl-[23px] xl:pt-[14px] xl:text-fs16">{`Email`}</Text>
              <Row className="bg-light_green_600 font-ptsans items-center justify-center rounded-bl-[0] rounded-br-[26.5px] rounded-tl-[0] rounded-tr-[26.5px] w-[36%]">
                <Image
                  src="img_paperplane.svg"
                  className="2xl:h-[18px] 3xl:h-[21px] 3xl:mb-[20px] 3xl:ml-[58px] 3xl:mt-[22px] h-[17px] lg:h-[14px] lg:mb-[13px] lg:ml-[38px] lg:mt-[14px] mb-[17px] ml-[49px] mt-[19px] object-contain w-[8%] xl:h-[16px] xl:mb-[15px] xl:ml-[43px] xl:mt-[16px]"
                  alt="paperplane"
                />
                <Text className="3xl:mb-[20px] 3xl:ml-[13px] 3xl:mr-[57px] 3xl:mt-[21px] 3xl:text-fs19 font-bold lg:mb-[13px] lg:ml-[8px] lg:mr-[37px] lg:mt-[14px] lg:text-fs12 mb-[17px] ml-[11px] mr-[48px] mt-[18px] text-fs16 text-left text-white_A700 xl:mb-[15px] xl:ml-[9px] xl:mr-[42px] xl:mt-[16px] xl:text-fs14">{`Subscribe`}</Text>
              </Row>
            </Row>
          </Row>
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-white_A700 items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="3xl:mb-[118px] 3xl:mt-[121px] justify-start lg:mb-[77px] lg:mt-[78px] mb-[99px] mt-[101px] w-[14%] xl:mb-[88px] xl:mt-[89px]">
                  <Stack className="2xl:h-[44px] 3xl:h-[52px] 3xl:mr-[12px] font-viga h-[43px] lg:h-[34px] lg:mr-[7px] mr-[10px] mt-[1px] w-[32%] xl:h-[39px] xl:mr-[8px]">
                    <Text className="3xl:text-fs38 absolute font-normal inset-[0] lg:text-fs24 self-stretch text-center text-fs32 text-gray_900 xl:text-fs28">{`Disho`}</Text>
                    <Image
                      src="img_1freshnesspatt_1.png"
                      className="2xl:h-[11px] 2xl:left-[19px] 2xl:top-[2px] 3xl:h-[13px] 3xl:left-[23px] 3xl:top-[3px] absolute h-[10.08px] left-[19.79px] lg:h-[8px] lg:left-[15px] lg:top-[2px] object-contain top-[2.7px] w-[21%] xl:h-[9px] xl:left-[17px] xl:top-[2px]"
                      alt="1FreshnessPatt"
                    />
                  </Stack>
                  <Column className="items-center mt-[1px] self-stretch w-[100%]">
                    <Stack className="2xl:h-[75px] 3xl:h-[89px] 3xl:mr-[10px] font-ptsans h-[74px] lg:h-[58px] lg:ml-[1px] lg:mr-[7px] ml-[2px] mr-[9px] w-[96%] xl:h-[66px] xl:ml-[1px] xl:mr-[8px]">
                      <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:text-fs19 absolute font-normal leading-lh2200 lg:leading-lh17 lg:text-fs12 self-stretch text-bluegray_800 text-fs16 text-left top-[0] w-[100%] xl:leading-lh19 xl:text-fs14">{`Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus`}</Text>
                      <Image
                        src="img_socialmedia_1.svg"
                        className="2xl:h-[22px] 3xl:h-[26px] absolute bottom-[0] h-[21px] left-[0] lg:h-[17px] object-contain w-[87%] xl:h-[19px]"
                        alt="Socialmedia"
                      />
                    </Stack>
                    <Row className="3xl:mt-[28px] font-viga justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                      <Stack className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] bg-white_A700 h-[52px] lg:h-[41px] lg:ml-[1px] lg:w-[40px] mb-[1px] ml-[2px] rounded-radius50 shadow-bs2 w-[52px] xl:h-[47px] xl:ml-[1px] xl:w-[46px]">
                        <Image
                          src="img_mapmarkeralt_1.svg"
                          className="2xl:h-[21px] 3xl:h-[25px] absolute h-[20px] inset-[0] justify-center lg:h-[16px] m-[auto] object-contain w-[29%] xl:h-[18px]"
                          alt="mapmarkeralt"
                        />
                      </Stack>
                      <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[19px] 3xl:mr-[10px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:ml-[12px] lg:mr-[7px] lg:mt-[2px] lg:text-fs12 ml-[16px] mr-[9px] mt-[3px] text-fs16 text-gray_900 text-left w-[70%] xl:leading-lh21 xl:ml-[14px] xl:mr-[8px] xl:mt-[2px] xl:text-fs14">
                        {
                          <>
                            {`350 Bay Meadows St.`}
                            <br />
                            {`Reynoldsburg, OH 43068`}
                          </>
                        }
                      </Text>
                    </Row>
                    <Row className="3xl:mt-[15px] items-end justify-between lg:mt-[10px] mt-[13px] px-[0] self-stretch w-[100%] xl:mt-[11px]">
                      <Stack className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] bg-white_A700 h-[52px] lg:h-[41px] lg:ml-[1px] lg:w-[40px] ml-[2px] rounded-radius50 shadow-bs2 w-[52px] xl:h-[47px] xl:ml-[1px] xl:w-[46px]">
                        <Image
                          src="img_headset.svg"
                          className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] absolute h-[20px] inset-[0] justify-center lg:h-[16px] lg:w-[15px] m-[auto] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                          alt="Headset"
                        />
                      </Stack>
                      <Column className="3xl:mt-[8px] font-ptsans justify-start lg:mb-[1px] lg:mt-[5px] mb-[2px] mt-[7px] w-[73%] xl:mb-[1px] xl:mt-[6px]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_601 text-left xl:text-fs14">{`Mon - Fri: 9:00 am - 9:00 pm`}</Text>
                        <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] mt-[1px] text-fs18 text-gray_900 text-left xl:mr-[8px] xl:text-fs16">{`+1-202-555-0168`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Column>
                <Row className="3xl:mb-[111px] 3xl:mt-[128px] justify-center lg:mb-[72px] lg:mt-[83px] mb-[93px] mt-[107px] w-[62%] xl:mb-[82px] xl:mt-[95px]">
                  <Column className="3xl:mb-[39px] font-viga justify-start lg:mb-[25px] mb-[33px] w-[18%] xl:mb-[29px]">
                    <Text className="2xl:mr-[1px] 3xl:mr-[2px] 3xl:text-fs26 font-normal font-viga lg:mr-[1px] lg:text-fs17 mr-[1.7000122px] text-fs22 text-gray_900 text-left xl:mr-[1px] xl:text-fs19">{`Useful Links`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[11px] lg:text-fs12 mr-[10px] mt-[15px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[13px] xl:text-fs14">{`About Us`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Contact Us`}</Text>
                    <Text className="3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mt-[9px] lg:text-fs12 mt-[12px] self-stretch text-bluegray_800 text-fs16 text-left xl:mt-[10px] xl:text-fs14">{`Shop by Categorie`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[8px] lg:text-fs12 mr-[10px] mt-[11px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[9px] xl:text-fs14">{`From the Blog`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Shopping Cart`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`FAQ,s`}</Text>
                  </Column>
                  <Column className="3xl:mb-[39px] 3xl:ml-[64px] font-viga justify-start lg:mb-[25px] lg:ml-[42px] mb-[33px] ml-[54px] w-[18%] xl:mb-[29px] xl:ml-[48px]">
                    <Text className="3xl:text-fs26 font-normal font-viga lg:text-fs17 self-stretch text-fs22 text-gray_900 text-left xl:text-fs19">{`Customer Care`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[11px] lg:text-fs12 mr-[10px] mt-[15px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[13px] xl:text-fs14">{`My Account`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Payment & Delivery`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`FAQ`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[8px] lg:text-fs12 mr-[10px] mt-[11px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[9px] xl:text-fs14">{`Customer Support`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Licenses & Permits`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-ptsans lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-bluegray_800 text-fs16 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Our partners`}</Text>
                  </Column>
                  <Column className="3xl:ml-[63px] 3xl:mr-[533px] font-viga justify-start lg:ml-[41px] lg:mr-[345px] ml-[53px] mr-[444px] w-[18%] xl:ml-[47px] xl:mr-[394px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs26 font-normal lg:mr-[7px] lg:text-fs17 mr-[10px] text-fs22 text-gray_900 text-left xl:mr-[8px] xl:text-fs19">{`Product Categories`}</Text>
                    <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                      <Column className="justify-start self-stretch w-[100%]">
                        <Row className="font-ptsans justify-start self-stretch w-[100%]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[67px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[43px] lg:text-fs12 ml-[12px] mr-[56px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[49px] xl:text-fs14">{`Fruits & Vegetables`}</Text>
                        </Row>
                        <Row className="3xl:mt-[18px] font-ptsans justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[30px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[19px] lg:text-fs12 ml-[12px] mr-[25px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[22px] xl:text-fs14">{`Snacks & Canned Goods`}</Text>
                        </Row>
                        <Row className="3xl:mt-[18px] font-ptsans justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[108px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[70px] lg:text-fs12 ml-[12px] mr-[90px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[80px] xl:text-fs14">{`Cereal & Pasta`}</Text>
                        </Row>
                        <Row className="3xl:mt-[18px] font-ptsans justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[133px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[86px] lg:text-fs12 ml-[12px] mr-[111px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[98px] xl:text-fs14">{`Coffe & Tea`}</Text>
                        </Row>
                        <Column className="3xl:mt-[16px] items-center lg:mt-[10px] mt-[14px] self-stretch w-[100%] xl:mt-[12px]">
                          <Row className="font-ptsans justify-start self-stretch w-[100%]">
                            <Image
                              src="img_circle.svg"
                              className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                              alt="circle"
                            />
                            <Text className="3xl:ml-[14px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:text-fs12 ml-[12px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:text-fs14">{`Bakery,  Flour & Sweeteners`}</Text>
                          </Row>
                        </Column>
                        <Row className="3xl:mt-[18px] font-ptsans justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[103px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[66px] lg:text-fs12 ml-[12px] mr-[86px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[76px] xl:text-fs14">{`Herbs & Spices`}</Text>
                        </Row>
                        <Row className="3xl:mt-[18px] font-ptsans justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                          <Image
                            src="img_circle.svg"
                            className="2xl:h-[10px] 3xl:h-[11px] 3xl:mt-[6px] h-[9px] lg:h-[7px] lg:my-[3px] mb-[4px] mt-[5px] object-contain w-[4%] xl:mb-[3px] xl:mt-[4px]"
                            alt="circle"
                          />
                          <Text className="3xl:ml-[14px] 3xl:mr-[128px] 3xl:text-fs19 font-normal lg:ml-[9px] lg:mr-[83px] lg:text-fs12 ml-[12px] mr-[107px] text-bluegray_800 text-fs16 text-left xl:ml-[10px] xl:mr-[95px] xl:text-fs14">{`Oil& Sauces`}</Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Row>
              </Row>
              <Row className="bg-gray_200 items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Row className="3xl:mb-[30px] 3xl:mt-[32px] font-ptsans justify-center lg:mb-[19px] lg:mt-[21px] mb-[25px] mt-[27px] w-[33%] xl:mb-[22px] xl:mt-[24px]">
                  <Text className="3xl:ml-[488px] 3xl:text-fs14 font-bold lg:ml-[316px] lg:text-fs9 ml-[407px] text-fs12 text-gray_601 text-left xl:ml-[362px] xl:text-fs10">{`Copyright`}</Text>
                  <Image
                    src="defaultNoData.png"
                    className="2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[8px] h-[13px] lg:h-[11px] lg:ml-[5px] ml-[7px] mt-[1px] object-contain w-[2%] xl:h-[12px] xl:ml-[6px]"
                    alt="copyright"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs14 font-bold lg:ml-[3px] lg:text-fs9 ml-[5px] text-fs12 text-gray_601 text-left xl:ml-[4px] xl:text-fs10">{`Merkulove. All rights reserved`}</Text>
                </Row>
                <Row className="3xl:gap-[45px] 3xl:mb-[19px] 3xl:mt-[22px] 3xl:pr-[504px] gap-[38px] grid grid-cols-3 items-center justify-center lg:gap-[29px] lg:mb-[12px] lg:mt-[14px] lg:pr-[326px] mb-[16px] mt-[19px] pr-[420px] w-[32%] xl:gap-[33px] xl:mb-[14px] xl:mt-[16px] xl:pr-[373px]">
                  <Image
                    src="img_placeholder_3.png"
                    className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain rounded-radius4 w-[100%] xl:h-[28px]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_4.png"
                    className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain rounded-radius4 w-[100%] xl:h-[28px]"
                    alt="placeholder"
                  />
                  <Image
                    src="img_placeholder_5.png"
                    className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain rounded-radius4 w-[100%] xl:h-[28px]"
                    alt="placeholder"
                  />
                </Row>
              </Row>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default ContactUsPage;
