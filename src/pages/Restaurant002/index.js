import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { List } from "components/List";
import { Line } from "components/Line";

const Restaurant002Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[698px] 3xl:h-[838px] h-[697.25px] lg:h-[543px] self-stretch w-[100%] xl:h-[621px]">
        <Stack className="2xl:h-[698px] 3xl:h-[838px] absolute h-[697.25px] inset-[0] lg:h-[543px] self-stretch w-[100%] xl:h-[621px]">
          <Stack className="2xl:h-[698px] 3xl:h-[838px] absolute h-[697.25px] inset-[0] lg:h-[543px] self-stretch w-[100%] xl:h-[621px]">
            <Image
              src="img_base_5.svg"
              className="2xl:bottom-[21px] 2xl:h-[677px] 3xl:bottom-[25px] 3xl:h-[812px] absolute bottom-[21.25px] h-[676px] inset-x-[0] lg:bottom-[16px] lg:h-[526px] object-cover self-stretch top-[0] w-[100%] xl:bottom-[18px] xl:h-[602px]"
              alt="Base"
            />
            <Image
              src="img_insertyourima_28.svg"
              className="2xl:h-[537px] 2xl:right-[139px] 3xl:h-[645px] 3xl:right-[166px] absolute bottom-[0] h-[536.62px] lg:h-[418px] lg:right-[108px] object-contain right-[139.06px] w-[32%] xl:h-[478px] xl:right-[123px]"
              alt="Insertyourima"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="bg-white_A700 font-barlowmedium items-center justify-start self-stretch w-[100%]">
                <Row className="3xl:ml-[60px] 3xl:my-[31px] font-barlowmedium items-center justify-start lg:ml-[38px] lg:my-[20px] ml-[50px] my-[26px] w-[27%] xl:ml-[44px] xl:my-[23px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-fs16 text-left text-teal_902 xl:text-fs14">{`Shop Products`}</Text>
                  <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-teal_902 xl:ml-[28px] xl:text-fs14">{`Who We Are`}</Text>
                  <Text className="3xl:ml-[39px] 3xl:text-fs19 font-normal lg:ml-[25px] lg:text-fs12 ml-[33px] text-fs16 text-left text-teal_902 xl:ml-[29px] xl:text-fs14">{`FAQ’s`}</Text>
                  <Text className="3xl:ml-[40px] 3xl:text-fs19 font-normal lg:ml-[26px] lg:text-fs12 ml-[34px] text-fs16 text-left text-teal_902 xl:ml-[30px] xl:text-fs14">{`Our Study`}</Text>
                </Row>
                <Image
                  src="img_shape_4.svg"
                  className="2xl:h-[17px] 2xl:mb-[30px] 3xl:h-[20px] 3xl:mb-[37px] 3xl:ml-[256px] 3xl:mt-[39px] h-[16.05px] lg:h-[13px] lg:mb-[24px] lg:ml-[166px] lg:mt-[25px] mb-[30.95px] ml-[214px] mt-[33px] object-contain w-[1%] xl:h-[15px] xl:mb-[27px] xl:ml-[190px] xl:mt-[29px]"
                  alt="Shape"
                />
                <Text className="2xl:ml-[12px] 3xl:ml-[14px] 3xl:my-[33px] 3xl:text-fs24 font-barlow font-bold lg:ml-[9px] lg:my-[21px] lg:text-fs15 ml-[12.280029px] my-[28px] text-fs20 text-left text-teal_902 uppercase xl:ml-[10px] xl:my-[24px] xl:text-fs17">{`Your Logo`}</Text>
                <Row className="3xl:ml-[441px] 3xl:my-[24px] gap-[4px] grid grid-cols-3 items-center justify-center lg:gap-[3px] lg:ml-[286px] lg:my-[15px] ml-[368px] my-[20px] w-[9%] xl:gap-[3px] xl:ml-[327px] xl:my-[17px]">
                  <Image
                    src="img_badgesiconpri_5.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] h-[40px] lg:h-[32px] object-contain w-[100%] xl:h-[36px]"
                    alt="BadgesIconPri"
                  />
                  <Image
                    src="img_badgesiconpri_6.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] h-[40px] lg:h-[32px] object-contain w-[100%] xl:h-[36px]"
                    alt="BadgesIconPri"
                  />
                  <Image
                    src="img_badgesiconpri_7.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] h-[40px] lg:h-[32px] object-contain w-[100%] xl:h-[36px]"
                    alt="BadgesIconPri"
                  />
                </Row>
                <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[14px] 3xl:mr-[60px] 3xl:my-[24px] font-barlow h-[40px] lg:h-[32px] lg:ml-[9px] lg:mr-[38px] lg:my-[15px] ml-[12px] mr-[50px] my-[20px] w-[7%] xl:h-[36px] xl:ml-[10px] xl:mr-[44px] xl:my-[17px]">
                  <Image
                    src="img_background_39.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                    alt="Background"
                  />
                  <Text className="3xl:text-fs16 absolute font-bold h-[max-content] inset-[0] justify-center lg:text-fs10 m-[auto] text-center text-fs14 text-white_A700 w-[max-content] xl:text-fs12">{`Register`}</Text>
                </Stack>
              </Row>
            </div>
          </Stack>
          <Column className="2xl:bottom-[33px] 3xl:bottom-[39px] 3xl:left-[180px] absolute bottom-[33.25px] font-barlowcondensed justify-start left-[150px] lg:bottom-[25px] lg:left-[116px] w-[42%] xl:bottom-[29px] xl:left-[133px]">
            <Text className="2xl:leading-lh110 3xl:leading-lh132 3xl:text-fs120 font-black leading-lh11000 lg:leading-lh85 lg:text-fs77 self-stretch text-fs100 text-left text-teal_902 uppercase w-[100%] xl:leading-lh97 xl:text-fs88">
              {
                <>
                  {`Eat delicious`}
                  <br />
                  {`meal everyday`}
                </>
              }
            </Text>
          </Column>
        </Stack>
        <Stack className="2xl:bottom-[4px] 2xl:h-[519px] 3xl:bottom-[5px] 3xl:h-[622px] absolute bottom-[4.25px] h-[518px] inset-x-[0] lg:bottom-[3px] lg:h-[403px] mx-[auto] w-[81%] xl:bottom-[3px] xl:h-[461px]">
          <Image
            src="img_insertyourima_29.svg"
            className="2xl:h-[519px] 3xl:h-[622px] 3xl:right-[33px] absolute h-[518px] lg:h-[403px] lg:right-[21px] object-contain right-[28px] w-[37%] xl:h-[461px] xl:right-[24px]"
            alt="Insertyourima"
          />
          <Image
            src="img_button_7.svg"
            className="2xl:h-[57px] 3xl:h-[68px] 3xl:top-[188px] 3xl:w-[67px] absolute h-[56px] lg:h-[44px] lg:top-[122px] lg:w-[43px] object-contain right-[0] top-[157px] w-[56px] xl:h-[50px] xl:top-[139px] xl:w-[49px]"
            alt="Button"
          />
          <Column className="3xl:bottom-[128px] absolute bottom-[107px] justify-start lg:bottom-[83px] self-stretch w-[100%] xl:bottom-[95px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-barlow justify-between px-[0] self-stretch w-[100%]">
                <Text className="2xl:leading-lh34 3xl:leading-lh40 3xl:text-fs26 font-normal leading-lh3400 lg:leading-lh26 lg:mt-[1px] lg:text-fs17 mt-[2px] text-fs22 text-left text-teal_902 tracking-ls11 w-[52%] xl:leading-lh30 xl:mt-[1px] xl:text-fs19">
                  {
                    <>
                      {`Lorem ipsum may be used as a placeholder before final copy`}
                      <br />
                      {`is available. It is also used to temporarily replace text.`}
                    </>
                  }
                </Text>
                <Image
                  src="img_button_8.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] 3xl:mb-[16px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mb-[10px] lg:w-[43px] mb-[14px] object-contain w-[56px] xl:h-[50px] xl:mb-[12px] xl:w-[49px]"
                  alt="Button"
                />
              </Row>
            </Column>
            <Stack className="2xl:h-[69px] 3xl:h-[82px] 3xl:mr-[12px] 3xl:mt-[48px] font-barlowmedium h-[68px] lg:h-[53px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[44%] xl:h-[61px] xl:mr-[8px] xl:mt-[35px]">
              <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
                <div className="input-wrap">
                  <Image
                    src="img_icon_50.svg"
                    className="absolute top-[26.545px] bottom-[23.545px] left-[24px] bg-transparent border-0 lg:top-[20px] lg:bottom-[18px] lg:left-[18px] xl:top-[23px] xl:bottom-[20px] xl:left-[21px] 2xl:top-[26px] 2xl:bottom-[23px] 3xl:top-[31px] 3xl:bottom-[28px] 3xl:left-[28px]"
                    alt="Icon"
                  />
                  <Input
                    className="2xl:pb-[23px] 2xl:pt-[26px] 3xl:pb-[28px] 3xl:pl-[62px] 3xl:pt-[31px] 3xl:text-fs21 bg-white_A700 border border-solid border-teal_902 font-barlowmedium font-normal lg:pb-[18px] lg:pl-[40px] lg:pt-[20px] lg:text-fs14 pb-[23.545px] pl-[52px] placeholder:bg-transparent placeholder:text-teal_902 pt-[26.545px] rounded-radius34 shadow-bs22 text-fs18 text-left text-teal_902 w-[100%] xl:pb-[20px] xl:pl-[46px] xl:pt-[23px] xl:text-fs16"
                    name="Group432"
                    placeholder={`Type your food here`}
                  ></Input>
                </div>
              </div>
              <Button className="2xl:px-[33px] 3xl:px-[40px] 3xl:py-[20px] 3xl:right-[9px] 3xl:text-fs21 absolute bg-orange_A200 border-bw font-barlow font-bold inset-y-[0] lg:px-[26px] lg:py-[13px] lg:right-[6px] lg:text-fs14 my-[auto] px-[33.5px] py-[17px] right-[8px] rounded-radius26 text-center text-fs18 text-teal_902 w-[34%] xl:px-[29px] xl:py-[15px] xl:right-[7px] xl:text-fs16">{`Subscribe Us`}</Button>
            </Stack>
          </Column>
        </Stack>
      </Stack>
      <Column className="2xl:mt-[100px] 3xl:mt-[120px] bg-gray_55 font-barlowsemibold justify-center lg:mt-[78px] mt-[100.75px] self-stretch w-[100%] xl:mt-[89px]">
        <Text className="3xl:mt-[96px] 3xl:mx-[180px] 3xl:text-fs43 font-normal lg:mt-[62px] lg:mx-[116px] lg:text-fs28 mt-[80px] mx-[150px] text-fs36 text-left text-teal_902 tracking-ls1 xl:mt-[71px] xl:mx-[133px] xl:text-fs32">{`Popular Tagging Menu`}</Text>
        <Column className="3xl:mb-[120px] 3xl:mt-[48px] items-center lg:mb-[77px] lg:mt-[31px] mb-[100px] mt-[40px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[35px]">
          <Row className="font-barlowsemibold items-center justify-start mx-[auto] w-[77%]">
            <Button className="3xl:px-[37px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:px-[24px] lg:py-[11px] lg:text-fs12 px-[31px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[11%] xl:px-[27px] xl:py-[13px] xl:text-fs14">{`Chicken`}</Button>
            <Button className="2xl:pl-[31px] 2xl:pr-[29px] 3xl:ml-[24px] 3xl:pl-[37px] 3xl:pr-[35px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:pl-[24px] lg:pr-[22px] lg:py-[11px] lg:text-fs12 ml-[20px] pl-[31.5px] pr-[29.5px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[12%] xl:ml-[17px] xl:pl-[28px] xl:pr-[26px] xl:py-[13px] xl:text-fs14">{`Appetizer`}</Button>
            <Button className="2xl:pl-[29px] 2xl:pr-[28px] 3xl:ml-[24px] 3xl:pl-[35px] 3xl:pr-[34px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:px-[22px] lg:py-[11px] lg:text-fs12 ml-[20px] pl-[29.5px] pr-[28.5px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[12%] xl:ml-[17px] xl:pl-[26px] xl:pr-[25px] xl:py-[13px] xl:text-fs14">{`Kids Menu`}</Button>
            <Button className="2xl:px-[30px] 3xl:ml-[24px] 3xl:px-[36px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:px-[23px] lg:py-[11px] lg:text-fs12 ml-[20px] px-[30.5px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[10%] xl:ml-[17px] xl:px-[27px] xl:py-[13px] xl:text-fs14">{`Snacks`}</Button>
            <Button className="3xl:ml-[24px] 3xl:pl-[36px] 3xl:pr-[37px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:pl-[23px] lg:pr-[24px] lg:py-[11px] lg:text-fs12 ml-[20px] pl-[30px] pr-[31px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[13%] xl:ml-[17px] xl:pl-[26px] xl:pr-[27px] xl:py-[13px] xl:text-fs14">{`Lunch Break`}</Button>
            <Button className="2xl:pl-[31px] 2xl:pr-[30px] 3xl:ml-[24px] 3xl:pl-[37px] 3xl:pr-[36px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:pl-[24px] lg:pr-[23px] lg:py-[11px] lg:text-fs12 ml-[20px] pl-[31.5px] pr-[30.5px] py-[15px] rounded-radius25 shadow-bs23 text-center text-fs16 text-white_A700 w-[12%] xl:ml-[17px] xl:pl-[28px] xl:pr-[27px] xl:py-[13px] xl:text-fs14">{`Vegetarian`}</Button>
            <Button className="3xl:ml-[24px] 3xl:pl-[37px] 3xl:pr-[38px] 3xl:py-[18px] 3xl:text-fs19 bg-teal_902 border-2 border-solid border-white_A700 font-normal lg:ml-[15px] lg:px-[24px] lg:py-[11px] lg:text-fs12 ml-[20px] pl-[31px] pr-[32px] py-[15px] rounded-radius23 shadow-bs23 text-center text-fs16 text-white_A700 w-[13%] xl:ml-[17px] xl:pl-[27px] xl:pr-[28px] xl:py-[13px] xl:text-fs14">{`Beef Burger`}</Button>
            <Image
              src="img_button_9.svg"
              className="2xl:h-[47px] 3xl:h-[56px] 3xl:ml-[24px] 3xl:w-[55px] h-[46px] lg:h-[36px] lg:ml-[15px] lg:w-[35px] ml-[20px] object-contain w-[46px] xl:h-[41px] xl:ml-[17px] xl:w-[40px]"
              alt="Button"
            />
          </Row>
        </Column>
      </Column>
      <Column className="bg-white_A700 justify-center self-stretch w-[100%]">
        <Column className="3xl:mt-[132px] items-center lg:mt-[85px] mt-[110px] self-stretch w-[100%] xl:mt-[97px]">
          <Row className="font-barlowcondensed items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="3xl:ml-[181px] 3xl:text-fs86 font-barlowcondensed font-extrabold lg:ml-[117px] lg:text-fs56 ml-[151px] my-[1px] text-fs72 text-left text-teal_902 tracking-ls1 uppercase xl:ml-[134px] xl:text-fs64">{`Featured Products`}</Text>
            <Button className="3xl:mr-[180px] 3xl:pb-[24px] 3xl:pt-[21px] 3xl:px-[42px] 3xl:text-fs21 bg-orange_A200 border-2 border-solid border-white_A700 font-barlow font-bold lg:mr-[116px] lg:pb-[15px] lg:pt-[14px] lg:px-[27px] lg:text-fs14 mr-[150px] pb-[20px] pt-[18px] px-[35px] rounded-radius28 shadow-bs23 text-center text-fs18 text-teal_902 w-[14%] xl:mr-[133px] xl:pb-[17px] xl:pt-[16px] xl:px-[31px] xl:text-fs16">{`All Menu Lounge`}</Button>
          </Row>
        </Column>
        <List
          className="3xl:gap-[36px] 3xl:ml-[12px] 3xl:mt-[67px] flex-wrap gap-[30px] grid grid-cols-5 lg:gap-[23px] lg:ml-[7px] lg:mt-[43px] min-h-[auto] ml-[10px] mt-[56px] w-[90%] xl:gap-[26px] xl:ml-[8px] xl:mt-[49px]"
          orientation="horizontal"
        >
          <Column className="font-barlow justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_insertyourima_30.svg"
                className="2xl:h-[276px] 3xl:h-[331px] h-[275px] lg:h-[214px] object-cover self-stretch w-[100%] xl:h-[245px]"
                alt="Insertyourima"
              />
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs26 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs17 mr-[10px] mt-[24px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[21px] xl:text-fs19">{`BUFFALO CHICKEN DIP`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal leading-lh2600 lg:leading-lh20 lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-left text-teal_902 w-[72%] xl:leading-lh23 xl:mr-[8px] xl:mt-[7px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum is typically a`}
                  <br />
                  {`corrupted version of finibus`}
                </>
              }
            </Text>
            <Row className="3xl:mb-[33px] 3xl:mr-[12px] 3xl:mt-[19px] font-barlowmedium justify-start lg:mb-[21px] lg:mr-[7px] lg:mt-[12px] mb-[28px] mr-[10px] mt-[16px] w-[76%] xl:mb-[24px] xl:mr-[8px] xl:mt-[14px]">
              <Image
                src="img_thumbsup.svg"
                className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:mb-[1px] mb-[2px] object-contain w-[10%] xl:h-[18px] xl:mb-[1px]"
                alt="thumbsup"
              />
              <Text className="2xl:ml-[10px] 3xl:ml-[12px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:text-fs14 ml-[10.320007px] text-fs18 text-left text-teal_902 tracking-ls1 uppercase xl:ml-[9px] xl:text-fs16">{`98%`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[24px] h-[20px] lg:h-[16px] lg:ml-[15px] ml-[20px] my-[1px] object-contain w-[58%] xl:h-[18px] xl:ml-[17px]"
                alt="Star"
              />
            </Row>
          </Column>
          <Column className="font-barlow justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_insertyourima_31.svg"
                className="2xl:h-[276px] 3xl:h-[331px] h-[275px] lg:h-[214px] object-cover self-stretch w-[100%] xl:h-[245px]"
                alt="Insertyourima"
              />
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs26 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs17 mr-[10px] mt-[24px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[21px] xl:text-fs19">{`Ori Ranch Chop`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal leading-lh2600 lg:leading-lh20 lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-left text-teal_902 w-[72%] xl:leading-lh23 xl:mr-[8px] xl:mt-[7px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum is typically a`}
                  <br />
                  {`corrupted version of finibus`}
                </>
              }
            </Text>
            <Row className="3xl:mb-[33px] 3xl:mr-[12px] 3xl:mt-[19px] font-barlowmedium justify-start lg:mb-[21px] lg:mr-[7px] lg:mt-[12px] mb-[28px] mr-[10px] mt-[16px] w-[76%] xl:mb-[24px] xl:mr-[8px] xl:mt-[14px]">
              <Image
                src="img_thumbsup.svg"
                className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:mb-[1px] mb-[2px] object-contain w-[10%] xl:h-[18px] xl:mb-[1px]"
                alt="thumbsup"
              />
              <Text className="2xl:ml-[10px] 3xl:ml-[12px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:text-fs14 ml-[10.320007px] text-fs18 text-left text-teal_902 tracking-ls1 uppercase xl:ml-[9px] xl:text-fs16">{`93%`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[24px] h-[20px] lg:h-[16px] lg:ml-[15px] ml-[20px] my-[1px] object-contain w-[58%] xl:h-[18px] xl:ml-[17px]"
                alt="Star"
              />
            </Row>
          </Column>
          <Column className="font-barlow justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_insertyourima_32.svg"
                className="2xl:h-[276px] 3xl:h-[331px] h-[275px] lg:h-[214px] object-cover self-stretch w-[100%] xl:h-[245px]"
                alt="Insertyourima"
              />
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs26 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs17 mr-[10px] mt-[24px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[21px] xl:text-fs19">{`Baked Brandh`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal leading-lh2600 lg:leading-lh20 lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-left text-teal_902 w-[72%] xl:leading-lh23 xl:mr-[8px] xl:mt-[7px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum is typically a`}
                  <br />
                  {`corrupted version of finibus`}
                </>
              }
            </Text>
            <Row className="3xl:mb-[33px] 3xl:mr-[12px] 3xl:mt-[19px] font-barlowmedium justify-start lg:mb-[21px] lg:mr-[7px] lg:mt-[12px] mb-[28px] mr-[10px] mt-[16px] w-[76%] xl:mb-[24px] xl:mr-[8px] xl:mt-[14px]">
              <Image
                src="img_thumbsup.svg"
                className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:mb-[1px] mb-[2px] object-contain w-[10%] xl:h-[18px] xl:mb-[1px]"
                alt="thumbsup"
              />
              <Text className="2xl:ml-[10px] 3xl:ml-[12px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:text-fs14 ml-[10.320007px] text-fs18 text-left text-teal_902 tracking-ls1 uppercase xl:ml-[9px] xl:text-fs16">{`92%`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[24px] h-[20px] lg:h-[16px] lg:ml-[15px] ml-[20px] my-[1px] object-contain w-[58%] xl:h-[18px] xl:ml-[17px]"
                alt="Star"
              />
            </Row>
          </Column>
          <Column className="font-barlow justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_insertyourima_33.svg"
                className="2xl:h-[276px] 3xl:h-[331px] h-[275px] lg:h-[214px] object-cover self-stretch w-[100%] xl:h-[245px]"
                alt="Insertyourima"
              />
            </Column>
            <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs26 font-bold lg:mr-[7px] lg:mt-[18px] lg:text-fs17 mr-[10px] mt-[24px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[21px] xl:text-fs19">{`Vegetables Salad`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-normal leading-lh2600 lg:leading-lh20 lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-left text-teal_902 w-[72%] xl:leading-lh23 xl:mr-[8px] xl:mt-[7px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum is typically a`}
                  <br />
                  {`corrupted version of finibus`}
                </>
              }
            </Text>
            <Row className="3xl:mb-[33px] 3xl:mr-[12px] 3xl:mt-[19px] font-barlowmedium justify-start lg:mb-[21px] lg:mr-[7px] lg:mt-[12px] mb-[28px] mr-[10px] mt-[16px] w-[76%] xl:mb-[24px] xl:mr-[8px] xl:mt-[14px]">
              <Image
                src="img_thumbsup.svg"
                className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:mb-[1px] mb-[2px] object-contain w-[10%] xl:h-[18px] xl:mb-[1px]"
                alt="thumbsup"
              />
              <Text className="2xl:ml-[10px] 3xl:ml-[12px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:text-fs14 ml-[10.319946px] text-fs18 text-left text-teal_902 tracking-ls1 uppercase xl:ml-[9px] xl:text-fs16">{`88%`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[24px] h-[20px] lg:h-[16px] lg:ml-[15px] ml-[20px] my-[1px] object-contain w-[58%] xl:h-[18px] xl:ml-[17px]"
                alt="Star"
              />
            </Row>
          </Column>
          <Column className="font-barlow justify-start w-[100%]">
            <Column className="items-center self-stretch w-[100%]">
              <Image
                src="img_insertyourima_34.svg"
                className="2xl:h-[276px] 3xl:h-[331px] h-[275px] lg:h-[214px] object-cover self-stretch w-[100%] xl:h-[245px]"
                alt="Insertyourima"
              />
            </Column>
            <Text className="3xl:mt-[28px] 3xl:text-fs26 font-bold lg:mt-[18px] lg:text-fs17 mt-[24px] self-stretch text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mt-[21px] xl:text-fs19">{`Baked Brandh`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[9px] 3xl:text-fs19 font-normal leading-lh2600 lg:leading-lh20 lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-left text-teal_902 w-[100%] xl:leading-lh23 xl:mt-[7px] xl:text-fs14">
              {
                <>
                  {`Lorem ipsum is typically a`}
                  <br />
                  {`corrupted version of finibus`}
                </>
              }
            </Text>
            <Column className="3xl:mb-[33px] 3xl:mt-[19px] items-center lg:mb-[21px] lg:mt-[12px] mb-[28px] mt-[16px] self-stretch w-[100%] xl:mb-[24px] xl:mt-[14px]">
              <Row className="font-barlowmedium justify-between px-[0] self-stretch w-[100%]">
                <Image
                  src="img_thumbsup.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:mb-[1px] mb-[2px] object-contain w-[18%] xl:h-[18px] xl:mb-[1px]"
                  alt="thumbsup"
                />
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-fs18 text-left text-teal_902 tracking-ls1 uppercase xl:text-fs16">{`83%`}</Text>
                <Image
                  src="img_star_4.svg"
                  className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] my-[1px] object-contain w-[22%] xl:h-[18px]"
                  alt="Star"
                />
              </Row>
            </Column>
          </Column>
        </List>
        <Column className="3xl:mb-[120px] 3xl:mt-[76px] items-center lg:mb-[77px] lg:mt-[49px] mb-[100px] mt-[64px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[56px]">
          <Row className="items-center justify-start mx-[auto] w-[79%]">
            <ProgressBar.Line
              className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[31px] 3xl:mt-[32px] bg-gray_304 h-[3px] lg:mb-[20px] lg:mt-[21px] mb-[26px] mt-[27px] w-[84%] xl:mb-[23px] xl:mt-[24px]"
              percent="58"
              strokeColor="#005c33"
              trailColor="#e0e0e0"
              name="Group433"
            ></ProgressBar.Line>
            <Image
              src="img_button_10.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[57px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[37px] lg:w-[43px] ml-[48px] object-contain w-[56px] xl:h-[50px] xl:ml-[42px] xl:w-[49px]"
              alt="Button"
            />
            <Image
              src="img_button_11.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[24px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[15px] lg:w-[43px] ml-[20px] object-contain w-[56px] xl:h-[50px] xl:ml-[17px] xl:w-[49px]"
              alt="Button"
            />
          </Row>
        </Column>
      </Column>
      <Column className="bg-teal_902 justify-center self-stretch w-[100%]">
        <Column className="3xl:mt-[120px] items-center lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Row className="font-barlowcondensed items-end justify-end self-stretch w-[100%]">
            <Text className="2xl:leading-lh82 3xl:leading-lh98 3xl:ml-[181px] 3xl:text-fs86 font-barlowcondensed font-extrabold leading-lh8200 lg:leading-lh63 lg:ml-[117px] lg:text-fs56 ml-[151px] text-fs72 text-left text-white_A700 tracking-ls1 uppercase w-[33%] xl:leading-lh72 xl:ml-[134px] xl:text-fs64">
              {
                <>
                  {`New Week.`}
                  <br />
                  {`New Meals Menu`}
                </>
              }
            </Text>
            <Button className="3xl:ml-[262px] 3xl:mt-[129px] 3xl:pb-[24px] 3xl:pl-[39px] 3xl:pr-[40px] 3xl:pt-[21px] 3xl:text-fs21 bg-orange_A200 border-2 border-solid border-white_A700 font-barlow font-bold lg:ml-[170px] lg:mt-[84px] lg:pb-[15px] lg:pl-[25px] lg:pr-[26px] lg:pt-[14px] lg:text-fs14 ml-[219px] mt-[108px] pb-[20px] pl-[33px] pr-[34px] pt-[18px] rounded-radius28 shadow-bs23 text-center text-fs18 text-teal_902 w-[16%] xl:ml-[194px] xl:mt-[96px] xl:pb-[17px] xl:pl-[29px] xl:pr-[30px] xl:pt-[16px] xl:text-fs16">{`Save to Weekly Plan`}</Button>
            <Button className="2xl:pl-[31px] 2xl:pr-[30px] 3xl:ml-[43px] 3xl:mr-[180px] 3xl:mt-[129px] 3xl:pb-[24px] 3xl:pl-[37px] 3xl:pr-[36px] 3xl:pt-[21px] 3xl:text-fs21 bg-teal_902 border-2 border-solid border-white_A700 font-barlow font-bold lg:ml-[28px] lg:mr-[116px] lg:mt-[84px] lg:pb-[15px] lg:pl-[24px] lg:pr-[23px] lg:pt-[14px] lg:text-fs14 ml-[36px] mr-[150px] mt-[108px] pb-[20px] pl-[31.5px] pr-[30.5px] pt-[18px] rounded-radius28 text-center text-fs18 text-white_A700 w-[13%] xl:ml-[32px] xl:mr-[133px] xl:mt-[96px] xl:pb-[17px] xl:pl-[28px] xl:pr-[27px] xl:pt-[16px] xl:text-fs16">{`View Plans Meal`}</Button>
          </Row>
        </Column>
        <List
          className="2xl:mt-[79px] 3xl:gap-[43px] 3xl:ml-[12px] 3xl:mt-[95px] flex-wrap gap-[36px] grid grid-cols-5 lg:gap-[28px] lg:ml-[7px] lg:mt-[61px] min-h-[auto] ml-[10px] mt-[79.70996px] w-[90%] xl:gap-[32px] xl:ml-[8px] xl:mt-[70px]"
          orientation="horizontal"
        >
          <Stack className="2xl:h-[456px] 3xl:h-[547px] 3xl:mt-[48px] h-[455.29004px] lg:h-[355px] lg:mt-[31px] mt-[40px] w-[100%] xl:h-[406px] xl:mt-[35px]">
            <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_35.svg"
                className="2xl:h-[280px] 3xl:h-[336px] h-[279.58px] lg:h-[218px] object-cover self-stretch w-[100%] xl:h-[249px]"
                alt="Insertyourima"
              />
              <div className="2xl:h-[179px] 3xl:h-[214px] h-[178px] lg:h-[139px] mx-[auto] w-[98%] xl:h-[159px]"></div>
            </Column>
            <Column className="2xl:left-[2px] 3xl:bottom-[28px] 3xl:left-[2px] absolute bottom-[24px] font-barlowcondensed justify-start left-[2.38px] lg:bottom-[18px] lg:left-[1px] w-[83%] xl:bottom-[21px] xl:left-[2px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs48 font-barlowcondensed font-extrabold lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs35">{`Monday`}</Text>
              <Text className="3xl:mt-[12px] 3xl:text-fs26 font-barlow font-bold lg:mt-[7px] lg:text-fs17 mt-[10px] self-stretch text-fs22 text-left text-white_A700 tracking-ls1 uppercase xl:mt-[8px] xl:text-fs19">{`BUFFALO CHICKEN DIP`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[12px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] object-contain w-[52%] xl:h-[18px] xl:mr-[8px] xl:mt-[17px]"
                alt="Star"
              />
            </Column>
          </Stack>
          <Stack className="2xl:h-[456px] 3xl:h-[547px] 3xl:mb-[48px] h-[455.29004px] lg:h-[355px] lg:mb-[31px] mb-[40px] w-[100%] xl:h-[406px] xl:mb-[35px]">
            <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_36.svg"
                className="2xl:h-[280px] 3xl:h-[336px] h-[279.58px] lg:h-[218px] object-cover self-stretch w-[100%] xl:h-[249px]"
                alt="Insertyourima"
              />
              <div className="2xl:h-[179px] 3xl:h-[214px] h-[178px] lg:h-[139px] mx-[auto] w-[98%] xl:h-[159px]"></div>
            </Column>
            <Column className="2xl:left-[2px] 3xl:bottom-[28px] 3xl:left-[2px] absolute bottom-[24px] font-barlowcondensed justify-start left-[2.38px] lg:bottom-[18px] lg:left-[1px] w-[63%] xl:bottom-[21px] xl:left-[2px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs48 font-barlowcondensed font-extrabold lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs35">{`Tuesday`}</Text>
              <Text className="3xl:mt-[12px] 3xl:text-fs26 font-barlow font-bold lg:mt-[7px] lg:text-fs17 mt-[10px] self-stretch text-fs22 text-left text-white_A700 tracking-ls1 uppercase xl:mt-[8px] xl:text-fs19">{`Ori Ranch Chop`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[12px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] object-contain w-[69%] xl:h-[18px] xl:mr-[8px] xl:mt-[17px]"
                alt="Star"
              />
            </Column>
          </Stack>
          <Stack className="2xl:h-[456px] 3xl:h-[547px] 3xl:mt-[48px] h-[455.29004px] lg:h-[355px] lg:mt-[31px] mt-[40px] w-[100%] xl:h-[406px] xl:mt-[35px]">
            <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_37.svg"
                className="2xl:h-[280px] 3xl:h-[336px] h-[279.58px] lg:h-[218px] object-cover self-stretch w-[100%] xl:h-[249px]"
                alt="Insertyourima"
              />
              <div className="2xl:h-[179px] 3xl:h-[214px] h-[178px] lg:h-[139px] mx-[auto] w-[98%] xl:h-[159px]"></div>
            </Column>
            <Column className="2xl:left-[2px] 3xl:bottom-[28px] 3xl:left-[2px] absolute bottom-[24px] font-barlowcondensed justify-start left-[2.38px] lg:bottom-[18px] lg:left-[1px] w-[67%] xl:bottom-[21px] xl:left-[2px]">
              <Text className="3xl:text-fs48 font-barlowcondensed font-extrabold lg:text-fs31 self-stretch text-fs40 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs35">{`Wednesday`}</Text>
              <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs26 font-barlow font-bold lg:mr-[7px] lg:mt-[7px] lg:text-fs17 mr-[10px] mt-[10px] text-fs22 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[8px] xl:text-fs19">{`Baked Brandh`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[12px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] object-contain w-[64%] xl:h-[18px] xl:mr-[8px] xl:mt-[17px]"
                alt="Star"
              />
            </Column>
          </Stack>
          <Stack className="2xl:h-[456px] 3xl:h-[547px] 3xl:mb-[48px] h-[455.29004px] lg:h-[355px] lg:mb-[31px] mb-[40px] w-[100%] xl:h-[406px] xl:mb-[35px]">
            <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_insertyourima_38.svg"
                className="2xl:h-[280px] 3xl:h-[336px] h-[279.58px] lg:h-[218px] object-cover self-stretch w-[100%] xl:h-[249px]"
                alt="Insertyourima"
              />
              <div className="2xl:h-[179px] 3xl:h-[214px] h-[178px] lg:h-[139px] mx-[auto] w-[98%] xl:h-[159px]"></div>
            </Column>
            <Column className="2xl:left-[2px] 3xl:bottom-[28px] 3xl:left-[2px] absolute bottom-[24px] font-barlowcondensed justify-start left-[2.38px] lg:bottom-[18px] lg:left-[1px] w-[77%] xl:bottom-[21px] xl:left-[2px]">
              <Text className="3xl:mr-[12px] 3xl:text-fs48 font-barlowcondensed font-extrabold lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs35">{`Thursday`}</Text>
              <Text className="3xl:mt-[12px] 3xl:text-fs26 font-barlow font-bold lg:mt-[7px] lg:text-fs17 mt-[10px] self-stretch text-fs22 text-left text-white_A700 tracking-ls1 uppercase xl:mt-[8px] xl:text-fs19">{`Vegetables Salad`}</Text>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[12px] 3xl:mt-[24px] h-[20px] lg:h-[16px] lg:mr-[7px] lg:mt-[15px] mr-[10px] mt-[20px] object-contain w-[56%] xl:h-[18px] xl:mr-[8px] xl:mt-[17px]"
                alt="Star"
              />
            </Column>
          </Stack>
          <Column className="3xl:mt-[48px] items-center justify-start lg:mt-[31px] mt-[40px] w-[100%] xl:mt-[35px]">
            <Image
              src="img_insertyourima_39.svg"
              className="2xl:h-[280px] 3xl:h-[336px] h-[279.58px] lg:h-[218px] object-cover self-stretch w-[100%] xl:h-[249px]"
              alt="Insertyourima"
            />
            <Stack className="2xl:h-[179px] 2xl:ml-[2px] 3xl:h-[214px] 3xl:ml-[2px] font-barlow h-[178px] lg:h-[139px] lg:ml-[1px] ml-[2.380005px] w-[97%] xl:h-[159px] xl:ml-[2px]">
              <div className="2xl:h-[179px] 3xl:h-[214px] absolute h-[178px] inset-[0] lg:h-[139px] w-[100%] xl:h-[159px]"></div>
              <Image
                src="img_star_4.svg"
                className="2xl:h-[21px] 3xl:bottom-[28px] 3xl:h-[25px] absolute bottom-[24px] h-[20px] inset-x-[0] lg:bottom-[18px] lg:h-[16px] object-contain w-[100%] xl:bottom-[21px] xl:h-[18px]"
                alt="Star"
              />
              <Text className="3xl:bottom-[76px] 3xl:text-fs26 absolute bottom-[64px] font-barlow font-bold inset-x-[0] lg:bottom-[49px] lg:text-fs17 mx-[auto] text-fs22 text-left text-white_A700 tracking-ls1 uppercase w-[max-content] xl:bottom-[56px] xl:text-fs19">{`BUFFALO CHICKEN DIP`}</Text>
              <Text className="3xl:text-fs48 3xl:top-[28px] absolute font-barlowcondensed font-extrabold inset-x-[0] lg:text-fs31 lg:top-[18px] mx-[auto] text-fs40 text-left text-white_A700 top-[24px] tracking-ls1 uppercase w-[max-content] xl:text-fs35 xl:top-[21px]">{`Friday`}</Text>
            </Stack>
          </Column>
        </List>
        <Column className="3xl:mb-[120px] 3xl:mt-[96px] items-center lg:mb-[77px] lg:mt-[62px] mb-[100px] mt-[80px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[71px]">
          <Row className="items-center justify-start mx-[auto] w-[79%]">
            <ProgressBar.Line
              className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[31px] 3xl:mt-[32px] bg-bluegray_701 h-[3px] lg:mb-[20px] lg:mt-[21px] mb-[26px] mt-[27px] w-[84%] xl:mb-[23px] xl:mt-[24px]"
              percent="58"
              strokeColor="#ffffff"
              trailColor="#337859"
              name="Group434"
            ></ProgressBar.Line>
            <Image
              src="img_button_12.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[57px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[37px] lg:w-[43px] ml-[48px] object-contain w-[56px] xl:h-[50px] xl:ml-[42px] xl:w-[49px]"
              alt="Button"
            />
            <Image
              src="img_button_13.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[24px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[15px] lg:w-[43px] ml-[20px] object-contain w-[56px] xl:h-[50px] xl:ml-[17px] xl:w-[49px]"
              alt="Button"
            />
          </Row>
        </Column>
      </Column>
      <Row className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
        <Image
          src="img_insertyourima_40.svg"
          className="2xl:h-[506px] 3xl:h-[607px] 3xl:mb-[120px] 3xl:ml-[180px] 3xl:mt-[132px] h-[505px] lg:h-[393px] lg:mb-[77px] lg:ml-[116px] lg:mt-[85px] mb-[100px] ml-[150px] mt-[110px] object-contain w-[37%] xl:h-[450px] xl:mb-[88px] xl:ml-[133px] xl:mt-[97px]"
          alt="Insertyourima"
        />
        <Column className="3xl:mb-[170px] 3xl:ml-[105px] 3xl:mr-[180px] 3xl:mt-[183px] font-barlow justify-start lg:mb-[110px] lg:ml-[68px] lg:mr-[116px] lg:mt-[119px] mb-[142px] ml-[88px] mr-[150px] mt-[153px] w-[36%] xl:mb-[126px] xl:ml-[78px] xl:mr-[133px] xl:mt-[136px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`FEATURED RECIPE`}</Text>
          <Text className="2xl:leading-lh82 3xl:leading-lh98 3xl:mt-[28px] 3xl:text-fs86 font-barlowcondensed font-extrabold leading-lh8200 lg:leading-lh63 lg:mt-[18px] lg:text-fs56 mt-[24px] self-stretch text-fs72 text-left text-teal_902 tracking-ls1 uppercase w-[100%] xl:leading-lh72 xl:mt-[21px] xl:text-fs64">{`TIKTOK RANCH CHICKEN TOSTADAS`}</Text>
          <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs24 font-barlow font-normal leading-lh3000 lg:leading-lh23 lg:mr-[7px] lg:mt-[12px] lg:text-fs15 mr-[10px] mt-[16px] text-fs20 text-left text-teal_902 w-[88%] xl:leading-lh26 xl:mr-[8px] xl:mt-[14px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
          <Button className="3xl:mr-[12px] 3xl:mt-[57px] 3xl:pb-[24px] 3xl:pt-[21px] 3xl:px-[42px] 3xl:text-fs21 bg-teal_902 border-2 border-solid border-white_A700 font-barlow font-bold lg:mr-[7px] lg:mt-[37px] lg:pb-[15px] lg:pt-[14px] lg:px-[27px] lg:text-fs14 mr-[10px] mt-[48px] pb-[20px] pt-[18px] px-[35px] rounded-radius28 shadow-bs23 text-center text-fs18 text-white_A700 w-[36%] xl:mr-[8px] xl:mt-[42px] xl:pb-[17px] xl:pt-[16px] xl:px-[31px] xl:text-fs16">{`View Recipe`}</Button>
        </Column>
      </Row>
      <Row className="bg-white_A700 font-barlow items-center justify-start self-stretch w-[100%]">
        <Column className="3xl:mb-[170px] 3xl:ml-[216px] 3xl:mt-[171px] justify-start lg:mb-[110px] lg:ml-[140px] lg:mt-[111px] mb-[142px] ml-[180px] mt-[143px] w-[32%] xl:mb-[126px] xl:ml-[160px] xl:mt-[127px]">
          <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`FEATURED RECIPE`}</Text>
          <Text className="2xl:leading-lh82 3xl:leading-lh98 3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs86 font-barlowcondensed font-extrabold leading-lh8200 lg:leading-lh63 lg:mr-[7px] lg:mt-[18px] lg:text-fs56 mr-[10px] mt-[24px] text-fs72 text-left text-teal_902 tracking-ls1 uppercase w-[84%] xl:leading-lh72 xl:mr-[8px] xl:mt-[21px] xl:text-fs64">
            {
              <>
                {`EASY TATER`}
                <br />
                {`TOT CRAFFLES`}
              </>
            }
          </Text>
          <Text className="2xl:leading-lh30 3xl:leading-lh36 3xl:mt-[19px] 3xl:text-fs24 font-barlow font-normal leading-lh3000 lg:leading-lh23 lg:mt-[12px] lg:text-fs15 mt-[16px] self-stretch text-fs20 text-left text-teal_902 w-[100%] xl:leading-lh26 xl:mt-[14px] xl:text-fs17">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.`}</Text>
          <Button className="3xl:mr-[12px] 3xl:mt-[57px] 3xl:pb-[24px] 3xl:pt-[21px] 3xl:px-[42px] 3xl:text-fs21 bg-teal_902 border-2 border-solid border-white_A700 font-barlow font-bold lg:mr-[7px] lg:mt-[37px] lg:pb-[15px] lg:pt-[14px] lg:px-[27px] lg:text-fs14 mr-[10px] mt-[48px] pb-[20px] pt-[18px] px-[35px] rounded-radius28 shadow-bs23 text-center text-fs18 text-white_A700 w-[41%] xl:mr-[8px] xl:mt-[42px] xl:pb-[17px] xl:pt-[16px] xl:px-[31px] xl:text-fs16">{`View Recipe`}</Button>
        </Column>
        <Image
          src="img_insertyourima_41.svg"
          className="2xl:h-[506px] 3xl:h-[607px] 3xl:ml-[110px] 3xl:mr-[216px] 3xl:my-[120px] h-[505px] lg:h-[393px] lg:ml-[71px] lg:mr-[140px] lg:my-[77px] ml-[92px] mr-[180px] my-[100px] object-contain w-[37%] xl:h-[450px] xl:ml-[81px] xl:mr-[160px] xl:my-[88px]"
          alt="Insertyourima"
        />
      </Row>
      <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
        <Line className="bg-teal_902 h-[3px] mx-[auto] w-[14%]" />
        <Row className="2xl:mt-[97px] 3xl:mt-[116px] items-center justify-start lg:mt-[75px] mt-[97.180176px] self-stretch w-[100%] xl:mt-[86px]">
          <Image
            src="img_insertyourima_42.svg"
            className="2xl:h-[215px] 2xl:ml-[215px] 2xl:w-[214px] 3xl:h-[258px] 3xl:ml-[258px] 3xl:w-[257px] h-[214.65px] lg:h-[167px] lg:ml-[167px] lg:w-[166px] ml-[215.17px] object-contain w-[214.65px] xl:h-[191px] xl:ml-[191px] xl:w-[190px]"
            alt="Insertyourima"
          />
          <Column className="2xl:ml-[62px] 2xl:my-[20px] 3xl:mb-[25px] 3xl:ml-[74px] 3xl:mr-[631px] 3xl:mt-[24px] font-barlow justify-start lg:ml-[48px] lg:mr-[409px] lg:my-[16px] mb-[20.830078px] ml-[62.179993px] mr-[526px] mt-[20.819824px] w-[29%] xl:ml-[55px] xl:mr-[467px] xl:my-[18px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`MEALS CATEGORY`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs108 font-barlowcondensed font-extrabold lg:mt-[6px] lg:text-fs70 mt-[8px] self-stretch text-fs90 text-left text-teal_902 tracking-ls1 uppercase xl:mt-[7px] xl:text-fs80">{`The newest`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs26 font-barlow font-bold lg:mr-[7px] lg:mt-[8px] lg:text-fs17 mr-[10px] mt-[11px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[9px] xl:text-fs19">{`BUFFALO CHICKEN DIP`}</Text>
          </Column>
        </Row>
        <Row className="2xl:mt-[68px] 3xl:mt-[82px] font-barlow items-center justify-center lg:mt-[53px] mt-[68.3501px] w-[100%] xl:mt-[60px]">
          <Column className="2xl:my-[20px] 3xl:mb-[25px] 3xl:ml-[530px] 3xl:mt-[24px] justify-start lg:ml-[343px] lg:my-[16px] mb-[20.830078px] ml-[442px] mt-[20.819824px] w-[35%] xl:ml-[393px] xl:my-[18px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`MEALS CATEGORY`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs108 font-barlowcondensed font-extrabold lg:mt-[6px] lg:text-fs70 mt-[8px] self-stretch text-fs90 text-left text-teal_902 tracking-ls1 uppercase xl:mt-[7px] xl:text-fs80">{`Fan Favourite`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs26 font-barlow font-bold lg:mr-[7px] lg:mt-[8px] lg:text-fs17 mr-[10px] mt-[11px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[9px] xl:text-fs19">{`Ori Ranch Chop`}</Text>
          </Column>
          <Image
            src="img_insertyourima_43.svg"
            className="2xl:h-[215px] 2xl:ml-[68px] 2xl:mr-[216px] 2xl:w-[214px] 3xl:h-[258px] 3xl:ml-[81px] 3xl:mr-[259px] 3xl:w-[257px] h-[214.65px] lg:h-[167px] lg:ml-[53px] lg:mr-[168px] lg:w-[166px] ml-[68.16998px] mr-[216.18005px] object-contain w-[214.65px] xl:h-[191px] xl:ml-[60px] xl:mr-[192px] xl:w-[190px]"
            alt="Insertyourima"
          />
        </Row>
        <Row className="2xl:mt-[68px] 3xl:mt-[82px] items-center justify-start lg:mt-[53px] mt-[68.3501px] self-stretch w-[100%] xl:mt-[60px]">
          <Image
            src="img_insertyourima_44.svg"
            className="2xl:h-[215px] 2xl:ml-[215px] 2xl:w-[214px] 3xl:h-[258px] 3xl:ml-[258px] 3xl:w-[257px] h-[214.65px] lg:h-[167px] lg:ml-[167px] lg:w-[166px] ml-[215.17px] object-contain w-[214.65px] xl:h-[191px] xl:ml-[191px] xl:w-[190px]"
            alt="Insertyourima"
          />
          <Column className="2xl:ml-[62px] 2xl:my-[20px] 3xl:mb-[25px] 3xl:ml-[74px] 3xl:mr-[563px] 3xl:mt-[24px] font-barlow justify-start lg:ml-[48px] lg:mr-[364px] lg:my-[16px] mb-[20.830078px] ml-[62.179993px] mr-[469px] mt-[20.819824px] w-[33%] xl:ml-[55px] xl:mr-[417px] xl:my-[18px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`MEALS CATEGORY`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs108 font-barlowcondensed font-extrabold lg:mt-[6px] lg:text-fs70 mt-[8px] self-stretch text-fs90 text-left text-teal_902 tracking-ls1 uppercase xl:mt-[7px] xl:text-fs80">{`GRILL ASYIQUE`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs26 font-barlow font-bold lg:mr-[7px] lg:mt-[8px] lg:text-fs17 mr-[10px] mt-[11px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[9px] xl:text-fs19">{`Baked Brandh`}</Text>
          </Column>
        </Row>
        <Row className="2xl:mb-[100px] 2xl:mt-[68px] 3xl:mb-[120px] 3xl:mt-[82px] font-barlow items-center justify-center lg:mb-[77px] lg:mt-[53px] mb-[100.16992px] mt-[68.3501px] w-[100%] xl:mb-[89px] xl:mt-[60px]">
          <Column className="2xl:my-[20px] 3xl:mb-[25px] 3xl:ml-[530px] 3xl:mt-[24px] justify-start lg:ml-[343px] lg:my-[16px] mb-[20.830078px] ml-[442px] mt-[20.819824px] w-[31%] xl:ml-[393px] xl:my-[18px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs21 font-barlow font-bold lg:mr-[7px] lg:text-fs14 mr-[10px] text-fs18 text-left text-orange_A200 tracking-ls1 uppercase xl:mr-[8px] xl:text-fs16">{`MEALS CATEGORY`}</Text>
            <Text className="3xl:mt-[9px] 3xl:text-fs108 font-barlowcondensed font-extrabold lg:mt-[6px] lg:text-fs70 mt-[8px] self-stretch text-fs90 text-left text-teal_902 tracking-ls1 uppercase xl:mt-[7px] xl:text-fs80">{`DINNER IDEAS`}</Text>
            <Text className="3xl:mr-[12px] 3xl:mt-[13px] 3xl:text-fs26 font-barlow font-bold lg:mr-[7px] lg:mt-[8px] lg:text-fs17 mr-[10px] mt-[11px] text-fs22 text-left text-teal_902 tracking-ls1 uppercase xl:mr-[8px] xl:mt-[9px] xl:text-fs19">{`Vegetables Salad`}</Text>
          </Column>
          <Image
            src="img_insertyourima_45.svg"
            className="2xl:h-[215px] 2xl:ml-[115px] 2xl:mr-[216px] 2xl:w-[214px] 3xl:h-[258px] 3xl:ml-[138px] 3xl:mr-[259px] 3xl:w-[257px] h-[214.65px] lg:h-[167px] lg:ml-[89px] lg:mr-[168px] lg:w-[166px] ml-[115.16998px] mr-[216.18005px] object-contain w-[214.65px] xl:h-[191px] xl:ml-[102px] xl:mr-[192px] xl:w-[190px]"
            alt="Insertyourima"
          />
        </Row>
      </Column>
      <Column className="bg-teal_902 font-barlow justify-start self-stretch w-[100%]">
        <Column className="3xl:mt-[120px] items-center lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Row className="font-barlowcondensed items-center justify-start self-stretch w-[100%]">
            <Image
              src="img_insertyourima_46.svg"
              className="2xl:h-[236px] 3xl:h-[283px] 3xl:mb-[7px] 3xl:ml-[180px] 3xl:mt-[6px] 3xl:w-[282px] h-[235px] lg:h-[183px] lg:mb-[4px] lg:ml-[116px] lg:mt-[3px] lg:w-[182px] mb-[6px] ml-[150px] mt-[5px] object-contain w-[235px] xl:h-[210px] xl:mb-[5px] xl:ml-[133px] xl:mt-[4px] xl:w-[209px]"
              alt="Insertyourima"
            />
            <Text className="2xl:leading-lh82 3xl:leading-lh98 3xl:ml-[86px] 3xl:mr-[242px] 3xl:text-fs86 font-extrabold leading-lh8200 lg:leading-lh63 lg:ml-[56px] lg:mr-[157px] lg:text-fs56 ml-[72px] mr-[202px] text-fs72 text-left text-white_A700 tracking-ls1 uppercase w-[54%] xl:leading-lh72 xl:ml-[64px] xl:mr-[179px] xl:text-fs64">{`“really help my busy day when I don’t have a time to go outside”`}</Text>
          </Row>
        </Column>
        <Text className="2xl:tracking-ls1 3xl:mt-[48px] 3xl:mx-[548px] 3xl:text-fs28 3xl:tracking-ls2 font-bold lg:mt-[31px] lg:mx-[355px] lg:text-fs18 lg:tracking-ls1 mt-[40px] mx-[457px] text-fs24 text-left text-orange_A200 tracking-ls17142857313156128 uppercase xl:mt-[35px] xl:mx-[406px] xl:text-fs21 xl:tracking-ls1">{`Raymond Rodrigo`}</Text>
        <Column className="3xl:mb-[120px] 3xl:mt-[76px] items-end lg:mb-[77px] lg:mt-[49px] mb-[100px] mt-[64px] self-stretch w-[100%] xl:mb-[88px] xl:mt-[56px]">
          <Row className="3xl:mx-[187px] items-center justify-end lg:mx-[121px] mx-[156px] w-[57%] xl:mx-[138px]">
            <ProgressBar.Line
              className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[31px] 3xl:mt-[32px] bg-bluegray_701 h-[3px] lg:mb-[20px] lg:mt-[21px] mb-[26px] mt-[27px] w-[79%] xl:mb-[23px] xl:mt-[24px]"
              percent="39"
              strokeColor="#ffffff"
              trailColor="#337859"
              name="Group435"
            ></ProgressBar.Line>
            <Image
              src="img_button_14.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[48px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[31px] lg:w-[43px] ml-[40px] object-contain w-[56px] xl:h-[50px] xl:ml-[35px] xl:w-[49px]"
              alt="Button"
            />
            <Image
              src="img_button_15.svg"
              className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[24px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[15px] lg:w-[43px] ml-[20px] object-contain w-[56px] xl:h-[50px] xl:ml-[17px] xl:w-[49px]"
              alt="Button"
            />
          </Row>
        </Column>
      </Column>
      <div className="self-stretch w-[100%]">
        <Stack className="2xl:h-[632px] 3xl:h-[758px] h-[631px] lg:h-[491px] self-stretch w-[100%] xl:h-[562px]">
          <Image
            src="img_base_6.svg"
            className="2xl:h-[632px] 3xl:h-[758px] absolute h-[631px] inset-[0] lg:h-[491px] object-cover self-stretch w-[100%] xl:h-[562px]"
            alt="Base"
          />
          <Column className="absolute font-barlowcondensed h-[max-content] inset-[0] items-center justify-center m-[auto] w-[79%]">
            <Row className="items-center justify-evenly px-[0] self-stretch w-[100%]">
              <Text className="3xl:text-fs108 font-barlowcondensed font-extrabold lg:text-fs70 text-fs90 text-left text-teal_902 tracking-ls1 uppercase xl:text-fs80">{`Eat Happy. Live Happily`}</Text>
              <Button className="3xl:my-[26px] 3xl:pb-[24px] 3xl:pt-[21px] 3xl:px-[42px] 3xl:text-fs21 bg-teal_902 border-2 border-solid border-white_A700 font-barlow font-bold lg:my-[17px] lg:pb-[15px] lg:pt-[14px] lg:px-[27px] lg:text-fs14 my-[22px] pb-[20px] pt-[18px] px-[35px] rounded-radius28 shadow-bs23 text-center text-fs18 text-white_A700 w-[16%] xl:my-[19px] xl:pb-[17px] xl:pt-[16px] xl:px-[31px] xl:text-fs16">{`View Recipe`}</Button>
            </Row>
            <Line className="3xl:mt-[108px] bg-teal_902 h-[2px] lg:mt-[70px] mt-[90px] w-[100%] xl:mt-[80px]" />
            <Row className="3xl:mt-[97px] font-barlow justify-evenly lg:mt-[63px] mt-[81px] px-[0] self-stretch w-[100%] xl:mt-[72px]">
              <Image
                src="img_group_7.svg"
                className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                alt="Group"
              />
              <Text className="3xl:text-fs24 font-bold lg:my-[2px] lg:text-fs15 my-[3px] text-fs20 text-left text-teal_902 uppercase xl:my-[2px] xl:text-fs17">{`Your Logo`}</Text>
              <Text className="3xl:mb-[9px] 3xl:text-fs19 font-bold lg:mb-[6px] lg:mt-[2px] lg:text-fs12 mb-[8px] mt-[3px] text-fs16 text-left text-teal_902 uppercase xl:mb-[7px] xl:mt-[2px] xl:text-fs14">{`About us`}</Text>
              <Text className="3xl:mb-[9px] 3xl:text-fs19 font-bold lg:mb-[6px] lg:mt-[2px] lg:text-fs12 mb-[8px] mt-[3px] text-fs16 text-left text-teal_902 uppercase xl:mb-[7px] xl:mt-[2px] xl:text-fs14">{`Company`}</Text>
              <Text className="3xl:mb-[9px] 3xl:text-fs19 font-bold lg:mb-[6px] lg:mt-[2px] lg:text-fs12 mb-[8px] mt-[3px] text-fs16 text-left text-teal_902 uppercase xl:mb-[7px] xl:mt-[2px] xl:text-fs14">{`Support`}</Text>
              <Text className="3xl:mb-[9px] 3xl:text-fs19 font-bold lg:mb-[6px] lg:mt-[2px] lg:text-fs12 mb-[8px] mt-[3px] text-fs16 text-left text-teal_902 uppercase xl:mb-[7px] xl:mt-[2px] xl:text-fs14">{`Get in touch`}</Text>
            </Row>
            <Row className="3xl:mt-[10px] font-barlowmedium justify-evenly lg:mt-[7px] mt-[9px] px-[0] self-stretch w-[100%] xl:mt-[8px]">
              <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[68px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[44px] lg:text-fs10 mb-[57px] text-fs14 text-left text-teal_902 w-[24%] xl:leading-lh21 xl:mb-[50px] xl:text-fs12">{`Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman.`}</Text>
              <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:mt-[2px] lg:text-fs10 mt-[3px] text-fs14 text-left text-teal_902 w-[5%] xl:leading-lh16 xl:mt-[2px] xl:text-fs12">
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
              <Row className="font-barlowmedium justify-between lg:mt-[2px] mt-[3px] px-[0] w-[49%] xl:mt-[2px]">
                <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:text-fs10 text-fs14 text-left text-teal_902 w-[15%] xl:leading-lh16 xl:text-fs12">
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
                <Text className="2xl:leading-lh18 3xl:leading-lh21 3xl:mb-[43px] 3xl:text-fs16 font-normal leading-lh1800 lg:leading-lh14 lg:mb-[28px] lg:text-fs10 mb-[36px] text-fs14 text-left text-teal_902 w-[17%] xl:leading-lh16 xl:mb-[32px] xl:text-fs12">
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
                <Column className="3xl:mb-[22px] 3xl:mt-[6px] font-barlow justify-start lg:mb-[14px] lg:mt-[3px] mb-[19px] mr-[1px] mt-[5px] w-[40%] xl:mb-[16px] xl:mt-[4px]">
                  <Input
                    className="2xl:pb-[14px] 2xl:pt-[13px] 3xl:pb-[17px] 3xl:pl-[21px] 3xl:pt-[15px] 3xl:text-fs16 bg-white_A700 border border-solid border-teal_902 font-normal lg:pb-[11px] lg:pl-[14px] lg:pt-[10px] lg:text-fs10 pb-[14.205px] pl-[18px] placeholder:bg-transparent placeholder:text-teal_902 pt-[13.205px] rounded-radius24 text-fs14 text-left text-teal_902 w-[100%] xl:pb-[12px] xl:pl-[16px] xl:pt-[11px] xl:text-fs12"
                    name="Group2"
                    placeholder={`Your email here...`}
                  ></Input>
                  <Column className="3xl:mt-[16px] font-barlow items-center lg:mt-[10px] mt-[14px] self-stretch w-[100%] xl:mt-[12px]">
                    <Button className="2xl:pb-[15px] 2xl:pt-[16px] 3xl:pb-[18px] 3xl:pt-[19px] 3xl:px-[42px] 3xl:text-fs16 bg-orange_A200 border-2 border-solid border-white_A700 font-bold lg:pb-[11px] lg:pt-[12px] lg:px-[27px] lg:text-fs10 pb-[15.205px] pt-[16.205px] px-[35px] rounded-radius23 shadow-bs23 text-center text-fs14 text-teal_902 w-[100%] xl:pb-[13px] xl:pt-[14px] xl:px-[31px] xl:text-fs12">{`Get Access`}</Button>
                  </Column>
                </Column>
              </Row>
            </Row>
          </Column>
        </Stack>
      </div>
    </Column>
  );
};

export default Restaurant002Page;
