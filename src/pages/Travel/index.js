import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const TravelPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[607px] 3xl:h-[728px] h-[606px] lg:h-[472px] self-stretch w-[100%] xl:h-[540px]">
        <Stack className="2xl:h-[607px] 3xl:h-[728px] absolute h-[606px] inset-[0] lg:h-[472px] self-stretch w-[100%] xl:h-[540px]">
          <Stack className="2xl:h-[567px] 3xl:h-[680px] absolute h-[566px] lg:h-[441px] self-stretch top-[0] w-[100%] xl:h-[504px]">
            <Image
              src="img_insertyourima_22.svg"
              className="2xl:h-[567px] 3xl:h-[680px] absolute h-[566px] inset-[0] lg:h-[441px] object-cover self-stretch w-[100%] xl:h-[504px]"
              alt="Insertyourima"
            />
            <div className="absolute inset-x-[0] top-[0] w-[100%]">
              <Row className="font-sora items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_shape_3.svg"
                  className="2xl:h-[17px] 2xl:mb-[31px] 3xl:h-[20px] 3xl:mb-[38px] 3xl:ml-[58px] 3xl:mt-[37px] h-[16.05px] lg:h-[13px] lg:ml-[38px] lg:my-[24px] mb-[31.95px] ml-[49px] mt-[31px] object-contain w-[1%] xl:h-[15px] xl:mb-[28px] xl:ml-[43px] xl:mt-[27px]"
                  alt="Shape"
                />
                <Text className="2xl:ml-[14px] 3xl:ml-[17px] 3xl:my-[32px] 3xl:text-fs24 font-semibold font-sora lg:ml-[11px] lg:my-[21px] lg:text-fs15 ml-[14.279999px] my-[27px] text-fs20 text-left text-white_A700 xl:ml-[12px] xl:my-[24px] xl:text-fs17">{`Your Logo`}</Text>
                <Row className="3xl:mb-[30px] 3xl:ml-[67px] 3xl:mt-[31px] font-manrope items-center justify-center lg:mb-[19px] lg:ml-[43px] lg:mt-[20px] mb-[25px] ml-[56px] mt-[26px] w-[29%] xl:mb-[22px] xl:ml-[49px] xl:mt-[23px]">
                  <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`About`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:text-fs12 ml-[36px] text-fs16 text-left text-white_A700 xl:ml-[32px] xl:text-fs14">{`Features`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:text-fs12 ml-[36px] text-fs16 text-left text-white_A700 xl:ml-[32px] xl:text-fs14">{`News`}</Text>
                  <Text className="3xl:ml-[44px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:text-fs12 ml-[37px] text-fs16 text-left text-white_A700 xl:ml-[32px] xl:text-fs14">{`Contact`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:text-fs12 ml-[36px] text-fs16 text-left text-white_A700 xl:ml-[32px] xl:text-fs14">{`Promo`}</Text>
                </Row>
                <Button className="2xl:pl-[25px] 2xl:pr-[24px] 3xl:mb-[22px] 3xl:ml-[696px] 3xl:mr-[60px] 3xl:mt-[24px] 3xl:pl-[30px] 3xl:pr-[29px] 3xl:py-[15px] 3xl:text-fs16 bg-white_A700 border-bw font-manrope font-semibold lg:mb-[14px] lg:ml-[451px] lg:mr-[38px] lg:mt-[15px] lg:px-[19px] lg:py-[10px] lg:text-fs10 mb-[19px] ml-[580px] mr-[50px] mt-[20px] pl-[25.5px] pr-[24.5px] py-[13px] text-center text-fs14 text-gray_902 w-[11%] xl:mb-[16px] xl:ml-[515px] xl:mr-[44px] xl:mt-[17px] xl:pl-[22px] xl:pr-[21px] xl:py-[11px] xl:text-fs12">{`Create Account`}</Button>
              </Row>
            </div>
          </Stack>
          <Row className="3xl:left-[168px] absolute bg-white_A700 bottom-[0] items-center justify-center left-[140px] lg:left-[108px] shadow-bs16 w-[60%] xl:left-[124px]">
            <Column className="3xl:ml-[45px] 3xl:my-[33px] font-sora justify-start lg:ml-[29px] lg:my-[21px] ml-[38px] my-[28px] w-[15%] xl:ml-[33px] xl:my-[24px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs16 font-medium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_201 text-fs14 text-left tracking-ls1 uppercase xl:mr-[8px] xl:text-fs12">{`LOCATION`}</Text>
              <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                <Row className="font-manrope items-center justify-between px-[0] self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-gray_902 text-left xl:text-fs14">{`Switzerland`}</Text>
                  <Image
                    src="img_icon_31.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] my-[1px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                    alt="Icon"
                  />
                </Row>
              </Column>
            </Column>
            <List
              className="3xl:gap-[76px] 3xl:ml-[76px] 3xl:my-[33px] flex-wrap gap-[64px] grid grid-cols-2 lg:gap-[49px] lg:ml-[49px] lg:my-[21px] min-h-[auto] ml-[64px] my-[28px] w-[46%] xl:gap-[56px] xl:ml-[56px] xl:my-[24px]"
              orientation="horizontal"
            >
              <Column className="font-sora justify-start w-[100%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-medium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_201 text-fs14 text-left tracking-ls1 uppercase xl:mr-[8px] xl:text-fs12">{`DATE`}</Text>
                <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                  <Row className="font-manrope items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-gray_902 text-left xl:text-fs14">{`17-20 Aug 2021`}</Text>
                    <Image
                      src="img_icon_32.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] my-[1px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                      alt="Icon"
                    />
                  </Row>
                </Column>
              </Column>
              <Column className="font-sora justify-start w-[100%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-medium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_201 text-fs14 text-left tracking-ls1 uppercase xl:mr-[8px] xl:text-fs12">{`PRICE RANGE`}</Text>
                <Column className="3xl:mt-[7px] items-center lg:mt-[4px] mt-[6px] self-stretch w-[100%] xl:mt-[5px]">
                  <Row className="font-manrope items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-gray_902 text-left xl:text-fs14">{`$30k - $50k`}</Text>
                    <Image
                      src="img_icon_33.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] 3xl:w-[24px] h-[20px] lg:h-[16px] lg:w-[15px] my-[1px] object-contain w-[20px] xl:h-[18px] xl:w-[17px]"
                      alt="Icon"
                    />
                  </Row>
                </Column>
              </Column>
            </List>
            <Column className="3xl:ml-[99px] bg-red_A202 font-manrope items-center justify-start lg:ml-[64px] ml-[83px] w-[17%] xl:ml-[73px]">
              <Text className="3xl:mb-[45px] 3xl:mt-[44px] 3xl:text-fs24 font-bold lg:mb-[29px] lg:mt-[28px] lg:text-fs15 mb-[38px] mt-[37px] mx-[auto] text-center text-fs20 text-white_A700 xl:mb-[33px] xl:mt-[32px] xl:text-fs17">{`Search`}</Text>
            </Column>
          </Row>
        </Stack>
        <Column className="3xl:left-[180px] absolute font-sora h-[max-content] inset-y-[0] justify-start left-[150px] lg:left-[116px] my-[auto] w-[42%] xl:left-[133px]">
          <Text className="2xl:leading-lh82 3xl:leading-lh98 3xl:text-fs86 font-semibold font-sora leading-lh8200 lg:leading-lh63 lg:text-fs56 self-stretch text-fs72 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh72 xl:text-fs64">
            {
              <>
                {`Find unique`}
                <br />
                {`place to visited`}
              </>
            }
          </Text>
          <Text className="3xl:mr-[12px] 3xl:mt-[26px] 3xl:text-fs26 font-manrope font-semibold lg:mr-[7px] lg:mt-[17px] lg:text-fs17 mr-[10px] mt-[22px] text-fs22 text-left text-white_A700 xl:mr-[8px] xl:mt-[19px] xl:text-fs19">{`Discover the best place that you’ve never seen before.`}</Text>
        </Column>
      </Stack>
      <Column className="3xl:mt-[57px] bg-white_A700 font-sora justify-start lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
        <Text className="3xl:mt-[120px] 3xl:mx-[180px] 3xl:text-fs19 font-medium lg:mt-[77px] lg:mx-[116px] lg:text-fs12 mt-[100px] mx-[150px] text-cyan_500 text-fs16 text-left tracking-ls1 uppercase xl:mt-[88px] xl:mx-[133px] xl:text-fs14">{`ABOUT US`}</Text>
        <Column className="3xl:mb-[120px] 3xl:mt-[30px] items-center lg:mb-[77px] lg:mt-[19px] mb-[100px] mt-[25px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[22px]">
          <Row className="font-sora items-center justify-start self-stretch w-[100%]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:ml-[180px] 3xl:text-fs57 font-normal font-sora leading-lh6000 lg:leading-lh46 lg:ml-[116px] lg:text-fs37 ml-[150px] text-black_904 text-fs48 text-left tracking-ls1 w-[33%] xl:leading-lh53 xl:ml-[133px] xl:text-fs42">
              {
                <>
                  {`Explore all corners`}
                  <br />
                  {`of the world with us`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[126px] 3xl:mr-[297px] 3xl:my-[14px] 3xl:text-fs21 font-manrope font-normal leading-lh3200 lg:leading-lh24 lg:ml-[81px] lg:mr-[192px] lg:my-[9px] lg:text-fs14 ml-[105px] mr-[248px] my-[12px] text-fs18 text-gray_704 text-left w-[32%] xl:leading-lh28 xl:ml-[93px] xl:mr-[220px] xl:my-[10px] xl:text-fs16">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process.`}</Text>
          </Row>
          <Row className="3xl:mt-[57px] justify-end lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
            <Image
              src="img_room.svg"
              className="2xl:h-[361px] 3xl:h-[433px] 3xl:mb-[144px] 3xl:ml-[180px] h-[360px] lg:h-[280px] lg:mb-[93px] lg:ml-[116px] mb-[120px] ml-[150px] object-contain w-[34%] xl:h-[321px] xl:mb-[106px] xl:ml-[133px]"
              alt="Room"
            />
            <Stack className="2xl:h-[481px] 3xl:h-[577px] 3xl:ml-[36px] h-[480px] lg:h-[374px] lg:ml-[23px] ml-[30px] w-[34%] xl:h-[427px] xl:ml-[26px]">
              <Image
                src="img_room_1.svg"
                className="2xl:h-[291px] 3xl:h-[349px] absolute h-[290px] lg:h-[226px] object-cover self-stretch top-[0] w-[100%] xl:h-[258px]"
                alt="Room"
              />
              <Stack className="2xl:h-[231px] 3xl:h-[277px] absolute bottom-[0] font-sora h-[230px] lg:h-[179px] self-stretch w-[100%] xl:h-[205px]">
                <Column className="absolute bg-white_A700 bottom-[0] justify-center self-stretch shadow-bs13 w-[100%]">
                  <Text className="3xl:mt-[39px] 3xl:mx-[38px] 3xl:text-fs28 font-medium font-sora lg:mt-[25px] lg:mx-[24px] lg:text-fs18 mt-[33px] mx-[32px] text-fs24 text-gray_902 text-left tracking-ls1 xl:mt-[29px] xl:mx-[28px] xl:text-fs21">{`Venice, Italy`}</Text>
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[40px] 3xl:mt-[15px] 3xl:mx-[38px] 3xl:text-fs19 font-manrope font-normal leading-lh2600 lg:leading-lh20 lg:mb-[26px] lg:mt-[10px] lg:mx-[24px] lg:text-fs12 mb-[34px] mt-[13px] mx-[32px] text-fs16 text-gray_704 text-left w-[84%] xl:leading-lh23 xl:mb-[30px] xl:mt-[11px] xl:mx-[28px] xl:text-fs14">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process.`}</Text>
                </Column>
                <Image
                  src="img_item.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:right-[48px] 3xl:w-[96px] absolute h-[80px] lg:h-[63px] lg:right-[31px] lg:w-[62px] object-contain right-[40px] top-[0] w-[80px] xl:h-[72px] xl:right-[35px] xl:w-[71px]"
                  alt="Item"
                />
              </Stack>
            </Stack>
            <Image
              src="img_room_2.svg"
              className="2xl:h-[361px] 3xl:h-[433px] 3xl:mb-[144px] 3xl:ml-[36px] h-[360px] lg:h-[280px] lg:mb-[93px] lg:ml-[23px] mb-[120px] ml-[30px] object-contain w-[18%] xl:h-[321px] xl:mb-[106px] xl:ml-[26px]"
              alt="Room"
            />
          </Row>
        </Column>
      </Column>
      <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
        <Line className="bg-bluegray_103 h-[1px] mx-[auto] w-[79%]" />
        <Row className="3xl:mb-[120px] 3xl:mt-[118px] justify-start lg:my-[77px] mb-[100px] mt-[99px] self-stretch w-[100%] xl:my-[88px]">
          <Column className="3xl:mb-[433px] 3xl:ml-[180px] font-sora justify-start lg:mb-[280px] lg:ml-[116px] mb-[361px] ml-[150px] w-[25%] xl:mb-[321px] xl:ml-[133px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium font-sora lg:mr-[7px] lg:text-fs12 mr-[10px] text-cyan_500 text-fs16 text-left tracking-ls1 uppercase xl:mr-[8px] xl:text-fs14">{`——  CORE VALUES`}</Text>
            <Text className="2xl:leading-lh68 3xl:leading-lh81 3xl:mr-[12px] 3xl:mt-[25px] 3xl:text-fs57 font-normal font-sora leading-lh6800 lg:leading-lh52 lg:mr-[7px] lg:mt-[16px] lg:text-fs37 mr-[10px] mt-[21px] text-fs48 text-gray_914 text-left tracking-ls1 w-[66%] xl:leading-lh60 xl:mr-[8px] xl:mt-[18px] xl:text-fs42">
              {
                <>
                  {`Top Value`}
                  <br />
                  {`from us`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[14px] 3xl:text-fs21 font-manrope font-normal leading-lh3200 lg:leading-lh24 lg:mt-[9px] lg:text-fs14 mt-[12px] self-stretch text-fs18 text-gray_704 text-left w-[100%] xl:leading-lh28 xl:mt-[10px] xl:text-fs16">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process.`}</Text>
            <Row className="3xl:mr-[12px] 3xl:mt-[28px] font-manrope items-center justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[47%] xl:mr-[8px] xl:mt-[21px]">
              <Text className="3xl:text-fs21 font-bold lg:text-fs14 text-fs18 text-left text-red_A202 xl:text-fs16">{`Learn Our Value`}</Text>
              <Image
                src="img_arrowrightalt_1.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[10px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[7px] lg:w-[18px] ml-[9px] object-contain w-[24px] xl:h-[22px] xl:ml-[8px] xl:w-[21px]"
                alt="arrowrightalt"
              />
            </Row>
          </Column>
          <Column className="3xl:ml-[73px] 3xl:mr-[180px] justify-start lg:ml-[47px] lg:mr-[116px] ml-[61px] mr-[150px] w-[50%] xl:ml-[54px] xl:mr-[133px]">
            <Column className="items-center self-stretch w-[100%]">
              <Stack className="2xl:h-[464px] 3xl:h-[556px] h-[463px] lg:h-[361px] self-stretch w-[100%] xl:h-[412px]">
                <Column className="absolute inset-[0] justify-start self-stretch w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Stack className="2xl:h-[233px] 3xl:h-[279px] h-[232px] lg:h-[181px] self-stretch w-[100%] xl:h-[207px]">
                      <Column className="absolute bg-white_A700 border border-gray_202 border-solid font-sora justify-center right-[0] w-[50%]">
                        <Image
                          src="img_icon_34.svg"
                          className="2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[33px] 3xl:mx-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mt-[21px] lg:mx-[21px] lg:w-[49px] mt-[28px] mx-[28px] object-contain w-[64px] xl:h-[57px] xl:mt-[24px] xl:mx-[24px] xl:w-[56px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[20px] 3xl:mx-[33px] 3xl:text-fs24 font-medium font-sora lg:mt-[13px] lg:mx-[21px] lg:text-fs15 mt-[17px] mx-[28px] text-fs20 text-gray_902 text-left tracking-ls1 xl:mt-[15px] xl:mx-[24px] xl:text-fs17">{`Secure Transaction`}</Text>
                        <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[38px] 3xl:mt-[8px] 3xl:mx-[33px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[24px] lg:mt-[5px] lg:mx-[21px] lg:text-fs12 mb-[32px] mt-[7px] mx-[28px] text-fs16 text-gray_704 text-left w-[82%] xl:leading-lh23 xl:mb-[28px] xl:mt-[6px] xl:mx-[24px] xl:text-fs14">
                          {
                            <>
                              {`Lorem ipsum is typically a corrupted`}
                              <br />
                              {`version of 'De finibus bonorum`}
                            </>
                          }
                        </Text>
                      </Column>
                      <Column className="absolute bg-white_A700 font-sora justify-center left-[0] shadow-bs13 w-[50%]">
                        <Image
                          src="img_icon_35.svg"
                          className="2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[33px] 3xl:mx-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mt-[21px] lg:mx-[21px] lg:w-[49px] mt-[28px] mx-[28px] object-contain w-[64px] xl:h-[57px] xl:mt-[24px] xl:mx-[24px] xl:w-[56px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[20px] 3xl:mx-[33px] 3xl:text-fs24 font-medium font-sora lg:mt-[13px] lg:mx-[21px] lg:text-fs15 mt-[17px] mx-[28px] text-fs20 text-gray_902 text-left tracking-ls1 xl:mt-[15px] xl:mx-[24px] xl:text-fs17">{`300+ Destinations`}</Text>
                        <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[38px] 3xl:mt-[8px] 3xl:mx-[33px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[24px] lg:mt-[5px] lg:mx-[21px] lg:text-fs12 mb-[32px] mt-[7px] mx-[28px] text-fs16 text-gray_704 text-left w-[82%] xl:leading-lh23 xl:mb-[28px] xl:mt-[6px] xl:mx-[24px] xl:text-fs14">
                          {
                            <>
                              {`Lorem ipsum is typically a corrupted`}
                              <br />
                              {`version of 'De finibus bonorum`}
                            </>
                          }
                        </Text>
                      </Column>
                    </Stack>
                  </Column>
                  <Column className="3xl:ml-[12px] bg-white_A700 border border-gray_202 border-solid font-sora justify-center lg:ml-[7px] ml-[10px] w-[50%] xl:ml-[8px]">
                    <Image
                      src="img_icon_36.svg"
                      className="2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[33px] 3xl:mx-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mt-[21px] lg:mx-[21px] lg:w-[49px] mt-[28px] mx-[28px] object-contain w-[64px] xl:h-[57px] xl:mt-[24px] xl:mx-[24px] xl:w-[56px]"
                      alt="Icon"
                    />
                    <Text className="3xl:mt-[20px] 3xl:mx-[33px] 3xl:text-fs24 font-medium font-sora lg:mt-[13px] lg:mx-[21px] lg:text-fs15 mt-[17px] mx-[28px] text-fs20 text-gray_902 text-left tracking-ls1 xl:mt-[15px] xl:mx-[24px] xl:text-fs17">{`Free Cancellation`}</Text>
                    <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[38px] 3xl:mt-[8px] 3xl:mx-[33px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[24px] lg:mt-[5px] lg:mx-[21px] lg:text-fs12 mb-[32px] mt-[7px] mx-[28px] text-fs16 text-gray_704 text-left w-[82%] xl:leading-lh23 xl:mb-[28px] xl:mt-[6px] xl:mx-[24px] xl:text-fs14">
                      {
                        <>
                          {`Lorem ipsum is typically a corrupted`}
                          <br />
                          {`version of 'De finibus bonorum`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
                <Column className="absolute bg-white_A700 border border-gray_202 border-solid bottom-[0] font-sora justify-center left-[0] w-[50%]">
                  <Image
                    src="img_icon_37.svg"
                    className="2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[33px] 3xl:mx-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mt-[21px] lg:mx-[21px] lg:w-[49px] mt-[28px] mx-[28px] object-contain w-[64px] xl:h-[57px] xl:mt-[24px] xl:mx-[24px] xl:w-[56px]"
                    alt="Icon"
                  />
                  <Text className="3xl:mt-[20px] 3xl:mx-[33px] 3xl:text-fs24 font-medium font-sora lg:mt-[13px] lg:mx-[21px] lg:text-fs15 mt-[17px] mx-[28px] text-fs20 text-gray_902 text-left tracking-ls1 xl:mt-[15px] xl:mx-[24px] xl:text-fs17">{`Many Offer & Promo`}</Text>
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[38px] 3xl:mt-[8px] 3xl:mx-[33px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[24px] lg:mt-[5px] lg:mx-[21px] lg:text-fs12 mb-[32px] mt-[7px] mx-[28px] text-fs16 text-gray_704 text-left w-[82%] xl:leading-lh23 xl:mb-[28px] xl:mt-[6px] xl:mx-[24px] xl:text-fs14">
                    {
                      <>
                        {`Lorem ipsum is typically a corrupted`}
                        <br />
                        {`version of 'De finibus bonorum`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
            </Column>
            <Column className="3xl:mr-[12px] bg-white_A700 border border-gray_202 border-solid font-sora justify-center lg:mr-[7px] mr-[10px] w-[50%] xl:mr-[8px]">
              <Image
                src="img_icon_38.svg"
                className="2xl:h-[65px] 3xl:h-[77px] 3xl:mt-[33px] 3xl:mx-[33px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:mt-[21px] lg:mx-[21px] lg:w-[49px] mt-[28px] mx-[28px] object-contain w-[64px] xl:h-[57px] xl:mt-[24px] xl:mx-[24px] xl:w-[56px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[20px] 3xl:mx-[33px] 3xl:text-fs24 font-medium font-sora lg:mt-[13px] lg:mx-[21px] lg:text-fs15 mt-[17px] mx-[28px] text-fs20 text-gray_902 text-left tracking-ls1 xl:mt-[15px] xl:mx-[24px] xl:text-fs17">{`Free Amenities`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[43px] 3xl:mx-[33px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[28px] lg:mt-[2px] lg:mx-[21px] lg:text-fs12 mb-[36px] mt-[3px] mx-[28px] text-fs16 text-gray_704 text-left w-[82%] xl:leading-lh23 xl:mb-[32px] xl:mt-[2px] xl:mx-[24px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a corrupted`}
                    <br />
                    {`version of 'De finibus bonorum`}
                  </>
                }
              </Text>
            </Column>
          </Column>
        </Row>
      </Column>
      <Column className="bg-gray_50 font-sora justify-start self-stretch w-[100%]">
        <Text className="3xl:mt-[120px] 3xl:mx-[180px] 3xl:text-fs19 font-medium lg:mt-[77px] lg:mx-[116px] lg:text-fs12 mt-[100px] mx-[150px] text-fs16 text-indigo_402 text-left tracking-ls1 uppercase xl:mt-[88px] xl:mx-[133px] xl:text-fs14">{`STATISTICS`}</Text>
        <Column className="3xl:mb-[108px] 3xl:mt-[30px] items-center lg:mb-[70px] lg:mt-[19px] mb-[90px] mt-[25px] self-stretch w-[100%] xl:mb-[80px] xl:mt-[22px]">
          <Row className="font-sora items-center justify-start self-stretch w-[100%]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:ml-[180px] 3xl:text-fs57 font-normal font-sora leading-lh6000 lg:leading-lh46 lg:ml-[116px] lg:text-fs37 ml-[150px] text-black_904 text-fs48 text-left tracking-ls1 w-[34%] xl:leading-lh53 xl:ml-[133px] xl:text-fs42">
              {
                <>
                  {`The number tell`}
                  <br />
                  {`everything about us`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[118px] 3xl:mr-[297px] 3xl:my-[14px] 3xl:text-fs21 font-manrope font-normal leading-lh3200 lg:leading-lh24 lg:ml-[77px] lg:mr-[192px] lg:my-[9px] lg:text-fs14 ml-[99px] mr-[248px] my-[12px] text-fs18 text-gray_704 text-left w-[32%] xl:leading-lh28 xl:ml-[88px] xl:mr-[220px] xl:my-[10px] xl:text-fs16">{`Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process.`}</Text>
          </Row>
          <Stack className="2xl:h-[411px] 3xl:h-[493px] 3xl:mt-[72px] h-[410px] lg:h-[319px] lg:mt-[46px] mt-[60px] mx-[auto] w-[78%] xl:h-[365px] xl:mt-[53px]">
            <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start self-stretch w-[100%]">
              <List
                className="3xl:mb-[108px] 3xl:mt-[72px] 3xl:mx-[103px] flex-wrap gap-[0] lg:mb-[70px] lg:mt-[46px] lg:mx-[66px] mb-[90px] min-h-[auto] mt-[60px] mx-[86px] w-[29%] xl:mb-[80px] xl:mt-[53px] xl:mx-[76px]"
                orientation="vertical"
              >
                <Row className="3xl:mr-[55px] 3xl:my-[33px] items-center justify-between lg:mr-[35px] lg:my-[21px] mr-[46px] my-[28px] px-[0] w-[86%] xl:mr-[40px] xl:my-[24px]">
                  <Column className="font-sora justify-start w-[36%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs50 font-normal font-sora lg:mr-[7px] lg:text-fs32 mr-[10px] text-cyan_501 text-fs42 text-left tracking-ls1 xl:mr-[8px] xl:text-fs37">{`5+`}</Text>
                    <Text className="3xl:text-fs24 font-manrope font-normal lg:mt-[3px] lg:text-fs15 mt-[4px] self-stretch text-black_904 text-fs20 text-left tracking-ls1 xl:mt-[3px] xl:text-fs17">{`Experience`}</Text>
                  </Column>
                  <Column className="font-sora justify-start w-[39%]">
                    <Text className="3xl:mr-[10px] 3xl:text-fs50 font-normal font-sora lg:mr-[7px] lg:text-fs32 mr-[9px] text-cyan_501 text-fs42 text-left tracking-ls1 xl:mr-[8px] xl:text-fs37">{`2.2M`}</Text>
                    <Text className="3xl:text-fs24 font-manrope font-normal lg:mt-[3px] lg:text-fs15 mt-[4px] self-stretch text-black_904 text-fs20 text-left tracking-ls1 xl:mt-[3px] xl:text-fs17">{`Tourist user`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:my-[33px] items-center justify-between lg:my-[21px] my-[28px] px-[0] self-stretch w-[100%] xl:my-[24px]">
                  <Column className="font-sora justify-start w-[36%]">
                    <Text className="3xl:mr-[6px] 3xl:text-fs50 font-normal font-sora lg:mr-[3px] lg:text-fs32 mr-[5px] text-cyan_501 text-fs42 text-left tracking-ls1 xl:mr-[4px] xl:text-fs37">{`300+`}</Text>
                    <Text className="3xl:text-fs24 font-manrope font-normal lg:mt-[3px] lg:text-fs15 mt-[4px] self-stretch text-black_904 text-fs20 text-left tracking-ls1 xl:mt-[3px] xl:text-fs17">{`Destinations`}</Text>
                  </Column>
                  <Column className="font-sora justify-start w-[47%]">
                    <Text className="3xl:mr-[10px] 3xl:text-fs50 font-normal font-sora lg:mr-[7px] lg:text-fs32 mr-[9px] text-cyan_501 text-fs42 text-left tracking-ls1 xl:mr-[8px] xl:text-fs37">{`+250M`}</Text>
                    <Text className="3xl:text-fs24 font-manrope font-normal lg:mt-[3px] lg:text-fs15 mt-[4px] self-stretch text-black_904 text-fs20 text-left tracking-ls1 xl:mt-[3px] xl:text-fs17">{`Local net income`}</Text>
                  </Column>
                </Row>
              </List>
            </Column>
            <Image
              src="img_image_6.svg"
              className="2xl:h-[361px] 3xl:h-[433px] absolute h-[360px] left-[0] lg:h-[280px] object-contain top-[0] w-[58%] xl:h-[321px]"
              alt="Image"
            />
          </Stack>
        </Column>
      </Column>
      <Column className="bg-gradient10  font-sora justify-start self-stretch w-[100%]">
        <Column className="items-end self-stretch w-[100%]">
          <Line className="3xl:ml-[12px] bg-bluegray_103 h-[1px] lg:ml-[7px] ml-[10px] w-[90%] xl:ml-[8px]" />
        </Column>
        <Text className="3xl:mt-[118px] 3xl:mx-[213px] 3xl:text-fs19 font-medium lg:mt-[77px] lg:mx-[138px] lg:text-fs12 mt-[99px] mx-[178px] text-fs16 text-green_A400 text-left tracking-ls1 uppercase xl:mt-[88px] xl:mx-[158px] xl:text-fs14">{`TESTIMONIAL`}</Text>
        <Column className="3xl:mt-[27px] items-center lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
          <Row className="font-sora items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="3xl:ml-[213px] 3xl:text-fs57 font-normal lg:ml-[138px] lg:text-fs37 ml-[178px] text-black_904 text-fs48 text-left tracking-ls1 xl:ml-[158px] xl:text-fs42">{`All Tourists says we…`}</Text>
          </Row>
        </Column>
        <Column className="3xl:mb-[102px] 3xl:mt-[69px] items-end lg:mb-[66px] lg:mt-[45px] mb-[85px] mt-[58px] self-stretch w-[100%] xl:mb-[75px] xl:mt-[51px]">
          <Stack className="2xl:h-[249px] 3xl:h-[298px] 3xl:ml-[12px] h-[248px] lg:h-[193px] lg:ml-[7px] ml-[10px] w-[90%] xl:h-[221px] xl:ml-[8px]">
            <Stack className="2xl:h-[249px] 3xl:h-[298px] absolute h-[248px] inset-[0] lg:h-[193px] self-stretch w-[100%] xl:h-[221px]">
              <Column className="absolute bg-white_A700 border border-gray_202 border-solid justify-center left-[0] w-[28%]">
                <Row className="3xl:mt-[38px] justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="3xl:ml-[38px] bg-cyan_500 font-manrope items-center justify-start lg:ml-[24px] ml-[32px] rounded-radius50 w-[13%] xl:ml-[28px]">
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs21 font-bold lg:mb-[8px] lg:mt-[9px] lg:text-fs14 mb-[11px] mt-[12px] mx-[auto] text-center text-fs18 text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[10px] xl:text-fs16">{`LG`}</Text>
                  </Column>
                  <Column className="3xl:ml-[19px] 3xl:mr-[175px] font-sora justify-start lg:ml-[12px] lg:mr-[113px] lg:mt-[1px] ml-[16px] mr-[146px] mt-[2px] w-[33%] xl:ml-[14px] xl:mr-[129px] xl:mt-[1px]">
                    <Text className="3xl:text-fs21 font-medium font-sora lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`John Gibson`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-manrope font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] mt-[1px] text-bluegray_403 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`ic@moj.gov`}</Text>
                  </Column>
                </Row>
                <Column className="3xl:mb-[38px] 3xl:mt-[28px] font-manrope lg:mb-[24px] lg:mt-[18px] mb-[32px] mt-[24px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[21px]">
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mx-[24px] lg:text-fs12 mx-[32px] text-fs16 text-gray_911 text-left w-[79%] xl:leading-lh24 xl:mx-[28px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher.`}</Text>
                </Column>
              </Column>
              <Column className="3xl:left-[431px] absolute bg-white_A700 border border-gray_202 border-solid justify-center left-[359px] lg:left-[279px] w-[28%] xl:left-[319px]">
                <Row className="3xl:mt-[38px] justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="2xl:ml-[32px] 3xl:ml-[39px] bg-red_A202 font-manrope items-center justify-start lg:ml-[25px] ml-[32.5px] rounded-radius50 w-[13%] xl:ml-[28px]">
                    <Text className="2xl:mx-[11px] 3xl:mb-[13px] 3xl:mt-[14px] 3xl:mx-[13px] 3xl:text-fs21 font-bold lg:mb-[8px] lg:mt-[9px] lg:mx-[8px] lg:text-fs14 mb-[11px] mt-[12px] mx-[11.5px] text-center text-fs18 text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[10px] xl:mx-[10px] xl:text-fs16">{`FC`}</Text>
                  </Column>
                  <Column className="2xl:ml-[15px] 3xl:ml-[18px] 3xl:mr-[168px] font-sora justify-start lg:ml-[12px] lg:mr-[108px] lg:mt-[1px] ml-[15.5px] mr-[140px] mt-[2px] w-[34%] xl:ml-[13px] xl:mr-[124px] xl:mt-[1px]">
                    <Text className="3xl:text-fs21 font-medium font-sora lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Frank Cooper`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-manrope font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] mt-[1px] text-bluegray_403 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`de@ba.co.uk`}</Text>
                  </Column>
                </Row>
                <Column className="3xl:mb-[72px] 3xl:mt-[28px] font-manrope lg:mb-[46px] lg:mt-[18px] mb-[60px] mt-[24px] self-stretch w-[100%] xl:mb-[53px] xl:mt-[21px]">
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mx-[24px] lg:text-fs12 mx-[32px] text-fs16 text-gray_911 text-left w-[79%] xl:leading-lh24 xl:mx-[28px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text.`}</Text>
                </Column>
              </Column>
              <Column className="3xl:right-[254px] absolute bg-white_A700 border border-gray_202 border-solid justify-center lg:right-[164px] right-[212px] w-[28%] xl:right-[188px]">
                <Row className="3xl:mt-[38px] justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="2xl:ml-[32px] 3xl:ml-[39px] bg-indigo_403 font-manrope items-center justify-start lg:ml-[25px] ml-[32.5px] rounded-radius50 w-[13%] xl:ml-[28px]">
                    <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs21 font-bold lg:mb-[8px] lg:mt-[9px] lg:text-fs14 mb-[11px] mt-[12px] mx-[auto] text-center text-fs18 text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[10px] xl:text-fs16">{`LD`}</Text>
                  </Column>
                  <Column className="2xl:ml-[15px] 3xl:ml-[18px] 3xl:mr-[153px] font-sora justify-start lg:ml-[12px] lg:mr-[99px] lg:mt-[1px] ml-[15.5px] mr-[128px] mt-[2px] w-[38%] xl:ml-[13px] xl:mr-[113px] xl:mt-[1px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium font-sora lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Lelia Davis`}</Text>
                    <Text className="3xl:text-fs19 font-manrope font-normal lg:text-fs12 mt-[1px] self-stretch text-bluegray_403 text-fs16 text-left xl:text-fs14">{`rocced@sihvirbi.io`}</Text>
                  </Column>
                </Row>
                <Column className="3xl:mb-[38px] 3xl:mt-[28px] font-manrope lg:mb-[24px] lg:mt-[18px] mb-[32px] mt-[24px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[21px]">
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mx-[24px] lg:text-fs12 mx-[32px] text-fs16 text-gray_911 text-left w-[79%] xl:leading-lh24 xl:mx-[28px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher.`}</Text>
                </Column>
              </Column>
              <Column className="absolute bg-white_A700 border border-gray_202 border-solid justify-center right-[0] w-[17%]">
                <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Row className="justify-end self-stretch w-[100%]">
                    <Column className="2xl:ml-[32px] 3xl:ml-[39px] bg-orange_300 font-manrope items-center justify-start lg:ml-[25px] ml-[32.5px] rounded-radius50 w-[23%] xl:ml-[28px]">
                      <Text className="3xl:mb-[13px] 3xl:mt-[14px] 3xl:text-fs21 font-bold lg:mb-[8px] lg:mt-[9px] lg:text-fs14 mb-[11px] mt-[12px] mx-[auto] text-center text-fs18 text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[10px] xl:text-fs16">{`DT`}</Text>
                    </Column>
                    <Column className="2xl:ml-[15px] 3xl:ml-[18px] font-sora justify-start lg:ml-[12px] lg:mt-[1px] ml-[15.5px] mt-[2px] w-[55%] xl:ml-[13px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium font-sora lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Don Tucker`}</Text>
                      <Text className="3xl:text-fs19 font-manrope font-normal lg:text-fs12 mt-[1px] self-stretch text-bluegray_403 text-fs16 text-left xl:text-fs14">{`rocced@sihvirbi.io`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Column className="3xl:mb-[72px] 3xl:mt-[28px] font-manrope lg:mb-[46px] lg:mt-[18px] mb-[60px] mt-[24px] self-stretch w-[100%] xl:mb-[53px] xl:mt-[21px]">
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:ml-[38px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-gray_911 text-left w-[85%] xl:leading-lh24 xl:ml-[28px] xl:text-fs14">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text.`}</Text>
                </Column>
              </Column>
            </Stack>
            <Image
              src="img_button_5.svg"
              className="2xl:h-[57px] 3xl:bottom-[109px] 3xl:h-[68px] 3xl:right-[220px] 3xl:w-[67px] absolute bottom-[91px] h-[56px] lg:bottom-[70px] lg:h-[44px] lg:right-[143px] lg:w-[43px] object-contain right-[184px] w-[56px] xl:bottom-[80px] xl:h-[50px] xl:right-[163px] xl:w-[49px]"
              alt="Button"
            />
          </Stack>
        </Column>
      </Column>
      <Row className="bg-cyan_500 font-sora items-center justify-evenly px-[0] self-stretch w-[100%]">
        <Text className="2xl:leading-lh68 3xl:leading-lh81 3xl:my-[96px] 3xl:text-fs57 font-medium leading-lh6800 lg:leading-lh52 lg:my-[62px] lg:text-fs37 my-[80px] text-fs48 text-left text-white_A700 tracking-ls1 w-[33%] xl:leading-lh60 xl:my-[71px] xl:text-fs42">
          {
            <>
              {`Ready to Explore`}
              <br />
              {`Unique Destination`}
            </>
          }
        </Text>
        <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:my-[134px] font-manrope h-[72px] lg:h-[56px] lg:my-[87px] my-[112px] w-[35%] xl:h-[65px] xl:my-[99px]">
          <Stack className="2xl:h-[73px] 3xl:h-[87px] absolute h-[72px] inset-[0] lg:h-[56px] self-stretch w-[100%] xl:h-[65px]">
            <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
              <div className="input-wrap">
                <Image
                  src="img_envelope_3.svg"
                  className="absolute top-[30.875px] bottom-[30.375px] left-[24px] bg-transparent border-0 lg:top-[24px] lg:bottom-[23px] lg:left-[18px] xl:left-[21px] xl:inset-y-[27px] 2xl:inset-y-[30px] 3xl:top-[37px] 3xl:bottom-[36px] 3xl:left-[28px]"
                  alt="envelope"
                />
                <Input
                  className="2xl:py-[30px] 3xl:pb-[36px] 3xl:pl-[62px] 3xl:pt-[37px] 3xl:text-fs19 bg-white_A700 border-0 font-manrope font-normal lg:pb-[23px] lg:pl-[40px] lg:pt-[24px] lg:text-fs12 pb-[30.375px] pl-[52px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[30.875px] shadow-bs14 text-bluegray_403 text-fs16 text-left w-[100%] xl:pl-[46px] xl:py-[27px] xl:text-fs14"
                  name="Group386"
                  placeholder={`Enter your email address`}
                ></Input>
              </div>
            </div>
            <Button className="2xl:pb-[25px] 2xl:pt-[27px] 3xl:pb-[30px] 3xl:pt-[33px] 3xl:px-[38px] 3xl:text-fs21 absolute bg-red_A202 border-bw font-inter font-normal lg:pb-[19px] lg:pt-[21px] lg:px-[24px] lg:text-fs14 pb-[25.545px] pt-[27.545px] px-[32px] right-[0] text-center text-fs18 text-white_A700 w-[32%] xl:pb-[22px] xl:pt-[24px] xl:px-[28px] xl:text-fs16">{`Get Started`}</Button>
          </Stack>
          <div className="2xl:h-[57px] 3xl:h-[68px] 3xl:right-[9px] absolute h-[56px] inset-y-[0] lg:h-[44px] lg:right-[6px] my-[auto] right-[8px] rounded-radius4 w-[35%] xl:h-[50px] xl:right-[7px]"></div>
        </Stack>
      </Row>
      <div className="self-stretch w-[100%]">
        <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mt-[108px] font-sora justify-evenly lg:mt-[70px] mt-[90px] px-[0] self-stretch w-[100%] xl:mt-[80px]">
            <Image
              src="img_group_5.svg"
              className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
              alt="Group"
            />
            <Text className="3xl:text-fs21 font-semibold lg:mb-[2px] lg:mt-[3px] lg:text-fs14 mb-[3px] mt-[4px] text-fs18 text-gray_902 text-left xl:mb-[2px] xl:mt-[3px] xl:text-fs16">{`Your Logo`}</Text>
            <Row className="3xl:mb-[6px] items-center justify-center lg:mb-[3px] lg:mt-[1px] mb-[5px] mt-[2px] w-[27%] xl:mb-[4px] xl:mt-[1px]">
              <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-gray_902 text-left xl:text-fs16">{`About us`}</Text>
              <Text className="3xl:ml-[86px] 3xl:text-fs21 font-normal lg:ml-[56px] lg:text-fs14 ml-[72px] text-fs18 text-gray_902 text-left xl:ml-[64px] xl:text-fs16">{`Company`}</Text>
              <Text className="3xl:ml-[87px] 3xl:text-fs21 font-normal lg:ml-[56px] lg:text-fs14 ml-[73px] text-fs18 text-gray_902 text-left xl:ml-[64px] xl:text-fs16">{`Support`}</Text>
            </Row>
            <Text className="3xl:mb-[6px] 3xl:text-fs21 font-normal lg:mb-[3px] lg:mt-[1px] lg:text-fs14 mb-[5px] mt-[2px] text-fs18 text-gray_902 text-left xl:mb-[4px] xl:mt-[1px] xl:text-fs16">{`Get in touch`}</Text>
          </Row>
          <Row className="3xl:mb-[108px] 3xl:mt-[12px] font-manrope items-center justify-evenly lg:mb-[70px] lg:mt-[7px] mb-[90px] mt-[10px] px-[0] self-stretch w-[100%] xl:mb-[80px] xl:mt-[8px]">
            <Column className="justify-start w-[19%]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:text-fs10 self-stretch text-bluegray_403 text-fs14 text-left w-[100%] xl:leading-lh21 xl:text-fs12">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman.`}</Text>
              <Image
                src="img_logo_12.svg"
                className="2xl:h-[37px] 3xl:h-[44px] 3xl:mr-[12px] 3xl:mt-[33px] h-[36px] lg:h-[28px] lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] object-contain w-[69%] xl:h-[33px] xl:mr-[8px] xl:mt-[24px]"
                alt="Logo"
              />
            </Column>
            <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mb-[8px] 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:mb-[5px] lg:mt-[2px] lg:text-fs10 mb-[7px] mt-[3px] text-fs14 text-gray_704 text-left w-[4%] xl:leading-lh16 xl:mb-[6px] xl:mt-[2px] xl:text-fs12">
              {
                <>
                  {`Features`}
                  <br />
                  {`FAQ’s`}
                  <br />
                  {`News`}
                  <br />
                  {`Pricing`}
                </>
              }
            </Text>
            <Row className="3xl:mb-[8px] font-manrope justify-center lg:mb-[5px] lg:mt-[2px] mb-[7px] mt-[3px] w-[49%] xl:mb-[6px] xl:mt-[2px]">
              <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:text-fs10 text-fs14 text-gray_704 text-left w-[12%] xl:leading-lh16 xl:text-fs12">
                {
                  <>
                    {`Core values`}
                    <br />
                    {`Partner w/ us`}
                    <br />
                    {`Blog`}
                    <br />
                    {`Contact`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mb-[43px] 3xl:ml-[90px] 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:mb-[28px] lg:ml-[58px] lg:text-fs10 mb-[36px] ml-[75px] text-fs14 text-gray_704 text-left w-[14%] xl:leading-lh16 xl:mb-[32px] xl:ml-[66px] xl:text-fs12">
                {
                  <>
                    {`Support centes`}
                    <br />
                    {`Feedback`}
                    <br />
                    {`Accessibility`}
                  </>
                }
              </Text>
              <Column className="2xl:mr-[149px] 3xl:mb-[19px] 3xl:ml-[87px] 3xl:mr-[179px] font-manrope justify-start lg:mb-[12px] lg:ml-[56px] lg:mr-[116px] lg:mt-[3px] mb-[16px] ml-[73px] mr-[149.5px] mt-[4px] w-[32%] xl:mb-[14px] xl:ml-[64px] xl:mr-[132px] xl:mt-[3px]">
                <Input
                  className="2xl:pb-[16px] 2xl:pt-[15px] 3xl:pb-[19px] 3xl:pl-[21px] 3xl:pt-[18px] 3xl:text-fs16 bg-bluegray_200_63 border-0 font-medium lg:pb-[12px] lg:pl-[14px] lg:pt-[11px] lg:text-fs10 pb-[16.205px] pl-[18px] placeholder:bg-transparent placeholder:text-gray_401 pt-[15.205px] text-fs14 text-gray_401 text-left w-[100%] xl:pb-[14px] xl:pl-[16px] xl:pt-[13px] xl:text-fs12"
                  name="Group2"
                  placeholder={`Your email here...`}
                ></Input>
                <Column className="3xl:mt-[14px] font-sora items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
                  <Button className="2xl:py-[15px] 3xl:px-[42px] 3xl:py-[18px] 3xl:text-fs16 bg-green_A400 border-bw font-semibold lg:px-[27px] lg:py-[11px] lg:text-fs10 px-[35px] py-[15.205px] text-center text-fs14 text-white_A700 w-[100%] xl:px-[31px] xl:py-[13px] xl:text-fs12">{`Get Access`}</Button>
                </Column>
              </Column>
            </Row>
          </Row>
        </Column>
      </div>
    </Column>
  );
};

export default TravelPage;
