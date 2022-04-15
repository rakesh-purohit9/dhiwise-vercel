import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { List } from "components/List";
import { CheckBox } from "components/CheckBox";
import { Radio } from "components/Radio";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const CarReservationPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-lato justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-gradient14  font-lato justify-start self-stretch shadow-bs30 w-[100%]">
                <Row className="3xl:mb-[13px] 3xl:ml-[488px] 3xl:mt-[15px] justify-center lg:mb-[8px] lg:ml-[316px] lg:mt-[10px] mb-[11px] ml-[407px] mt-[13px] w-[10%] xl:mb-[9px] xl:ml-[362px] xl:mt-[11px]">
                  <Image
                    src="img_envelope_4.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mt-[1px] lg:w-[10px] mt-[2px] object-contain w-[14px] xl:h-[13px] xl:mt-[1px] xl:w-[12px]"
                    alt="envelope"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs16 font-normal lg:ml-[3px] lg:text-fs10 ml-[5px] text-fs14 text-gray_101 text-left xl:ml-[4px] xl:text-fs12">{`rotorsmail@email.com`}</Text>
                </Row>
                <Row className="3xl:mb-[13px] 3xl:mt-[15px] justify-center lg:mb-[8px] lg:ml-[1px] lg:mt-[10px] mb-[11px] ml-[2px] mt-[13px] w-[10%] xl:mb-[9px] xl:ml-[1px] xl:mt-[11px]">
                  <Image
                    src="img_phone_4.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mt-[1px] lg:w-[10px] mt-[2px] object-contain w-[14px] xl:h-[13px] xl:mt-[1px] xl:w-[12px]"
                    alt="phone"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs16 font-normal lg:ml-[3px] lg:text-fs10 ml-[5px] text-fs14 text-gray_101 text-left xl:ml-[4px] xl:text-fs12">{`+1-202-555-0156`}</Text>
                </Row>
                <Image
                  src="img_rightside_1.svg"
                  className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[14px] 3xl:ml-[702px] 3xl:mr-[491px] 3xl:mt-[16px] h-[14px] lg:h-[11px] lg:mb-[9px] lg:ml-[455px] lg:mr-[318px] lg:mt-[10px] mb-[12px] ml-[585px] mr-[409px] mt-[14px] object-contain w-[7%] xl:h-[13px] xl:mb-[10px] xl:ml-[520px] xl:mr-[363px] xl:mt-[12px]"
                  alt="rightside"
                />
              </Row>
              <Column className="bg-gray_900_5a1 justify-start self-stretch w-[100%]">
                <Column className="items-end self-stretch w-[100%]"></Column>
                <Column className="3xl:mb-[27px] 3xl:mt-[14px] items-center lg:mb-[17px] lg:mt-[9px] mb-[23px] mt-[12px] self-stretch w-[100%] xl:mb-[20px] xl:mt-[10px]">
                  <Row className="font-lato items-center justify-end self-stretch w-[100%]">
                    <Image
                      src="img_logomain.png"
                      className="2xl:h-[35px] 2xl:ml-[408px] 3xl:h-[41px] 3xl:ml-[490px] h-[34px] lg:h-[27px] lg:ml-[317px] lg:mt-[2px] ml-[408.11px] mt-[3px] object-contain w-[1%] xl:h-[31px] xl:ml-[363px] xl:mt-[2px]"
                      alt="LogoMain"
                    />
                    <Text className="2xl:ml-[5px] 3xl:ml-[6px] 3xl:mt-[8px] 3xl:text-fs27 font-bold lg:mb-[3px] lg:ml-[3px] lg:mt-[5px] lg:text-fs17 mb-[4px] ml-[5.100006px] mt-[7px] text-fs23 text-left text-white_A700 uppercase xl:mb-[3px] xl:ml-[4px] xl:mt-[6px] xl:text-fs20">{`Rotors`}</Text>
                    <Row className="3xl:mb-[8px] 3xl:ml-[278px] 3xl:mt-[12px] items-center justify-center lg:mb-[5px] lg:ml-[180px] lg:mt-[7px] mb-[7px] ml-[232px] mt-[10px] w-[25%] xl:mb-[6px] xl:ml-[206px] xl:mt-[8px]">
                      <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
                      <Text className="3xl:ml-[37px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[31px] text-fs16 text-left text-white_A700 xl:ml-[27px] xl:text-fs14">{`Our Cars`}</Text>
                      <Text className="3xl:ml-[39px] 3xl:text-fs19 font-normal lg:ml-[25px] lg:text-fs12 ml-[33px] text-fs16 text-left text-white_A700 xl:ml-[29px] xl:text-fs14">{`Reviews`}</Text>
                      <Text className="3xl:ml-[39px] 3xl:text-fs19 font-normal lg:ml-[25px] lg:text-fs12 ml-[33px] text-fs16 text-left text-white_A700 xl:ml-[29px] xl:text-fs14">{`About`}</Text>
                      <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-white_A700 xl:ml-[28px] xl:text-fs14">{`Pages`}</Text>
                      <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-white_A700 xl:ml-[28px] xl:text-fs14">{`Contact Us`}</Text>
                    </Row>
                    <Image
                      src="img_search_10.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[10px] 3xl:ml-[102px] 3xl:mt-[14px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[7px] lg:ml-[66px] lg:mt-[9px] lg:w-[12px] mb-[9px] ml-[85px] mt-[12px] object-contain w-[16px] xl:h-[15px] xl:mb-[8px] xl:ml-[75px] xl:mt-[10px] xl:w-[14px]"
                      alt="search"
                    />
                    <Stack className="2xl:h-[32px] 3xl:h-[38px] 3xl:mb-[7px] 3xl:ml-[34px] h-[31px] lg:h-[25px] lg:mb-[4px] lg:ml-[22px] mb-[6px] ml-[29px] w-[2%] xl:h-[28px] xl:mb-[5px] xl:ml-[25px]">
                      <Image
                        src="img_shoppingcart_2.svg"
                        className="2xl:h-[21px] 3xl:h-[25px] absolute bottom-[1px] h-[20px] left-[0] lg:h-[16px] object-contain w-[70%] xl:h-[18px]"
                        alt="shoppingcart"
                      />
                      <Column className="absolute bg-red_A700 font-lato items-center justify-start right-[0] rounded-radius50 shadow-bs31 top-[0] w-[61%]">
                        <Text className="3xl:text-fs12 font-bold lg:my-[3px] lg:text-fs7 mx-[auto] my-[4px] text-fs10 text-left text-white_A700 xl:my-[3px] xl:text-fs8">{`01`}</Text>
                      </Column>
                    </Stack>
                    <Image
                      src="img_user.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[10px] 3xl:ml-[14px] 3xl:mt-[14px] h-[16px] lg:h-[13px] lg:mb-[7px] lg:ml-[9px] lg:mt-[9px] mb-[9px] ml-[12px] mt-[12px] object-contain w-[1%] xl:h-[15px] xl:mb-[8px] xl:ml-[10px] xl:mt-[10px]"
                      alt="User"
                    />
                    <Image
                      src="img_alignright.svg"
                      className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[9px] 3xl:ml-[36px] 3xl:mr-[489px] 3xl:mt-[13px] h-[18px] lg:h-[14px] lg:mb-[6px] lg:ml-[23px] lg:mr-[317px] lg:mt-[8px] mb-[8px] ml-[30px] mr-[408px] mt-[11px] object-contain w-[1%] xl:h-[17px] xl:mb-[7px] xl:ml-[26px] xl:mr-[362px] xl:mt-[9px]"
                      alt="alignright"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </div>
          <Column className="bg-gradient15  font-goldman items-center justify-start self-stretch w-[100%]">
            <Text className="3xl:my-[76px] 3xl:text-fs57 font-normal lg:my-[49px] lg:text-fs37 mx-[auto] my-[64px] text-center text-fs48 text-white_A700 xl:my-[56px] xl:text-fs42">{`Reservation`}</Text>
          </Column>
        </Column>
        <Text className="3xl:pb-[10px] 3xl:pl-[42px] 3xl:pt-[9px] 3xl:text-fs16 bg-gray_101 font-normal leading-lh lg:pb-[7px] lg:pl-[27px] lg:pt-[6px] lg:text-fs10 pb-[9px] pl-[35px] pt-[8px] self-stretch text-bluegray_500 text-fs14 text-left w-[100%] xl:pb-[8px] xl:pl-[31px] xl:pt-[7px] xl:text-fs12">{`Home / Our Cars/ Car Detail/Resertvation`}</Text>
        <Column className="3xl:mt-[117px] items-center lg:mt-[76px] mt-[98px] self-stretch w-[100%] xl:mt-[87px]">
          <Row className="justify-center self-stretch w-[100%]">
            <Column className="3xl:mb-[942px] 3xl:ml-[488px] bg-white_A700 font-goldman justify-center lg:mb-[610px] lg:ml-[316px] mb-[785px] ml-[407px] rounded-radius4 shadow-bs35 w-[18%] xl:mb-[698px] xl:ml-[362px]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2020 Por 618 Spyder Hybrid`}</Text>
              <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                <Stack className="2xl:h-[261px] 3xl:h-[313px] h-[260px] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]">
                  <div className="2xl:h-[261px] 3xl:h-[313px] absolute bg-gradient16  h-[260px] inset-[0] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]"></div>
                  <Column className="3xl:bottom-[12px] 3xl:left-[14px] absolute bottom-[10px] justify-start left-[12px] lg:bottom-[7px] lg:left-[9px] w-[83%] xl:bottom-[8px] xl:left-[10px]">
                    <Column className="items-end self-stretch w-[100%]">
                      <Row className="3xl:mx-[67px] font-lato justify-end lg:mx-[43px] mx-[56px] w-[48%] xl:mx-[49px]">
                        <Image
                          src="img_envelope_5.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:mt-[3px] lg:w-[12px] mb-[2px] mt-[4px] object-contain w-[16px] xl:h-[15px] xl:mb-[1px] xl:mt-[3px] xl:w-[14px]"
                          alt="envelope"
                        />
                        <Text className="3xl:ml-[12px] 3xl:text-fs21 font-bold lg:ml-[7px] lg:text-fs14 ml-[10px] text-center text-fs18 text-white_A700 xl:ml-[8px] xl:text-fs16">{`Save for Later`}</Text>
                      </Row>
                      <Row className="3xl:ml-[12px] 3xl:mt-[30px] bg-red_A700 font-goldman items-center justify-end lg:ml-[7px] lg:mt-[19px] ml-[10px] mt-[25px] rounded-radius4 shadow-bs27 w-[88%] xl:ml-[8px] xl:mt-[22px]">
                        <div className="2xl:h-[26px] 3xl:h-[31px] 3xl:mt-[39px] bg-black_900_1 h-[25px] lg:h-[20px] lg:mb-[1px] lg:ml-[1px] lg:mt-[25px] mb-[2px] ml-[2px] mt-[33px] rounded-radius135 w-[8%] xl:h-[23px] xl:mb-[1px] xl:ml-[1px] xl:mt-[29px]"></div>
                        <Text className="2xl:ml-[9px] 3xl:mb-[24px] 3xl:ml-[11px] 3xl:mt-[25px] 3xl:text-fs19 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[16px] lg:text-fs12 mb-[20px] ml-[9.350006px] mt-[21px] text-fs16 text-left text-white_A700 uppercase xl:mb-[17px] xl:ml-[8px] xl:mt-[18px] xl:text-fs14">{`Book a Car`}</Text>
                        <Image
                          src="img_path_3.svg"
                          className="2xl:h-[14px] 2xl:ml-[24px] 2xl:mr-[32px] 3xl:h-[16px] 3xl:mb-[27px] 3xl:ml-[29px] 3xl:mr-[38px] 3xl:mt-[28px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[19px] lg:mr-[25px] lg:mt-[18px] mb-[23px] ml-[24.450012px] mr-[32.350037px] mt-[24px] object-contain w-[19%] xl:h-[12px] xl:mb-[20px] xl:ml-[21px] xl:mr-[28px] xl:mt-[21px]"
                          alt="Path"
                        />
                      </Row>
                    </Column>
                    <Column className="3xl:mt-[31px] lg:mt-[20px] mt-[26px] self-stretch w-[100%] xl:mt-[23px]">
                      <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] mr-[10px] w-[56%] xl:h-[31px] xl:mr-[8px]">
                        <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 230/Day`}</Button>
                        <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                          <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 430/Day`}</Text>
                          <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$ 230/Day`}</Text>
                        </Row>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
                <Row className="font-lato items-center justify-between mx-[auto] px-[0] w-[88%]">
                  <Row className="items-center justify-between px-[0] w-[77%]">
                    <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Sports`}</Text>
                    <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                    <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Auto`}</Text>
                    <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                    <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`2 Passengers`}</Text>
                    <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  </Row>
                  <Text className="3xl:mr-[7px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:mr-[4px] lg:my-[10px] lg:text-fs10 mr-[6px] my-[13px] text-bluegray_910 text-center text-fs14 xl:mr-[5px] xl:my-[11px] xl:text-fs12">{`Hybrid`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="3xl:ml-[40px] 3xl:mr-[489px] items-center justify-start lg:ml-[26px] lg:mr-[317px] ml-[34px] mr-[408px] mt-[1px] w-[38%] xl:ml-[30px] xl:mr-[362px]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="2xl:my-[18px] 3xl:my-[22px] items-center justify-between lg:my-[14px] my-[18.5px] px-[0] self-stretch w-[100%] xl:my-[16px]">
                  <Column className="font-lato justify-start w-[45%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_910 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Pick Up Location:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_mapmarkeralt_2.svg"
                        className="absolute top-[20.375px] bottom-[12.375px] right-[19px] border-bw bg-transparent lg:top-[15px] lg:bottom-[9px] lg:right-[14px] xl:top-[18px] xl:bottom-[11px] xl:right-[16px] 2xl:top-[20px] 2xl:bottom-[12px] 3xl:top-[24px] 3xl:bottom-[14px] 3xl:right-[22px]"
                        alt="map-marker-alt"
                      />
                      <Button className="2xl:pb-[12px] 2xl:pt-[20px] 3xl:pb-[14px] 3xl:pl-[21px] 3xl:pr-[49px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[9px] lg:pl-[14px] lg:pr-[31px] lg:pt-[15px] lg:text-fs12 pb-[12.375px] pl-[18px] pr-[41px] pt-[20.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[11px] xl:pl-[16px] xl:pr-[36px] xl:pt-[18px] xl:text-fs14">{`86 Albert Road, London, N51 4VK`}</Button>
                    </div>
                  </Column>
                  <Column className="font-lato justify-start w-[25%]">
                    <Text className="3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-bluegray_910 text-fs18 text-left xl:text-fs16">{`Pick Up Date:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_calendaralt_1.svg"
                        className="absolute top-[20.375px] bottom-[18.375px] right-[20px] border-bw bg-transparent lg:top-[15px] lg:bottom-[14px] lg:right-[15px] xl:top-[18px] xl:bottom-[16px] xl:right-[17px] 2xl:top-[20px] 2xl:bottom-[18px] 3xl:top-[24px] 3xl:bottom-[22px] 3xl:right-[24px]"
                        alt="calendar-alt"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[20px] 3xl:pb-[22px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[14px] lg:pl-[14px] lg:pr-[34px] lg:pt-[15px] lg:text-fs12 pb-[18.375px] pl-[18px] pr-[44px] pt-[20.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[16px] xl:pl-[16px] xl:pr-[39px] xl:pt-[18px] xl:text-fs14">{`02/12/20`}</Button>
                    </div>
                  </Column>
                  <Column className="font-lato justify-start w-[25%]">
                    <Text className="3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-bluegray_910 text-fs18 text-left xl:text-fs16">{`Time:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_clock_3.svg"
                        className="absolute top-[20.375px] bottom-[18.375px] right-[18px] border-bw bg-transparent lg:top-[15px] lg:bottom-[14px] lg:right-[14px] xl:top-[18px] xl:bottom-[16px] xl:right-[16px] 2xl:top-[20px] 2xl:bottom-[18px] 3xl:top-[24px] 3xl:bottom-[22px] 3xl:right-[21px]"
                        alt="clock"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[20px] 3xl:pb-[22px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[14px] lg:pl-[14px] lg:pr-[34px] lg:pt-[15px] lg:text-fs12 pb-[18.375px] pl-[18px] pr-[44px] pt-[20.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[16px] xl:pl-[16px] xl:pr-[39px] xl:pt-[18px] xl:text-fs14">{`10:30 am`}</Button>
                    </div>
                  </Column>
                </Row>
                <Line className="w-[50%] bg-bluegray_103 flex-wrap min-h-[auto]" />
                <Row className="2xl:my-[18px] 3xl:my-[22px] items-center justify-between lg:my-[14px] my-[18.5px] px-[0] self-stretch w-[100%] xl:my-[16px]">
                  <Column className="font-lato justify-start w-[45%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_910 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Return Car Location:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_mapmarkeralt_2.svg"
                        className="absolute top-[21px] bottom-[13px] right-[18px] border-bw bg-transparent lg:top-[16px] lg:bottom-[10px] lg:right-[14px] xl:top-[18px] xl:bottom-[11px] xl:right-[16px] 3xl:top-[25px] 3xl:bottom-[15px] 3xl:right-[21px]"
                        alt="map-marker-alt"
                      />
                      <Button className="3xl:pb-[15px] 3xl:pl-[21px] 3xl:pr-[48px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[10px] lg:pl-[14px] lg:pr-[31px] lg:pt-[16px] lg:text-fs12 pb-[13px] pl-[18px] pr-[40px] pt-[21px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[11px] xl:pl-[16px] xl:pr-[35px] xl:pt-[18px] xl:text-fs14">{`Heathrow Airport, Nelson Road …`}</Button>
                    </div>
                  </Column>
                  <Column className="font-lato justify-start w-[25%]">
                    <Text className="3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-bluegray_910 text-fs18 text-left xl:text-fs16">{`Return Date:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_calendaralt_1.svg"
                        className="absolute top-[20.375px] bottom-[18.375px] right-[20px] border-bw bg-transparent lg:top-[15px] lg:bottom-[14px] lg:right-[15px] xl:top-[18px] xl:bottom-[16px] xl:right-[17px] 2xl:top-[20px] 2xl:bottom-[18px] 3xl:top-[24px] 3xl:bottom-[22px] 3xl:right-[24px]"
                        alt="calendar-alt"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[20px] 3xl:pb-[22px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[14px] lg:pl-[14px] lg:pr-[34px] lg:pt-[15px] lg:text-fs12 pb-[18.375px] pl-[18px] pr-[44px] pt-[20.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[16px] xl:pl-[16px] xl:pr-[39px] xl:pt-[18px] xl:text-fs14">{`22/12/20`}</Button>
                    </div>
                  </Column>
                  <Column className="font-lato justify-start w-[25%]">
                    <Text className="3xl:text-fs21 font-bold lg:text-fs14 self-stretch text-bluegray_910 text-fs18 text-left xl:text-fs16">{`Time:`}</Text>
                    <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                      <Image
                        src="img_clock_3.svg"
                        className="absolute top-[20.375px] bottom-[18.375px] right-[18px] border-bw bg-transparent lg:top-[15px] lg:bottom-[14px] lg:right-[14px] xl:top-[18px] xl:bottom-[16px] xl:right-[16px] 2xl:top-[20px] 2xl:bottom-[18px] 3xl:top-[24px] 3xl:bottom-[22px] 3xl:right-[21px]"
                        alt="clock"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[20px] 3xl:pb-[22px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[14px] lg:pl-[14px] lg:pr-[34px] lg:pt-[15px] lg:text-fs12 pb-[18.375px] pl-[18px] pr-[44px] pt-[20.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[16px] xl:pl-[16px] xl:pr-[39px] xl:pt-[18px] xl:text-fs14">{`08:00 am`}</Button>
                    </div>
                  </Column>
                </Row>
              </List>
              <Column className="3xl:mt-[93px] font-lato justify-start lg:mt-[60px] mt-[78px] self-stretch w-[100%] xl:mt-[69px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_910 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Your Offer Includes:`}</Text>
                <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Row className="font-lato items-center justify-start self-stretch w-[100%]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-white_A700 border border-bluegray_500 border-solid h-[32px] lg:h-[25px] lg:w-[24px] ml-[1px] rounded-radius4 w-[32px] xl:h-[29px] xl:w-[28px]">
                      <Image
                        src="img_check.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] absolute h-[18px] inset-[0] justify-center lg:h-[14px] lg:w-[14px] m-[auto] object-contain w-[18px] xl:h-[17px] xl:w-[16px]"
                        alt="Check"
                      />
                    </Stack>
                    <Text className="3xl:mb-[8px] 3xl:ml-[13px] 3xl:mt-[7px] 3xl:text-fs19 font-bold lg:mb-[5px] lg:ml-[8px] lg:mt-[4px] lg:text-fs12 mb-[7px] ml-[11px] mt-[6px] text-bluegray_910 text-fs16 text-left xl:mb-[6px] xl:ml-[9px] xl:mt-[5px] xl:text-fs14">{`Registration Free/ Road Tax`}</Text>
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[124px] 3xl:w-[38px] bg-white_A700 border border-bluegray_500 border-solid h-[32px] lg:h-[25px] lg:ml-[80px] lg:w-[24px] ml-[104px] rounded-radius4 w-[32px] xl:h-[29px] xl:ml-[92px] xl:w-[28px]">
                      <Image
                        src="img_check.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] absolute h-[18px] inset-[0] justify-center lg:h-[14px] lg:w-[14px] m-[auto] object-contain w-[18px] xl:h-[17px] xl:w-[16px]"
                        alt="Check"
                      />
                    </Stack>
                    <Text className="3xl:mb-[8px] 3xl:ml-[13px] 3xl:mr-[196px] 3xl:mt-[7px] 3xl:text-fs19 font-bold lg:mb-[5px] lg:ml-[8px] lg:mr-[127px] lg:mt-[4px] lg:text-fs12 mb-[7px] ml-[11px] mr-[164px] mt-[6px] text-bluegray_910 text-fs16 text-left xl:mb-[6px] xl:ml-[9px] xl:mr-[145px] xl:mt-[5px] xl:text-fs14">{`Excess/Security Deposit`}</Text>
                  </Row>
                </Column>
                <List
                  className="3xl:mr-[12px] 3xl:mt-[21px] flex-wrap gap-[0] lg:mr-[7px] lg:mt-[14px] min-h-[auto] ml-[1px] mr-[10px] mt-[18px] w-[76%] xl:mr-[8px] xl:mt-[16px]"
                  orientation="vertical"
                >
                  <Row className="3xl:mr-[25px] 3xl:my-[10px] font-lato items-center justify-start lg:mr-[16px] lg:my-[7px] mr-[21px] my-[9px] w-[96%] xl:mr-[18px] xl:my-[8px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-white_A700 border border-bluegray_500 border-solid h-[32px] lg:h-[25px] lg:w-[24px] rounded-radius4 w-[32px] xl:h-[29px] xl:w-[28px]">
                      <Image
                        src="img_check.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] absolute h-[18px] inset-[0] justify-center lg:h-[14px] lg:w-[14px] m-[auto] object-contain w-[18px] xl:h-[17px] xl:w-[16px]"
                        alt="Check"
                      />
                    </Stack>
                    <Text className="3xl:mb-[8px] 3xl:ml-[13px] 3xl:mt-[7px] 3xl:text-fs19 font-bold lg:mb-[5px] lg:ml-[8px] lg:mt-[4px] lg:text-fs12 mb-[7px] ml-[11px] mt-[6px] text-bluegray_910 text-fs16 text-left xl:mb-[6px] xl:ml-[9px] xl:mt-[5px] xl:text-fs14">{`Fully Comprehensive Insurance`}</Text>
                    <CheckBox
                      className="3xl:ml-[93px] 3xl:text-fs19 font-bold lg:ml-[60px] lg:text-fs12 ml-[78px] text-bluegray_500 text-fs16 text-left w-[35%] xl:ml-[69px] xl:text-fs14"
                      inputClassName="bg-white_A700 border border-bluegray_500_53 border-solid rounded-radius4 mr-[5px]"
                      name="Group559"
                      label={`Baby Seat: $23/Day`}
                    ></CheckBox>
                  </Row>
                  <Row className="3xl:my-[10px] font-lato items-center justify-start lg:my-[7px] my-[9px] self-stretch w-[100%] xl:my-[8px]">
                    <Stack className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-white_A700 border border-bluegray_500 border-solid h-[32px] lg:h-[25px] lg:w-[24px] rounded-radius4 w-[32px] xl:h-[29px] xl:w-[28px]">
                      <Image
                        src="img_check.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] absolute h-[18px] inset-[0] justify-center lg:h-[14px] lg:w-[14px] m-[auto] object-contain w-[18px] xl:h-[17px] xl:w-[16px]"
                        alt="Check"
                      />
                    </Stack>
                    <Text className="3xl:mb-[8px] 3xl:ml-[13px] 3xl:mt-[7px] 3xl:text-fs19 font-bold lg:mb-[5px] lg:ml-[8px] lg:mt-[4px] lg:text-fs12 mb-[7px] ml-[11px] mt-[6px] text-bluegray_910 text-fs16 text-left xl:mb-[6px] xl:ml-[9px] xl:mt-[5px] xl:text-fs14">{`Unlimited Mileage`}</Text>
                    <CheckBox
                      className="3xl:ml-[204px] 3xl:text-fs19 font-bold lg:ml-[132px] lg:text-fs12 ml-[170px] text-bluegray_500 text-fs16 text-left w-[37%] xl:ml-[151px] xl:text-fs14"
                      inputClassName="bg-white_A700 border border-bluegray_500_53 border-solid rounded-radius4 mr-[5px]"
                      name="Group560"
                      label={`Breakdown Assistance`}
                    ></CheckBox>
                  </Row>
                </List>
              </Column>
              <Column className="3xl:mt-[105px] font-lato justify-start lg:mt-[68px] mt-[88px] self-stretch w-[100%] xl:mt-[78px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_910 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Customer Details:`}</Text>
                <Column className="3xl:mt-[26px] items-center lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                  <Row className="3xl:gap-[25px] 3xl:pr-[709px] font-lato gap-[21px] grid grid-cols-2 items-center justify-start lg:gap-[16px] lg:pr-[459px] pr-[591px] self-stretch w-[100%] xl:gap-[18px] xl:pr-[525px]">
                    <Radio
                      className="3xl:text-fs21 font-bold lg:text-fs14 text-bluegray_910 text-fs18 text-left w-[100%] xl:text-fs16"
                      inputClassName="bg-white_A700 border border-bluegray_500_53 border-solid w-[100%] mr-[5px]"
                      name="Group556"
                      checked={false}
                      label={`Mr`}
                      value={`Mr`}
                    ></Radio>
                    <Radio
                      className="3xl:text-fs21 font-bold lg:text-fs14 text-bluegray_910 text-fs18 text-left w-[100%] xl:text-fs16"
                      inputClassName="bg-white_A700 border border-bluegray_500_53 border-solid w-[100%] mr-[5px]"
                      name="Group557"
                      checked={false}
                      label={`Ms`}
                      value={`Ms`}
                    ></Radio>
                  </Row>
                  <Column className="3xl:mt-[26px] font-lato justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="3xl:gap-[21px] font-lato gap-[18px] grid grid-cols-2 items-center justify-between lg:gap-[14px] lg:pr-[2px] pl-[1px] pr-[3px] self-stretch w-[100%] xl:gap-[16px] xl:pr-[2px]">
                        <Input
                          className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                          name="FirstNameForm"
                          placeholder={`First Name`}
                        ></Input>
                        <Input
                          className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                          name="LastNameForm"
                          placeholder={`Last Name`}
                        ></Input>
                      </Row>
                      <Row className="3xl:gap-[21px] 3xl:mt-[24px] font-lato gap-[18px] grid grid-cols-2 items-center justify-between lg:gap-[14px] lg:mt-[15px] lg:pr-[2px] mt-[20px] pl-[1px] pr-[3px] self-stretch w-[100%] xl:gap-[16px] xl:mt-[17px] xl:pr-[2px]">
                        <Input
                          className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                          name="emailForm"
                          placeholder={`E-mail adress`}
                        ></Input>
                        <Input
                          className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                          name="PhonenumberFo"
                          placeholder={`Phone Number`}
                        ></Input>
                      </Row>
                    </Column>
                    <TextArea
                      className="2xl:pb-[28px] 2xl:pt-[21px] 3xl:mt-[24px] 3xl:pb-[34px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:mt-[15px] lg:pb-[22px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 mt-[20px] pb-[28.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[17px] xl:pb-[25px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                      name="Info"
                      placeholder={`Additional information (Optional)`}
                    ></TextArea>
                  </Column>
                  <Row className="3xl:mt-[22px] font-lato justify-start lg:mt-[14px] mt-[19px] w-[100%] xl:mt-[16px]">
                    <Image
                      src="img_infocircle_2.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[13px] lg:mt-[1px] lg:w-[12px] mb-[17px] mt-[2px] object-contain w-[16px] xl:h-[15px] xl:mb-[15px] xl:mt-[1px] xl:w-[14px]"
                      alt="infocircle"
                    />
                    <Text className="3xl:ml-[12px] 3xl:text-fs19 font-bold leading-lh lg:ml-[7px] lg:text-fs12 ml-[10px] text-blue_900 text-fs16 text-left w-[96%] xl:ml-[8px] xl:text-fs14">{`You must be at least 21 years old to rent this car. Collision Damage Waiver (CDW)`}</Text>
                  </Row>
                </Column>
              </Column>
              <Row className="3xl:mt-[91px] font-lato justify-between lg:mt-[59px] mt-[76px] px-[0] self-stretch w-[100%] xl:mt-[67px]">
                <Column className="3xl:mb-[16px] font-lato items-center justify-start lg:mb-[10px] mb-[14px] w-[44%] xl:mb-[12px]">
                  <Row className="justify-start self-stretch w-[100%]">
                    <Image
                      src="img_angleright_1.svg"
                      className="2xl:h-[19px] 3xl:h-[22px] h-[18px] lg:h-[14px] object-contain w-[3%] xl:h-[17px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[6px] 3xl:mr-[246px] 3xl:text-fs16 font-bold lg:ml-[3px] lg:mr-[159px] lg:text-fs10 mb-[1px] ml-[5px] mr-[205px] text-blue_900 text-fs14 text-left xl:ml-[4px] xl:mr-[182px] xl:text-fs12">{`Bonus Program`}</Text>
                  </Row>
                  <CheckBox
                    className="3xl:mt-[24px] 3xl:text-fs19 font-normal lg:mt-[15px] lg:text-fs12 mt-[20px] self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[17px] xl:text-fs14"
                    inputClassName="bg-white_A700 border border-bluegray_500_53 border-solid rounded-radius2 mr-[5px]"
                    name="Group558"
                    label={`I accept all information and Payments etc`}
                  ></CheckBox>
                </Column>
                <div className="3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mr-[1px] mt-[12px] w-[48%] xl:mt-[10px] input-wrap">
                  <Image
                    src="img_path.svg"
                    className="absolute top-[23.205px] bottom-[22.205px] right-[63px] border-bw bg-transparent lg:top-[18px] lg:bottom-[17px] lg:right-[49px] xl:top-[20px] xl:bottom-[19px] xl:right-[56px] 2xl:top-[23px] 2xl:bottom-[22px] 3xl:top-[27px] 3xl:bottom-[26px] 3xl:right-[75px]"
                    alt="Path"
                  />
                  <Button className="2xl:pb-[22px] 2xl:pt-[23px] 3xl:pb-[26px] 3xl:pl-[42px] 3xl:pr-[138px] 3xl:pt-[27px] 3xl:text-fs16 bg-red_A700 border-bw font-black font-orbitron lg:pb-[17px] lg:pl-[27px] lg:pr-[89px] lg:pt-[18px] lg:text-fs10 pb-[22.205px] pl-[35px] pr-[115px] pt-[23.205px] rounded-radius4 shadow-bs27 text-fs14 text-left text-white_A700 uppercase w-[100%] xl:pb-[19px] xl:pl-[31px] xl:pr-[102px] xl:pt-[20px] xl:text-fs12">{`Reservation Now`}</Button>
                </div>
              </Row>
            </Column>
          </Row>
          <div className="3xl:mt-[159px] lg:mt-[103px] mt-[133px] self-stretch w-[100%] xl:mt-[118px]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-gray_100_98 items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="2xl:mt-[131px] 3xl:mb-[147px] 3xl:mt-[158px] font-goldman justify-start lg:mb-[95px] lg:mt-[102px] mb-[123px] mt-[131.73999px] w-[17%] xl:mb-[109px] xl:mt-[117px]">
                  <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_logomain.png"
                      className="2xl:h-[35px] 2xl:ml-[5px] 3xl:h-[41px] 3xl:ml-[6px] h-[34px] lg:h-[27px] lg:ml-[4px] ml-[5.6099854px] object-contain w-[9%] xl:h-[31px] xl:ml-[4px]"
                      alt="LogoMain"
                    />
                    <Text className="2xl:mb-[3px] 2xl:ml-[5px] 2xl:mt-[4px] 3xl:mb-[4px] 3xl:ml-[6px] 3xl:mr-[204px] 3xl:mt-[5px] 3xl:text-fs27 font-bold lg:mb-[2px] lg:ml-[4px] lg:mr-[132px] lg:mt-[3px] lg:text-fs17 mb-[3.7399902px] ml-[5.600006px] mr-[170px] mt-[4.26001px] text-black_907 text-fs23 text-left uppercase xl:ml-[4px] xl:mr-[151px] xl:my-[3px] xl:text-fs20">{`Rotors`}</Text>
                  </Row>
                  <Column className="2xl:mt-[13px] 3xl:mt-[15px] items-center lg:mt-[10px] mt-[13.26001px] self-stretch w-[100%] xl:mt-[11px]">
                    <Stack className="2xl:h-[147px] 3xl:h-[176px] font-lato h-[146px] lg:h-[114px] self-stretch w-[100%] xl:h-[130px]">
                      <Row className="absolute bottom-[0] justify-start left-[0] self-stretch w-[100%]">
                        <Image
                          src="img_angleright.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[2px] lg:mt-[3px] mb-[1px] ml-[3px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[2px] xl:mt-[3px]"
                          alt="angleright"
                        />
                        <Text className="3xl:ml-[12px] 3xl:mr-[208px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[135px] lg:text-fs12 ml-[10px] mr-[174px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[154px] xl:text-fs14">{`Rental Information`}</Text>
                      </Row>
                      <Text className="2xl:leading-lh21 3xl:leading-lh25 3xl:text-fs19 absolute font-normal leading-lh2100 lg:leading-lh16 lg:text-fs12 self-stretch text-bluegray_910 text-fs16 text-left top-[0] w-[100%] xl:leading-lh18 xl:text-fs14">{`Cras sit amet mi non orci pretium consectetur. Donec iaculis ante ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus sagittis ex id tortor tincidunt luctus. Donec consectetur consequat bibendum`}</Text>
                    </Stack>
                  </Column>
                  <Row className="3xl:mt-[15px] font-lato justify-start lg:mt-[10px] mt-[13px] self-stretch w-[100%] xl:mt-[11px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[2px] lg:mt-[3px] mb-[1px] ml-[3px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[2px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[327px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[212px] lg:text-fs12 ml-[10px] mr-[273px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[242px] xl:text-fs14">{`FAQ`}</Text>
                  </Row>
                  <div className="3xl:mt-[24px] bg-transparent border-bw lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px] input-wrap">
                    <Image
                      src="img_search_12.svg"
                      className="absolute top-[22.375px] bottom-[21.375px] right-[18px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[14px] xl:right-[16px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[21px]"
                      alt="search"
                    />
                    <Button className="2xl:pb-[21px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[19px] 3xl:pr-[52px] 3xl:pt-[26px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold font-lato lg:pb-[16px] lg:pl-[12px] lg:pr-[34px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[16px] pr-[44px] pt-[22.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[39px] xl:py-[19px] xl:text-fs14">{`Search`}</Button>
                  </div>
                </Column>
                <Column className="3xl:mb-[194px] 3xl:mt-[157px] font-goldman justify-start lg:mb-[126px] lg:mt-[101px] mb-[162px] mt-[131px] w-[16%] xl:mb-[144px] xl:mt-[116px]">
                  <Text className="3xl:ml-[6px] 3xl:mr-[12px] 3xl:text-fs28 font-normal lg:ml-[3px] lg:mr-[7px] lg:mt-[1px] lg:text-fs18 ml-[5px] mr-[10px] mt-[2px] text-black_907 text-fs24 text-left xl:ml-[4px] xl:mr-[8px] xl:mt-[1px] xl:text-fs21">{`Contact Us:`}</Text>
                  <Column className="3xl:mt-[25px] items-center lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px]">
                    <Stack className="2xl:h-[108px] 3xl:h-[129px] font-lato h-[107px] lg:h-[84px] self-stretch w-[100%] xl:h-[96px]">
                      <Text className="3xl:left-[30px] 3xl:text-fs19 absolute bottom-[0] font-normal left-[25px] lg:left-[19px] lg:text-fs12 text-bluegray_910 text-fs16 text-left xl:left-[22px] xl:text-fs14">{`8:00am-9:30pm`}</Text>
                      <Text className="2xl:bottom-[17px] 2xl:leading-lh20 3xl:bottom-[21px] 3xl:leading-lh24 3xl:text-fs19 absolute bottom-[17.5px] font-normal inset-x-[0] leading-lh2000 lg:bottom-[13px] lg:leading-lh15 lg:text-fs12 mx-[auto] text-bluegray_910 text-fs16 text-left w-[max-content] xl:bottom-[15px] xl:leading-lh17 xl:text-fs14">{`Unit 9, Manor Industrial Estate, Lower Wash Lane, Warrington, WA4`}</Text>
                      <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[56%]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Row className="font-lato justify-evenly px-[0] self-stretch w-[100%]">
                            <Image
                              src="img_mapmarkeralt_8.svg"
                              className="2xl:h-[15px] 3xl:h-[17px] h-[14px] lg:h-[11px] lg:mb-[2px] lg:mt-[1px] mb-[3px] mt-[2px] object-contain w-[6%] xl:h-[13px] xl:mb-[2px] xl:mt-[1px]"
                              alt="mapmarkeralt"
                            />
                            <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_910 text-fs16 text-left xl:text-fs14">{`Main Office Address:`}</Text>
                          </Row>
                        </Column>
                        <Image
                          src="img_clock_4.svg"
                          className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[12px] 3xl:mt-[84px] h-[14px] lg:h-[11px] lg:mr-[7px] lg:mt-[54px] mr-[10px] mt-[70px] object-contain w-[12%] xl:h-[13px] xl:mr-[8px] xl:mt-[62px]"
                          alt="clock"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[8px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[5px] lg:mt-[3px] mb-[2px] ml-[7px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[6px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[151px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[98px] lg:text-fs12 ml-[10px] mr-[126px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[112px] xl:text-fs14">{`Other Office Locations`}</Text>
                  </Row>
                  <Row className="3xl:mt-[22px] font-lato justify-start lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                    <Image
                      src="img_envelope_6.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[2px] lg:w-[10px] mb-[2px] ml-[4px] mt-[3px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[3px] xl:mt-[2px] xl:w-[12px]"
                      alt="envelope"
                    />
                    <Text className="3xl:ml-[14px] 3xl:mr-[184px] 3xl:text-fs19 font-bold lg:ml-[9px] lg:mr-[119px] lg:text-fs12 ml-[12px] mr-[154px] text-bluegray_910 text-fs16 text-left xl:ml-[10px] xl:mr-[136px] xl:text-fs14">{`rotorseml@eml.fr`}</Text>
                  </Row>
                  <Row className="3xl:mt-[25px] font-lato justify-start lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px]">
                    <Image
                      src="img_phone_5.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[2px] lg:w-[10px] mb-[2px] ml-[4px] mt-[3px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[3px] xl:mt-[2px] xl:w-[12px]"
                      alt="phone"
                    />
                    <Text className="3xl:ml-[14px] 3xl:mr-[206px] 3xl:text-fs19 font-bold lg:ml-[9px] lg:mr-[133px] lg:text-fs12 ml-[12px] mr-[172px] text-bluegray_910 text-fs16 text-left xl:ml-[10px] xl:mr-[153px] xl:text-fs14">{`01967 411232`}</Text>
                  </Row>
                </Column>
                <Column className="3xl:mb-[174px] 3xl:mt-[157px] font-goldman justify-start lg:mb-[112px] lg:mt-[101px] mb-[145px] mt-[131px] w-[16%] xl:mb-[128px] xl:mt-[116px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-normal lg:mr-[7px] lg:mt-[1px] lg:text-fs18 mr-[10px] mt-[2px] text-black_907 text-fs24 text-left xl:mr-[8px] xl:mt-[1px] xl:text-fs21">{`Information:`}</Text>
                  <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                    <Row className="font-lato justify-start self-stretch w-[100%]">
                      <Image
                        src="img_angleright.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[1px] lg:mt-[3px] mb-[1px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[1px] xl:mt-[3px]"
                        alt="angleright"
                      />
                      <Text className="3xl:ml-[12px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[10px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:text-fs14">{`Find a Car for Rent in the Nearest Location`}</Text>
                    </Row>
                  </Column>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[1px] lg:mt-[3px] mb-[1px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[249px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[161px] lg:text-fs12 ml-[10px] mr-[208px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[185px] xl:text-fs14">{`Cars Catalog`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[318px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[206px] lg:text-fs12 ml-[10px] mr-[265px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[235px] xl:text-fs14">{`FAQ`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[277px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[179px] lg:text-fs12 ml-[10px] mr-[231px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[205px] xl:text-fs14">{`About Us`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[280px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[182px] lg:text-fs12 ml-[10px] mr-[234px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[208px] xl:text-fs14">{`Contacts`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[253px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[164px] lg:text-fs12 ml-[10px] mr-[211px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[187px] xl:text-fs14">{`Help Center`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[240px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[155px] lg:text-fs12 ml-[10px] mr-[200px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[177px] xl:text-fs14">{`Privacy Police`}</Text>
                  </Row>
                </Column>
              </Row>
              <Row className="bg-black_907 font-lato items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Row className="3xl:mb-[30px] 3xl:mt-[28px] justify-center lg:mb-[19px] lg:mt-[18px] mb-[25px] mt-[24px] w-[36%] xl:mb-[22px] xl:mt-[21px]">
                  <Text className="3xl:ml-[489px] 3xl:text-fs19 font-normal lg:ml-[317px] lg:text-fs12 ml-[408px] text-fs16 text-left text-white_A700 xl:ml-[362px] xl:text-fs14">{`Copyright`}</Text>
                  <Image
                    src="img_copyright.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[6px] 3xl:mt-[6px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[3px] lg:w-[10px] mb-[2px] ml-[5px] mt-[5px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[4px] xl:mt-[4px] xl:w-[12px]"
                    alt="Copyright"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs19 font-normal lg:ml-[3px] lg:text-fs12 ml-[5px] text-fs16 text-left text-white_A700 xl:ml-[4px] xl:text-fs14">{`2020. Rotors  by Merkulove`}</Text>
                </Row>
                <Image
                  src="img_arrowup_1.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:my-[13px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:my-[8px] lg:w-[37px] my-[11px] object-contain w-[48px] xl:h-[43px] xl:my-[9px] xl:w-[42px]"
                  alt="Arrowup"
                />
                <Image
                  src="img_socialmedia_4.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[30px] 3xl:mt-[34px] h-[16px] lg:h-[13px] lg:mb-[19px] lg:mt-[22px] mb-[25px] mt-[29px] object-contain w-[5%] xl:h-[15px] xl:mb-[22px] xl:mt-[25px]"
                  alt="socialmedia"
                />
              </Row>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default CarReservationPage;
