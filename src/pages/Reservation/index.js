import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { List } from "components/List";

const ReservationPage = () => {
  return (
    <Column className="bg-lime_50 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="bg-black_902 items-center justify-start self-stretch w-[100%]">
        <div className="3xl:mt-[19px] lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Column className="font-nunito items-center justify-start self-stretch w-[100%]">
              <Row className="items-center justify-start self-stretch w-[100%]">
                <Text className="3xl:ml-[97px] 3xl:text-fs19 font-normal lg:ml-[63px] lg:text-fs12 ml-[81px] text-fs16 text-gray_302 text-left xl:ml-[72px] xl:text-fs14">{`Odading Street`}</Text>
                <Text className="3xl:ml-[28px] 3xl:text-fs19 font-normal lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-gray_302 text-left xl:ml-[21px] xl:text-fs14">{`+62 8787 8787`}</Text>
                <Row className="3xl:ml-[1034px] 3xl:mr-[124px] font-nunito items-center justify-center lg:ml-[670px] lg:mr-[80px] lg:my-[3px] ml-[862px] mr-[104px] my-[4px] w-[10%] xl:ml-[766px] xl:mr-[92px] xl:my-[3px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Ig`}</Text>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-bold lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-left text-white_A700 xl:ml-[21px] xl:text-fs14">{`Tw`}</Text>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-bold lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-left text-white_A700 xl:ml-[21px] xl:text-fs14">{`Yt`}</Text>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-bold lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-left text-white_A700 xl:ml-[21px] xl:text-fs14">{`Fb`}</Text>
                </Row>
              </Row>
              <Line className="3xl:mt-[18px] bg-gray_801 h-[1px] lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]" />
            </Column>
            <Row className="3xl:mt-[38px] font-nunito justify-between lg:mt-[24px] mt-[32px] mx-[auto] px-[0] w-[86%] xl:mt-[28px]">
              <Image
                src="img_dummylogo02_10.svg"
                className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                alt="DummyLogo02"
              />
              <Row className="3xl:mb-[24px] 3xl:mt-[14px] items-center justify-center lg:mb-[15px] lg:mt-[9px] mb-[20px] mt-[12px] w-[41%] xl:mb-[17px] xl:mt-[10px]">
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-left text-white_A700 xl:ml-[42px] xl:text-fs14">{`Menu`}</Text>
                <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-left text-white_A700 xl:ml-[42px] xl:text-fs14">{`Gallery`}</Text>
                <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-left text-white_A700 xl:ml-[42px] xl:text-fs14">{`About`}</Text>
                <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-left text-white_A700 xl:ml-[42px] xl:text-fs14">{`Blog`}</Text>
                <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-left text-white_A700 xl:ml-[42px] xl:text-fs14">{`Contact`}</Text>
              </Row>
              <Button className="2xl:px-[22px] 3xl:px-[27px] 3xl:py-[20px] 3xl:text-fs16 bg-deep_orange_700 border-bw font-normal lg:my-[3px] lg:px-[17px] lg:py-[13px] lg:text-fs10 my-[4px] px-[22.5px] py-[17px] text-center text-fs14 text-white_A700 w-[10%] xl:my-[3px] xl:px-[20px] xl:py-[15px] xl:text-fs12">{`Reservation`}</Button>
            </Row>
          </Column>
        </div>
        <Row className="3xl:mb-[192px] 3xl:mt-[134px] items-center justify-center lg:mb-[124px] lg:mt-[87px] mb-[160px] mt-[112px] self-stretch w-[100%] xl:mb-[142px] xl:mt-[99px]">
          <Column className="3xl:ml-[374px] font-nunito justify-start lg:ml-[242px] ml-[312px] w-[28%] xl:ml-[277px]">
            <Row className="3xl:mr-[12px] items-center justify-start lg:mr-[7px] mr-[10px] w-[53%] xl:mr-[8px]">
              <Row className="font-nunito items-center justify-start w-[36%]">
                <Image
                  src="img_arrowchevronr_3.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="ArrowChevronR"
                />
                <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-gray_302 text-left xl:ml-[7px] xl:text-fs14">{`Home`}</Text>
              </Row>
              <Row className="3xl:ml-[19px] font-nunito items-center justify-start lg:ml-[12px] ml-[16px] w-[56%] xl:ml-[14px]">
                <Image
                  src="img_arrowchevronr_4.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="ArrowChevronR"
                />
                <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-left text-white_A700 xl:ml-[7px] xl:text-fs14">{`Reservation`}</Text>
              </Row>
            </Row>
            <Text className="3xl:mt-[38px] 3xl:text-fs76 font-bold lg:mt-[24px] lg:text-fs49 mt-[32px] self-stretch text-fs64 text-left text-white_A700 xl:mt-[28px] xl:text-fs56">{`Reservation`}</Text>
            <div className="2xl:h-[241px] 3xl:h-[289px] 3xl:mr-[12px] 3xl:mt-[67px] bg-bluegray_105 h-[240px] lg:h-[187px] lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[74%] xl:h-[214px] xl:mr-[8px] xl:mt-[49px]"></div>
          </Column>
          <Stack className="2xl:h-[441px] 3xl:h-[529px] 3xl:ml-[57px] 3xl:mr-[374px] h-[440px] lg:h-[343px] lg:ml-[37px] lg:mr-[242px] ml-[48px] mr-[312px] w-[26%] xl:h-[392px] xl:ml-[42px] xl:mr-[277px]">
            <div className="2xl:h-[441px] 3xl:h-[529px] absolute bg-bluegray_105 h-[440px] lg:h-[343px] right-[0] w-[80%] xl:h-[392px]"></div>
            <Image
              src="img_elements.png"
              className="2xl:h-[121px] 3xl:h-[145px] 3xl:top-[38px] 3xl:w-[144px] absolute h-[120px] left-[0] lg:h-[94px] lg:top-[24px] lg:w-[93px] object-contain top-[32px] w-[120px] xl:h-[107px] xl:top-[28px] xl:w-[106px]"
              alt="Elements"
            />
          </Stack>
        </Row>
      </Column>
      <Column className="3xl:mt-[192px] font-nunito justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Text className="3xl:mx-[374px] 3xl:text-fs19 font-normal lg:mx-[242px] lg:text-fs12 mx-[312px] text-fs16 text-gray_605 text-left xl:mx-[277px] xl:text-fs14">{`Name`}</Text>
        <Column className="3xl:mt-[9px] items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
          <Input
            className="3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:py-[12px] lg:text-fs12 mx-[auto] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] text-fs16 text-gray_605 text-left w-[57%] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
            name="Group270"
            placeholder={`Input your name`}
          ></Input>
          <Row className="3xl:gap-[19px] 3xl:mt-[48px] 3xl:px-[374px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] lg:mt-[31px] lg:px-[242px] mt-[40px] px-[312px] self-stretch w-[100%] xl:gap-[14px] xl:mt-[35px] xl:px-[277px]">
            <Column className="font-nunito justify-start w-[100%]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Email`}</Text>
              <Input
                className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
                name="Group269"
                placeholder={`Input your email`}
              ></Input>
            </Column>
            <Column className="font-nunito justify-start w-[100%]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Phone`}</Text>
              <Input
                className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
                name="Group268"
                placeholder={`Input your phone number`}
              ></Input>
            </Column>
          </Row>
          <Row className="3xl:mt-[48px] items-center justify-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
            <Column className="3xl:ml-[374px] font-nunito justify-start lg:ml-[242px] ml-[312px] w-[18%] xl:ml-[277px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Date`}</Text>
              <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
                <Image
                  src="img_arrow_chevron_down_1.svg"
                  className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                  alt="Arrow Chevron Down"
                />
                <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] text-fs16 text-gray_605 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`4/4/2021`}</Button>
              </div>
            </Column>
            <Column className="3xl:ml-[19px] font-nunito justify-start lg:ml-[12px] ml-[16px] w-[18%] xl:ml-[14px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Time`}</Text>
              <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
                <Image
                  src="img_arrow_chevron_down_1.svg"
                  className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                  alt="Arrow Chevron Down"
                />
                <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] text-fs16 text-gray_605 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`7:00 PM`}</Button>
              </div>
            </Column>
            <Column className="3xl:ml-[19px] 3xl:mr-[374px] font-nunito justify-start lg:ml-[12px] lg:mr-[242px] ml-[16px] mr-[312px] w-[18%] xl:ml-[14px] xl:mr-[277px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Seats`}</Text>
              <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
                <Image
                  src="img_arrow_chevron_down_1.svg"
                  className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                  alt="Arrow Chevron Down"
                />
                <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] text-fs16 text-gray_605 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`1 Person`}</Button>
              </div>
            </Column>
          </Row>
        </Column>
        <Text className="3xl:mt-[48px] 3xl:mx-[374px] 3xl:text-fs19 font-normal lg:mt-[31px] lg:mx-[242px] lg:text-fs12 mt-[40px] mx-[312px] text-fs16 text-gray_605 text-left xl:mt-[35px] xl:mx-[277px] xl:text-fs14">{`Speciale Request`}</Text>
        <Column className="3xl:mt-[9px] font-nunito items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
          <TextArea
            className="3xl:pb-[46px] 3xl:pl-[14px] 3xl:pt-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pb-[30px] lg:pl-[9px] lg:pt-[12px] lg:text-fs12 mx-[auto] pb-[39px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 pt-[16px] text-fs16 text-gray_605 text-left w-[57%] xl:pb-[34px] xl:pl-[10px] xl:pt-[14px] xl:text-fs14"
            name="Group264"
            placeholder={`Input your special request`}
          ></TextArea>
          <Button className="3xl:mt-[48px] 3xl:px-[28px] 3xl:py-[20px] 3xl:text-fs16 bg-deep_orange_700 border-bw font-normal lg:mt-[31px] lg:px-[18px] lg:py-[13px] lg:text-fs10 mt-[40px] mx-[auto] px-[24px] py-[17px] text-center text-fs14 text-white_A700 w-[11%] xl:mt-[35px] xl:px-[21px] xl:py-[15px] xl:text-fs12">{`Make Reservation`}</Button>
        </Column>
      </Column>
      <Stack className="2xl:h-[857px] 3xl:h-[1028px] 3xl:mt-[192px] h-[856px] lg:h-[666px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:h-[762px] xl:mt-[142px]">
        <Image
          src="img_map.svg"
          className="2xl:h-[857px] 3xl:h-[1028px] absolute h-[856px] inset-[0] lg:h-[666px] object-cover self-stretch w-[100%] xl:h-[762px]"
          alt="Map"
        />
        <Row className="absolute font-nunito h-[max-content] inset-[0] items-center justify-center m-[auto] w-[86%]">
          <Column className="bg-black_902 justify-center w-[49%]">
            <Text className="2xl:leading-lh88 3xl:leading-lh105 3xl:ml-[76px] 3xl:mr-[75px] 3xl:mt-[67px] 3xl:text-fs76 font-bold leading-lh8800 lg:leading-lh68 lg:mt-[43px] lg:mx-[49px] lg:text-fs49 ml-[64px] mr-[63px] mt-[56px] text-fs64 text-left text-white_A700 w-[79%] xl:leading-lh78 xl:mt-[49px] xl:mx-[56px] xl:text-fs56">{`Visit Our Restaurant`}</Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[76px] 3xl:mr-[75px] 3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[18px] lg:mx-[49px] lg:text-fs12 ml-[64px] mr-[63px] mt-[24px] text-fs16 text-left text-white_A700 w-[79%] xl:leading-lh28 xl:mt-[21px] xl:mx-[56px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum dolor sit amet, consectetur`}
                  <br />
                  {`adipiscing elit, sed do eiusmod.`}
                </>
              }
            </Text>
            <List
              className="3xl:mb-[76px] 3xl:mt-[48px] 3xl:mx-[76px] flex-wrap gap-[0] lg:mb-[49px] lg:mt-[31px] lg:mx-[49px] mb-[64px] min-h-[auto] mt-[40px] mx-[64px] w-[56%] xl:mb-[56px] xl:mt-[35px] xl:mx-[56px]"
              orientation="vertical"
            >
              <Row className="3xl:mr-[124px] 3xl:my-[24px] items-center justify-between lg:mr-[80px] lg:my-[15px] mr-[104px] my-[20px] px-[0] w-[69%] xl:mr-[92px] xl:my-[17px]">
                <Image
                  src="img_icon_10.svg"
                  className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:w-[49px] object-contain w-[64px] xl:h-[57px] xl:w-[56px]"
                  alt="Icon"
                />
                <Column className="font-nunito justify-start w-[66%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Phone Number`}</Text>
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`(62) 1829017`}</Text>
                </Column>
              </Row>
              <Row className="3xl:mr-[18px] 3xl:my-[24px] items-center justify-between lg:mr-[11px] lg:my-[15px] mr-[15px] my-[20px] px-[0] w-[96%] xl:mr-[13px] xl:my-[17px]">
                <Image
                  src="img_icon_11.svg"
                  className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:w-[49px] object-contain w-[64px] xl:h-[57px] xl:w-[56px]"
                  alt="Icon"
                />
                <Column className="font-nunito justify-start w-[75%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Email`}</Text>
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`kamakura@email.com`}</Text>
                </Column>
              </Row>
              <Row className="3xl:my-[24px] items-center justify-between lg:my-[15px] my-[20px] px-[0] self-stretch w-[100%] xl:my-[17px]">
                <Image
                  src="img_icon_12.svg"
                  className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:w-[49px] object-contain w-[64px] xl:h-[57px] xl:w-[56px]"
                  alt="Icon"
                />
                <Column className="font-nunito justify-start w-[76%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Map Street`}</Text>
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`Jl. Raya Surabaya 2787`}</Text>
                </Column>
              </Row>
            </List>
          </Column>
          <Image
            src="img_pin.svg"
            className="2xl:h-[185px] 3xl:h-[221px] 3xl:ml-[270px] 3xl:my-[307px] 3xl:w-[220px] h-[184px] lg:h-[144px] lg:ml-[175px] lg:my-[199px] lg:w-[143px] ml-[225px] my-[256px] object-contain w-[184px] xl:h-[164px] xl:ml-[200px] xl:my-[227px] xl:w-[163px]"
            alt="Pin"
          />
          <Column className="3xl:ml-[76px] justify-start lg:ml-[49px] ml-[64px] w-[12%] xl:ml-[56px]">
            <Image
              src="img_buttonicon.svg"
              className="2xl:h-[73px] 3xl:h-[87px] 3xl:ml-[12px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:ml-[7px] lg:w-[56px] ml-[10px] object-contain rounded-radius8 w-[72px] xl:h-[65px] xl:ml-[8px] xl:w-[64px]"
              alt="ButtonIcon"
            />
            <Column className="3xl:mt-[662px] items-center lg:mt-[429px] mt-[552px] self-stretch w-[100%] xl:mt-[491px]">
              <Row className="3xl:gap-[9px] gap-[8px] grid grid-cols-2 items-center justify-between lg:gap-[6px] self-stretch w-[100%] xl:gap-[7px]">
                <Image
                  src="img_buttonicon_1.svg"
                  className="2xl:h-[73px] 3xl:h-[87px] h-[72px] lg:h-[56px] object-contain rounded-radius8 w-[100%] xl:h-[65px]"
                  alt="ButtonIcon"
                />
                <Image
                  src="img_buttonicon_2.svg"
                  className="2xl:h-[73px] 3xl:h-[87px] h-[72px] lg:h-[56px] object-contain rounded-radius8 w-[100%] xl:h-[65px]"
                  alt="ButtonIcon"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Stack>
      <div className="self-stretch w-[100%]">
        <Stack className="2xl:h-[465px] 3xl:h-[558px] h-[464px] lg:h-[361px] self-stretch w-[100%] xl:h-[413px]">
          <Image
            src="img_background_8.svg"
            className="2xl:h-[465px] 3xl:h-[558px] absolute h-[464px] inset-[0] lg:h-[361px] object-cover self-stretch w-[100%] xl:h-[413px]"
            alt="Background"
          />
          <Row className="3xl:inset-y-[96px] absolute inset-x-[0] inset-y-[80px] justify-evenly lg:inset-y-[62px] px-[0] self-stretch w-[100%] xl:inset-y-[71px]">
            <Column className="3xl:mb-[57px] justify-start lg:mb-[37px] mb-[48px] w-[16%] xl:mb-[42px]">
              <Image
                src="img_dummylogo02_11.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] h-[56px] lg:h-[44px] lg:mr-[7px] mr-[10px] object-contain w-[60%] xl:h-[50px] xl:mr-[8px]"
                alt="DummyLogo02"
              />
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="font-nunito justify-start self-stretch w-[100%]">
                  <Image
                    src="img_locationmapma.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[49px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[31px] lg:w-[18px] mb-[41px] object-contain w-[24px] xl:h-[22px] xl:mb-[36px] xl:w-[21px]"
                    alt="LocationMapMa"
                  />
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[19px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[12px] lg:text-fs12 ml-[16px] mt-[1px] text-fs16 text-gray_302 text-left w-[82%] xl:leading-lh28 xl:ml-[14px] xl:text-fs14">
                    {
                      <>
                        {`8819 Ohio St. South Gate,`}
                        <br />
                        {`CA 90280`}
                      </>
                    }
                  </Text>
                </Row>
              </Column>
              <Row className="3xl:mt-[27px] font-nunito items-center justify-start lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
                <Image
                  src="img_mail.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[3px] lg:w-[18px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:my-[3px] xl:w-[21px]"
                  alt="Mail"
                />
                <Text className="3xl:ml-[19px] 3xl:mr-[42px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:mr-[27px] lg:text-fs12 ml-[16px] mr-[35px] text-fs16 text-gray_302 text-left xl:ml-[14px] xl:mr-[31px] xl:text-fs14">{`Ourstudio@hello.com`}</Text>
              </Row>
              <Row className="3xl:mt-[28px] font-nunito items-center justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Image
                  src="img_phone_3.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[3px] lg:w-[18px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:my-[3px] xl:w-[21px]"
                  alt="Phone"
                />
                <Text className="3xl:ml-[19px] 3xl:mr-[66px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:mr-[42px] lg:text-fs12 ml-[16px] mr-[55px] text-fs16 text-gray_302 text-left xl:ml-[14px] xl:mr-[48px] xl:text-fs14">{`+1 386-688-3295`}</Text>
              </Row>
            </Column>
            <Column className="3xl:mb-[67px] font-nunito justify-start lg:mb-[43px] mb-[56px] w-[5%] xl:mb-[49px]">
              <Text className="3xl:mr-[7px] 3xl:text-fs19 font-bold lg:mr-[4px] lg:text-fs12 mr-[6px] text-fs16 text-left text-white_A700 xl:mr-[5px] xl:text-fs14">{`Our Menu`}</Text>
              <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_302 text-left xl:mt-[21px] xl:text-fs14">{`Main Menu`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Dessert`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Dish`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Beverage`}</Text>
            </Column>
            <Column className="font-nunito justify-start w-[8%]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Company`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`About`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Career`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Help & Center`}</Text>
              <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_302 text-left xl:mt-[21px] xl:text-fs14">{`Term and policy`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_302 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`FAQ`}</Text>
            </Column>
            <Column className="3xl:mb-[144px] font-nunito justify-start lg:mb-[93px] mb-[120px] w-[21%] xl:mb-[106px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Join a Newsletter`}</Text>
              <Column className="3xl:mt-[28px] font-poppins items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs14 font-normal lg:mr-[7px] lg:text-fs9 mr-[10px] text-fs12 text-gray_302 text-left xl:mr-[8px] xl:text-fs10">{`Your Email`}</Text>
                  <Input
                    className="2xl:pt-[18px] 3xl:pb-[20px] 3xl:pl-[19px] 3xl:pt-[22px] 3xl:text-fs16 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pb-[13px] lg:pl-[12px] lg:pt-[14px] lg:text-fs10 pb-[17px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 pt-[18.5px] rounded-radius8 self-stretch text-bluegray_105 text-fs14 text-left w-[100%] xl:pb-[15px] xl:pl-[14px] xl:pt-[16px] xl:text-fs12"
                    name="Group261"
                    placeholder={`Enter Your Email`}
                  ></Input>
                </Column>
                <Button className="3xl:mt-[19px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-deep_orange_700 border-bw font-normal font-nunito lg:mt-[12px] lg:px-[27px] lg:py-[13px] lg:text-fs10 mt-[16px] px-[35px] py-[17px] self-stretch text-center text-fs14 text-white_A700 w-[100%] xl:mt-[14px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Subscribe`}</Button>
              </Column>
            </Column>
          </Row>
        </Stack>
      </div>
    </Column>
  );
};

export default ReservationPage;
