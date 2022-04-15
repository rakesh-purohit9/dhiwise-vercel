import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { Stack } from "components/Stack";

const TicketPage = () => {
  return (
    <Column className="bg-gray_906 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="bg-gray_200 items-center justify-start self-stretch w-[100%]">
        <Column className="bg-gradient2  font-nunito justify-start self-stretch w-[100%]">
          <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
            <div className="mx-[auto] w-[86%]">
              <Row className="font-nunito items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_dummylogo02.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                  alt="DummyLogo02"
                />
                <Row className="3xl:ml-[86px] 3xl:my-[14px] justify-center lg:ml-[56px] lg:my-[9px] ml-[72px] my-[12px] w-[54%] xl:ml-[64px] xl:my-[10px]">
                  <Column className="justify-start w-[7%]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
                    <div className="2xl:h-[5px] 3xl:h-[5px] bg-light_blue_A700 h-[4px] lg:mr-[3px] lg:mt-[3px] mr-[4px] mt-[4px] w-[91%] xl:mr-[3px] xl:mt-[3px]"></div>
                  </Column>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`Schedule`}</Text>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`Speaker`}</Text>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`Venue`}</Text>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`Blog`}</Text>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`About`}</Text>
                  <Text className="3xl:mb-[9px] 3xl:ml-[57px] 3xl:text-fs19 font-normal lg:mb-[6px] lg:ml-[37px] lg:text-fs12 mb-[8px] ml-[48px] text-fs16 text-left text-white_A700 xl:mb-[7px] xl:ml-[42px] xl:text-fs14">{`Contact Us`}</Text>
                </Row>
                <Row className="3xl:gap-[19px] 3xl:ml-[138px] 3xl:my-[19px] gap-[16px] grid grid-cols-3 items-center justify-center lg:gap-[12px] lg:ml-[89px] lg:my-[12px] ml-[115px] my-[16px] w-[8%] xl:gap-[14px] xl:ml-[102px] xl:my-[14px]">
                  <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mr-[7px] 3xl:text-fs14 font-medium lg:ml-[3px] lg:mr-[4px] lg:my-[2px] lg:text-fs9 ml-[4px] mr-[6px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[3px] xl:mr-[5px] xl:my-[2px] xl:text-fs10">{`Fb`}</Text>
                  </Column>
                  <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[7px] 3xl:mr-[8px] 3xl:text-fs14 font-medium lg:ml-[4px] lg:mr-[5px] lg:my-[2px] lg:text-fs9 ml-[6px] mr-[7px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[5px] xl:mr-[6px] xl:my-[2px] xl:text-fs10">{`Ig`}</Text>
                  </Column>
                  <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mr-[6px] 3xl:text-fs14 font-medium lg:ml-[2px] lg:mr-[3px] lg:my-[2px] lg:text-fs9 ml-[3px] mr-[5px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[2px] xl:mr-[4px] xl:my-[2px] xl:text-fs10">{`Tw`}</Text>
                  </Column>
                </Row>
                <Button className="2xl:px-[33px] 3xl:ml-[28px] 3xl:px-[40px] 3xl:py-[20px] 3xl:text-fs16 bg-light_blue_A700 border-bw font-normal lg:ml-[18px] lg:my-[3px] lg:px-[26px] lg:py-[13px] lg:text-fs10 ml-[24px] my-[4px] px-[33.5px] py-[17px] text-center text-fs14 text-white_A700 w-[10%] xl:ml-[21px] xl:my-[3px] xl:px-[29px] xl:py-[15px] xl:text-fs12">{`Register`}</Button>
              </Row>
            </div>
          </Column>
          <Row className="3xl:gap-[19px] 3xl:mt-[134px] 3xl:mx-[124px] gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[12px] lg:mt-[87px] lg:mx-[80px] mt-[112px] mx-[104px] w-[12%] xl:gap-[14px] xl:mt-[99px] xl:mx-[92px]">
            <Row className="font-nunito items-center justify-start w-[100%]">
              <Image
                src="img_arrowchevronr_1.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="ArrowChevronR"
              />
              <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-gray_605 text-left xl:ml-[7px] xl:text-fs14">{`Home`}</Text>
            </Row>
            <Row className="font-nunito items-center justify-start w-[100%]">
              <Image
                src="img_arrowchevronr_2.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                alt="ArrowChevronR"
              />
              <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-left text-white_A700 xl:ml-[7px] xl:text-fs14">{`Ticket`}</Text>
            </Row>
          </Row>
          <Text className="3xl:mb-[288px] 3xl:mt-[19px] 3xl:mx-[124px] 3xl:text-fs76 font-bold lg:mb-[186px] lg:mt-[12px] lg:mx-[80px] lg:text-fs49 mb-[240px] mt-[16px] mx-[104px] text-fs64 text-left text-white_A700 xl:mb-[213px] xl:mt-[14px] xl:mx-[92px] xl:text-fs56">{`Get The Ticket`}</Text>
        </Column>
      </Column>
      <Column className="3xl:mt-[192px] font-nunito justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Text className="3xl:mx-[124px] 3xl:text-fs76 font-bold lg:mx-[80px] lg:text-fs49 mx-[104px] text-fs64 text-left text-white_A700 xl:mx-[92px] xl:text-fs56">{`Get Your Ticket`}</Text>
        <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[28px] 3xl:mx-[124px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[18px] lg:mx-[80px] lg:text-fs12 mt-[24px] mx-[104px] text-fs16 text-gray_302 text-left w-[35%] xl:leading-lh28 xl:mt-[21px] xl:mx-[92px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
        <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <List
            className="3xl:gap-[19px] flex-wrap gap-[16px] grid grid-cols-3 lg:gap-[12px] min-h-[auto] mx-[auto] w-[86%] xl:gap-[14px]"
            orientation="horizontal"
          >
            <Column className="bg-bluegray_801 font-nunito justify-center w-[100%]">
              <Text className="3xl:mt-[38px] 3xl:mx-[38px] 3xl:text-fs19 font-normal lg:mt-[24px] lg:mx-[24px] lg:text-fs12 mt-[32px] mx-[32px] text-fs16 text-gray_302 text-left xl:mt-[28px] xl:mx-[28px] xl:text-fs14">{`Regular`}</Text>
              <Text className="3xl:mt-[9px] 3xl:mx-[38px] 3xl:text-fs76 font-bold lg:mt-[6px] lg:mx-[24px] lg:text-fs49 mt-[8px] mx-[32px] text-fs64 text-left text-white_A700 xl:mt-[7px] xl:mx-[28px] xl:text-fs56">{`$150`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:mx-[24px] lg:text-fs12 mt-[16px] mx-[32px] text-fs16 text-gray_302 text-left w-[84%] xl:leading-lh28 xl:mt-[14px] xl:mx-[28px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              <Column className="3xl:mb-[38px] 3xl:mt-[28px] items-center lg:mb-[24px] lg:mt-[18px] mb-[32px] mt-[24px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[21px]">
                <Row className="border border-solid border-white_A700 font-nunito items-center justify-center mx-[auto] w-[84%]">
                  <Image
                    src="img_shoppingcart.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[111px] 3xl:my-[14px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[72px] lg:my-[9px] lg:w-[18px] ml-[93px] my-[12px] object-contain w-[24px] xl:h-[22px] xl:ml-[82px] xl:my-[10px] xl:w-[21px]"
                    alt="ShoppingCart"
                  />
                  <Text className="3xl:ml-[9px] 3xl:mr-[111px] 3xl:my-[14px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:mr-[72px] lg:my-[9px] lg:text-fs10 ml-[8px] mr-[93px] my-[12px] text-fs14 text-left text-white_A700 xl:ml-[7px] xl:mr-[82px] xl:my-[10px] xl:text-fs12">{`More About Venue`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-bluegray_600 font-nunito justify-center w-[100%]">
              <Text className="3xl:mt-[38px] 3xl:mx-[38px] 3xl:text-fs19 font-normal lg:mt-[24px] lg:mx-[24px] lg:text-fs12 mt-[32px] mx-[32px] text-fs16 text-gray_302 text-left xl:mt-[28px] xl:mx-[28px] xl:text-fs14">{`Golden`}</Text>
              <Text className="3xl:mt-[9px] 3xl:mx-[38px] 3xl:text-fs76 font-bold lg:mt-[6px] lg:mx-[24px] lg:text-fs49 mt-[8px] mx-[32px] text-fs64 text-left text-white_A700 xl:mt-[7px] xl:mx-[28px] xl:text-fs56">{`$250`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:mx-[24px] lg:text-fs12 mt-[16px] mx-[32px] text-fs16 text-gray_302 text-left w-[84%] xl:leading-lh28 xl:mt-[14px] xl:mx-[28px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              <Column className="3xl:mb-[38px] 3xl:mt-[28px] items-center lg:mb-[24px] lg:mt-[18px] mb-[32px] mt-[24px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[21px]">
                <Row className="bg-light_blue_A700 font-nunito items-center justify-center mx-[auto] w-[84%]">
                  <Image
                    src="img_shoppingcart.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[111px] 3xl:my-[14px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[72px] lg:my-[9px] lg:w-[18px] ml-[93px] my-[12px] object-contain w-[24px] xl:h-[22px] xl:ml-[82px] xl:my-[10px] xl:w-[21px]"
                    alt="ShoppingCart"
                  />
                  <Text className="3xl:ml-[9px] 3xl:mr-[111px] 3xl:my-[14px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:mr-[72px] lg:my-[9px] lg:text-fs10 ml-[8px] mr-[93px] my-[12px] text-fs14 text-left text-white_A700 xl:ml-[7px] xl:mr-[82px] xl:my-[10px] xl:text-fs12">{`More About Venue`}</Text>
                </Row>
              </Column>
            </Column>
            <Column className="bg-bluegray_801 font-nunito justify-center w-[100%]">
              <Text className="3xl:mt-[38px] 3xl:mx-[38px] 3xl:text-fs19 font-normal lg:mt-[24px] lg:mx-[24px] lg:text-fs12 mt-[32px] mx-[32px] text-fs16 text-gray_302 text-left xl:mt-[28px] xl:mx-[28px] xl:text-fs14">{`Platinum`}</Text>
              <Text className="3xl:mt-[9px] 3xl:mx-[38px] 3xl:text-fs76 font-bold lg:mt-[6px] lg:mx-[24px] lg:text-fs49 mt-[8px] mx-[32px] text-fs64 text-left text-white_A700 xl:mt-[7px] xl:mx-[28px] xl:text-fs56">{`$400`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:mx-[38px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:mx-[24px] lg:text-fs12 mt-[16px] mx-[32px] text-fs16 text-gray_302 text-left w-[84%] xl:leading-lh28 xl:mt-[14px] xl:mx-[28px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
              <Column className="3xl:mb-[38px] 3xl:mt-[28px] items-center lg:mb-[24px] lg:mt-[18px] mb-[32px] mt-[24px] self-stretch w-[100%] xl:mb-[28px] xl:mt-[21px]">
                <Row className="border border-solid border-white_A700 font-nunito items-center justify-center mx-[auto] w-[84%]">
                  <Image
                    src="img_shoppingcart.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[111px] 3xl:my-[14px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[72px] lg:my-[9px] lg:w-[18px] ml-[93px] my-[12px] object-contain w-[24px] xl:h-[22px] xl:ml-[82px] xl:my-[10px] xl:w-[21px]"
                    alt="ShoppingCart"
                  />
                  <Text className="3xl:ml-[9px] 3xl:mr-[111px] 3xl:my-[14px] 3xl:text-fs16 font-normal lg:ml-[6px] lg:mr-[72px] lg:my-[9px] lg:text-fs10 ml-[8px] mr-[93px] my-[12px] text-fs14 text-left text-white_A700 xl:ml-[7px] xl:mr-[82px] xl:my-[10px] xl:text-fs12">{`More About Venue`}</Text>
                </Row>
              </Column>
            </Column>
          </List>
        </Column>
      </Column>
      <Column className="3xl:mt-[192px] font-nunito justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Text className="3xl:mx-[124px] 3xl:text-fs76 font-bold lg:mx-[80px] lg:text-fs49 mx-[104px] text-fs64 text-left text-white_A700 xl:mx-[92px] xl:text-fs56">{`Our Sponsor and Partners`}</Text>
        <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Image
            src="img_partner.svg"
            className="2xl:h-[105px] 3xl:h-[125px] h-[104px] lg:h-[81px] mx-[auto] object-contain w-[85%] xl:h-[93px]"
            alt="Partner"
          />
        </Column>
      </Column>
      <Column className="3xl:mt-[192px] bg-gray_400 items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Column className="bg-gray_900_99 font-nunito justify-center self-stretch w-[100%]">
          <Text className="2xl:leading-lh88 3xl:leading-lh105 3xl:mt-[96px] 3xl:mx-[124px] 3xl:text-fs76 font-bold leading-lh8800 lg:leading-lh68 lg:mt-[62px] lg:mx-[80px] lg:text-fs49 mt-[80px] mx-[104px] text-fs64 text-left text-white_A700 w-[42%] xl:leading-lh78 xl:mt-[71px] xl:mx-[92px] xl:text-fs56">{`Book Your Seat Now`}</Text>
          <Column className="3xl:mb-[96px] 3xl:mt-[48px] items-center lg:mb-[62px] lg:mt-[31px] mb-[80px] mt-[40px] self-stretch w-[100%] xl:mb-[71px] xl:mt-[35px]">
            <Row className="font-nunito items-center justify-start self-stretch w-[100%]">
              <Column className="3xl:ml-[124px] justify-start lg:ml-[80px] ml-[104px] w-[13%] xl:ml-[92px]">
                <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`27-29 April 2021`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mr-[3px] lg:mt-[6px] lg:text-fs12 mr-[4px] mt-[8px] text-fs16 text-left text-white_A700 xl:mr-[3px] xl:mt-[7px] xl:text-fs14">{`Grand Point Hotel, Sydney`}</Text>
              </Column>
              <Button className="3xl:mb-[19px] 3xl:ml-[46px] 3xl:mr-[1133px] 3xl:mt-[9px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-light_blue_A700 border-bw font-normal lg:mb-[12px] lg:ml-[30px] lg:mr-[734px] lg:mt-[6px] lg:px-[27px] lg:py-[13px] lg:text-fs10 mb-[16px] ml-[39px] mr-[944px] mt-[8px] px-[35px] py-[17px] text-center text-fs14 text-white_A700 w-[11%] xl:mb-[14px] xl:ml-[34px] xl:mr-[839px] xl:mt-[7px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Buy Ticket`}</Button>
            </Row>
            <Column className="3xl:mt-[48px] font-nunito justify-start lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Text className="3xl:mx-[124px] 3xl:text-fs19 font-bold lg:mx-[80px] lg:text-fs12 mx-[104px] text-fs16 text-left text-white_A700 xl:mx-[92px] xl:text-fs14">{`Don’t miss our future updates`}</Text>
              <Column className="3xl:mt-[9px] items-center lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
                <Row className="font-nunito items-center justify-start self-stretch w-[100%]">
                  <Input
                    className="3xl:ml-[124px] 3xl:pl-[19px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:ml-[80px] lg:pl-[12px] lg:py-[12px] lg:text-fs12 ml-[104px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 py-[16px] text-bluegray_105 text-fs16 text-left w-[21%] xl:ml-[92px] xl:pl-[14px] xl:py-[14px] xl:text-fs14"
                    name="Form"
                    placeholder={`Input your email address in here`}
                  ></Input>
                  <Button className="3xl:ml-[19px] 3xl:mr-[1085px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-transparent border border-solid border-white_A700 font-normal lg:ml-[12px] lg:mr-[703px] lg:px-[27px] lg:py-[13px] lg:text-fs10 ml-[16px] mr-[904px] px-[35px] py-[17px] text-center text-fs14 text-white_A700 w-[8%] xl:ml-[14px] xl:mr-[804px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Send`}</Button>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
      </Column>
      <Stack className="2xl:h-[449px] 3xl:h-[538px] h-[448px] lg:h-[349px] self-stretch w-[100%] xl:h-[399px]">
        <Image
          src="img_background_4.svg"
          className="2xl:h-[449px] 3xl:h-[538px] absolute h-[448px] inset-[0] lg:h-[349px] object-cover self-stretch w-[100%] xl:h-[399px]"
          alt="Background"
        />
        <Column className="absolute font-nunito h-[max-content] inset-[0] items-center justify-center m-[auto] w-[46%]">
          <Image
            src="img_dummylogo02_1.svg"
            className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] mx-[auto] object-contain w-[21%] xl:h-[50px]"
            alt="DummyLogo02"
          />
          <Row className="3xl:mt-[48px] items-center justify-between lg:mt-[31px] mt-[40px] px-[0] self-stretch w-[100%] xl:mt-[35px]">
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Schedule`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Speaker`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Venue`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Blog`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`About`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Contact Us`}</Text>
          </Row>
          <Row className="3xl:gap-[19px] 3xl:mt-[57px] gap-[16px] grid grid-cols-3 items-center justify-center lg:gap-[12px] lg:mt-[37px] mt-[48px] mx-[auto] w-[16%] xl:gap-[14px] xl:mt-[42px]">
            <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
              <Text className="3xl:mr-[7px] 3xl:text-fs14 font-medium lg:ml-[3px] lg:mr-[4px] lg:my-[2px] lg:text-fs9 ml-[4px] mr-[6px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[3px] xl:mr-[5px] xl:my-[2px] xl:text-fs10">{`Fb`}</Text>
            </Column>
            <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
              <Text className="3xl:ml-[7px] 3xl:mr-[8px] 3xl:text-fs14 font-medium lg:ml-[4px] lg:mr-[5px] lg:my-[2px] lg:text-fs9 ml-[6px] mr-[7px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[5px] xl:mr-[6px] xl:my-[2px] xl:text-fs10">{`Ig`}</Text>
            </Column>
            <Column className="border border-gray_302 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
              <Text className="3xl:mr-[6px] 3xl:text-fs14 font-medium lg:ml-[2px] lg:mr-[3px] lg:my-[2px] lg:text-fs9 ml-[3px] mr-[5px] my-[3px] text-center text-fs12 text-white_A700 xl:ml-[2px] xl:mr-[4px] xl:my-[2px] xl:text-fs10">{`Tw`}</Text>
            </Column>
          </Row>
          <Text className="3xl:mt-[76px] 3xl:text-fs19 font-normal lg:mt-[49px] lg:text-fs12 mt-[64px] mx-[auto] text-fs16 text-gray_302 text-left xl:mt-[56px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
        </Column>
      </Stack>
    </Column>
  );
};

export default TicketPage;
