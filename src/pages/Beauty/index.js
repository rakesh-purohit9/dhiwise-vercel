import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";

const BeautyPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[787px] 3xl:h-[944px] h-[786px] lg:h-[612px] self-stretch w-[100%] xl:h-[700px]">
          <Stack className="2xl:h-[787px] 3xl:h-[944px] absolute h-[786px] inset-[0] lg:h-[612px] self-stretch w-[100%] xl:h-[700px]">
            <Image
              src="img_insertyourima_23.svg"
              className="2xl:h-[787px] 3xl:h-[944px] absolute h-[786px] inset-[0] lg:h-[612px] object-cover self-stretch w-[100%] xl:h-[700px]"
              alt="InsertyourIma"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="bg-white_A700 font-inter items-center justify-end self-stretch w-[100%]">
                <Image
                  src="img_final.png"
                  className="2xl:h-[30px] 2xl:mb-[25px] 2xl:w-[29px] 3xl:h-[36px] 3xl:ml-[45px] 3xl:my-[30px] 3xl:w-[35px] h-[29.7px] lg:h-[24px] lg:ml-[29px] lg:my-[19px] lg:w-[23px] mb-[25.3px] ml-[38px] mt-[25px] object-contain w-[29.7px] xl:h-[27px] xl:ml-[33px] xl:my-[22px] xl:w-[26px]"
                  alt="Final"
                />
                <Text className="2xl:ml-[8px] 3xl:mb-[37px] 3xl:ml-[9px] 3xl:mt-[36px] 3xl:text-fs19 font-bold lg:mb-[24px] lg:ml-[6px] lg:mt-[23px] lg:text-fs12 mb-[31px] ml-[8.300003px] mt-[30px] text-fs16 text-gray_911 text-left xl:mb-[27px] xl:ml-[7px] xl:mt-[26px] xl:text-fs14">{`Brand Name`}</Text>
                <Column className="3xl:ml-[52px] 3xl:my-[24px] items-center justify-start lg:ml-[34px] lg:my-[15px] ml-[44px] my-[20px] rounded-radius8 w-[21%] xl:ml-[39px] xl:my-[17px]">
                  <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                    <Image
                      src="img_searchblack24dp_1.svg"
                      className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[10px] xl:right-[17px] xl:inset-y-[11px] 3xl:right-[24px] 3xl:inset-y-[15px] inset-y-[13px]"
                      alt="search_black_24dp (1)"
                    />
                    <Button className="3xl:pl-[24px] 3xl:pr-[60px] 3xl:py-[15px] 3xl:text-fs16 bg-bluegray_200_63 border-bw font-normal lg:pl-[15px] lg:pr-[38px] lg:py-[10px] lg:text-fs10 pl-[20px] pr-[50px] py-[13px] rounded-radius8 text-bluegray_403 text-fs14 text-left w-[100%] xl:pl-[17px] xl:pr-[44px] xl:py-[11px] xl:text-fs12">{`Search`}</Button>
                  </div>
                </Column>
                <Row className="3xl:ml-[489px] 3xl:my-[31px] items-center justify-center lg:ml-[317px] lg:my-[20px] ml-[408px] my-[26px] w-[19%] xl:ml-[362px] xl:my-[23px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-gray_911 text-left xl:text-fs14">{`Products`}</Text>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-gray_911 text-left xl:ml-[28px] xl:text-fs14">{`Our Story`}</Text>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-gray_911 text-left xl:ml-[28px] xl:text-fs14">{`Account`}</Text>
                </Row>
                <Text className="3xl:ml-[38px] 3xl:my-[31px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:my-[20px] lg:text-fs12 ml-[32px] my-[26px] text-fs16 text-gray_911 text-left xl:ml-[28px] xl:my-[23px] xl:text-fs14">{`Cart`}</Text>
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[60px] 3xl:mr-[38px] 3xl:my-[24px] font-inter h-[40px] lg:h-[32px] lg:ml-[38px] lg:mr-[24px] lg:my-[15px] ml-[50px] mr-[32px] my-[20px] w-[7%] xl:h-[36px] xl:ml-[44px] xl:mr-[28px] xl:my-[17px]">
                  <Image
                    src="img_background_36.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs16 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-bluegray_909 text-center text-fs14 w-[max-content] xl:text-fs12">{`Sign Up`}</Text>
                </Stack>
              </Row>
            </div>
          </Stack>
          <Column className="3xl:bottom-[144px] 3xl:left-[260px] absolute bottom-[120px] font-inter justify-start left-[217px] lg:bottom-[93px] lg:left-[168px] w-[36%] xl:bottom-[106px] xl:left-[193px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs19 font-inter font-normal lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_911 text-left tracking-ls1 uppercase xl:mr-[8px] xl:text-fs14">{`— Beauty is yours`}</Text>
            <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mr-[12px] 3xl:mt-[40px] 3xl:text-fs76 font-normal font-prata leading-lh7200 lg:leading-lh56 lg:mr-[7px] lg:mt-[26px] lg:text-fs49 mr-[10px] mt-[34px] text-bluegray_909 text-fs64 text-left tracking-ls1 w-[90%] xl:leading-lh64 xl:mr-[8px] xl:mt-[30px] xl:text-fs56">
              {
                <>
                  {`Age on your`}
                  <br />
                  {`own terms skin`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[24px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mt-[15px] lg:text-fs15 mt-[20px] self-stretch text-bluegray_909 text-fs20 text-left w-[100%] xl:leading-lh32 xl:mt-[17px] xl:text-fs17">{`For decades, we have been depleting our bodies of an essential nutrient that protects against aging-related breakdown. It's time to restore our general health & mindful wellness.*`}</Text>
            <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] 3xl:mt-[48px] font-inter h-[56px] lg:h-[44px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[34%] xl:h-[50px] xl:mr-[8px] xl:mt-[35px]">
              <Image
                src="img_background_37.svg"
                className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                alt="Background"
              />
              <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-bluegray_909 text-center text-fs18 w-[max-content] xl:text-fs16">{`Buy Now`}</Text>
            </Stack>
          </Column>
        </Stack>
        <Image
          src="img_companies.svg"
          className="2xl:h-[191px] 3xl:h-[229px] h-[190px] lg:h-[148px] object-cover self-stretch w-[100%] xl:h-[170px]"
          alt="Companies"
        />
        <Stack className="2xl:h-[1388px] 3xl:h-[1666px] h-[1387px] lg:h-[1079px] self-stretch w-[100%] xl:h-[1234px]">
          <Column className="absolute bg-white_A700 font-prata items-center justify-center self-stretch top-[0] w-[100%]">
            <Text className="3xl:mt-[120px] 3xl:text-fs62 font-normal font-prata lg:mt-[77px] lg:text-fs40 mt-[100px] mx-[auto] text-bluegray_909 text-center text-fs52 tracking-ls1 xl:mt-[88px] xl:text-fs46">{`We can help you`}</Text>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[24px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-bluegray_909 text-center text-fs20 w-[56%] xl:leading-lh32 xl:mt-[17px] xl:text-fs17">
              {
                <>
                  {`We've discovered that a trace fatty acid called C15:0 has evidence of significantly`}
                  <br />
                  {`promoting cellular resilience and general health. Helping your cells`}
                  <br />
                  {`stay stronger and you feeling younger.*`}
                </>
              }
            </Text>
            <Text className="3xl:mb-[121px] 3xl:mt-[38px] 3xl:text-fs19 font-inter font-normal lg:mb-[78px] lg:mt-[24px] lg:text-fs12 mb-[101px] mt-[32px] mx-[auto] text-center text-fs16 text-orange_301 underline xl:mb-[89px] xl:mt-[28px] xl:text-fs14">{`Learn More`}</Text>
          </Column>
          <Column className="absolute bg-gray_203 bottom-[0] font-prata items-center justify-end self-stretch w-[100%]">
            <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mt-[120px] 3xl:text-fs62 font-normal font-prata leading-lh7200 lg:leading-lh56 lg:mt-[77px] lg:text-fs40 mt-[100px] mx-[auto] text-bluegray_909 text-center text-fs52 tracking-ls1 w-[45%] xl:leading-lh64 xl:mt-[88px] xl:text-fs46">
              {
                <>
                  {`The first essential acid to`}
                  <br />
                  {`be discovered in 90 years`}
                </>
              }
            </Text>
            <Text className="3xl:mt-[25px] 3xl:text-fs24 font-inter font-medium lg:mt-[16px] lg:text-fs15 mt-[21px] mx-[auto] text-bluegray_909 text-center text-fs20 xl:mt-[18px] xl:text-fs17">{`Here's how pir products works:`}</Text>
            <Row className="3xl:mb-[72px] 3xl:mt-[96px] justify-end lg:mb-[46px] lg:mt-[62px] mb-[60px] mt-[80px] self-stretch w-[100%] xl:mb-[53px] xl:mt-[71px]">
              <List
                className="3xl:mb-[85px] 3xl:ml-[180px] 3xl:mt-[37px] flex-wrap gap-[0] lg:mb-[55px] lg:ml-[116px] lg:mt-[24px] mb-[71px] min-h-[auto] ml-[150px] mt-[31px] w-[41%] xl:mb-[63px] xl:ml-[133px] xl:mt-[27px]"
                orientation="vertical"
              >
                <Row className="2xl:my-[32px] 3xl:mr-[70px] 3xl:my-[39px] items-center justify-between lg:mr-[45px] lg:my-[25px] mr-[59px] my-[32.5px] px-[0] w-[90%] xl:mr-[52px] xl:my-[28px]">
                  <Image
                    src="img_icon_44.svg"
                    className="2xl:h-[73px] 3xl:h-[87px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:my-[2px] lg:w-[56px] my-[3px] object-contain w-[72px] xl:h-[65px] xl:my-[2px] xl:w-[64px]"
                    alt="Icon"
                  />
                  <Column className="font-prata justify-start w-[83%]">
                    <Text className="3xl:text-fs33 font-normal font-prata lg:text-fs21 self-stretch text-bluegray_909 text-fs28 text-left tracking-ls1 xl:text-fs24">{`Strengthens our cell membranes`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-inter font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs14 mr-[10px] mt-[4px] text-bluegray_909 text-fs18 text-left xl:mr-[8px] xl:mt-[3px] xl:text-fs16">{`An 80% improvement in cellular stability`}</Text>
                  </Column>
                </Row>
                <Line className="w-[41%] bg-green_100 flex-wrap min-h-[auto]" />
                <Row className="2xl:my-[32px] 3xl:my-[39px] items-center justify-between lg:my-[25px] my-[32.5px] px-[0] self-stretch w-[100%] xl:my-[28px]">
                  <Image
                    src="img_icon_45.svg"
                    className="2xl:h-[73px] 3xl:h-[87px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:my-[2px] lg:w-[56px] my-[3px] object-contain w-[72px] xl:h-[65px] xl:my-[2px] xl:w-[64px]"
                    alt="Icon"
                  />
                  <Column className="font-prata justify-start mr-[1px] w-[84%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs33 font-normal font-prata lg:mr-[7px] lg:text-fs21 mr-[10px] text-bluegray_909 text-fs28 text-left tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Boosts our mitochondria`}</Text>
                    <Text className="3xl:text-fs21 font-inter font-normal lg:mt-[3px] lg:text-fs14 mt-[4px] self-stretch text-bluegray_909 text-fs18 text-left xl:mt-[3px] xl:text-fs16">{`The batteries of our cells saw a 45% improvement function`}</Text>
                  </Column>
                </Row>
                <Line className="w-[41%] bg-green_100 flex-wrap min-h-[auto]" />
                <Row className="2xl:my-[32px] 3xl:mr-[12px] 3xl:my-[39px] justify-between lg:mr-[7px] lg:my-[25px] mr-[10px] my-[32.5px] px-[0] w-[98%] xl:mr-[8px] xl:my-[28px]">
                  <Image
                    src="img_icon_46.svg"
                    className="2xl:h-[73px] 3xl:h-[87px] 3xl:mb-[44px] 3xl:w-[86px] h-[72px] lg:h-[56px] lg:mb-[28px] lg:mt-[2px] lg:w-[56px] mb-[37px] mt-[3px] object-contain w-[72px] xl:h-[65px] xl:mb-[32px] xl:mt-[2px] xl:w-[64px]"
                    alt="Icon"
                  />
                  <Column className="font-prata justify-start mr-[1px] w-[84%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs33 font-normal font-prata lg:mr-[7px] lg:text-fs21 mr-[10px] text-bluegray_909 text-fs28 text-left tracking-ls1 xl:mr-[8px] xl:text-fs24">{`Promotes our body & mind health`}</Text>
                    <Text className="2xl:leading-lh34 3xl:leading-lh40 3xl:text-fs21 font-inter font-normal leading-lh3400 lg:leading-lh26 lg:mt-[3px] lg:text-fs14 mt-[4px] self-stretch text-bluegray_909 text-fs18 text-left w-[100%] xl:leading-lh30 xl:mt-[3px] xl:text-fs16">
                      {
                        <>
                          {`Activates receptors in our body that regulate metabolism,`}
                          <br />
                          {`immunity, mood, sleep and appetite`}
                        </>
                      }
                    </Text>
                  </Column>
                </Row>
              </List>
              <Stack className="2xl:h-[501px] 3xl:h-[601px] 3xl:ml-[106px] h-[500px] lg:h-[389px] lg:ml-[69px] ml-[89px] w-[42%] xl:h-[445px] xl:ml-[79px]">
                <Image
                  src="img_image_7.svg"
                  className="2xl:h-[481px] 3xl:h-[577px] absolute h-[480px] inset-[0] justify-center lg:h-[374px] m-[auto] object-contain w-[100%] xl:h-[427px]"
                  alt="Image"
                />
                <Image
                  src="img_insertyourima_24.svg"
                  className="2xl:h-[483px] 3xl:bottom-[21px] 3xl:h-[579px] absolute bottom-[18px] h-[482px] inset-x-[0] lg:bottom-[14px] lg:h-[375px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[16px] xl:h-[429px]"
                  alt="Insertyourima"
                />
              </Stack>
            </Row>
          </Column>
        </Stack>
        <Column className="bg-white_A700 font-prata items-center justify-center self-stretch w-[100%]">
          <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mt-[120px] 3xl:text-fs62 font-normal leading-lh7200 lg:leading-lh56 lg:mt-[77px] lg:text-fs40 mt-[100px] mx-[auto] text-bluegray_909 text-center text-fs52 tracking-ls1 w-[41%] xl:leading-lh64 xl:mt-[88px] xl:text-fs46">
            {
              <>
                {`Why you should choose`}
                <br />
                {`our product`}
              </>
            }
          </Text>
          <Stack className="2xl:h-[635px] 3xl:h-[762px] 3xl:mb-[120px] 3xl:mt-[57px] font-prata h-[634px] lg:h-[494px] lg:mb-[77px] lg:mt-[37px] mb-[100px] mt-[48px] mx-[auto] w-[79%] xl:h-[564px] xl:mb-[88px] xl:mt-[42px]">
            <List
              className="2xl:gap-[15px] 3xl:gap-[18px] absolute flex-wrap gap-[15.50px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] inset-x-[0] lg:gap-[12px] min-h-[auto] top-[0] w-[100%] xl:gap-[13px]"
              orientation="horizontal"
            >
              <Column className="font-prata items-center justify-center mt-[1px] rounded-radius4 w-[100%]">
                <Image
                  src="img_icon_47.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:mt-[57px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mt-[37px] lg:w-[62px] mt-[48px] mx-[auto] object-contain w-[80px] xl:h-[72px] xl:mt-[42px] xl:w-[71px]"
                  alt="Icon"
                />
                <Text className="3xl:mt-[26px] 3xl:text-fs28 font-normal font-prata lg:mt-[17px] lg:text-fs18 mt-[22px] mx-[auto] text-bluegray_909 text-center text-fs24 tracking-ls1 xl:mt-[19px] xl:text-fs21">{`Subscription Feature`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mb-[55px] 3xl:mt-[12px] 3xl:text-fs21 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mb-[35px] lg:mt-[7px] lg:text-fs14 mb-[46px] mt-[10px] mx-[auto] text-bluegray_909 text-center text-fs18 w-[74%] xl:leading-lh28 xl:mb-[40px] xl:mt-[8px] xl:text-fs16">{`The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus`}</Text>
              </Column>
              <Line className="w-[0] bg-teal_50 flex-wrap min-h-[auto]" />
              <Column className="font-prata items-center justify-center mb-[1px] rounded-radius4 w-[100%]">
                <Image
                  src="img_icon_48.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:mt-[57px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mt-[37px] lg:w-[62px] mt-[48px] mx-[auto] object-contain w-[80px] xl:h-[72px] xl:mt-[42px] xl:w-[71px]"
                  alt="Icon"
                />
                <Text className="3xl:mt-[26px] 3xl:text-fs28 font-normal font-prata lg:mt-[17px] lg:text-fs18 mt-[22px] mx-[auto] text-bluegray_909 text-center text-fs24 tracking-ls1 xl:mt-[19px] xl:text-fs21">{`Free Shipping`}</Text>
                <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mb-[55px] 3xl:mt-[12px] 3xl:text-fs21 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mb-[35px] lg:mt-[7px] lg:text-fs14 mb-[46px] mt-[10px] mx-[auto] text-bluegray_909 text-center text-fs18 w-[74%] xl:leading-lh28 xl:mb-[40px] xl:mt-[8px] xl:text-fs16">{`The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus`}</Text>
              </Column>
            </List>
            <Column className="absolute bottom-[0] items-center justify-center left-[1px] rounded-radius4 w-[49%]">
              <Image
                src="img_icon_49.svg"
                className="2xl:h-[81px] 3xl:h-[97px] 3xl:mt-[57px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mt-[37px] lg:w-[62px] mt-[48px] mx-[auto] object-contain w-[80px] xl:h-[72px] xl:mt-[42px] xl:w-[71px]"
                alt="Icon"
              />
              <Text className="3xl:mt-[26px] 3xl:text-fs28 font-normal font-prata lg:mt-[17px] lg:text-fs18 mt-[22px] mx-[auto] text-bluegray_909 text-center text-fs24 tracking-ls1 xl:mt-[19px] xl:text-fs21">{`Cancel Anytime`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mb-[55px] 3xl:mt-[12px] 3xl:text-fs21 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mb-[35px] lg:mt-[7px] lg:text-fs14 mb-[46px] mt-[10px] mx-[auto] text-bluegray_909 text-center text-fs18 w-[74%] xl:leading-lh28 xl:mb-[40px] xl:mt-[8px] xl:text-fs16">{`The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus`}</Text>
            </Column>
            <Column className="absolute bottom-[0] items-center justify-center right-[0] rounded-radius4 w-[49%]">
              <Stack className="2xl:h-[81px] 3xl:h-[97px] 3xl:mt-[57px] 3xl:w-[96px] bg-gray_102 h-[80px] lg:h-[63px] lg:mt-[37px] lg:w-[62px] mt-[48px] mx-[auto] rounded-radius3000 w-[80px] xl:h-[72px] xl:mt-[42px] xl:w-[71px]">
                <Image
                  src="img_clock_2.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="clock"
                />
              </Stack>
              <Text className="3xl:mt-[26px] 3xl:text-fs28 font-normal font-prata lg:mt-[17px] lg:text-fs18 mt-[22px] mx-[auto] text-bluegray_909 text-center text-fs24 tracking-ls1 xl:mt-[19px] xl:text-fs21">{`Consultation 24/7`}</Text>
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mb-[55px] 3xl:mt-[12px] 3xl:text-fs21 font-inter font-normal leading-lh3200 lg:leading-lh24 lg:mb-[35px] lg:mt-[7px] lg:text-fs14 mb-[46px] mt-[10px] mx-[auto] text-bluegray_909 text-center text-fs18 w-[74%] xl:leading-lh28 xl:mb-[40px] xl:mt-[8px] xl:text-fs16">{`The Lorem ipsum text is derived from sections 1.10.32 and 1.10.33 of Cicero's 'De finibus`}</Text>
            </Column>
            <Line className="3xl:bottom-[379px] 3xl:top-[380px] absolute bg-teal_50 bottom-[316px] h-[1px] inset-x-[0] lg:bottom-[245px] lg:top-[246px] self-stretch top-[317px] w-[100%] xl:inset-y-[281px]" />
          </Stack>
        </Column>
        <Column className="bg-gray_203 justify-center self-stretch w-[100%]">
          <Column className="3xl:mt-[120px] items-center lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
            <Row className="font-prata items-center justify-start self-stretch w-[100%]">
              <Text className="3xl:ml-[177px] 3xl:text-fs62 font-normal font-prata lg:ml-[115px] lg:text-fs40 ml-[148px] text-bluegray_909 text-fs52 text-left tracking-ls1 xl:ml-[131px] xl:text-fs46">{`Testimonials.`}</Text>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:ml-[206px] 3xl:mr-[264px] 3xl:text-fs24 font-inter font-normal leading-lh3600 lg:leading-lh28 lg:ml-[133px] lg:mr-[171px] lg:text-fs15 ml-[172px] mr-[220px] text-bluegray_909 text-fs20 text-left w-[40%] xl:leading-lh32 xl:ml-[153px] xl:mr-[195px] xl:text-fs17">
                {
                  <>
                    {`We’ve received a lot of love and are thrilled to share some of`}
                    <br />
                    {`the experiences of our happy customers.`}
                  </>
                }
              </Text>
            </Row>
          </Column>
          <List
            className="3xl:gap-[36px] 3xl:mb-[120px] 3xl:ml-[12px] 3xl:mt-[67px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:mb-[77px] lg:ml-[7px] lg:mt-[43px] mb-[100px] min-h-[auto] ml-[10px] mt-[56px] w-[90%] xl:gap-[26px] xl:mb-[88px] xl:ml-[8px] xl:mt-[49px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-inter justify-center rounded-radius8 w-[100%]">
              <Image
                src="img_star_3.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[48px] 3xl:mx-[48px] h-[20px] lg:h-[16px] lg:mt-[31px] lg:mx-[31px] mt-[40px] mx-[40px] object-contain w-[25%] xl:h-[18px] xl:mt-[35px] xl:mx-[35px]"
                alt="Star"
              />
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[28px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[18px] lg:mx-[31px] lg:text-fs14 mt-[24px] mx-[40px] text-bluegray_909 text-fs18 text-left w-[82%] xl:leading-lh28 xl:mt-[21px] xl:mx-[35px] xl:text-fs16">{`In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.`}</Text>
              <Column className="3xl:mb-[48px] 3xl:mt-[27px] items-center lg:mb-[31px] lg:mt-[17px] mb-[40px] mt-[23px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[20px]">
                <Row className="justify-start self-stretch w-[100%]">
                  <Image
                    src="img_insertyourima_25.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[48px] 3xl:mt-[6px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[31px] lg:mt-[3px] lg:w-[37px] ml-[40px] mt-[5px] object-contain w-[48px] xl:h-[43px] xl:ml-[35px] xl:mt-[4px] xl:w-[42px]"
                    alt="Insertyourima"
                  />
                  <Column className="3xl:ml-[19px] 3xl:mr-[222px] font-prata justify-start lg:mb-[1px] lg:ml-[12px] lg:mr-[143px] mb-[2px] ml-[16px] mr-[185px] w-[37%] xl:mb-[1px] xl:ml-[14px] xl:mr-[164px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal font-prata lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Leon Rhodes`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs19 font-inter font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[7px] xl:text-fs14">{`Our Happy Customers`}</Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-inter justify-start rounded-radius8 w-[100%]">
              <Image
                src="img_star_3.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[48px] 3xl:mx-[48px] h-[20px] lg:h-[16px] lg:mt-[31px] lg:mx-[31px] mt-[40px] mx-[40px] object-contain w-[25%] xl:h-[18px] xl:mt-[35px] xl:mx-[35px]"
                alt="Star"
              />
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mt-[28px] 3xl:mx-[48px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mt-[18px] lg:mx-[31px] lg:text-fs14 mt-[24px] mx-[40px] text-bluegray_909 text-fs18 text-left w-[82%] xl:leading-lh28 xl:mt-[21px] xl:mx-[35px] xl:text-fs16">{`It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication.`}</Text>
              <Column className="3xl:mb-[48px] 3xl:mt-[66px] items-center lg:mb-[31px] lg:mt-[42px] mb-[40px] mt-[55px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[48px]">
                <Row className="justify-start self-stretch w-[100%]">
                  <Image
                    src="img_insertyourima_26.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[48px] 3xl:mt-[6px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[31px] lg:mt-[3px] lg:w-[37px] ml-[40px] mt-[5px] object-contain w-[48px] xl:h-[43px] xl:ml-[35px] xl:mt-[4px] xl:w-[42px]"
                    alt="Insertyourima"
                  />
                  <Column className="3xl:ml-[19px] 3xl:mr-[222px] font-prata justify-start lg:mb-[1px] lg:ml-[12px] lg:mr-[143px] mb-[2px] ml-[16px] mr-[185px] w-[37%] xl:mb-[1px] xl:ml-[14px] xl:mr-[164px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs21 font-normal font-prata lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_911 text-left xl:mr-[8px] xl:text-fs16">{`Leo Huff`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs19 font-inter font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[7px] xl:text-fs14">{`Our Happy Customers`}</Text>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Column className="bg-white_A700 font-inter justify-start rounded-radius8 w-[100%]">
              <Image
                src="img_star_3.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[48px] 3xl:mx-[48px] h-[20px] lg:h-[16px] lg:mt-[31px] lg:mx-[31px] mt-[40px] mx-[40px] object-contain w-[36%] xl:h-[18px] xl:mt-[35px] xl:mx-[35px]"
                alt="Star"
              />
              <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[48px] 3xl:mt-[28px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[31px] lg:mt-[18px] lg:text-fs14 ml-[40px] mt-[24px] text-bluegray_909 text-fs18 text-left w-[87%] xl:leading-lh28 xl:ml-[35px] xl:mt-[21px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero.`}</Text>
              <Column className="3xl:mb-[48px] 3xl:mt-[66px] items-center lg:mb-[31px] lg:mt-[42px] mb-[40px] mt-[55px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[48px]">
                <Row className="justify-start self-stretch w-[100%]">
                  <Image
                    src="img_insertyourima_27.svg"
                    className="2xl:h-[49px] 3xl:h-[58px] 3xl:ml-[48px] 3xl:mt-[6px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:ml-[31px] lg:mt-[3px] lg:w-[37px] ml-[40px] mt-[5px] object-contain w-[48px] xl:h-[43px] xl:ml-[35px] xl:mt-[4px] xl:w-[42px]"
                    alt="Insertyourima"
                  />
                  <Column className="3xl:ml-[19px] 3xl:mr-[55px] font-prata justify-start lg:mb-[1px] lg:ml-[12px] lg:mr-[35px] mb-[2px] ml-[16px] mr-[46px] w-[53%] xl:mb-[1px] xl:ml-[14px] xl:mr-[40px]">
                    <Text className="3xl:text-fs21 font-normal font-prata lg:text-fs14 self-stretch text-fs18 text-gray_911 text-left xl:text-fs16">{`Clifford Hernandez`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs19 font-inter font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-bluegray_403 text-fs16 text-left xl:mt-[7px] xl:text-fs14">{`Our Happy Customers`}</Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </List>
        </Column>
        <Column className="bg-bluegray_909 font-prata items-center justify-start self-stretch w-[100%]">
          <Column className="3xl:mt-[75px] items-center justify-start lg:mt-[49px] mt-[63px] mx-[auto] w-[36%] xl:mt-[56px]">
            <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:text-fs48 font-normal leading-lh5200 lg:leading-lh40 lg:text-fs31 self-stretch text-center text-fs40 text-white_A700 tracking-ls1 w-[100%] xl:leading-lh46 xl:text-fs35">
              {
                <>
                  {`Don’t miss our update.`}
                  <br />
                  {`Subscribe us for more info`}
                </>
              }
            </Text>
            <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:mt-[40px] h-[72px] lg:h-[56px] lg:ml-[1px] lg:mr-[2px] lg:mt-[26px] ml-[2px] mr-[3px] mt-[34px] w-[99%] xl:h-[65px] xl:ml-[1px] xl:mr-[2px] xl:mt-[30px]">
              <Column className="absolute bg-black_900_00 font-inter inset-[0] items-center justify-start rounded-radius8 self-stretch shadow-bs16 w-[100%]">
                <div className="bg-transparent border-0 self-stretch w-[100%] input-wrap">
                  <Image
                    src="img_emailblack24dp.svg"
                    className="absolute top-[26.375px] bottom-[28.375px] left-[18px] bg-transparent border-0 lg:top-[20px] lg:bottom-[22px] lg:left-[14px] xl:top-[23px] xl:bottom-[25px] xl:left-[16px] 2xl:top-[26px] 2xl:bottom-[28px] 3xl:top-[31px] 3xl:bottom-[34px] 3xl:left-[21px]"
                    alt="email_black_24dp"
                  />
                  <Input
                    className="2xl:pb-[28px] 2xl:pt-[26px] 3xl:pb-[34px] 3xl:pl-[57px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[22px] lg:pl-[37px] lg:pt-[20px] lg:text-fs12 pb-[28.375px] pl-[48px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[26.375px] rounded-radius8 text-bluegray_403 text-fs16 text-left w-[100%] xl:pb-[25px] xl:pl-[42px] xl:pt-[23px] xl:text-fs14"
                    name="Group414"
                    placeholder={`Enter your email address`}
                  ></Input>
                </div>
              </Column>
              <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:right-[9px] absolute font-inter h-[56px] inset-y-[0] lg:h-[44px] lg:right-[6px] my-[auto] right-[8px] w-[35%] xl:h-[50px] xl:right-[7px]">
                <Image
                  src="img_background_38.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs21 absolute font-normal h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-bluegray_909 text-center text-fs18 w-[max-content] xl:text-fs16">{`Get Started`}</Text>
              </Stack>
            </Stack>
          </Column>
          <Line className="3xl:mt-[75px] bg-indigo_801 h-[1px] lg:mt-[49px] mt-[63px] mx-[auto] w-[79%] xl:mt-[56px]" />
          <Row className="3xl:mb-[97px] 3xl:mt-[88px] font-inter items-center justify-center lg:mb-[63px] lg:mt-[57px] mb-[81px] mt-[74px] mx-[auto] w-[64%] xl:mb-[72px] xl:mt-[65px]">
            <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-center text-fs18 text-white_A700 xl:text-fs16">{`Shop`}</Text>
            <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-center text-fs18 text-white_A700 xl:ml-[49px] xl:text-fs16">{`Our Story`}</Text>
            <Text className="3xl:ml-[68px] 3xl:text-fs21 font-normal lg:ml-[44px] lg:text-fs14 ml-[57px] text-center text-fs18 text-white_A700 xl:ml-[50px] xl:text-fs16">{`Our Way`}</Text>
            <Text className="3xl:ml-[68px] 3xl:text-fs21 font-normal lg:ml-[44px] lg:text-fs14 ml-[57px] text-center text-fs18 text-white_A700 xl:ml-[50px] xl:text-fs16">{`The Science`}</Text>
            <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-center text-fs18 text-white_A700 xl:ml-[49px] xl:text-fs16">{`Blog`}</Text>
            <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-center text-fs18 text-white_A700 xl:ml-[49px] xl:text-fs16">{`Press`}</Text>
            <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-center text-fs18 text-white_A700 xl:ml-[49px] xl:text-fs16">{`Referral`}</Text>
            <Text className="3xl:ml-[67px] 3xl:text-fs21 font-normal lg:ml-[43px] lg:text-fs14 ml-[56px] text-center text-fs18 text-white_A700 xl:ml-[49px] xl:text-fs16">{`Contact`}</Text>
          </Row>
        </Column>
      </Column>
    </Column>
  );
};

export default BeautyPage;
