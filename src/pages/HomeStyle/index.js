import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { List } from "components/List";
import { Button } from "components/Button";

const HomeStylePage = () => {
  return (
    <Column className="bg-gray_52 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[801px] 3xl:h-[961px] bg-indigo_800 h-[800px] lg:h-[623px] self-stretch w-[100%] xl:h-[712px]">
          <Image
            src="img_element.png"
            className="2xl:h-[801px] 3xl:h-[961px] absolute h-[800px] inset-[0] lg:h-[623px] object-cover self-stretch w-[100%] xl:h-[712px]"
            alt="Element"
          />
          <Column className="3xl:top-[34px] absolute inset-x-[0] items-center justify-start lg:top-[22px] mx-[auto] top-[29px] w-[86%] xl:top-[25px]">
            <div className="w-[100%]">
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
            <Row className="3xl:mt-[94px] justify-between lg:mt-[61px] mt-[79px] px-[0] self-stretch w-[100%] xl:mt-[70px]">
              <Column className="3xl:mb-[31px] 3xl:mt-[73px] justify-start lg:mb-[20px] lg:mt-[47px] mb-[26px] mt-[61px] w-[47%] xl:mb-[23px] xl:mt-[54px]">
                <Stack className="2xl:h-[193px] 3xl:h-[231px] 3xl:mr-[12px] font-raleway h-[192px] lg:h-[150px] lg:mr-[7px] mr-[10px] w-[81%] xl:h-[171px] xl:mr-[8px]">
                  <Text className="2xl:leading-lh96 3xl:leading-lh115 3xl:text-fs86 absolute font-bold inset-[0] leading-lh9600 lg:leading-lh74 lg:text-fs56 self-stretch text-fs72 text-left text-white_A700 w-[100%] xl:leading-lh85 xl:text-fs64">
                    {
                      <>
                        {`Welcome to`}
                        <br />
                        {`JoeDaily`}
                      </>
                    }
                  </Text>
                  <Line className="3xl:bottom-[36px] 3xl:right-[28px] absolute bg-gray_52 bottom-[30px] h-[8px] lg:bottom-[23px] lg:right-[18px] right-[24px] w-[26%] xl:bottom-[26px] xl:right-[21px]" />
                </Stack>
                <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Row className="font-raleway items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs28 font-bold lg:mb-[2px] lg:mt-[1px] lg:text-fs18 mb-[3px] mt-[2px] text-center text-fs24 text-white_A700 xl:mb-[2px] xl:mt-[1px] xl:text-fs21">{`Travel`}</Text>
                    <Line className="2xl:h-[38px] 3xl:h-[45px] bg-gray_52 h-[37px] lg:h-[29px] w-[2px] xl:h-[33px]" />
                    <Text className="3xl:text-fs28 font-bold lg:mb-[2px] lg:mt-[1px] lg:text-fs18 mb-[3px] mt-[2px] text-center text-fs24 text-white_A700 xl:mb-[2px] xl:mt-[1px] xl:text-fs21">{`Productivity`}</Text>
                    <Line className="2xl:h-[38px] 3xl:h-[45px] bg-gray_52 h-[37px] lg:h-[29px] w-[2px] xl:h-[33px]" />
                    <Text className="3xl:text-fs28 font-bold lg:mb-[2px] lg:mt-[1px] lg:text-fs18 mb-[3px] mt-[2px] text-fs24 text-left text-white_A700 xl:mb-[2px] xl:mt-[1px] xl:text-fs21">{`Motivation`}</Text>
                    <Line className="2xl:h-[38px] 3xl:h-[45px] bg-gray_52 h-[37px] lg:h-[29px] w-[2px] xl:h-[33px]" />
                    <Text className="3xl:text-fs28 font-bold lg:mb-[2px] lg:mt-[1px] lg:text-fs18 mb-[3px] mt-[2px] text-fs24 text-left text-white_A700 xl:mb-[2px] xl:mt-[1px] xl:text-fs21">{`Relationship`}</Text>
                  </Row>
                  <Row className="3xl:gap-[48px] 3xl:mt-[205px] 3xl:pr-[274px] gap-[40px] grid grid-cols-4 items-center justify-start lg:gap-[31px] lg:mt-[133px] lg:pr-[178px] mt-[171px] pr-[229px] self-stretch w-[100%] xl:gap-[35px] xl:mt-[152px] xl:pr-[203px]">
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
                </Column>
              </Column>
              <Stack className="2xl:h-[576px] 3xl:h-[691px] h-[575px] lg:h-[448px] lg:mr-[1px] mr-[2px] w-[50%] xl:h-[512px] xl:mr-[1px]">
                <Image
                  src="img_photos.svg"
                  className="2xl:h-[481px] 3xl:h-[577px] 3xl:left-[98px] absolute h-[480px] left-[82px] lg:h-[374px] lg:left-[63px] object-contain top-[0] w-[65%] xl:h-[427px] xl:left-[72px]"
                  alt="Photos"
                />
                <Image
                  src="img_photos_1.svg"
                  className="2xl:h-[273px] 3xl:h-[327px] 3xl:top-[37px] absolute h-[272px] lg:h-[212px] lg:top-[24px] object-contain right-[0] top-[31px] w-[37%] xl:h-[242px] xl:top-[27px]"
                  alt="Photos"
                />
                <Image
                  src="img_photos_2.svg"
                  className="2xl:h-[273px] 3xl:h-[327px] absolute bottom-[0] h-[272px] left-[0] lg:h-[212px] object-contain w-[37%] xl:h-[242px]"
                  alt="Photos"
                />
              </Stack>
            </Row>
          </Column>
        </Stack>
        <Row className="3xl:mt-[105px] items-center justify-start lg:mt-[68px] mt-[88px] self-stretch w-[100%] xl:mt-[78px]">
          <Column className="3xl:ml-[124px] font-raleway justify-start lg:ml-[80px] ml-[104px] w-[57%] xl:ml-[92px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold lg:mr-[7px] lg:text-fs37 mr-[10px] text-bluegray_900 text-center text-fs48 xl:mr-[8px] xl:text-fs42">{`Latest Post`}</Text>
            <Column className="3xl:mt-[48px] font-roboto items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <List
                className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                orientation="vertical"
              >
                <Row className="3xl:my-[14px] bg-white_A700 items-center justify-start lg:my-[9px] my-[12px] rounded-radius8 self-stretch w-[100%] xl:my-[10px]">
                  <div className="2xl:h-[325px] 3xl:h-[390px] 3xl:mb-[31px] 3xl:ml-[28px] 3xl:mt-[28px] bg-gray_201 h-[324px] lg:h-[252px] lg:mb-[20px] lg:ml-[18px] lg:mt-[18px] mb-[26px] ml-[24px] mt-[24px] rounded-radius9 w-[36%] xl:h-[289px] xl:mb-[23px] xl:ml-[21px] xl:mt-[21px]"></div>
                  <Column className="3xl:mb-[38px] 3xl:ml-[37px] 3xl:mr-[120px] 3xl:mt-[28px] font-raleway justify-start lg:mb-[24px] lg:ml-[24px] lg:mr-[77px] lg:mt-[18px] mb-[32px] ml-[31px] mr-[100px] mt-[24px] w-[45%] xl:mb-[28px] xl:ml-[27px] xl:mr-[88px] xl:mt-[21px]">
                    <Button className="3xl:mr-[12px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[9px] 3xl:text-fs19 bg-green_400_6c border-bw font-bold lg:mr-[7px] lg:pl-[20px] lg:pr-[19px] lg:py-[6px] lg:text-fs12 ml-[1px] mr-[10px] pl-[26px] pr-[25px] py-[8px] rounded-radius4 text-center text-fs16 text-green_400 w-[30%] xl:mr-[8px] xl:pl-[23px] xl:pr-[22px] xl:py-[7px] xl:text-fs14">{`TRAVEL`}</Button>
                    <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                      <Column className="font-raleway justify-start self-stretch w-[100%]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold font-raleway lg:mr-[7px] lg:text-fs24 ml-[1px] mr-[10px] text-bluegray_900 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`10 Days in Tokyo`}</Text>
                        <Row className="3xl:mr-[12px] 3xl:mt-[13px] font-raleway items-center justify-start lg:mr-[7px] lg:mt-[8px] ml-[1px] mr-[10px] mt-[11px] w-[78%] xl:mr-[8px] xl:mt-[9px]">
                          <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_201 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                          <Text className="3xl:ml-[19px] 3xl:my-[10px] 3xl:text-fs21 font-raleway font-semibold lg:ml-[12px] lg:my-[7px] lg:text-fs14 ml-[16px] my-[9px] text-bluegray_900 text-fs18 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs16">{`Joe Iskandar`}</Text>
                          <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[19px] 3xl:w-[9px] bg-bluegray_105 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[12px] lg:w-[6px] ml-[16px] my-[16px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[14px] xl:w-[7px]"></div>
                          <Text className="3xl:mb-[10px] 3xl:ml-[19px] 3xl:mt-[12px] 3xl:text-fs16 font-normal font-roboto lg:ml-[12px] lg:my-[7px] lg:text-fs10 mb-[9px] ml-[16px] mt-[10px] text-fs14 text-gray_505 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs12">{`June 12, 2021`}</Text>
                        </Row>
                        <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal font-roboto lg:mt-[12px] lg:text-fs12 mt-[16px] text-fs16 text-gray_703 text-left w-[100%] xl:mt-[14px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`}</Text>
                        <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-green_400 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`Read more`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Row className="3xl:my-[14px] bg-white_A700 items-center justify-start lg:my-[9px] my-[12px] rounded-radius8 self-stretch w-[100%] xl:my-[10px]">
                  <div className="2xl:h-[325px] 3xl:h-[390px] 3xl:mb-[31px] 3xl:ml-[28px] 3xl:mt-[28px] bg-gray_201 h-[324px] lg:h-[252px] lg:mb-[20px] lg:ml-[18px] lg:mt-[18px] mb-[26px] ml-[24px] mt-[24px] rounded-radius9 w-[36%] xl:h-[289px] xl:mb-[23px] xl:ml-[21px] xl:mt-[21px]"></div>
                  <Column className="3xl:mb-[38px] 3xl:ml-[37px] 3xl:mr-[120px] 3xl:mt-[28px] font-raleway justify-start lg:mb-[24px] lg:ml-[24px] lg:mr-[77px] lg:mt-[18px] mb-[32px] ml-[31px] mr-[100px] mt-[24px] w-[45%] xl:mb-[28px] xl:ml-[27px] xl:mr-[88px] xl:mt-[21px]">
                    <Button className="3xl:mr-[12px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[9px] 3xl:text-fs19 bg-green_400_6c border-bw font-bold lg:mr-[7px] lg:pl-[20px] lg:pr-[19px] lg:py-[6px] lg:text-fs12 ml-[1px] mr-[10px] pl-[26px] pr-[25px] py-[8px] rounded-radius4 text-center text-fs16 text-green_400 w-[30%] xl:mr-[8px] xl:pl-[23px] xl:pr-[22px] xl:py-[7px] xl:text-fs14">{`TRAVEL`}</Button>
                    <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                      <Column className="font-raleway justify-start self-stretch w-[100%]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs38 font-bold font-raleway lg:mr-[7px] lg:text-fs24 ml-[1px] mr-[10px] text-bluegray_900 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`Our Favorite Destination`}</Text>
                        <Row className="3xl:mr-[12px] 3xl:mt-[13px] font-raleway items-center justify-start lg:mr-[7px] lg:mt-[8px] ml-[1px] mr-[10px] mt-[11px] w-[78%] xl:mr-[8px] xl:mt-[9px]">
                          <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_201 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                          <Text className="3xl:ml-[19px] 3xl:my-[10px] 3xl:text-fs21 font-raleway font-semibold lg:ml-[12px] lg:my-[7px] lg:text-fs14 ml-[16px] my-[9px] text-bluegray_900 text-fs18 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs16">{`Joe Iskandar`}</Text>
                          <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[19px] 3xl:w-[9px] bg-bluegray_105 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[12px] lg:w-[6px] ml-[16px] my-[16px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[14px] xl:w-[7px]"></div>
                          <Text className="3xl:mb-[10px] 3xl:ml-[19px] 3xl:mt-[12px] 3xl:text-fs16 font-normal font-roboto lg:ml-[12px] lg:my-[7px] lg:text-fs10 mb-[9px] ml-[16px] mt-[10px] text-fs14 text-gray_505 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs12">{`June 12, 2021`}</Text>
                        </Row>
                        <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal font-roboto lg:mt-[12px] lg:text-fs12 mt-[16px] text-fs16 text-gray_703 text-left w-[100%] xl:mt-[14px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`}</Text>
                        <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-green_400 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`Read more`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Row className="3xl:my-[14px] bg-white_A700 items-center justify-start lg:my-[9px] my-[12px] rounded-radius8 self-stretch w-[100%] xl:my-[10px]">
                  <div className="2xl:h-[325px] 3xl:h-[390px] 3xl:mb-[31px] 3xl:ml-[28px] 3xl:mt-[28px] bg-gray_201 h-[324px] lg:h-[252px] lg:mb-[20px] lg:ml-[18px] lg:mt-[18px] mb-[26px] ml-[24px] mt-[24px] rounded-radius9 w-[36%] xl:h-[289px] xl:mb-[23px] xl:ml-[21px] xl:mt-[21px]"></div>
                  <Column className="3xl:mb-[38px] 3xl:ml-[37px] 3xl:mr-[103px] 3xl:mt-[28px] font-raleway justify-start lg:mb-[24px] lg:ml-[24px] lg:mr-[66px] lg:mt-[18px] mb-[32px] ml-[31px] mr-[86px] mt-[24px] w-[47%] xl:mb-[28px] xl:ml-[27px] xl:mr-[76px] xl:mt-[21px]">
                    <Button className="3xl:mr-[12px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[9px] 3xl:text-fs19 bg-green_400_6c border-bw font-bold lg:mr-[7px] lg:pl-[20px] lg:pr-[19px] lg:py-[6px] lg:text-fs12 ml-[1px] mr-[10px] pl-[26px] pr-[25px] py-[8px] rounded-radius4 text-center text-fs16 text-green_400 w-[29%] xl:mr-[8px] xl:pl-[23px] xl:pr-[22px] xl:py-[7px] xl:text-fs14">{`TRAVEL`}</Button>
                    <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                      <Column className="font-raleway justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs38 font-bold font-raleway lg:text-fs24 ml-[1px] text-bluegray_900 text-fs32 text-left xl:text-fs28">{`Hidden Paradise in Japan`}</Text>
                        <Row className="3xl:mr-[12px] 3xl:mt-[13px] font-raleway items-center justify-start lg:mr-[7px] lg:mt-[8px] ml-[1px] mr-[10px] mt-[11px] w-[75%] xl:mr-[8px] xl:mt-[9px]">
                          <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_201 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                          <Text className="3xl:ml-[19px] 3xl:my-[10px] 3xl:text-fs21 font-raleway font-semibold lg:ml-[12px] lg:my-[7px] lg:text-fs14 ml-[16px] my-[9px] text-bluegray_900 text-fs18 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs16">{`Joe Iskandar`}</Text>
                          <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[19px] 3xl:w-[9px] bg-bluegray_105 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[12px] lg:w-[6px] ml-[16px] my-[16px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[14px] xl:w-[7px]"></div>
                          <Text className="3xl:mb-[10px] 3xl:ml-[19px] 3xl:mt-[12px] 3xl:text-fs16 font-normal font-roboto lg:ml-[12px] lg:my-[7px] lg:text-fs10 mb-[9px] ml-[16px] mt-[10px] text-fs14 text-gray_505 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs12">{`June 12, 2021`}</Text>
                        </Row>
                        <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[12px] lg:text-fs12 ml-[1px] mr-[10px] mt-[16px] text-fs16 text-gray_703 text-left w-[96%] xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`}</Text>
                        <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-green_400 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`Read more`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
                <Row className="3xl:my-[14px] bg-white_A700 items-center justify-start lg:my-[9px] my-[12px] rounded-radius8 self-stretch w-[100%] xl:my-[10px]">
                  <div className="2xl:h-[325px] 3xl:h-[390px] 3xl:mb-[31px] 3xl:ml-[28px] 3xl:mt-[28px] bg-gray_201 h-[324px] lg:h-[252px] lg:mb-[20px] lg:ml-[18px] lg:mt-[18px] mb-[26px] ml-[24px] mt-[24px] rounded-radius9 w-[36%] xl:h-[289px] xl:mb-[23px] xl:ml-[21px] xl:mt-[21px]"></div>
                  <Column className="3xl:mb-[38px] 3xl:ml-[37px] 3xl:mr-[68px] 3xl:mt-[28px] font-raleway justify-start lg:mb-[24px] lg:ml-[24px] lg:mr-[44px] lg:mt-[18px] mb-[32px] ml-[31px] mr-[57px] mt-[24px] w-[50%] xl:mb-[28px] xl:ml-[27px] xl:mr-[50px] xl:mt-[21px]">
                    <Button className="3xl:mr-[12px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[9px] 3xl:text-fs19 bg-green_400_6c border-bw font-bold lg:mr-[7px] lg:pl-[20px] lg:pr-[19px] lg:py-[6px] lg:text-fs12 ml-[1px] mr-[10px] pl-[26px] pr-[25px] py-[8px] rounded-radius4 text-center text-fs16 text-green_400 w-[27%] xl:mr-[8px] xl:pl-[23px] xl:pr-[22px] xl:py-[7px] xl:text-fs14">{`TRAVEL`}</Button>
                    <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                      <Column className="font-raleway justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs38 font-bold font-raleway lg:text-fs24 ml-[1px] text-bluegray_900 text-fs32 text-left xl:text-fs28">{`The Best View Sunset Ever!`}</Text>
                        <Row className="3xl:mr-[12px] 3xl:mt-[13px] font-raleway items-center justify-start lg:mr-[7px] lg:mt-[8px] ml-[1px] mr-[10px] mt-[11px] w-[70%] xl:mr-[8px] xl:mt-[9px]">
                          <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_201 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                          <Text className="3xl:ml-[19px] 3xl:my-[10px] 3xl:text-fs21 font-raleway font-semibold lg:ml-[12px] lg:my-[7px] lg:text-fs14 ml-[16px] my-[9px] text-bluegray_900 text-fs18 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs16">{`Joe Iskandar`}</Text>
                          <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[19px] 3xl:my-[19px] 3xl:w-[9px] bg-bluegray_105 h-[8px] lg:h-[7px] lg:ml-[12px] lg:my-[12px] lg:w-[6px] ml-[16px] my-[16px] rounded-radius50 w-[8px] xl:ml-[14px] xl:my-[14px] xl:w-[7px]"></div>
                          <Text className="3xl:mb-[10px] 3xl:ml-[19px] 3xl:mt-[12px] 3xl:text-fs16 font-normal font-roboto lg:ml-[12px] lg:my-[7px] lg:text-fs10 mb-[9px] ml-[16px] mt-[10px] text-fs14 text-gray_505 text-left xl:ml-[14px] xl:my-[8px] xl:text-fs12">{`June 12, 2021`}</Text>
                        </Row>
                        <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[12px] lg:text-fs12 ml-[1px] mr-[10px] mt-[16px] text-fs16 text-gray_703 text-left w-[89%] xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.`}</Text>
                        <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-green_400 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`Read more`}</Text>
                      </Column>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Button className="2xl:py-[19px] 3xl:mt-[67px] 3xl:px-[42px] 3xl:py-[23px] 3xl:text-fs16 bg-green_400 border-bw font-bold lg:mt-[43px] lg:px-[27px] lg:py-[15px] lg:text-fs10 mt-[56px] mx-[auto] px-[35px] py-[19.5px] rounded-radius8 text-center text-fs14 text-white_A700 w-[20%] xl:mt-[49px] xl:px-[31px] xl:py-[17px] xl:text-fs12">{`Load more`}</Button>
            </Column>
          </Column>
          <Column className="3xl:mb-[178px] 3xl:ml-[68px] 3xl:mr-[124px] 3xl:mt-[124px] items-center justify-start lg:mb-[115px] lg:ml-[44px] lg:mr-[80px] lg:mt-[80px] mb-[149px] ml-[57px] mr-[104px] mt-[104px] w-[24%] xl:mb-[132px] xl:ml-[50px] xl:mr-[92px] xl:mt-[92px]">
            <Column className="bg-white_A700 font-raleway justify-start rounded-radius8 w-[100%]">
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
            <Column className="3xl:mt-[28px] bg-white_A700 font-raleway justify-start lg:mt-[18px] mt-[24px] rounded-radius8 w-[100%] xl:mt-[21px]">
              <Text className="3xl:mt-[26px] 3xl:mx-[25px] 3xl:text-fs28 font-bold lg:mt-[17px] lg:mx-[16px] lg:text-fs18 mt-[22px] mx-[21px] text-black_900 text-fs24 text-left xl:mt-[19px] xl:mx-[18px] xl:text-fs21">{`Popular Posts`}</Text>
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
            <Column className="3xl:mt-[28px] bg-white_A700 font-raleway justify-center lg:mt-[18px] mt-[24px] rounded-radius8 w-[100%] xl:mt-[21px]">
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
            <Column className="3xl:mt-[28px] bg-indigo_300 font-raleway items-center justify-center lg:mt-[18px] mt-[24px] rounded-radius8 w-[100%] xl:mt-[21px]">
              <div className="2xl:h-[213px] 3xl:h-[255px] 3xl:mt-[28px] bg-gray_201 h-[212px] lg:h-[165px] lg:mt-[18px] mt-[24px] mx-[auto] rounded-radius8 w-[85%] xl:h-[189px] xl:mt-[21px]"></div>
              <Text className="3xl:mt-[22px] 3xl:text-fs28 font-bold font-raleway lg:mt-[14px] lg:text-fs18 mt-[19px] mx-[auto] text-fs24 text-left text-white_A700 xl:mt-[16px] xl:text-fs21">{`Joe Iskandar`}</Text>
              <Text className="3xl:mt-[19px] 3xl:text-fs16 font-normal font-roboto lg:mt-[12px] lg:text-fs10 mt-[16px] mx-[auto] text-center text-fs14 text-white_A700 w-[65%] xl:mt-[14px] xl:text-fs12">{`Leverage agile frameworks to provide a robust synopsis for high level overviews.`}</Text>
              <Row className="3xl:gap-[19px] 3xl:mb-[50px] 3xl:mt-[38px] gap-[16px] grid grid-cols-4 items-center justify-center lg:gap-[12px] lg:mb-[32px] lg:mt-[24px] mb-[42px] mt-[32px] mx-[auto] w-[59%] xl:gap-[14px] xl:mb-[37px] xl:mt-[28px]">
                <Column className="border border-solid border-white_A700 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-left text-white_A700 xl:my-[8px] xl:text-fs14">{`Fb`}</Text>
                </Column>
                <Column className="border border-solid border-white_A700 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-left text-white_A700 xl:my-[8px] xl:text-fs14">{`Ig`}</Text>
                </Column>
                <Column className="border border-solid border-white_A700 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:ml-[10px] 3xl:mr-[9px] 3xl:my-[10px] 3xl:text-fs19 font-bold lg:ml-[7px] lg:mr-[6px] lg:my-[7px] lg:text-fs12 ml-[9px] mr-[8px] my-[9px] text-fs16 text-left text-white_A700 xl:ml-[8px] xl:mr-[7px] xl:my-[8px] xl:text-fs14">{`Tw`}</Text>
                </Column>
                <Column className="border border-solid border-white_A700 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:my-[10px] 3xl:text-fs19 font-bold lg:my-[7px] lg:text-fs12 mx-[auto] my-[9px] text-fs16 text-left text-white_A700 xl:my-[8px] xl:text-fs14">{`Yt`}</Text>
                </Column>
              </Row>
            </Column>
            <Column className="3xl:mt-[28px] bg-indigo_800 font-raleway items-center justify-start lg:mt-[18px] mt-[24px] rounded-radius8 w-[100%] xl:mt-[21px]">
              <Text className="3xl:mt-[24px] 3xl:text-fs28 font-bold lg:mt-[15px] lg:text-fs18 mt-[20px] mx-[auto] text-fs24 text-left text-white_A700 xl:mt-[17px] xl:text-fs21">{`Subscribe JoeDaily`}</Text>
              <Row className="3xl:mb-[24px] 3xl:mt-[19px] bg-white_A700 font-roboto items-center justify-between lg:mb-[15px] lg:mt-[12px] mb-[20px] mt-[16px] mx-[auto] px-[0] rounded-radius8 w-[91%] xl:mb-[17px] xl:mt-[14px]">
                <Text className="3xl:ml-[16px] 3xl:my-[14px] 3xl:text-fs19 font-normal lg:ml-[10px] lg:my-[9px] lg:text-fs12 ml-[14px] my-[12px] text-fs16 text-gray_505 text-left xl:ml-[12px] xl:my-[10px] xl:text-fs14">{`Enter email here`}</Text>
                <Image
                  src="img_cta.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[10px] 3xl:my-[9px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:mr-[7px] lg:my-[6px] lg:w-[24px] mr-[9px] my-[8px] object-contain w-[32px] xl:h-[29px] xl:mr-[8px] xl:my-[7px] xl:w-[28px]"
                  alt="CTA"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <div className="3xl:mt-[86px] lg:mt-[56px] mt-[72px] self-stretch w-[100%] xl:mt-[64px]">
          <Stack className="2xl:h-[361px] 3xl:h-[433px] bg-indigo_800 h-[360px] lg:h-[280px] self-stretch w-[100%] xl:h-[321px]">
            <Image
              src="img_element_1.png"
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

export default HomeStylePage;
