import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { List } from "components/List";
import { Line } from "components/Line";
import { Grid } from "components/Grid";
import { Input } from "components/Input";

const Home2Page = () => {
  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center self-stretch w-[100%]">
        <Stack className="2xl:h-[2100px] 3xl:h-[2520px] h-[2098px] lg:h-[1632px] self-stretch w-[100%] xl:h-[1867px]">
          <Stack className="2xl:h-[2100px] 3xl:h-[2520px] absolute h-[2098px] inset-[0] lg:h-[1632px] self-stretch w-[100%] xl:h-[1867px]">
            <Column className="absolute bg-gradient12  items-center justify-center self-stretch top-[0] w-[100%]">
              <Row className="3xl:mt-[277px] justify-center lg:mt-[179px] mt-[231px] mx-[auto] w-[58%] xl:mt-[205px]">
                <Column className="3xl:mb-[115px] 3xl:mt-[63px] font-goldman justify-start lg:mb-[74px] lg:mt-[41px] mb-[96px] mt-[53px] w-[53%] xl:mb-[85px] xl:mt-[47px]">
                  <Text className="3xl:text-fs72 font-goldman font-normal lg:text-fs46 self-stretch text-fs60 text-left text-white_A700 uppercase xl:text-fs53">{`Find that car`}</Text>
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mr-[12px] 3xl:text-fs21 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:ml-[3px] lg:mr-[7px] lg:mt-[3px] lg:text-fs14 ml-[4px] mr-[10px] mt-[4px] text-fs18 text-left text-white_A700 w-[91%] xl:leading-lh23 xl:ml-[3px] xl:mr-[8px] xl:mt-[3px] xl:text-fs16">{`Pellentesque nec lectus nisl. Cras magna velit, tue maximus et dui a, convallis cursus turpis. Arcu cursus euismod quis viverra nibh cras. Arcu cursus euismod quis viverra nibh cras`}</Text>
                  <div className="3xl:ml-[7px] 3xl:mr-[12px] bg-transparent border-bw lg:ml-[4px] lg:mr-[7px] ml-[6px] mr-[10px] mt-[1px] w-[56%] xl:ml-[5px] xl:mr-[8px] input-wrap">
                    <Image
                      src="img_path.svg"
                      className="absolute top-[23.375px] bottom-[20.375px] right-[80px] border-bw bg-transparent lg:top-[18px] lg:bottom-[15px] lg:right-[62px] xl:top-[20px] xl:bottom-[18px] xl:right-[71px] 2xl:top-[23px] 2xl:bottom-[20px] 3xl:top-[28px] 3xl:bottom-[24px] 3xl:right-[96px]"
                      alt="Path"
                    />
                    <Button className="2xl:pb-[20px] 2xl:pt-[23px] 3xl:pb-[24px] 3xl:pr-[158px] 3xl:pt-[28px] 3xl:text-fs19 bg-red_A700 border-bw font-bold font-goldman lg:pb-[15px] lg:pr-[102px] lg:pt-[18px] lg:text-fs12 pb-[20.375px] pr-[132px] pt-[23.375px] rounded-radius4 shadow-bs27 text-fs16 text-right text-white_A700 uppercase w-[100%] xl:pb-[18px] xl:pr-[117px] xl:pt-[20px] xl:text-fs14">{`Book a Car`}</Button>
                  </div>
                </Column>
                <Column className="3xl:ml-[57px] font-goldman justify-start lg:ml-[37px] ml-[48px] w-[43%] xl:ml-[42px]">
                  <Button className="3xl:pb-[21px] 3xl:pl-[42px] 3xl:pt-[39px] 3xl:text-fs28 bg-black_900_cc1 border-bw font-normal lg:pb-[14px] lg:pl-[27px] lg:pt-[25px] lg:text-fs18 pb-[18px] pl-[35px] pt-[33px] rounded-radius4 self-stretch text-fs24 text-left text-white_A700 w-[100%] xl:pb-[16px] xl:pl-[31px] xl:pt-[29px] xl:text-fs21">{`2015 Bentley Flying Spur V8`}</Button>
                  <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Column className="bg-black_900_cc1 font-goldman justify-center rounded-radius4 self-stretch shadow-bs28 w-[100%]">
                      <Text className="3xl:mt-[30px] 3xl:mx-[42px] 3xl:text-fs28 font-goldman font-normal lg:mt-[19px] lg:mx-[27px] lg:text-fs18 mt-[25px] mx-[35px] text-fs24 text-left text-white_A700 xl:mt-[22px] xl:mx-[31px] xl:text-fs21">{`2006 Hummer H1 ALPHA`}</Text>
                      <Text className="3xl:mt-[10px] 3xl:mx-[40px] 3xl:text-fs21 font-bold font-lato lg:mt-[7px] lg:mx-[26px] lg:text-fs14 mt-[9px] mx-[34px] text-fs18 text-left text-red_A700 xl:mt-[8px] xl:mx-[30px] xl:text-fs16">{`$170/day`}</Text>
                      <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[40px] 3xl:mt-[9px] 3xl:mx-[42px] 3xl:text-fs19 font-lato font-normal leading-lh2200 lg:leading-lh17 lg:mb-[26px] lg:mt-[6px] lg:mx-[27px] lg:text-fs12 mb-[34px] mt-[8px] mx-[35px] text-bluegray_100_cc text-fs16 text-left w-[85%] xl:leading-lh19 xl:mb-[30px] xl:mt-[7px] xl:mx-[31px] xl:text-fs14">{`6.6L V8 32V DDI OHV Turbo Diesel, 5-Speed Automatic,  Fuel Type: Diesel, Color: White`}</Text>
                    </Column>
                  </Column>
                  <Button className="3xl:mt-[19px] 3xl:pb-[21px] 3xl:pl-[42px] 3xl:pt-[39px] 3xl:text-fs28 bg-black_900_cc1 border-bw font-normal lg:mt-[12px] lg:pb-[14px] lg:pl-[27px] lg:pt-[25px] lg:text-fs18 mt-[16px] pb-[18px] pl-[35px] pt-[33px] rounded-radius4 self-stretch text-fs24 text-left text-white_A700 w-[100%] xl:mt-[14px] xl:pb-[16px] xl:pl-[31px] xl:pt-[29px] xl:text-fs21">{`2015 Bentley Flying Spur V8`}</Button>
                </Column>
              </Row>
              <div className="2xl:h-[56px] 3xl:h-[67px] 3xl:mb-[852px] 3xl:mt-[114px] 3xl:mx-[188px] bg-black_900_00 h-[55px] lg:h-[43px] lg:mb-[552px] lg:mt-[73px] lg:mx-[122px] mb-[710px] mt-[95px] mx-[157px] w-[14%] xl:h-[49px] xl:mb-[631px] xl:mt-[84px] xl:mx-[139px]"></div>
            </Column>
            <Row className="absolute bottom-[0] gap-[0] grid grid-cols-2 justify-evenly self-stretch w-[100%]">
              <div className="2xl:h-[619px] 3xl:h-[743px] 3xl:mb-[69px] bg-gray_400 h-[618px] lg:h-[481px] lg:mb-[45px] mb-[58px] w-[100%] xl:h-[550px] xl:mb-[51px]"></div>
              <Column className="3xl:mt-[69px] bg-gradient13  font-goldman justify-center lg:mt-[45px] mt-[58px] shadow-bs29 w-[100%] xl:mt-[51px]">
                <Text className="3xl:mt-[488px] 3xl:mx-[73px] 3xl:text-fs48 font-goldman font-normal lg:mt-[316px] lg:mx-[47px] lg:text-fs31 mt-[407px] mx-[61px] text-fs40 text-gray_53 text-left xl:mt-[362px] xl:mx-[54px] xl:text-fs35">{`Phasellus porta pulvinar`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[24px] 3xl:mx-[73px] 3xl:text-fs21 font-lato font-normal leading-lh2700 lg:leading-lh21 lg:mt-[15px] lg:mx-[47px] lg:text-fs14 mt-[20px] mx-[61px] text-fs18 text-gray_53 text-left w-[87%] xl:leading-lh24 xl:mt-[17px] xl:mx-[54px] xl:text-fs16">{`Phasellus porta pulvinar metus, sit amet bibendum lectus hendrerit vel. Duis ullamcorper, justo quis hendrerit venenatis, purus mi volutpat dui, vel commodo urna eros eget sapien`}</Text>
                <Row className="3xl:mb-[67px] 3xl:mt-[26px] 3xl:mx-[73px] font-goldman items-center justify-start lg:mb-[43px] lg:mt-[17px] lg:mx-[47px] mb-[56px] mt-[22px] mx-[61px] w-[16%] xl:mb-[49px] xl:mt-[19px] xl:mx-[54px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`Find A Car`}</Text>
                  <Image
                    src="img_path_1.svg"
                    className="2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[12px] h-[13px] lg:h-[11px] lg:ml-[7px] lg:my-[2px] ml-[10px] my-[3px] object-contain w-[27%] xl:h-[12px] xl:ml-[8px] xl:my-[2px]"
                    alt="Path"
                  />
                </Row>
              </Column>
            </Row>
            <div className="absolute self-stretch top-[0] w-[100%]">
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
                    src="img_rightside.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[14px] 3xl:ml-[702px] 3xl:mr-[491px] 3xl:mt-[16px] h-[14px] lg:h-[11px] lg:mb-[9px] lg:ml-[455px] lg:mr-[318px] lg:mt-[10px] mb-[12px] ml-[585px] mr-[409px] mt-[14px] object-contain w-[7%] xl:h-[13px] xl:mb-[10px] xl:ml-[520px] xl:mr-[363px] xl:mt-[12px]"
                    alt="rightside"
                  />
                </Row>
                <Column className="bg-gray_900_5a justify-start self-stretch w-[100%]">
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
          </Stack>
          <Column className="3xl:top-[901px] absolute inset-x-[0] items-center justify-start lg:top-[584px] mx-[auto] top-[751px] w-[52%] xl:top-[668px]">
            <Stack className="2xl:h-[57px] 3xl:h-[68px] font-goldman h-[56px] lg:h-[44px] w-[100%] xl:h-[50px]">
              <Text className="3xl:text-fs57 absolute font-normal inset-[0] lg:text-fs37 self-stretch text-center text-fs48 text-white_A700 xl:text-fs42">{`Find the right car for every occasion`}</Text>
              <Row className="3xl:bottom-[16px] 3xl:gap-[1122px] absolute bottom-[14px] gap-[935px] grid grid-cols-2 inset-x-[0] items-center justify-between lg:bottom-[10px] lg:gap-[727px] mx-[auto] w-[98%] xl:bottom-[12px] xl:gap-[831px]">
                <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
                <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
              </Row>
            </Stack>
            <Column className="3xl:mt-[38px] justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Column className="items-center self-stretch w-[100%]">
                <List
                  className="flex-wrap gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="3xl:my-[12px] items-center justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Column className="font-lato justify-start w-[41%]">
                      <Text className="3xl:text-fs16 font-normal leading-lh lg:text-fs10 self-stretch text-fs14 text-gray_101 text-left w-[100%] xl:text-fs12">{`Pick Up Location`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_mapmarkeralt_2.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[21px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[16px] xl:top-[19px] xl:bottom-[15px] xl:right-[18px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[25px]"
                          alt="map-marker-alt"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pr-[51px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[33px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] pr-[43px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[38px] xl:pt-[19px] xl:text-fs14">{`City, State or Airport Code`}</Button>
                      </div>
                    </Column>
                    <Column className="font-lato justify-start w-[33%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-gray_101 text-left w-[82%] xl:mr-[8px] xl:text-fs12">{`Pick Up Date`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_calendaralt_1.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[20px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[15px] xl:top-[19px] xl:bottom-[15px] xl:right-[17px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[24px]"
                          alt="calendar-alt"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[34px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[18px] pr-[44px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[39px] xl:pt-[19px] xl:text-fs14">{`DD/MM/YY`}</Button>
                      </div>
                    </Column>
                    <Column className="font-lato justify-start w-[22%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-gray_101 text-left w-[94%] xl:mr-[8px] xl:text-fs12">{`Time`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_clock_3.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[21px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[16px] xl:top-[19px] xl:bottom-[15px] xl:right-[18px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[25px]"
                          alt="clock"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pr-[56px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[36px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] pr-[47px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[41px] xl:pt-[19px] xl:text-fs14">{`00:00 Am`}</Button>
                      </div>
                    </Column>
                  </Row>
                  <Line className="w-[69%] bg-white_A700_3a flex-wrap min-h-[auto]" />
                  <Row className="3xl:my-[12px] items-center justify-between lg:my-[7px] my-[10px] px-[0] self-stretch w-[100%] xl:my-[8px]">
                    <Column className="font-lato justify-start w-[41%]">
                      <Text className="3xl:text-fs16 font-normal leading-lh lg:text-fs10 self-stretch text-fs14 text-gray_101 text-left w-[100%] xl:text-fs12">{`Return car to a different location`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_mapmarkeralt_2.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[21px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[16px] xl:top-[19px] xl:bottom-[15px] xl:right-[18px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[25px]"
                          alt="map-marker-alt"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pr-[51px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[33px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] pr-[43px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[38px] xl:pt-[19px] xl:text-fs14">{`City, State or Airport Code`}</Button>
                      </div>
                    </Column>
                    <Column className="font-lato justify-start w-[33%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-gray_101 text-left w-[82%] xl:mr-[8px] xl:text-fs12">{`Return Date`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_calendaralt_1.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[20px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[15px] xl:top-[19px] xl:bottom-[15px] xl:right-[17px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[24px]"
                          alt="calendar-alt"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[21px] 3xl:pr-[52px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[34px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[18px] pr-[44px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[39px] xl:pt-[19px] xl:text-fs14">{`DD/MM/YY`}</Button>
                      </div>
                    </Column>
                    <Column className="font-lato justify-start w-[22%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-gray_101 text-left w-[94%] xl:mr-[8px] xl:text-fs12">{`Time`}</Text>
                      <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                        <Image
                          src="img_clock_3.svg"
                          className="absolute top-[21.375px] bottom-[17.375px] right-[21px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[16px] xl:top-[19px] xl:bottom-[15px] xl:right-[18px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[25px]"
                          alt="clock"
                        />
                        <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pr-[56px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[36px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] pr-[47px] pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[41px] xl:pt-[19px] xl:text-fs14">{`00:00 Am`}</Button>
                      </div>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Row className="3xl:mr-[12px] 3xl:mt-[38px] font-lato items-center justify-start lg:mr-[7px] lg:mt-[24px] ml-[1px] mr-[10px] mt-[32px] w-[77%] xl:mr-[8px] xl:mt-[28px]">
                <Row className="justify-start w-[53%]">
                  <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:w-[31px] bg-white_A700 border border-bluegray_500_53 border-solid h-[26px] lg:h-[21px] lg:w-[20px] mb-[1px] rounded-radius50 w-[26px] xl:h-[24px] xl:w-[23px]"></div>
                  <Text className="3xl:ml-[15px] 3xl:text-fs19 font-bold lg:ml-[10px] lg:mt-[2px] lg:text-fs12 ml-[13px] mt-[3px] text-fs16 text-left text-white_A700 xl:ml-[11px] xl:mt-[2px] xl:text-fs14">{`Help me find rental location. View Map`}</Text>
                </Row>
                <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[20px] 3xl:w-[31px] bg-white_A700 border border-bluegray_500_53 border-solid h-[26px] lg:h-[21px] lg:ml-[13px] lg:w-[20px] mb-[1px] ml-[17px] rounded-radius50 w-[26px] xl:h-[24px] xl:ml-[15px] xl:w-[23px]"></div>
                <Text className="3xl:ml-[26px] 3xl:text-fs19 font-bold lg:ml-[17px] lg:mt-[1px] lg:text-fs12 mb-[1px] ml-[22px] mt-[2px] text-bluegray_103 text-fs16 text-left xl:ml-[19px] xl:mt-[1px] xl:text-fs14">{`Chauffeur-driven service`}</Text>
              </Row>
              <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
                <Row className="items-end justify-between px-[0] self-stretch w-[100%]">
                  <Column className="font-lato justify-start ml-[1px] w-[65%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal leading-lh lg:mr-[7px] lg:text-fs10 mr-[10px] text-fs14 text-gray_101 text-left w-[63%] xl:mr-[8px] xl:text-fs12">{`Select Car Type`}</Text>
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="bg-white_A700 border border-bluegray_500_53 border-solid font-lato items-center justify-between px-[0] rounded-radius4 self-stretch w-[100%]">
                        <Text className="3xl:ml-[22px] 3xl:my-[21px] 3xl:text-fs19 font-bold lg:ml-[14px] lg:my-[14px] lg:text-fs12 ml-[19px] my-[18px] text-bluegray_500 text-fs16 text-left xl:ml-[16px] xl:my-[16px] xl:text-fs14">{`All Car Types`}</Text>
                        <Image
                          src="img_caretdown.svg"
                          className="2xl:h-[28px] 3xl:h-[33px] 3xl:mb-[19px] 3xl:mr-[33px] 3xl:mt-[20px] h-[27px] lg:h-[21px] lg:mb-[12px] lg:mr-[21px] lg:mt-[13px] mb-[16px] mr-[28px] mt-[17px] object-contain w-[3%] xl:h-[25px] xl:mb-[14px] xl:mr-[24px] xl:mt-[15px]"
                          alt="caretdown"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Row className="3xl:mt-[36px] bg-red_A700 font-goldman justify-center lg:mt-[23px] mt-[30px] rounded-radius4 shadow-bs27 w-[33%] xl:mt-[26px]">
                    <Text className="3xl:mb-[22px] 3xl:ml-[97px] 3xl:mt-[26px] 3xl:text-fs19 font-bold lg:mb-[14px] lg:ml-[63px] lg:mt-[17px] lg:text-fs12 mb-[19px] ml-[81px] mt-[22px] text-fs16 text-right text-white_A700 uppercase xl:mb-[16px] xl:ml-[72px] xl:mt-[19px] xl:text-fs14">{`Book a Car`}</Text>
                    <Image
                      src="img_path.svg"
                      className="2xl:h-[14px] 3xl:h-[16px] 3xl:mb-[26px] 3xl:ml-[12px] 3xl:mr-[96px] 3xl:mt-[30px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[7px] lg:mr-[62px] lg:mt-[19px] mb-[22px] ml-[10px] mr-[80px] mt-[25px] object-contain w-[13%] xl:h-[12px] xl:mb-[19px] xl:ml-[8px] xl:mr-[71px] xl:mt-[22px]"
                      alt="Path"
                    />
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
        </Stack>
      </Column>
      <Column className="3xl:mt-[140px] items-end lg:mt-[91px] mt-[117px] self-stretch w-[100%] xl:mt-[104px]">
        <Row className="3xl:mx-[491px] font-goldman items-end justify-end lg:mx-[318px] mx-[409px] w-[53%] xl:mx-[363px]">
          <Stack className="2xl:h-[182px] 3xl:h-[218px] 3xl:mb-[285px] h-[181px] lg:h-[141px] lg:mb-[185px] mb-[238px] w-[15%] xl:h-[162px] xl:mb-[211px]">
            <Text className="3xl:text-fs144 absolute font-normal lg:text-fs93 right-[0] text-bluegray_500_53 text-fs120 text-right top-[0] xl:text-fs106">{`01`}</Text>
            <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:text-fs28 absolute bottom-[0] font-normal leading-lh3000 lg:leading-lh23 lg:text-fs18 self-stretch text-black_907 text-fs24 text-right w-[100%] xl:leading-lh26 xl:text-fs21">{`What we offer`}</Text>
          </Stack>
          <Line className="2xl:h-[146px] 3xl:h-[175px] 3xl:mb-[286px] 3xl:ml-[78px] 3xl:mt-[42px] bg-indigo_900_91 h-[145px] lg:h-[113px] lg:mb-[185px] lg:ml-[50px] lg:mt-[27px] mb-[239px] ml-[65px] mt-[35px] w-[1px] xl:h-[129px] xl:mb-[212px] xl:ml-[57px] xl:mt-[31px]" />
          <Column className="3xl:ml-[75px] 3xl:mt-[166px] font-goldman justify-start lg:ml-[49px] lg:mt-[108px] ml-[63px] mt-[139px] w-[72%] xl:ml-[56px] xl:mt-[123px]">
            <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:text-fs57 font-goldman font-normal leading-lh5200 lg:leading-lh40 lg:text-fs37 self-stretch text-black_907 text-fs48 text-left w-[100%] xl:leading-lh46 xl:text-fs42">{`Cras nec molestie felis. Sed non placerat enim`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:text-fs21 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:text-fs14 self-stretch text-bluegray_910 text-fs18 text-left w-[100%] xl:leading-lh23 xl:text-fs16">{`Ut id lobortis eros, sed finibus dui. Cras eget purus lacus. Suspendisse sodales massa quis turpis ultrices ultricies. Cras euismod eros at vehicula sagittis. Suspendisse condimentum tortor nec enim pellentesque feugiat. Fusce vulputate varius orci, eu imperdiet orci dictum in. Nulla tempor urna vitae sapien iaculis, auctor condimentum enim auctor`}</Text>
            <Row className="3xl:mr-[12px] 3xl:mt-[34px] font-goldman items-center justify-start lg:mr-[7px] lg:mt-[22px] mr-[10px] mt-[29px] w-[30%] xl:mr-[8px] xl:mt-[25px]">
              <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`View All Offers`}</Text>
              <Image
                src="img_path_1.svg"
                className="2xl:h-[14px] 3xl:h-[16px] 3xl:ml-[10px] h-[13px] lg:h-[11px] lg:ml-[7px] lg:my-[2px] ml-[9px] my-[3px] object-contain w-[19%] xl:h-[12px] xl:ml-[8px] xl:my-[2px]"
                alt="Path"
              />
            </Row>
          </Column>
        </Row>
      </Column>
      <Column className="3xl:mt-[177px] items-center lg:mt-[115px] mt-[148px] self-stretch w-[100%] xl:mt-[131px]">
        <Row className="font-lato justify-start self-stretch w-[100%]">
          <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:mb-[110px] 3xl:ml-[147px] 3xl:mt-[189px] bg-black_900_00 h-[32px] lg:h-[25px] lg:mb-[71px] lg:ml-[95px] lg:mt-[122px] mb-[92px] ml-[123px] mt-[158px] rounded-radius135 w-[2%] xl:h-[29px] xl:mb-[81px] xl:ml-[109px] xl:mt-[140px]"></div>
          <Image
            src="img_cover_1.svg"
            className="2xl:h-[24px] 3xl:h-[28px] 3xl:mb-[136px] 3xl:ml-[487px] 3xl:mt-[174px] h-[23px] lg:h-[18px] lg:mb-[88px] lg:ml-[315px] lg:mt-[112px] mb-[114px] ml-[406px] mt-[145px] object-contain w-[2%] xl:h-[21px] xl:mb-[101px] xl:ml-[361px] xl:mt-[128px]"
            alt="Cover"
          />
          <Column className="2xl:ml-[373px] 3xl:ml-[448px] bg-gradient15  justify-center lg:ml-[290px] ml-[373.56px] shadow-bs32 w-[24%] xl:ml-[332px]">
            <Text className="2xl:px-[10px] 3xl:mt-[189px] 3xl:mx-[31px] 3xl:pb-[9px] 3xl:pl-[13px] 3xl:pr-[12px] 3xl:pt-[10px] 3xl:text-fs16 bg-blue_900 font-bold font-lato leading-lh lg:mt-[122px] lg:mx-[20px] lg:pb-[6px] lg:pl-[8px] lg:pr-[7px] lg:pt-[7px] lg:text-fs10 mt-[158px] mx-[26px] pb-[8px] pl-[10.869995px] pr-[10.130005px] pt-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[19%] xl:mt-[140px] xl:mx-[23px] xl:pb-[7px] xl:pt-[8px] xl:px-[9px] xl:text-fs12">{`$ 670/Day`}</Text>
            <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:mb-[22px] 3xl:mt-[13px] 3xl:mx-[31px] 3xl:text-fs28 font-goldman font-normal leading-lh3000 lg:leading-lh23 lg:mb-[14px] lg:mt-[8px] lg:mx-[20px] lg:text-fs18 mb-[19px] mt-[11px] mx-[26px] text-fs24 text-left text-white_A700 w-[74%] xl:leading-lh26 xl:mb-[16px] xl:mt-[9px] xl:mx-[23px] xl:text-fs21">{`2017 Chevrolet Corvette C7 Stingray`}</Text>
          </Column>
          <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:mb-[74px] 3xl:ml-[112px] 3xl:mr-[429px] 3xl:mt-[225px] bg-black_900_00 h-[32px] lg:h-[25px] lg:mb-[48px] lg:ml-[73px] lg:mr-[278px] lg:mt-[146px] mb-[62px] ml-[94px] mr-[358px] mt-[188px] rounded-radius135 w-[2%] xl:h-[29px] xl:mb-[55px] xl:ml-[83px] xl:mr-[318px] xl:mt-[167px]"></div>
        </Row>
        <Row className="3xl:mt-[139px] font-goldman justify-center lg:mt-[90px] mt-[116px] mx-[auto] w-[54%] xl:mt-[103px]">
          <Stack className="2xl:h-[186px] 3xl:h-[223px] 3xl:mb-[1031px] h-[185px] lg:h-[144px] lg:mb-[668px] mb-[859px] w-[17%] xl:h-[165px] xl:mb-[764px]">
            <Text className="3xl:text-fs144 absolute font-normal lg:text-fs93 right-[0] text-bluegray_500_53 text-fs120 text-right top-[0] xl:text-fs106">{`02`}</Text>
            <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:text-fs28 absolute bottom-[0] font-normal leading-lh3000 lg:leading-lh23 lg:text-fs18 self-stretch text-black_907 text-fs24 text-right w-[100%] xl:leading-lh26 xl:text-fs21">{`Choose your car`}</Text>
          </Stack>
          <Line className="2xl:h-[145px] 3xl:h-[173px] 3xl:mb-[1039px] 3xl:ml-[78px] 3xl:mt-[40px] bg-indigo_900_91 h-[144px] lg:h-[112px] lg:mb-[673px] lg:ml-[50px] lg:mt-[26px] mb-[866px] ml-[65px] mt-[34px] w-[1px] xl:h-[129px] xl:mb-[770px] xl:ml-[57px] xl:mt-[30px]" />
          <Column className="3xl:ml-[76px] 3xl:mt-[153px] items-center justify-start lg:ml-[49px] lg:mt-[99px] ml-[64px] mt-[128px] w-[70%] xl:ml-[56px] xl:mt-[113px]">
            <Stack className="2xl:h-[81px] 3xl:h-[97px] bg-white_A700 font-lato h-[80px] lg:h-[63px] self-stretch shadow-bs33 w-[100%] xl:h-[72px]">
              <Row className="3xl:bottom-[21px] 3xl:right-[34px] absolute bottom-[18px] font-lato items-center justify-center lg:bottom-[14px] lg:right-[22px] right-[29px] w-[28%] xl:bottom-[16px] xl:right-[25px]">
                <Column className="justify-start mb-[1px] w-[43%]">
                  <Text className="3xl:ml-[12px] 3xl:text-fs21 font-bold lg:ml-[7px] lg:text-fs14 ml-[10px] text-blue_900 text-fs18 text-right xl:ml-[8px] xl:text-fs16">{`Super`}</Text>
                  <Column className="font-lato self-stretch w-[100%]">
                    <Text className="3xl:text-fs16 font-normal lg:text-fs10 self-stretch text-black_907 text-fs14 text-right xl:text-fs12">{`24+ Reviews`}</Text>
                  </Column>
                </Column>
                <Button className="2xl:py-[9px] 3xl:ml-[18px] 3xl:pl-[21px] 3xl:pr-[19px] 3xl:py-[11px] 3xl:text-fs21 bg-blue_900 border-bw font-black lg:ml-[11px] lg:pl-[14px] lg:pr-[12px] lg:py-[7px] lg:text-fs14 ml-[15px] mt-[1px] pl-[18px] pr-[16px] py-[9.545px] rounded-radius4 shadow-bs34 text-center text-fs18 text-white_A700 w-[50%] xl:ml-[13px] xl:pl-[16px] xl:pr-[14px] xl:py-[8px] xl:text-fs16">{`4.8/5`}</Button>
              </Row>
              <Text className="3xl:left-[19px] 3xl:text-fs48 absolute font-goldman font-normal h-[max-content] inset-y-[0] left-[16px] lg:left-[12px] lg:text-fs31 my-[auto] text-black_907 text-fs40 text-left xl:left-[14px] xl:text-fs35">{`Infiniti Q50 2018`}</Text>
            </Stack>
            <Stack className="2xl:h-[428px] 3xl:h-[513px] h-[427px] lg:h-[333px] self-stretch w-[100%] xl:h-[380px]">
              <Stack className="2xl:h-[428px] 3xl:h-[513px] absolute font-lato h-[427px] inset-[0] lg:h-[333px] self-stretch w-[100%] xl:h-[380px]">
                <Image
                  src="img_bigimg.svg"
                  className="2xl:h-[400px] 3xl:h-[480px] absolute h-[399px] lg:h-[311px] object-cover self-stretch top-[0] w-[100%] xl:h-[355px]"
                  alt="BigImg"
                />
                <Row className="3xl:left-[22px] absolute bg-blue_900 bottom-[0] justify-end left-[19px] lg:left-[14px] rounded-radius4 shadow-bs35 w-[46%] xl:left-[16px]">
                  <Text className="3xl:mb-[20px] 3xl:ml-[60px] 3xl:mt-[25px] 3xl:text-fs21 font-normal lg:mb-[13px] lg:ml-[38px] lg:mt-[16px] lg:text-fs14 line-through mb-[17px] ml-[50px] mt-[21px] text-bluegray_100_cc text-fs18 text-left xl:mb-[15px] xl:ml-[44px] xl:mt-[18px] xl:text-fs16">{`$ 800/Day`}</Text>
                  <Text className="2xl:ml-[12px] 3xl:mb-[16px] 3xl:ml-[15px] 3xl:mt-[22px] 3xl:text-fs21 font-black lg:mb-[10px] lg:ml-[10px] lg:mt-[14px] lg:text-fs14 mb-[14px] ml-[12.869995px] mt-[19px] text-fs18 text-left text-white_A700 xl:mb-[12px] xl:ml-[11px] xl:mt-[16px] xl:text-fs16">{`$ 400/Day`}</Text>
                  <Image
                    src="img_caretdown_1.svg"
                    className="2xl:h-[25px] 2xl:ml-[34px] 3xl:h-[29px] 3xl:ml-[40px] 3xl:mr-[32px] 3xl:my-[21px] h-[24px] lg:h-[19px] lg:ml-[26px] lg:mr-[21px] lg:my-[14px] ml-[34.130005px] mr-[27px] my-[18px] object-contain w-[4%] xl:h-[22px] xl:ml-[30px] xl:mr-[24px] xl:my-[16px]"
                    alt="caretdown"
                  />
                </Row>
                <div className="3xl:mr-[20px] 3xl:right-[20px] absolute bg-transparent border-bw bottom-[0] lg:mr-[13px] lg:right-[13px] mb-[0] mr-[17px] right-[17px] w-[47%] xl:mr-[15px] xl:right-[15px] input-wrap">
                  <div className="input-wrap">
                    <Image
                      src="img_path_2.svg"
                      className="absolute top-[23.375px] bottom-[20.375px] right-[82.68994px] border-bw bg-transparent lg:top-[18px] lg:bottom-[15px] lg:right-[64px] xl:top-[20px] xl:bottom-[18px] xl:right-[73px] 2xl:top-[23px] 2xl:bottom-[20px] 2xl:right-[82px] 3xl:top-[28px] 3xl:bottom-[24px] 3xl:right-[99px]"
                      alt="Path"
                    />
                    <Button className="2xl:pb-[20px] 2xl:pr-[136px] 2xl:pt-[23px] 3xl:pb-[24px] 3xl:pr-[163px] 3xl:pt-[28px] 3xl:text-fs19 bg-red_A700 border-bw font-bold lg:pb-[15px] lg:pr-[105px] lg:pt-[18px] lg:text-fs12 pb-[20.375px] pr-[136.08994px] pt-[23.375px] rounded-radius4 shadow-bs27 text-fs16 text-right text-white_A700 uppercase w-[100%] xl:pb-[18px] xl:pr-[121px] xl:pt-[20px] xl:text-fs14">{`Book a Car`}</Button>
                  </div>
                </div>
              </Stack>
              <Column className="3xl:left-[22px] 3xl:top-[20px] absolute font-lato justify-start left-[19px] lg:left-[14px] lg:top-[13px] top-[17px] w-[22%] xl:left-[16px] xl:top-[15px]">
                <Button className="2xl:pb-[9px] 2xl:pt-[10px] 3xl:mr-[12px] 3xl:pb-[11px] 3xl:pl-[38px] 3xl:pr-[37px] 3xl:pt-[12px] 3xl:text-fs21 bg-red_900_98 border-bw font-black lg:mr-[7px] lg:pb-[7px] lg:pt-[8px] lg:px-[24px] lg:text-fs14 mr-[10px] pb-[9.5px] pl-[32px] pr-[31px] pt-[10.5px] rounded-radius4 text-center text-fs18 text-white_A700 w-[66%] xl:mr-[8px] xl:pb-[8px] xl:pl-[28px] xl:pr-[27px] xl:pt-[9px] xl:text-fs16">{`-50%`}</Button>
                <Column className="3xl:mt-[187px] items-end lg:mt-[121px] mt-[156px] self-stretch w-[100%] xl:mt-[138px]">
                  <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[12px] bg-black_900_00 h-[26px] lg:h-[21px] lg:ml-[7px] ml-[10px] rounded-radius135 w-[39%] xl:h-[24px] xl:ml-[8px]"></div>
                </Column>
              </Column>
            </Stack>
            <Column className="3xl:mt-[36px] justify-start lg:mt-[23px] mt-[30px] w-[100%] xl:mt-[26px]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_imgcarousel.png"
                  className="2xl:h-[118px] 3xl:h-[141px] h-[117px] lg:h-[91px] object-cover self-stretch w-[100%] xl:h-[105px]"
                  alt="Imgcarousel"
                />
              </Column>
              <Row className="3xl:mt-[22px] 3xl:mx-[22px] font-lato items-center justify-start lg:mt-[14px] lg:mx-[14px] mt-[19px] mx-[19px] w-[16%] xl:mt-[16px] xl:mx-[16px]">
                <Text className="3xl:text-fs21 font-bold lg:my-[1px] lg:text-fs14 my-[2px] text-bluegray_500 text-fs18 text-left xl:my-[1px] xl:text-fs16">{`Passengers:`}</Text>
                <Text className="3xl:ml-[9px] 3xl:text-fs21 font-normal lg:ml-[6px] lg:text-fs14 ml-[8px] text-bluegray_910 text-fs18 text-left xl:ml-[7px] xl:text-fs16">{`4`}</Text>
              </Row>
              <Row className="3xl:mt-[10px] 3xl:mx-[22px] font-lato items-center justify-start lg:mt-[7px] lg:mx-[14px] mt-[9px] mx-[19px] w-[28%] xl:mt-[8px] xl:mx-[16px]">
                <Text className="3xl:text-fs21 font-bold lg:my-[1px] lg:text-fs14 my-[2px] text-bluegray_500 text-fs18 text-left xl:my-[1px] xl:text-fs16">{`Suitcase:`}</Text>
                <Text className="3xl:ml-[8px] 3xl:text-fs21 font-normal lg:ml-[5px] lg:text-fs14 ml-[7px] text-bluegray_910 text-fs18 text-left xl:ml-[6px] xl:text-fs16">{`1 Large, 2 Small`}</Text>
              </Row>
              <Row className="3xl:mt-[12px] 3xl:mx-[22px] font-lato items-center justify-start lg:mt-[7px] lg:mx-[14px] mt-[10px] mx-[19px] w-[10%] xl:mt-[8px] xl:mx-[16px]">
                <Text className="3xl:text-fs21 font-bold lg:my-[1px] lg:text-fs14 my-[2px] text-bluegray_500 text-fs18 text-left xl:my-[1px] xl:text-fs16">{`Doors:`}</Text>
                <Text className="3xl:ml-[8px] 3xl:text-fs21 font-normal lg:ml-[5px] lg:text-fs14 ml-[7px] text-bluegray_910 text-fs18 text-left xl:ml-[6px] xl:text-fs16">{`2`}</Text>
              </Row>
              <Column className="3xl:mt-[10px] items-center lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]">
                <Row className="3xl:ml-[12px] 3xl:mr-[8px] font-lato justify-start lg:ml-[7px] lg:mr-[5px] ml-[10px] mr-[7px] w-[96%] xl:ml-[8px] xl:mr-[6px]">
                  <Text className="3xl:text-fs21 font-bold lg:mb-[2px] lg:text-fs14 mb-[3px] mt-[1px] text-bluegray_500 text-fs18 text-left xl:mb-[2px] xl:text-fs16">{`Engine:`}</Text>
                  <Text className="3xl:ml-[12px] 3xl:text-fs21 font-normal lg:ml-[7px] lg:text-fs14 ml-[10px] text-bluegray_910 text-fs18 text-left xl:ml-[8px] xl:text-fs16">{`3.9L V8 32V GDI DOHC Twin Turbo`}</Text>
                </Row>
              </Column>
              <Row className="3xl:mt-[12px] 3xl:mx-[22px] font-lato items-center justify-start lg:mt-[7px] lg:mx-[14px] mt-[10px] mx-[19px] w-[43%] xl:mt-[8px] xl:mx-[16px]">
                <Text className="3xl:text-fs21 font-bold lg:my-[1px] lg:text-fs14 my-[2px] text-bluegray_500 text-fs18 text-left xl:my-[1px] xl:text-fs16">{`Fuel Type:`}</Text>
                <Text className="3xl:ml-[9px] 3xl:text-fs21 font-normal lg:ml-[6px] lg:text-fs14 ml-[8px] text-bluegray_910 text-fs18 text-left xl:ml-[7px] xl:text-fs16">{`Gasoline, Premium unleaded`}</Text>
              </Row>
              <Column className="3xl:mt-[10px] items-center lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]">
                <Row className="font-lato justify-start mx-[auto] w-[95%]">
                  <Text className="3xl:mb-[13px] 3xl:text-fs21 font-bold lg:mb-[8px] lg:text-fs14 mb-[11px] mt-[1px] text-bluegray_500 text-fs18 text-left xl:mb-[9px] xl:text-fs16">{`Options:`}</Text>
                  <Text className="3xl:ml-[13px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:text-fs14 ml-[11px] text-bluegray_910 text-fs18 text-left xl:ml-[9px] xl:text-fs16">{`Cruise Control, MP3 player, Automatic air conditioning, Wifi, GPS Navigation`}</Text>
                </Row>
              </Column>
              <Row className="3xl:mt-[12px] 3xl:mx-[22px] font-lato items-center justify-start lg:mt-[7px] lg:mx-[14px] mt-[10px] mx-[19px] w-[27%] xl:mt-[8px] xl:mx-[16px]">
                <Image
                  src="img_infocircle_1.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[1px] lg:w-[14px] my-[2px] object-contain w-[18px] xl:h-[17px] xl:my-[1px] xl:w-[16px]"
                  alt="infocircle"
                />
                <Text className="3xl:ml-[9px] 3xl:text-fs21 font-bold lg:ml-[6px] lg:text-fs14 ml-[8px] text-blue_900 text-fs18 text-left xl:ml-[7px] xl:text-fs16">{`Terms and conditions`}</Text>
              </Row>
            </Column>
          </Column>
        </Row>
        <Column className="3xl:mt-[184px] bg-gray_101 font-goldman items-center justify-start lg:mt-[119px] mt-[154px] w-[100%] xl:mt-[136px]">
          <Stack className="2xl:h-[50px] 3xl:h-[59px] 3xl:mt-[168px] font-goldman h-[49px] lg:h-[39px] lg:mt-[108px] mt-[140px] mx-[auto] w-[28%] xl:h-[44px] xl:mt-[124px]">
            <Text className="3xl:text-fs57 absolute font-normal inset-[0] lg:text-fs37 self-stretch text-black_907 text-center text-fs48 xl:text-fs42">{`Featured Vehicles`}</Text>
            <Row className="3xl:bottom-[8px] 3xl:gap-[579px] absolute bottom-[7px] gap-[483px] grid grid-cols-2 inset-x-[0] items-center justify-between lg:bottom-[5px] lg:gap-[375px] mx-[auto] w-[98%] xl:bottom-[6px] xl:gap-[429px]">
              <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
              <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
            </Row>
          </Stack>
          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[16px] 3xl:text-fs21 font-lato font-normal leading-lh2400 lg:leading-lh18 lg:mt-[10px] lg:text-fs14 mt-[14px] mx-[auto] text-bluegray_910 text-center text-fs18 w-[32%] xl:leading-lh21 xl:mt-[12px] xl:text-fs16">{`Mauris cursus quis lorem sed cursus. Aenean aliquam pellentesque magna, ut dictum ex pellentesque`}</Text>
          <Row className="3xl:mt-[22px] font-lato items-center justify-center lg:mt-[14px] mt-[19px] mx-[auto] w-[18%] xl:mt-[16px]">
            <Text className="3xl:text-fs24 font-bold lg:text-fs15 text-center text-fs20 text-red_A700 xl:text-fs17">{`All`}</Text>
            <Text className="3xl:ml-[56px] 3xl:text-fs24 font-bold lg:ml-[36px] lg:text-fs15 ml-[47px] text-black_907 text-center text-fs20 xl:ml-[41px] xl:text-fs17">{`Sedan`}</Text>
            <Text className="3xl:ml-[56px] 3xl:text-fs24 font-bold lg:ml-[36px] lg:text-fs15 ml-[47px] text-black_907 text-center text-fs20 xl:ml-[41px] xl:text-fs17">{`Sports`}</Text>
            <Text className="3xl:ml-[57px] 3xl:text-fs24 font-bold lg:ml-[37px] lg:text-fs15 ml-[48px] text-black_907 text-center text-fs20 xl:ml-[42px] xl:text-fs17">{`Luxury`}</Text>
          </Row>
          <Grid className="3xl:gap-[42px] 3xl:mt-[42px] gap-[35px] grid grid-cols-3 lg:gap-[27px] lg:mt-[27px] mt-[35px] mx-[auto] w-[58%] xl:gap-[31px] xl:mt-[31px]">
            <Column className="bg-white_A700 font-goldman justify-center rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2015 Chevrolet Corvette Stingray Z51`}</Text>
              <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                <Stack className="2xl:h-[261px] 3xl:h-[313px] h-[260px] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]">
                  <div className="2xl:h-[261px] 3xl:h-[313px] absolute bg-gradient16  h-[260px] inset-[0] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]"></div>
                  <Column className="3xl:bottom-[12px] 3xl:left-[14px] absolute bottom-[10px] justify-start left-[12px] lg:bottom-[7px] lg:left-[9px] w-[83%] xl:bottom-[8px] xl:left-[10px]">
                    <Column className="items-end self-stretch w-[100%]">
                      <Stack className="2xl:h-[123px] 3xl:h-[147px] 3xl:ml-[12px] font-lato h-[122px] lg:h-[95px] lg:ml-[7px] ml-[10px] w-[88%] xl:h-[109px] xl:ml-[8px]">
                        <Column className="absolute items-center justify-start self-stretch top-[0] w-[100%]">
                          <Row className="font-lato justify-center mx-[auto] w-[55%]">
                            <Image
                              src="img_envelope_5.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:mt-[3px] lg:w-[12px] mb-[2px] mt-[4px] object-contain w-[16px] xl:h-[15px] xl:mb-[1px] xl:mt-[3px] xl:w-[14px]"
                              alt="envelope"
                            />
                            <Text className="3xl:ml-[12px] 3xl:text-fs21 font-bold lg:ml-[7px] lg:text-fs14 ml-[10px] text-center text-fs18 text-white_A700 xl:ml-[8px] xl:text-fs16">{`Save for Later`}</Text>
                          </Row>
                          <div className="3xl:mt-[30px] bg-transparent border-bw lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px] input-wrap">
                            <Image
                              src="img_path_3.svg"
                              className="absolute top-[22.375px] bottom-[21.375px] right-[32.350037px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[25px] xl:right-[28px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 2xl:right-[32px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[38px]"
                              alt="Path"
                            />
                            <Button className="2xl:pb-[21px] 2xl:pl-[32px] 2xl:pr-[89px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[38px] 3xl:pr-[107px] 3xl:pt-[26px] 3xl:text-fs19 bg-red_A700 border-bw font-bold font-goldman lg:pb-[16px] lg:pl-[25px] lg:pr-[69px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[32.350006px] pr-[89.20003700000001px] pt-[22.375px] rounded-radius4 shadow-bs27 text-fs16 text-left text-white_A700 uppercase w-[100%] xl:pl-[28px] xl:pr-[79px] xl:py-[19px] xl:text-fs14">{`Book a Car`}</Button>
                          </div>
                        </Column>
                        <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:left-[13px] absolute bg-black_900_00 bottom-[0] h-[26px] left-[11px] lg:h-[21px] lg:left-[8px] rounded-radius135 w-[8%] xl:h-[24px] xl:left-[9px]"></div>
                      </Stack>
                    </Column>
                    <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] 3xl:mt-[13px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] lg:mt-[8px] mr-[10px] mt-[11px] w-[56%] xl:h-[31px] xl:mr-[8px] xl:mt-[9px]">
                      <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 230/Day`}</Button>
                      <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                        <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 430/Day`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$ 230/Day`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Stack>
                <Row className="font-lato items-center justify-between mx-[auto] px-[0] w-[88%]">
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Sports`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Auto`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`2 Passengers`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Gasoline`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-goldman justify-center rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2019 Chevrolet Corvette Stingray Red`}</Text>
              <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                <Stack className="2xl:h-[261px] 3xl:h-[313px] h-[260px] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]">
                  <div className="2xl:h-[261px] 3xl:h-[313px] absolute bg-gradient16  h-[260px] inset-[0] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]"></div>
                  <Column className="3xl:bottom-[12px] 3xl:left-[12px] absolute bottom-[10px] justify-start left-[10px] lg:bottom-[7px] lg:left-[7px] w-[83%] xl:bottom-[8px] xl:left-[8px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="justify-between px-[0] self-stretch w-[100%]">
                        <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:mb-[14px] 3xl:mt-[82px] bg-black_900_00 h-[26px] lg:h-[21px] lg:mb-[9px] lg:mt-[53px] mb-[12px] mt-[69px] rounded-radius135 w-[9%] xl:h-[24px] xl:mb-[10px] xl:mt-[61px]"></div>
                        <Column className="font-lato items-center justify-start w-[87%]">
                          <Row className="font-lato justify-center mx-[auto] w-[55%]">
                            <Image
                              src="img_envelope_5.svg"
                              className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:mt-[3px] lg:w-[12px] mb-[2px] mt-[4px] object-contain w-[16px] xl:h-[15px] xl:mb-[1px] xl:mt-[3px] xl:w-[14px]"
                              alt="envelope"
                            />
                            <Text className="3xl:ml-[12px] 3xl:text-fs21 font-bold lg:ml-[7px] lg:text-fs14 ml-[10px] text-center text-fs18 text-white_A700 xl:ml-[8px] xl:text-fs16">{`Save for Later`}</Text>
                          </Row>
                          <div className="3xl:mt-[30px] bg-transparent border-bw lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px] input-wrap">
                            <Image
                              src="img_path_3.svg"
                              className="absolute top-[22.375px] bottom-[21.375px] right-[32.349976px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[25px] xl:right-[28px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 2xl:right-[32px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[38px]"
                              alt="Path"
                            />
                            <Button className="2xl:pb-[21px] 2xl:pl-[32px] 2xl:pr-[89px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[38px] 3xl:pr-[107px] 3xl:pt-[26px] 3xl:text-fs19 bg-red_A700 border-bw font-bold font-goldman lg:pb-[16px] lg:pl-[25px] lg:pr-[69px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[32.349976px] pr-[89.19997599999999px] pt-[22.375px] rounded-radius4 shadow-bs27 text-fs16 text-left text-white_A700 uppercase w-[100%] xl:pl-[28px] xl:pr-[79px] xl:py-[19px] xl:text-fs14">{`Book a Car`}</Button>
                          </div>
                        </Column>
                      </Row>
                    </Column>
                    <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] 3xl:mt-[31px] font-lato h-[34px] lg:h-[27px] lg:ml-[1px] lg:mr-[7px] lg:mt-[20px] ml-[2px] mr-[10px] mt-[26px] w-[56%] xl:h-[31px] xl:ml-[1px] xl:mr-[8px] xl:mt-[23px]">
                      <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 230/Day`}</Button>
                      <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                        <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 680/Day`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$340/Day`}</Text>
                      </Row>
                    </Stack>
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
            <Column className="bg-white_A700 font-goldman justify-center rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2015 Chevrolet Corvette Stingray Z51`}</Text>
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
                        <div className="2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[6px] 3xl:mt-[39px] bg-black_900_00 h-[26px] lg:h-[21px] lg:ml-[3px] lg:mt-[25px] mb-[1px] ml-[5px] mt-[33px] rounded-radius135 w-[8%] xl:h-[24px] xl:ml-[4px] xl:mt-[29px]"></div>
                        <Text className="2xl:ml-[6px] 3xl:mb-[24px] 3xl:ml-[7px] 3xl:mt-[25px] 3xl:text-fs19 font-bold lg:mb-[15px] lg:ml-[4px] lg:mt-[16px] lg:text-fs12 mb-[20px] ml-[6.3499756px] mt-[21px] text-fs16 text-left text-white_A700 uppercase xl:mb-[17px] xl:ml-[5px] xl:mt-[18px] xl:text-fs14">{`Book a Car`}</Text>
                        <Image
                          src="img_path_3.svg"
                          className="2xl:h-[14px] 2xl:ml-[24px] 2xl:mr-[32px] 3xl:h-[16px] 3xl:mb-[27px] 3xl:ml-[29px] 3xl:mr-[38px] 3xl:mt-[28px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[19px] lg:mr-[25px] lg:mt-[18px] mb-[23px] ml-[24.450073px] mr-[32.349976px] mt-[24px] object-contain w-[19%] xl:h-[12px] xl:mb-[20px] xl:ml-[21px] xl:mr-[28px] xl:mt-[21px]"
                          alt="Path"
                        />
                      </Row>
                    </Column>
                    <Column className="3xl:mt-[31px] lg:mt-[20px] mt-[26px] self-stretch w-[100%] xl:mt-[23px]">
                      <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] mr-[10px] w-[56%] xl:h-[31px] xl:mr-[8px]">
                        <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 120/Day`}</Button>
                        <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                          <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 430/Day`}</Text>
                          <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$ 230/Day`}</Text>
                        </Row>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
                <Row className="font-lato items-center justify-between mx-[auto] px-[0] w-[88%]">
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Sports`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Auto`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`2 Passengers`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Gasoline`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-goldman justify-end rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2020 Audi New Generation P00234`}</Text>
              <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                <Stack className="2xl:h-[261px] 3xl:h-[313px] h-[260px] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]">
                  <div className="2xl:h-[261px] 3xl:h-[313px] absolute bg-gradient16  h-[260px] inset-[0] lg:h-[203px] self-stretch w-[100%] xl:h-[232px]"></div>
                  <Column className="3xl:bottom-[12px] 3xl:left-[14px] absolute bottom-[10px] justify-start left-[12px] lg:bottom-[7px] lg:left-[9px] w-[83%] xl:bottom-[8px] xl:left-[10px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Column className="items-center justify-start self-stretch w-[100%]">
                        <Row className="3xl:mx-[67px] font-lato justify-end lg:mx-[43px] mx-[56px] w-[48%] xl:mx-[49px]">
                          <Image
                            src="img_envelope_5.svg"
                            className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:mt-[3px] lg:w-[12px] mb-[2px] mt-[4px] object-contain w-[16px] xl:h-[15px] xl:mb-[1px] xl:mt-[3px] xl:w-[14px]"
                            alt="envelope"
                          />
                          <Text className="3xl:ml-[12px] 3xl:text-fs21 font-bold lg:ml-[7px] lg:text-fs14 ml-[10px] text-center text-fs18 text-white_A700 xl:ml-[8px] xl:text-fs16">{`Save for Later`}</Text>
                        </Row>
                        <Stack className="2xl:h-[63px] 3xl:h-[75px] 3xl:ml-[12px] 3xl:mt-[27px] font-goldman h-[62px] lg:h-[49px] lg:ml-[7px] lg:mt-[17px] ml-[10px] mt-[23px] w-[88%] xl:h-[56px] xl:ml-[8px] xl:mt-[20px]">
                          <Row className="absolute bg-red_A700 bottom-[0] inset-x-[0] items-center justify-start lg:top-[1px] rounded-radius4 self-stretch shadow-bs27 top-[2px] w-[100%] xl:top-[1px]">
                            <Text className="2xl:ml-[32px] 3xl:mb-[24px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:text-fs19 font-bold lg:mb-[15px] lg:ml-[25px] lg:mt-[16px] lg:text-fs12 mb-[20px] ml-[32.350006px] mt-[21px] text-fs16 text-left text-white_A700 uppercase xl:mb-[17px] xl:ml-[28px] xl:mt-[18px] xl:text-fs14">{`Book a Car`}</Text>
                            <Image
                              src="img_path_3.svg"
                              className="2xl:h-[14px] 2xl:ml-[24px] 2xl:mr-[32px] 3xl:h-[16px] 3xl:mb-[27px] 3xl:ml-[29px] 3xl:mr-[38px] 3xl:mt-[28px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[19px] lg:mr-[25px] lg:mt-[18px] mb-[23px] ml-[24.450012px] mr-[32.350037px] mt-[24px] object-contain w-[19%] xl:h-[12px] xl:mb-[20px] xl:ml-[21px] xl:mr-[28px] xl:mt-[21px]"
                              alt="Path"
                            />
                          </Row>
                          <div className="2xl:h-[26px] 3xl:h-[31px] 3xl:left-[19px] absolute bg-black_900_00 h-[25px] left-[16px] lg:h-[20px] lg:left-[12px] rounded-radius135 top-[0] w-[11%] xl:h-[23px] xl:left-[14px]"></div>
                        </Stack>
                      </Column>
                    </Column>
                    <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] 3xl:mt-[31px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] lg:mt-[20px] mr-[10px] mt-[26px] w-[56%] xl:h-[31px] xl:mr-[8px] xl:mt-[23px]">
                      <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 230/Day`}</Button>
                      <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                        <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 540/Day`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$ 180/Day`}</Text>
                      </Row>
                    </Stack>
                  </Column>
                </Stack>
                <Row className="font-lato items-center justify-evenly mx-[auto] px-[0] w-[88%]">
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Sports`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Auto`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`2 Passengers`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Electro`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-goldman justify-end rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2015 Chevrolet Corvette Stingray Z51`}</Text>
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
                    </Column>
                    <Column className="3xl:mt-[30px] font-goldman lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px]">
                      <div className="3xl:ml-[42px] bg-transparent border-bw lg:ml-[27px] ml-[35px] w-[88%] xl:ml-[31px] input-wrap">
                        <Image
                          src="img_path_3.svg"
                          className="absolute top-[22.375px] bottom-[21.375px] right-[32.349976px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[25px] xl:right-[28px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 2xl:right-[32px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[38px]"
                          alt="Path"
                        />
                        <Button className="2xl:pb-[21px] 2xl:pl-[32px] 2xl:pr-[89px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[38px] 3xl:pr-[107px] 3xl:pt-[26px] 3xl:text-fs19 bg-red_A700 border-bw font-bold lg:pb-[16px] lg:pl-[25px] lg:pr-[69px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[32.349976px] pr-[89.19997599999999px] pt-[22.375px] rounded-radius4 shadow-bs27 text-fs16 text-left text-white_A700 uppercase w-[100%] xl:pl-[28px] xl:pr-[79px] xl:py-[19px] xl:text-fs14">{`Book a Car`}</Button>
                      </div>
                      <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] 3xl:mt-[31px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] lg:mt-[20px] mr-[10px] mt-[26px] w-[56%] xl:h-[31px] xl:mr-[8px] xl:mt-[23px]">
                        <Button className="2xl:pb-[10px] 2xl:pl-[13px] 2xl:pr-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[16px] 3xl:pr-[12px] 3xl:pt-[11px] 3xl:text-fs16 absolute bg-blue_900 border-bw font-bold left-[0] lg:pl-[10px] lg:pr-[7px] lg:py-[7px] lg:text-fs10 pb-[10.205px] pl-[13.869995px] pr-[10.130005px] pt-[9.205px] rounded-radius4 shadow-bs35 text-center text-fs14 text-white_A700 w-[57%] xl:pb-[9px] xl:pl-[12px] xl:pr-[9px] xl:pt-[8px] xl:text-fs12">{`$ 160/Day`}</Button>
                        <Row className="absolute bg-blue_900 font-lato inset-[0] items-center justify-start rounded-radius4 self-stretch shadow-bs35 w-[100%]">
                          <Text className="3xl:ml-[6px] 3xl:my-[12px] 3xl:text-fs14 font-normal lg:ml-[3px] lg:my-[7px] lg:text-fs9 line-through ml-[5px] my-[10px] text-fs12 text-right text-white_A700 xl:ml-[4px] xl:my-[8px] xl:text-fs10">{`$ 430/Day`}</Text>
                          <Text className="3xl:mb-[9px] 3xl:mr-[18px] 3xl:mt-[10px] 3xl:text-fs16 font-bold lg:mb-[6px] lg:ml-[3px] lg:mr-[11px] lg:mt-[7px] lg:text-fs10 mb-[8px] ml-[4px] mr-[15px] mt-[9px] text-fs14 text-left text-white_A700 xl:mb-[7px] xl:ml-[3px] xl:mr-[13px] xl:mt-[8px] xl:text-fs12">{`$ 230/Day`}</Text>
                        </Row>
                      </Stack>
                    </Column>
                  </Column>
                </Stack>
                <Row className="font-lato items-center justify-between mx-[auto] px-[0] w-[88%]">
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Sports`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Auto`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`2 Passengers`}</Text>
                  <Line className="2xl:h-[44px] 3xl:h-[52px] bg-bluegray_103 h-[43px] lg:h-[34px] w-[1px] xl:h-[39px]" />
                  <Text className="3xl:my-[15px] 3xl:text-fs16 font-normal lg:my-[10px] lg:text-fs10 my-[13px] text-bluegray_910 text-center text-fs14 xl:my-[11px] xl:text-fs12">{`Gasoline`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-goldman justify-end rounded-radius4 shadow-bs35 w-[100%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[22px] 3xl:mx-[14px] 3xl:text-fs21 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[9px] lg:text-fs14 mt-[19px] mx-[12px] text-black_900 text-fs18 text-left w-[74%] xl:leading-lh21 xl:mt-[16px] xl:mx-[10px] xl:text-fs16">{`2015 Chevrolet Corvette Stingray Z51`}</Text>
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
                    </Column>
                    <Column className="3xl:mt-[30px] font-goldman lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px]">
                      <div className="3xl:ml-[42px] bg-transparent border-bw lg:ml-[27px] ml-[35px] w-[88%] xl:ml-[31px] input-wrap">
                        <Image
                          src="img_path_3.svg"
                          className="absolute top-[22.375px] bottom-[21.375px] right-[32.349976px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[25px] xl:right-[28px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 2xl:right-[32px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[38px]"
                          alt="Path"
                        />
                        <Button className="2xl:pb-[21px] 2xl:pl-[32px] 2xl:pr-[89px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[38px] 3xl:pr-[107px] 3xl:pt-[26px] 3xl:text-fs19 bg-red_A700 border-bw font-bold lg:pb-[16px] lg:pl-[25px] lg:pr-[69px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[32.349976px] pr-[89.19997599999999px] pt-[22.375px] rounded-radius4 shadow-bs27 text-fs16 text-left text-white_A700 uppercase w-[100%] xl:pl-[28px] xl:pr-[79px] xl:py-[19px] xl:text-fs14">{`Book a Car`}</Button>
                      </div>
                      <Stack className="2xl:h-[35px] 3xl:h-[41px] 3xl:mr-[12px] 3xl:mt-[31px] font-lato h-[34px] lg:h-[27px] lg:mr-[7px] lg:mt-[20px] mr-[10px] mt-[26px] w-[56%] xl:h-[31px] xl:mr-[8px] xl:mt-[23px]">
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
          </Grid>
          <Row className="3xl:mb-[184px] 3xl:mt-[76px] bg-red_A700 font-goldman justify-center lg:mb-[119px] lg:mt-[49px] mb-[154px] mt-[64px] mx-[auto] rounded-radius4 shadow-bs27 w-[17%] xl:mb-[136px] xl:mt-[56px]">
            <Text className="3xl:mb-[22px] 3xl:ml-[97px] 3xl:mt-[26px] 3xl:text-fs19 font-bold lg:mb-[14px] lg:ml-[63px] lg:mt-[17px] lg:text-fs12 mb-[19px] ml-[81px] mt-[22px] text-fs16 text-right text-white_A700 uppercase xl:mb-[16px] xl:ml-[72px] xl:mt-[19px] xl:text-fs14">{`Book a Car`}</Text>
            <Image
              src="img_path.svg"
              className="2xl:h-[14px] 3xl:h-[16px] 3xl:mb-[26px] 3xl:ml-[12px] 3xl:mr-[96px] 3xl:mt-[30px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[7px] lg:mr-[62px] lg:mt-[19px] mb-[22px] ml-[10px] mr-[80px] mt-[25px] object-contain w-[13%] xl:h-[12px] xl:mb-[19px] xl:ml-[8px] xl:mr-[71px] xl:mt-[22px]"
              alt="Path"
            />
          </Row>
        </Column>
        <Row className="3xl:mt-[146px] justify-center lg:mt-[94px] mt-[122px] self-stretch w-[100%] xl:mt-[108px]">
          <Row className="3xl:mb-[539px] 3xl:ml-[560px] font-goldman items-center justify-center lg:mb-[349px] lg:ml-[363px] mb-[449px] ml-[467px] w-[13%] xl:mb-[399px] xl:ml-[415px]">
            <Stack className="2xl:h-[240px] 3xl:h-[287px] h-[239px] lg:h-[186px] w-[74%] xl:h-[213px]">
              <Text className="3xl:text-fs144 absolute font-normal lg:text-fs93 right-[0] text-bluegray_500_53 text-fs120 text-right top-[0] xl:text-fs106">{`03`}</Text>
              <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:text-fs28 absolute bottom-[0] font-normal leading-lh3000 lg:leading-lh23 lg:text-fs18 self-stretch text-black_907 text-fs24 text-right w-[100%] xl:leading-lh26 xl:text-fs21">{`What our offer includes`}</Text>
            </Stack>
            <Line className="2xl:h-[171px] 3xl:h-[205px] 3xl:mb-[36px] 3xl:ml-[78px] 3xl:mt-[46px] bg-indigo_900_91 h-[170px] lg:h-[133px] lg:mb-[23px] lg:ml-[50px] lg:mt-[30px] mb-[30px] ml-[65px] mt-[39px] w-[1px] xl:h-[152px] xl:mb-[26px] xl:ml-[57px] xl:mt-[34px]" />
          </Row>
          <Column className="3xl:ml-[76px] 3xl:mr-[489px] 3xl:mt-[198px] items-center justify-start lg:ml-[49px] lg:mr-[317px] lg:mt-[128px] ml-[64px] mr-[408px] mt-[165px] w-[38%] xl:ml-[56px] xl:mr-[362px] xl:mt-[146px]">
            <Column className="font-goldman justify-start self-stretch w-[100%]">
              <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:text-fs57 font-goldman font-normal leading-lh5200 lg:leading-lh40 lg:text-fs37 self-stretch text-black_907 text-fs48 text-left w-[100%] xl:leading-lh46 xl:text-fs42">{`Best car rental offers and services features:`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[15px] 3xl:text-fs21 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mt-[10px] lg:text-fs14 mt-[13px] self-stretch text-bluegray_910 text-fs18 text-left w-[100%] xl:leading-lh23 xl:mt-[11px] xl:text-fs16">{`Ut id lobortis eros, sed finibus dui. Cras eget purus lacus. Suspendisse sodales massa quis turpis ultrices ultricies. Cras euismod eros at vehicula sagittis. Suspendisse condimentum tortor nec enim pellentesque feugiat. Fusce vulputate varius orci, eu imperdiet orci dictum in. Nulla tempor urna vitae sapien iaculis, auctor condimentum enim auctor`}</Text>
            </Column>
            <List
              className="3xl:mt-[32px] flex-wrap gap-[0] lg:mt-[21px] min-h-[auto] mt-[27px] self-stretch w-[100%] xl:mt-[24px]"
              orientation="vertical"
            >
              <Row className="items-center justify-between my-[1px] px-[0] self-stretch w-[100%]">
                <Column className="justify-start lg:mb-[2px] mb-[3px] w-[48%] xl:mb-[2px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_shieldalt.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[20px] 3xl:mt-[8px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[13px] lg:mt-[5px] lg:w-[18px] mb-[17px] mt-[7px] object-contain w-[24px] xl:h-[22px] xl:mb-[15px] xl:mt-[6px] xl:w-[21px]"
                        alt="shieldalt"
                      />
                      <Text className="3xl:ml-[15px] 3xl:text-fs28 font-normal lg:ml-[10px] lg:text-fs18 ml-[13px] text-black_907 text-fs24 text-left xl:ml-[11px] xl:text-fs21">
                        {
                          <>
                            {`Secured Payment`}
                            <br />
                            {`Guarantee`}
                          </>
                        }
                      </Text>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[7px] font-lato lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                    <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:ml-[44px] 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:ml-[28px] lg:text-fs14 ml-[37px] text-bluegray_910 text-fs18 text-left w-[89%] xl:leading-lh23 xl:ml-[32px] xl:text-fs16">{`Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum`}</Text>
                  </Column>
                </Column>
                <Column className="justify-start w-[48%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-goldman justify-start self-stretch w-[100%]">
                      <Image
                        src="img_cars.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[21px] 3xl:mt-[7px] h-[24px] lg:h-[19px] lg:mb-[14px] lg:mt-[4px] mb-[18px] mt-[6px] object-contain w-[9%] xl:h-[22px] xl:mb-[16px] xl:mt-[5px]"
                        alt="cars"
                      />
                      <Text className="3xl:ml-[8px] 3xl:text-fs28 font-normal lg:ml-[5px] lg:text-fs18 ml-[7px] text-black_907 text-fs24 text-left xl:ml-[6px] xl:text-fs21">{`Booking of any class vehicle`}</Text>
                    </Row>
                  </Column>
                  <Column className="font-lato mt-[1px] self-stretch w-[100%]">
                    <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:ml-[44px] 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:ml-[28px] lg:text-fs14 ml-[37px] text-bluegray_910 text-fs18 text-left w-[89%] xl:leading-lh23 xl:ml-[32px] xl:text-fs16">{`Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum`}</Text>
                  </Column>
                </Column>
              </Row>
              <Row className="items-center justify-between my-[1px] px-[0] self-stretch w-[100%]">
                <Column className="justify-start mb-[1px] w-[48%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_headset_1.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[20px] 3xl:mt-[8px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[13px] lg:mt-[5px] lg:w-[18px] mb-[17px] mt-[7px] object-contain w-[24px] xl:h-[22px] xl:mb-[15px] xl:mt-[6px] xl:w-[21px]"
                        alt="headset"
                      />
                      <Text className="3xl:ml-[15px] 3xl:text-fs28 font-normal lg:ml-[10px] lg:text-fs18 ml-[13px] text-black_907 text-fs24 text-left xl:ml-[11px] xl:text-fs21">
                        {
                          <>
                            {`Multi-language Support`}
                            <br />
                            {`24/7`}
                          </>
                        }
                      </Text>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[6px] font-lato lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:ml-[44px] 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:ml-[28px] lg:text-fs14 ml-[37px] text-bluegray_910 text-fs18 text-left w-[89%] xl:leading-lh23 xl:ml-[32px] xl:text-fs16">{`Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum`}</Text>
                  </Column>
                </Column>
                <Column className="justify-start w-[48%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_tools.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[19px] 3xl:mt-[9px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[12px] lg:mt-[6px] lg:w-[18px] mb-[16px] mt-[8px] object-contain w-[24px] xl:h-[22px] xl:mb-[14px] xl:mt-[7px] xl:w-[21px]"
                        alt="tools"
                      />
                      <Text className="3xl:ml-[15px] 3xl:mr-[56px] 3xl:text-fs28 font-normal lg:ml-[10px] lg:mr-[36px] lg:text-fs18 ml-[13px] mr-[47px] text-black_907 text-fs24 text-left xl:ml-[11px] xl:mr-[41px] xl:text-fs21">
                        {
                          <>
                            {`Emergency technical`}
                            <br />
                            {`assistance`}
                          </>
                        }
                      </Text>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[7px] font-lato lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                    <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:ml-[44px] 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:ml-[28px] lg:text-fs14 ml-[37px] text-bluegray_910 text-fs18 text-left w-[89%] xl:leading-lh23 xl:ml-[32px] xl:text-fs16">{`Vestibulum at ultrices elit. Maecenas faucibus vulputate vestibulum`}</Text>
                  </Column>
                </Column>
              </Row>
            </List>
          </Column>
        </Row>
        <Column className="3xl:mt-[150px] bg-gradient17  items-center justify-center lg:mt-[97px] mt-[125px] self-stretch w-[100%] xl:mt-[111px]">
          <Column className="3xl:mt-[123px] font-goldman items-center justify-start lg:mt-[80px] mt-[103px] self-stretch w-[100%] xl:mt-[91px]">
            <Row className="font-goldman justify-center self-stretch w-[100%]">
              <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:mb-[16px] 3xl:ml-[641px] 3xl:mt-[40px] bg-red_A700 h-[8px] lg:h-[7px] lg:mb-[10px] lg:ml-[415px] lg:mt-[26px] mb-[14px] ml-[534px] mt-[34px] w-[1%] xl:mb-[12px] xl:ml-[475px] xl:mt-[30px]"></div>
              <Text className="2xl:ml-[19px] 3xl:ml-[23px] 3xl:text-fs57 font-normal lg:ml-[15px] lg:text-fs37 ml-[19.5px] text-center text-fs48 text-white_A700 xl:ml-[17px] xl:text-fs42">{`Worldwide Car Retal Locations`}</Text>
              <div className="2xl:h-[9px] 2xl:ml-[16px] 3xl:h-[10px] 3xl:mb-[16px] 3xl:ml-[19px] 3xl:mr-[643px] 3xl:mt-[40px] bg-red_A700 h-[8px] lg:h-[7px] lg:mb-[10px] lg:ml-[12px] lg:mr-[416px] lg:mt-[26px] mb-[14px] ml-[16.5px] mr-[536px] mt-[34px] w-[1%] xl:mb-[12px] xl:ml-[14px] xl:mr-[476px] xl:mt-[30px]"></div>
            </Row>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:text-fs21 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:text-fs14 mx-[auto] text-center text-fs18 text-white_A700 w-[32%] xl:leading-lh23 xl:text-fs16">{`We have a number of convenient locations.  More than 500 Stations in 90+ Countries Worldwide`}</Text>
          </Column>
          <Row className="3xl:mt-[43px] font-lato items-center justify-center lg:mt-[28px] mt-[36px] mx-[auto] w-[57%] xl:mt-[32px]">
            <div className="bg-transparent border-0 w-[67%] input-wrap">
              <Image
                src="img_search_11.svg"
                className="absolute left-[20px] bg-transparent border-0 lg:left-[15px] lg:inset-y-[17px] xl:left-[17px] xl:inset-y-[19px] 2xl:inset-y-[22px] 3xl:left-[24px] 3xl:inset-y-[26px] inset-y-[22.375px]"
                alt="Search"
              />
              <Input
                className="2xl:py-[22px] 3xl:pl-[58px] 3xl:py-[26px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold font-lato lg:pl-[38px] lg:py-[17px] lg:text-fs12 pl-[49px] placeholder:bg-transparent placeholder:text-bluegray_500 py-[22.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pl-[43px] xl:py-[19px] xl:text-fs14"
                name="Group516"
                placeholder={`Search for a Country`}
              ></Input>
            </div>
            <div className="3xl:ml-[25px] bg-transparent border-bw lg:ml-[16px] ml-[21px] w-[31%] xl:ml-[18px] input-wrap">
              <Image
                src="img_path.svg"
                className="absolute top-[22.375px] bottom-[21.375px] right-[56px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[43px] xl:right-[49px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[67px]"
                alt="Path"
              />
              <Button className="2xl:pb-[21px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[42px] 3xl:pr-[129px] 3xl:pt-[26px] 3xl:text-fs19 bg-red_A700 border-bw font-bold font-goldman lg:pb-[16px] lg:pl-[27px] lg:pr-[84px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[35px] pr-[108px] pt-[22.375px] rounded-radius4 shadow-bs27 text-fs16 text-left text-white_A700 uppercase w-[100%] xl:pl-[31px] xl:pr-[96px] xl:py-[19px] xl:text-fs14">{`Search Location`}</Button>
            </div>
          </Row>
          <Stack className="2xl:h-[454px] 3xl:h-[544px] 3xl:mb-[139px] 3xl:mt-[22px] bg-gradient18  h-[453px] lg:h-[353px] lg:mb-[90px] lg:mt-[14px] mb-[116px] mt-[19px] mx-[auto] rounded-radius4 w-[57%] xl:h-[403px] xl:mb-[103px] xl:mt-[16px]">
            <Image
              src="img_map_2.png"
              className="2xl:h-[454px] 3xl:h-[544px] absolute h-[453px] inset-[0] lg:h-[353px] object-cover rounded-radius4 self-stretch w-[100%] xl:h-[403px]"
              alt="map"
            />
            <Column className="3xl:bottom-[20px] absolute bottom-[17px] inset-x-[0] justify-start lg:bottom-[13px] mx-[auto] w-[20%] xl:bottom-[15px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="bg-white_A700_ea justify-center rounded-radius4 self-stretch shadow-bs36 w-[100%]">
                  <Column className="3xl:mt-[27px] items-end lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
                    <Stack className="2xl:h-[67px] 3xl:h-[80px] 3xl:mx-[16px] font-lato h-[66px] lg:h-[52px] lg:mx-[10px] mx-[14px] w-[80%] xl:h-[59px] xl:mx-[12px]">
                      <Row className="absolute bottom-[0] font-lato inset-x-[0] justify-start mx-[auto] w-[98%]">
                        <Image
                          src="img_mapmarkeralt_3.svg"
                          className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[24px] h-[18px] lg:h-[14px] lg:mb-[15px] lg:mt-[1px] mb-[20px] mt-[2px] object-contain w-[8%] xl:h-[17px] xl:mb-[17px] xl:mt-[1px]"
                          alt="mapmarkeralt"
                        />
                        <Text className="2xl:leading-lh21 3xl:leading-lh25 3xl:ml-[9px] 3xl:text-fs19 font-normal leading-lh2100 lg:leading-lh16 lg:ml-[6px] lg:text-fs12 ml-[8px] text-bluegray_910 text-fs16 text-left w-[87%] xl:leading-lh18 xl:ml-[7px] xl:text-fs14">{`Chemin du Littoral, Porte 4, Marseille`}</Text>
                      </Row>
                      <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:text-fs21 absolute font-goldman font-normal leading-lh2400 lg:leading-lh18 lg:text-fs14 self-stretch text-black_900 text-fs18 text-left top-[0] w-[100%] xl:leading-lh21 xl:text-fs16">{`Marseille Seaport`}</Text>
                    </Stack>
                  </Column>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-lato justify-start self-stretch w-[100%]">
                      <Text className="3xl:mx-[34px] 3xl:text-fs16 font-normal lg:mx-[22px] lg:text-fs10 mx-[29px] text-bluegray_910 text-fs14 text-left xl:mx-[25px] xl:text-fs12">{`Office opening hours:`}</Text>
                      <Column className="items-center lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                        <Row className="font-lato items-center justify-start self-stretch w-[100%]">
                          <Text className="3xl:ml-[34px] 3xl:text-fs16 font-normal lg:ml-[22px] lg:text-fs10 ml-[29px] text-black_907 text-fs14 text-left uppercase xl:ml-[25px] xl:text-fs12">{`Mo-Sat:`}</Text>
                          <Text className="3xl:mr-[27px] 3xl:text-fs16 font-bold lg:mr-[17px] lg:text-fs10 mr-[23px] text-fs14 text-left text-red_A700 xl:mr-[20px] xl:text-fs12">{`9:00am-9:00pm`}</Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Row className="3xl:mt-[18px] 3xl:mx-[34px] font-lato justify-start lg:mt-[11px] lg:mx-[22px] mt-[15px] mx-[29px] w-[51%] xl:mt-[13px] xl:mx-[25px]">
                    <Image
                      src="img_envelope_6.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mt-[1px] lg:w-[10px] mb-[1px] mt-[2px] object-contain w-[14px] xl:h-[13px] xl:mt-[1px] xl:w-[12px]"
                      alt="envelope"
                    />
                    <Text className="3xl:ml-[14px] 3xl:text-fs16 font-normal lg:ml-[9px] lg:text-fs10 ml-[12px] text-black_907 text-fs14 text-left xl:ml-[10px] xl:text-fs12">{`Save for Later`}</Text>
                  </Row>
                  <Column className="3xl:mb-[33px] 3xl:mt-[9px] items-center lg:mb-[21px] lg:mt-[6px] mb-[28px] mt-[8px] self-stretch w-[100%] xl:mb-[24px] xl:mt-[7px]">
                    <Row className="font-goldman justify-center mx-[auto] w-[73%]">
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-red_A700 uppercase xl:text-fs12">{`View Offers`}</Text>
                      <Image
                        src="img_path_1.svg"
                        className="2xl:h-[14px] 2xl:mt-[2px] 3xl:h-[16px] 3xl:ml-[8px] 3xl:mt-[2px] h-[13px] lg:h-[11px] lg:ml-[5px] lg:mt-[1px] mb-[1px] ml-[7px] mt-[2.3701172px] object-contain w-[27%] xl:h-[12px] xl:ml-[6px] xl:mt-[2px]"
                        alt="Path"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="3xl:mt-[54px] items-end lg:mt-[35px] mt-[45px] self-stretch w-[100%] xl:mt-[40px]">
                <Image
                  src="img_mapmarkeralt_4.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:mx-[98px] h-[24px] lg:h-[19px] lg:mx-[63px] mx-[82px] object-contain w-[8%] xl:h-[22px] xl:mx-[72px]"
                  alt="mapmarkeralt"
                />
              </Column>
              <Column className="3xl:mt-[10px] items-center lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]">
                <Row className="3xl:gap-[81px] 3xl:pl-[85px] 3xl:pr-[49px] gap-[68px] grid grid-cols-2 justify-end lg:gap-[52px] lg:pl-[55px] lg:pr-[31px] pl-[71px] pr-[41px] self-stretch w-[100%] xl:gap-[60px] xl:pl-[63px] xl:pr-[36px]">
                  <Image
                    src="img_mapmarkeralt_5.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mt-[14px] h-[24px] lg:h-[19px] lg:mt-[9px] mt-[12px] object-contain w-[100%] xl:h-[22px] xl:mt-[10px]"
                    alt="mapmarkeralt"
                  />
                  <Image
                    src="img_mapmarkeralt_6.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[14px] h-[24px] lg:h-[19px] lg:mb-[9px] mb-[12px] object-contain w-[100%] xl:h-[22px] xl:mb-[10px]"
                    alt="mapmarkeralt"
                  />
                </Row>
              </Column>
            </Column>
          </Stack>
        </Column>
        <Row className="3xl:mt-[138px] justify-center lg:mt-[89px] mt-[115px] self-stretch w-[100%] xl:mt-[102px]">
          <Row className="2xl:mb-[1531px] 3xl:mb-[1837px] 3xl:ml-[552px] font-goldman items-center justify-center lg:mb-[1190px] lg:ml-[357px] mb-[1530px] ml-[460px] w-[13%] xl:mb-[1361px] xl:ml-[409px]">
            <Column className="items-end justify-start w-[74%]">
              <Text className="3xl:ml-[9px] 3xl:text-fs144 font-normal lg:ml-[6px] lg:text-fs93 ml-[8px] text-bluegray_500_53 text-fs120 text-right xl:ml-[7px] xl:text-fs106">{`04`}</Text>
              <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:text-fs28 font-normal leading-lh3000 lg:leading-lh23 lg:text-fs18 self-stretch text-black_907 text-fs24 text-right w-[100%] xl:leading-lh26 xl:text-fs21">{`Enjoy the ride and leave your feedback`}</Text>
            </Column>
            <Line className="2xl:h-[184px] 3xl:h-[220px] 3xl:mb-[37px] 3xl:ml-[78px] 3xl:mt-[46px] bg-indigo_900_91 h-[183px] lg:h-[143px] lg:mb-[24px] lg:ml-[50px] lg:mt-[30px] mb-[31px] ml-[65px] mt-[39px] w-[1px] xl:h-[163px] xl:mb-[27px] xl:ml-[57px] xl:mt-[34px]" />
          </Row>
          <Column className="3xl:ml-[85px] 3xl:mr-[489px] 3xl:mt-[46px] font-goldman justify-start lg:ml-[55px] lg:mr-[317px] lg:mt-[30px] ml-[71px] mr-[408px] mt-[39px] w-[38%] xl:ml-[63px] xl:mr-[362px] xl:mt-[34px]">
            <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:text-fs57 font-normal leading-lh5200 lg:leading-lh40 lg:text-fs37 self-stretch text-black_907 text-fs48 text-left w-[100%] xl:leading-lh46 xl:text-fs42">{`Reviews and videos from our clients:`}</Text>
            <Column className="3xl:mt-[52px] items-center lg:mt-[34px] mt-[44px] self-stretch w-[100%] xl:mt-[39px]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                orientation="vertical"
              >
                <Column className="3xl:my-[70px] justify-start lg:my-[45px] my-[59px] self-stretch w-[100%] xl:my-[52px]">
                  <Stack className="2xl:h-[83px] 3xl:h-[99px] 3xl:mr-[12px] h-[82px] lg:h-[64px] lg:ml-[2px] lg:mr-[7px] ml-[3px] mr-[10px] w-[44%] xl:h-[73px] xl:ml-[2px] xl:mr-[8px]">
                    <Image
                      src="img_rate.svg"
                      className="2xl:h-[22px] 3xl:bottom-[16px] 3xl:h-[26px] 3xl:right-[55px] absolute bottom-[14px] h-[21px] lg:bottom-[10px] lg:h-[17px] lg:right-[35px] object-contain right-[46px] w-[55%] xl:bottom-[12px] xl:h-[19px] xl:right-[40px]"
                      alt="rate"
                    />
                    <Row className="absolute font-goldman inset-[0] justify-start self-stretch w-[100%]">
                      <div className="2xl:h-[83px] 3xl:h-[99px] 3xl:w-[98px] h-[82px] lg:h-[64px] lg:w-[63px] rounded-radius50 w-[82px] xl:h-[73px] xl:w-[72px]"></div>
                      <Text className="3xl:mb-[61px] 3xl:ml-[18px] 3xl:mt-[8px] 3xl:text-fs28 font-normal lg:mb-[39px] lg:ml-[11px] lg:mt-[5px] lg:text-fs18 mb-[51px] ml-[15px] mt-[7px] text-black_907 text-fs24 text-left xl:mb-[45px] xl:ml-[13px] xl:mt-[6px] xl:text-fs21">{`Marianna Frazoni`}</Text>
                    </Row>
                  </Stack>
                  <Column className="3xl:mt-[22px] items-center lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                    <Column className="font-lato justify-start self-stretch w-[100%]">
                      <Text className="2xl:leading-lh31 3xl:leading-lh37 3xl:text-fs24 font-normal leading-lh3100 lg:leading-lh24 lg:text-fs15 self-stretch text-bluegray_910 text-fs20 text-left w-[100%] xl:leading-lh27 xl:text-fs17">{`“Ut id lobortis eros, sed finibus dui. Cras eget purus lacus. Suspendisse sodales massa quis turpis ultrices ultricies. Cras euismod eros at vehicula sagittis. Suspendisse condimentum tortor nec enim pellentesque feugiat. Nulla tempor urna vitae sapien iaculis, auctor condimentum enim auctor”`}</Text>
                      <Column className="3xl:mt-[10px] items-center lg:mt-[7px] mt-[9px] self-stretch w-[100%] xl:mt-[8px]">
                        <Image
                          src="img_gallery.png"
                          className="2xl:h-[281px] 3xl:h-[337px] h-[280px] lg:h-[218px] mx-[auto] object-contain w-[99%] xl:h-[250px]"
                          alt="Gallery"
                        />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Line className="w-[50%] bg-bluegray_103 flex-wrap min-h-[auto]" />
                <Column className="3xl:my-[70px] justify-start lg:my-[45px] my-[59px] self-stretch w-[100%] xl:my-[52px]">
                  <Stack className="2xl:h-[83px] 3xl:h-[99px] 3xl:mr-[12px] h-[82px] lg:h-[64px] lg:ml-[2px] lg:mr-[7px] ml-[3px] mr-[10px] w-[46%] xl:h-[73px] xl:ml-[2px] xl:mr-[8px]">
                    <Image
                      src="img_rate_1.svg"
                      className="2xl:h-[22px] 3xl:bottom-[16px] 3xl:h-[26px] 3xl:right-[79px] absolute bottom-[14px] h-[21px] lg:bottom-[10px] lg:h-[17px] lg:right-[51px] object-contain right-[66px] w-[52%] xl:bottom-[12px] xl:h-[19px] xl:right-[58px]"
                      alt="rate"
                    />
                    <Row className="absolute font-goldman inset-[0] justify-start self-stretch w-[100%]">
                      <div className="2xl:h-[83px] 3xl:h-[99px] 3xl:w-[98px] h-[82px] lg:h-[64px] lg:w-[63px] rounded-radius50 w-[82px] xl:h-[73px] xl:w-[72px]"></div>
                      <Text className="3xl:mb-[61px] 3xl:ml-[18px] 3xl:mt-[8px] 3xl:text-fs28 font-normal lg:mb-[39px] lg:ml-[11px] lg:mt-[5px] lg:text-fs18 mb-[51px] ml-[15px] mt-[7px] text-black_907 text-fs24 text-left xl:mb-[45px] xl:ml-[13px] xl:mt-[6px] xl:text-fs21">{`Donovan Nordtrom`}</Text>
                    </Row>
                  </Stack>
                  <Column className="3xl:mt-[22px] items-center lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                    <Column className="font-lato justify-start self-stretch w-[100%]">
                      <Text className="2xl:leading-lh31 3xl:leading-lh37 3xl:text-fs24 font-normal leading-lh3100 lg:leading-lh24 lg:text-fs15 text-bluegray_910 text-fs20 text-left w-[100%] xl:leading-lh27 xl:text-fs17">{`“Suspendisse condimentum tortor nec enim pellentesque feugiat. Fusce vulputate varius orci, eu imperdiet orci dictum in. Nulla tempor urna vitae sapien iaculis, auctor condimentum enim auctor”`}</Text>
                      <Column className="3xl:mt-[22px] items-center lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                        <Image
                          src="img_gallery_1.svg"
                          className="2xl:h-[131px] 3xl:h-[157px] h-[130px] lg:h-[102px] object-cover self-stretch w-[100%] xl:h-[116px]"
                          alt="Gallery"
                        />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Line className="w-[50%] bg-bluegray_103 flex-wrap min-h-[auto]" />
                <Column className="3xl:my-[70px] justify-start lg:my-[45px] my-[59px] self-stretch w-[100%] xl:my-[52px]">
                  <Stack className="2xl:h-[83px] 3xl:h-[99px] 3xl:mr-[12px] h-[82px] lg:h-[64px] lg:ml-[2px] lg:mr-[7px] ml-[3px] mr-[10px] w-[47%] xl:h-[73px] xl:ml-[2px] xl:mr-[8px]">
                    <Image
                      src="img_rate.svg"
                      className="2xl:h-[22px] 3xl:bottom-[16px] 3xl:h-[26px] 3xl:right-[84px] absolute bottom-[14px] h-[21px] lg:bottom-[10px] lg:h-[17px] lg:right-[54px] object-contain right-[70px] w-[51%] xl:bottom-[12px] xl:h-[19px] xl:right-[62px]"
                      alt="rate"
                    />
                    <Row className="absolute font-goldman inset-[0] justify-start self-stretch w-[100%]">
                      <div className="2xl:h-[83px] 3xl:h-[99px] 3xl:w-[98px] h-[82px] lg:h-[64px] lg:w-[63px] rounded-radius50 w-[82px] xl:h-[73px] xl:w-[72px]"></div>
                      <Text className="3xl:mb-[61px] 3xl:ml-[18px] 3xl:mt-[8px] 3xl:text-fs28 font-normal lg:mb-[39px] lg:ml-[11px] lg:mt-[5px] lg:text-fs18 mb-[51px] ml-[15px] mt-[7px] text-black_907 text-fs24 text-left xl:mb-[45px] xl:ml-[13px] xl:mt-[6px] xl:text-fs21">{`Elisabeth Summers`}</Text>
                    </Row>
                  </Stack>
                  <Column className="3xl:mt-[22px] items-center lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                    <Column className="font-lato justify-start self-stretch w-[100%]">
                      <Text className="2xl:leading-lh31 3xl:leading-lh37 3xl:text-fs24 font-normal leading-lh3100 lg:leading-lh24 lg:text-fs15 text-bluegray_910 text-fs20 text-left w-[100%] xl:leading-lh27 xl:text-fs17">{`“Vestibulum in libero cursus nunc egestas pretium. Duis luctus condimentum ullamcorper. Sed mattis risus eu lorem tempor, in feugiat”`}</Text>
                      <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                        <Image
                          src="img_gallery_2.svg"
                          className="2xl:h-[131px] 3xl:h-[157px] h-[130px] lg:h-[102px] object-cover self-stretch w-[100%] xl:h-[116px]"
                          alt="Gallery"
                        />
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </List>
              <Row className="3xl:ml-[7px] 3xl:mt-[127px] font-goldman justify-start lg:ml-[4px] lg:mt-[82px] ml-[6px] mt-[106px] w-[99%] xl:ml-[5px] xl:mt-[94px]">
                <Text className="3xl:mb-[19px] 3xl:text-fs19 font-bold lg:mb-[12px] lg:text-fs12 mb-[16px] mt-[1px] text-fs16 text-left text-red_A700 uppercase xl:mb-[14px] xl:text-fs14">{`View All Reviews`}</Text>
                <Image
                  src="img_path_1.svg"
                  className="2xl:h-[14px] 2xl:mb-[18px] 2xl:mt-[4px] 3xl:h-[16px] 3xl:mb-[22px] 3xl:ml-[9px] 3xl:mt-[5px] h-[13px] lg:h-[11px] lg:mb-[14px] lg:ml-[6px] lg:mt-[3px] mb-[18.629883px] ml-[8px] mt-[4.370117px] object-contain w-[6%] xl:h-[12px] xl:mb-[16px] xl:ml-[7px] xl:mt-[3px]"
                  alt="Path"
                />
                <Row className="3xl:ml-[183px] font-goldman justify-between lg:ml-[119px] ml-[153px] px-[0] w-[47%] xl:ml-[136px]">
                  <Stack className="2xl:h-[37px] 3xl:h-[44px] h-[36px] lg:h-[28px] w-[41%] xl:h-[33px]">
                    <Text className="3xl:text-fs21 absolute font-normal inset-y-[0] left-[0] lg:right-[1px] lg:text-fs14 right-[2px] text-black_900 text-fs18 text-left xl:right-[1px] xl:text-fs16">{`Follow Us:`}</Text>
                    <Image
                      src="img_facebook.svg"
                      className="2xl:h-[22px] 3xl:h-[26px] absolute h-[21px] lg:h-[17px] object-contain right-[0] top-[1px] w-[13%] xl:h-[19px]"
                      alt="facebook"
                    />
                  </Stack>
                  <Image
                    src="img_youtube.svg"
                    className="2xl:h-[22px] 3xl:h-[26px] 3xl:mb-[16px] 3xl:w-[25px] h-[21px] lg:h-[17px] lg:mb-[10px] lg:w-[16px] mb-[14px] mt-[1px] object-contain w-[21px] xl:h-[19px] xl:mb-[12px] xl:w-[18px]"
                    alt="youtube"
                  />
                  <Image
                    src="img_instagram.svg"
                    className="2xl:h-[22px] 3xl:h-[26px] 3xl:mb-[16px] h-[21px] lg:h-[17px] lg:mb-[10px] mb-[14px] mt-[1px] object-contain w-[5%] xl:h-[19px] xl:mb-[12px]"
                    alt="instagram"
                  />
                  <Image
                    src="img_twitter.svg"
                    className="2xl:h-[22px] 3xl:h-[26px] 3xl:mb-[16px] h-[21px] lg:h-[17px] lg:mb-[10px] mb-[14px] mt-[1px] object-contain w-[5%] xl:h-[19px] xl:mb-[12px]"
                    alt="Twitter"
                  />
                  <Image
                    src="img_envelope_7.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[20px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mb-[13px] lg:w-[14px] mb-[17px] mt-[1px] object-contain w-[18px] xl:h-[17px] xl:mb-[15px] xl:w-[16px]"
                    alt="Envelope"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
        </Row>
        <Stack className="2xl:h-[1295px] 3xl:h-[1554px] 3xl:mt-[168px] h-[1294px] lg:h-[1007px] lg:mt-[108px] mt-[140px] self-stretch w-[100%] xl:h-[1152px] xl:mt-[124px]">
          <div className="2xl:h-[62px] 3xl:h-[74px] absolute bg-gray_103 bottom-[0] h-[61px] lg:h-[48px] self-stretch w-[100%] xl:h-[55px]"></div>
          <Stack className="2xl:h-[1295px] 3xl:h-[1554px] absolute h-[1294px] inset-[0] lg:h-[1007px] self-stretch w-[100%] xl:h-[1152px]">
            <List
              className="absolute flex-wrap gap-[0] grid grid-cols-2 min-h-[auto] self-stretch top-[0] w-[100%]"
              orientation="horizontal"
            >
              <Column className="3xl:mb-[72px] bg-gradient19  font-goldman justify-center lg:mb-[46px] mb-[60px] w-[100%] xl:mb-[53px]">
                <Text className="3xl:mt-[443px] 3xl:mx-[70px] 3xl:text-fs48 font-goldman font-normal leading-lh lg:mt-[287px] lg:mx-[45px] lg:text-fs31 mt-[369px] mx-[59px] text-fs40 text-gray_53 text-left w-[87%] xl:mt-[328px] xl:mx-[52px] xl:text-fs35">{`Cras eu ante bibendum, lacinia velit sit amet, scelerisque enim`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mx-[72px] 3xl:text-fs21 font-lato font-normal leading-lh2700 lg:leading-lh21 lg:mt-[2px] lg:mx-[46px] lg:text-fs14 mt-[3px] mx-[60px] text-fs18 text-gray_53 text-left w-[87%] xl:leading-lh24 xl:mt-[2px] xl:mx-[53px] xl:text-fs16">{`Phasellus porta pulvinar metus, sit amet bibendum lectus hendrerit vel. Duis ullamcorper, justo quis hendrerit venenatis, purus mi volutpat dui, vel commodo urna eros eget sapien`}</Text>
                <Row className="3xl:mb-[68px] 3xl:mt-[15px] 3xl:mx-[72px] font-goldman items-center justify-start lg:mb-[44px] lg:mt-[10px] lg:mx-[46px] mb-[57px] mt-[13px] mx-[60px] w-[24%] xl:mb-[50px] xl:mt-[11px] xl:mx-[53px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`Read in our blog`}</Text>
                  <Image
                    src="img_path_1.svg"
                    className="2xl:h-[14px] 2xl:mb-[2px] 2xl:mt-[3px] 3xl:h-[16px] 3xl:mb-[3px] 3xl:ml-[16px] 3xl:mt-[4px] h-[13px] lg:h-[11px] lg:ml-[10px] lg:my-[2px] mb-[2.6298828px] ml-[14px] mt-[3.3701172px] object-contain w-[18%] xl:h-[12px] xl:ml-[12px] xl:my-[2px]"
                    alt="Path"
                  />
                </Row>
              </Column>
              <Column className="3xl:mt-[72px] bg-gradient19  font-goldman justify-center lg:mt-[46px] mt-[60px] w-[100%] xl:mt-[53px]">
                <Text className="3xl:mt-[443px] 3xl:mx-[70px] 3xl:text-fs48 font-goldman font-normal leading-lh lg:mt-[287px] lg:mx-[45px] lg:text-fs31 mt-[369px] mx-[59px] text-fs40 text-gray_53 text-left w-[87%] xl:mt-[328px] xl:mx-[52px] xl:text-fs35">{`Fed finibus mi et purus finibus, ut condimentum mauris fringilla`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[12px] 3xl:mx-[72px] 3xl:text-fs21 font-lato font-normal leading-lh2700 lg:leading-lh21 lg:mt-[7px] lg:mx-[46px] lg:text-fs14 mt-[10px] mx-[60px] text-fs18 text-gray_53 text-left w-[87%] xl:leading-lh24 xl:mt-[8px] xl:mx-[53px] xl:text-fs16">{`Phasellus porta pulvinar metus, sit amet bibendum lectus hendrerit vel. Duis ullamcorper, justo quis hendrerit venenatis, purus mi volutpat dui, vel commodo urna eros eget sapien`}</Text>
                <Row className="3xl:mb-[68px] 3xl:mt-[15px] 3xl:mx-[72px] font-goldman items-center justify-start lg:mb-[44px] lg:mt-[10px] lg:mx-[46px] mb-[57px] mt-[13px] mx-[60px] w-[24%] xl:mb-[50px] xl:mt-[11px] xl:mx-[53px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`Read in our blog`}</Text>
                  <Image
                    src="img_path_1.svg"
                    className="2xl:h-[14px] 2xl:mb-[2px] 2xl:mt-[3px] 3xl:h-[16px] 3xl:mb-[3px] 3xl:ml-[16px] 3xl:mt-[4px] h-[13px] lg:h-[11px] lg:ml-[10px] lg:my-[2px] mb-[2.6298828px] ml-[14px] mt-[3.3701172px] object-contain w-[18%] xl:h-[12px] xl:ml-[12px] xl:my-[2px]"
                    alt="Path"
                  />
                </Row>
              </Column>
            </List>
            <List
              className="absolute bottom-[0] flex-wrap gap-[0] grid grid-cols-2 min-h-[auto] self-stretch w-[100%]"
              orientation="horizontal"
            >
              <Column className="3xl:mb-[72px] bg-gradient19  font-goldman justify-center lg:mb-[46px] mb-[60px] w-[100%] xl:mb-[53px]">
                <Text className="3xl:mt-[503px] 3xl:mx-[72px] 3xl:text-fs48 font-goldman font-normal lg:mt-[325px] lg:mx-[46px] lg:text-fs31 mt-[419px] mx-[60px] text-fs40 text-gray_53 text-left xl:mt-[372px] xl:mx-[53px] xl:text-fs35">{`Phasellus porta pulvinar metus`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[16px] 3xl:mx-[72px] 3xl:text-fs21 font-lato font-normal leading-lh2700 lg:leading-lh21 lg:mt-[10px] lg:mx-[46px] lg:text-fs14 mt-[14px] mx-[60px] text-fs18 text-gray_53 text-left w-[87%] xl:leading-lh24 xl:mt-[12px] xl:mx-[53px] xl:text-fs16">{`Phasellus porta pulvinar metus, sit amet bibendum lectus hendrerit vel. Duis ullamcorper, justo quis hendrerit venenatis, purus mi volutpat dui, vel commodo urna eros eget sapien`}</Text>
                <Row className="3xl:mb-[68px] 3xl:mt-[15px] 3xl:mx-[72px] font-goldman items-center justify-start lg:mb-[44px] lg:mt-[10px] lg:mx-[46px] mb-[57px] mt-[13px] mx-[60px] w-[24%] xl:mb-[50px] xl:mt-[11px] xl:mx-[53px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`Read in our blog`}</Text>
                  <Image
                    src="img_path_1.svg"
                    className="2xl:h-[14px] 2xl:mb-[2px] 2xl:mt-[3px] 3xl:h-[16px] 3xl:mb-[3px] 3xl:ml-[16px] 3xl:mt-[4px] h-[13px] lg:h-[11px] lg:ml-[10px] lg:my-[2px] mb-[2.6298828px] ml-[14px] mt-[3.3701172px] object-contain w-[18%] xl:h-[12px] xl:ml-[12px] xl:my-[2px]"
                    alt="Path"
                  />
                </Row>
              </Column>
              <Column className="3xl:mt-[72px] bg-gradient19  font-goldman justify-center lg:mt-[46px] mt-[60px] w-[100%] xl:mt-[53px]">
                <Text className="3xl:mt-[443px] 3xl:mx-[70px] 3xl:text-fs48 font-goldman font-normal leading-lh lg:mt-[287px] lg:mx-[45px] lg:text-fs31 mt-[369px] mx-[59px] text-fs40 text-gray_53 text-left w-[87%] xl:mt-[328px] xl:mx-[52px] xl:text-fs35">{`Maecenas sagittis turpis non pharetra pulvinar. Nullam mollis tortor eget`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[12px] 3xl:mx-[72px] 3xl:text-fs21 font-lato font-normal leading-lh2700 lg:leading-lh21 lg:mt-[7px] lg:mx-[46px] lg:text-fs14 mt-[10px] mx-[60px] text-fs18 text-gray_53 text-left w-[87%] xl:leading-lh24 xl:mt-[8px] xl:mx-[53px] xl:text-fs16">{`Phasellus porta pulvinar metus, sit amet bibendum lectus hendrerit vel. Duis ullamcorper, justo quis hendrerit venenatis, purus mi volutpat dui, vel commodo urna eros eget sapien`}</Text>
                <Row className="3xl:mb-[68px] 3xl:mt-[15px] 3xl:mx-[72px] font-goldman items-center justify-start lg:mb-[44px] lg:mt-[10px] lg:mx-[46px] mb-[57px] mt-[13px] mx-[60px] w-[24%] xl:mb-[50px] xl:mt-[11px] xl:mx-[53px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-red_A700 uppercase xl:text-fs14">{`Read in our blog`}</Text>
                  <Image
                    src="img_path_1.svg"
                    className="2xl:h-[14px] 2xl:mb-[2px] 2xl:mt-[3px] 3xl:h-[16px] 3xl:mb-[3px] 3xl:ml-[16px] 3xl:mt-[4px] h-[13px] lg:h-[11px] lg:ml-[10px] lg:my-[2px] mb-[2.6298828px] ml-[14px] mt-[3.3701172px] object-contain w-[18%] xl:h-[12px] xl:ml-[12px] xl:my-[2px]"
                    alt="Path"
                  />
                </Row>
              </Column>
            </List>
          </Stack>
        </Stack>
        <div className="self-stretch w-[100%]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="bg-gray_100_98 items-center justify-evenly px-[0] self-stretch w-[100%]">
              <Column className="2xl:mt-[131px] 3xl:mb-[147px] 3xl:mt-[158px] font-goldman justify-start lg:mb-[95px] lg:mt-[102px] mb-[123px] mt-[131.74023px] w-[17%] xl:mb-[109px] xl:mt-[117px]">
                <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                  <Image
                    src="img_logomain.png"
                    className="2xl:h-[35px] 2xl:ml-[5px] 3xl:h-[41px] 3xl:ml-[6px] h-[34px] lg:h-[27px] lg:ml-[4px] ml-[5.6099854px] object-contain w-[9%] xl:h-[31px] xl:ml-[4px]"
                    alt="LogoMain"
                  />
                  <Text className="2xl:mb-[3px] 2xl:ml-[5px] 2xl:mt-[4px] 3xl:mb-[4px] 3xl:ml-[6px] 3xl:mr-[204px] 3xl:mt-[5px] 3xl:text-fs27 font-bold lg:mb-[2px] lg:ml-[4px] lg:mr-[132px] lg:mt-[3px] lg:text-fs17 mb-[3.7402344px] ml-[5.600006px] mr-[170px] mt-[4.2597656px] text-black_907 text-fs23 text-left uppercase xl:ml-[4px] xl:mr-[151px] xl:my-[3px] xl:text-fs20">{`Rotors`}</Text>
                </Row>
                <Column className="2xl:mt-[13px] 3xl:mt-[15px] items-center lg:mt-[10px] mt-[13.259766px] self-stretch w-[100%] xl:mt-[11px]">
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
                            src="img_mapmarkeralt_7.svg"
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
                src="img_arrowup.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:my-[13px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:my-[8px] lg:w-[37px] my-[11px] object-contain w-[48px] xl:h-[43px] xl:my-[9px] xl:w-[42px]"
                alt="Arrowup"
              />
              <Image
                src="img_socialmedia_3.svg"
                className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[30px] 3xl:mt-[34px] h-[16px] lg:h-[13px] lg:mb-[19px] lg:mt-[22px] mb-[25px] mt-[29px] object-contain w-[5%] xl:h-[15px] xl:mb-[22px] xl:mt-[25px]"
                alt="socialmedia"
              />
            </Row>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Home2Page;
