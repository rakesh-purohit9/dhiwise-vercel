import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";
import { Stack } from "components/Stack";

const BlogDetail4Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="font-playfairdisplay items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="font-lato items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_frame105.svg"
                className="2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[67px] 3xl:my-[44px] 3xl:w-[58px] h-[49px] lg:h-[39px] lg:ml-[43px] lg:my-[28px] lg:w-[38px] ml-[56px] my-[37px] object-contain w-[49px] xl:h-[44px] xl:ml-[49px] xl:my-[32px] xl:w-[43px]"
                alt="Frame105"
              />
              <Text className="3xl:mb-[54px] 3xl:ml-[28px] 3xl:mt-[52px] 3xl:text-fs33 font-bold lg:mb-[35px] lg:ml-[18px] lg:mt-[34px] lg:text-fs21 mb-[45px] ml-[24px] mt-[44px] text-black_900 text-fs28 text-left xl:mb-[40px] xl:ml-[21px] xl:mt-[39px] xl:text-fs24">{`YOURLOGO`}</Text>
              <Column className="3xl:mb-[34px] 3xl:ml-[246px] 3xl:mt-[48px] justify-start lg:mb-[22px] lg:ml-[159px] lg:mt-[31px] mb-[29px] ml-[205px] mt-[40px] w-[47%] xl:mb-[25px] xl:ml-[182px] xl:mt-[35px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="3xl:ml-[9px] font-manrope items-center justify-between lg:ml-[6px] ml-[8px] px-[0] w-[99%] xl:ml-[7px]">
                    <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-extrabold lg:text-fs14 lg:tracking-ls2 text-center text-fs18 text-teal_900 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Home`}</Text>
                    <Row className="items-center justify-center w-[10%]">
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Pages`}</Text>
                      <Image
                        src="img_chevrondown_13.svg"
                        className="2xl:h-[16px] 2xl:my-[8px] 3xl:h-[19px] 3xl:ml-[14px] 3xl:my-[10px] h-[15px] lg:h-[12px] lg:ml-[9px] lg:my-[6px] ml-[12px] my-[8.5px] object-contain w-[14%] xl:h-[14px] xl:ml-[10px] xl:my-[7px]"
                        alt="chevrondown"
                      />
                    </Row>
                    <Row className="items-center justify-center w-[14%]">
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Services`}</Text>
                      <Image
                        src="img_chevrondown_14.svg"
                        className="2xl:h-[16px] 2xl:my-[8px] 3xl:h-[19px] 3xl:ml-[14px] 3xl:my-[10px] h-[15px] lg:h-[12px] lg:ml-[9px] lg:my-[6px] ml-[12px] my-[8.5px] object-contain w-[10%] xl:h-[14px] xl:ml-[10px] xl:my-[7px]"
                        alt="chevrondown"
                      />
                    </Row>
                    <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Projects`}</Text>
                    <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Blog`}</Text>
                    <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Contact Us`}</Text>
                    <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Career`}</Text>
                  </Row>
                </Column>
                <Line className="3xl:mr-[12px] 3xl:mt-[26px] bg-teal_900 h-[3px] lg:mr-[7px] lg:mt-[17px] mr-[10px] mt-[22px] w-[9%] xl:mr-[8px] xl:mt-[19px]" />
              </Column>
              <Column className="2xl:ml-[405px] 3xl:mb-[56px] 3xl:ml-[485px] 3xl:mr-[81px] 3xl:mt-[55px] items-center justify-start lg:mb-[36px] lg:ml-[314px] lg:mr-[52px] lg:mt-[35px] mb-[47px] ml-[404.75px] mr-[68px] mt-[46px] w-[2%] xl:mb-[41px] xl:ml-[360px] xl:mr-[60px] xl:mt-[40px]">
                <Line className="bg-black_900 h-[4px] self-stretch w-[100%]" />
                <Line className="3xl:mt-[13px] bg-black_900 h-[4px] lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]" />
                <Line className="3xl:mt-[13px] bg-black_900 h-[4px] lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]" />
              </Column>
            </Row>
          </div>
          <Text className="3xl:mt-[240px] 3xl:text-fs50 font-black font-playfairdisplay lg:mt-[155px] lg:text-fs32 mt-[200px] mx-[auto] text-black_900 text-fs42 text-left w-[40%] xl:mt-[177px] xl:text-fs37">{`One of your best product become more stand out`}</Text>
          <Text className="3xl:mt-[38px] 3xl:text-fs24 font-manrope font-normal lg:mt-[24px] lg:text-fs15 mt-[32px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 w-[40%] xl:mt-[28px] xl:text-fs17">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs24 font-manrope font-normal lg:mt-[50px] lg:text-fs15 mt-[65px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 w-[40%] xl:mt-[57px] xl:text-fs17">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Row className="3xl:mt-[78px] font-manrope items-center justify-center lg:mt-[50px] mt-[65px] mx-[auto] w-[38%] xl:mt-[57px]">
            <Line className="2xl:h-[97px] 3xl:h-[116px] bg-teal_500 h-[96px] lg:h-[75px] lg:mb-[2px] mb-[3px] w-[7px] xl:h-[86px] xl:mb-[2px]" />
            <Text className="3xl:ml-[66px] 3xl:text-fs28 font-bold leading-lh lg:ml-[42px] lg:text-fs18 ml-[55px] text-fs24 text-left text-teal_500 w-[92%] xl:ml-[48px] xl:text-fs21">
              <span className="text-teal_500 text-fs24 font-manrope text-left font-bold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                <>{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor exercitation incididunt aliquip. `}</>
              </span>
              <span className="text-teal_500 text-fs24 font-manrope text-left font-bold lg:text-fs18 xl:text-fs21 3xl:text-fs28">
                <>{`Nulla Lorem mollit cupidatat.`}</>
              </span>
            </Text>
          </Row>
          <Text className="3xl:mt-[78px] 3xl:text-fs24 font-manrope font-normal lg:mt-[50px] lg:text-fs15 mt-[65px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 w-[40%] xl:mt-[57px] xl:text-fs17">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt.`}</Text>
          <div className="2xl:h-[631px] 3xl:h-[757px] 3xl:mt-[78px] bg-gray_101 h-[630px] lg:h-[490px] lg:mt-[50px] mt-[65px] mx-[auto] shadow-bs6 w-[51%] xl:h-[561px] xl:mt-[57px]"></div>
          <Text className="3xl:mt-[78px] 3xl:text-fs24 font-manrope font-normal lg:mt-[50px] lg:text-fs15 mt-[65px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 w-[40%] xl:mt-[57px] xl:text-fs17">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs24 font-manrope font-normal lg:mt-[50px] lg:text-fs15 mt-[65px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 xl:mt-[57px] xl:text-fs17">{`Source: www.ourblog.com/blog/`}</Text>
          <Line className="3xl:mt-[80px] bg-bluegray_101 h-[1px] lg:mt-[52px] mt-[67px] mx-[auto] w-[51%] xl:mt-[59px]" />
          <Row className="3xl:mt-[52px] font-manrope justify-start lg:mt-[34px] mt-[44px] mx-[auto] w-[51%] xl:mt-[39px]">
            <Text className="3xl:text-fs21 font-manrope font-normal lg:text-fs14 text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Tags: SEO, Branding, Business`}</Text>
            <Text className="3xl:ml-[560px] 3xl:text-fs19 font-normal font-roboto lg:mb-[2px] lg:ml-[363px] lg:text-fs12 mb-[3px] ml-[467px] text-fs16 text-gray_600 text-left tracking-ls1 xl:mb-[2px] xl:ml-[415px] xl:text-fs14">{`Share:`}</Text>
            <Image
              src="img_frame128_2.svg"
              className="2xl:h-[26px] 3xl:h-[31px] 3xl:mb-[6px] 3xl:ml-[34px] h-[25px] lg:h-[20px] lg:mb-[3px] lg:ml-[22px] lg:mt-[1px] mb-[5px] ml-[29px] mt-[2px] object-contain w-[17%] xl:h-[23px] xl:mb-[4px] xl:ml-[25px] xl:mt-[1px]"
              alt="Frame128"
            />
          </Row>
          <Row className="3xl:mt-[112px] font-manrope justify-center lg:mt-[73px] mt-[94px] self-stretch w-[100%] xl:mt-[83px]">
            <Image
              src="img_component3_4.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[58px] 3xl:ml-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[38px] lg:ml-[369px] lg:mt-[8px] lg:w-[38px] mb-[49px] ml-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[43px] xl:ml-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component3"
            />
            <Column className="3xl:ml-[21px] justify-start lg:ml-[14px] ml-[18px] w-[14%] xl:ml-[16px]">
              <Text className="3xl:text-fs28 font-bold leading-lh lg:text-fs18 self-stretch text-fs24 text-left text-teal_500 w-[100%] xl:text-fs21">{`Be the best and beat you problem`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[9px] lg:text-fs14 mr-[10px] mt-[12px] text-fs18 text-gray_600 text-left tracking-ls1 xl:mr-[8px] xl:mt-[10px] xl:text-fs16">{`Prev`}</Text>
            </Column>
            <Column className="3xl:ml-[353px] justify-start lg:ml-[228px] ml-[294px] w-[14%] xl:ml-[261px]">
              <Column className="self-stretch w-[100%]">
                <Text className="3xl:text-fs28 font-bold leading-lh lg:text-fs18 self-stretch text-fs24 text-right text-teal_500 w-[100%] xl:text-fs21">{`Level up your skill to achieve your goals`}</Text>
              </Column>
              <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs21 font-normal lg:ml-[7px] lg:mt-[9px] lg:text-fs14 ml-[10px] mt-[12px] text-fs18 text-gray_600 text-right tracking-ls1 xl:ml-[8px] xl:mt-[10px] xl:text-fs16">{`Next`}</Text>
            </Column>
            <Image
              src="img_component4_4.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[58px] 3xl:ml-[21px] 3xl:mr-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[38px] lg:ml-[14px] lg:mr-[369px] lg:mt-[8px] lg:w-[38px] mb-[49px] ml-[18px] mr-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[43px] xl:ml-[16px] xl:mr-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component4"
            />
          </Row>
          <Text className="3xl:mt-[128px] 3xl:text-fs28 font-bold font-manrope lg:mt-[83px] lg:text-fs18 mt-[107px] mx-[auto] text-black_900 text-fs24 text-left xl:mt-[95px] xl:text-fs21">{`Leave a Comment`}</Text>
          <Text className="3xl:mt-[39px] 3xl:text-fs21 font-manrope font-normal lg:mt-[25px] lg:text-fs14 mt-[33px] mx-[auto] text-fs18 text-gray_600 text-left tracking-ls1 w-[50%] xl:mt-[29px] xl:text-fs16">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Input
            className="2xl:pb-[37px] 2xl:pt-[2px] 3xl:mt-[72px] 3xl:pb-[44px] 3xl:pt-[2px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-manrope font-medium lg:mt-[46px] lg:pb-[28px] lg:pt-[1px] lg:text-fs18 mt-[60px] mx-[auto] pb-[37.06px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[2.0600004px] text-fs24 text-gray_600 text-left w-[51%] xl:mt-[53px] xl:pb-[32px] xl:pt-[1px] xl:text-fs21"
            name="Group131"
            placeholder={`Subject*`}
          ></Input>
          <Input
            className="2xl:pb-[37px] 2xl:pt-[2px] 3xl:mt-[36px] 3xl:pb-[44px] 3xl:pt-[2px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-manrope font-medium lg:mt-[23px] lg:pb-[28px] lg:pt-[1px] lg:text-fs18 mt-[30px] mx-[auto] pb-[37.06px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[2.0600004px] text-fs24 text-gray_600 text-left w-[51%] xl:mt-[26px] xl:pb-[32px] xl:pt-[1px] xl:text-fs21"
            name="Group132"
            placeholder={`Your Name*`}
          ></Input>
          <Input
            className="2xl:mt-[30px] 2xl:pb-[37px] 2xl:pt-[2px] 3xl:mt-[36px] 3xl:pb-[44px] 3xl:pt-[2px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-manrope font-medium lg:mt-[23px] lg:pb-[28px] lg:pt-[1px] lg:text-fs18 mt-[29.98999px] mx-[auto] pb-[37.06px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[2.0600004px] text-fs24 text-gray_600 text-left w-[51%] xl:mt-[26px] xl:pb-[32px] xl:pt-[1px] xl:text-fs21"
            name="Group133"
            placeholder={`Your Email*`}
          ></Input>
          <div className="3xl:mt-[36px] 3xl:mx-[12px] bg-transparent border-0 lg:mt-[23px] lg:mx-[7px] mt-[30px] mx-[10px] w-[51%] xl:mt-[26px] xl:mx-[8px] input-wrap">
            <Image
              src="img_griphorizontal_5.svg"
              className="absolute top-[2.0600004px] bottom-[37.06px] right-[4.380005px] bg-transparent border-0 lg:top-[1px] lg:bottom-[28px] lg:right-[3px] xl:top-[1px] xl:bottom-[32px] xl:right-[3px] 2xl:top-[2px] 2xl:bottom-[37px] 2xl:right-[4px] 3xl:top-[2px] 3xl:bottom-[44px] 3xl:right-[5px]"
              alt="grip-horizontal"
            />
            <TextArea
              className="2xl:pb-[37px] 2xl:pr-[45px] 2xl:pt-[2px] 3xl:pb-[44px] 3xl:pr-[54px] 3xl:pt-[2px] 3xl:text-fs28 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-manrope font-medium lg:pb-[28px] lg:pr-[35px] lg:pt-[1px] lg:text-fs18 pb-[37.06px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pr-[45.000005px] pt-[2.0600004px] text-fs24 text-gray_600 text-left w-[100%] xl:pb-[32px] xl:pr-[40px] xl:pt-[1px] xl:text-fs21"
              name="Group614"
              placeholder={`Enter Your Comment`}
            ></TextArea>
          </div>
        </Column>
        <Column className="3xl:mt-[118px] font-manrope items-end lg:mt-[77px] mt-[99px] self-stretch w-[100%] xl:mt-[88px]">
          <Button className="2xl:pb-[35px] 2xl:pt-[32px] 2xl:tracking-ls2 3xl:mx-[569px] 3xl:pb-[42px] 3xl:pt-[39px] 3xl:px-[42px] 3xl:text-fs21 3xl:tracking-ls3 bg-teal_500 border-bw font-extrabold lg:mx-[368px] lg:pb-[27px] lg:pt-[25px] lg:px-[27px] lg:text-fs14 lg:tracking-ls2 mx-[474px] pb-[35.21px] pt-[32.92px] px-[35px] rounded-radius40 shadow-bs7 text-center text-fs18 text-white_A700 tracking-ls288 uppercase w-[12%] xl:mx-[421px] xl:pb-[31px] xl:pt-[29px] xl:px-[31px] xl:text-fs16 xl:tracking-ls2">{`subscribe`}</Button>
        </Column>
        <Column className="2xl:mt-[297px] 3xl:mt-[356px] items-center lg:mt-[231px] mt-[297.27002px] self-stretch w-[100%] xl:mt-[264px]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Line className="bg-black_900 h-[1px] mx-[auto] w-[61%]" />
              <Column className="3xl:mt-[166px] bg-white_A700 items-center justify-start lg:mt-[108px] mt-[139px] self-stretch w-[100%] xl:mt-[123px]">
                <Row className="3xl:mt-[78px] justify-evenly lg:mt-[50px] mt-[65px] px-[0] self-stretch w-[100%] xl:mt-[57px]">
                  <Column className="3xl:mb-[104px] font-manrope justify-start lg:mb-[67px] mb-[87px] w-[14%] xl:mb-[77px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 ml-[1px] mr-[10px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`About Us`}</Text>
                    <Text className="3xl:mt-[43px] 3xl:text-fs21 font-normal lg:mt-[28px] lg:text-fs14 mt-[36px] text-fs18 text-gray_600 text-left tracking-ls1 w-[100%] xl:mt-[32px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectet ur adipisicing elit, incididunt ut labore.`}</Text>
                    <Column className="3xl:mr-[12px] 3xl:mt-[45px] font-manrope items-center justify-start lg:mr-[7px] lg:mt-[29px] mr-[10px] mt-[38px] rounded-radius10 w-[87%] xl:mr-[8px] xl:mt-[33px]">
                      <Button className="2xl:py-[31px] 2xl:tracking-ls2 3xl:px-[42px] 3xl:py-[37px] 3xl:text-fs21 3xl:tracking-ls3 bg-white_A700 border-bw3 border-solid border-teal_500 font-normal lg:px-[27px] lg:py-[24px] lg:text-fs14 lg:tracking-ls2 px-[35px] py-[31.2px] rounded-radius40 self-stretch shadow-bs7 text-center text-fs18 text-teal_900 tracking-ls288 uppercase w-[100%] xl:px-[31px] xl:py-[27px] xl:text-fs16 xl:tracking-ls2">{`Let’s Talk`}</Button>
                    </Column>
                  </Column>
                  <Column className="font-manrope justify-start w-[14%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`Contact Us`}</Text>
                    <Column className="3xl:mt-[43px] items-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                      <Column className="font-manrope justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 w-[100%] xl:text-fs16">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                        <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`deanna.curtis@example.com`}</Text>
                        <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`(671) 555-0110`}</Text>
                      </Column>
                    </Column>
                    <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs21">{`Opening Hours`}</Text>
                    <Column className="3xl:mt-[43px] items-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                      <Column className="font-manrope justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Mon - Sat 8:00 - 17:30,`}</Text>
                        <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Sunday - CLOSED`}</Text>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="3xl:mb-[145px] font-manrope justify-start lg:mb-[94px] mb-[121px] w-[8%] xl:mb-[107px]">
                    <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-black_900 text-fs24 text-left xl:text-fs21">{`Userfull Links`}</Text>
                    <Column className="3xl:mr-[12px] 3xl:mt-[43px] justify-start lg:mr-[7px] lg:mt-[28px] mr-[10px] mt-[36px] w-[86%] xl:mr-[8px] xl:mt-[32px]">
                      <Row className="font-manrope items-center justify-start self-stretch w-[100%]">
                        <Image
                          src="img_chevronright_7.svg"
                          className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[38px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[24px] lg:text-fs14 ml-[15px] mr-[32px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[28px] xl:text-fs16">{`About Us`}</Text>
                      </Row>
                      <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_chevronright_7.svg"
                          className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[36px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[23px] lg:text-fs14 ml-[15px] mr-[30px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[26px] xl:text-fs16">{`Our Team`}</Text>
                      </Row>
                      <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Row className="font-manrope items-center justify-start self-stretch w-[100%]">
                          <Image
                            src="img_chevronright_7.svg"
                            className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                            alt="chevronright"
                          />
                          <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Pricing Plans`}</Text>
                        </Row>
                      </Column>
                      <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_chevronright_7.svg"
                          className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[88px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[57px] lg:text-fs14 ml-[15px] mr-[74px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[65px] xl:text-fs16">{`Blog`}</Text>
                      </Row>
                      <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                        <Image
                          src="img_chevronright_7.svg"
                          className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:mr-[37px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[24px] lg:text-fs14 ml-[15px] mr-[31px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[27px] xl:text-fs16">{`404 Page`}</Text>
                      </Row>
                    </Column>
                  </Column>
                  <Stack className="2xl:h-[371px] 3xl:h-[445px] font-manrope h-[370px] lg:h-[288px] w-[14%] xl:h-[330px]">
                    <Text className="3xl:text-fs28 absolute font-bold left-[0] lg:text-fs18 text-black_900 text-fs24 text-left top-[0] xl:text-fs21">{`Keep Connect`}</Text>
                    <div className="2xl:h-[364px] 3xl:h-[436px] 3xl:top-[8px] absolute bg-gray_101 bottom-[0] h-[363px] inset-x-[0] lg:h-[283px] lg:top-[5px] rounded-radius20 self-stretch top-[7px] w-[100%] xl:h-[323px] xl:top-[6px]"></div>
                  </Stack>
                </Row>
                <Row className="3xl:mb-[99px] 3xl:mt-[199px] font-manrope items-center justify-evenly lg:mb-[64px] lg:mt-[129px] mb-[83px] mt-[166px] px-[0] self-stretch w-[100%] xl:mb-[73px] xl:mt-[147px]">
                  <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-black_900 text-fs18 text-left tracking-ls1 xl:text-fs16">{`Copyright © 2020. All right reserved`}</Text>
                  <Row className="font-manrope items-center justify-between px-[0] w-[34%]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-black_900 text-fs18 text-left tracking-ls1 xl:text-fs16">{`Mobile Apps:`}</Text>
                    <Image
                      src="img_rsssquare_6.svg"
                      className="2xl:h-[26px] 2xl:my-[3px] 3xl:h-[31px] 3xl:my-[4px] h-[25px] lg:h-[20px] lg:my-[2px] my-[3.5px] object-contain w-[3%] xl:h-[23px] xl:my-[3px]"
                      alt="rsssquare"
                    />
                    <Image
                      src="img_blog_6.svg"
                      className="2xl:h-[26px] 2xl:mr-[418px] 2xl:my-[3px] 3xl:h-[31px] 3xl:mr-[502px] 3xl:my-[4px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mr-[325px] lg:my-[2px] lg:w-[19px] mr-[418.12px] my-[3.5px] object-contain w-[25px] xl:h-[23px] xl:mr-[371px] xl:my-[3px] xl:w-[22px]"
                      alt="blog"
                    />
                  </Row>
                </Row>
              </Column>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default BlogDetail4Page;
