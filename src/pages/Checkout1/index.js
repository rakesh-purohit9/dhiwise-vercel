import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Button } from "components/Button";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";

const Checkout1Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-end self-stretch w-[100%]">
        <div className="self-stretch w-[100%]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Stack className="2xl:h-[150px] 3xl:h-[179px] h-[149px] lg:h-[116px] self-stretch w-[100%] xl:h-[133px]">
              <div className="2xl:h-[150px] 3xl:h-[179px] absolute bg-white_A700 h-[149px] inset-[0] lg:h-[116px] self-stretch w-[100%] xl:h-[133px]"></div>
              <Row className="absolute font-poppins h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]">
                <Image
                  src="img_logo.svg"
                  className="2xl:h-[45px] 2xl:mt-[11px] 3xl:h-[54px] 3xl:mb-[14px] 3xl:mt-[13px] h-[44.92px] lg:h-[35px] lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11.080002px] object-contain w-[11%] xl:h-[40px] xl:mb-[10px] xl:mt-[9px]"
                  alt="logo"
                />
                <div className="3xl:ml-[115px] bg-transparent border-bw lg:ml-[74px] ml-[96px] w-[7%] xl:ml-[85px] input-wrap">
                  <Image
                    src="img_arrrow.svg"
                    className="absolute top-[21.545px] bottom-[22.545px] right-[19.809998px] border-bw bg-transparent lg:top-[16px] lg:bottom-[17px] lg:right-[15px] xl:top-[19px] xl:bottom-[20px] xl:right-[17px] 2xl:top-[21px] 2xl:bottom-[22px] 2xl:right-[19px] 3xl:top-[25px] 3xl:bottom-[27px] 3xl:right-[23px]"
                    alt="arrrow"
                  />
                  <Button className="2xl:pb-[22px] 2xl:pr-[42px] 2xl:pt-[21px] 3xl:pb-[27px] 3xl:pl-[24px] 3xl:pr-[50px] 3xl:pt-[25px] 3xl:text-fs21 bg-white_A700 border-bw font-semibold lg:pb-[17px] lg:pl-[15px] lg:pr-[32px] lg:pt-[16px] lg:text-fs14 pb-[22.545px] pl-[20px] pr-[41.999998px] pt-[21.545px] rounded-radius8 text-fs18 text-left text-purple_600 w-[100%] xl:pb-[20px] xl:pl-[17px] xl:pr-[37px] xl:pt-[19px] xl:text-fs16">{`Menu`}</Button>
                </div>
                <div className="3xl:ml-[24px] bg-transparent border-bw lg:ml-[15px] ml-[20px] w-[47%] xl:ml-[17px] input-wrap">
                  <Image
                    src="img_search_5.svg"
                    className="absolute top-[21.545px] bottom-[22.545px] right-[30.01001px] border-bw bg-transparent lg:top-[16px] lg:bottom-[17px] lg:right-[23px] xl:top-[19px] xl:bottom-[20px] xl:right-[26px] 2xl:top-[21px] 2xl:bottom-[22px] 2xl:right-[30px] 3xl:top-[25px] 3xl:bottom-[27px] 3xl:right-[36px]"
                    alt="search"
                  />
                  <Button className="2xl:pb-[22px] 2xl:pr-[64px] 2xl:pt-[21px] 3xl:pb-[27px] 3xl:pl-[42px] 3xl:pr-[76px] 3xl:pt-[25px] 3xl:text-fs21 bg-gray_101 border-bw font-normal lg:pb-[17px] lg:pl-[27px] lg:pr-[49px] lg:pt-[16px] lg:text-fs14 pb-[22.545px] pl-[35px] pr-[64.00001px] pt-[21.545px] rounded-radius8 text-fs18 text-gray_700 text-left w-[100%] xl:pb-[20px] xl:pl-[31px] xl:pr-[56px] xl:pt-[19px] xl:text-fs16">{`Find books here..`}</Button>
                </div>
                <Stack className="2xl:h-[33px] 2xl:mb-[11px] 3xl:h-[39px] 3xl:mb-[14px] 3xl:ml-[84px] 3xl:mt-[28px] h-[32.29px] lg:h-[26px] lg:mb-[9px] lg:ml-[54px] lg:mt-[18px] mb-[11.709999px] ml-[70px] mt-[24px] w-[2%] xl:h-[29px] xl:mb-[10px] xl:ml-[62px] xl:mt-[21px]">
                  <Image
                    src="img_basket.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] absolute h-[20.73px] left-[0] lg:h-[17px] object-contain top-[0] w-[60%] xl:h-[19px]"
                    alt="basket"
                  />
                  <Column className="absolute bg-purple_600 border-2 border-solid border-white_A700 bottom-[0] font-poppins items-center justify-start right-[0] rounded-radius50 w-[57%]">
                    <Text className="3xl:text-fs16 font-medium lg:mt-[1px] lg:text-fs10 mt-[2px] mx-[auto] text-fs14 text-left text-white_A700 xl:mt-[1px] xl:text-fs12">{`1`}</Text>
                  </Column>
                </Stack>
                <Row className="3xl:ml-[93px] border border-purple_600 border-solid font-poppins items-center justify-center lg:ml-[60px] ml-[78px] rounded-radius8 w-[16%] xl:ml-[69px]">
                  <Image
                    src="img_vector.svg"
                    className="2xl:h-[29px] 3xl:h-[34px] 3xl:ml-[26px] 3xl:my-[24px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:ml-[17px] lg:my-[15px] lg:w-[21px] ml-[22px] my-[20px] object-contain w-[28px] xl:h-[25px] xl:ml-[19px] xl:my-[17px] xl:w-[24px]"
                    alt="Vector"
                  />
                  <Text className="3xl:mb-[25px] 3xl:ml-[25px] 3xl:mt-[24px] 3xl:text-fs21 font-semibold lg:mb-[16px] lg:ml-[16px] lg:mt-[15px] lg:text-fs14 mb-[21px] ml-[21px] mt-[20px] text-fs18 text-left text-purple_600 xl:mb-[18px] xl:ml-[18px] xl:mt-[17px] xl:text-fs16">{`Roberto Karlos`}</Text>
                  <Image
                    src="img_chevron.svg"
                    className="2xl:h-[15px] 2xl:mb-[28px] 2xl:mr-[30px] 2xl:w-[14px] 3xl:h-[18px] 3xl:mb-[34px] 3xl:ml-[12px] 3xl:mr-[36px] 3xl:mt-[30px] 3xl:w-[17px] h-[14.19px] lg:h-[12px] lg:mb-[22px] lg:ml-[7px] lg:mr-[23px] lg:mt-[19px] lg:w-[11px] mb-[28.809998px] ml-[10px] mr-[30.810059px] mt-[25px] object-contain w-[14.19px] xl:h-[13px] xl:mb-[25px] xl:ml-[8px] xl:mr-[27px] xl:mt-[22px] xl:w-[12px]"
                    alt="chevron"
                  />
                </Row>
              </Row>
            </Stack>
            <Line className="bg-purple_50 h-[1px] self-stretch w-[100%]" />
          </Column>
        </div>
        <Row className="bg-gradient1  font-poppins items-center justify-start self-stretch w-[100%]">
          <Text className="3xl:mb-[28px] 3xl:ml-[180px] 3xl:mt-[27px] 3xl:text-fs21 font-semibold lg:mb-[18px] lg:ml-[116px] lg:mt-[17px] lg:text-fs14 mb-[24px] ml-[150px] mt-[23px] text-fs18 text-left text-purple_600 xl:mb-[21px] xl:ml-[133px] xl:mt-[20px] xl:text-fs16">{`Home /`}</Text>
          <Text className="2xl:mr-[1607px] 3xl:mb-[28px] 3xl:ml-[10px] 3xl:mr-[1928px] 3xl:mt-[27px] 3xl:text-fs21 font-normal lg:mb-[18px] lg:ml-[7px] lg:mr-[1249px] lg:mt-[17px] lg:text-fs14 mb-[24px] ml-[9px] mr-[1606px] mt-[23px] text-fs18 text-gray_602 text-left xl:mb-[21px] xl:ml-[8px] xl:mr-[1428px] xl:mt-[20px] xl:text-fs16">{`Checkout`}</Text>
        </Row>
        <Column className="3xl:mt-[60px] items-center justify-start lg:mt-[38px] mt-[50px] mx-[auto] w-[70%] xl:mt-[44px]">
          <Row className="bg-purple_900 font-poppins items-center justify-start rounded-radius10 self-stretch w-[100%]">
            <Text className="3xl:ml-[33px] 3xl:my-[34px] 3xl:text-fs24 font-semibold lg:ml-[21px] lg:my-[22px] lg:text-fs15 ml-[28px] my-[29px] text-fs20 text-left text-white_A700 xl:ml-[24px] xl:my-[25px] xl:text-fs17">{`Item`}</Text>
            <Text className="3xl:ml-[668px] 3xl:my-[34px] 3xl:text-fs24 font-semibold lg:ml-[433px] lg:my-[22px] lg:text-fs15 ml-[557px] my-[29px] text-fs20 text-left text-white_A700 xl:ml-[495px] xl:my-[25px] xl:text-fs17">{`Quantity`}</Text>
            <Text className="3xl:ml-[250px] 3xl:my-[34px] 3xl:text-fs24 font-semibold lg:ml-[162px] lg:my-[22px] lg:text-fs15 ml-[209px] my-[29px] text-fs20 text-left text-white_A700 xl:ml-[185px] xl:my-[25px] xl:text-fs17">{`Price`}</Text>
            <Text className="3xl:ml-[132px] 3xl:mr-[181px] 3xl:my-[34px] 3xl:text-fs24 font-semibold lg:ml-[85px] lg:mr-[117px] lg:my-[22px] lg:text-fs15 ml-[110px] mr-[151px] my-[29px] text-fs20 text-left text-white_A700 xl:ml-[97px] xl:mr-[134px] xl:my-[25px] xl:text-fs17">{`Total Price`}</Text>
          </Row>
          <List
            className="3xl:mt-[36px] flex-wrap gap-[0] lg:mt-[23px] min-h-[auto] mt-[30px] w-[100%] xl:mt-[26px]"
            orientation="vertical"
          >
            <Row className="3xl:my-[18px] bg-white_A700 border border-purple_50 border-solid font-poppins items-center justify-start lg:my-[11px] my-[15px] rounded-radius12 self-stretch w-[100%] xl:my-[13px]">
              <Image
                src="img_cover.svg"
                className="2xl:h-[201px] 2xl:mb-[14px] 2xl:ml-[14px] 3xl:h-[241px] 3xl:mb-[17px] 3xl:ml-[17px] 3xl:mt-[13px] h-[200.25px] lg:h-[156px] lg:mb-[11px] lg:ml-[11px] lg:mt-[8px] mb-[14.75px] ml-[14.980011px] mt-[11px] object-contain w-[10%] xl:h-[179px] xl:mb-[13px] xl:ml-[13px] xl:mt-[9px]"
                alt="cover"
              />
              <Column className="3xl:mb-[78px] 3xl:ml-[40px] 3xl:mt-[73px] justify-start lg:mb-[50px] lg:ml-[26px] lg:mt-[47px] mb-[65px] ml-[34px] mt-[61px] w-[19%] xl:mb-[57px] xl:ml-[30px] xl:mt-[54px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_801 text-left xl:mr-[8px] xl:text-fs16">{`ISBN 51251123151`}</Text>
                <Text className="3xl:mt-[12px] 3xl:text-fs24 font-semibold lg:mt-[7px] lg:text-fs15 mt-[10px] self-stretch text-black_900 text-fs20 text-left xl:mt-[8px] xl:text-fs17">{`Emily and the Backbone`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[12px] text-black_900 text-fs14 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs12">{`Cloe Mamora`}</Text>
              </Column>
              <Row className="3xl:mb-[97px] 3xl:ml-[224px] 3xl:mt-[96px] items-center justify-center lg:mb-[63px] lg:ml-[145px] lg:mt-[62px] mb-[81px] ml-[187px] mt-[80px] w-[37%] xl:mb-[72px] xl:ml-[166px] xl:mt-[71px]">
                <Row className="bg-gray_200 items-center justify-between px-[0] rounded-radius10 w-[36%]">
                  <Image
                    src="img_.svg"
                    className="2xl:h-[5px] 3xl:h-[5px] 3xl:mb-[37px] 3xl:ml-[21px] 3xl:mt-[36px] h-[4px] lg:mb-[24px] lg:ml-[14px] lg:mt-[23px] mb-[31px] ml-[18px] mt-[30px] object-contain rounded-radius1 w-[10%] xl:mb-[27px] xl:ml-[16px] xl:mt-[26px]"
                    alt=""
                  />
                  <Text className="3xl:mb-[24px] 3xl:mt-[25px] 3xl:text-fs26 font-semibold lg:mb-[15px] lg:mt-[16px] lg:text-fs17 mb-[20px] mt-[21px] text-black_900 text-center text-fs22 xl:mb-[17px] xl:mt-[18px] xl:text-fs19">{`1`}</Text>
                  <Image
                    src="img__1.svg"
                    className="2xl:h-[19px] 2xl:mr-[16px] 2xl:my-[23px] 3xl:h-[22px] 3xl:mb-[27px] 3xl:mr-[19px] 3xl:mt-[28px] h-[18.09px] lg:h-[15px] lg:mb-[17px] lg:mr-[12px] lg:mt-[18px] mb-[23.019958px] mr-[16.430054px] mt-[23.890015px] object-contain rounded-radius1 w-[10%] xl:h-[17px] xl:mb-[20px] xl:mr-[14px] xl:mt-[21px]"
                    alt=""
                  />
                </Row>
                <Text className="3xl:ml-[138px] 3xl:my-[22px] 3xl:text-fs21 font-semibold lg:ml-[89px] lg:my-[14px] lg:text-fs14 ml-[115px] my-[19px] text-black_900 text-fs18 text-left xl:ml-[102px] xl:my-[16px] xl:text-fs16">{`$21,4`}</Text>
                <Text className="3xl:ml-[138px] 3xl:my-[22px] 3xl:text-fs21 font-semibold lg:ml-[89px] lg:my-[14px] lg:text-fs14 ml-[115px] my-[19px] text-black_900 text-fs18 text-left xl:ml-[102px] xl:my-[16px] xl:text-fs16">{`$21,4`}</Text>
              </Row>
              <Image
                src="img_action.svg"
                className="2xl:h-[23px] 3xl:h-[27px] 3xl:ml-[168px] 3xl:mr-[63px] 3xl:my-[122px] h-[22px] lg:h-[18px] lg:ml-[108px] lg:mr-[41px] lg:my-[79px] ml-[140px] mr-[53px] my-[102px] object-contain w-[1%] xl:h-[20px] xl:ml-[124px] xl:mr-[47px] xl:my-[90px]"
                alt="action"
              />
            </Row>
            <Row className="3xl:my-[18px] bg-white_A700 border border-purple_50 border-solid font-poppins items-center justify-start lg:my-[11px] my-[15px] rounded-radius12 self-stretch w-[100%] xl:my-[13px]">
              <Image
                src="img_cover01.svg"
                className="2xl:h-[200px] 2xl:mb-[15px] 2xl:ml-[15px] 2xl:mt-[11px] 3xl:h-[240px] 3xl:mb-[18px] 3xl:ml-[18px] 3xl:mt-[13px] h-[199.77px] lg:h-[156px] lg:mb-[11px] lg:ml-[11px] lg:mt-[8px] mb-[15.169983px] ml-[15.079987px] mt-[11.059998px] object-contain w-[10%] xl:h-[178px] xl:mb-[13px] xl:ml-[13px] xl:mt-[9px]"
                alt="cover01"
              />
              <Column className="2xl:ml-[34px] 3xl:mb-[78px] 3xl:ml-[41px] 3xl:mt-[73px] justify-start lg:mb-[50px] lg:ml-[26px] lg:mt-[47px] mb-[65px] ml-[34.30002px] mt-[61px] w-[26%] xl:mb-[57px] xl:ml-[30px] xl:mt-[54px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_801 text-left xl:mr-[8px] xl:text-fs16">{`ISBN 2412412125`}</Text>
                <Text className="3xl:mt-[12px] 3xl:text-fs24 font-semibold lg:mt-[7px] lg:text-fs15 mt-[10px] self-stretch text-black_900 text-fs20 text-left xl:mt-[8px] xl:text-fs17">{`So You Want To Talk About Race`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs16 font-medium lg:mr-[7px] lg:mt-[9px] lg:text-fs10 mr-[10px] mt-[12px] text-black_900 text-fs14 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs12">{`Ijeoma Oluo`}</Text>
              </Column>
              <Row className="3xl:mb-[97px] 3xl:ml-[118px] 3xl:mt-[96px] bg-gray_200 items-center justify-center lg:mb-[63px] lg:ml-[77px] lg:mt-[62px] mb-[81px] ml-[99px] mt-[80px] rounded-radius10 w-[14%] xl:mb-[72px] xl:ml-[88px] xl:mt-[71px]">
                <Image
                  src="img_.svg"
                  className="2xl:h-[5px] 3xl:h-[5px] 3xl:mb-[37px] 3xl:ml-[21px] 3xl:mt-[36px] h-[4px] lg:mb-[24px] lg:ml-[14px] lg:mt-[23px] mb-[31px] ml-[18px] mt-[30px] object-contain rounded-radius1 w-[10%] xl:mb-[27px] xl:ml-[16px] xl:mt-[26px]"
                  alt=""
                />
                <Text className="3xl:mb-[24px] 3xl:ml-[52px] 3xl:mt-[25px] 3xl:text-fs26 font-semibold lg:mb-[15px] lg:ml-[34px] lg:mt-[16px] lg:text-fs17 mb-[20px] ml-[44px] mt-[21px] text-black_900 text-center text-fs22 xl:mb-[17px] xl:ml-[39px] xl:mt-[18px] xl:text-fs19">{`4`}</Text>
                <Image
                  src="img__1.svg"
                  className="2xl:h-[19px] 2xl:mr-[16px] 2xl:my-[23px] 3xl:h-[22px] 3xl:mb-[27px] 3xl:ml-[63px] 3xl:mr-[19px] 3xl:mt-[28px] h-[18.09px] lg:h-[15px] lg:mb-[17px] lg:ml-[41px] lg:mr-[12px] lg:mt-[18px] mb-[23.019958px] ml-[53px] mr-[16.430054px] mt-[23.890015px] object-contain rounded-radius1 w-[10%] xl:h-[17px] xl:mb-[20px] xl:ml-[47px] xl:mr-[14px] xl:mt-[21px]"
                  alt=""
                />
              </Row>
              <Text className="3xl:mb-[120px] 3xl:ml-[138px] 3xl:mt-[118px] 3xl:text-fs21 font-semibold lg:ml-[89px] lg:my-[77px] lg:text-fs14 mb-[100px] ml-[115px] mt-[99px] text-black_900 text-fs18 text-left xl:ml-[102px] xl:my-[88px] xl:text-fs16">{`$15,63`}</Text>
              <Text className="3xl:mb-[120px] 3xl:ml-[124px] 3xl:mt-[118px] 3xl:text-fs21 font-semibold lg:ml-[80px] lg:my-[77px] lg:text-fs14 mb-[100px] ml-[104px] mt-[99px] text-black_900 text-fs18 text-left xl:ml-[92px] xl:my-[88px] xl:text-fs16">{`$62,52`}</Text>
              <Image
                src="img_action.svg"
                className="2xl:h-[23px] 3xl:h-[27px] 3xl:ml-[150px] 3xl:mr-[63px] 3xl:my-[122px] h-[22px] lg:h-[18px] lg:ml-[97px] lg:mr-[41px] lg:my-[79px] ml-[125px] mr-[53px] my-[102px] object-contain w-[1%] xl:h-[20px] xl:ml-[111px] xl:mr-[47px] xl:my-[90px]"
                alt="action"
              />
            </Row>
          </List>
        </Column>
        <Stack className="2xl:h-[571px] 3xl:h-[685px] 3xl:mt-[205px] h-[570px] lg:h-[444px] lg:mt-[133px] mt-[171px] mx-[auto] w-[70%] xl:h-[508px] xl:mt-[152px]">
          <Image
            src="img_background_1.svg"
            className="2xl:h-[571px] 3xl:h-[685px] absolute h-[570px] inset-[0] lg:h-[444px] object-cover self-stretch w-[100%] xl:h-[508px]"
            alt="background"
          />
          <Row className="absolute h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[85%]">
            <Column className="3xl:mb-[52px] font-poppins justify-start lg:mb-[34px] mb-[44px] w-[43%] xl:mb-[39px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_900 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Shopping Summary`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[58px] 3xl:text-fs21 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[38px] lg:text-fs14 mt-[49px] self-stretch text-black_900_7f text-fs18 text-left w-[100%] xl:leading-lh24 xl:mt-[43px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[75px] 3xl:text-fs24 font-medium lg:mr-[7px] lg:mt-[49px] lg:text-fs15 mr-[10px] mt-[63px] text-black_900_cc text-fs20 text-left xl:mr-[8px] xl:mt-[56px] xl:text-fs17">{`Have a coupon code?`}</Text>
              <Row className="3xl:mr-[12px] 3xl:mt-[38px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[96%] xl:mr-[8px] xl:mt-[28px]">
                <Stack className="2xl:h-[69px] 3xl:h-[82px] bg-deep_purple_100 h-[68px] lg:h-[53px] rounded-radius12 w-[81%] xl:h-[61px]">
                  <Row className="3xl:left-[25px] absolute h-[max-content] inset-y-[0] items-center justify-start left-[21px] lg:left-[16px] my-[auto] w-[71%] xl:left-[18px]">
                    <Image
                      src="img_vector_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] h-[24px] lg:h-[19px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[14%] xl:h-[22px] xl:mb-[1px]"
                      alt="Vector"
                    />
                    <Text className="3xl:ml-[31px] 3xl:text-fs21 font-medium lg:ml-[20px] lg:text-fs14 ml-[26px] text-fs18 text-gray_602 text-left xl:ml-[23px] xl:text-fs16">{`Enter promo code here`}</Text>
                  </Row>
                  <Line className="2xl:h-[39px] 3xl:h-[46px] 3xl:left-[102px] absolute bg-purple_600 h-[38px] inset-y-[0] left-[85px] lg:h-[30px] lg:left-[66px] my-[auto] w-[2px] xl:h-[34px] xl:left-[75px]" />
                </Stack>
                <Image
                  src="img_btnapply.svg"
                  className="2xl:h-[69px] 3xl:h-[82px] 3xl:ml-[18px] h-[68px] lg:h-[53px] lg:ml-[11px] ml-[15px] object-contain w-[16%] xl:h-[61px] xl:ml-[13px]"
                  alt="btnApply"
                />
              </Row>
            </Column>
            <Column className="3xl:mt-[20px] font-poppins items-center justify-start lg:mt-[13px] mt-[17px] w-[41%] xl:mt-[15px]">
              <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                <Text className="3xl:text-fs21 font-medium lg:mb-[1px] lg:text-fs14 mb-[2px] mt-[1px] text-fs18 text-gray_602 text-left xl:mb-[1px] xl:text-fs16">{`Subtotal`}</Text>
                <Text className="3xl:text-fs24 font-semibold lg:text-fs15 text-black_900 text-fs20 text-right xl:text-fs17">{`$83,92`}</Text>
              </Row>
              <Row className="3xl:mt-[31px] items-center justify-between lg:mt-[20px] mt-[26px] px-[0] self-stretch w-[100%] xl:mt-[23px]">
                <Text className="3xl:text-fs21 font-medium lg:mb-[1px] lg:text-fs14 mb-[2px] mt-[1px] text-fs18 text-gray_602 text-left xl:mb-[1px] xl:text-fs16">{`Tax`}</Text>
                <Text className="3xl:text-fs24 font-semibold lg:text-fs15 text-black_900 text-fs20 text-right xl:text-fs17">{`$2,35`}</Text>
              </Row>
              <Line className="3xl:mt-[37px] bg-purple_200 h-[1px] lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]" />
              <Row className="3xl:mt-[27px] items-center justify-between lg:mt-[17px] mt-[23px] px-[0] self-stretch w-[100%] xl:mt-[20px]">
                <Text className="3xl:text-fs21 font-medium lg:mb-[1px] lg:text-fs14 mb-[2px] mt-[1px] text-fs18 text-gray_602 text-left xl:mb-[1px] xl:text-fs16">{`Total`}</Text>
                <Text className="3xl:text-fs24 font-semibold lg:text-fs15 text-black_900 text-fs20 text-right xl:text-fs17">{`$86,27`}</Text>
              </Row>
              <Stack className="2xl:h-[69px] 3xl:h-[82px] 3xl:mt-[135px] h-[68px] lg:h-[53px] lg:mt-[87px] mt-[113px] self-stretch w-[100%] xl:h-[61px] xl:mt-[100px]">
                <Image
                  src="img_background_2.svg"
                  className="2xl:h-[69px] 3xl:h-[82px] absolute h-[68px] inset-[0] lg:h-[53px] object-cover rounded-radius12 self-stretch w-[100%] xl:h-[61px]"
                  alt="background"
                />
                <Text className="3xl:text-fs24 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs15 m-[auto] text-fs20 text-gray_50 text-left w-[max-content] xl:text-fs17">{`CHECKOUT`}</Text>
              </Stack>
              <Text className="3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mt-[17px] lg:text-fs12 mt-[22px] mx-[auto] text-fs16 text-left text-purple_600 xl:mt-[19px] xl:text-fs14">{`Continue Shopping`}</Text>
            </Column>
          </Row>
        </Stack>
        <Stack className="2xl:h-[340px] 3xl:h-[408px] 3xl:mt-[301px] bg-purple_600 h-[339px] lg:h-[264px] lg:mt-[195px] mt-[251px] w-[100%] xl:h-[302px] xl:mt-[223px]">
          <Image
            src="img_maskgroup_29.svg"
            className="2xl:h-[340px] 3xl:h-[408px] absolute h-[339px] inset-[0] lg:h-[264px] object-cover self-stretch w-[100%] xl:h-[302px]"
            alt="MaskGroup"
          />
          <Row className="absolute font-poppins h-[max-content] inset-[0] items-center justify-center m-[auto] w-[84%]">
            <Text className="2xl:leading-lh55 3xl:leading-lh66 3xl:text-fs48 font-semibold leading-lh5500 lg:leading-lh42 lg:text-fs31 text-fs40 text-left text-white_A700 w-[33%] xl:leading-lh48 xl:text-fs35">{`Subscribe our newsletter for newest books updates`}</Text>
            <Input
              className="3xl:ml-[501px] 3xl:my-[25px] 3xl:pl-[40px] 3xl:py-[31px] 3xl:text-fs19 bg-gray_100_28 border-0 font-normal lg:ml-[325px] lg:my-[16px] lg:pl-[26px] lg:py-[20px] lg:text-fs12 ml-[418px] my-[21px] pl-[34px] placeholder:bg-transparent placeholder:text-gray_301 py-[26px] rounded-radius8 text-fs16 text-gray_301 text-left w-[30%] xl:ml-[371px] xl:my-[18px] xl:pl-[30px] xl:py-[23px] xl:text-fs14"
              name="input"
              placeholder={`Type your email here`}
            ></Input>
            <Button className="3xl:ml-[18px] 3xl:my-[25px] 3xl:px-[42px] 3xl:py-[31px] 3xl:text-fs19 bg-white_A700 border-bw font-semibold lg:ml-[11px] lg:my-[16px] lg:px-[27px] lg:py-[20px] lg:text-fs12 ml-[15px] my-[21px] px-[35px] py-[26px] rounded-radius8 shadow-bs4 text-center text-fs16 text-purple_600 w-[10%] xl:ml-[13px] xl:my-[18px] xl:px-[31px] xl:py-[23px] xl:text-fs14">{`SUBSCRIBE`}</Button>
          </Row>
        </Stack>
        <div className="self-stretch w-[100%]">
          <Column className="bg-white_A700 items-center justify-end self-stretch w-[100%]">
            <Row className="2xl:mt-[111px] 3xl:mt-[133px] items-end justify-evenly lg:mt-[86px] mt-[110.97998px] px-[0] self-stretch w-[100%] xl:mt-[98px]">
              <Column className="justify-start w-[22%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Image
                      src="img_logo_1.svg"
                      className="2xl:h-[55px] 3xl:h-[66px] 3xl:mr-[12px] h-[54.94px] lg:h-[43px] lg:mr-[7px] mr-[10px] object-contain w-[51%] xl:h-[49px] xl:mr-[8px]"
                      alt="logo"
                    />
                    <Text className="2xl:leading-lh24 2xl:mt-[39px] 3xl:leading-lh28 3xl:mt-[46px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[30px] lg:text-fs12 mt-[39.08008px] self-stretch text-fs16 text-gray_602 text-left w-[100%] xl:leading-lh21 xl:mt-[34px] xl:text-fs14">{`Clevr is a online bookstore website who sells all genres of books from around the world. Find your book here now`}</Text>
                  </Column>
                </Column>
                <Column className="2xl:mt-[69px] 3xl:mr-[12px] 3xl:mt-[83px] font-poppins justify-start lg:mr-[7px] lg:mt-[54px] mr-[10px] mt-[69.91992px] w-[81%] xl:mr-[8px] xl:mt-[62px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 ml-[1px] mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Follow Us`}</Text>
                  <Column className="3xl:mt-[30px] items-center lg:mt-[19px] mt-[25px] self-stretch w-[100%] xl:mt-[22px]">
                    <Image
                      src="img_frame1.svg"
                      className="2xl:h-[59px] 3xl:h-[70px] h-[58px] lg:h-[46px] object-cover self-stretch w-[100%] xl:h-[52px]"
                      alt="Frame1"
                    />
                  </Column>
                </Column>
              </Column>
              <Column className="2xl:mb-[48px] 2xl:mt-[40px] 3xl:mb-[58px] 3xl:mt-[48px] font-poppins justify-start lg:mb-[38px] lg:mt-[31px] mb-[48.91992px] mt-[40.02002px] w-[5%] xl:mb-[43px] xl:mt-[35px]">
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-black_900 text-fs18 text-left xl:text-fs16">{`Quick Links`}</Text>
                <Column className="3xl:mr-[12px] 3xl:mt-[32px] font-poppins justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[27px] w-[88%] xl:mr-[8px] xl:mt-[24px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:text-fs14">{`About us`}</Text>
                  <Text className="3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mt-[15px] lg:text-fs12 mt-[20px] self-stretch text-fs16 text-gray_602 text-left xl:mt-[17px] xl:text-fs14">{`Contact us`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Products`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Login`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Sign Up`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[4px] 2xl:mt-[40px] 3xl:mb-[5px] 3xl:mt-[48px] font-poppins justify-start lg:mb-[3px] lg:mt-[31px] mb-[4.919922px] mt-[40.02002px] w-[7%] xl:mb-[4px] xl:mt-[35px]">
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 self-stretch text-black_900 text-fs18 text-left xl:text-fs16">{`Customer Area`}</Text>
                <Column className="3xl:mr-[12px] 3xl:mt-[32px] font-poppins justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[27px] w-[80%] xl:mr-[8px] xl:mt-[24px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:text-fs14">{`My Account`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Orders`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Tracking List`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`Terms`}</Text>
                  <Text className="3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mt-[15px] lg:text-fs12 mt-[20px] self-stretch text-fs16 text-gray_602 text-left xl:mt-[17px] xl:text-fs14">{`Privacy Policy`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[15px] lg:text-fs12 mr-[10px] mt-[20px] text-fs16 text-gray_602 text-left xl:mr-[8px] xl:mt-[17px] xl:text-fs14">{`FAQ`}</Text>
                </Column>
              </Column>
              <Column className="2xl:mb-[92px] 2xl:mt-[40px] 3xl:mb-[111px] 3xl:mt-[48px] font-poppins justify-start lg:mb-[72px] lg:mt-[31px] mb-[92.91992px] mt-[40.02002px] w-[22%] xl:mb-[82px] xl:mt-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-medium lg:mr-[7px] lg:text-fs14 mr-[10px] text-black_900 text-fs18 text-left xl:mr-[8px] xl:text-fs16">{`Don’t miss the newest books`}</Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[36px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[23px] lg:text-fs12 mt-[30px] self-stretch text-fs16 text-gray_602 text-left w-[100%] xl:leading-lh21 xl:mt-[26px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`}</Text>
                <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
                  <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                    <Input
                      className="3xl:pl-[27px] 3xl:py-[31px] 3xl:text-fs19 bg-gray_101 border-0 font-normal lg:pl-[17px] lg:py-[20px] lg:text-fs12 pl-[23px] placeholder:bg-transparent placeholder:text-gray_501 py-[26px] rounded-radius8 text-fs16 text-gray_501 text-left w-[66%] xl:pl-[20px] xl:py-[23px] xl:text-fs14"
                      name="input"
                      placeholder={`Type your email here`}
                    ></Input>
                    <Button className="3xl:mr-[13px] 3xl:pl-[25px] 3xl:pr-[21px] 3xl:py-[31px] 3xl:text-fs19 bg-purple_600 border-bw font-semibold lg:mr-[8px] lg:pl-[16px] lg:pr-[14px] lg:py-[20px] lg:text-fs12 mr-[11px] pl-[21px] pr-[18px] py-[26px] rounded-radius8 shadow-bs4 text-center text-fs16 text-white_A700 w-[28%] xl:mr-[9px] xl:pl-[18px] xl:pr-[16px] xl:py-[23px] xl:text-fs14">{`Subscribe`}</Button>
                  </Row>
                </Column>
              </Column>
            </Row>
            <Column className="2xl:mt-[149px] 3xl:mt-[178px] bg-white_A700 items-center justify-start lg:mt-[115px] mt-[149.08008px] self-stretch w-[100%] xl:mt-[132px]">
              <Line className="bg-gray_200 h-[1px] self-stretch w-[100%]" />
              <Row className="3xl:mb-[37px] 3xl:mt-[34px] font-poppins justify-evenly lg:mb-[24px] lg:mt-[22px] mb-[31px] mt-[29px] px-[0] self-stretch w-[100%] xl:mb-[27px] xl:mt-[25px]">
                <Text className="3xl:text-fs16 font-medium lg:mt-[1px] lg:text-fs10 mt-[2px] text-fs14 text-gray_602 text-left xl:mt-[1px] xl:text-fs12">{`CLEVR  -   © 2020 All Rights Reserved`}</Text>
                <Text className="3xl:text-fs16 font-normal lg:mb-[1px] lg:text-fs10 mb-[2px] text-fs14 text-gray_602 text-right xl:mb-[1px] xl:text-fs12">{`Made with ♥ by Peterdraw`}</Text>
              </Row>
            </Column>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Checkout1Page;
