import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Input } from "components/Input";

const HeroImagePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1081px] 3xl:h-[1297px] h-[1080px] lg:h-[840px] self-stretch w-[100%] xl:h-[961px]">
        <Stack className="2xl:h-[1081px] 3xl:h-[1297px] absolute h-[1080px] inset-[0] lg:h-[840px] self-stretch w-[100%] xl:h-[961px]">
          <Stack className="2xl:h-[1081px] 3xl:h-[1297px] 3xl:left-[56px] absolute font-oswald h-[1080px] inset-y-[0] left-[47px] lg:h-[840px] lg:left-[36px] right-[0] w-[98%] xl:h-[961px] xl:left-[41px]">
            <Column className="absolute bg-orange_303 items-center justify-end right-[0] w-[58%]">
              <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[154px] 3xl:text-fs390 font-semibold leading-lh lg:mb-[15px] lg:ml-[7px] lg:mt-[100px] lg:text-fs252 mb-[20px] ml-[10px] mt-[129px] opacity-op35 text-fs325 text-left text-white_A700_7a w-[31%] xl:mb-[17px] xl:ml-[8px] xl:mt-[114px] xl:text-fs289">{`Bavley`}</Text>
            </Column>
            <Text className="3xl:text-fs390 3xl:top-[122px] absolute font-semibold left-[0] lg:text-fs252 lg:top-[79px] opacity-op51 text-bluegray_900_5e text-fs325 text-left top-[102px] xl:text-fs289 xl:top-[90px]">{`Bavley`}</Text>
          </Stack>
          <Row className="absolute font-oswald items-center justify-start rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] self-stretch top-[0] w-[100%]">
            <Text className="3xl:mb-[40px] 3xl:ml-[144px] 3xl:mt-[39px] 3xl:text-fs43 font-semibold lg:mb-[26px] lg:ml-[93px] lg:mt-[25px] lg:text-fs28 mb-[34px] ml-[120px] mt-[33px] text-bluegray_900 text-fs36 text-left xl:mb-[30px] xl:ml-[106px] xl:mt-[29px] xl:text-fs32">
              <span className="text-bluegray_900 text-fs36 font-oswald text-left font-semibold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                <>{`Bavley`}</>
              </span>
              <span className="text-orange_303 text-fs36 font-oswald text-left font-semibold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                <>{`.`}</>
              </span>
            </Text>
            <Row className="3xl:mb-[56px] 3xl:ml-[158px] 3xl:mt-[55px] items-center justify-center lg:mb-[36px] lg:ml-[102px] lg:mt-[35px] mb-[47px] ml-[132px] mt-[46px] w-[19%] xl:mb-[41px] xl:ml-[117px] xl:mt-[40px]">
              <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-left text-orange_303 xl:text-fs16">{`Home`}</Text>
              <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-bluegray_900 text-fs18 text-left xl:ml-[49px] xl:text-fs16">{`Programs`}</Text>
              <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-bluegray_900 text-fs18 text-left xl:ml-[49px] xl:text-fs16">{`About`}</Text>
              <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-bluegray_900 text-fs18 text-left xl:ml-[49px] xl:text-fs16">{`Contact`}</Text>
            </Row>
            <Image
              src="img_sosmedia_2.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[1002px] 3xl:my-[57px] h-[24px] lg:h-[19px] lg:ml-[649px] lg:my-[37px] ml-[835px] my-[48px] object-contain w-[7%] xl:h-[22px] xl:ml-[742px] xl:my-[42px]"
              alt="sosmedia"
            />
            <Image
              src="img_menu.svg"
              className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[99px] 3xl:mr-[144px] 3xl:my-[52px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[64px] lg:mr-[93px] lg:my-[34px] lg:w-[24px] ml-[83px] mr-[120px] my-[44px] object-contain w-[32px] xl:h-[29px] xl:ml-[73px] xl:mr-[106px] xl:my-[39px] xl:w-[28px]"
              alt="Menu"
            />
          </Row>
        </Stack>
        <Row className="3xl:bottom-[93px] absolute bottom-[78px] inset-x-[0] justify-start lg:bottom-[60px] mx-[auto] w-[87%] xl:bottom-[69px]">
          <Column className="justify-start w-[38%]">
            <Column className="3xl:mr-[12px] font-oswald justify-start lg:mr-[7px] mr-[10px] w-[86%] xl:mr-[8px]">
              <Line className="3xl:mr-[12px] bg-orange_303 h-[4px] lg:mr-[7px] mr-[10px] w-[15%] xl:mr-[8px]" />
              <Text className="2xl:leading-lh96 3xl:leading-lh115 3xl:mt-[24px] 3xl:text-fs96 font-medium font-oswald leading-lh9600 lg:leading-lh74 lg:mt-[15px] lg:text-fs62 mt-[20px] self-stretch text-bluegray_900 text-fs80 text-left w-[100%] xl:leading-lh85 xl:mt-[17px] xl:text-fs71">{`Sweet Sweat for Sweet Body`}</Text>
              <Text className="2xl:leading-lh40 3xl:leading-lh48 3xl:mt-[57px] 3xl:text-fs28 font-normal font-quattrocento leading-lh4000 lg:leading-lh31 lg:mt-[37px] lg:text-fs18 mt-[48px] self-stretch text-fs24 text-gray_504 text-left w-[100%] xl:leading-lh35 xl:mt-[42px] xl:text-fs21">{`Don't be afraid to sweat for a healthy body with our experienced coaching team and trainers`}</Text>
              <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
                <Row className="font-quattrocento items-center justify-start self-stretch w-[100%]">
                  <Button className="2xl:py-[21px] 3xl:px-[42px] 3xl:py-[25px] 3xl:text-fs21 bg-orange_303 border-bw font-bold lg:px-[27px] lg:py-[16px] lg:text-fs14 px-[35px] py-[21.545px] rounded-radius8 text-center text-fs18 text-white_A700 w-[43%] xl:px-[31px] xl:py-[19px] xl:text-fs16">{`Get Started`}</Button>
                  <Image
                    src="img_play.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[36px] 3xl:mr-[289px] 3xl:my-[12px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[23px] lg:mr-[187px] lg:my-[7px] lg:w-[31px] ml-[30px] mr-[241px] my-[10px] object-contain w-[40px] xl:h-[36px] xl:ml-[26px] xl:mr-[214px] xl:my-[8px] xl:w-[35px]"
                    alt="Play"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="3xl:mt-[168px] items-center lg:mt-[108px] mt-[140px] self-stretch w-[100%] xl:mt-[124px]">
              <Column className="font-oswald justify-start self-stretch w-[100%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs38 font-medium lg:mr-[7px] lg:text-fs24 mr-[10px] text-bluegray_900 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`Training Programs`}</Text>
                <Column className="3xl:mt-[45px] items-center lg:mt-[29px] mt-[38px] self-stretch w-[100%] xl:mt-[33px]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <Column className="bg-gray_102 font-oswald justify-center rounded-radius8 w-[30%]">
                      <Image
                        src="img_heartbeat.svg"
                        className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[28px] 3xl:mx-[28px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[18px] lg:mx-[18px] lg:w-[43px] mt-[24px] mx-[24px] object-contain w-[56px] xl:h-[50px] xl:mt-[21px] xl:mx-[21px] xl:w-[49px]"
                        alt="Heartbeat"
                      />
                      <Text className="3xl:mb-[28px] 3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs28 font-medium lg:mb-[18px] lg:mt-[12px] lg:mx-[18px] lg:text-fs18 mb-[24px] mt-[16px] mx-[24px] text-bluegray_900 text-fs24 text-left xl:mb-[21px] xl:mt-[14px] xl:mx-[21px] xl:text-fs21">{`Yoga`}</Text>
                    </Column>
                    <Column className="bg-gray_102 font-oswald justify-center rounded-radius8 w-[30%]">
                      <Image
                        src="img_muscle.svg"
                        className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[28px] 3xl:mx-[28px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[18px] lg:mx-[18px] lg:w-[43px] mt-[24px] mx-[24px] object-contain w-[56px] xl:h-[50px] xl:mt-[21px] xl:mx-[21px] xl:w-[49px]"
                        alt="Muscle"
                      />
                      <Text className="3xl:mb-[28px] 3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs28 font-medium lg:mb-[18px] lg:mt-[12px] lg:mx-[18px] lg:text-fs18 mb-[24px] mt-[16px] mx-[24px] text-bluegray_900 text-fs24 text-left xl:mb-[21px] xl:mt-[14px] xl:mx-[21px] xl:text-fs21">{`Muscles`}</Text>
                    </Column>
                    <Column className="bg-gray_102 font-oswald justify-center rounded-radius8 w-[29%]">
                      <Image
                        src="img_dumbbell.svg"
                        className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[28px] 3xl:mx-[28px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[18px] lg:mx-[18px] lg:w-[43px] mt-[24px] mx-[24px] object-contain w-[56px] xl:h-[50px] xl:mt-[21px] xl:mx-[21px] xl:w-[49px]"
                        alt="Dumbbell"
                      />
                      <Text className="3xl:mb-[28px] 3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs28 font-medium lg:mb-[18px] lg:mt-[12px] lg:mx-[18px] lg:text-fs18 mb-[24px] mt-[16px] mx-[24px] text-bluegray_900 text-fs24 text-left xl:mb-[21px] xl:mt-[14px] xl:mx-[21px] xl:text-fs21">{`Fitness`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
          <Column className="3xl:mb-[55px] 3xl:ml-[153px] bg-white_A700 font-oswald justify-start lg:mb-[35px] lg:ml-[99px] mb-[46px] ml-[128px] rounded-radius8 shadow-bs8 w-[34%] xl:mb-[40px] xl:ml-[113px]">
            <Text className="3xl:mt-[38px] 3xl:mx-[38px] 3xl:text-fs38 font-medium lg:mt-[24px] lg:mx-[24px] lg:text-fs24 mt-[32px] mx-[32px] text-bluegray_900 text-fs32 text-left xl:mt-[28px] xl:mx-[28px] xl:text-fs28">{`Membership Form`}</Text>
            <Column className="3xl:my-[38px] font-oswald items-center lg:my-[24px] my-[32px] self-stretch w-[100%] xl:my-[28px]">
              <Column className="font-oswald justify-start mx-[auto] w-[89%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:ml-[1px] lg:mr-[7px] lg:text-fs14 ml-[2px] mr-[10px] text-bluegray_900 text-fs18 text-left xl:ml-[1px] xl:mr-[8px] xl:text-fs16">{`Full Name`}</Text>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Stack className="2xl:h-[61px] 3xl:h-[73px] font-quattrocento h-[60px] lg:h-[47px] self-stretch w-[100%] xl:h-[54px]">
                    <Text className="3xl:left-[38px] 3xl:text-fs21 absolute font-bold h-[max-content] inset-y-[0] left-[32px] lg:left-[24px] lg:text-fs14 my-[auto] text-bluegray_900 text-fs18 text-left xl:left-[28px] xl:text-fs16">{`Samantha William`}</Text>
                    <Input
                      className="absolute bg-transparent border border-orange_303 border-solid inset-[0] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%]"
                      name="Group469"
                      placeholder={`Full Name`}
                    ></Input>
                  </Stack>
                </Column>
              </Column>
              <Row className="3xl:gap-[38px] 3xl:mt-[38px] gap-[32px] grid grid-cols-2 items-center justify-evenly lg:gap-[24px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[28px] xl:mt-[28px]">
                <Column className="font-oswald justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Contact Number`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Stack className="2xl:h-[61px] 3xl:h-[73px] font-quattrocento h-[60px] lg:h-[47px] self-stretch w-[100%] xl:h-[54px]">
                      <Text className="3xl:left-[38px] 3xl:text-fs21 absolute font-normal h-[max-content] inset-y-[0] left-[32px] lg:left-[24px] lg:text-fs14 my-[auto] text-fs18 text-gray_504 text-left xl:left-[28px] xl:text-fs16">{`Your number`}</Text>
                      <Input
                        className="absolute bg-transparent border border-gray_504 border-solid inset-[0] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%]"
                        name="Group470"
                        placeholder={`Contact Number`}
                      ></Input>
                    </Stack>
                  </Column>
                </Column>
                <Column className="font-oswald justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Email`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Stack className="2xl:h-[61px] 3xl:h-[73px] font-quattrocento h-[60px] lg:h-[47px] self-stretch w-[100%] xl:h-[54px]">
                      <Text className="3xl:left-[38px] 3xl:text-fs21 absolute font-normal h-[max-content] inset-y-[0] left-[32px] lg:left-[24px] lg:text-fs14 my-[auto] text-fs18 text-gray_504 text-left xl:left-[28px] xl:text-fs16">{`Your email`}</Text>
                      <Input
                        className="absolute bg-transparent border border-gray_504 border-solid inset-[0] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%]"
                        name="Group471"
                        placeholder={`Email`}
                      ></Input>
                    </Stack>
                  </Column>
                </Column>
              </Row>
              <Column className="3xl:mt-[38px] font-oswald justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[89%] xl:mt-[28px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Reason to Join`}</Text>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Stack className="2xl:h-[97px] 3xl:h-[116px] font-quattrocento h-[96px] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                    <Text className="3xl:left-[38px] 3xl:text-fs21 3xl:top-[19px] absolute font-normal left-[32px] lg:left-[24px] lg:text-fs14 lg:top-[12px] text-fs18 text-gray_504 text-left top-[16px] xl:left-[28px] xl:text-fs16 xl:top-[14px]">{`Your text here`}</Text>
                    <Input
                      className="absolute bg-transparent border border-gray_504 border-solid inset-[0] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%]"
                      name="Group472"
                      placeholder={`Reason to Join`}
                    ></Input>
                  </Stack>
                </Column>
              </Column>
              <Row className="3xl:gap-[38px] 3xl:mt-[38px] gap-[32px] grid grid-cols-2 items-center justify-evenly lg:gap-[24px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[28px] xl:mt-[28px]">
                <Stack className="2xl:h-[104px] 3xl:h-[124px] h-[103px] lg:h-[81px] w-[100%] xl:h-[92px]">
                  <Column className="absolute font-oswald inset-[0] justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Class`}</Text>
                    <Input
                      className="3xl:mt-[19px] bg-transparent border border-gray_504 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%] xl:mt-[14px]"
                      name="Group473"
                      placeholder={`Class`}
                    ></Input>
                  </Column>
                  <Row className="3xl:bottom-[16px] absolute bottom-[14px] font-quattrocento inset-x-[0] justify-center lg:bottom-[10px] mx-[auto] w-[74%] xl:bottom-[12px]">
                    <Text className="3xl:mb-[8px] 3xl:mt-[6px] 3xl:text-fs21 font-normal lg:mb-[5px] lg:mt-[3px] lg:text-fs14 mb-[7px] mt-[5px] text-fs18 text-gray_504 text-left xl:mb-[6px] xl:mt-[4px] xl:text-fs16">{`Yoga`}</Text>
                    <Image
                      src="img_chevrondown_10.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[30px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[19px] lg:w-[24px] ml-[25px] object-contain w-[32px] xl:h-[29px] xl:ml-[22px] xl:w-[28px]"
                      alt="chevrondown"
                    />
                  </Row>
                </Stack>
                <Stack className="2xl:h-[104px] 3xl:h-[124px] h-[103px] lg:h-[81px] w-[100%] xl:h-[92px]">
                  <Column className="absolute font-oswald inset-[0] justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-bluegray_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Gender`}</Text>
                    <Input
                      className="3xl:mt-[19px] bg-transparent border border-gray_504 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-bluegray_900 rounded-radius8 self-stretch w-[100%] xl:mt-[14px]"
                      name="Group475"
                      placeholder={`Gender`}
                    ></Input>
                  </Column>
                  <Row className="3xl:bottom-[16px] absolute bottom-[14px] font-quattrocento inset-x-[0] items-center justify-center lg:bottom-[10px] mx-[auto] w-[73%] xl:bottom-[12px]">
                    <Text className="3xl:my-[7px] 3xl:text-fs21 font-normal lg:my-[4px] lg:text-fs14 my-[6px] text-fs18 text-gray_504 text-left xl:my-[5px] xl:text-fs16">{`Female`}</Text>
                    <Image
                      src="img_chevrondown_10.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[28px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[18px] lg:w-[24px] ml-[24px] object-contain w-[32px] xl:h-[29px] xl:ml-[21px] xl:w-[28px]"
                      alt="chevrondown"
                    />
                  </Row>
                </Stack>
              </Row>
              <Button className="2xl:py-[20px] 3xl:mt-[48px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs21 bg-orange_303 border-bw font-medium font-montserrat lg:mt-[31px] lg:px-[27px] lg:py-[15px] lg:text-fs14 mt-[40px] mx-[auto] px-[35px] py-[20.545px] rounded-radius8 text-center text-fs18 text-white_A700 w-[89%] xl:mt-[35px] xl:px-[31px] xl:py-[18px] xl:text-fs16">{`Join`}</Button>
            </Column>
          </Column>
          <Stack className="2xl:h-[160px] 2xl:mb-[552px] 3xl:h-[192px] 3xl:mb-[663px] 3xl:ml-[28px] 3xl:mt-[145px] font-oswald h-[159.5px] lg:h-[125px] lg:mb-[429px] lg:ml-[18px] lg:mt-[94px] mb-[552.5px] ml-[24px] mt-[121px] w-[19%] xl:h-[142px] xl:mb-[491px] xl:ml-[21px] xl:mt-[107px]">
            <Image
              src="img_group21.svg"
              className="2xl:h-[160px] 3xl:h-[192px] absolute h-[159.5px] inset-[0] lg:h-[125px] object-cover self-stretch w-[100%] xl:h-[142px]"
              alt="Group21"
            />
            <Text className="3xl:text-fs38 3xl:top-[43px] absolute font-medium inset-x-[0] lg:text-fs24 lg:top-[28px] mx-[auto] text-fs32 text-left text-white_A700 top-[36px] w-[max-content] xl:text-fs28 xl:top-[32px]">
              <span className="text-orange_303 text-fs32 font-oswald text-left font-medium lg:text-fs24 xl:text-fs28 3xl:text-fs38">
                <>{`Join`}</>
              </span>
              <span className="text-white_A700 text-fs32 font-oswald text-left font-medium lg:text-fs24 xl:text-fs28 3xl:text-fs38">
                <>{` us now!`}</>
              </span>
            </Text>
          </Stack>
        </Row>
      </Stack>
    </Column>
  );
};

export default HeroImagePage;
