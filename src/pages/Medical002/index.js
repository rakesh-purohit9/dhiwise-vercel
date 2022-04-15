import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Stack } from "components/Stack";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const Medical002Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <div className="self-stretch w-[100%]">
        <Row className="bg-white_A700 font-spacegrotesk items-center justify-start self-stretch w-[100%]">
          <Row className="3xl:ml-[60px] 3xl:my-[31px] items-center justify-start lg:ml-[38px] lg:my-[20px] ml-[50px] my-[26px] w-[28%] xl:ml-[44px] xl:my-[23px]">
            <Text className="3xl:text-fs19 font-semibold lg:text-fs12 text-fs16 text-indigo_902 text-left xl:text-fs14">{`Shop Products`}</Text>
            <Text className="3xl:ml-[33px] 3xl:text-fs19 font-semibold lg:ml-[21px] lg:text-fs12 ml-[28px] text-fs16 text-indigo_902 text-left xl:ml-[24px] xl:text-fs14">{`Who We Are`}</Text>
            <Text className="3xl:ml-[34px] 3xl:text-fs19 font-semibold lg:ml-[22px] lg:text-fs12 ml-[29px] text-fs16 text-indigo_902 text-left xl:ml-[25px] xl:text-fs14">{`FAQ’s`}</Text>
            <Text className="3xl:ml-[36px] 3xl:text-fs19 font-semibold lg:ml-[23px] lg:text-fs12 ml-[30px] text-fs16 text-indigo_902 text-left xl:ml-[26px] xl:text-fs14">{`Our Study`}</Text>
          </Row>
          <Image
            src="img_shape.svg"
            className="2xl:h-[17px] 2xl:mb-[32px] 3xl:h-[20px] 3xl:mb-[39px] 3xl:ml-[253px] 3xl:mt-[37px] h-[16.05px] lg:h-[13px] lg:mb-[25px] lg:ml-[164px] lg:mt-[24px] mb-[32.95px] ml-[211px] mt-[31px] object-contain w-[1%] xl:h-[15px] xl:mb-[29px] xl:ml-[187px] xl:mt-[27px]"
            alt="Shape"
          />
          <Text className="2xl:ml-[12px] 3xl:mb-[31px] 3xl:ml-[14px] 3xl:mt-[32px] 3xl:text-fs24 font-bold lg:mb-[20px] lg:ml-[9px] lg:mt-[21px] lg:text-fs15 mb-[26px] ml-[12.280029px] mt-[27px] text-fs20 text-indigo_902 text-left xl:mb-[23px] xl:ml-[10px] xl:mt-[24px] xl:text-fs17">{`Your Logo`}</Text>
          <Image
            src="img_badgesiconpri.svg"
            className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[543px] 3xl:my-[24px] 3xl:w-[48px] h-[40px] lg:h-[32px] lg:ml-[352px] lg:my-[15px] lg:w-[31px] ml-[453px] my-[20px] object-contain w-[40px] xl:h-[36px] xl:ml-[402px] xl:my-[17px] xl:w-[35px]"
            alt="BadgesIconPri"
          />
          <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[24px] 3xl:mr-[60px] 3xl:my-[24px] font-manrope h-[40px] lg:h-[32px] lg:ml-[15px] lg:mr-[38px] lg:my-[15px] ml-[20px] mr-[50px] my-[20px] w-[7%] xl:h-[36px] xl:ml-[17px] xl:mr-[44px] xl:my-[17px]">
            <Image
              src="img_background_9.svg"
              className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
              alt="Background"
            />
            <Text className="3xl:text-fs16 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:text-fs12">{`Sign In`}</Text>
          </Stack>
        </Row>
      </div>
      <Stack className="2xl:h-[500px] 3xl:h-[600px] h-[499px] lg:h-[389px] mx-[auto] w-[93%] xl:h-[444px]">
        <Image
          src="img_hero.svg"
          className="2xl:h-[500px] 3xl:h-[600px] absolute h-[499px] inset-[0] lg:h-[389px] object-cover self-stretch w-[100%] xl:h-[444px]"
          alt="Hero"
        />
        <Column className="3xl:left-[120px] absolute font-spacegrotesk h-[max-content] inset-y-[0] justify-start left-[100px] lg:left-[77px] my-[auto] w-[54%] xl:left-[88px]">
          <Text className="2xl:leading-lh92 3xl:leading-lh110 3xl:text-fs96 font-semibold font-spacegrotesk leading-lh9200 lg:leading-lh71 lg:text-fs62 self-stretch text-fs80 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh81 xl:text-fs71">
            {
              <>
                {`The future`}
                <br />
                {`of Health is Clear —`}
              </>
            }
          </Text>
          <Button className="3xl:mr-[12px] 3xl:mt-[51px] 3xl:px-[33px] 3xl:py-[22px] 3xl:text-fs19 bg-indigo_902 border-bw font-bold font-manrope lg:mr-[7px] lg:mt-[33px] lg:px-[21px] lg:py-[14px] lg:text-fs12 mr-[10px] mt-[43px] px-[28px] py-[19px] rounded-radius28 text-center text-fs16 text-white_A700 w-[26%] xl:mr-[8px] xl:mt-[38px] xl:px-[24px] xl:py-[16px] xl:text-fs14">{`Shop all products`}</Button>
        </Column>
      </Stack>
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <List
            className="3xl:gap-[32px] 3xl:my-[120px] flex-wrap gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:my-[77px] min-h-[auto] mx-[auto] my-[100px] w-[79%] xl:gap-[24px] xl:my-[88px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-spacegrotesk justify-start shadow-bs13 w-[100%]">
              <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                <Image
                  src="img_insertyourima.svg"
                  className="2xl:h-[209px] 3xl:h-[250px] h-[208px] lg:h-[162px] mx-[auto] object-contain w-[85%] xl:h-[186px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mt-[24px] 3xl:mx-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mt-[15px] lg:mx-[15px] lg:text-fs15 mt-[20px] mx-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mt-[17px] xl:mx-[17px] xl:text-fs17">{`Shop Multivitamins`}</Text>
              <Text className="3xl:mb-[24px] 3xl:mx-[24px] 3xl:text-fs19 font-inter font-normal lg:mb-[15px] lg:mt-[1px] lg:mx-[15px] lg:text-fs12 mb-[20px] mt-[2px] mx-[20px] text-fs16 text-indigo_902 text-left xl:mb-[17px] xl:mt-[1px] xl:mx-[17px] xl:text-fs14">{`Lorem ipsum is special text`}</Text>
            </Column>
            <Column className="bg-gray_50 font-spacegrotesk justify-start w-[100%]">
              <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                <Image
                  src="img_insertyourima_1.svg"
                  className="2xl:h-[209px] 3xl:h-[250px] h-[208px] lg:h-[162px] mx-[auto] object-contain w-[85%] xl:h-[186px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mt-[24px] 3xl:mx-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mt-[15px] lg:mx-[15px] lg:text-fs15 mt-[20px] mx-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mt-[17px] xl:mx-[17px] xl:text-fs17">{`Shop Protein`}</Text>
              <Text className="3xl:mb-[24px] 3xl:mx-[24px] 3xl:text-fs19 font-inter font-normal lg:mb-[15px] lg:mt-[1px] lg:mx-[15px] lg:text-fs12 mb-[20px] mt-[2px] mx-[20px] text-bluegray_402 text-fs16 text-left xl:mb-[17px] xl:mt-[1px] xl:mx-[17px] xl:text-fs14">{`Lorem ipsum is special text`}</Text>
            </Column>
            <Column className="bg-gray_50 font-spacegrotesk justify-start w-[100%]">
              <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                <Image
                  src="img_insertyourima_2.svg"
                  className="2xl:h-[209px] 3xl:h-[250px] h-[208px] lg:h-[162px] mx-[auto] object-contain w-[85%] xl:h-[186px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mt-[24px] 3xl:mx-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mt-[15px] lg:mx-[15px] lg:text-fs15 mt-[20px] mx-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mt-[17px] xl:mx-[17px] xl:text-fs17">{`Shop Pregnancy`}</Text>
              <Text className="3xl:mb-[24px] 3xl:mx-[24px] 3xl:text-fs19 font-inter font-normal lg:mb-[15px] lg:mt-[1px] lg:mx-[15px] lg:text-fs12 mb-[20px] mt-[2px] mx-[20px] text-bluegray_402 text-fs16 text-left xl:mb-[17px] xl:mt-[1px] xl:mx-[17px] xl:text-fs14">{`Lorem ipsum is special text`}</Text>
            </Column>
            <Column className="bg-gray_50 font-spacegrotesk justify-start w-[100%]">
              <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                <Image
                  src="img_insertyourima_3.svg"
                  className="2xl:h-[209px] 3xl:h-[250px] h-[208px] lg:h-[162px] mx-[auto] object-contain w-[85%] xl:h-[186px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mt-[24px] 3xl:mx-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mt-[15px] lg:mx-[15px] lg:text-fs15 mt-[20px] mx-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mt-[17px] xl:mx-[17px] xl:text-fs17">{`Shop Skincare`}</Text>
              <Text className="3xl:mb-[24px] 3xl:mx-[24px] 3xl:text-fs19 font-inter font-normal lg:mb-[15px] lg:mt-[1px] lg:mx-[15px] lg:text-fs12 mb-[20px] mt-[2px] mx-[20px] text-bluegray_402 text-fs16 text-left xl:mb-[17px] xl:mt-[1px] xl:mx-[17px] xl:text-fs14">{`Lorem ipsum is special text`}</Text>
            </Column>
          </List>
        </Column>
        <Column className="bg-white_A700 font-spacegrotesk items-center justify-start self-stretch w-[100%]">
          <Line className="bg-bluegray_103 h-[1px] mx-[auto] w-[79%]" />
          <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mt-[118px] 3xl:text-fs50 font-semibold leading-lh5400 lg:leading-lh42 lg:mt-[77px] lg:text-fs32 mt-[99px] mx-[auto] text-center text-fs42 text-indigo_902 tracking-ls1 w-[50%] xl:leading-lh48 xl:mt-[88px] xl:text-fs37">
            {
              <>
                {`Daily essentials with good intentions`}
                <br />
                {`— for living life or creating it.`}
              </>
            }
          </Text>
          <Row className="3xl:gap-[30px] 3xl:mb-[120px] 3xl:mt-[43px] 3xl:px-[180px] gap-[25px] grid grid-cols-5 items-center justify-start lg:gap-[19px] lg:mb-[77px] lg:mt-[28px] lg:px-[116px] mb-[100px] mt-[36px] px-[150px] self-stretch w-[100%] xl:gap-[22px] xl:mb-[88px] xl:mt-[32px] xl:px-[133px]">
            <Column className="bg-white_A700 font-spacegrotesk items-center justify-start w-[100%]">
              <Image
                src="img_icon_13.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[28px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[18px] lg:w-[56px] mt-[24px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[21px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mb-[27px] 3xl:mt-[24px] 3xl:text-fs21 font-semibold lg:mb-[17px] lg:mt-[15px] lg:text-fs14 mb-[23px] mt-[20px] mx-[auto] text-center text-fs18 text-indigo_902 tracking-ls1 xl:mb-[20px] xl:mt-[17px] xl:text-fs16">{`Online Best Seller`}</Text>
            </Column>
            <Column className="bg-white_A700 font-spacegrotesk items-center justify-center w-[100%]">
              <Image
                src="img_icon_14.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[30px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[19px] lg:w-[56px] mt-[25px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[22px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mb-[27px] 3xl:mt-[22px] 3xl:text-fs21 font-semibold lg:mb-[17px] lg:mt-[14px] lg:text-fs14 mb-[23px] mt-[19px] mx-[auto] text-center text-fs18 text-indigo_902 tracking-ls1 xl:mb-[20px] xl:mt-[16px] xl:text-fs16">{`Non-GMO Products`}</Text>
            </Column>
            <Column className="bg-white_A700 font-spacegrotesk items-center justify-center w-[100%]">
              <Image
                src="img_icon_15.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[30px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[19px] lg:w-[56px] mt-[25px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[22px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mb-[27px] 3xl:mt-[22px] 3xl:text-fs21 font-semibold lg:mb-[17px] lg:mt-[14px] lg:text-fs14 mb-[23px] mt-[19px] mx-[auto] text-center text-fs18 text-indigo_902 tracking-ls1 xl:mb-[20px] xl:mt-[16px] xl:text-fs16">{`Third-Party Tested`}</Text>
            </Column>
            <Column className="bg-white_A700 font-spacegrotesk items-center justify-start w-[100%]">
              <Image
                src="img_icon_16.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[27px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[17px] lg:w-[56px] mt-[23px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[20px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mb-[27px] 3xl:mt-[25px] 3xl:text-fs21 font-semibold lg:mb-[17px] lg:mt-[16px] lg:text-fs14 mb-[23px] mt-[21px] mx-[auto] text-center text-fs18 text-indigo_902 tracking-ls1 xl:mb-[20px] xl:mt-[18px] xl:text-fs16">{`Vegan Base`}</Text>
            </Column>
            <Column className="bg-white_A700 font-spacegrotesk items-center justify-start w-[100%]">
              <Image
                src="img_icon_17.svg"
                className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[28px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mt-[18px] lg:w-[56px] mt-[24px] mx-[auto] object-contain w-[72px] xl:h-[65px] xl:mt-[21px] xl:w-[64px]"
                alt="Icon"
              />
              <Text className="3xl:mb-[27px] 3xl:mt-[24px] 3xl:text-fs21 font-semibold lg:mb-[17px] lg:mt-[15px] lg:text-fs14 mb-[23px] mt-[20px] mx-[auto] text-center text-fs18 text-indigo_902 tracking-ls1 xl:mb-[20px] xl:mt-[17px] xl:text-fs16">{`Pure Flavour`}</Text>
            </Column>
          </Row>
        </Column>
        <Stack className="2xl:h-[641px] 3xl:h-[769px] bg-white_A700 h-[640px] lg:h-[498px] self-stretch w-[100%] xl:h-[570px]">
          <div className="2xl:h-[441px] 3xl:h-[529px] 3xl:top-[42px] 3xl:w-[528px] absolute bg-white_A700 border-bw3 border-solid border-yellow_A700 h-[440px] left-[0] lg:h-[343px] lg:top-[27px] lg:w-[342px] rounded-radius50 top-[35px] w-[440px] xl:h-[392px] xl:top-[31px] xl:w-[391px]"></div>
          <Row className="absolute h-[max-content] inset-[0] justify-center m-[auto] w-[74%]">
            <Image
              src="img_insertyourima_4.svg"
              className="2xl:h-[441px] 3xl:h-[529px] h-[440px] lg:h-[343px] object-contain w-[46%] xl:h-[392px]"
              alt="Insertyourima"
            />
            <Column className="3xl:mb-[62px] 3xl:ml-[116px] 3xl:mt-[38px] font-spacegrotesk justify-start lg:mb-[40px] lg:ml-[75px] lg:mt-[24px] mb-[52px] ml-[97px] mt-[32px] w-[45%] xl:mb-[46px] xl:ml-[86px] xl:mt-[28px]">
              <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs50 font-semibold font-spacegrotesk leading-lh6000 lg:leading-lh46 lg:text-fs32 self-stretch text-fs42 text-indigo_902 text-left tracking-ls1 w-[100%] xl:leading-lh53 xl:text-fs37">{`We're not about pseudoscience and half-truths`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_400 text-left w-[96%] xl:leading-lh28 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[43px] 3xl:text-fs21 font-manrope font-semibold lg:mr-[7px] lg:mt-[28px] lg:text-fs14 mr-[10px] mt-[36px] text-fs18 text-indigo_902 text-left tracking-ls1 underline xl:mr-[8px] xl:mt-[32px] xl:text-fs16">{`Who we are`}</Text>
            </Column>
          </Row>
        </Stack>
        <Stack className="2xl:h-[621px] 3xl:h-[745px] 3xl:mt-[12px] h-[620px] lg:h-[483px] lg:mt-[7px] mt-[10px] self-stretch w-[100%] xl:h-[552px] xl:mt-[8px]">
          <Column className="absolute bg-white_A700 items-center justify-start self-stretch top-[0] w-[100%]">
            <div className="2xl:h-[479px] 3xl:h-[574px] 3xl:mb-[50px] 3xl:ml-[12px] 3xl:mt-[60px] 3xl:w-[573px] bg-white_A700 border-bw3 border-solid border-yellow_A700 h-[478px] lg:h-[372px] lg:mb-[32px] lg:ml-[7px] lg:mt-[38px] lg:w-[371px] mb-[42px] ml-[10px] mt-[50px] rounded-radius50 w-[478px] xl:h-[426px] xl:mb-[37px] xl:ml-[8px] xl:mt-[44px] xl:w-[425px]"></div>
          </Column>
          <Row className="absolute bottom-[0] font-spacegrotesk inset-x-[0] justify-center mx-[auto] w-[72%]">
            <Column className="3xl:mb-[192px] 3xl:mt-[76px] justify-start lg:mb-[124px] lg:mt-[49px] mb-[160px] mt-[64px] w-[46%] xl:mb-[142px] xl:mt-[56px]">
              <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:text-fs50 font-semibold font-spacegrotesk leading-lh6000 lg:leading-lh46 lg:text-fs32 self-stretch text-fs42 text-indigo_902 text-left tracking-ls1 w-[100%] xl:leading-lh53 xl:text-fs37">
                {
                  <>
                    {`You deserve traceability`}
                    <br />
                    {`from our products`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_400 text-left w-[96%] xl:leading-lh28 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
              <Column className="3xl:mt-[43px] items-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                <Row className="font-manrope items-center justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs21 font-semibold lg:text-fs14 text-fs18 text-indigo_902 text-left tracking-ls1 underline xl:text-fs16">{`Meet our ingredients`}</Text>
                  <Text className="3xl:ml-[33px] 3xl:mr-[212px] 3xl:text-fs21 font-semibold lg:ml-[21px] lg:mr-[137px] lg:text-fs14 ml-[28px] mr-[177px] text-fs18 text-indigo_902 text-left tracking-ls1 underline xl:ml-[24px] xl:mr-[157px] xl:text-fs16">{`Our Study`}</Text>
                </Row>
              </Column>
            </Column>
            <Image
              src="img_insertyourima_5.svg"
              className="2xl:h-[521px] 3xl:h-[625px] 3xl:ml-[93px] h-[520px] lg:h-[405px] lg:ml-[60px] ml-[78px] object-contain w-[47%] xl:h-[463px] xl:ml-[69px]"
              alt="Insertyourima"
            />
          </Row>
        </Stack>
        <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mt-[120px] font-spacegrotesk items-center justify-between lg:mt-[77px] mt-[100px] px-[0] self-stretch w-[100%] xl:mt-[88px]">
            <Text className="3xl:ml-[181px] 3xl:text-fs50 font-semibold font-spacegrotesk lg:ml-[117px] lg:text-fs32 ml-[151px] text-fs42 text-indigo_902 text-left tracking-ls1 xl:ml-[134px] xl:text-fs37">{`Featured Products`}</Text>
            <Text className="3xl:mr-[180px] 3xl:my-[18px] 3xl:text-fs21 font-manrope font-semibold lg:mr-[116px] lg:my-[11px] lg:text-fs14 mr-[150px] my-[15px] text-fs18 text-indigo_902 text-right tracking-ls1 underline xl:mr-[133px] xl:my-[13px] xl:text-fs16">{`See All Products`}</Text>
          </Row>
          <List
            className="3xl:gap-[32px] 3xl:mb-[120px] 3xl:mt-[57px] flex-wrap gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:mb-[77px] lg:mt-[37px] mb-[100px] min-h-[auto] mt-[48px] mx-[auto] w-[79%] xl:gap-[24px] xl:mb-[88px] xl:mt-[42px]"
            orientation="horizontal"
          >
            <Column className="font-spacegrotesk justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_insertyourima_6.svg"
                  className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover self-stretch w-[100%] xl:h-[203px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Multivitamins`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mb-[20px] mr-[10px] mt-[2px] text-fs16 text-indigo_401 text-left w-[79%] xl:leading-lh23 xl:mb-[17px] xl:mr-[8px] xl:mt-[1px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="font-spacegrotesk justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_insertyourima_7.svg"
                  className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover self-stretch w-[100%] xl:h-[203px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Prenatal Multivitamins`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mb-[20px] mr-[10px] mt-[2px] text-fs16 text-indigo_401 text-left w-[79%] xl:leading-lh23 xl:mb-[17px] xl:mr-[8px] xl:mt-[1px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="font-spacegrotesk justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_insertyourima_8.svg"
                  className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover self-stretch w-[100%] xl:h-[203px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Essential for Woman`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mb-[20px] mr-[10px] mt-[2px] text-fs16 text-indigo_401 text-left w-[79%] xl:leading-lh23 xl:mb-[17px] xl:mr-[8px] xl:mt-[1px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="font-spacegrotesk justify-start w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_insertyourima_9.svg"
                  className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover self-stretch w-[100%] xl:h-[203px]"
                  alt="Insertyourima"
                />
              </Column>
              <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] text-fs20 text-indigo_902 text-left tracking-ls1 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Essential for Man`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mr-[7px] lg:mt-[1px] lg:text-fs12 mb-[20px] mr-[10px] mt-[2px] text-fs16 text-indigo_401 text-left w-[79%] xl:leading-lh23 xl:mb-[17px] xl:mr-[8px] xl:mt-[1px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
          </List>
        </Column>
        <Row className="3xl:ml-[12px] bg-gray_50 justify-end lg:ml-[7px] ml-[10px] w-[97%] xl:ml-[8px]">
          <Column className="3xl:ml-[120px] 3xl:my-[120px] font-spacegrotesk justify-start lg:ml-[77px] lg:my-[77px] ml-[100px] my-[100px] w-[33%] xl:ml-[88px] xl:my-[88px]">
            <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:mr-[12px] 3xl:text-fs50 font-semibold font-spacegrotesk leading-lh5400 lg:leading-lh42 lg:mr-[7px] lg:text-fs32 mr-[10px] text-fs42 text-indigo_902 text-left tracking-ls1 w-[92%] xl:leading-lh48 xl:mr-[8px] xl:text-fs37">
              {
                <>
                  {`What customer says`}
                  <br />
                  {`about our product`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[19px] 3xl:text-fs24 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-indigo_902 text-left w-[100%] xl:leading-lh28 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries`}</Text>
            <Button className="2xl:pb-[16px] 2xl:pt-[17px] 3xl:mr-[12px] 3xl:mt-[76px] 3xl:pb-[19px] 3xl:pl-[30px] 3xl:pr-[31px] 3xl:pt-[21px] 3xl:text-fs21 bg-yellow_A700 border-bw font-bold font-manrope lg:mr-[7px] lg:mt-[49px] lg:pb-[12px] lg:pl-[19px] lg:pr-[20px] lg:pt-[13px] lg:text-fs14 mr-[10px] mt-[64px] pb-[16.545px] pl-[25px] pr-[26px] pt-[17.545px] text-center text-fs18 text-indigo_902 w-[54%] xl:mr-[8px] xl:mt-[56px] xl:pb-[14px] xl:pl-[22px] xl:pr-[23px] xl:pt-[15px] xl:text-fs16">{`Watch all Testimonials`}</Button>
          </Column>
          <Column className="3xl:ml-[117px] 3xl:my-[120px] bg-white_A700 font-spacegrotesk items-center justify-start lg:ml-[76px] lg:my-[77px] ml-[98px] my-[100px] w-[26%] xl:ml-[87px] xl:my-[88px]">
            <Stack className="2xl:h-[321px] 3xl:h-[385px] bg-amber_A700 h-[320px] lg:h-[249px] self-stretch w-[100%] xl:h-[285px]">
              <Image
                src="img_button_1.svg"
                className="2xl:h-[73px] 3xl:bottom-[36px] 3xl:h-[87px] 3xl:left-[36px] 3xl:w-[86px] absolute bottom-[30px] h-[72px] left-[30px] lg:bottom-[23px] lg:h-[56px] lg:left-[23px] lg:w-[56px] object-contain w-[72px] xl:bottom-[26px] xl:h-[65px] xl:left-[26px] xl:w-[64px]"
                alt="Button"
              />
            </Stack>
            <Text className="3xl:mt-[28px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mt-[18px] lg:text-fs15 mt-[24px] mx-[auto] text-center text-fs20 text-indigo_902 xl:mt-[21px] xl:text-fs17">{`Carolyn Porter`}</Text>
            <Text className="3xl:mb-[30px] 3xl:mt-[8px] 3xl:text-fs19 font-inter font-normal lg:mb-[19px] lg:mt-[5px] lg:text-fs12 mb-[25px] mt-[7px] mx-[auto] text-center text-fs16 text-indigo_401 xl:mb-[22px] xl:mt-[6px] xl:text-fs14">{`ojisofu@afi.co.uk`}</Text>
          </Column>
          <Column className="3xl:mb-[168px] 3xl:ml-[36px] 3xl:mt-[120px] bg-white_A700 justify-start lg:mb-[108px] lg:ml-[23px] lg:mt-[77px] mb-[140px] ml-[30px] mt-[100px] w-[25%] xl:mb-[124px] xl:ml-[26px] xl:mt-[88px]">
            <Column className="items-center self-stretch w-[100%]">
              <Stack className="2xl:h-[281px] 3xl:h-[337px] bg-bluegray_103 h-[280px] lg:h-[218px] self-stretch w-[100%] xl:h-[250px]">
                <Image
                  src="img_button_2.svg"
                  className="2xl:h-[65px] 3xl:bottom-[36px] 3xl:h-[77px] 3xl:left-[36px] 3xl:w-[76px] absolute bottom-[30px] h-[64px] left-[30px] lg:bottom-[23px] lg:h-[50px] lg:left-[23px] lg:w-[49px] object-contain w-[64px] xl:bottom-[26px] xl:h-[57px] xl:left-[26px] xl:w-[56px]"
                  alt="Button"
                />
              </Stack>
            </Column>
            <Column className="3xl:mb-[30px] 3xl:mt-[28px] font-spacegrotesk items-end lg:mb-[19px] lg:mt-[18px] mb-[25px] mt-[24px] self-stretch w-[100%] xl:mb-[22px] xl:mt-[21px]">
              <Text className="3xl:mx-[93px] 3xl:text-fs24 font-semibold font-spacegrotesk lg:mx-[60px] lg:text-fs15 mx-[78px] text-center text-fs20 text-indigo_902 xl:mx-[69px] xl:text-fs17">{`Jayden Cannon`}</Text>
              <Text className="3xl:mt-[8px] 3xl:mx-[124px] 3xl:text-fs19 font-inter font-normal lg:mt-[5px] lg:mx-[80px] lg:text-fs12 mt-[7px] mx-[104px] text-center text-fs16 text-indigo_401 xl:mt-[6px] xl:mx-[92px] xl:text-fs14">{`puw@ra.org`}</Text>
            </Column>
          </Column>
        </Row>
        <Column className="bg-indigo_902 font-spacegrotesk items-center justify-center self-stretch w-[100%]">
          <Text className="3xl:mt-[120px] 3xl:text-fs50 font-semibold lg:mt-[77px] lg:text-fs32 mt-[100px] mx-[auto] text-fs42 text-gray_53 text-left tracking-ls1 xl:mt-[88px] xl:text-fs37">{`Our Product in a number`}</Text>
          <Row className="3xl:mb-[120px] 3xl:mt-[67px] font-spacegrotesk items-center justify-start lg:mb-[77px] lg:mt-[43px] mb-[100px] mt-[56px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[49px]">
            <Text className="3xl:ml-[226px] 3xl:text-fs67 font-medium font-spacegrotesk lg:ml-[147px] lg:text-fs43 mb-[1px] ml-[189px] text-fs56 text-left text-yellow_A700 tracking-ls1 xl:ml-[168px] xl:text-fs49">{`4+`}</Text>
            <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[7px] 3xl:ml-[19px] 3xl:mt-[8px] 3xl:text-fs19 font-inter font-medium leading-lh2200 lg:leading-lh17 lg:mb-[4px] lg:ml-[12px] lg:mt-[5px] lg:text-fs12 mb-[6px] ml-[16px] mt-[7px] text-fs16 text-left text-white_A700 w-[6%] xl:leading-lh19 xl:mb-[5px] xl:ml-[14px] xl:mt-[6px] xl:text-fs14">
              {
                <>
                  {`Years of`}
                  <br />
                  {`Experience`}
                </>
              }
            </Text>
            <Text className="3xl:ml-[86px] 3xl:text-fs67 font-medium font-spacegrotesk lg:ml-[56px] lg:text-fs43 mb-[1px] ml-[72px] text-fs56 text-left text-yellow_A700 tracking-ls1 xl:ml-[64px] xl:text-fs49">{`1M+`}</Text>
            <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[7px] 3xl:ml-[22px] 3xl:mt-[8px] 3xl:text-fs19 font-inter font-medium leading-lh2200 lg:leading-lh17 lg:mb-[4px] lg:ml-[14px] lg:mt-[5px] lg:text-fs12 mb-[6px] ml-[19px] mt-[7px] text-fs16 text-left text-white_A700 w-[5%] xl:leading-lh19 xl:mb-[5px] xl:ml-[16px] xl:mt-[6px] xl:text-fs14">
              {
                <>
                  {`Global`}
                  <br />
                  {`Customer`}
                </>
              }
            </Text>
            <Text className="3xl:ml-[86px] 3xl:text-fs67 font-medium font-spacegrotesk lg:ml-[56px] lg:text-fs43 mb-[1px] ml-[72px] text-fs56 text-left text-yellow_A700 tracking-ls1 xl:ml-[64px] xl:text-fs49">{`87`}</Text>
            <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[7px] 3xl:ml-[72px] 3xl:mt-[8px] 3xl:text-fs19 font-inter font-medium leading-lh2200 lg:leading-lh17 lg:mb-[4px] lg:ml-[46px] lg:mt-[5px] lg:text-fs12 mb-[6px] ml-[60px] mt-[7px] text-fs16 text-left text-white_A700 w-[6%] xl:leading-lh19 xl:mb-[5px] xl:ml-[53px] xl:mt-[6px] xl:text-fs14">
              {
                <>
                  {`Distributed`}
                  <br />
                  {`Products`}
                </>
              }
            </Text>
            <Text className="3xl:ml-[87px] 3xl:text-fs67 font-medium font-spacegrotesk lg:ml-[56px] lg:text-fs43 ml-[73px] mt-[1px] text-fs56 text-left text-yellow_A700 tracking-ls1 xl:ml-[64px] xl:text-fs49">{`3,206`}</Text>
            <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[7px] 3xl:ml-[22px] 3xl:mr-[226px] 3xl:mt-[8px] 3xl:text-fs19 font-inter font-medium leading-lh2200 lg:leading-lh17 lg:mb-[4px] lg:ml-[14px] lg:mr-[147px] lg:mt-[5px] lg:text-fs12 mb-[6px] ml-[19px] mr-[189px] mt-[7px] text-fs16 text-left text-white_A700 w-[7%] xl:leading-lh19 xl:mb-[5px] xl:ml-[16px] xl:mr-[168px] xl:mt-[6px] xl:text-fs14">
              {
                <>
                  {`Weekly`}
                  <br />
                  {`Sold Product`}
                </>
              }
            </Text>
          </Row>
        </Column>
        <Column className="bg-white_A700 font-spacegrotesk items-center justify-start self-stretch w-[100%]">
          <Line className="3xl:ml-[12px] bg-bluegray_103 h-[1px] lg:ml-[7px] ml-[10px] w-[97%] xl:ml-[8px]" />
          <Row className="3xl:mt-[85px] items-center justify-start lg:mt-[55px] mt-[71px] self-stretch w-[100%] xl:mt-[63px]">
            <Text className="2xl:leading-lh54 3xl:leading-lh64 3xl:ml-[180px] 3xl:text-fs43 font-medium leading-lh5400 lg:leading-lh42 lg:ml-[116px] lg:text-fs28 ml-[150px] text-fs36 text-indigo_902 text-left tracking-ls1 w-[38%] xl:leading-lh48 xl:ml-[133px] xl:text-fs32">
              {
                <>
                  {`Subscribe for updates, exclusive, promotions`}
                  <br />
                  {`and more.`}
                </>
              }
            </Text>
            <Column className="3xl:mb-[14px] 3xl:ml-[105px] 3xl:mr-[180px] 3xl:mt-[7px] justify-start lg:mb-[9px] lg:ml-[68px] lg:mr-[116px] lg:mt-[4px] mb-[12px] ml-[88px] mr-[150px] mt-[6px] w-[35%] xl:mb-[10px] xl:ml-[78px] xl:mr-[133px] xl:mt-[5px]">
              <Column className="items-center self-stretch w-[100%]">
                <Stack className="2xl:h-[73px] 3xl:h-[87px] font-inter h-[72px] lg:h-[56px] self-stretch w-[100%] xl:h-[65px]">
                  <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
                    <div className="input-wrap">
                      <Image
                        src="img_envelope_1.svg"
                        className="absolute top-[30.875px] bottom-[30.375px] left-[24px] bg-transparent border-0 lg:top-[24px] lg:bottom-[23px] lg:left-[18px] xl:left-[21px] xl:inset-y-[27px] 2xl:inset-y-[30px] 3xl:top-[37px] 3xl:bottom-[36px] 3xl:left-[28px]"
                        alt="envelope"
                      />
                      <Input
                        className="2xl:py-[30px] 3xl:pb-[36px] 3xl:pl-[62px] 3xl:pt-[37px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[23px] lg:pl-[40px] lg:pt-[24px] lg:text-fs12 pb-[30.375px] pl-[52px] placeholder:bg-transparent placeholder:text-indigo_200 pt-[30.875px] shadow-bs14 text-fs16 text-indigo_200 text-left w-[100%] xl:pl-[46px] xl:py-[27px] xl:text-fs14"
                        name="Group362"
                        placeholder={`Enter your email address`}
                      ></Input>
                    </div>
                  </div>
                  <Button className="2xl:pb-[23px] 2xl:pt-[22px] 3xl:pb-[28px] 3xl:pt-[26px] 3xl:px-[42px] 3xl:right-[6px] 3xl:text-fs19 absolute bg-yellow_A700 border-bw font-normal inset-y-[0] lg:pb-[18px] lg:pt-[17px] lg:px-[27px] lg:right-[3px] lg:text-fs12 my-[auto] pb-[23.375px] pt-[22.375px] px-[35px] right-[5px] text-center text-fs16 text-indigo_902 underline w-[32%] xl:pb-[20px] xl:pt-[19px] xl:px-[31px] xl:right-[4px] xl:text-fs14">{`Get Started`}</Button>
                </Stack>
              </Column>
              <Image
                src="img_logo_8.svg"
                className="2xl:h-[49px] 3xl:h-[58px] 3xl:mr-[12px] 3xl:mt-[28px] h-[48px] lg:h-[38px] lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] object-contain w-[40%] xl:h-[43px] xl:mr-[8px] xl:mt-[21px]"
                alt="Logo"
              />
            </Column>
          </Row>
          <Line className="3xl:mt-[82px] bg-indigo_902 h-[3px] lg:mt-[53px] mt-[69px] mx-[auto] w-[79%] xl:mt-[61px]" />
        </Column>
        <div className="self-stretch w-[100%]">
          <Column className="bg-white_A700 items-center justify-center self-stretch w-[100%]">
            <Row className="3xl:mt-[96px] font-spacegrotesk justify-evenly lg:mt-[62px] mt-[80px] px-[0] self-stretch w-[100%] xl:mt-[71px]">
              <Image
                src="img_group.svg"
                className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                alt="Group"
              />
              <Text className="3xl:text-fs24 font-semibold lg:mt-[2px] lg:text-fs15 mt-[3px] text-fs20 text-indigo_902 text-left xl:mt-[2px] xl:text-fs17">{`Your Logo`}</Text>
              <Text className="3xl:mb-[13px] 3xl:text-fs16 font-medium lg:mb-[8px] lg:text-fs10 mb-[11px] text-fs14 text-indigo_200 text-left tracking-ls1 uppercase xl:mb-[9px] xl:text-fs12">{`Shopping`}</Text>
              <Text className="3xl:mb-[13px] 3xl:text-fs16 font-medium lg:mb-[8px] lg:text-fs10 mb-[11px] text-fs14 text-indigo_200 text-left tracking-ls1 uppercase xl:mb-[9px] xl:text-fs12">{`ABOUT`}</Text>
              <Text className="3xl:mb-[13px] 3xl:text-fs16 font-medium lg:mb-[8px] lg:text-fs10 mb-[11px] text-fs14 text-indigo_200 text-left tracking-ls1 uppercase xl:mb-[9px] xl:text-fs12">{`MORE`}</Text>
              <Text className="3xl:mb-[12px] 3xl:text-fs16 font-medium lg:mb-[7px] lg:text-fs10 mb-[10px] mt-[1px] text-fs14 text-indigo_200 text-left tracking-ls1 uppercase xl:mb-[8px] xl:text-fs12">{`Social`}</Text>
            </Row>
            <Row className="3xl:mb-[96px] 3xl:mt-[8px] font-inter justify-evenly lg:mb-[62px] lg:mt-[5px] mb-[80px] mt-[7px] px-[0] self-stretch w-[100%] xl:mb-[71px] xl:mt-[6px]">
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mb-[38px] 3xl:text-fs16 font-medium leading-lh1600 lg:leading-lh12 lg:mb-[24px] lg:text-fs10 mb-[32px] text-fs14 text-indigo_902 text-left w-[6%] xl:leading-lh14 xl:mb-[28px] xl:text-fs12">
                {
                  <>
                    {`Multivitamins`}
                    <br />
                    {`Proteins`}
                    <br />
                    {`Bundles`}
                    <br />
                    {`Gift Cards`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:text-fs16 font-medium leading-lh1600 lg:leading-lh12 lg:text-fs10 text-fs14 text-indigo_902 text-left w-[6%] xl:leading-lh14 xl:text-fs12">
                {
                  <>
                    {`Ingredients`}
                    <br />
                    {`Who We Are`}
                    <br />
                    {`Clinical Study`}
                    <br />
                    {`The Journal`}
                    <br />
                    {`Reviews`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mb-[38px] 3xl:text-fs16 font-medium leading-lh1600 lg:leading-lh12 lg:mb-[24px] lg:text-fs10 mb-[32px] text-fs14 text-indigo_902 text-left w-[9%] xl:leading-lh14 xl:mb-[28px] xl:text-fs12">
                {
                  <>
                    {`Careers`}
                    <br />
                    {`Press`}
                    <br />
                    {`Help`}
                    <br />
                    {`Terms & Condition`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh16 3xl:leading-lh19 3xl:mb-[75px] 3xl:text-fs16 font-medium leading-lh1600 lg:leading-lh12 lg:mb-[49px] lg:text-fs10 mb-[63px] mt-[1px] text-fs14 text-indigo_902 text-left w-[5%] xl:leading-lh14 xl:mb-[56px] xl:text-fs12">
                {
                  <>
                    {`Facebook`}
                    <br />
                    {`Twitter`}
                    <br />
                    {`YouTube`}
                  </>
                }
              </Text>
            </Row>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Medical002Page;
