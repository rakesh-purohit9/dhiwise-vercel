import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Stack } from "components/Stack";
import { Line } from "components/Line";

const ContactUs2Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="bg-bluegray_802 font-merriweather justify-start self-stretch w-[100%]">
        <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
          <div className="mx-[auto] w-[86%]">
            <Row className="font-dmsans items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_dummylogo02_2.svg"
                className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                alt="DummyLogo02"
              />
              <Row className="3xl:mb-[21px] 3xl:ml-[96px] 3xl:mt-[22px] items-center justify-center lg:ml-[62px] lg:my-[14px] mb-[18px] ml-[80px] mt-[19px] w-[34%] xl:ml-[71px] xl:my-[16px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-lime_700 tracking-ls1 xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[28px] xl:text-fs14">{`Campaign`}</Text>
                <Text className="3xl:ml-[40px] 3xl:text-fs19 font-normal lg:ml-[26px] lg:text-fs12 ml-[34px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[30px] xl:text-fs14">{`Our Works`}</Text>
                <Text className="3xl:ml-[42px] 3xl:text-fs19 font-normal lg:ml-[27px] lg:text-fs12 ml-[35px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[31px] xl:text-fs14">{`Blogs`}</Text>
                <Text className="3xl:ml-[40px] 3xl:text-fs19 font-normal lg:ml-[26px] lg:text-fs12 ml-[34px] text-fs16 text-left text-white_A700 tracking-ls1 xl:ml-[30px] xl:text-fs14">{`About`}</Text>
              </Row>
              <Button className="2xl:py-[12px] 3xl:ml-[554px] 3xl:my-[9px] 3xl:px-[28px] 3xl:py-[14px] 3xl:text-fs19 bg-lime_700 border-bw font-bold lg:ml-[359px] lg:my-[6px] lg:px-[18px] lg:py-[9px] lg:text-fs12 ml-[462px] my-[8px] px-[24px] py-[12.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[11%] xl:ml-[410px] xl:my-[7px] xl:px-[21px] xl:py-[10px] xl:text-fs14">{`Contact Us`}</Button>
            </Row>
          </div>
        </Column>
        <Text className="3xl:mt-[105px] 3xl:mx-[124px] 3xl:text-fs76 font-bold font-merriweather lg:mt-[68px] lg:mx-[80px] lg:text-fs49 mt-[88px] mx-[104px] text-fs64 text-left text-white_A700 tracking-ls1 w-[43%] xl:mt-[78px] xl:mx-[92px] xl:text-fs56">{`Contact Us for more Question`}</Text>
        <Text className="3xl:mb-[144px] 3xl:mt-[28px] 3xl:mx-[124px] 3xl:text-fs19 font-normal font-roboto lg:mb-[93px] lg:mt-[18px] lg:mx-[80px] lg:text-fs12 mb-[120px] mt-[24px] mx-[104px] text-bluegray_106 text-fs16 text-left w-[43%] xl:mb-[106px] xl:mt-[21px] xl:mx-[92px] xl:text-fs14">{`SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens. do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
      </Column>
      <Row className="3xl:mt-[144px] items-center justify-start lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
        <Column className="3xl:ml-[124px] font-merriweather justify-start lg:ml-[80px] ml-[104px] w-[42%] xl:ml-[92px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs46 font-bold font-merriweather lg:mr-[7px] lg:text-fs30 mr-[10px] text-fs39 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs34">{`Send Messages to us`}</Text>
          <Text className="3xl:mr-[12px] 3xl:mt-[57px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:mt-[37px] lg:text-fs12 mr-[10px] mt-[48px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:mt-[42px] xl:text-fs14">{`First Name`}</Text>
          <Input
            className="3xl:mt-[19px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-dmsans font-normal lg:mt-[12px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 py-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
            name="TextBox"
            placeholder={`Input your First Name in here`}
          ></Input>
          <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Last Name`}</Text>
          <Input
            className="3xl:mt-[19px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-dmsans font-normal lg:mt-[12px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 py-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
            name="TextBox"
            placeholder={`Input your Last Name in here`}
          ></Input>
          <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Email Address`}</Text>
          <Input
            className="3xl:mt-[19px] 3xl:pl-[19px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border border-gray_304 border-solid font-dmsans font-normal lg:mt-[12px] lg:pl-[12px] lg:py-[15px] lg:text-fs12 mt-[16px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 py-[20px] rounded-radius8 self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[14px] xl:pl-[14px] xl:py-[17px] xl:text-fs14"
            name="TextBox"
            placeholder={`Input your email address in here`}
          ></Input>
          <Button className="2xl:py-[20px] 3xl:mr-[12px] 3xl:mt-[67px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-lime_700 border-bw font-bold font-dmsans lg:mr-[7px] lg:mt-[43px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[56px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[33%] xl:mr-[8px] xl:mt-[49px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Sent Messages Now`}</Button>
        </Column>
        <Column className="3xl:mb-[134px] 3xl:ml-[19px] 3xl:mr-[124px] 3xl:mt-[114px] font-merriweather justify-start lg:mb-[87px] lg:ml-[12px] lg:mr-[80px] lg:mt-[73px] mb-[112px] ml-[16px] mr-[104px] mt-[95px] w-[42%] xl:mb-[99px] xl:ml-[14px] xl:mr-[92px] xl:mt-[84px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Messages`}</Text>
          <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
            <Column className="bg-white_A700 border border-gray_304 border-solid font-dmsans items-center justify-start rounded-radius8 self-stretch w-[100%]">
              <Text className="3xl:mb-[297px] 3xl:mt-[21px] 3xl:mx-[19px] 3xl:text-fs19 font-normal lg:mb-[192px] lg:mt-[14px] lg:mx-[12px] lg:text-fs12 mb-[248px] mt-[18px] mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mb-[220px] xl:mt-[16px] xl:mx-[14px] xl:text-fs14">{`Write your messages in here`}</Text>
            </Column>
          </Column>
        </Column>
      </Row>
      <Stack className="2xl:h-[541px] 3xl:h-[649px] 3xl:mt-[57px] h-[540px] lg:h-[420px] lg:mt-[37px] mt-[48px] mx-[auto] w-[86%] xl:h-[481px] xl:mt-[42px]">
        <Image
          src="img_maps.svg"
          className="2xl:h-[541px] 3xl:h-[649px] absolute h-[540px] inset-[0] lg:h-[420px] object-cover self-stretch w-[100%] xl:h-[481px]"
          alt="Maps"
        />
        <Column className="3xl:bottom-[38px] absolute bg-white_A700 bottom-[32px] font-merriweather inset-x-[0] justify-center lg:bottom-[24px] mx-[auto] shadow-bs12 w-[95%] xl:bottom-[28px]">
          <Text className="3xl:mt-[31px] 3xl:mx-[19px] 3xl:text-fs28 font-bold font-merriweather lg:mt-[20px] lg:mx-[12px] lg:text-fs18 mt-[26px] mx-[16px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[23px] xl:mx-[14px] xl:text-fs21">{`Office Address`}</Text>
          <Text className="3xl:mb-[28px] 3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mb-[18px] lg:mt-[12px] lg:mx-[12px] lg:text-fs12 mb-[24px] mt-[16px] mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mb-[21px] xl:mt-[14px] xl:mx-[14px] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
        </Column>
      </Stack>
      <div className="3xl:mt-[144px] lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
        <Column className="bg-bluegray_802 justify-end self-stretch w-[100%]">
          <Row className="3xl:mt-[76px] justify-evenly lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
            <Column className="3xl:mb-[102px] font-roboto justify-start lg:mb-[66px] mb-[85px] w-[14%] xl:mb-[75px]">
              <Image
                src="img_dummylogo02_3.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] h-[56px] lg:h-[44px] lg:mr-[7px] mr-[10px] object-contain w-[65%] xl:h-[50px] xl:mr-[8px]"
                alt="DummyLogo02"
              />
              <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:mt-[21px] xl:text-fs14">
                {
                  <>
                    {`OurStudio is a digital agency`}
                    <br />
                    {`UI / UX Design and Website`}
                    <br />
                    {`Development located in Ohio,`}
                    <br />
                    {`United States of America`}
                  </>
                }
              </Text>
            </Column>
            <Column className="3xl:mt-[28px] font-merriweather justify-start lg:mt-[18px] mt-[24px] w-[10%] xl:mt-[21px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`About us`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Our Story`}</Text>
              <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:mt-[14px] xl:text-fs14">{`Vision and mission`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Management`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Donation`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Blog`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Contact Us`}</Text>
            </Column>
            <Column className="3xl:mt-[28px] font-merriweather justify-start lg:mt-[18px] mt-[24px] w-[10%] xl:mt-[21px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Legal`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Service`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Financial Reports`}</Text>
              <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:mt-[14px] xl:text-fs14">{`Term and Condition`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`FAQs`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Partners`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Privacy`}</Text>
            </Column>
            <Column className="3xl:mb-[44px] 3xl:mt-[28px] font-merriweather justify-start lg:mb-[28px] lg:mt-[18px] mb-[37px] mt-[24px] w-[31%] xl:mb-[32px] xl:mt-[21px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-merriweather lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Join a Newsletter`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-dmsans lg:mr-[7px] lg:mt-[18px] lg:text-fs12 ml-[1px] mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Your Email`}</Text>
              <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <Row className="font-dmsans items-center justify-between px-[0] self-stretch w-[100%]">
                  <Input
                    className="2xl:pb-[16px] 2xl:pt-[15px] 3xl:pb-[19px] 3xl:pl-[19px] 3xl:pt-[18px] 3xl:text-fs19 bg-white_A700 border border-gray_104 border-solid font-normal lg:pl-[12px] lg:py-[12px] lg:text-fs12 ml-[1px] pb-[16.6px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_106 pt-[15.6px] rounded-radius8 text-bluegray_106 text-fs16 text-left tracking-ls1 w-[67%] xl:pb-[14px] xl:pl-[14px] xl:pt-[13px] xl:text-fs14"
                    name="Group296"
                    placeholder={`Enter Your Email`}
                  ></Input>
                  <Button className="2xl:py-[16px] 3xl:px-[28px] 3xl:py-[19px] 3xl:text-fs19 bg-lime_800 border-bw font-bold lg:px-[18px] lg:py-[12px] lg:text-fs12 px-[24px] py-[16.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[31%] xl:px-[21px] xl:py-[14px] xl:text-fs14">{`Subscribes`}</Button>
                </Row>
                <Row className="3xl:gap-[19px] 3xl:mt-[40px] 3xl:pr-[347px] gap-[16px] grid grid-cols-3 items-center justify-start lg:gap-[12px] lg:mt-[26px] lg:pr-[224px] mt-[34px] pr-[289px] self-stretch w-[100%] xl:gap-[14px] xl:mt-[30px] xl:pr-[257px]">
                  <Column className="bg-lime_800 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mb-[13px] 3xl:mt-[12px] 3xl:text-fs19 font-bold lg:mb-[8px] lg:mt-[7px] lg:text-fs12 mb-[11px] mt-[10px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[8px] xl:text-fs14">{`Dr`}</Text>
                  </Column>
                  <Column className="bg-lime_800 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mb-[13px] 3xl:mt-[12px] 3xl:text-fs19 font-bold lg:mb-[8px] lg:mt-[7px] lg:text-fs12 mb-[11px] mt-[10px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[8px] xl:text-fs14">{`Be`}</Text>
                  </Column>
                  <Column className="bg-lime_800 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:mb-[13px] 3xl:mt-[12px] 3xl:text-fs19 font-bold lg:mb-[8px] lg:mt-[7px] lg:text-fs12 mb-[11px] mt-[10px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[9px] xl:mt-[8px] xl:text-fs14">{`Ig`}</Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Row>
          <Line className="3xl:mt-[86px] bg-gray_304 h-[1px] lg:mt-[56px] mt-[72px] mx-[auto] w-[86%] xl:mt-[64px]" />
          <Column className="3xl:mb-[48px] 3xl:mt-[46px] font-roboto lg:mb-[31px] lg:mt-[30px] mb-[40px] mt-[39px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[34px]">
            <Text className="3xl:mx-[124px] 3xl:text-fs19 font-normal lg:mx-[80px] lg:text-fs12 mx-[104px] text-fs16 text-left text-white_A700 xl:mx-[92px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
          </Column>
        </Column>
      </div>
    </Column>
  );
};

export default ContactUs2Page;
