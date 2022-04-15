import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";

const ContactUs4Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[48px] 3xl:mt-[38px] items-center justify-start lg:mb-[31px] lg:mt-[24px] mb-[40px] mt-[32px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[28px]">
        <Stack className="2xl:h-[531px] 3xl:h-[637px] h-[530px] lg:h-[413px] mx-[auto] w-[96%] xl:h-[472px]">
          <Image
            src="img_background_7.svg"
            className="2xl:h-[531px] 3xl:h-[637px] absolute h-[530px] inset-[0] lg:h-[413px] object-cover rounded-radius16 self-stretch w-[100%] xl:h-[472px]"
            alt="Background"
          />
          <Column className="3xl:top-[38px] absolute font-mulish inset-x-[0] items-center justify-start lg:top-[24px] mx-[auto] top-[32px] w-[90%] xl:top-[28px]">
            <div className="self-stretch w-[100%]">
              <Row className="items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_dummylogo02_16.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                  alt="DummyLogo02"
                />
                <Row className="3xl:mb-[21px] 3xl:ml-[76px] 3xl:mt-[22px] font-mulish items-center justify-center lg:ml-[49px] lg:my-[14px] mb-[18px] ml-[64px] mt-[19px] w-[35%] xl:ml-[56px] xl:my-[16px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-white_A700 tracking-ls1 xl:text-fs14">{`Home`}</Text>
                  <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Services`}</Text>
                  <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[35px] xl:text-fs14">{`FAQ`}</Text>
                  <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[35px] xl:text-fs14">{`About us`}</Text>
                  <Text className="3xl:ml-[48px] 3xl:text-fs19 font-bold lg:ml-[31px] lg:text-fs12 ml-[40px] text-fs16 text-left text-teal_A400 tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Contact`}</Text>
                </Row>
                <Row className="3xl:mb-[18px] 3xl:ml-[660px] 3xl:mt-[20px] font-mulish justify-between lg:mb-[11px] lg:ml-[427px] lg:mt-[13px] mb-[15px] ml-[550px] mt-[17px] px-[0] w-[4%] xl:mb-[13px] xl:ml-[489px] xl:mt-[15px]">
                  <Text className="3xl:text-fs19 font-bold lg:mb-[2px] lg:mt-[1px] lg:text-fs12 mb-[3px] mt-[2px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[2px] xl:mt-[1px] xl:text-fs14">{`EN`}</Text>
                  <Image
                    src="img_arrowchevrond_1.svg"
                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                    alt="ArrowChevronD"
                  />
                </Row>
              </Row>
            </div>
            <Text className="3xl:mt-[182px] 3xl:text-fs74 font-bold lg:mt-[118px] lg:text-fs48 mt-[152px] mx-[auto] text-center text-fs62 text-white_A700 tracking-ls1 xl:mt-[135px] xl:text-fs55">{`Contact Us`}</Text>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-white_A700 tracking-ls1 w-[48%] xl:mt-[21px] xl:text-fs14">{`We will help to develop every smallest thing into a big one for your company We will help to develop every smallest thing into a big one for`}</Text>
          </Column>
        </Stack>
        <Row className="3xl:mt-[144px] items-center justify-between lg:mt-[93px] mt-[120px] px-[0] self-stretch w-[100%] xl:mt-[106px]">
          <Stack className="2xl:h-[735px] 3xl:h-[882px] 3xl:ml-[124px] h-[734px] lg:h-[571px] lg:ml-[80px] ml-[104px] w-[42%] xl:h-[653px] xl:ml-[92px]">
            <Image
              src="img_maps_2.svg"
              className="2xl:h-[735px] 3xl:h-[882px] absolute h-[734px] inset-[0] lg:h-[571px] object-cover self-stretch w-[100%] xl:h-[653px]"
              alt="Maps"
            />
            <Column className="3xl:bottom-[38px] absolute bg-white_A700 bottom-[32px] font-mulish inset-x-[0] justify-center lg:bottom-[24px] mx-[auto] rounded-radius16 shadow-bs12 w-[89%] xl:bottom-[28px]">
              <Text className="3xl:mt-[28px] 3xl:mx-[19px] 3xl:text-fs28 font-bold lg:mt-[18px] lg:mx-[12px] lg:text-fs18 mt-[24px] mx-[16px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[21px] xl:mx-[14px] xl:text-fs21">{`Office Address`}</Text>
              <Text className="3xl:mb-[28px] 3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs19 font-normal lg:mb-[18px] lg:mt-[12px] lg:mx-[12px] lg:text-fs12 mb-[24px] mt-[16px] mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mb-[21px] xl:mt-[14px] xl:mx-[14px] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
            </Column>
          </Stack>
          <Column className="3xl:mr-[124px] 3xl:my-[48px] font-mulish justify-start lg:mr-[80px] lg:my-[31px] mr-[104px] my-[40px] w-[35%] xl:mr-[92px] xl:my-[35px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs57 font-bold lg:mr-[7px] lg:text-fs37 mr-[10px] text-center text-fs48 text-gray_907 tracking-ls1 xl:mr-[8px] xl:text-fs42">{`Send Messages`}</Text>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Column className="font-mulish justify-start self-stretch w-[100%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Full Name`}</Text>
                <Input
                  className="3xl:mt-[19px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-normal lg:mt-[12px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 py-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
                  name="TextBox"
                  placeholder={`Input your full name in here`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[28px] font-mulish justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Email Address`}</Text>
                <Input
                  className="3xl:mt-[19px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-normal lg:mt-[12px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 py-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
                  name="TextBox"
                  placeholder={`Input your email address in here`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[28px] font-mulish justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Messages`}</Text>
                <TextArea
                  className="3xl:mt-[19px] 3xl:pb-[44px] 3xl:pl-[19px] 3xl:pt-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-normal lg:mt-[12px] lg:pb-[28px] lg:pl-[12px] lg:pt-[15px] lg:text-fs12 mt-[16px] pb-[37px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 pt-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pb-[32px] xl:pl-[14px] xl:pt-[17px] xl:text-fs14"
                  name="TextBox"
                  placeholder={`Write your messages in here`}
                ></TextArea>
              </Column>
            </Column>
            <Button className="2xl:py-[20px] 3xl:mr-[12px] 3xl:mt-[76px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-teal_A400 border-bw font-bold lg:mr-[7px] lg:mt-[49px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[64px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[33%] xl:mr-[8px] xl:mt-[56px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Send Messages`}</Button>
          </Column>
        </Row>
        <div className="3xl:mt-[144px] lg:mt-[93px] mt-[120px] mx-[auto] w-[96%] xl:mt-[106px]">
          <Column className="bg-gray_909 font-mulish justify-end rounded-radius16 self-stretch w-[100%]">
            <Image
              src="img_dummylogo02_17.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[67px] 3xl:mx-[86px] h-[56px] lg:h-[44px] lg:mt-[43px] lg:mx-[56px] mt-[56px] mx-[72px] object-contain w-[10%] xl:h-[50px] xl:mt-[49px] xl:mx-[64px]"
              alt="DummyLogo02"
            />
            <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
              <Row className="font-mulish justify-evenly px-[0] self-stretch w-[100%]">
                <Text className="3xl:mb-[88px] 3xl:text-fs19 font-normal lg:mb-[57px] lg:text-fs12 mb-[74px] text-fs16 text-left text-white_A700 tracking-ls1 w-[29%] xl:mb-[65px] xl:text-fs14">{`OurStudio is a digital agency UI / UX Design and Website Development located in Ohio, United States of America`}</Text>
                <Row className="items-center justify-between px-[0] w-[50%]">
                  <Column className="font-mulish justify-start w-[17%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs14">{`Feature`}</Text>
                    <Text className="3xl:mt-[28px] 3xl:text-fs19 font-semibold lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Investment App`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[13px] lg:text-fs12 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[15px] xl:text-fs14">{`Download`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[13px] lg:text-fs12 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[15px] xl:text-fs14">{`Tutorial`}</Text>
                  </Column>
                  <Column className="font-mulish justify-start w-[15%]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs14">{`Resources`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Blog`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[13px] lg:text-fs12 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[15px] xl:text-fs14">{`Support`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[13px] lg:text-fs12 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[15px] xl:text-fs14">{`Newsletter`}</Text>
                  </Column>
                  <Column className="3xl:mr-[85px] font-mulish justify-start lg:mr-[55px] mr-[71px] w-[17%] xl:mr-[63px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs14">{`Support`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`My Account`}</Text>
                    <Text className="3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mt-[13px] lg:text-fs12 mt-[17px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:mt-[15px] xl:text-fs14">{`Help & Support`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs19 font-semibold lg:mr-[7px] lg:mt-[13px] lg:text-fs12 mr-[10px] mt-[17px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[15px] xl:text-fs14">{`Contact Us`}</Text>
                  </Column>
                </Row>
              </Row>
            </Column>
            <Text className="3xl:mb-[48px] 3xl:mt-[97px] 3xl:mx-[86px] 3xl:text-fs19 font-normal lg:mb-[31px] lg:mt-[63px] lg:mx-[56px] lg:text-fs12 mb-[40px] mt-[81px] mx-[72px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[35px] xl:mt-[72px] xl:mx-[64px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default ContactUs4Page;
