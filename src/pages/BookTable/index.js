import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";

const BookTablePage = () => {
  return (
    <Column className="bg-gray_50 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-playfairdisplay justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gradient  h-[700px] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
            <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
              <Image
                src="img_exclude.svg"
                className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover opacity-op7 self-stretch w-[100%] xl:h-[623px]"
                alt="Exclude"
              />
              <div className="absolute self-stretch top-[0] w-[100%]">
                <Row className="bg-black_901 font-playfairdisplay justify-start self-stretch w-[100%]">
                  <Image
                    src="img_store_3.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[36px] 3xl:ml-[76px] 3xl:mt-[31px] h-[40px] lg:h-[32px] lg:mb-[23px] lg:ml-[49px] lg:mt-[20px] mb-[30px] ml-[64px] mt-[26px] object-contain w-[3%] xl:h-[36px] xl:mb-[26px] xl:ml-[56px] xl:mt-[23px]"
                    alt="store"
                  />
                  <Column className="3xl:mb-[36px] 3xl:ml-[19px] 3xl:mt-[31px] justify-start lg:mb-[23px] lg:ml-[12px] lg:mt-[20px] mb-[30px] ml-[16px] mt-[26px] w-[6%] xl:mb-[26px] xl:ml-[14px] xl:mt-[23px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[8px] xl:text-fs14">{`Your Logo`}</Text>
                    <Text className="3xl:text-fs19 font-normal font-roboto lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Your slogan here`}</Text>
                  </Column>
                  <Text className="2xl:ml-[318px] 2xl:my-[37px] 3xl:ml-[381px] 3xl:my-[45px] 3xl:text-fs19 font-bold lg:ml-[247px] lg:my-[29px] lg:text-fs12 ml-[317.82px] my-[37.5px] text-center text-fs16 text-white_A700 uppercase xl:ml-[282px] xl:my-[33px] xl:text-fs14">{`Home`}</Text>
                  <Row className="2xl:my-[5px] 3xl:ml-[74px] 3xl:my-[6px] items-center justify-center lg:ml-[48px] lg:my-[4px] ml-[62px] my-[5.5px] w-[17%] xl:ml-[55px] xl:my-[4px]">
                    <Text className="3xl:my-[38px] 3xl:text-fs19 font-bold lg:my-[24px] lg:text-fs12 my-[32px] text-center text-fs16 text-white_A700 uppercase xl:my-[28px] xl:text-fs14">{`About`}</Text>
                    <Row className="3xl:ml-[67px] items-center justify-center lg:ml-[43px] ml-[56px] w-[24%] xl:ml-[49px]">
                      <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Menu`}</Text>
                      <Image
                        src="img_chevrondown_2.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[42px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[27px] ml-[5px] mr-[6px] my-[35px] object-contain w-[17%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[31px]"
                        alt="chevrondown"
                      />
                    </Row>
                    <Text className="3xl:ml-[67px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[43px] lg:my-[24px] lg:text-fs12 ml-[56px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[49px] xl:my-[28px] xl:text-fs14">{`Gallery`}</Text>
                  </Row>
                  <Row className="2xl:ml-[62px] 2xl:my-[37px] 3xl:ml-[74px] 3xl:my-[45px] items-center justify-center lg:ml-[48px] lg:my-[29px] ml-[62.00006px] my-[37.5px] w-[15%] xl:ml-[55px] xl:my-[33px]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Team`}</Text>
                    <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Contact`}</Text>
                    <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Blog`}</Text>
                  </Row>
                  <Image
                    src="img_search_4.svg"
                    className="2xl:h-[31px] 2xl:ml-[454px] 3xl:h-[37px] 3xl:mb-[45px] 3xl:ml-[545px] 3xl:mr-[98px] 3xl:mt-[33px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:mb-[29px] lg:ml-[353px] lg:mr-[63px] lg:mt-[21px] lg:w-[23px] mb-[38px] ml-[453.93994px] mr-[82px] mt-[28px] object-contain w-[30px] xl:h-[27px] xl:mb-[33px] xl:ml-[403px] xl:mr-[72px] xl:mt-[24px] xl:w-[26px]"
                    alt="search"
                  />
                </Row>
              </div>
            </Stack>
            <Column className="3xl:left-[690px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[575px] lg:left-[447px] my-[auto] w-[18%] xl:left-[511px]">
              <Text className="2xl:text-fs67 3xl:text-fs80 font-bold font-playfairdisplay lg:text-fs52 self-stretch text-fs673431625366211 text-left text-white_A700 xl:text-fs59">{`Book Table`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[22px] 3xl:text-fs19 font-bold font-roboto lg:mr-[7px] lg:mt-[14px] lg:text-fs12 mr-[10px] mt-[19px] text-amber_700 text-fs16 text-left xl:mr-[8px] xl:mt-[16px] xl:text-fs14">{`Home / Book Table`}</Text>
            </Column>
          </Stack>
          <Row className="3xl:mt-[300px] font-roboto items-center justify-center lg:mt-[194px] mt-[250px] self-stretch w-[100%] xl:mt-[222px]">
            <Row className="3xl:ml-[450px] bg-gray_101 items-center justify-center lg:ml-[291px] ml-[375px] w-[35%] xl:ml-[333px]">
              <Image
                src="img_useralt_1.svg"
                className="2xl:h-[36px] 3xl:h-[43px] 3xl:mb-[44px] 3xl:ml-[14px] 3xl:mt-[33px] 3xl:w-[42px] h-[35px] lg:h-[28px] lg:mb-[28px] lg:ml-[9px] lg:mt-[21px] lg:w-[27px] mb-[37px] ml-[12px] mt-[28px] object-contain w-[35px] xl:h-[32px] xl:mb-[32px] xl:ml-[10px] xl:mt-[24px] xl:w-[31px]"
                alt="useralt"
              />
              <Text className="2xl:mr-[426px] 3xl:mb-[54px] 3xl:ml-[21px] 3xl:mr-[511px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:ml-[14px] lg:mr-[331px] lg:mt-[28px] lg:text-fs12 mb-[45px] ml-[18px] mr-[426.33002px] mt-[36px] text-black_900 text-fs16 text-left uppercase xl:mb-[40px] xl:ml-[16px] xl:mr-[379px] xl:mt-[32px] xl:text-fs14">{`Paula Ramsey`}</Text>
            </Row>
            <Row className="3xl:ml-[36px] bg-gray_101 items-center justify-center lg:ml-[23px] ml-[30px] w-[14%] xl:ml-[26px]">
              <Image
                src="img_clock.svg"
                className="2xl:h-[36px] 3xl:h-[43px] 3xl:mb-[44px] 3xl:ml-[16px] 3xl:mt-[33px] 3xl:w-[42px] h-[35px] lg:h-[28px] lg:mb-[28px] lg:ml-[10px] lg:mt-[21px] lg:w-[27px] mb-[37px] ml-[14px] mt-[28px] object-contain w-[35px] xl:h-[32px] xl:mb-[32px] xl:ml-[12px] xl:mt-[24px] xl:w-[31px]"
                alt="clock"
              />
              <Text className="3xl:mb-[54px] 3xl:ml-[19px] 3xl:mr-[37px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:ml-[12px] lg:mr-[24px] lg:mt-[28px] lg:text-fs12 mb-[45px] ml-[16px] mr-[31px] mt-[36px] text-black_900 text-fs16 text-left uppercase xl:mb-[40px] xl:ml-[14px] xl:mr-[27px] xl:mt-[32px] xl:text-fs14">{`16:00 - 18:00`}</Text>
            </Row>
            <div className="3xl:ml-[36px] 3xl:mr-[450px] bg-transparent border-bw lg:ml-[23px] lg:mr-[291px] ml-[30px] mr-[375px] w-[9%] xl:ml-[26px] xl:mr-[333px] input-wrap">
              <Image
                src="img_userplus.svg"
                className="absolute top-[29.375px] bottom-[38.375px] left-[15px] border-bw bg-transparent lg:top-[22px] lg:bottom-[29px] lg:left-[11px] xl:top-[26px] xl:bottom-[34px] xl:left-[13px] 2xl:top-[29px] 2xl:bottom-[38px] 3xl:top-[35px] 3xl:bottom-[46px] 3xl:left-[18px]"
                alt="user-plus"
              />
              <Button className="2xl:pb-[38px] 2xl:pl-[68px] 2xl:pt-[29px] 3xl:pb-[46px] 3xl:pl-[82px] 3xl:pt-[35px] 3xl:text-fs19 bg-gray_101 border-bw font-normal lg:pb-[29px] lg:pl-[53px] lg:pt-[22px] lg:text-fs12 pb-[38.375px] pl-[68.75px] pt-[29.375px] text-black_900 text-fs16 text-left uppercase w-[100%] xl:pb-[34px] xl:pl-[61px] xl:pt-[26px] xl:text-fs14">{`5`}</Button>
            </div>
          </Row>
          <Row className="3xl:gap-[36px] 3xl:mt-[30px] 3xl:px-[450px] gap-[30px] grid grid-cols-3 items-center justify-center lg:gap-[23px] lg:mt-[19px] lg:px-[291px] mt-[25px] px-[375px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[22px] xl:px-[333px]">
            <Row className="bg-gray_101 font-roboto items-center justify-center w-[100%]">
              <Image
                src="img_phonealt_1.svg"
                className="2xl:h-[36px] 3xl:h-[43px] 3xl:mb-[44px] 3xl:ml-[14px] 3xl:mt-[33px] 3xl:w-[42px] h-[35px] lg:h-[28px] lg:mb-[28px] lg:ml-[9px] lg:mt-[21px] lg:w-[27px] mb-[37px] ml-[12px] mt-[28px] object-contain w-[35px] xl:h-[32px] xl:mb-[32px] xl:ml-[10px] xl:mt-[24px] xl:w-[31px]"
                alt="phonealt"
              />
              <Text className="3xl:mb-[54px] 3xl:ml-[21px] 3xl:mr-[183px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:ml-[14px] lg:mr-[119px] lg:mt-[28px] lg:text-fs12 mb-[45px] ml-[18px] mr-[153px] mt-[36px] text-fs16 text-gray_600 text-left uppercase xl:mb-[40px] xl:ml-[16px] xl:mr-[136px] xl:mt-[32px] xl:text-fs14">{`Phone`}</Text>
            </Row>
            <Row className="bg-gray_101 font-roboto items-center justify-center w-[100%]">
              <Image
                src="img_mailbulk.svg"
                className="2xl:h-[36px] 3xl:h-[43px] 3xl:mb-[44px] 3xl:ml-[16px] 3xl:mt-[33px] h-[35px] lg:h-[28px] lg:mb-[28px] lg:ml-[10px] lg:mt-[21px] mb-[37px] ml-[14px] mt-[28px] object-contain w-[11%] xl:h-[32px] xl:mb-[32px] xl:ml-[12px] xl:mt-[24px]"
                alt="mailbulk"
              />
              <Text className="2xl:mr-[126px] 3xl:mb-[54px] 3xl:ml-[19px] 3xl:mr-[152px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:ml-[12px] lg:mr-[98px] lg:mt-[28px] lg:text-fs12 mb-[45px] ml-[16px] mr-[126.619995px] mt-[36px] text-fs16 text-gray_600 text-left uppercase xl:mb-[40px] xl:ml-[14px] xl:mr-[112px] xl:mt-[32px] xl:text-fs14">{`email`}</Text>
            </Row>
            <Row className="bg-gray_101 font-roboto items-center justify-center w-[100%]">
              <Image
                src="img_calendaralt.svg"
                className="2xl:h-[36px] 3xl:h-[43px] 3xl:mb-[44px] 3xl:ml-[15px] 3xl:mt-[33px] h-[35px] lg:h-[28px] lg:mb-[28px] lg:ml-[10px] lg:mt-[21px] mb-[37px] ml-[13px] mt-[28px] object-contain w-[8%] xl:h-[32px] xl:mb-[32px] xl:ml-[11px] xl:mt-[24px]"
                alt="calendaralt"
              />
              <Text className="2xl:mr-[135px] 3xl:mb-[54px] 3xl:ml-[20px] 3xl:mr-[162px] 3xl:mt-[43px] 3xl:text-fs19 font-normal lg:mb-[35px] lg:ml-[13px] lg:mr-[105px] lg:mt-[28px] lg:text-fs12 mb-[45px] ml-[17px] mr-[135.38px] mt-[36px] text-black_900 text-fs16 text-left uppercase xl:mb-[40px] xl:ml-[15px] xl:mr-[120px] xl:mt-[32px] xl:text-fs14">{`12 / 11 / 2020`}</Text>
            </Row>
          </Row>
          <Column className="3xl:mt-[36px] bg-gray_101 font-roboto justify-start lg:mt-[23px] mt-[30px] mx-[auto] w-[61%] xl:mt-[26px]">
            <Text className="3xl:mt-[64px] 3xl:mx-[46px] 3xl:text-fs19 font-normal lg:mt-[42px] lg:mx-[30px] lg:text-fs12 mt-[54px] mx-[39px] text-fs16 text-gray_600 text-left uppercase xl:mt-[48px] xl:mx-[34px] xl:text-fs14">{`Note for us`}</Text>
            <Column className="3xl:mb-[21px] 3xl:mt-[110px] items-end lg:mb-[14px] lg:mt-[71px] mb-[18px] mt-[92px] self-stretch w-[100%] xl:mb-[16px] xl:mt-[81px]">
              <Image
                src="img_griphorizontal_2.svg"
                className="2xl:h-[36px] 2xl:mx-[19px] 3xl:h-[43px] 3xl:mx-[23px] h-[35px] lg:h-[28px] lg:mx-[15px] ml-[19.38px] mr-[19.380005px] object-contain w-[3%] xl:h-[32px] xl:mx-[17px]"
                alt="griphorizontal"
              />
            </Column>
          </Column>
        </Column>
        <Text className="2xl:text-fs21 3xl:mt-[91px] 3xl:mx-[450px] 3xl:text-fs25 font-bold lg:mt-[59px] lg:mx-[291px] lg:text-fs16 mt-[76px] mx-[375px] text-black_900 text-fs21327999114990234 text-left xl:mt-[67px] xl:mx-[333px] xl:text-fs18">{`Tearm & Conditions`}</Text>
        <Column className="items-center self-stretch w-[100%]">
          <Row className="font-roboto justify-center self-stretch w-[100%]">
            <Text className="3xl:ml-[450px] 3xl:mt-[38px] 3xl:text-fs19 font-normal lg:ml-[291px] lg:mt-[24px] lg:text-fs12 ml-[375px] mt-[32px] text-fs16 text-gray_600 text-left w-[40%] xl:ml-[333px] xl:mt-[28px] xl:text-fs14">{`** Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure.`}</Text>
            <Button className="2xl:py-[17px] 3xl:mb-[42px] 3xl:ml-[205px] 3xl:mr-[450px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-amber_700 border-bw font-normal lg:mb-[27px] lg:ml-[133px] lg:mr-[291px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mb-[35px] ml-[171px] mr-[375px] px-[32px] py-[17.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[12%] xl:mb-[31px] xl:ml-[152px] xl:mr-[333px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Submit Your Messages`}</Button>
          </Row>
          <div className="3xl:mt-[300px] lg:mt-[194px] mt-[250px] self-stretch w-[100%] xl:mt-[222px]">
            <Column className="bg-gray_300 font-playfairdisplay items-center justify-end self-stretch w-[100%]">
              <Text className="2xl:text-fs67 3xl:mt-[180px] 3xl:text-fs80 font-bold leading-lh lg:mt-[116px] lg:text-fs52 mt-[150px] mx-[auto] text-amber_700 text-center text-fs673431625366211 w-[40%] xl:mt-[133px] xl:text-fs59">
                <span className="text-white_A700 text-fs673431625366211 font-playfairdisplay text-center font-bold lg:text-fs52 xl:text-fs59 2xl:text-fs67 3xl:text-fs80">
                  <>
                    {`Watch Our`}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-amber_700 text-fs673431625366211 font-playfairdisplay text-center font-bold lg:text-fs52 xl:text-fs59 2xl:text-fs67 3xl:text-fs80">
                  <>{`Lates Vlog and News`}</>
                </span>
              </Text>
              <Row className="3xl:gap-[36px] 3xl:mt-[120px] gap-[30px] grid grid-cols-3 items-center justify-evenly lg:gap-[23px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[88px]">
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
              </Row>
              <Row className="3xl:gap-[36px] 3xl:mt-[38px] gap-[30px] grid grid-cols-3 items-center justify-evenly lg:gap-[23px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[28px]">
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Input
                        className="2xl:pb-[15px] 3xl:mr-[12px] 3xl:mt-[38px] 3xl:pb-[18px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-solid border-white_A700 font-normal lg:mr-[7px] lg:mt-[24px] lg:pb-[11px] lg:text-fs12 mr-[10px] mt-[32px] pb-[15.375px] placeholder:bg-transparent placeholder:text-white_A700 pt-[1px] px-[0] text-center text-fs16 text-white_A700 w-[21%] xl:mr-[8px] xl:mt-[28px] xl:pb-[13px] xl:text-fs14"
                        name="Group231"
                        placeholder={`Read More`}
                      ></Input>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-roboto items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[21%] xl:mr-[8px] xl:mt-[28px]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-center text-fs16 text-white_A700 xl:text-fs14">{`Read More`}</Text>
                        <Line className="3xl:mt-[16px] bg-white_A700 h-[1px] lg:mt-[10px] mr-[1px] mt-[14px] w-[99%] xl:mt-[12px]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Input
                        className="2xl:pb-[15px] 3xl:mr-[12px] 3xl:mt-[38px] 3xl:pb-[18px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-solid border-white_A700 font-normal lg:mr-[7px] lg:mt-[24px] lg:pb-[11px] lg:text-fs12 mr-[10px] mt-[32px] pb-[15.375px] placeholder:bg-transparent placeholder:text-white_A700 pt-[1px] px-[0] text-center text-fs16 text-white_A700 w-[21%] xl:mr-[8px] xl:mt-[28px] xl:pb-[13px] xl:text-fs14"
                        name="Group233"
                        placeholder={`Read More`}
                      ></Input>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:mt-[330px] justify-evenly lg:mt-[213px] mt-[275px] px-[0] self-stretch w-[100%] xl:mt-[244px]">
                <Column className="3xl:mb-[102px] font-playfairdisplay justify-start lg:mb-[66px] mb-[85px] w-[14%] xl:mb-[75px]">
                  <Text className="2xl:ml-[2px] 2xl:text-fs21 3xl:ml-[3px] 3xl:mr-[12px] 3xl:text-fs25 font-bold font-playfairdisplay lg:ml-[1px] lg:mr-[7px] lg:text-fs16 ml-[2.5px] mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs18">{`About Us`}</Text>
                  <Text className="2xl:ml-[2px] 3xl:ml-[3px] 3xl:mt-[33px] 3xl:text-fs19 font-normal font-roboto lg:ml-[1px] lg:mt-[21px] lg:text-fs12 ml-[2.5px] mt-[28px] text-fs16 text-left text-white_A700 w-[99%] xl:ml-[2px] xl:mt-[24px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Button className="2xl:py-[17px] 3xl:mr-[12px] 3xl:mt-[63px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-amber_700 border-bw font-normal font-roboto lg:mr-[7px] lg:mt-[41px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[53px] px-[32px] py-[17.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[58%] xl:mr-[8px] xl:mt-[47px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Pick up order`}</Button>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[22%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="justify-between px-[0] self-stretch w-[100%]">
                      <Column className="3xl:mb-[34px] font-playfairdisplay justify-start lg:mb-[22px] mb-[29px] w-[62%] xl:mb-[25px]">
                        <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Contact Us`}</Text>
                        <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                          <Column className="font-roboto justify-start self-stretch w-[100%]">
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`(671) 555-0110`}</Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="font-playfairdisplay justify-start w-[32%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 font-bold lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left xl:text-fs18">{`Userfull Links`}</Text>
                        <Column className="3xl:mr-[12px] 3xl:mt-[33px] justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[65%] xl:mr-[8px] xl:mt-[24px]">
                          <Column className="items-center self-stretch w-[100%]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_chevronright_1.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[2px] lg:text-fs12 ml-[15px] mr-[3px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[2px] xl:text-fs14">{`About Us`}</Text>
                            </Row>
                            <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                              <Image
                                src="img_chevronright_2.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`Our Team`}</Text>
                            </Row>
                          </Column>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_chevronright_3.svg"
                              className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                              alt="chevronright"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[22px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[14px] lg:text-fs12 ml-[15px] mr-[19px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[16px] xl:text-fs14">{`Gallery`}</Text>
                          </Row>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_chevronright_2.svg"
                              className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                              alt="chevronright"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[44px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[28px] lg:text-fs12 ml-[15px] mr-[37px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[32px] xl:text-fs14">{`Blog`}</Text>
                          </Row>
                          <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_chevronright_2.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] mr-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`404 Page`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:mt-[55px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:mt-[35px] lg:text-fs16 mr-[10px] mt-[46px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:mt-[40px] xl:text-fs18">{`Opening Hours`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[33px] font-roboto justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[62%] xl:mr-[8px] xl:mt-[24px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Mon - Sat 8:00 - 17:30,`}</Text>
                    <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`Sunday - CLOSED`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[63px] font-playfairdisplay justify-start lg:mb-[41px] mb-[53px] w-[12%] xl:mb-[47px]">
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Keep Connect`}</Text>
                  <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                    <div className="2xl:h-[233px] 3xl:h-[279px] 3xl:w-[278px] bg-gray_300 h-[232px] lg:h-[181px] lg:w-[180px] ml-[1px] rounded-radius20 w-[232px] xl:h-[207px] xl:w-[206px]"></div>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:mb-[103px] 3xl:mt-[156px] font-roboto items-center justify-evenly lg:mb-[66px] lg:mt-[101px] mb-[86px] mt-[130px] px-[0] self-stretch w-[100%] xl:mb-[76px] xl:mt-[115px]">
                <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Copyright © 2020. All right reserved`}</Text>
                <Row className="font-roboto items-center justify-between px-[0] w-[32%]">
                  <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Mobile Apps:`}</Text>
                  <Image
                    src="img_rsssquare_3.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] h-[25px] lg:h-[20px] object-contain w-[4%] xl:h-[23px]"
                    alt="rsssquare"
                  />
                  <Image
                    src="img_blog_3.svg"
                    className="2xl:h-[26px] 2xl:mr-[418px] 3xl:h-[31px] 3xl:mr-[502px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mr-[325px] lg:w-[19px] mr-[418.12px] object-contain w-[25px] xl:h-[23px] xl:mr-[371px] xl:w-[22px]"
                    alt="blog"
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

export default BookTablePage;
