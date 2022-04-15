import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";

const Page = () => {
  return (
    <Column className="bg-gray_400 border border-black_900 border-solid items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1869px] 3xl:h-[2242px] 3xl:mb-[24px] h-[1867px] lg:h-[1453px] lg:mb-[15px] mb-[20px] self-stretch w-[100%] xl:h-[1661px] xl:mb-[17px]">
        <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
          <Stack className="2xl:h-[1269px] 3xl:h-[1522px] h-[1267.25px] lg:h-[986px] self-stretch w-[100%] xl:h-[1128px]">
            <Image
              src="img_exclude_1.svg"
              className="2xl:h-[1269px] 3xl:h-[1522px] absolute h-[1267.25px] lg:h-[986px] object-contain opacity-op7 right-[0] w-[68%] xl:h-[1128px]"
              alt="Exclude"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="bg-black_901 font-playfairdisplay justify-start self-stretch w-[100%]">
                <Image
                  src="img_store_2.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[36px] 3xl:ml-[76px] 3xl:mt-[31px] h-[40px] lg:h-[32px] lg:mb-[23px] lg:ml-[49px] lg:mt-[20px] mb-[30px] ml-[64px] mt-[26px] object-contain w-[3%] xl:h-[36px] xl:mb-[26px] xl:ml-[56px] xl:mt-[23px]"
                  alt="store"
                />
                <Column className="3xl:mb-[36px] 3xl:ml-[19px] 3xl:mt-[31px] justify-start lg:mb-[23px] lg:ml-[12px] lg:mt-[20px] mb-[30px] ml-[16px] mt-[26px] w-[6%] xl:mb-[26px] xl:ml-[14px] xl:mt-[23px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[8px] xl:text-fs14">{`Your Logo`}</Text>
                  <Text className="3xl:text-fs19 font-normal font-roboto lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Your slogan here`}</Text>
                </Column>
                <Text className="2xl:ml-[318px] 2xl:my-[37px] 3xl:ml-[381px] 3xl:my-[45px] 3xl:text-fs19 font-bold lg:ml-[247px] lg:my-[29px] lg:text-fs12 ml-[317.82px] my-[37.5px] text-center text-fs16 text-white_A700 uppercase xl:ml-[282px] xl:my-[33px] xl:text-fs14">{`Home`}</Text>
                <Row className="2xl:my-[5px] 3xl:ml-[74px] 3xl:my-[6px] items-center justify-center lg:ml-[48px] lg:my-[4px] ml-[62px] my-[5.5px] w-[17%] xl:ml-[55px] xl:my-[4px]">
                  <Text className="3xl:my-[38px] 3xl:text-fs19 font-bold lg:my-[24px] lg:text-fs12 my-[32px] text-center text-fs16 text-white_A700 uppercase xl:my-[28px] xl:text-fs14">{`About`}</Text>
                  <Row className="3xl:ml-[67px] items-center justify-center lg:ml-[43px] ml-[56px] w-[24%] xl:ml-[49px]">
                    <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Menu`}</Text>
                    <Image
                      src="img_chevrondown_2.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[42px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[27px] ml-[5px] mr-[6px] my-[35px] object-contain w-[17%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[31px]"
                      alt="chevrondown"
                    />
                  </Row>
                  <Text className="3xl:ml-[67px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[43px] lg:my-[24px] lg:text-fs12 ml-[56px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[49px] xl:my-[28px] xl:text-fs14">{`Gallery`}</Text>
                </Row>
                <Row className="2xl:ml-[62px] 2xl:my-[37px] 3xl:ml-[74px] 3xl:my-[45px] items-center justify-center lg:ml-[48px] lg:my-[29px] ml-[62.00006px] my-[37.5px] w-[15%] xl:ml-[55px] xl:my-[33px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Team`}</Text>
                  <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Contact`}</Text>
                  <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Blog`}</Text>
                </Row>
                <Image
                  src="img_search_3.svg"
                  className="2xl:h-[31px] 2xl:ml-[454px] 3xl:h-[37px] 3xl:mb-[45px] 3xl:ml-[545px] 3xl:mr-[98px] 3xl:mt-[33px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:mb-[29px] lg:ml-[353px] lg:mr-[63px] lg:mt-[21px] lg:w-[23px] mb-[38px] ml-[453.93994px] mr-[82px] mt-[28px] object-contain w-[30px] xl:h-[27px] xl:mb-[33px] xl:ml-[403px] xl:mr-[72px] xl:mt-[24px] xl:w-[26px]"
                  alt="search"
                />
              </Row>
            </div>
            <Row className="2xl:bottom-[67px] 3xl:bottom-[80px] absolute bottom-[67.25px] items-center justify-evenly left-[0] lg:bottom-[52px] px-[0] w-[24%] xl:bottom-[59px]">
              <Stack className="2xl:h-[201px] 3xl:h-[241px] bg-black_900 h-[200px] lg:h-[156px] w-[18%] xl:h-[178px]">
                <Image
                  src="img_arrow_5.svg"
                  className="2xl:h-[45px] 3xl:h-[53px] 3xl:w-[52px] absolute h-[44px] inset-[0] justify-center lg:h-[35px] lg:w-[34px] m-[auto] object-contain w-[44px] xl:h-[40px] xl:w-[39px]"
                  alt="arrow"
                />
              </Stack>
              <div className="2xl:h-[201px] 3xl:h-[241px] bg-gray_300 h-[200px] lg:h-[156px] w-[82%] xl:h-[178px]"></div>
            </Row>
            <div className="2xl:bottom-[67px] 2xl:h-[201px] 3xl:bottom-[80px] 3xl:h-[241px] absolute bg-amber_700 bottom-[67.25px] h-[200px] lg:bottom-[52px] lg:h-[156px] right-[0] w-[31%] xl:bottom-[59px] xl:h-[178px]"></div>
          </Stack>
          <div className="mx-[auto] w-[61%]">
            <Column className="3xl:mb-[44px] 3xl:mr-[44px] 3xl:mt-[82px] items-center justify-start lg:mb-[28px] lg:ml-[1px] lg:mr-[28px] lg:mt-[53px] mb-[37px] ml-[2px] mr-[37px] mt-[69px] w-[97%] xl:mb-[32px] xl:ml-[1px] xl:mr-[32px] xl:mt-[61px]">
              <Row className="justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="3xl:mb-[102px] font-roboto justify-start lg:mb-[66px] mb-[85px] w-[24%] xl:mb-[75px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-playfairdisplay justify-start self-stretch w-[100%]">
                      <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`About Us`}</Text>
                      <Text className="3xl:mt-[33px] 3xl:text-fs19 font-normal font-roboto lg:mt-[21px] lg:text-fs12 mt-[28px] self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:mt-[24px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                    </Column>
                  </Column>
                  <Button className="2xl:py-[17px] 3xl:mr-[12px] 3xl:mt-[63px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-amber_700 border-bw font-normal lg:mr-[7px] lg:mt-[41px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[53px] px-[32px] py-[17.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[59%] xl:mr-[8px] xl:mt-[47px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Pick up order`}</Button>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[38%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="justify-between px-[0] self-stretch w-[100%]">
                      <Column className="3xl:mb-[40px] font-playfairdisplay justify-start lg:mb-[26px] mb-[34px] w-[62%] xl:mb-[30px]">
                        <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Contact Us`}</Text>
                        <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                          <Column className="font-roboto justify-start self-stretch w-[100%]">
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`(671) 555-0110`}</Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="font-playfairdisplay justify-start w-[32%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 font-bold lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left xl:text-fs18">{`Userfull Links`}</Text>
                        <Column className="3xl:mr-[12px] 3xl:mt-[33px] justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[75%] xl:mr-[8px] xl:mt-[24px]">
                          <Column className="items-center self-stretch w-[100%]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_arrowchevron.svg"
                                className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                                alt="arrowchevron"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[2px] lg:text-fs12 ml-[15px] mr-[3px] my-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[2px] xl:text-fs14">{`About Us`}</Text>
                            </Row>
                            <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                              <Image
                                src="img_arrowchevron.svg"
                                className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                                alt="arrowchevron"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] my-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`Our Team`}</Text>
                            </Row>
                          </Column>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_arrowchevron.svg"
                              className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                              alt="arrowchevron"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[22px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[14px] lg:text-fs12 ml-[15px] mr-[19px] my-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[16px] xl:text-fs14">{`Gallery`}</Text>
                          </Row>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_arrowchevron.svg"
                              className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                              alt="arrowchevron"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[44px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[28px] lg:text-fs12 ml-[15px] mr-[37px] my-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[32px] xl:text-fs14">{`Blog`}</Text>
                          </Row>
                          <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_arrowchevron.svg"
                                className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                                alt="arrowchevron"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] mr-[1px] my-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`404 Page`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:mt-[49px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:mt-[31px] lg:text-fs16 mr-[10px] mt-[41px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:mt-[36px] xl:text-fs18">{`Opening Hours`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[33px] font-roboto justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[62%] xl:mr-[8px] xl:mt-[24px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Mon - Sat 8:00 - 17:30,`}</Text>
                    <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`Sunday - CLOSED`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[63px] font-playfairdisplay justify-start lg:mb-[41px] mb-[53px] w-[21%] xl:mb-[47px]">
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Keep Connect`}</Text>
                  <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                    <div className="2xl:h-[233px] 3xl:h-[279px] 3xl:w-[278px] bg-gray_300 h-[232px] lg:h-[181px] lg:w-[180px] ml-[1px] rounded-radius20 w-[232px] xl:h-[207px] xl:w-[206px]"></div>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:mt-[156px] font-roboto items-center justify-evenly lg:mt-[101px] mt-[130px] px-[0] self-stretch w-[100%] xl:mt-[115px]">
                <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Copyright © 2020. All right reserved`}</Text>
                <Row className="font-roboto items-center justify-between px-[0] w-[18%]">
                  <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Mobile Apps:`}</Text>
                  <Image
                    src="img_rsssquare_2.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] h-[25px] lg:h-[20px] object-contain w-[11%] xl:h-[23px]"
                    alt="rsssquare"
                  />
                  <Image
                    src="img_blog_2.svg"
                    className="2xl:h-[26px] 2xl:mr-[6px] 3xl:h-[31px] 3xl:mr-[7px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mr-[4px] lg:w-[19px] mr-[6.119995px] object-contain w-[25px] xl:h-[23px] xl:mr-[5px] xl:w-[22px]"
                    alt="blog"
                  />
                </Row>
              </Row>
            </Column>
          </div>
        </Column>
        <Column className="3xl:right-[97px] 3xl:top-[353px] absolute font-playfairdisplay justify-start lg:right-[63px] lg:top-[228px] right-[81px] top-[294px] w-[76%] xl:right-[72px] xl:top-[261px]">
          <Text className="2xl:text-fs89 3xl:mr-[12px] 3xl:text-fs107 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs69 mr-[10px] text-amber_700 text-fs8976422119140625 text-left w-[39%] xl:mr-[8px] xl:text-fs79">
            <span className="text-white_A700 text-fs8976422119140625 font-playfairdisplay text-left font-bold lg:text-fs69 xl:text-fs79 2xl:text-fs89 3xl:text-fs107">
              <>
                {`404`}
                <br />
                {``}
              </>
            </span>
            <span className="text-amber_700 text-fs673431625366211 font-playfairdisplay text-left font-normal lg:text-fs52 xl:text-fs59 2xl:text-fs67 3xl:text-fs80">
              <>{`Page Not Found`}</>
            </span>
          </Text>
          <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[31px] text-fs16 text-left text-white_A700 w-[39%] xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
          <Row className="3xl:mr-[12px] 3xl:mt-[37px] bg-white_A700 font-roboto items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[31px] rounded-radius20 w-[39%] xl:mr-[8px] xl:mt-[27px]">
            <Image
              src="img_edit.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[32px] 3xl:ml-[38px] 3xl:mt-[34px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[21px] lg:ml-[24px] lg:mt-[22px] lg:w-[18px] mb-[27px] ml-[32px] mt-[29px] object-contain w-[24px] xl:h-[22px] xl:mb-[24px] xl:ml-[28px] xl:mt-[25px] xl:w-[21px]"
              alt="edit"
            />
            <Text className="2xl:mb-[29px] 2xl:mt-[31px] 3xl:mb-[35px] 3xl:ml-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mb-[22px] lg:ml-[7px] lg:mt-[24px] lg:text-fs12 mb-[29.5px] ml-[10px] mt-[31.5px] text-black_900 text-fs16 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[28px] xl:text-fs14">{`Search`}</Text>
            <Text className="2xl:mb-[29px] 2xl:mt-[31px] 3xl:mb-[35px] 3xl:ml-[380px] 3xl:mt-[37px] 3xl:text-fs19 font-normal lg:mb-[22px] lg:ml-[246px] lg:mt-[24px] lg:text-fs12 mb-[29.5px] ml-[317px] mt-[31.5px] text-black_900 text-fs16 text-right xl:mb-[26px] xl:ml-[281px] xl:mt-[28px] xl:text-fs14">{`Locations`}</Text>
            <Image
              src="img_arrow_6.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[32px] 3xl:ml-[12px] 3xl:mr-[38px] 3xl:mt-[34px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[21px] lg:ml-[7px] lg:mr-[24px] lg:mt-[22px] lg:w-[18px] mb-[27px] ml-[10px] mr-[32px] mt-[29px] object-contain w-[24px] xl:h-[22px] xl:mb-[24px] xl:ml-[8px] xl:mr-[28px] xl:mt-[25px] xl:w-[21px]"
              alt="arrow"
            />
          </Row>
          <Column className="3xl:mt-[373px] items-center lg:mt-[241px] mt-[311px] self-stretch w-[100%] xl:mt-[276px]">
            <Row className="items-center justify-end self-stretch w-[100%]">
              <Row className="3xl:ml-[112px] items-center justify-start lg:ml-[73px] ml-[94px] w-[58%] xl:ml-[83px]">
                <div className="2xl:h-[201px] 3xl:h-[241px] bg-gray_300 h-[200px] lg:h-[156px] w-[45%] xl:h-[178px]"></div>
                <div className="2xl:h-[201px] 3xl:h-[241px] bg-gray_300 h-[200px] lg:h-[156px] w-[45%] xl:h-[178px]"></div>
                <Stack className="2xl:h-[201px] 3xl:h-[241px] bg-black_900 h-[200px] lg:h-[156px] w-[10%] xl:h-[178px]">
                  <Image
                    src="img_arrow_7.svg"
                    className="2xl:h-[45px] 3xl:h-[53px] 3xl:w-[52px] absolute h-[44px] inset-[0] justify-center lg:h-[35px] lg:w-[34px] m-[auto] object-contain w-[44px] xl:h-[40px] xl:w-[39px]"
                    alt="arrow"
                  />
                </Stack>
              </Row>
              <Stack className="2xl:h-[124px] 3xl:h-[148px] 3xl:mb-[46px] 3xl:ml-[76px] 3xl:mt-[45px] font-roboto h-[123px] lg:h-[96px] lg:mb-[30px] lg:ml-[49px] lg:mt-[29px] mb-[39px] ml-[64px] mt-[38px] w-[31%] xl:h-[110px] xl:mb-[34px] xl:ml-[56px] xl:mt-[33px]">
                <Image
                  src="img_group1.svg"
                  className="2xl:h-[124px] 3xl:h-[148px] absolute h-[123px] inset-[0] lg:h-[96px] object-cover opacity-op1 self-stretch w-[100%] xl:h-[110px]"
                  alt="Group1"
                />
                <Text className="3xl:text-fs19 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs12 m-[auto] text-black_900 text-fs16 text-left w-[max-content] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              </Stack>
            </Row>
          </Column>
        </Column>
      </Stack>
    </Column>
  );
};

export default Page;
