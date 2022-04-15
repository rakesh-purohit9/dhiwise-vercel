import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const Contact3Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mt-[43px] font-raleway items-center justify-start lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
        <div className="mx-[auto] w-[86%]">
          <Row className="font-raleway items-center justify-start self-stretch w-[100%]">
            <Image
              src="img_logexpress.png"
              className="2xl:h-[30px] 2xl:mb-[8px] 2xl:mt-[9px] 3xl:h-[36px] 3xl:mb-[10px] 3xl:mt-[11px] h-[29.86px] lg:h-[24px] lg:mb-[6px] lg:mt-[7px] mb-[8.860001px] mt-[9.279999px] object-contain w-[14%] xl:h-[27px] xl:mb-[7px] xl:mt-[8px]"
              alt="LogExpress"
            />
            <Row className="2xl:ml-[158px] 3xl:ml-[190px] 3xl:my-[9px] items-center justify-center lg:ml-[123px] lg:my-[6px] ml-[158.64001px] my-[8px] w-[46%] xl:ml-[141px] xl:my-[7px]">
              <Text className="3xl:text-fs19 capitalize font-bold lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Home`}</Text>
              <Text className="3xl:ml-[78px] 3xl:text-fs19 capitalize font-bold lg:ml-[50px] lg:text-fs12 ml-[65px] text-bluegray_401 text-center text-fs16 xl:ml-[57px] xl:text-fs14">{`About`}</Text>
              <Row className="3xl:ml-[78px] items-center justify-center lg:ml-[50px] ml-[65px] w-[14%] xl:ml-[57px]">
                <Text className="3xl:text-fs19 capitalize font-bold lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Service`}</Text>
                <Image
                  src="img_uichevrondo.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[8px] 3xl:ml-[9px] 3xl:mt-[10px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[5px] lg:ml-[6px] lg:mt-[7px] lg:w-[12px] mb-[7px] ml-[8px] mt-[9px] object-contain w-[16px] xl:h-[15px] xl:mb-[6px] xl:ml-[7px] xl:mt-[8px] xl:w-[14px]"
                  alt="UIChevronDo"
                />
              </Row>
              <Row className="3xl:ml-[76px] items-center justify-center lg:ml-[49px] ml-[64px] w-[12%] xl:ml-[56px]">
                <Text className="3xl:text-fs19 capitalize font-bold lg:text-fs12 text-bluegray_401 text-center text-fs16 xl:text-fs14">{`Pages`}</Text>
                <Image
                  src="img_uichevrondo.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[8px] 3xl:ml-[8px] 3xl:mt-[10px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[5px] lg:ml-[5px] lg:mt-[7px] lg:w-[12px] mb-[7px] ml-[7px] mt-[9px] object-contain w-[16px] xl:h-[15px] xl:mb-[6px] xl:ml-[6px] xl:mt-[8px] xl:w-[14px]"
                  alt="UIChevronDo"
                />
              </Row>
              <Text className="3xl:ml-[79px] 3xl:text-fs19 capitalize font-bold lg:ml-[51px] lg:text-fs12 ml-[66px] text-center text-fs16 text-purple_902 xl:ml-[58px] xl:text-fs14">{`Contact`}</Text>
            </Row>
            <Button className="3xl:ml-[272px] 3xl:px-[38px] 3xl:py-[19px] 3xl:text-fs19 bg-deep_orange_501 border-bw capitalize font-bold lg:ml-[176px] lg:px-[24px] lg:py-[12px] lg:text-fs12 ml-[227px] px-[32px] py-[16px] rounded-radius8 text-center text-fs16 text-white_A700 w-[9%] xl:ml-[201px] xl:px-[28px] xl:py-[14px] xl:text-fs14">{`Login`}</Button>
          </Row>
        </div>
        <Column className="3xl:mt-[43px] bg-gradient11  items-center justify-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
          <Text className="2xl:leading-lh88 3xl:leading-lh105 3xl:mt-[174px] 3xl:text-fs76 capitalize font-bold leading-lh8800 lg:leading-lh68 lg:mt-[112px] lg:text-fs49 mt-[145px] mx-[auto] text-center text-fs64 text-white_A700 w-[27%] xl:leading-lh78 xl:mt-[128px] xl:text-fs56">
            {
              <>
                {`Lets Contact`}
                <br />
                {`With Us`}
              </>
            }
          </Text>
          <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mb-[174px] 3xl:mt-[48px] 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:mb-[112px] lg:mt-[31px] lg:text-fs12 mb-[145px] mt-[40px] mx-[auto] text-center text-fs16 text-white_A700 w-[33%] xl:leading-lh24 xl:mb-[128px] xl:mt-[35px] xl:text-fs14">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.`}</Text>
        </Column>
        <Row className="3xl:mt-[192px] justify-start lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Column className="3xl:ml-[124px] font-raleway justify-start lg:ml-[80px] ml-[104px] w-[48%] xl:ml-[92px]">
            <Column className="items-center self-stretch w-[100%]">
              <Column className="font-ralewaymedium justify-start self-stretch w-[100%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal font-ralewaymedium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_902 text-fs14 text-left xl:mr-[8px] xl:text-fs12">{`First Name`}</Text>
                <Input
                  className="3xl:mt-[9px] 3xl:pl-[19px] 3xl:py-[20px] 3xl:text-fs16 bg-white_A700 border border-gray_302 border-solid font-normal font-raleway lg:mt-[6px] lg:pl-[12px] lg:py-[13px] lg:text-fs10 mt-[8px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 py-[17px] rounded-radius8 self-stretch text-bluegray_105 text-fs14 text-left w-[100%] xl:mt-[7px] xl:pl-[14px] xl:py-[15px] xl:text-fs12"
                  name="Group492"
                  placeholder={`Your First Name`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[19px] font-ralewaymedium justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal font-ralewaymedium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_902 text-fs14 text-left xl:mr-[8px] xl:text-fs12">{`Last Name`}</Text>
                <Input
                  className="3xl:mt-[9px] 3xl:pl-[19px] 3xl:py-[20px] 3xl:text-fs16 bg-white_A700 border border-gray_302 border-solid font-normal font-raleway lg:mt-[6px] lg:pl-[12px] lg:py-[13px] lg:text-fs10 mt-[8px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 py-[17px] rounded-radius8 self-stretch text-bluegray_105 text-fs14 text-left w-[100%] xl:mt-[7px] xl:pl-[14px] xl:py-[15px] xl:text-fs12"
                  name="Group491"
                  placeholder={`Your Last Name`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[19px] font-ralewaymedium justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal font-ralewaymedium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_902 text-fs14 text-left xl:mr-[8px] xl:text-fs12">{`Email`}</Text>
                <Input
                  className="3xl:mt-[9px] 3xl:pl-[19px] 3xl:py-[20px] 3xl:text-fs16 bg-white_A700 border border-gray_302 border-solid font-normal font-raleway lg:mt-[6px] lg:pl-[12px] lg:py-[13px] lg:text-fs10 mt-[8px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 py-[17px] rounded-radius8 self-stretch text-bluegray_105 text-fs14 text-left w-[100%] xl:mt-[7px] xl:pl-[14px] xl:py-[15px] xl:text-fs12"
                  name="Group490"
                  placeholder={`email@example.com`}
                ></Input>
              </Column>
              <Column className="3xl:mt-[19px] font-ralewaymedium justify-start lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs16 font-normal font-ralewaymedium lg:mr-[7px] lg:text-fs10 mr-[10px] text-bluegray_902 text-fs14 text-left xl:mr-[8px] xl:text-fs12">{`Message`}</Text>
                <TextArea
                  className="3xl:mt-[9px] 3xl:pb-[48px] 3xl:pl-[19px] 3xl:pt-[20px] 3xl:text-fs16 bg-white_A700 border border-gray_302 border-solid font-normal font-raleway lg:mt-[6px] lg:pb-[31px] lg:pl-[12px] lg:pt-[13px] lg:text-fs10 mt-[8px] pb-[40px] pl-[16px] placeholder:bg-transparent placeholder:text-bluegray_105 pt-[17px] rounded-radius8 self-stretch text-bluegray_105 text-fs14 text-left w-[100%] xl:mt-[7px] xl:pb-[35px] xl:pl-[14px] xl:pt-[15px] xl:text-fs12"
                  name="Group489"
                  placeholder={`Write Your Message`}
                ></TextArea>
              </Column>
            </Column>
            <Button className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-deep_orange_501 border-bw capitalize font-bold lg:mr-[7px] lg:mt-[31px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[40px] px-[35px] py-[20px] rounded-radius8 text-center text-fs16 text-white_A700 w-[29%] xl:mr-[8px] xl:mt-[35px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Send Messages`}</Button>
          </Column>
          <Column className="3xl:mb-[249px] 3xl:ml-[48px] 3xl:mr-[249px] font-raleway justify-start lg:mb-[161px] lg:ml-[31px] lg:mr-[161px] mb-[208px] ml-[40px] mr-[208px] w-[28%] xl:mb-[185px] xl:ml-[35px] xl:mr-[185px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs38 capitalize font-bold lg:mr-[7px] lg:text-fs24 mr-[10px] text-bluegray_902 text-fs32 text-left xl:mr-[8px] xl:text-fs28">{`Our Office`}</Text>
            <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
              <Column className="bg-white_A700 border border-gray_302 border-solid font-raleway justify-center rounded-radius8 self-stretch w-[100%]">
                <Text className="3xl:mt-[28px] 3xl:mx-[28px] 3xl:text-fs19 capitalize font-bold lg:mt-[18px] lg:mx-[18px] lg:text-fs12 mt-[24px] mx-[24px] text-bluegray_902 text-fs16 text-left xl:mt-[21px] xl:mx-[21px] xl:text-fs14">{`Office Addres`}</Text>
                <Text className="3xl:mx-[28px] 3xl:text-fs14 font-normal lg:mt-[3px] lg:mx-[18px] lg:text-fs9 mt-[4px] mx-[24px] text-bluegray_401 text-fs12 text-left xl:mt-[3px] xl:mx-[21px] xl:text-fs10">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                <Text className="3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs19 capitalize font-bold lg:mt-[12px] lg:mx-[18px] lg:text-fs12 mt-[16px] mx-[24px] text-bluegray_902 text-fs16 text-left xl:mt-[14px] xl:mx-[21px] xl:text-fs14">{`Our Email`}</Text>
                <Text className="3xl:mx-[28px] 3xl:text-fs14 font-normal lg:mt-[3px] lg:mx-[18px] lg:text-fs9 mt-[4px] mx-[24px] text-bluegray_401 text-fs12 text-left xl:mt-[3px] xl:mx-[21px] xl:text-fs10">{`Hello@example.com`}</Text>
                <Text className="3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs19 capitalize font-bold lg:mt-[12px] lg:mx-[18px] lg:text-fs12 mt-[16px] mx-[24px] text-bluegray_902 text-fs16 text-left xl:mt-[14px] xl:mx-[21px] xl:text-fs14">{`Phone Number`}</Text>
                <Text className="3xl:mx-[28px] 3xl:text-fs14 font-normal lg:mt-[3px] lg:mx-[18px] lg:text-fs9 mt-[4px] mx-[24px] text-bluegray_401 text-fs12 text-left xl:mt-[3px] xl:mx-[21px] xl:text-fs10">{`(704) 555-0127`}</Text>
                <Text className="3xl:mt-[19px] 3xl:mx-[28px] 3xl:text-fs19 capitalize font-bold lg:mt-[12px] lg:mx-[18px] lg:text-fs12 mt-[16px] mx-[24px] text-bluegray_902 text-fs16 text-left xl:mt-[14px] xl:mx-[21px] xl:text-fs14">{`Social Media`}</Text>
                <Row className="3xl:gap-[9px] 3xl:mb-[24px] 3xl:mx-[28px] gap-[8px] grid grid-cols-4 items-center justify-start lg:gap-[6px] lg:mb-[15px] lg:mt-[3px] lg:mx-[18px] mb-[20px] mt-[4px] mx-[24px] w-[38%] xl:gap-[7px] xl:mb-[17px] xl:mt-[3px] xl:mx-[21px]">
                  <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:text-fs14 font-bold lg:my-[3px] lg:text-fs9 mx-[auto] my-[4px] text-fs12 text-left text-white_A700 xl:my-[3px] xl:text-fs10">{`FB`}</Text>
                  </Column>
                  <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:text-fs14 font-bold lg:mx-[7px] lg:my-[3px] lg:text-fs9 ml-[9px] mr-[10px] my-[4px] text-fs12 text-left text-white_A700 xl:mx-[8px] xl:my-[3px] xl:text-fs10">{`IG`}</Text>
                  </Column>
                  <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:ml-[8px] 3xl:mr-[10px] 3xl:text-fs14 font-bold lg:ml-[5px] lg:mr-[7px] lg:my-[3px] lg:text-fs9 ml-[7px] mr-[9px] my-[4px] text-center text-fs12 text-white_A700 xl:ml-[6px] xl:mr-[8px] xl:my-[3px] xl:text-fs10">{`YT`}</Text>
                  </Column>
                  <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                    <Text className="3xl:text-fs14 font-bold lg:my-[3px] lg:text-fs9 mx-[auto] my-[4px] text-center text-fs12 text-white_A700 xl:my-[3px] xl:text-fs10">{`LI`}</Text>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
        <Image
          src="img_maps_3.svg"
          className="2xl:h-[680px] 3xl:h-[816px] 3xl:mt-[86px] h-[679px] lg:h-[529px] lg:mt-[56px] mt-[72px] mx-[auto] object-contain w-[86%] xl:h-[605px] xl:mt-[64px]"
          alt="Maps"
        />
        <div className="3xl:mt-[192px] lg:mt-[124px] mt-[160px] self-stretch w-[100%] xl:mt-[142px]">
          <Row className="bg-purple_902 items-center justify-evenly px-[0] self-stretch w-[100%]">
            <Column className="3xl:mb-[176px] 3xl:mt-[96px] font-raleway justify-start lg:mb-[114px] lg:mt-[62px] mb-[147px] mt-[80px] w-[21%] xl:mb-[130px] xl:mt-[71px]">
              <Image
                src="img_logexpress_1.svg"
                className="2xl:h-[30px] 3xl:h-[36px] 3xl:mr-[12px] h-[29.86px] lg:h-[24px] lg:mr-[7px] mr-[10px] object-contain w-[59%] xl:h-[27px] xl:mr-[8px]"
                alt="LogExpress"
              />
              <Text className="2xl:leading-lh27 2xl:mt-[24px] 3xl:leading-lh32 3xl:mt-[28px] 3xl:text-fs19 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[18px] lg:text-fs12 mt-[24.139893px] self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:leading-lh24 xl:mt-[21px] xl:text-fs14">{`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat`}</Text>
            </Column>
            <Row className="3xl:mb-[96px] 3xl:mt-[93px] justify-center lg:mb-[62px] lg:mt-[60px] mb-[80px] mt-[78px] w-[64%] xl:mb-[71px] xl:mt-[69px]">
              <Column className="font-raleway justify-start w-[10%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs28 capitalize font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Menu`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Home`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Covid19`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[14px] xl:text-fs14">{`Vaccine Info`}</Text>
                <Text className="3xl:mr-[10px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[9px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Contact Us`}</Text>
              </Column>
              <Column className="3xl:ml-[130px] font-raleway justify-start lg:ml-[84px] ml-[109px] w-[9%] xl:ml-[96px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs28 capitalize font-bold lg:mr-[7px] lg:text-fs18 ml-[1px] mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Links`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Partners`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Careers`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Press`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[14px] xl:text-fs14">{`Community`}</Text>
              </Column>
              <Column className="3xl:mb-[51px] 3xl:ml-[130px] font-raleway justify-start lg:mb-[33px] lg:ml-[84px] mb-[43px] ml-[109px] w-[16%] xl:mb-[38px] xl:ml-[96px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs28 capitalize font-bold lg:mr-[7px] lg:text-fs18 ml-[1px] mr-[10px] text-fs24 text-left text-white_A700 xl:mr-[8px] xl:text-fs21">{`Overview`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-left text-white_A700 xl:mt-[14px] xl:text-fs14">{`Terms & Conditions`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Privacy Policy`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`FAQ`}</Text>
              </Column>
              <Column className="3xl:mb-[139px] 3xl:ml-[126px] 3xl:mr-[148px] font-raleway justify-start lg:mb-[90px] lg:ml-[81px] lg:mr-[96px] mb-[116px] ml-[105px] mr-[124px] w-[17%] xl:mb-[103px] xl:ml-[93px] xl:mr-[110px]">
                <Text className="3xl:mr-[7px] 3xl:text-fs28 capitalize font-bold lg:mr-[4px] lg:text-fs18 mr-[6px] text-fs24 text-left text-white_A700 xl:mr-[5px] xl:text-fs21">{`Social Media`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Row className="3xl:gap-[9px] gap-[8px] grid grid-cols-4 items-center justify-between lg:gap-[6px] self-stretch w-[100%] xl:gap-[7px]">
                    <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:text-fs14 font-bold lg:my-[3px] lg:text-fs9 mx-[auto] my-[4px] text-fs12 text-left text-white_A700 xl:my-[3px] xl:text-fs10">{`FB`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:ml-[10px] 3xl:mr-[12px] 3xl:text-fs14 font-bold lg:mx-[7px] lg:my-[3px] lg:text-fs9 ml-[9px] mr-[10px] my-[4px] text-fs12 text-left text-white_A700 xl:mx-[8px] xl:my-[3px] xl:text-fs10">{`IG`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:ml-[8px] 3xl:mr-[10px] 3xl:text-fs14 font-bold lg:ml-[5px] lg:mr-[7px] lg:my-[3px] lg:text-fs9 ml-[7px] mr-[9px] my-[4px] text-center text-fs12 text-white_A700 xl:ml-[6px] xl:mr-[8px] xl:my-[3px] xl:text-fs10">{`YT`}</Text>
                    </Column>
                    <Column className="bg-deep_orange_501 font-raleway items-center justify-start rounded-radius50 w-[100%]">
                      <Text className="3xl:text-fs14 font-bold lg:my-[3px] lg:text-fs9 mx-[auto] my-[4px] text-center text-fs12 text-white_A700 xl:my-[3px] xl:text-fs10">{`LI`}</Text>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Row>
        </div>
      </Column>
    </Column>
  );
};

export default Contact3Page;
