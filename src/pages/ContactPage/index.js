import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Grid } from "components/Grid";
import { Input } from "components/Input";
import { Button } from "components/Button";

const ContactPagePage = () => {
  return (
    <Column className="bg-gray_905 justify-end ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
            <Image
              src="img_group1_1.svg"
              className="2xl:h-[19px] 2xl:mb-[40px] 3xl:h-[23px] 3xl:mb-[48px] 3xl:ml-[168px] 3xl:mt-[49px] h-[18.85px] lg:h-[15px] lg:ml-[108px] lg:my-[31px] mb-[40.15px] ml-[140px] mt-[41px] object-contain w-[9%] xl:h-[17px] xl:mb-[35px] xl:ml-[124px] xl:mt-[36px]"
              alt="Group1"
            />
            <Row className="3xl:mr-[168px] 3xl:my-[49px] font-montserrat items-center justify-center lg:mr-[108px] lg:my-[31px] mr-[140px] my-[41px] w-[32%] xl:mr-[124px] xl:my-[36px]">
              <Text className="3xl:text-fs18 font-normal lg:text-fs11 text-fs15 text-left text-white_A700 xl:text-fs13">{`Home`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs18 font-normal lg:ml-[35px] lg:text-fs11 ml-[46px] text-fs15 text-left text-white_A700 xl:ml-[40px] xl:text-fs13">{`About`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs18 font-normal lg:ml-[35px] lg:text-fs11 ml-[46px] text-fs15 text-left text-white_A700 xl:ml-[40px] xl:text-fs13">{`Portfolio`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs18 font-normal lg:ml-[35px] lg:text-fs11 ml-[46px] text-fs15 text-left text-white_A700 xl:ml-[40px] xl:text-fs13">{`Services`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs18 font-normal lg:ml-[35px] lg:text-fs11 ml-[46px] text-fs15 text-left text-white_A700 xl:ml-[40px] xl:text-fs13">{`Contact`}</Text>
            </Row>
          </Row>
        </div>
        <Column className="bg-gray_905 font-montserrat justify-center self-stretch w-[100%]">
          <Text className="3xl:mt-[128px] 3xl:mx-[168px] 3xl:text-fs51 font-semibold lg:mt-[83px] lg:mx-[108px] lg:text-fs33 mt-[107px] mx-[140px] text-fs43 text-left text-white_A700 xl:mt-[95px] xl:mx-[124px] xl:text-fs38">{`CONTACT US`}</Text>
          <Line className="3xl:mb-[146px] 3xl:mt-[18px] 3xl:mx-[168px] bg-red_A400 h-[2px] lg:mb-[94px] lg:mt-[11px] lg:mx-[108px] mb-[122px] mt-[15px] mx-[140px] w-[7%] xl:mb-[108px] xl:mt-[13px] xl:mx-[124px]" />
        </Column>
      </Column>
      <Stack className="2xl:h-[745px] 3xl:h-[894px] 3xl:mr-[12px] 3xl:mt-[52px] h-[744px] lg:h-[579px] lg:mr-[7px] lg:mt-[34px] mr-[10px] mt-[44px] w-[90%] xl:h-[662px] xl:mr-[8px] xl:mt-[39px]">
        <Column className="3xl:left-[168px] 3xl:top-[88px] absolute font-montserrat justify-start left-[140px] lg:left-[108px] lg:top-[57px] top-[74px] w-[29%] xl:left-[124px] xl:top-[65px]">
          <Line className="3xl:mr-[12px] bg-red_A400 h-[2px] lg:mr-[7px] mr-[10px] w-[27%] xl:mr-[8px]" />
          <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[25px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[16px] lg:text-fs12 mt-[21px] self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:leading-lh24 xl:mt-[18px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}</Text>
        </Column>
        <Stack className="2xl:h-[745px] 3xl:h-[894px] absolute h-[744px] inset-[0] lg:h-[579px] self-stretch w-[100%] xl:h-[662px]">
          <Stack className="2xl:h-[745px] 3xl:h-[894px] absolute h-[744px] inset-[0] lg:h-[579px] self-stretch w-[100%] xl:h-[662px]">
            <Row className="absolute font-montserrat justify-between px-[0] right-[0] top-[0] w-[89%]">
              <Text className="3xl:mb-[530px] 3xl:text-fs40 font-semibold lg:mb-[343px] lg:text-fs26 mb-[442px] text-fs34 text-left text-white_A700 xl:mb-[393px] xl:text-fs30">{`GET IN TOUCH`}</Text>
              <Column className="font-montserrat justify-start lg:mt-[1px] mt-[2px] w-[66%] xl:mt-[1px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Grid className="3xl:gap-[24px] gap-[20px] grid grid-cols-2 lg:gap-[15px] self-stretch w-[100%] xl:gap-[17px]">
                    <Column className="font-montserrat justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs14 font-light lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:text-fs10">{`NAME`}</Text>
                      <Input
                        className="bg-bluegray_900 border border-gray_902 border-solid lg:mt-[2px] mt-[3px] placeholder:bg-transparent placeholder:text-white_A700 self-stretch w-[100%] xl:mt-[2px]"
                        name="Group128"
                        placeholder={`NAME`}
                      ></Input>
                    </Column>
                    <Column className="font-montserrat justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs14 font-light lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:text-fs10">{`EMAIL`}</Text>
                      <Input
                        className="bg-bluegray_900 border border-gray_902 border-solid lg:mt-[2px] mt-[3px] placeholder:bg-transparent placeholder:text-white_A700 self-stretch w-[100%] xl:mt-[2px]"
                        name="Group130"
                        placeholder={`EMAIL`}
                      ></Input>
                    </Column>
                    <Column className="font-montserrat justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs14 font-light lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:text-fs10">{`PHONE NUMBER`}</Text>
                      <Input
                        className="bg-bluegray_900 border border-gray_902 border-solid lg:mt-[2px] mt-[3px] placeholder:bg-transparent placeholder:text-white_A700 self-stretch w-[100%] xl:mt-[2px]"
                        name="Group132"
                        placeholder={`PHONE NUMBER`}
                      ></Input>
                    </Column>
                    <Column className="font-montserrat justify-start w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs14 font-light lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:text-fs10">{`SUBJECT`}</Text>
                      <Input
                        className="bg-bluegray_900 border border-gray_902 border-solid lg:mt-[2px] mt-[3px] placeholder:bg-transparent placeholder:text-white_A700 self-stretch w-[100%] xl:mt-[2px]"
                        name="Group134"
                        placeholder={`SUBJECT`}
                      ></Input>
                    </Column>
                  </Grid>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs14 font-light lg:mr-[7px] lg:mt-[24px] lg:text-fs9 mr-[10px] mt-[31px] text-fs12 text-left text-white_A700 xl:mr-[8px] xl:mt-[27px] xl:text-fs10">{`MESSAGE`}</Text>
                <Input
                  className="bg-bluegray_900 border border-gray_902 border-solid lg:mt-[2px] mt-[3px] placeholder:bg-transparent placeholder:text-white_A700 w-[100%] xl:mt-[2px]"
                  name="Group136"
                  placeholder={`MESSAGE`}
                ></Input>
                <Button className="2xl:py-[19px] 3xl:mr-[12px] 3xl:mt-[45px] 3xl:px-[38px] 3xl:py-[23px] 3xl:text-fs19 bg-red_A400 border-bw font-normal lg:mr-[7px] lg:mt-[29px] lg:px-[24px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[38px] px-[32px] py-[19.375px] rounded-radius4 text-center text-fs16 text-white_A700 w-[23%] xl:mr-[8px] xl:mt-[33px] xl:px-[28px] xl:py-[17px] xl:text-fs14">{`Send Message`}</Button>
              </Column>
            </Row>
            <Stack className="2xl:h-[365px] 3xl:bottom-[158px] 3xl:h-[438px] absolute bottom-[132px] h-[364px] left-[0] lg:bottom-[102px] lg:h-[284px] w-[18%] xl:bottom-[117px] xl:h-[324px]">
              <div className="2xl:h-[347px] 3xl:h-[416px] absolute border-bluegray_901 border-bw50 border-solid bottom-[0] h-[346px] left-[0] lg:h-[270px] rounded-radius173 w-[50%] xl:h-[308px]"></div>
              <Image
                src="img_polygon1.png"
                className="2xl:h-[130px] 2xl:w-[129px] 3xl:h-[156px] 3xl:w-[155px] absolute h-[129.77px] lg:h-[101px] lg:w-[100px] object-contain right-[0] rounded-radius3 top-[0] w-[129.77px] xl:h-[116px] xl:w-[115px]"
                alt="Polygon1"
              />
            </Stack>
            <Row className="3xl:gap-[25px] 3xl:left-[168px] absolute bottom-[0] gap-[21px] grid grid-cols-2 items-center justify-center left-[140px] lg:gap-[16px] lg:left-[108px] w-[59%] xl:gap-[18px] xl:left-[124px]">
              <Column className="border-bluegray_900 border-bw3 border-solid font-montserrat items-center justify-center rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[51px] 3xl:h-[61px] 3xl:mt-[39px] 3xl:w-[60px] bg-red_A400 h-[50px] lg:h-[39px] lg:mt-[25px] lg:w-[38px] mt-[33px] mx-[auto] rounded-radius50 w-[50px] xl:h-[45px] xl:mt-[29px] xl:w-[44px]">
                  <Image
                    src="img_frame.svg"
                    className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] absolute h-[30px] inset-[0] justify-center lg:h-[24px] lg:w-[23px] m-[auto] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                    alt="Frame"
                  />
                </Stack>
                <Text className="3xl:mb-[44px] 3xl:mt-[28px] 3xl:text-fs21 font-normal lg:mb-[28px] lg:mt-[18px] lg:text-fs14 mb-[37px] mt-[24px] mx-[auto] text-center text-fs18 text-white_A700 xl:mb-[32px] xl:mt-[21px] xl:text-fs16">{`hello@mobdev.com`}</Text>
              </Column>
              <Column className="border-bluegray_900 border-bw3 border-solid font-montserrat items-center justify-center rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[51px] 3xl:h-[61px] 3xl:mt-[39px] 3xl:w-[60px] bg-red_A400 h-[50px] lg:h-[39px] lg:mt-[25px] lg:w-[38px] mt-[33px] mx-[auto] rounded-radius50 w-[50px] xl:h-[45px] xl:mt-[29px] xl:w-[44px]">
                  <Image
                    src="img_frame_2.svg"
                    className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] absolute h-[30px] inset-[0] justify-center lg:h-[24px] lg:w-[23px] m-[auto] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                    alt="Frame"
                  />
                </Stack>
                <Text className="3xl:mb-[44px] 3xl:mt-[28px] 3xl:text-fs21 font-normal lg:mb-[28px] lg:mt-[18px] lg:text-fs14 mb-[37px] mt-[24px] mx-[auto] text-center text-fs18 text-white_A700 xl:mb-[32px] xl:mt-[21px] xl:text-fs16">{`(001) 8234 2321`}</Text>
              </Column>
            </Row>
          </Stack>
          <Column className="absolute border-bluegray_900 border-bw3 border-solid bottom-[0] font-montserrat items-center justify-center right-[1px] rounded-radius10 w-[29%]">
            <Stack className="2xl:h-[51px] 3xl:h-[61px] 3xl:mt-[39px] 3xl:w-[60px] bg-red_A400 h-[50px] lg:h-[39px] lg:mt-[25px] lg:w-[38px] mt-[33px] mx-[auto] rounded-radius50 w-[50px] xl:h-[45px] xl:mt-[29px] xl:w-[44px]">
              <Image
                src="img_frame_3.svg"
                className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] absolute h-[30px] inset-[0] justify-center lg:h-[24px] lg:w-[23px] m-[auto] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                alt="Frame"
              />
            </Stack>
            <Text className="3xl:mb-[44px] 3xl:mt-[28px] 3xl:text-fs21 font-normal lg:mb-[28px] lg:mt-[18px] lg:text-fs14 mb-[37px] mt-[24px] mx-[auto] text-center text-fs18 text-white_A700 xl:mb-[32px] xl:mt-[21px] xl:text-fs16">{`Victoria Street, London`}</Text>
          </Column>
        </Stack>
      </Stack>
      <Column className="3xl:mt-[169px] items-center lg:mt-[109px] mt-[141px] self-stretch w-[100%] xl:mt-[125px]">
        <Row className="bg-bluegray_901 font-montserrat items-center justify-between mx-[auto] px-[0] rounded-radius10 w-[81%]">
          <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mb-[90px] 3xl:ml-[93px] 3xl:mt-[91px] 3xl:text-fs40 font-semibold leading-lh4400 lg:leading-lh34 lg:mb-[58px] lg:ml-[60px] lg:mt-[59px] lg:text-fs26 mb-[75px] ml-[78px] mt-[76px] text-fs34 text-left text-white_A700 w-[36%] xl:leading-lh39 xl:mb-[66px] xl:ml-[69px] xl:mt-[67px] xl:text-fs30">{`Discover How Design Can Help Your Business`}</Text>
          <Button className="2xl:py-[19px] 3xl:mb-[109px] 3xl:mr-[93px] 3xl:mt-[110px] 3xl:px-[42px] 3xl:py-[23px] 3xl:text-fs19 bg-red_A400 border-bw font-normal lg:mb-[70px] lg:mr-[60px] lg:mt-[71px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[91px] mr-[78px] mt-[92px] px-[35px] py-[19.375px] rounded-radius4 text-center text-fs16 text-white_A700 w-[15%] xl:mb-[80px] xl:mr-[69px] xl:mt-[81px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Contact Me`}</Button>
        </Row>
        <Stack className="2xl:h-[624px] 3xl:h-[748px] 3xl:mt-[141px] h-[622.95996px] lg:h-[485px] lg:mt-[91px] mt-[118px] self-stretch w-[100%] xl:h-[555px] xl:mt-[104px]">
          <Stack className="2xl:h-[624px] 3xl:h-[748px] absolute h-[622.96px] inset-[0] lg:h-[485px] self-stretch w-[100%] xl:h-[555px]">
            <Column className="absolute bg-gray_902 font-montserrat items-center justify-start self-stretch top-[0] w-[100%]">
              <Text className="3xl:mt-[136px] 3xl:text-fs24 font-medium lg:mt-[88px] lg:text-fs15 mt-[114px] mx-[auto] text-fs20 text-left text-white_A700 xl:mt-[101px] xl:text-fs17">{`Get In Touch With Me`}</Text>
              <Text className="3xl:mt-[34px] 3xl:text-fs19 font-normal lg:mt-[22px] lg:text-fs12 mt-[29px] mx-[auto] text-center text-fs16 text-gray_300 xl:mt-[25px] xl:text-fs14">{`Victoria Street No 1, London`}</Text>
              <Text className="3xl:mt-[18px] 3xl:text-fs19 font-normal lg:mt-[11px] lg:text-fs12 mt-[15px] mx-[auto] text-center text-fs16 text-gray_300 xl:mt-[13px] xl:text-fs14">{`contactinfo@mobdev.test`}</Text>
              <Text className="3xl:mt-[18px] 3xl:text-fs19 font-normal lg:mt-[11px] lg:text-fs12 mt-[15px] mx-[auto] text-center text-fs16 text-gray_300 xl:mt-[13px] xl:text-fs14">{`(001) 1231 3453`}</Text>
              <Image
                src="img_group39.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mb-[187px] 3xl:mt-[69px] h-[48px] lg:h-[38px] lg:mb-[121px] lg:mt-[45px] mb-[156px] mt-[58px] mx-[auto] object-contain w-[18%] xl:h-[43px] xl:mb-[138px] xl:mt-[51px]"
                alt="Group39"
              />
            </Column>
            <Stack className="2xl:h-[344px] 3xl:h-[413px] absolute bottom-[0] h-[343.46px] lg:h-[268px] right-[0] w-[17%] xl:h-[306px]">
              <Line className="absolute bg-bluegray_901 h-[221.52px] self-stretch top-[0] w-[100%]" />
              <Line className="2xl:h-[239px] 3xl:h-[287px] absolute bg-bluegray_901 h-[238.78px] lg:h-[186px] self-stretch top-[0] w-[238.5px] xl:h-[213px]" />
              <Line className="2xl:h-[257px] 3xl:h-[308px] absolute bg-bluegray_901 h-[256.03px] lg:h-[200px] self-stretch top-[0] w-[238.5px] xl:h-[228px]" />
              <Line className="2xl:h-[274px] 3xl:h-[329px] absolute bg-bluegray_901 h-[273.29px] lg:h-[213px] self-stretch top-[0] w-[238.5px] xl:h-[244px]" />
              <Line className="2xl:h-[291px] 3xl:h-[349px] absolute bg-bluegray_901 h-[290.55px] lg:h-[226px] self-stretch top-[0] w-[238.5px] xl:h-[259px]" />
              <Line className="2xl:h-[309px] 3xl:h-[370px] absolute bg-bluegray_901 h-[307.8px] lg:h-[240px] self-stretch top-[0] w-[238.5px] xl:h-[274px]" />
              <Line className="2xl:h-[326px] 3xl:h-[391px] absolute bg-bluegray_901 h-[325.06px] lg:h-[253px] self-stretch top-[0] w-[238.5px] xl:h-[290px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 h-[334.29px] inset-y-[0] lg:h-[261px] my-[auto] right-[0] w-[224.55px] xl:h-[298px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 bottom-[0] h-[334.29px] lg:h-[261px] right-[0] w-[207.87px] xl:h-[298px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 bottom-[0] h-[334.29px] lg:h-[261px] right-[0] w-[191.19px] xl:h-[298px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 bottom-[0] h-[334.29px] lg:h-[261px] right-[0] w-[174.51px] xl:h-[298px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 bottom-[0] h-[334.29px] lg:h-[261px] right-[0] w-[157.83px] xl:h-[298px]" />
              <Line className="2xl:h-[335px] 3xl:h-[402px] absolute bg-bluegray_901 bottom-[0] h-[334.29px] lg:h-[261px] right-[0] w-[141.15px] xl:h-[298px]" />
            </Stack>
          </Stack>
          <Column className="2xl:bottom-[121px] 2xl:right-[225px] 3xl:bottom-[146px] 3xl:right-[271px] absolute bottom-[121.7px] justify-start lg:bottom-[94px] lg:right-[175px] right-[225.74px] w-[10%] xl:bottom-[108px] xl:right-[200px]">
            <Column className="items-end self-stretch w-[100%]">
              <Image
                src="img_polygon3.png"
                className="2xl:h-[45px] 2xl:mx-[13px] 2xl:w-[44px] 3xl:h-[53px] 3xl:mx-[15px] 3xl:w-[52px] h-[44.09px] lg:h-[35px] lg:mx-[10px] lg:w-[34px] ml-[13.17px] mr-[13.170044px] object-contain rounded-radius3 w-[44.09px] xl:h-[40px] xl:mx-[11px] xl:w-[39px]"
                alt="Polygon3"
              />
            </Column>
            <Column className="2xl:mt-[78px] 3xl:mt-[94px] items-center lg:mt-[61px] mt-[78.910034px] self-stretch w-[100%] xl:mt-[70px]">
              <Image
                src="img_polygon2.png"
                className="2xl:h-[144px] 2xl:w-[143px] 3xl:h-[173px] 3xl:w-[172px] h-[143.26px] lg:h-[112px] lg:w-[111px] mx-[auto] object-cover rounded-radius3 self-stretch w-[143.26px] xl:h-[128px] xl:w-[127px]"
                alt="Polygon2"
              />
            </Column>
          </Column>
        </Stack>
      </Column>
    </Column>
  );
};

export default ContactPagePage;
