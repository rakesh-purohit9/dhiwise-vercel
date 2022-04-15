import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Slider } from "components/Slider";
import { Grid } from "components/Grid";
import { List } from "components/List";
import { RatingBar } from "components/RatingBar";

const HomepageV1Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 font-poppins items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Stack className="2xl:h-[96px] 3xl:h-[115px] h-[95px] lg:h-[74px] self-stretch w-[100%] xl:h-[85px]">
          <Image
            src="img_background.svg"
            className="2xl:h-[96px] 3xl:h-[115px] absolute h-[95px] inset-[0] lg:h-[74px] object-cover self-stretch w-[100%] xl:h-[85px]"
            alt="background"
          />
          <Row className="absolute font-poppins h-[max-content] inset-[0] items-center justify-center m-[auto] w-[85%]">
            <Row className="3xl:mb-[15px] 3xl:mt-[13px] items-center justify-start lg:mb-[10px] lg:mt-[8px] mb-[13px] mt-[11px] w-[7%] xl:mb-[11px] xl:mt-[9px]">
              <Image
                src="img_group19.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:my-[7px] h-[24px] lg:h-[19px] lg:my-[4px] my-[6px] object-contain w-[35%] xl:h-[22px] xl:my-[5px]"
                alt="Group19"
              />
              <Text className="3xl:ml-[9px] 3xl:text-fs28 font-bold lg:ml-[6px] lg:text-fs18 ml-[8px] text-fs24 text-gray_800 text-left xl:ml-[7px] xl:text-fs21">{`Elliye`}</Text>
            </Row>
            <Row className="3xl:mb-[20px] 3xl:ml-[470px] 3xl:mt-[19px] items-center justify-center lg:mb-[13px] lg:ml-[304px] lg:mt-[12px] mb-[17px] ml-[392px] mt-[16px] w-[38%] xl:mb-[15px] xl:ml-[348px] xl:mt-[14px]">
              <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-gray_800 text-left xl:text-fs16">{`Categories`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-medium lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`New Arrival`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-medium lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`Features`}</Text>
              <Text className="3xl:ml-[96px] 3xl:text-fs21 font-medium lg:ml-[62px] lg:text-fs14 ml-[80px] text-fs18 text-gray_800 text-left xl:ml-[71px] xl:text-fs16">{`Collections`}</Text>
            </Row>
            <Image
              src="img_icon.svg"
              className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[310px] 3xl:my-[21px] h-[24px] lg:h-[19px] lg:ml-[201px] lg:my-[14px] ml-[259px] my-[18px] object-contain w-[5%] xl:h-[22px] xl:ml-[230px] xl:my-[16px]"
              alt="icon"
            />
            <Button className="2xl:px-[28px] 2xl:py-[18px] 3xl:ml-[69px] 3xl:px-[34px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-bold lg:ml-[45px] lg:px-[22px] lg:py-[14px] lg:text-fs14 ml-[58px] px-[28.5px] py-[18.045px] text-center text-fs18 text-white_A700 w-[7%] xl:ml-[51px] xl:px-[25px] xl:py-[16px] xl:text-fs16">{`Login`}</Button>
          </Row>
        </Stack>
      </div>
      <Stack className="2xl:h-[701px] 3xl:h-[841px] h-[700px] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
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
          className="absolute inset-[0] self-stretch w-[100%]"
          renderDotsItem={({ isActive }) => {
            if (isActive) {
              return (
                <div className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-gray_800 lg:mx-[3px] xl:mx-[3px] mx-[4px]" />
              );
            }
            return (
              <div
                className="inline-block m-[8px] rounded-radius50 w-[12px] h-[12px] bg-white_A700 lg:mx-[3px] xl:mx-[3px] mx-[4px]"
                role="button"
                tabIndex={0}
              />
            );
          }}
          items={[
            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,

            <Stack className="2xl:h-[701px] 3xl:h-[841px] bg-gray_100 h-[700px] lg:h-[545px] self-stretch xl:h-[623px]">
              <Stack className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] self-stretch w-[100%] xl:h-[623px]">
                <Image
                  src="img_banner.svg"
                  className="2xl:h-[701px] 3xl:h-[841px] absolute h-[700px] inset-[0] lg:h-[545px] object-cover self-stretch w-[100%] xl:h-[623px]"
                  alt="banner"
                />
                <Image
                  src="img_button.svg"
                  className="2xl:h-[49px] 3xl:h-[58px] 3xl:right-[172px] absolute bottom-[0] h-[48px] lg:h-[38px] lg:right-[112px] object-contain right-[144px] w-[8%] xl:h-[43px] xl:right-[128px]"
                  alt="button"
                />
              </Stack>
              <Column className="3xl:left-[172px] absolute font-playfairdisplay h-[max-content] inset-y-[0] justify-start left-[144px] lg:left-[112px] my-[auto] w-[34%] xl:left-[128px]">
                <Text className="3xl:text-fs115 font-normal font-playfairdisplay lg:text-fs74 self-stretch text-fs96 text-gray_800 text-left xl:text-fs85">{`Summer Sale`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs76 font-bold font-poppins lg:mr-[7px] lg:mt-[6px] lg:text-fs49 mr-[10px] mt-[8px] text-fs64 text-gray_800 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs56">{`50% Off`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[38px] 3xl:text-fs21 font-normal font-poppins leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[32px] text-fs18 text-gray_800 text-left w-[79%] xl:leading-lh28 xl:mr-[8px] xl:mt-[28px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[67px] bg-gray_800 font-poppins items-center justify-start lg:mr-[7px] lg:mt-[43px] mr-[10px] mt-[56px] w-[37%] xl:mr-[8px] xl:mt-[49px]">
                  <Text className="3xl:ml-[39px] 3xl:my-[14px] 3xl:text-fs28 font-medium lg:ml-[25px] lg:my-[9px] lg:text-fs18 ml-[33px] my-[12px] text-fs24 text-left text-white_A700 xl:ml-[29px] xl:my-[10px] xl:text-fs21">{`Shop Now`}</Text>
                  <Image
                    src="img_arrow.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[12px] 3xl:mr-[39px] 3xl:my-[7px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[7px] lg:mr-[25px] lg:my-[4px] lg:w-[37px] ml-[10px] mr-[33px] my-[6px] object-contain w-[48px] xl:h-[43px] xl:ml-[8px] xl:mr-[29px] xl:my-[5px] xl:w-[42px]"
                    alt="Arrow"
                  />
                </Row>
              </Column>
            </Stack>,
          ]}
        />
      </Stack>
      <Column className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] mx-[auto] w-[85%] xl:mt-[88px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="3xl:text-fs43 font-bold lg:text-fs28 text-fs36 text-gray_800 text-left xl:text-fs32">{`Categories`}</Text>
          <Row className="3xl:mb-[14px] 3xl:mt-[13px] font-poppins items-center justify-between lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[10px] xl:mt-[9px]">
            <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
            <Image
              src="img_arrow_1.svg"
              className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain w-[29%] xl:h-[28px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="3xl:mt-[38px] items-center justify-between lg:mt-[24px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[28px]">
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_sweater.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Sweater"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Jacket`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_tshirt.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Tshirt"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Shirt`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_pants.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Pants"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Pants`}</Text>
          </Column>
          <Column className="bg-gray_800 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_boot.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Boot"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-left text-white_A700 xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Shoes`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_dress.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Dress"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Dress`}</Text>
          </Column>
          <Column className="bg-gray_100 font-poppins items-center justify-center w-[15%]">
            <Image
              src="img_belt.svg"
              className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[43px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[28px] lg:w-[74px] mt-[36px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[32px] xl:w-[85px]"
              alt="Belt"
            />
            <Text className="3xl:mb-[55px] 3xl:mt-[9px] 3xl:text-fs21 font-normal lg:mb-[35px] lg:mt-[6px] lg:text-fs14 mb-[46px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[40px] xl:mt-[7px] xl:text-fs16">{`Accesories`}</Text>
          </Column>
        </Row>
      </Column>
      <Column className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
        <Row className="font-poppins items-center justify-between mx-[auto] px-[0] w-[85%]">
          <Text className="3xl:text-fs43 font-bold lg:text-fs28 text-fs36 text-gray_800 text-left xl:text-fs32">{`New Arrivals`}</Text>
          <Row className="3xl:mb-[14px] 3xl:mt-[13px] font-poppins items-center justify-between lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[10px] xl:mt-[9px]">
            <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
            <Image
              src="img_arrow_1.svg"
              className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain w-[29%] xl:h-[28px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Row className="3xl:gap-[38px] 3xl:mt-[38px] 3xl:px-[172px] gap-[32px] grid grid-cols-2 items-center justify-start lg:gap-[24px] lg:mt-[24px] lg:px-[112px] mt-[32px] px-[144px] self-stretch w-[100%] xl:gap-[28px] xl:mt-[28px] xl:px-[128px]">
          <Row className="bg-gray_100 items-center justify-center w-[100%]">
            <div className="2xl:h-[632px] 2xl:ml-[61px] 2xl:my-[28px] 3xl:h-[758px] 3xl:ml-[73px] 3xl:my-[34px] bg-bluegray_100 h-[631px] lg:h-[491px] lg:ml-[47px] lg:my-[22px] ml-[61.5px] my-[28.5px] w-[48%] xl:h-[562px] xl:ml-[54px] xl:my-[25px]"></div>
            <Column className="2xl:mr-[61px] 2xl:my-[266px] 3xl:ml-[57px] 3xl:mr-[73px] 3xl:my-[319px] font-poppins items-center justify-start lg:ml-[37px] lg:mr-[47px] lg:my-[207px] ml-[48px] mr-[61.5px] my-[266.5px] w-[31%] xl:ml-[42px] xl:mr-[54px] xl:my-[237px]">
              <Column className="items-center justify-start self-stretch w-[100%]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Purple Warm Jacket`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
              <Button className="2xl:py-[18px] 3xl:mt-[28px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-bold lg:mt-[18px] lg:px-[27px] lg:py-[14px] lg:text-fs14 mt-[24px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[82%] xl:mt-[21px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Add to Cart`}</Button>
            </Column>
          </Row>
          <Grid className="3xl:gap-[38px] gap-[32px] grid grid-cols-2 lg:gap-[24px] w-[100%] xl:gap-[28px]">
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <div className="2xl:h-[178px] 3xl:h-[213px] 3xl:mt-[38px] 3xl:w-[212px] bg-bluegray_100 h-[177px] lg:h-[138px] lg:mt-[24px] lg:w-[137px] mt-[32px] mx-[auto] w-[177px] xl:h-[158px] xl:mt-[28px] xl:w-[157px]"></div>
              <Text className="2xl:mx-[50px] 3xl:mt-[19px] 3xl:mx-[60px] 3xl:text-fs28 font-medium lg:mt-[12px] lg:mx-[39px] lg:text-fs18 mt-[16px] mx-[50.5px] text-fs24 text-gray_800 text-left xl:mt-[14px] xl:mx-[44px] xl:text-fs21">{`Blue Grey Warm Jacket`}</Text>
              <Text className="3xl:mb-[38px] 3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mb-[24px] lg:mt-[6px] lg:text-fs14 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[28px] xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <div className="2xl:h-[178px] 3xl:h-[213px] 3xl:mt-[38px] 3xl:w-[212px] bg-bluegray_100 h-[177px] lg:h-[138px] lg:mt-[24px] lg:w-[137px] mt-[32px] mx-[auto] w-[177px] xl:h-[158px] xl:mt-[28px] xl:w-[157px]"></div>
              <Text className="3xl:mt-[19px] 3xl:text-fs28 font-medium lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[14px] xl:text-fs21">{`Denim Jacket`}</Text>
              <Text className="3xl:mb-[38px] 3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mb-[24px] lg:mt-[6px] lg:text-fs14 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[28px] xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <div className="2xl:h-[178px] 3xl:h-[213px] 3xl:mt-[38px] 3xl:w-[212px] bg-bluegray_100 h-[177px] lg:h-[138px] lg:mt-[24px] lg:w-[137px] mt-[32px] mx-[auto] w-[177px] xl:h-[158px] xl:mt-[28px] xl:w-[157px]"></div>
              <Text className="3xl:mt-[19px] 3xl:text-fs28 font-medium lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[14px] xl:text-fs21">{`Black Jacket`}</Text>
              <Text className="3xl:mb-[38px] 3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mb-[24px] lg:mt-[6px] lg:text-fs14 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[28px] xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
            </Column>
            <Column className="bg-gray_100 font-poppins items-center justify-center w-[100%]">
              <div className="2xl:h-[178px] 3xl:h-[213px] 3xl:mt-[38px] 3xl:w-[212px] bg-bluegray_100 h-[177px] lg:h-[138px] lg:mt-[24px] lg:w-[137px] mt-[32px] mx-[auto] w-[177px] xl:h-[158px] xl:mt-[28px] xl:w-[157px]"></div>
              <Text className="3xl:mt-[19px] 3xl:text-fs28 font-medium lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[14px] xl:text-fs21">{`Green Polar Jacket`}</Text>
              <Text className="3xl:mb-[38px] 3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mb-[24px] lg:mt-[6px] lg:text-fs14 mb-[32px] mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mb-[28px] xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
            </Column>
          </Grid>
        </Row>
      </Column>
      <Column className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] mx-[auto] w-[85%] xl:mt-[88px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="3xl:text-fs43 font-bold lg:text-fs28 text-fs36 text-gray_800 text-left xl:text-fs32">{`Featured`}</Text>
          <Row className="3xl:mb-[14px] 3xl:mt-[13px] font-poppins items-center justify-between lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[10px] xl:mt-[9px]">
            <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
            <Image
              src="img_arrow_1.svg"
              className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain w-[29%] xl:h-[28px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <List
          className="3xl:mt-[38px] flex-wrap gap-[0] lg:mt-[24px] min-h-[auto] mt-[32px] self-stretch w-[100%] xl:mt-[28px]"
          orientation="vertical"
        >
          <Row className="3xl:my-[19px] items-center justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
            <Column className="border-2 border-gray_800 border-solid font-poppins items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[43px] 3xl:h-[301px] 3xl:mt-[52px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[33px] lg:w-[194px] mt-[43.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[38px] xl:w-[222px]"></div>
              <Text className="3xl:mt-[19px] 3xl:text-fs28 font-medium lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-fs24 text-gray_800 text-left xl:mt-[14px] xl:text-fs21">{`Black Briefcase`}</Text>
              <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              <Button className="2xl:mb-[43px] 2xl:py-[18px] 3xl:mb-[52px] 3xl:mt-[19px] 3xl:px-[42px] 3xl:py-[21px] 3xl:text-fs21 bg-gray_800 border-bw font-bold lg:mb-[33px] lg:mt-[12px] lg:px-[27px] lg:py-[14px] lg:text-fs14 mb-[43.5px] mt-[16px] mx-[auto] px-[35px] py-[18.045px] text-center text-fs18 text-white_A700 w-[52%] xl:mb-[38px] xl:mt-[14px] xl:px-[31px] xl:py-[16px] xl:text-fs16">{`Add to Cart`}</Button>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[29%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Pink Shirt`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[251px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81px] mt-[16px] mx-[auto] w-[38%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Gray T-shirt`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <div className="2xl:h-[251px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81px] mt-[16px] mx-[auto] w-[36%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Red Flannel`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="3xl:my-[19px] items-center justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[50%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Black Highheels`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[59%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Casual Grey Shoes`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[40%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Brown Shoes`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <div className="2xl:h-[251px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81px] mt-[16px] mx-[auto] w-[43%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Business Shirt`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
          <Row className="3xl:my-[19px] items-center justify-between lg:my-[12px] my-[16px] px-[0] self-stretch w-[100%] xl:my-[14px]">
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[55%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Grey Warm Pants`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center w-[24%]">
              <div className="2xl:h-[251px] 2xl:mt-[81px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81.5px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="2xl:mb-[81px] 3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81.5px] mt-[16px] mx-[auto] w-[60%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Green Sport Jacket`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mb-[1px] w-[24%]">
              <div className="2xl:h-[251px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81px] mt-[16px] mx-[auto] w-[64%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Purple Warm Jacket`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
            <Column className="items-center justify-center mt-[1px] w-[24%]">
              <div className="2xl:h-[251px] 3xl:h-[301px] 3xl:mt-[97px] 3xl:w-[300px] bg-bluegray_100 h-[250px] lg:h-[195px] lg:mt-[63px] lg:w-[194px] mt-[81px] mx-[auto] w-[250px] xl:h-[223px] xl:mt-[72px] xl:w-[222px]"></div>
              <Column className="3xl:mb-[97px] 3xl:mt-[19px] font-poppins items-center justify-start lg:mb-[63px] lg:mt-[12px] mb-[81px] mt-[16px] mx-[auto] w-[63%] xl:mb-[72px] xl:mt-[14px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Woman Denim Skirt`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs21 font-medium lg:mt-[6px] lg:text-fs14 mt-[8px] mx-[auto] text-fs18 text-gray_500 text-left xl:mt-[7px] xl:text-fs16">{`$299`}</Text>
              </Column>
            </Column>
          </Row>
        </List>
      </Column>
      <Stack className="2xl:h-[545px] 3xl:h-[654px] 3xl:mt-[88px] h-[544px] lg:h-[424px] lg:mt-[57px] mt-[74px] self-stretch w-[100%] xl:h-[484px] xl:mt-[65px]">
        <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
          <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
            <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
              <Column className="absolute bg-gray_800 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
                <Text className="3xl:mb-[392px] 3xl:mt-[54px] 3xl:mx-[172px] 3xl:text-fs43 font-bold lg:mb-[254px] lg:mt-[35px] lg:mx-[112px] lg:text-fs28 mb-[327px] mt-[45px] mx-[144px] text-fs36 text-left text-white_A700 xl:mb-[290px] xl:mt-[40px] xl:mx-[128px] xl:text-fs32">{`Summer Collections`}</Text>
              </Column>
              <Column className="3xl:left-[172px] absolute bg-bluegray_100 bottom-[0] font-poppins items-center justify-center left-[144px] lg:left-[112px] w-[27%] xl:left-[128px]">
                <Text className="3xl:mx-[70px] 3xl:my-[175px] 3xl:text-fs43 font-normal leading-lh lg:mx-[45px] lg:my-[113px] lg:text-fs28 mx-[59px] my-[146px] text-fs36 text-gray_800 text-left w-[36%] xl:mx-[52px] xl:my-[129px] xl:text-fs32">
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                    <>
                      {`Summer `}
                      <br />
                      {``}
                    </>
                  </span>
                  <span className="text-gray_800 text-fs36 font-poppins text-left font-bold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                    <>{`Collection`}</>
                  </span>
                </Text>
              </Column>
            </Stack>
            <Column className="absolute bg-bluegray_100 bottom-[0] font-poppins inset-x-[0] items-center justify-center mx-[auto] w-[27%]">
              <Text className="3xl:mx-[63px] 3xl:my-[175px] 3xl:text-fs43 font-normal leading-lh lg:mx-[41px] lg:my-[113px] lg:text-fs28 mx-[53px] my-[146px] text-fs36 text-left text-white_A700 w-[36%] xl:mx-[47px] xl:my-[129px] xl:text-fs32">
                <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>
                    {`Casual `}
                    <br />
                    {``}
                  </>
                </span>
                <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                  <>{`Collection`}</>
                </span>
              </Text>
            </Column>
          </Stack>
          <Column className="3xl:right-[171px] absolute bg-bluegray_100 bottom-[0] font-poppins items-center justify-center lg:right-[111px] right-[143px] w-[27%] xl:right-[127px]">
            <Text className="3xl:mx-[62px] 3xl:my-[175px] 3xl:text-fs43 font-normal leading-lh lg:mx-[40px] lg:my-[113px] lg:text-fs28 mx-[52px] my-[146px] text-fs36 text-left text-white_A700 w-[36%] xl:mx-[46px] xl:my-[129px] xl:text-fs32">
              <span className="text-white_A700 text-fs36 font-poppins text-left font-normal lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                <>
                  {`Big Vibe `}
                  <br />
                  {``}
                </>
              </span>
              <span className="text-white_A700 text-fs36 font-poppins text-left font-bold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
                <>{`Collection`}</>
              </span>
            </Text>
          </Column>
        </Stack>
        <Image
          src="img_next.svg"
          className="2xl:h-[61px] 3xl:bottom-[204px] 3xl:h-[73px] 3xl:right-[135px] 3xl:w-[72px] absolute bottom-[170px] h-[60px] lg:bottom-[132px] lg:h-[47px] lg:right-[87px] lg:w-[46px] object-contain right-[113px] w-[60px] xl:bottom-[151px] xl:h-[54px] xl:right-[100px] xl:w-[53px]"
          alt="next"
        />
      </Stack>
      <Column className="3xl:mt-[120px] items-center justify-start lg:mt-[77px] mt-[100px] mx-[auto] w-[85%] xl:mt-[88px]">
        <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
          <Text className="3xl:text-fs43 font-bold lg:text-fs28 text-fs36 text-gray_800 text-left xl:text-fs32">{`Popular This Week`}</Text>
          <Row className="3xl:mb-[14px] 3xl:mt-[13px] font-poppins items-center justify-between lg:mb-[9px] lg:mt-[8px] mb-[12px] mt-[11px] px-[0] w-[7%] xl:mb-[10px] xl:mt-[9px]">
            <Text className="3xl:text-fs21 font-medium lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-gray_800 text-left xl:my-[1px] xl:text-fs16">{`View all`}</Text>
            <Image
              src="img_arrow_1.svg"
              className="2xl:h-[32px] 3xl:h-[38px] h-[31px] lg:h-[25px] object-contain w-[29%] xl:h-[28px]"
              alt="Arrow"
            />
          </Row>
        </Row>
        <Grid className="3xl:gap-[38px] 3xl:mt-[38px] gap-[32px] grid grid-cols-3 lg:gap-[24px] lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:gap-[28px] xl:mt-[28px]">
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[45px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[29px] lg:my-[38px] ml-[16px] mr-[38px] my-[50px] w-[42%] xl:ml-[14px] xl:mr-[33px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Checkered Jacket`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_1.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[93px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[60px] lg:my-[38px] ml-[16px] mr-[78px] my-[50px] w-[34%] xl:ml-[14px] xl:mr-[69px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Elegant Jacket`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_2.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[21px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[14px] lg:my-[38px] ml-[16px] mr-[18px] my-[50px] w-[46%] xl:ml-[14px] xl:mr-[16px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Blue Woman Denim`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_3.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[104px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[67px] lg:my-[38px] ml-[16px] mr-[87px] my-[50px] w-[33%] xl:ml-[14px] xl:mr-[77px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Orange Jeans`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_4.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[126px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[81px] lg:my-[38px] ml-[16px] mr-[105px] my-[50px] w-[29%] xl:ml-[14px] xl:mr-[93px] xl:my-[44px]">
              <Column className="3xl:mr-[12px] font-poppins justify-start lg:mr-[7px] mr-[10px] w-[87%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Blue Jeans`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
              </Column>
              <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_5.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[127px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[82px] lg:my-[38px] ml-[16px] mr-[106px] my-[50px] w-[29%] xl:ml-[14px] xl:mr-[94px] xl:my-[44px]">
              <Column className="3xl:mr-[9px] font-poppins justify-start lg:mr-[6px] mr-[8px] w-[95%] xl:mr-[7px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Gray Watch`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
              </Column>
              <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-start w-[100%]">
            <Image
              src="img_maskgroup_6.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[40px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[26px] lg:my-[38px] ml-[16px] mr-[34px] my-[50px] w-[43%] xl:ml-[14px] xl:mr-[30px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Black Sport Jacket`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_7.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[126px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[81px] lg:my-[38px] ml-[16px] mr-[105px] my-[50px] w-[29%] xl:ml-[14px] xl:mr-[93px] xl:my-[44px]">
              <Column className="3xl:mr-[12px] font-poppins justify-start lg:mr-[7px] mr-[10px] w-[90%] xl:mr-[8px]">
                <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Wristwatch`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
              </Column>
              <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <RatingBar
                  className="mx-[auto] self-stretch"
                  selectedStarCount={4}
                  starCount={5}
                  color="var(--gray_100)"
                  activeColor="var(--yellow_400)"
                  size={((window.innerWidth - 15) * 24) / 1440}
                ></RatingBar>
              </Column>
            </Column>
          </Row>
          <Row className="items-center justify-center w-[100%]">
            <Image
              src="img_maskgroup_8.svg"
              className="2xl:h-[176px] 2xl:my-[22px] 3xl:h-[211px] 3xl:ml-[28px] 3xl:my-[27px] h-[175px] lg:h-[137px] lg:ml-[18px] lg:my-[17px] ml-[24px] my-[22.5px] object-contain w-[43%] xl:h-[156px] xl:ml-[21px] xl:my-[20px]"
              alt="MaskGroup"
            />
            <Column className="3xl:ml-[19px] 3xl:mr-[102px] 3xl:my-[60px] justify-start lg:ml-[12px] lg:mr-[66px] lg:my-[38px] ml-[16px] mr-[85px] my-[50px] w-[33%] xl:ml-[14px] xl:mr-[75px] xl:my-[44px]">
              <Column className="items-center self-stretch w-[100%]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs28 font-medium lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Classic Watch`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs28 font-medium lg:mr-[7px] lg:mt-[6px] lg:text-fs18 mr-[10px] mt-[8px] text-fs24 text-gray_500 text-left xl:mr-[8px] xl:mt-[7px] xl:text-fs21">{`$299`}</Text>
                </Column>
              </Column>
              <RatingBar
                className="3xl:mr-[12px] 3xl:mt-[19px] lg:mr-[7px] lg:mt-[12px] mr-[10px] mt-[16px] xl:mr-[8px] xl:mt-[14px]"
                selectedStarCount={4}
                starCount={5}
                color="var(--gray_100)"
                activeColor="var(--yellow_400)"
                size={((window.innerWidth - 15) * 24) / 1440}
              ></RatingBar>
            </Column>
          </Row>
        </Grid>
      </Column>
      <Column className="3xl:mt-[120px] justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
        <Text className="3xl:mx-[172px] 3xl:text-fs43 font-bold lg:mx-[112px] lg:text-fs28 mx-[144px] text-fs36 text-gray_800 text-left xl:mx-[128px] xl:text-fs32">{`Why Choose Us`}</Text>
        <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
          <Column className="bg-gray_100 items-center justify-start self-stretch w-[100%]">
            <List
              className="3xl:gap-[38px] flex-wrap gap-[32px] grid grid-cols-4 lg:gap-[24px] min-h-[auto] mx-[auto] w-[85%] xl:gap-[28px]"
              orientation="horizontal"
            >
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_1.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[75px] 3xl:w-[144px] h-[120px] lg:h-[94px] lg:mt-[49px] lg:w-[93px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[107px] xl:mt-[56px] xl:w-[106px]"
                  alt="icon"
                />
                <Column className="3xl:mb-[75px] 3xl:mt-[38px] font-poppins justify-start lg:mb-[49px] lg:mt-[24px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[56px] xl:mt-[28px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="2xl:mx-[25px] 3xl:mx-[30px] 3xl:text-fs28 font-bold lg:mx-[19px] lg:text-fs18 mx-[25.5px] text-fs24 text-gray_800 text-left xl:mx-[22px] xl:text-fs21">{`Free Delivery`}</Text>
                  </Column>
                  <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal leading-lh lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[14px] xl:text-fs16">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_2.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[75px] 3xl:w-[144px] h-[120px] lg:h-[94px] lg:mt-[49px] lg:w-[93px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[107px] xl:mt-[56px] xl:w-[106px]"
                  alt="icon"
                />
                <Column className="3xl:mb-[75px] 3xl:mt-[38px] font-poppins justify-start lg:mb-[49px] lg:mt-[24px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[56px] xl:mt-[28px]">
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Payment Method`}</Text>
                  <Column className="3xl:mt-[19px] font-poppins items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                    <Text className="3xl:text-fs21 font-normal leading-lh lg:text-fs14 text-center text-fs18 text-gray_500 w-[100%] xl:text-fs16">
                      {
                        <>
                          {`This free shipping`}
                          <br />
                          {`only for selected region`}
                        </>
                      }
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_3.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[75px] 3xl:w-[144px] h-[120px] lg:h-[94px] lg:mt-[49px] lg:w-[93px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[107px] xl:mt-[56px] xl:w-[106px]"
                  alt="icon"
                />
                <Column className="3xl:mb-[75px] 3xl:mt-[38px] font-poppins items-center justify-start lg:mb-[49px] lg:mt-[24px] mb-[63px] mt-[32px] mx-[auto] w-[55%] xl:mb-[56px] xl:mt-[28px]">
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 mx-[auto] text-fs24 text-gray_800 text-left xl:text-fs21">{`Warranty`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal leading-lh lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-center text-fs18 text-gray_500 w-[100%] xl:mt-[14px] xl:text-fs16">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
              <Column className="items-center justify-center w-[100%]">
                <Image
                  src="img_icon_4.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[75px] 3xl:w-[144px] h-[120px] lg:h-[94px] lg:mt-[49px] lg:w-[93px] mt-[63px] mx-[auto] object-contain w-[120px] xl:h-[107px] xl:mt-[56px] xl:w-[106px]"
                  alt="icon"
                />
                <Column className="3xl:mb-[75px] 3xl:mt-[38px] font-poppins justify-start lg:mb-[49px] lg:mt-[24px] mb-[63px] mt-[32px] mx-[auto] w-[59%] xl:mb-[56px] xl:mt-[28px]">
                  <Column className="self-stretch w-[100%]">
                    <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-gray_800 text-left xl:text-fs21">{`Customer Support`}</Text>
                  </Column>
                  <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal leading-lh lg:mt-[12px] lg:text-fs14 mt-[16px] mx-[auto] text-center text-fs18 text-gray_500 w-[93%] xl:mt-[14px] xl:text-fs16">
                    {
                      <>
                        {`This free shipping`}
                        <br />
                        {`only for selected region`}
                      </>
                    }
                  </Text>
                </Column>
              </Column>
            </List>
          </Column>
        </Column>
      </Column>
      <Image
        src="img_brand.svg"
        className="2xl:h-[69px] 3xl:h-[82px] 3xl:mt-[120px] h-[68.29px] lg:h-[54px] lg:mt-[77px] mt-[100px] mx-[auto] object-contain w-[50%] xl:h-[61px] xl:mt-[88px]"
        alt="brand"
      />
      <div className="3xl:mt-[120px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
        <Column className="bg-gray_800 font-poppins items-center justify-end self-stretch w-[100%]">
          <Row className="3xl:mt-[76px] justify-evenly lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
            <Column className="3xl:mb-[31px] font-poppins justify-start lg:mb-[20px] mb-[26px] w-[22%] xl:mb-[23px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Join our Newsletter`}</Text>
              <Text className="3xl:mt-[28px] 3xl:text-fs21 font-normal leading-lh lg:mt-[18px] lg:text-fs14 mt-[24px] self-stretch text-fs18 text-left text-white_A700 w-[100%] xl:mt-[21px] xl:text-fs16">
                {
                  <>
                    {`Drop your email below to get update about us, `}
                    <br />
                    {`lastest news, tips, and more!`}
                  </>
                }
              </Text>
              <div className="3xl:mr-[12px] 3xl:mt-[42px] bg-transparent border-bw lg:mr-[7px] lg:mt-[27px] mr-[10px] mt-[35px] w-[91%] xl:mr-[8px] xl:mt-[31px] input-wrap">
                <Image
                  src="img_arrow_2.svg"
                  className="absolute top-[17.545px] bottom-[18.545px] right-[16px] border-bw bg-transparent lg:top-[13px] lg:bottom-[14px] lg:right-[12px] xl:top-[15px] xl:bottom-[16px] xl:right-[14px] 2xl:top-[17px] 2xl:bottom-[18px] 3xl:top-[21px] 3xl:bottom-[22px] 3xl:right-[19px]"
                  alt="Arrow"
                />
                <Button className="2xl:pb-[18px] 2xl:pt-[17px] 3xl:pb-[22px] 3xl:pl-[28px] 3xl:pr-[69px] 3xl:pt-[21px] 3xl:text-fs21 bg-white_A700 border-bw font-normal lg:pb-[14px] lg:pl-[18px] lg:pr-[45px] lg:pt-[13px] lg:text-fs14 pb-[18.545px] pl-[24px] pr-[58px] pt-[17.545px] text-fs18 text-gray_500_87 text-left tracking-ls1 w-[100%] xl:pb-[16px] xl:pl-[21px] xl:pr-[51px] xl:pt-[15px] xl:text-fs16">{`Enter your email`}</Button>
              </div>
            </Column>
            <Column className="3xl:mb-[22px] font-poppins justify-start lg:mb-[14px] mb-[19px] w-[9%] xl:mb-[16px]">
              <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`Product Links`}</Text>
              <Column className="3xl:mr-[12px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[61%] xl:mr-[8px] xl:mt-[21px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 mr-[1px] text-fs18 text-left text-white_A700 xl:text-fs16">{`Categories`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mt-[12px] lg:text-fs14 mt-[16px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[14px] xl:text-fs16">{`New Arrival`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs14 mr-[10px] mt-[16px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs16">{`Features`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs21 font-normal lg:mt-[12px] lg:text-fs14 mr-[1px] mt-[16px] text-fs18 text-left text-white_A700 xl:mt-[14px] xl:text-fs16">{`Collections`}</Text>
              </Column>
            </Column>
            <Column className="font-poppins justify-start w-[6%]">
              <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`Company`}</Text>
              <Column className="3xl:mr-[12px] 3xl:mt-[28px] font-poppins justify-start lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] w-[61%] xl:mr-[8px] xl:mt-[21px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:text-fs16">{`About`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Blog`}</Text>
                <Text className="3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[2px] lg:mt-[7px] lg:text-fs14 mr-[3px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[2px] xl:mt-[8px] xl:text-fs16">{`Careers`}</Text>
                <Text className="3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mt-[7px] lg:text-fs14 mr-[1px] mt-[10px] text-fs18 text-left text-white_A700 xl:mt-[8px] xl:text-fs16">{`Contact`}</Text>
                <Text className="3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[8px] xl:text-fs16">{`Services`}</Text>
              </Column>
            </Column>
            <Column className="3xl:mb-[44px] font-poppins justify-start lg:mb-[28px] mb-[37px] w-[8%] xl:mb-[32px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Support`}</Text>
              <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                <Column className="font-poppins justify-start self-stretch w-[100%]">
                  <Text className="3xl:mr-[10px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:text-fs14 mr-[9px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:text-fs16">{`Support Center`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`FAQ`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs14 mr-[10px] mt-[10px] text-fs18 text-left text-white_A700 xl:mr-[8px] xl:mt-[8px] xl:text-fs16">{`Privacy Policy`}</Text>
                  <Text className="3xl:mt-[12px] 3xl:text-fs21 font-normal lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-fs18 text-left text-white_A700 xl:mt-[8px] xl:text-fs16">{`Terms of service`}</Text>
                </Column>
              </Column>
            </Column>
            <Column className="3xl:mb-[181px] font-poppins justify-start lg:mb-[117px] mb-[151px] w-[8%] xl:mb-[134px]">
              <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 xl:text-fs21">{`Get In Touch`}</Text>
              <Image
                src="img_sosmedia.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[12px] 3xl:mt-[28px] h-[24px] lg:h-[19px] lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] object-contain w-[78%] xl:h-[22px] xl:mr-[8px] xl:mt-[21px]"
                alt="sosmedia"
              />
            </Column>
          </Row>
          <Text className="3xl:mb-[38px] 3xl:mt-[97px] 3xl:text-fs16 font-normal lg:mb-[24px] lg:mt-[63px] lg:text-fs10 mb-[32px] mt-[81px] mx-[auto] text-fs14 text-left text-white_A700 xl:mb-[28px] xl:mt-[72px] xl:text-fs12">{`Copyright © 2021 Elliye. All Right Reseved`}</Text>
        </Column>
      </div>
    </Column>
  );
};

export default HomepageV1Page;
