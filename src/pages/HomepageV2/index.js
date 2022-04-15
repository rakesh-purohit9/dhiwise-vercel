import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Stack } from "components/Stack";
import { Slider } from "components/Slider";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV2Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Column className="bg-white_A700 font-poppins items-center justify-start self-stretch w-[100%]">
            <Row className="3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[85%] xl:mt-[21px]">
              <Row className="3xl:my-[7px] items-center justify-start lg:my-[4px] my-[6px] w-[7%] xl:my-[5px]">
                <Image
                  src="img_group19.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[7px] h-[24px] lg:h-[19px] lg:my-[4px] my-[6px] object-contain w-[35%] xl:h-[22px] xl:my-[5px]"
                  alt="Group19"
                />
                <Text className="3xl:ml-[9px] 3xl:text-fs28 font-bold lg:ml-[6px] lg:text-fs18 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[7px] xl:text-fs21">{`Elliye`}</Text>
              </Row>
              <Row className="3xl:ml-[493px] bg-white_A700 border-2 border-gray_100 border-solid items-center justify-center lg:ml-[319px] ml-[411px] w-[36%] xl:ml-[365px]">
                <Text className="3xl:mb-[13px] 3xl:ml-[38px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mb-[8px] lg:ml-[24px] lg:mt-[7px] lg:text-fs14 mb-[11px] ml-[32px] mt-[10px] opacity-op5 text-center text-fs18 text-gray_500_87 xl:mb-[9px] xl:ml-[28px] xl:mt-[8px] xl:text-fs16">{`Search here`}</Text>
                <Image
                  src="img_search.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[476px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[308px] lg:w-[37px] ml-[397px] object-contain w-[48px] xl:h-[43px] xl:ml-[353px] xl:w-[42px]"
                  alt="search"
                />
              </Row>
              <Image
                src="img_icon_5.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[365px] 3xl:my-[14px] h-[24px] lg:h-[19px] lg:ml-[236px] lg:my-[9px] ml-[304px] my-[12px] object-contain w-[5%] xl:h-[22px] xl:ml-[270px] xl:my-[10px]"
                alt="icon"
              />
              <Button className="2xl:py-[14px] 3xl:ml-[38px] 3xl:px-[40px] 3xl:py-[17px] 3xl:text-fs16 bg-gray_800 border-bw font-bold lg:ml-[24px] lg:px-[26px] lg:py-[11px] lg:text-fs10 ml-[32px] px-[34px] py-[14.705px] text-center text-fs14 text-white_A700 w-[7%] xl:ml-[28px] xl:px-[30px] xl:py-[13px] xl:text-fs12">{`Login`}</Button>
            </Row>
            <Line className="3xl:mt-[28px] bg-gray_100 h-[1px] lg:mt-[18px] mt-[24px] mx-[auto] w-[85%] xl:mt-[21px]" />
            <Row className="3xl:mb-[28px] 3xl:mt-[27px] font-poppins items-center justify-center lg:mb-[18px] lg:mt-[17px] mb-[24px] mt-[23px] mx-[auto] w-[41%] xl:mb-[21px] xl:mt-[20px]">
              <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-gray_800 text-left xl:text-fs16">{`Categories`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-normal lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`New Arrival`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-normal lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`Features`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-normal lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`Collections`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-normal lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`Discount`}</Text>
            </Row>
          </Column>
        </div>
        <Stack className="2xl:h-[751px] 3xl:h-[901px] h-[750px] lg:h-[584px] self-stretch w-[100%] xl:h-[668px]">
          <Slider
            infinite
            mouseTracking
            disableButtonsControls
            responsive={{
              0: { items: 1 },
              568: { items: 1 },
              1024: { items: 1 },
            }}
            ref={ref}
            className="absolute inset-[0] self-stretch w-[100%]"
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-gray_800 lg:mx-[3px] xl:mx-[3px] mx-[4px]" />
                );
              }
              return (
                <div
                  className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-white_A700 lg:mx-[3px] xl:mx-[3px] mx-[4px]"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
            items={[
              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,

              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,

              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,

              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,

              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,

              <Column className="bg-bluegray_100 font-poppins justify-end self-stretch">
                <Text className="3xl:mt-[141px] 3xl:mx-[172px] 3xl:text-fs28 font-medium font-poppins lg:mt-[91px] lg:mx-[112px] lg:text-fs18 mt-[118px] mx-[144px] text-fs24 text-left text-white_A700 xl:mt-[104px] xl:mx-[128px] xl:text-fs21">{`50% Off Limited Offer`}</Text>
                <Text className="3xl:mt-[9px] 3xl:mx-[172px] 3xl:text-fs153 font-bold font-playfairdisplay lg:mt-[6px] lg:mx-[112px] lg:text-fs99 mt-[8px] mx-[144px] text-fs128 text-left text-white_A700 xl:mt-[7px] xl:mx-[128px] xl:text-fs113">
                  {
                    <>
                      {`Summer `}
                      <br />
                      {`Collection`}
                    </>
                  }
                </Text>
                <Column className="3xl:mb-[38px] 3xl:mt-[96px] items-center lg:mb-[24px] lg:mt-[62px] mb-[32px] mt-[80px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[71px]">
                  <Row className="justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:mb-[192px] 3xl:ml-[172px] bg-gray_800 font-poppins items-center justify-center lg:mb-[124px] lg:ml-[112px] mb-[160px] ml-[144px] w-[13%] xl:mb-[142px] xl:ml-[128px]">
                      <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                      <Image
                        src="img_arrow.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                        alt="Arrow"
                      />
                    </Row>
                    <Row className="3xl:mt-[72px] items-center justify-between lg:mt-[46px] mt-[60px] px-[0] shadow-bs w-[56%] xl:mt-[53px]">
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_sweater_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Sweater"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Jacket`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_tshirt_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Tshirt"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shirt`}</Text>
                      </Column>
                      <Column className="bg-white_A700 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_pants_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Pants"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Pants`}</Text>
                      </Column>
                      <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
                        <Image
                          src="img_boot_1.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                          alt="Boot"
                        />
                        <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Shoes`}</Text>
                      </Column>
                      <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-center lg:gap-[12px] w-[31%] xl:gap-[14px]">
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_dress_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Dress"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Dress`}</Text>
                        </Column>
                        <Column className="bg-white_A700 font-poppins items-center justify-center w-[100%]">
                          <Image
                            src="img_belt_1.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[37px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[24px] lg:w-[43px] mt-[31px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[27px] xl:w-[49px]"
                            alt="Belt"
                          />
                          <Text className="3xl:mb-[36px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:mt-[12px] lg:text-fs14 mb-[30px] mt-[16px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:mt-[14px] xl:text-fs16">{`Accesories`}</Text>
                        </Column>
                      </Row>
                      <Column className="bg-white_A700 font-poppins items-end justify-center overflow-auto w-[2%]">
                        <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[12px] 3xl:mt-[37px] h-[56px] lg:h-[44px] lg:ml-[7px] lg:mt-[24px] ml-[10px] mt-[31px] w-[1px] xl:h-[50px] xl:ml-[8px] xl:mt-[27px]" />
                        <Text className="3xl:mb-[36px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:ml-[7px] lg:mt-[12px] lg:text-fs14 mb-[30px] ml-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mb-[26px] xl:ml-[8px] xl:mt-[14px] xl:text-fs16">{`Skirt`}</Text>
                      </Column>
                    </Row>
                  </Row>
                </Column>
              </Column>,
            ]}
          />
        </Stack>
        <Image
          src="img_brands.svg"
          className="2xl:h-[101px] 3xl:h-[121px] 3xl:mt-[120px] h-[100px] lg:h-[78px] lg:mt-[77px] mt-[100px] mx-[auto] object-contain w-[56%] xl:h-[89px] xl:mt-[88px]"
          alt="brands"
        />
        <Row className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Column className="3xl:ml-[172px] items-center justify-start lg:ml-[112px] ml-[144px] w-[42%] xl:ml-[128px]">
            <Column className="bg-bluegray_100 font-poppins items-center justify-start self-stretch w-[100%]">
              <Text className="2xl:mx-[82px] 3xl:mx-[98px] 3xl:my-[170px] 3xl:text-fs43 font-normal leading-lh lg:mx-[64px] lg:my-[110px] lg:text-fs28 mx-[82.44px] my-[142px] text-fs36 text-left text-white_A700 w-[28%] xl:mx-[73px] xl:my-[126px] xl:text-fs32">
                <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>
                    {`Casual`}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Column>
            <Column className="3xl:mt-[38px] bg-bluegray_100 font-poppins items-center justify-end lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Text className="2xl:mx-[90px] 3xl:mb-[165px] 3xl:mt-[175px] 3xl:mx-[108px] 3xl:text-fs43 font-normal leading-lh lg:mb-[107px] lg:mt-[113px] lg:mx-[70px] lg:text-fs28 mb-[138px] mt-[146px] mx-[90.25px] text-fs36 text-gray_800 text-left w-[28%] xl:mb-[122px] xl:mt-[129px] xl:mx-[80px] xl:text-fs32">
                <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>
                    {`Summer `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-gray_800 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Column>
          </Column>
          <Column className="3xl:ml-[38px] 3xl:mr-[171px] bg-bluegray_100 font-poppins items-center justify-start lg:ml-[24px] lg:mr-[111px] ml-[32px] mr-[143px] w-[42%] xl:ml-[28px] xl:mr-[127px]">
            <Text className="2xl:mb-[412px] 2xl:mt-[303px] 2xl:mx-[79px] 3xl:mb-[495px] 3xl:mt-[364px] 3xl:mx-[95px] 3xl:text-fs43 font-normal leading-lh lg:mb-[320px] lg:mt-[236px] lg:mx-[61px] lg:text-fs28 mb-[412.31995px] ml-[79.640015px] mr-[79.64px] mt-[303.68005px] text-fs36 text-left text-white_A700 w-[28%] xl:mb-[366px] xl:mt-[270px] xl:mx-[70px] xl:text-fs32">
              <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                <>
                  {`Big Vibe `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-fs48 font-playfairdisplay text-left font-bold lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                <>{`Collection`}</>
              </span>
            </Text>
          </Column>
        </Row>
        <Column className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Row className="font-poppins items-center justify-between mx-[auto] px-[0] w-[85%]">
            <Text className="3xl:text-fs43 font-bold lg:text-fs28 text-fs36 text-gray_800 text-left xl:text-fs32">{`Featured`}</Text>
            <Row className="3xl:mb-[14px] 3xl:mt-[13px] font-poppins items-center justify-between lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[10px] xl:mt-[9px]">
              <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
              <Image
                src="img_arrow_3.svg"
                className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain w-[29%] xl:h-[28px]"
                alt="Arrow"
              />
            </Row>
          </Row>
          <Row className="3xl:mt-[37px] items-center justify-start lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]">
            <Stack className="2xl:h-[769px] 3xl:h-[923px] 3xl:ml-[172px] font-poppins h-[768px] lg:h-[598px] lg:ml-[112px] ml-[144px] w-[27%] xl:h-[684px] xl:ml-[128px]">
              <Image
                src="img_maskgroup_9.svg"
                className="2xl:h-[769px] 3xl:h-[923px] absolute h-[768px] inset-[0] lg:h-[598px] object-cover self-stretch w-[100%] xl:h-[684px]"
                alt="MaskGroup"
              />
              <Text className="3xl:text-fs43 3xl:top-[67px] absolute font-normal inset-x-[0] leading-lh lg:text-fs28 lg:top-[43px] mx-[auto] text-center text-fs36 text-gray_800 top-[56px] w-[max-content] xl:text-fs32 xl:top-[49px]">
                <span className="text-gray_800 text-fs36 font-poppins text-center font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>
                    {`Discover Our `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-gray_800 text-fs36 font-poppins text-center font-bold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>{`Featured Product`}</>
                </span>
              </Text>
            </Stack>
            <List
              className="3xl:ml-[38px] 3xl:mr-[172px] flex-wrap gap-[0] lg:ml-[24px] lg:mr-[112px] min-h-[auto] ml-[32px] mr-[144px] w-[56%] xl:ml-[28px] xl:mr-[128px]"
              orientation="vertical"
            >
              <Row className="3xl:gap-[38px] 3xl:my-[19px] gap-[32px] grid grid-cols-4 items-center justify-between lg:gap-[24px] lg:my-[12px] my-[16px] self-stretch w-[100%] xl:gap-[28px] xl:my-[14px]">
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_10.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[66%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Green `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_11.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[66%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Black`}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_12.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[66%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Blue Grey `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[100%]">
                  <Image
                    src="img_maskgroup_13.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[58%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Blue Denim `}
                          <br />
                          {`Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:my-[19px] justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
                <Column className="items-center justify-start w-[23%]">
                  <Image
                    src="img_maskgroup_14.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[45%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Casual `}
                          <br />
                          {`Pink Shirt`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[43px] items-center justify-start lg:mb-[28px] mb-[36px] w-[23%] xl:mb-[32px]">
                  <Image
                    src="img_maskgroup_15.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[59%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 mx-[auto] self-stretch text-center text-fs24 text-gray_800 xl:text-fs21">{`Gray T-shirt`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="items-center justify-start w-[23%]">
                  <Image
                    src="img_maskgroup_16.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[66%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium leading-lh lg:text-fs18 self-stretch text-center text-fs24 text-gray_800 w-[100%] xl:text-fs21">
                      {
                        <>
                          {`Purple `}
                          <br />
                          {`Warm Jacket`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[43px] items-center justify-start lg:mb-[28px] mb-[36px] w-[23%] xl:mb-[32px]">
                  <Image
                    src="img_maskgroup_17.svg"
                    className="2xl:h-[246px] 3xl:h-[295px] 3xl:w-[294px] h-[245px] lg:h-[191px] lg:w-[190px] mx-[auto] object-cover self-stretch w-[245px] xl:h-[218px] xl:w-[217px]"
                    alt="MaskGroup"
                  />
                  <Column className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] mx-[auto] w-[57%] xl:mt-[14px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Red Flannel`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
                  </Column>
                </Column>
              </Row>
            </List>
          </Row>
        </Column>
        <Stack className="2xl:h-[580px] 3xl:h-[696px] 3xl:mt-[120px] h-[579px] lg:h-[451px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:h-[516px] xl:mt-[88px]">
          <Stack className="2xl:h-[580px] 3xl:h-[696px] absolute h-[579px] inset-[0] lg:h-[451px] self-stretch w-[100%] xl:h-[516px]">
            <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
              <Text className="3xl:mb-[377px] 3xl:mt-[54px] 3xl:mx-[172px] 3xl:text-fs43 font-bold lg:mb-[244px] lg:mt-[35px] lg:mx-[112px] lg:text-fs28 mb-[314px] mt-[45px] mx-[144px] text-fs36 text-left text-white_A700 xl:mb-[279px] xl:mt-[40px] xl:mx-[128px] xl:text-fs32">{`Limited Offer`}</Text>
            </Column>
            <Row className="3xl:left-[172px] absolute bg-gray_100 bottom-[0] items-center justify-center left-[144px] lg:left-[112px] shadow-bs1 w-[42%] xl:left-[128px]">
              <Column className="3xl:ml-[38px] 3xl:my-[38px] font-poppins items-center justify-start lg:ml-[24px] lg:my-[24px] ml-[32px] my-[32px] w-[35%] xl:ml-[28px] xl:my-[28px]">
                <Image
                  src="img_maskgroup_18.svg"
                  className="2xl:h-[280px] 3xl:h-[335px] 3xl:w-[334px] h-[279px] lg:h-[217px] lg:w-[217px] mx-[auto] object-cover self-stretch w-[279px] xl:h-[249px] xl:w-[248px]"
                  alt="MaskGroup"
                />
                <Button className="2xl:py-[18px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-bold lg:mt-[24px] lg:px-[27px] lg:py-[14px] lg:text-fs14 mt-[32px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[28px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Add to Cart`}</Button>
              </Column>
              <Column className="3xl:ml-[57px] 3xl:mr-[67px] 3xl:my-[93px] font-poppins justify-start lg:ml-[37px] lg:mr-[43px] lg:my-[60px] ml-[48px] mr-[56px] my-[78px] w-[48%] xl:ml-[42px] xl:mr-[49px] xl:my-[69px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs28 font-normal lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[8px] xl:text-fs21">{`Limited Deals`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Row className="3xl:gap-[38px] gap-[32px] grid grid-cols-3 items-center justify-between lg:gap-[24px] self-stretch w-[100%] xl:gap-[28px]">
                    <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                      <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`08`}</Text>
                      <Text className="3xl:mb-[21px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:mt-[6px] lg:text-fs14 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:mt-[7px] xl:text-fs16">{`Hours`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                      <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`58`}</Text>
                      <Text className="3xl:mb-[21px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:mt-[6px] lg:text-fs14 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:mt-[7px] xl:text-fs16">{`Minutes`}</Text>
                    </Column>
                    <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                      <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`18`}</Text>
                      <Text className="3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[16px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:ml-[11px] lg:mr-[10px] lg:mt-[6px] lg:text-fs14 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:ml-[13px] xl:mr-[12px] xl:mt-[7px] xl:text-fs16">{`Seconds`}</Text>
                    </Column>
                  </Row>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs18 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs21">{`Black Warm Jacket`}</Text>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                    <Text className="3xl:text-fs28 font-normal lg:text-fs18 line-through text-fs24 text-gray_500 text-left xl:text-fs21">{`$299`}</Text>
                    <Text className="3xl:ml-[28px] 3xl:mr-[296px] 3xl:text-fs28 font-medium lg:ml-[18px] lg:mr-[192px] lg:text-fs18 ml-[24px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[21px] xl:mr-[219px] xl:text-fs21">{`$199`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Stack>
          <Row className="3xl:right-[172px] absolute bg-gray_100 bottom-[0] items-center justify-center lg:right-[112px] right-[144px] shadow-bs1 w-[42%] xl:right-[128px]">
            <Column className="3xl:ml-[38px] 3xl:my-[38px] font-poppins items-center justify-start lg:ml-[24px] lg:my-[24px] ml-[32px] my-[32px] w-[35%] xl:ml-[28px] xl:my-[28px]">
              <Image
                src="img_maskgroup_19.svg"
                className="2xl:h-[280px] 3xl:h-[335px] 3xl:w-[334px] h-[279px] lg:h-[217px] lg:w-[217px] mx-[auto] object-cover self-stretch w-[279px] xl:h-[249px] xl:w-[248px]"
                alt="MaskGroup"
              />
              <Button className="2xl:py-[18px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-bold lg:mt-[24px] lg:px-[27px] lg:py-[14px] lg:text-fs14 mt-[32px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[72%] xl:mt-[28px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Add to Cart`}</Button>
            </Column>
            <Column className="3xl:ml-[57px] 3xl:mr-[67px] 3xl:my-[93px] font-poppins justify-start lg:ml-[37px] lg:mr-[43px] lg:my-[60px] ml-[48px] mr-[56px] my-[78px] w-[48%] xl:ml-[42px] xl:mr-[49px] xl:my-[69px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 font-normal lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_800 text-left xl:mr-[8px] xl:text-fs21">{`Limited Deals`}</Text>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="3xl:gap-[38px] gap-[32px] grid grid-cols-3 items-center justify-between lg:gap-[24px] self-stretch w-[100%] xl:gap-[28px]">
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`08`}</Text>
                    <Text className="3xl:mb-[21px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:mt-[6px] lg:text-fs14 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:mt-[7px] xl:text-fs16">{`Hours`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`58`}</Text>
                    <Text className="3xl:mb-[21px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:mt-[6px] lg:text-fs14 mb-[18px] mt-[8px] mx-[auto] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:mt-[7px] xl:text-fs16">{`Minutes`}</Text>
                  </Column>
                  <Column className="border border-gray_500 border-solid font-poppins items-center justify-center w-[100%]">
                    <Text className="3xl:mt-[21px] 3xl:text-fs28 font-medium lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[16px] xl:text-fs21">{`18`}</Text>
                    <Text className="3xl:mb-[21px] 3xl:ml-[18px] 3xl:mr-[16px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[14px] lg:ml-[11px] lg:mr-[10px] lg:mt-[6px] lg:text-fs14 mb-[18px] ml-[15px] mr-[14px] mt-[8px] text-fs18 text-gray_800 text-left xl:mb-[16px] xl:ml-[13px] xl:mr-[12px] xl:mt-[7px] xl:text-fs16">{`Seconds`}</Text>
                  </Column>
                </Row>
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs18 mr-[10px] mt-[24px] text-fs24 text-gray_800 text-left xl:mr-[8px] xl:mt-[21px] xl:text-fs21">{`Casual Grey Shoes`}</Text>
              <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-normal lg:text-fs18 line-through text-fs24 text-gray_500 text-left xl:text-fs21">{`$399`}</Text>
                  <Text className="3xl:ml-[27px] 3xl:mr-[296px] 3xl:text-fs28 font-medium lg:ml-[17px] lg:mr-[192px] lg:text-fs18 ml-[23px] mr-[247px] text-fs24 text-gray_800 text-left xl:ml-[20px] xl:mr-[219px] xl:text-fs21">{`$199`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
        </Stack>
        <Row className="3xl:gap-[36px] 3xl:mt-[120px] 3xl:pl-[172px] 3xl:pr-[170px] gap-[30px] grid grid-cols-2 items-center justify-start lg:gap-[23px] lg:mt-[77px] lg:pl-[112px] lg:pr-[110px] mt-[100px] pl-[144px] pr-[142px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[88px] xl:pl-[128px] xl:pr-[126px]">
          <Column className="font-poppins justify-start w-[100%]">
            <Text className="3xl:mr-[12px] 3xl:text-fs43 font-bold lg:mr-[7px] lg:text-fs28 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[8px] xl:text-fs32">{`New Arrival`}</Text>
            <Column className="2xl:mt-[78px] 3xl:mt-[94px] items-center lg:mt-[61px] mt-[78.5px] self-stretch w-[100%] xl:mt-[69px]">
              <List
                className="3xl:ml-[12px] flex-wrap gap-[0] lg:ml-[7px] min-h-[auto] ml-[10px] w-[97%] xl:ml-[8px]"
                orientation="vertical"
              >
                <Row className="2xl:my-[62px] 3xl:my-[75px] font-poppins items-center justify-start lg:my-[48px] my-[62.5px] self-stretch w-[100%] xl:my-[55px]">
                  <Image
                    src="img_maskgroup_20.svg"
                    className="2xl:h-[108px] 3xl:h-[129px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:w-[83px] object-contain w-[107px] xl:h-[96px] xl:w-[95px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:my-[13px] 3xl:ml-[19px] 3xl:my-[16px] justify-start lg:ml-[12px] lg:my-[10px] ml-[16px] my-[13.5px] w-[28%] xl:ml-[14px] xl:my-[12px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Checkered Jacket`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                  </Column>
                  <Image
                    src="img_maskgroup_21.svg"
                    className="2xl:h-[108px] 3xl:h-[129px] 3xl:ml-[90px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:ml-[58px] lg:w-[83px] ml-[75px] object-contain w-[107px] xl:h-[96px] xl:ml-[66px] xl:w-[95px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:my-[13px] 3xl:ml-[19px] 3xl:my-[16px] font-poppins justify-start lg:ml-[12px] lg:my-[10px] ml-[16px] my-[13.5px] w-[30%] xl:ml-[14px] xl:my-[12px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Blue Woman Denim`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                  </Column>
                </Row>
                <Row className="2xl:my-[62px] 3xl:mr-[76px] 3xl:my-[75px] font-poppins items-center justify-start lg:mr-[49px] lg:my-[48px] mr-[64px] my-[62.5px] w-[92%] xl:mr-[56px] xl:my-[55px]">
                  <Image
                    src="img_maskgroup_22.svg"
                    className="2xl:h-[108px] 3xl:h-[129px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:w-[83px] object-contain w-[107px] xl:h-[96px] xl:w-[95px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:my-[13px] 3xl:ml-[19px] 3xl:my-[16px] justify-start lg:ml-[12px] lg:my-[10px] ml-[16px] my-[13.5px] w-[24%] xl:ml-[14px] xl:my-[12px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Orange Jeans`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                  </Column>
                  <Image
                    src="img_maskgroup_23.svg"
                    className="2xl:h-[108px] 3xl:h-[129px] 3xl:ml-[148px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:ml-[96px] lg:w-[83px] ml-[124px] object-contain w-[107px] xl:h-[96px] xl:ml-[110px] xl:w-[95px]"
                    alt="MaskGroup"
                  />
                  <Column className="2xl:my-[13px] 3xl:ml-[19px] 3xl:my-[16px] font-poppins justify-start lg:ml-[12px] lg:my-[10px] ml-[16px] my-[13.5px] w-[24%] xl:ml-[14px] xl:my-[12px]">
                    <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Classic Watch`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                  </Column>
                </Row>
              </List>
              <Row className="2xl:mt-[78px] 3xl:mt-[94px] font-poppins items-center justify-center lg:mt-[61px] mt-[78.5px] mx-[auto] w-[14%] xl:mt-[69px]">
                <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
                <Image
                  src="img_arrow_4.svg"
                  className="2xl:h-[32px] 3xl:h-[38px] 3xl:ml-[9px] h-[31px] lg:h-[25px] lg:ml-[6px] ml-[8px] object-contain w-[29%] xl:h-[28px] xl:ml-[7px]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
          <Column className="font-poppins justify-start w-[100%]">
            <Text className="3xl:mr-[12px] 3xl:text-fs43 font-bold lg:mr-[7px] lg:text-fs28 mr-[10px] text-fs36 text-gray_800 text-left xl:mr-[8px] xl:text-fs32">{`Popular This Week`}</Text>
            <List
              className="3xl:mt-[91px] 3xl:mx-[28px] flex-wrap gap-[0] lg:mt-[59px] lg:mx-[18px] min-h-[auto] mt-[76px] mx-[24px] w-[85%] xl:mt-[67px] xl:mx-[21px]"
              orientation="vertical"
            >
              <Row className="3xl:mr-[8px] 3xl:my-[72px] items-center justify-start lg:mr-[5px] lg:my-[46px] mr-[7px] my-[60px] w-[99%] xl:mr-[6px] xl:my-[53px]">
                <Image
                  src="img_maskgroup_24.svg"
                  className="2xl:h-[108px] 2xl:my-[2px] 3xl:h-[129px] 3xl:my-[3px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:my-[1px] lg:w-[83px] my-[2.5px] object-contain w-[107px] xl:h-[96px] xl:my-[2px] xl:w-[95px]"
                  alt="MaskGroup"
                />
                <Column className="3xl:ml-[19px] justify-start lg:ml-[12px] ml-[16px] w-[19%] xl:ml-[14px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Blue Jeans`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
                <Image
                  src="img_maskgroup_25.svg"
                  className="2xl:h-[108px] 2xl:my-[2px] 3xl:h-[129px] 3xl:ml-[195px] 3xl:my-[3px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:ml-[126px] lg:my-[1px] lg:w-[83px] ml-[163px] my-[2.5px] object-contain w-[107px] xl:h-[96px] xl:ml-[145px] xl:my-[2px] xl:w-[95px]"
                  alt="MaskGroup"
                />
                <Column className="3xl:ml-[19px] justify-start lg:ml-[12px] ml-[16px] w-[20%] xl:ml-[14px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Wristwatch`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
              </Row>
              <Row className="3xl:my-[72px] items-center justify-start lg:my-[46px] my-[60px] self-stretch w-[100%] xl:my-[53px]">
                <Image
                  src="img_maskgroup_26.svg"
                  className="2xl:h-[108px] 2xl:my-[2px] 3xl:h-[129px] 3xl:my-[3px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:my-[1px] lg:w-[83px] my-[2.5px] object-contain w-[107px] xl:h-[96px] xl:my-[2px] xl:w-[95px]"
                  alt="MaskGroup"
                />
                <Column className="3xl:ml-[19px] justify-start lg:ml-[12px] ml-[16px] w-[26%] xl:ml-[14px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Elegant Jacket`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
                <Image
                  src="img_maskgroup_27.svg"
                  className="2xl:h-[108px] 2xl:my-[2px] 3xl:h-[129px] 3xl:ml-[139px] 3xl:my-[3px] 3xl:w-[128px] h-[107px] lg:h-[84px] lg:ml-[90px] lg:my-[1px] lg:w-[83px] ml-[116px] my-[2.5px] object-contain w-[107px] xl:h-[96px] xl:ml-[103px] xl:my-[2px] xl:w-[95px]"
                  alt="MaskGroup"
                />
                <Column className="3xl:ml-[19px] justify-start lg:ml-[12px] ml-[16px] w-[21%] xl:ml-[14px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-poppins justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Gray Watch`}</Text>
                      <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                    </Column>
                  </Column>
                  <RatingBar
                    className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                    selectedStarCount={4}
                    starCount={5}
                    color="var(--gray_100)"
                    activeColor="var(--yellow_400)"
                    size={((window.innerWidth - 15) * 16) / 1440}
                  ></RatingBar>
                </Column>
              </Row>
            </List>
            <Column className="3xl:mt-[91px] items-center lg:mt-[59px] mt-[76px] self-stretch w-[100%] xl:mt-[67px]">
              <Row className="font-poppins items-center justify-center mx-[auto] w-[14%]">
                <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
                <Image
                  src="img_arrow_3.svg"
                  className="2xl:h-[32px] 3xl:h-[38px] 3xl:ml-[9px] h-[31px] lg:h-[25px] lg:ml-[6px] ml-[8px] object-contain w-[29%] xl:h-[28px] xl:ml-[7px]"
                  alt="Arrow"
                />
              </Row>
            </Column>
          </Column>
        </Row>
        <Row className="3xl:mt-[120px] bg-gray_100 font-poppins items-center justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Image
            src="img_truck.svg"
            className="2xl:h-[49px] 2xl:my-[84px] 3xl:h-[58px] 3xl:ml-[172px] 3xl:my-[101px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[112px] lg:my-[65px] lg:w-[37px] ml-[144px] my-[84.5px] object-contain w-[48px] xl:h-[43px] xl:ml-[128px] xl:my-[75px] xl:w-[42px]"
            alt="Truck"
          />
          <Column className="3xl:ml-[38px] 3xl:my-[76px] justify-start lg:ml-[24px] lg:my-[49px] ml-[32px] my-[64px] w-[11%] xl:ml-[28px] xl:my-[56px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Free Delivery`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs21 font-normal leading-lh lg:mt-[6px] lg:text-fs14 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[7px] xl:text-fs16">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_card.svg"
            className="2xl:h-[49px] 2xl:my-[84px] 3xl:h-[58px] 3xl:ml-[150px] 3xl:my-[101px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[97px] lg:my-[65px] lg:w-[37px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[43px] xl:ml-[111px] xl:my-[75px] xl:w-[42px]"
            alt="Card"
          />
          <Column className="3xl:ml-[38px] 3xl:my-[76px] justify-start lg:ml-[24px] lg:my-[49px] ml-[32px] my-[64px] w-[11%] xl:ml-[28px] xl:my-[56px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Payment Method`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs21 font-normal leading-lh lg:mt-[6px] lg:text-fs14 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[7px] xl:text-fs16">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_broken.svg"
            className="2xl:h-[49px] 2xl:my-[84px] 3xl:h-[58px] 3xl:ml-[150px] 3xl:my-[101px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[97px] lg:my-[65px] lg:w-[37px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[43px] xl:ml-[111px] xl:my-[75px] xl:w-[42px]"
            alt="Broken"
          />
          <Column className="3xl:ml-[38px] 3xl:my-[76px] justify-start lg:ml-[24px] lg:my-[49px] ml-[32px] my-[64px] w-[11%] xl:ml-[28px] xl:my-[56px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Warranty`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs21 font-normal leading-lh lg:mt-[6px] lg:text-fs14 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[7px] xl:text-fs16">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
          <Image
            src="img_support.svg"
            className="2xl:h-[49px] 2xl:my-[84px] 3xl:h-[58px] 3xl:ml-[150px] 3xl:my-[101px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[97px] lg:my-[65px] lg:w-[37px] ml-[125px] my-[84.5px] object-contain w-[48px] xl:h-[43px] xl:ml-[111px] xl:my-[75px] xl:w-[42px]"
            alt="Support"
          />
          <Column className="3xl:ml-[38px] 3xl:mr-[284px] 3xl:my-[76px] font-poppins justify-start lg:ml-[24px] lg:mr-[184px] lg:my-[49px] ml-[32px] mr-[237px] my-[64px] w-[11%] xl:ml-[28px] xl:mr-[210px] xl:my-[56px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Customer Support`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs21 font-normal leading-lh lg:mt-[6px] lg:text-fs14 mt-[8px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[7px] xl:text-fs16">
              {
                <>
                  {`This free shipping`}
                  <br />
                  {`only for selected region`}
                </>
              }
            </Text>
          </Column>
        </Row>
        <div className="self-stretch w-[100%]">
          <Column className="bg-gray_800 font-poppins items-center justify-end self-stretch w-[100%]">
            <Row className="3xl:mt-[76px] justify-evenly lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
              <Column className="3xl:mb-[43px] font-poppins justify-start lg:mb-[28px] mb-[36px] w-[22%] xl:mb-[32px]">
                <Row className="items-center justify-start self-stretch w-[100%]">
                  <Image
                    src="img_group19_1.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[7px] h-[24px] lg:h-[19px] lg:my-[4px] my-[6px] object-contain w-[9%] xl:h-[22px] xl:my-[5px]"
                    alt="Group19"
                  />
                  <Text className="3xl:ml-[9px] 3xl:mr-[365px] 3xl:text-fs28 font-bold lg:ml-[6px] lg:mr-[236px] lg:text-fs18 ml-[8px] mr-[304px] text-fs24 text-left text-white_A700 xl:ml-[7px] xl:mr-[270px] xl:text-fs21">{`Elliye`}</Text>
                </Row>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_500 text-left w-[92%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .`}</Text>
                <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="items-center justify-start self-stretch w-[100%]">
                    <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_call.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[3px] lg:w-[18px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:my-[3px] xl:w-[21px]"
                        alt="Call"
                      />
                      <Text className="3xl:ml-[9px] 3xl:text-fs21 font-normal lg:ml-[6px] lg:text-fs14 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[7px] xl:text-fs16">{`+1234567890`}</Text>
                    </Row>
                    <Row className="3xl:mt-[19px] font-poppins items-center justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                      <Image
                        src="img_email.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[3px] lg:w-[18px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:my-[3px] xl:w-[21px]"
                        alt="Email"
                      />
                      <Text className="3xl:ml-[9px] 3xl:text-fs21 font-normal lg:ml-[6px] lg:text-fs14 ml-[8px] text-fs18 text-left text-white_A700 xl:ml-[7px] xl:text-fs16">{`elliye@support.com`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Row className="justify-center w-[56%]">
                <Column className="3xl:mb-[67px] font-poppins justify-start lg:mb-[43px] mb-[56px] w-[23%] xl:mb-[49px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Product Links`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-poppins justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[41%] xl:mr-[8px] xl:mt-[28px]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 mr-[1px] text-fs18 text-gray_500 text-left xl:text-fs16">{`Categories`}</Text>
                    <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[14px] xl:text-fs16">{`New Arrival`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs14 mr-[10px] mt-[16px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs16">{`Features`}</Text>
                    <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mt-[12px] lg:text-fs14 mr-[1px] mt-[16px] text-fs18 text-gray_500 text-left xl:mt-[14px] xl:text-fs16">{`Collections`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:ml-[38px] font-poppins justify-start lg:ml-[24px] ml-[32px] w-[23%] xl:ml-[28px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Company`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-poppins justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[60%] xl:mr-[8px] xl:mt-[28px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`About`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Blog`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Careers`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Services`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Privacy Policy`}</Text>
                    <Text className="3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-fs18 text-gray_500 text-left xl:mt-[8px] xl:text-fs16">{`Terms of service`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[85px] 3xl:ml-[38px] 3xl:mr-[172px] font-poppins justify-start lg:mb-[55px] lg:ml-[24px] lg:mr-[112px] mb-[71px] ml-[32px] mr-[144px] w-[35%] xl:mb-[63px] xl:ml-[28px] xl:mr-[128px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Join our Newsletter`}</Text>
                  <Text className="3xl:mt-[28px] 3xl:text-fs21 font-normal leading-lh lg:mt-[18px] lg:text-fs14 mt-[24px] self-stretch text-fs18 text-gray_500 text-left w-[100%] xl:mt-[21px] xl:text-fs16">{`Drop your email below to get update, promotions, coupons, and more!`}</Text>
                  <Column className="3xl:mt-[42px] items-center lg:mt-[27px] mt-[35px] self-stretch w-[100%] xl:mt-[31px]">
                    <Row className="bg-gray_800 border border-solid border-white_A700 font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:mb-[20px] 3xl:ml-[28px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mb-[13px] lg:ml-[18px] lg:mt-[12px] lg:text-fs14 mb-[17px] ml-[24px] mt-[16px] opacity-op5 text-bluegray_100_87 text-center text-fs18 tracking-ls1 xl:mb-[15px] xl:ml-[21px] xl:mt-[14px] xl:text-fs16">{`Enter your email`}</Text>
                      <Image
                        src="img_submit.svg"
                        className="2xl:h-[61px] 3xl:h-[73px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:w-[46px] object-contain w-[60px] xl:h-[54px] xl:w-[53px]"
                        alt="submit"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </Row>
            <Text className="3xl:mb-[38px] 3xl:mt-[115px] 3xl:text-fs16 font-normal lg:mb-[24px] lg:mt-[74px] lg:text-fs10 mb-[32px] mt-[96px] mx-[auto] text-bluegray_100 text-fs14 text-left xl:mb-[28px] xl:mt-[85px] xl:text-fs12">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default HomepageV2Page;
