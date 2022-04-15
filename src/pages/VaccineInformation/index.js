import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Radio } from "components/Radio";
import { Input } from "components/Input";

const VaccineInformationPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
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
              <Row className="3xl:ml-[48px] items-center justify-center lg:ml-[31px] ml-[40px] w-[10%] xl:ml-[35px]">
                <Text className="3xl:text-fs19 capitalize font-bold lg:text-fs12 text-bluegray_902 text-fs16 text-left xl:text-fs14">{`Pages`}</Text>
                <Image
                  src="img_arrowchevrond.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[3px] lg:my-[3px] lg:w-[18px] ml-[4px] my-[4px] object-contain w-[24px] xl:h-[22px] xl:ml-[3px] xl:my-[3px] xl:w-[21px]"
                  alt="ArrowChevronD"
                />
              </Row>
              <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:mb-[2px] lg:ml-[31px] lg:mt-[1px] lg:text-fs12 mb-[3px] ml-[40px] mt-[2px] text-bluegray_401 text-fs16 text-left xl:mb-[2px] xl:ml-[35px] xl:mt-[1px] xl:text-fs14">{`Contact Us`}</Text>
            </Row>
            <Button className="3xl:mb-[28px] 3xl:ml-[189px] 3xl:mt-[38px] 3xl:px-[38px] 3xl:py-[19px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold lg:mb-[18px] lg:ml-[122px] lg:mt-[24px] lg:px-[24px] lg:py-[12px] lg:text-fs12 mb-[24px] ml-[158px] mt-[32px] px-[32px] py-[16px] rounded-radius8 text-center text-fs16 text-white_A700 w-[11%] xl:mb-[21px] xl:ml-[140px] xl:mt-[28px] xl:px-[28px] xl:py-[14px] xl:text-fs14">{`Help Center`}</Button>
            <Image
              src="img_call_2.svg"
              className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[45px] 3xl:ml-[19px] 3xl:mt-[60px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[29px] lg:ml-[12px] lg:mt-[38px] lg:w-[12px] mb-[38px] ml-[16px] mt-[50px] object-contain w-[16px] xl:h-[15px] xl:mb-[33px] xl:ml-[14px] xl:mt-[44px] xl:w-[14px]"
              alt="Call"
            />
            <Text className="3xl:mb-[36px] 3xl:ml-[9px] 3xl:mr-[122px] 3xl:mt-[50px] 3xl:text-fs19 font-medium lg:mb-[23px] lg:ml-[6px] lg:mr-[79px] lg:mt-[32px] lg:text-fs12 mb-[30px] ml-[8px] mr-[102px] mt-[42px] text-fs16 text-left text-orange_A700 xl:mb-[26px] xl:ml-[7px] xl:mr-[90px] xl:mt-[37px] xl:text-fs14">{`+1234 5678 90`}</Text>
          </Row>
        </div>
        <Text className="3xl:mt-[115px] 3xl:text-fs76 capitalize font-bold lg:mt-[74px] lg:text-fs49 mt-[96px] mx-[auto] text-bluegray_902 text-fs64 text-left xl:mt-[85px] xl:text-fs56">{`Vaccine Information`}</Text>
        <Row className="3xl:mb-[105px] 3xl:mt-[19px] font-inter items-center justify-center lg:mb-[68px] lg:mt-[12px] mb-[88px] mt-[16px] mx-[auto] w-[9%] xl:mb-[78px] xl:mt-[14px]">
          <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Home`}</Text>
          <Image
            src="img_arrowchevronr.svg"
            className="2xl:h-[17px] 3xl:h-[20px] 3xl:my-[9px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[3px] lg:my-[6px] lg:w-[12px] ml-[4px] my-[8px] object-contain w-[16px] xl:h-[15px] xl:ml-[3px] xl:my-[7px] xl:w-[14px]"
            alt="ArrowChevronR"
          />
          <Text className="3xl:text-fs19 capitalize font-bold lg:ml-[3px] lg:text-fs12 ml-[4px] text-bluegray_902 text-center text-fs16 xl:ml-[3px] xl:text-fs14">{`Vaccine`}</Text>
        </Row>
      </Column>
      <Row className="3xl:mt-[115px] items-center justify-start lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:mt-[85px]">
        <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[124px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[80px] ml-[104px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[92px]"></div>
        <Column className="3xl:ml-[67px] 3xl:mr-[124px] 3xl:my-[85px] font-montserrat justify-start lg:ml-[43px] lg:mr-[80px] lg:my-[55px] ml-[56px] mr-[104px] my-[71px] w-[39%] xl:ml-[49px] xl:mr-[92px] xl:my-[63px]">
          <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 self-stretch text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`Why we have to get Covid-19 Vaccine?`}</Text>
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident`}</Text>
          <Button className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:px-[38px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold font-inter lg:mr-[7px] lg:mt-[31px] lg:px-[24px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[40px] px-[32px] py-[20px] rounded-radius8 text-center text-fs16 text-white_A700 w-[45%] xl:mr-[8px] xl:mt-[35px] xl:px-[28px] xl:py-[17px] xl:text-fs14">{`Check Vaccine Location`}</Button>
        </Column>
      </Row>
      <Row className="3xl:mt-[192px] font-montserrat items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Column className="3xl:ml-[124px] justify-start lg:ml-[80px] lg:my-[1px] ml-[104px] my-[2px] w-[39%] xl:ml-[92px] xl:my-[1px]">
          <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 self-stretch text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`Preparing for Your COVID-19 Vaccine`}</Text>
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
          <Radio
            className="3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs19 font-bold font-montserrat lg:mr-[7px] lg:mt-[24px] lg:text-fs12 mr-[10px] mt-[32px] text-bluegray_902 text-fs16 text-left w-[60%] xl:mr-[8px] xl:mt-[28px] xl:text-fs14"
            inputClassName="bg-deep_orange_100 mr-[5px]"
            name="Group143"
            checked={false}
            label={`Pfizer-BioNTech COVID-19 Vaccine`}
            value={`Pfizer-BioNTech COVID-19 Vaccine`}
          ></Radio>
          <Radio
            className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-montserrat lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_902 text-fs16 text-left w-[49%] xl:mr-[8px] xl:mt-[21px] xl:text-fs14"
            inputClassName="bg-deep_orange_100 mr-[5px]"
            name="Group144"
            checked={false}
            label={`Moderna COVID-19 Vaccine`}
            value={`Moderna COVID-19 Vaccine`}
          ></Radio>
          <Radio
            className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-montserrat lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_902 text-fs16 text-left w-[94%] xl:mr-[8px] xl:mt-[21px] xl:text-fs14"
            inputClassName="bg-deep_orange_100 mr-[5px]"
            name="Group145"
            checked={false}
            label={`Johnson & Johnson’s Janssen COVID-19 Vaccine`}
            value={`Johnson & Johnson’s Janssen COVID-19 Vaccine`}
          ></Radio>
          <Radio
            className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-montserrat lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_902 text-fs16 text-left w-[94%] xl:mr-[8px] xl:mt-[21px] xl:text-fs14"
            inputClassName="bg-deep_orange_100 mr-[5px]"
            name="Group146"
            checked={false}
            label={`Novavax COVID-19 Vaccine`}
            value={`Novavax COVID-19 Vaccine`}
          ></Radio>
          <Radio
            className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-bold font-montserrat lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-bluegray_902 text-fs16 text-left w-[94%] xl:mr-[8px] xl:mt-[21px] xl:text-fs14"
            inputClassName="bg-deep_orange_100 mr-[5px]"
            name="Group147"
            checked={false}
            label={`Sinopharm COVID-19 Vaccine`}
            value={`Sinopharm COVID-19 Vaccine`}
          ></Radio>
        </Column>
        <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[67px] 3xl:mr-[124px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[43px] lg:mr-[80px] ml-[56px] mr-[104px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[49px] xl:mr-[92px]"></div>
      </Row>
      <Column className="3xl:mt-[192px] justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
        <Column className="font-montserrat items-end self-stretch w-[100%]">
          <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:mx-[249px] 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:mx-[161px] lg:text-fs37 mx-[208px] text-bluegray_902 text-center text-fs48 w-[66%] xl:leading-lh56 xl:mx-[185px] xl:text-fs42">{`Plan and Prepare for Your COVID-19 Vaccination`}</Text>
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[19px] 3xl:mx-[389px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[12px] lg:mx-[252px] lg:text-fs12 mt-[16px] mx-[324px] text-bluegray_401 text-center text-fs16 w-[49%] xl:leading-lh24 xl:mt-[14px] xl:mx-[288px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`}</Text>
        </Column>
        <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
          <Row className="items-center justify-start self-stretch w-[100%]">
            <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[123px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[80px] ml-[103px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[91px]"></div>
            <Column className="3xl:ml-[67px] 3xl:mr-[129px] 3xl:my-[136px] font-montserrat justify-start lg:ml-[43px] lg:mr-[84px] lg:my-[88px] ml-[56px] mr-[108px] my-[114px] w-[39%] xl:ml-[49px] xl:mr-[96px] xl:my-[101px]">
              <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 self-stretch text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`1. Find out how to get a COVID-19 vaccine`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
          </Row>
          <Row className="3xl:mt-[192px] font-montserrat items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
            <Column className="3xl:ml-[124px] 3xl:my-[98px] justify-start lg:ml-[80px] lg:my-[63px] ml-[104px] my-[82px] w-[39%] xl:ml-[92px] xl:my-[72px]">
              <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`2. Get vaccinated regardless of whether you already had COVID-19.`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
            <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[67px] 3xl:mr-[124px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[43px] lg:mr-[80px] ml-[56px] mr-[104px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[49px] xl:mr-[92px]"></div>
          </Row>
          <Row className="3xl:mt-[192px] items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
            <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[123px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[80px] ml-[103px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[91px]"></div>
            <Column className="3xl:ml-[67px] 3xl:mr-[124px] 3xl:my-[136px] font-montserrat justify-start lg:ml-[43px] lg:mr-[80px] lg:my-[88px] ml-[56px] mr-[104px] my-[114px] w-[40%] xl:ml-[49px] xl:mr-[92px] xl:my-[101px]">
              <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 self-stretch text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`3. Get the COVID-19 vaccine without any conditions`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mr-[2px] lg:mt-[18px] lg:text-fs12 mr-[3px] mt-[24px] text-bluegray_401 text-fs16 text-left w-[99%] xl:leading-lh24 xl:mr-[2px] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
          </Row>
          <Row className="3xl:mt-[192px] font-montserrat items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
            <Column className="3xl:ml-[124px] 3xl:my-[136px] justify-start lg:ml-[80px] lg:my-[88px] ml-[104px] my-[114px] w-[39%] xl:ml-[92px] xl:my-[101px]">
              <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`4. Learn more  screenings and COVID-19 vaccination`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
            <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[67px] 3xl:mr-[124px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[43px] lg:mr-[80px] ml-[56px] mr-[104px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[49px] xl:mr-[92px]"></div>
          </Row>
          <Row className="3xl:mt-[192px] items-center justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
            <div className="2xl:h-[553px] 3xl:h-[663px] 3xl:ml-[124px] bg-gray_302 h-[552px] lg:h-[430px] lg:ml-[80px] ml-[104px] rounded-radius16 w-[42%] xl:h-[492px] xl:ml-[92px]"></div>
            <Column className="3xl:ml-[67px] 3xl:mr-[124px] 3xl:my-[136px] font-montserrat justify-start lg:ml-[43px] lg:mr-[80px] lg:my-[88px] ml-[56px] mr-[104px] my-[114px] w-[39%] xl:ml-[49px] xl:mr-[92px] xl:my-[101px]">
              <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 capitalize font-bold font-montserrat leading-lh6398 lg:leading-lh49 lg:text-fs37 self-stretch text-bluegray_902 text-fs48 text-left w-[100%] xl:leading-lh56 xl:text-fs42">{`5. You will get two doses of Covid 19 vaccine`}</Text>
              <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-inter font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </Column>
          </Row>
        </Column>
      </Column>
      <Row className="3xl:mt-[192px] bg-teal_400 font-montserrat items-center justify-between lg:mt-[124px] mt-[160px] px-[0] self-stretch w-[100%] xl:mt-[142px]">
        <Text className="2xl:leading-lh88 3xl:leading-lh105 3xl:ml-[124px] 3xl:my-[256px] 3xl:text-fs76 capitalize font-bold leading-lh8800 lg:leading-lh68 lg:ml-[80px] lg:my-[166px] lg:text-fs49 ml-[104px] my-[214px] text-fs64 text-left text-white_A700 w-[42%] xl:leading-lh78 xl:ml-[92px] xl:my-[190px] xl:text-fs56">
          {
            <>
              {`Get Vaccine Information `}
              <br />
              {`in Your Location`}
            </>
          }
        </Text>
        <Column className="3xl:mr-[124px] 3xl:my-[76px] font-inter justify-start lg:mr-[80px] lg:my-[49px] mr-[104px] my-[64px] w-[32%] xl:mr-[92px] xl:my-[56px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Country`}</Text>
          <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
            <Image
              src="img_arrow_chevron_down.svg"
              className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[16px] xl:right-[14px] xl:inset-y-[19px] 2xl:inset-y-[21px] 3xl:right-[19px] 3xl:inset-y-[25px] inset-y-[21.5px]"
              alt="Arrow Chevron Down"
            />
            <Button className="2xl:py-[21px] 3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[12px] lg:pr-[38px] lg:py-[16px] lg:text-fs12 pl-[16px] pr-[50px] py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[19px] xl:text-fs14">{`Select your country`}</Button>
          </div>
          <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`State/Province`}</Text>
          <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
            <Image
              src="img_arrow_chevron_down.svg"
              className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[16px] xl:right-[14px] xl:inset-y-[19px] 2xl:inset-y-[21px] 3xl:right-[19px] 3xl:inset-y-[25px] inset-y-[21.5px]"
              alt="Arrow Chevron Down"
            />
            <Button className="2xl:py-[21px] 3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[12px] lg:pr-[38px] lg:py-[16px] lg:text-fs12 pl-[16px] pr-[50px] py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[19px] xl:text-fs14">{`Select your state`}</Button>
          </div>
          <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`City`}</Text>
          <div className="3xl:mt-[9px] bg-transparent border-bw lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px] input-wrap">
            <Image
              src="img_arrow_chevron_down.svg"
              className="absolute right-[16px] border-bw bg-transparent lg:right-[12px] lg:inset-y-[16px] xl:right-[14px] xl:inset-y-[19px] 2xl:inset-y-[21px] 3xl:right-[19px] 3xl:inset-y-[25px] inset-y-[21.5px]"
              alt="Arrow Chevron Down"
            />
            <Button className="2xl:py-[21px] 3xl:pl-[19px] 3xl:pr-[60px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[12px] lg:pr-[38px] lg:py-[16px] lg:text-fs12 pl-[16px] pr-[50px] py-[21.5px] rounded-radius8 text-bluegray_401 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[44px] xl:py-[19px] xl:text-fs14">{`Select your city`}</Button>
          </div>
          <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 capitalize font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Postal Code`}</Text>
          <Input
            className="2xl:py-[21px] 3xl:mt-[9px] 3xl:pl-[19px] 3xl:py-[25px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:mt-[6px] lg:pl-[12px] lg:py-[16px] lg:text-fs12 mt-[8px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_401 py-[21.5px] rounded-radius8 self-stretch text-bluegray_401 text-fs16 text-left w-[100%] xl:mt-[7px] xl:pl-[14px] xl:py-[19px] xl:text-fs14"
            name="Form"
            placeholder={`Add your postal code`}
          ></Input>
          <Button className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:px-[38px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_A700 border-bw capitalize font-bold lg:mr-[7px] lg:mt-[31px] lg:px-[24px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[40px] px-[32px] py-[20px] rounded-radius8 text-center text-fs16 text-white_A700 w-[42%] xl:mr-[8px] xl:mt-[35px] xl:px-[28px] xl:py-[17px] xl:text-fs14">{`Search Location`}</Button>
        </Column>
      </Row>
      <div className="3xl:mt-[268px] lg:mt-[174px] mt-[224px] self-stretch w-[100%] xl:mt-[199px]">
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
  );
};

export default VaccineInformationPage;
