import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const DigtalAgencyPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-heebo justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <Stack className="2xl:h-[961px] 3xl:h-[1153px] h-[960px] lg:h-[747px] self-stretch w-[100%] xl:h-[854px]">
            <Image
              src="img_background_42.svg"
              className="2xl:h-[961px] 3xl:h-[1153px] absolute h-[960px] inset-[0] lg:h-[747px] object-cover self-stretch w-[100%] xl:h-[854px]"
              alt="Background"
            />
            <Column className="3xl:left-[195px] 3xl:top-[58px] absolute font-heebo justify-start left-[163px] lg:left-[126px] lg:top-[38px] top-[49px] w-[40%] xl:left-[145px] xl:top-[43px]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="3xl:mr-[10px] font-heebo items-center justify-between lg:mr-[7px] mr-[9px] px-[0] w-[98%] xl:mr-[8px]">
                  <Text className="3xl:text-fs33 font-black lg:text-fs21 text-fs28 text-left text-white_A700 tracking-ls11 xl:text-fs24">{`.logo`}</Text>
                  <Image
                    src="img_navigation_2.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:my-[9px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:my-[6px] lg:w-[15px] my-[8px] object-contain w-[20px] xl:h-[18px] xl:my-[7px] xl:w-[17px]"
                    alt="Navigation"
                  />
                </Row>
              </Column>
              <Text className="2xl:leading-lh96 2xl:tracking-ls31 3xl:leading-lh115 3xl:mt-[168px] 3xl:text-fs96 3xl:tracking-ls31 font-bold leading-lh9600 lg:leading-lh74 lg:mt-[108px] lg:text-fs62 lg:tracking-ls21 mt-[140px] self-stretch text-fs80 text-left text-white_A700 tracking-ls23529410362243652 w-[100%] xl:leading-lh85 xl:mt-[124px] xl:text-fs71 xl:tracking-ls31">
                {
                  <>
                    {`Grow your brand `}
                    <br />
                    {`through digital`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mr-[7px] lg:mt-[18px] lg:text-fs14 mr-[10px] mt-[24px] text-fs18 text-left text-white_A700 w-[88%] xl:leading-lh24 xl:mr-[8px] xl:mt-[21px] xl:text-fs16">
                {
                  <>
                    {`If the path is beautiful, let us not ask where `}
                    <br />
                    {`it leads. my religion is very simple. my `}
                    <br />
                    {`religion is kindness. each of us has within `}
                    <br />
                    {`our power the ability to disrupt.`}
                  </>
                }
              </Text>
              <Stack className="2xl:h-[53px] 3xl:h-[63px] 3xl:mr-[12px] 3xl:mt-[67px] h-[52px] lg:h-[41px] lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[35%] xl:h-[47px] xl:mr-[8px] xl:mt-[49px]">
                <Image
                  src="img_placeholder_8.svg"
                  className="2xl:h-[51px] 3xl:h-[61px] absolute bottom-[2px] h-[50px] inset-x-[0] lg:bottom-[1px] lg:h-[39px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[45px]"
                  alt="Placeholder"
                />
                <Stack className="2xl:h-[27px] 3xl:h-[32px] 3xl:left-[30px] absolute font-heebo h-[26px] inset-y-[0] left-[25px] lg:h-[21px] lg:left-[19px] my-[auto] w-[61%] xl:h-[24px] xl:left-[22px]">
                  <Text className="3xl:text-fs21 absolute font-normal left-[0] lg:text-fs14 text-fs18 text-indigo_A400 text-left xl:text-fs16">{`Learn More`}</Text>
                  <Image
                    src="img_iconsrightarr.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute bottom-[0] h-[24px] lg:h-[19px] lg:w-[18px] object-contain right-[0] w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="Iconsrightarr"
                  />
                </Stack>
              </Stack>
            </Column>
          </Stack>
          <List
            className="3xl:gap-[32px] 3xl:mt-[175px] flex-wrap gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:mt-[113px] min-h-[auto] mt-[146px] mx-[auto] w-[77%] xl:gap-[24px] xl:mt-[129px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-heebo justify-center shadow-bs39 w-[100%]">
              <Image
                src="img_iconscomputer.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[48px] 3xl:mx-[48px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:mt-[31px] lg:mx-[31px] lg:w-[37px] mt-[40px] mx-[40px] object-contain w-[48px] xl:h-[43px] xl:mt-[35px] xl:mx-[35px] xl:w-[42px]"
                alt="IconsComputer"
              />
              <Text className="3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:mx-[31px] lg:text-fs21 mt-[16px] mx-[40px] text-bluegray_912 text-fs28 text-left xl:mt-[14px] xl:mx-[35px] xl:text-fs24">{`Fast`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mb-[76px] 3xl:mt-[39px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mb-[49px] lg:mt-[25px] lg:mx-[31px] lg:text-fs14 mb-[64px] mt-[33px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[69%] xl:leading-lh24 xl:mb-[56px] xl:mt-[29px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_205 border-solid font-heebo justify-center w-[100%]">
              <Image
                src="img_iconscomputer.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[48px] 3xl:mx-[48px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:mt-[31px] lg:mx-[31px] lg:w-[37px] mt-[40px] mx-[40px] object-contain w-[48px] xl:h-[43px] xl:mt-[35px] xl:mx-[35px] xl:w-[42px]"
                alt="IconsEfficient"
              />
              <Text className="3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:mx-[31px] lg:text-fs21 mt-[16px] mx-[40px] text-bluegray_912 text-fs28 text-left xl:mt-[14px] xl:mx-[35px] xl:text-fs24">{`Efficient`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mb-[78px] 3xl:mt-[38px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mb-[50px] lg:mt-[24px] lg:mx-[31px] lg:text-fs14 mb-[65px] mt-[32px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[69%] xl:leading-lh24 xl:mb-[57px] xl:mt-[28px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_205 border-solid font-heebo justify-center w-[100%]">
              <Image
                src="img_iconscomputer.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[48px] 3xl:mx-[48px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:mt-[31px] lg:mx-[31px] lg:w-[37px] mt-[40px] mx-[40px] object-contain w-[48px] xl:h-[43px] xl:mt-[35px] xl:mx-[35px] xl:w-[42px]"
                alt="IconsStrategy"
              />
              <Text className="3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:mx-[31px] lg:text-fs21 mt-[16px] mx-[40px] text-bluegray_912 text-fs28 text-left xl:mt-[14px] xl:mx-[35px] xl:text-fs24">{`Strategy`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mb-[78px] 3xl:mt-[38px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mb-[50px] lg:mt-[24px] lg:mx-[31px] lg:text-fs14 mb-[65px] mt-[32px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[69%] xl:leading-lh24 xl:mb-[57px] xl:mt-[28px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
            </Column>
            <Column className="bg-white_A700 border border-gray_205 border-solid font-heebo justify-center w-[100%]">
              <Image
                src="img_iconscomputer.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[48px] 3xl:mx-[48px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:mt-[31px] lg:mx-[31px] lg:w-[37px] mt-[40px] mx-[40px] object-contain w-[48px] xl:h-[43px] xl:mt-[35px] xl:mx-[35px] xl:w-[42px]"
                alt="IconsStrategy"
              />
              <Text className="3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:mx-[31px] lg:text-fs21 mt-[16px] mx-[40px] text-bluegray_912 text-fs28 text-left xl:mt-[14px] xl:mx-[35px] xl:text-fs24">{`Reliable`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mb-[78px] 3xl:mt-[38px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mb-[50px] lg:mt-[24px] lg:mx-[31px] lg:text-fs14 mb-[65px] mt-[32px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[69%] xl:leading-lh24 xl:mb-[57px] xl:mt-[28px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
            </Column>
          </List>
          <Row className="3xl:mt-[163px] font-heebo items-center justify-start lg:mt-[105px] mt-[136px] mx-[auto] w-[77%] xl:mt-[120px]">
            <Text className="3xl:text-fs40 font-black lg:text-fs26 text-black_900 text-fs34 text-left xl:text-fs30">{`Our Projects`}</Text>
            <Text className="2xl:ml-[785px] 3xl:mb-[16px] 3xl:ml-[941px] 3xl:mt-[21px] 3xl:text-fs15 font-normal lg:mb-[10px] lg:ml-[610px] lg:mt-[14px] lg:text-fs10 mb-[14px] ml-[784.5px] mt-[18px] text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:mb-[12px] xl:ml-[697px] xl:mt-[16px] xl:text-fs11">{`Explore All`}</Text>
            <Image
              src="img_iconsrightarr_1.svg"
              className="2xl:h-[25px] 2xl:ml-[19px] 3xl:h-[29px] 3xl:mb-[15px] 3xl:ml-[23px] 3xl:mt-[16px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[15px] lg:my-[10px] lg:w-[18px] mb-[13px] ml-[19.5px] mt-[14px] object-contain w-[24px] xl:h-[22px] xl:mb-[11px] xl:ml-[17px] xl:mt-[12px] xl:w-[21px]"
              alt="Iconsrightarr"
            />
          </Row>
        </Column>
        <Row className="3xl:mt-[57px] 3xl:mx-[195px] items-center justify-start lg:mt-[37px] lg:mx-[126px] mt-[48px] mx-[163px] w-[49%] xl:mt-[42px] xl:mx-[145px]">
          <Line className="3xl:mb-[8px] 3xl:mt-[9px] h-[4px] lg:mb-[5px] lg:mt-[6px] mb-[7px] mt-[8px] w-[9%] xl:mb-[6px] xl:mt-[7px]" />
          <Text className="3xl:ml-[68px] 3xl:text-fs15 font-normal lg:ml-[44px] lg:text-fs10 ml-[57px] text-bluegray_913 text-center text-fs13 tracking-ls1 uppercase xl:ml-[50px] xl:text-fs11">{`All pages`}</Text>
          <Text className="3xl:ml-[68px] 3xl:text-fs15 font-normal lg:ml-[44px] lg:text-fs10 ml-[57px] opacity-op6 text-bluegray_900_90 text-center text-fs13 tracking-ls1 uppercase xl:ml-[50px] xl:text-fs11">{`Digital Marketing`}</Text>
          <Text className="3xl:ml-[67px] 3xl:text-fs15 font-normal lg:ml-[43px] lg:text-fs10 ml-[56px] opacity-op6 text-bluegray_900_90 text-center text-fs13 tracking-ls1 uppercase xl:ml-[49px] xl:text-fs11">{`App Development`}</Text>
          <Text className="3xl:ml-[69px] 3xl:text-fs15 font-normal lg:ml-[45px] lg:text-fs10 ml-[58px] opacity-op6 text-bluegray_900_90 text-center text-fs13 tracking-ls1 uppercase xl:ml-[51px] xl:text-fs11">{`Website`}</Text>
        </Row>
        <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Image
            src="img_images.svg"
            className="2xl:h-[734px] 3xl:h-[881px] h-[733px] lg:h-[571px] mx-[auto] object-contain w-[77%] xl:h-[653px]"
            alt="Images"
          />
          <Row className="3xl:mt-[163px] items-center justify-evenly lg:mt-[105px] mt-[136px] px-[0] self-stretch w-[100%] xl:mt-[120px]">
            <Stack className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] w-[49%] xl:h-[445px]">
              <Image
                src="img_colorprimary.svg"
                className="2xl:h-[501px] 3xl:h-[601px] absolute h-[500px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[445px]"
                alt="ColorPrimary"
              />
              <Column className="3xl:right-[100px] absolute font-heebo h-[max-content] inset-y-[0] justify-start lg:right-[65px] my-[auto] right-[84px] w-[65%] xl:right-[74px]">
                <Text className="2xl:leading-lh51 3xl:leading-lh61 3xl:mr-[12px] 3xl:text-fs40 font-normal leading-lh5100 lg:leading-lh39 lg:mr-[7px] lg:text-fs26 mr-[10px] text-fs34 text-left text-white_A700 w-[71%] xl:leading-lh45 xl:mr-[8px] xl:text-fs30">
                  {
                    <>
                      {`The thing about us is `}
                      <br />
                      {`we think big, huge`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh37 3xl:leading-lh44 3xl:mt-[42px] 3xl:text-fs21 font-normal leading-lh3700 lg:leading-lh28 lg:mt-[27px] lg:text-fs14 mt-[35px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[31px] xl:text-fs16">
                  {
                    <>
                      {`• If the path is beautiful, let us not ask where it leads`}
                      <br />
                      {`• my religion is very simple. my religion is kindness`}
                      <br />
                      {`• each of us has within our power the ability to disrupt`}
                    </>
                  }
                </Text>
                <Text className="3xl:mt-[43px] 3xl:mx-[13px] 3xl:px-[20px] 3xl:py-[15px] 3xl:text-fs21 border border-solid border-white_A700 font-normal leading-lh lg:mt-[28px] lg:mx-[8px] lg:px-[13px] lg:py-[10px] lg:text-fs14 mt-[36px] mx-[11px] px-[17px] py-[13px] text-center text-fs18 text-white_A700 w-[34%] xl:mt-[32px] xl:mx-[9px] xl:px-[15px] xl:py-[11px] xl:text-fs16">{`Learn More`}</Text>
              </Column>
            </Stack>
            <Image
              src="img_video.svg"
              className="2xl:h-[501px] 3xl:h-[601px] h-[500px] lg:h-[389px] object-contain w-[51%] xl:h-[445px]"
              alt="Video"
            />
          </Row>
          <Stack className="2xl:h-[953px] 3xl:h-[1144px] h-[952px] lg:h-[741px] self-stretch w-[100%] xl:h-[847px]">
            <Stack className="2xl:h-[953px] 3xl:h-[1144px] absolute h-[952px] inset-[0] lg:h-[741px] self-stretch w-[100%] xl:h-[847px]">
              <Image
                src="img_background_43.svg"
                className="2xl:h-[953px] 3xl:h-[1144px] absolute h-[952px] inset-[0] lg:h-[741px] object-cover opacity-op51 self-stretch w-[100%] xl:h-[847px]"
                alt="Background"
              />
              <List
                className="3xl:bottom-[171px] 3xl:gap-[32px] absolute bottom-[143px] flex-wrap gap-[27px] grid grid-cols-3 lg:bottom-[111px] lg:gap-[21px] min-h-[auto] right-[0] w-[89%] xl:bottom-[127px] xl:gap-[24px]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 border border-gray_102 border-solid items-center justify-start shadow-bs39 w-[100%]">
                  <Stack className="2xl:h-[298px] 3xl:h-[357px] font-heebo h-[297px] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                    <Stack className="2xl:h-[298px] 3xl:h-[357px] absolute h-[297px] inset-[0] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                      <Image
                        src="img_working1.png"
                        className="2xl:h-[281px] 3xl:h-[337px] absolute h-[280px] lg:h-[218px] object-cover self-stretch top-[0] w-[100%] xl:h-[250px]"
                        alt="working1"
                      />
                      <Image
                        src="img_colorprimary_1.svg"
                        className="2xl:h-[35px] 3xl:h-[41px] 3xl:left-[48px] absolute bottom-[0] h-[34px] left-[40px] lg:h-[27px] lg:left-[31px] object-contain w-[25%] xl:h-[31px] xl:left-[35px]"
                        alt="ColorPrimary"
                      />
                    </Stack>
                    <Text className="3xl:bottom-[10px] 3xl:left-[64px] 3xl:text-fs15 absolute bottom-[9px] font-normal left-[54px] lg:bottom-[7px] lg:left-[42px] lg:text-fs10 text-fs13 text-left text-white_A700 xl:bottom-[8px] xl:left-[48px] xl:text-fs11">{`Management`}</Text>
                  </Stack>
                  <Column className="3xl:mb-[38px] 3xl:mt-[32px] font-heebo justify-start lg:mb-[24px] lg:mt-[21px] mb-[32px] mt-[27px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[24px]">
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[48px] 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[31px] lg:text-fs18 mx-[40px] text-bluegray_912 text-fs24 text-left w-[82%] xl:leading-lh28 xl:mx-[35px] xl:text-fs21">{`Artistic growth is, more than it is anything else`}</Text>
                    <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[12px] lg:mx-[31px] lg:text-fs14 mt-[16px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[77%] xl:leading-lh24 xl:mt-[14px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="font-heebo justify-between px-[0] self-stretch w-[100%]">
                        <Text className="3xl:ml-[48px] 3xl:text-fs21 font-normal lg:ml-[31px] lg:text-fs14 ml-[40px] text-blue_601 text-fs18 text-left xl:ml-[35px] xl:text-fs16">{`Read more`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:mr-[48px] 3xl:text-fs15 font-normal lg:mb-[6px] lg:mr-[31px] lg:mt-[2px] lg:text-fs10 mb-[8px] mr-[40px] mt-[3px] text-center text-fs13 text-gray_402 xl:mb-[7px] xl:mr-[35px] xl:mt-[2px] xl:text-fs11">{`Thursday, 26 March 2020`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_102 border-solid items-center justify-start w-[100%]">
                  <Stack className="2xl:h-[298px] 3xl:h-[357px] font-heebo h-[297px] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                    <Stack className="2xl:h-[298px] 3xl:h-[357px] absolute h-[297px] inset-[0] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                      <Image
                        src="img_working1.png"
                        className="2xl:h-[281px] 3xl:h-[337px] absolute h-[280px] lg:h-[218px] object-cover self-stretch top-[0] w-[100%] xl:h-[250px]"
                        alt="working1"
                      />
                      <Image
                        src="img_colorprimary_2.svg"
                        className="2xl:h-[35px] 3xl:h-[41px] 3xl:left-[48px] absolute bottom-[0] h-[34px] left-[40px] lg:h-[27px] lg:left-[31px] object-contain w-[15%] xl:h-[31px] xl:left-[35px]"
                        alt="ColorPrimary"
                      />
                    </Stack>
                    <Text className="3xl:bottom-[10px] 3xl:left-[64px] 3xl:text-fs15 absolute bottom-[9px] font-normal left-[54px] lg:bottom-[7px] lg:left-[42px] lg:text-fs10 text-fs13 text-left text-white_A700 xl:bottom-[8px] xl:left-[48px] xl:text-fs11">{`Team`}</Text>
                  </Stack>
                  <Column className="3xl:mb-[38px] 3xl:mt-[32px] font-heebo justify-start lg:mb-[24px] lg:mt-[21px] mb-[32px] mt-[27px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[24px]">
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[48px] 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[31px] lg:text-fs18 mx-[40px] text-bluegray_912 text-fs24 text-left w-[82%] xl:leading-lh28 xl:mx-[35px] xl:text-fs21">{`Artistic growth is, more than it is anything else`}</Text>
                    <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[19px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[12px] lg:mx-[31px] lg:text-fs14 mt-[16px] mx-[40px] text-bluegray_912 text-fs18 text-left w-[77%] xl:leading-lh24 xl:mt-[14px] xl:mx-[35px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="font-heebo justify-between px-[0] self-stretch w-[100%]">
                        <Text className="3xl:ml-[48px] 3xl:text-fs21 font-normal lg:ml-[31px] lg:text-fs14 ml-[40px] text-blue_601 text-fs18 text-left xl:ml-[35px] xl:text-fs16">{`Read more`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:mr-[48px] 3xl:text-fs15 font-normal lg:mb-[6px] lg:mr-[31px] lg:mt-[2px] lg:text-fs10 mb-[8px] mr-[40px] mt-[3px] text-center text-fs13 text-gray_402 xl:mb-[7px] xl:mr-[35px] xl:mt-[2px] xl:text-fs11">{`Thursday, 06 March 2020`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 border border-gray_102 border-solid items-center justify-start w-[100%]">
                  <Stack className="2xl:h-[298px] 3xl:h-[357px] font-heebo h-[297px] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                    <Stack className="2xl:h-[298px] 3xl:h-[357px] absolute h-[297px] inset-[0] lg:h-[231px] self-stretch w-[100%] xl:h-[265px]">
                      <Image
                        src="img_working1.png"
                        className="2xl:h-[281px] 3xl:h-[337px] absolute h-[280px] lg:h-[218px] object-cover self-stretch top-[0] w-[100%] xl:h-[250px]"
                        alt="working1"
                      />
                      <Image
                        src="img_colorprimary_1.svg"
                        className="2xl:h-[35px] 3xl:h-[41px] 3xl:left-[48px] absolute bottom-[0] h-[34px] left-[40px] lg:h-[27px] lg:left-[31px] object-contain w-[34%] xl:h-[31px] xl:left-[35px]"
                        alt="ColorPrimary"
                      />
                    </Stack>
                    <Text className="3xl:bottom-[10px] 3xl:left-[64px] 3xl:text-fs15 absolute bottom-[9px] font-normal left-[54px] lg:bottom-[7px] lg:left-[42px] lg:text-fs10 text-fs13 text-left text-white_A700 xl:bottom-[8px] xl:left-[48px] xl:text-fs11">{`Management`}</Text>
                  </Stack>
                  <Column className="3xl:mb-[38px] 3xl:mt-[32px] font-heebo justify-start lg:mb-[24px] lg:mt-[21px] mb-[32px] mt-[27px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[24px]">
                    <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[48px] 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[31px] lg:text-fs18 ml-[40px] text-bluegray_912 text-fs24 text-left w-[88%] xl:leading-lh28 xl:ml-[35px] xl:text-fs21">{`Artistic growth is, more than it is anything else`}</Text>
                    <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:ml-[48px] 3xl:mt-[19px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:ml-[31px] lg:mt-[12px] lg:text-fs14 ml-[40px] mt-[16px] text-bluegray_912 text-fs18 text-left w-[88%] xl:leading-lh24 xl:ml-[35px] xl:mt-[14px] xl:text-fs16">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="font-heebo justify-between px-[0] self-stretch w-[100%]">
                        <Text className="3xl:ml-[48px] 3xl:text-fs21 font-normal lg:ml-[31px] lg:text-fs14 ml-[40px] text-blue_601 text-fs18 text-left xl:ml-[35px] xl:text-fs16">{`Read more`}</Text>
                        <Text className="3xl:mb-[9px] 3xl:text-fs15 font-normal lg:mb-[6px] lg:mt-[2px] lg:text-fs10 mb-[8px] mt-[3px] text-center text-fs13 text-gray_402 xl:mb-[7px] xl:mt-[2px] xl:text-fs11">{`Thursday, 26 March 2020`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </List>
            </Stack>
            <Row className="3xl:top-[163px] absolute font-heebo inset-x-[0] items-center justify-start lg:top-[105px] mx-[auto] top-[136px] w-[77%] xl:top-[120px]">
              <Text className="3xl:text-fs40 font-black lg:text-fs26 text-black_900 text-fs34 text-left xl:text-fs30">{`Blogs`}</Text>
              <Image
                src="img_iconsrightarr_2.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[15px] 3xl:ml-[1115px] 3xl:mt-[16px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[722px] lg:my-[10px] lg:w-[18px] mb-[13px] ml-[929px] mt-[14px] object-contain w-[24px] xl:h-[22px] xl:mb-[11px] xl:ml-[826px] xl:mt-[12px] xl:w-[21px]"
                alt="Iconsrightarr"
              />
              <Stack className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[28px] 3xl:w-[57px] bg-white_A700 border border-gray_102 border-solid h-[48px] lg:h-[38px] lg:ml-[18px] lg:mt-[1px] lg:w-[37px] mb-[1px] ml-[24px] mt-[2px] shadow-bs39 w-[48px] xl:h-[43px] xl:ml-[21px] xl:mt-[1px] xl:w-[42px]">
                <Image
                  src="img_iconsrightarr_3.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="Iconsrightarr"
                />
              </Stack>
            </Row>
          </Stack>
        </Column>
        <Text className="3xl:mt-[163px] 3xl:mx-[195px] 3xl:text-fs40 font-black lg:mt-[105px] lg:mx-[126px] lg:text-fs26 mt-[136px] mx-[163px] text-black_900 text-fs34 text-left xl:mt-[120px] xl:mx-[145px] xl:text-fs30">{`Our Creative Team`}</Text>
        <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="items-center justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[259px] 3xl:h-[310px] 3xl:ml-[195px] 3xl:w-[309px] bg-bluegray_103 h-[258px] lg:h-[201px] lg:ml-[126px] lg:w-[200px] ml-[163px] w-[258px] xl:h-[230px] xl:ml-[145px] xl:w-[229px]">
                <Image
                  src="img_colorprimary_3.svg"
                  className="2xl:h-[259px] 3xl:h-[310px] 3xl:w-[309px] absolute h-[258px] inset-[0] lg:h-[201px] lg:w-[200px] object-cover opacity-op85786366 self-stretch w-[258px] xl:h-[230px] xl:w-[229px]"
                  alt="ColorPrimary"
                />
                <Column className="absolute font-heebo h-[max-content] inset-[0] items-center justify-center m-[auto] w-[36%]">
                  <Text className="3xl:text-fs19 font-black lg:text-fs12 mx-[auto] self-stretch text-center text-fs16 text-white_A700 xl:text-fs14">{`Tiara Lyodra`}</Text>
                  <Text className="3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mt-[3px] lg:text-fs10 mt-[5px] mx-[auto] text-center text-fs13 text-white_A700 xl:mt-[4px] xl:text-fs11">{`Co-Founder`}</Text>
                  <Row className="3xl:mt-[30px] justify-evenly lg:mt-[19px] mt-[25px] px-[0] self-stretch w-[100%] xl:mt-[22px]">
                    <Image
                      src="img_iconsocialfac.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] h-[14px] lg:h-[11px] mb-[1px] object-contain w-[9%] xl:h-[13px]"
                      alt="iconSocialFac"
                    />
                    <Image
                      src="img_iconsocialgoo.svg"
                      className="2xl:h-[14px] 3xl:h-[16px] 3xl:w-[15px] h-[13px] lg:h-[11px] lg:w-[10px] my-[1px] object-contain w-[13px] xl:h-[12px] xl:w-[11px]"
                      alt="iconSocialGoo"
                    />
                    <Image
                      src="img_iconsocialins.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:w-[10px] mt-[1px] object-contain w-[14px] xl:h-[13px] xl:w-[12px]"
                      alt="iconSocialIns"
                    />
                  </Row>
                </Column>
              </Stack>
              <List
                className="3xl:gap-[32px] 3xl:ml-[32px] 3xl:mr-[196px] flex-wrap gap-[27px] grid grid-cols-3 lg:gap-[21px] lg:ml-[21px] lg:mr-[127px] min-h-[auto] ml-[27px] mr-[164px] w-[57%] xl:gap-[24px] xl:ml-[24px] xl:mr-[145px]"
                orientation="horizontal"
              >
                <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                  <Image
                    src="img_person1.svg"
                    className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                    alt="person1"
                  />
                  <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Clyde Tyler`}</Text>
                  <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Head of Product`}</Text>
                </Column>
                <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                  <Image
                    src="img_person1_1.svg"
                    className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                    alt="person1"
                  />
                  <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Mamie Harris`}</Text>
                  <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Motion Designer`}</Text>
                </Column>
                <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                  <Image
                    src="img_person1_2.svg"
                    className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                    alt="person1"
                  />
                  <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Franklin Hogan`}</Text>
                  <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Designer`}</Text>
                </Column>
              </List>
            </Row>
            <List
              className="3xl:gap-[32px] 3xl:mt-[34px] flex-wrap gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:mt-[22px] min-h-[auto] mt-[29px] mx-[auto] w-[77%] xl:gap-[24px] xl:mt-[25px]"
              orientation="horizontal"
            >
              <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                <Image
                  src="img_person1_3.svg"
                  className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                  alt="person1"
                />
                <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Bobby Harmon`}</Text>
                <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Front-End-Developer`}</Text>
              </Column>
              <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                <Image
                  src="img_person1_4.svg"
                  className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                  alt="person1"
                />
                <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Landon Fitzgerald`}</Text>
                <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`UX`}</Text>
              </Column>
              <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                <Image
                  src="img_person1_5.svg"
                  className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                  alt="person1"
                />
                <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Bessie Barker`}</Text>
                <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Developer`}</Text>
              </Column>
              <Column className="border border-gray_301 border-solid font-heebo items-center justify-end w-[100%]">
                <Image
                  src="img_person1_6.svg"
                  className="2xl:h-[131px] 3xl:h-[157px] 3xl:mt-[43px] 3xl:w-[156px] h-[130px] lg:h-[102px] lg:mt-[28px] lg:w-[101px] mt-[36px] mx-[auto] object-contain w-[130px] xl:h-[116px] xl:mt-[32px] xl:w-[115px]"
                  alt="person1"
                />
                <Text className="3xl:mt-[31px] 3xl:text-fs19 font-black lg:mt-[20px] lg:text-fs12 mt-[26px] mx-[auto] text-black_900 text-center text-fs16 xl:mt-[23px] xl:text-fs14">{`Derrick Hubbard`}</Text>
                <Text className="3xl:mb-[25px] 3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mb-[16px] lg:mt-[3px] lg:text-fs10 mb-[21px] mt-[5px] mx-[auto] text-center text-fs13 text-gray_610 xl:mb-[18px] xl:mt-[4px] xl:text-fs11">{`Front-End-Developer`}</Text>
              </Column>
            </List>
          </Column>
          <Stack className="2xl:h-[1887px] 3xl:h-[2264px] 3xl:mt-[163px] h-[1885px] lg:h-[1467px] lg:mt-[105px] mt-[136px] self-stretch w-[100%] xl:h-[1677px] xl:mt-[120px]">
            <Stack className="2xl:h-[1887px] 3xl:h-[2264px] absolute h-[1885px] inset-[0] lg:h-[1467px] self-stretch w-[100%] xl:h-[1677px]">
              <div className="absolute bottom-[0] self-stretch w-[100%]">
                <Stack className="2xl:h-[1311px] 3xl:h-[1573px] h-[1310px] lg:h-[1019px] self-stretch w-[100%] xl:h-[1166px]">
                  <Stack className="2xl:h-[1311px] 3xl:h-[1573px] absolute h-[1310px] inset-[0] lg:h-[1019px] self-stretch w-[100%] xl:h-[1166px]">
                    <div className="2xl:h-[679px] 3xl:h-[815px] absolute bg-black_900_0d h-[678px] lg:h-[528px] self-stretch top-[0] w-[100%] xl:h-[604px]"></div>
                    <Image
                      src="img_background_44.svg"
                      className="2xl:h-[709px] 3xl:h-[851px] absolute bottom-[0] h-[708px] lg:h-[551px] object-cover self-stretch w-[100%] xl:h-[630px]"
                      alt="Background"
                    />
                  </Stack>
                  <Column className="3xl:bottom-[48px] absolute bottom-[40px] inset-x-[0] justify-start lg:bottom-[31px] mx-[auto] w-[77%] xl:bottom-[35px]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="justify-evenly px-[0] self-stretch w-[100%]">
                        <Column className="font-heebo justify-start w-[32%]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs40 font-black lg:mr-[7px] lg:text-fs26 mr-[10px] text-fs34 text-left text-white_A700 xl:mr-[8px] xl:text-fs30">{`.alpha`}</Text>
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[94px] 3xl:mt-[24px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[61px] lg:mt-[15px] lg:text-fs11 mb-[79px] mt-[20px] self-stretch text-fs15 text-left text-white_A700 w-[100%] xl:leading-lh21 xl:mb-[70px] xl:mt-[17px] xl:text-fs13">{`Funding freemium long tail hypotheses first mover advantage assets ownership niche market startup investor. Burn rate termsheet leverage backing stock channels long tail twitter conversion. Customer founders growth hacking ecosystem value proposition direct mailing graphical user interface innovator stock. Startup scrum project bootstrapping advisor infographic agile development bandwidth. Strategy ownership non-disclosure agreement learning curve entrepreneur niche market graphical user interface creative advisor hypotheses. Venture twitter assets disruptive partnership paradigm shift business-to-consumer.`}</Text>
                        </Column>
                        <Column className="3xl:mb-[90px] 3xl:mt-[6px] font-heebo justify-start lg:mb-[58px] lg:mt-[3px] mb-[75px] mt-[5px] w-[17%] xl:mb-[66px] xl:mt-[4px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Services`}</Text>
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[2px] lg:text-fs11 mt-[3px] mx-[1px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh21 xl:mt-[2px] xl:text-fs13">
                            {
                              <>
                                {`Digital Marketing`}
                                <br />
                                {`Branding`}
                                <br />
                                {`Market Promotion`}
                                <br />
                                {`Digital Campaign`}
                              </>
                            }
                          </Text>
                        </Column>
                        <Column className="3xl:mb-[90px] 3xl:mt-[6px] font-heebo justify-start lg:mb-[58px] lg:mt-[3px] mb-[75px] mt-[5px] w-[17%] xl:mb-[66px] xl:mt-[4px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`About Us`}</Text>
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[2px] lg:text-fs11 mt-[3px] mx-[1px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh21 xl:mt-[2px] xl:text-fs13">
                            {
                              <>
                                {`Milestone`}
                                <br />
                                {`Check Our Pricing Plan`}
                                <br />
                                {`Expert Team`}
                                <br />
                                {`Our Exciting News`}
                              </>
                            }
                          </Text>
                        </Column>
                        <Column className="3xl:mb-[42px] 3xl:mt-[6px] font-heebo justify-start lg:mb-[27px] lg:mt-[3px] mb-[35px] mt-[5px] w-[17%] xl:mb-[31px] xl:mt-[4px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Address`}</Text>
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[15px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[10px] lg:text-fs11 mt-[13px] mx-[1px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh21 xl:mt-[11px] xl:text-fs13">
                            {
                              <>
                                {`123 Lorem Ipsum Street`}
                                <br />
                                {`Jakarta, Indonesia`}
                              </>
                            }
                          </Text>
                          <Image
                            src="img_socialbutton.svg"
                            className="2xl:h-[41px] 3xl:h-[49px] 3xl:mr-[12px] 3xl:mt-[45px] h-[40px] lg:h-[32px] lg:mr-[7px] lg:mt-[29px] ml-[1px] mr-[10px] mt-[38px] object-contain w-[76%] xl:h-[36px] xl:mr-[8px] xl:mt-[33px]"
                            alt="SocialButton"
                          />
                        </Column>
                      </Row>
                    </Column>
                    <Row className="3xl:mt-[34px] font-heebo items-center justify-evenly lg:mt-[22px] mt-[29px] px-[0] self-stretch w-[100%] xl:mt-[25px]">
                      <Image
                        src="img_fill1.svg"
                        className="2xl:h-[11px] 2xl:mb-[7px] 3xl:h-[13px] 3xl:mb-[9px] 3xl:mt-[10px] h-[10.29px] lg:h-[9px] lg:mb-[5px] lg:mt-[7px] mb-[7.709961px] mt-[9px] object-contain w-[1%] xl:h-[10px] xl:mb-[6px] xl:mt-[8px]"
                        alt="Fill1"
                      />
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 mb-[1px] text-fs18 text-left text-white_A700 xl:text-fs16">{`agensi@mail.com`}</Text>
                    </Row>
                    <Row className="3xl:mt-[12px] font-heebo items-end justify-evenly lg:mt-[7px] mt-[10px] px-[0] self-stretch w-[100%] xl:mt-[8px]">
                      <Image
                        src="img_fill1_1.svg"
                        className="2xl:h-[16px] 2xl:mb-[3px] 2xl:w-[15px] 3xl:h-[19px] 3xl:mb-[3px] 3xl:mt-[9px] 3xl:w-[18px] h-[15.68px] lg:h-[13px] lg:mb-[2px] lg:mt-[6px] lg:w-[12px] mb-[3.3198242px] mt-[8px] object-contain w-[15.68px] xl:h-[14px] xl:mb-[2px] xl:mt-[7px] xl:w-[13px]"
                        alt="Fill1"
                      />
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 mb-[1px] text-fs18 text-left text-white_A700 xl:text-fs16">{`+ 12 3456 7890`}</Text>
                    </Row>
                  </Column>
                </Stack>
              </div>
              <Image
                src="img_background_45.svg"
                className="2xl:h-[941px] 3xl:bottom-[24px] 3xl:h-[1129px] 3xl:top-[587px] absolute bottom-[20px] h-[940px] inset-x-[0] lg:bottom-[15px] lg:h-[732px] lg:top-[380px] object-cover self-stretch top-[489px] w-[100%] xl:bottom-[17px] xl:h-[837px] xl:top-[435px]"
                alt="background"
              />
              <Image
                src="img_background_46.svg"
                className="2xl:h-[490px] 3xl:h-[588px] absolute h-[489px] lg:h-[381px] object-cover opacity-op51 self-stretch top-[0] w-[100%] xl:h-[436px]"
                alt="background"
              />
              <Image
                src="img_08clients.svg"
                className="2xl:h-[177px] 3xl:h-[212px] 3xl:top-[481px] absolute h-[176px] inset-x-[0] lg:h-[137px] lg:top-[311px] mx-[auto] object-contain top-[401px] w-[77%] xl:h-[157px] xl:top-[356px]"
                alt="08Clients"
              />
            </Stack>
            <Column className="3xl:top-[157px] absolute inset-x-[0] items-center justify-start lg:top-[101px] mx-[auto] top-[131px] w-[77%] xl:top-[116px]">
              <Row className="font-heebo justify-start self-stretch w-[100%]">
                <Column className="3xl:mb-[19px] 3xl:ml-[153px] items-center justify-start lg:mb-[12px] lg:ml-[99px] mb-[16px] ml-[128px] w-[23%] xl:mb-[14px] xl:ml-[113px]">
                  <Text className="3xl:text-fs72 font-black lg:text-fs46 mx-[auto] self-stretch text-blue_601 text-center text-fs60 xl:text-fs53">{`124`}</Text>
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:text-fs18 self-stretch text-bluegray_912 text-center text-fs24 w-[100%] xl:leading-lh28 xl:text-fs21">
                    {
                      <>
                        {`Complete `}
                        <br />
                        {`Projects`}
                      </>
                    }
                  </Text>
                </Column>
                <Line className="2xl:h-[177px] 3xl:h-[212px] 3xl:ml-[14px] h-[176px] lg:h-[137px] lg:ml-[9px] ml-[12px] w-[2px] xl:h-[157px] xl:ml-[10px]" />
                <Column className="3xl:mb-[19px] 3xl:ml-[15px] items-center justify-start lg:mb-[12px] lg:ml-[10px] mb-[16px] ml-[13px] w-[23%] xl:mb-[14px] xl:ml-[11px]">
                  <Text className="3xl:text-fs72 font-black lg:text-fs46 mx-[auto] self-stretch text-blue_601 text-center text-fs60 xl:text-fs53">{`99%`}</Text>
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:text-fs18 self-stretch text-bluegray_912 text-center text-fs24 w-[100%] xl:leading-lh28 xl:text-fs21">
                    {
                      <>
                        {`Satisfied `}
                        <br />
                        {`Clients`}
                      </>
                    }
                  </Text>
                </Column>
                <Line className="2xl:h-[177px] 3xl:h-[212px] 3xl:ml-[15px] h-[176px] lg:h-[137px] lg:ml-[10px] ml-[13px] w-[2px] xl:h-[157px] xl:ml-[11px]" />
                <Column className="3xl:mb-[19px] 3xl:ml-[14px] 3xl:mr-[152px] font-heebo items-center justify-start lg:mb-[12px] lg:ml-[9px] lg:mr-[98px] mb-[16px] ml-[12px] mr-[127px] w-[26%] xl:mb-[14px] xl:ml-[10px] xl:mr-[112px]">
                  <Text className="3xl:text-fs72 font-black lg:text-fs46 mx-[auto] text-blue_601 text-center text-fs60 xl:text-fs53">{`235`}</Text>
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:text-fs28 font-normal leading-lh3200 lg:leading-lh24 lg:text-fs18 self-stretch text-bluegray_912 text-center text-fs24 w-[100%] xl:leading-lh28 xl:text-fs21">
                    {
                      <>
                        {`Success `}
                        <br />
                        {`Campaign`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
              <Row className="3xl:mt-[487px] items-center justify-between lg:mt-[315px] mt-[406px] px-[0] self-stretch w-[100%] xl:mt-[361px]">
                <Row className="font-heebo items-center justify-between px-[0] w-[49%]">
                  <Column className="3xl:mb-[16px] justify-start lg:mb-[10px] mb-[14px] w-[91%] xl:mb-[12px]">
                    <Image
                      src="img_quoteandgraph.svg"
                      className="2xl:h-[146px] 3xl:h-[175px] 3xl:mr-[12px] h-[145px] lg:h-[113px] lg:mr-[7px] mr-[10px] object-contain w-[44%] xl:h-[129px] xl:mr-[8px]"
                      alt="QuoteandGraph"
                    />
                    <Text className="2xl:leading-lh51 3xl:leading-lh61 3xl:mt-[19px] 3xl:text-fs40 font-normal leading-lh5100 lg:leading-lh39 lg:mt-[12px] lg:text-fs26 mt-[16px] self-stretch text-fs34 text-left text-white_A700 w-[100%] xl:leading-lh45 xl:mt-[14px] xl:text-fs30">
                      {
                        <>
                          {`If the path is beautiful, let us not `}
                          <br />
                          {`ask where it leads. my religion `}
                          <br />
                          {`is very simple. my religion `}
                          <br />
                          {`is kindness….`}
                        </>
                      }
                    </Text>
                    <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
                      <Row className="font-heebo justify-start self-stretch w-[100%]">
                        <Column className="items-center justify-start w-[20%]">
                          <Image
                            src="img_person1_7.svg"
                            className="2xl:h-[97px] 3xl:h-[116px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:w-[74px] mr-[1px] object-contain w-[96px] xl:h-[86px] xl:w-[85px]"
                            alt="person1"
                          />
                          <Text className="3xl:mt-[28px] 3xl:text-fs19 font-black lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-white_A700 xl:mt-[21px] xl:text-fs14">{`Mario Garner`}</Text>
                          <Text className="3xl:mt-[6px] 3xl:text-fs15 font-normal lg:mt-[3px] lg:text-fs10 mt-[5px] mx-[auto] text-center text-fs13 text-white_A700 xl:mt-[4px] xl:text-fs11">{`Motion Designer`}</Text>
                        </Column>
                        <Image
                          src="img_people2.svg"
                          className="2xl:h-[97px] 3xl:h-[116px] 3xl:mb-[82px] 3xl:ml-[75px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mb-[53px] lg:ml-[49px] lg:w-[74px] mb-[69px] ml-[63px] object-contain w-[96px] xl:h-[86px] xl:mb-[61px] xl:ml-[56px] xl:w-[85px]"
                          alt="People2"
                        />
                        <Image
                          src="img_people3.svg"
                          className="2xl:h-[97px] 3xl:h-[116px] 3xl:mb-[82px] 3xl:ml-[86px] 3xl:mr-[82px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mb-[53px] lg:ml-[56px] lg:mr-[53px] lg:w-[74px] mb-[69px] ml-[72px] mr-[69px] object-contain w-[96px] xl:h-[86px] xl:mb-[61px] xl:ml-[64px] xl:mr-[61px] xl:w-[85px]"
                          alt="People3"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Line className="2xl:h-[601px] 3xl:h-[721px] h-[600px] lg:h-[467px] w-[2px] xl:h-[534px]" />
                </Row>
                <Column className="3xl:mb-[66px] 3xl:mt-[78px] font-heebo justify-start lg:mb-[42px] lg:mt-[50px] mb-[55px] mt-[65px] w-[49%] xl:mb-[48px] xl:mt-[57px]">
                  <Input
                    className="2xl:py-[22px] 3xl:pl-[24px] 3xl:py-[27px] 3xl:text-fs18 bg-white_A700_70 border-0 font-normal lg:pl-[15px] lg:py-[17px] lg:text-fs11 pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[22.5px] rounded-radius6 self-stretch text-fs15 text-left text-white_A700 w-[100%] xl:pl-[17px] xl:py-[20px] xl:text-fs13"
                    name="inputFiled1"
                    placeholder={`Your full name`}
                  ></Input>
                  <Input
                    className="2xl:py-[22px] 3xl:mt-[36px] 3xl:pl-[24px] 3xl:py-[27px] 3xl:text-fs18 bg-white_A700_70 border-0 font-normal lg:mt-[23px] lg:pl-[15px] lg:py-[17px] lg:text-fs11 mt-[30px] pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[22.5px] rounded-radius6 self-stretch text-fs15 text-left text-white_A700 w-[100%] xl:mt-[26px] xl:pl-[17px] xl:py-[20px] xl:text-fs13"
                    name="inputFiled2"
                    placeholder={`Your e-mail address`}
                  ></Input>
                  <TextArea
                    className="2xl:pb-[39px] 2xl:pt-[22px] 3xl:mt-[36px] 3xl:pb-[47px] 3xl:pl-[24px] 3xl:pt-[27px] 3xl:text-fs18 bg-white_A700_70 border-0 font-normal lg:mt-[23px] lg:pb-[30px] lg:pl-[15px] lg:pt-[17px] lg:text-fs11 mt-[30px] pb-[39.5px] pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 pt-[22.5px] rounded-radius6 self-stretch text-fs15 text-left text-white_A700 w-[100%] xl:mt-[26px] xl:pb-[35px] xl:pl-[17px] xl:pt-[20px] xl:text-fs13"
                    name="inputFiled3"
                    placeholder={`Drop us a message here…`}
                  ></TextArea>
                  <Stack className="2xl:h-[53px] 3xl:h-[63px] 3xl:mr-[12px] 3xl:mt-[57px] h-[52px] lg:h-[41px] lg:mr-[7px] lg:mt-[37px] mr-[10px] mt-[48px] w-[28%] xl:h-[47px] xl:mr-[8px] xl:mt-[42px]">
                    <Image
                      src="img_placeholder_9.svg"
                      className="2xl:h-[51px] 3xl:h-[61px] absolute bottom-[2px] h-[50px] inset-x-[0] lg:bottom-[1px] lg:h-[39px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[1px] xl:h-[45px]"
                      alt="Placeholder"
                    />
                    <Stack className="2xl:h-[27px] 3xl:h-[32px] absolute font-heebo h-[26px] inset-[0] justify-center lg:h-[21px] m-[auto] w-[64%] xl:h-[24px]">
                      <Text className="3xl:text-fs21 absolute font-normal inset-[0] lg:text-fs14 self-stretch text-fs18 text-indigo_A400 text-left xl:text-fs16">{`Submit`}</Text>
                      <Image
                        src="img_iconsrightarr_4.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute bottom-[0] h-[24px] lg:h-[19px] lg:w-[18px] object-contain right-[1px] w-[24px] xl:h-[22px] xl:w-[21px]"
                        alt="Iconsrightarr"
                      />
                    </Stack>
                  </Stack>
                </Column>
              </Row>
            </Column>
          </Stack>
        </Column>
      </Column>
    </Column>
  );
};

export default DigtalAgencyPage;
