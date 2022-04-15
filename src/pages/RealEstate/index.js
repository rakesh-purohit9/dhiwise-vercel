import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Line } from "components/Line";
import { List } from "components/List";
import { Button } from "components/Button";
import { Input } from "components/Input";

const RealEstatePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="bg-gray_54 items-center justify-start self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Row className="bg-white_A700 font-inter items-center justify-end self-stretch w-[100%]">
            <Image
              src="img_logomainlogo_1.png"
              className="2xl:h-[30px] 2xl:mb-[25px] 3xl:h-[36px] 3xl:ml-[45px] 3xl:my-[30px] h-[29.7px] lg:h-[24px] lg:ml-[29px] lg:my-[19px] mb-[25.3px] ml-[38px] mt-[25px] object-contain w-[10%] xl:h-[27px] xl:ml-[33px] xl:my-[22px]"
              alt="LogoMainLogo"
            />
            <Row className="2xl:ml-[296px] 3xl:ml-[355px] 3xl:my-[31px] items-center justify-center lg:ml-[230px] lg:my-[20px] ml-[295.82px] my-[26px] w-[34%] xl:ml-[263px] xl:my-[23px]">
              <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_911 text-left xl:text-fs14">{`Home`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs19 font-normal lg:ml-[35px] lg:text-fs12 ml-[46px] text-fs16 text-gray_911 text-left xl:ml-[40px] xl:text-fs14">{`New Development`}</Text>
              <Text className="3xl:ml-[56px] 3xl:text-fs19 font-normal lg:ml-[36px] lg:text-fs12 ml-[47px] text-fs16 text-gray_911 text-left xl:ml-[41px] xl:text-fs14">{`Agent Finder`}</Text>
              <Text className="3xl:ml-[55px] 3xl:text-fs19 font-normal lg:ml-[35px] lg:text-fs12 ml-[46px] text-fs16 text-gray_911 text-left xl:ml-[40px] xl:text-fs14">{`Exclusive`}</Text>
            </Row>
            <Text className="3xl:ml-[238px] 3xl:my-[31px] 3xl:text-fs19 font-medium lg:ml-[154px] lg:my-[20px] lg:text-fs12 ml-[199px] my-[26px] text-fs16 text-gray_911 text-left xl:ml-[177px] xl:my-[23px] xl:text-fs14">{`Login`}</Text>
            <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[46px] 3xl:mr-[38px] 3xl:my-[24px] font-inter h-[40px] lg:h-[32px] lg:ml-[30px] lg:mr-[24px] lg:my-[15px] ml-[39px] mr-[32px] my-[20px] w-[11%] xl:h-[36px] xl:ml-[34px] xl:mr-[28px] xl:my-[17px]">
              <Image
                src="img_background_31.svg"
                className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                alt="Background"
              />
              <Text className="3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:text-fs12">{`Create an Accouny`}</Text>
            </Stack>
          </Row>
        </div>
        <Stack className="2xl:h-[705px] 3xl:h-[846px] 3xl:mb-[57px] 3xl:mt-[28px] h-[704px] lg:h-[548px] lg:mb-[37px] lg:mt-[18px] mb-[48px] mt-[24px] mx-[auto] w-[93%] xl:h-[627px] xl:mb-[42px] xl:mt-[21px]">
          <Image
            src="img_insertimagehe_21.svg"
            className="2xl:h-[705px] 3xl:h-[846px] absolute h-[704px] inset-[0] lg:h-[548px] object-cover self-stretch w-[100%] xl:h-[627px]"
            alt="insertimagehe"
          />
          <Column className="3xl:left-[122px] absolute font-spacegrotesk h-[max-content] inset-y-[0] justify-start left-[102px] lg:left-[79px] my-[auto] w-[64%] xl:left-[90px]">
            <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mr-[12px] 3xl:text-fs76 font-bold font-spacegrotesk leading-lh7200 lg:leading-lh56 lg:mr-[7px] lg:text-fs49 mr-[10px] text-fs64 text-left text-white_A700 tracking-ls1 w-[65%] xl:leading-lh64 xl:mr-[8px] xl:text-fs56">{`Find Perfect Place To live life.`}</Text>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[43px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[28px] lg:text-fs15 mr-[10px] mt-[36px] text-fs20 text-left text-white_A700 w-[61%] xl:leading-lh32 xl:mr-[8px] xl:mt-[32px] xl:text-fs17">{`Trough our broad-based marketing opportunities and international presence,we provide maximum exposure for our listings, reaching qualified buyers`}</Text>
            <Column className="3xl:mt-[55px] items-center lg:mt-[35px] mt-[46px] self-stretch w-[100%] xl:mt-[40px]">
              <Stack className="2xl:h-[135px] 3xl:h-[161px] h-[134px] lg:h-[105px] self-stretch w-[100%] xl:h-[120px]">
                <Stack className="2xl:h-[135px] 3xl:h-[161px] absolute h-[134px] inset-[0] lg:h-[105px] self-stretch w-[100%] xl:h-[120px]">
                  <Row className="absolute font-spacegrotesk items-center justify-evenly left-[0] px-[0] top-[0] w-[45%]">
                    <Text className="3xl:pb-[42px] 3xl:pl-[42px] 3xl:pt-[14px] 3xl:text-fs19 bg-teal_401 font-semibold leading-lh lg:pb-[27px] lg:pl-[27px] lg:pt-[9px] lg:text-fs12 pb-[35px] pl-[35px] pt-[12px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[8px] rounded-tr-[0] text-fs16 text-left text-white_A700 w-[33%] xl:pb-[31px] xl:pl-[31px] xl:pt-[10px] xl:text-fs14">{`Home`}</Text>
                    <Row className="gap-[0] grid grid-cols-2 items-center justify-evenly w-[67%]">
                      <Stack className="2xl:h-[69px] 3xl:h-[82px] h-[68px] lg:h-[53px] w-[100%] xl:h-[61px]">
                        <div className="2xl:h-[69px] 3xl:h-[82px] absolute bg-white_A700 h-[68px] inset-[0] lg:h-[53px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[0] self-stretch w-[100%] xl:h-[61px]"></div>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] absolute bg-teal_51 h-[60px] lg:h-[47px] right-[0] top-[0] w-[1px] xl:h-[54px]" />
                      </Stack>
                      <div className="2xl:h-[69px] 3xl:h-[82px] bg-white_A700 h-[68px] lg:h-[53px] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[100%] xl:h-[61px]"></div>
                    </Row>
                  </Row>
                  <Row className="absolute bg-white_A700 bottom-[0] font-spacegrotesk items-center justify-between px-[0] rounded-bl-[8px] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] self-stretch shadow-bs21 w-[100%]">
                    <Column className="3xl:mb-[19px] 3xl:ml-[48px] 3xl:mt-[21px] justify-start lg:mb-[12px] lg:ml-[31px] lg:mt-[14px] mb-[16px] ml-[40px] mt-[18px] w-[26%] xl:mb-[14px] xl:ml-[35px] xl:mt-[16px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium font-spacegrotesk lg:mr-[7px] lg:text-fs12 mr-[10px] text-black_905 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Where`}</Text>
                      <Text className="3xl:mt-[13px] 3xl:text-fs19 font-inter font-normal lg:mt-[8px] lg:text-fs12 mt-[11px] self-stretch text-bluegray_804 text-fs16 text-left xl:mt-[9px] xl:text-fs14">{`City, Neighborhood or adress`}</Text>
                    </Column>
                    <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:my-[18px] bg-teal_51 h-[60px] lg:h-[47px] lg:my-[11px] my-[15px] w-[1px] xl:h-[54px] xl:my-[13px]" />
                    <Column className="3xl:mb-[19px] 3xl:mt-[20px] font-spacegrotesk justify-start lg:mb-[12px] lg:mt-[13px] mb-[16px] mt-[17px] w-[26%] xl:mb-[14px] xl:mt-[15px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:text-fs12 mr-[10px] text-black_905 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`When`}</Text>
                      <Column className="3xl:mt-[13px] items-center lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]">
                        <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 mb-[1px] text-bluegray_804 text-fs16 text-left xl:text-fs14">{`Select Move - In Date`}</Text>
                          <Image
                            src="img_iconographynav.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mt-[1px] lg:w-[18px] mt-[2px] object-contain w-[24px] xl:h-[22px] xl:mt-[1px] xl:w-[21px]"
                            alt="IconographyNav"
                          />
                        </Row>
                      </Column>
                    </Column>
                    <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[19px] 3xl:my-[20px] font-inter h-[56px] lg:h-[44px] lg:mr-[12px] lg:my-[13px] mr-[16px] my-[17px] w-[23%] xl:h-[50px] xl:mr-[14px] xl:my-[15px]">
                      <Image
                        src="img_background_32.svg"
                        className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                        alt="Background"
                      />
                      <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Browse Home`}</Text>
                    </Stack>
                  </Row>
                </Stack>
                <Row className="3xl:left-[211px] 3xl:top-[14px] absolute font-spacegrotesk items-center justify-center left-[176px] lg:left-[136px] lg:top-[9px] top-[12px] w-[19%] xl:left-[156px] xl:top-[10px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-black_905 text-fs16 text-left xl:text-fs14">{`Rent`}</Text>
                  <Text className="3xl:ml-[115px] 3xl:text-fs19 font-normal lg:ml-[74px] lg:text-fs12 ml-[96px] text-black_905 text-fs16 text-left xl:ml-[85px] xl:text-fs14">{`Sell`}</Text>
                </Row>
              </Stack>
            </Column>
          </Column>
        </Stack>
      </Column>
      <Image
        src="img_section2par.svg"
        className="2xl:h-[144px] 3xl:h-[172px] h-[143px] lg:h-[112px] object-cover self-stretch w-[100%] xl:h-[128px]"
        alt="Section2Par"
      />
      <Row className="bg-gray_54 items-end justify-start self-stretch w-[100%]">
        <Column className="3xl:mb-[91px] 3xl:ml-[180px] 3xl:mt-[193px] font-spacegrotesk justify-start lg:mb-[59px] lg:ml-[116px] lg:mt-[125px] mb-[76px] ml-[150px] mt-[161px] w-[40%] xl:mb-[67px] xl:ml-[133px] xl:mt-[143px]">
          <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:mr-[12px] 3xl:text-fs48 font-bold font-spacegrotesk leading-lh5200 lg:leading-lh40 lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-gray_911 text-left tracking-ls1 w-[86%] xl:leading-lh46 xl:mr-[8px] xl:text-fs35">{`New Project of Residential Development`}</Text>
          <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[32px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[21px] lg:text-fs15 mr-[10px] mt-[27px] text-fs20 text-gray_911 text-left w-[97%] xl:leading-lh32 xl:mr-[8px] xl:mt-[24px] xl:text-fs17">{`The sky was cloudless and of a deep dark blue the spectacle before us was indeed. The sky was cloudless and of a deep dark blue the spectacle.`}</Text>
          <Column className="3xl:mt-[182px] items-center lg:mt-[118px] mt-[152px] self-stretch w-[100%] xl:mt-[135px]">
            <Stack className="2xl:h-[485px] 3xl:h-[582px] h-[484px] lg:h-[377px] self-stretch w-[100%] xl:h-[431px]">
              <Image
                src="img_insertimagehe_22.svg"
                className="2xl:h-[361px] 3xl:h-[433px] absolute h-[360px] left-[0] lg:h-[280px] lg:top-[3px] object-contain top-[4px] w-[47%] xl:h-[321px] xl:top-[3px]"
                alt="Insertimagehe"
              />
              <Image
                src="img_insertimagehe_23.svg"
                className="2xl:h-[361px] 3xl:h-[433px] absolute bottom-[4px] h-[360px] lg:bottom-[3px] lg:h-[280px] lg:right-[3px] object-contain right-[4px] w-[47%] xl:bottom-[3px] xl:h-[321px] xl:right-[3px]"
                alt="Insertimagehe"
              />
              <Row className="absolute bg-white_A700 font-inter items-center justify-center right-[0] rounded-radius8 shadow-bs21 top-[0] w-[62%]">
                <Stack className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[24px] 3xl:my-[28px] 3xl:w-[72px] bg-white_A700 h-[60px] lg:h-[47px] lg:ml-[15px] lg:my-[18px] lg:w-[46px] ml-[20px] my-[24px] rounded-radius50 shadow-bs21 w-[60px] xl:h-[54px] xl:ml-[17px] xl:my-[21px] xl:w-[53px]">
                  <Image
                    src="img_iconographynav_2.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute h-[40px] inset-[0] justify-center lg:h-[32px] lg:w-[31px] m-[auto] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                    alt="IconographyNav"
                  />
                </Stack>
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mb-[30px] 3xl:ml-[19px] 3xl:mr-[30px] 3xl:mt-[32px] 3xl:text-fs21 font-medium leading-lh2800 lg:leading-lh21 lg:mb-[19px] lg:ml-[12px] lg:mr-[19px] lg:mt-[21px] lg:text-fs14 mb-[25px] ml-[16px] mr-[25px] mt-[27px] text-black_905 text-fs18 text-left w-[66%] xl:leading-lh24 xl:mb-[22px] xl:ml-[14px] xl:mr-[22px] xl:mt-[24px] xl:text-fs16">{`We Have more than 10 years of experience`}</Text>
              </Row>
              <Row className="absolute bg-white_A700 bottom-[0] font-inter items-center justify-start left-[0] rounded-radius8 shadow-bs21 w-[62%]">
                <Stack className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[24px] 3xl:my-[28px] 3xl:w-[72px] bg-white_A700 h-[60px] lg:h-[47px] lg:ml-[15px] lg:my-[18px] lg:w-[46px] ml-[20px] my-[24px] rounded-radius50 shadow-bs21 w-[60px] xl:h-[54px] xl:ml-[17px] xl:my-[21px] xl:w-[53px]">
                  <Image
                    src="img_iconographynav_3.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute h-[40px] inset-[0] justify-center lg:h-[32px] lg:w-[31px] m-[auto] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                    alt="IconographyNav"
                  />
                </Stack>
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mb-[30px] 3xl:ml-[19px] 3xl:mr-[30px] 3xl:mt-[32px] 3xl:text-fs21 font-medium leading-lh2800 lg:leading-lh21 lg:mb-[19px] lg:ml-[12px] lg:mr-[19px] lg:mt-[21px] lg:text-fs14 mb-[25px] ml-[16px] mr-[25px] mt-[27px] text-black_905 text-fs18 text-left w-[66%] xl:leading-lh24 xl:mb-[22px] xl:ml-[14px] xl:mr-[22px] xl:mt-[24px] xl:text-fs16">{`We use professional and experience personnel`}</Text>
              </Row>
            </Stack>
          </Column>
        </Column>
        <Column className="3xl:mb-[96px] 3xl:ml-[18px] 3xl:mr-[130px] 3xl:mt-[115px] font-spacegrotesk justify-start lg:mb-[62px] lg:ml-[11px] lg:mr-[84px] lg:mt-[74px] mb-[80px] ml-[15px] mr-[109px] mt-[96px] w-[41%] xl:mb-[71px] xl:ml-[13px] xl:mr-[96px] xl:mt-[85px]">
          <Image
            src="img_insetimageher.svg"
            className="2xl:h-[361px] 3xl:h-[433px] 3xl:mr-[12px] h-[360px] lg:h-[280px] lg:mr-[7px] mr-[10px] object-contain w-[93%] xl:h-[321px] xl:mr-[8px]"
            alt="InsetImageher"
          />
          <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:ml-[49px] 3xl:mt-[148px] 3xl:text-fs48 font-bold leading-lh5200 lg:leading-lh40 lg:ml-[31px] lg:mt-[96px] lg:text-fs31 ml-[41px] mt-[124px] text-fs40 text-gray_911 text-left tracking-ls1 w-[93%] xl:leading-lh46 xl:ml-[36px] xl:mt-[110px] xl:text-fs35">
            {
              <>
                {`Make Your Dream `}
                <br />
                {`Come True`}
              </>
            }
          </Text>
          <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
            <Row className="justify-start self-stretch w-[100%]">
              <Stack className="2xl:h-[61px] 3xl:h-[73px] 3xl:mb-[26px] 3xl:ml-[49px] 3xl:mt-[7px] 3xl:w-[72px] bg-white_A700 h-[60px] lg:h-[47px] lg:mb-[17px] lg:ml-[31px] lg:mt-[4px] lg:w-[46px] mb-[22px] ml-[41px] mt-[6px] rounded-radius50 shadow-bs21 w-[60px] xl:h-[54px] xl:mb-[19px] xl:ml-[36px] xl:mt-[5px] xl:w-[53px]">
                <Image
                  src="img_iconspacehome.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute h-[40px] inset-[0] justify-center lg:h-[32px] lg:w-[31px] m-[auto] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                  alt="iconspaceHome"
                />
              </Stack>
              <Column className="3xl:ml-[27px] 3xl:mr-[79px] font-spacegrotesk justify-start lg:ml-[17px] lg:mr-[51px] ml-[23px] mr-[66px] w-[68%] xl:ml-[20px] xl:mr-[58px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs24 font-medium font-spacegrotesk lg:mr-[7px] lg:text-fs15 mr-[10px] text-bluegray_900 text-fs20 text-left xl:mr-[8px] xl:text-fs17">{`Enjoy New Home`}</Text>
                <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[12px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh23 xl:mt-[8px] xl:text-fs14">{`Browse millions of properties in your city, sace your favorites and set up search alerts`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[36px] justify-start lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
              <Stack className="2xl:h-[61px] 3xl:h-[73px] 3xl:mb-[37px] 3xl:ml-[49px] 3xl:w-[72px] bg-white_A700 h-[60px] lg:h-[47px] lg:mb-[24px] lg:ml-[31px] lg:w-[46px] mb-[31px] ml-[41px] rounded-radius50 shadow-bs21 w-[60px] xl:h-[54px] xl:mb-[27px] xl:ml-[36px] xl:w-[53px]">
                <Image
                  src="img_iconographynav_4.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute h-[40px] inset-[0] justify-center lg:h-[32px] lg:w-[31px] m-[auto] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                  alt="IconographyNav"
                />
              </Stack>
              <Column className="3xl:ml-[27px] 3xl:mr-[79px] font-spacegrotesk justify-start lg:ml-[17px] lg:mr-[51px] ml-[23px] mr-[66px] w-[68%] xl:ml-[20px] xl:mr-[58px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs24 font-medium font-spacegrotesk lg:mr-[7px] lg:text-fs15 mr-[10px] text-bluegray_900 text-fs20 text-left xl:mr-[8px] xl:text-fs17">{`Close All Your Needs`}</Text>
                <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[15px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mt-[10px] lg:text-fs12 mt-[13px] self-stretch text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh23 xl:mt-[11px] xl:text-fs14">{`Was cloudless and of a deep dark blue the spectacle before us was indeed sublime cloudless.`}</Text>
              </Column>
            </Row>
          </Column>
          <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[63px] 3xl:mx-[49px] font-inter h-[56px] lg:h-[44px] lg:mt-[41px] lg:mx-[31px] mt-[53px] mx-[41px] w-[32%] xl:h-[50px] xl:mt-[47px] xl:mx-[36px]">
            <Image
              src="img_background_33.svg"
              className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
              alt="Background"
            />
            <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Explore More`}</Text>
          </Stack>
        </Column>
      </Row>
      <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
        <Row className="3xl:mt-[75px] font-spacegrotesk justify-between lg:mt-[49px] mt-[63px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
          <Text className="3xl:ml-[180px] 3xl:text-fs48 font-bold lg:ml-[116px] lg:mt-[3px] lg:text-fs31 ml-[150px] mt-[4px] text-fs40 text-gray_911 text-left tracking-ls1 xl:ml-[133px] xl:mt-[3px] xl:text-fs35">{`Popular Property Right Now`}</Text>
          <Image
            src="img_nav_1.svg"
            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[181px] h-[56px] lg:h-[44px] lg:mr-[117px] mr-[151px] object-contain w-[9%] xl:h-[50px] xl:mr-[134px]"
            alt="Nav"
          />
        </Row>
        <Row className="3xl:mt-[73px] items-center justify-end lg:mt-[47px] mt-[61px] self-stretch w-[100%] xl:mt-[54px]">
          <List
            className="3xl:gap-[28px] 3xl:ml-[180px] flex-wrap gap-[24px] grid grid-cols-3 lg:gap-[18px] lg:ml-[116px] min-h-[auto] ml-[150px] w-[76%] xl:gap-[21px] xl:ml-[133px]"
            orientation="horizontal"
          >
            <Stack className="2xl:h-[509px] 3xl:h-[610px] h-[508px] lg:h-[396px] w-[100%] xl:h-[452px]">
              <Stack className="2xl:h-[509px] 3xl:h-[610px] absolute h-[508px] inset-[0] lg:h-[396px] self-stretch w-[100%] xl:h-[452px]">
                <div className="2xl:h-[509px] 3xl:h-[610px] absolute bg-white_A700 h-[508px] inset-y-[0] left-[0] lg:h-[396px] right-[1px] rounded-radius10 shadow-bs15 w-[100%] xl:h-[452px]"></div>
                <Image
                  src="img_bitmap_6.svg"
                  className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                  alt="Bitmap"
                />
              </Stack>
              <Column className="3xl:bottom-[37px] absolute bottom-[31px] font-spacegrotesk inset-x-[0] justify-start lg:bottom-[24px] mx-[auto] w-[91%] xl:bottom-[27px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-inter items-center justify-between px-[0] self-stretch w-[100%]">
                    <Button className="2xl:pb-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[26px] 3xl:pr-[25px] 3xl:pt-[10px] 3xl:text-fs14 bg-white_A700_9c border-bw font-medium lg:pl-[17px] lg:pr-[16px] lg:py-[7px] lg:text-fs9 pb-[10.030001px] pl-[22px] pr-[21px] pt-[9.030001px] rounded-radius32 text-center text-fs12 text-teal_401 w-[33%] xl:pl-[19px] xl:pr-[18px] xl:py-[8px] xl:text-fs10">{`Apartment`}</Button>
                    <Image
                      src="img_heart_3.svg"
                      className="2xl:h-[17px] 2xl:mb-[7px] 3xl:h-[20px] 3xl:my-[9px] h-[16.36px] lg:h-[13px] lg:mb-[5px] lg:mt-[6px] mb-[7.6398926px] mt-[8px] object-contain w-[6%] xl:h-[15px] xl:mb-[6px] xl:mt-[7px]"
                      alt="heart"
                    />
                  </Row>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[31px] lg:text-fs15 mr-[10px] mt-[40px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs17">{`Greenhouse Franklin`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-inter font-normal lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-bluegray_404 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`325 East 38th Street, New York`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs28 font-bold font-spacegrotesk lg:mr-[7px] lg:mt-[12px] lg:text-fs18 mr-[10px] mt-[16px] text-fs24 text-left text-teal_401 xl:mr-[8px] xl:mt-[14px] xl:text-fs21">{`$ 144.220,00`}</Text>
              </Column>
            </Stack>
            <Stack className="2xl:h-[509px] 3xl:h-[610px] h-[508px] lg:h-[396px] w-[100%] xl:h-[452px]">
              <Stack className="2xl:h-[509px] 3xl:h-[610px] absolute h-[508px] inset-[0] lg:h-[396px] self-stretch w-[100%] xl:h-[452px]">
                <div className="2xl:h-[509px] 3xl:h-[610px] absolute bg-white_A700 border border-dashed border-gray_306 h-[508px] inset-y-[0] left-[0] lg:h-[396px] right-[1px] rounded-radius10 w-[100%] xl:h-[452px]"></div>
                <Image
                  src="img_bitmap_7.svg"
                  className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                  alt="Bitmap"
                />
              </Stack>
              <Column className="3xl:bottom-[37px] absolute bottom-[31px] font-spacegrotesk inset-x-[0] justify-start lg:bottom-[24px] mx-[auto] w-[91%] xl:bottom-[27px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-inter items-center justify-between px-[0] self-stretch w-[100%]">
                    <Button className="2xl:pb-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[26px] 3xl:pr-[25px] 3xl:pt-[10px] 3xl:text-fs14 bg-white_A700_9c border-bw font-medium lg:pl-[17px] lg:pr-[16px] lg:py-[7px] lg:text-fs9 pb-[10.030001px] pl-[22px] pr-[21px] pt-[9.030001px] rounded-radius32 text-center text-fs12 text-teal_401 w-[33%] xl:pl-[19px] xl:pr-[18px] xl:py-[8px] xl:text-fs10">{`Apartment`}</Button>
                    <Image
                      src="img_heart_3.svg"
                      className="2xl:h-[17px] 2xl:mb-[7px] 3xl:h-[20px] 3xl:my-[9px] h-[16.36px] lg:h-[13px] lg:mb-[5px] lg:mt-[6px] mb-[7.6398926px] mt-[8px] object-contain w-[6%] xl:h-[15px] xl:mb-[6px] xl:mt-[7px]"
                      alt="heart"
                    />
                  </Row>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[31px] lg:text-fs15 mr-[10px] mt-[40px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs17">{`Greenhouse Student`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-inter font-normal lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-bluegray_404 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`325 East 38th Street, New York`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs28 font-bold font-spacegrotesk lg:mr-[7px] lg:mt-[12px] lg:text-fs18 mr-[10px] mt-[16px] text-fs24 text-left text-teal_401 xl:mr-[8px] xl:mt-[14px] xl:text-fs21">{`$ 144.220,00`}</Text>
              </Column>
            </Stack>
            <Stack className="2xl:h-[509px] 3xl:h-[610px] h-[508px] lg:h-[396px] w-[100%] xl:h-[452px]">
              <Stack className="2xl:h-[509px] 3xl:h-[610px] absolute h-[508px] inset-[0] lg:h-[396px] self-stretch w-[100%] xl:h-[452px]">
                <div className="2xl:h-[509px] 3xl:h-[610px] absolute bg-white_A700 border border-dashed border-gray_306 h-[508px] inset-y-[0] left-[0] lg:h-[396px] right-[1px] rounded-radius10 w-[100%] xl:h-[452px]"></div>
                <Image
                  src="img_bitmap_8.svg"
                  className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                  alt="Bitmap"
                />
              </Stack>
              <Column className="3xl:bottom-[37px] absolute bottom-[31px] font-spacegrotesk inset-x-[0] justify-start lg:bottom-[24px] mx-[auto] w-[91%] xl:bottom-[27px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-inter items-center justify-between px-[0] self-stretch w-[100%]">
                    <Button className="2xl:pb-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[42px] 3xl:pr-[39px] 3xl:pt-[10px] 3xl:text-fs14 bg-white_A700_9c border-bw font-medium lg:pl-[27px] lg:pr-[25px] lg:py-[7px] lg:text-fs9 pb-[10.030001px] pl-[35px] pr-[33px] pt-[9.030001px] rounded-radius32 text-center text-fs12 text-teal_401 w-[33%] xl:pl-[31px] xl:pr-[29px] xl:py-[8px] xl:text-fs10">{`House`}</Button>
                    <Image
                      src="img_heart_3.svg"
                      className="2xl:h-[17px] 2xl:mb-[7px] 3xl:h-[20px] 3xl:my-[9px] h-[16.36px] lg:h-[13px] lg:mb-[5px] lg:mt-[6px] mb-[7.6398926px] mt-[8px] object-contain w-[6%] xl:h-[15px] xl:mb-[6px] xl:mt-[7px]"
                      alt="heart"
                    />
                  </Row>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[31px] lg:text-fs15 mr-[10px] mt-[40px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs17">{`Perum house Squiword`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs16 font-inter font-normal lg:mr-[7px] lg:mt-[6px] lg:text-fs10 mr-[10px] mt-[8px] text-bluegray_404 text-fs14 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs12">{`325 East 38th Street, New York`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs28 font-bold font-spacegrotesk lg:mr-[7px] lg:mt-[12px] lg:text-fs18 mr-[10px] mt-[16px] text-fs24 text-left text-teal_401 xl:mr-[8px] xl:mt-[14px] xl:text-fs21">{`$ 144.220,00`}</Text>
              </Column>
            </Stack>
          </List>
          <Column className="3xl:ml-[28px] bg-white_A700 border border-dashed border-gray_306 justify-start lg:ml-[18px] ml-[24px] rounded-radius10 w-[11%] xl:ml-[21px]">
            <Column className="items-center self-stretch w-[100%]">
              <Stack className="2xl:h-[349px] 3xl:h-[418px] h-[348px] lg:h-[271px] self-stretch w-[100%] xl:h-[310px]">
                <Image
                  src="img_bitmap_9.svg"
                  className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] inset-[0] lg:h-[271px] object-cover self-stretch w-[100%] xl:h-[310px]"
                  alt="Bitmap"
                />
                <Row className="3xl:bottom-[19px] absolute bottom-[16px] font-inter items-center justify-between lg:bottom-[12px] overflow-auto px-[0] right-[0] w-[90%] xl:bottom-[14px]">
                  <Button className="2xl:pb-[10px] 2xl:pt-[9px] 3xl:pb-[12px] 3xl:pl-[42px] 3xl:pr-[39px] 3xl:pt-[10px] 3xl:text-fs14 bg-white_A700_9c border-bw font-medium lg:pl-[27px] lg:pr-[25px] lg:py-[7px] lg:text-fs9 pb-[10.030001px] pl-[35px] pr-[33px] pt-[9.030001px] rounded-radius32 text-center text-fs12 text-teal_401 w-[70%] xl:pl-[31px] xl:pr-[29px] xl:py-[8px] xl:text-fs10">{`House`}</Button>
                  <Line className="2xl:h-[17px] 2xl:mb-[7px] 3xl:h-[20px] 3xl:my-[9px] h-[16.36px] lg:h-[13px] lg:mb-[5px] lg:mt-[6px] mb-[7.6398926px] mt-[8px] w-[1px] xl:h-[15px] xl:mb-[6px] xl:mt-[7px]" />
                </Row>
              </Stack>
            </Column>
            <Column className="3xl:mb-[37px] 3xl:mt-[28px] font-spacegrotesk lg:mb-[24px] lg:mt-[18px] mb-[31px] mt-[24px] self-stretch w-[100%] xl:mb-[27px] xl:mt-[21px]">
              <Text className="3xl:ml-[19px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:ml-[12px] lg:text-fs15 ml-[16px] text-fs20 text-gray_911 text-left xl:ml-[14px] xl:text-fs17">{`Greenhouse Franklin`}</Text>
              <Text className="3xl:ml-[19px] 3xl:mt-[9px] 3xl:text-fs16 font-inter font-normal lg:ml-[12px] lg:mt-[6px] lg:text-fs10 ml-[16px] mt-[8px] text-bluegray_404 text-fs14 text-left xl:ml-[14px] xl:mt-[7px] xl:text-fs12">{`325 East 38th Street, New York`}</Text>
              <Text className="3xl:ml-[19px] 3xl:mt-[19px] 3xl:text-fs28 font-bold font-spacegrotesk lg:ml-[12px] lg:mt-[12px] lg:text-fs18 ml-[16px] mt-[16px] text-fs24 text-left text-teal_401 xl:ml-[14px] xl:mt-[14px] xl:text-fs21">{`$ 144.220,00`}</Text>
            </Column>
          </Column>
        </Row>
        <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mb-[80px] 3xl:mt-[72px] font-inter h-[56px] lg:h-[44px] lg:mb-[52px] lg:mt-[46px] mb-[67px] mt-[60px] mx-[auto] w-[13%] xl:h-[50px] xl:mb-[59px] xl:mt-[53px]">
          <Image
            src="img_background_34.svg"
            className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
            alt="Background"
          />
          <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Explore More`}</Text>
        </Stack>
      </Column>
      <Row className="bg-gray_54 justify-start w-[100%]">
        <Column className="3xl:mb-[298px] 3xl:ml-[180px] 3xl:mt-[212px] font-spacegrotesk justify-start lg:mb-[193px] lg:ml-[116px] lg:mt-[137px] mb-[249px] ml-[150px] mt-[177px] w-[18%] xl:mb-[221px] xl:ml-[133px] xl:mt-[157px]">
          <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:text-fs48 font-bold font-spacegrotesk leading-lh5200 lg:leading-lh40 lg:text-fs31 self-stretch text-fs40 text-gray_911 text-left tracking-ls1 w-[100%] xl:leading-lh46 xl:text-fs35">{`Our Popular Cities`}</Text>
          <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[30px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mt-[19px] lg:text-fs15 mt-[25px] self-stretch text-fs20 text-gray_911 text-left w-[100%] xl:leading-lh32 xl:mt-[22px] xl:text-fs17">{`Find sweet deals appartments, houses and rooms for rent or buy in our most popular locations`}</Text>
          <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] 3xl:mt-[55px] font-inter h-[56px] lg:h-[44px] lg:mr-[7px] lg:mt-[35px] mr-[10px] mt-[46px] w-[72%] xl:h-[50px] xl:mr-[8px] xl:mt-[40px]">
            <Image
              src="img_background_35.svg"
              className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
              alt="Background"
            />
            <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Explore More`}</Text>
          </Stack>
        </Column>
        <Column className="2xl:ml-[28px] 3xl:mb-[110px] 3xl:ml-[34px] 3xl:mt-[135px] items-center justify-start lg:mb-[71px] lg:ml-[22px] lg:mt-[87px] mb-[92px] ml-[28.5px] mt-[113px] w-[18%] xl:mb-[81px] xl:ml-[25px] xl:mt-[100px]">
          <Image
            src="img_insertimagehe_24.svg"
            className="2xl:h-[509px] 3xl:h-[610px] h-[508px] lg:h-[396px] ml-[1px] object-contain w-[99%] xl:h-[452px]"
            alt="insertimagehe"
          />
          <Column className="3xl:mt-[28px] font-spacegrotesk justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-bluegray_908 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`Dubai, Arab Saudi`}</Text>
            <Column className="3xl:mt-[14px] items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
              <Row className="font-inter justify-start self-stretch w-[100%]">
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-teal_401 xl:text-fs16">{`Explore More`}</Text>
                <Image
                  src="img_icon_42.svg"
                  className="2xl:h-[18px] 2xl:mr-[118px] 3xl:h-[21px] 3xl:ml-[27px] 3xl:mr-[142px] h-[17px] lg:h-[14px] lg:ml-[17px] lg:mr-[92px] lg:mt-[3px] ml-[23px] mr-[118.5px] mt-[4px] object-contain w-[3%] xl:h-[16px] xl:ml-[20px] xl:mr-[105px] xl:mt-[3px]"
                  alt="Icon"
                />
              </Row>
            </Column>
          </Column>
        </Column>
        <Column className="2xl:ml-[28px] 3xl:mb-[108px] 3xl:ml-[34px] 3xl:mt-[135px] font-spacegrotesk items-center justify-start lg:mb-[70px] lg:ml-[22px] lg:mt-[87px] mb-[90px] ml-[28.5px] mt-[113px] w-[18%] xl:mb-[80px] xl:ml-[25px] xl:mt-[100px]">
          <Column className="justify-start self-stretch w-[100%]">
            <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-bluegray_908 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`Paris, Italia`}</Text>
            <Column className="3xl:mt-[14px] items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
              <Row className="font-inter justify-start self-stretch w-[100%]">
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-teal_401 xl:text-fs16">{`Explore More`}</Text>
                <Image
                  src="img_icon_42.svg"
                  className="2xl:h-[18px] 2xl:mr-[118px] 3xl:h-[21px] 3xl:ml-[27px] 3xl:mr-[142px] h-[17px] lg:h-[14px] lg:ml-[17px] lg:mr-[92px] lg:mt-[3px] ml-[23px] mr-[118.5px] mt-[4px] object-contain w-[3%] xl:h-[16px] xl:ml-[20px] xl:mr-[105px] xl:mt-[3px]"
                  alt="Icon"
                />
              </Row>
            </Column>
          </Column>
          <Image
            src="img_insertimagehe_25.svg"
            className="2xl:h-[509px] 3xl:h-[610px] 3xl:mt-[31px] h-[508px] lg:h-[396px] lg:mt-[20px] ml-[1px] mt-[26px] object-contain w-[99%] xl:h-[452px] xl:mt-[23px]"
            alt="InsertImageHe"
          />
        </Column>
        <Column className="2xl:ml-[28px] 3xl:mb-[110px] 3xl:ml-[34px] 3xl:mr-[176px] 3xl:mt-[135px] items-center justify-start lg:mb-[71px] lg:ml-[22px] lg:mr-[114px] lg:mt-[87px] mb-[92px] ml-[28.5px] mr-[147px] mt-[113px] w-[18%] xl:mb-[81px] xl:ml-[25px] xl:mr-[130px] xl:mt-[100px]">
          <Image
            src="img_insertimagehe_26.svg"
            className="2xl:h-[509px] 3xl:h-[610px] h-[508px] lg:h-[396px] object-contain w-[100%] xl:h-[452px]"
            alt="InsertImagehe"
          />
          <Column className="3xl:mt-[28px] font-spacegrotesk justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-bluegray_908 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`New York, USA`}</Text>
            <Column className="3xl:mt-[14px] items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
              <Row className="font-inter justify-start self-stretch w-[100%]">
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-teal_401 xl:text-fs16">{`Explore More`}</Text>
                <Image
                  src="img_icon_42.svg"
                  className="2xl:h-[18px] 2xl:mr-[117px] 3xl:h-[21px] 3xl:ml-[27px] 3xl:mr-[141px] h-[17px] lg:h-[14px] lg:ml-[17px] lg:mr-[91px] lg:mt-[3px] ml-[23px] mr-[117.5px] mt-[4px] object-contain w-[3%] xl:h-[16px] xl:ml-[20px] xl:mr-[104px] xl:mt-[3px]"
                  alt="Icon"
                />
              </Row>
            </Column>
          </Column>
        </Column>
      </Row>
      <Column className="bg-white_A700 font-spacegrotesk items-center justify-center self-stretch w-[100%]">
        <Text className="3xl:mt-[120px] 3xl:text-fs57 font-semibold font-spacegrotesk lg:mt-[77px] lg:text-fs37 mt-[100px] mx-[auto] text-center text-fs48 text-gray_911 tracking-ls1 xl:mt-[88px] xl:text-fs42">{`Frequently ask question`}</Text>
        <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[21px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mt-[14px] lg:text-fs15 mt-[18px] mx-[auto] text-center text-fs20 text-gray_911 w-[52%] xl:leading-lh32 xl:mt-[16px] xl:text-fs17">{`Everything you need to know right here at your fingertips. Ask questions, browse around for answers, or submit your feature requests.`}</Text>
        <Stack className="2xl:h-[166px] 3xl:h-[199px] 3xl:mt-[38px] h-[165px] lg:h-[129px] lg:mt-[24px] mt-[32px] mx-[auto] w-[56%] xl:h-[147px] xl:mt-[28px]">
          <Image
            src="img_base_4.svg"
            className="2xl:h-[166px] 3xl:h-[199px] absolute h-[165px] inset-[0] lg:h-[129px] object-cover self-stretch w-[100%] xl:h-[147px]"
            alt="Base"
          />
          <Column className="absolute font-inter h-[max-content] inset-[0] justify-center m-[auto] w-[95%]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-spacegrotesk justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:text-fs21 font-semibold lg:text-fs14 text-fs18 text-gray_911 text-left xl:text-fs16">{`What is the difference between Buy, Rent or  Sell?`}</Text>
                <Image
                  src="img_icon_40.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:mt-[6px] h-[18px] lg:h-[14px] lg:mt-[3px] mt-[5px] object-contain w-[2%] xl:h-[17px] xl:mt-[4px]"
                  alt="Icon"
                />
              </Row>
            </Column>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mr-[7px] lg:mt-[8px] lg:text-fs10 mr-[10px] mt-[11px] text-bluegray_403 text-fs14 text-left w-[93%] xl:leading-lh21 xl:mr-[8px] xl:mt-[9px] xl:text-fs12">{`Free version contains a limited amount of pre-designed blocks in comparison to the Pro version with more than 100 blocks. Also, Free version email exports can’t be used for commercial purposes either for your own business or your clients. You can read more about this on a License Page.`}</Text>
          </Column>
        </Stack>
        <div className="3xl:mt-[21px] 3xl:mx-[12px] bg-transparent border-bw lg:mt-[14px] lg:mx-[7px] mt-[18px] mx-[10px] w-[56%] xl:mt-[16px] xl:mx-[8px] input-wrap">
          <Image
            src="img_icon_43.svg"
            className="absolute top-[29.545px] bottom-[31.545px] right-[20px] border-bw bg-transparent lg:top-[22px] lg:bottom-[24px] lg:right-[15px] xl:top-[26px] xl:bottom-[28px] xl:right-[17px] 2xl:top-[29px] 2xl:bottom-[31px] 3xl:top-[35px] 3xl:bottom-[37px] 3xl:right-[24px]"
            alt="Icon"
          />
          <Button className="2xl:pb-[31px] 2xl:pt-[29px] 3xl:pb-[37px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:pt-[35px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-spacegrotesk lg:pb-[24px] lg:pl-[15px] lg:pr-[35px] lg:pt-[22px] lg:text-fs14 pb-[31.545px] pl-[20px] pr-[46px] pt-[29.545px] rounded-radius8 text-fs18 text-gray_911 text-left w-[100%] xl:pb-[28px] xl:pl-[17px] xl:pr-[40px] xl:pt-[26px] xl:text-fs16">{`Can I request an assistance to buy a house`}</Button>
        </div>
        <div className="3xl:mt-[21px] 3xl:mx-[12px] bg-transparent border-bw lg:mt-[14px] lg:mx-[7px] mt-[18px] mx-[10px] w-[56%] xl:mt-[16px] xl:mx-[8px] input-wrap">
          <Image
            src="img_icon_43.svg"
            className="absolute top-[29.545px] bottom-[31.545px] right-[20px] border-bw bg-transparent lg:top-[22px] lg:bottom-[24px] lg:right-[15px] xl:top-[26px] xl:bottom-[28px] xl:right-[17px] 2xl:top-[29px] 2xl:bottom-[31px] 3xl:top-[35px] 3xl:bottom-[37px] 3xl:right-[24px]"
            alt="Icon"
          />
          <Button className="2xl:pb-[31px] 2xl:pt-[29px] 3xl:pb-[37px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:pt-[35px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-spacegrotesk lg:pb-[24px] lg:pl-[15px] lg:pr-[35px] lg:pt-[22px] lg:text-fs14 pb-[31.545px] pl-[20px] pr-[46px] pt-[29.545px] rounded-radius8 text-fs18 text-gray_911 text-left w-[100%] xl:pb-[28px] xl:pl-[17px] xl:pr-[40px] xl:pt-[26px] xl:text-fs16">{`Can I choose location house?`}</Button>
        </div>
        <div className="3xl:mt-[21px] 3xl:mx-[12px] bg-transparent border-bw lg:mt-[14px] lg:mx-[7px] mt-[18px] mx-[10px] w-[56%] xl:mt-[16px] xl:mx-[8px] input-wrap">
          <Image
            src="img_icon_43.svg"
            className="absolute top-[29.545px] bottom-[31.545px] right-[20px] border-bw bg-transparent lg:top-[22px] lg:bottom-[24px] lg:right-[15px] xl:top-[26px] xl:bottom-[28px] xl:right-[17px] 2xl:top-[29px] 2xl:bottom-[31px] 3xl:top-[35px] 3xl:bottom-[37px] 3xl:right-[24px]"
            alt="Icon"
          />
          <Button className="2xl:pb-[31px] 2xl:pt-[29px] 3xl:pb-[37px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:pt-[35px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-spacegrotesk lg:pb-[24px] lg:pl-[15px] lg:pr-[35px] lg:pt-[22px] lg:text-fs14 pb-[31.545px] pl-[20px] pr-[46px] pt-[29.545px] rounded-radius8 text-fs18 text-gray_911 text-left w-[100%] xl:pb-[28px] xl:pl-[17px] xl:pr-[40px] xl:pt-[26px] xl:text-fs16">{`Why do my custom house, apartment or room?`}</Button>
        </div>
        <div className="3xl:mt-[21px] 3xl:mx-[12px] bg-transparent border-bw lg:mt-[14px] lg:mx-[7px] mt-[18px] mx-[10px] w-[56%] xl:mt-[16px] xl:mx-[8px] input-wrap">
          <Image
            src="img_icon_43.svg"
            className="absolute top-[29.545px] bottom-[31.545px] right-[20px] border-bw bg-transparent lg:top-[22px] lg:bottom-[24px] lg:right-[15px] xl:top-[26px] xl:bottom-[28px] xl:right-[17px] 2xl:top-[29px] 2xl:bottom-[31px] 3xl:top-[35px] 3xl:bottom-[37px] 3xl:right-[24px]"
            alt="Icon"
          />
          <Button className="2xl:pb-[31px] 2xl:pt-[29px] 3xl:pb-[37px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:pt-[35px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-spacegrotesk lg:pb-[24px] lg:pl-[15px] lg:pr-[35px] lg:pt-[22px] lg:text-fs14 pb-[31.545px] pl-[20px] pr-[46px] pt-[29.545px] rounded-radius8 text-fs18 text-gray_911 text-left w-[100%] xl:pb-[28px] xl:pl-[17px] xl:pr-[40px] xl:pt-[26px] xl:text-fs16">{`Can I get guaranted from buy a house or apartment?`}</Button>
        </div>
        <div className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:mx-[12px] bg-transparent border-bw lg:mb-[15px] lg:mt-[14px] lg:mx-[7px] mb-[20px] mt-[18px] mx-[10px] w-[56%] xl:mb-[17px] xl:mt-[16px] xl:mx-[8px] input-wrap">
          <Image
            src="img_icon_43.svg"
            className="absolute top-[29.545px] bottom-[31.545px] right-[20px] border-bw bg-transparent lg:top-[22px] lg:bottom-[24px] lg:right-[15px] xl:top-[26px] xl:bottom-[28px] xl:right-[17px] 2xl:top-[29px] 2xl:bottom-[31px] 3xl:top-[35px] 3xl:bottom-[37px] 3xl:right-[24px]"
            alt="Icon"
          />
          <Button className="2xl:pb-[31px] 2xl:pt-[29px] 3xl:pb-[37px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:pt-[35px] 3xl:text-fs21 bg-white_A700 border-bw font-medium font-spacegrotesk lg:pb-[24px] lg:pl-[15px] lg:pr-[35px] lg:pt-[22px] lg:text-fs14 pb-[31.545px] pl-[20px] pr-[46px] pt-[29.545px] rounded-radius8 text-fs18 text-gray_911 text-left w-[100%] xl:pb-[28px] xl:pl-[17px] xl:pr-[40px] xl:pt-[26px] xl:text-fs16">{`What feature can i get frim buy here?`}</Button>
        </div>
      </Column>
      <div className="self-stretch w-[100%]">
        <Column className="bg-gray_54 font-spacegrotesk items-center justify-end self-stretch w-[100%]">
          <Row className="3xl:mt-[84px] items-center justify-evenly lg:mt-[54px] mt-[70px] px-[0] self-stretch w-[100%] xl:mt-[62px]">
            <Text className="2xl:leading-lh48 3xl:leading-lh57 3xl:text-fs43 font-medium leading-lh4800 lg:leading-lh37 lg:text-fs28 text-fs36 text-gray_911 text-left tracking-ls1 w-[32%] xl:leading-lh42 xl:text-fs32">
              {
                <>
                  {`Don’t miss our update.`}
                  <br />
                  {`Subscribe us for more info`}
                </>
              }
            </Text>
            <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:mb-[12px] 3xl:mt-[16px] h-[72px] lg:h-[56px] lg:mb-[7px] lg:mt-[10px] mb-[10px] mt-[14px] w-[35%] xl:h-[65px] xl:mb-[8px] xl:mt-[12px]">
              <Column className="absolute bg-black_900_00 font-inter inset-[0] items-center justify-start rounded-radius8 self-stretch shadow-bs16 w-[100%]">
                <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                  <Image
                    src="img_icon_21.svg"
                    className="absolute top-[29.375px] bottom-[24.375px] left-[19px] bg-transparent border-0 lg:top-[22px] lg:bottom-[18px] lg:left-[14px] xl:top-[26px] xl:bottom-[21px] xl:left-[16px] 2xl:top-[29px] 2xl:bottom-[24px] 3xl:top-[35px] 3xl:bottom-[29px] 3xl:left-[22px]"
                    alt="Icon"
                  />
                  <Input
                    className="2xl:pb-[24px] 2xl:pt-[29px] 3xl:pb-[29px] 3xl:pl-[56px] 3xl:pt-[35px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[18px] lg:pl-[36px] lg:pt-[22px] lg:text-fs12 pb-[24.375px] pl-[47px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[29.375px] rounded-radius8 text-bluegray_403 text-fs16 text-left w-[100%] xl:pb-[21px] xl:pl-[41px] xl:pt-[26px] xl:text-fs14"
                    name="Group410"
                    placeholder={`Enter your email address`}
                  ></Input>
                </div>
              </Column>
              <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:right-[9px] absolute font-inter h-[56px] inset-y-[0] lg:h-[44px] lg:right-[6px] my-[auto] right-[8px] w-[35%] xl:h-[50px] xl:right-[7px]">
                <Image
                  src="img_background_15.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Get Started`}</Text>
              </Stack>
            </Stack>
          </Row>
          <Line className="3xl:mt-[79px] bg-bluegray_50 h-[1px] lg:mt-[51px] mt-[66px] mx-[auto] w-[79%] xl:mt-[58px]" />
          <Row className="3xl:mb-[61px] 3xl:mt-[75px] justify-evenly lg:mb-[39px] lg:mt-[49px] mb-[51px] mt-[63px] px-[0] self-stretch w-[100%] xl:mb-[45px] xl:mt-[56px]">
            <Row className="justify-center w-[68%]">
              <Column className="3xl:ml-[180px] font-spacegrotesk justify-start lg:ml-[116px] ml-[150px] w-[13%] xl:ml-[133px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-spacegrotesk lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Our Products`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[27px] 3xl:text-fs16 font-inter font-normal leading-lh2000 lg:leading-lh15 lg:mt-[17px] lg:text-fs10 mt-[23px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[20px] xl:text-fs12">
                  {
                    <>
                      {`The Support Suite`}
                      <br />
                      {`The Sales Suite`}
                      <br />
                      {`Support`}
                      <br />
                      {`Guide`}
                      <br />
                      {`Explore`}
                      <br />
                      {`Connect`}
                      <br />
                      {`Integrations & Apps`}
                      <br />
                      {`Product Updates`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:mb-[48px] 3xl:ml-[145px] font-spacegrotesk justify-start lg:mb-[31px] lg:ml-[94px] mb-[40px] ml-[121px] w-[13%] xl:mb-[35px] xl:ml-[107px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-spacegrotesk lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Top Features`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[27px] 3xl:text-fs16 font-inter font-normal leading-lh2000 lg:leading-lh15 lg:mt-[17px] lg:text-fs10 mt-[23px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[20px] xl:text-fs12">
                  {
                    <>
                      {`Ticketing System`}
                      <br />
                      {`Knowledge Base`}
                      <br />
                      {`Community Forums`}
                      <br />
                      {`Help Desk Software`}
                      <br />
                      {`Security`}
                      <br />
                      {`Human Resources`}
                      <br />
                      {`Media`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:ml-[142px] font-spacegrotesk justify-start lg:ml-[92px] ml-[119px] w-[13%] xl:ml-[105px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-semibold font-spacegrotesk lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Resources`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[27px] 3xl:text-fs16 font-inter font-normal leading-lh2000 lg:leading-lh15 lg:mt-[17px] lg:text-fs10 mt-[23px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[20px] xl:text-fs12">
                  {
                    <>
                      {`Product Support`}
                      <br />
                      {`Request Demo`}
                      <br />
                      {`Library`}
                      <br />
                      {`Designspace Blog`}
                      <br />
                      {`Training`}
                      <br />
                      {`Service & Partners`}
                      <br />
                      {`Relate by Zendesk`}
                      <br />
                      {`Webinars`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:ml-[144px] font-spacegrotesk justify-start lg:ml-[93px] ml-[120px] w-[9%] xl:ml-[106px]">
                <Text className="3xl:text-fs21 font-semibold font-spacegrotesk lg:mr-[1px] lg:text-fs14 mr-[2px] text-fs18 text-gray_911 text-left xl:mr-[1px] xl:text-fs16">{`Company`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[27px] 3xl:text-fs16 font-inter font-normal leading-lh2000 lg:leading-lh15 lg:mr-[1px] lg:mt-[17px] lg:text-fs10 mr-[2px] mt-[23px] text-fs14 text-gray_911 text-left w-[98%] xl:leading-lh17 xl:mr-[1px] xl:mt-[20px] xl:text-fs12">
                  {
                    <>
                      {`About Us`}
                      <br />
                      {`Press`}
                      <br />
                      {`House`}
                      <br />
                      {`Appartment`}
                      <br />
                      {`Room`}
                      <br />
                      {`Town House`}
                      <br />
                      {`Contact Us`}
                      <br />
                      {`Sitemaps`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Column className="3xl:mb-[48px] font-spacegrotesk justify-start lg:mb-[31px] mb-[40px] w-[10%] xl:mb-[35px]">
              <Text className="3xl:text-fs21 font-semibold font-spacegrotesk lg:mr-[1px] lg:text-fs14 mr-[2px] text-fs18 text-gray_911 text-left xl:mr-[1px] xl:text-fs16">{`Favourite Things`}</Text>
              <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mr-[12px] 3xl:mt-[27px] 3xl:text-fs16 font-inter font-normal leading-lh2000 lg:leading-lh15 lg:mr-[7px] lg:mt-[17px] lg:text-fs10 mr-[10px] mt-[23px] text-fs14 text-gray_911 text-left w-[85%] xl:leading-lh17 xl:mr-[8px] xl:mt-[20px] xl:text-fs12">
                {
                  <>
                    {`For Enterprise`}
                    <br />
                    {`For Startups`}
                    <br />
                    {`For Benchmark`}
                    <br />
                    {`For Small Business`}
                    <br />
                    {`CRM Quadrant`}
                    <br />
                    {`Experience`}
                    <br />
                    {`Trends`}
                  </>
                }
              </Text>
            </Column>
          </Row>
        </Column>
      </div>
    </Column>
  );
};

export default RealEstatePage;
