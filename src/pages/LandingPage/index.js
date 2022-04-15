import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";

const LandingPagePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1069px] 3xl:h-[1283px] h-[1068px] lg:h-[831px] self-stretch w-[100%] xl:h-[951px]">
        <Stack className="2xl:h-[1069px] 3xl:h-[1283px] absolute h-[1068px] inset-[0] lg:h-[831px] self-stretch w-[100%] xl:h-[951px]">
          <div className="2xl:h-[769px] 3xl:h-[923px] absolute bg-gray_919 h-[768px] lg:h-[598px] self-stretch top-[0] w-[100%] xl:h-[684px]"></div>
          <div className="2xl:h-[601px] 3xl:h-[721px] absolute bg-gray_400 bottom-[0] h-[600px] inset-x-[0] lg:h-[467px] mx-[auto] w-[83%] xl:h-[534px]"></div>
        </Stack>
        <Column className="3xl:top-[33px] absolute font-opensans inset-x-[0] items-center justify-start lg:top-[21px] mx-[auto] top-[28px] w-[83%] xl:top-[24px]">
          <div className="self-stretch w-[100%]">
            <Row className="font-opensans items-center justify-start self-stretch w-[100%]">
              <Text className="3xl:my-[9px] 3xl:text-fs19 font-bold lg:my-[6px] lg:text-fs12 my-[8px] text-fs16 text-left text-white_A700 xl:my-[7px] xl:text-fs14">{`Jomblog`}</Text>
              <Row className="3xl:mb-[12px] 3xl:ml-[541px] 3xl:mt-[10px] items-center justify-center lg:ml-[350px] lg:my-[7px] mb-[10px] ml-[451px] mt-[9px] w-[28%] xl:ml-[401px] xl:my-[8px]">
                <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700 xl:text-fs12">{`Blog`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs16 font-normal lg:ml-[31px] lg:text-fs10 ml-[40px] text-fs14 text-left text-white_A700 xl:ml-[35px] xl:text-fs12">{`Pricing`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs16 font-normal lg:ml-[31px] lg:text-fs10 ml-[40px] text-fs14 text-left text-white_A700 xl:ml-[35px] xl:text-fs12">{`How it works`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs16 font-normal lg:ml-[31px] lg:text-fs10 ml-[40px] text-fs14 text-left text-white_A700 xl:ml-[35px] xl:text-fs12">{`Company`}</Text>
              </Row>
              <Text className="3xl:mb-[12px] 3xl:ml-[168px] 3xl:mt-[10px] 3xl:text-fs16 font-normal lg:ml-[108px] lg:my-[7px] lg:text-fs10 mb-[10px] ml-[140px] mt-[9px] text-fs14 text-left text-white_A700 xl:ml-[124px] xl:my-[8px] xl:text-fs12">{`Sign In`}</Text>
              <Button className="2xl:pb-[11px] 2xl:pt-[10px] 3xl:ml-[48px] 3xl:pb-[13px] 3xl:pl-[40px] 3xl:pr-[38px] 3xl:pt-[12px] 3xl:text-fs16 bg-blue_800 border-bw font-semibold lg:ml-[31px] lg:pb-[8px] lg:pl-[26px] lg:pr-[24px] lg:pt-[7px] lg:text-fs10 ml-[40px] pb-[11.205px] pl-[34px] pr-[32px] pt-[10.205px] text-center text-fs14 text-white_A700 w-[10%] xl:ml-[35px] xl:pl-[30px] xl:pr-[28px] xl:py-[9px] xl:text-fs12">{`Sign Up`}</Button>
            </Row>
          </div>
          <Row className="3xl:mt-[62px] justify-start lg:mt-[40px] mt-[52px] self-stretch w-[100%] xl:mt-[46px]">
            <Row className="items-center justify-between lg:mb-[2px] lg:mt-[1px] mb-[3px] mt-[2px] px-[0] w-[36%] xl:mb-[2px] xl:mt-[1px]">
              <Text className="3xl:text-fs16 font-semibold lg:text-fs10 text-fs14 text-left text-white_A700 xl:text-fs12">{`Popular`}</Text>
              <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700_99 xl:text-fs12">{`Trending topic`}</Text>
              <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700_99 xl:text-fs12">{`Recommended`}</Text>
              <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-left text-white_A700_99 xl:text-fs12">{`Hot & top`}</Text>
            </Row>
            <Image
              src="img_7_1.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[740px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[479px] lg:w-[18px] ml-[617px] object-contain w-[24px] xl:h-[22px] xl:ml-[548px] xl:w-[21px]"
              alt="7"
            />
            <Text className="3xl:ml-[9px] 3xl:text-fs16 font-normal lg:mb-[2px] lg:ml-[6px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[8px] mt-[2px] text-fs14 text-gray_508 text-left xl:mb-[2px] xl:ml-[7px] xl:mt-[1px] xl:text-fs12">{`Search by title, etc`}</Text>
          </Row>
          <Line className="3xl:mt-[19px] h-[1px] lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]" />
          <Row className="3xl:mt-[142px] font-opensans items-center justify-between lg:mt-[92px] mt-[119px] px-[0] self-stretch w-[100%] xl:mt-[105px]">
            <Image
              src="img_group1872.svg"
              className="2xl:h-[41px] 3xl:h-[49px] 3xl:my-[66px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:my-[42px] lg:w-[31px] my-[55px] object-contain w-[40px] xl:h-[36px] xl:my-[48px] xl:w-[35px]"
              alt="Group1872"
            />
            <Text className="2xl:leading-lh75 3xl:leading-lh90 3xl:text-fs57 font-bold leading-lh7500 lg:leading-lh58 lg:text-fs37 text-center text-fs48 text-white_A700 w-[49%] xl:leading-lh66 xl:text-fs42">
              {
                <>
                  {`Architects with different`}
                  <br />
                  {`approach for you`}
                </>
              }
            </Text>
            <Image
              src="img_group1873.svg"
              className="2xl:h-[41px] 3xl:h-[49px] 3xl:my-[66px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:my-[42px] lg:w-[31px] my-[55px] object-contain w-[40px] xl:h-[36px] xl:my-[48px] xl:w-[35px]"
              alt="Group1873"
            />
          </Row>
        </Column>
      </Stack>
      <Column className="3xl:mt-[132px] bg-white_A700 items-center justify-start lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Row className="3xl:mt-[48px] font-opensans items-center justify-between lg:mt-[31px] mt-[40px] px-[0] self-stretch w-[100%] xl:mt-[35px]">
          <Column className="3xl:ml-[144px] justify-start lg:ml-[93px] ml-[120px] w-[28%] xl:ml-[106px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs48 font-bold lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-gray_908 text-left xl:mr-[8px] xl:text-fs35">{`Trending Topic`}</Text>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-fs14 text-gray_900_100 text-left w-[100%] xl:leading-lh21 xl:mt-[14px] xl:text-fs12">
              {
                <>
                  {`The best articles for you to learn and read which are currently`}
                  <br />
                  {`trending topics especially for you`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_group1792.svg"
            className="2xl:h-[41px] 3xl:h-[49px] 3xl:mr-[144px] 3xl:my-[46px] h-[40px] lg:h-[32px] lg:mr-[93px] lg:my-[30px] mr-[120px] my-[39px] object-contain w-[7%] xl:h-[36px] xl:mr-[106px] xl:my-[34px]"
            alt="Group1792"
          />
        </Row>
        <Row className="3xl:mb-[48px] 3xl:mt-[62px] font-opensans justify-between lg:mb-[31px] lg:mt-[40px] mb-[40px] mt-[52px] px-[0] self-stretch w-[100%] xl:mb-[35px] xl:mt-[46px]">
          <Column className="3xl:mb-[33px] 3xl:ml-[144px] justify-start lg:mb-[21px] lg:ml-[93px] mb-[28px] ml-[120px] w-[36%] xl:mb-[24px] xl:ml-[106px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs28 font-semibold leading-lh lg:mr-[7px] lg:text-fs18 mr-[10px] text-black_900 text-fs24 text-left w-[87%] xl:mr-[8px] xl:text-fs21">
              {
                <>
                  {`Work in the field of technology with`}
                  <br />
                  {`great fun and work with the best team`}
                </>
              }
            </Text>
            <Row className="3xl:mr-[12px] 3xl:mt-[28px] items-center justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[33%] xl:mr-[8px] xl:mt-[21px]">
              <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_400 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
              <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] mt-[1px] w-[67%] xl:ml-[14px]">
                <Text className="3xl:text-fs16 font-semibold lg:text-fs10 self-stretch text-fs14 text-gray_908 text-left xl:text-fs12">{`Benjamin Robert`}</Text>
                <Text className="3xl:text-fs14 font-normal lg:mr-[3px] lg:mt-[3px] lg:text-fs9 mr-[4px] mt-[4px] text-fs12 text-gray_508 text-left xl:mr-[3px] xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
              </Column>
            </Row>
            <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[18px] lg:text-fs10 mt-[24px] self-stretch text-fs14 text-gray_900_100 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs12">
              {
                <>
                  {`Work in the field of technology with great fun and work with the best team`}
                  <br />
                  {`build your career as much as possible to improve your abilities and skills in the`}
                  <br />
                  {`technology field that is currently popular, namely artificial intelligence.`}
                </>
              }
            </Text>
            <Button className="2xl:py-[17px] 3xl:mr-[12px] 3xl:mt-[48px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs19 bg-blue_800 border-bw font-semibold lg:mr-[7px] lg:mt-[31px] lg:px-[27px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[40px] px-[35px] py-[17.375px] text-center text-fs16 text-white_A700 w-[32%] xl:mr-[8px] xl:mt-[35px] xl:px-[31px] xl:py-[15px] xl:text-fs14">{`Read More`}</Button>
          </Column>
          <div className="2xl:h-[361px] 3xl:h-[433px] 3xl:mr-[144px] bg-gray_400 h-[360px] lg:h-[280px] lg:mr-[93px] mr-[120px] w-[38%] xl:h-[321px] xl:mr-[106px]"></div>
        </Row>
      </Column>
      <Column className="3xl:mt-[132px] bg-white_A700 items-center justify-start lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Row className="3xl:mt-[48px] font-opensans items-center justify-start lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Column className="3xl:ml-[144px] justify-start lg:ml-[93px] ml-[120px] w-[33%] xl:ml-[106px]">
            <Text className="3xl:text-fs48 font-bold lg:text-fs31 self-stretch text-fs40 text-gray_908 text-left xl:text-fs35">{`Travelling And Lifestyle`}</Text>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-fs14 text-gray_900_100 text-left w-[86%] xl:leading-lh21 xl:mr-[8px] xl:mt-[14px] xl:text-fs12">
              {
                <>
                  {`The best articles for you to learn and read which are currently`}
                  <br />
                  {`travelling & lifestyle especially for you`}
                </>
              }
            </Text>
          </Column>
          <Text className="3xl:ml-[571px] 3xl:my-[56px] 3xl:text-fs16 font-semibold lg:ml-[370px] lg:my-[36px] lg:text-fs10 ml-[476px] my-[47px] text-blue_800 text-fs14 text-left xl:ml-[423px] xl:my-[41px] xl:text-fs12">{`All traveling and lifestyle articles`}</Text>
          <Image
            src="img_group1827.svg"
            className="2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[14px] 3xl:mr-[144px] 3xl:my-[62px] h-[14px] lg:h-[11px] lg:ml-[9px] lg:mr-[93px] lg:my-[40px] ml-[12px] mr-[120px] my-[52px] object-contain w-[2%] xl:h-[13px] xl:ml-[10px] xl:mr-[106px] xl:my-[46px]"
            alt="Group1827"
          />
        </Row>
        <Row className="3xl:mb-[48px] 3xl:mt-[62px] justify-start lg:mb-[31px] lg:mt-[40px] mb-[40px] mt-[52px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[46px]">
          <Column className="3xl:ml-[144px] font-opensans justify-start lg:ml-[93px] ml-[120px] w-[38%] xl:ml-[106px]">
            <Column className="items-center self-stretch w-[100%]">
              <div className="2xl:h-[361px] 3xl:h-[433px] bg-gray_400 h-[360px] lg:h-[280px] self-stretch w-[100%] xl:h-[321px]"></div>
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 font-semibold leading-lh lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-fs24 text-gray_908 text-left w-[76%] xl:mr-[8px] xl:mt-[35px] xl:text-fs21">
              {
                <>
                  {`Helping you plan your skiing holiday`}
                  <br />
                  {`with ease and fun for you`}
                </>
              }
            </Text>
            <Row className="3xl:mr-[12px] 3xl:mt-[28px] items-center justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[31%] xl:mr-[8px] xl:mt-[21px]">
              <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] bg-gray_400 h-[40px] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
              <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] mt-[1px] w-[67%] xl:ml-[14px]">
                <Text className="3xl:text-fs16 font-semibold lg:text-fs10 self-stretch text-fs14 text-gray_908 text-left xl:text-fs12">{`Benjamin Robert`}</Text>
                <Text className="3xl:text-fs14 font-normal lg:mr-[3px] lg:mt-[3px] lg:text-fs9 mr-[4px] mt-[4px] text-fs12 text-gray_508 text-left xl:mr-[3px] xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
              </Column>
            </Row>
            <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:mr-[7px] lg:mt-[18px] lg:text-fs10 mr-[10px] mt-[24px] text-fs14 text-gray_900_100 text-left w-[91%] xl:leading-lh24 xl:mr-[8px] xl:mt-[21px] xl:text-fs12">
              {
                <>
                  {`helps you plan your ski vacation easily and fun for you during a long vacation`}
                  <br />
                  {`as a medium of entertainment and your mind to maintain your mental`}
                </>
              }
            </Text>
          </Column>
          <Column className="3xl:mb-[40px] 3xl:ml-[115px] 3xl:mr-[166px] items-center justify-start lg:mb-[26px] lg:ml-[74px] lg:mr-[108px] mb-[34px] ml-[96px] mr-[139px] w-[37%] xl:mb-[30px] xl:ml-[85px] xl:mr-[123px]">
            <List
              className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
              orientation="vertical"
            >
              <Row className="3xl:mr-[15px] 3xl:my-[19px] items-center justify-between lg:mr-[10px] lg:my-[12px] mr-[13px] my-[16px] px-[0] w-[98%] xl:mr-[11px] xl:my-[14px]">
                <div className="2xl:h-[121px] 3xl:h-[145px] bg-gray_400 h-[120px] lg:h-[94px] w-[31%] xl:h-[107px]"></div>
                <Column className="3xl:mb-[6px] 3xl:mt-[7px] font-opensans justify-start lg:mb-[3px] lg:mt-[4px] mb-[5px] mt-[6px] w-[65%] xl:mb-[4px] xl:mt-[5px]">
                  <Text className="3xl:text-fs24 font-semibold leading-lh lg:text-fs15 self-stretch text-fs20 text-gray_908 text-left w-[100%] xl:text-fs17">
                    {
                      <>
                        {`Clean the bedroom fun and easy in`}
                        <br />
                        {`a fun way with your friends`}
                      </>
                    }
                  </Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[19px] items-center justify-start lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[48%] xl:mr-[8px] xl:mt-[14px]">
                    <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-gray_400 h-[32px] lg:h-[25px] lg:mb-[3px] lg:mt-[2px] lg:w-[24px] mb-[4px] mt-[3px] rounded-radius50 w-[32px] xl:h-[29px] xl:mb-[3px] xl:mt-[2px] xl:w-[28px]"></div>
                    <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] w-[70%] xl:ml-[14px]">
                      <Text className="3xl:text-fs16 font-semibold lg:text-fs10 self-stretch text-fs14 text-gray_908 text-left xl:text-fs12">{`Benjamin Robert`}</Text>
                      <Text className="3xl:text-fs14 font-normal lg:mr-[3px] lg:mt-[3px] lg:text-fs9 mr-[4px] mt-[4px] text-fs12 text-gray_508 text-left xl:mr-[3px] xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
              <Row className="3xl:my-[19px] items-center justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
                <div className="2xl:h-[121px] 3xl:h-[145px] bg-gray_400 h-[120px] lg:h-[94px] w-[30%] xl:h-[107px]"></div>
                <Column className="3xl:mb-[6px] 3xl:mt-[7px] font-opensans justify-start lg:mb-[3px] lg:mt-[4px] mb-[5px] mt-[6px] w-[66%] xl:mb-[4px] xl:mt-[5px]">
                  <Text className="3xl:text-fs24 font-semibold leading-lh lg:text-fs15 self-stretch text-fs20 text-gray_908 text-left w-[100%] xl:text-fs17">
                    {
                      <>
                        {`Vacation with your loved ones in the`}
                        <br />
                        {`most beautiful place in the world`}
                      </>
                    }
                  </Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[19px] items-center justify-start lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[45%] xl:mr-[8px] xl:mt-[14px]">
                    <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-gray_400 h-[32px] lg:h-[25px] lg:mb-[3px] lg:mt-[2px] lg:w-[24px] mb-[4px] mt-[3px] rounded-radius50 w-[32px] xl:h-[29px] xl:mb-[3px] xl:mt-[2px] xl:w-[28px]"></div>
                    <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] w-[70%] xl:ml-[14px]">
                      <Text className="3xl:mr-[10px] 3xl:text-fs16 font-semibold lg:mr-[7px] lg:text-fs10 mr-[9px] text-fs14 text-gray_908 text-left xl:mr-[8px] xl:text-fs12">{`Burhan Growls`}</Text>
                      <Text className="3xl:text-fs14 font-normal lg:mt-[3px] lg:text-fs9 mt-[4px] self-stretch text-fs12 text-gray_508 text-left xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </List>
            <Row className="3xl:mt-[38px] items-center justify-between lg:mt-[24px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[28px]">
              <Column className="items-center justify-start w-[30%]">
                <div className="2xl:h-[121px] 3xl:h-[145px] bg-gray_400 h-[120px] lg:h-[94px] self-stretch w-[100%] xl:h-[107px]"></div>
                <div className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[38px] bg-gray_400 h-[120px] lg:h-[94px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:h-[107px] xl:mt-[28px]"></div>
              </Column>
              <Column className="3xl:mb-[7px] 3xl:mr-[7px] 3xl:mt-[6px] font-opensans justify-start lg:mb-[4px] lg:mr-[4px] lg:mt-[3px] mb-[6px] mr-[6px] mt-[5px] w-[64%] xl:mb-[5px] xl:mr-[5px] xl:mt-[4px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs24 font-semibold leading-lh lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-gray_908 text-left w-[94%] xl:mr-[8px] xl:text-fs17">
                  {
                    <>
                      {`lifestyle like lary live freely and`}
                      <br />
                      {`comfortably as you like in the sea`}
                    </>
                  }
                </Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[19px] items-center justify-start lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[50%] xl:mr-[8px] xl:mt-[14px]">
                  <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-gray_400 h-[32px] lg:h-[25px] lg:mb-[3px] lg:mt-[2px] lg:w-[24px] mb-[4px] mt-[3px] rounded-radius50 w-[32px] xl:h-[29px] xl:mb-[3px] xl:mt-[2px] xl:w-[28px]"></div>
                  <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] w-[72%] xl:ml-[14px]">
                    <Text className="3xl:text-fs16 font-semibold lg:text-fs10 self-stretch text-fs14 text-gray_908 text-left xl:text-fs12">{`Abdullah Maulana`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:text-fs14 font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs9 mr-[10px] mt-[4px] text-fs12 text-gray_508 text-left xl:mr-[8px] xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
                  </Column>
                </Row>
                <Text className="3xl:mt-[51px] 3xl:text-fs24 font-semibold leading-lh lg:mt-[33px] lg:text-fs15 mt-[43px] self-stretch text-fs20 text-gray_908 text-left w-[100%] xl:mt-[38px] xl:text-fs17">
                  {
                    <>
                      {`Workout to train your body fitness`}
                      <br />
                      {`and maintain your body's immunity`}
                    </>
                  }
                </Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[19px] items-center justify-start lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[46%] xl:mr-[8px] xl:mt-[14px]">
                  <div className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] bg-gray_400 h-[32px] lg:h-[25px] lg:mb-[3px] lg:mt-[2px] lg:w-[24px] mb-[4px] mt-[3px] rounded-radius50 w-[32px] xl:h-[29px] xl:mb-[3px] xl:mt-[2px] xl:w-[28px]"></div>
                  <Column className="3xl:ml-[19px] font-opensans justify-start lg:ml-[12px] ml-[16px] w-[70%] xl:ml-[14px]">
                    <Text className="3xl:mr-[7px] 3xl:text-fs16 font-semibold lg:mr-[4px] lg:text-fs10 mr-[6px] text-fs14 text-gray_908 text-left xl:mr-[5px] xl:text-fs12">{`Christine Sayax`}</Text>
                    <Text className="3xl:text-fs14 font-normal lg:mt-[3px] lg:text-fs9 mt-[4px] self-stretch text-fs12 text-gray_508 text-left xl:mt-[3px] xl:text-fs10">{`November 24, 2021`}</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
      <Column className="3xl:mt-[132px] bg-white_A700 items-center justify-start lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Column className="3xl:my-[48px] bg-gray_919 items-center justify-start lg:my-[31px] my-[40px] self-stretch w-[100%] xl:my-[35px]">
          <Column className="3xl:mt-[72px] font-opensans justify-start lg:mt-[46px] mt-[60px] self-stretch w-[100%] xl:mt-[53px]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mx-[144px] 3xl:text-fs48 font-bold leading-lh6000 lg:leading-lh46 lg:mx-[93px] lg:text-fs31 mx-[120px] text-fs40 text-left text-white_A700 w-[36%] xl:leading-lh53 xl:mx-[106px] xl:text-fs35">
              {
                <>
                  {`The best choice of articles`}
                  <br />
                  {`for you read now`}
                </>
              }
            </Text>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Row className="font-opensans justify-end self-stretch w-[100%]">
                <Image
                  src="img_01.svg"
                  className="2xl:h-[30px] 3xl:h-[35px] 3xl:mb-[133px] 3xl:ml-[216px] h-[29px] lg:h-[23px] lg:mb-[86px] lg:ml-[140px] mb-[111px] ml-[180px] object-contain w-[3%] xl:h-[26px] xl:mb-[98px] xl:ml-[160px]"
                  alt="01"
                />
                <Line className="2xl:h-[141px] 3xl:h-[169px] 3xl:ml-[28px] bg-white_A700 h-[140px] lg:h-[109px] lg:ml-[18px] ml-[24px] w-[1px] xl:h-[125px] xl:ml-[21px]" />
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:ml-[37px] 3xl:my-[16px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:ml-[24px] lg:my-[10px] lg:text-fs10 ml-[31px] my-[14px] text-fs14 text-left text-white_A700_99 w-[32%] xl:leading-lh24 xl:ml-[27px] xl:my-[12px] xl:text-fs12">
                  {
                    <>
                      {`The categories of articles that we provide are the most popular and`}
                      <br />
                      {`most relevant for you as a learning medium for you that are very useful`}
                      <br />
                      {`and fit your fashion to make your decision choices better and more`}
                      <br />
                      {`enjoyable just for you`}
                    </>
                  }
                </Text>
                <Image
                  src="img_group1829.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[650px] 3xl:mr-[144px] 3xl:my-[74px] h-[16px] lg:h-[13px] lg:ml-[421px] lg:mr-[93px] lg:my-[48px] ml-[542px] mr-[120px] my-[62px] object-contain w-[3%] xl:h-[15px] xl:ml-[482px] xl:mr-[106px] xl:my-[55px]"
                  alt="Group1829"
                />
              </Row>
            </Column>
          </Column>
          <Row className="3xl:mt-[72px] 3xl:px-[144px] gap-[0] grid grid-cols-3 items-center justify-start lg:mt-[46px] lg:px-[93px] mt-[60px] px-[120px] self-stretch w-[100%] xl:mt-[53px] xl:px-[106px]">
            <Stack className="2xl:h-[451px] 3xl:h-[541px] h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]">
              <div className="2xl:h-[451px] 3xl:h-[541px] absolute bg-gray_300 h-[450px] inset-[0] lg:h-[350px] self-stretch w-[100%] xl:h-[401px]"></div>
              <Stack className="2xl:h-[61px] 3xl:h-[73px] 3xl:w-[72px] absolute bg-black_900_26 h-[60px] inset-[0] justify-center lg:h-[47px] lg:w-[46px] m-[auto] rounded-radius50 w-[60px] xl:h-[54px] xl:w-[53px]">
                <Image
                  src="img_polygon1_1.png"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="Polygon1"
                />
              </Stack>
            </Stack>
            <Stack className="2xl:h-[451px] 3xl:h-[541px] h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]">
              <Column className="absolute bg-white_A700 font-opensans inset-[0] items-center justify-start self-stretch w-[100%]">
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mb-[237px] 3xl:mt-[201px] 3xl:mx-[28px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:mb-[154px] lg:mt-[130px] lg:mx-[18px] lg:text-fs10 mb-[198px] mt-[168px] mx-[24px] text-fs14 text-gray_900_100 text-left w-[82%] xl:leading-lh24 xl:mb-[176px] xl:mt-[149px] xl:mx-[21px] xl:text-fs12">
                  {
                    <>
                      {`Time to get your house clean and organized in`}
                      <br />
                      {`a way that is easy and also fun to help you in living`}
                      <br />
                      {`your daily life  in this world`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:left-[28px] 3xl:top-[96px] absolute font-opensans justify-start left-[24px] lg:left-[18px] lg:top-[62px] top-[80px] w-[69%] xl:left-[21px] xl:top-[71px]">
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:text-fs28 font-bold leading-lh3600 lg:leading-lh28 lg:text-fs18 self-stretch text-fs24 text-gray_908 text-left w-[100%] xl:leading-lh32 xl:text-fs21">
                  {
                    <>
                      {`Time to get your house`}
                      <br />
                      {`cleand and in order`}
                    </>
                  }
                </Text>
                <Button className="2xl:py-[17px] 3xl:mr-[12px] 3xl:mt-[168px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs19 bg-blue_800 border-bw font-semibold lg:mr-[7px] lg:mt-[108px] lg:px-[27px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[140px] px-[35px] py-[17.375px] text-center text-fs16 text-white_A700 w-[60%] xl:mr-[8px] xl:mt-[124px] xl:px-[31px] xl:py-[15px] xl:text-fs14">{`Read More`}</Button>
              </Column>
            </Stack>
            <div className="2xl:h-[451px] 3xl:h-[541px] bg-gray_300 h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]"></div>
          </Row>
          <Row className="3xl:mb-[120px] 3xl:px-[144px] gap-[0] grid grid-cols-3 items-center justify-start lg:mb-[77px] lg:px-[93px] mb-[100px] px-[120px] self-stretch w-[100%] xl:mb-[88px] xl:px-[106px]">
            <div className="2xl:h-[451px] 3xl:h-[541px] bg-gray_400 h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]"></div>
            <div className="2xl:h-[451px] 3xl:h-[541px] bg-gray_300 h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]"></div>
            <div className="2xl:h-[451px] 3xl:h-[541px] bg-gray_400 h-[450px] lg:h-[350px] w-[100%] xl:h-[401px]"></div>
          </Row>
        </Column>
      </Column>
      <Row className="3xl:mt-[132px] bg-white_A700 font-opensans justify-end lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Column className="3xl:mb-[100px] 3xl:ml-[139px] 3xl:mt-[48px] justify-start lg:mb-[65px] lg:ml-[90px] lg:mt-[31px] mb-[84px] ml-[116px] mt-[40px] w-[29%] xl:mb-[74px] xl:ml-[103px] xl:mt-[35px]">
          <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs48 font-bold leading-lh6000 lg:leading-lh46 lg:ml-[3px] lg:text-fs31 ml-[4px] text-fs40 text-gray_908 text-left tracking-ls1 w-[99%] xl:leading-lh53 xl:ml-[3px] xl:text-fs35">
            {
              <>
                {`What our custemers`}
                <br />
                {`sayying`}
              </>
            }
          </Text>
          <Text className="3xl:mr-[12px] 3xl:mt-[72px] 3xl:text-fs72 font-semibold lg:ml-[3px] lg:mr-[7px] lg:mt-[46px] lg:text-fs46 ml-[4px] mr-[10px] mt-[60px] text-fs60 text-gray_908 text-left xl:ml-[3px] xl:mr-[8px] xl:mt-[53px] xl:text-fs53">{`“`}</Text>
          <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs24 font-semibold leading-lh2800 lg:leading-lh21 lg:ml-[3px] lg:mr-[7px] lg:mt-[12px] lg:text-fs15 ml-[4px] mr-[10px] mt-[16px] text-fs20 text-gray_908 text-left w-[91%] xl:leading-lh24 xl:ml-[3px] xl:mr-[8px] xl:mt-[14px] xl:text-fs17">
            {
              <>
                {`It's super fun and really helps me to get`}
                <br />
                {`up to date information`}
              </>
            }
          </Text>
          <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:ml-[3px] lg:mr-[7px] lg:mt-[12px] lg:text-fs10 ml-[4px] mr-[10px] mt-[16px] text-fs14 text-gray_900_100 text-left w-[93%] xl:leading-lh24 xl:ml-[3px] xl:mr-[8px] xl:mt-[14px] xl:text-fs12">
            {
              <>
                {`Very amazing fun and really helpful for me to get up to`}
                <br />
                {`date information and really helpful for me who always miss`}
                <br />
                {`the latest information, thank you coblog for helping`}
                <br />
                {`me so far it is very good at helping me`}
              </>
            }
          </Text>
          <Text className="3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs19 font-semibold lg:ml-[3px] lg:mr-[7px] lg:mt-[24px] lg:text-fs12 ml-[4px] mr-[10px] mt-[32px] text-fs16 text-gray_908 text-left xl:ml-[3px] xl:mr-[8px] xl:mt-[28px] xl:text-fs14">{`Gopal barian`}</Text>
          <Row className="3xl:mr-[12px] 3xl:mt-[19px] gap-[4px] grid grid-cols-5 items-center justify-start lg:gap-[3px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] w-[33%] xl:gap-[3px] xl:mr-[8px] xl:mt-[14px]">
            <Column className="bg-gray_400_5a items-center justify-start opacity-0 w-[100%]">
              <Image
                src="img_star1_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[2px] lg:w-[14px] mx-[auto] my-[3px] object-contain w-[18px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                alt="Star1"
              />
            </Column>
            <Column className="bg-gray_400_5a items-center justify-start opacity-0 w-[100%]">
              <Image
                src="img_star1_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[2px] lg:w-[14px] mx-[auto] my-[3px] object-contain w-[18px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                alt="Star1"
              />
            </Column>
            <Column className="bg-gray_400_5a items-center justify-start opacity-0 w-[100%]">
              <Image
                src="img_star1_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[2px] lg:w-[14px] mx-[auto] my-[3px] object-contain w-[18px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                alt="Star1"
              />
            </Column>
            <Column className="bg-gray_400_5a items-center justify-start opacity-0 w-[100%]">
              <Image
                src="img_star1_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[2px] lg:w-[14px] mx-[auto] my-[3px] object-contain w-[18px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                alt="Star1"
              />
            </Column>
            <Column className="bg-gray_400_5a items-center justify-start opacity-0 w-[100%]">
              <Image
                src="img_star1_1.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:my-[2px] lg:w-[14px] mx-[auto] my-[3px] object-contain w-[18px] xl:h-[17px] xl:my-[2px] xl:w-[16px]"
                alt="Star1"
              />
            </Column>
          </Row>
          <Image
            src="img_group1919.svg"
            className="2xl:h-[17px] 3xl:h-[20px] 3xl:mr-[12px] 3xl:mt-[98px] h-[16px] lg:h-[13px] lg:ml-[3px] lg:mr-[7px] lg:mt-[63px] ml-[4px] mr-[10px] mt-[82px] object-contain w-[23%] xl:h-[15px] xl:ml-[3px] xl:mr-[8px] xl:mt-[72px]"
            alt="Group1919"
          />
        </Column>
        <div className="2xl:h-[421px] 3xl:h-[505px] 3xl:mb-[48px] 3xl:ml-[268px] 3xl:mt-[316px] bg-gray_400 h-[420px] lg:h-[327px] lg:mb-[31px] lg:ml-[174px] lg:mt-[205px] mb-[40px] ml-[224px] mt-[264px] w-[26%] xl:h-[374px] xl:mb-[35px] xl:ml-[199px] xl:mt-[234px]"></div>
        <div className="2xl:h-[361px] 3xl:h-[433px] 3xl:mb-[48px] 3xl:ml-[38px] 3xl:mt-[389px] bg-gray_400_3f h-[360px] lg:h-[280px] lg:mb-[31px] lg:ml-[24px] lg:mt-[252px] mb-[40px] ml-[32px] mt-[324px] w-[19%] xl:h-[321px] xl:mb-[35px] xl:ml-[28px] xl:mt-[288px]"></div>
      </Row>
      <Column className="3xl:mt-[132px] bg-white_A700 items-center justify-start lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Column className="3xl:mb-[24px] 3xl:mt-[48px] bg-gray_919 font-opensans items-center justify-start lg:mb-[15px] lg:mt-[31px] mb-[20px] mt-[40px] mx-[auto] w-[83%] xl:mb-[17px] xl:mt-[35px]">
          <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:mt-[72px] 3xl:text-fs48 font-bold leading-lh6000 lg:leading-lh46 lg:mt-[46px] lg:text-fs31 mt-[60px] mx-[auto] text-center text-fs40 text-white_A700 w-[54%] xl:leading-lh53 xl:mt-[53px] xl:text-fs35">
            {
              <>
                {`All the new articles and hot blog`}
                <br />
                {`special just for you`}
              </>
            }
          </Text>
          <Text className="3xl:mt-[28px] 3xl:text-fs16 font-normal lg:mt-[18px] lg:text-fs10 mt-[24px] mx-[auto] text-center text-fs14 text-white_A700_99 xl:mt-[21px] xl:text-fs12">{`The best articles for you to study and read currently especially for you`}</Text>
          <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mb-[24px] 3xl:mt-[61px] font-opensans h-[56px] lg:h-[44px] lg:mb-[15px] lg:mt-[39px] mb-[20px] mt-[51px] mx-[auto] w-[37%] xl:h-[50px] xl:mb-[17px] xl:mt-[45px]">
            <Input
              className="2xl:pb-[19px] 2xl:pt-[20px] 3xl:pb-[23px] 3xl:pl-[19px] 3xl:pt-[24px] 3xl:text-fs16 absolute bg-white_A700 border-0 font-normal inset-[0] lg:pb-[14px] lg:pl-[12px] lg:pt-[15px] lg:text-fs10 pb-[19.205px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_508 pt-[20.205px] self-stretch text-fs14 text-gray_508 text-left w-[100%] xl:pl-[14px] xl:py-[17px] xl:text-fs12"
              name="Group453"
              placeholder={`Enter your email address`}
            ></Input>
            <Button className="2xl:pb-[11px] 2xl:pt-[12px] 3xl:pb-[13px] 3xl:pt-[14px] 3xl:px-[32px] 3xl:right-[9px] 3xl:text-fs16 absolute bg-blue_800 border-bw font-semibold inset-y-[0] lg:pb-[8px] lg:pt-[9px] lg:px-[21px] lg:right-[6px] lg:text-fs10 my-[auto] pb-[11.205px] pt-[12.205px] px-[27px] right-[8px] text-center text-fs14 text-white_A700 w-[27%] xl:pb-[9px] xl:pt-[10px] xl:px-[24px] xl:right-[7px] xl:text-fs12">{`Subcribes`}</Button>
          </Stack>
        </Column>
      </Column>
      <div className="3xl:mt-[132px] lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
        <Column className="bg-white_A700 items-center justify-end self-stretch w-[100%]">
          <Column className="3xl:mt-[48px] bg-gray_919 justify-end lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
            <Row className="3xl:mt-[96px] justify-evenly lg:mt-[62px] mt-[80px] px-[0] self-stretch w-[100%] xl:mt-[71px]">
              <Column className="3xl:mb-[58px] font-opensans justify-start lg:mb-[38px] mb-[49px] w-[14%] xl:mb-[43px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs24 font-bold lg:mr-[7px] lg:text-fs15 ml-[1px] mr-[10px] text-fs20 text-left text-white_A700 xl:mr-[8px] xl:text-fs17">{`Jomblog`}</Text>
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[18px] lg:text-fs10 mt-[24px] text-fs14 text-left text-white_A700_99 w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs12">
                  {
                    <>
                      {`The best place for vacation and`}
                      <br />
                      {`skiing with family`}
                    </>
                  }
                </Text>
                <Image
                  src="img_group1752.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[12px] 3xl:mt-[48px] h-[24px] lg:h-[19px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] object-contain w-[59%] xl:h-[22px] xl:mr-[8px] xl:mt-[35px]"
                  alt="Group1752"
                />
              </Column>
              <Column className="font-opensans justify-start w-[10%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Platform`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Crowfunding`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700_99 xl:mt-[14px] xl:text-fs14">{`Website donations`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Carreers`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700_99 xl:mt-[14px] xl:text-fs14">{`Event registrations`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Newsrooms`}</Text>
              </Column>
              <Column className="3xl:mb-[45px] font-opensans justify-start lg:mb-[29px] mb-[38px] w-[9%] xl:mb-[33px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Why jomblog`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Our story`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700_99 xl:mt-[14px] xl:text-fs14">{`Comunity driven`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Our custemer`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Expert support`}</Text>
              </Column>
              <Column className="3xl:mb-[45px] font-opensans justify-start lg:mb-[29px] mb-[38px] w-[8%] xl:mb-[33px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Support`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`About us`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`FAQ`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700_99 xl:mt-[14px] xl:text-fs14">{`Privacy & Policy`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Help`}</Text>
              </Column>
              <Column className="3xl:mb-[64px] font-opensans justify-start lg:mb-[42px] mb-[54px] w-[15%] xl:mb-[48px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Address`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Jomblog.info@email.com`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal leading-lh lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700_99 w-[100%] xl:mt-[14px] xl:text-fs14">
                  {
                    <>
                      {`4517 Washington,Manchester`}
                      <br />
                      {`Kentucky 39495, Poland`}
                    </>
                  }
                </Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700_99 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`(704) 555-0127`}</Text>
              </Column>
            </Row>
            <Column className="3xl:mt-[72px] font-opensans lg:mt-[46px] mt-[60px] self-stretch w-[100%] xl:mt-[53px]">
              <Button className="2xl:py-[30px] 3xl:mx-[144px] 3xl:pl-[42px] 3xl:py-[36px] 3xl:text-fs19 bg-gray_919 border-bw font-normal lg:mx-[93px] lg:pl-[27px] lg:py-[23px] lg:text-fs12 mx-[120px] pl-[35px] py-[30.375px] text-fs16 text-left text-white_A700 w-[83%] xl:mx-[106px] xl:pl-[31px] xl:py-[27px] xl:text-fs14">{`All right reseved Jomblog / Dimo.ui 2021`}</Button>
            </Column>
          </Column>
        </Column>
      </div>
    </Column>
  );
};

export default LandingPagePage;
