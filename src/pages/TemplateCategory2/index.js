import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Stack } from "components/Stack";

const TemplateCategory2Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Row className="font-newsreader items-center justify-between px-[0] self-stretch w-[100%]">
          <Image
            src="img_brand_1.svg"
            className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[57px] 3xl:my-[36px] h-[40px] lg:h-[32px] lg:ml-[37px] lg:my-[23px] ml-[48px] my-[30px] object-contain w-[10%] xl:h-[36px] xl:ml-[42px] xl:my-[26px]"
            alt="Brand"
          />
          <Row className="2xl:my-[42px] 3xl:my-[51px] items-center justify-center lg:my-[33px] my-[42.5px] w-[38%] xl:my-[37px]">
            <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-fs15 text-gray_908 text-left xl:text-fs13">{`Home`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs18 font-semibold lg:ml-[31px] lg:text-fs11 ml-[40px] text-fs15 text-gray_908 text-left xl:ml-[35px] xl:text-fs13">{`Categories`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs18 font-semibold lg:ml-[31px] lg:text-fs11 ml-[40px] text-fs15 text-gray_908 text-left xl:ml-[35px] xl:text-fs13">{`Design`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs18 font-semibold lg:ml-[31px] lg:text-fs11 ml-[40px] text-fs15 text-gray_908 text-left xl:ml-[35px] xl:text-fs13">{`Tools`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs18 font-semibold lg:ml-[31px] lg:text-fs11 ml-[40px] text-fs15 text-gray_908 text-left xl:ml-[35px] xl:text-fs13">{`Life`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs18 font-semibold lg:ml-[31px] lg:text-fs11 ml-[40px] text-fs15 text-gray_908 text-left xl:ml-[35px] xl:text-fs13">{`Tips and Tricks`}</Text>
          </Row>
          <Image
            src="img_frame1_1.svg"
            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[57px] 3xl:my-[45px] h-[24px] lg:h-[19px] lg:mr-[37px] lg:my-[29px] mr-[48px] my-[38px] object-contain w-[9%] xl:h-[22px] xl:mr-[42px] xl:my-[33px]"
            alt="Frame1"
          />
        </Row>
      </div>
      <Column className="bg-gray_50 font-poppins items-center justify-center self-stretch w-[100%]">
        <Button className="3xl:mt-[207px] 3xl:px-[19px] 3xl:py-[9px] 3xl:text-fs14 bg-white_A700 border-bw font-poppins font-semibold lg:mt-[134px] lg:px-[12px] lg:py-[6px] lg:text-fs9 mt-[173px] mx-[auto] px-[16px] py-[8px] text-center text-fs12 text-gray_908 uppercase w-[9%] xl:mt-[153px] xl:px-[14px] xl:py-[7px] xl:text-fs10">{`Tips and tricks`}</Button>
        <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mt-[19px] 3xl:text-fs76 font-newsreader font-semibold leading-lh7200 lg:leading-lh56 lg:mt-[12px] lg:text-fs49 mt-[16px] mx-[auto] text-center text-fs64 text-gray_908 w-[44%] xl:leading-lh64 xl:mt-[14px] xl:text-fs56">{`Ultimate Guide for Early stage Startup Designers`}</Text>
        <Row className="3xl:mb-[207px] 3xl:mt-[19px] items-center justify-center lg:mb-[134px] lg:mt-[12px] mb-[173px] mt-[16px] mx-[auto] w-[20%] xl:mb-[153px] xl:mt-[14px]">
          <Row className="font-newsreader items-center justify-evenly px-[0] w-[48%]">
            <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`written by`}</Text>
            <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-deep_orange_400 text-fs13 underline xl:text-fs11">{`Thomas Paul`}</Text>
          </Row>
          <Row className="3xl:ml-[19px] font-newsreader items-center justify-evenly lg:ml-[12px] ml-[16px] px-[0] w-[47%] xl:ml-[14px]">
            <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`published on`}</Text>
            <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_908 xl:text-fs11">{`9. 6. 2021`}</Text>
          </Row>
        </Row>
      </Column>
      <Row className="justify-start self-stretch w-[100%]">
        <Column className="3xl:ml-[268px] 3xl:my-[96px] font-newsreader justify-start lg:ml-[174px] lg:my-[62px] ml-[224px] my-[80px] w-[41%] xl:ml-[199px] xl:my-[71px]">
          <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs26 font-normal leading-lh3200 lg:leading-lh24 lg:text-fs17 self-stretch text-fs22 text-gray_908 text-left w-[100%] xl:leading-lh28 xl:text-fs19">{`The life of a graphic designer in an early-stage startup can look very lonely in many ways. But the opposite may be true. It is just the way you set it up.`}</Text>
          <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[38px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[24px] lg:text-fs14 mt-[32px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[28px] xl:text-fs16">{`First of all, however, I would ask myself the question: 'Is the position of Startup Designer really for me'? Within 7 years of working for startups, I have learned a lot.`}</Text>
          <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[38px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[24px] lg:text-fs14 mt-[32px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[28px] xl:text-fs16">{`Here are some tips on capturing a project from scratch and being prepared for the rapidly changing startup ecosystem.`}</Text>
          <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
            <Column className="font-newsreader justify-start self-stretch w-[100%]">
              <Text className="3xl:text-fs24 font-semibold lg:text-fs15 self-stretch text-fs20 text-gray_908 text-left xl:text-fs17">{`Build a system that behaves naturally to all changes`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[19px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs16">{`I called it a system because it is a working list of files or rules you use, but especially by your collaborators.`}</Text>
            </Column>
            <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Text className="3xl:text-fs19 font-medium font-poppins lg:text-fs12 self-stretch text-fs16 text-gray_908 text-left xl:text-fs14">{`Analyze the main structure of the system (Brand, Marketing, Product)`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[19px] 3xl:text-fs21 font-newsreader font-normal leading-lh2800 lg:leading-lh21 lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs16">{`I called it a system because it is a working list of files or rules you use, but especially by your collaborators.`}</Text>
            </Column>
            <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Text className="3xl:text-fs19 font-medium font-poppins lg:text-fs12 self-stretch text-fs16 text-gray_908 text-left xl:text-fs14">{`Overall overview`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[19px] 3xl:text-fs21 font-newsreader font-normal leading-lh2800 lg:leading-lh21 lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs16">{`The overall overview is the main building block for you, the team, and especially the new designers coming to your project in the future. Pin main sections and points of communication elements for all possible sectors (brand, product marketing, etc.) to how they work and communicate with each other.`}</Text>
            </Column>
            <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Text className="3xl:text-fs19 font-medium font-poppins lg:text-fs12 self-stretch text-fs16 text-gray_908 text-left xl:text-fs14">{`Tool selection (do not select tools only by yourself).`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[19px] 3xl:text-fs21 font-newsreader font-normal leading-lh2800 lg:leading-lh21 lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-gray_908 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs16">{`Properly selected tools and graphics applications are crucial in the startup's beginnings in terms of the speed of construction of materials for graphics, their changes, and cooperation in the team. Therefore, it is necessary to pay excessive attention to this point and specify with your team all the necessary needs to find the right tools.`}</Text>
            </Column>
          </Column>
        </Column>
        <Column className="3xl:mb-[355px] 3xl:ml-[166px] 3xl:mr-[268px] 3xl:mt-[96px] justify-start lg:mb-[230px] lg:ml-[108px] lg:mr-[174px] lg:mt-[62px] mb-[296px] ml-[139px] mr-[224px] mt-[80px] w-[18%] xl:mb-[263px] xl:ml-[123px] xl:mr-[199px] xl:mt-[71px]">
          <Column className="3xl:mr-[12px] bg-gray_50 font-newsreader items-center justify-start lg:mr-[7px] mr-[10px] w-[95%] xl:mr-[8px]">
            <Text className="3xl:my-[139px] 3xl:text-fs15 font-normal lg:my-[90px] lg:text-fs10 mx-[auto] my-[116px] text-center text-fs13 text-gray_507 xl:my-[103px] xl:text-fs11">
              <span className="text-gray_908 text-fs13 font-newsreader text-center font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
                <>{`Ad Banner`}</>
              </span>
              <span className="text-gray_507 text-fs13 font-newsreader text-center font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
                <>{` - 250 x 250px`}</>
              </span>
            </Text>
          </Column>
          <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
            <List
              className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
              orientation="vertical"
            >
              <Column className="3xl:my-[28px] font-poppins justify-start lg:my-[18px] my-[24px] self-stretch w-[100%] xl:my-[21px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs14 font-poppins font-semibold lg:mr-[7px] lg:text-fs9 mr-[10px] text-deep_orange_400 text-fs12 text-left uppercase xl:mr-[8px] xl:text-fs10">{`CATEGORIES`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`All categories`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Design`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Tools`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Life`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Tips and Tricks`}</Text>
              </Column>
              <Column className="3xl:my-[28px] font-poppins justify-start lg:my-[18px] my-[24px] self-stretch w-[100%] xl:my-[21px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs14 font-poppins font-semibold lg:mr-[7px] lg:text-fs9 mr-[10px] text-deep_orange_400 text-fs12 text-left uppercase xl:mr-[8px] xl:text-fs10">{`share article`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Facebook`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Twitter`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`LinkedIn`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Email`}</Text>
              </Column>
            </List>
          </Column>
        </Column>
      </Row>
      <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
        <Text className="3xl:text-fs38 font-semibold lg:text-fs24 mx-[auto] text-center text-fs32 text-gray_908 xl:text-fs28">{`You might love`}</Text>
        <List
          className="3xl:gap-[57px] 3xl:mb-[96px] 3xl:mt-[57px] flex-wrap gap-[48px] grid grid-cols-3 lg:gap-[37px] lg:mb-[62px] lg:mt-[37px] mb-[80px] min-h-[auto] mt-[48px] mx-[auto] w-[83%] xl:gap-[42px] xl:mb-[71px] xl:mt-[42px]"
          orientation="horizontal"
        >
          <Column className="items-center justify-start w-[100%]">
            <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[435px] 3xl:h-[522px] font-poppins h-[434px] lg:h-[338px] self-stretch w-[100%] xl:h-[387px]">
                <div className="2xl:h-[421px] 3xl:bottom-[16px] 3xl:h-[505px] absolute bg-gray_50 bottom-[14px] h-[420px] inset-x-[0] lg:bottom-[10px] lg:h-[327px] self-stretch top-[0] w-[100%] xl:bottom-[12px] xl:h-[374px]"></div>
                <Button className="3xl:px-[19px] 3xl:py-[9px] 3xl:text-fs14 absolute bg-white_A700 border-bw bottom-[0] font-semibold inset-x-[0] lg:px-[12px] lg:py-[6px] lg:text-fs9 mx-[auto] px-[16px] py-[8px] text-center text-fs12 text-gray_908 uppercase w-[19%] xl:px-[14px] xl:py-[7px] xl:text-fs10">{`Tools`}</Button>
              </Stack>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[9px] 3xl:text-fs33 font-newsreader font-semibold leading-lh3600 lg:leading-lh28 lg:mt-[6px] lg:text-fs21 mt-[8px] self-stretch text-center text-fs28 text-gray_908 w-[100%] xl:leading-lh32 xl:mt-[7px] xl:text-fs24">{`Figma, Sketch, XD or Lunacy? Who rules?`}</Text>
            </Column>
            <Row className="3xl:mt-[19px] items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[79%] xl:mt-[14px]">
              <Row className="font-newsreader items-center justify-evenly px-[0] w-[48%]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`written by`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-deep_orange_400 text-fs13 underline xl:text-fs11">{`Thomas Paul`}</Text>
              </Row>
              <Row className="3xl:ml-[19px] font-newsreader items-center justify-evenly lg:ml-[12px] ml-[16px] px-[0] w-[47%] xl:ml-[14px]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`published on`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_908 xl:text-fs11">{`9. 6. 2021`}</Text>
              </Row>
            </Row>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[435px] 3xl:h-[522px] font-poppins h-[434px] lg:h-[338px] self-stretch w-[100%] xl:h-[387px]">
                <div className="2xl:h-[421px] 3xl:bottom-[16px] 3xl:h-[505px] absolute bg-gray_50 bottom-[14px] h-[420px] inset-x-[0] lg:bottom-[10px] lg:h-[327px] self-stretch top-[0] w-[100%] xl:bottom-[12px] xl:h-[374px]"></div>
                <Button className="3xl:px-[19px] 3xl:py-[9px] 3xl:text-fs14 absolute bg-white_A700 border-bw bottom-[0] font-semibold inset-x-[0] lg:px-[12px] lg:py-[6px] lg:text-fs9 mx-[auto] px-[16px] py-[8px] text-center text-fs12 text-gray_908 uppercase w-[36%] xl:px-[14px] xl:py-[7px] xl:text-fs10">{`tips and tricks`}</Button>
              </Stack>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[9px] 3xl:text-fs33 font-newsreader font-semibold leading-lh3600 lg:leading-lh28 lg:mt-[6px] lg:text-fs21 mt-[8px] self-stretch text-center text-fs28 text-gray_908 w-[100%] xl:leading-lh32 xl:mt-[7px] xl:text-fs24">
                {
                  <>
                    {`Best .js to your next`}
                    <br />
                    {`web project`}
                  </>
                }
              </Text>
            </Column>
            <Row className="3xl:mt-[19px] items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[79%] xl:mt-[14px]">
              <Row className="font-newsreader items-center justify-evenly px-[0] w-[48%]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`written by`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-deep_orange_400 text-fs13 underline xl:text-fs11">{`Thomas Paul`}</Text>
              </Row>
              <Row className="3xl:ml-[19px] font-newsreader items-center justify-evenly lg:ml-[12px] ml-[16px] px-[0] w-[47%] xl:ml-[14px]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`published on`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_908 xl:text-fs11">{`9. 6. 2021`}</Text>
              </Row>
            </Row>
          </Column>
          <Column className="items-center justify-start w-[100%]">
            <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[435px] 3xl:h-[522px] font-poppins h-[434px] lg:h-[338px] self-stretch w-[100%] xl:h-[387px]">
                <div className="2xl:h-[421px] 3xl:bottom-[16px] 3xl:h-[505px] absolute bg-gray_50 bottom-[14px] h-[420px] inset-x-[0] lg:bottom-[10px] lg:h-[327px] self-stretch top-[0] w-[100%] xl:bottom-[12px] xl:h-[374px]"></div>
                <Button className="3xl:px-[19px] 3xl:py-[9px] 3xl:text-fs14 absolute bg-white_A700 border-bw bottom-[0] font-semibold inset-x-[0] lg:px-[12px] lg:py-[6px] lg:text-fs9 mx-[auto] px-[16px] py-[8px] text-center text-fs12 text-gray_908 uppercase w-[32%] xl:px-[14px] xl:py-[7px] xl:text-fs10">{`development`}</Button>
              </Stack>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[9px] 3xl:text-fs33 font-newsreader font-semibold leading-lh3600 lg:leading-lh28 lg:mt-[6px] lg:text-fs21 mt-[8px] self-stretch text-center text-fs28 text-gray_908 w-[100%] xl:leading-lh32 xl:mt-[7px] xl:text-fs24">
                {
                  <>
                    {`Building a blog site`}
                    <br />
                    {`from the scratch`}
                  </>
                }
              </Text>
            </Column>
            <Row className="3xl:mt-[19px] items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[79%] xl:mt-[14px]">
              <Row className="font-newsreader items-center justify-evenly px-[0] w-[48%]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`written by`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-deep_orange_400 text-fs13 underline xl:text-fs11">{`Thomas Paul`}</Text>
              </Row>
              <Row className="3xl:ml-[19px] font-newsreader items-center justify-evenly lg:ml-[12px] ml-[16px] px-[0] w-[47%] xl:ml-[14px]">
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_507 xl:text-fs11">{`published on`}</Text>
                <Text className="3xl:text-fs15 font-normal lg:text-fs10 text-center text-fs13 text-gray_908 xl:text-fs11">{`9. 6. 2021`}</Text>
              </Row>
            </Row>
          </Column>
        </List>
      </Column>
      <Column className="bg-gray_50 font-newsreader items-center justify-center self-stretch w-[100%]">
        <Text className="3xl:mt-[96px] 3xl:text-fs24 font-semibold lg:mt-[62px] lg:text-fs15 mt-[80px] mx-[auto] text-center text-fs20 text-gray_908 xl:mt-[71px] xl:text-fs17">{`Subscribe and earn more`}</Text>
        <Row className="3xl:mt-[28px] bg-white_A700 items-center justify-center lg:mt-[18px] mt-[24px] mx-[auto] w-[40%] xl:mt-[21px]">
          <Image
            src="img_iconsactionsi.svg"
            className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[19px] 3xl:my-[28px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[12px] lg:my-[18px] lg:w-[18px] ml-[16px] my-[24px] object-contain w-[24px] xl:h-[22px] xl:ml-[14px] xl:my-[21px] xl:w-[21px]"
            alt="IconsActionsi"
          />
          <Stack className="2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[12px] 3xl:mr-[19px] 3xl:my-[34px] font-newsreader h-[14px] lg:h-[11px] lg:ml-[7px] lg:mr-[12px] lg:my-[22px] ml-[10px] mr-[16px] my-[29px] w-[88%] xl:h-[13px] xl:ml-[8px] xl:mr-[14px] xl:my-[25px]">
            <Text className="3xl:text-fs15 absolute font-newsreader font-normal lg:text-fs10 opacity-op5 right-[0] text-fs13 text-gray_900_87 text-left xl:text-fs11">{`Email address`}</Text>
            <Text className="3xl:right-[28px] 3xl:text-fs16 absolute font-poppins font-semibold lg:right-[18px] lg:text-fs10 right-[24px] text-center text-fs14 text-gray_908 xl:right-[21px] xl:text-fs12">{`Subscribe now`}</Text>
          </Stack>
        </Row>
        <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mb-[24px] 3xl:mt-[28px] 3xl:text-fs15 font-normal leading-lh1800 lg:leading-lh14 lg:mb-[15px] lg:mt-[18px] lg:text-fs10 mb-[20px] mt-[24px] mx-[auto] text-center text-fs13 text-gray_507 w-[24%] xl:leading-lh16 xl:mb-[17px] xl:mt-[21px] xl:text-fs11">
          <span className="text-gray_507 text-fs13 font-newsreader text-center font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
            <>{`By clicking on “Subscribe now” button I agree that my submitted data is being `}</>
          </span>
          <span className="text-gray_507 text-fs13 font-newsreader text-center font-normal underline lg:text-fs10 xl:text-fs11 3xl:text-fs15">
            <>{`collected and stored`}</>
          </span>
          <span className="text-gray_507 text-fs13 font-newsreader text-center font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
            <>{`.`}</>
          </span>
        </Text>
      </Column>
      <div className="self-stretch w-[100%]">
        <Row className="bg-gray_50 justify-evenly px-[0] self-stretch w-[100%]">
          <Column className="3xl:mb-[160px] font-newsreader justify-start lg:mb-[104px] mb-[134px] w-[18%] xl:mb-[119px]">
            <Image
              src="img_brand_1.svg"
              className="2xl:h-[41px] 3xl:h-[49px] 3xl:mr-[12px] h-[40px] lg:h-[32px] lg:mr-[7px] mr-[10px] object-contain w-[52%] xl:h-[36px] xl:mr-[8px]"
              alt="Brand"
            />
            <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs15 font-normal leading-lh1800 lg:leading-lh14 lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-fs13 text-gray_507 text-left w-[81%] xl:leading-lh16 xl:mr-[8px] xl:mt-[14px] xl:text-fs11">{`Opening creativity without limits via ultimate bloging platform conecting all creative souls together.`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs15 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-fs13 text-gray_507 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs11">
              <span className="text-gray_507 text-fs13 font-newsreader text-left font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
                <>{`By `}</>
              </span>
              <span className="text-gray_507 text-fs13 font-newsreader text-left font-normal underline lg:text-fs10 xl:text-fs11 3xl:text-fs15">
                <>{`Acmee`}</>
              </span>
              <span className="text-gray_507 text-fs13 font-newsreader text-left font-normal lg:text-fs10 xl:text-fs11 3xl:text-fs15">
                <>{` 2021`}</>
              </span>
            </Text>
          </Column>
          <Column className="3xl:mb-[57px] font-poppins justify-start lg:mb-[37px] mb-[48px] w-[18%] xl:mb-[42px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs14 font-poppins font-semibold lg:mr-[7px] lg:text-fs9 mr-[10px] text-deep_orange_400 text-fs12 text-left uppercase xl:mr-[8px] xl:text-fs10">{`CATEGORIES`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`All categories`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Design`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Tools`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Life`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Tips and Tricks`}</Text>
          </Column>
          <Column className="3xl:mb-[108px] font-poppins justify-start lg:mb-[70px] mb-[90px] w-[18%] xl:mb-[80px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs14 font-poppins font-semibold lg:mr-[7px] lg:text-fs9 mr-[10px] text-deep_orange_400 text-fs12 text-left uppercase xl:mr-[8px] xl:text-fs10">{`COMPANY`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`About`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Team`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Contact`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Shop`}</Text>
          </Column>
          <Column className="3xl:mb-[158px] font-poppins justify-start lg:mb-[102px] mb-[132px] w-[18%] xl:mb-[117px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs14 font-poppins font-semibold lg:mr-[7px] lg:text-fs9 mr-[10px] text-deep_orange_400 text-fs12 text-left uppercase xl:mr-[8px] xl:text-fs10">{`SECURITY`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Cookies`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Privacy Policy`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs15 font-newsreader font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs13 text-gray_908 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs11">{`Terms and Conditions`}</Text>
          </Column>
        </Row>
      </div>
    </Column>
  );
};

export default TemplateCategory2Page;
