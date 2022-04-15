import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { CheckBox } from "components/CheckBox";
import { List } from "components/List";

const Contact2Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Row className="bg-gray_921 font-roboto items-center justify-between px-[0] self-stretch w-[100%]">
            <Image
              src="img_logo_14.svg"
              className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[84px] 3xl:ml-[195px] 3xl:mt-[82px] h-[18px] lg:h-[14px] lg:mb-[54px] lg:ml-[126px] lg:mt-[53px] mb-[70px] ml-[163px] mt-[69px] object-contain w-[8%] xl:h-[17px] xl:mb-[62px] xl:ml-[145px] xl:mt-[61px]"
              alt="logo"
            />
            <Column className="3xl:mb-[57px] 3xl:mt-[81px] justify-start lg:mb-[37px] lg:mt-[52px] mb-[48px] mt-[68px] w-[32%] xl:mb-[42px] xl:mt-[60px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-roboto items-center justify-between px-[0] self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 ml-[1px] text-fs16 text-left text-white_A700 xl:text-fs14">{`HOME`}</Text>
                  <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_503 text-left xl:text-fs14">{`ABOUT`}</Text>
                  <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_503 text-left xl:text-fs14">{`SERVICES`}</Text>
                  <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_503 text-left xl:text-fs14">{`COLLECTIONS`}</Text>
                  <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_503 text-left xl:text-fs14">{`BLOG`}</Text>
                </Row>
              </Column>
              <Column className="3xl:mr-[12px] 3xl:mt-[15px] bg-yellow_A700_07 items-center justify-start lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[13px] w-[7%] xl:mr-[8px] xl:mt-[11px]">
                <ProgressBar.Line
                  className="2xl:h-[10px] 3xl:h-[11px] bg-yellow_A700_26 h-[9px] lg:h-[7px] mx-[auto] w-[60%]"
                  percent="33"
                  strokeColor="#ffd600"
                  trailColor="#ffd60026"
                  name="Group487"
                ></ProgressBar.Line>
              </Column>
            </Column>
            <Button className="2xl:pb-[25px] 2xl:pt-[24px] 3xl:mb-[54px] 3xl:mr-[180px] 3xl:mt-[52px] 3xl:pb-[30px] 3xl:pl-[32px] 3xl:pr-[31px] 3xl:pt-[29px] 3xl:text-fs21 bg-white_A700_14 border-bw font-bold lg:mb-[35px] lg:mr-[116px] lg:mt-[34px] lg:pl-[21px] lg:pr-[20px] lg:py-[19px] lg:text-fs14 mb-[45px] mr-[150px] mt-[44px] pb-[25.545px] pl-[27px] pr-[26px] pt-[24.545px] text-center text-fs18 text-white_A700 w-[8%] xl:mb-[40px] xl:mr-[133px] xl:mt-[39px] xl:pb-[22px] xl:pl-[24px] xl:pr-[23px] xl:pt-[21px] xl:text-fs16">{`CONTACT US`}</Button>
          </Row>
        </div>
        <Column className="bg-gray_921 font-russoone items-center justify-center self-stretch w-[100%]">
          <Text className="3xl:mt-[100px] 3xl:text-fs57 font-normal lg:mt-[65px] lg:text-fs37 mt-[84px] mx-[auto] text-center text-fs48 text-white_A700 xl:mt-[74px] xl:text-fs42">{`Contact Us`}</Text>
          <Stack className="2xl:h-[1125px] 3xl:h-[1350px] 3xl:mb-[218px] 3xl:mt-[43px] font-roboto h-[1124px] lg:h-[875px] lg:mb-[141px] lg:mt-[28px] mb-[182px] mt-[36px] mx-[auto] w-[84%] xl:h-[1000px] xl:mb-[161px] xl:mt-[32px]">
            <Image
              src="img_mapbackground.svg"
              className="2xl:h-[946px] 3xl:h-[1135px] 3xl:top-[25px] absolute h-[945.13px] lg:h-[736px] lg:top-[16px] object-cover self-stretch top-[21px] w-[100%] xl:h-[841px] xl:top-[18px]"
              alt="mapBackground"
            />
            <Image
              src="img_circleelement_2.svg"
              className="2xl:bottom-[403px] 2xl:h-[89px] 3xl:bottom-[484px] 3xl:h-[107px] 3xl:left-[369px] absolute bottom-[403.12px] h-[88.88px] left-[308px] lg:bottom-[313px] lg:h-[70px] lg:left-[239px] object-contain w-[7%] xl:bottom-[358px] xl:h-[80px] xl:left-[273px]"
              alt="circleElement"
            />
            <Column className="absolute bg-white_A700 bottom-[0] inset-x-[0] justify-end mx-[auto] rounded-radius2 shadow-bs25 w-[52%]">
              <Row className="2xl:gap-[41px] 2xl:pl-[65px] 2xl:pr-[66px] 3xl:gap-[50px] 3xl:mt-[86px] 3xl:pl-[78px] 3xl:pr-[79px] font-roboto gap-[41.700012px] grid grid-cols-2 justify-start lg:gap-[32px] lg:mt-[56px] lg:pl-[50px] lg:pr-[51px] mt-[72px] pl-[65.46002px] pr-[65.97998px] self-stretch w-[100%] xl:gap-[37px] xl:mt-[64px] xl:px-[58px]">
                <Text className="2xl:leading-lh32 2xl:pt-[-49px] 3xl:leading-lh38 3xl:mt-[57px] 3xl:pb-[42px] 3xl:pt-[-58px] 3xl:text-fs21 border-2 border-gray_705 border-solid font-normal leading-lh3200 lg:leading-lh24 lg:mt-[37px] lg:pb-[27px] lg:pt-[-38px] lg:text-fs14 mt-[48px] pb-[35px] pl-[1px] pt-[-48px] rounded-radius2 text-fs18 text-gray_701 text-left w-[100%] xl:leading-lh28 xl:mt-[42px] xl:pb-[31px] xl:pt-[-43px] xl:text-fs16">{`Full Name`}</Text>
                <Text className="2xl:leading-lh32 2xl:pt-[-49px] 3xl:leading-lh38 3xl:mt-[57px] 3xl:pb-[42px] 3xl:pt-[-58px] 3xl:text-fs21 border-2 border-gray_705 border-solid font-normal leading-lh3200 lg:leading-lh24 lg:mt-[37px] lg:pb-[27px] lg:pt-[-38px] lg:text-fs14 mt-[48px] pb-[35px] pl-[1px] pt-[-48px] rounded-radius2 text-fs18 text-gray_701 text-left w-[100%] xl:leading-lh28 xl:mt-[42px] xl:pb-[31px] xl:pt-[-43px] xl:text-fs16">{`Email`}</Text>
              </Row>
              <Column className="3xl:mt-[129px] font-roboto lg:mt-[84px] mt-[108px] self-stretch w-[100%] xl:mt-[96px]">
                <Text className="2xl:leading-lh32 2xl:mx-[65px] 2xl:pl-[1px] 2xl:pt-[-49px] 3xl:leading-lh38 3xl:mx-[78px] 3xl:pb-[42px] 3xl:pl-[2px] 3xl:pt-[-58px] 3xl:text-fs21 border-2 border-gray_705 border-solid font-normal leading-lh3200 lg:leading-lh24 lg:mx-[50px] lg:pb-[27px] lg:pl-[1px] lg:pt-[-38px] lg:text-fs14 ml-[65.46002px] mr-[65.44995px] pb-[35px] pl-[1.8599854px] pt-[-48px] rounded-radius2 text-fs18 text-gray_701 text-left w-[84%] xl:leading-lh28 xl:mx-[58px] xl:pb-[31px] xl:pl-[1px] xl:pt-[-43px] xl:text-fs16">{`Subject`}</Text>
              </Column>
              <Column className="3xl:mt-[72px] font-roboto justify-start lg:mt-[46px] mt-[60px] mx-[auto] w-[84%] xl:mt-[53px]">
                <Text className="2xl:ml-[2px] 3xl:ml-[2px] 3xl:mr-[12px] 3xl:text-fs21 font-normal lg:ml-[1px] lg:mr-[7px] lg:text-fs14 ml-[2.1099854px] mr-[10px] text-fs18 text-gray_701 text-left xl:ml-[1px] xl:mr-[8px] xl:text-fs16">{`Message`}</Text>
                <Input
                  className="3xl:mt-[19px] bg-transparent border-2 border-gray_705 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_701 rounded-radius2 self-stretch w-[100%] xl:mt-[14px]"
                  name="Group484"
                  placeholder={`Message`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[44px] font-opensans lg:mt-[28px] mt-[37px] self-stretch w-[100%] xl:mt-[32px]">
                <CheckBox
                  className="2xl:mx-[67px] 3xl:mx-[81px] 3xl:text-fs21 font-normal lg:mx-[52px] lg:text-fs14 ml-[67.57001px] mr-[67.57px] text-fs18 text-gray_701 text-left w-[38%] xl:mx-[60px] xl:text-fs16"
                  inputClassName="border-2 border-gray_805 border-solid rounded-radius4 mr-[5px]"
                  name="Group486"
                  label={`Accept terms & conditions`}
                ></CheckBox>
              </Column>
              <Button className="2xl:pb-[25px] 2xl:pt-[24px] 3xl:mb-[78px] 3xl:mt-[44px] 3xl:pb-[30px] 3xl:pt-[29px] 3xl:px-[42px] 3xl:text-fs21 bg-yellow_A700 border-bw font-bold font-roboto lg:mb-[50px] lg:mt-[28px] lg:px-[27px] lg:py-[19px] lg:text-fs14 mb-[65px] mt-[37px] mx-[auto] pb-[25.545px] pt-[24.545px] px-[35px] rounded-radius7 text-black_900 text-center text-fs18 w-[84%] xl:mb-[57px] xl:mt-[32px] xl:pb-[22px] xl:pt-[21px] xl:px-[31px] xl:text-fs16">{`SEND MESSAGE`}</Button>
            </Column>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs21 absolute font-normal inset-x-[0] leading-lh3200 lg:leading-lh24 lg:text-fs14 mx-[auto] text-center text-fs18 text-white_A700 top-[0] w-[max-content] xl:leading-lh28 xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.`}</Text>
          </Stack>
        </Column>
        <Column className="3xl:mt-[260px] items-center justify-start lg:mt-[168px] mt-[217px] self-stretch w-[100%] xl:mt-[193px]">
          <Row className="font-russoone justify-between px-[0] self-stretch w-[100%]">
            <Text className="3xl:mb-[70px] 3xl:ml-[181px] 3xl:text-fs57 font-normal font-russoone lg:mb-[45px] lg:ml-[117px] lg:text-fs37 mb-[59px] ml-[151px] text-black_900 text-center text-fs48 xl:mb-[52px] xl:ml-[134px] xl:text-fs42">{`Our Dealer Locations`}</Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[333px] 3xl:mt-[8px] 3xl:text-fs21 font-normal font-roboto leading-lh3200 lg:leading-lh24 lg:mr-[216px] lg:mt-[5px] lg:text-fs14 mr-[278px] mt-[7px] text-black_900 text-fs18 text-left w-[35%] xl:leading-lh28 xl:mr-[247px] xl:mt-[6px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.`}</Text>
          </Row>
          <List
            className="3xl:gap-[64px] 3xl:mt-[134px] flex-wrap gap-[54px] grid grid-cols-4 lg:gap-[42px] lg:mt-[87px] min-h-[auto] mt-[112px] mx-[auto] w-[84%] xl:gap-[48px] xl:mt-[99px]"
            orientation="horizontal"
          >
            <Column className="bg-yellow_A700 font-montserrat justify-end rounded-radius2 w-[100%]">
              <Text className="3xl:mt-[90px] 3xl:mx-[64px] 3xl:text-fs45 font-bold lg:mt-[58px] lg:mx-[42px] lg:text-fs29 mt-[75px] mx-[54px] text-black_900 text-fs38 text-left xl:mt-[66px] xl:mx-[48px] xl:text-fs33">{`London,`}</Text>
              <Text className="3xl:mt-[10px] 3xl:mx-[64px] 3xl:text-fs28 font-light lg:mt-[7px] lg:mx-[42px] lg:text-fs18 mt-[9px] mx-[54px] text-fs24 text-gray_806 text-left uppercase xl:mt-[8px] xl:mx-[48px] xl:text-fs21">{`United Kingdom`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[37px] 3xl:mx-[64px] 3xl:text-fs24 font-medium leading-lh2600 lg:leading-lh20 lg:mt-[24px] lg:mx-[42px] lg:text-fs15 mt-[31px] mx-[54px] text-fs20 text-gray_806 text-left w-[49%] xl:leading-lh23 xl:mt-[27px] xl:mx-[48px] xl:text-fs17">
                {
                  <>
                    {`59 Victoria Street`}
                    <br />
                    {`London`}
                    <br />
                    {`EC43 5BI`}
                  </>
                }
              </Text>
              <Button className="2xl:py-[21px] 3xl:mb-[82px] 3xl:mt-[76px] 3xl:mx-[64px] 3xl:px-[42px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mb-[53px] lg:mt-[49px] lg:mx-[42px] lg:px-[27px] lg:py-[16px] lg:text-fs12 mb-[69px] mt-[64px] mx-[54px] px-[35px] py-[21.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[60%] xl:mb-[61px] xl:mt-[56px] xl:mx-[48px] xl:px-[31px] xl:py-[19px] xl:text-fs14">{`224 000 22 11 33`}</Button>
            </Column>
            <Column className="bg-yellow_A700 font-montserrat justify-end rounded-radius2 w-[100%]">
              <Text className="3xl:mt-[90px] 3xl:mx-[64px] 3xl:text-fs45 font-bold lg:mt-[58px] lg:mx-[42px] lg:text-fs29 mt-[75px] mx-[54px] text-black_900 text-fs38 text-left xl:mt-[66px] xl:mx-[48px] xl:text-fs33">{`Sydney,`}</Text>
              <Text className="3xl:mt-[10px] 3xl:mx-[64px] 3xl:text-fs28 font-light lg:mt-[7px] lg:mx-[42px] lg:text-fs18 mt-[9px] mx-[54px] text-fs24 text-gray_806 text-left uppercase xl:mt-[8px] xl:mx-[48px] xl:text-fs21">{`Australia`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[37px] 3xl:mx-[64px] 3xl:text-fs24 font-medium leading-lh2600 lg:leading-lh20 lg:mt-[24px] lg:mx-[42px] lg:text-fs15 mt-[31px] mx-[54px] text-fs20 text-gray_806 text-left w-[38%] xl:leading-lh23 xl:mt-[27px] xl:mx-[48px] xl:text-fs17">
                {
                  <>
                    {`3 Doris St,`}
                    <br />
                    {`North Sydney`}
                    <br />
                    {`NSW 2060`}
                  </>
                }
              </Text>
              <Button className="2xl:py-[21px] 3xl:mb-[82px] 3xl:mt-[76px] 3xl:mx-[64px] 3xl:px-[42px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mb-[53px] lg:mt-[49px] lg:mx-[42px] lg:px-[27px] lg:py-[16px] lg:text-fs12 mb-[69px] mt-[64px] mx-[54px] px-[35px] py-[21.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[60%] xl:mb-[61px] xl:mt-[56px] xl:mx-[48px] xl:px-[31px] xl:py-[19px] xl:text-fs14">{`224 000 22 11 33`}</Button>
            </Column>
            <Column className="bg-yellow_A700 font-montserrat justify-end rounded-radius2 w-[100%]">
              <Text className="3xl:mt-[90px] 3xl:mx-[64px] 3xl:text-fs45 font-bold lg:mt-[58px] lg:mx-[42px] lg:text-fs29 mt-[75px] mx-[54px] text-black_900 text-fs38 text-left xl:mt-[66px] xl:mx-[48px] xl:text-fs33">{`Dhaka,`}</Text>
              <Text className="3xl:mt-[10px] 3xl:mx-[64px] 3xl:text-fs28 font-light lg:mt-[7px] lg:mx-[42px] lg:text-fs18 mt-[9px] mx-[54px] text-fs24 text-gray_806 text-left uppercase xl:mt-[8px] xl:mx-[48px] xl:text-fs21">{`BANGLADESH`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[37px] 3xl:mx-[64px] 3xl:text-fs24 font-medium leading-lh2600 lg:leading-lh20 lg:mt-[24px] lg:mx-[42px] lg:text-fs15 mt-[31px] mx-[54px] text-fs20 text-gray_806 text-left w-[66%] xl:leading-lh23 xl:mt-[27px] xl:mx-[48px] xl:text-fs17">
                {
                  <>
                    {`Phoenix Tower, `}
                    <br />
                    {`2nd & 3rd Floor`}
                    <br />
                    {`407, `}
                    <br />
                    {`Tejgoan Industrial Area`}
                    <br />
                    {`Dhaka 1208`}
                  </>
                }
              </Text>
              <Button className="2xl:py-[21px] 3xl:mb-[82px] 3xl:mt-[45px] 3xl:mx-[64px] 3xl:px-[42px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mb-[53px] lg:mt-[29px] lg:mx-[42px] lg:px-[27px] lg:py-[16px] lg:text-fs12 mb-[69px] mt-[38px] mx-[54px] px-[35px] py-[21.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[60%] xl:mb-[61px] xl:mt-[33px] xl:mx-[48px] xl:px-[31px] xl:py-[19px] xl:text-fs14">{`224 000 22 11 33`}</Button>
            </Column>
            <Column className="bg-yellow_A700 font-montserrat justify-end rounded-radius2 w-[100%]">
              <Text className="3xl:mt-[90px] 3xl:mx-[64px] 3xl:text-fs45 font-bold lg:mt-[58px] lg:mx-[42px] lg:text-fs29 mt-[75px] mx-[54px] text-black_900 text-fs38 text-left xl:mt-[66px] xl:mx-[48px] xl:text-fs33">{`Jakarta,`}</Text>
              <Text className="3xl:mt-[10px] 3xl:mx-[64px] 3xl:text-fs28 font-light lg:mt-[7px] lg:mx-[42px] lg:text-fs18 mt-[9px] mx-[54px] text-fs24 text-gray_806 text-left uppercase xl:mt-[8px] xl:mx-[48px] xl:text-fs21">{`INDONESIA`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[37px] 3xl:mx-[64px] 3xl:text-fs24 font-medium leading-lh2600 lg:leading-lh20 lg:mt-[24px] lg:mx-[42px] lg:text-fs15 mt-[31px] mx-[54px] text-fs20 text-gray_806 text-left w-[52%] xl:leading-lh23 xl:mt-[27px] xl:mx-[48px] xl:text-fs17">
                {
                  <>
                    {`Jl. Jend. Sudirman `}
                    <br />
                    {`No.Kav 47-48, `}
                    <br />
                    {`Karet Semanggi, `}
                    <br />
                    {`Jakarta Selatan`}
                  </>
                }
              </Text>
              <Button className="2xl:py-[21px] 3xl:mb-[24px] 3xl:mt-[45px] 3xl:mx-[64px] 3xl:px-[42px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mb-[15px] lg:mt-[29px] lg:mx-[42px] lg:px-[27px] lg:py-[16px] lg:text-fs12 mb-[20px] mt-[38px] mx-[54px] px-[35px] py-[21.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[60%] xl:mb-[17px] xl:mt-[33px] xl:mx-[48px] xl:px-[31px] xl:py-[19px] xl:text-fs14">{`224 000 22 11 33`}</Button>
            </Column>
          </List>
        </Column>
        <div className="3xl:mt-[207px] lg:mt-[134px] mt-[173px] self-stretch w-[100%] xl:mt-[153px]">
          <Column className="bg-gray_904 font-roboto justify-end self-stretch w-[100%]">
            <Column className="3xl:mt-[195px] items-center lg:mt-[126px] mt-[163px] self-stretch w-[100%] xl:mt-[145px]">
              <Row className="justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="font-roboto justify-start w-[20%]">
                  <Image
                    src="img_logo_14.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] 3xl:mr-[12px] h-[18px] lg:h-[14px] lg:mr-[7px] mr-[10px] object-contain w-[39%] xl:h-[17px] xl:mr-[8px]"
                    alt="logo"
                  />
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[58px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[38px] lg:text-fs14 mt-[49px] self-stretch text-fs18 text-left text-white_A700_7f w-[100%] xl:leading-lh24 xl:mt-[43px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[58px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[38px] lg:text-fs12 mr-[10px] mt-[49px] text-center text-fs16 text-white_A700 xl:mr-[8px] xl:mt-[43px] xl:text-fs14">{`FOLLOW US`}</Text>
                  <Image
                    src="img_followus.svg"
                    className="2xl:h-[59px] 3xl:h-[70px] 3xl:mr-[12px] 3xl:mt-[26px] h-[58px] lg:h-[46px] lg:mr-[7px] lg:mt-[17px] mr-[10px] mt-[22px] object-contain w-[89%] xl:h-[52px] xl:mr-[8px] xl:mt-[19px]"
                    alt="Followus"
                  />
                </Column>
                <Column className="3xl:mb-[34px] font-roboto justify-start lg:mb-[22px] mb-[29px] w-[6%] xl:mb-[25px]">
                  <Text className="3xl:text-fs24 font-bold lg:text-fs15 self-stretch text-fs20 text-left text-white_A700 xl:text-fs17">{`QUICK LINKS`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal leading-lh4400 lg:leading-lh34 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-left text-white_A700_7f w-[73%] xl:leading-lh39 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">
                    {
                      <>
                        {`About us`}
                        <br />
                        {`Contact us`}
                        <br />
                        {`Products`}
                        <br />
                        {`Login`}
                        <br />
                        {`Sign Up`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mb-[34px] font-roboto justify-start lg:mb-[22px] mb-[29px] w-[8%] xl:mb-[25px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-bold lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-left text-white_A700 xl:mr-[8px] xl:text-fs17">{`SUPPORT`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mt-[38px] 3xl:text-fs21 font-normal leading-lh4400 lg:leading-lh34 lg:mt-[24px] lg:text-fs14 mt-[32px] self-stretch text-fs18 text-left text-white_A700_7f w-[100%] xl:leading-lh39 xl:mt-[28px] xl:text-fs16">
                    {
                      <>
                        {`Affiliates`}
                        <br />
                        {`Sitemap`}
                        <br />
                        {`Cancelation Policy`}
                        <br />
                        {`Privacy Policy`}
                        <br />
                        {`Legal Disclaimer`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mb-[132px] font-roboto justify-start lg:mb-[85px] mb-[110px] w-[27%] xl:mb-[97px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-bold lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-left text-white_A700 xl:mr-[8px] xl:text-fs17">{`SUBSCRIBE`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-fs16 text-left text-white_A700 w-[74%] xl:leading-lh21 xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`}</Text>
                  <Column className="3xl:mt-[39px] items-center lg:mt-[25px] mt-[33px] self-stretch w-[100%] xl:mt-[29px]">
                    <Row className="font-roboto items-center justify-evenly px-[0] self-stretch w-[100%]">
                      <Input
                        className="3xl:pl-[37px] 3xl:py-[24px] 3xl:text-fs21 bg-transparent border border-gray_705 border-solid font-normal lg:pl-[24px] lg:py-[15px] lg:text-fs14 pl-[31px] placeholder:bg-transparent placeholder:text-white_A700_47 py-[20px] text-fs18 text-left text-white_A700_47 w-[74%] xl:pl-[27px] xl:py-[17px] xl:text-fs16"
                        name="input"
                        placeholder={`Enter your email here`}
                      ></Input>
                      <Button className="3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs21 bg-yellow_A700 border-bw font-bold lg:px-[27px] lg:py-[15px] lg:text-fs14 px-[35px] py-[20px] text-center text-fs18 text-gray_904 w-[26%] xl:px-[31px] xl:py-[17px] xl:text-fs16">{`SEND`}</Button>
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Column>
            <Text className="3xl:mt-[232px] 3xl:pb-[38px] 3xl:pl-[42px] 3xl:pt-[39px] 3xl:text-fs19 bg-gray_903 font-light leading-lh lg:mt-[150px] lg:pb-[24px] lg:pl-[27px] lg:pt-[25px] lg:text-fs12 mt-[194px] pb-[32px] pl-[35px] pt-[33px] self-stretch text-fs16 text-left text-white_A700_a5 w-[100%] xl:mt-[172px] xl:pb-[28px] xl:pl-[31px] xl:pt-[29px] xl:text-fs14">{`KARDILER   -   © 2020 All Rights Reserved`}</Text>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Contact2Page;
