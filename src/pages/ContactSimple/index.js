import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const ContactSimplePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
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
              src="img_rightside_2.svg"
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
      <Column className="font-lato justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <Column className="bg-gradient15  font-goldman items-center justify-start self-stretch w-[100%]">
            <Text className="3xl:my-[76px] 3xl:text-fs57 font-normal lg:my-[49px] lg:text-fs37 mx-[auto] my-[64px] text-center text-fs48 text-white_A700 xl:my-[56px] xl:text-fs42">{`Contact`}</Text>
          </Column>
        </Column>
        <Text className="3xl:pb-[10px] 3xl:pl-[42px] 3xl:pt-[9px] 3xl:text-fs16 bg-gray_101 font-normal leading-lh lg:pb-[7px] lg:pl-[27px] lg:pt-[6px] lg:text-fs10 pb-[9px] pl-[35px] pt-[8px] self-stretch text-bluegray_500 text-fs14 text-left w-[100%] xl:pb-[8px] xl:pl-[31px] xl:pt-[7px] xl:text-fs12">{`Home / Contact`}</Text>
      </Column>
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[1124px] 3xl:h-[1349px] h-[1123px] lg:h-[874px] self-stretch w-[100%] xl:h-[1000px]">
          <Stack className="2xl:h-[1124px] 3xl:h-[1349px] absolute h-[1123px] inset-[0] lg:h-[874px] self-stretch w-[100%] xl:h-[1000px]">
            <Image
              src="img_map_3.png"
              className="2xl:h-[750px] 3xl:h-[900px] absolute h-[749px] lg:h-[583px] object-cover self-stretch top-[0] w-[100%] xl:h-[667px]"
              alt="map"
            />
            <Column className="absolute bg-bluegray_910 bottom-[0] inset-x-[0] justify-center mx-[auto] rounded-radius4 shadow-bs37 w-[58%]">
              <Row className="2xl:mx-[51px] 3xl:mt-[60px] 3xl:mx-[61px] font-goldman justify-start lg:mt-[38px] lg:mx-[39px] ml-[51.109985px] mr-[51.11px] mt-[50px] w-[74%] xl:mt-[44px] xl:mx-[45px]">
                <Image
                  src="img_logomain.png"
                  className="2xl:h-[35px] 3xl:h-[41px] h-[34px] lg:h-[27px] lg:mt-[2px] mb-[1px] mt-[3px] object-contain w-[4%] xl:h-[31px] xl:mt-[2px]"
                  alt="LogoMain"
                />
                <Text className="2xl:ml-[5px] 3xl:mb-[6px] 3xl:ml-[6px] 3xl:mt-[8px] 3xl:text-fs27 font-bold lg:mb-[3px] lg:ml-[3px] lg:mt-[5px] lg:text-fs17 mb-[5px] ml-[5.100006px] mt-[7px] text-fs23 text-left text-white_A700 uppercase xl:mb-[4px] xl:ml-[4px] xl:mt-[6px] xl:text-fs20">{`Rotors`}</Text>
                <Text className="3xl:ml-[481px] 3xl:text-fs38 font-normal lg:ml-[311px] lg:text-fs24 ml-[401px] text-fs32 text-left text-white_A700 xl:ml-[356px] xl:text-fs28">{`Contact Details:`}</Text>
              </Row>
              <Column className="3xl:mb-[82px] 3xl:mt-[18px] items-center lg:mb-[53px] lg:mt-[11px] mb-[69px] mt-[15px] self-stretch w-[100%] xl:mb-[61px] xl:mt-[13px]">
                <Row className="items-end justify-between px-[0] self-stretch w-[100%]">
                  <Column className="3xl:ml-[61px] font-lato justify-start lg:ml-[39px] ml-[51px] w-[40%] xl:ml-[45px]">
                    <Column className="self-stretch w-[100%]">
                      <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:text-fs21 font-normal leading-lh2600 lg:leading-lh20 lg:text-fs14 self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:leading-lh23 xl:text-fs16">{`Mauris dignissim condimentum viverra. Curabitur blandit eu justo id porta`}</Text>
                    </Column>
                    <div className="2xl:h-[231px] 3xl:h-[277px] 3xl:ml-[10px] 3xl:mr-[19px] 3xl:mt-[25px] h-[230px] lg:h-[179px] lg:ml-[7px] lg:mr-[12px] lg:mt-[16px] ml-[9px] mr-[16px] mt-[21px] w-[94%] xl:h-[205px] xl:ml-[8px] xl:mr-[14px] xl:mt-[18px]"></div>
                  </Column>
                  <Column className="3xl:mr-[72px] 3xl:mt-[18px] font-lato justify-start lg:mb-[1px] lg:mr-[46px] lg:mt-[11px] mb-[2px] mr-[60px] mt-[15px] w-[41%] xl:mb-[1px] xl:mr-[53px] xl:mt-[13px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Column className="items-center justify-start self-stretch w-[100%]">
                        <Row className="font-lato justify-start self-stretch w-[100%]">
                          <Image
                            src="img_mapmarkeralt_9.svg"
                            className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[36px] 3xl:ml-[10px] h-[18px] lg:h-[14px] lg:mb-[23px] lg:ml-[7px] lg:mt-[3px] mb-[30px] ml-[9px] mt-[4px] object-contain w-[3%] xl:h-[17px] xl:mb-[26px] xl:ml-[8px] xl:mt-[3px]"
                            alt="mapmarkeralt"
                          />
                          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:ml-[20px] 3xl:mr-[22px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:ml-[13px] lg:mr-[14px] lg:text-fs14 ml-[17px] mr-[19px] text-fs18 text-left text-white_A700 w-[87%] xl:leading-lh24 xl:ml-[15px] xl:mr-[16px] xl:text-fs16">{`Unit 9, Manor Industrial Estate, Lower Wash Lane, Warrington, WA4`}</Text>
                        </Row>
                        <Row className="3xl:mt-[19px] font-lato justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                          <Image
                            src="img_clock_5.svg"
                            className="2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[10px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mb-[1px] lg:ml-[7px] lg:mt-[3px] lg:w-[14px] mb-[2px] ml-[9px] mt-[4px] object-contain w-[18px] xl:h-[17px] xl:mb-[1px] xl:ml-[8px] xl:mt-[3px] xl:w-[16px]"
                            alt="clock"
                          />
                          <Text className="3xl:ml-[15px] 3xl:mr-[288px] 3xl:text-fs21 font-normal lg:ml-[10px] lg:mr-[186px] lg:text-fs14 ml-[13px] mr-[240px] text-fs18 text-left text-white_A700 xl:ml-[11px] xl:mr-[213px] xl:text-fs16">{`WH: 8:00am - 9:30pm`}</Text>
                        </Row>
                      </Column>
                    </Column>
                    <Row className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:mt-[33px] items-center justify-start lg:mt-[21px] lg:mx-[7px] ml-[9px] mr-[10px] mt-[28px] w-[33%] xl:mt-[24px] xl:mx-[8px]">
                      <Image
                        src="img_phone_6.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[6px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[3px] lg:w-[14px] mb-[5px] mt-[4px] object-contain w-[18px] xl:h-[17px] xl:mb-[4px] xl:mt-[3px] xl:w-[16px]"
                        alt="phone"
                      />
                      <Text className="3xl:ml-[15px] 3xl:text-fs21 font-normal lg:ml-[10px] lg:text-fs14 ml-[13px] text-fs18 text-left text-white_A700 xl:ml-[11px] xl:text-fs16">{`01967 411232`}</Text>
                    </Row>
                    <Row className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:mt-[27px] items-center justify-start lg:mt-[17px] lg:mx-[7px] ml-[9px] mr-[10px] mt-[23px] w-[37%] xl:mt-[20px] xl:mx-[8px]">
                      <Image
                        src="img_envelope_8.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[6px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[3px] lg:w-[14px] mb-[5px] mt-[4px] object-contain w-[18px] xl:h-[17px] xl:mb-[4px] xl:mt-[3px] xl:w-[16px]"
                        alt="envelope"
                      />
                      <Text className="3xl:ml-[15px] 3xl:text-fs21 font-normal lg:ml-[10px] lg:text-fs14 ml-[13px] text-fs18 text-left text-white_A700 xl:ml-[11px] xl:text-fs16">{`rotorseml@eml.fr`}</Text>
                    </Row>
                    <div className="3xl:mt-[46px] bg-transparent border-bw lg:mt-[30px] mt-[39px] self-stretch w-[100%] xl:mt-[34px] input-wrap">
                      <Image
                        src="img_search_12.svg"
                        className="absolute top-[22.375px] bottom-[21.375px] right-[31.640015px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[24px] xl:right-[28px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 2xl:right-[31px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[37px]"
                        alt="raju_text_icon"
                      />
                      <Button className="2xl:pb-[21px] 2xl:pl-[22px] 2xl:pr-[57px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[26px] 3xl:pr-[69px] 3xl:pt-[26px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[16px] lg:pl-[17px] lg:pr-[44px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[22.419983px] pr-[57.640015px] pt-[22.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pl-[19px] xl:pr-[51px] xl:py-[19px] xl:text-fs14">{`Search`}</Button>
                    </div>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Stack>
          <Image
            src="img_mapmarkeralt_10.svg"
            className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[946px] 3xl:top-[456px] absolute h-[48px] lg:h-[38px] lg:right-[612px] lg:top-[295px] object-contain right-[788px] top-[380px] w-[2%] xl:h-[43px] xl:right-[700px] xl:top-[338px]"
            alt="mapmarkeralt"
          />
        </Stack>
        <Column className="3xl:mt-[117px] font-goldman items-center justify-start lg:mt-[76px] mt-[98px] mx-[auto] w-[48%] xl:mt-[87px]">
          <Stack className="2xl:h-[57px] 3xl:h-[68px] font-goldman h-[56px] lg:h-[44px] w-[100%] xl:h-[50px]">
            <Text className="3xl:text-fs57 absolute font-normal inset-[0] lg:text-fs37 self-stretch text-black_907 text-center text-fs48 xl:text-fs42">{`Send Us a Message`}</Text>
            <Row className="3xl:bottom-[16px] 3xl:gap-[623px] absolute bottom-[14px] gap-[519px] grid grid-cols-2 inset-x-[0] items-center justify-between lg:bottom-[10px] lg:gap-[403px] mx-[auto] w-[62%] xl:bottom-[12px] xl:gap-[461px]">
              <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
              <div className="2xl:h-[9px] 3xl:h-[10px] bg-red_A700 h-[8px] lg:h-[7px] w-[100%]"></div>
            </Row>
          </Stack>
          <Column className="3xl:mt-[43px] font-lato justify-start lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="3xl:gap-[27px] font-lato gap-[23px] grid grid-cols-2 items-center justify-between lg:gap-[17px] self-stretch w-[100%] xl:gap-[20px]">
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="FirstName"
                  placeholder={`First Name`}
                ></Input>
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="LastName"
                  placeholder={`Last Name`}
                ></Input>
              </Row>
              <Row className="3xl:gap-[27px] 3xl:mt-[24px] font-lato gap-[23px] grid grid-cols-2 items-center justify-between lg:gap-[17px] lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:gap-[20px] xl:mt-[17px]">
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="email"
                  placeholder={`E-mail`}
                ></Input>
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="Number"
                  placeholder={`Phone Number`}
                ></Input>
              </Row>
            </Column>
            <TextArea
              className="2xl:pb-[36px] 2xl:pt-[21px] 3xl:mt-[24px] 3xl:pb-[43px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:mt-[15px] lg:pb-[28px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 mt-[20px] pb-[36.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[17px] xl:pb-[32px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
              name="Txtfield"
              placeholder={`Leave Your Message`}
            ></TextArea>
          </Column>
          <div className="3xl:mt-[49px] 3xl:mx-[12px] bg-transparent border-bw lg:mt-[31px] lg:mx-[7px] mt-[41px] mx-[10px] w-[36%] xl:mt-[36px] xl:mx-[8px] input-wrap">
            <Image
              src="img_path.svg"
              className="absolute top-[23.205px] bottom-[22.205px] right-[65px] border-bw bg-transparent lg:top-[18px] lg:bottom-[17px] lg:right-[50px] xl:top-[20px] xl:bottom-[19px] xl:right-[57px] 2xl:top-[23px] 2xl:bottom-[22px] 3xl:top-[27px] 3xl:bottom-[26px] 3xl:right-[78px]"
              alt="Path"
            />
            <Button className="2xl:pb-[22px] 2xl:pt-[23px] 3xl:pb-[26px] 3xl:pl-[42px] 3xl:pr-[140px] 3xl:pt-[27px] 3xl:text-fs16 bg-red_A700 border-bw font-bold font-goldman lg:pb-[17px] lg:pl-[27px] lg:pr-[91px] lg:pt-[18px] lg:text-fs10 pb-[22.205px] pl-[35px] pr-[117px] pt-[23.205px] rounded-radius4 shadow-bs27 text-fs14 text-left text-white_A700 uppercase w-[100%] xl:pb-[19px] xl:pl-[31px] xl:pr-[104px] xl:pt-[20px] xl:text-fs12">{`Send a Message`}</Button>
          </div>
        </Column>
      </Column>
      <div className="3xl:mt-[144px] lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
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
              src="img_arrowup_2.svg"
              className="2xl:h-[49px] 3xl:h-[58px] 3xl:my-[13px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:my-[8px] lg:w-[37px] my-[11px] object-contain w-[48px] xl:h-[43px] xl:my-[9px] xl:w-[42px]"
              alt="Arrowup"
            />
            <Image
              src="img_socialmedia_5.svg"
              className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[30px] 3xl:mt-[34px] h-[16px] lg:h-[13px] lg:mb-[19px] lg:mt-[22px] mb-[25px] mt-[29px] object-contain w-[5%] xl:h-[15px] xl:mb-[22px] xl:mt-[25px]"
              alt="socialmedia"
            />
          </Row>
        </Column>
      </div>
    </Column>
  );
};

export default ContactSimplePage;
