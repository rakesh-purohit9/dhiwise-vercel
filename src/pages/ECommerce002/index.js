import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Row } from "components/Row";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";

const ECommerce002Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[13px] items-center justify-start lg:mb-[8px] mb-[11px] self-stretch w-[100%] xl:mb-[9px]">
        <Stack className="2xl:h-[721px] 3xl:h-[865px] h-[720px] lg:h-[560px] self-stretch w-[100%] xl:h-[641px]">
          <Stack className="2xl:h-[721px] 3xl:h-[865px] absolute h-[720px] lg:h-[560px] right-[0] w-[90%] xl:h-[641px]">
            <Stack className="2xl:h-[721px] 3xl:h-[865px] absolute font-poppins h-[720px] inset-[0] lg:h-[560px] self-stretch w-[100%] xl:h-[641px]">
              <Image
                src="img_insertyourima_10.svg"
                className="2xl:h-[721px] 3xl:h-[865px] absolute h-[720px] lg:h-[560px] object-contain right-[0] w-[70%] xl:h-[641px]"
                alt="Insertyourima"
              />
              <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:text-fs72 3xl:top-[298px] absolute font-normal font-poppins leading-lh7200 left-[0] lg:leading-lh56 lg:text-fs46 lg:top-[193px] text-fs60 text-gray_913 text-left top-[249px] tracking-ls1 w-[41%] xl:leading-lh64 xl:text-fs53 xl:top-[221px]">
                {
                  <>
                    {`Your Clothes`}
                    <br />
                    {`Evolve better now`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh33 3xl:bottom-[284px] 3xl:leading-lh39 3xl:text-fs24 absolute bottom-[237px] font-inter font-normal leading-lh3300 left-[0] lg:bottom-[184px] lg:leading-lh25 lg:text-fs15 text-fs20 text-gray_913 text-left w-[38%] xl:bottom-[210px] xl:leading-lh29 xl:text-fs17">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text`}</Text>
            </Stack>
            <Column className="3xl:bottom-[24px] absolute bottom-[20px] font-inter justify-start left-[0] lg:bottom-[15px] w-[24%] xl:bottom-[17px]">
              <Text className="3xl:text-fs24 font-medium lg:text-fs15 self-stretch text-fs20 text-left text-lime_900 xl:text-fs17">{`SO FRESH. SO CLEAN. SO EASY`}</Text>
              <Column className="3xl:mt-[339px] items-center lg:mt-[220px] mt-[283px] self-stretch w-[100%] xl:mt-[251px]">
                <Column className="font-manrope justify-start self-stretch w-[100%]">
                  <Button className="3xl:mr-[12px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-bluegray_905 border-bw font-bold lg:mr-[7px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mr-[10px] px-[35px] py-[20px] text-center text-fs16 text-white_A700 tracking-ls1 uppercase w-[55%] xl:mr-[8px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Shop Now`}</Button>
                  <Row className="3xl:mr-[12px] 3xl:mt-[120px] font-inter items-center justify-start lg:mr-[7px] lg:mt-[77px] mr-[10px] mt-[100px] w-[47%] xl:mr-[8px] xl:mt-[88px]">
                    <Image
                      src="img_iconscroll.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[1px] lg:w-[18px] my-[2px] object-contain w-[24px] xl:h-[22px] xl:my-[1px] xl:w-[21px]"
                      alt="IconScroll"
                    />
                    <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] mr-[1px] text-fs16 text-gray_913 text-left xl:ml-[7px] xl:text-fs14">{`Begin Scrolling`}</Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Column className="absolute bg-white_A700 font-inter items-center justify-center self-stretch top-[0] w-[100%]">
            <Row className="3xl:mt-[24px] justify-end lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
              <Row className="3xl:ml-[43px] 3xl:my-[7px] font-inter items-center justify-start lg:ml-[28px] lg:my-[4px] ml-[36px] my-[6px] w-[16%] xl:ml-[32px] xl:my-[5px]">
                <Row className="items-center justify-between px-[0] w-[32%]">
                  <Text className="3xl:text-fs16 font-medium lg:text-fs10 text-fs14 text-gray_913 text-left tracking-ls1 xl:text-fs12">{`SHOP`}</Text>
                  <Image
                    src="img_iconographynav_1.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[1px] lg:w-[18px] my-[2px] object-contain w-[24px] xl:h-[22px] xl:my-[1px] xl:w-[21px]"
                    alt="IconographyNav"
                  />
                </Row>
                <Text className="3xl:ml-[38px] 3xl:text-fs16 font-medium lg:ml-[24px] lg:text-fs10 ml-[32px] text-fs14 text-gray_913 text-left tracking-ls1 uppercase xl:ml-[28px] xl:text-fs12">{`BLOG`}</Text>
                <Text className="3xl:ml-[39px] 3xl:text-fs16 font-medium lg:ml-[25px] lg:text-fs10 ml-[33px] text-fs14 text-gray_913 text-left tracking-ls1 uppercase xl:ml-[29px] xl:text-fs12">{`STORE`}</Text>
              </Row>
              <Image
                src="img_shape_2.svg"
                className="2xl:h-[17px] 2xl:mb-[12px] 3xl:h-[20px] 3xl:mb-[15px] 3xl:ml-[477px] 3xl:mt-[13px] h-[16.05px] lg:h-[13px] lg:mb-[10px] lg:ml-[309px] lg:mt-[8px] mb-[12.950001px] ml-[398px] mt-[11px] object-contain w-[1%] xl:h-[15px] xl:mb-[11px] xl:ml-[354px] xl:mt-[9px]"
                alt="Shape"
              />
              <Text className="2xl:ml-[12px] 3xl:mb-[7px] 3xl:ml-[14px] 3xl:mt-[9px] 3xl:text-fs21 font-medium font-poppins lg:mb-[4px] lg:ml-[9px] lg:mt-[6px] lg:text-fs14 mb-[6px] ml-[12.280029px] mt-[8px] text-fs18 text-gray_913 text-left xl:mb-[5px] xl:ml-[10px] xl:mt-[7px] xl:text-fs16">{`Your Logo`}</Text>
              <Row className="3xl:ml-[437px] 3xl:mr-[38px] items-center justify-center lg:ml-[283px] lg:mr-[24px] ml-[364px] mr-[32px] w-[18%] xl:ml-[323px] xl:mr-[28px]">
                <Image
                  src="img_badgesiconpri_2.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:w-[31px] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                  alt="BadgesIconPri"
                />
                <Image
                  src="img_badgesiconpri_3.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[19px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[12px] lg:w-[31px] ml-[16px] object-contain w-[40px] xl:h-[36px] xl:ml-[14px] xl:w-[35px]"
                  alt="BadgesIconPri"
                />
                <Image
                  src="img_badgesiconpri_4.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[19px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[12px] lg:w-[31px] ml-[16px] object-contain w-[40px] xl:h-[36px] xl:ml-[14px] xl:w-[35px]"
                  alt="BadgesIconPri"
                />
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[19px] font-inter h-[40px] lg:h-[32px] lg:ml-[12px] ml-[16px] w-[36%] xl:h-[36px] xl:ml-[14px]">
                  <Image
                    src="img_background_16.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-black_900 text-center text-fs14 w-[max-content] xl:text-fs12">{`Sign In`}</Text>
                </Stack>
              </Row>
            </Row>
            <Line className="3xl:mt-[22px] bg-teal_50 h-[1px] lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]" />
          </Column>
        </Stack>
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <List
            className="3xl:gap-[30px] 3xl:mb-[96px] 3xl:mt-[120px] flex-wrap gap-[25px] grid grid-cols-5 lg:gap-[19px] lg:mb-[62px] lg:mt-[77px] mb-[80px] min-h-[auto] mt-[100px] mx-[auto] w-[79%] xl:gap-[22px] xl:mb-[71px] xl:mt-[88px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-poppins items-center justify-start w-[100%]">
              <Image
                src="img_icon_22.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[28px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[18px] lg:w-[56px] mt-[24px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[21px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[32px] 3xl:text-fs21 font-normal font-poppins lg:mt-[21px] lg:text-fs14 mt-[27px] mx-[auto] text-center text-fs18 text-gray_902 tracking-ls1 xl:mt-[24px] xl:text-fs16">{`Planet friendly`}</Text>
              <Text className="3xl:mb-[28px] 3xl:text-fs19 font-normal font-roboto lg:mb-[18px] lg:mt-[2px] lg:text-fs12 mb-[24px] mt-[3px] mx-[auto] text-center text-fs16 text-gray_503 xl:mb-[21px] xl:mt-[2px] xl:text-fs14">{`Lorem ipsum is typically`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-start w-[100%]">
              <Image
                src="img_icon_23.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[30px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[19px] lg:w-[56px] mt-[25px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[22px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[32px] 3xl:text-fs21 font-normal font-poppins lg:mt-[21px] lg:text-fs14 mt-[27px] mx-[auto] text-center text-fs18 text-gray_902 tracking-ls1 xl:mt-[24px] xl:text-fs16">{`BCI Cotton`}</Text>
              <Text className="3xl:mb-[28px] 3xl:text-fs19 font-normal font-roboto lg:mb-[18px] lg:mt-[1px] lg:text-fs12 mb-[24px] mt-[2px] mx-[auto] text-center text-fs16 text-gray_503 xl:mb-[21px] xl:mt-[1px] xl:text-fs14">{`Lorem ipsum is typically`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-start w-[100%]">
              <Image
                src="img_icon_24.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[30px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[19px] lg:w-[56px] mt-[25px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[22px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[32px] 3xl:text-fs21 font-normal font-poppins lg:mt-[21px] lg:text-fs14 mt-[27px] mx-[auto] text-center text-fs18 text-gray_902 tracking-ls1 xl:mt-[24px] xl:text-fs16">{`Water Repellent`}</Text>
              <Text className="3xl:mb-[28px] 3xl:text-fs19 font-normal font-roboto lg:mb-[18px] lg:mt-[1px] lg:text-fs12 mb-[24px] mt-[2px] mx-[auto] text-center text-fs16 text-gray_503 xl:mb-[21px] xl:mt-[1px] xl:text-fs14">{`Lorem ipsum is typically`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-start w-[100%]">
              <Image
                src="img_icon_25.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[28px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[18px] lg:w-[56px] mt-[24px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[21px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[32px] 3xl:text-fs21 font-normal font-poppins lg:mt-[21px] lg:text-fs14 mt-[27px] mx-[auto] text-center text-fs18 text-gray_902 tracking-ls1 xl:mt-[24px] xl:text-fs16">{`Recycle Check`}</Text>
              <Text className="3xl:mb-[28px] 3xl:text-fs19 font-normal font-roboto lg:mb-[18px] lg:mt-[2px] lg:text-fs12 mb-[24px] mt-[3px] mx-[auto] text-center text-fs16 text-gray_503 xl:mb-[21px] xl:mt-[2px] xl:text-fs14">{`Lorem ipsum is typically`}</Text>
            </Column>
            <Column className="bg-white_A700 font-poppins items-center justify-start w-[100%]">
              <Image
                src="img_icon_26.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[28px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[18px] lg:w-[56px] mt-[24px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[21px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[32px] 3xl:text-fs21 font-normal font-poppins lg:mt-[21px] lg:text-fs14 mt-[27px] mx-[auto] text-center text-fs18 text-gray_902 tracking-ls1 xl:mt-[24px] xl:text-fs16">{`Sweat Repellent`}</Text>
              <Text className="3xl:mb-[28px] 3xl:text-fs19 font-normal font-roboto lg:mb-[18px] lg:mt-[2px] lg:text-fs12 mb-[24px] mt-[3px] mx-[auto] text-center text-fs16 text-gray_503 xl:mb-[21px] xl:mt-[2px] xl:text-fs14">{`Lorem ipsum is typically`}</Text>
            </Column>
          </List>
        </Column>
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <Line className="bg-bluegray_103 h-[1px] mx-[auto] w-[79%]" />
          <Row className="3xl:mt-[118px] font-poppins items-center justify-between lg:mt-[77px] mt-[99px] px-[0] self-stretch w-[100%] xl:mt-[88px]">
            <Text className="3xl:ml-[180px] 3xl:text-fs43 font-medium font-poppins lg:ml-[116px] lg:text-fs28 ml-[150px] text-fs36 text-gray_913 text-left tracking-ls1 xl:ml-[133px] xl:text-fs32">{`FRESH FROM THE LAB`}</Text>
            <Button className="3xl:mr-[180px] 3xl:pl-[30px] 3xl:pr-[31px] 3xl:py-[21px] 3xl:text-fs16 bg-white_A700 border border-deep_orange_900 border-solid font-bold font-inter lg:mb-[2px] lg:mr-[116px] lg:pl-[19px] lg:pr-[20px] lg:py-[14px] lg:text-fs10 mb-[3px] mr-[150px] mt-[1px] pl-[25px] pr-[26px] py-[18px] text-center text-deep_orange_900 text-fs14 tracking-ls1 uppercase w-[12%] xl:mb-[2px] xl:mr-[133px] xl:pl-[22px] xl:pr-[23px] xl:py-[16px] xl:text-fs12">{`SHOW ME MORE`}</Button>
          </Row>
          <Row className="3xl:gap-[37px] 3xl:mt-[54px] 3xl:px-[180px] gap-[31px] grid grid-cols-4 items-center justify-start lg:gap-[24px] lg:mt-[35px] lg:px-[116px] mt-[45px] px-[150px] self-stretch w-[100%] xl:gap-[27px] xl:mt-[40px] xl:px-[133px]">
            <Image
              src="img_insertyourima_11.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Insertyourima"
            />
            <Image
              src="img_insertyourima_12.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Insertyourima"
            />
            <Image
              src="img_insertyourima_13.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Insertyourima"
            />
            <Image
              src="img_insertyourima_14.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Insertyourima"
            />
          </Row>
          <List
            className="3xl:gap-[97px] 3xl:mb-[120px] 3xl:mt-[24px] flex-wrap gap-[81px] grid grid-cols-4 lg:gap-[63px] lg:mb-[77px] lg:mt-[15px] mb-[100px] min-h-[auto] mt-[20px] mx-[auto] w-[76%] xl:gap-[72px] xl:mb-[88px] xl:mt-[17px]"
            orientation="horizontal"
          >
            <Column className="font-poppins justify-start w-[100%]">
              <Image
                src="img_color.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:mr-[12px] h-[28px] lg:h-[22px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[53%] xl:h-[25px] xl:mr-[8px]"
                alt="Color"
              />
              <Text className="3xl:mt-[22px] 3xl:text-fs24 font-normal font-poppins lg:mt-[14px] lg:text-fs15 mt-[19px] mx-[1px] text-fs20 text-gray_902 text-left tracking-ls1 uppercase xl:mt-[16px] xl:text-fs17">{`Knitted Shirt Sage`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs26 font-inter font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs17 mr-[10px] mt-[12px] text-center text-fs22 text-gray_902 tracking-ls1 xl:mr-[8px] xl:mt-[10px] xl:text-fs19">{`$14.50`}</Text>
            </Column>
            <Column className="font-poppins justify-start w-[100%]">
              <Image
                src="img_color_1.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:mr-[12px] h-[28px] lg:h-[22px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[35%] xl:h-[25px] xl:mr-[8px]"
                alt="Color"
              />
              <Text className="3xl:mt-[22px] 3xl:text-fs24 font-normal font-poppins lg:mt-[14px] lg:text-fs15 mt-[19px] mx-[1px] text-fs20 text-gray_902 text-left tracking-ls1 uppercase xl:mt-[16px] xl:text-fs17">{`Oversize Sweater`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs26 font-inter font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs17 mr-[10px] mt-[12px] text-center text-fs22 text-gray_902 tracking-ls1 xl:mr-[8px] xl:mt-[10px] xl:text-fs19">{`$14.50`}</Text>
            </Column>
            <Column className="font-poppins justify-start w-[100%]">
              <Image
                src="img_color_2.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:mr-[12px] h-[28px] lg:h-[22px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[50%] xl:h-[25px] xl:mr-[8px]"
                alt="Color"
              />
              <Text className="3xl:mt-[22px] 3xl:text-fs24 font-normal font-poppins lg:mt-[14px] lg:text-fs15 mt-[19px] mx-[1px] text-fs20 text-gray_902 text-left tracking-ls1 uppercase xl:mt-[16px] xl:text-fs17">{`Cream light jacket`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs26 font-inter font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs17 mr-[10px] mt-[12px] text-center text-fs22 text-gray_902 tracking-ls1 xl:mr-[8px] xl:mt-[10px] xl:text-fs19">{`$14.50`}</Text>
            </Column>
            <Column className="font-poppins justify-start w-[100%]">
              <Image
                src="img_color_3.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:mr-[12px] h-[28px] lg:h-[22px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[33%] xl:h-[25px] xl:mr-[8px]"
                alt="Color"
              />
              <Text className="3xl:mt-[22px] 3xl:text-fs24 font-normal font-poppins lg:mt-[14px] lg:text-fs15 mt-[19px] mx-[1px] text-fs20 text-gray_902 text-left tracking-ls1 uppercase xl:mt-[16px] xl:text-fs17">{`Knitted Shirt Sage`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs26 font-inter font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs17 mr-[10px] mt-[12px] text-center text-fs22 text-gray_902 tracking-ls1 xl:mr-[8px] xl:mt-[10px] xl:text-fs19">{`$14.50`}</Text>
            </Column>
          </List>
        </Column>
        <List
          className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
          orientation="vertical"
        >
          <Column className="items-center justify-start my-[0] self-stretch w-[100%]">
            <Stack className="2xl:h-[483px] 3xl:h-[579px] h-[482px] lg:h-[375px] self-stretch w-[100%] xl:h-[429px]">
              <Stack className="2xl:h-[483px] 3xl:h-[579px] absolute h-[482px] inset-[0] lg:h-[375px] self-stretch w-[100%] xl:h-[429px]">
                <Column className="absolute bg-white_A700 bottom-[2px] inset-x-[0] items-center justify-start lg:bottom-[1px] self-stretch top-[0] w-[100%] xl:bottom-[1px]">
                  <Line className="3xl:mb-[575px] bg-bluegray_103 h-[1px] lg:mb-[372px] mb-[479px] mx-[auto] w-[79%] xl:mb-[426px]" />
                </Column>
                <Image
                  src="img_insertyourima_15.svg"
                  className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-y-[0] lg:h-[374px] my-[auto] object-contain right-[0] w-[50%] xl:h-[427px]"
                  alt="Insertyourima"
                />
              </Stack>
              <Column className="3xl:left-[180px] absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[150px] lg:left-[116px] my-[auto] w-[36%] xl:left-[133px]">
                <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mr-[12px] 3xl:text-fs50 font-normal font-poppins leading-lh6000 lg:leading-lh46 lg:mr-[7px] lg:text-fs32 mr-[10px] text-fs42 text-gray_913 text-left tracking-ls1 w-[94%] xl:leading-lh53 xl:mr-[8px] xl:text-fs37">
                  {
                    <>
                      {`A Shirt that doesn’t`}
                      <br />
                      {`Stain, Wrinkle, or Smell?`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs24 font-normal font-roboto leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-gray_503 text-left w-[100%] xl:leading-lh28 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily text.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[28px] font-inter justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[25%] xl:mr-[8px] xl:mt-[21px]">
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:mt-[1px] lg:text-fs12 mb-[3px] mt-[2px] text-deep_orange_900 text-fs16 text-left tracking-ls1 uppercase xl:mb-[2px] xl:mt-[1px] xl:text-fs14">{`Shop Now`}</Text>
                  <Image
                    src="img_arrowrightalt.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[12px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[7px] lg:w-[18px] ml-[10px] object-contain w-[24px] xl:h-[22px] xl:ml-[8px] xl:w-[21px]"
                    alt="arrowrightalt"
                  />
                </Row>
              </Column>
            </Stack>
            <Row className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_16.svg"
                className="2xl:h-[481px] 3xl:h-[577px] h-[480px] lg:h-[374px] object-contain w-[50%] xl:h-[427px]"
                alt="Insertyourima"
              />
              <Column className="3xl:ml-[76px] 3xl:mr-[192px] 3xl:my-[139px] font-poppins justify-start lg:ml-[49px] lg:mr-[124px] lg:my-[90px] ml-[64px] mr-[160px] my-[116px] w-[34%] xl:ml-[56px] xl:mr-[142px] xl:my-[103px]">
                <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mr-[12px] 3xl:text-fs50 font-normal font-poppins leading-lh6000 lg:leading-lh46 lg:mr-[7px] lg:text-fs32 mr-[10px] text-fs42 text-gray_913 text-left tracking-ls1 w-[96%] xl:leading-lh53 xl:mr-[8px] xl:text-fs37">
                  {
                    <>
                      {`Imagine everything`}
                      <br />
                      {`you could do in 3 days`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs24 font-normal font-roboto leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-gray_503 text-left w-[100%] xl:leading-lh28 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[28px] font-inter justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[38%] xl:mr-[8px] xl:mt-[21px]">
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:mt-[1px] lg:text-fs12 mb-[3px] mt-[2px] text-deep_orange_900 text-fs16 text-left tracking-ls1 uppercase xl:mb-[2px] xl:mt-[1px] xl:text-fs14">{`Try it Our Stuff`}</Text>
                  <Image
                    src="img_arrowrightalt.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[3px] lg:w-[18px] ml-[4px] object-contain w-[24px] xl:h-[22px] xl:ml-[3px] xl:w-[21px]"
                    alt="arrowrightalt"
                  />
                </Row>
              </Column>
            </Row>
          </Column>
          <Column className="items-center justify-start my-[0] self-stretch w-[100%]">
            <Stack className="2xl:h-[482px] 3xl:h-[578px] h-[481px] lg:h-[375px] self-stretch w-[100%] xl:h-[428px]">
              <Stack className="2xl:h-[482px] 3xl:h-[578px] absolute h-[481px] inset-[0] lg:h-[375px] self-stretch w-[100%] xl:h-[428px]">
                <div className="2xl:h-[481px] 3xl:h-[577px] absolute bg-white_A700 bottom-[1px] h-[480px] inset-x-[0] lg:h-[374px] self-stretch top-[0] w-[100%] xl:h-[427px]"></div>
                <Image
                  src="img_insertyourima_17.svg"
                  className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-y-[0] lg:h-[374px] my-[auto] object-contain right-[0] w-[50%] xl:h-[427px]"
                  alt="Insertyourima"
                />
              </Stack>
              <Column className="3xl:left-[180px] absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[150px] lg:left-[116px] my-[auto] w-[36%] xl:left-[133px]">
                <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mr-[12px] 3xl:text-fs50 font-normal font-poppins leading-lh6000 lg:leading-lh46 lg:mr-[7px] lg:text-fs32 mr-[10px] text-fs42 text-gray_913 text-left tracking-ls1 w-[85%] xl:leading-lh53 xl:mr-[8px] xl:text-fs37">
                  {
                    <>
                      {`A Freshner take on`}
                      <br />
                      {`Sustainibility process`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs24 font-normal font-roboto leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-gray_503 text-left w-[100%] xl:leading-lh28 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily text.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[28px] font-inter justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[44%] xl:mr-[8px] xl:mt-[21px]">
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:mt-[1px] lg:text-fs12 mb-[3px] mt-[2px] text-deep_orange_900 text-fs16 text-left tracking-ls1 uppercase xl:mb-[2px] xl:mt-[1px] xl:text-fs14">{`Buy Less, Wear More`}</Text>
                  <Image
                    src="img_arrowrightalt.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[3px] lg:w-[18px] ml-[4px] object-contain w-[24px] xl:h-[22px] xl:ml-[3px] xl:w-[21px]"
                    alt="arrowrightalt"
                  />
                </Row>
              </Column>
            </Stack>
            <Row className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_18.svg"
                className="2xl:h-[481px] 3xl:h-[577px] h-[480px] lg:h-[374px] object-contain w-[50%] xl:h-[427px]"
                alt="Insertyourima"
              />
              <Column className="3xl:ml-[76px] 3xl:mr-[192px] 3xl:my-[139px] font-poppins justify-start lg:ml-[49px] lg:mr-[124px] lg:my-[90px] ml-[64px] mr-[160px] my-[116px] w-[34%] xl:ml-[56px] xl:mr-[142px] xl:my-[103px]">
                <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mr-[12px] 3xl:text-fs50 font-normal font-poppins leading-lh6000 lg:leading-lh46 lg:mr-[7px] lg:text-fs32 mr-[10px] text-fs42 text-gray_913 text-left tracking-ls1 w-[89%] xl:leading-lh53 xl:mr-[8px] xl:text-fs37">
                  {
                    <>
                      {`The smartest cloth`}
                      <br />
                      {`made by technology`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs24 font-normal font-roboto leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-gray_503 text-left w-[100%] xl:leading-lh28 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[28px] font-inter justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[51%] xl:mr-[8px] xl:mt-[21px]">
                  <Text className="3xl:text-fs19 font-normal lg:mb-[2px] lg:mt-[1px] lg:text-fs12 mb-[3px] mt-[2px] text-deep_orange_900 text-fs16 text-left tracking-ls1 uppercase xl:mb-[2px] xl:mt-[1px] xl:text-fs14">{`Learn Our Technology`}</Text>
                  <Image
                    src="img_arrowrightalt.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[2px] lg:w-[18px] ml-[3px] object-contain w-[24px] xl:h-[22px] xl:ml-[2px] xl:w-[21px]"
                    alt="arrowrightalt"
                  />
                </Row>
              </Column>
            </Row>
          </Column>
        </List>
        <Column className="bg-white_A700 font-poppins items-center justify-center self-stretch w-[100%]">
          <Text className="2xl:leading-lh56 3xl:leading-lh67 3xl:mt-[120px] 3xl:text-fs43 font-medium leading-lh5600 lg:leading-lh43 lg:mt-[77px] lg:text-fs28 mt-[100px] mx-[auto] text-center text-fs36 text-gray_913 tracking-ls1 w-[50%] xl:leading-lh49 xl:mt-[88px] xl:text-fs32">
            {
              <>
                {`DESIGNED IN AMSTERDAM.`}
                <br />
                {`MADE IN PORTUGAL AND SWITZERLAND`}
              </>
            }
          </Text>
          <List
            className="3xl:gap-[36px] 3xl:mb-[120px] 3xl:mt-[76px] flex-wrap gap-[30px] grid grid-cols-2 lg:gap-[23px] lg:mb-[77px] lg:mt-[49px] mb-[100px] min-h-[auto] mt-[64px] mx-[auto] w-[79%] xl:gap-[26px] xl:mb-[88px] xl:mt-[56px]"
            orientation="horizontal"
          >
            <Stack className="2xl:h-[481px] 3xl:h-[577px] h-[480px] lg:h-[374px] w-[100%] xl:h-[427px]">
              <Image
                src="img_insertyourima_19.png"
                className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-[0] lg:h-[374px] object-cover self-stretch w-[100%] xl:h-[427px]"
                alt="Insertyourima"
              />
              <Column className="3xl:bottom-[57px] 3xl:left-[57px] absolute bottom-[48px] font-poppins justify-start left-[48px] lg:bottom-[37px] lg:left-[37px] w-[37%] xl:bottom-[42px] xl:left-[42px]">
                <Text className="2xl:tracking-ls1 3xl:text-fs33 3xl:tracking-ls2 font-medium lg:text-fs21 lg:tracking-ls1 self-stretch text-fs28 text-left text-white_A700 tracking-ls18666666746139526 uppercase xl:text-fs24 xl:tracking-ls1">{`New Arrival`}</Text>
                <Column className="3xl:mt-[21px] font-inter items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                  <Button className="2xl:pl-[23px] 2xl:pr-[22px] 3xl:mr-[7px] 3xl:pl-[28px] 3xl:pr-[27px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mr-[4px] lg:pl-[18px] lg:pr-[17px] lg:py-[12px] lg:text-fs12 mr-[6px] pl-[23.5px] pr-[22.5px] py-[16px] text-center text-fs16 text-gray_913 tracking-ls1 uppercase w-[97%] xl:mr-[5px] xl:px-[20px] xl:py-[14px] xl:text-fs14">{`View Products`}</Button>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[481px] 3xl:h-[577px] h-[480px] lg:h-[374px] w-[100%] xl:h-[427px]">
              <Image
                src="img_insertyourima_19.png"
                className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-[0] lg:h-[374px] object-cover self-stretch w-[100%] xl:h-[427px]"
                alt="Insertyourima"
              />
              <Column className="3xl:bottom-[57px] 3xl:left-[57px] absolute bottom-[48px] font-poppins justify-start left-[48px] lg:bottom-[37px] lg:left-[37px] w-[36%] xl:bottom-[42px] xl:left-[42px]">
                <Text className="2xl:tracking-ls1 3xl:text-fs33 3xl:tracking-ls2 font-medium lg:text-fs21 lg:tracking-ls1 self-stretch text-fs28 text-left text-white_A700 tracking-ls18666666746139526 uppercase xl:text-fs24 xl:tracking-ls1">{`BEST SELLERS`}</Text>
                <Column className="3xl:mt-[21px] font-inter items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                  <Button className="2xl:pl-[23px] 2xl:pr-[22px] 3xl:pl-[28px] 3xl:pr-[27px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border-bw font-bold lg:mr-[1px] lg:pl-[18px] lg:pr-[17px] lg:py-[12px] lg:text-fs12 mr-[2px] pl-[23.5px] pr-[22.5px] py-[16px] text-center text-fs16 text-gray_913 tracking-ls1 uppercase w-[99%] xl:mr-[1px] xl:px-[20px] xl:py-[14px] xl:text-fs14">{`View Products`}</Button>
                </Column>
              </Column>
            </Stack>
          </List>
        </Column>
        <Stack className="2xl:h-[593px] 3xl:h-[711px] h-[592px] lg:h-[461px] self-stretch w-[100%] xl:h-[527px]">
          <Column className="absolute bg-white_A700 bottom-[2px] font-poppins inset-x-[0] justify-center lg:bottom-[1px] self-stretch top-[0] w-[100%] xl:bottom-[1px]">
            <Image
              src="img_icon_27.svg"
              className="2xl:h-[54px] 2xl:mt-[80px] 3xl:h-[65px] 3xl:mt-[96px] 3xl:mx-[180px] h-[53.33px] lg:h-[42px] lg:mt-[62px] lg:mx-[116px] mt-[80.66992px] mx-[150px] object-contain w-[4%] xl:h-[48px] xl:mt-[71px] xl:mx-[133px]"
              alt="Icon"
            />
            <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:mt-[38px] 3xl:mx-[180px] 3xl:text-fs50 font-medium font-poppins leading-lh6400 lg:leading-lh49 lg:mt-[24px] lg:mx-[116px] lg:text-fs32 mt-[32px] mx-[150px] text-fs42 text-gray_913 text-left tracking-ls1 w-[30%] xl:leading-lh56 xl:mt-[28px] xl:mx-[133px] xl:text-fs37">
              {
                <>
                  {`Customer`}
                  <br />
                  {`Testimonial`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:mx-[180px] 3xl:text-fs21 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:mx-[116px] lg:text-fs14 mt-[16px] mx-[150px] text-fs18 text-gray_503 text-left w-[28%] xl:leading-lh28 xl:mt-[14px] xl:mx-[133px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
            <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mb-[96px] 3xl:mt-[57px] 3xl:mx-[180px] font-inter h-[56px] lg:h-[44px] lg:mb-[62px] lg:mt-[37px] lg:mx-[116px] mb-[80px] mt-[48px] mx-[150px] w-[19%] xl:h-[50px] xl:mb-[71px] xl:mt-[42px] xl:mx-[133px]">
              <Image
                src="img_background_17.svg"
                className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                alt="Background"
              />
              <Text className="3xl:text-fs19 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs12 m-[auto] text-center text-fs16 text-white_A700 tracking-ls1 uppercase w-[max-content] xl:text-fs14">{`READ ALL TESTIMONIAL`}</Text>
            </Stack>
          </Column>
          <Column className="absolute bg-gray_50 items-center justify-center right-[0] w-[59%]">
            <List
              className="3xl:mx-[79px] 3xl:my-[75px] flex-wrap gap-[0] lg:mx-[51px] lg:my-[49px] min-h-[auto] mx-[66px] my-[63px] w-[74%] xl:mx-[58px] xl:my-[56px]"
              orientation="vertical"
            >
              <Row className="3xl:my-[14px] bg-white_A700 font-poppins items-center justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
                <Column className="3xl:mb-[49px] 3xl:ml-[48px] 3xl:mt-[48px] justify-start lg:ml-[31px] lg:my-[31px] mb-[41px] ml-[40px] mt-[40px] w-[57%] xl:mb-[36px] xl:ml-[35px] xl:mt-[35px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left w-[100%] xl:leading-lh28 xl:text-fs16">{`“Lorem ipsum is typically a corrupted version of 'De finibus bonorum et.”`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[33px] 3xl:text-fs21 font-medium font-poppins lg:mr-[7px] lg:mt-[21px] lg:text-fs14 mr-[10px] mt-[28px] text-fs18 text-gray_913 text-left xl:mr-[8px] xl:mt-[24px] xl:text-fs16">{`Howard Dawson`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mr-[10px] mt-[2px] text-bluegray_403 text-fs16 text-left xl:mr-[8px] xl:mt-[1px] xl:text-fs14">{`Marketing Specialist`}</Text>
                </Column>
                <Image
                  src="img_insertyourima_20.svg"
                  className="2xl:h-[145px] 3xl:h-[173px] 3xl:mb-[45px] 3xl:mr-[45px] 3xl:mt-[46px] 3xl:w-[172px] h-[144px] lg:h-[112px] lg:mb-[29px] lg:mr-[29px] lg:mt-[30px] lg:w-[112px] mb-[38px] mr-[38px] mt-[39px] object-contain w-[144px] xl:h-[129px] xl:mb-[33px] xl:mr-[33px] xl:mt-[34px] xl:w-[128px]"
                  alt="Insertyourima"
                />
              </Row>
              <Row className="3xl:my-[14px] bg-white_A700 font-poppins items-center justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
                <Column className="3xl:mb-[49px] 3xl:ml-[48px] 3xl:mt-[48px] justify-start lg:ml-[31px] lg:my-[31px] mb-[41px] ml-[40px] mt-[40px] w-[57%] xl:mb-[36px] xl:ml-[35px] xl:mt-[35px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left w-[100%] xl:leading-lh28 xl:text-fs16">{`“Lorem ipsum is typically a corrupted version of 'De finibus bonorum et.”`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[33px] 3xl:text-fs21 font-medium font-poppins lg:mr-[7px] lg:mt-[21px] lg:text-fs14 mr-[10px] mt-[28px] text-fs18 text-gray_913 text-left xl:mr-[8px] xl:mt-[24px] xl:text-fs16">{`Sarah Hale`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mr-[10px] mt-[2px] text-bluegray_403 text-fs16 text-left xl:mr-[8px] xl:mt-[1px] xl:text-fs14">{`Architect at Company`}</Text>
                </Column>
                <Image
                  src="img_insertyourima_21.svg"
                  className="2xl:h-[145px] 3xl:h-[173px] 3xl:mb-[45px] 3xl:mr-[45px] 3xl:mt-[46px] 3xl:w-[172px] h-[144px] lg:h-[112px] lg:mb-[29px] lg:mr-[29px] lg:mt-[30px] lg:w-[112px] mb-[38px] mr-[38px] mt-[39px] object-contain w-[144px] xl:h-[129px] xl:mb-[33px] xl:mr-[33px] xl:mt-[34px] xl:w-[128px]"
                  alt="Insertyourima"
                />
              </Row>
            </List>
          </Column>
        </Stack>
        <Row className="3xl:mt-[48px] bg-bluegray_905 items-center justify-between lg:mt-[31px] mt-[40px] px-[0] self-stretch w-[100%] xl:mt-[35px]">
          <div className="2xl:h-[281px] 3xl:h-[337px] bg-white_A700 h-[280px] lg:h-[218px] w-[3%] xl:h-[250px]"></div>
          <Stack className="2xl:h-[281px] 3xl:h-[337px] h-[280px] lg:h-[218px] w-[90%] xl:h-[250px]">
            <div className="2xl:h-[281px] 3xl:h-[337px] absolute bg-white_A700 h-[280px] lg:h-[218px] right-[0] w-[24%] xl:h-[250px]"></div>
            <Row className="absolute font-poppins h-[max-content] inset-y-[0] items-center justify-between left-[0] my-[auto] px-[0] w-[88%]">
              <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs50 font-medium leading-lh6000 lg:leading-lh46 lg:text-fs32 text-fs42 text-left text-white_A700 tracking-ls1 w-[35%] xl:leading-lh53 xl:text-fs37">
                {
                  <>
                    {`Sign up for the`}
                    <br />
                    {`freshest newsletter`}
                  </>
                }
              </Text>
              <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:my-[28px] h-[72px] lg:h-[56px] lg:my-[18px] my-[24px] w-[45%] xl:h-[65px] xl:my-[21px]">
                <Stack className="2xl:h-[73px] 3xl:h-[87px] absolute font-inter h-[72px] inset-[0] lg:h-[56px] self-stretch w-[100%] xl:h-[65px]">
                  <Image
                    src="img_base_1.svg"
                    className="2xl:h-[73px] 3xl:h-[87px] absolute h-[72px] inset-[0] lg:h-[56px] object-cover self-stretch w-[100%] xl:h-[65px]"
                    alt="Base"
                  />
                  <Button className="2xl:pb-[25px] 2xl:pt-[27px] 3xl:pb-[30px] 3xl:pt-[33px] 3xl:px-[38px] 3xl:text-fs21 absolute bg-bluegray_905 border-bw font-normal lg:pb-[19px] lg:pt-[21px] lg:px-[24px] lg:text-fs14 pb-[25.545px] pt-[27.545px] px-[32px] right-[0] text-center text-fs18 text-white_A700 w-[32%] xl:pb-[22px] xl:pt-[24px] xl:px-[28px] xl:text-fs16">{`Get Started`}</Button>
                </Stack>
                <Row className="3xl:left-[28px] absolute font-inter h-[max-content] inset-y-[0] justify-start left-[24px] lg:left-[18px] my-[auto] w-[44%] xl:left-[21px]">
                  <Image
                    src="img_envelope_2.svg"
                    className="2xl:h-[14px] 2xl:mt-[3px] 3xl:h-[17px] 3xl:mt-[4px] h-[13.5px] lg:h-[11px] lg:mb-[1px] lg:mt-[2px] mb-[2px] mt-[3.5px] object-contain w-[8%] xl:h-[13px] xl:mb-[1px] xl:mt-[3px]"
                    alt="envelope"
                  />
                  <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_403 text-fs16 text-left xl:ml-[14px] xl:text-fs14">{`Enter your email address`}</Text>
                </Row>
              </Stack>
            </Row>
          </Stack>
        </Row>
        <div className="self-stretch w-[100%]">
          <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
            <Row className="3xl:mt-[108px] font-poppins justify-evenly lg:mt-[70px] mt-[90px] px-[0] self-stretch w-[100%] xl:mt-[80px]">
              <Image
                src="img_group_3.svg"
                className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                alt="Group"
              />
              <Text className="3xl:text-fs24 font-medium lg:text-fs15 mt-[1px] text-fs20 text-gray_902 text-left xl:text-fs17">{`Your Logo`}</Text>
              <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:mt-[1px] lg:text-fs12 mb-[4px] mt-[2px] text-fs16 text-gray_902 text-left tracking-ls1 uppercase xl:mb-[3px] xl:mt-[1px] xl:text-fs14">{`Shopping`}</Text>
              <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:mt-[1px] lg:text-fs12 mb-[4px] mt-[2px] text-fs16 text-gray_902 text-left tracking-ls1 uppercase xl:mb-[3px] xl:mt-[1px] xl:text-fs14">{`Information`}</Text>
              <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:mt-[1px] lg:text-fs12 mb-[4px] mt-[2px] text-fs16 text-gray_902 text-left tracking-ls1 uppercase xl:mb-[3px] xl:mt-[1px] xl:text-fs14">{`Media`}</Text>
              <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:mt-[1px] lg:text-fs12 mb-[4px] mt-[2px] text-fs16 text-gray_902 text-left tracking-ls1 uppercase xl:mb-[3px] xl:mt-[1px] xl:text-fs14">{`Get in touch`}</Text>
            </Row>
            <Row className="3xl:mb-[118px] 3xl:mt-[13px] font-inter justify-evenly lg:mb-[77px] lg:mt-[8px] mb-[99px] mt-[11px] px-[0] self-stretch w-[100%] xl:mb-[88px] xl:mt-[9px]">
              <Column className="3xl:mb-[24px] justify-start lg:mb-[15px] mb-[20px] w-[20%] xl:mb-[17px]">
                <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:text-fs16 font-normal leading-lh2200 lg:leading-lh17 lg:text-fs10 self-stretch text-bluegray_403 text-fs14 text-left w-[100%] xl:leading-lh19 xl:text-fs12">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman.`}</Text>
                <Image
                  src="img_logo_10.svg"
                  className="2xl:h-[37px] 3xl:h-[44px] 3xl:mr-[12px] 3xl:mt-[28px] h-[36px] lg:h-[28px] lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] object-contain w-[66%] xl:h-[33px] xl:mr-[8px] xl:mt-[21px]"
                  alt="Logo"
                />
              </Column>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:text-fs16 font-normal leading-lh1600 lg:leading-lh12 lg:mt-[1px] lg:text-fs10 mt-[2px] text-fs14 text-gray_704 text-left w-[8%] xl:leading-lh14 xl:mt-[1px] xl:text-fs12">
                {
                  <>
                    {`Order Status`}
                    <br />
                    {`Shipping`}
                    <br />
                    {`Delivery`}
                    <br />
                    {`Payment Options`}
                    <br />
                    {`FAQ’s`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mb-[38px] 3xl:text-fs16 font-normal leading-lh1600 lg:leading-lh12 lg:mb-[24px] lg:mt-[1px] lg:text-fs10 mb-[32px] mt-[2px] text-fs14 text-gray_704 text-left w-[6%] xl:leading-lh14 xl:mb-[28px] xl:mt-[1px] xl:text-fs12">
                {
                  <>
                    {`Find Store`}
                    <br />
                    {`Newsletter`}
                    <br />
                    {`Membership`}
                    <br />
                    {`Feedback`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mb-[76px] 3xl:text-fs16 font-normal leading-lh1600 lg:leading-lh12 lg:mb-[49px] lg:mt-[1px] lg:text-fs10 mb-[64px] mt-[2px] text-fs14 text-gray_704 text-left w-[5%] xl:leading-lh14 xl:mb-[56px] xl:mt-[1px] xl:text-fs12">
                {
                  <>
                    {`Facebook`}
                    <br />
                    {`Twitter`}
                    <br />
                    {`YouTube`}
                  </>
                }
              </Text>
              <Column className="3xl:mb-[45px] font-inter justify-start lg:mb-[29px] lg:mt-[1px] mb-[38px] mt-[2px] w-[16%] xl:mb-[33px] xl:mt-[1px]">
                <Input
                  className="2xl:pb-[16px] 2xl:pt-[17px] 3xl:pb-[19px] 3xl:pl-[19px] 3xl:pt-[20px] 3xl:text-fs16 bg-bluegray_200_63 border-0 font-normal lg:pb-[12px] lg:pl-[12px] lg:pt-[13px] lg:text-fs10 pb-[16.205px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_401 pt-[17.205px] text-fs14 text-gray_401 text-left w-[100%] xl:pb-[14px] xl:pl-[14px] xl:pt-[15px] xl:text-fs12"
                  name="Group2"
                  placeholder={`Your email address`}
                ></Input>
                <Column className="3xl:mt-[14px] font-poppins items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
                  <Button className="2xl:pb-[13px] 2xl:pt-[14px] 3xl:pb-[15px] 3xl:pt-[17px] 3xl:px-[42px] 3xl:text-fs16 bg-gray_911 border-bw font-medium lg:pb-[10px] lg:pt-[11px] lg:px-[27px] lg:text-fs10 pb-[13.205px] pt-[14.205px] px-[35px] text-center text-fs14 text-white_A700 w-[100%] xl:pb-[11px] xl:pt-[12px] xl:px-[31px] xl:text-fs12">{`Get Access`}</Button>
                </Column>
              </Column>
            </Row>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default ECommerce002Page;
