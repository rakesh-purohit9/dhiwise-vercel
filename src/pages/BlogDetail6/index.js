import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const BlogDetail6Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="font-raleway items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Row className="font-raleway justify-end self-stretch w-[100%]">
              <Row className="3xl:mb-[33px] 3xl:ml-[76px] 3xl:mt-[21px] items-center justify-center lg:mb-[21px] lg:ml-[49px] lg:mt-[14px] mb-[28px] ml-[64px] mt-[18px] w-[13%] xl:mb-[24px] xl:ml-[56px] xl:mt-[16px]">
                <Image
                  src="img_archive.svg"
                  className="2xl:h-[51px] 3xl:h-[61px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:w-[38px] object-contain w-[50px] xl:h-[45px] xl:w-[44px]"
                  alt="archive"
                />
                <Text className="2xl:text-fs28 3xl:ml-[19px] 3xl:mr-[18px] 3xl:text-fs34 font-extrabold lg:ml-[12px] lg:mr-[11px] lg:text-fs22 ml-[16px] mr-[15px] text-fs28432889938354492 text-gray_910 text-left uppercase xl:ml-[14px] xl:mr-[13px] xl:text-fs25">{`Logo Here`}</Text>
              </Row>
              <Row className="2xl:ml-[258px] 2xl:my-[2px] 3xl:ml-[310px] 3xl:my-[3px] items-center justify-center lg:ml-[201px] lg:my-[1px] ml-[258.44px] my-[2.5px] w-[41%] xl:ml-[229px] xl:my-[2px]">
                <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-gray_910 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Home`}</Text>
                <Row className="3xl:ml-[74px] font-raleway items-center justify-center lg:ml-[48px] ml-[62px] w-[40%] xl:ml-[55px]">
                  <Text className="3xl:my-[38px] 3xl:text-fs19 font-bold lg:my-[24px] lg:text-fs12 my-[32px] text-center text-fs16 text-gray_910 uppercase xl:my-[28px] xl:text-fs14">{`About`}</Text>
                  <Row className="3xl:ml-[67px] items-center justify-center lg:ml-[43px] ml-[56px] w-[32%] xl:ml-[49px]">
                    <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-gray_910 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Project`}</Text>
                    <Image
                      src="img_chevrondown_17.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[13%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
                      alt="chevrondown"
                    />
                  </Row>
                  <Text className="3xl:ml-[67px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[43px] lg:my-[24px] lg:text-fs12 ml-[56px] my-[32px] text-center text-fs16 text-gray_910 uppercase xl:ml-[49px] xl:my-[28px] xl:text-fs14">{`Price`}</Text>
                </Row>
                <Row className="2xl:ml-[62px] 3xl:ml-[74px] 3xl:mr-[7px] 3xl:my-[38px] font-raleway items-center justify-between lg:ml-[48px] lg:mr-[4px] lg:my-[24px] ml-[62.00006px] mr-[6px] my-[32px] px-[0] w-[37%] xl:ml-[55px] xl:mr-[5px] xl:my-[28px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-gray_910 uppercase xl:text-fs14">{`Team`}</Text>
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-gray_910 uppercase xl:text-fs14">{`Contact`}</Text>
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-gray_910 uppercase xl:text-fs14">{`Blog`}</Text>
                </Row>
              </Row>
              <Button className="2xl:ml-[345px] 2xl:py-[21px] 3xl:mb-[18px] 3xl:ml-[414px] 3xl:mr-[68px] 3xl:mt-[26px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold lg:mb-[11px] lg:ml-[268px] lg:mr-[44px] lg:mt-[17px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mb-[15px] ml-[345.43994px] mr-[57px] mt-[22px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[9%] xl:mb-[13px] xl:ml-[307px] xl:mr-[50px] xl:mt-[19px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Order Now`}</Button>
            </Row>
          </div>
          <Text className="2xl:text-fs50 3xl:mt-[272px] 3xl:text-fs60 font-extrabold font-raleway leading-lh lg:mt-[176px] lg:text-fs39 mt-[227px] mx-[auto] text-black_900 text-fs5052069854736328 text-left uppercase w-[40%] xl:mt-[201px] xl:text-fs44">{`One of your best product become more stand out`}</Text>
          <Text className="3xl:mt-[57px] 3xl:text-fs19 font-normal font-roboto lg:mt-[37px] lg:text-fs12 mt-[48px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[42px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-roboto lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Row className="3xl:mt-[78px] font-raleway items-center justify-center lg:mt-[50px] mt-[65px] self-stretch w-[100%] xl:mt-[57px]">
            <Line className="2xl:h-[97px] 3xl:h-[116px] 3xl:ml-[713px] bg-pink_800 h-[96px] lg:h-[75px] lg:ml-[462px] ml-[594px] w-[7px] xl:h-[86px] xl:ml-[528px]" />
            <Text className="2xl:text-fs21 3xl:ml-[66px] 3xl:mr-[713px] 3xl:text-fs25 font-extrabold lg:ml-[42px] lg:mr-[462px] lg:text-fs16 ml-[55px] mr-[594px] text-black_900 text-fs21327999114990234 text-left uppercase w-[35%] xl:ml-[48px] xl:mr-[528px] xl:text-fs18">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor exercitation incididunt aliquip. Nulla Lorem mollit cupidatat.`}</Text>
          </Row>
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-roboto lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Image
            src="img_rectangle66.png"
            className="2xl:h-[631px] 3xl:h-[757px] 3xl:mt-[78px] h-[630px] lg:h-[490px] lg:mt-[50px] mt-[65px] mx-[auto] object-contain w-[51%] xl:h-[561px] xl:mt-[57px]"
            alt="Rectangle66"
          />
          <Text className="3xl:mt-[78px] 3xl:text-fs19 font-normal font-roboto lg:mt-[50px] lg:text-fs12 mt-[65px] mx-[auto] text-fs16 text-gray_600 text-left w-[40%] xl:mt-[57px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Text className="3xl:mt-[78px] 3xl:text-fs24 font-manrope font-normal lg:mt-[50px] lg:text-fs15 mt-[65px] mx-[auto] text-fs20 text-gray_600 text-left tracking-ls1 xl:mt-[57px] xl:text-fs17">{`Source: www.ourblog.com/blog/`}</Text>
          <Line className="3xl:mt-[78px] bg-bluegray_101 h-[1px] lg:mt-[50px] mt-[65px] mx-[auto] w-[51%] xl:mt-[57px]" />
          <Row className="3xl:mt-[58px] font-manrope justify-start lg:mt-[38px] mt-[49px] mx-[auto] w-[51%] xl:mt-[43px]">
            <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Tags: SEO, Branding, Business`}</Text>
            <Text className="3xl:ml-[572px] 3xl:text-fs21 font-normal lg:ml-[371px] lg:text-fs14 ml-[477px] text-fs18 text-gray_600 text-left tracking-ls1 xl:ml-[424px] xl:text-fs16">{`Share:`}</Text>
            <Image
              src="img_group128_3.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[20px] 3xl:mt-[7px] h-[24px] lg:h-[19px] lg:mb-[1px] lg:ml-[13px] lg:mt-[4px] mb-[2px] ml-[17px] mt-[6px] object-contain w-[16%] xl:h-[22px] xl:mb-[1px] xl:ml-[15px] xl:mt-[5px]"
              alt="Group128"
            />
          </Row>
          <Row className="3xl:mt-[120px] font-raleway justify-center lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
            <Image
              src="img_component3_6.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:ml-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:ml-[369px] lg:mt-[8px] lg:w-[38px] ml-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:ml-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component3"
            />
            <Text className="2xl:text-fs21 3xl:mb-[13px] 3xl:ml-[21px] 3xl:text-fs25 font-extrabold leading-lh lg:mb-[8px] lg:ml-[14px] lg:text-fs16 mb-[11px] ml-[18px] text-black_900 text-fs21327999114990234 text-left uppercase w-[14%] xl:mb-[9px] xl:ml-[16px] xl:text-fs18">{`Be the best and beat you problem`}</Text>
            <Text className="2xl:text-fs21 3xl:mb-[13px] 3xl:ml-[353px] 3xl:text-fs25 font-extrabold leading-lh lg:mb-[8px] lg:ml-[228px] lg:text-fs16 mb-[11px] ml-[294px] text-black_900 text-fs21327999114990234 text-right uppercase w-[14%] xl:mb-[9px] xl:ml-[261px] xl:text-fs18">{`Level up your skill to achieve your goals`}</Text>
            <Image
              src="img_component4_6.svg"
              className="2xl:h-[51px] 3xl:h-[61px] 3xl:ml-[21px] 3xl:mr-[570px] 3xl:mt-[13px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:ml-[14px] lg:mr-[369px] lg:mt-[8px] lg:w-[38px] ml-[18px] mr-[475px] mt-[11px] object-contain w-[50px] xl:h-[45px] xl:ml-[16px] xl:mr-[422px] xl:mt-[9px] xl:w-[44px]"
              alt="Component4"
            />
          </Row>
          <Row className="font-roboto items-center justify-between mt-[1px] px-[0] self-stretch w-[100%]">
            <Text className="3xl:ml-[651px] 3xl:text-fs19 font-normal lg:ml-[422px] lg:text-fs12 ml-[543px] text-fs16 text-gray_600 text-left xl:ml-[483px] xl:text-fs14">{`Prev`}</Text>
            <Text className="3xl:mr-[651px] 3xl:text-fs19 font-normal lg:mr-[422px] lg:text-fs12 mr-[543px] text-fs16 text-gray_600 text-right xl:mr-[483px] xl:text-fs14">{`Next`}</Text>
          </Row>
          <Text className="2xl:text-fs21 3xl:mt-[163px] 3xl:text-fs25 font-bold font-raleway lg:mt-[105px] lg:text-fs16 mt-[136px] mx-[auto] text-black_900 text-fs21327999114990234 text-left uppercase xl:mt-[120px] xl:text-fs18">{`Leave a Comment`}</Text>
          <Text className="3xl:mt-[49px] 3xl:text-fs19 font-normal font-roboto lg:mt-[31px] lg:text-fs12 mt-[41px] mx-[auto] text-fs16 text-gray_600 text-left w-[50%] xl:mt-[36px] xl:text-fs14">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
          <Input
            className="2xl:pb-[27px] 3xl:mt-[120px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[77px] lg:pb-[21px] lg:text-fs12 mt-[100px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[88px] xl:pb-[24px] xl:text-fs14"
            name="Group131"
            placeholder={`Subject*`}
          ></Input>
          <Input
            className="2xl:mt-[60px] 2xl:pb-[27px] 3xl:mt-[72px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[21px] lg:text-fs12 mt-[59.98999px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[53px] xl:pb-[24px] xl:text-fs14"
            name="Group132"
            placeholder={`Your Name*`}
          ></Input>
          <Input
            className="2xl:pb-[27px] 3xl:mt-[72px] 3xl:pb-[33px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:mt-[46px] lg:pb-[21px] lg:text-fs12 mt-[60px] mx-[auto] pb-[27.595px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pt-[1px] text-fs16 text-gray_600 text-left w-[51%] xl:mt-[53px] xl:pb-[24px] xl:text-fs14"
            name="Group133"
            placeholder={`Your Email*`}
          ></Input>
          <div className="2xl:mt-[60px] 3xl:mt-[72px] 3xl:mx-[12px] bg-transparent border-0 lg:mt-[46px] lg:mx-[7px] mt-[59.98999px] mx-[10px] w-[51%] xl:mt-[53px] xl:mx-[8px] input-wrap">
            <Image
              src="img_grid_grid_3.svg"
              className="absolute top-[1px] bottom-[36.375px] right-[0] bg-transparent border-0 lg:bottom-[28px] xl:bottom-[32px] 2xl:bottom-[36px] 3xl:bottom-[43px]"
              alt="grid / grid"
            />
            <TextArea
              className="2xl:pb-[36px] 3xl:pb-[43px] 3xl:pr-[60px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-bluegray_101 border-solid font-normal font-roboto lg:pb-[28px] lg:pr-[38px] lg:text-fs12 pb-[36.375px] pl-[0] placeholder:bg-transparent placeholder:text-gray_600 pr-[50px] pt-[1px] text-fs16 text-gray_600 text-left w-[100%] xl:pb-[32px] xl:pr-[44px] xl:text-fs14"
              name="Group134"
              placeholder={`Enter Your Comment`}
            ></TextArea>
          </div>
        </Column>
        <Column className="3xl:mt-[120px] font-roboto items-end lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Button className="2xl:py-[17px] 3xl:mx-[539px] 3xl:px-[38px] 3xl:py-[20px] 3xl:text-fs19 bg-pink_800 border-bw font-bold lg:mx-[349px] lg:px-[24px] lg:py-[13px] lg:text-fs12 mx-[449px] px-[32px] py-[17.375px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[13%] xl:mx-[399px] xl:px-[28px] xl:py-[15px] xl:text-fs14">{`Submit Your Message`}</Button>
        </Column>
        <Column className="3xl:mt-[300px] items-center lg:mt-[194px] mt-[250px] self-stretch w-[100%] xl:mt-[222px]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <div className="2xl:h-[21px] 3xl:h-[25px] bg-orange_600 h-[20px] lg:h-[16px] self-stretch w-[100%] xl:h-[18px]"></div>
              <Column className="bg-gray_910 font-raleway items-center justify-end self-stretch w-[100%]">
                <Row className="3xl:mt-[165px] font-raleway items-center justify-evenly lg:mt-[107px] mt-[138px] px-[0] self-stretch w-[100%] xl:mt-[122px]">
                  <Image
                    src="img_windmilltwo.svg"
                    className="2xl:h-[61px] 3xl:h-[73px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:w-[46px] object-contain w-[60px] xl:h-[54px] xl:w-[53px]"
                    alt="windmilltwo"
                  />
                  <Text className="2xl:text-fs28 3xl:text-fs34 font-extrabold leading-lh lg:text-fs22 text-fs28432889938354492 text-left text-white_A700 uppercase w-[8%] xl:text-fs25">{`Logo Here`}</Text>
                  <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Head Office`}</Text>
                  <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Usefull Link`}</Text>
                  <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Opening Hour`}</Text>
                </Row>
                <Row className="3xl:mt-[19px] justify-evenly lg:mt-[12px] mt-[16px] px-[0] self-stretch w-[100%] xl:mt-[14px]">
                  <Column className="font-raleway justify-start w-[30%]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-roboto justify-between px-[0] self-stretch w-[100%]">
                        <Text className="3xl:mb-[32px] 3xl:ml-[6px] 3xl:text-fs19 font-normal lg:mb-[21px] lg:ml-[3px] lg:text-fs12 mb-[27px] ml-[5px] text-fs16 text-gray_102 text-left w-[47%] xl:mb-[24px] xl:ml-[4px] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
                        <Column className="font-roboto justify-start mr-[1px] w-[47%]">
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                          <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`(671) 555-0110`}</Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="3xl:mt-[6px] font-raleway lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Button className="2xl:py-[21px] 3xl:mr-[12px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold lg:mr-[7px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mr-[10px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[29%] xl:mr-[8px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`order Now`}</Button>
                    </Column>
                    <Text className="2xl:text-fs21 3xl:ml-[12px] 3xl:mt-[39px] 3xl:text-fs25 font-extrabold font-raleway lg:ml-[7px] lg:mt-[25px] lg:text-fs16 ml-[10px] mt-[33px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:ml-[8px] xl:mt-[29px] xl:text-fs18">{`Second Office`}</Text>
                    <Text className="3xl:ml-[363px] 3xl:mt-[36px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:mt-[23px] lg:text-fs12 ml-[303px] mr-[1px] mt-[30px] text-fs16 text-gray_102 text-left w-[47%] xl:ml-[269px] xl:mt-[26px] xl:text-fs14">{`2118 Thornridge Cir. Syracuse, Connecticut 35624`}</Text>
                    <Text className="3xl:ml-[363px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:text-fs12 ml-[303px] mr-[1px] text-fs16 text-gray_102 text-left xl:ml-[269px] xl:text-fs14">{`tim.jennings@example.com`}</Text>
                    <Text className="3xl:ml-[363px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:text-fs12 ml-[303px] mr-[1px] text-fs16 text-gray_102 text-left xl:ml-[269px] xl:text-fs14">{`(704) 555-0127`}</Text>
                  </Column>
                  <Column className="3xl:mb-[259px] justify-start lg:mb-[168px] mb-[216px] w-[8%] xl:mb-[192px]">
                    <Row className="font-raleway items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_chevronright_8.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[48px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[31px] lg:text-fs12 ml-[15px] mr-[40px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[35px] xl:text-fs14">{`About Us`}</Text>
                    </Row>
                    <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_8.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[45px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[29px] lg:text-fs12 ml-[15px] mr-[38px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[33px] xl:text-fs14">{`Our Team`}</Text>
                    </Row>
                    <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Row className="font-raleway items-center justify-start self-stretch w-[100%]">
                        <Image
                          src="img_chevronright_8.svg"
                          className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:text-fs14">{`Pricing Plans`}</Text>
                      </Row>
                    </Column>
                    <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_8.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[92px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[59px] lg:text-fs12 ml-[15px] mr-[77px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[68px] xl:text-fs14">{`Blog`}</Text>
                    </Row>
                    <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_8.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[57px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[37px] lg:text-fs12 ml-[15px] mr-[48px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[42px] xl:text-fs14">{`404 Page`}</Text>
                    </Row>
                  </Column>
                  <Column className="3xl:mb-[380px] font-roboto justify-start lg:mb-[246px] mb-[317px] w-[14%] xl:mb-[281px]">
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`Mon - Sat : 8:00 - 17:00`}</Text>
                    <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`Sun : Closed`}</Text>
                  </Column>
                </Row>
                <Button className="2xl:py-[41px] 3xl:mt-[102px] 3xl:px-[42px] 3xl:py-[49px] 3xl:text-fs21 bg-black_903 border-bw font-manrope font-normal lg:mt-[66px] lg:px-[27px] lg:py-[32px] lg:text-fs14 mt-[85px] px-[35px] py-[41.2px] self-stretch text-center text-fs18 text-white_A700 tracking-ls1 w-[100%] xl:mt-[75px] xl:px-[31px] xl:py-[36px] xl:text-fs16">{`Copyright © 2020. All right reserved`}</Button>
              </Column>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default BlogDetail6Page;
