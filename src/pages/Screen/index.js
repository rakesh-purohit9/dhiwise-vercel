import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const ScreenPage = () => {
  return (
    <Column className="bg-cyan_50 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[851px] 3xl:h-[1021px] 3xl:mb-[24px] 3xl:ml-[12px] font-roboto h-[850px] lg:h-[662px] lg:mb-[15px] lg:ml-[7px] mb-[20px] ml-[10px] w-[97%] xl:h-[757px] xl:mb-[17px] xl:ml-[8px]">
        <Row className="absolute bottom-[0] justify-between left-[0] px-[0] w-[45%]">
          <Row className="items-center justify-between lg:mb-[2px] mb-[3px] px-[0] w-[25%] xl:mb-[2px]">
            <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_302 text-fs14 text-left tracking-ls11 xl:text-fs12">{`Help`}</Text>
            <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_302 text-fs14 text-left tracking-ls11 xl:text-fs12">{`About`}</Text>
            <Text className="3xl:text-fs16 font-normal lg:text-fs10 text-bluegray_302 text-fs14 text-left tracking-ls11 xl:text-fs12">{`Upgrade`}</Text>
          </Row>
          <Text className="3xl:text-fs16 font-normal lg:mb-[2px] lg:text-fs10 mb-[3px] text-bluegray_302 text-fs14 text-right tracking-ls11 xl:mb-[2px] xl:text-fs12">{`Tw — Fb — Yt`}</Text>
        </Row>
        <Column className="3xl:top-[60px] absolute justify-start lg:top-[38px] self-stretch top-[50px] w-[100%] xl:top-[44px]">
          <Row className="3xl:mr-[12px] items-center justify-start lg:mr-[7px] mr-[10px] w-[45%] xl:mr-[8px]">
            <Row className="items-center justify-start w-[26%]">
              <Stack className="2xl:h-[51px] 3xl:h-[61px] 3xl:w-[60px] bg-bluegray_103 h-[50px] lg:h-[39px] lg:w-[38px] rounded-radius5 w-[50px] xl:h-[45px] xl:w-[44px]">
                <Image
                  src="img_avatar.png"
                  className="2xl:h-[51px] 3xl:h-[61px] 3xl:w-[60px] absolute h-[50px] inset-[0] lg:h-[39px] lg:w-[38px] object-cover rounded-radius5 self-stretch w-[50px] xl:h-[45px] xl:w-[44px]"
                  alt="Avatar"
                />
              </Stack>
              <Text className="3xl:mb-[19px] 3xl:ml-[24px] 3xl:mt-[15px] 3xl:text-fs21 font-light lg:mb-[12px] lg:ml-[15px] lg:mt-[10px] lg:text-fs14 mb-[16px] ml-[20px] mr-[1px] mt-[13px] text-fs18 text-gray_924 text-left tracking-ls11 xl:mb-[14px] xl:ml-[17px] xl:mt-[11px] xl:text-fs16">{`Hi, Stephen.`}</Text>
            </Row>
            <Image
              src="img_icons.svg"
              className="2xl:h-[21px] 3xl:h-[25px] 3xl:ml-[475px] 3xl:my-[18px] h-[20px] lg:h-[16px] lg:ml-[308px] lg:my-[11px] ml-[396px] my-[15px] object-contain w-[10%] xl:h-[18px] xl:ml-[352px] xl:my-[13px]"
              alt="Icons"
            />
          </Row>
          <Text className="3xl:mr-[12px] 3xl:mt-[224px] 3xl:text-fs43 font-light leading-lh lg:mr-[7px] lg:mt-[145px] lg:text-fs28 mr-[10px] mt-[187px] text-fs36 text-gray_924 text-left tracking-ls11 w-[23%] xl:mr-[8px] xl:mt-[166px] xl:text-fs32">
            <span className="text-gray_924 text-fs36 tracking-ls11 font-roboto text-left font-light lg:text-fs28 xl:text-fs32 3xl:text-fs43">
              <>
                {`Simplest way to send`}
                <br />
                {`your files. `}
              </>
            </span>
            <span className="text-gray_924 text-fs36 tracking-ls11 font-roboto text-left font-bold lg:text-fs28 xl:text-fs32 3xl:text-fs43">
              <>{`Up to 2GB.`}</>
            </span>
          </Text>
          <Column className="3xl:mt-[74px] items-center lg:mt-[48px] mt-[62px] self-stretch w-[100%] xl:mt-[55px]">
            <Stack className="2xl:h-[299px] 3xl:h-[358px] h-[298px] lg:h-[232px] self-stretch w-[100%] xl:h-[266px]">
              <Column className="absolute bg-white_A700 font-roboto inset-[0] justify-start rounded-radius5 self-stretch w-[100%]">
                <Line className="3xl:mr-[12px] 3xl:mt-[84px] bg-cyan_50 h-[1px] lg:mr-[7px] lg:mt-[54px] mr-[10px] mt-[70px] w-[48%] xl:mr-[8px] xl:mt-[62px]" />
                <Input
                  className="2xl:pb-[28px] 3xl:mr-[12px] 3xl:mt-[30px] 3xl:pb-[34px] 3xl:pl-[36px] 3xl:text-fs19 bg-transparent border-0 border-b-[1px] border-cyan_50 font-light lg:mr-[7px] lg:mt-[19px] lg:pb-[22px] lg:pl-[23px] lg:text-fs12 mr-[10px] mt-[25px] pb-[28.375px] pl-[30px] placeholder:bg-transparent placeholder:text-bluegray_501 pt-[1px] text-bluegray_501 text-fs16 text-left tracking-ls11 w-[48%] xl:mr-[8px] xl:mt-[22px] xl:pb-[25px] xl:pl-[26px] xl:text-fs14"
                  name="Group582"
                  placeholder={`Email files to`}
                ></Input>
                <Line className="3xl:mb-[102px] 3xl:mr-[12px] 3xl:mt-[84px] bg-cyan_50 h-[1px] lg:mb-[66px] lg:mr-[7px] lg:mt-[54px] mb-[85px] mr-[10px] mt-[70px] w-[48%] xl:mb-[75px] xl:mr-[8px] xl:mt-[62px]" />
              </Column>
              <Column className="3xl:left-[24px] absolute font-roboto h-[max-content] inset-y-[0] justify-start left-[20px] lg:left-[15px] my-[auto] w-[16%] xl:left-[17px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Row className="font-roboto items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_iosaddcircle.svg"
                      className="2xl:h-[31px] 3xl:h-[37px] 3xl:w-[36px] h-[30px] lg:h-[24px] lg:w-[23px] object-contain w-[30px] xl:h-[27px] xl:w-[26px]"
                      alt="iosaddcircle"
                    />
                    <Text className="3xl:mb-[7px] 3xl:ml-[24px] 3xl:mt-[6px] 3xl:text-fs19 font-light lg:mb-[4px] lg:ml-[15px] lg:mt-[3px] lg:text-fs12 mb-[6px] ml-[20px] mt-[5px] text-bluegray_501 text-fs16 text-left tracking-ls11 xl:mb-[5px] xl:ml-[17px] xl:mt-[4px] xl:text-fs14">
                      <span className="text-bluegray_501 text-fs16 tracking-ls11 font-roboto text-left font-light lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`Drop your files, or `}</>
                      </span>
                      <span className="text-bluegray_501 text-fs16 tracking-ls11 font-roboto text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                        <>{`choose`}</>
                      </span>
                    </Text>
                  </Row>
                </Column>
                <Text className="3xl:mt-[140px] 3xl:mx-[12px] 3xl:text-fs19 font-light lg:mt-[91px] lg:mx-[7px] lg:text-fs12 mt-[117px] mx-[10px] text-bluegray_501 text-fs16 text-left tracking-ls11 xl:mt-[104px] xl:mx-[8px] xl:text-fs14">{`Add message`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[56px] font-roboto items-center justify-start lg:mr-[7px] lg:mt-[36px] mr-[10px] mt-[47px] w-[96%] xl:mr-[8px] xl:mt-[41px]">
                  <Button className="2xl:pb-[15px] 2xl:pt-[13px] 3xl:pb-[18px] 3xl:pt-[16px] 3xl:px-[30px] 3xl:text-fs19 bg-blue_A700 border-bw font-medium lg:pb-[11px] lg:pt-[10px] lg:px-[19px] lg:text-fs12 pb-[15.375px] pt-[13.375px] px-[25px] rounded-radius5 text-center text-fs16 text-white_A700 tracking-ls11 w-[47%] xl:pb-[13px] xl:pt-[11px] xl:px-[22px] xl:text-fs14">{`Trasfer`}</Button>
                  <Text className="3xl:mb-[16px] 3xl:ml-[24px] 3xl:mt-[14px] 3xl:text-fs19 font-medium lg:mb-[10px] lg:ml-[15px] lg:mt-[9px] lg:text-fs12 mb-[14px] ml-[20px] mt-[12px] text-bluegray_501 text-fs16 text-left tracking-ls11 xl:mb-[12px] xl:ml-[17px] xl:mt-[10px] xl:text-fs14">{`More options`}</Text>
                </Row>
              </Column>
            </Stack>
          </Column>
        </Column>
        <Image
          src="img_illustration.svg"
          className="2xl:h-[851px] 3xl:h-[1021px] 3xl:right-[60px] absolute h-[850px] lg:h-[662px] lg:right-[38px] object-contain right-[50px] w-[48%] xl:h-[757px] xl:right-[44px]"
          alt="Illustration"
        />
      </Stack>
    </Column>
  );
};

export default ScreenPage;
