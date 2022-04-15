import React from "react";

import { Row } from "components/Row";
import { Column } from "components/Column";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { List } from "components/List";
import { Input } from "components/Input";
import { Switch } from "components/Switch";

const InvoiceDetailWebPage = () => {
  return (
    <Row className="bg-gray_106 items-center ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:ml-[76px] 3xl:my-[57px] bg-white_A702 font-poppins items-center justify-start lg:ml-[49px] lg:my-[37px] ml-[64px] my-[48px] rounded-radius8 w-[57%] xl:ml-[56px] xl:my-[42px]">
        <Row className="3xl:mt-[48px] items-end justify-start lg:mt-[31px] mt-[40px] mx-[auto] w-[90%] xl:mt-[35px]">
          <Text className="3xl:mt-[9px] 3xl:text-fs38 font-medium lg:mt-[6px] lg:text-fs24 mt-[8px] text-bluegray_915 text-fs32 text-left xl:mt-[7px] xl:text-fs28">{`New Invoice : INV #081`}</Text>
          <Button className="3xl:ml-[276px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-gray_106 border-bw font-medium lg:ml-[178px] lg:px-[18px] lg:py-[15px] lg:text-fs12 ml-[230px] px-[24px] py-[20px] rounded-radius8 text-bluegray_703 text-center text-fs16 w-[12%] xl:ml-[204px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Draft`}</Button>
          <Image
            src="img_trashbutton.svg"
            className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[19px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[12px] lg:w-[43px] ml-[16px] object-contain rounded-radius8 w-[56px] xl:h-[50px] xl:ml-[14px] xl:w-[49px]"
            alt="TrashButton"
          />
        </Row>
        <Line className="3xl:mt-[48px] bg-bluegray_107 h-[1px] lg:mt-[31px] mt-[40px] mx-[auto] w-[90%] xl:mt-[35px]" />
        <Column className="3xl:mt-[46px] items-center justify-start lg:mt-[30px] mt-[39px] self-stretch w-[100%] xl:mt-[34px]">
          <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-medium lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_915 text-fs16 text-left xl:ml-[35px] xl:text-fs14">{`From`}</Text>
            <Text className="3xl:mr-[416px] 3xl:text-fs19 font-medium lg:mr-[269px] lg:text-fs12 mr-[347px] text-bluegray_915 text-fs16 text-left xl:mr-[308px] xl:text-fs14">{`Bill To`}</Text>
          </Row>
          <List
            className="3xl:gap-[48px] 3xl:mt-[28px] flex-wrap gap-[40px] grid grid-cols-2 lg:gap-[31px] lg:mt-[18px] min-h-[auto] mt-[24px] mx-[auto] w-[90%] xl:gap-[35px] xl:mt-[21px]"
            orientation="horizontal"
          >
            <Row className="bg-white_A700 font-poppins items-center justify-evenly px-[0] rounded-radius8 shadow-bs43 w-[100%]">
              <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:my-[19px] 3xl:w-[76px] bg-gray_400 h-[64px] lg:h-[50px] lg:my-[12px] lg:w-[49px] my-[16px] rounded-radius8 w-[64px] xl:h-[57px] xl:my-[14px] xl:w-[56px]"></div>
              <Column className="3xl:my-[24px] justify-start lg:my-[15px] my-[20px] w-[52%] xl:my-[17px]">
                <Text className="3xl:text-fs24 font-medium lg:text-fs15 self-stretch text-bluegray_915 text-fs20 text-left xl:text-fs17">{`Shoo Broo Tho .Inc`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-bluegray_409 text-fs16 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`+62 897 8986 5567`}</Text>
              </Column>
              <Image
                src="img_contentcreat.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[43px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[28px] lg:w-[18px] my-[36px] object-contain w-[24px] xl:h-[22px] xl:my-[32px] xl:w-[21px]"
                alt="Contentcreat"
              />
            </Row>
            <Row className="bg-white_A700 font-poppins items-center justify-start rounded-radius8 shadow-bs43 w-[100%]">
              <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:ml-[19px] 3xl:my-[19px] 3xl:w-[76px] bg-gray_400 h-[64px] lg:h-[50px] lg:ml-[12px] lg:my-[12px] lg:w-[49px] ml-[16px] my-[16px] rounded-radius8 w-[64px] xl:h-[57px] xl:ml-[14px] xl:my-[14px] xl:w-[56px]"></div>
              <Column className="3xl:ml-[19px] 3xl:my-[24px] justify-start lg:ml-[12px] lg:my-[15px] ml-[16px] my-[20px] w-[45%] xl:ml-[14px] xl:my-[17px]">
                <Text className="3xl:text-fs24 font-medium lg:text-fs15 self-stretch text-bluegray_915 text-fs20 text-left xl:text-fs17">{`Mhar Yhem .Std`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-bluegray_409 text-fs16 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`+62 897 8986 5567`}</Text>
              </Column>
              <Image
                src="img_contentcreat.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[70px] 3xl:mr-[19px] 3xl:my-[43px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[45px] lg:mr-[12px] lg:my-[28px] lg:w-[18px] ml-[59px] mr-[16px] my-[36px] object-contain w-[24px] xl:h-[22px] xl:ml-[52px] xl:mr-[14px] xl:my-[32px] xl:w-[21px]"
                alt="Contentcreat"
              />
            </Row>
          </List>
        </Column>
        <Column className="3xl:my-[48px] bg-white_A700 border border-bluegray_107 border-solid items-center justify-start lg:my-[31px] mx-[auto] my-[40px] rounded-radius8 w-[90%] xl:my-[35px]">
          <Row className="items-center justify-start self-stretch w-[100%]">
            <Row className="3xl:ml-[28px] 3xl:my-[28px] font-poppins items-center justify-start lg:ml-[18px] lg:my-[18px] ml-[24px] my-[24px] w-[23%] xl:ml-[21px] xl:my-[21px]">
              <Image
                src="img_contentsort.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="Contentsort"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs19 font-medium lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_915 text-fs16 text-left xl:ml-[14px] xl:text-fs14">{`Item Description`}</Text>
            </Row>
            <Row className="3xl:ml-[157px] 3xl:my-[28px] font-poppins items-center justify-center lg:ml-[101px] lg:my-[18px] ml-[131px] my-[24px] w-[9%] xl:ml-[116px] xl:my-[21px]">
              <Image
                src="img_mapscategory.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="Mapscategory"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs19 font-medium lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_915 text-fs16 text-left xl:ml-[14px] xl:text-fs14">{`Qty`}</Text>
            </Row>
            <Row className="3xl:ml-[51px] 3xl:my-[28px] font-poppins items-center justify-center lg:ml-[33px] lg:my-[18px] ml-[43px] my-[24px] w-[10%] xl:ml-[38px] xl:my-[21px]">
              <Image
                src="img_actiongrade.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="Actiongrade"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs19 font-medium lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_915 text-fs16 text-left xl:ml-[14px] xl:text-fs14">{`Rate`}</Text>
            </Row>
            <Row className="3xl:ml-[70px] 3xl:mr-[55px] 3xl:my-[28px] font-poppins items-center justify-center lg:ml-[45px] lg:mr-[35px] lg:my-[18px] ml-[59px] mr-[46px] my-[24px] w-[16%] xl:ml-[52px] xl:mr-[40px] xl:my-[21px]">
              <Image
                src="img_actionpaymen.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="Actionpaymen"
              />
              <Text className="3xl:ml-[19px] 3xl:text-fs19 font-medium lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_915 text-fs16 text-left xl:ml-[14px] xl:text-fs14">{`Ammount`}</Text>
            </Row>
          </Row>
          <List
            className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
            orientation="vertical"
          >
            <Row className="font-poppins items-center justify-start my-[0] self-stretch w-[100%]">
              <Text className="3xl:ml-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[18px] lg:my-[18px] lg:text-fs12 ml-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[21px] xl:my-[21px] xl:text-fs14">{`Design System`}</Text>
              <Text className="3xl:ml-[259px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[168px] lg:my-[18px] lg:text-fs12 ml-[216px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[192px] xl:my-[21px] xl:text-fs14">{`2`}</Text>
              <Text className="2xl:ml-[88px] 3xl:ml-[106px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[68px] lg:my-[18px] lg:text-fs12 ml-[88.5px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[78px] xl:my-[21px] xl:text-fs14">{`$80,00`}</Text>
              <Text className="2xl:ml-[151px] 3xl:ml-[181px] 3xl:mr-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[117px] lg:mr-[18px] lg:my-[18px] lg:text-fs12 ml-[151.5px] mr-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[134px] xl:mr-[21px] xl:my-[21px] xl:text-fs14">{`$160,00`}</Text>
            </Row>
            <Row className="font-poppins items-center justify-start my-[0] self-stretch w-[100%]">
              <Text className="3xl:ml-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[18px] lg:my-[18px] lg:text-fs12 ml-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[21px] xl:my-[21px] xl:text-fs14">{`Wireframing`}</Text>
              <Text className="2xl:ml-[233px] 3xl:ml-[280px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[181px] lg:my-[18px] lg:text-fs12 ml-[233.5px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[207px] xl:my-[21px] xl:text-fs14">{`4`}</Text>
              <Text className="2xl:ml-[90px] 3xl:ml-[108px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[70px] lg:my-[18px] lg:text-fs12 ml-[90.5px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[80px] xl:my-[21px] xl:text-fs14">{`$10,00`}</Text>
              <Text className="3xl:ml-[190px] 3xl:mr-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[123px] lg:mr-[18px] lg:my-[18px] lg:text-fs12 ml-[159px] mr-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[141px] xl:mr-[21px] xl:my-[21px] xl:text-fs14">{`$40,00`}</Text>
            </Row>
            <Row className="font-poppins items-center justify-start my-[0] self-stretch w-[100%]">
              <Text className="3xl:ml-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[18px] lg:my-[18px] lg:text-fs12 ml-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[21px] xl:my-[21px] xl:text-fs14">{`Icon Design`}</Text>
              <Text className="2xl:ml-[238px] 3xl:ml-[286px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[185px] lg:my-[18px] lg:text-fs12 ml-[238.5px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[212px] xl:my-[21px] xl:text-fs14">{`10`}</Text>
              <Text className="2xl:ml-[88px] 3xl:ml-[106px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[68px] lg:my-[18px] lg:text-fs12 ml-[88.5px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[78px] xl:my-[21px] xl:text-fs14">{`$10,00`}</Text>
              <Text className="3xl:ml-[190px] 3xl:mr-[28px] 3xl:my-[28px] 3xl:text-fs19 font-medium lg:ml-[123px] lg:mr-[18px] lg:my-[18px] lg:text-fs12 ml-[159px] mr-[24px] my-[24px] text-bluegray_409 text-fs16 text-left xl:ml-[141px] xl:mr-[21px] xl:my-[21px] xl:text-fs14">{`$80,00`}</Text>
            </Row>
          </List>
          <Row className="3xl:mt-[28px] font-poppins items-center justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[94%] xl:mt-[21px]">
            <Input
              className="3xl:pl-[19px] 3xl:py-[16px] 3xl:text-fs14 bg-transparent border border-bluegray_107 border-solid font-medium lg:pl-[12px] lg:py-[10px] lg:text-fs9 pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_107 py-[14px] rounded-radius8 text-bluegray_107 text-fs12 text-left w-[38%] xl:pl-[14px] xl:py-[12px] xl:text-fs10"
              name="AddDescription"
              placeholder={`Add Description`}
            ></Input>
            <Button className="3xl:ml-[48px] 3xl:px-[38px] 3xl:py-[16px] 3xl:text-fs14 bg-transparent border border-bluegray_107 border-solid font-medium lg:ml-[31px] lg:px-[24px] lg:py-[10px] lg:text-fs9 ml-[40px] px-[32px] py-[14px] rounded-radius8 text-bluegray_107 text-center text-fs12 w-[10%] xl:ml-[35px] xl:px-[28px] xl:py-[12px] xl:text-fs10">{`0`}</Button>
            <Button className="3xl:ml-[38px] 3xl:px-[42px] 3xl:py-[16px] 3xl:text-fs14 bg-transparent border border-bluegray_107 border-solid font-medium lg:ml-[24px] lg:px-[27px] lg:py-[10px] lg:text-fs9 ml-[32px] px-[35px] py-[14px] rounded-radius8 text-bluegray_107 text-center text-fs12 w-[15%] xl:ml-[28px] xl:px-[31px] xl:py-[12px] xl:text-fs10">{`0`}</Button>
            <Text className="3xl:ml-[190px] 3xl:my-[14px] 3xl:text-fs14 font-medium lg:ml-[123px] lg:my-[9px] lg:text-fs9 ml-[159px] my-[12px] text-bluegray_107 text-fs12 text-right xl:ml-[141px] xl:my-[10px] xl:text-fs10">{`0,00`}</Text>
          </Row>
          <Row className="3xl:mb-[28px] 3xl:mt-[38px] bg-gray-100 font-poppins items-center justify-start lg:mb-[18px] lg:mt-[24px] mb-[24px] mt-[32px] mx-[auto] rounded-radius8 w-[94%] xl:mb-[21px] xl:mt-[28px]">
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[48px] 3xl:my-[43px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:ml-[31px] lg:my-[28px] lg:text-fs12 ml-[40px] my-[36px] text-black_900 text-fs16 text-left w-[11%] xl:leading-lh21 xl:ml-[35px] xl:my-[32px] xl:text-fs14">
              {
                <>
                  {`Sub Total`}
                  <br />
                  {`Tax (10%)`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[57px] 3xl:my-[43px] 3xl:text-fs19 font-normal leading-lh2400 lg:leading-lh18 lg:ml-[37px] lg:my-[28px] lg:text-fs12 ml-[48px] my-[36px] text-black_900 text-fs16 text-left w-[9%] xl:leading-lh21 xl:ml-[42px] xl:my-[32px] xl:text-fs14">
              {
                <>
                  {`$280,00`}
                  <br />
                  {`$28,00`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[443px] 3xl:mr-[48px] 3xl:my-[43px] 3xl:text-fs19 font-semibold leading-lh2400 lg:leading-lh18 lg:ml-[287px] lg:mr-[31px] lg:my-[28px] lg:text-fs12 ml-[369px] mr-[40px] my-[36px] text-black_900 text-fs16 text-right w-[9%] xl:leading-lh21 xl:ml-[328px] xl:mr-[35px] xl:my-[32px] xl:text-fs14">
              {
                <>
                  {`Total`}
                  <br />
                  {`$308,00`}
                </>
              }
            </Text>
          </Row>
        </Column>
      </Column>
      <Column className="3xl:ml-[28px] 3xl:mr-[76px] 3xl:my-[57px] bg-white_A702 font-poppins justify-center lg:ml-[18px] lg:mr-[49px] lg:my-[37px] ml-[24px] mr-[64px] my-[48px] rounded-radius8 w-[32%] xl:ml-[21px] xl:mr-[56px] xl:my-[42px]">
        <Text className="3xl:mt-[48px] 3xl:mx-[48px] 3xl:text-fs19 font-bold lg:mt-[31px] lg:mx-[31px] lg:text-fs12 mt-[40px] mx-[40px] text-bluegray_915 text-fs16 text-left xl:mt-[35px] xl:mx-[35px] xl:text-fs14">{`Basic Info`}</Text>
        <Text className="3xl:mt-[28px] 3xl:mx-[48px] 3xl:text-fs19 font-medium lg:mt-[18px] lg:mx-[31px] lg:text-fs12 mt-[24px] mx-[40px] text-bluegray_409 text-fs16 text-left xl:mt-[21px] xl:mx-[35px] xl:text-fs14">{`Invoice #`}</Text>
        <Input
          className="3xl:mt-[19px] 3xl:mx-[48px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-transparent border border-bluegray_107 border-solid font-medium lg:mt-[12px] lg:mx-[31px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] mx-[40px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_915 py-[20px] rounded-radius8 text-bluegray_915 text-fs16 text-left w-[83%] xl:mt-[14px] xl:mx-[35px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
          name="Form"
          placeholder={`INV #081`}
        ></Input>
        <Text className="3xl:mt-[28px] 3xl:mx-[48px] 3xl:text-fs19 font-medium lg:mt-[18px] lg:mx-[31px] lg:text-fs12 mt-[24px] mx-[40px] text-bluegray_409 text-fs16 text-left xl:mt-[21px] xl:mx-[35px] xl:text-fs14">{`Invoice Date`}</Text>
        <div className="3xl:mt-[19px] 3xl:mx-[48px] bg-transparent border-bw lg:mt-[12px] lg:mx-[31px] mt-[16px] mx-[40px] w-[83%] xl:mt-[14px] xl:mx-[35px] input-wrap">
          <Image
            src="img_action_calendartoday.svg"
            className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[15px] xl:right-[14px] xl:inset-y-[17px] 3xl:right-[19px] 3xl:inset-y-[24px] inset-y-[20px]"
            alt="Action / calendar_today"
          />
          <Button className="3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[24px] 3xl:text-fs19 bg-transparent border border-bluegray_107 border-solid font-medium lg:pl-[12px] lg:pr-[38px] lg:py-[15px] lg:text-fs12 pl-[16px] pr-[50px] py-[20px] rounded-radius8 text-bluegray_915 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[17px] xl:text-fs14">{`23 October 2020`}</Button>
        </div>
        <Text className="3xl:mt-[28px] 3xl:mx-[48px] 3xl:text-fs19 font-medium lg:mt-[18px] lg:mx-[31px] lg:text-fs12 mt-[24px] mx-[40px] text-bluegray_409 text-fs16 text-left xl:mt-[21px] xl:mx-[35px] xl:text-fs14">{`Due Date`}</Text>
        <div className="3xl:mt-[19px] 3xl:mx-[48px] bg-transparent border-bw lg:mt-[12px] lg:mx-[31px] mt-[16px] mx-[40px] w-[83%] xl:mt-[14px] xl:mx-[35px] input-wrap">
          <Image
            src="img_action_calendartoday.svg"
            className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[15px] xl:right-[14px] xl:inset-y-[17px] 3xl:right-[19px] 3xl:inset-y-[24px] inset-y-[20px]"
            alt="Action / calendar_today"
          />
          <Button className="3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[24px] 3xl:text-fs19 bg-transparent border border-bluegray_107 border-solid font-medium lg:pl-[12px] lg:pr-[38px] lg:py-[15px] lg:text-fs12 pl-[16px] pr-[50px] py-[20px] rounded-radius8 text-bluegray_915 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[17px] xl:text-fs14">{`28 October 2020`}</Button>
        </div>
        <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Line className="bg-bluegray_107 h-[1px] mx-[auto] w-[83%]" />
        </Column>
        <Text className="3xl:mt-[46px] 3xl:mx-[48px] 3xl:text-fs19 font-medium lg:mt-[30px] lg:mx-[31px] lg:text-fs12 mt-[39px] mx-[40px] text-bluegray_409 text-fs16 text-left xl:mt-[34px] xl:mx-[35px] xl:text-fs14">{`Send Copy To`}</Text>
        <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
          <Row className="border border-bluegray_107 border-solid items-center justify-between mx-[auto] px-[0] rounded-radius8 w-[83%]">
            <Text className="3xl:ml-[19px] 3xl:my-[19px] 3xl:text-fs19 font-medium lg:ml-[12px] lg:my-[12px] lg:text-fs12 ml-[16px] my-[16px] text-bluegray_915 text-fs16 text-left xl:ml-[14px] xl:my-[14px] xl:text-fs14">{`example@email.com`}</Text>
            <Image
              src="img_sendbutton.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:w-[43px] object-contain w-[56px] xl:h-[50px] xl:w-[49px]"
              alt="SendButton"
            />
          </Row>
          <Line className="3xl:mt-[48px] bg-bluegray_107 h-[1px] lg:mt-[31px] mt-[40px] mx-[auto] w-[83%] xl:mt-[35px]" />
          <Row className="3xl:mt-[46px] font-poppins items-center justify-between lg:mt-[30px] mt-[39px] mx-[auto] px-[0] w-[83%] xl:mt-[34px]">
            <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_915 text-fs16 text-left xl:text-fs14">{`Payment Method`}</Text>
            <Switch
              onColor=""
              offColor="#dbe0f0"
              onHandleColor=""
              offHandleColor="#ffffff"
              checked={false}
              className="w-[10%]"
            />
          </Row>
        </Column>
        <div className="3xl:mt-[48px] 3xl:mx-[48px] bg-transparent border-bw lg:mt-[31px] lg:mx-[31px] mt-[40px] mx-[40px] w-[83%] xl:mt-[35px] xl:mx-[35px] input-wrap">
          <Image
            src="img_content_send.svg"
            className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[18px] xl:right-[14px] xl:inset-y-[21px] 3xl:right-[19px] 3xl:inset-y-[28px] inset-y-[24px]"
            alt="Content / send"
          />
          <Button className="3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[28px] 3xl:text-fs19 bg-indigo_A201 border-bw font-bold lg:pl-[12px] lg:pr-[38px] lg:py-[18px] lg:text-fs12 pl-[16px] pr-[50px] py-[24px] rounded-radius8 text-fs16 text-left text-white_A700 w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[21px] xl:text-fs14">{`Send Invoice`}</Button>
        </div>
        <Column className="3xl:mb-[48px] 3xl:mt-[19px] items-center lg:mb-[31px] lg:mt-[12px] mb-[40px] mt-[16px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[14px]">
          <Row className="3xl:gap-[19px] 3xl:px-[48px] font-poppins gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[12px] lg:px-[31px] px-[40px] self-stretch w-[100%] xl:gap-[14px] xl:px-[35px]">
            <Button className="3xl:px-[42px] 3xl:py-[28px] 3xl:text-fs19 bg-gray_106 border-bw font-bold lg:px-[27px] lg:py-[18px] lg:text-fs12 px-[35px] py-[24px] rounded-radius8 text-bluegray_703 text-center text-fs16 w-[100%] xl:px-[31px] xl:py-[21px] xl:text-fs14">{`Preview`}</Button>
            <Button className="3xl:px-[42px] 3xl:py-[28px] 3xl:text-fs19 bg-gray_106 border-bw font-bold lg:px-[27px] lg:py-[18px] lg:text-fs12 px-[35px] py-[24px] rounded-radius8 text-bluegray_703 text-center text-fs16 w-[100%] xl:px-[31px] xl:py-[21px] xl:text-fs14">{`Download`}</Button>
          </Row>
        </Column>
      </Column>
    </Row>
  );
};

export default InvoiceDetailWebPage;
