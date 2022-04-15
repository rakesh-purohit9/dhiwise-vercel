import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { List } from "components/List";

const Contact1Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Column className="bg-blue_50 font-montserrat items-center justify-start self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="font-inter justify-end self-stretch w-[100%]">
              <Row className="3xl:mb-[38px] 3xl:ml-[124px] 3xl:mt-[48px] items-center justify-start lg:mb-[24px] lg:ml-[80px] lg:mt-[31px] mb-[32px] ml-[104px] mt-[40px] w-[53%] xl:mb-[28px] xl:ml-[92px] xl:mt-[35px]">
                <Image
                  src="img_logo_4.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] h-[32px] lg:h-[25px] object-contain w-[21%] xl:h-[29px]"
                  alt="Logo"
                />
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Covid`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Statistic`}</Text>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`About`}</Text>
                <Row className="3xl:ml-[48px] items-center justify-center lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] mb-[3px] ml-[40px] mt-[2px] w-[10%] xl:mb-[2px] xl:ml-[35px] xl:mt-[1px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_401 text-fs16 text-left xl:text-fs14">{`Pages`}</Text>
                  <Image
                    src="img_arrow_chevron_down.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[1px] lg:ml-[3px] lg:w-[18px] mb-[2px] ml-[4px] mt-[1px] object-contain w-[24px] xl:h-[22px] xl:mb-[1px] xl:ml-[3px] xl:w-[21px]"
                    alt="ArrowChevronD"
                  />
                </Row>
                <Text className="3xl:ml-[48px] 3xl:text-fs19 capitalize font-bold lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_902 text-fs16 text-left xl:ml-[35px] xl:text-fs14">{`Contact Us`}</Text>
              </Row>
              <Button className="3xl:mb-[28px] 3xl:ml-[188px] 3xl:mt-[38px] 3xl:px-[38px] 3xl:py-[19px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold lg:mb-[18px] lg:ml-[122px] lg:mt-[24px] lg:px-[24px] lg:py-[12px] lg:text-fs12 mb-[24px] ml-[157px] mt-[32px] px-[32px] py-[16px] rounded-radius8 text-center text-fs16 text-white_A700 w-[11%] xl:mb-[21px] xl:ml-[139px] xl:mt-[28px] xl:px-[28px] xl:py-[14px] xl:text-fs14">{`Help Center`}</Button>
              <Image
                src="img_call_2.svg"
                className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[48px] 3xl:ml-[19px] 3xl:mt-[57px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[31px] lg:ml-[12px] lg:mt-[37px] lg:w-[12px] mb-[40px] ml-[16px] mt-[48px] object-contain w-[16px] xl:h-[15px] xl:mb-[35px] xl:ml-[14px] xl:mt-[42px] xl:w-[14px]"
                alt="Call"
              />
              <Text className="3xl:mb-[38px] 3xl:ml-[9px] 3xl:mr-[122px] 3xl:mt-[48px] 3xl:text-fs19 font-medium lg:mb-[24px] lg:ml-[6px] lg:mr-[79px] lg:mt-[31px] lg:text-fs12 mb-[32px] ml-[8px] mr-[102px] mt-[40px] text-fs16 text-left text-orange_A700 xl:mb-[28px] xl:ml-[7px] xl:mr-[90px] xl:mt-[35px] xl:text-fs14">{`+1234 5678 90`}</Text>
            </Row>
          </div>
          <Text className="3xl:mt-[115px] 3xl:text-fs76 capitalize font-bold lg:mt-[74px] lg:text-fs49 mt-[96px] mx-[auto] text-bluegray_902 text-fs64 text-left xl:mt-[85px] xl:text-fs56">{`Contact Us`}</Text>
          <Row className="3xl:mb-[105px] 3xl:mt-[19px] font-inter items-center justify-center lg:mb-[68px] lg:mt-[12px] mb-[88px] mt-[16px] mx-[auto] w-[10%] xl:mb-[78px] xl:mt-[14px]">
            <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Home`}</Text>
            <Image
              src="img_arrowchevronr.svg"
              className="2xl:h-[17px] 3xl:h-[20px] 3xl:my-[9px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[3px] lg:my-[6px] lg:w-[12px] ml-[4px] my-[8px] object-contain w-[16px] xl:h-[15px] xl:ml-[3px] xl:my-[7px] xl:w-[14px]"
              alt="ArrowChevronR"
            />
            <Text className="3xl:text-fs19 capitalize font-bold lg:ml-[3px] lg:text-fs12 ml-[4px] text-bluegray_902 text-fs16 text-left xl:ml-[3px] xl:text-fs14">{`About US`}</Text>
          </Row>
        </Column>
        <Row className="3xl:gap-[19px] 3xl:mt-[115px] 3xl:px-[124px] font-inter gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[12px] lg:mt-[74px] lg:px-[80px] mt-[96px] px-[104px] self-stretch w-[100%] xl:gap-[14px] xl:mt-[85px] xl:px-[92px]">
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:text-fs12 text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:text-fs12 text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
        </Row>
        <Row className="3xl:mt-[115px] items-center justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
          <Column className="3xl:ml-[124px] bg-teal_400 font-inter justify-center lg:ml-[80px] ml-[104px] rounded-radius16 w-[40%] xl:ml-[92px]">
            <Text className="3xl:mt-[67px] 3xl:mx-[105px] 3xl:text-fs19 capitalize font-bold lg:mt-[43px] lg:mx-[68px] lg:text-fs12 mt-[56px] mx-[88px] text-fs16 text-left text-white_A700 xl:mt-[49px] xl:mx-[78px] xl:text-fs14">{`First Name`}</Text>
            <Input
              className="2xl:py-[21px] 3xl:mt-[9px] 3xl:mx-[105px] 3xl:pl-[19px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:mt-[6px] lg:mx-[68px] lg:pl-[12px] lg:py-[16px] lg:text-fs12 mt-[8px] mx-[88px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_401 py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[70%] xl:mt-[7px] xl:mx-[78px] xl:pl-[14px] xl:py-[19px] xl:text-fs14"
              name="Form"
              placeholder={`Enter your first name`}
            ></Input>
            <Text className="3xl:mt-[28px] 3xl:mx-[105px] 3xl:text-fs19 capitalize font-bold lg:mt-[18px] lg:mx-[68px] lg:text-fs12 mt-[24px] mx-[88px] text-fs16 text-left text-white_A700 xl:mt-[21px] xl:mx-[78px] xl:text-fs14">{`Last Name`}</Text>
            <Input
              className="2xl:pl-[16px] 2xl:py-[21px] 3xl:mt-[9px] 3xl:mx-[105px] 3xl:pl-[19px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:mt-[6px] lg:mx-[68px] lg:pl-[12px] lg:py-[16px] lg:text-fs12 mt-[8px] mx-[88px] pl-[16.119995px] placeholder:bg-transparent placeholder:text-bluegray_401 py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[70%] xl:mt-[7px] xl:mx-[78px] xl:pl-[14px] xl:py-[19px] xl:text-fs14"
              name="Form"
              placeholder={`Enter your last name`}
            ></Input>
            <Text className="3xl:mt-[28px] 3xl:mx-[105px] 3xl:text-fs19 capitalize font-bold lg:mt-[18px] lg:mx-[68px] lg:text-fs12 mt-[24px] mx-[88px] text-fs16 text-left text-white_A700 xl:mt-[21px] xl:mx-[78px] xl:text-fs14">{`Your Email`}</Text>
            <Input
              className="2xl:pl-[16px] 2xl:py-[21px] 3xl:mt-[9px] 3xl:mx-[105px] 3xl:pl-[19px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:mt-[6px] lg:mx-[68px] lg:pl-[12px] lg:py-[16px] lg:text-fs12 mt-[8px] mx-[88px] pl-[16.119995px] placeholder:bg-transparent placeholder:text-bluegray_401 py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[70%] xl:mt-[7px] xl:mx-[78px] xl:pl-[14px] xl:py-[19px] xl:text-fs14"
              name="Form"
              placeholder={`Enter your email`}
            ></Input>
            <Text className="3xl:mt-[28px] 3xl:mx-[105px] 3xl:text-fs19 capitalize font-bold lg:mt-[18px] lg:mx-[68px] lg:text-fs12 mt-[24px] mx-[88px] text-fs16 text-left text-white_A700 xl:mt-[21px] xl:mx-[78px] xl:text-fs14">{`Message`}</Text>
            <Input
              className="2xl:pb-[40px] 2xl:pl-[16px] 2xl:pt-[21px] 3xl:mt-[9px] 3xl:mx-[105px] 3xl:pb-[48px] 3xl:pl-[19px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:mt-[6px] lg:mx-[68px] lg:pb-[31px] lg:pl-[12px] lg:pt-[16px] lg:text-fs12 mt-[8px] mx-[88px] pb-[40.5px] pl-[16.119995px] placeholder:bg-transparent placeholder:text-bluegray_401 pt-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[70%] xl:mt-[7px] xl:mx-[78px] xl:pb-[36px] xl:pl-[14px] xl:pt-[19px] xl:text-fs14"
              name="Form"
              placeholder={`Enter your message`}
            ></Input>
            <Column className="3xl:mb-[67px] 3xl:mt-[48px] font-inter items-center lg:mb-[43px] lg:mt-[31px] mb-[56px] mt-[40px] self-stretch w-[100%] xl:mb-[49px] xl:mt-[35px]">
              <Button className="3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold lg:px-[27px] lg:py-[15px] lg:text-fs12 mx-[auto] px-[35px] py-[20px] rounded-radius8 text-center text-fs16 text-white_A700 w-[69%] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Send Message`}</Button>
            </Column>
          </Column>
          <Column className="3xl:mb-[54px] 3xl:ml-[67px] 3xl:mr-[124px] 3xl:mt-[52px] font-montserrat justify-start lg:mb-[35px] lg:ml-[43px] lg:mr-[80px] lg:mt-[34px] mb-[45px] ml-[56px] mr-[104px] mt-[44px] w-[41%] xl:mb-[40px] xl:ml-[49px] xl:mr-[92px] xl:mt-[39px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs38 capitalize font-bold font-montserrat lg:mr-[7px] lg:text-fs24 mr-[10px] text-bluegray_902 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`Emergency Call`}</Text>
            <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            <List
              className="3xl:mr-[12px] 3xl:mt-[48px] flex-wrap gap-[0] lg:mr-[7px] lg:mt-[31px] min-h-[auto] mr-[10px] mt-[40px] w-[68%] xl:mr-[8px] xl:mt-[35px]"
              orientation="vertical"
            >
              <Column className="3xl:my-[24px] justify-start lg:my-[15px] my-[20px] self-stretch w-[100%] xl:my-[17px]">
                <Row className="3xl:mr-[12px] font-montserrat justify-start lg:mr-[7px] mr-[10px] w-[79%] xl:mr-[8px]">
                  <Image
                    src="img_mapslocalph.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] mb-[1px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="Mapslocalph"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-montserrat font-semibold lg:ml-[6px] lg:text-fs12 mb-[1px] ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`+1234 5678 90`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:text-fs16 font-inter font-normal lg:ml-[6px] lg:text-fs10 ml-[8px] mt-[1px] text-bluegray_401 text-fs14 text-left xl:ml-[7px] xl:text-fs12">{`Department of Health US`}</Text>
                </Row>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Row className="font-montserrat justify-start self-stretch w-[100%]">
                    <Image
                      src="img_communication.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[28px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[18px] lg:w-[18px] mb-[24px] object-contain w-[24px] xl:h-[22px] xl:mb-[21px] xl:w-[21px]"
                      alt="Communication"
                    />
                    <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[9px] 3xl:text-fs19 font-semibold leading-lh2400 lg:leading-lh18 lg:ml-[6px] lg:text-fs12 ml-[8px] text-bluegray_902 text-fs16 text-left w-[92%] xl:leading-lh21 xl:ml-[7px] xl:text-fs14">{`2118 Thornridge Cir. Syracuse, Connecticut 35624`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="3xl:my-[24px] justify-start lg:my-[15px] my-[20px] self-stretch w-[100%] xl:my-[17px]">
                <Row className="3xl:mr-[12px] font-montserrat justify-start lg:mr-[7px] mr-[10px] w-[76%] xl:mr-[8px]">
                  <Image
                    src="img_mapslocalph.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] mb-[1px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="Mapslocalph"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-montserrat font-semibold lg:ml-[6px] lg:text-fs12 mb-[1px] ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`(225) 555-0118`}</Text>
                  <Text className="3xl:ml-[13px] 3xl:text-fs16 font-inter font-normal lg:ml-[8px] lg:text-fs10 ml-[11px] mt-[1px] text-bluegray_401 text-fs14 text-left xl:ml-[9px] xl:text-fs12">{`Goverment Hospital US`}</Text>
                </Row>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Row className="font-montserrat items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_communication.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Communication"
                    />
                    <Text className="3xl:ml-[9px] 3xl:text-fs19 font-semibold lg:ml-[6px] lg:text-fs12 ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`2715 Ash Dr. San Jose, South Dakota 83475`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="3xl:my-[24px] justify-start lg:my-[15px] my-[20px] self-stretch w-[100%] xl:my-[17px]">
                <Row className="3xl:mr-[12px] font-montserrat justify-start lg:mr-[7px] mr-[10px] w-[72%] xl:mr-[8px]">
                  <Image
                    src="img_mapslocalph.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] mb-[1px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="Mapslocalph"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-montserrat font-semibold lg:ml-[6px] lg:text-fs12 mb-[1px] ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`(505) 555-0125`}</Text>
                  <Text className="3xl:ml-[8px] 3xl:text-fs16 font-inter font-normal lg:ml-[5px] lg:text-fs10 ml-[7px] mt-[1px] text-bluegray_401 text-fs14 text-left xl:ml-[6px] xl:text-fs12">{`Regional Hospital US`}</Text>
                </Row>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Row className="font-montserrat justify-start self-stretch w-[100%]">
                    <Image
                      src="img_communication.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[28px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[18px] lg:w-[18px] mb-[24px] object-contain w-[24px] xl:h-[22px] xl:mb-[21px] xl:w-[21px]"
                      alt="Communication"
                    />
                    <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:ml-[9px] 3xl:text-fs19 font-semibold leading-lh2400 lg:leading-lh18 lg:ml-[6px] lg:text-fs12 ml-[8px] text-bluegray_902 text-fs16 text-left w-[92%] xl:leading-lh21 xl:ml-[7px] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="3xl:my-[24px] justify-start lg:my-[15px] my-[20px] self-stretch w-[100%] xl:my-[17px]">
                <Row className="3xl:mr-[12px] font-montserrat justify-start lg:mr-[7px] mr-[10px] w-[76%] xl:mr-[8px]">
                  <Image
                    src="img_mapslocalph.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] mb-[1px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="Mapslocalph"
                  />
                  <Text className="3xl:ml-[9px] 3xl:text-fs19 font-montserrat font-semibold lg:ml-[6px] lg:text-fs12 mb-[1px] ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`(225) 555-0118`}</Text>
                  <Text className="3xl:ml-[13px] 3xl:text-fs16 font-inter font-normal lg:ml-[8px] lg:text-fs10 ml-[11px] mt-[1px] text-bluegray_401 text-fs14 text-left xl:ml-[9px] xl:text-fs12">{`Goverment Hospital US`}</Text>
                </Row>
                <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                  <Row className="font-montserrat items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_communication.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                      alt="Communication"
                    />
                    <Text className="3xl:ml-[9px] 3xl:text-fs19 font-semibold lg:ml-[6px] lg:text-fs12 ml-[8px] text-bluegray_902 text-fs16 text-left xl:ml-[7px] xl:text-fs14">{`2715 Ash Dr. San Jose, South Dakota 83475`}</Text>
                  </Row>
                </Column>
              </Column>
            </List>
          </Column>
        </Row>
        <div className="3xl:mt-[192px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Row className="justify-evenly px-[0] self-stretch w-[100%]">
              <Column className="3xl:mb-[94px] font-inter justify-start lg:mb-[61px] mb-[79px] w-[21%] xl:mb-[70px]">
                <Image
                  src="img_logo_5.svg"
                  className="2xl:h-[33px] 3xl:h-[39px] 3xl:mr-[12px] h-[32px] lg:h-[25px] lg:mr-[7px] mr-[10px] object-contain w-[54%] xl:h-[29px] xl:mr-[8px]"
                  alt="Logo"
                />
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[19px] 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[14px] xl:text-fs14">{`A company engaged in travel that will make it easier for you when you want to vacation`}</Text>
              </Column>
              <Column className="3xl:mb-[19px] font-inter justify-start lg:mb-[12px] mb-[16px] w-[5%] xl:mb-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Links`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Home`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Covid`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Statistic`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left xl:mt-[14px] xl:text-fs12">{`Contact Us`}</Text>
              </Column>
              <Column className="3xl:mb-[19px] font-inter justify-start lg:mb-[12px] mb-[16px] w-[5%] xl:mb-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`About`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Partners`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Careers`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs10 mr-[10px] mt-[16px] text-bluegray_401 text-fs14 text-left xl:mr-[8px] xl:mt-[14px] xl:text-fs12">{`Press`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs16 font-normal lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left xl:mt-[14px] xl:text-fs12">{`Community`}</Text>
              </Column>
              <Column className="font-inter justify-start w-[22%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-bluegray_902 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Our Office`}</Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left w-[100%] xl:leading-lh21 xl:mt-[14px] xl:text-fs12">
                  {
                    <>
                      {`Indonesia`}
                      <br />
                      {`Jl. Griya Permata Hijau no D1 Purwomartani Kalasan 543881`}
                    </>
                  }
                </Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs10 mt-[16px] self-stretch text-bluegray_401 text-fs14 text-left w-[100%] xl:leading-lh21 xl:mt-[14px] xl:text-fs12">
                  {
                    <>
                      {`Singapore`}
                      <br />
                      {`35 Mandalay Road 13–37 Mandalay Towers Singapore 308215`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[84px] bg-cyan_400 font-inter items-center justify-evenly lg:mt-[54px] mt-[70px] px-[0] self-stretch w-[100%] xl:mt-[62px]">
              <Text className="3xl:my-[19px] 3xl:text-fs16 font-medium lg:my-[12px] lg:text-fs10 my-[16px] text-fs14 text-left text-white_A700 xl:my-[14px] xl:text-fs12">{`@2020 TanahAir Studio. All rights reserved.`}</Text>
              <Row className="3xl:gap-[19px] 3xl:my-[19px] 3xl:pr-[124px] gap-[16px] grid grid-cols-3 items-center justify-center lg:gap-[12px] lg:my-[12px] lg:pr-[80px] my-[16px] pr-[104px] w-[14%] xl:gap-[14px] xl:my-[14px] xl:pr-[92px]">
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:ml-[6px] 3xl:text-fs14 font-bold lg:mx-[3px] lg:text-fs9 ml-[5px] mr-[4px] text-fs12 text-left text-white_A700 xl:ml-[4px] xl:mr-[3px] xl:text-fs10">{`FB`}</Text>
                </Column>
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:ml-[6px] 3xl:mr-[7px] 3xl:text-fs14 font-bold lg:ml-[3px] lg:mr-[4px] lg:text-fs9 ml-[5px] mr-[6px] text-fs12 text-left text-white_A700 xl:ml-[4px] xl:mr-[5px] xl:text-fs10">{`IG`}</Text>
                </Column>
                <Column className="bg-orange_A700 font-inter items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:text-fs14 font-bold lg:mx-[2px] lg:text-fs9 mx-[3px] text-fs12 text-left text-white_A700 xl:mx-[2px] xl:text-fs10">{`YT`}</Text>
                </Column>
              </Row>
            </Row>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Contact1Page;
