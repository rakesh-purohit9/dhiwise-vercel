import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Line } from "components/Line";

const Checkout3Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[641px] 3xl:h-[769px] bg-gray_200 h-[640px] lg:h-[498px] self-stretch w-[100%] xl:h-[570px]">
          <Image
            src="img_overlay.png"
            className="2xl:h-[641px] 3xl:h-[769px] absolute h-[640px] inset-[0] lg:h-[498px] object-cover self-stretch w-[100%] xl:h-[570px]"
            alt="Overlay"
          />
          <Column className="3xl:top-[38px] absolute inset-x-[0] items-center justify-start lg:top-[24px] mx-[auto] top-[32px] w-[86%] xl:top-[28px]">
            <div className="self-stretch w-[100%]">
              <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_dummylogo02_4.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                  alt="DummyLogo02"
                />
                <Row className="3xl:ml-[306px] 3xl:my-[19px] items-center justify-center lg:ml-[198px] lg:my-[12px] ml-[255px] my-[16px] w-[37%] xl:ml-[226px] xl:my-[14px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
                  <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-gray_302 text-left xl:ml-[42px] xl:text-fs14">{`Event`}</Text>
                  <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-gray_302 text-left xl:ml-[42px] xl:text-fs14">{`Calendar`}</Text>
                  <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-gray_302 text-left xl:ml-[42px] xl:text-fs14">{`Blogs`}</Text>
                  <Text className="3xl:ml-[57px] 3xl:text-fs19 font-normal lg:ml-[37px] lg:text-fs12 ml-[48px] text-fs16 text-gray_302 text-left xl:ml-[42px] xl:text-fs14">{`About`}</Text>
                </Row>
                <Image
                  src="img_search_8.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[266px] 3xl:my-[19px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[172px] lg:my-[12px] lg:w-[18px] ml-[222px] my-[16px] object-contain w-[24px] xl:h-[22px] xl:ml-[197px] xl:my-[14px] xl:w-[21px]"
                  alt="Search"
                />
                <Button className="3xl:ml-[28px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-gradient8  bg-white_A700 border-2 border-solid font-normal lg:ml-[18px] lg:my-[3px] lg:px-[27px] lg:py-[13px] lg:text-fs10 ml-[24px] my-[4px] px-[35px] py-[17px] rounded-radius8 text-center text-fs14 text-purple_A200 w-[10%] xl:ml-[21px] xl:my-[3px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Login`}</Button>
              </Row>
            </div>
            <Column className="3xl:mt-[86px] bg-black_900_7e border-8 border-solid border-white_A700_7e font-poppins items-center justify-center lg:mt-[56px] mt-[72px] mx-[auto] rounded-radius24 w-[61%] xl:mt-[64px]">
              <Text className="2xl:leading-lh96 3xl:leading-lh115 3xl:mt-[48px] 3xl:text-fs86 font-bold leading-lh9600 lg:leading-lh74 lg:mt-[31px] lg:text-fs56 mt-[40px] mx-[auto] text-center text-fs72 text-white_A700 w-[89%] xl:leading-lh85 xl:mt-[35px] xl:text-fs64">
                {
                  <>
                    {`Ticket`}
                    <br />
                    {`Checkout`}
                  </>
                }
              </Text>
              <Row className="3xl:mb-[48px] 3xl:mt-[28px] items-center justify-center lg:mb-[31px] lg:mt-[18px] mb-[40px] mt-[24px] mx-[auto] w-[27%] xl:mb-[35px] xl:mt-[21px]">
                <Row className="font-poppins items-center justify-start w-[39%]">
                  <Image
                    src="img_arrowchevronr_3.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="ArrowChevronR"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-gray_302 text-left xl:ml-[7px] xl:text-fs14">{`Home`}</Text>
                </Row>
                <Row className="3xl:ml-[19px] font-poppins items-center justify-start lg:ml-[12px] ml-[16px] w-[53%] xl:ml-[14px]">
                  <Image
                    src="img_arrowchevronr_4.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="ArrowChevronR"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-normal lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-left text-white_A700 xl:ml-[7px] xl:text-fs14">{`Checkout`}</Text>
                </Row>
              </Row>
            </Column>
          </Column>
        </Stack>
        <Row className="3xl:mt-[192px] items-center justify-between lg:mt-[124px] mt-[160px] px-[0] self-stretch w-[100%] xl:mt-[142px]">
          <Text className="3xl:ml-[124px] 3xl:text-fs38 font-bold lg:ml-[80px] lg:text-fs24 ml-[104px] text-bluegray_903 text-fs32 text-left xl:ml-[92px] xl:text-fs28">{`Contact Information`}</Text>
          <Text className="3xl:mr-[249px] 3xl:text-fs38 font-bold lg:mr-[161px] lg:text-fs24 mr-[208px] text-bluegray_903 text-fs32 text-left xl:mr-[185px] xl:text-fs28">{`Order Summary`}</Text>
        </Row>
        <Row className="3xl:mt-[48px] justify-start lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Column className="3xl:ml-[124px] font-poppins justify-start lg:ml-[80px] ml-[104px] w-[57%] xl:ml-[92px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] self-stretch w-[100%] xl:gap-[14px]">
                <Column className="font-poppins justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`First Name`}</Text>
                  <Input
                    className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
                    name="Group235"
                    placeholder={`Input your first name`}
                  ></Input>
                </Column>
                <Column className="font-poppins justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Last Name`}</Text>
                  <Input
                    className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
                    name="Group234"
                    placeholder={`Input your last name`}
                  ></Input>
                </Column>
              </Row>
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Email Address`}</Text>
            <Input
              className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
              name="Group233"
              placeholder={`Input your Email`}
            ></Input>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Phone Number`}</Text>
            <Input
              className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
              name="Group232"
              placeholder={`Input your phone number`}
            ></Input>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Country`}</Text>
            <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
              <Image
                src="img_arrow_chevron_down_1.svg"
                className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                alt="Arrow Chevron Down"
              />
              <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] rounded-radius16 text-bluegray_903 text-fs16 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`United States`}</Button>
            </div>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Address`}</Text>
            <Input
              className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
              name="Group230"
              placeholder={`Input your Address`}
            ></Input>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`State/Province`}</Text>
            <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
              <Image
                src="img_arrow_chevron_down_1.svg"
                className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                alt="Arrow Chevron Down"
              />
              <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] rounded-radius16 text-fs16 text-gray_605 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`Select your state or province`}</Button>
            </div>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Row className="3xl:gap-[19px] gap-[16px] grid grid-cols-2 items-center justify-between lg:gap-[12px] self-stretch w-[100%] xl:gap-[14px]">
                <Column className="font-poppins justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`City`}</Text>
                  <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
                    <Image
                      src="img_arrow_chevron_down_1.svg"
                      className="absolute right-[12px] border-bw bg-transparent lg:right-[9px] lg:inset-y-[12px] xl:right-[10px] xl:inset-y-[14px] 3xl:right-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                      alt="Arrow Chevron Down"
                    />
                    <Button className="3xl:pl-[14px] 3xl:pr-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[9px] lg:pr-[35px] lg:py-[12px] lg:text-fs12 pl-[12px] pr-[46px] py-[16px] rounded-radius16 text-fs16 text-gray_605 text-left w-[100%] xl:pl-[10px] xl:pr-[40px] xl:py-[14px] xl:text-fs14">{`Select your city`}</Button>
                  </div>
                </Column>
                <Column className="font-poppins justify-start w-[100%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:text-fs14">{`Postcode`}</Text>
                  <Input
                    className="3xl:mt-[9px] 3xl:pl-[14px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:mt-[6px] lg:pl-[9px] lg:py-[12px] lg:text-fs12 mt-[8px] pl-[12px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:mt-[7px] xl:pl-[10px] xl:py-[14px] xl:text-fs14"
                    name="Group227"
                    placeholder={`Input your postcode`}
                  ></Input>
                </Column>
              </Row>
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[31px] lg:text-fs12 mr-[10px] mt-[40px] text-fs16 text-gray_605 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs14">{`Add payment method`}</Text>
            <div className="3xl:mt-[9px] bg-transparent border-0 lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
              <Image
                src="img_plus.svg"
                className="absolute left-[12px] bg-transparent border-0 lg:left-[9px] lg:inset-y-[12px] xl:left-[10px] xl:inset-y-[14px] 3xl:left-[14px] 3xl:inset-y-[19px] inset-y-[16px]"
                alt="Plus"
              />
              <Input
                className="3xl:pl-[55px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-bluegray_105 border-solid font-normal lg:pl-[35px] lg:py-[12px] lg:text-fs12 pl-[46px] placeholder:bg-transparent placeholder:text-gray_605 py-[16px] rounded-radius16 text-fs16 text-gray_605 text-left w-[100%] xl:pl-[40px] xl:py-[14px] xl:text-fs14"
                name="Group226"
                placeholder={`Add payment method`}
              ></Input>
            </div>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_605 text-left w-[100%] xl:leading-lh28 xl:mt-[21px] xl:text-fs14">{`Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.`}</Text>
          </Column>
          <Column className="3xl:mb-[633px] 3xl:ml-[19px] 3xl:mr-[124px] font-poppins items-center justify-start lg:mb-[410px] lg:ml-[12px] lg:mr-[80px] mb-[528px] ml-[16px] mr-[104px] w-[28%] xl:mb-[469px] xl:ml-[14px] xl:mr-[92px]">
            <Column className="bg-gray_50 items-center justify-center rounded-radius16 self-stretch w-[100%]">
              <Column className="3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Row className="items-center justify-start self-stretch w-[100%]">
                  <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:ml-[28px] 3xl:w-[76px] bg-gray_200 h-[64px] lg:h-[50px] lg:ml-[18px] lg:w-[49px] ml-[24px] rounded-radius16 w-[64px] xl:h-[57px] xl:ml-[21px] xl:w-[56px]"></div>
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[19px] 3xl:mr-[28px] 3xl:text-fs28 font-bold leading-lh3200 lg:leading-lh24 lg:ml-[12px] lg:mr-[18px] lg:text-fs18 ml-[16px] mr-[24px] text-fs24 text-left text-purple_A200 w-[68%] xl:leading-lh28 xl:ml-[14px] xl:mr-[21px] xl:text-fs21">{`International UX Conference 2021`}</Text>
                </Row>
                <Line className="3xl:mt-[28px] bg-gray_605 h-[1px] lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]" />
              </Column>
              <Row className="3xl:mt-[27px] items-center justify-start lg:mt-[17px] mt-[23px] mx-[auto] w-[88%] xl:mt-[20px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Date`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`April 21 2021`}</Text>
              </Row>
              <Row className="3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Time`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`7:00 AM`}</Text>
              </Row>
              <Row className="3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Place`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`Sydney`}</Text>
              </Row>
              <Row className="3xl:mt-[28px] items-center justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Venue`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`Grand Point Hall`}</Text>
              </Row>
              <Line className="3xl:mt-[28px] bg-gray_605 h-[1px] lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]" />
              <Row className="3xl:mt-[27px] items-center justify-start lg:mt-[17px] mt-[23px] mx-[auto] w-[88%] xl:mt-[20px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Subtotal (1 item)`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`$ 199`}</Text>
              </Row>
              <Line className="3xl:mt-[28px] bg-gray_605 h-[1px] lg:mt-[18px] mt-[24px] mx-[auto] w-[88%] xl:mt-[21px]" />
              <Row className="3xl:mb-[28px] 3xl:mt-[27px] font-poppins items-center justify-start lg:mb-[18px] lg:mt-[17px] mb-[24px] mt-[23px] mx-[auto] w-[88%] xl:mb-[21px] xl:mt-[20px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Total`}</Text>
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-bluegray_903 text-fs16 text-right xl:ml-[14px] xl:text-fs14">{`$ 199`}</Text>
              </Row>
            </Column>
            <Button className="3xl:mt-[28px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-gradient9  bg-transparent border-bw font-normal lg:mt-[18px] lg:px-[27px] lg:py-[13px] lg:text-fs10 mt-[24px] px-[35px] py-[17px] rounded-radius8 self-stretch text-center text-fs14 text-white_A700 w-[100%] xl:mt-[21px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Place Order`}</Button>
          </Column>
        </Row>
        <Text className="2xl:leading-lh96 3xl:leading-lh115 3xl:mt-[192px] 3xl:text-fs86 font-bold leading-lh9600 lg:leading-lh74 lg:mt-[124px] lg:text-fs56 mt-[160px] mx-[auto] text-bluegray_903 text-center text-fs72 w-[71%] xl:leading-lh85 xl:mt-[142px] xl:text-fs64">{`Get Update for Popular Events Everyday`}</Text>
        <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_605 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit`}</Text>
        <Input
          className="3xl:mt-[48px] 3xl:pl-[19px] 3xl:py-[19px] 3xl:text-fs19 bg-white_A700 border border-gray_605 border-solid font-normal lg:mt-[31px] lg:pl-[12px] lg:py-[12px] lg:text-fs12 mt-[40px] mx-[auto] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 py-[16px] rounded-radius16 text-bluegray_105 text-fs16 text-left w-[42%] xl:mt-[35px] xl:pl-[14px] xl:py-[14px] xl:text-fs14"
          name="Form"
          placeholder={`Insert your email here`}
        ></Input>
        <Button className="3xl:mt-[28px] 3xl:px-[42px] 3xl:py-[20px] 3xl:text-fs16 bg-gradient8  bg-transparent border-bw font-normal lg:mt-[18px] lg:px-[27px] lg:py-[13px] lg:text-fs10 mt-[24px] mx-[auto] px-[35px] py-[17px] rounded-radius8 text-center text-fs14 text-white_A700 w-[42%] xl:mt-[21px] xl:px-[31px] xl:py-[15px] xl:text-fs12">{`Send`}</Button>
        <div className="3xl:mt-[192px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Stack className="2xl:h-[273px] 3xl:h-[327px] h-[272px] lg:h-[212px] self-stretch w-[100%] xl:h-[242px]">
            <Image
              src="img_background_6.png"
              className="2xl:h-[273px] 3xl:h-[327px] absolute h-[272px] inset-[0] lg:h-[212px] object-cover self-stretch w-[100%] xl:h-[242px]"
              alt="Background"
            />
            <Row className="3xl:inset-y-[96px] absolute inset-x-[0] inset-y-[80px] items-center justify-evenly lg:inset-y-[62px] px-[0] self-stretch w-[100%] xl:inset-y-[71px]">
              <Column className="font-poppins justify-start w-[21%]">
                <Image
                  src="img_dummylogo02_5.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] h-[56px] lg:h-[44px] lg:mr-[7px] mr-[10px] object-contain w-[46%] xl:h-[50px] xl:mr-[8px]"
                  alt="DummyLogo02"
                />
                <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_605 text-left xl:mt-[21px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
              </Column>
              <Column className="justify-start w-[31%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_903 text-fs16 text-left xl:text-fs14">{`Home`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_605 text-left xl:text-fs14">{`Event`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_605 text-left xl:text-fs14">{`Calendar`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_605 text-left xl:text-fs14">{`Blogs`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_605 text-left xl:text-fs14">{`About`}</Text>
                  </Row>
                </Column>
                <Row className="3xl:gap-[28px] 3xl:mt-[67px] 3xl:pl-[234px] gap-[24px] grid grid-cols-5 items-center justify-end lg:gap-[18px] lg:mt-[43px] lg:pl-[151px] mt-[56px] pl-[195px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[49px] xl:pl-[173px]">
                  <Column className="border border-bluegray_105 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[9px] 3xl:mr-[12px] 3xl:my-[8px] 3xl:text-fs14 font-medium lg:ml-[6px] lg:mr-[7px] lg:my-[5px] lg:text-fs9 ml-[8px] mr-[10px] my-[7px] text-bluegray_903 text-center text-fs12 xl:ml-[7px] xl:mr-[8px] xl:my-[6px] xl:text-fs10">{`Fb`}</Text>
                  </Column>
                  <Column className="border border-bluegray_105 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:my-[8px] 3xl:text-fs14 font-medium lg:my-[5px] lg:text-fs9 mx-[auto] my-[7px] text-bluegray_903 text-center text-fs12 xl:my-[6px] xl:text-fs10">{`Ig`}</Text>
                  </Column>
                  <Column className="border border-bluegray_105 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[8px] 3xl:mr-[10px] 3xl:my-[8px] 3xl:text-fs14 font-medium lg:ml-[5px] lg:mr-[7px] lg:my-[5px] lg:text-fs9 ml-[7px] mr-[9px] my-[7px] text-bluegray_903 text-center text-fs12 xl:ml-[6px] xl:mr-[8px] xl:my-[6px] xl:text-fs10">{`Tw`}</Text>
                  </Column>
                  <Column className="border border-bluegray_105 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[10px] 3xl:mr-[13px] 3xl:my-[8px] 3xl:text-fs14 font-medium lg:ml-[7px] lg:mr-[8px] lg:my-[5px] lg:text-fs9 ml-[9px] mr-[11px] my-[7px] text-bluegray_903 text-center text-fs12 xl:ml-[8px] xl:mr-[9px] xl:my-[6px] xl:text-fs10">{`Yt`}</Text>
                  </Column>
                  <Column className="border border-bluegray_105 border-solid font-roboto items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mx-[12px] 3xl:my-[8px] 3xl:text-fs14 font-medium lg:mx-[7px] lg:my-[5px] lg:text-fs9 mx-[10px] my-[7px] text-bluegray_903 text-center text-fs12 xl:mx-[8px] xl:my-[6px] xl:text-fs10">{`Li`}</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Stack>
        </div>
      </Column>
    </Column>
  );
};

export default Checkout3Page;
