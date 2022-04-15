import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { List } from "components/List";
import { Grid } from "components/Grid";
import { Button } from "components/Button";

const EcommercePage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[8px] items-center justify-start lg:mb-[5px] mb-[7px] self-stretch w-[100%] xl:mb-[6px]">
        <Stack className="2xl:h-[661px] 3xl:h-[793px] h-[660px] lg:h-[514px] self-stretch w-[100%] xl:h-[588px]">
          <Stack className="2xl:h-[661px] 3xl:h-[793px] absolute h-[660px] inset-[0] lg:h-[514px] self-stretch w-[100%] xl:h-[588px]">
            <Image
              src="img_insertimagehe.svg"
              className="2xl:h-[661px] 3xl:h-[793px] absolute h-[660px] inset-[0] lg:h-[514px] object-cover self-stretch w-[100%] xl:h-[588px]"
              alt="InsertImageHe"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="bg-white_A700 font-poppins items-center justify-end self-stretch w-[100%]">
                <Row className="3xl:mb-[27px] 3xl:ml-[48px] 3xl:mt-[28px] font-poppins items-center justify-start lg:mb-[17px] lg:ml-[31px] lg:mt-[18px] mb-[23px] ml-[40px] mt-[24px] w-[43%] xl:mb-[20px] xl:ml-[35px] xl:mt-[21px]">
                  <Text className="3xl:text-fs28 font-poppins font-semibold lg:text-fs18 text-fs24 text-gray_911 text-left tracking-ls1 xl:text-fs21">{`Accessoriespace`}</Text>
                  <Row className="3xl:ml-[38px] font-inter items-center justify-center lg:mb-[2px] lg:ml-[24px] lg:mt-[1px] mb-[3px] ml-[32px] mt-[2px] w-[18%] xl:mb-[2px] xl:ml-[28px] xl:mt-[1px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_911 text-left xl:text-fs14">{`Categories`}</Text>
                    <Image
                      src="img_iconographynav.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[9px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[6px] lg:my-[1px] lg:w-[18px] ml-[8px] my-[2px] object-contain w-[24px] xl:h-[22px] xl:ml-[7px] xl:my-[1px] xl:w-[21px]"
                      alt="IconographyNav"
                    />
                  </Row>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-inter font-normal lg:mb-[2px] lg:ml-[24px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[32px] mt-[2px] text-fs16 text-gray_911 text-left xl:mb-[2px] xl:ml-[28px] xl:mt-[1px] xl:text-fs14">{`Special Price`}</Text>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-inter font-normal lg:mb-[2px] lg:ml-[24px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[32px] mt-[2px] text-fs16 text-gray_911 text-left xl:mb-[2px] xl:ml-[28px] xl:mt-[1px] xl:text-fs14">{`Shop`}</Text>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-inter font-normal lg:mb-[2px] lg:ml-[24px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[32px] mt-[2px] text-fs16 text-gray_911 text-left xl:mb-[2px] xl:ml-[28px] xl:mt-[1px] xl:text-fs14">{`Blog`}</Text>
                </Row>
                <Column className="3xl:ml-[372px] 3xl:my-[24px] font-inter items-center justify-start lg:ml-[241px] lg:my-[15px] ml-[310px] my-[20px] rounded-radius8 w-[18%] xl:ml-[275px] xl:my-[17px]">
                  <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                    <Image
                      src="img_icon_18.svg"
                      className="absolute top-[18px] bottom-[12px] left-[20px] bg-transparent border-0 lg:top-[14px] lg:bottom-[9px] lg:left-[15px] xl:top-[16px] xl:bottom-[10px] xl:left-[17px] 3xl:top-[21px] 3xl:bottom-[14px] 3xl:left-[24px]"
                      alt="Icon"
                    />
                    <Input
                      className="3xl:pb-[14px] 3xl:pl-[52px] 3xl:pt-[21px] 3xl:text-fs16 bg-bluegray_200_63 border-0 font-normal lg:pb-[9px] lg:pl-[34px] lg:pt-[14px] lg:text-fs10 pb-[12px] pl-[44px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[18px] rounded-radius8 text-bluegray_403 text-fs14 text-left w-[100%] xl:pb-[10px] xl:pl-[39px] xl:pt-[16px] xl:text-fs12"
                      name="Group365"
                      placeholder={`Search`}
                    ></Input>
                  </div>
                </Column>
                <Image
                  src="img_badgesiconpri_1.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[28px] 3xl:my-[24px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[18px] lg:my-[15px] lg:w-[31px] ml-[24px] my-[20px] object-contain w-[40px] xl:h-[36px] xl:ml-[21px] xl:my-[17px] xl:w-[35px]"
                  alt="BadgesIconPri"
                />
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[19px] 3xl:mr-[38px] 3xl:my-[24px] font-inter h-[40px] lg:h-[32px] lg:ml-[12px] lg:mr-[24px] lg:my-[15px] ml-[16px] mr-[32px] my-[20px] w-[7%] xl:h-[36px] xl:ml-[14px] xl:mr-[28px] xl:my-[17px]">
                  <Image
                    src="img_background_10.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:bottom-[10px] 3xl:text-fs16 absolute bottom-[9px] font-normal inset-x-[0] lg:bottom-[7px] lg:text-fs10 mx-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:bottom-[8px] xl:text-fs12">{`Sign In`}</Text>
                </Stack>
              </Row>
            </div>
          </Stack>
          <Column className="3xl:bottom-[170px] 3xl:left-[178px] absolute bottom-[142px] font-poppins justify-start left-[149px] lg:bottom-[110px] lg:left-[115px] w-[39%] xl:bottom-[126px] xl:left-[132px]">
            <Text className="2xl:leading-lh62 3xl:leading-lh74 3xl:text-fs48 font-medium font-poppins leading-lh6200 lg:leading-lh48 lg:text-fs31 self-stretch text-fs40 text-gray_911 text-left tracking-ls1 w-[100%] xl:leading-lh55 xl:text-fs35">{`Introducing New Samsung Camera Product`}</Text>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[11px] lg:text-fs15 mr-[10px] mt-[15px] text-fs20 text-gray_911 text-left w-[95%] xl:leading-lh32 xl:mr-[8px] xl:mt-[13px] xl:text-fs17">{`Samsung Galaxy S 20 pro max with camera 40 MP, get bokeh speciality from samsung s20 pro max.`}</Text>
            <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] 3xl:mt-[48px] font-inter h-[56px] lg:h-[44px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[32%] xl:h-[50px] xl:mr-[8px] xl:mt-[35px]">
              <Image
                src="img_background_11.svg"
                className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                alt="Background"
              />
              <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Shop Now`}</Text>
            </Stack>
          </Column>
        </Stack>
        <Row className="bg-white_A700 items-end justify-start self-stretch w-[100%]">
          <Column className="3xl:mb-[67px] 3xl:ml-[178px] 3xl:mt-[72px] font-poppins justify-start lg:mb-[43px] lg:ml-[115px] lg:mt-[46px] mb-[56px] ml-[149px] mt-[60px] w-[45%] xl:mb-[49px] xl:ml-[132px] xl:mt-[53px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs33 font-medium font-poppins lg:mr-[7px] lg:text-fs21 mr-[10px] text-fs28 text-gray_911 text-left tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Get Best Deals Now`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-inter font-normal lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Get Our best deals in with speciality price for supoer your activity`}</Text>
            <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
              <Stack className="2xl:h-[503px] 3xl:h-[603px] h-[502px] lg:h-[391px] w-[100%] xl:h-[447px]">
                <Image
                  src="img_insertimagehe_1.svg"
                  className="2xl:h-[503px] 3xl:h-[603px] absolute h-[502px] inset-[0] lg:h-[391px] object-cover self-stretch w-[100%] xl:h-[447px]"
                  alt="InsertImageHe"
                />
                <Column className="3xl:left-[63px] 3xl:top-[146px] absolute font-poppins justify-start left-[53px] lg:left-[41px] lg:top-[94px] top-[122px] w-[32%] xl:left-[47px] xl:top-[108px]">
                  <Text className="2xl:leading-lh40 3xl:leading-lh48 3xl:text-fs28 font-normal leading-lh4000 lg:leading-lh31 lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh35 xl:text-fs21">
                    <span className="text-white_A700 text-fs24 tracking-ls1 font-poppins text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                      <>
                        {`Samsung YOGA`}
                        <br />
                        {``}
                      </>
                    </span>
                    <span className="text-white_A700 text-fs24 tracking-ls1 font-poppins text-left font-semibold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                      <>{`Top Product 2021`}</>
                    </span>
                  </Text>
                  <Column className="3xl:mt-[15px] items-center lg:mt-[10px] mt-[13px] self-stretch w-[100%] xl:mt-[11px]">
                    <Row className="font-poppins justify-start self-stretch w-[100%]">
                      <Stack className="2xl:h-[52px] 3xl:h-[62px] h-[51px] lg:h-[40px] w-[70%] xl:h-[46px]">
                        <Text className="3xl:text-fs28 absolute bottom-[0] font-normal lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 tracking-ls1 xl:text-fs21">
                          <span className="text-white_A700 text-fs24 tracking-ls1 font-poppins text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                            <>{`From   `}</>
                          </span>
                          <span className="text-amber_500 text-fs34 tracking-ls1 font-poppins text-left font-normal lg:text-fs26 xl:text-fs30 3xl:text-fs40">
                            <>{`820`}</>
                          </span>
                        </Text>
                        <Text className="3xl:text-fs28 absolute font-normal inset-x-[0] lg:text-fs18 mx-[auto] text-amber_500 text-fs24 text-left top-[0] tracking-ls1 w-[max-content] xl:text-fs21">{`$`}</Text>
                      </Stack>
                      <Text className="3xl:mb-[13px] 3xl:mr-[27px] 3xl:text-fs28 font-normal lg:mb-[8px] lg:ml-[2px] lg:mr-[17px] lg:text-fs18 mb-[11px] ml-[3px] mr-[23px] text-amber_500 text-fs24 text-left tracking-ls1 xl:mb-[9px] xl:ml-[2px] xl:mr-[20px] xl:text-fs21">{`.99`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
          <List
            className="3xl:mb-[67px] 3xl:ml-[36px] 3xl:mr-[178px] 3xl:mt-[220px] flex-wrap gap-[0] lg:mb-[43px] lg:ml-[23px] lg:mr-[115px] lg:mt-[143px] mb-[56px] min-h-[auto] ml-[30px] mr-[149px] mt-[184px] w-[32%] xl:mb-[49px] xl:ml-[26px] xl:mr-[132px] xl:mt-[163px]"
            orientation="vertical"
          >
            <Stack className="2xl:h-[237px] 3xl:h-[284px] 3xl:my-[18px] h-[236px] lg:h-[184px] lg:my-[11px] my-[15px] self-stretch w-[100%] xl:h-[210px] xl:my-[13px]">
              <Image
                src="img_group6.svg"
                className="2xl:h-[237px] 3xl:h-[284px] absolute h-[236px] inset-[0] lg:h-[184px] object-cover self-stretch w-[100%] xl:h-[210px]"
                alt="Group6"
              />
              <Column className="3xl:left-[27px] 3xl:top-[60px] absolute font-poppins justify-start left-[23px] lg:left-[17px] lg:top-[38px] top-[50px] w-[38%] xl:left-[20px] xl:top-[44px]">
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:text-fs24 font-normal leading-lh3600 lg:leading-lh28 lg:text-fs15 self-stretch text-fs20 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh32 xl:text-fs17">
                  <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-normal lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                    <>
                      {`Ipad Pro`}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-semibold lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                    <>{`Top Product 2021`}</>
                  </span>
                </Text>
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-poppins justify-start self-stretch w-[100%]">
                    <Stack className="2xl:h-[53px] 3xl:h-[63px] h-[52px] lg:h-[41px] w-[65%] xl:h-[47px]">
                      <Text className="3xl:text-fs24 absolute bottom-[0] font-normal lg:text-fs15 self-stretch text-fs20 text-left text-white_A700 tracking-ls1 xl:text-fs17">
                        <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-normal lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                          <>{`From   `}</>
                        </span>
                        <span className="text-white_A700 text-fs24 tracking-ls1 font-poppins text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                          <>{`920`}</>
                        </span>
                      </Text>
                      <Text className="3xl:right-[52px] 3xl:text-fs24 absolute font-normal lg:right-[34px] lg:text-fs15 right-[44px] text-fs20 text-left text-white_A700 top-[0] tracking-ls1 xl:right-[39px] xl:text-fs17">{`$`}</Text>
                    </Stack>
                    <Text className="3xl:mb-[12px] 3xl:mr-[36px] 3xl:text-fs24 font-normal lg:mb-[7px] lg:mr-[23px] lg:mt-[1px] lg:text-fs15 mb-[10px] mr-[30px] mt-[2px] text-fs20 text-left text-white_A700 tracking-ls1 xl:mb-[8px] xl:mr-[26px] xl:mt-[1px] xl:text-fs17">{`.99`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Stack className="2xl:h-[237px] 3xl:h-[284px] 3xl:my-[18px] h-[236px] lg:h-[184px] lg:my-[11px] my-[15px] self-stretch w-[100%] xl:h-[210px] xl:my-[13px]">
              <Image
                src="img_insertimagehe_2.svg"
                className="2xl:h-[237px] 3xl:h-[284px] absolute h-[236px] inset-[0] lg:h-[184px] object-cover self-stretch w-[100%] xl:h-[210px]"
                alt="InsertImageHe"
              />
              <Column className="3xl:left-[27px] 3xl:top-[60px] absolute font-poppins justify-start left-[23px] lg:left-[17px] lg:top-[38px] top-[50px] w-[38%] xl:left-[20px] xl:top-[44px]">
                <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:text-fs24 font-normal leading-lh3600 lg:leading-lh28 lg:text-fs15 self-stretch text-fs20 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh32 xl:text-fs17">
                  <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-normal lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                    <>
                      {`Harman Cardon`}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-semibold lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                    <>{`Top Product 2021`}</>
                  </span>
                </Text>
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-poppins justify-start self-stretch w-[100%]">
                    <Stack className="2xl:h-[53px] 3xl:h-[63px] h-[52px] lg:h-[41px] w-[56%] xl:h-[47px]">
                      <Text className="3xl:text-fs24 absolute bottom-[0] font-normal lg:text-fs15 self-stretch text-fs20 text-left text-white_A700 tracking-ls1 xl:text-fs17">
                        <span className="text-white_A700 text-fs20 tracking-ls1 font-poppins text-left font-normal lg:text-fs15 xl:text-fs17 3xl:text-fs24">
                          <>{`From   `}</>
                        </span>
                        <span className="text-white_A700 text-fs24 tracking-ls1 font-poppins text-left font-normal lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                          <>{`82`}</>
                        </span>
                      </Text>
                      <Text className="3xl:right-[34px] 3xl:text-fs24 absolute font-normal lg:right-[22px] lg:text-fs15 right-[29px] text-fs20 text-left text-white_A700 top-[0] tracking-ls1 xl:right-[25px] xl:text-fs17">{`$`}</Text>
                    </Stack>
                    <Text className="3xl:mb-[12px] 3xl:mr-[51px] 3xl:text-fs24 font-normal lg:mb-[7px] lg:ml-[1px] lg:mr-[33px] lg:mt-[1px] lg:text-fs15 mb-[10px] ml-[2px] mr-[43px] mt-[2px] text-fs20 text-left text-white_A700 tracking-ls1 xl:mb-[8px] xl:ml-[1px] xl:mr-[38px] xl:mt-[1px] xl:text-fs17">{`.99`}</Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </List>
        </Row>
        <Column className="items-center justify-start self-stretch w-[100%]">
          <Column className="bg-white_A700 font-poppins justify-start self-stretch w-[100%]">
            <Text className="3xl:mt-[42px] 3xl:mx-[180px] 3xl:text-fs33 font-medium lg:mt-[27px] lg:mx-[116px] lg:text-fs21 mt-[35px] mx-[150px] text-fs28 text-gray_911 text-left tracking-ls1 xl:mt-[31px] xl:mx-[133px] xl:text-fs24">{`How Its works`}</Text>
            <Column className="3xl:mb-[45px] 3xl:mt-[63px] items-center lg:mb-[29px] lg:mt-[41px] mb-[38px] mt-[53px] self-stretch w-[100%] xl:mb-[33px] xl:mt-[47px]">
              <List
                className="3xl:gap-[36px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] min-h-[auto] mx-[auto] w-[79%] xl:gap-[26px]"
                orientation="horizontal"
              >
                <Row className="justify-between px-[0] w-[100%]">
                  <Image
                    src="img_background_12.svg"
                    className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[63px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[41px] lg:w-[62px] mb-[53px] object-contain w-[80px] xl:h-[72px] xl:mb-[47px] xl:w-[71px]"
                    alt="Background"
                  />
                  <Column className="font-inter justify-start w-[71%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 ml-[1px] mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Free Shipping`}</Text>
                    <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[12px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[7px] lg:text-fs12 mt-[10px] text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs14">{`For all your orders over of $120 with speciality product`}</Text>
                    <Row className="3xl:mr-[12px] 3xl:mt-[26px] font-inter justify-start lg:mr-[7px] lg:mt-[17px] mr-[10px] mt-[22px] w-[36%] xl:mr-[8px] xl:mt-[19px]">
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-center text-fs14 text-gray_911 xl:text-fs12">{`Learn More`}</Text>
                      <Image
                        src="img_icon_19.svg"
                        className="2xl:h-[15px] 2xl:ml-[8px] 3xl:h-[17px] 3xl:ml-[9px] h-[14px] lg:h-[11px] lg:ml-[6px] lg:mt-[1px] mb-[1px] ml-[8.26001px] mr-[1px] mt-[2px] object-contain w-[7%] xl:h-[13px] xl:ml-[7px] xl:mt-[1px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="justify-center lg:mb-[1px] mb-[2px] w-[100%] xl:mb-[1px]">
                  <Image
                    src="img_background_13.svg"
                    className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[61px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[39px] lg:w-[62px] mb-[51px] object-contain w-[80px] xl:h-[72px] xl:mb-[45px] xl:w-[71px]"
                    alt="Background"
                  />
                  <Column className="2xl:ml-[24px] 3xl:ml-[29px] font-inter justify-start lg:ml-[19px] ml-[24.71997px] w-[71%] xl:ml-[21px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 ml-[1px] mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Safe Payment`}</Text>
                    <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[12px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[7px] lg:text-fs12 mt-[10px] text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs14">{`Suport product online all payment`}</Text>
                    <Row className="3xl:mr-[12px] 3xl:mt-[24px] font-inter justify-start lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] w-[39%] xl:mr-[8px] xl:mt-[17px]">
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-center text-fs14 text-gray_911 xl:text-fs12">{`Learn More`}</Text>
                      <Image
                        src="img_icon_19.svg"
                        className="2xl:h-[14px] 2xl:ml-[17px] 3xl:h-[16px] 3xl:ml-[20px] h-[13px] lg:h-[11px] lg:ml-[13px] lg:mt-[3px] ml-[17.26001px] mr-[1px] mt-[4px] object-contain w-[6%] xl:h-[12px] xl:ml-[15px] xl:mt-[3px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Row>
                <Row className="justify-between lg:mb-[1px] mb-[2px] px-[0] w-[100%] xl:mb-[1px]">
                  <Image
                    src="img_background_14.svg"
                    className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[61px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[39px] lg:w-[62px] mb-[51px] object-contain w-[80px] xl:h-[72px] xl:mb-[45px] xl:w-[71px]"
                    alt="Background"
                  />
                  <Column className="font-inter justify-start w-[71%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 ml-[1px] mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Online Helep Suport`}</Text>
                    <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[12px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[7px] lg:text-fs12 mt-[10px] text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs14">{`We Are Dedicated to suport you on 24/7`}</Text>
                    <Row className="3xl:mr-[12px] 3xl:mt-[24px] font-inter justify-start lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] w-[40%] xl:mr-[8px] xl:mt-[17px]">
                      <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-center text-fs14 text-gray_911 xl:text-fs12">{`Learn More`}</Text>
                      <Image
                        src="img_icon_19.svg"
                        className="2xl:h-[14px] 2xl:ml-[18px] 3xl:h-[16px] 3xl:ml-[21px] h-[13px] lg:h-[11px] lg:ml-[14px] lg:mt-[3px] ml-[18.26001px] mr-[1px] mt-[4px] object-contain w-[6%] xl:h-[12px] xl:ml-[16px] xl:mt-[3px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Row>
              </List>
            </Column>
          </Column>
          <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
            <Row className="3xl:mt-[67px] font-poppins justify-start lg:mt-[43px] mt-[56px] mx-[auto] w-[79%] xl:mt-[49px]">
              <Text className="3xl:text-fs33 font-medium font-poppins lg:text-fs21 my-[1px] text-fs28 text-gray_911 text-left tracking-ls1 xl:text-fs24">{`Featured Product`}</Text>
              <Text className="3xl:mb-[8px] 3xl:ml-[24px] 3xl:mt-[16px] 3xl:text-fs19 font-inter font-medium lg:mb-[5px] lg:ml-[15px] lg:mt-[10px] lg:text-fs12 mb-[7px] ml-[20px] mt-[14px] text-fs16 text-left text-teal_401 xl:mb-[6px] xl:ml-[17px] xl:mt-[12px] xl:text-fs14">{`All Offers`}</Text>
              <Image
                src="img_icon_20.svg"
                className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[9px] 3xl:ml-[9px] 3xl:mt-[21px] h-[14px] lg:h-[11px] lg:mb-[6px] lg:ml-[6px] lg:mt-[14px] mb-[8px] ml-[8px] mt-[18px] object-contain w-[1%] xl:h-[13px] xl:mb-[7px] xl:ml-[7px] xl:mt-[16px]"
                alt="Icon"
              />
              <Image
                src="img_nav.svg"
                className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[826px] h-[40px] lg:h-[32px] lg:ml-[535px] ml-[688px] object-contain w-[9%] xl:h-[36px] xl:ml-[612px]"
                alt="Nav"
              />
            </Row>
            <List
              className="3xl:gap-[36px] 3xl:mb-[67px] 3xl:mt-[49px] flex-wrap gap-[30px] grid grid-cols-4 lg:gap-[23px] lg:mb-[43px] lg:mt-[31px] mb-[56px] min-h-[auto] mt-[41px] mx-[auto] w-[79%] xl:gap-[26px] xl:mb-[49px] xl:mt-[36px]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_3.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Row className="3xl:top-[19px] absolute font-inter inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Stack className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] w-[31%] xl:h-[22px]">
                      <Image
                        src="img_base.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] absolute h-[24px] inset-[0] lg:h-[19px] object-cover self-stretch w-[100%] xl:h-[22px]"
                        alt="Base"
                      />
                      <Text className="3xl:text-fs14 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs9 m-[auto] text-center text-fs12 text-white_A700 w-[max-content] xl:text-fs10">{`Save 12%`}</Text>
                    </Stack>
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[20%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Samsung`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Samsung Galaxy Watch 2`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_4.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Row className="3xl:top-[19px] absolute font-inter inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Stack className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] w-[31%] xl:h-[22px]">
                      <Image
                        src="img_base.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] absolute h-[24px] inset-[0] lg:h-[19px] object-cover self-stretch w-[100%] xl:h-[22px]"
                        alt="Base"
                      />
                      <Text className="3xl:text-fs14 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs9 m-[auto] text-center text-fs12 text-white_A700 w-[max-content] xl:text-fs10">{`Save 12%`}</Text>
                    </Stack>
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[13%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Apple`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Apple Watch Tribal Pack`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 199.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_bitmap.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="Bitmap"
                  />
                  <Row className="3xl:top-[19px] absolute font-inter inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Stack className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] w-[31%] xl:h-[22px]">
                      <Image
                        src="img_base.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] absolute h-[24px] inset-[0] lg:h-[19px] object-cover self-stretch w-[100%] xl:h-[22px]"
                        alt="Base"
                      />
                      <Text className="3xl:text-fs14 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs9 m-[auto] text-center text-fs12 text-white_A700 w-[max-content] xl:text-fs10">{`Save 12%`}</Text>
                    </Stack>
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[20%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Samsung`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Samsung Smart Tv`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.299.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_bitmap_1.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="Bitmap"
                  />
                  <Row className="3xl:top-[19px] absolute font-inter inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Stack className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] w-[31%] xl:h-[22px]">
                      <Image
                        src="img_base.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] absolute h-[24px] inset-[0] lg:h-[19px] object-cover self-stretch w-[100%] xl:h-[22px]"
                        alt="Base"
                      />
                      <Text className="3xl:text-fs14 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs9 m-[auto] text-center text-fs12 text-white_A700 w-[max-content] xl:text-fs10">{`Save 12%`}</Text>
                    </Stack>
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[11%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Sony`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Sony Wk100h Beats Pro`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star_1.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
        <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mt-[67px] font-poppins justify-start lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
            <Text className="3xl:ml-[180px] 3xl:text-fs33 font-medium font-poppins lg:ml-[116px] lg:text-fs21 ml-[150px] my-[1px] text-fs28 text-gray_911 text-left tracking-ls1 xl:ml-[133px] xl:text-fs24">{`Featured Categories`}</Text>
            <Text className="3xl:mb-[8px] 3xl:ml-[24px] 3xl:mt-[16px] 3xl:text-fs19 font-inter font-medium lg:mb-[5px] lg:ml-[15px] lg:mt-[10px] lg:text-fs12 mb-[7px] ml-[20px] mt-[14px] text-fs16 text-left text-teal_401 xl:mb-[6px] xl:ml-[17px] xl:mt-[12px] xl:text-fs14">{`All Categories`}</Text>
            <Image
              src="img_icon_20.svg"
              className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[9px] 3xl:ml-[14px] 3xl:mt-[21px] h-[14px] lg:h-[11px] lg:mb-[6px] lg:ml-[9px] lg:mt-[14px] mb-[8px] ml-[12px] mt-[18px] object-contain w-[0] xl:h-[13px] xl:mb-[7px] xl:ml-[10px] xl:mt-[16px]"
              alt="Icon"
            />
            <Image
              src="img_nav.svg"
              className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[722px] 3xl:mr-[180px] h-[40px] lg:h-[32px] lg:ml-[468px] lg:mr-[116px] ml-[602px] mr-[150px] object-contain w-[7%] xl:h-[36px] xl:ml-[535px] xl:mr-[133px]"
              alt="Nav"
            />
          </Row>
          <Grid className="3xl:gap-[36px] 3xl:mb-[67px] 3xl:mt-[49px] gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:mb-[43px] lg:mt-[31px] mb-[56px] mt-[41px] mx-[auto] w-[79%] xl:gap-[26px] xl:mb-[49px] xl:mt-[36px]">
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-between px-[0] rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[30%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Cell & Tablet`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`128 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_5.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:mr-[24px] 3xl:my-[18px] h-[99px] lg:h-[77px] lg:mr-[15px] lg:my-[11px] mr-[20px] my-[15px] object-contain w-[35%] xl:h-[89px] xl:mr-[17px] xl:my-[13px]"
                alt="InsertImageHe"
              />
            </Row>
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-center rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[47%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Computer & Laptop`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`98 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_6.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:mb-[16px] 3xl:ml-[30px] 3xl:mr-[24px] 3xl:mt-[19px] h-[99px] lg:h-[77px] lg:mb-[10px] lg:ml-[19px] lg:mr-[15px] lg:mt-[12px] mb-[14px] ml-[25px] mr-[20px] mt-[16px] object-contain w-[35%] xl:h-[89px] xl:mb-[12px] xl:ml-[22px] xl:mr-[17px] xl:mt-[14px]"
                alt="InsertImageHe"
              />
            </Row>
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-between px-[0] rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[26%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Tv & Audio`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`98 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_7.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:mr-[24px] 3xl:my-[18px] h-[99px] lg:h-[77px] lg:mr-[15px] lg:my-[11px] mr-[20px] my-[15px] object-contain w-[35%] xl:h-[89px] xl:mr-[17px] xl:my-[13px]"
                alt="InsertImageHe"
              />
            </Row>
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-between px-[0] rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[45%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Games & Consoles`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`118 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_8.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:mb-[16px] 3xl:mr-[24px] 3xl:mt-[19px] h-[99px] lg:h-[77px] lg:mb-[10px] lg:mr-[15px] lg:mt-[12px] mb-[14px] mr-[20px] mt-[16px] object-contain w-[35%] xl:h-[89px] xl:mb-[12px] xl:mr-[17px] xl:mt-[14px]"
                alt="InsertImageHe"
              />
            </Row>
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-center rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[51%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Video & Photography`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`128 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_9.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:ml-[12px] 3xl:mr-[24px] 3xl:my-[18px] h-[99px] lg:h-[77px] lg:ml-[7px] lg:mr-[15px] lg:my-[11px] ml-[10px] mr-[20px] my-[15px] object-contain w-[35%] xl:h-[89px] xl:ml-[8px] xl:mr-[17px] xl:my-[13px]"
                alt="InsertImageHe"
              />
            </Row>
            <Row className="bg-white_A700 border border-dashed border-gray_306 font-inter items-center justify-between px-[0] rounded-radius8 w-[100%]">
              <Column className="3xl:ml-[24px] 3xl:my-[24px] justify-start lg:ml-[15px] lg:my-[15px] ml-[20px] my-[20px] w-[40%] xl:ml-[17px] xl:my-[17px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Home Electronic`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[7px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[4px] lg:text-fs10 mr-[10px] mt-[6px] text-fs14 text-gray_911 text-left xl:mr-[8px] xl:mt-[5px] xl:text-fs12">{`128 Products`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs10 mr-[10px] mt-[10px] text-center text-fs14 text-gray_911 xl:mr-[8px] xl:mt-[8px] xl:text-fs12">{`+ Shop Now`}</Text>
              </Column>
              <Image
                src="img_insertimagehe_10.svg"
                className="2xl:h-[100px] 3xl:h-[119px] 3xl:mr-[24px] 3xl:my-[18px] h-[99px] lg:h-[77px] lg:mr-[15px] lg:my-[11px] mr-[20px] my-[15px] object-contain w-[35%] xl:h-[89px] xl:mr-[17px] xl:my-[13px]"
                alt="InsertImageHe"
              />
            </Row>
          </Grid>
        </Column>
        <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mt-[67px] font-poppins justify-start lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
            <Text className="3xl:ml-[180px] 3xl:text-fs33 font-medium font-poppins lg:ml-[116px] lg:text-fs21 ml-[150px] my-[1px] text-fs28 text-gray_911 text-left tracking-ls1 xl:ml-[133px] xl:text-fs24">{`Hot Collection`}</Text>
            <Text className="3xl:mb-[8px] 3xl:ml-[28px] 3xl:mt-[16px] 3xl:text-fs19 font-inter font-medium lg:mb-[5px] lg:ml-[18px] lg:mt-[10px] lg:text-fs12 mb-[7px] ml-[24px] mt-[14px] text-fs16 text-left text-teal_401 xl:mb-[6px] xl:ml-[21px] xl:mt-[12px] xl:text-fs14">{`All Offers`}</Text>
            <Image
              src="img_icon_20.svg"
              className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[9px] 3xl:ml-[9px] 3xl:mt-[21px] h-[14px] lg:h-[11px] lg:mb-[6px] lg:ml-[6px] lg:mt-[14px] mb-[8px] ml-[8px] mt-[18px] object-contain w-[0] xl:h-[13px] xl:mb-[7px] xl:ml-[7px] xl:mt-[16px]"
              alt="Icon"
            />
            <Image
              src="img_nav.svg"
              className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[876px] 3xl:mr-[180px] h-[40px] lg:h-[32px] lg:ml-[567px] lg:mr-[116px] ml-[730px] mr-[150px] object-contain w-[7%] xl:h-[36px] xl:ml-[649px] xl:mr-[133px]"
              alt="Nav"
            />
          </Row>
          <Row className="3xl:mb-[67px] 3xl:mt-[50px] items-center justify-start lg:mb-[43px] lg:mt-[32px] mb-[56px] mt-[42px] self-stretch w-[100%] xl:mb-[49px] xl:mt-[37px]">
            <Stack className="2xl:h-[873px] 3xl:h-[1048px] 3xl:ml-[178px] h-[872px] lg:h-[679px] lg:ml-[115px] ml-[149px] w-[18%] xl:h-[776px] xl:ml-[132px]">
              <Column className="absolute bg-white_A700 bottom-[0] items-center justify-start rounded-radius10 self-stretch w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_11.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Row className="3xl:top-[19px] absolute inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Image
                      src="defaultNoData.png"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] object-contain w-[31%] xl:h-[22px]"
                      alt="Group2"
                    />
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[20%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Samsung`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Samsung Galaxy Note 10`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="absolute bg-white_A700 items-center justify-start rounded-radius10 self-stretch shadow-bs15 top-[0] w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_12.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Image
                    src="img_iconspacefavou.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] 3xl:right-[20px] 3xl:top-[19px] 3xl:w-[30px] absolute h-[25px] lg:h-[20px] lg:right-[13px] lg:top-[12px] lg:w-[19px] object-contain right-[17px] top-[16px] w-[25px] xl:h-[23px] xl:right-[15px] xl:top-[14px] xl:w-[22px]"
                    alt="iconspaceFavou"
                  />
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[13%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Apple`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Apple Watch 4 2020. Silver`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                    <Row className="3xl:mt-[19px] font-inter items-center justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                      <Stack className="2xl:h-[37px] 3xl:h-[44px] 3xl:ml-[19px] h-[36px] lg:h-[28px] lg:ml-[12px] ml-[16px] w-[29%] xl:h-[33px] xl:ml-[14px]">
                        <Image
                          src="img_shape_1.svg"
                          className="2xl:h-[37px] 3xl:h-[44px] absolute h-[36px] inset-[0] lg:h-[28px] object-cover self-stretch w-[100%] xl:h-[33px]"
                          alt="Shape"
                        />
                        <Row className="absolute font-inter h-[max-content] inset-[0] items-center justify-center m-[auto] px-[0] w-[71%]">
                          <Image
                            src="img__15.svg"
                            className="2xl:h-[2px] 2xl:mb-[9px] 3xl:h-[2px] 3xl:mb-[11px] 3xl:mt-[10px] h-[1.09px] lg:h-[1px] lg:my-[7px] mb-[9.909912px] mt-[9px] object-contain w-[8%] xl:h-[1px] xl:my-[8px]"
                            alt=""
                          />
                          <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-fs14 text-gray_912 text-left xl:text-fs12">{`1`}</Text>
                          <Image
                            src="img__16.svg"
                            className="2xl:h-[7px] 2xl:mb-[6px] 2xl:w-[6px] 3xl:h-[8px] 3xl:mb-[7px] 3xl:mt-[8px] 3xl:w-[7px] h-[6.56px] lg:h-[6px] lg:my-[5px] lg:w-[5px] mb-[6.4399414px] mt-[7px] object-contain w-[6.56px] xl:h-[6px] xl:mb-[5px] xl:mt-[6px] xl:w-[5px]"
                            alt=""
                          />
                        </Row>
                      </Stack>
                      <Text className="3xl:mb-[12px] 3xl:ml-[16px] 3xl:mr-[55px] 3xl:mt-[10px] 3xl:text-fs16 font-normal lg:ml-[10px] lg:mr-[35px] lg:my-[7px] lg:text-fs10 mb-[10px] ml-[14px] mr-[46px] mt-[9px] text-fs14 text-gray_911 text-left xl:ml-[12px] xl:mr-[40px] xl:my-[8px] xl:text-fs12">
                        <span className="text-gray_911 text-fs14 font-inter text-left font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                          <>{`total :`}</>
                        </span>
                        <span className="text-teal_401 text-fs14 font-inter text-left font-normal lg:text-fs10 xl:text-fs12 3xl:text-fs16">
                          <>{` $ 1.446.00`}</>
                        </span>
                      </Text>
                    </Row>
                    <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:mt-[19px] font-inter h-[40px] lg:h-[32px] lg:mt-[12px] mt-[16px] mx-[auto] w-[88%] xl:h-[36px] xl:mt-[14px]">
                      <div className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] left-[0] lg:h-[32px] rounded-radius4 w-[41%] xl:h-[36px]"></div>
                      <Button className="3xl:pb-[14px] 3xl:pt-[16px] 3xl:px-[42px] 3xl:text-fs16 absolute bg-teal_401 border-bw font-medium inset-[0] lg:pb-[9px] lg:pt-[10px] lg:px-[27px] lg:text-fs10 pb-[12px] pt-[14px] px-[35px] rounded-radius4 self-stretch text-center text-fs14 text-white_A700 w-[100%] xl:pb-[10px] xl:pt-[12px] xl:px-[31px] xl:text-fs12">{`Add to cart`}</Button>
                    </Stack>
                  </Column>
                </Column>
              </Column>
            </Stack>
            <Grid className="3xl:gap-[36px] 3xl:ml-[36px] 3xl:mr-[178px] gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:ml-[23px] lg:mr-[115px] ml-[30px] mr-[149px] w-[59%] xl:gap-[26px] xl:ml-[26px] xl:mr-[132px]">
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_bitmap_2.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="Bitmap"
                  />
                  <Row className="3xl:top-[19px] absolute inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Image
                      src="defaultNoData.png"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] object-contain w-[31%] xl:h-[22px]"
                      alt="Group2"
                    />
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[14%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Watch`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`G-shock watch waterprof`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_13.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Image
                    src="img_iconspacefavou.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] 3xl:right-[20px] 3xl:top-[19px] 3xl:w-[30px] absolute h-[25px] lg:h-[20px] lg:right-[13px] lg:top-[12px] lg:w-[19px] object-contain right-[17px] top-[16px] w-[25px] xl:h-[23px] xl:right-[15px] xl:top-[14px] xl:w-[22px]"
                    alt="iconspaceFavou"
                  />
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[11%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Sony`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Sony Beat Ah100K`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 766.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_14.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Image
                    src="img_iconspacefavou.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] 3xl:right-[20px] 3xl:top-[19px] 3xl:w-[30px] absolute h-[25px] lg:h-[20px] lg:right-[13px] lg:top-[12px] lg:w-[19px] object-contain right-[17px] top-[16px] w-[25px] xl:h-[23px] xl:right-[15px] xl:top-[14px] xl:w-[22px]"
                    alt="iconspaceFavou"
                  />
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[13%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Apple`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Airpods Gen 3`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_inserimageher.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InserImageher"
                  />
                  <Row className="3xl:top-[19px] absolute inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Image
                      src="defaultNoData.png"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] object-contain w-[31%] xl:h-[22px]"
                      alt="Group2"
                    />
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[8%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`JBL`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Harman Cardon`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 82.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_15.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Image
                    src="img_iconspacefavou.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] 3xl:right-[20px] 3xl:top-[19px] 3xl:w-[30px] absolute h-[25px] lg:h-[20px] lg:right-[13px] lg:top-[12px] lg:w-[19px] object-contain right-[17px] top-[16px] w-[25px] xl:h-[23px] xl:right-[15px] xl:top-[14px] xl:w-[22px]"
                    alt="iconspaceFavou"
                  />
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[6%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`LG`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`LG Smart Tv 4k`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 items-center justify-start rounded-radius10 w-[100%]">
                <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
                  <Image
                    src="img_insertimagehe_16.svg"
                    className="2xl:h-[299px] 3xl:h-[358px] absolute h-[298px] inset-[0] lg:h-[232px] object-cover self-stretch w-[100%] xl:h-[266px]"
                    alt="InsertImageHe"
                  />
                  <Row className="3xl:top-[19px] absolute inset-x-[0] justify-between lg:top-[12px] mx-[auto] px-[0] top-[16px] w-[87%] xl:top-[14px]">
                    <Image
                      src="defaultNoData.png"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] mb-[1px] object-contain w-[31%] xl:h-[22px]"
                      alt="Group2"
                    />
                    <Image
                      src="img_iconspacefavou.svg"
                      className="2xl:h-[26px] 3xl:h-[31px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:w-[19px] object-contain w-[25px] xl:h-[23px] xl:w-[22px]"
                      alt="iconspaceFavou"
                    />
                  </Row>
                </Stack>
                <Column className="3xl:mb-[28px] 3xl:mt-[19px] font-inter justify-start lg:mb-[18px] lg:mt-[12px] mb-[24px] mt-[16px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[14px]">
                  <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mx-[19px] 3xl:text-fs14 font-normal leading-lh2600 lg:leading-lh20 lg:mx-[12px] lg:text-fs9 mx-[16px] text-bluegray_301 text-fs12 text-left w-[13%] xl:leading-lh23 xl:mx-[14px] xl:text-fs10">{`Apple`}</Text>
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-medium lg:mt-[3px] lg:mx-[12px] lg:text-fs12 mt-[4px] mx-[16px] text-fs16 text-gray_911 text-left xl:mt-[3px] xl:mx-[14px] xl:text-fs14">{`Ipad Pro 128 Gb`}</Text>
                  <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                    <Row className="font-inter justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:ml-[19px] 3xl:text-fs16 font-bold lg:ml-[12px] lg:text-fs10 ml-[16px] text-fs14 text-left text-teal_401 xl:ml-[14px] xl:text-fs12">{`$ 1.446.00`}</Text>
                      <Image
                        src="img_star.svg"
                        className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[20px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:mr-[13px] mb-[2px] mr-[17px] mt-[1px] object-contain w-[33%] xl:h-[13px] xl:mb-[1px] xl:mr-[15px]"
                        alt="Star"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Grid>
          </Row>
        </Column>
        <Row className="bg-white_A700 font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="2xl:leading-lh38 3xl:leading-lh45 3xl:ml-[180px] 3xl:my-[36px] 3xl:text-fs33 font-medium leading-lh3800 lg:leading-lh29 lg:ml-[116px] lg:my-[23px] lg:text-fs21 ml-[150px] my-[30px] text-fs28 text-gray_911 text-left tracking-ls1 w-[26%] xl:leading-lh33 xl:ml-[133px] xl:my-[26px] xl:text-fs24">
            {
              <>
                {`Don’t miss our update.`}
                <br />
                {`Subscribe us for more info`}
              </>
            }
          </Text>
          <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:mr-[180px] 3xl:my-[38px] h-[72px] lg:h-[56px] lg:mr-[116px] lg:my-[24px] mr-[150px] my-[32px] w-[35%] xl:h-[65px] xl:mr-[133px] xl:my-[28px]">
            <Column className="absolute bg-black_900_00 font-inter inset-[0] items-center justify-start rounded-radius8 self-stretch shadow-bs16 w-[100%]">
              <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                <Image
                  src="img_icon_21.svg"
                  className="absolute top-[29.375px] bottom-[24.375px] left-[19px] bg-transparent border-0 lg:top-[22px] lg:bottom-[18px] lg:left-[14px] xl:top-[26px] xl:bottom-[21px] xl:left-[16px] 2xl:top-[29px] 2xl:bottom-[24px] 3xl:top-[35px] 3xl:bottom-[29px] 3xl:left-[22px]"
                  alt="Icon"
                />
                <Input
                  className="2xl:pb-[24px] 2xl:pt-[29px] 3xl:pb-[29px] 3xl:pl-[56px] 3xl:pt-[35px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[18px] lg:pl-[36px] lg:pt-[22px] lg:text-fs12 pb-[24.375px] pl-[47px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[29.375px] rounded-radius8 text-bluegray_403 text-fs16 text-left w-[100%] xl:pb-[21px] xl:pl-[41px] xl:pt-[26px] xl:text-fs14"
                  name="Group366"
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
              <Text className="3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:text-fs12">{`Get Started`}</Text>
            </Stack>
          </Stack>
        </Row>
        <div className="self-stretch w-[100%]">
          <Row className="bg-white_A700 justify-evenly px-[0] self-stretch w-[100%]">
            <Column className="3xl:mb-[241px] 3xl:mt-[105px] font-poppins justify-start lg:mb-[156px] lg:mt-[68px] mb-[201px] mt-[88px] w-[18%] xl:mb-[178px] xl:mt-[78px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 font-poppins font-semibold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_911 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`Accessoriespace`}</Text>
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[15px] 3xl:text-fs16 font-inter font-normal leading-lh2400 lg:leading-lh18 lg:mt-[10px] lg:text-fs10 mt-[13px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh21 xl:mt-[11px] xl:text-fs12">
                {
                  <>
                    {`This is the usefull template from Sebo.`}
                    <br />
                    {`You can buy this on our website, UI8 `}
                    <br />
                    {`and also our Creativemarket.`}
                  </>
                }
              </Text>
              <Image
                src="img_logo_9.svg"
                className="2xl:h-[17px] 3xl:h-[20px] 3xl:mr-[12px] 3xl:mt-[39px] h-[16px] lg:h-[13px] lg:mr-[7px] lg:mt-[25px] ml-[1px] mr-[10px] mt-[33px] object-contain w-[72%] xl:h-[15px] xl:mr-[8px] xl:mt-[29px]"
                alt="Logo"
              />
            </Column>
            <Row className="3xl:mb-[64px] 3xl:mt-[115px] justify-center lg:mb-[42px] lg:mt-[74px] mb-[54px] mt-[96px] w-[65%] xl:mb-[48px] xl:mt-[85px]">
              <Column className="3xl:mb-[48px] font-inter justify-start lg:mb-[31px] mb-[40px] w-[12%] xl:mb-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Products`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2000 lg:leading-lh15 lg:mt-[18px] lg:text-fs10 mt-[24px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[21px] xl:text-fs12">
                  {
                    <>
                      {`Features`}
                      <br />
                      {`Enterpise`}
                      <br />
                      {`Security`}
                      <br />
                      {`Customer Stories`}
                      <br />
                      {`Pricing`}
                      <br />
                      {`Demo`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:ml-[86px] font-inter justify-start lg:ml-[56px] ml-[72px] w-[13%] xl:ml-[64px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Teams`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2000 lg:leading-lh15 lg:mt-[18px] lg:text-fs10 mt-[24px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[21px] xl:text-fs12">
                  {
                    <>
                      {`Engineering`}
                      <br />
                      {`Financial Services`}
                      <br />
                      {`Sales`}
                      <br />
                      {`IT`}
                      <br />
                      {`Customer Support`}
                      <br />
                      {`Human Resources`}
                      <br />
                      {`Media`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:mb-[48px] 3xl:ml-[85px] font-inter justify-start lg:mb-[31px] lg:ml-[55px] mb-[40px] ml-[71px] w-[11%] xl:mb-[35px] xl:ml-[63px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Company`}</Text>
                <Text className="2xl:leading-lh20 3xl:leading-lh24 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh2000 lg:leading-lh15 lg:mt-[18px] lg:text-fs10 mt-[24px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh17 xl:mt-[21px] xl:text-fs12">
                  {
                    <>
                      {`About Us`}
                      <br />
                      {`Leadership`}
                      <br />
                      {`News`}
                      <br />
                      {`Media Kit`}
                      <br />
                      {`Career`}
                      <br />
                      {`Documentation`}
                    </>
                  }
                </Text>
              </Column>
              <Column className="3xl:mb-[174px] 3xl:ml-[85px] 3xl:mr-[180px] font-inter justify-start lg:mb-[112px] lg:ml-[55px] lg:mr-[116px] mb-[145px] ml-[71px] mr-[150px] w-[25%] xl:mb-[128px] xl:ml-[63px] xl:mr-[133px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Address`}</Text>
                <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:mt-[22px] 3xl:text-fs16 font-normal leading-lh3000 lg:leading-lh23 lg:mt-[14px] lg:text-fs10 mt-[19px] self-stretch text-fs14 text-gray_911 text-left w-[100%] xl:leading-lh26 xl:mt-[16px] xl:text-fs12">{`Gg. Sadewa No.RT 03, Druwo, Bangunharjo, Kec. Sewon, Bantul, Daerah Istimewa Yogyakarta 55188`}</Text>
              </Column>
            </Row>
          </Row>
        </div>
      </Column>
    </Column>
  );
};

export default EcommercePage;
