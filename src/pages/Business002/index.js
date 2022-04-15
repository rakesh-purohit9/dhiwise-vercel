import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";

const Business002Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Column className="bg-white_A700 font-urbanist items-center justify-center self-stretch w-[100%]">
              <Row className="3xl:mt-[14px] items-center justify-end lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
                <Image
                  src="img_shape_9.svg"
                  className="2xl:h-[17px] 2xl:mb-[12px] 3xl:h-[20px] 3xl:mb-[15px] 3xl:ml-[66px] 3xl:mt-[13px] h-[16.05px] lg:h-[13px] lg:mb-[10px] lg:ml-[42px] lg:mt-[8px] mb-[12.950001px] ml-[55px] mt-[11px] object-contain w-[1%] xl:h-[15px] xl:mb-[11px] xl:ml-[48px] xl:mt-[9px]"
                  alt="Shape"
                />
                <Text className="2xl:ml-[12px] 3xl:ml-[14px] 3xl:my-[10px] 3xl:text-fs21 font-semibold font-urbanist lg:ml-[9px] lg:my-[7px] lg:text-fs14 ml-[12.279999px] my-[9px] text-deep_orange_A400 text-fs18 text-left xl:ml-[10px] xl:my-[8px] xl:text-fs16">{`Your Logo`}</Text>
                <Image
                  src="img_icon_54.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[13px] 3xl:ml-[50px] 3xl:mt-[15px] h-[16px] lg:h-[13px] lg:mb-[8px] lg:ml-[32px] lg:mt-[10px] mb-[11px] ml-[42px] mt-[13px] object-contain w-[1%] xl:h-[15px] xl:mb-[9px] xl:ml-[37px] xl:mt-[11px]"
                  alt="Icon"
                />
                <Text className="3xl:ml-[14px] 3xl:my-[12px] 3xl:text-fs16 font-inter font-normal lg:ml-[9px] lg:my-[7px] lg:text-fs10 ml-[12px] my-[10px] text-fs14 text-gray_911 text-left xl:ml-[10px] xl:my-[8px] xl:text-fs12">{`Categories`}</Text>
                <Column className="3xl:ml-[28px] font-inter items-center justify-start lg:ml-[18px] ml-[24px] rounded-radius8 w-[25%] xl:ml-[21px]">
                  <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                    <Image
                      src="img_icon_55.svg"
                      className="absolute top-[16px] bottom-[14px] left-[20px] bg-transparent border-0 lg:top-[12px] lg:bottom-[10px] lg:left-[15px] xl:top-[14px] xl:bottom-[12px] xl:left-[17px] 3xl:top-[19px] 3xl:bottom-[16px] 3xl:left-[24px]"
                      alt="Icon"
                    />
                    <Input
                      className="3xl:pb-[16px] 3xl:pl-[52px] 3xl:pt-[19px] 3xl:text-fs16 bg-bluegray_200_63 border-0 font-normal lg:pb-[10px] lg:pl-[34px] lg:pt-[12px] lg:text-fs10 pb-[14px] pl-[44px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[16px] rounded-radius8 text-bluegray_403 text-fs14 text-left w-[100%] xl:pb-[12px] xl:pl-[39px] xl:pt-[14px] xl:text-fs12"
                      name="Group459"
                      placeholder={`Search`}
                    ></Input>
                  </div>
                </Column>
                <Image
                  src="img_icon_56.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[443px] 3xl:my-[14px] h-[16px] lg:h-[13px] lg:ml-[287px] lg:my-[9px] ml-[369px] my-[12px] object-contain w-[1%] xl:h-[15px] xl:ml-[328px] xl:my-[10px]"
                  alt="Icon"
                />
                <Row className="3xl:ml-[9px] 3xl:my-[9px] font-inter items-center justify-center lg:ml-[6px] lg:my-[6px] ml-[8px] my-[8px] w-[11%] xl:ml-[7px] xl:my-[7px]">
                  <Text className="3xl:text-fs16 font-normal lg:my-[1px] lg:text-fs10 my-[2px] text-fs14 text-gray_911 text-left xl:my-[1px] xl:text-fs12">{`'+123-456-7890`}</Text>
                  <Line className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[20px] bg-teal_50 h-[24px] lg:h-[19px] lg:ml-[13px] ml-[17px] w-[1px] xl:h-[22px] xl:ml-[15px]" />
                  <Image
                    src="img_icon_57.svg"
                    className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[19px] h-[16px] lg:h-[13px] lg:ml-[12px] lg:my-[3px] ml-[16px] my-[4px] object-contain w-[9%] xl:h-[15px] xl:ml-[14px] xl:my-[3px]"
                    alt="Icon"
                  />
                </Row>
                <Text className="3xl:ml-[9px] 3xl:mr-[60px] 3xl:my-[12px] 3xl:text-fs16 font-inter font-normal lg:ml-[6px] lg:mr-[38px] lg:my-[7px] lg:text-fs10 ml-[8px] mr-[50px] my-[10px] text-fs14 text-gray_911 text-left xl:ml-[7px] xl:mr-[44px] xl:my-[8px] xl:text-fs12">{`hello@designspace.io`}</Text>
              </Row>
              <Line className="3xl:mt-[13px] bg-teal_50 h-[1px] lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]" />
            </Column>
            <Stack className="2xl:h-[65px] 3xl:h-[77px] h-[64px] lg:h-[50px] self-stretch w-[100%] xl:h-[57px]">
              <Line className="absolute bg-teal_50 bottom-[0] h-[1px] self-stretch w-[100%]" />
              <Row className="absolute bg-white_A700_63 inset-[0] items-center justify-start self-stretch w-[100%]">
                <Row className="3xl:ml-[60px] 3xl:my-[24px] font-roboto items-center justify-start lg:ml-[38px] lg:my-[15px] ml-[50px] my-[20px] w-[34%] xl:ml-[44px] xl:my-[17px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_804 text-left xl:text-fs14">{`Home`}</Text>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-normal lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-gray_804 text-left xl:ml-[21px] xl:text-fs14">{`About us`}</Text>
                  <Row className="3xl:ml-[28px] items-center justify-center lg:ml-[18px] ml-[24px] w-[16%] xl:ml-[21px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_804 text-left xl:text-fs14">{`Service`}</Text>
                    <Image
                      src="img_icon_58.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] ml-[1px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Icon"
                    />
                  </Row>
                  <Row className="3xl:ml-[28px] items-center justify-center lg:ml-[18px] ml-[24px] w-[15%] xl:ml-[21px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_804 text-left xl:text-fs14">{`Pages`}</Text>
                    <Image
                      src="img_icon_58.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[1px] lg:w-[18px] ml-[2px] object-contain w-[24px] xl:h-[22px] xl:ml-[1px] xl:w-[21px]"
                      alt="Icon"
                    />
                  </Row>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-normal lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-gray_804 text-left xl:ml-[21px] xl:text-fs14">{`Blog`}</Text>
                  <Text className="3xl:ml-[28px] 3xl:text-fs19 font-normal lg:ml-[18px] lg:text-fs12 ml-[24px] text-fs16 text-gray_804 text-left xl:ml-[21px] xl:text-fs14">{`Contact us`}</Text>
                </Row>
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[669px] 3xl:my-[14px] font-manrope h-[40px] lg:h-[32px] lg:ml-[434px] lg:my-[9px] ml-[558px] my-[12px] w-[13%] xl:h-[36px] xl:ml-[496px] xl:my-[10px]">
                  <Image
                    src="img_background_40.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs16 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:text-fs12">{`Get Free Consultation`}</Text>
                </Stack>
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[24px] 3xl:mr-[60px] 3xl:my-[14px] font-manrope h-[40px] lg:h-[32px] lg:ml-[15px] lg:mr-[38px] lg:my-[9px] ml-[20px] mr-[50px] my-[12px] w-[6%] xl:h-[36px] xl:ml-[17px] xl:mr-[44px] xl:my-[10px]">
                  <Image
                    src="img_background_41.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs16 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-deep_orange_A400 text-fs14 w-[max-content] xl:text-fs12">{`Sign In`}</Text>
                </Stack>
              </Row>
            </Stack>
          </Column>
        </div>
        <Stack className="2xl:h-[801px] 3xl:h-[961px] h-[800px] lg:h-[623px] self-stretch w-[100%] xl:h-[712px]">
          <Stack className="2xl:h-[801px] 3xl:h-[961px] absolute font-robotocondensed h-[800px] inset-[0] lg:h-[623px] self-stretch w-[100%] xl:h-[712px]">
            <Row className="absolute bottom-[0] items-center justify-evenly left-[0] px-[0] w-[70%]">
              <Row className="bg-white_A700 items-center justify-center w-[68%]">
                <Image
                  src="img_iconscroll_1.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[180px] 3xl:my-[75px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[116px] lg:my-[49px] lg:w-[18px] ml-[150px] my-[63px] object-contain w-[24px] xl:h-[22px] xl:ml-[133px] xl:my-[56px] xl:w-[21px]"
                  alt="IconScroll"
                />
                <Text className="3xl:ml-[9px] 3xl:mr-[252px] 3xl:my-[73px] 3xl:text-fs19 font-medium lg:ml-[6px] lg:mr-[163px] lg:my-[47px] lg:text-fs12 ml-[8px] mr-[210px] my-[61px] text-amber_A400 text-fs16 text-left tracking-ls1 uppercase xl:ml-[7px] xl:mr-[186px] xl:my-[54px] xl:text-fs14">{`Begin Scrolling for know more`}</Text>
              </Row>
              <div className="2xl:h-[151px] 3xl:h-[181px] bg-amber_A400 h-[150px] lg:h-[117px] shadow-bs14 w-[32%] xl:h-[134px]"></div>
            </Row>
            <Image
              src="img_base_9.svg"
              className="2xl:h-[651px] 3xl:h-[781px] absolute h-[650px] lg:h-[506px] object-cover self-stretch top-[0] w-[100%] xl:h-[579px]"
              alt="Base"
            />
            <Image
              src="img_shape_11.svg"
              className="2xl:h-[231px] 3xl:h-[277px] 3xl:right-[108px] 3xl:top-[66px] absolute h-[230px] lg:h-[179px] lg:right-[70px] lg:top-[42px] object-contain right-[90px] top-[55px] w-[11%] xl:h-[205px] xl:right-[80px] xl:top-[48px]"
              alt="Shape"
            />
            <Stack className="2xl:h-[69px] 3xl:bottom-[300px] 3xl:h-[82px] 3xl:left-[180px] absolute bottom-[250px] h-[68px] left-[150px] lg:bottom-[194px] lg:h-[53px] lg:left-[116px] w-[38%] xl:bottom-[222px] xl:h-[61px] xl:left-[133px]">
              <Input
                className="2xl:pb-[25px] 2xl:pt-[24px] 3xl:pb-[30px] 3xl:pl-[24px] 3xl:pt-[29px] 3xl:text-fs21 absolute bg-white_A700 border-0 font-normal font-robotocondensed inset-[0] lg:pl-[15px] lg:py-[19px] lg:text-fs14 pb-[25.545px] pl-[20px] placeholder:bg-transparent placeholder:text-bluegray_405 pt-[24.545px] self-stretch shadow-bs14 text-bluegray_405 text-fs18 text-left tracking-ls1 w-[100%] xl:pb-[22px] xl:pl-[17px] xl:pt-[21px] xl:text-fs16"
                name="Group460"
                placeholder={`Enter email address`}
              ></Input>
              <Button className="3xl:px-[38px] 3xl:py-[21px] 3xl:right-[9px] 3xl:text-fs19 absolute bg-deep_orange_A400 border-bw font-extrabold font-manrope inset-y-[0] lg:px-[24px] lg:py-[14px] lg:right-[6px] lg:text-fs12 my-[auto] px-[32px] py-[18px] right-[8px] text-center text-fs16 text-white_A700 w-[35%] xl:px-[28px] xl:py-[16px] xl:right-[7px] xl:text-fs14">{`Get Started free`}</Button>
            </Stack>
            <Image
              src="img_insertyourima_62.svg"
              className="2xl:h-[629px] 3xl:h-[755px] 3xl:right-[180px] absolute h-[628px] inset-y-[0] lg:h-[489px] lg:right-[116px] my-[auto] object-contain right-[150px] w-[33%] xl:h-[559px] xl:right-[133px]"
              alt="Insertyourima"
            />
            <Column className="3xl:bottom-[86px] 3xl:right-[121px] absolute bg-white_A700 bottom-[72px] justify-start lg:bottom-[56px] lg:right-[78px] right-[101px] shadow-bs14 w-[23%] xl:bottom-[64px] xl:right-[89px]">
              <Column className="3xl:mt-[28px] font-urbanist lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mx-[28px] 3xl:text-fs26 font-normal leading-lh3600 lg:leading-lh28 lg:mx-[18px] lg:text-fs17 mx-[24px] text-fs22 text-gray_920 text-left w-[84%] xl:leading-lh32 xl:mx-[21px] xl:text-fs19">
                  {
                    <>
                      {`“ The team is very`}
                      <br />
                      {`helpfull. I personally like & satisfied their service.”`}
                    </>
                  }
                </Text>
              </Column>
              <Row className="3xl:mb-[28px] 3xl:mt-[36px] font-urbanist items-center justify-between lg:mb-[18px] lg:mt-[23px] mb-[24px] mt-[30px] px-[0] w-[100%] xl:mb-[21px] xl:mt-[26px]">
                <Column className="3xl:ml-[28px] justify-start lg:ml-[18px] ml-[24px] w-[41%] xl:ml-[21px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold font-urbanist lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_920 text-left xl:mr-[8px] xl:text-fs16">{`Ronnie Hart`}</Text>
                  <Text className="3xl:mt-[7px] 3xl:text-fs18 font-normal font-roboto lg:mt-[4px] lg:text-fs11 mt-[6px] self-stretch text-bluegray_406 text-fs15 text-left xl:mt-[5px] xl:text-fs13">{`CEO of Designspace`}</Text>
                </Column>
                <Image
                  src="img__17.svg"
                  className="2xl:h-[28px] 2xl:mb-[8px] 2xl:mr-[40px] 2xl:mt-[9px] 3xl:h-[34px] 3xl:mb-[9px] 3xl:mr-[48px] 3xl:mt-[11px] h-[27.9px] lg:h-[22px] lg:mb-[6px] lg:mr-[31px] lg:mt-[7px] mb-[8.299988px] mr-[40.200073px] mt-[9.799988px] object-contain w-[10%] xl:h-[25px] xl:mb-[7px] xl:mr-[35px] xl:mt-[8px]"
                  alt=""
                />
              </Row>
            </Column>
          </Stack>
          <Column className="3xl:left-[180px] 3xl:top-[120px] absolute font-roboto justify-start left-[150px] lg:left-[116px] lg:top-[77px] top-[100px] w-[54%] xl:left-[133px] xl:top-[88px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-urbanist justify-start self-stretch w-[100%]">
                <Text className="2xl:leading-lh76 3xl:leading-lh91 3xl:mt-[24px] 3xl:text-fs74 font-bold leading-lh7600 lg:leading-lh59 lg:mt-[15px] lg:text-fs48 mt-[20px] text-fs62 text-gray_920 text-left w-[62%] xl:leading-lh67 xl:mt-[17px] xl:text-fs55">
                  {
                    <>
                      {`Create New `}
                      <br />
                      {`Business Ideas`}
                      <br />
                      {`that works for all`}
                    </>
                  }
                </Text>
                <div className="2xl:h-[71px] 3xl:h-[85px] 3xl:mb-[213px] 3xl:ml-[213px] 3xl:w-[84px] bg-gray_50 h-[70px] lg:h-[55px] lg:mb-[138px] lg:ml-[138px] lg:w-[54px] mb-[178px] ml-[178px] w-[70px] xl:h-[63px] xl:mb-[158px] xl:ml-[158px] xl:w-[62px]"></div>
                <div className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[153px] 3xl:mt-[84px] 3xl:w-[60px] bg-gray_50 h-[50px] lg:h-[39px] lg:mb-[99px] lg:mt-[54px] lg:w-[38px] mb-[128px] mt-[70px] w-[50px] xl:h-[45px] xl:mb-[113px] xl:mt-[62px] xl:w-[44px]"></div>
              </Row>
            </Column>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs26 font-normal leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[15px] lg:text-fs17 mr-[10px] mt-[20px] text-fs22 text-gray_609 text-left w-[77%] xl:leading-lh32 xl:mr-[8px] xl:mt-[17px] xl:text-fs19">
              {
                <>
                  {`Lorem ipsum may be used as a placeholder before final`}
                  <br />
                  {`copy is available. It is also used to temporarily replace.`}
                </>
              }
            </Text>
          </Column>
        </Stack>
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <List
            className="3xl:gap-[54px] 3xl:mb-[96px] 3xl:mt-[117px] flex-wrap gap-[45px] grid grid-cols-3 lg:gap-[35px] lg:mb-[62px] lg:mt-[76px] mb-[80px] min-h-[auto] mt-[98px] mx-[auto] w-[79%] xl:gap-[40px] xl:mb-[71px] xl:mt-[87px]"
            orientation="horizontal"
          >
            <Row className="bg-white_A700 justify-start lg:mt-[1px] mt-[2px] w-[100%] xl:mt-[1px]">
              <Image
                src="img_icon_59.svg"
                className="2xl:h-[65px] 3xl:h-[77px] 3xl:mb-[99px] 3xl:mt-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mb-[64px] lg:mt-[21px] lg:w-[49px] mb-[83px] mt-[28px] object-contain w-[64px] xl:h-[57px] xl:mb-[73px] xl:mt-[24px] xl:w-[56px]"
                alt="Icon"
              />
              <Column className="3xl:mb-[34px] 3xl:ml-[26px] 3xl:mr-[40px] 3xl:mt-[33px] font-urbanist justify-start lg:mb-[22px] lg:ml-[17px] lg:mr-[26px] lg:mt-[21px] mb-[29px] ml-[22px] mr-[34px] mt-[28px] w-[66%] xl:mb-[25px] xl:ml-[19px] xl:mr-[30px] xl:mt-[24px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs26 font-semibold font-urbanist lg:mr-[7px] lg:text-fs17 mr-[10px] text-fs22 text-gray_902 text-left tracking-ls1 xl:mr-[8px] xl:text-fs19">{`Business Idea`}</Text>
                <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_704 text-left w-[100%] xl:leading-lh23 xl:mt-[7px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum’.`}</Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 items-center justify-center lg:mb-[1px] mb-[2px] w-[100%] xl:mb-[1px]">
              <Image
                src="img_icon_60.svg"
                className="2xl:h-[65px] 3xl:h-[77px] 3xl:mb-[97px] 3xl:mt-[36px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mb-[63px] lg:mt-[23px] lg:w-[49px] mb-[81px] mt-[30px] object-contain w-[64px] xl:h-[57px] xl:mb-[72px] xl:mt-[26px] xl:w-[56px]"
                alt="Icon"
              />
              <Column className="3xl:mb-[32px] 3xl:ml-[26px] 3xl:mr-[40px] 3xl:mt-[36px] font-urbanist justify-start lg:mb-[21px] lg:ml-[17px] lg:mr-[26px] lg:mt-[23px] mb-[27px] ml-[22px] mr-[34px] mt-[30px] w-[66%] xl:mb-[24px] xl:ml-[19px] xl:mr-[30px] xl:mt-[26px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs26 font-semibold font-urbanist lg:mr-[7px] lg:text-fs17 mr-[10px] text-fs22 text-gray_902 text-left tracking-ls1 xl:mr-[8px] xl:text-fs19">{`Customer Strategy`}</Text>
                <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_704 text-left w-[100%] xl:leading-lh23 xl:mt-[7px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum’.`}</Text>
              </Column>
            </Row>
            <Row className="bg-white_A700 justify-center lg:mt-[1px] mt-[2px] w-[100%] xl:mt-[1px]">
              <Image
                src="img_icon_61.svg"
                className="2xl:h-[65px] 3xl:h-[77px] 3xl:mb-[99px] 3xl:mt-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mb-[64px] lg:mt-[21px] lg:w-[49px] mb-[83px] mt-[28px] object-contain w-[64px] xl:h-[57px] xl:mb-[73px] xl:mt-[24px] xl:w-[56px]"
                alt="Icon"
              />
              <Column className="3xl:mb-[34px] 3xl:ml-[26px] 3xl:mr-[40px] 3xl:mt-[33px] font-urbanist justify-start lg:mb-[22px] lg:ml-[17px] lg:mr-[26px] lg:mt-[21px] mb-[29px] ml-[22px] mr-[34px] mt-[28px] w-[66%] xl:mb-[25px] xl:ml-[19px] xl:mr-[30px] xl:mt-[24px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs26 font-semibold font-urbanist lg:mr-[7px] lg:text-fs17 mr-[10px] text-fs22 text-gray_902 text-left tracking-ls1 xl:mr-[8px] xl:text-fs19">{`Get Success`}</Text>
                <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[9px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_704 text-left w-[100%] xl:leading-lh23 xl:mt-[7px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum’.`}</Text>
              </Column>
            </Row>
          </List>
        </Column>
        <Row className="bg-white_A700 justify-start self-stretch w-[100%]">
          <Image
            src="img_insertyourima_63.svg"
            className="2xl:h-[486px] 3xl:h-[583px] 3xl:ml-[260px] 3xl:my-[120px] h-[485px] lg:h-[378px] lg:ml-[168px] lg:my-[77px] ml-[217px] my-[100px] object-contain w-[34%] xl:h-[432px] xl:ml-[193px] xl:my-[88px]"
            alt="Insertyourima"
          />
          <Column className="3xl:mb-[244px] 3xl:ml-[105px] 3xl:mr-[192px] 3xl:mt-[190px] font-urbanist justify-start lg:mb-[158px] lg:ml-[68px] lg:mr-[124px] lg:mt-[123px] mb-[204px] ml-[88px] mr-[160px] mt-[159px] w-[34%] xl:mb-[181px] xl:ml-[78px] xl:mr-[142px] xl:mt-[141px]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs52 font-semibold font-urbanist leading-lh6000 lg:leading-lh46 lg:text-fs34 self-stretch text-fs44 text-gray_913 text-left tracking-ls1 w-[100%] xl:leading-lh53 xl:text-fs39">{`We are One of the Best Consultant Agency`}</Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-normal font-nunitosans leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-gray_704 text-left w-[94%] xl:leading-lh28 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
            <Button className="3xl:mr-[12px] 3xl:mt-[43px] 3xl:pl-[37px] 3xl:pr-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-deep_orange_50 border-bw font-bold font-manrope lg:mr-[7px] lg:mt-[28px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[36px] pl-[31px] pr-[32px] py-[17px] text-center text-deep_orange_A400 text-fs16 w-[36%] xl:mr-[8px] xl:mt-[32px] xl:pl-[27px] xl:pr-[28px] xl:py-[15px] xl:text-fs14">{`More about Us`}</Button>
          </Column>
        </Row>
        <Row className="bg-white_A700 font-urbanist justify-start self-stretch w-[100%]">
          <Column className="3xl:mb-[256px] 3xl:ml-[260px] 3xl:mt-[178px] justify-start lg:mb-[166px] lg:ml-[168px] lg:mt-[115px] mb-[214px] ml-[217px] mt-[149px] w-[34%] xl:mb-[190px] xl:ml-[193px] xl:mt-[132px]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs52 font-semibold font-urbanist leading-lh6000 lg:leading-lh46 lg:text-fs34 self-stretch text-fs44 text-gray_913 text-left tracking-ls1 w-[100%] xl:leading-lh53 xl:text-fs39">{`We always Treat you like our best friends`}</Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-normal font-nunitosans leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-gray_704 text-left w-[94%] xl:leading-lh28 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
            <Button className="2xl:px-[27px] 3xl:mr-[12px] 3xl:mt-[43px] 3xl:px-[33px] 3xl:py-[20px] 3xl:text-fs19 bg-deep_orange_50 border-bw font-bold font-manrope lg:mr-[7px] lg:mt-[28px] lg:px-[21px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[36px] px-[27.5px] py-[17px] text-center text-deep_orange_A400 text-fs16 w-[36%] xl:mr-[8px] xl:mt-[32px] xl:px-[24px] xl:py-[15px] xl:text-fs14">{`Check Services`}</Button>
          </Column>
          <Image
            src="img_insertyourima_64.svg"
            className="2xl:h-[486px] 3xl:h-[583px] 3xl:ml-[105px] 3xl:mr-[192px] 3xl:my-[120px] h-[485px] lg:h-[378px] lg:ml-[68px] lg:mr-[124px] lg:my-[77px] ml-[88px] mr-[160px] my-[100px] object-contain w-[34%] xl:h-[432px] xl:ml-[78px] xl:mr-[142px] xl:my-[88px]"
            alt="Insertyourima"
          />
        </Row>
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <Line className="bg-bluegray_103 h-[1px] self-stretch w-[100%]" />
          <Column className="3xl:mb-[120px] 3xl:mt-[118px] items-center justify-start lg:my-[77px] mb-[100px] mt-[99px] mx-[auto] w-[68%] xl:my-[88px]">
            <Stack className="2xl:h-[421px] 3xl:h-[505px] h-[420px] lg:h-[327px] self-stretch w-[100%] xl:h-[374px]">
              <Image
                src="img_insertyourima_65.svg"
                className="2xl:h-[421px] 3xl:h-[505px] absolute h-[420px] inset-[0] lg:h-[327px] object-cover self-stretch w-[100%] xl:h-[374px]"
                alt="Insertyourima"
              />
              <Image
                src="img_button_21.svg"
                className="2xl:h-[81px] 3xl:bottom-[67px] 3xl:h-[97px] 3xl:left-[67px] 3xl:w-[96px] absolute bottom-[56px] h-[80px] left-[56px] lg:bottom-[43px] lg:h-[63px] lg:left-[43px] lg:w-[62px] object-contain w-[80px] xl:bottom-[49px] xl:h-[72px] xl:left-[49px] xl:w-[71px]"
                alt="Button"
              />
            </Stack>
            <Row className="3xl:mr-[34px] 3xl:mt-[50px] font-urbanist items-center justify-between lg:mr-[22px] lg:mt-[32px] mr-[29px] mt-[42px] px-[0] w-[97%] xl:mr-[25px] xl:mt-[37px]">
              <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs52 font-semibold font-urbanist leading-lh6000 lg:leading-lh46 lg:text-fs34 text-fs44 text-gray_913 text-left tracking-ls1 w-[33%] xl:leading-lh53 xl:text-fs39">
                {
                  <>
                    {`Spice it up with`}
                    <br />
                    {`a wide video`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:my-[14px] 3xl:text-fs24 font-normal font-nunitosans leading-lh3200 lg:leading-lh24 lg:my-[9px] lg:text-fs15 my-[12px] text-fs20 text-gray_704 text-left w-[48%] xl:leading-lh28 xl:my-[10px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
            </Row>
          </Column>
        </Column>
        <Column className="bg-gray_50 font-urbanist items-center justify-center self-stretch w-[100%]">
          <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mt-[120px] 3xl:text-fs52 font-semibold leading-lh6000 lg:leading-lh46 lg:mt-[77px] lg:text-fs34 mt-[100px] mx-[auto] text-center text-fs44 text-gray_913 tracking-ls1 w-[30%] xl:leading-lh53 xl:mt-[88px] xl:text-fs39">
            {
              <>
                {`Creative solutions for`}
                <br />
                {`grow your Business`}
              </>
            }
          </Text>
          <List
            className="3xl:gap-[33px] 3xl:mb-[120px] 3xl:mt-[67px] flex-wrap gap-[28px] grid grid-cols-4 lg:gap-[21px] lg:mb-[77px] lg:mt-[43px] mb-[100px] min-h-[auto] mt-[56px] mx-[auto] w-[79%] xl:gap-[24px] xl:mb-[88px] xl:mt-[49px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-urbanist items-center justify-start w-[100%]">
              <Image
                src="img_icon_62.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[48px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[31px] lg:w-[56px] mt-[40px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[35px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[38px] 3xl:text-fs24 font-semibold font-urbanist lg:mt-[24px] lg:text-fs15 mt-[32px] mx-[auto] text-center text-fs20 text-gray_913 tracking-ls1 xl:mt-[28px] xl:text-fs17">{`Business Analysis`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[7px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[4px] lg:text-fs12 mt-[6px] mx-[auto] text-center text-fs16 text-gray_704 w-[74%] xl:leading-lh23 xl:mt-[5px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
              <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-manrope lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-deep_orange_A400 text-fs16 underline xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Learn More`}</Text>
            </Column>
            <Column className="bg-white_A700 font-urbanist items-center justify-start w-[100%]">
              <Image
                src="img_icon_63.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[48px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[31px] lg:w-[56px] mt-[40px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[35px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[38px] 3xl:text-fs24 font-semibold font-urbanist lg:mt-[24px] lg:text-fs15 mt-[32px] mx-[auto] text-center text-fs20 text-gray_913 tracking-ls1 xl:mt-[28px] xl:text-fs17">{`Marketing Strategy`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[7px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[4px] lg:text-fs12 mt-[6px] mx-[auto] text-center text-fs16 text-gray_704 w-[74%] xl:leading-lh23 xl:mt-[5px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
              <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-manrope lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-deep_orange_A400 text-fs16 underline xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Learn More`}</Text>
            </Column>
            <Column className="bg-white_A700 font-urbanist items-center justify-start w-[100%]">
              <Image
                src="img_icon_64.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[48px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[31px] lg:w-[56px] mt-[40px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[35px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[38px] 3xl:text-fs24 font-semibold font-urbanist lg:mt-[24px] lg:text-fs15 mt-[32px] mx-[auto] text-center text-fs20 text-gray_913 tracking-ls1 xl:mt-[28px] xl:text-fs17">{`Creative Design`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[7px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[4px] lg:text-fs12 mt-[6px] mx-[auto] text-center text-fs16 text-gray_704 w-[74%] xl:leading-lh23 xl:mt-[5px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
              <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-manrope lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-deep_orange_A400 text-fs16 underline xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Learn More`}</Text>
            </Column>
            <Column className="bg-white_A700 font-urbanist items-center justify-start w-[100%]">
              <Image
                src="img_icon_65.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[48px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[31px] lg:w-[56px] mt-[40px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[35px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[38px] 3xl:text-fs24 font-semibold font-urbanist lg:mt-[24px] lg:text-fs15 mt-[32px] mx-[auto] text-center text-fs20 text-gray_913 tracking-ls1 xl:mt-[28px] xl:text-fs17">{`Data Analysis`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[7px] 3xl:text-fs19 font-normal font-roboto leading-lh2600 lg:leading-lh20 lg:mt-[4px] lg:text-fs12 mt-[6px] mx-[auto] text-center text-fs16 text-gray_704 w-[74%] xl:leading-lh23 xl:mt-[5px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
              <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-manrope lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-deep_orange_A400 text-fs16 underline xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Learn More`}</Text>
            </Column>
          </List>
        </Column>
        <Column className="bg-black_906 font-urbanist items-center justify-center self-stretch w-[100%]">
          <Text className="3xl:mt-[120px] 3xl:text-fs48 font-semibold lg:mt-[77px] lg:text-fs31 mt-[100px] mx-[auto] text-center text-fs40 text-white_A700 tracking-ls1 xl:mt-[88px] xl:text-fs35">{`Trusted and loved by big company`}</Text>
          <Image
            src="img_logo_13.svg"
            className="2xl:h-[44px] 3xl:h-[52px] 3xl:mb-[115px] 3xl:mt-[61px] h-[43px] lg:h-[34px] lg:mb-[74px] lg:mt-[39px] mb-[96px] mt-[51px] mx-[auto] object-contain w-[79%] xl:h-[39px] xl:mb-[85px] xl:mt-[45px]"
            alt="Logo"
          />
        </Column>
        <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
          <Column className="3xl:mt-[120px] font-manrope justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
            <Text className="3xl:mx-[180px] 3xl:text-fs19 font-semibold lg:mx-[116px] lg:text-fs12 mx-[150px] text-deep_orange_A400 text-fs16 text-left tracking-ls1 uppercase xl:mx-[133px] xl:text-fs14">{`OUR WORK GALLERY`}</Text>
            <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
              <Row className="font-urbanist items-center justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:ml-[180px] 3xl:text-fs52 font-semibold lg:ml-[116px] lg:text-fs34 ml-[150px] text-fs44 text-gray_913 text-left tracking-ls1 xl:ml-[133px] xl:text-fs39">{`Project Documentation`}</Text>
                <Row className="3xl:mr-[180px] 3xl:my-[12px] font-manrope items-center justify-center lg:mr-[116px] lg:my-[7px] mr-[150px] my-[10px] w-[28%] xl:mr-[133px] xl:my-[8px]">
                  <Button className="2xl:px-[20px] 3xl:px-[24px] 3xl:py-[15px] 3xl:text-fs16 bg-white_A700 border-bw font-medium lg:px-[15px] lg:py-[10px] lg:text-fs10 px-[20.5px] py-[13px] text-center text-fs14 text-gray_913 w-[14%] xl:px-[18px] xl:py-[11px] xl:text-fs12">{`All`}</Button>
                  <Button className="2xl:px-[21px] 3xl:px-[25px] 3xl:py-[15px] 3xl:text-fs16 bg-white_A700 border-bw font-medium lg:px-[16px] lg:py-[10px] lg:text-fs10 px-[21.5px] py-[13px] text-center text-fs14 text-gray_913 w-[28%] xl:px-[19px] xl:py-[11px] xl:text-fs12">{`Marketing`}</Button>
                  <Button className="2xl:px-[20px] 3xl:px-[24px] 3xl:py-[15px] 3xl:text-fs16 bg-deep_orange_A400 border-bw font-bold lg:px-[15px] lg:py-[10px] lg:text-fs10 px-[20.5px] py-[13px] text-center text-fs14 text-white_A700 w-[25%] xl:px-[18px] xl:py-[11px] xl:text-fs12">{`Creative`}</Button>
                  <Button className="2xl:pl-[21px] 2xl:pr-[22px] 3xl:pl-[25px] 3xl:pr-[27px] 3xl:py-[15px] 3xl:text-fs16 bg-white_A700 border-bw font-medium lg:pl-[16px] lg:pr-[17px] lg:py-[10px] lg:text-fs10 pl-[21.5px] pr-[22.5px] py-[13px] text-center text-fs14 text-gray_913 w-[33%] xl:pl-[19px] xl:pr-[20px] xl:py-[11px] xl:text-fs12">{`Development`}</Button>
                </Row>
              </Row>
            </Column>
          </Column>
          <Row className="3xl:mt-[57px] items-center justify-start lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
            <Image
              src="img_room_3.svg"
              className="2xl:h-[321px] 3xl:h-[385px] 3xl:ml-[180px] h-[320px] lg:h-[249px] lg:ml-[116px] ml-[150px] object-contain w-[25%] xl:h-[285px] xl:ml-[133px]"
              alt="Room"
            />
            <Image
              src="img_room_4.svg"
              className="2xl:h-[321px] 3xl:h-[385px] 3xl:ml-[36px] 3xl:mr-[180px] h-[320px] lg:h-[249px] lg:ml-[23px] lg:mr-[116px] ml-[30px] mr-[150px] object-contain w-[52%] xl:h-[285px] xl:ml-[26px] xl:mr-[133px]"
              alt="Room"
            />
          </Row>
          <Row className="3xl:gap-[36px] 3xl:mb-[120px] 3xl:mt-[36px] 3xl:px-[180px] gap-[30px] grid grid-cols-3 items-center justify-start lg:gap-[23px] lg:mb-[77px] lg:mt-[23px] lg:px-[116px] mb-[100px] mt-[30px] px-[150px] self-stretch w-[100%] xl:gap-[26px] xl:mb-[88px] xl:mt-[26px] xl:px-[133px]">
            <Image
              src="img_room_5.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Room"
            />
            <Image
              src="img_room_6.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Room"
            />
            <Image
              src="img_room_7.svg"
              className="2xl:h-[321px] 3xl:h-[385px] h-[320px] lg:h-[249px] object-contain w-[100%] xl:h-[285px]"
              alt="Room"
            />
          </Row>
        </Column>
        <Column className="bg-white_A700 justify-start self-stretch w-[100%]">
          <Column className="items-center self-stretch w-[100%]">
            <Line className="bg-bluegray_103 h-[1px] self-stretch w-[100%]" />
            <Row className="3xl:mt-[118px] font-urbanist justify-start lg:mt-[77px] mt-[99px] self-stretch w-[100%] xl:mt-[88px]">
              <Text className="3xl:mb-[14px] 3xl:ml-[180px] 3xl:text-fs52 font-semibold font-urbanist lg:mb-[9px] lg:ml-[116px] lg:text-fs34 mb-[12px] ml-[150px] text-fs44 text-gray_913 text-left tracking-ls1 xl:mb-[10px] xl:ml-[133px] xl:text-fs39">{`Client Testimonials.`}</Text>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:ml-[128px] 3xl:mr-[292px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:ml-[83px] lg:mr-[189px] lg:text-fs15 ml-[107px] mr-[244px] text-fs20 text-gray_704 text-left w-[38%] xl:leading-lh32 xl:ml-[95px] xl:mr-[217px] xl:text-fs17">
                {
                  <>
                    {`We’ve received a lot of love and are thrilled to share some`}
                    <br />
                    {`of the experiences of our happy client.`}
                  </>
                }
              </Text>
            </Row>
          </Column>
          <Column className="3xl:mb-[120px] 3xl:mt-[67px] items-end lg:mb-[77px] lg:mt-[43px] mb-[100px] mt-[56px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[49px]">
            <List
              className="3xl:gap-[36px] 3xl:ml-[12px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:ml-[7px] min-h-[auto] ml-[10px] w-[90%] xl:gap-[26px] xl:ml-[8px]"
              orientation="horizontal"
            >
              <Column className="bg-gray_50 font-urbanist justify-center w-[100%]">
                <Image
                  src="img_star_7.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[43px] 3xl:mx-[43px] h-[20px] lg:h-[16px] lg:mt-[28px] lg:mx-[28px] mt-[36px] mx-[36px] object-contain w-[25%] xl:h-[18px] xl:mt-[32px] xl:mx-[32px]"
                  alt="Star"
                />
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[28px] lg:text-fs14 mt-[20px] mx-[36px] text-bluegray_909 text-fs18 text-left w-[82%] xl:leading-lh28 xl:mt-[17px] xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                <Column className="3xl:my-[43px] items-center lg:my-[28px] my-[36px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-start self-stretch w-[100%]">
                    <div className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[43px] 3xl:w-[57px] bg-gray_307 h-[48px] lg:h-[38px] lg:ml-[28px] lg:w-[37px] ml-[36px] rounded-radius50 w-[48px] xl:h-[43px] xl:ml-[32px] xl:w-[42px]"></div>
                    <Column className="3xl:ml-[19px] 3xl:mr-[240px] font-urbanist justify-start lg:ml-[12px] lg:mr-[155px] lg:my-[1px] ml-[16px] mr-[200px] my-[2px] w-[34%] xl:ml-[14px] xl:mr-[177px] xl:my-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-urbanist lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Emily James`}</Text>
                      <Text className="3xl:text-fs19 font-normal font-roboto lg:mt-[2px] lg:text-fs12 mt-[3px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[2px] xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_50 font-urbanist justify-center w-[100%]">
                <Image
                  src="img_star_7.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[43px] 3xl:mx-[43px] h-[20px] lg:h-[16px] lg:mt-[28px] lg:mx-[28px] mt-[36px] mx-[36px] object-contain w-[25%] xl:h-[18px] xl:mt-[32px] xl:mx-[32px]"
                  alt="Star"
                />
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[24px] 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[15px] lg:mx-[28px] lg:text-fs14 mt-[20px] mx-[36px] text-bluegray_909 text-fs18 text-left w-[82%] xl:leading-lh28 xl:mt-[17px] xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                <Column className="3xl:my-[43px] items-center lg:my-[28px] my-[36px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-start self-stretch w-[100%]">
                    <div className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[43px] 3xl:w-[57px] bg-gray_307 h-[48px] lg:h-[38px] lg:ml-[28px] lg:w-[37px] ml-[36px] rounded-radius50 w-[48px] xl:h-[43px] xl:ml-[32px] xl:w-[42px]"></div>
                    <Column className="3xl:ml-[19px] 3xl:mr-[240px] font-urbanist justify-start lg:ml-[12px] lg:mr-[155px] lg:my-[1px] ml-[16px] mr-[200px] my-[2px] w-[34%] xl:ml-[14px] xl:mr-[177px] xl:my-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-urbanist lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Albert Phillips`}</Text>
                      <Text className="3xl:text-fs19 font-normal font-roboto lg:mt-[2px] lg:text-fs12 mt-[3px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[2px] xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-gray_50 font-urbanist justify-center w-[100%]">
                <Image
                  src="img_star_7.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[43px] 3xl:mx-[43px] h-[20px] lg:h-[16px] lg:mt-[28px] lg:mx-[28px] mt-[36px] mx-[36px] object-contain w-[36%] xl:h-[18px] xl:mt-[32px] xl:mx-[32px]"
                  alt="Star"
                />
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[43px] 3xl:mt-[24px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[28px] lg:mt-[15px] lg:text-fs14 ml-[36px] mt-[20px] text-bluegray_909 text-fs18 text-left w-[89%] xl:leading-lh28 xl:ml-[32px] xl:mt-[17px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                <Column className="3xl:my-[43px] items-center lg:my-[28px] my-[36px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-start self-stretch w-[100%]">
                    <div className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[43px] 3xl:w-[57px] bg-gray_307 h-[48px] lg:h-[38px] lg:ml-[28px] lg:w-[37px] ml-[36px] rounded-radius50 w-[48px] xl:h-[43px] xl:ml-[32px] xl:w-[42px]"></div>
                    <Column className="3xl:ml-[19px] 3xl:mr-[73px] font-urbanist justify-start lg:ml-[12px] lg:mr-[47px] lg:my-[1px] ml-[16px] mr-[61px] my-[2px] w-[49%] xl:ml-[14px] xl:mr-[54px] xl:my-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-urbanist lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Miguel Black`}</Text>
                      <Text className="3xl:text-fs19 font-normal font-roboto lg:mt-[2px] lg:text-fs12 mt-[3px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[2px] xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
        <Stack className="2xl:h-[698px] 3xl:h-[837px] h-[697px] lg:h-[543px] self-stretch w-[100%] xl:h-[621px]">
          <div className="absolute bottom-[0] self-stretch w-[100%]">
            <Column className="bg-gray_50 font-manrope items-center justify-end self-stretch w-[100%]">
              <Row className="3xl:mt-[246px] font-manrope justify-evenly lg:mt-[159px] mt-[205px] px-[0] self-stretch w-[100%] xl:mt-[182px]">
                <Image
                  src="img_group_9.svg"
                  className="2xl:h-[31px] 3xl:h-[37px] 3xl:mb-[181px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:mb-[117px] lg:w-[23px] mb-[151px] object-contain w-[30px] xl:h-[27px] xl:mb-[134px] xl:w-[26px]"
                  alt="Group"
                />
                <Text className="3xl:mb-[183px] 3xl:text-fs24 font-semibold lg:mb-[119px] lg:text-fs15 mb-[153px] mt-[1px] text-deep_orange_A400 text-fs20 text-left xl:mb-[136px] xl:text-fs17">{`Your Logo`}</Text>
                <Row className="justify-center w-[66%]">
                  <Column className="3xl:mb-[38px] font-urbanist justify-start lg:mb-[24px] mb-[32px] w-[10%] xl:mb-[28px]">
                    <Text className="3xl:text-fs16 font-semibold font-urbanist lg:text-fs10 lg:tracking-ls1 mr-[1px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:text-fs12 xl:tracking-ls1">{`PROGRAMS`}</Text>
                    <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto leading-lh1600 lg:leading-lh12 lg:mr-[7px] lg:mt-[15px] lg:text-fs10 mr-[10px] mt-[20px] text-fs14 text-gray_913 text-left w-[75%] xl:leading-lh14 xl:mr-[8px] xl:mt-[17px] xl:text-fs12">
                      {
                        <>
                          {`Home`}
                          <br />
                          {`Work`}
                          <br />
                          {`Service`}
                          <br />
                          {`Contact Us`}
                        </>
                      }
                    </Text>
                  </Column>
                  <Column className="3xl:ml-[76px] font-urbanist justify-start lg:ml-[49px] ml-[64px] w-[7%] xl:ml-[56px]">
                    <Text className="3xl:text-fs16 font-semibold font-urbanist lg:mr-[3px] lg:text-fs10 lg:tracking-ls1 mr-[4px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:mr-[3px] xl:text-fs12 xl:tracking-ls1">{`Social`}</Text>
                    <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto leading-lh1600 lg:leading-lh12 lg:mt-[15px] lg:text-fs10 mt-[20px] self-stretch text-fs14 text-gray_913 text-left w-[100%] xl:leading-lh14 xl:mt-[17px] xl:text-fs12">
                      {
                        <>
                          {`Dribbble`}
                          <br />
                          {`Behance`}
                          <br />
                          {`Instagram`}
                          <br />
                          {`Facebook`}
                          <br />
                          {`Medium`}
                        </>
                      }
                    </Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:ml-[76px] font-urbanist justify-start lg:mb-[24px] lg:ml-[49px] mb-[32px] ml-[64px] w-[12%] xl:mb-[28px] xl:ml-[56px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs16 font-semibold font-urbanist lg:mr-[7px] lg:text-fs10 lg:tracking-ls1 mr-[10px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:mr-[8px] xl:text-fs12 xl:tracking-ls1">{`RESOURCES`}</Text>
                    <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto leading-lh1600 lg:leading-lh12 lg:mt-[15px] lg:text-fs10 mr-[1px] mt-[20px] text-fs14 text-gray_913 text-left w-[99%] xl:leading-lh14 xl:mt-[17px] xl:text-fs12">
                      {
                        <>
                          {`Contact Us`}
                          <br />
                          {`Feedback`}
                          <br />
                          {`Help Desk`}
                          <br />
                          {`Terms & Condition`}
                        </>
                      }
                    </Text>
                  </Column>
                  <Column className="3xl:mb-[38px] 3xl:ml-[76px] font-urbanist justify-start lg:mb-[24px] lg:ml-[49px] mb-[32px] ml-[64px] w-[11%] xl:mb-[28px] xl:ml-[56px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs16 font-semibold font-urbanist lg:mr-[7px] lg:text-fs10 lg:tracking-ls1 mr-[10px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:mr-[8px] xl:text-fs12 xl:tracking-ls1">{`OTHERS`}</Text>
                    <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto leading-lh1600 lg:leading-lh12 lg:mt-[15px] lg:text-fs10 mr-[1px] mt-[20px] text-fs14 text-gray_913 text-left w-[99%] xl:leading-lh14 xl:mt-[17px] xl:text-fs12">
                      {
                        <>
                          {`API Integration`}
                          <br />
                          {`Get Started`}
                          <br />
                          {`Get Started`}
                          <br />
                          {`How to be : Tutor`}
                        </>
                      }
                    </Text>
                  </Column>
                  <Column className="3xl:mb-[56px] 3xl:ml-[76px] 3xl:mr-[180px] font-urbanist justify-start lg:mb-[36px] lg:ml-[49px] lg:mr-[116px] mb-[47px] ml-[64px] mr-[150px] mt-[1px] w-[17%] xl:mb-[41px] xl:ml-[56px] xl:mr-[133px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs16 font-semibold font-urbanist lg:mr-[7px] lg:text-fs10 lg:tracking-ls1 mr-[10px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:mr-[8px] xl:text-fs12 xl:tracking-ls1">{`Contact us`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto lg:mr-[7px] lg:mt-[15px] lg:text-fs10 mr-[10px] mt-[20px] text-fs14 text-gray_913 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs12">{`hello@designspace.co`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[32px] 3xl:text-fs16 font-semibold font-urbanist lg:mr-[7px] lg:mt-[21px] lg:text-fs10 lg:tracking-ls1 mr-[10px] mt-[27px] text-fs14 text-gray_911 text-left tracking-ls2 uppercase xl:mr-[8px] xl:mt-[24px] xl:text-fs12 xl:tracking-ls1">{`Location`}</Text>
                    <Text className="3xl:mt-[24px] 3xl:text-fs16 font-normal font-roboto lg:mt-[15px] lg:text-fs10 mt-[20px] self-stretch text-fs14 text-gray_913 text-left xl:mt-[17px] xl:text-fs12">{`123 Anywhere St., Any City`}</Text>
                  </Column>
                </Row>
              </Row>
              <Line className="3xl:mt-[76px] bg-bluegray_103 h-[1px] lg:mt-[49px] mt-[64px] mx-[auto] w-[79%] xl:mt-[56px]" />
              <Text className="3xl:mb-[36px] 3xl:mt-[37px] 3xl:text-fs14 font-semibold font-urbanist lg:mb-[23px] lg:mt-[24px] lg:text-fs9 lg:tracking-ls1 mb-[30px] mt-[31px] mx-[auto] text-center text-fs12 text-gray_911 tracking-ls2 uppercase xl:mb-[26px] xl:mt-[27px] xl:text-fs10 xl:tracking-ls1">{`All rights reserved. Designspace ©2021`}</Text>
            </Column>
          </div>
          <Row className="absolute bg-deep_orange_500 font-urbanist inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[79%]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:ml-[76px] 3xl:my-[105px] 3xl:text-fs52 font-semibold leading-lh6000 lg:leading-lh46 lg:ml-[49px] lg:my-[68px] lg:text-fs34 ml-[64px] my-[88px] text-fs44 text-left text-white_A700 tracking-ls1 w-[31%] xl:leading-lh53 xl:ml-[56px] xl:my-[78px] xl:text-fs39">
              {
                <>
                  {`Let’s discuss your`}
                  <br />
                  {`project with us`}
                </>
              }
            </Text>
            <Stack className="2xl:h-[69px] 3xl:h-[82px] 3xl:ml-[211px] 3xl:mr-[76px] 3xl:my-[136px] font-aileron h-[68px] lg:h-[53px] lg:ml-[136px] lg:mr-[49px] lg:my-[88px] ml-[176px] mr-[64px] my-[114px] w-[43%] xl:h-[61px] xl:ml-[156px] xl:mr-[56px] xl:my-[101px]">
              <Input
                className="2xl:py-[24px] 3xl:pl-[24px] 3xl:py-[29px] 3xl:text-fs21 absolute bg-white_A700 border-0 font-aileron font-normal inset-[0] lg:pl-[15px] lg:py-[19px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-bluegray_405 py-[24.545px] self-stretch shadow-bs14 text-bluegray_405 text-fs18 text-left w-[100%] xl:pl-[17px] xl:py-[21px] xl:text-fs16"
                name="Group462"
                placeholder={`Enter email address`}
              ></Input>
              <Button className="3xl:px-[34px] 3xl:py-[21px] 3xl:right-[9px] 3xl:text-fs19 absolute bg-black_906 border-bw font-extrabold font-manrope inset-y-[0] lg:px-[22px] lg:py-[14px] lg:right-[6px] lg:text-fs12 my-[auto] px-[29px] py-[18px] right-[8px] text-center text-fs16 text-white_A700 w-[27%] xl:px-[25px] xl:py-[16px] xl:right-[7px] xl:text-fs14">{`Talk to us`}</Button>
            </Stack>
          </Row>
        </Stack>
      </Column>
    </Column>
  );
};

export default Business002Page;
