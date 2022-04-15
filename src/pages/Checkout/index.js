import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Input } from "components/Input";

const CheckoutPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="bg-white_A700 font-poppins items-center justify-end self-stretch w-[100%]">
              <Row className="3xl:mt-[28px] items-center justify-end lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Image
                  src="img_group19.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[1085px] 3xl:my-[14px] h-[24px] lg:h-[19px] lg:ml-[703px] lg:my-[9px] ml-[904px] my-[12px] object-contain w-[2%] xl:h-[22px] xl:ml-[804px] xl:my-[10px]"
                  alt="Group19"
                />
                <Text className="3xl:ml-[9px] 3xl:my-[7px] 3xl:text-fs28 font-bold lg:ml-[6px] lg:my-[4px] lg:text-fs18 ml-[8px] my-[6px] text-fs24 text-gray_800 text-left xl:ml-[7px] xl:my-[5px] xl:text-fs21">{`Elliye`}</Text>
                <Image
                  src="img_icon_5.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[649px] 3xl:my-[14px] h-[24px] lg:h-[19px] lg:ml-[420px] lg:my-[9px] ml-[541px] my-[12px] object-contain w-[4%] xl:h-[22px] xl:ml-[481px] xl:my-[10px]"
                  alt="icon"
                />
                <Button className="2xl:py-[12px] 3xl:ml-[38px] 3xl:mr-[172px] 3xl:px-[34px] 3xl:py-[14px] 3xl:text-fs21 bg-gray_800 border-bw font-medium lg:ml-[24px] lg:mr-[112px] lg:px-[22px] lg:py-[9px] lg:text-fs14 ml-[32px] mr-[144px] px-[29px] py-[12.045px] text-center text-fs18 text-white_A700 w-[6%] xl:ml-[28px] xl:mr-[128px] xl:px-[25px] xl:py-[10px] xl:text-fs16">{`Login`}</Button>
              </Row>
              <Line className="3xl:mt-[28px] bg-gray_100 h-[1px] lg:mt-[18px] mt-[24px] mx-[auto] w-[85%] xl:mt-[21px]" />
            </Column>
          </div>
        </Column>
        <Row className="3xl:mt-[38px] 3xl:mx-[172px] font-poppins items-center justify-start lg:mt-[24px] lg:mx-[112px] mt-[32px] mx-[144px] w-[19%] xl:mt-[28px] xl:mx-[128px]">
          <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-gray_500 text-left xl:text-fs16">{`Home`}</Text>
          <Text className="3xl:ml-[19px] 3xl:text-fs21 font-medium lg:ml-[12px] lg:text-fs14 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[14px] xl:text-fs16">{`>`}</Text>
          <Text className="3xl:ml-[19px] 3xl:text-fs21 font-medium lg:ml-[12px] lg:text-fs14 ml-[16px] text-fs18 text-gray_500 text-left xl:ml-[14px] xl:text-fs16">{`Shopping Cart`}</Text>
          <Text className="3xl:ml-[19px] 3xl:text-fs21 font-medium lg:ml-[12px] lg:text-fs14 ml-[16px] text-bluegray_100 text-fs18 text-left xl:ml-[14px] xl:text-fs16">{`>`}</Text>
          <Text className="3xl:ml-[19px] 3xl:text-fs21 font-medium lg:ml-[12px] lg:text-fs14 ml-[16px] text-fs18 text-gray_800 text-left xl:ml-[14px] xl:text-fs16">{`Checkout`}</Text>
        </Row>
        <Column className="3xl:mt-[49px] font-poppins items-center lg:mt-[31px] mt-[41px] self-stretch w-[100%] xl:mt-[36px]">
          <Text className="3xl:text-fs43 font-bold lg:text-fs28 mx-[auto] text-fs36 text-gray_800 text-left xl:text-fs32">{`Checkout`}</Text>
          <Row className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] mx-[auto] w-[84%] xl:mt-[88px]">
            <Row className="font-poppins items-center justify-start w-[16%]">
              <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[22%]">
                <Text className="3xl:my-[12px] 3xl:text-fs28 font-medium lg:my-[7px] lg:text-fs18 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[8px] xl:text-fs21">{`1`}</Text>
              </Column>
              <Text className="3xl:ml-[28px] 3xl:my-[12px] 3xl:text-fs28 font-medium lg:ml-[18px] lg:my-[7px] lg:text-fs18 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[21px] xl:my-[8px] xl:text-fs21">{`Shopping Cart`}</Text>
            </Row>
            <Row className="3xl:ml-[25px] font-poppins items-center justify-center lg:ml-[16px] ml-[21px] w-[67%] xl:ml-[18px]">
              <Line className="3xl:mb-[31px] 3xl:mt-[33px] bg-gray_800 h-[2px] lg:mb-[20px] lg:mt-[21px] mb-[26px] mt-[28px] w-[36%] xl:mb-[23px] xl:mt-[24px]" />
              <Row className="3xl:ml-[68px] items-center justify-center lg:ml-[44px] ml-[57px] w-[18%] xl:ml-[50px]">
                <Column className="border-2 border-gray_800 border-solid items-center justify-start rounded-radius50 w-[28%]">
                  <Text className="3xl:my-[12px] 3xl:text-fs28 font-medium lg:my-[7px] lg:text-fs18 mx-[auto] my-[10px] text-fs24 text-gray_800 text-left xl:my-[8px] xl:text-fs21">{`2`}</Text>
                </Column>
                <Text className="3xl:ml-[28px] 3xl:my-[12px] 3xl:text-fs28 font-medium lg:ml-[18px] lg:my-[7px] lg:text-fs18 ml-[24px] my-[10px] text-fs24 text-gray_800 text-left xl:ml-[21px] xl:my-[8px] xl:text-fs21">{`Checkout`}</Text>
              </Row>
              <Line className="3xl:mb-[31px] 3xl:ml-[67px] 3xl:mt-[33px] bg-bluegray_100 h-[2px] lg:mb-[20px] lg:ml-[43px] lg:mt-[21px] mb-[26px] ml-[56px] mt-[28px] w-[36%] xl:mb-[23px] xl:ml-[49px] xl:mt-[24px]" />
            </Row>
            <Row className="3xl:ml-[38px] font-poppins items-center justify-start lg:ml-[24px] ml-[32px] w-[14%] xl:ml-[28px]">
              <Column className="border-2 border-bluegray_100 border-solid items-center justify-start rounded-radius50 w-[26%]">
                <Text className="3xl:my-[12px] 3xl:text-fs28 font-medium lg:my-[7px] lg:text-fs18 mx-[auto] my-[10px] text-bluegray_100 text-fs24 text-left xl:my-[8px] xl:text-fs21">{`3`}</Text>
              </Column>
              <Text className="3xl:ml-[28px] 3xl:my-[12px] 3xl:text-fs28 font-medium lg:ml-[18px] lg:my-[7px] lg:text-fs18 ml-[24px] my-[10px] text-bluegray_100 text-fs24 text-left xl:ml-[21px] xl:my-[8px] xl:text-fs21">{`Completed`}</Text>
            </Row>
          </Row>
          <Row className="3xl:mt-[96px] items-center justify-between lg:mt-[62px] mt-[80px] px-[0] self-stretch w-[100%] xl:mt-[71px]">
            <Column className="3xl:ml-[172px] font-poppins justify-start lg:ml-[112px] ml-[144px] w-[34%] xl:ml-[128px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Buyer Info`}</Text>
              <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                <Line className="bg-bluegray_100 h-[1px] w-[100%]" />
                <Column className="3xl:mt-[37px] font-poppins justify-start lg:mt-[24px] mt-[31px] w-[100%] xl:mt-[27px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`Full Name`}</Text>
                  <Input
                    className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                    name="Group36"
                    placeholder={`Full Name`}
                  ></Input>
                </Column>
                <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] w-[100%] xl:mt-[28px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[8px] xl:text-fs16">{`Address`}</Text>
                  <Input
                    className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                    name="Group38"
                    placeholder={`Address`}
                  ></Input>
                </Column>
                <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] w-[100%] xl:mt-[28px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[8px] xl:text-fs16">{`Contact`}</Text>
                  <Input
                    className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                    name="Group42"
                    placeholder={`Contact`}
                  ></Input>
                </Column>
                <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] w-[100%] xl:mt-[28px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[8px] xl:text-fs16">{`City`}</Text>
                  <Input
                    className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                    name="Group48"
                    placeholder={`City`}
                  ></Input>
                </Column>
                <Row className="3xl:mt-[38px] items-center justify-between lg:mt-[24px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="font-poppins justify-start w-[58%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[8px] xl:text-fs16">{`State`}</Text>
                    <div className="3xl:mt-[19px] bg-transparent border-bw lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:top-[13px] lg:bottom-[14px] lg:right-[24px] xl:top-[15px] xl:bottom-[16px] xl:right-[28px] 2xl:top-[17px] 2xl:bottom-[18px] 3xl:top-[21px] 3xl:bottom-[22px] 3xl:right-[38px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[17px] 3xl:pb-[22px] 3xl:pl-[38px] 3xl:pr-[79px] 3xl:pt-[21px] 3xl:text-fs21 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[14px] lg:pl-[24px] lg:pr-[51px] lg:pt-[13px] lg:text-fs14 pb-[18.545px] pl-[32px] pr-[66px] pt-[17.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[16px] xl:pl-[28px] xl:pr-[58px] xl:pt-[15px] xl:text-fs16">{`Select State`}</Button>
                    </div>
                  </Column>
                  <Column className="font-poppins justify-start mr-[1px] w-[37%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-center text-fs18 text-gray_500 xl:mr-[8px] xl:text-fs16">{`Zip Code`}</Text>
                    <Input
                      className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                      name="Group50"
                      placeholder={`Zip Code`}
                    ></Input>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="3xl:mr-[172px] font-poppins justify-start lg:mr-[112px] mr-[144px] w-[42%] xl:mr-[128px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_800 text-left xl:mr-[8px] xl:text-fs16">{`Payment Method`}</Text>
              <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                <Line className="bg-bluegray_100 h-[1px] self-stretch w-[100%]" />
                <Row className="3xl:gap-[39px] 3xl:mt-[37px] font-poppins gap-[33px] grid grid-cols-3 items-center justify-between lg:gap-[25px] lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:gap-[29px] xl:mt-[27px]">
                  <Row className="border border-bluegray_100 border-solid items-center justify-center w-[100%]">
                    <Image
                      src="img_card_1.svg"
                      className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[37px] 3xl:ml-[50px] 3xl:mt-[38px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[32px] lg:my-[24px] lg:w-[31px] mb-[31px] ml-[42px] mt-[32px] object-contain w-[40px] xl:h-[36px] xl:mb-[27px] xl:ml-[37px] xl:mt-[28px] xl:w-[35px]"
                      alt="Card"
                    />
                    <Text className="3xl:mb-[44px] 3xl:ml-[19px] 3xl:mr-[50px] 3xl:mt-[46px] 3xl:text-fs21 font-normal lg:mb-[28px] lg:ml-[12px] lg:mr-[32px] lg:mt-[30px] lg:text-fs14 mb-[37px] ml-[16px] mr-[42px] mt-[39px] text-fs18 text-gray_800 text-left xl:mb-[32px] xl:ml-[14px] xl:mr-[37px] xl:mt-[34px] xl:text-fs16">{`Credit Card`}</Text>
                  </Row>
                  <div className="bg-transparent border-0 w-[100%] input-wrap">
                    <Image
                      src="img_transfer.svg"
                      className="absolute top-[33.545px] bottom-[32.545px] left-[33px] bg-transparent border-0 lg:top-[26px] lg:bottom-[25px] lg:left-[25px] xl:top-[29px] xl:bottom-[28px] xl:left-[29px] 2xl:top-[33px] 2xl:bottom-[32px] 3xl:top-[40px] 3xl:bottom-[39px] 3xl:left-[39px]"
                      alt="transfer"
                    />
                    <Input
                      className="2xl:pb-[32px] 2xl:pt-[33px] 3xl:pb-[39px] 3xl:pl-[99px] 3xl:pt-[40px] 3xl:text-fs21 bg-gray_800 border border-bluegray_100 border-solid font-normal lg:pb-[25px] lg:pl-[64px] lg:pt-[26px] lg:text-fs14 pb-[32.545px] pl-[83px] placeholder:bg-transparent placeholder:text-white_A700 pt-[33.545px] text-fs18 text-left text-white_A700 w-[100%] xl:pb-[28px] xl:pl-[73px] xl:pt-[29px] xl:text-fs16"
                      name="banktransfer"
                      placeholder={`Bank Transfer`}
                    ></Input>
                  </div>
                  <div className="bg-transparent border-bw w-[100%] input-wrap">
                    <Image
                      src="img_paypal.svg"
                      className="absolute top-[33.545px] bottom-[32.545px] left-[64px] border-bw bg-transparent lg:top-[26px] lg:bottom-[25px] lg:left-[49px] xl:top-[29px] xl:bottom-[28px] xl:left-[56px] 2xl:top-[33px] 2xl:bottom-[32px] 3xl:top-[40px] 3xl:bottom-[39px] 3xl:left-[76px]"
                      alt="paypal"
                    />
                    <Button className="2xl:pb-[32px] 2xl:pt-[33px] 3xl:pb-[39px] 3xl:pl-[136px] 3xl:pt-[40px] 3xl:text-fs21 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[25px] lg:pl-[88px] lg:pt-[26px] lg:text-fs14 pb-[32.545px] pl-[114px] pt-[33.545px] text-fs18 text-gray_800 text-left w-[100%] xl:pb-[28px] xl:pl-[101px] xl:pt-[29px] xl:text-fs16">{`Paypal`}</Button>
                  </div>
                </Row>
                <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`Name on Card`}</Text>
                  <Input
                    className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                    name="Group40"
                    placeholder={`Name on Card`}
                  ></Input>
                </Column>
                <Row className="3xl:mt-[38px] items-center justify-between lg:mt-[24px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[28px]">
                  <Column className="font-poppins justify-start w-[65%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`Card Number`}</Text>
                    <Input
                      className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                      name="Group44"
                      placeholder={`Card Number`}
                    ></Input>
                  </Column>
                  <Column className="font-poppins justify-start w-[31%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`CVV`}</Text>
                    <Input
                      className="3xl:mt-[19px] bg-transparent border border-bluegray_100 border-solid lg:mt-[12px] mt-[16px] placeholder:bg-transparent placeholder:text-gray_500 self-stretch w-[100%] xl:mt-[14px]"
                      name="Group46"
                      placeholder={`CVV`}
                    ></Input>
                  </Column>
                </Row>
                <Row className="3xl:gap-[38px] 3xl:mt-[38px] gap-[32px] grid grid-cols-2 items-center justify-between lg:gap-[24px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[28px] xl:mt-[28px]">
                  <Column className="font-poppins justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`Month`}</Text>
                    <div className="3xl:mt-[19px] bg-transparent border-bw lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[17.545px] bottom-[18.545px] right-[32px] border-bw bg-transparent lg:top-[13px] lg:bottom-[14px] lg:right-[24px] xl:top-[15px] xl:bottom-[16px] xl:right-[28px] 2xl:top-[17px] 2xl:bottom-[18px] 3xl:top-[21px] 3xl:bottom-[22px] 3xl:right-[38px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pb-[18px] 2xl:pt-[17px] 3xl:pb-[22px] 3xl:pl-[38px] 3xl:pr-[79px] 3xl:pt-[21px] 3xl:text-fs21 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[14px] lg:pl-[24px] lg:pr-[51px] lg:pt-[13px] lg:text-fs14 pb-[18.545px] pl-[32px] pr-[66px] pt-[17.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[16px] xl:pl-[28px] xl:pr-[58px] xl:pt-[15px] xl:text-fs16">{`Select Month`}</Button>
                    </div>
                  </Column>
                  <Column className="font-poppins justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_500 text-left xl:mr-[8px] xl:text-fs16">{`Year`}</Text>
                    <div className="3xl:mt-[19px] bg-transparent border-bw lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px] input-wrap">
                      <Image
                        src="img_chevrondown.svg"
                        className="absolute top-[18.545px] bottom-[17.545px] right-[32px] border-bw bg-transparent lg:top-[14px] lg:bottom-[13px] lg:right-[24px] xl:top-[16px] xl:bottom-[15px] xl:right-[28px] 2xl:top-[18px] 2xl:bottom-[17px] 3xl:top-[22px] 3xl:bottom-[21px] 3xl:right-[38px]"
                        alt="chevron-down"
                      />
                      <Button className="2xl:pb-[17px] 2xl:pt-[18px] 3xl:pb-[21px] 3xl:pl-[38px] 3xl:pr-[79px] 3xl:pt-[22px] 3xl:text-fs21 bg-transparent border border-bluegray_100 border-solid font-normal lg:pb-[13px] lg:pl-[24px] lg:pr-[51px] lg:pt-[14px] lg:text-fs14 pb-[17.545px] pl-[32px] pr-[66px] pt-[18.545px] text-fs18 text-gray_500 text-left w-[100%] xl:pb-[15px] xl:pl-[28px] xl:pr-[58px] xl:pt-[16px] xl:text-fs16">{`Select Year`}</Button>
                    </div>
                  </Column>
                </Row>
              </Column>
              <Column className="3xl:mt-[90px] font-poppins items-end lg:mt-[58px] mt-[75px] self-stretch w-[100%] xl:mt-[66px]">
                <Button className="2xl:py-[18px] 3xl:ml-[12px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-medium lg:ml-[7px] lg:px-[27px] lg:py-[14px] lg:text-fs14 ml-[10px] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[31%] xl:ml-[8px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Checkout`}</Button>
              </Column>
            </Column>
          </Row>
          <div className="3xl:mt-[120px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
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
                          src="img_call_1.svg"
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
                          src="img_submit_1.svg"
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
    </Column>
  );
};

export default CheckoutPage;
