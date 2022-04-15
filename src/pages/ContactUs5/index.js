import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";

const ContactUs5Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Row className="bg-white_A700 font-firasans items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mb-[28px] 3xl:ml-[450px] 3xl:mt-[30px] items-center justify-center lg:mb-[18px] lg:ml-[291px] lg:mt-[19px] mb-[24px] ml-[375px] mt-[25px] w-[21%] xl:mb-[21px] xl:ml-[333px] xl:mt-[22px]">
            <Row className="items-center justify-between px-[0] w-[68%]">
              <Image
                src="img_oceanengine.svg"
                className="2xl:h-[61px] 2xl:my-[10px] 3xl:h-[73px] 3xl:my-[12px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:my-[8px] lg:w-[46px] my-[10.5px] object-contain w-[60px] xl:h-[54px] xl:my-[9px] xl:w-[53px]"
                alt="oceanengine"
              />
              <Column className="font-firasans justify-center w-[72%]">
                <Text className="2xl:text-fs28 3xl:mt-[12px] 3xl:mx-[12px] 3xl:text-fs34 font-bold font-firasans lg:mt-[7px] lg:mx-[7px] lg:text-fs22 mt-[10px] mx-[10px] text-bluegray_904 text-fs28399999618530273 text-left uppercase xl:mt-[8px] xl:mx-[8px] xl:text-fs25">{`IT DEVeloper`}</Text>
                <Text className="3xl:mb-[12px] 3xl:mx-[12px] 3xl:text-fs19 font-opensans font-semibold lg:mb-[7px] lg:mx-[7px] lg:text-fs12 mb-[10px] mx-[10px] text-bluegray_904 text-fs16 text-left xl:mb-[8px] xl:mx-[8px] xl:text-fs14">{`Your Best Partner`}</Text>
              </Column>
            </Row>
            <Line className="2xl:h-[61px] 2xl:my-[10px] 3xl:h-[73px] 3xl:ml-[19px] 3xl:my-[12px] bg-bluegray_904 h-[60px] lg:h-[47px] lg:ml-[12px] lg:my-[8px] ml-[16px] my-[10.5px] w-[1px] xl:h-[54px] xl:ml-[14px] xl:my-[9px]" />
            <Column className="2xl:my-[14px] 3xl:ml-[18px] 3xl:my-[17px] font-firasans justify-start lg:ml-[11px] lg:my-[11px] ml-[15px] my-[14.5px] w-[24%] xl:ml-[13px] xl:my-[12px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_904 text-center text-fs16 xl:mr-[8px] xl:text-fs14">{`Call Now`}</Text>
              <Column className="3xl:mt-[7px] font-roboto items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-bluegray_904 text-center text-fs16 xl:text-fs14">{`+62 899 7789`}</Text>
              </Column>
            </Column>
          </Row>
          <Text className="2xl:ml-[254px] 3xl:mb-[61px] 3xl:ml-[305px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-bold lg:mb-[39px] lg:ml-[198px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[254.75px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[226px] xl:mt-[46px] xl:text-fs14">{`Home`}</Text>
          <Row className="3xl:mb-[22px] 3xl:ml-[33px] 3xl:mt-[24px] items-center justify-center lg:mb-[14px] lg:ml-[21px] lg:mt-[15px] mb-[19px] ml-[28px] mt-[20px] w-[11%] xl:mb-[16px] xl:ml-[24px] xl:mt-[17px]">
            <Text className="3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:my-[24px] lg:text-fs12 my-[32px] text-bluegray_904 text-center text-fs16 xl:my-[28px] xl:text-fs14">{`About`}</Text>
            <Row className="3xl:ml-[26px] items-center justify-center lg:ml-[17px] ml-[22px] w-[40%] xl:ml-[19px]">
              <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Project`}</Text>
              <Image
                src="img_chevrondown_5.svg"
                className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[16%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
                alt="chevrondown"
              />
            </Row>
            <Text className="2xl:ml-[22px] 3xl:ml-[26px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[17px] lg:my-[24px] lg:text-fs12 ml-[22.01001px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[19px] xl:my-[28px] xl:text-fs14">{`Price`}</Text>
          </Row>
          <Text className="3xl:mb-[61px] 3xl:ml-[33px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-normal lg:mb-[39px] lg:ml-[21px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[28px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[24px] xl:mt-[46px] xl:text-fs14">{`Team`}</Text>
          <Text className="3xl:mb-[61px] 3xl:ml-[33px] 3xl:mt-[62px] 3xl:text-fs19 capitalize font-normal lg:mb-[39px] lg:ml-[21px] lg:mt-[40px] lg:text-fs12 mb-[51px] ml-[28px] mt-[52px] text-bluegray_904 text-center text-fs16 xl:mb-[45px] xl:ml-[24px] xl:mt-[46px] xl:text-fs14">{`Contact`}</Text>
          <Row className="3xl:mb-[22px] 3xl:ml-[26px] 3xl:mr-[450px] 3xl:mt-[24px] font-firasans items-center justify-center lg:mb-[14px] lg:ml-[17px] lg:mr-[291px] lg:mt-[15px] mb-[19px] ml-[22px] mr-[375px] mt-[20px] w-[3%] xl:mb-[16px] xl:ml-[19px] xl:mr-[333px] xl:mt-[17px]">
            <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 capitalize font-normal lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-bluegray_904 text-center text-fs16 xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Blog`}</Text>
            <Image
              src="img_chevrondown_6.svg"
              className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[21%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
              alt="chevrondown"
            />
          </Row>
        </Row>
      </div>
      <Stack className="2xl:h-[646px] 3xl:h-[775px] h-[645px] lg:h-[502px] self-stretch w-[100%] xl:h-[574px]">
        <div className="2xl:h-[646px] 3xl:h-[775px] absolute bg-gray_400 h-[645px] inset-[0] lg:h-[502px] self-stretch w-[100%] xl:h-[574px]"></div>
        <Column className="absolute font-firasans h-[max-content] inset-[0] items-center justify-center m-[auto] w-[21%]">
          <Text className="2xl:text-fs50 3xl:text-fs60 capitalize font-bold lg:text-fs39 mx-[auto] self-stretch text-center text-fs5052069854736328 text-white_A700 xl:text-fs44">{`Contact Us`}</Text>
          <Text className="3xl:mt-[22px] 3xl:text-fs19 capitalize font-bold lg:mt-[14px] lg:text-fs12 mt-[19px] mx-[auto] text-center text-fs16 text-white_A700 xl:mt-[16px] xl:text-fs14">{`Home / Contact Us`}</Text>
        </Column>
      </Stack>
      <Stack className="2xl:h-[2103px] 3xl:h-[2523px] h-[2101px] lg:h-[1635px] self-stretch w-[100%] xl:h-[1870px]">
        <Stack className="2xl:h-[2103px] 3xl:h-[2523px] absolute h-[2101px] inset-[0] lg:h-[1635px] self-stretch w-[100%] xl:h-[1870px]">
          <Stack className="2xl:h-[1380px] 3xl:h-[1656px] absolute bg-bluegray_904 h-[1379px] lg:h-[1073px] self-stretch top-[0] w-[100%] xl:h-[1227px]">
            <Image
              src="img_vector_11.svg"
              className="2xl:bottom-[59px] 2xl:h-[1204px] 3xl:bottom-[71px] 3xl:h-[1444px] absolute bottom-[59.7px] h-[1202.3px] lg:bottom-[46px] lg:h-[936px] object-cover opacity-op1 self-stretch w-[100%] xl:bottom-[53px] xl:h-[1070px]"
              alt="Vector"
            />
          </Stack>
          <div className="2xl:h-[771px] 3xl:h-[925px] absolute bg-gray_400 bottom-[0] h-[770px] lg:h-[599px] self-stretch w-[100%] xl:h-[685px]"></div>
          <Image
            src="img_group439.svg"
            className="2xl:h-[219px] 3xl:bottom-[806px] 3xl:h-[262px] absolute bottom-[672px] h-[218px] inset-x-[0] lg:bottom-[522px] lg:h-[170px] mx-[auto] object-contain w-[72%] xl:bottom-[597px] xl:h-[194px]"
            alt="Group439"
          />
        </Stack>
        <Column className="3xl:top-[294px] absolute inset-x-[0] items-center justify-start lg:top-[190px] mx-[auto] top-[245px] w-[61%] xl:top-[217px]">
          <Column className="font-opensans justify-start self-stretch w-[100%]">
            <Text className="2xl:text-fs21 3xl:text-fs25 font-bold font-opensans lg:text-fs16 mx-[auto] text-center text-fs21299999237060547 text-white_A700 uppercase xl:text-fs18">{`Contact Us`}</Text>
            <Text className="2xl:mr-[149px] 2xl:text-fs37 3xl:ml-[180px] 3xl:mr-[179px] 3xl:mt-[38px] 3xl:text-fs45 capitalize font-bold font-firasans lg:mt-[24px] lg:mx-[116px] lg:text-fs29 ml-[150px] mr-[149.75px] mt-[32px] text-center text-fs37900001525878906 text-white_A700 w-[74%] xl:mt-[28px] xl:mx-[133px] xl:text-fs33">{`Lorem ipsum dolor sit amet consectetur adipiscing elit sed do incididunt.`}</Text>
            <Row className="2xl:pr-[99px] 3xl:gap-[36px] 3xl:mt-[103px] 3xl:pl-[120px] 3xl:pr-[119px] font-roboto gap-[30px] grid grid-cols-2 items-center justify-start lg:gap-[23px] lg:mt-[66px] lg:px-[77px] mt-[86px] pl-[100px] pr-[99.75px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[76px] xl:px-[88px]">
              <Input
                className="2xl:pb-[27px] 2xl:pt-[26px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border border-gray_400 border-solid capitalize font-normal lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_703 pt-[26.6px] rounded-radius5 text-fs16 text-gray_703 text-left w-[100%] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                name="Group327"
                placeholder={`Your Name *`}
              ></Input>
              <Input
                className="2xl:pb-[27px] 2xl:pt-[26px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border border-gray_400 border-solid capitalize font-normal lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_703 pt-[26.6px] rounded-radius5 text-fs16 text-gray_703 text-left w-[100%] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                name="Group270"
                placeholder={`Email Address *`}
              ></Input>
            </Row>
            <Column className="3xl:mt-[38px] font-roboto lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Input
                className="2xl:mr-[99px] 2xl:pb-[27px] 2xl:pt-[26px] 3xl:ml-[120px] 3xl:mr-[119px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border border-gray_400 border-solid capitalize font-normal lg:mx-[77px] lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 ml-[100px] mr-[99.75px] pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_703 pt-[26.6px] rounded-radius5 text-fs16 text-gray_703 text-left w-[83%] xl:mx-[88px] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                name="Group274"
                placeholder={`Subject *`}
              ></Input>
              <TextArea
                className="2xl:mr-[99px] 2xl:pb-[40px] 2xl:pt-[26px] 3xl:ml-[120px] 3xl:mr-[119px] 3xl:mt-[38px] 3xl:pb-[48px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border border-gray_400 border-solid capitalize font-normal lg:mt-[24px] lg:mx-[77px] lg:pb-[31px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 ml-[100px] mr-[99.75px] mt-[32px] pb-[40.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_703 pt-[26.6px] rounded-radius5 text-fs16 text-gray_703 text-left w-[83%] xl:mt-[28px] xl:mx-[88px] xl:pb-[36px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                name="Group273"
                placeholder={`Messages *`}
              ></TextArea>
            </Column>
            <Column className="3xl:mt-[72px] font-miriamlibre items-end lg:mt-[46px] mt-[60px] self-stretch w-[100%] xl:mt-[53px]">
              <Button className="2xl:mx-[110px] 2xl:py-[21px] 3xl:mx-[132px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-deep_orange_800 border-bw capitalize font-bold lg:mx-[86px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mx-[110.75px] px-[32px] py-[21.6px] text-center text-fs16 text-white_A700 w-[17%] xl:mx-[98px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Submit Messages`}</Button>
            </Column>
          </Column>
          <Row className="3xl:mt-[328px] items-center justify-between lg:mt-[213px] mb-[1px] mt-[274px] px-[0] self-stretch w-[100%] xl:mt-[243px]">
            <Row className="items-center justify-between mb-[1px] px-[0] w-[19%]">
              <Image
                src="img_desktop.svg"
                className="2xl:h-[51px] 2xl:my-[26px] 3xl:h-[61px] 3xl:my-[31px] h-[50px] lg:h-[39px] lg:my-[20px] my-[26.5px] object-contain w-[26%] xl:h-[45px] xl:my-[23px]"
                alt="desktop"
              />
              <Column className="2xl:my-[6px] 3xl:my-[7px] font-opensans justify-start lg:my-[5px] my-[6.5px] w-[60%] xl:my-[5px]">
                <Text className="2xl:text-fs50 3xl:mr-[12px] 3xl:text-fs60 font-bold lg:mr-[7px] lg:text-fs39 mr-[10px] text-fs5052069854736328 text-left text-white_A700 xl:mr-[8px] xl:text-fs44">{`500+`}</Text>
                <Text className="3xl:text-fs19 font-extrabold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 uppercase xl:text-fs14">{`Progres Ipsum`}</Text>
              </Column>
            </Row>
            <Row className="items-center justify-center mb-[1px] w-[22%]">
              <Image
                src="img_laptop.svg"
                className="2xl:h-[51px] 2xl:my-[26px] 3xl:h-[61px] 3xl:my-[31px] h-[50px] lg:h-[39px] lg:my-[20px] my-[26.5px] object-contain w-[25%] xl:h-[45px] xl:my-[23px]"
                alt="laptop"
              />
              <Column className="2xl:my-[6px] 3xl:ml-[38px] 3xl:my-[7px] font-opensans justify-start lg:ml-[24px] lg:my-[5px] ml-[32px] my-[6.5px] w-[63%] xl:ml-[28px] xl:my-[5px]">
                <Text className="2xl:text-fs50 3xl:text-fs60 font-bold lg:text-fs39 self-stretch text-fs5052069854736328 text-left text-white_A700 xl:text-fs44">{`2,500+`}</Text>
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-extrabold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[8px] xl:text-fs14">{`Progres Ipsum`}</Text>
              </Column>
            </Row>
            <Row className="items-center justify-center mb-[1px] w-[17%]">
              <Image
                src="img_mobilealt.svg"
                className="2xl:h-[61px] 2xl:my-[21px] 3xl:h-[73px] 3xl:my-[25px] h-[60px] lg:h-[47px] lg:my-[16px] my-[21.5px] object-contain w-[19%] xl:h-[54px] xl:my-[19px]"
                alt="mobilealt"
              />
              <Column className="2xl:my-[6px] 3xl:ml-[38px] 3xl:my-[7px] font-opensans justify-start lg:ml-[24px] lg:my-[5px] ml-[32px] my-[6.5px] w-[66%] xl:ml-[28px] xl:my-[5px]">
                <Text className="2xl:text-fs50 3xl:mr-[12px] 3xl:text-fs60 font-bold lg:mr-[7px] lg:text-fs39 mr-[10px] text-fs5052069854736328 text-left text-white_A700 xl:mr-[8px] xl:text-fs44">{`750+`}</Text>
                <Text className="3xl:text-fs19 font-extrabold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 uppercase xl:text-fs14">{`Progres Ipsum`}</Text>
              </Column>
            </Row>
            <Row className="items-center justify-between px-[0] w-[20%]">
              <Image
                src="img_qrcode.svg"
                className="2xl:h-[51px] 2xl:my-[26px] 3xl:h-[61px] 3xl:my-[31px] h-[50px] lg:h-[39px] lg:my-[20px] mb-[26.569824px] mt-[26.570068px] object-contain w-[19%] xl:h-[45px] xl:my-[23px]"
                alt="qrcode"
              />
              <Column className="2xl:my-[6px] 3xl:my-[7px] font-opensans justify-start lg:my-[5px] mb-[6.569824px] mt-[6.5700684px] w-[68%] xl:my-[5px]">
                <Text className="2xl:text-fs50 3xl:text-fs60 font-bold lg:text-fs39 self-stretch text-fs5052069854736328 text-left text-white_A700 xl:text-fs44">{`3,500+`}</Text>
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-extrabold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[8px] xl:text-fs14">{`Progres Ipsum`}</Text>
              </Column>
            </Row>
          </Row>
        </Column>
      </Stack>
      <div className="self-stretch w-[100%]">
        <Stack className="2xl:h-[604px] 3xl:h-[725px] h-[603.5px] lg:h-[470px] mb-[1px] self-stretch w-[100%] xl:h-[537px]">
          <Column className="absolute font-opensans inset-[0] justify-start self-stretch w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_subtract.svg"
                className="2xl:h-[505px] 3xl:h-[606px] h-[504px] lg:h-[392px] object-cover self-stretch w-[100%] xl:h-[449px]"
                alt="Subtract"
              />
            </Column>
            <Text className="3xl:pl-[42px] 3xl:py-[42px] 3xl:text-fs19 bg-deep_orange_800 font-bold lg:pl-[27px] lg:py-[27px] lg:text-fs12 pl-[35px] py-[35px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[31px] xl:py-[31px] xl:text-fs14">{`Copyright © 2020. All right reserved`}</Text>
          </Column>
          <Row className="2xl:top-[127px] 3xl:top-[153px] absolute justify-evenly lg:top-[99px] px-[0] self-stretch top-[127.5px] w-[100%] xl:top-[113px]">
            <Row className="3xl:mb-[157px] items-center justify-between lg:mb-[101px] lg:mt-[1px] mb-[131px] mt-[2px] px-[0] w-[32%] xl:mb-[116px] xl:mt-[1px]">
              <Image
                src="img_oceanengine_1.svg"
                className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[456px] 3xl:my-[12px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:ml-[295px] lg:my-[7px] lg:w-[46px] ml-[380px] my-[10px] object-contain w-[60px] xl:h-[54px] xl:ml-[338px] xl:my-[8px] xl:w-[53px]"
                alt="oceanengine"
              />
              <Column className="font-firasans justify-center w-[27%]">
                <Text className="2xl:mt-[9px] 2xl:text-fs28 3xl:ml-[12px] 3xl:mt-[11px] 3xl:text-fs34 font-bold font-firasans lg:ml-[7px] lg:mt-[7px] lg:text-fs22 ml-[10px] mt-[9.5px] text-fs28399999618530273 text-left text-white_A700 uppercase xl:ml-[8px] xl:mt-[8px] xl:text-fs25">{`IT DEVeloper`}</Text>
                <Text className="2xl:mb-[9px] 3xl:mb-[11px] 3xl:mx-[12px] 3xl:text-fs19 font-opensans font-semibold lg:mb-[7px] lg:mx-[7px] lg:text-fs12 mb-[9.5px] mx-[10px] text-fs16 text-left text-white_A700 xl:mb-[8px] xl:mx-[8px] xl:text-fs14">{`Your Best Partner`}</Text>
              </Column>
            </Row>
            <Row className="justify-between px-[0] w-[63%]">
              <Column className="font-firasans justify-start w-[12%]">
                <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Usefull Link`}</Text>
                <Column className="3xl:mr-[12px] 3xl:mt-[36px] justify-start lg:mr-[7px] lg:mt-[23px] ml-[1px] mr-[10px] mt-[30px] w-[92%] xl:mr-[8px] xl:mt-[26px]">
                  <Row className="font-firasans items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_arrowchevron_1.svg"
                      className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                      alt="arrowchevron"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[33px] 3xl:text-fs19 capitalize font-bold lg:ml-[11px] lg:mr-[21px] lg:text-fs12 ml-[15px] mr-[28px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[24px] xl:text-fs14">{`About Us`}</Text>
                  </Row>
                  <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_arrowchevron_1.svg"
                      className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                      alt="arrowchevron"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[28px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[18px] lg:text-fs12 ml-[15px] mr-[24px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[21px] xl:text-fs14">{`Our Team`}</Text>
                  </Row>
                  <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Row className="font-firasans items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_arrowchevron_1.svg"
                        className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                        alt="arrowchevron"
                      />
                      <Text className="3xl:ml-[18px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`Pricing Plans`}</Text>
                    </Row>
                  </Column>
                  <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_arrowchevron_1.svg"
                      className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                      alt="arrowchevron"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[74px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[48px] lg:text-fs12 ml-[15px] mr-[62px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[55px] xl:text-fs14">{`Blog`}</Text>
                  </Row>
                  <Row className="3xl:mt-[6px] font-firasans items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_arrowchevron_1.svg"
                      className="2xl:h-[21px] 2xl:my-[3px] 3xl:h-[25px] 3xl:my-[4px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[2px] lg:w-[15px] my-[3.5px] object-contain w-[20px] xl:h-[18px] xl:my-[3px] xl:w-[17px]"
                      alt="arrowchevron"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[36px] 3xl:text-fs19 capitalize font-normal lg:ml-[11px] lg:mr-[23px] lg:text-fs12 ml-[15px] mr-[30px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[26px] xl:text-fs14">{`404 Page`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="3xl:mb-[56px] font-firasans justify-start lg:mb-[36px] mb-[47px] w-[22%] xl:mb-[41px]">
                <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Head Office`}</Text>
                <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                  <Column className="font-opensans justify-start w-[100%]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`(671) 555-0110`}</Text>
                  </Column>
                </Column>
              </Column>
              <Column className="2xl:mr-[380px] 3xl:mb-[121px] 3xl:mr-[456px] font-firasans justify-start lg:mb-[78px] lg:mr-[295px] mb-[101px] mr-[380.5px] w-[22%] xl:mb-[89px] xl:mr-[338px]">
                <Text className="2xl:text-fs21 3xl:text-fs25 capitalize font-bold lg:text-fs16 self-stretch text-fs21327999114990234 text-left text-white_A700 xl:text-fs18">{`Opening Hour`}</Text>
                <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                  <Column className="font-opensans justify-start w-[100%]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Mon - Sat : 8:00 - 17:00`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Sun : Closed`}</Text>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Row>
        </Stack>
      </div>
    </Column>
  );
};

export default ContactUs5Page;
