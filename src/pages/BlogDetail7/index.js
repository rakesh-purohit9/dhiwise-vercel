import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Slider } from "components/Slider";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Button } from "components/Button";

const BlogDetail7Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-gray_50 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="font-playfairdisplay items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="bg-black_901 font-playfairdisplay justify-start self-stretch w-[100%]">
              <Image
                src="img_store_4.svg"
                className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[36px] 3xl:ml-[76px] 3xl:mt-[31px] h-[40px] lg:h-[32px] lg:mb-[23px] lg:ml-[49px] lg:mt-[20px] mb-[30px] ml-[64px] mt-[26px] object-contain w-[3%] xl:h-[36px] xl:mb-[26px] xl:ml-[56px] xl:mt-[23px]"
                alt="store"
              />
              <Column className="3xl:mb-[36px] 3xl:ml-[19px] 3xl:mt-[31px] justify-start lg:mb-[23px] lg:ml-[12px] lg:mt-[20px] mb-[30px] ml-[16px] mt-[26px] w-[6%] xl:mb-[26px] xl:ml-[14px] xl:mt-[23px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 uppercase xl:mr-[8px] xl:text-fs14">{`Your Logo`}</Text>
                <Text className="3xl:text-fs19 font-normal font-roboto lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Your slogan here`}</Text>
              </Column>
              <Text className="2xl:ml-[318px] 2xl:my-[37px] 3xl:ml-[381px] 3xl:my-[45px] 3xl:text-fs19 font-bold lg:ml-[247px] lg:my-[29px] lg:text-fs12 ml-[317.82px] my-[37.5px] text-center text-fs16 text-white_A700 uppercase xl:ml-[282px] xl:my-[33px] xl:text-fs14">{`Home`}</Text>
              <Row className="2xl:my-[5px] 3xl:ml-[74px] 3xl:my-[6px] items-center justify-center lg:ml-[48px] lg:my-[4px] ml-[62px] my-[5.5px] w-[17%] xl:ml-[55px] xl:my-[4px]">
                <Text className="3xl:my-[38px] 3xl:text-fs19 font-bold lg:my-[24px] lg:text-fs12 my-[32px] text-center text-fs16 text-white_A700 uppercase xl:my-[28px] xl:text-fs14">{`About`}</Text>
                <Row className="3xl:ml-[67px] items-center justify-center lg:ml-[43px] ml-[56px] w-[24%] xl:ml-[49px]">
                  <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Menu`}</Text>
                  <Image
                    src="img_chevrondown_1.svg"
                    className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[42px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[27px] ml-[5px] mr-[6px] my-[35px] object-contain w-[17%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[31px]"
                    alt="chevrondown"
                  />
                </Row>
                <Text className="3xl:ml-[67px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[43px] lg:my-[24px] lg:text-fs12 ml-[56px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[49px] xl:my-[28px] xl:text-fs14">{`Gallery`}</Text>
              </Row>
              <Row className="2xl:ml-[62px] 2xl:my-[37px] 3xl:ml-[74px] 3xl:my-[45px] items-center justify-center lg:ml-[48px] lg:my-[29px] ml-[62.00006px] my-[37.5px] w-[15%] xl:ml-[55px] xl:my-[33px]">
                <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Team`}</Text>
                <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Contact`}</Text>
                <Text className="3xl:ml-[74px] 3xl:text-fs19 font-bold lg:ml-[48px] lg:text-fs12 ml-[62px] text-center text-fs16 text-white_A700 uppercase xl:ml-[55px] xl:text-fs14">{`Blog`}</Text>
              </Row>
              <Image
                src="img_search_13.svg"
                className="2xl:h-[31px] 2xl:ml-[454px] 3xl:h-[37px] 3xl:mb-[45px] 3xl:ml-[545px] 3xl:mr-[98px] 3xl:mt-[33px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:mb-[29px] lg:ml-[353px] lg:mr-[63px] lg:mt-[21px] lg:w-[23px] mb-[38px] ml-[453.93994px] mr-[82px] mt-[28px] object-contain w-[30px] xl:h-[27px] xl:mb-[33px] xl:ml-[403px] xl:mr-[72px] xl:mt-[24px] xl:w-[26px]"
                alt="search"
              />
            </Row>
          </div>
          <Text className="2xl:text-fs50 3xl:mt-[237px] 3xl:text-fs60 font-bold font-playfairdisplay leading-lh lg:mt-[154px] lg:text-fs39 mt-[198px] mx-[auto] text-black_900 text-fs5052069854736328 text-left w-[40%] xl:mt-[176px] xl:text-fs44">{`One of your best product become more stand out`}</Text>
          <Text className="3xl:mt-[60px] 3xl:text-fs19 font-normal font-roboto lg:mt-[38px] lg:text-fs12 mt-[50px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[44px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt.`}</Text>
          <Text className="3xl:mt-[60px] 3xl:text-fs19 font-normal font-roboto lg:mt-[38px] lg:text-fs12 mt-[50px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[44px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Row className="3xl:mt-[60px] font-playfairdisplay justify-center lg:mt-[38px] mt-[50px] mx-[auto] w-[38%] xl:mt-[44px]">
            <Line className="2xl:h-[97px] 3xl:h-[116px] bg-amber_700 h-[96px] lg:h-[75px] w-[7px] xl:h-[86px]" />
            <Text className="2xl:text-fs21 3xl:mb-[7px] 3xl:ml-[66px] 3xl:text-fs25 font-bold lg:mb-[4px] lg:ml-[42px] lg:text-fs16 mb-[6px] ml-[55px] text-black_900 text-fs21327999114990234 text-left w-[92%] xl:mb-[5px] xl:ml-[48px] xl:text-fs18">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor exercitation incididunt aliquip. Nulla Lorem mollit cupidatat.`}</Text>
          </Row>
          <Text className="3xl:mt-[60px] 3xl:text-fs19 font-normal font-roboto lg:mt-[38px] lg:text-fs12 mt-[50px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[44px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. tate exercitation incididunt aliquip deserunt.`}</Text>
          <div className="2xl:h-[631px] 3xl:h-[757px] 3xl:mt-[60px] bg-gray_300 h-[630px] lg:h-[490px] lg:mt-[38px] mt-[50px] mx-[auto] w-[51%] xl:h-[561px] xl:mt-[44px]"></div>
          <Text className="3xl:mt-[60px] 3xl:text-fs19 font-normal font-roboto lg:mt-[38px] lg:text-fs12 mt-[50px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[44px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Volup Nulla Lorem mollit cupidatat irure.`}</Text>
          <Text className="3xl:mt-[60px] 3xl:text-fs19 font-normal font-roboto lg:mt-[38px] lg:text-fs12 mt-[50px] mx-[auto] text-fs16 text-gray_600 text-left xl:mt-[44px] xl:text-fs14">{`Source: www.ourblog.com/blog/`}</Text>
          <Line className="3xl:mt-[60px] bg-bluegray_101 h-[1px] lg:mt-[38px] mt-[50px] mx-[auto] w-[51%] xl:mt-[44px]" />
          <Row className="3xl:mt-[63px] font-roboto justify-start lg:mt-[41px] mt-[53px] mx-[auto] w-[51%] xl:mt-[47px]">
            <Text className="3xl:mb-[12px] 3xl:text-fs19 font-normal lg:mb-[7px] lg:text-fs12 mb-[10px] text-fs16 text-gray_600 text-left xl:mb-[8px] xl:text-fs14">{`Tags: SEO, Branding, Business`}</Text>
            <Text className="3xl:ml-[619px] 3xl:text-fs19 font-normal lg:ml-[401px] lg:text-fs12 ml-[516px] text-fs16 text-gray_600 text-left tracking-ls1 xl:ml-[459px] xl:text-fs14">{`Share:`}</Text>
            <Image
              src="img_frame128_3.svg"
              className="2xl:h-[26px] 3xl:h-[31px] 3xl:ml-[34px] h-[25px] lg:h-[20px] lg:ml-[22px] lg:my-[1px] ml-[29px] my-[2px] object-contain w-[17%] xl:h-[23px] xl:ml-[25px] xl:my-[1px]"
              alt="Frame128"
            />
          </Row>
          <Row className="3xl:mt-[118px] justify-center lg:mt-[77px] mt-[99px] self-stretch w-[100%] xl:mt-[88px]">
            <Image
              src="img_component3_7.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[31px] 3xl:ml-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[20px] lg:ml-[369px] lg:mt-[8px] lg:w-[38px] mb-[26px] ml-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[23px] xl:ml-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component3"
            />
            <Slider
              infinite
              mouseTracking
              disableButtonsControls
              responsive={{
                0: { items: 1 },
                568: { items: 1 },
                1024: { items: 1 },
              }}
              ref={ref}
              className="3xl:ml-[21px] lg:ml-[14px] ml-[18px] w-[43%] xl:ml-[16px]"
              items={[
                <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 font-bold font-playfairdisplay leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_600 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                  </Column>
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Column className="font-playfairdisplay self-stretch w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 font-bold leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                    </Column>
                    <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_600 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                  </Column>
                </Row>,

                <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 font-bold font-playfairdisplay leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_600 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                  </Column>
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Column className="font-playfairdisplay self-stretch w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 font-bold leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                    </Column>
                    <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_600 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                  </Column>
                </Row>,

                <Row className="3xl:gap-[353px] gap-[294px] grid grid-cols-2 items-center justify-between lg:gap-[228px] mx-[auto] self-stretch xl:gap-[261px]">
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Text className="2xl:text-fs21 3xl:text-fs25 font-bold font-playfairdisplay leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left w-[100%] xl:text-fs18">{`Be the best and beat you problem`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:mr-[7px] lg:mt-[9px] lg:text-fs12 mr-[10px] mt-[12px] text-fs16 text-gray_600 text-left xl:mr-[8px] xl:mt-[10px] xl:text-fs14">{`Prev`}</Text>
                  </Column>
                  <Column className="font-playfairdisplay justify-start w-[100%]">
                    <Column className="font-playfairdisplay self-stretch w-[100%]">
                      <Text className="2xl:text-fs21 3xl:text-fs25 font-bold leading-lh lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-right w-[100%] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
                    </Column>
                    <Text className="3xl:ml-[12px] 3xl:mt-[14px] 3xl:text-fs19 font-normal font-roboto lg:ml-[7px] lg:mt-[9px] lg:text-fs12 ml-[10px] mt-[12px] text-fs16 text-gray_600 text-right xl:ml-[8px] xl:mt-[10px] xl:text-fs14">{`Next`}</Text>
                  </Column>
                </Row>,
              ]}
            />
            <Image
              src="img_component4_7.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:mb-[31px] 3xl:ml-[21px] 3xl:mr-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:mb-[20px] lg:ml-[14px] lg:mr-[369px] lg:mt-[8px] lg:w-[38px] mb-[26px] ml-[18px] mr-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:mb-[23px] xl:ml-[16px] xl:mr-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component4"
            />
          </Row>
          <Text className="2xl:text-fs21 3xl:mt-[156px] 3xl:text-fs25 font-bold font-playfairdisplay lg:mt-[101px] lg:text-fs16 mt-[130px] mx-[auto] text-black_900 text-fs21327999114990234 text-left xl:mt-[115px] xl:text-fs18">{`Leave a Comment`}</Text>
          <Text className="3xl:mt-[45px] 3xl:text-fs19 font-normal font-roboto lg:mt-[29px] lg:text-fs12 mt-[38px] mx-[auto] text-fs16 text-gray_600 text-left w-[50%] xl:mt-[33px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Input
            className="2xl:pb-[27px] 3xl:mt-[120px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[77px] lg:pb-[21px] lg:text-fs12 mt-[100px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[88px] xl:pb-[24px] xl:text-fs14"
            name="Group131"
            placeholder={`Subject*`}
          ></Input>
          <Input
            className="2xl:pb-[27px] 3xl:mt-[72px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[21px] lg:text-fs12 mt-[60px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[53px] xl:pb-[24px] xl:text-fs14"
            name="Group132"
            placeholder={`Your Name*`}
          ></Input>
          <Input
            className="2xl:mt-[60px] 2xl:pb-[27px] 3xl:mt-[72px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[21px] lg:text-fs12 mt-[59.98999px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[53px] xl:pb-[24px] xl:text-fs14"
            name="Group133"
            placeholder={`Your Email*`}
          ></Input>
          <div className="3xl:mt-[72px] 3xl:mx-[12px] bg-transparent border-0 lg:mt-[46px] lg:mx-[7px] mt-[60px] mx-[10px] w-[51%] xl:mt-[53px] xl:mx-[8px] input-wrap">
            <Image
              src="img_griphorizontal_6.svg"
              className="absolute top-[1px] bottom-[36.375px] right-[4.380005px] bg-transparent border-0 lg:bottom-[28px] lg:right-[3px] xl:bottom-[32px] xl:right-[3px] 2xl:bottom-[36px] 2xl:right-[4px] 3xl:bottom-[43px] 3xl:right-[5px]"
              alt="grip-horizontal"
            />
            <TextArea
              className="2xl:pb-[36px] 2xl:pr-[45px] 3xl:pb-[43px] 3xl:pr-[54px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:pb-[28px] lg:pr-[35px] lg:text-fs12 pb-[36.375px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pr-[45.000005px] pt-[1px] text-fs16 text-gray_600 text-left w-[100%] xl:pb-[32px] xl:pr-[40px] xl:text-fs14"
              name="Group632"
              placeholder={`Enter Your Comment`}
            ></TextArea>
          </div>
        </Column>
        <Column className="3xl:mt-[118px] font-roboto items-end lg:mt-[77px] mt-[99px] self-stretch w-[100%] xl:mt-[88px]">
          <Button className="2xl:py-[19px] 3xl:mx-[570px] 3xl:px-[38px] 3xl:py-[23px] 3xl:text-fs19 bg-amber_700 border-bw font-normal lg:mx-[369px] lg:px-[24px] lg:py-[15px] lg:text-fs12 mx-[475px] px-[32px] py-[19.865px] rounded-radius2 text-black_900 text-center text-fs16 w-[11%] xl:mx-[422px] xl:px-[28px] xl:py-[17px] xl:text-fs14">{`Submit Your Message`}</Button>
        </Column>
        <Column className="2xl:mt-[250px] 3xl:mt-[300px] items-center lg:mt-[194px] mt-[250.02002px] self-stretch w-[100%] xl:mt-[222px]">
          <div className="self-stretch w-[100%]">
            <Column className="bg-gray_300 font-playfairdisplay items-center justify-end self-stretch w-[100%]">
              <Text className="2xl:text-fs67 3xl:mt-[180px] 3xl:text-fs80 font-bold leading-lh lg:mt-[116px] lg:text-fs52 mt-[150px] mx-[auto] text-amber_700 text-center text-fs673431625366211 w-[40%] xl:mt-[133px] xl:text-fs59">
                <span className="text-white_A700 text-fs673431625366211 font-playfairdisplay text-center font-bold lg:text-fs52 xl:text-fs59 2xl:text-fs67 3xl:text-fs80">
                  <>
                    {`Watch Our`}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-amber_700 text-fs673431625366211 font-playfairdisplay text-center font-bold lg:text-fs52 xl:text-fs59 2xl:text-fs67 3xl:text-fs80">
                  <>{`Lates Vlog and News`}</>
                </span>
              </Text>
              <Row className="3xl:gap-[36px] 3xl:mt-[120px] gap-[30px] grid grid-cols-3 items-center justify-evenly lg:gap-[23px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[88px]">
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_300 h-[370px] lg:h-[288px] w-[100%] xl:h-[330px]"></div>
              </Row>
              <Row className="3xl:gap-[36px] 3xl:mt-[38px] gap-[30px] grid grid-cols-3 items-center justify-evenly lg:gap-[23px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[28px]">
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-roboto items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[21%] xl:mr-[8px] xl:mt-[28px]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-center text-fs16 text-white_A700 xl:text-fs14">{`Read More`}</Text>
                        <Line className="3xl:mt-[16px] bg-white_A700 h-[1px] lg:mt-[10px] mr-[1px] mt-[14px] w-[99%] xl:mt-[12px]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-roboto items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[21%] xl:mr-[8px] xl:mt-[28px]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-center text-fs16 text-white_A700 xl:text-fs14">{`Read More`}</Text>
                        <Line className="3xl:mt-[16px] bg-white_A700 h-[1px] lg:mt-[10px] mr-[1px] mt-[14px] w-[99%] xl:mt-[12px]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[100%]">
                  <Text className="2xl:text-fs37 3xl:text-fs45 font-bold lg:text-fs29 self-stretch text-fs3789719009399414 text-left text-white_A700 xl:text-fs33">{`Our New Blog`}</Text>
                  <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Column className="font-roboto justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                      <Column className="3xl:mr-[12px] 3xl:mt-[38px] font-roboto items-center justify-start lg:mr-[7px] lg:mt-[24px] mr-[10px] mt-[32px] w-[21%] xl:mr-[8px] xl:mt-[28px]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 mx-[auto] self-stretch text-center text-fs16 text-white_A700 xl:text-fs14">{`Read More`}</Text>
                        <Line className="3xl:mt-[16px] bg-white_A700 h-[1px] lg:mt-[10px] mr-[1px] mt-[14px] w-[99%] xl:mt-[12px]" />
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:mt-[330px] justify-evenly lg:mt-[213px] mt-[275px] px-[0] self-stretch w-[100%] xl:mt-[244px]">
                <Column className="3xl:mb-[102px] font-playfairdisplay justify-start lg:mb-[66px] mb-[85px] w-[14%] xl:mb-[75px]">
                  <Text className="2xl:ml-[2px] 2xl:text-fs21 3xl:ml-[3px] 3xl:mr-[12px] 3xl:text-fs25 font-bold font-playfairdisplay lg:ml-[1px] lg:mr-[7px] lg:text-fs16 ml-[2.5px] mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:ml-[2px] xl:mr-[8px] xl:text-fs18">{`About Us`}</Text>
                  <Text className="2xl:ml-[2px] 3xl:ml-[3px] 3xl:mt-[33px] 3xl:text-fs19 font-normal font-roboto lg:ml-[1px] lg:mt-[21px] lg:text-fs12 ml-[2.5px] mt-[28px] text-fs16 text-left text-white_A700 w-[99%] xl:ml-[2px] xl:mt-[24px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Button className="2xl:py-[17px] 3xl:mr-[12px] 3xl:mt-[63px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-amber_700 border-bw font-normal font-roboto lg:mr-[7px] lg:mt-[41px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[53px] px-[32px] py-[17.375px] rounded-radius2 text-black_900 text-center text-fs16 w-[58%] xl:mr-[8px] xl:mt-[47px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Pick up order`}</Button>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[22%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="justify-between px-[0] self-stretch w-[100%]">
                      <Column className="3xl:mb-[34px] font-playfairdisplay justify-start lg:mb-[22px] mb-[29px] w-[62%] xl:mb-[25px]">
                        <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Contact Us`}</Text>
                        <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                          <Column className="font-roboto justify-start self-stretch w-[100%]">
                            <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                            <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`(671) 555-0110`}</Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="font-playfairdisplay justify-start w-[32%]">
                        <Text className="2xl:text-fs21 3xl:text-fs25 font-bold lg:text-fs16 self-stretch text-amber_700 text-fs21327999114990234 text-left xl:text-fs18">{`Userfull Links`}</Text>
                        <Column className="3xl:mr-[12px] 3xl:mt-[33px] justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[65%] xl:mr-[8px] xl:mt-[24px]">
                          <Column className="items-center self-stretch w-[100%]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_chevronright.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[2px] lg:text-fs12 ml-[15px] mr-[3px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[2px] xl:text-fs14">{`About Us`}</Text>
                            </Row>
                            <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                              <Image
                                src="img_chevronright.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`Our Team`}</Text>
                            </Row>
                          </Column>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_chevronright.svg"
                              className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                              alt="chevronright"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[22px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[14px] lg:text-fs12 ml-[15px] mr-[19px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[16px] xl:text-fs14">{`Gallery`}</Text>
                          </Row>
                          <Row className="3xl:mt-[12px] font-roboto items-center justify-start lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Image
                              src="img_chevronright.svg"
                              className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                              alt="chevronright"
                            />
                            <Text className="3xl:ml-[18px] 3xl:mr-[44px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:mr-[28px] lg:text-fs12 ml-[15px] mr-[37px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:mr-[32px] xl:text-fs14">{`Blog`}</Text>
                          </Row>
                          <Column className="3xl:mt-[12px] items-center lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:mt-[8px]">
                            <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_chevronright.svg"
                                className="2xl:h-[11px] 2xl:my-[4px] 3xl:h-[13px] 3xl:my-[5px] h-[10px] lg:h-[8px] lg:my-[3px] my-[4.5px] object-contain w-[7%] xl:h-[9px] xl:my-[4px]"
                                alt="chevronright"
                              />
                              <Text className="3xl:ml-[18px] 3xl:text-fs19 font-normal lg:ml-[11px] lg:text-fs12 ml-[15px] mr-[1px] text-fs16 text-left text-white_A700 xl:ml-[13px] xl:text-fs14">{`404 Page`}</Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:mt-[55px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:mt-[35px] lg:text-fs16 mr-[10px] mt-[46px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:mt-[40px] xl:text-fs18">{`Opening Hours`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[33px] font-roboto justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[62%] xl:mr-[8px] xl:mt-[24px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 xl:text-fs14">{`Mon - Sat 8:00 - 17:30,`}</Text>
                    <Text className="3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mt-[7px] lg:text-fs12 mt-[10px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[8px] xl:text-fs14">{`Sunday - CLOSED`}</Text>
                  </Column>
                </Column>
                <Column className="3xl:mb-[63px] font-playfairdisplay justify-start lg:mb-[41px] mb-[53px] w-[12%] xl:mb-[47px]">
                  <Text className="2xl:text-fs21 3xl:mr-[12px] 3xl:text-fs25 font-bold lg:mr-[7px] lg:text-fs16 mr-[10px] text-amber_700 text-fs21327999114990234 text-left xl:mr-[8px] xl:text-fs18">{`Keep Connect`}</Text>
                  <Column className="3xl:mt-[33px] items-center lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                    <div className="2xl:h-[233px] 3xl:h-[279px] 3xl:w-[278px] bg-gray_300 h-[232px] lg:h-[181px] lg:w-[180px] ml-[1px] rounded-radius20 w-[232px] xl:h-[207px] xl:w-[206px]"></div>
                  </Column>
                </Column>
              </Row>
              <Row className="3xl:mb-[103px] 3xl:mt-[156px] font-roboto items-center justify-evenly lg:mb-[66px] lg:mt-[101px] mb-[86px] mt-[130px] px-[0] self-stretch w-[100%] xl:mb-[76px] xl:mt-[115px]">
                <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Copyright © 2020. All right reserved`}</Text>
                <Row className="font-roboto items-center justify-between px-[0] w-[32%]">
                  <Text className="3xl:text-fs19 font-normal lg:my-[2px] lg:text-fs12 my-[3px] text-fs16 text-left text-white_A700 xl:my-[2px] xl:text-fs14">{`Mobile Apps:`}</Text>
                  <Image
                    src="img_rsssquare_7.svg"
                    className="2xl:h-[26px] 3xl:h-[31px] h-[25px] lg:h-[20px] object-contain w-[4%] xl:h-[23px]"
                    alt="rsssquare"
                  />
                  <Image
                    src="img_blog_7.svg"
                    className="2xl:h-[26px] 2xl:mr-[418px] 3xl:h-[31px] 3xl:mr-[502px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mr-[325px] lg:w-[19px] mr-[418.12px] object-contain w-[25px] xl:h-[23px] xl:mr-[371px] xl:w-[22px]"
                    alt="blog"
                  />
                </Row>
              </Row>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default BlogDetail7Page;
