import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { List } from "components/List";
import { Line } from "components/Line";
import { Grid } from "components/Grid";
import { Slider } from "components/Slider";

const Restaurant001Page = () => {
  const ref = React.useRef();

  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[623px] 3xl:h-[747px] h-[622px] lg:h-[484px] self-stretch w-[100%] xl:h-[554px]">
          <Stack className="2xl:h-[623px] 3xl:h-[747px] absolute h-[622px] inset-[0] lg:h-[484px] self-stretch w-[100%] xl:h-[554px]">
            <Image
              src="img_base_7.png"
              className="2xl:h-[623px] 3xl:h-[747px] absolute h-[622px] inset-[0] lg:h-[484px] object-cover self-stretch w-[100%] xl:h-[554px]"
              alt="Base"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="font-lato items-center justify-end self-stretch w-[100%]">
                <Image
                  src="img_shape_5.svg"
                  className="2xl:h-[17px] 2xl:mb-[32px] 3xl:h-[20px] 3xl:mb-[39px] 3xl:ml-[66px] 3xl:mt-[37px] h-[16.05px] lg:h-[13px] lg:mb-[25px] lg:ml-[42px] lg:mt-[24px] mb-[32.95px] ml-[55px] mt-[31px] object-contain w-[1%] xl:h-[15px] xl:mb-[29px] xl:ml-[48px] xl:mt-[27px]"
                  alt="Shape"
                />
                <Text className="2xl:ml-[14px] 3xl:mb-[34px] 3xl:ml-[17px] 3xl:mt-[32px] 3xl:text-fs24 font-bold lg:mb-[22px] lg:ml-[11px] lg:mt-[21px] lg:text-fs15 mb-[29px] ml-[14.279999px] mt-[27px] text-fs20 text-gray_915 text-left xl:mb-[25px] xl:ml-[12px] xl:mt-[24px] xl:text-fs17">{`Your Logo`}</Text>
                <Row className="3xl:ml-[720px] 3xl:mr-[60px] 3xl:my-[21px] font-manrope items-center justify-center lg:ml-[466px] lg:mr-[38px] lg:my-[14px] ml-[600px] mr-[50px] my-[18px] w-[43%] xl:ml-[533px] xl:mr-[44px] xl:my-[16px]">
                  <Text className="3xl:my-[9px] 3xl:text-fs19 font-medium lg:my-[6px] lg:text-fs12 my-[8px] text-fs16 text-gray_913 text-left xl:my-[7px] xl:text-fs14">{`About us`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:my-[9px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:my-[6px] lg:text-fs12 ml-[36px] my-[8px] text-fs16 text-gray_913 text-left xl:ml-[32px] xl:my-[7px] xl:text-fs14">{`Menu`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:my-[9px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:my-[6px] lg:text-fs12 ml-[36px] my-[8px] text-fs16 text-gray_913 text-left xl:ml-[32px] xl:my-[7px] xl:text-fs14">{`Review`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:my-[9px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:my-[6px] lg:text-fs12 ml-[36px] my-[8px] text-fs16 text-gray_913 text-left xl:ml-[32px] xl:my-[7px] xl:text-fs14">{`Blog`}</Text>
                  <Text className="3xl:ml-[43px] 3xl:my-[9px] 3xl:text-fs19 font-medium lg:ml-[28px] lg:my-[6px] lg:text-fs12 ml-[36px] my-[8px] text-fs16 text-gray_913 text-left xl:ml-[32px] xl:my-[7px] xl:text-fs14">{`Contacts`}</Text>
                  <Button className="3xl:ml-[43px] 3xl:px-[33px] 3xl:py-[16px] 3xl:text-fs19 bg-orange_A200 border-bw font-bold lg:ml-[28px] lg:px-[21px] lg:py-[10px] lg:text-fs12 ml-[36px] px-[28px] py-[14px] rounded-radius21 shadow-bs14 text-center text-fs16 text-gray_915 w-[27%] xl:ml-[32px] xl:px-[24px] xl:py-[12px] xl:text-fs14">{`Reserve Table`}</Button>
                </Row>
              </Row>
            </div>
          </Stack>
          <Row className="3xl:bottom-[87px] absolute bottom-[73px] inset-x-[0] items-center justify-start lg:bottom-[56px] mx-[auto] w-[79%] xl:bottom-[64px]">
            <Column className="3xl:mb-[32px] 3xl:mt-[38px] font-frankruhllibre justify-start lg:mb-[21px] lg:mt-[24px] mb-[27px] mt-[32px] w-[53%] xl:mb-[24px] xl:mt-[28px]">
              <Text className="2xl:leading-lh74 3xl:leading-lh88 3xl:mr-[12px] 3xl:text-fs74 font-bold font-frankruhllibre leading-lh7400 lg:leading-lh57 lg:mr-[7px] lg:text-fs48 mr-[10px] text-fs62 text-gray_916 text-left w-[98%] xl:leading-lh65 xl:mr-[8px] xl:text-fs55">
                {
                  <>
                    {`We serve the food`}
                    <br />
                    {`into your table easily`}
                  </>
                }
              </Text>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[16px] 3xl:text-fs26 font-lato font-normal leading-lh3600 lg:leading-lh28 lg:mt-[10px] lg:text-fs17 mt-[14px] self-stretch text-fs22 text-gray_607 text-left w-[100%] xl:leading-lh32 xl:mt-[12px] xl:text-fs19">
                {
                  <>
                    {`Lorem ipsum may be used as a placeholder before final copy`}
                    <br />
                    {`is available. It is also used to temporarily replace text.`}
                  </>
                }
              </Text>
              <Stack className="2xl:h-[69px] 3xl:h-[82px] 3xl:mr-[12px] 3xl:mt-[48px] font-lato h-[68px] lg:h-[53px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[91%] xl:h-[61px] xl:mr-[8px] xl:mt-[35px]">
                <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
                  <div className="input-wrap">
                    <Image
                      src="img_icon_51.svg"
                      className="absolute top-[26.545px] bottom-[23.545px] left-[24px] bg-transparent border-0 lg:top-[20px] lg:bottom-[18px] lg:left-[18px] xl:top-[23px] xl:bottom-[20px] xl:left-[21px] 2xl:top-[26px] 2xl:bottom-[23px] 3xl:top-[31px] 3xl:bottom-[28px] 3xl:left-[28px]"
                      alt="Icon"
                    />
                    <Input
                      className="2xl:pb-[23px] 2xl:pt-[26px] 3xl:pb-[28px] 3xl:pl-[62px] 3xl:pt-[31px] 3xl:text-fs21 bg-white_A700 border-0 font-lato font-normal lg:pb-[18px] lg:pl-[40px] lg:pt-[20px] lg:text-fs14 pb-[23.545px] pl-[52px] placeholder:bg-transparent placeholder:text-red_200 pt-[26.545px] rounded-radius16 shadow-bs22 text-fs18 text-left text-red_200 w-[100%] xl:pb-[20px] xl:pl-[46px] xl:pt-[23px] xl:text-fs16"
                      name="Group441"
                      placeholder={`Type your food here`}
                    ></Input>
                  </div>
                </div>
                <Button className="3xl:px-[42px] 3xl:py-[21px] 3xl:right-[9px] 3xl:text-fs19 absolute bg-orange_A200 border-bw font-bold font-manrope inset-y-[0] lg:px-[27px] lg:py-[14px] lg:right-[6px] lg:text-fs12 my-[auto] px-[35px] py-[18px] right-[8px] rounded-radius12 text-center text-fs16 text-gray_915 w-[32%] xl:px-[31px] xl:py-[16px] xl:right-[7px] xl:text-fs14">{`Explore Food`}</Button>
              </Stack>
            </Column>
            <Stack className="2xl:h-[402px] 3xl:h-[482px] 3xl:ml-[138px] h-[401px] lg:h-[312px] lg:ml-[89px] ml-[115px] w-[37%] xl:h-[357px] xl:ml-[102px]">
              <Image
                src="img_shape_6.svg"
                className="2xl:h-[402px] 3xl:h-[482px] absolute h-[401px] inset-[0] lg:h-[312px] object-cover self-stretch w-[100%] xl:h-[357px]"
                alt="Shape"
              />
              <Image
                src="img_insertyourima_47.svg"
                className="2xl:h-[349px] 3xl:h-[418px] 3xl:w-[417px] absolute h-[348px] inset-[0] justify-center lg:h-[271px] lg:w-[270px] m-[auto] object-contain w-[348px] xl:h-[310px] xl:w-[309px]"
                alt="Insertyourima"
              />
            </Stack>
          </Row>
        </Stack>
        <Column className="bg-gray_56 items-center justify-center self-stretch w-[100%]">
          <Row className="3xl:mt-[120px] font-frankruhllibremedium items-center justify-end lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
            <Text className="3xl:ml-[181px] 3xl:text-fs50 font-normal lg:ml-[117px] lg:mt-[1px] lg:text-fs32 ml-[151px] mt-[2px] text-fs42 text-gray_916 text-left tracking-ls1 xl:ml-[134px] xl:mt-[1px] xl:text-fs37">{`Popular Dishes`}</Text>
            <Image
              src="img_button_16.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[863px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[559px] lg:w-[43px] ml-[719px] object-contain w-[56px] xl:h-[50px] xl:ml-[639px] xl:w-[49px]"
              alt="Button"
            />
            <Image
              src="img_button_17.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[24px] 3xl:mr-[180px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[15px] lg:mr-[116px] lg:w-[43px] ml-[20px] mr-[150px] object-contain w-[56px] xl:h-[50px] xl:ml-[17px] xl:mr-[133px] xl:w-[49px]"
              alt="Button"
            />
          </Row>
          <List
            className="3xl:gap-[32px] 3xl:mb-[120px] 3xl:mt-[55px] flex-wrap gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:mb-[77px] lg:mt-[35px] mb-[100px] min-h-[auto] mt-[46px] mx-[auto] w-[79%] xl:gap-[24px] xl:mb-[88px] xl:mt-[40px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_48.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Italiano Pasta`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 shadow-bs13 w-[100%]">
              <Image
                src="img_insertyourima_49.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`French Fries`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_50.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Beef Burger`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_51.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Fish and Chips`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
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
        <Row className="bg-gray_56 items-center justify-start self-stretch w-[100%]">
          <Stack className="2xl:h-[412px] 2xl:ml-[214px] 3xl:h-[494px] 3xl:mb-[120px] 3xl:ml-[257px] 3xl:mt-[212px] h-[411px] lg:h-[320px] lg:mb-[77px] lg:ml-[166px] lg:mt-[137px] mb-[100px] ml-[214.35px] mt-[177px] w-[31%] xl:h-[366px] xl:mb-[88px] xl:ml-[190px] xl:mt-[157px]">
            <Image
              src="img_shape_7.svg"
              className="2xl:h-[412px] 3xl:h-[494px] absolute h-[411px] inset-[0] lg:h-[320px] object-cover self-stretch w-[100%] xl:h-[366px]"
              alt="Shape"
            />
            <Image
              src="img_insertyourima_52.svg"
              className="2xl:h-[349px] 3xl:bottom-[18px] 3xl:h-[418px] 3xl:w-[417px] absolute bottom-[15px] h-[348px] inset-x-[0] lg:bottom-[11px] lg:h-[271px] lg:w-[270px] mx-[auto] object-contain w-[348px] xl:bottom-[13px] xl:h-[310px] xl:w-[309px]"
              alt="Insertyourima"
            />
          </Stack>
          <Column className="2xl:ml-[119px] 3xl:mb-[153px] 3xl:ml-[143px] 3xl:mr-[204px] 3xl:mt-[156px] font-frankruhllibremedium justify-start lg:mb-[99px] lg:ml-[92px] lg:mr-[132px] lg:mt-[101px] mb-[128px] ml-[119.5px] mr-[170px] mt-[130px] w-[34%] xl:mb-[113px] xl:ml-[106px] xl:mr-[151px] xl:mt-[115px]">
            <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 font-frankruhllibremedium font-normal leading-lh6400 lg:leading-lh49 lg:text-fs37 self-stretch text-fs48 text-gray_916 text-left tracking-ls1 w-[100%] xl:leading-lh56 xl:text-fs42">
              {
                <>
                  {`We are more than a`}
                  <br />
                  {`common restaurant`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[12px] 3xl:mt-[14px] 3xl:text-fs24 font-lato font-normal leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[9px] lg:text-fs15 mr-[10px] mt-[12px] text-fs20 text-gray_608 text-left w-[94%] xl:leading-lh28 xl:mr-[8px] xl:mt-[10px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.`}</Text>
            <List
              className="3xl:mr-[12px] 3xl:mt-[33px] flex-wrap gap-[0] lg:mr-[7px] lg:mt-[21px] min-h-[auto] mr-[10px] mt-[28px] w-[88%] xl:mr-[8px] xl:mt-[24px]"
              orientation="vertical"
            >
              <Row className="3xl:mr-[69px] 3xl:my-[12px] font-lato justify-start lg:mr-[45px] lg:my-[7px] mr-[58px] my-[10px] w-[86%] xl:mr-[51px] xl:my-[8px]">
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`Online Order`}</Text>
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[93px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:ml-[60px] lg:mt-[2px] lg:w-[14px] mb-[1px] ml-[78px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:ml-[69px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`Pre Reservation`}</Text>
              </Row>
              <Row className="3xl:my-[12px] font-lato justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`24/7 Service`}</Text>
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:ml-[96px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:ml-[62px] lg:mt-[2px] lg:w-[14px] mb-[1px] ml-[80px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:ml-[71px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`Organized foodie place`}</Text>
              </Row>
              <Row className="3xl:mr-[9px] 3xl:my-[12px] font-lato justify-between lg:mr-[6px] lg:my-[7px] mr-[8px] my-[10px] px-[0] w-[98%] xl:mr-[7px] xl:my-[8px]">
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-gray_916 text-left tracking-ls1 xl:text-fs16">{`Clean Environment`}</Text>
                <Image
                  src="img_icon_52.svg"
                  className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                  alt="Icon"
                />
                <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-gray_916 text-left tracking-ls1 xl:text-fs16">{`Cooked by Best Chefs`}</Text>
              </Row>
            </List>
            <Button className="2xl:px-[30px] 3xl:mr-[12px] 3xl:mt-[50px] 3xl:px-[36px] 3xl:py-[20px] 3xl:text-fs19 bg-orange_A200 border-2 border-solid border-white_A700 font-bold font-manrope lg:mr-[7px] lg:mt-[32px] lg:px-[23px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[42px] px-[30.5px] py-[17px] rounded-radius16 shadow-bs24 text-center text-fs16 text-gray_916 w-[36%] xl:mr-[8px] xl:mt-[37px] xl:px-[27px] xl:py-[15px] xl:text-fs14">{`More About Us`}</Button>
          </Column>
        </Row>
        <Column className="bg-gray_56 font-manrope items-center justify-start self-stretch w-[100%]">
          <Line className="bg-deep_orange_101 h-[1px] self-stretch w-[100%]" />
          <Text className="3xl:mt-[118px] 3xl:text-fs50 font-normal lg:mt-[77px] lg:text-fs32 mt-[99px] mx-[auto] text-center text-fs42 text-gray_916 tracking-ls1 xl:mt-[88px] xl:text-fs37">{`Our Regular Menu Pack`}</Text>
          <Row className="3xl:mt-[48px] items-center justify-center lg:mt-[31px] mt-[40px] mx-[auto] w-[63%] xl:mt-[35px]">
            <Button className="2xl:px-[25px] 3xl:px-[30px] 3xl:py-[18px] 3xl:text-fs19 bg-orange_A200 border-bw font-bold lg:px-[19px] lg:py-[11px] lg:text-fs12 px-[25.5px] py-[15px] rounded-radius25 shadow-bs24 text-center text-fs16 text-gray_916 w-[15%] xl:px-[22px] xl:py-[13px] xl:text-fs14">{`Best Seller`}</Button>
            <Button className="2xl:pl-[26px] 2xl:pr-[25px] 3xl:ml-[32px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[18px] 3xl:text-fs19 bg-gray_56 border border-orange_A200 border-solid font-medium lg:ml-[21px] lg:pl-[20px] lg:pr-[19px] lg:py-[11px] lg:text-fs12 ml-[27px] pl-[26.5px] pr-[25.5px] py-[15px] rounded-radius25 text-center text-fs16 text-gray_916 w-[17%] xl:ml-[24px] xl:pl-[23px] xl:pr-[22px] xl:py-[13px] xl:text-fs14">{`Mexican food`}</Button>
            <Button className="2xl:px-[25px] 3xl:ml-[32px] 3xl:px-[30px] 3xl:py-[18px] 3xl:text-fs19 bg-gray_56 border border-orange_A200 border-solid font-medium lg:ml-[21px] lg:px-[19px] lg:py-[11px] lg:text-fs12 ml-[27px] px-[25.5px] py-[15px] rounded-radius25 text-center text-fs16 text-gray_916 w-[16%] xl:ml-[24px] xl:px-[22px] xl:py-[13px] xl:text-fs14">{`Italiano food`}</Button>
            <Button className="3xl:ml-[32px] 3xl:pl-[30px] 3xl:pr-[31px] 3xl:py-[18px] 3xl:text-fs19 bg-gray_56 border border-orange_A200 border-solid font-medium lg:ml-[21px] lg:pl-[19px] lg:pr-[20px] lg:py-[11px] lg:text-fs12 ml-[27px] pl-[25px] pr-[26px] py-[15px] rounded-radius25 text-center text-fs16 text-gray_916 w-[18%] xl:ml-[24px] xl:pl-[22px] xl:pr-[23px] xl:py-[13px] xl:text-fs14">{`Japanese food`}</Button>
            <Button className="2xl:pl-[26px] 2xl:pr-[25px] 3xl:ml-[32px] 3xl:pl-[31px] 3xl:pr-[30px] 3xl:py-[18px] 3xl:text-fs19 bg-gray_56 border border-orange_A200 border-solid font-medium lg:ml-[21px] lg:pl-[20px] lg:pr-[19px] lg:py-[11px] lg:text-fs12 ml-[27px] pl-[26.5px] pr-[25.5px] py-[15px] rounded-radius25 text-center text-fs16 text-gray_916 w-[15%] xl:ml-[24px] xl:pl-[23px] xl:pr-[22px] xl:py-[13px] xl:text-fs14">{`Arabic food`}</Button>
            <Image
              src="img_button_18.svg"
              className="2xl:h-[47px] 3xl:h-[56px] 3xl:ml-[32px] 3xl:w-[55px] h-[46px] lg:h-[36px] lg:ml-[21px] lg:w-[35px] ml-[27px] object-contain w-[46px] xl:h-[41px] xl:ml-[24px] xl:w-[40px]"
              alt="Button"
            />
          </Row>
          <Grid className="3xl:gap-[32px] 3xl:mt-[67px] gap-[27px] grid grid-cols-4 lg:gap-[21px] lg:mt-[43px] mt-[56px] mx-[auto] w-[79%] xl:gap-[24px] xl:mt-[49px]">
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_53.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Italiano Pasta`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_54.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`French Fries`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_55.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Beef Burger`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_56.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Fish and Chips`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_57.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Himalayan Oyster`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_58.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Plant Basil`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_59.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Healthy Salad`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
            <Column className="bg-white_A700 font-frankruhllibremedium items-center justify-start rounded-radius16 w-[100%]">
              <Image
                src="img_insertyourima_60.svg"
                className="2xl:h-[229px] 3xl:h-[274px] h-[228px] lg:h-[178px] object-cover rounded-tl-[16px] rounded-tr-[16px] self-stretch w-[100%] xl:h-[203px]"
                alt="Insertyourima"
              />
              <Image
                src="img_star_5.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mt-[15px] mt-[20px] mx-[auto] object-contain w-[44%] xl:h-[18px] xl:mt-[17px]"
                alt="Star"
              />
              <Text className="3xl:mt-[24px] 3xl:text-fs24 font-frankruhllibremedium font-normal lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] text-center text-fs20 text-gray_916 tracking-ls1 xl:mt-[17px] xl:text-fs17">{`Beef Burger`}</Text>
              <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mb-[24px] 3xl:text-fs19 font-lato font-normal leading-lh2600 lg:leading-lh20 lg:mb-[15px] lg:mt-[3px] lg:text-fs12 mb-[20px] mt-[4px] mx-[auto] text-center text-fs16 text-gray_608 w-[73%] xl:leading-lh23 xl:mb-[17px] xl:mt-[3px] xl:text-fs14">
                {
                  <>
                    {`Lorem ipsum is typically a`}
                    <br />
                    {`corrupted version of finibus`}
                  </>
                }
              </Text>
            </Column>
          </Grid>
          <Line className="3xl:mt-[118px] bg-deep_orange_101 h-[1px] lg:mt-[77px] mt-[99px] self-stretch w-[100%] xl:mt-[88px]" />
        </Column>
        <Row className="bg-gray_56 items-center justify-start self-stretch w-[100%]">
          <Column className="3xl:mb-[153px] 3xl:ml-[284px] 3xl:mt-[156px] font-frankruhllibremedium justify-start lg:mb-[99px] lg:ml-[184px] lg:mt-[101px] mb-[128px] ml-[237px] mt-[130px] w-[32%] xl:mb-[113px] xl:ml-[210px] xl:mt-[115px]">
            <Text className="2xl:leading-lh64 3xl:leading-lh76 3xl:text-fs57 font-frankruhllibremedium font-normal leading-lh6400 lg:leading-lh49 lg:text-fs37 self-stretch text-fs48 text-gray_916 text-left tracking-ls1 w-[100%] xl:leading-lh56 xl:text-fs42">{`We can be event planner too for you`}</Text>
            <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mr-[10px] 3xl:mt-[14px] 3xl:text-fs24 font-lato font-normal leading-lh3200 lg:leading-lh24 lg:mr-[7px] lg:mt-[9px] lg:text-fs15 mr-[9px] mt-[12px] text-fs20 text-gray_608 text-left w-[98%] xl:leading-lh28 xl:mr-[8px] xl:mt-[10px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.`}</Text>
            <Row className="3xl:mr-[12px] 3xl:mt-[33px] font-lato justify-start lg:mr-[7px] lg:mt-[21px] mr-[10px] mt-[28px] w-[83%] xl:mr-[8px] xl:mt-[24px]">
              <Image
                src="img_icon_53.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                alt="Icon"
              />
              <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`For your all event. Meeting, Birthday and Etc.`}</Text>
            </Row>
            <Row className="3xl:mr-[12px] 3xl:mt-[24px] font-lato justify-start lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] w-[70%] xl:mr-[8px] xl:mt-[17px]">
              <Image
                src="img_icon_53.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                alt="Icon"
              />
              <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`We are available from Day until Night`}</Text>
            </Row>
            <Row className="3xl:mr-[12px] 3xl:mt-[24px] font-lato justify-start lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] w-[84%] xl:mr-[8px] xl:mt-[17px]">
              <Image
                src="img_icon_53.svg"
                className="2xl:h-[19px] 3xl:h-[22px] 3xl:w-[21px] h-[18px] lg:h-[14px] lg:mt-[2px] lg:w-[14px] mb-[1px] mt-[3px] object-contain w-[18px] xl:h-[17px] xl:mt-[2px] xl:w-[16px]"
                alt="Icon"
              />
              <Text className="3xl:ml-[14px] 3xl:text-fs21 font-medium lg:ml-[9px] lg:text-fs14 ml-[12px] mr-[1px] text-fs18 text-gray_916 text-left tracking-ls1 xl:ml-[10px] xl:text-fs16">{`Need big space? We have space until 100 pax`}</Text>
            </Row>
            <Button className="3xl:mr-[12px] 3xl:mt-[50px] 3xl:pl-[36px] 3xl:pr-[37px] 3xl:py-[20px] 3xl:text-fs19 bg-orange_A200 border-2 border-solid border-white_A700 font-bold font-manrope lg:mr-[7px] lg:mt-[32px] lg:pl-[23px] lg:pr-[24px] lg:py-[13px] lg:text-fs12 mr-[10px] mt-[42px] pl-[30px] pr-[31px] py-[17px] rounded-radius16 shadow-bs24 text-center text-fs16 text-gray_916 w-[43%] xl:mr-[8px] xl:mt-[37px] xl:pl-[26px] xl:pr-[27px] xl:py-[15px] xl:text-fs14">{`Make Reservation`}</Button>
          </Column>
          <Stack className="2xl:h-[412px] 2xl:ml-[69px] 2xl:mr-[218px] 3xl:h-[494px] 3xl:mb-[120px] 3xl:ml-[83px] 3xl:mr-[262px] 3xl:mt-[212px] h-[411px] lg:h-[320px] lg:mb-[77px] lg:ml-[53px] lg:mr-[169px] lg:mt-[137px] mb-[100px] ml-[69.349976px] mr-[218.5px] mt-[177px] w-[31%] xl:h-[366px] xl:mb-[88px] xl:ml-[61px] xl:mr-[194px] xl:mt-[157px]">
            <Image
              src="img_shape_8.svg"
              className="2xl:h-[412px] 3xl:h-[494px] absolute h-[411px] inset-[0] lg:h-[320px] object-contain w-[100%] xl:h-[366px]"
              alt="Shape"
            />
            <Image
              src="img_insertyourima_61.svg"
              className="2xl:h-[349px] 3xl:bottom-[24px] 3xl:h-[418px] 3xl:w-[417px] absolute bottom-[20px] h-[348px] inset-x-[0] lg:bottom-[15px] lg:h-[271px] lg:w-[270px] mx-[auto] object-contain w-[348px] xl:bottom-[17px] xl:h-[310px] xl:w-[309px]"
              alt="Insertyourima"
            />
          </Stack>
        </Row>
        <Column className="bg-white_A700 justify-center self-stretch w-[100%]">
          <Column className="3xl:mt-[120px] items-center lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
            <Row className="font-frankruhllibremedium items-center justify-start self-stretch w-[100%]">
              <Text className="3xl:ml-[180px] 3xl:text-fs57 font-normal lg:ml-[116px] lg:text-fs37 ml-[150px] text-fs48 text-gray_916 text-left tracking-ls1 xl:ml-[133px] xl:text-fs42">{`Our beloved customer says`}</Text>
              <Image
                src="img_button_19.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[427px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[276px] lg:my-[3px] lg:w-[43px] ml-[356px] my-[4px] object-contain w-[56px] xl:h-[50px] xl:ml-[316px] xl:my-[3px] xl:w-[49px]"
                alt="Button"
              />
              <Image
                src="img_button_20.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[24px] 3xl:mr-[255px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[15px] lg:mr-[165px] lg:my-[3px] lg:w-[43px] ml-[20px] mr-[213px] my-[4px] object-contain w-[56px] xl:h-[50px] xl:ml-[17px] xl:mr-[189px] xl:my-[3px] xl:w-[49px]"
                alt="Button"
              />
            </Row>
          </Column>
          <Slider
            infinite
            mouseTracking
            disableButtonsControls
            responsive={{
              0: { items: 3 },
              568: { items: 3 },
              1024: { items: 3 },
            }}
            ref={ref}
            className="3xl:ml-[12px] 3xl:mt-[57px] lg:ml-[7px] lg:mt-[37px] ml-[10px] mt-[48px] w-[90%] xl:ml-[8px] xl:mt-[42px]"
            renderDotsItem={({ isActive }) => {
              if (isActive) {
                return (
                  <div className="inline-block m-[8px] w-[68px] h-[6px] bg-orange_A200 lg:mx-[3px] xl:mx-[3px] mx-[4px]" />
                );
              }
              return (
                <div
                  className="inline-block m-[8px] w-[34px] h-[6px] bg-gray_302 lg:mx-[3px] xl:mx-[3px] mx-[4px]"
                  role="button"
                  tabIndex={0}
                />
              );
            }}
            items={[
              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-deep_orange_401 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`SL`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Susie Lynch`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-light_green_A700 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`BH`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Brian Hansen`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[28px] lg:text-fs14 ml-[36px] text-fs18 text-gray_916 text-left w-[89%] xl:leading-lh28 xl:ml-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Column className="3xl:mb-[43px] 3xl:mt-[44px] items-center lg:my-[28px] mb-[36px] mt-[37px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[70%] xl:ml-[32px]">
                      <Column className="bg-red_501 font-lato items-center justify-start rounded-radius50 w-[22%]">
                        <Text className="3xl:mx-[13px] 3xl:my-[15px] 3xl:text-fs21 font-normal lg:mx-[8px] lg:my-[10px] lg:text-fs14 mx-[11px] my-[13px] text-center text-fs18 text-white_A700 xl:mx-[9px] xl:my-[11px] xl:text-fs16">{`EP`}</Text>
                      </Column>
                      <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Eugene Palmer`}</Text>
                        <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                      </Column>
                    </Row>
                    <Image
                      src="img_star_6.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:my-[10px] my-[14px] object-contain w-[3%] xl:h-[18px] xl:my-[12px]"
                      alt="Star"
                    />
                  </Row>
                </Column>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-deep_orange_401 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`SL`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Susie Lynch`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-light_green_A700 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`BH`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Brian Hansen`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[28px] lg:text-fs14 ml-[36px] text-fs18 text-gray_916 text-left w-[89%] xl:leading-lh28 xl:ml-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Column className="3xl:mb-[43px] 3xl:mt-[44px] items-center lg:my-[28px] mb-[36px] mt-[37px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[70%] xl:ml-[32px]">
                      <Column className="bg-red_501 font-lato items-center justify-start rounded-radius50 w-[22%]">
                        <Text className="3xl:mx-[13px] 3xl:my-[15px] 3xl:text-fs21 font-normal lg:mx-[8px] lg:my-[10px] lg:text-fs14 mx-[11px] my-[13px] text-center text-fs18 text-white_A700 xl:mx-[9px] xl:my-[11px] xl:text-fs16">{`EP`}</Text>
                      </Column>
                      <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Eugene Palmer`}</Text>
                        <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                      </Column>
                    </Row>
                    <Image
                      src="img_star_6.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:my-[10px] my-[14px] object-contain w-[3%] xl:h-[18px] xl:my-[12px]"
                      alt="Star"
                    />
                  </Row>
                </Column>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-deep_orange_401 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`SL`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Susie Lynch`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:mx-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:mx-[28px] lg:text-fs14 mx-[36px] text-fs18 text-gray_916 text-left w-[82%] xl:leading-lh28 xl:mx-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Row className="3xl:mb-[43px] 3xl:mt-[44px] items-center justify-between lg:my-[28px] mb-[36px] mt-[37px] px-[0] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[48%] xl:ml-[32px]">
                    <Column className="bg-light_green_A700 font-lato items-center justify-start rounded-radius50 w-[22%]">
                      <Text className="3xl:my-[15px] 3xl:text-fs21 font-normal lg:my-[10px] lg:text-fs14 mx-[auto] my-[13px] text-center text-fs18 text-white_A700 xl:my-[11px] xl:text-fs16">{`BH`}</Text>
                    </Column>
                    <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Brian Hansen`}</Text>
                      <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                    </Column>
                  </Row>
                  <Image
                    src="img_star_4.svg"
                    className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[43px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:mr-[28px] lg:my-[10px] mr-[36px] my-[14px] object-contain w-[25%] xl:h-[18px] xl:mr-[32px] xl:my-[12px]"
                    alt="Star"
                  />
                </Row>
              </Column>,

              <Column className="3xl:mx-[18px] bg-gray_56 justify-start lg:mx-[11px] mx-[15px] xl:mx-[13px]">
                <Column className="3xl:mt-[43px] font-lato lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                  <Text className="2xl:leading-lh32 3xl:leading-lh38 3xl:ml-[43px] 3xl:text-fs21 font-normal leading-lh3200 lg:leading-lh24 lg:ml-[28px] lg:text-fs14 ml-[36px] text-fs18 text-gray_916 text-left w-[89%] xl:leading-lh28 xl:ml-[32px] xl:text-fs16">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman.`}</Text>
                </Column>
                <Column className="3xl:mb-[43px] 3xl:mt-[44px] items-center lg:my-[28px] mb-[36px] mt-[37px] self-stretch w-[100%] xl:my-[32px]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <Row className="3xl:ml-[43px] items-center justify-start lg:ml-[28px] ml-[36px] w-[70%] xl:ml-[32px]">
                      <Column className="bg-red_501 font-lato items-center justify-start rounded-radius50 w-[22%]">
                        <Text className="3xl:mx-[13px] 3xl:my-[15px] 3xl:text-fs21 font-normal lg:mx-[8px] lg:my-[10px] lg:text-fs14 mx-[11px] my-[13px] text-center text-fs18 text-white_A700 xl:mx-[9px] xl:my-[11px] xl:text-fs16">{`EP`}</Text>
                      </Column>
                      <Column className="3xl:ml-[19px] font-frankruhllibremedium justify-start lg:mb-[2px] lg:ml-[12px] lg:mt-[1px] mb-[3px] ml-[16px] mt-[2px] w-[71%] xl:mb-[2px] xl:ml-[14px] xl:mt-[1px]">
                        <Text className="3xl:mr-[12px] 3xl:text-fs21 font-frankruhllibremedium font-normal lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-gray_916 text-left xl:mr-[8px] xl:text-fs16">{`Eugene Palmer`}</Text>
                        <Text className="3xl:text-fs19 font-lato font-normal lg:text-fs12 mt-[1px] self-stretch text-fs16 text-gray_608 text-left xl:text-fs14">{`Our Happy Customers`}</Text>
                      </Column>
                    </Row>
                    <Image
                      src="img_star_6.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] 3xl:my-[16px] h-[20px] lg:h-[16px] lg:my-[10px] my-[14px] object-contain w-[3%] xl:h-[18px] xl:my-[12px]"
                      alt="Star"
                    />
                  </Row>
                </Column>
              </Column>,
            ]}
          />
          <Column className="3xl:mb-[120px] 3xl:mt-[57px] lg:mb-[77px] lg:mt-[37px] mb-[100px] mt-[48px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[42px]"></Column>
        </Column>
        <Stack className="2xl:h-[604px] 3xl:h-[725px] h-[603px] lg:h-[469px] self-stretch w-[100%] xl:h-[537px]">
          <div className="absolute bottom-[0] self-stretch w-[100%]">
            <Stack className="2xl:h-[470px] 3xl:h-[564px] h-[469px] lg:h-[365px] self-stretch w-[100%] xl:h-[418px]">
              <Image
                src="img_base_8.svg"
                className="2xl:h-[470px] 3xl:h-[564px] absolute h-[469px] inset-[0] lg:h-[365px] object-cover self-stretch w-[100%] xl:h-[418px]"
                alt="Base"
              />
              <Column className="3xl:bottom-[96px] absolute bottom-[80px] inset-x-[0] items-center justify-start lg:bottom-[62px] mx-[auto] w-[79%] xl:bottom-[71px]">
                <Row className="font-lato justify-evenly px-[0] self-stretch w-[100%]">
                  <Image
                    src="img_group_8.svg"
                    className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                    alt="Group"
                  />
                  <Text className="3xl:mb-[6px] 3xl:text-fs21 font-semibold lg:mb-[3px] lg:mt-[2px] lg:text-fs14 mb-[5px] mt-[3px] text-fs18 text-gray_917 text-left xl:mb-[4px] xl:mt-[2px] xl:text-fs16">{`Your Logo`}</Text>
                  <Row className="3xl:mb-[8px] items-center justify-center lg:mb-[5px] mb-[7px] mt-[1px] w-[33%] xl:mb-[6px]">
                    <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-gray_917 text-left xl:text-fs16">{`About us`}</Text>
                    <Text className="3xl:ml-[100px] 3xl:text-fs21 font-normal lg:ml-[65px] lg:text-fs14 ml-[84px] text-fs18 text-gray_917 text-left xl:ml-[74px] xl:text-fs16">{`Company`}</Text>
                    <Text className="3xl:ml-[102px] 3xl:text-fs21 font-normal lg:ml-[66px] lg:text-fs14 ml-[85px] text-fs18 text-gray_917 text-left xl:ml-[75px] xl:text-fs16">{`Support`}</Text>
                  </Row>
                  <Text className="3xl:mb-[8px] 3xl:text-fs21 font-normal lg:mb-[5px] lg:text-fs14 mb-[7px] mt-[1px] text-fs18 text-gray_917 text-left xl:mb-[6px] xl:text-fs16">{`Get in touch`}</Text>
                </Row>
                <Row className="3xl:mt-[12px] font-manrope justify-evenly lg:mt-[7px] mt-[10px] px-[0] self-stretch w-[100%] xl:mt-[8px]">
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[68px] 3xl:text-fs16 font-manrope font-normal leading-lh2400 lg:leading-lh18 lg:mb-[44px] lg:text-fs10 mb-[57px] text-fs14 text-gray_608 text-left w-[24%] xl:leading-lh21 xl:mb-[50px] xl:text-fs12">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman.`}</Text>
                  <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:text-fs16 font-lato font-normal leading-lh1800 lg:leading-lh14 lg:mt-[2px] lg:text-fs10 mt-[3px] text-fs14 text-gray_608 text-left w-[5%] xl:leading-lh16 xl:mt-[2px] xl:text-fs12">
                    {
                      <>
                        {`Features`}
                        <br />
                        {`FAQ’s`}
                        <br />
                        {`News`}
                        <br />
                        {`Pricing`}
                      </>
                    }
                  </Text>
                  <Row className="font-lato justify-between lg:mt-[2px] mt-[3px] px-[0] w-[49%] xl:mt-[2px]">
                    <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:text-fs10 text-fs14 text-gray_608 text-left w-[15%] xl:leading-lh16 xl:text-fs12">
                      {
                        <>
                          {`Core values`}
                          <br />
                          {`Partner w/ us`}
                          <br />
                          {`Blog`}
                          <br />
                          {`Contact`}
                        </>
                      }
                    </Text>
                    <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mb-[43px] 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:mb-[28px] lg:text-fs10 mb-[36px] text-fs14 text-gray_608 text-left w-[16%] xl:leading-lh16 xl:mb-[32px] xl:text-fs12">
                      {
                        <>
                          {`Support center`}
                          <br />
                          {`Feedback`}
                          <br />
                          {`Accessibility`}
                        </>
                      }
                    </Text>
                    <Column className="3xl:mb-[19px] font-lato justify-start lg:mb-[12px] lg:mt-[3px] mb-[16px] mt-[4px] w-[40%] xl:mb-[14px] xl:mt-[3px]">
                      <Input
                        className="2xl:pb-[17px] 2xl:pt-[16px] 3xl:pb-[20px] 3xl:pl-[21px] 3xl:pt-[19px] 3xl:text-fs16 bg-bluegray_200_63 border-0 font-medium lg:pb-[13px] lg:pl-[14px] lg:pt-[12px] lg:text-fs10 pb-[17.205px] pl-[18px] placeholder:bg-transparent placeholder:text-gray_401 pt-[16.205px] rounded-radius16 text-fs14 text-gray_401 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[14px] xl:text-fs12"
                        name="Group2"
                        placeholder={`Your email here...`}
                      ></Input>
                      <Column className="3xl:mt-[14px] font-manrope items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]">
                        <Button className="2xl:pb-[14px] 2xl:pt-[15px] 3xl:pb-[17px] 3xl:pt-[18px] 3xl:px-[42px] 3xl:text-fs16 bg-orange_A201 border-bw font-semibold lg:px-[27px] lg:py-[11px] lg:text-fs10 pb-[14.205px] pt-[15.205px] px-[35px] rounded-radius16 text-center text-fs14 text-white_A700 w-[100%] xl:pb-[12px] xl:pt-[13px] xl:px-[31px] xl:text-fs12">{`Get Access`}</Button>
                      </Column>
                    </Column>
                  </Row>
                </Row>
              </Column>
            </Stack>
          </div>
          <Row className="absolute bg-orange_A200 border-2 border-solid border-white_A700 font-frankruhllibre inset-x-[0] items-center justify-center mx-[auto] rounded-radius32 shadow-bs24 top-[0] w-[79%]">
            <Text className="2xl:leading-lh60 3xl:leading-lh72 3xl:ml-[76px] 3xl:my-[86px] 3xl:text-fs52 font-bold leading-lh6000 lg:leading-lh46 lg:ml-[49px] lg:my-[56px] lg:text-fs34 ml-[64px] my-[72px] text-fs44 text-gray_918 text-left tracking-ls1 w-[37%] xl:leading-lh53 xl:ml-[56px] xl:my-[64px] xl:text-fs39">
              {
                <>
                  {`Subscribe us to get`}
                  <br />
                  {`many promo’s ahead`}
                </>
              }
            </Text>
            <Stack className="2xl:h-[69px] 3xl:h-[82px] 3xl:ml-[152px] 3xl:mr-[76px] 3xl:my-[117px] font-aileron h-[68px] lg:h-[53px] lg:ml-[98px] lg:mr-[49px] lg:my-[76px] ml-[127px] mr-[64px] my-[98px] w-[40%] xl:h-[61px] xl:ml-[112px] xl:mr-[56px] xl:my-[87px]">
              <Input
                className="2xl:py-[24px] 3xl:pl-[24px] 3xl:py-[29px] 3xl:text-fs21 absolute bg-white_A700 border-0 font-aileron font-normal inset-[0] lg:pl-[15px] lg:py-[19px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-gray_608 py-[24.545px] rounded-radius16 self-stretch shadow-bs14 text-fs18 text-gray_608 text-left w-[100%] xl:pl-[17px] xl:py-[21px] xl:text-fs16"
                name="Group442"
                placeholder={`Enter email address`}
              ></Input>
              <Button className="3xl:pl-[30px] 3xl:pr-[28px] 3xl:py-[21px] 3xl:right-[9px] 3xl:text-fs19 absolute bg-gray_917 border-bw font-extrabold font-manrope inset-y-[0] lg:pl-[19px] lg:pr-[18px] lg:py-[14px] lg:right-[6px] lg:text-fs12 my-[auto] pl-[25px] pr-[24px] py-[18px] right-[8px] rounded-radius8 text-center text-fs16 text-white_A700 w-[31%] xl:pl-[22px] xl:pr-[21px] xl:py-[16px] xl:right-[7px] xl:text-fs14">{`Get Started`}</Button>
            </Stack>
          </Row>
        </Stack>
      </Column>
    </Column>
  );
};

export default Restaurant001Page;
