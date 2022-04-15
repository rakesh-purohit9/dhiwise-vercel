import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Input } from "components/Input";
import { Button } from "components/Button";

const Cart1Page = () => {
  return (
    <Column className="bg-white_A700 justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="bg-white_A700 font-dmsans justify-start self-stretch w-[100%]">
              <Image
                src="img_phone_2.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[34px] 3xl:ml-[124px] 3xl:mt-[51px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[22px] lg:ml-[80px] lg:mt-[33px] lg:w-[18px] mb-[29px] ml-[104px] mt-[43px] object-contain w-[24px] xl:h-[22px] xl:mb-[25px] xl:ml-[92px] xl:mt-[38px] xl:w-[21px]"
                alt="Phone"
              />
              <Text className="3xl:mb-[38px] 3xl:ml-[9px] 3xl:mt-[54px] 3xl:text-fs19 font-medium lg:mb-[24px] lg:ml-[6px] lg:mt-[35px] lg:text-fs12 mb-[32px] ml-[8px] mt-[45px] text-black_900 text-fs16 text-left tracking-ls1 xl:mb-[28px] xl:ml-[7px] xl:mt-[40px] xl:text-fs14">{`+022 319 821 967`}</Text>
              <Image
                src="img_dummylogo02_14.svg"
                className="2xl:h-[88px] 3xl:h-[105px] 3xl:ml-[419px] 3xl:mt-[10px] h-[87px] lg:h-[68px] lg:ml-[271px] lg:mt-[7px] ml-[349px] mt-[9px] object-contain w-[15%] xl:h-[78px] xl:ml-[310px] xl:mt-[8px]"
                alt="DummyLogo02"
              />
              <Row className="3xl:gap-[19px] 3xl:mb-[31px] 3xl:ml-[362px] 3xl:mr-[124px] 3xl:mt-[36px] gap-[16px] grid grid-cols-4 items-center justify-center lg:gap-[12px] lg:mb-[20px] lg:ml-[234px] lg:mr-[80px] lg:mt-[23px] mb-[26px] ml-[302px] mr-[104px] mt-[30px] w-[14%] xl:gap-[14px] xl:mb-[23px] xl:ml-[268px] xl:mr-[92px] xl:mt-[26px]">
                <Column className="border border-black_900 border-solid font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-black_900 text-fs16 text-left tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Fb`}</Text>
                </Column>
                <Column className="border border-black_900 border-solid font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:ml-[12px] 3xl:mr-[10px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:mx-[7px] lg:text-fs12 mb-[10px] ml-[10px] mr-[9px] mt-[11px] text-black_900 text-fs16 text-left tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:mx-[8px] xl:text-fs14">{`Tw`}</Text>
                </Column>
                <Column className="border border-black_900 border-solid font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-black_900 text-fs16 text-left tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Ig`}</Text>
                </Column>
                <Column className="border border-black_900 border-solid font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-black_900 text-fs16 text-left tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Yt`}</Text>
                </Column>
              </Row>
            </Row>
            <Row className="3xl:mb-[45px] 3xl:mt-[32px] items-center justify-between lg:mb-[29px] lg:mt-[21px] mb-[38px] mt-[27px] mx-[auto] px-[0] w-[86%] xl:mb-[33px] xl:mt-[24px]">
              <Row className="3xl:mb-[13px] 3xl:mt-[16px] font-dmsans items-center justify-between lg:mb-[8px] lg:mt-[10px] mb-[11px] mt-[14px] px-[0] w-[22%] xl:mb-[9px] xl:mt-[12px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`About`}</Text>
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`FAQ`}</Text>
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Blog`}</Text>
              </Row>
              <Row className="justify-between px-[0] w-[14%]">
                <Image
                  src="img_heart.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:mt-[14px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:mt-[9px] lg:w-[24px] mt-[12px] object-contain w-[32px] xl:h-[29px] xl:mt-[10px] xl:w-[28px]"
                  alt="Heart"
                />
                <Stack className="2xl:h-[45px] 3xl:h-[53px] h-[44px] lg:h-[35px] w-[26%] xl:h-[40px]">
                  <Image
                    src="img_shoppingcart_1.svg"
                    className="2xl:h-[33px] 3xl:h-[39px] 3xl:w-[38px] absolute bottom-[0] h-[32px] left-[0] lg:h-[25px] lg:w-[24px] object-contain w-[32px] xl:h-[29px] xl:w-[28px]"
                    alt="ShoppingCart"
                  />
                  <Column className="absolute bg-deep_orange_A200 font-dmsans items-center justify-start right-[0] rounded-radius50 top-[0] w-[52%]">
                    <Text className="3xl:text-fs19 font-medium lg:mb-[1px] lg:mt-[2px] lg:text-fs12 mb-[2px] mt-[3px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[1px] xl:mt-[2px] xl:text-fs14">{`3`}</Text>
                  </Column>
                </Stack>
                <Image
                  src="img_userprofile2_1.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:mt-[14px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:mt-[9px] lg:w-[24px] mt-[12px] object-contain w-[32px] xl:h-[29px] xl:mt-[10px] xl:w-[28px]"
                  alt="UserProfile2"
                />
              </Row>
            </Row>
          </Column>
        </div>
      </Column>
      <Column className="items-end self-stretch w-[100%]">
        <Stack className="2xl:h-[401px] 3xl:h-[481px] 3xl:ml-[12px] font-merriweather h-[400px] lg:h-[312px] lg:ml-[7px] ml-[10px] w-[93%] xl:h-[356px] xl:ml-[8px]">
          <Stack className="2xl:h-[401px] 3xl:h-[481px] absolute h-[400px] inset-[0] lg:h-[312px] self-stretch w-[100%] xl:h-[356px]">
            <div className="2xl:h-[401px] 3xl:h-[481px] absolute bg-gray_305 h-[400px] lg:h-[312px] right-[0] w-[69%] xl:h-[356px]"></div>
            <Text className="3xl:bottom-[164px] 3xl:text-fs57 absolute bottom-[137px] font-bold left-[0] lg:bottom-[106px] lg:text-fs37 text-fs48 text-gray_907 text-left tracking-ls1 xl:bottom-[121px] xl:text-fs42">{`Shopping Bag`}</Text>
          </Stack>
          <Text className="3xl:text-fs28 3xl:top-[163px] absolute font-bold left-[0] lg:text-fs18 lg:top-[105px] text-bluegray_900 text-fs24 text-left top-[136px] tracking-ls1 xl:text-fs21 xl:top-[120px]">{`Home > Shopping Bag`}</Text>
        </Stack>
      </Column>
      <Column className="3xl:mt-[192px] items-center lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Column className="font-merriweather justify-start mx-[auto] w-[71%]">
          <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold lg:mr-[7px] lg:text-fs37 mr-[10px] text-fs48 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs42">{`Cart`}</Text>
          <Column className="3xl:mt-[51px] items-center lg:mt-[33px] mt-[43px] self-stretch w-[100%] xl:mt-[38px]">
            <Row className="bg-deep_orange_A201 font-dmsans items-center justify-start rounded-radius8 self-stretch w-[100%]">
              <Text className="3xl:mb-[26px] 3xl:ml-[96px] 3xl:mt-[25px] 3xl:text-fs28 font-bold lg:mb-[17px] lg:ml-[62px] lg:mt-[16px] lg:text-fs18 mb-[22px] ml-[80px] mt-[21px] text-fs24 text-left text-white_A700 tracking-ls1 xl:mb-[19px] xl:ml-[71px] xl:mt-[18px] xl:text-fs21">{`Product Name`}</Text>
              <Text className="3xl:mb-[26px] 3xl:ml-[211px] 3xl:mt-[25px] 3xl:text-fs28 font-bold lg:mb-[17px] lg:ml-[136px] lg:mt-[16px] lg:text-fs18 mb-[22px] ml-[176px] mt-[21px] text-fs24 text-left text-white_A700 tracking-ls1 xl:mb-[19px] xl:ml-[156px] xl:mt-[18px] xl:text-fs21">{`Price`}</Text>
              <Text className="3xl:mb-[26px] 3xl:ml-[163px] 3xl:mt-[25px] 3xl:text-fs28 font-bold lg:mb-[17px] lg:ml-[105px] lg:mt-[16px] lg:text-fs18 mb-[22px] ml-[136px] mt-[21px] text-fs24 text-left text-white_A700 tracking-ls1 xl:mb-[19px] xl:ml-[120px] xl:mt-[18px] xl:text-fs21">{`Quantity`}</Text>
              <Text className="3xl:mb-[26px] 3xl:ml-[144px] 3xl:mr-[146px] 3xl:mt-[25px] 3xl:text-fs28 font-bold lg:mb-[17px] lg:ml-[93px] lg:mr-[94px] lg:mt-[16px] lg:text-fs18 mb-[22px] ml-[120px] mr-[122px] mt-[21px] text-fs24 text-left text-white_A700 tracking-ls1 xl:mb-[19px] xl:ml-[106px] xl:mr-[108px] xl:mt-[18px] xl:text-fs21">{`Total`}</Text>
            </Row>
            <List
              className="3xl:mt-[48px] flex-wrap gap-[0] lg:mt-[31px] min-h-[auto] mt-[40px] self-stretch w-[100%] xl:mt-[35px]"
              orientation="vertical"
            >
              <Row className="3xl:my-[28px] font-merriweather items-center justify-start lg:my-[18px] my-[24px] self-stretch w-[100%] xl:my-[21px]">
                <div className="2xl:h-[81px] 3xl:h-[97px] 3xl:w-[96px] bg-gray_305 h-[80px] lg:h-[63px] lg:w-[62px] rounded-radius4 w-[80px] xl:h-[72px] xl:w-[71px]"></div>
                <Text className="3xl:mb-[31px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[31px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[40px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[35px] xl:mt-[22px] xl:text-fs21">{`Classic Blouse IX`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[123px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[80px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[103px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[91px] xl:mt-[22px] xl:text-fs21">{`$ 99`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[220px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[143px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[184px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[163px] xl:mt-[22px] xl:text-fs21">{`2`}</Text>
                <Text className="3xl:mb-[30px] 3xl:ml-[192px] 3xl:mt-[31px] 3xl:text-fs28 font-bold lg:mb-[19px] lg:ml-[124px] lg:mt-[20px] lg:text-fs18 mb-[25px] ml-[160px] mt-[26px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[22px] xl:ml-[142px] xl:mt-[23px] xl:text-fs21">{`$198`}</Text>
                <Image
                  src="img_trashbin.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[110px] 3xl:my-[28px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[71px] lg:my-[18px] lg:w-[24px] ml-[92px] my-[24px] object-contain w-[32px] xl:h-[29px] xl:ml-[81px] xl:my-[21px] xl:w-[28px]"
                  alt="TrashBin"
                />
              </Row>
              <Row className="3xl:my-[28px] font-merriweather items-center justify-start lg:my-[18px] my-[24px] self-stretch w-[100%] xl:my-[21px]">
                <div className="2xl:h-[81px] 3xl:h-[97px] 3xl:w-[96px] bg-gray_305 h-[80px] lg:h-[63px] lg:w-[62px] rounded-radius4 w-[80px] xl:h-[72px] xl:w-[71px]"></div>
                <Text className="3xl:mb-[31px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[31px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[40px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[35px] xl:mt-[22px] xl:text-fs21">{`Classic Blouse IX`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[123px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[80px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[103px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[91px] xl:mt-[22px] xl:text-fs21">{`$ 99`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[220px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[143px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[184px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[163px] xl:mt-[22px] xl:text-fs21">{`2`}</Text>
                <Text className="3xl:mb-[30px] 3xl:ml-[192px] 3xl:mt-[31px] 3xl:text-fs28 font-bold lg:mb-[19px] lg:ml-[124px] lg:mt-[20px] lg:text-fs18 mb-[25px] ml-[160px] mt-[26px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[22px] xl:ml-[142px] xl:mt-[23px] xl:text-fs21">{`$198`}</Text>
                <Image
                  src="img_trashbin.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[110px] 3xl:my-[28px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[71px] lg:my-[18px] lg:w-[24px] ml-[92px] my-[24px] object-contain w-[32px] xl:h-[29px] xl:ml-[81px] xl:my-[21px] xl:w-[28px]"
                  alt="TrashBin"
                />
              </Row>
              <Row className="3xl:my-[28px] font-merriweather items-center justify-start lg:my-[18px] my-[24px] self-stretch w-[100%] xl:my-[21px]">
                <div className="2xl:h-[81px] 3xl:h-[97px] 3xl:w-[96px] bg-gray_305 h-[80px] lg:h-[63px] lg:w-[62px] rounded-radius4 w-[80px] xl:h-[72px] xl:w-[71px]"></div>
                <Text className="3xl:mb-[31px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[31px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[40px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[35px] xl:mt-[22px] xl:text-fs21">{`Classic Blouse IX`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[123px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[80px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[103px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[91px] xl:mt-[22px] xl:text-fs21">{`$ 99`}</Text>
                <Text className="3xl:mb-[31px] 3xl:ml-[220px] 3xl:mt-[30px] 3xl:text-fs28 font-bold lg:mb-[20px] lg:ml-[143px] lg:mt-[19px] lg:text-fs18 mb-[26px] ml-[184px] mt-[25px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[23px] xl:ml-[163px] xl:mt-[22px] xl:text-fs21">{`2`}</Text>
                <Text className="3xl:mb-[30px] 3xl:ml-[192px] 3xl:mt-[31px] 3xl:text-fs28 font-bold lg:mb-[19px] lg:ml-[124px] lg:mt-[20px] lg:text-fs18 mb-[25px] ml-[160px] mt-[26px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mb-[22px] xl:ml-[142px] xl:mt-[23px] xl:text-fs21">{`$198`}</Text>
                <Image
                  src="img_trashbin.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:ml-[110px] 3xl:my-[28px] 3xl:w-[38px] h-[32px] lg:h-[25px] lg:ml-[71px] lg:my-[18px] lg:w-[24px] ml-[92px] my-[24px] object-contain w-[32px] xl:h-[29px] xl:ml-[81px] xl:my-[21px] xl:w-[28px]"
                  alt="TrashBin"
                />
              </Row>
            </List>
            <Row className="3xl:mt-[76px] items-center justify-between lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
              <Column className="bg-red_51 font-merriweather justify-center rounded-radius8 w-[49%]">
                <Text className="3xl:mt-[86px] 3xl:mx-[48px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[56px] lg:mx-[31px] lg:text-fs18 mt-[72px] mx-[40px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[64px] xl:mx-[35px] xl:text-fs21">{`Have a Coupon?`}</Text>
                <Input
                  className="3xl:mt-[33px] 3xl:mx-[48px] 3xl:pl-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-transparent border border-deep_orange_A201 border-solid font-dmsans font-normal lg:mt-[21px] lg:mx-[31px] lg:pl-[18px] lg:py-[15px] lg:text-fs12 mt-[28px] mx-[40px] pl-[24px] placeholder:bg-transparent placeholder:text-bluegray_300 py-[20px] rounded-radius8 text-bluegray_300 text-fs16 text-left tracking-ls1 w-[84%] xl:mt-[24px] xl:mx-[35px] xl:pl-[21px] xl:py-[17px] xl:text-fs14"
                  name="Textbox"
                  placeholder={`Input your email here`}
                ></Input>
                <Button className="2xl:py-[20px] 3xl:mb-[86px] 3xl:mt-[48px] 3xl:mx-[48px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-deep_orange_A201 border-bw font-bold font-mulish lg:mb-[56px] lg:mt-[31px] lg:mx-[31px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mb-[72px] mt-[40px] mx-[40px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[31%] xl:mb-[64px] xl:mt-[35px] xl:mx-[35px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Apply Coupon`}</Button>
              </Column>
              <Column className="3xl:mb-[10px] font-merriweather justify-start lg:mb-[7px] mb-[9px] w-[39%] xl:mb-[8px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`Cart Totals`}</Text>
                <Column className="3xl:mt-[57px] font-merriweather items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
                  <Row className="font-merriweather justify-start self-stretch w-[100%]">
                    <Text className="3xl:text-fs19 font-bold font-merriweather lg:text-fs12 mb-[1px] text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Subtotal`}</Text>
                    <Text className="3xl:ml-[93px] 3xl:mr-[261px] 3xl:text-fs19 font-dmsans font-normal lg:ml-[60px] lg:mr-[169px] lg:text-fs12 ml-[78px] mr-[218px] text-bluegray_700 text-fs16 text-left tracking-ls1 xl:ml-[69px] xl:mr-[193px] xl:text-fs14">{`$150`}</Text>
                  </Row>
                  <Row className="3xl:mt-[27px] font-merriweather justify-start lg:mt-[17px] mt-[23px] self-stretch w-[100%] xl:mt-[20px]">
                    <Text className="3xl:text-fs19 font-bold font-merriweather lg:text-fs12 mb-[1px] text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Shipping`}</Text>
                    <Text className="3xl:ml-[86px] 3xl:mr-[182px] 3xl:text-fs19 font-dmsans font-normal lg:ml-[56px] lg:mr-[118px] lg:text-fs12 ml-[72px] mr-[152px] text-bluegray_700 text-fs16 text-left tracking-ls1 xl:ml-[64px] xl:mr-[135px] xl:text-fs14">{`Free Shipping`}</Text>
                  </Row>
                  <Row className="3xl:mt-[26px] font-dmsans items-center justify-end lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[175px] 3xl:text-fs19 font-normal lg:ml-[113px] lg:text-fs12 ml-[146px] text-bluegray_700 text-fs16 text-left tracking-ls1 xl:ml-[129px] xl:text-fs14">{`Shipping to Sidney`}</Text>
                    <Text className="3xl:ml-[68px] 3xl:text-fs19 font-normal lg:ml-[44px] lg:text-fs12 ml-[57px] text-deep_orange_A200 text-fs16 text-left tracking-ls1 xl:ml-[50px] xl:text-fs14">{`Change`}</Text>
                  </Row>
                  <Row className="3xl:mt-[37px] font-merriweather items-center justify-start lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Total`}</Text>
                    <Text className="3xl:ml-[123px] 3xl:mr-[255px] 3xl:text-fs19 font-bold lg:ml-[80px] lg:mr-[165px] lg:text-fs12 ml-[103px] mr-[213px] text-fs16 text-gray_907 text-left tracking-ls1 xl:ml-[91px] xl:mr-[189px] xl:text-fs14">{`$350`}</Text>
                  </Row>
                  <Button className="2xl:py-[20px] 3xl:mt-[67px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-deep_orange_A201 border-bw font-bold font-mulish lg:mt-[43px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mt-[56px] px-[35px] py-[20.1px] rounded-radius8 self-stretch text-center text-fs16 text-white_A700 tracking-ls1 w-[100%] xl:mt-[49px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Checkout`}</Button>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Column className="3xl:mt-[192px] font-merriweather justify-start lg:mt-[124px] mt-[160px] mx-[auto] w-[71%] xl:mt-[142px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold lg:mr-[7px] lg:text-fs37 mr-[10px] text-fs48 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs42">{`Checkout`}</Text>
          <Column className="3xl:mt-[96px] items-center lg:mt-[62px] mt-[80px] self-stretch w-[100%] xl:mt-[71px]">
            <Column className="font-merriweather justify-start self-stretch w-[100%]">
              <Text className="3xl:mr-[12px] 3xl:text-fs37 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs31 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs27">{`Customer Email`}</Text>
              <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
                <Column className="font-merriweather justify-start self-stretch w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`Email Address`}</Text>
                  <Input
                    className="2xl:py-[26px] 3xl:mt-[28px] 3xl:pl-[38px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:mt-[18px] lg:pl-[24px] lg:py-[20px] lg:text-fs18 mt-[24px] pl-[32px] placeholder:bg-transparent placeholder:text-bluegray_300 py-[26.4px] rounded-radius8 self-stretch text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:pl-[28px] xl:py-[23px] xl:text-fs21"
                    name="Emailaddress"
                    placeholder={`Email address`}
                  ></Input>
                </Column>
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs28 font-normal lg:ml-[1px] lg:mr-[7px] lg:mt-[18px] lg:text-fs18 ml-[2px] mr-[10px] mt-[24px] text-bluegray_300 text-fs24 text-left tracking-ls1 xl:ml-[1px] xl:mr-[8px] xl:mt-[21px] xl:text-fs21">{`Already have an account? Sign in`}</Text>
            </Column>
            <Column className="3xl:mt-[96px] font-merriweather justify-start lg:mt-[62px] mt-[80px] self-stretch w-[100%] xl:mt-[71px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs37 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs31 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs27">{`Shipping Address`}</Text>
              <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
                <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] self-stretch w-[100%] xl:gap-[14px]">
                  <Column className="font-merriweather justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`First Name`}</Text>
                    <Input
                      className="2xl:py-[26px] 3xl:mt-[28px] 3xl:pl-[38px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:mt-[18px] lg:pl-[24px] lg:py-[20px] lg:text-fs18 mt-[24px] pl-[32px] placeholder:bg-transparent placeholder:text-bluegray_300 py-[26.4px] rounded-radius8 self-stretch text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:pl-[28px] xl:py-[23px] xl:text-fs21"
                      name="Emailaddress"
                      placeholder={`First name`}
                    ></Input>
                  </Column>
                  <Column className="font-merriweather justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`Last Name`}</Text>
                    <Input
                      className="2xl:py-[26px] 3xl:mt-[28px] 3xl:pl-[38px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:mt-[18px] lg:pl-[24px] lg:py-[20px] lg:text-fs18 mt-[24px] pl-[32px] placeholder:bg-transparent placeholder:text-bluegray_300 py-[26.4px] rounded-radius8 self-stretch text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:pl-[28px] xl:py-[23px] xl:text-fs21"
                      name="Emailaddress"
                      placeholder={`Last name`}
                    ></Input>
                  </Column>
                </Row>
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[57px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:mt-[37px] lg:text-fs18 mr-[10px] mt-[48px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:mt-[42px] xl:text-fs21">{`Address Line`}</Text>
              <Input
                className="2xl:pb-[37px] 2xl:pt-[26px] 3xl:mt-[28px] 3xl:pb-[44px] 3xl:pl-[38px] 3xl:pt-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:mt-[18px] lg:pb-[29px] lg:pl-[24px] lg:pt-[20px] lg:text-fs18 mt-[24px] pb-[37.4px] pl-[32px] placeholder:bg-transparent placeholder:text-bluegray_300 pt-[26.4px] rounded-radius8 self-stretch text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:pb-[33px] xl:pl-[28px] xl:pt-[23px] xl:text-fs21"
                name="Emailaddress"
                placeholder={`Address line`}
              ></Input>
              <Text className="3xl:mr-[12px] 3xl:mt-[57px] 3xl:text-fs28 font-bold lg:ml-[1px] lg:mr-[7px] lg:mt-[37px] lg:text-fs18 ml-[2px] mr-[10px] mt-[48px] text-fs24 text-gray_907 text-left tracking-ls1 xl:ml-[1px] xl:mr-[8px] xl:mt-[42px] xl:text-fs21">{`Country`}</Text>
              <div className="3xl:mt-[28px] bg-transparent border-bw lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px] input-wrap">
                <Image
                  src="img_arrow_chevron_down_1.svg"
                  className="absolute right-[24px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[20px] xl:right-[21px] xl:inset-y-[23px] 2xl:inset-y-[26px] 3xl:right-[28px] 3xl:inset-y-[31px] inset-y-[26.4px]"
                  alt="Arrow Chevron Down"
                />
                <Button className="2xl:py-[26px] 3xl:pl-[38px] 3xl:pr-[69px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:pl-[24px] lg:pr-[45px] lg:py-[20px] lg:text-fs18 pl-[32px] pr-[58px] py-[26.4px] rounded-radius8 text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:pl-[28px] xl:pr-[51px] xl:py-[23px] xl:text-fs21">{`Indonesia`}</Button>
              </div>
              <Column className="3xl:mt-[57px] items-center lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
                <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] self-stretch w-[100%] xl:gap-[14px]">
                  <Column className="font-merriweather justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:ml-[1px] lg:mr-[7px] lg:text-fs18 ml-[2px] mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:ml-[1px] xl:mr-[8px] xl:text-fs21">{`Postal Code`}</Text>
                    <div className="3xl:mt-[28px] bg-transparent border-bw lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px] input-wrap">
                      <Image
                        src="img_arrow_chevron_down_1.svg"
                        className="absolute right-[24px] border-bw bg-transparent lg:right-[18px] lg:inset-y-[20px] xl:right-[21px] xl:inset-y-[23px] 2xl:inset-y-[26px] 3xl:right-[28px] 3xl:inset-y-[31px] inset-y-[26.4px]"
                        alt="Arrow Chevron Down"
                      />
                      <Button className="2xl:py-[26px] 3xl:pl-[38px] 3xl:pr-[69px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:pl-[24px] lg:pr-[45px] lg:py-[20px] lg:text-fs18 pl-[32px] pr-[58px] py-[26.4px] rounded-radius8 text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:pl-[28px] xl:pr-[51px] xl:py-[23px] xl:text-fs21">{`Postal Code`}</Button>
                    </div>
                  </Column>
                  <Column className="font-merriweather justify-start w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:ml-[1px] lg:mr-[7px] lg:text-fs18 ml-[2px] mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:ml-[1px] xl:mr-[8px] xl:text-fs21">{`Phone Number`}</Text>
                    <Input
                      className="2xl:py-[26px] 3xl:mt-[28px] 3xl:pl-[38px] 3xl:py-[31px] 3xl:text-fs28 bg-transparent border-2 border-deep_orange_A201 border-solid font-normal lg:mt-[18px] lg:pl-[24px] lg:py-[20px] lg:text-fs18 mt-[24px] pl-[32px] placeholder:bg-transparent placeholder:text-bluegray_300 py-[26.4px] rounded-radius8 self-stretch text-bluegray_300 text-fs24 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:pl-[28px] xl:py-[23px] xl:text-fs21"
                      name="Emailaddress"
                      placeholder={`Phone number`}
                    ></Input>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="3xl:mt-[96px] font-merriweather justify-start lg:mt-[62px] mt-[80px] self-stretch w-[100%] xl:mt-[71px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs37 font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-fs31 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs27">{`Billing Address`}</Text>
              <Row className="3xl:mr-[12px] 3xl:mt-[48px] font-merriweather items-center justify-start lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[36%] xl:mr-[8px] xl:mt-[35px]">
                <Image
                  src="img_checkmarkcircl.svg"
                  className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:w-[31px] object-contain w-[40px] xl:h-[36px] xl:w-[35px]"
                  alt="CheckmarkCircl"
                />
                <Text className="3xl:mb-[6px] 3xl:ml-[28px] 3xl:mt-[7px] 3xl:text-fs28 font-normal lg:mb-[3px] lg:ml-[18px] lg:mt-[4px] lg:text-fs18 mb-[5px] ml-[24px] mt-[6px] text-deep_orange_A201 text-fs24 text-left tracking-ls1 xl:mb-[4px] xl:ml-[21px] xl:mt-[5px] xl:text-fs21">{`Same as shipping address`}</Text>
              </Row>
              <Column className="3xl:mt-[67px] font-mulish items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
                <Button className="2xl:py-[20px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-deep_orange_A201 border-bw font-bold lg:px-[27px] lg:py-[15px] lg:text-fs12 px-[35px] py-[20.1px] rounded-radius8 self-stretch text-center text-fs16 text-white_A700 tracking-ls1 w-[100%] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Continue`}</Button>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="3xl:mt-[192px] font-merriweather justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Text className="3xl:mx-[124px] 3xl:text-fs57 font-bold lg:mx-[80px] lg:text-fs37 mx-[104px] text-bluegray_900 text-fs48 text-left tracking-ls1 xl:mx-[92px] xl:text-fs42">{`Related Items`}</Text>
          <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
            <List
              className="3xl:gap-[19px] flex-wrap gap-[16px] grid grid-cols-4 lg:gap-[12px] min-h-[auto] mx-[auto] w-[86%] xl:gap-[14px]"
              orientation="horizontal"
            >
              <Column className="items-center justify-start w-[100%]">
                <Stack className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] h-[296px] lg:h-[231px] lg:w-[230px] mx-[auto] self-stretch w-[296px] xl:h-[264px] xl:w-[263px]">
                  <Image
                    src="img_imageplacehold.svg"
                    className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] absolute h-[296px] inset-[0] lg:h-[231px] lg:w-[230px] object-cover self-stretch w-[296px] xl:h-[264px] xl:w-[263px]"
                    alt="ImagePlacehold"
                  />
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:right-[19px] 3xl:top-[19px] 3xl:w-[48px] absolute bg-white_A700 h-[40px] lg:h-[32px] lg:right-[12px] lg:top-[12px] lg:w-[31px] right-[16px] rounded-radius50 top-[16px] w-[40px] xl:h-[36px] xl:right-[14px] xl:top-[14px] xl:w-[35px]">
                    <Image
                      src="img_heart_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Heart"
                    />
                  </Stack>
                </Stack>
                <Column className="3xl:mt-[24px] font-dmsans items-center justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Text className="3xl:text-fs16 font-dmsans font-medium lg:text-fs10 mx-[auto] text-center text-deep_orange_A200 text-fs14 tracking-ls1 xl:text-fs12">{`Bags`}</Text>
                  <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`Queen’s Summer`}</Text>
                  <Text className="3xl:mt-[20px] 3xl:text-fs14 font-dmsans font-normal lg:mt-[13px] lg:text-fs9 mt-[17px] mx-[auto] text-bluegray_700 text-center text-fs12 tracking-ls1 xl:mt-[15px] xl:text-fs10">{`Medium Shoulder Bag`}</Text>
                  <Text className="3xl:mt-[21px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-center text-deep_orange_A200 text-fs24 tracking-ls1 xl:mt-[16px] xl:text-fs21">{`$1000`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Stack className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] h-[296px] lg:h-[231px] lg:w-[230px] mx-[auto] self-stretch w-[296px] xl:h-[264px] xl:w-[263px]">
                  <Image
                    src="img_imageplacehold.svg"
                    className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] absolute h-[296px] inset-[0] lg:h-[231px] lg:w-[230px] object-cover self-stretch w-[296px] xl:h-[264px] xl:w-[263px]"
                    alt="ImagePlacehold"
                  />
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:right-[19px] 3xl:top-[19px] 3xl:w-[48px] absolute bg-white_A700 h-[40px] lg:h-[32px] lg:right-[12px] lg:top-[12px] lg:w-[31px] right-[16px] rounded-radius50 top-[16px] w-[40px] xl:h-[36px] xl:right-[14px] xl:top-[14px] xl:w-[35px]">
                    <Image
                      src="img_heart_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Heart"
                    />
                  </Stack>
                </Stack>
                <Column className="3xl:mt-[24px] font-dmsans items-center justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Text className="3xl:text-fs16 font-dmsans font-medium lg:text-fs10 mx-[auto] text-center text-deep_orange_A200 text-fs14 tracking-ls1 xl:text-fs12">{`Bags`}</Text>
                  <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`Queen’s Summer`}</Text>
                  <Text className="3xl:mt-[20px] 3xl:text-fs14 font-dmsans font-normal lg:mt-[13px] lg:text-fs9 mt-[17px] mx-[auto] text-bluegray_700 text-center text-fs12 tracking-ls1 xl:mt-[15px] xl:text-fs10">{`Medium Shoulder Bag`}</Text>
                  <Text className="3xl:mt-[21px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-center text-deep_orange_A200 text-fs24 tracking-ls1 xl:mt-[16px] xl:text-fs21">{`$1000`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Stack className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] h-[296px] lg:h-[231px] lg:w-[230px] mx-[auto] self-stretch w-[296px] xl:h-[264px] xl:w-[263px]">
                  <Image
                    src="img_imageplacehold.svg"
                    className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] absolute h-[296px] inset-[0] lg:h-[231px] lg:w-[230px] object-cover self-stretch w-[296px] xl:h-[264px] xl:w-[263px]"
                    alt="ImagePlacehold"
                  />
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:right-[19px] 3xl:top-[19px] 3xl:w-[48px] absolute bg-white_A700 h-[40px] lg:h-[32px] lg:right-[12px] lg:top-[12px] lg:w-[31px] right-[16px] rounded-radius50 top-[16px] w-[40px] xl:h-[36px] xl:right-[14px] xl:top-[14px] xl:w-[35px]">
                    <Image
                      src="img_heart_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Heart"
                    />
                  </Stack>
                </Stack>
                <Column className="3xl:mt-[24px] font-dmsans items-center justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Text className="3xl:text-fs16 font-dmsans font-medium lg:text-fs10 mx-[auto] text-center text-deep_orange_A200 text-fs14 tracking-ls1 xl:text-fs12">{`Bags`}</Text>
                  <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`Queen’s Summer`}</Text>
                  <Text className="3xl:mt-[20px] 3xl:text-fs14 font-dmsans font-normal lg:mt-[13px] lg:text-fs9 mt-[17px] mx-[auto] text-bluegray_700 text-center text-fs12 tracking-ls1 xl:mt-[15px] xl:text-fs10">{`Medium Shoulder Bag`}</Text>
                  <Text className="3xl:mt-[21px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-center text-deep_orange_A200 text-fs24 tracking-ls1 xl:mt-[16px] xl:text-fs21">{`$1000`}</Text>
                </Column>
              </Column>
              <Column className="items-center justify-start w-[100%]">
                <Stack className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] h-[296px] lg:h-[231px] lg:w-[230px] mx-[auto] self-stretch w-[296px] xl:h-[264px] xl:w-[263px]">
                  <Image
                    src="img_imageplacehold.svg"
                    className="2xl:h-[297px] 3xl:h-[356px] 3xl:w-[355px] absolute h-[296px] inset-[0] lg:h-[231px] lg:w-[230px] object-cover self-stretch w-[296px] xl:h-[264px] xl:w-[263px]"
                    alt="ImagePlacehold"
                  />
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:right-[19px] 3xl:top-[19px] 3xl:w-[48px] absolute bg-white_A700 h-[40px] lg:h-[32px] lg:right-[12px] lg:top-[12px] lg:w-[31px] right-[16px] rounded-radius50 top-[16px] w-[40px] xl:h-[36px] xl:right-[14px] xl:top-[14px] xl:w-[35px]">
                    <Image
                      src="img_heart_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Heart"
                    />
                  </Stack>
                </Stack>
                <Column className="3xl:mt-[24px] font-dmsans items-center justify-start lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Text className="3xl:text-fs16 font-dmsans font-medium lg:text-fs10 mx-[auto] text-center text-deep_orange_A200 text-fs14 tracking-ls1 xl:text-fs12">{`Bags`}</Text>
                  <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`Queen’s Summer`}</Text>
                  <Text className="3xl:mt-[20px] 3xl:text-fs14 font-dmsans font-normal lg:mt-[13px] lg:text-fs9 mt-[17px] mx-[auto] text-bluegray_700 text-center text-fs12 tracking-ls1 xl:mt-[15px] xl:text-fs10">{`Medium Shoulder Bag`}</Text>
                  <Text className="3xl:mt-[21px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[14px] lg:text-fs18 mt-[18px] mx-[auto] text-center text-deep_orange_A200 text-fs24 tracking-ls1 xl:mt-[16px] xl:text-fs21">{`$1000`}</Text>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
        <div className="3xl:mt-[192px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Row className="bg-deep_orange_A201 items-end justify-evenly px-[0] self-stretch w-[100%]">
            <Column className="3xl:mb-[145px] 3xl:mt-[56px] font-dmsans justify-start lg:mb-[94px] lg:mt-[36px] mb-[121px] mt-[47px] w-[31%] xl:mb-[107px] xl:mt-[41px]">
              <Image
                src="img_dummylogo02_15.svg"
                className="2xl:h-[97px] 3xl:h-[116px] 3xl:mr-[12px] h-[96px] lg:h-[75px] lg:mr-[7px] mr-[10px] object-contain w-[55%] xl:h-[86px] xl:mr-[8px]"
                alt="DummyLogo02"
              />
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 w-[100%] xl:mt-[7px] xl:text-fs14">{`OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[172px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[112px] lg:text-fs12 mr-[10px] mt-[144px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[128px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
            </Column>
            <Column className="3xl:mb-[174px] 3xl:mt-[171px] font-dmsans justify-start lg:mb-[112px] lg:mt-[111px] mb-[145px] mt-[143px] w-[9%] xl:mb-[128px] xl:mt-[127px]">
              <Text className="3xl:text-fs19 font-bold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:text-fs14">{`Our Social Media`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[22px] lg:text-fs12 mr-[10px] mt-[29px] text-fs16 text-left text-white_A700 tracking-ls1 w-[56%] xl:mr-[8px] xl:mt-[25px] xl:text-fs14">
                {
                  <>
                    {`Facebook`}
                    <br />
                    {`Twitter`}
                    <br />
                    {`Instagram`}
                    <br />
                    {`Youtube`}
                  </>
                }
              </Text>
            </Column>
            <Column className="3xl:mb-[140px] 3xl:mt-[171px] font-dmsans justify-start lg:mb-[91px] lg:mt-[111px] mb-[117px] mt-[143px] w-[16%] xl:mb-[104px] xl:mt-[127px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Contact`}</Text>
              <Column className="3xl:mt-[42px] items-center lg:mt-[27px] mt-[35px] self-stretch w-[100%] xl:mt-[31px]">
                <Row className="font-dmsans justify-start self-stretch w-[100%]">
                  <Image
                    src="img_communication_1.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[20px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[13px] lg:w-[18px] mb-[17px] object-contain w-[24px] xl:h-[22px] xl:mb-[15px] xl:w-[21px]"
                    alt="Communication"
                  />
                  <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] mt-[1px] text-fs16 text-left text-white_A700 tracking-ls1 w-[83%] xl:ml-[14px] xl:text-fs14">
                    {
                      <>
                        {`8819 Ohio St. South Gate,`}
                        <br />
                        {`California 90280`}
                      </>
                    }
                  </Text>
                </Row>
              </Column>
              <Row className="3xl:mt-[48px] font-dmsans justify-start lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
                <Image
                  src="img_communication_2.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="Communication"
                />
                <Text className="3xl:ml-[19px] 3xl:mr-[34px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[12px] lg:mr-[22px] lg:text-fs12 mb-[3px] ml-[16px] mr-[29px] mt-[1px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[2px] xl:ml-[14px] xl:mr-[25px] xl:text-fs14">{`ourstudio@hello.com`}</Text>
              </Row>
              <Row className="3xl:mt-[39px] font-dmsans justify-start lg:mt-[25px] mt-[33px] self-stretch w-[100%] xl:mt-[29px]">
                <Image
                  src="img_communication_3.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="Communication"
                />
                <Text className="3xl:ml-[19px] 3xl:mr-[49px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[12px] lg:mr-[31px] lg:text-fs12 mb-[3px] ml-[16px] mr-[41px] mt-[1px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[2px] xl:ml-[14px] xl:mr-[36px] xl:text-fs14">{`+271 386-647-3637`}</Text>
              </Row>
            </Column>
          </Row>
        </div>
      </Column>
    </Column>
  );
};

export default Cart1Page;
