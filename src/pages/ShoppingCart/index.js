import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Switch } from "components/Switch";

const ShoppingCartPage = () => {
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
                    src="img_1freshnesspatt_2.png"
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
                  src="img_account_1.svg"
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
        <Text className="3xl:pb-[18px] 3xl:pl-[42px] 3xl:pt-[19px] 3xl:text-fs16 bg-gray_200 font-normal leading-lh lg:pb-[11px] lg:pl-[27px] lg:pt-[12px] lg:text-fs10 pb-[15px] pl-[35px] pt-[16px] self-stretch text-bluegray_800 text-fs14 text-left w-[100%] xl:pb-[13px] xl:pl-[31px] xl:pt-[14px] xl:text-fs12">{`Home | Shopping Cart`}</Text>
        <Column className="3xl:mt-[69px] items-center lg:mt-[45px] mt-[58px] self-stretch w-[100%] xl:mt-[51px]">
          <Row className="items-center justify-center self-stretch w-[100%]">
            <Column className="3xl:mb-[14px] 3xl:ml-[488px] items-center justify-start lg:mb-[9px] lg:ml-[316px] mb-[12px] ml-[407px] w-[38%] xl:mb-[10px] xl:ml-[362px]">
              <Column className="bg-white_A700 font-viga justify-start rounded-radius12 self-stretch shadow-bs3 w-[100%]">
                <Text className="2xl:mt-[20px] 3xl:mt-[24px] 3xl:mx-[33px] 3xl:text-fs28 font-normal lg:mt-[15px] lg:mx-[21px] lg:text-fs18 mt-[20.209991px] mx-[28px] text-fs24 text-gray_900 text-left xl:mt-[17px] xl:mx-[24px] xl:text-fs21">{`Shopping Cart`}</Text>
                <Column className="2xl:mb-[49px] 2xl:mt-[60px] 3xl:mb-[59px] 3xl:mt-[72px] items-center lg:mb-[38px] lg:mt-[46px] mb-[49.460022px] mt-[60.25px] self-stretch w-[100%] xl:mb-[43px] xl:mt-[53px]">
                  <List
                    className="flex-wrap gap-[0] min-h-[auto] mx-[auto] w-[90%]"
                    orientation="vertical"
                  >
                    <Row className="2xl:my-[34px] 3xl:my-[41px] items-center justify-between lg:my-[26px] my-[34.43px] px-[0] self-stretch w-[100%] xl:my-[30px]">
                      <Row className="items-end justify-between px-[0] w-[43%]">
                        <Stack className="2xl:h-[102px] 3xl:h-[123px] font-viga h-[101.61px] lg:h-[80px] w-[30%] xl:h-[91px]">
                          <Image
                            src="img_placeholder_6.png"
                            className="2xl:h-[102px] 3xl:h-[123px] absolute h-[101.61px] inset-y-[0] left-[0] lg:h-[80px] object-contain right-[1px] rounded-radius12 w-[100%] xl:h-[91px]"
                            alt="Placeholder"
                          />
                          <Text className="2xl:pr-[4px] 2xl:top-[9px] 3xl:pr-[4px] 3xl:text-fs14 3xl:top-[11px] absolute bg-amber_A200 font-normal lg:pr-[3px] lg:text-fs9 lg:top-[7px] opacity-0 pb-[1px] pr-[4.119995px] pt-[0] right-[0] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] text-bluegray_800 text-fs12 text-right top-[9.35px] xl:pr-[3px] xl:text-fs10 xl:top-[8px]">{`Sale!`}</Text>
                        </Stack>
                        <Stack className="2xl:h-[82px] 2xl:mb-[4px] 2xl:mt-[16px] 3xl:h-[98px] 3xl:mb-[4px] 3xl:mt-[19px] font-viga h-[81.36px] lg:h-[64px] lg:mb-[3px] lg:mt-[12px] mb-[4.1000366px] mt-[16.149994px] w-[62%] xl:h-[73px] xl:mb-[3px] xl:mt-[14px]">
                          <Text className="3xl:text-fs28 absolute font-normal inset-x-[0] lg:text-fs18 mx-[auto] text-fs24 text-gray_900 text-left top-[0] w-[max-content] xl:text-fs21">{`Organic Milk`}</Text>
                          <Stack className="2xl:h-[52px] 3xl:h-[62px] absolute bottom-[0] font-ptsans h-[51.23px] lg:h-[40px] self-stretch w-[100%] xl:h-[46px]">
                            <Row className="absolute items-center justify-start left-[0] w-[92%]">
                              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 my-[1px] text-fs22 text-left text-red_A200 w-[39%] xl:leading-lh44 xl:text-fs19">{`$8.99`}</Text>
                              <Text className="2xl:leading-lh50 2xl:ml-[11px] 3xl:leading-lh60 3xl:ml-[13px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[9px] lg:text-fs17 line-through ml-[11.630005px] mr-[1px] my-[1px] text-fs22 text-gray_601 text-left w-[53%] xl:leading-lh44 xl:ml-[10px] xl:text-fs19">{`$12.99`}</Text>
                            </Row>
                            <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 absolute font-bold inset-x-[0] inset-y-[1px] leading-lh5000 lg:leading-lh38 lg:text-fs17 self-stretch text-fs22 text-gray_900 text-left w-[100%] xl:leading-lh44 xl:text-fs19">{`$0.80`}</Text>
                          </Stack>
                        </Stack>
                      </Row>
                      <Row className="2xl:mb-[23px] 2xl:mt-[25px] 3xl:mb-[27px] 3xl:mt-[30px] font-ptsans items-center justify-between lg:mb-[18px] lg:mt-[19px] mb-[23.300018px] mt-[25.190002px] px-[0] w-[54%] xl:mb-[20px] xl:mt-[22px]">
                        <Stack className="2xl:h-[54px] 3xl:h-[64px] h-[53.12px] lg:h-[42px] w-[44%] xl:h-[48px]">
                          <Row className="absolute bg-gray_100_a1 bottom-[1px] font-ptsans inset-x-[0] items-center justify-start rounded-radius26 self-stretch top-[0] w-[100%]">
                            <Column className="items-center justify-start rounded-radius2612 w-[34%]">
                              <Text className="2xl:mb-[13px] 2xl:mt-[16px] 3xl:mb-[15px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[10px] lg:mt-[12px] lg:text-fs14 mb-[13.119995px] mt-[16.119995px] mx-[auto] text-bluegray_800 text-fs18 text-left xl:mb-[11px] xl:mt-[14px] xl:text-fs16">{`-`}</Text>
                            </Column>
                            <Text className="2xl:mb-[12px] 2xl:mt-[16px] 3xl:mb-[15px] 3xl:ml-[24px] 3xl:mr-[86px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[9px] lg:ml-[15px] lg:mr-[56px] lg:mt-[12px] lg:text-fs14 mb-[12.669983px] ml-[20px] mr-[72px] mt-[16.570007px] text-bluegray_800 text-fs18 text-left xl:mb-[11px] xl:ml-[17px] xl:mr-[64px] xl:mt-[14px] xl:text-fs16">{`1`}</Text>
                          </Row>
                          <Column className="absolute bg-white_A700 font-ptsans items-center justify-start right-[0] rounded-radius2656 shadow-bs2 w-[34%]">
                            <Text className="2xl:mb-[13px] 2xl:mt-[16px] 3xl:mb-[16px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[10px] lg:mt-[12px] lg:text-fs14 mb-[13.549988px] mt-[16.570007px] mx-[auto] text-bluegray_800 text-fs18 text-left xl:mb-[12px] xl:mt-[14px] xl:text-fs16">{`+`}</Text>
                          </Column>
                        </Stack>
                        <Text className="2xl:mb-[11px] 2xl:mt-[13px] 3xl:mb-[13px] 3xl:mt-[16px] 3xl:text-fs26 font-bold lg:mb-[8px] lg:mt-[10px] lg:text-fs17 mb-[11.559998px] mt-[13.559998px] text-fs22 text-gray_900 text-left xl:mb-[10px] xl:mt-[12px] xl:text-fs19">{`$0.80`}</Text>
                        <Image
                          src="img_btn_1.svg"
                          className="2xl:h-[54px] 3xl:h-[64px] h-[53.12px] lg:h-[42px] object-contain w-[15%] xl:h-[48px]"
                          alt="btn"
                        />
                      </Row>
                    </Row>
                    <Line className="w-[45%] bg-bluegray_102 flex-wrap min-h-[auto]" />
                    <Row className="2xl:my-[34px] 3xl:my-[41px] items-center justify-between lg:my-[26px] my-[34.43px] px-[0] self-stretch w-[100%] xl:my-[30px]">
                      <Row className="items-end justify-between px-[0] w-[43%]">
                        <Stack className="2xl:h-[102px] 3xl:h-[123px] font-viga h-[101.61px] lg:h-[80px] w-[30%] xl:h-[91px]">
                          <Image
                            src="img_placeholder_6.png"
                            className="2xl:h-[102px] 3xl:h-[123px] absolute h-[101.61px] inset-y-[0] left-[0] lg:h-[80px] object-contain right-[1px] rounded-radius12 w-[100%] xl:h-[91px]"
                            alt="Placeholder"
                          />
                          <Text className="2xl:pr-[4px] 2xl:top-[9px] 3xl:pr-[4px] 3xl:text-fs14 3xl:top-[11px] absolute bg-amber_A200 font-normal lg:pr-[3px] lg:text-fs9 lg:top-[7px] opacity-0 pb-[1px] pr-[4.119995px] pt-[0] right-[0] rounded-bl-[80px] rounded-br-[0] rounded-tl-[80px] rounded-tr-[0] text-bluegray_800 text-fs12 text-right top-[9.36px] xl:pr-[3px] xl:text-fs10 xl:top-[8px]">{`Sale!`}</Text>
                        </Stack>
                        <Stack className="2xl:h-[82px] 2xl:mb-[4px] 2xl:mt-[16px] 3xl:h-[98px] 3xl:mb-[4px] 3xl:mt-[19px] font-viga h-[81.36px] lg:h-[64px] lg:mb-[3px] lg:mt-[12px] mb-[4.0999756px] mt-[16.150024px] w-[62%] xl:h-[73px] xl:mb-[3px] xl:mt-[14px]">
                          <Text className="3xl:text-fs28 absolute font-normal inset-x-[0] lg:text-fs18 mx-[auto] text-fs24 text-gray_900 text-left top-[0] w-[max-content] xl:text-fs21">{`Strawberry`}</Text>
                          <Stack className="2xl:h-[52px] 3xl:h-[62px] absolute bottom-[0] font-ptsans h-[51.23px] lg:h-[40px] self-stretch w-[100%] xl:h-[46px]">
                            <Row className="absolute items-center justify-start left-[0] opacity-0 w-[92%]">
                              <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 my-[1px] text-fs22 text-left text-red_A200 w-[39%] xl:leading-lh44 xl:text-fs19">{`$8.99`}</Text>
                              <Text className="2xl:leading-lh50 2xl:ml-[11px] 3xl:leading-lh60 3xl:ml-[13px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[9px] lg:text-fs17 line-through ml-[11.630005px] mr-[1px] my-[1px] text-fs22 text-gray_601 text-left w-[53%] xl:leading-lh44 xl:ml-[10px] xl:text-fs19">{`$12.99`}</Text>
                            </Row>
                            <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 absolute font-bold inset-x-[0] inset-y-[1px] leading-lh5000 lg:leading-lh38 lg:text-fs17 self-stretch text-fs22 text-gray_900 text-left w-[100%] xl:leading-lh44 xl:text-fs19">{`$1.50`}</Text>
                          </Stack>
                        </Stack>
                      </Row>
                      <Row className="2xl:mb-[23px] 2xl:mt-[25px] 3xl:mb-[27px] 3xl:mt-[30px] font-ptsans items-center justify-between lg:mb-[18px] lg:mt-[19px] mb-[23.299988px] mt-[25.190002px] px-[0] w-[54%] xl:mb-[20px] xl:mt-[22px]">
                        <Stack className="2xl:h-[54px] 3xl:h-[64px] h-[53.12px] lg:h-[42px] w-[44%] xl:h-[48px]">
                          <Row className="absolute bg-gray_100_a1 bottom-[1px] font-ptsans inset-x-[0] items-center justify-start rounded-radius26 self-stretch top-[0] w-[100%]">
                            <Column className="items-center justify-start rounded-radius2612 w-[34%]">
                              <Text className="2xl:mb-[13px] 2xl:mt-[16px] 3xl:mb-[15px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[10px] lg:mt-[12px] lg:text-fs14 mb-[13.119995px] mt-[16.119995px] mx-[auto] text-bluegray_800 text-fs18 text-left xl:mb-[11px] xl:mt-[14px] xl:text-fs16">{`-`}</Text>
                            </Column>
                            <Text className="2xl:mb-[12px] 2xl:mt-[16px] 3xl:mb-[15px] 3xl:ml-[24px] 3xl:mr-[86px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[9px] lg:ml-[15px] lg:mr-[56px] lg:mt-[12px] lg:text-fs14 mb-[12.669983px] ml-[20px] mr-[72px] mt-[16.570007px] text-bluegray_800 text-fs18 text-left xl:mb-[11px] xl:ml-[17px] xl:mr-[64px] xl:mt-[14px] xl:text-fs16">{`2`}</Text>
                          </Row>
                          <Column className="absolute bg-white_A700 font-ptsans items-center justify-start right-[0] rounded-radius2656 shadow-bs2 w-[34%]">
                            <Text className="2xl:mb-[13px] 2xl:mt-[16px] 3xl:mb-[16px] 3xl:mt-[19px] 3xl:text-fs21 font-bold lg:mb-[10px] lg:mt-[12px] lg:text-fs14 mb-[13.549988px] mt-[16.570007px] mx-[auto] text-bluegray_800 text-fs18 text-left xl:mb-[12px] xl:mt-[14px] xl:text-fs16">{`+`}</Text>
                          </Column>
                        </Stack>
                        <Text className="2xl:mb-[11px] 2xl:mt-[13px] 3xl:mb-[13px] 3xl:mt-[16px] 3xl:text-fs26 font-bold lg:mb-[8px] lg:mt-[10px] lg:text-fs17 mb-[11.559998px] mt-[13.559998px] text-fs22 text-gray_900 text-left xl:mb-[10px] xl:mt-[12px] xl:text-fs19">{`$3.00`}</Text>
                        <Image
                          src="img_btn_2.svg"
                          className="2xl:h-[54px] 3xl:h-[64px] h-[53.12px] lg:h-[42px] object-contain w-[15%] xl:h-[48px]"
                          alt="btn"
                        />
                      </Row>
                    </Row>
                  </List>
                </Column>
              </Column>
              <Row className="3xl:mt-[25px] items-end justify-between lg:mt-[16px] mt-[21px] px-[0] w-[100%] xl:mt-[18px]">
                <Column className="font-ptsans justify-start w-[32%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ptsans justify-start self-stretch w-[100%]">
                      <Image
                        src="img_infocircle.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:w-[14px] mb-[1px] object-contain w-[18px] xl:h-[17px] xl:w-[16px]"
                        alt="infocircle"
                      />
                      <Text className="3xl:ml-[14px] 3xl:text-fs16 font-bold lg:ml-[9px] lg:text-fs10 ml-[12px] mt-[1px] text-bluegray_800 text-fs14 text-left xl:ml-[10px] xl:text-fs12">{`Spend over $50 for Free Shipping`}</Text>
                    </Row>
                  </Column>
                  <Text className="3xl:mx-[36px] 3xl:text-fs16 font-bold lg:mt-[3px] lg:mx-[23px] lg:text-fs10 mt-[4px] mx-[30px] text-fs14 text-gray_900 text-left underline xl:mt-[3px] xl:mx-[26px] xl:text-fs12">{`Services & Delivery Terms`}</Text>
                </Column>
                <Row className="3xl:mt-[19px] font-viga justify-between lg:mb-[3px] lg:mt-[12px] mb-[4px] mt-[16px] px-[0] w-[22%] xl:mb-[3px] xl:mt-[14px]">
                  <Text className="3xl:text-fs16 font-normal lg:text-fs10 mb-[1px] ml-[1px] text-fs14 text-gray_900 text-right xl:text-fs12">{`Continue Shopping`}</Text>
                  <Image
                    src="img_icon_9.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                    alt="Icon"
                  />
                </Row>
              </Row>
            </Column>
            <Column className="3xl:ml-[42px] 3xl:mr-[489px] font-ptsans items-center justify-start lg:ml-[27px] lg:mr-[317px] ml-[35px] mr-[408px] w-[18%] xl:ml-[31px] xl:mr-[362px]">
              <Column className="bg-white_A700 font-ptsans justify-center rounded-radius12 self-stretch shadow-bs3 w-[100%]">
                <Text className="3xl:mt-[26px] 3xl:mx-[32px] 3xl:text-fs19 font-bold font-ptsans lg:mt-[17px] lg:mx-[21px] lg:text-fs12 mt-[22px] mx-[27px] text-bluegray_800 text-fs16 text-left xl:mt-[19px] xl:mx-[24px] xl:text-fs14">{`There are 2 Items in Your Cart`}</Text>
                <Column className="3xl:mt-[19px] font-viga items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Line className="bg-bluegray_102 h-[2px] mx-[auto] w-[83%]" />
                  <Row className="3xl:mt-[16px] justify-between lg:mt-[10px] mt-[14px] px-[0] self-stretch w-[100%] xl:mt-[12px]">
                    <Text className="3xl:ml-[38px] 3xl:text-fs33 font-normal font-viga lg:ml-[24px] lg:text-fs21 mb-[1px] ml-[32px] text-fs28 text-gray_900 text-left xl:ml-[28px] xl:text-fs24">{`Total:`}</Text>
                    <Text className="3xl:mr-[33px] 3xl:text-fs33 font-bold font-ptsans lg:mr-[21px] lg:mt-[1px] lg:text-fs21 mr-[28px] mt-[2px] text-fs28 text-gray_900 text-right xl:mr-[24px] xl:mt-[1px] xl:text-fs24">{`$3.80`}</Text>
                  </Row>
                  <Row className="justify-between lg:mt-[3px] mt-[4px] mx-[auto] px-[0] w-[83%] xl:mt-[3px]">
                    <Text className="3xl:mb-[9px] 3xl:text-fs19 font-normal font-viga lg:mb-[6px] lg:text-fs12 mb-[8px] text-fs16 text-gray_900 text-left xl:mb-[7px] xl:text-fs14">{`Shipping:`}</Text>
                    <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:text-fs14 font-bold font-ptsans leading-lh1600 lg:leading-lh12 lg:text-fs9 text-fs12 text-gray_601 text-right w-[35%] xl:leading-lh14 xl:text-fs10">
                      {
                        <>
                          {`Shipping calculated`}
                          <br />
                          {`in checkout`}
                        </>
                      }
                    </Text>
                  </Row>
                  <Line className="3xl:mt-[20px] bg-bluegray_102 h-[2px] lg:mt-[13px] mt-[17px] mx-[auto] w-[83%] xl:mt-[15px]" />
                </Column>
                <Text className="3xl:mt-[16px] 3xl:mx-[38px] 3xl:text-fs19 font-normal font-viga lg:mt-[10px] lg:mx-[24px] lg:text-fs12 mt-[14px] mx-[32px] text-fs16 text-gray_900 text-left xl:mt-[12px] xl:mx-[28px] xl:text-fs14">{`Add a note to your order:`}</Text>
                <Input
                  className="2xl:pb-[36px] 2xl:pt-[15px] 3xl:mb-[36px] 3xl:ml-[38px] 3xl:mr-[33px] 3xl:mt-[15px] 3xl:pb-[43px] 3xl:pl-[16px] 3xl:pt-[18px] 3xl:text-fs19 bg-white_A700 border border-bluegray_102 border-solid font-normal font-ptsans lg:mb-[23px] lg:ml-[24px] lg:mr-[21px] lg:mt-[10px] lg:pb-[28px] lg:pl-[10px] lg:pt-[11px] lg:text-fs12 mb-[30px] ml-[32px] mr-[28px] mt-[13px] pb-[36.375px] pl-[14px] placeholder:bg-transparent placeholder:text-gray_601 pt-[15.375px] rounded-radius12 text-fs16 text-gray_601 text-left w-[83%] xl:mb-[26px] xl:ml-[28px] xl:mr-[24px] xl:mt-[11px] xl:pb-[32px] xl:pl-[12px] xl:pt-[13px] xl:text-fs14"
                  name="messagefield"
                  placeholder={`Add your note here…`}
                ></Input>
              </Column>
              <Text className="2xl:pb-[14px] 2xl:pl-[10px] 2xl:pr-[11px] 3xl:mt-[24px] 3xl:pb-[17px] 3xl:pl-[12px] 3xl:pr-[14px] 3xl:pt-[19px] 3xl:text-fs19 bg-light_green_600 font-normal font-viga leading-lh lg:mt-[15px] lg:pb-[11px] lg:pl-[7px] lg:pr-[9px] lg:pt-[12px] lg:text-fs12 mb-[1px] mt-[20px] pb-[14.340027px] pl-[10.050049px] pr-[11.719971px] pt-[16px] rounded-radius24 self-stretch text-center text-fs16 text-white_A700 w-[100%] xl:mt-[17px] xl:pb-[12px] xl:pl-[8px] xl:pr-[10px] xl:pt-[14px] xl:text-fs14">{`Proceed to Checkout`}</Text>
            </Column>
          </Row>
          <Row className="3xl:mt-[84px] items-center justify-center lg:mt-[54px] mt-[70px] mx-[auto] w-[57%] xl:mt-[62px]">
            <Stack className="2xl:h-[334px] 3xl:h-[400px] bg-white_A700 h-[333px] lg:h-[259px] rounded-radius12 shadow-bs3 w-[66%] xl:h-[297px]">
              <Stack className="2xl:h-[334px] 3xl:h-[400px] absolute bg-white_A700 h-[333px] lg:h-[259px] right-[0] rounded-radius12 w-[63%] xl:h-[297px]">
                <Image
                  src="img_placeholdertran.png"
                  className="2xl:h-[334px] 3xl:h-[400px] absolute h-[333px] lg:h-[259px] object-cover right-[0] rounded-radius12 self-stretch w-[100%] xl:h-[297px]"
                  alt="placeholdertran"
                />
                <div className="2xl:h-[334px] 3xl:h-[400px] absolute border-bw120 border-light_green_600_2e border-solid h-[333px] lg:h-[259px] right-[0] rounded-radius1665 self-stretch w-[100%] xl:h-[297px]"></div>
              </Stack>
              <Column className="3xl:left-[56px] absolute font-viga h-[max-content] inset-y-[0] justify-start left-[47px] lg:left-[36px] my-[auto] w-[48%] xl:left-[41px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal font-viga lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-gray_900 text-left xl:mr-[8px] xl:text-fs14">{`Weekly discounts`}</Text>
                <Text className="3xl:text-fs62 font-normal font-viga lg:text-fs40 ml-[1px] text-fs52 text-left text-red_A200 xl:text-fs46">{`Green Boundle`}</Text>
                <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mr-[12px] 3xl:text-fs19 font-normal font-ptsans leading-lh2200 lg:leading-lh17 lg:mr-[7px] lg:mt-[3px] lg:text-fs12 ml-[1px] mr-[10px] mt-[4px] text-bluegray_800 text-fs16 text-left w-[91%] xl:leading-lh19 xl:mr-[8px] xl:mt-[3px] xl:text-fs14">{`Cras tincidunt lobortis feugiat vivamus. Laoreet id donec ultrices tincidunt`}</Text>
                <Button className="2xl:pb-[15px] 2xl:pt-[17px] 3xl:mr-[12px] 3xl:mt-[42px] 3xl:pb-[18px] 3xl:pt-[20px] 3xl:px-[42px] 3xl:text-fs19 bg-transparent border border-gray_900 border-solid font-normal font-viga lg:mr-[7px] lg:mt-[27px] lg:pb-[12px] lg:pt-[13px] lg:px-[27px] lg:text-fs12 mb-[1px] ml-[1px] mr-[10px] mt-[35px] pb-[15.615px] pt-[17.475px] px-[35px] rounded-radius24 text-center text-fs16 text-gray_900 w-[60%] xl:mr-[8px] xl:mt-[31px] xl:pb-[13px] xl:pt-[15px] xl:px-[31px] xl:text-fs14">{`Shop all`}</Button>
              </Column>
            </Stack>
            <Column className="3xl:ml-[42px] bg-gradient3  items-center justify-start lg:ml-[27px] ml-[35px] rounded-radius12 shadow-bs3 w-[31%] xl:ml-[31px]">
              <Stack className="2xl:h-[334px] 3xl:h-[400px] h-[333px] lg:h-[259px] rounded-radius12 w-[100%] xl:h-[297px]">
                <Image
                  src="img_imgplaceholder.png"
                  className="2xl:h-[334px] 3xl:h-[400px] absolute h-[333px] inset-[0] lg:h-[259px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[297px]"
                  alt="ImgPlaceholder"
                />
                <Column className="3xl:top-[32px] absolute font-viga inset-x-[0] items-center justify-start lg:top-[21px] mx-[auto] top-[27px] w-[84%] xl:top-[24px]">
                  <Text className="3xl:text-fs26 font-normal lg:text-fs17 mx-[auto] self-stretch text-center text-fs22 text-gray_900 xl:text-fs19">{`Own production`}</Text>
                  <Stack className="2xl:h-[85px] 3xl:h-[101px] 3xl:mt-[81px] bg-white_A700_41 h-[84px] lg:h-[66px] lg:mt-[52px] mt-[68px] mx-[auto] rounded-radius12 w-[77%] xl:h-[75px] xl:mt-[60px]">
                    <Image
                      src="img_logobig.png"
                      className="2xl:h-[79px] 3xl:h-[94px] absolute h-[78px] inset-[0] justify-center lg:h-[61px] m-[auto] object-contain rounded-radius12 w-[66%] xl:h-[70px]"
                      alt="Logobig"
                    />
                  </Stack>
                </Column>
              </Stack>
            </Column>
          </Row>
          <Column className="3xl:mt-[103px] font-viga items-center justify-start lg:mt-[66px] mt-[86px] mx-[auto] w-[28%] xl:mt-[76px]">
            <Text className="3xl:text-fs33 font-normal font-viga lg:text-fs21 mx-[auto] text-center text-fs28 text-gray_900 xl:text-fs24">{`This week's hot offers`}</Text>
            <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mt-[21px] 3xl:text-fs19 font-normal font-ptsans leading-lh2200 lg:leading-lh17 lg:mt-[14px] lg:text-fs12 mt-[18px] text-bluegray_800 text-center text-fs16 w-[100%] xl:leading-lh19 xl:mt-[16px] xl:text-fs14">{`Etiam posuere, sem eget suscipit convallis, nibh metus molestie massa, et finibus nunc purus eget elit. Nunc non velit interdum libero rutrum auctor ut a nulla. Ut ac efficitur velit`}</Text>
            <List
              className="2xl:gap-[16px] 3xl:gap-[19px] 3xl:mt-[19px] flex-wrap gap-[16.22998px] grid grid-cols-4 lg:gap-[12px] lg:mt-[12px] min-h-[auto] mt-[16px] mx-[auto] w-[49%] xl:gap-[14px] xl:mt-[14px]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 font-ptsans items-center justify-center rounded-radius8 shadow-bs9 w-[100%]">
                <Column className="2xl:mt-[9px] 3xl:mt-[10px] items-center justify-start lg:mt-[7px] mt-[9.130005px] self-stretch w-[100%] xl:mt-[8px]">
                  <Text className="3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-bluegray_800 text-center text-fs18 xl:text-fs16">{`365`}</Text>
                  <div className="2xl:h-[3px] 3xl:h-[3px] bg-light_green_600 h-[2.01px] lg:h-[2px] mx-[auto] w-[24%] xl:h-[2px]"></div>
                </Column>
                <Text className="2xl:mb-[7px] 3xl:mb-[9px] 3xl:text-fs14 font-normal lg:mb-[5px] lg:text-fs9 mb-[7.699951px] mt-[1px] mx-[auto] text-center text-fs12 text-gray_606 xl:mb-[6px] xl:text-fs10">{`day`}</Text>
              </Column>
              <Column className="bg-white_A700 font-ptsans items-center justify-center rounded-radius8 shadow-bs9 w-[100%]">
                <Column className="2xl:mt-[9px] 3xl:mt-[10px] items-center justify-start lg:mt-[7px] mt-[9.130005px] self-stretch w-[100%] xl:mt-[8px]">
                  <Text className="3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-bluegray_800 text-center text-fs18 xl:text-fs16">{`02`}</Text>
                  <div className="2xl:h-[3px] 3xl:h-[3px] bg-light_green_600 h-[2.01px] lg:h-[2px] mx-[auto] w-[24%] xl:h-[2px]"></div>
                </Column>
                <Text className="2xl:mb-[7px] 3xl:mb-[9px] 3xl:text-fs14 font-normal lg:mb-[5px] lg:text-fs9 mb-[7.699951px] mt-[1px] mx-[auto] text-center text-fs12 text-gray_606 xl:mb-[6px] xl:text-fs10">{`hour`}</Text>
              </Column>
              <Column className="bg-white_A700 font-ptsans items-center justify-center rounded-radius8 shadow-bs9 w-[100%]">
                <Column className="2xl:mt-[9px] 3xl:mt-[10px] items-center justify-start lg:mt-[7px] mt-[9.130005px] self-stretch w-[100%] xl:mt-[8px]">
                  <Text className="3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-bluegray_800 text-center text-fs18 xl:text-fs16">{`28`}</Text>
                  <div className="2xl:h-[3px] 3xl:h-[3px] bg-light_green_600 h-[2.01px] lg:h-[2px] mx-[auto] w-[24%] xl:h-[2px]"></div>
                </Column>
                <Text className="2xl:mb-[7px] 3xl:mb-[9px] 3xl:text-fs14 font-normal lg:mb-[5px] lg:text-fs9 mb-[7.699951px] mt-[1px] mx-[auto] text-center text-fs12 text-gray_606 xl:mb-[6px] xl:text-fs10">{`min`}</Text>
              </Column>
              <Column className="bg-white_A700 font-ptsans items-center justify-center rounded-radius8 shadow-bs9 w-[100%]">
                <Column className="2xl:mt-[9px] 3xl:mt-[10px] items-center justify-start lg:mt-[7px] mt-[9.130005px] self-stretch w-[100%] xl:mt-[8px]">
                  <Text className="3xl:text-fs21 font-bold lg:text-fs14 mx-[auto] text-bluegray_800 text-center text-fs18 xl:text-fs16">{`15`}</Text>
                  <div className="2xl:h-[3px] 3xl:h-[3px] bg-light_green_600 h-[2.01px] lg:h-[2px] mx-[auto] w-[24%] xl:h-[2px]"></div>
                </Column>
                <Text className="2xl:mb-[7px] 3xl:mb-[9px] 3xl:text-fs14 font-normal lg:mb-[5px] lg:text-fs9 mb-[7.699951px] mt-[1px] mx-[auto] text-center text-fs12 text-gray_606 xl:mb-[6px] xl:text-fs10">{`sec`}</Text>
              </Column>
            </List>
          </Column>
          <List
            className="2xl:gap-[34px] 3xl:gap-[41px] 3xl:mt-[38px] flex-wrap gap-[34.71997px] grid grid-cols-4 lg:gap-[27px] lg:mt-[24px] min-h-[auto] mt-[32px] mx-[auto] w-[58%] xl:gap-[30px] xl:mt-[28px]"
            orientation="horizontal"
          >
            <Column className="2xl:mb-[1px] 3xl:mb-[2px] items-center justify-start lg:mb-[1px] mb-[1.6799316px] w-[100%] xl:mb-[1px]">
              <Stack className="2xl:h-[283px] 3xl:h-[339px] font-viga h-[282px] lg:h-[220px] w-[100%] xl:h-[251px]">
                <Image
                  src="img_placeholder_7.png"
                  className="2xl:h-[283px] 3xl:h-[339px] absolute h-[282px] inset-[0] lg:h-[220px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[251px]"
                  alt="Placeholder"
                />
                <Button className="2xl:pb-[12px] 2xl:pl-[15px] 2xl:pr-[6px] 2xl:pt-[13px] 3xl:pb-[14px] 3xl:pl-[19px] 3xl:pr-[8px] 3xl:pt-[15px] 3xl:text-fs19 3xl:top-[16px] absolute bg-amber_A200 border-bw font-normal lg:pb-[9px] lg:pl-[12px] lg:pr-[5px] lg:pt-[10px] lg:text-fs12 lg:top-[10px] pb-[12.02px] pl-[15.969971px] pr-[6.920044px] pt-[13.02px] right-[1px] rounded-radius12 shadow-bs10 text-bluegray_800 text-center text-fs16 top-[14px] w-[31%] xl:pb-[10px] xl:pl-[14px] xl:pr-[6px] xl:pt-[11px] xl:text-fs14 xl:top-[12px]">{`Sale!`}</Button>
              </Stack>
              <Stack className="2xl:h-[72px] 2xl:mt-[13px] 3xl:h-[86px] 3xl:mt-[15px] font-ptsans h-[71.04px] lg:h-[56px] lg:mt-[10px] mt-[13.280029px] mx-[auto] w-[88%] xl:h-[64px] xl:mt-[11px]">
                <Row className="2xl:right-[12px] 3xl:right-[15px] absolute bottom-[0] font-ptsans items-center justify-start lg:right-[10px] right-[12.98px] w-[80%] xl:right-[11px]">
                  <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 text-fs22 text-red_A200 text-right w-[39%] xl:leading-lh44 xl:text-fs19">{`$0.90`}</Text>
                  <Text className="2xl:leading-lh50 2xl:ml-[12px] 3xl:leading-lh60 3xl:ml-[15px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[10px] lg:text-fs17 line-through ml-[12.98999px] text-fs22 text-gray_601 text-left w-[54%] xl:leading-lh44 xl:ml-[11px] xl:text-fs19">{`$1.80`}</Text>
                </Row>
                <Text className="3xl:text-fs28 absolute font-normal font-viga lg:text-fs18 self-stretch text-center text-fs24 text-gray_900 top-[0] xl:text-fs21">{`Spicy Sauce`}</Text>
              </Stack>
            </Column>
            <Column className="2xl:mb-[1px] 3xl:mb-[2px] items-center justify-start lg:mb-[1px] mb-[1.6799316px] w-[100%] xl:mb-[1px]">
              <Stack className="2xl:h-[283px] 3xl:h-[339px] font-viga h-[282px] lg:h-[220px] w-[100%] xl:h-[251px]">
                <Image
                  src="img_placeholder_7.png"
                  className="2xl:h-[283px] 3xl:h-[339px] absolute h-[282px] inset-[0] lg:h-[220px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[251px]"
                  alt="Placeholder"
                />
                <Button className="2xl:pb-[12px] 2xl:pl-[15px] 2xl:pr-[6px] 2xl:pt-[13px] 3xl:pb-[14px] 3xl:pl-[19px] 3xl:pr-[8px] 3xl:pt-[15px] 3xl:text-fs19 3xl:top-[16px] absolute bg-amber_A200 border-bw font-normal lg:pb-[9px] lg:pl-[12px] lg:pr-[5px] lg:pt-[10px] lg:text-fs12 lg:top-[10px] pb-[12.02px] pl-[15.969971px] pr-[6.920044px] pt-[13.02px] right-[1px] rounded-radius12 shadow-bs10 text-bluegray_800 text-center text-fs16 top-[14px] w-[31%] xl:pb-[10px] xl:pl-[14px] xl:pr-[6px] xl:pt-[11px] xl:text-fs14 xl:top-[12px]">{`Sale!`}</Button>
              </Stack>
              <Stack className="2xl:h-[72px] 2xl:mt-[13px] 3xl:h-[86px] 3xl:mt-[15px] font-ptsans h-[71.04px] lg:h-[56px] lg:mt-[10px] mt-[13.280029px] mx-[auto] w-[88%] xl:h-[64px] xl:mt-[11px]">
                <Row className="2xl:right-[12px] 3xl:right-[15px] absolute bottom-[0] font-ptsans items-center justify-start lg:right-[10px] right-[12.98px] w-[80%] xl:right-[11px]">
                  <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 text-fs22 text-red_A200 text-right w-[39%] xl:leading-lh44 xl:text-fs19">{`$8.99`}</Text>
                  <Text className="2xl:leading-lh50 2xl:ml-[12px] 3xl:leading-lh60 3xl:ml-[15px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[10px] lg:text-fs17 line-through ml-[12.989929px] mr-[1px] text-fs22 text-gray_601 text-left w-[54%] xl:leading-lh44 xl:ml-[11px] xl:text-fs19">{`$12.99`}</Text>
                </Row>
                <Text className="3xl:text-fs28 absolute font-normal font-viga lg:text-fs18 self-stretch text-center text-fs24 text-gray_900 top-[0] xl:text-fs21">{`Pepper Ketchup`}</Text>
              </Stack>
            </Column>
            <Column className="2xl:mb-[1px] 3xl:mb-[2px] items-center justify-start lg:mb-[1px] mb-[1.6799316px] w-[100%] xl:mb-[1px]">
              <Stack className="2xl:h-[283px] 3xl:h-[339px] font-viga h-[282px] lg:h-[220px] w-[100%] xl:h-[251px]">
                <Image
                  src="img_placeholder_7.png"
                  className="2xl:h-[283px] 3xl:h-[339px] absolute h-[282px] inset-[0] lg:h-[220px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[251px]"
                  alt="Placeholder"
                />
                <Button className="2xl:pb-[12px] 2xl:pl-[15px] 2xl:pr-[6px] 2xl:pt-[13px] 3xl:pb-[14px] 3xl:pl-[19px] 3xl:pr-[8px] 3xl:pt-[15px] 3xl:text-fs19 3xl:top-[16px] absolute bg-amber_A200 border-bw font-normal lg:pb-[9px] lg:pl-[12px] lg:pr-[5px] lg:pt-[10px] lg:text-fs12 lg:top-[10px] pb-[12.02px] pl-[15.969971px] pr-[6.920044px] pt-[13.02px] right-[1px] rounded-radius12 shadow-bs10 text-bluegray_800 text-center text-fs16 top-[14px] w-[31%] xl:pb-[10px] xl:pl-[14px] xl:pr-[6px] xl:pt-[11px] xl:text-fs14 xl:top-[12px]">{`Sale!`}</Button>
              </Stack>
              <Stack className="2xl:h-[72px] 2xl:mt-[13px] 3xl:h-[86px] 3xl:mt-[15px] font-ptsans h-[71.04px] lg:h-[56px] lg:mt-[10px] mt-[13.280029px] mx-[auto] w-[88%] xl:h-[64px] xl:mt-[11px]">
                <Row className="2xl:right-[12px] 3xl:right-[15px] absolute bottom-[0] font-ptsans items-center justify-start lg:right-[10px] right-[12.98px] w-[80%] xl:right-[11px]">
                  <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 text-fs22 text-red_A200 text-right w-[39%] xl:leading-lh44 xl:text-fs19">{`$4.99`}</Text>
                  <Text className="2xl:leading-lh50 2xl:ml-[12px] 3xl:leading-lh60 3xl:ml-[15px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[10px] lg:text-fs17 line-through ml-[12.98999px] text-fs22 text-gray_601 text-left w-[54%] xl:leading-lh44 xl:ml-[11px] xl:text-fs19">{`$10.30`}</Text>
                </Row>
                <Text className="3xl:text-fs28 absolute font-normal font-viga lg:text-fs18 self-stretch text-center text-fs24 text-gray_900 top-[0] xl:text-fs21">{`Balsamic Vinegar`}</Text>
              </Stack>
            </Column>
            <Column className="2xl:mb-[1px] 3xl:mb-[2px] items-center justify-start lg:mb-[1px] mb-[1.6799316px] w-[100%] xl:mb-[1px]">
              <Stack className="2xl:h-[283px] 3xl:h-[339px] font-viga h-[282px] lg:h-[220px] w-[100%] xl:h-[251px]">
                <Image
                  src="img_placeholder_7.png"
                  className="2xl:h-[283px] 3xl:h-[339px] absolute h-[282px] inset-[0] lg:h-[220px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[251px]"
                  alt="Placeholder"
                />
                <Button className="2xl:pb-[12px] 2xl:pl-[15px] 2xl:pr-[6px] 2xl:pt-[13px] 3xl:pb-[14px] 3xl:pl-[19px] 3xl:pr-[8px] 3xl:pt-[15px] 3xl:text-fs19 3xl:top-[16px] absolute bg-amber_A200 border-bw font-normal lg:pb-[9px] lg:pl-[12px] lg:pr-[5px] lg:pt-[10px] lg:text-fs12 lg:top-[10px] pb-[12.02px] pl-[15.969971px] pr-[6.920044px] pt-[13.02px] right-[1px] rounded-radius12 shadow-bs10 text-bluegray_800 text-center text-fs16 top-[14px] w-[31%] xl:pb-[10px] xl:pl-[14px] xl:pr-[6px] xl:pt-[11px] xl:text-fs14 xl:top-[12px]">{`Sale!`}</Button>
              </Stack>
              <Stack className="2xl:h-[72px] 2xl:mt-[13px] 3xl:h-[86px] 3xl:mt-[15px] font-ptsans h-[71.04px] lg:h-[56px] lg:mt-[10px] mt-[13.280029px] mx-[auto] w-[88%] xl:h-[64px] xl:mt-[11px]">
                <Row className="2xl:right-[12px] 3xl:right-[15px] absolute bottom-[0] font-ptsans items-center justify-start lg:right-[10px] right-[12.98px] w-[80%] xl:right-[11px]">
                  <Text className="2xl:leading-lh50 3xl:leading-lh60 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:text-fs17 text-fs22 text-red_A200 text-right w-[39%] xl:leading-lh44 xl:text-fs19">{`$0.60`}</Text>
                  <Text className="2xl:leading-lh50 2xl:ml-[12px] 3xl:leading-lh60 3xl:ml-[15px] 3xl:text-fs26 font-bold leading-lh5000 lg:leading-lh38 lg:ml-[10px] lg:text-fs17 line-through ml-[12.98999px] text-fs22 text-gray_601 text-left w-[54%] xl:leading-lh44 xl:ml-[11px] xl:text-fs19">{`$1.20`}</Text>
                </Row>
                <Text className="3xl:text-fs28 absolute font-normal font-viga lg:text-fs18 self-stretch text-center text-fs24 text-gray_900 top-[0] xl:text-fs21">{`Set of sauces`}</Text>
              </Stack>
            </Column>
          </List>
          <Stack className="2xl:h-[14px] 3xl:h-[16px] 3xl:mt-[28px] h-[13px] lg:h-[11px] lg:mt-[18px] mt-[24px] mx-[auto] w-[5%] xl:h-[12px] xl:mt-[21px]">
            <Switch
              onColor="#ebebeb70"
              offColor=""
              onHandleColor="#b8bdc4"
              offHandleColor=""
              checked={true}
              className="absolute inset-y-[0] left-[3px] lg:left-[2px] right-[0] w-[97%] xl:left-[2px]"
            />
            <div className="2xl:h-[14px] 3xl:h-[16px] 3xl:w-[15px] absolute bg-bluegray_200 h-[13px] left-[0] lg:h-[11px] lg:w-[10px] rounded-radius50 w-[13px] xl:h-[12px] xl:w-[11px]"></div>
          </Stack>
          <div className="3xl:mt-[103px] lg:mt-[66px] mt-[86px] self-stretch w-[100%] xl:mt-[76px]">
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
                        src="img_socialmedia_2.svg"
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

export default ShoppingCartPage;
