import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";
import { Line } from "components/Line";

const PersonalBlogPostwithsidebar3Page = () => {
  return (
    <Column className="bg-gray_52 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Column className="bg-indigo_800 justify-start self-stretch w-[100%]">
          <Column className="items-center self-stretch w-[100%]">
            <Stack className="2xl:h-[310px] 3xl:h-[372px] 3xl:mr-[50px] h-[309px] lg:h-[241px] lg:mr-[32px] mr-[42px] w-[97%] xl:h-[275px] xl:mr-[37px]">
              <Row className="absolute items-center justify-between px-[0] self-stretch top-[0] w-[100%]">
                <div className="2xl:h-[121px] 3xl:h-[145px] bg-gradient6  h-[120px] lg:h-[94px] rounded-radius60 w-[35%] xl:h-[107px]"></div>
                <div className="2xl:h-[121px] 3xl:h-[145px] border border-green_400 border-solid h-[120px] lg:h-[94px] rounded-radius60 w-[47%] xl:h-[107px]"></div>
              </Row>
              <div className="2xl:h-[121px] 3xl:h-[145px] 3xl:right-[78px] absolute bg-gradient6  bottom-[0] h-[120px] lg:h-[94px] lg:right-[50px] right-[65px] rounded-radius60 w-[11%] xl:h-[107px] xl:right-[57px]"></div>
              <div className="2xl:h-[107px] 3xl:h-[128px] 3xl:left-[511px] 3xl:w-[127px] absolute border border-green_400 border-solid h-[106px] inset-y-[0] left-[426px] lg:h-[83px] lg:left-[331px] lg:w-[82px] my-[auto] rounded-radius50 w-[106px] xl:h-[95px] xl:left-[378px] xl:w-[94px]"></div>
              <div className="3xl:top-[34px] absolute inset-x-[0] lg:top-[22px] mx-[auto] top-[29px] w-[88%] xl:top-[25px]">
                <Row className="font-raleway items-center justify-between px-[0] self-stretch w-[100%]">
                  <Text className="3xl:text-fs38 font-bold lg:text-fs24 text-fs32 text-left text-white_A700 xl:text-fs28">
                    <span className="text-green_400 text-fs32 font-raleway text-left font-bold lg:text-fs24 xl:text-fs28 3xl:text-fs38">
                      <>{`Joe`}</>
                    </span>
                    <span className="text-white_A700 text-fs32 font-raleway text-left font-bold lg:text-fs24 xl:text-fs28 3xl:text-fs38">
                      <>{`Daily.`}</>
                    </span>
                  </Text>
                  <Row className="3xl:mb-[14px] 3xl:mt-[10px] font-raleway items-center justify-between lg:mb-[9px] lg:mt-[7px] mb-[12px] mt-[9px] px-[0] w-[31%] xl:mb-[10px] xl:mt-[8px]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-green_400 text-left xl:text-fs14">{`Home`}</Text>
                    <Text className="3xl:text-fs21 font-semibold lg:text-fs14 text-fs18 text-left text-white_A700 xl:text-fs16">{`Category`}</Text>
                    <Text className="3xl:text-fs21 font-semibold lg:text-fs14 text-fs18 text-left text-white_A700 xl:text-fs16">{`About`}</Text>
                    <Text className="3xl:text-fs21 font-semibold lg:text-fs14 text-fs18 text-left text-white_A700 xl:text-fs16">{`Subscribe`}</Text>
                  </Row>
                </Row>
              </div>
            </Stack>
          </Column>
          <Column className="3xl:mt-[291px] items-end lg:mt-[189px] mt-[243px] self-stretch w-[100%] xl:mt-[216px]">
            <Stack className="2xl:h-[143px] 3xl:h-[171px] 3xl:mx-[63px] h-[142px] lg:h-[111px] lg:mx-[41px] mx-[53px] w-[49%] xl:h-[127px] xl:mx-[47px]">
              <div className="2xl:h-[121px] 3xl:h-[145px] absolute bg-gradient7  bottom-[0] h-[120px] inset-x-[0] lg:h-[94px] mx-[auto] rounded-radius60 w-[94%] xl:h-[107px]"></div>
              <div className="2xl:h-[121px] 3xl:h-[145px] absolute border border-green_400 border-solid h-[120px] lg:h-[94px] rounded-radius60 self-stretch top-[0] w-[100%] xl:h-[107px]"></div>
            </Stack>
          </Column>
        </Column>
        <Stack className="2xl:h-[4060px] 3xl:h-[4872px] 3xl:mt-[86px] h-[4057px] lg:h-[3156px] lg:mt-[56px] mt-[72px] mx-[auto] w-[86%] xl:h-[3610px] xl:mt-[64px]">
          <Stack className="2xl:h-[4060px] 3xl:h-[4872px] absolute h-[4057px] inset-[0] lg:h-[3156px] self-stretch w-[100%] xl:h-[3610px]">
            <Stack className="2xl:h-[4060px] 3xl:h-[4872px] absolute h-[4057px] inset-[0] lg:h-[3156px] self-stretch w-[100%] xl:h-[3610px]">
              <Column className="3xl:top-[818px] absolute bg-white_A700 font-raleway justify-start lg:top-[530px] right-[0] rounded-radius8 top-[682px] w-[28%] xl:top-[606px]">
                <Text className="3xl:mt-[16px] 3xl:mx-[18px] 3xl:text-fs28 font-bold lg:mt-[10px] lg:mx-[11px] lg:text-fs18 mt-[14px] mx-[15px] text-bluegray_900 text-fs24 text-left xl:mt-[12px] xl:mx-[13px] xl:text-fs21">{`Search`}</Text>
                <Column className="3xl:mb-[31px] 3xl:mt-[19px] items-center lg:mb-[20px] lg:mt-[12px] mb-[26px] mt-[16px] self-stretch w-[100%] xl:mb-[23px] xl:mt-[14px]">
                  <Row className="border-2 border-gray_505 border-solid font-roboto items-center justify-between mx-[auto] px-[0] rounded-radius8 w-[91%]">
                    <Text className="3xl:ml-[16px] 3xl:my-[14px] 3xl:text-fs19 font-normal lg:ml-[10px] lg:my-[9px] lg:text-fs12 ml-[14px] my-[12px] text-fs16 text-gray_505 text-left xl:ml-[12px] xl:my-[10px] xl:text-fs14">{`Enter keywords`}</Text>
                    <Image
                      src="img_cta.svg"
                      className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[10px] 3xl:my-[9px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:mr-[7px] lg:my-[6px] lg:w-[24px] mr-[9px] my-[8px] object-contain w-[32px] xl:h-[29px] xl:mr-[8px] xl:my-[7px] xl:w-[28px]"
                      alt="CTA"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="absolute font-roboto inset-[0] justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="items-center justify-start self-stretch w-[100%]">
                    <Row className="font-raleway items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[6px] 3xl:text-fs57 font-bold lg:ml-[3px] lg:text-fs37 ml-[5px] text-bluegray_900 text-center text-fs48 xl:ml-[4px] xl:text-fs42">{`New Year Resolution`}</Text>
                      <Image
                        src="img_share.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:my-[9px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:my-[6px] lg:w-[37px] my-[8px] object-contain w-[48px] xl:h-[43px] xl:my-[7px] xl:w-[42px]"
                        alt="Share"
                      />
                    </Row>
                    <Row className="3xl:mt-[7px] font-raleway items-center justify-start lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                      <div className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[6px] 3xl:w-[43px] bg-gray_201 h-[36px] lg:h-[28px] lg:ml-[3px] lg:w-[28px] ml-[5px] rounded-radius50 w-[36px] xl:h-[33px] xl:ml-[4px] xl:w-[32px]"></div>
                      <Text className="3xl:ml-[22px] 3xl:text-fs28 font-bold font-raleway lg:ml-[14px] lg:mt-[3px] lg:text-fs18 ml-[19px] mt-[4px] text-fs24 text-gray_604 text-left xl:ml-[16px] xl:mt-[3px] xl:text-fs21">{`By Joe`}</Text>
                      <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[16px] 3xl:w-[9px] bg-gray_400 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[10px] lg:w-[6px] ml-[16px] my-[14px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[12px] xl:w-[7px]"></div>
                      <Text className="3xl:ml-[19px] 3xl:my-[7px] 3xl:text-fs19 font-normal font-roboto lg:ml-[12px] lg:my-[4px] lg:text-fs12 ml-[16px] my-[6px] text-fs16 text-gray_604 text-left xl:ml-[14px] xl:my-[5px] xl:text-fs14">{`January 1, 2020`}</Text>
                      <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[16px] 3xl:w-[9px] bg-gray_400 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[10px] lg:w-[6px] ml-[16px] my-[14px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[12px] xl:w-[7px]"></div>
                      <Text className="3xl:ml-[19px] 3xl:mr-[1031px] 3xl:my-[7px] 3xl:text-fs19 font-normal font-roboto lg:ml-[12px] lg:mr-[668px] lg:my-[4px] lg:text-fs12 ml-[16px] mr-[859px] my-[6px] text-fs16 text-gray_604 text-left xl:ml-[14px] xl:mr-[764px] xl:my-[5px] xl:text-fs14">{`12min`}</Text>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[48px] bg-white_A700 items-center justify-start lg:mt-[31px] mt-[40px] rounded-radius8 w-[100%] xl:mt-[35px]">
                    <Column className="3xl:mb-[85px] 3xl:mt-[22px] bg-gray_201 font-raleway items-center justify-start lg:mb-[55px] lg:mt-[14px] mb-[71px] mt-[19px] mx-[auto] rounded-radius8 w-[96%] xl:mb-[63px] xl:mt-[16px]">
                      <Button className="3xl:mb-[403px] 3xl:mt-[26px] 3xl:mx-[34px] 3xl:px-[19px] 3xl:py-[9px] 3xl:text-fs19 bg-green_400 border-bw font-bold lg:mb-[261px] lg:mt-[17px] lg:mx-[22px] lg:px-[12px] lg:py-[6px] lg:text-fs12 mb-[336px] mt-[22px] mx-[29px] px-[16px] py-[8px] rounded-radius4 text-center text-fs16 text-white_A700 w-[13%] xl:mb-[298px] xl:mt-[19px] xl:mx-[25px] xl:px-[14px] xl:py-[7px] xl:text-fs14">{`PRODUCTIVITY`}</Button>
                    </Column>
                  </Column>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[67px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[43px] lg:text-fs12 mr-[10px] mt-[56px] text-fs16 text-gray_703 text-left w-[66%] xl:mr-[8px] xl:mt-[49px] xl:text-fs14">
                  {
                    <>
                      {`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`}
                      <br />
                      {`Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`}
                    </>
                  }
                </Text>
                <Text className="3xl:ml-[6px] 3xl:mr-[12px] 3xl:mt-[67px] 3xl:text-fs38 font-bold font-raleway lg:ml-[3px] lg:mr-[7px] lg:mt-[43px] lg:text-fs24 ml-[5px] mr-[10px] mt-[56px] text-bluegray_900 text-fs32 text-left xl:ml-[4px] xl:mr-[8px] xl:mt-[49px] xl:text-fs28">{`Motivation Letter for My Self`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_703 text-left w-[66%] xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`}</Text>
                <div className="2xl:h-[321px] 3xl:h-[385px] 3xl:mr-[12px] 3xl:mt-[49px] bg-gray_201 h-[320px] lg:h-[249px] lg:mr-[7px] lg:mt-[31px] ml-[1px] mr-[10px] mt-[41px] w-[66%] xl:h-[285px] xl:mr-[8px] xl:mt-[36px]"></div>
                <Text className="3xl:mt-[28px] 3xl:mx-[265px] 3xl:text-fs21 font-montserrat font-normal lg:mt-[18px] lg:mx-[171px] lg:text-fs14 mt-[24px] mx-[221px] text-fs18 text-gray_604 text-left xl:mt-[21px] xl:mx-[196px] xl:text-fs16">{`Image Holdiay in Bali since March 14, 2021`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[67px] 3xl:text-fs38 font-bold font-raleway lg:mr-[7px] lg:mt-[43px] lg:text-fs24 ml-[1px] mr-[10px] mt-[56px] text-bluegray_900 text-fs32 text-left xl:mr-[8px] xl:mt-[49px] xl:text-fs28">{`Preparing for New Year Work Life Balance`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_703 text-left w-[66%] xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`}</Text>
                <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
                  <Row className="3xl:gap-[26px] 3xl:pr-[499px] gap-[22px] grid grid-cols-2 items-center justify-start lg:gap-[17px] lg:pr-[323px] pl-[1px] pr-[416px] self-stretch w-[100%] xl:gap-[19px] xl:pr-[370px]">
                    <div className="2xl:h-[297px] 3xl:h-[356px] bg-gray_201 h-[296px] lg:h-[231px] w-[100%] xl:h-[264px]"></div>
                    <div className="2xl:h-[297px] 3xl:h-[356px] bg-gray_201 h-[296px] lg:h-[231px] w-[100%] xl:h-[264px]"></div>
                  </Row>
                </Column>
                <Text className="3xl:mt-[28px] 3xl:mx-[265px] 3xl:text-fs21 font-montserrat font-normal lg:mt-[18px] lg:mx-[171px] lg:text-fs14 mt-[24px] mx-[221px] text-fs18 text-gray_604 text-left xl:mt-[21px] xl:mx-[196px] xl:text-fs16">{`Image Holdiay in Bali since March 14, 2021`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[86px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[56px] lg:text-fs12 mr-[10px] mt-[72px] text-fs16 text-gray_703 text-left w-[66%] xl:mr-[8px] xl:mt-[64px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.`}</Text>
                <Column className="3xl:mt-[86px] items-center lg:mt-[56px] mt-[72px] self-stretch w-[100%] xl:mt-[64px]">
                  <Column className="font-raleway justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold lg:mr-[7px] lg:text-fs24 ml-[1px] mr-[10px] text-bluegray_900 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`Tags`}</Text>
                    <Column className="3xl:mt-[30px] items-center lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px]">
                      <Row className="3xl:gap-[19px] 3xl:pr-[846px] font-poppins gap-[16px] grid grid-cols-4 items-center justify-start lg:gap-[12px] lg:pr-[548px] pr-[705px] self-stretch w-[100%] xl:gap-[14px] xl:pr-[627px]">
                        <Button className="3xl:px-[31px] 3xl:py-[10px] 3xl:text-fs16 bg-green_400 border-bw font-normal lg:px-[20px] lg:py-[7px] lg:text-fs10 px-[26px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[100%] xl:px-[23px] xl:py-[8px] xl:text-fs12">{`NEW YEAR`}</Button>
                        <Button className="3xl:pl-[22px] 3xl:pr-[21px] 3xl:py-[10px] 3xl:text-fs16 bg-green_400 border-bw font-normal lg:px-[14px] lg:py-[7px] lg:text-fs10 pl-[19px] pr-[18px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[100%] xl:px-[16px] xl:py-[8px] xl:text-fs12">{`RESOLUTION`}</Button>
                        <Button className="3xl:pl-[21px] 3xl:pr-[20px] 3xl:py-[10px] 3xl:text-fs16 bg-green_400 border-bw font-normal lg:pl-[14px] lg:pr-[13px] lg:py-[7px] lg:text-fs10 pl-[18px] pr-[17px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[100%] xl:pl-[16px] xl:pr-[15px] xl:py-[8px] xl:text-fs12">{`MOTIVATION`}</Button>
                        <Button className="3xl:px-[42px] 3xl:py-[10px] 3xl:text-fs16 bg-green_400 border-bw font-normal lg:px-[27px] lg:py-[7px] lg:text-fs10 px-[35px] py-[9px] rounded-radius4 text-center text-fs14 text-white_A700 w-[100%] xl:px-[31px] xl:py-[8px] xl:text-fs12">{`DREAM`}</Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Row className="3xl:mr-[12px] 3xl:mt-[86px] bg-white_A700 items-center justify-start lg:mr-[7px] lg:mt-[56px] ml-[1px] mr-[10px] mt-[72px] rounded-radius9 w-[66%] xl:mr-[8px] xl:mt-[64px]">
                  <div className="2xl:h-[321px] 3xl:h-[385px] 3xl:ml-[22px] 3xl:my-[24px] bg-gray_201 h-[320px] lg:h-[249px] lg:ml-[14px] lg:my-[15px] ml-[19px] my-[20px] rounded-radius8 w-[44%] xl:h-[285px] xl:ml-[16px] xl:my-[17px]"></div>
                  <Column className="3xl:ml-[38px] 3xl:mr-[13px] 3xl:my-[76px] font-raleway justify-start lg:ml-[24px] lg:mr-[8px] lg:my-[49px] ml-[32px] mr-[11px] my-[64px] w-[48%] xl:ml-[28px] xl:mr-[9px] xl:my-[56px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold font-raleway lg:mr-[7px] lg:text-fs18 mr-[10px] text-bluegray_900 text-center text-fs24 xl:mr-[8px] xl:text-fs21">{`About Joe`}</Text>
                    <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal font-roboto lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_703 text-left w-[100%] xl:mt-[21px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`}</Text>
                    <Row className="3xl:gap-[19px] 3xl:mr-[12px] 3xl:mt-[48px] gap-[16px] grid grid-cols-4 items-center justify-start lg:gap-[12px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[53%] xl:gap-[14px] xl:mr-[8px] xl:mt-[35px]">
                      <Column className="border border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                        <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-green_400 text-left xl:my-[8px] xl:text-fs14">{`Fb`}</Text>
                      </Column>
                      <Column className="border border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                        <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-green_400 text-left xl:my-[8px] xl:text-fs14">{`Ig`}</Text>
                      </Column>
                      <Column className="border border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                        <Text className="3xl:ml-[10px] 3xl:mr-[9px] 3xl:my-[10px] 3xl:text-fs19 font-bold lg:ml-[7px] lg:mr-[6px] lg:my-[7px] lg:text-fs12 ml-[9px] mr-[8px] my-[9px] text-fs16 text-green_400 text-left xl:ml-[8px] xl:mr-[7px] xl:my-[8px] xl:text-fs14">{`Tw`}</Text>
                      </Column>
                      <Column className="border border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                        <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-green_400 text-left xl:my-[8px] xl:text-fs14">{`Yt`}</Text>
                      </Column>
                    </Row>
                  </Column>
                </Row>
                <List
                  className="3xl:gap-[22px] 3xl:mr-[12px] 3xl:mt-[19px] flex-wrap gap-[19px] grid grid-cols-2 lg:gap-[14px] lg:mr-[7px] lg:mt-[12px] min-h-[auto] ml-[1px] mr-[10px] mt-[16px] w-[66%] xl:gap-[16px] xl:mr-[8px] xl:mt-[14px]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 font-raleway justify-start rounded-radius9 w-[100%]">
                    <Text className="3xl:mt-[15px] 3xl:mx-[19px] 3xl:text-fs19 font-bold lg:mt-[10px] lg:mx-[12px] lg:text-fs12 mt-[13px] mx-[16px] text-bluegray_900 text-center text-fs16 xl:mt-[11px] xl:mx-[14px] xl:text-fs14">{`Previous`}</Text>
                    <Column className="3xl:mb-[15px] 3xl:mt-[19px] font-raleway items-center lg:mb-[10px] lg:mt-[12px] mb-[13px] mt-[16px] self-stretch w-[100%] xl:mb-[11px] xl:mt-[14px]">
                      <div className="2xl:h-[321px] 3xl:h-[385px] bg-gray_201 h-[320px] lg:h-[249px] mx-[auto] rounded-radius8 w-[92%] xl:h-[285px]"></div>
                      <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs28 font-bold leading-lh3199 lg:leading-lh24 lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-bluegray_900 text-center text-fs24 w-[50%] xl:leading-lh28 xl:mt-[14px] xl:text-fs21">
                        {
                          <>
                            {`Top 5 Destination`}
                            <br />
                            {`in Japan`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 font-raleway justify-start rounded-radius9 w-[100%]">
                    <Text className="3xl:mt-[15px] 3xl:mx-[22px] 3xl:text-fs19 font-bold lg:mt-[10px] lg:mx-[14px] lg:text-fs12 mt-[13px] mx-[19px] text-bluegray_900 text-fs16 text-left xl:mt-[11px] xl:mx-[16px] xl:text-fs14">{`Next`}</Text>
                    <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                      <div className="2xl:h-[321px] 3xl:h-[385px] bg-gray_201 h-[320px] lg:h-[249px] mx-[auto] rounded-radius8 w-[91%] xl:h-[285px]"></div>
                    </Column>
                    <Column className="3xl:mb-[15px] 3xl:mt-[19px] font-raleway items-end lg:mb-[10px] lg:mt-[12px] mb-[13px] mt-[16px] self-stretch w-[100%] xl:mb-[11px] xl:mt-[14px]">
                      <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[32px] 3xl:text-fs28 font-bold leading-lh3199 lg:leading-lh24 lg:mx-[21px] lg:text-fs18 mx-[27px] text-bluegray_900 text-center text-fs24 w-[76%] xl:leading-lh28 xl:mx-[24px] xl:text-fs21">
                        {
                          <>
                            {`Tips for Work-Life`}
                            <br />
                            {`Balance Work From Home`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Column>
                </List>
              </Column>
            </Stack>
            <Column className="3xl:top-[1010px] absolute bg-white_A700 font-raleway justify-start lg:top-[654px] right-[0] rounded-radius8 top-[842px] w-[28%] xl:top-[749px]">
              <Text className="3xl:mt-[26px] 3xl:mx-[25px] 3xl:text-fs28 font-bold lg:mt-[17px] lg:mx-[16px] lg:text-fs18 mt-[22px] mx-[21px] text-black_900 text-fs24 text-left xl:mt-[19px] xl:mx-[18px] xl:text-fs21">{`Recommended for you`}</Text>
              <List
                className="3xl:mb-[40px] 3xl:mt-[38px] 3xl:mx-[25px] flex-wrap gap-[0] lg:mb-[26px] lg:mt-[24px] lg:mx-[16px] mb-[34px] min-h-[auto] mt-[32px] mx-[21px] w-[82%] xl:mb-[30px] xl:mt-[28px] xl:mx-[18px]"
                orientation="vertical"
              >
                <Row className="3xl:mr-[9px] 3xl:my-[19px] justify-between lg:mr-[6px] lg:my-[12px] mr-[8px] my-[16px] px-[0] w-[97%] xl:mr-[7px] xl:my-[14px]">
                  <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] bg-gray_201 h-[64px] lg:h-[50px] lg:w-[49px] rounded-radius8 w-[64px] xl:h-[57px] xl:w-[56px]"></div>
                  <Column className="3xl:mb-[9px] 3xl:mt-[6px] font-raleway justify-start lg:mb-[6px] lg:mt-[3px] mb-[8px] mt-[5px] w-[71%] xl:mb-[7px] xl:mt-[4px]">
                    <Text className="3xl:text-fs19 font-bold font-raleway lg:text-fs12 self-stretch text-black_900 text-fs16 text-left xl:text-fs14">{`Top 5 Destination in Japan`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-black_900 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`Sept 10, 2020`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:mr-[27px] 3xl:my-[19px] justify-between lg:mr-[17px] lg:my-[12px] mr-[23px] my-[16px] px-[0] w-[92%] xl:mr-[20px] xl:my-[14px]">
                  <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] bg-gray_201 h-[64px] lg:h-[50px] lg:w-[49px] rounded-radius8 w-[64px] xl:h-[57px] xl:w-[56px]"></div>
                  <Column className="3xl:mb-[9px] 3xl:mt-[6px] font-raleway justify-start lg:mb-[6px] lg:mt-[3px] mb-[8px] mt-[5px] w-[70%] xl:mb-[7px] xl:mt-[4px]">
                    <Text className="3xl:text-fs19 font-bold font-raleway lg:text-fs12 self-stretch text-black_900 text-fs16 text-left xl:text-fs14">{`Our Favorite Destination`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-black_900 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`Sept 10, 2020`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:my-[19px] justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
                  <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] bg-gray_201 h-[64px] lg:h-[50px] lg:w-[49px] rounded-radius8 w-[64px] xl:h-[57px] xl:w-[56px]"></div>
                  <Column className="3xl:mb-[9px] 3xl:mt-[6px] font-raleway justify-start lg:mb-[6px] lg:mt-[3px] mb-[8px] mt-[5px] w-[72%] xl:mb-[7px] xl:mt-[4px]">
                    <Text className="3xl:text-fs19 font-bold font-raleway lg:text-fs12 self-stretch text-black_900 text-fs16 text-left xl:text-fs14">{`The Best View Sunset Ever!`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-black_900 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`Sept 10, 2020`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Stack>
          <Column className="3xl:top-[1491px] absolute bg-white_A700 font-raleway justify-center lg:top-[966px] right-[0] rounded-radius8 top-[1242px] w-[28%] xl:top-[1104px]">
            <Text className="3xl:mt-[24px] 3xl:mx-[18px] 3xl:text-fs28 font-bold lg:mt-[15px] lg:mx-[11px] lg:text-fs18 mt-[20px] mx-[15px] text-bluegray_900 text-fs24 text-left xl:mt-[17px] xl:mx-[13px] xl:text-fs21">{`Categories`}</Text>
            <Column className="3xl:mb-[24px] 3xl:mt-[19px] items-center lg:mb-[15px] lg:mt-[12px] mb-[20px] mt-[16px] self-stretch w-[100%] xl:mb-[17px] xl:mt-[14px]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] mx-[auto] w-[91%]"
                orientation="vertical"
              >
                <Row className="3xl:gap-[19px] 3xl:my-[9px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] lg:my-[6px] my-[8px] self-stretch w-[100%] xl:gap-[14px] xl:my-[7px]">
                  <Column className="bg-gray_201 font-raleway items-center justify-start rounded-radius8 w-[100%]">
                    <Button className="3xl:ml-[130px] 3xl:mr-[12px] 3xl:px-[13px] 3xl:py-[9px] 3xl:text-fs19 bg-indigo_800 border-bw font-bold lg:ml-[84px] lg:mr-[7px] lg:px-[8px] lg:py-[6px] lg:text-fs12 ml-[109px] mr-[10px] px-[11px] py-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] text-center text-fs16 text-white_A700 w-[21%] xl:ml-[96px] xl:mr-[8px] xl:px-[9px] xl:py-[7px] xl:text-fs14">{`9`}</Button>
                    <Text className="3xl:mb-[7px] 3xl:mt-[48px] 3xl:text-fs19 font-bold lg:mb-[4px] lg:mt-[31px] lg:text-fs12 mb-[6px] mt-[40px] mx-[auto] text-black_900 text-fs16 text-left xl:mb-[5px] xl:mt-[35px] xl:text-fs14">{`Travel`}</Text>
                  </Column>
                  <Column className="bg-gray_201 font-raleway items-center justify-start rounded-radius8 w-[100%]">
                    <Button className="3xl:mx-[15px] 3xl:px-[13px] 3xl:py-[9px] 3xl:text-fs19 bg-indigo_800 border-bw font-bold lg:mx-[10px] lg:px-[8px] lg:py-[6px] lg:text-fs12 mx-[13px] px-[11px] py-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] text-center text-fs16 text-white_A700 w-[21%] xl:mx-[11px] xl:px-[9px] xl:py-[7px] xl:text-fs14">{`8`}</Button>
                    <Text className="3xl:mb-[14px] 3xl:mt-[40px] 3xl:text-fs19 font-bold lg:mb-[9px] lg:mt-[26px] lg:text-fs12 mb-[12px] mt-[34px] mx-[auto] text-black_900 text-fs16 text-left xl:mb-[10px] xl:mt-[30px] xl:text-fs14">{`Productivity`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:gap-[19px] 3xl:my-[9px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] lg:my-[6px] my-[8px] self-stretch w-[100%] xl:gap-[14px] xl:my-[7px]">
                  <Column className="bg-gray_201 font-raleway items-center justify-start rounded-radius8 w-[100%]">
                    <Button className="3xl:ml-[130px] 3xl:mr-[12px] 3xl:px-[7px] 3xl:py-[9px] 3xl:text-fs19 bg-indigo_800 border-bw font-bold lg:ml-[84px] lg:mr-[7px] lg:px-[4px] lg:py-[6px] lg:text-fs12 ml-[109px] mr-[10px] px-[6px] py-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] text-center text-fs16 text-white_A700 w-[21%] xl:ml-[96px] xl:mr-[8px] xl:px-[5px] xl:py-[7px] xl:text-fs14">{`10`}</Button>
                    <Text className="3xl:mb-[14px] 3xl:mt-[40px] 3xl:text-fs19 font-bold lg:mb-[9px] lg:mt-[26px] lg:text-fs12 mb-[12px] mt-[34px] mx-[auto] text-black_900 text-fs16 text-left xl:mb-[10px] xl:mt-[30px] xl:text-fs14">{`Motivation`}</Text>
                  </Column>
                  <Column className="bg-gray_201 font-raleway items-center justify-start rounded-radius8 w-[100%]">
                    <Button className="3xl:mx-[15px] 3xl:px-[8px] 3xl:py-[9px] 3xl:text-fs19 bg-indigo_800 border-bw font-bold lg:mx-[10px] lg:px-[5px] lg:py-[6px] lg:text-fs12 mx-[13px] px-[7px] py-[8px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] text-center text-fs16 text-white_A700 w-[21%] xl:mx-[11px] xl:px-[6px] xl:py-[7px] xl:text-fs14">{`12`}</Button>
                    <Text className="3xl:mb-[14px] 3xl:mt-[40px] 3xl:text-fs19 font-bold lg:mb-[9px] lg:mt-[26px] lg:text-fs12 mb-[12px] mt-[34px] mx-[auto] text-black_900 text-fs16 text-left xl:mb-[10px] xl:mt-[30px] xl:text-fs14">{`Relationship`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
        </Stack>
        <Row className="3xl:mt-[115px] bg-indigo_300 font-raleway justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:mb-[507px] 3xl:ml-[129px] 3xl:mt-[106px] 3xl:text-fs57 font-bold leading-lh6398 lg:leading-lh49 lg:mb-[329px] lg:ml-[84px] lg:mt-[69px] lg:text-fs37 mb-[423px] ml-[108px] mt-[89px] text-fs48 text-left text-white_A700 w-[28%] xl:leading-lh56 xl:mb-[376px] xl:ml-[96px] xl:mt-[79px] xl:text-fs42">{`Leave a Comment`}</Text>
          <Column className="3xl:mb-[105px] 3xl:ml-[14px] 3xl:mr-[126px] 3xl:mt-[127px] font-roboto justify-start lg:mb-[68px] lg:ml-[9px] lg:mr-[81px] lg:mt-[82px] mb-[88px] ml-[12px] mr-[105px] mt-[106px] w-[57%] xl:mb-[78px] xl:ml-[10px] xl:mr-[93px] xl:mt-[94px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 w-[54%] xl:mr-[8px] xl:text-fs14">{`Have a project in mind that you think we’d be a great fit for it? We’d love to know what you’re thinking`}</Text>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                <Column className="font-roboto justify-start w-[49%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Name`}</Text>
                  <Input
                    className="3xl:mt-[19px] 3xl:pb-[22px] 3xl:pl-[19px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-indigo_901 border-solid font-normal lg:mt-[12px] lg:pb-[14px] lg:pl-[12px] lg:pt-[16px] lg:text-fs12 mt-[16px] pb-[19px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_505 pt-[21px] rounded-radius8 self-stretch text-fs16 text-gray_505 text-left w-[100%] xl:mt-[14px] xl:pb-[16px] xl:pl-[14px] xl:pt-[18px] xl:text-fs14"
                    name="TextBox"
                    placeholder={`Input your name in here`}
                  ></Input>
                </Column>
                <Column className="font-roboto justify-start w-[49%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Email`}</Text>
                  <Input
                    className="3xl:mt-[19px] 3xl:pb-[22px] 3xl:pl-[19px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-indigo_901 border-solid font-normal lg:mt-[12px] lg:pb-[14px] lg:pl-[12px] lg:pt-[16px] lg:text-fs12 mt-[16px] pb-[19px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_505 pt-[21px] rounded-radius8 self-stretch text-fs16 text-gray_505 text-left w-[100%] xl:mt-[14px] xl:pb-[16px] xl:pl-[14px] xl:pt-[18px] xl:text-fs14"
                    name="TextBox"
                    placeholder={`Input your email in here`}
                  ></Input>
                </Column>
              </Row>
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Comment`}</Text>
            <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
              <Column className="bg-white_A700 border border-indigo_901 border-solid font-roboto items-center justify-start rounded-radius8 self-stretch w-[100%]">
                <Text className="3xl:mb-[114px] 3xl:mt-[20px] 3xl:mx-[19px] 3xl:text-fs19 font-normal lg:mb-[73px] lg:mt-[13px] lg:mx-[12px] lg:text-fs12 mb-[95px] mt-[17px] mx-[16px] text-fs16 text-gray_505 text-left xl:mb-[84px] xl:mt-[15px] xl:mx-[14px] xl:text-fs14">{`Your comments`}</Text>
              </Column>
            </Column>
            <CheckBox
              className="3xl:mr-[12px] 3xl:mt-[45px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[29px] lg:text-fs12 mr-[10px] mt-[38px] text-fs16 text-left text-white_A700 w-[65%] xl:mr-[8px] xl:mt-[33px] xl:text-fs14"
              inputClassName="border border-solid border-white_A700 rounded-radius4 mr-[5px]"
              name="Group281"
              label={`Save my name and email in this browser for the next time I comment.`}
            ></CheckBox>
          </Column>
        </Row>
        <Row className="3xl:mt-[138px] items-center justify-start lg:mt-[89px] mt-[115px] self-stretch w-[100%] xl:mt-[102px]">
          <div className="2xl:h-[381px] 3xl:h-[457px] 3xl:ml-[192px] 3xl:w-[456px] bg-gray_200_87 h-[380px] lg:h-[296px] lg:ml-[124px] lg:w-[295px] ml-[160px] opacity-op5 w-[380px] xl:h-[339px] xl:ml-[142px] xl:w-[338px]"></div>
          <Column className="3xl:ml-[141px] 3xl:mr-[189px] 3xl:my-[99px] font-raleway justify-start lg:ml-[91px] lg:mr-[122px] lg:my-[64px] ml-[118px] mr-[158px] my-[83px] w-[43%] xl:ml-[104px] xl:mr-[140px] xl:my-[73px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold font-raleway lg:mr-[7px] lg:text-fs37 mr-[10px] text-bluegray_900 text-fs48 text-left xl:mr-[8px] xl:text-fs42">{`Subscribe JoeDaily.`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-center text-fs16 text-gray_703 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Subscribe to my newsletter for the latest update`}</Text>
            <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
              <Row className="font-roboto items-center justify-between px-[0] self-stretch w-[100%]">
                <Input
                  className="3xl:pb-[21px] 3xl:pl-[19px] 3xl:pt-[22px] 3xl:text-fs19 bg-white_A700 border border-indigo_800 border-solid font-normal lg:pl-[12px] lg:py-[14px] lg:text-fs12 mb-[1px] pb-[18px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_505 pt-[19px] rounded-radius8 text-fs16 text-gray_505 text-left w-[71%] xl:pl-[14px] xl:py-[16px] xl:text-fs14"
                  name="EmailAddress"
                  placeholder={`Input your email address in here`}
                ></Input>
                <Button className="2xl:py-[19px] 3xl:px-[42px] 3xl:py-[23px] 3xl:text-fs16 bg-green_400 border-bw font-bold lg:px-[27px] lg:py-[15px] lg:text-fs10 mt-[1px] px-[35px] py-[19.5px] rounded-radius8 text-center text-fs14 text-white_A700 w-[27%] xl:px-[31px] xl:py-[17px] xl:text-fs12">{`Get Started`}</Button>
              </Row>
            </Column>
          </Column>
        </Row>
        <div className="3xl:mt-[115px] lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Stack className="2xl:h-[361px] 3xl:h-[433px] bg-indigo_800 h-[360px] lg:h-[280px] self-stretch w-[100%] xl:h-[321px]">
            <Image
              src="img_element_2.png"
              className="2xl:h-[361px] 3xl:h-[433px] absolute h-[360px] inset-[0] lg:h-[280px] object-cover self-stretch w-[100%] xl:h-[321px]"
              alt="Element"
            />
            <Column className="3xl:top-[74px] absolute font-raleway inset-x-[0] justify-start lg:top-[48px] mx-[auto] top-[62px] w-[86%] xl:top-[55px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold lg:mr-[7px] lg:text-fs37 mr-[10px] text-fs48 text-left text-white_A700 xl:mr-[8px] xl:text-fs42">
                <span className="text-green_400 text-fs48 font-raleway text-left font-bold lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                  <>{`Joe`}</>
                </span>
                <span className="text-white_A700 text-fs48 font-raleway text-left font-bold lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                  <>{`Daily.`}</>
                </span>
              </Text>
              <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
                <Line className="bg-white_A700 h-[1px] self-stretch w-[100%]" />
                <Row className="3xl:mt-[37px] font-roboto items-center justify-evenly lg:mt-[24px] mt-[31px] px-[0] self-stretch w-[100%] xl:mt-[27px]">
                  <Text className="3xl:my-[19px] 3xl:text-fs19 font-normal lg:my-[12px] lg:text-fs12 my-[16px] text-fs16 text-left text-white_A700 xl:my-[14px] xl:text-fs14">
                    <span className="text-white_A700 text-fs16 tracking-ls1 font-roboto text-left font-bold lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{`2021`}</>
                    </span>
                    <span className="text-white_A700 text-fs16 font-roboto text-left font-normal lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                      <>{` | All rights reserved by JoeDaily.`}</>
                    </span>
                  </Text>
                  <Row className="3xl:gap-[48px] gap-[40px] grid grid-cols-4 items-center justify-between lg:gap-[31px] w-[28%] xl:gap-[35px]">
                    <Column className="border-2 border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:my-[14px] 3xl:text-fs28 font-bold lg:my-[9px] lg:text-fs18 mx-[auto] my-[12px] text-fs24 text-green_400 text-left xl:my-[10px] xl:text-fs21">{`Fb`}</Text>
                    </Column>
                    <Column className="border-2 border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:my-[14px] 3xl:text-fs28 font-bold lg:my-[9px] lg:text-fs18 mx-[auto] my-[12px] text-fs24 text-green_400 text-left xl:my-[10px] xl:text-fs21">{`Ig`}</Text>
                    </Column>
                    <Column className="border-2 border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:my-[14px] 3xl:text-fs28 font-bold lg:my-[9px] lg:text-fs18 mx-[auto] my-[12px] text-fs24 text-green_400 text-left xl:my-[10px] xl:text-fs21">{`Tw`}</Text>
                    </Column>
                    <Column className="border-2 border-green_400 border-solid font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:my-[14px] 3xl:text-fs28 font-bold lg:my-[9px] lg:text-fs18 mx-[auto] my-[12px] text-fs24 text-green_400 text-left xl:my-[10px] xl:text-fs21">{`Yt`}</Text>
                    </Column>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Stack>
        </div>
      </Column>
    </Column>
  );
};

export default PersonalBlogPostwithsidebar3Page;
