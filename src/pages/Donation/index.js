import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Stack } from "components/Stack";
import { List } from "components/List";
import { Input } from "components/Input";
import { Line } from "components/Line";

const DonationPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="3xl:mb-[48px] 3xl:mt-[38px] font-lora justify-start lg:mb-[31px] lg:mt-[24px] mb-[40px] mt-[32px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[28px]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="mx-[auto] w-[86%]">
            <Row className="font-dmsans items-center justify-start self-stretch w-[100%]">
              <Image
                src="img_dummylogo02_20.svg"
                className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
                alt="DummyLogo02"
              />
              <Row className="3xl:mb-[21px] 3xl:ml-[96px] 3xl:mt-[22px] items-center justify-center lg:ml-[62px] lg:my-[14px] mb-[18px] ml-[80px] mt-[19px] w-[41%] xl:ml-[71px] xl:my-[16px]">
                <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_900 text-fs16 text-left tracking-ls1 xl:text-fs14">{`Home`}</Text>
                <Row className="3xl:ml-[50px] font-dmsans items-center justify-between lg:ml-[32px] ml-[42px] px-[0] w-[83%] xl:ml-[37px]">
                  <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-orange_700 tracking-ls1 xl:text-fs14">{`Donation`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_900 text-fs16 text-left tracking-ls1 xl:text-fs14">{`Petition`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_900 text-fs16 text-left tracking-ls1 xl:text-fs14">{`Events`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_900 text-fs16 text-left tracking-ls1 xl:text-fs14">{`Blogs`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-bluegray_900 text-fs16 text-left tracking-ls1 xl:text-fs14">{`About`}</Text>
                </Row>
              </Row>
              <Button className="2xl:py-[12px] 3xl:ml-[440px] 3xl:my-[9px] 3xl:px-[28px] 3xl:py-[14px] 3xl:text-fs19 bg-orange_700 border-bw font-bold lg:ml-[285px] lg:my-[6px] lg:px-[18px] lg:py-[9px] lg:text-fs12 ml-[367px] my-[8px] px-[24px] py-[12.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[12%] xl:ml-[326px] xl:my-[7px] xl:px-[21px] xl:py-[10px] xl:text-fs14">{`Donate Now`}</Button>
            </Row>
          </div>
        </Column>
        <Text className="3xl:mt-[96px] 3xl:mx-[124px] 3xl:text-fs74 font-bold font-lora lg:mt-[62px] lg:mx-[80px] lg:text-fs48 mt-[80px] mx-[104px] text-fs62 text-gray_907 text-left tracking-ls1 xl:mt-[71px] xl:mx-[92px] xl:text-fs55">{`Save the Llora Ice Park`}</Text>
        <Row className="3xl:mt-[38px] 3xl:mx-[124px] font-dmsans items-center justify-start lg:mt-[24px] lg:mx-[80px] mt-[32px] mx-[104px] w-[57%] xl:mt-[28px] xl:mx-[92px]">
          <Row className="items-center justify-between px-[0] w-[34%]">
            <div className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] bg-gray_305 h-[56px] lg:h-[44px] lg:w-[43px] mb-[1px] rounded-radius50 w-[56px] xl:h-[50px] xl:w-[49px]"></div>
            <Column className="font-lora justify-start w-[72%]">
              <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold font-lora lg:mr-[7px] lg:text-fs18 mr-[10px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mr-[8px] xl:text-fs21">{`Jenny Wilson`}</Text>
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 xl:mt-[7px] xl:text-fs14">{`Activism of Nature Arizona`}</Text>
            </Column>
          </Row>
          <Button className="2xl:py-[20px] 3xl:ml-[516px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-transparent border-2 border-orange_700 border-solid font-bold lg:ml-[334px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mb-[1px] ml-[430px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-orange_700 tracking-ls1 w-[14%] xl:ml-[382px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Contact`}</Button>
        </Row>
        <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
          <Row className="items-center justify-start self-stretch w-[100%]">
            <div className="2xl:h-[590px] 3xl:h-[708px] 3xl:ml-[124px] bg-gray_305 h-[589px] lg:h-[459px] lg:ml-[80px] ml-[104px] rounded-radius8 w-[57%] xl:h-[524px] xl:ml-[92px]"></div>
            <Column className="3xl:ml-[19px] 3xl:mr-[124px] bg-white_A700 border border-gray_304 border-solid font-lora justify-center lg:ml-[12px] lg:mr-[80px] ml-[16px] mr-[104px] rounded-radius8 w-[28%] xl:ml-[14px] xl:mr-[92px]">
              <Text className="3xl:mt-[48px] 3xl:mx-[19px] 3xl:text-fs28 font-bold lg:mt-[31px] lg:mx-[12px] lg:text-fs18 mt-[40px] mx-[16px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[35px] xl:mx-[14px] xl:text-fs21">{`Donation Information`}</Text>
              <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                <Row className="items-center justify-start self-stretch w-[100%]">
                  <Column className="3xl:ml-[19px] font-dmsans justify-start lg:ml-[12px] ml-[16px] w-[19%] xl:ml-[14px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-dmsans lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Goals`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-lora lg:mt-[6px] lg:text-fs18 mt-[8px] self-stretch text-fs24 text-left text-orange_700 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
                  </Column>
                  <Column className="3xl:ml-[56px] 3xl:mr-[234px] font-dmsans justify-start lg:ml-[36px] lg:mr-[151px] ml-[47px] mr-[195px] w-[17%] xl:ml-[41px] xl:mr-[173px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-dmsans lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Raised`}</Text>
                    <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold font-lora lg:mt-[6px] lg:text-fs18 mt-[8px] self-stretch text-fs24 text-left text-orange_700 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
                  <ProgressBar.Line
                    className="2xl:h-[9px] 3xl:h-[10px] bg-gray_300_6c h-[8px] lg:h-[7px] lg:mb-[1px] lg:mt-[2px] mb-[2px] mt-[3px] rounded-radius8 w-[90%] xl:mb-[1px] xl:mt-[2px]"
                    percent="80"
                    strokeColor="#5c54ab"
                    trailColor="#e3e3eb6c"
                    name="Group427"
                  ></ProgressBar.Line>
                  <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:ml-[6px] lg:text-fs9 ml-[8px] text-fs12 text-gray_907 text-left tracking-ls1 xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
                </Row>
                <Row className="3xl:mt-[28px] font-dmsans items-center justify-start lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[19px] h-[40px] lg:h-[32px] lg:ml-[12px] ml-[16px] w-[22%] xl:h-[36px] xl:ml-[14px]">
                    <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute bg-gray_305 border-2 border-solid border-white_A700 h-[40px] left-[0] lg:h-[32px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                    <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:inset-x-[28px] 3xl:w-[48px] absolute bg-gray_305 border-2 border-solid border-white_A700 h-[40px] inset-x-[24px] inset-y-[0] lg:h-[32px] lg:inset-x-[18px] lg:w-[31px] rounded-radius50 w-[40px] xl:h-[36px] xl:inset-x-[21px] xl:w-[35px]"></div>
                    <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:w-[48px] absolute bg-gray_305 border-2 border-solid border-white_A700 h-[40px] lg:h-[32px] lg:w-[31px] right-[0] rounded-radius50 w-[40px] xl:h-[36px] xl:w-[35px]"></div>
                  </Stack>
                  <Text className="3xl:mb-[13px] 3xl:ml-[19px] 3xl:mr-[114px] 3xl:mt-[12px] 3xl:text-fs19 font-normal lg:mb-[8px] lg:ml-[12px] lg:mr-[73px] lg:mt-[7px] lg:text-fs12 mb-[11px] ml-[16px] mr-[95px] mt-[10px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mb-[9px] xl:ml-[14px] xl:mr-[84px] xl:mt-[8px] xl:text-fs14">{`502 people just donated`}</Text>
                </Row>
              </Column>
              <Row className="3xl:mt-[28px] 3xl:mx-[19px] font-dmsans justify-start lg:mt-[18px] lg:mx-[12px] mt-[24px] mx-[16px] w-[33%] xl:mt-[21px] xl:mx-[14px]">
                <Image
                  src="img_actioncalend.svg"
                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                  alt="Actioncalend"
                />
                <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:mb-[1px] lg:ml-[12px] lg:mt-[2px] lg:text-fs12 mb-[2px] ml-[16px] mt-[3px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mb-[1px] xl:ml-[14px] xl:mt-[2px] xl:text-fs14">{`23 Days Left`}</Text>
              </Row>
              <Column className="3xl:mt-[48px] font-dmsans items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
                <Button className="2xl:py-[20px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_700 border-bw font-bold lg:px-[27px] lg:py-[15px] lg:text-fs12 mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
                <Row className="3xl:mt-[22px] border-2 border-orange_700 border-solid font-dmsans items-center justify-center lg:mt-[14px] mt-[19px] mx-[auto] rounded-radius8 w-[92%] xl:mt-[16px]">
                  <Text className="2xl:ml-[124px] 2xl:my-[18px] 3xl:ml-[149px] 3xl:my-[22px] 3xl:text-fs19 font-bold lg:ml-[96px] lg:my-[14px] lg:text-fs12 ml-[124.5px] my-[18.5px] text-fs16 text-left text-orange_700 tracking-ls1 xl:ml-[110px] xl:my-[16px] xl:text-fs14">{`Remind Me`}</Text>
                  <Image
                    src="img_group18.svg"
                    className="2xl:h-[25px] 2xl:mr-[124px] 3xl:h-[29px] 3xl:ml-[9px] 3xl:mr-[149px] 3xl:my-[19px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[6px] lg:mr-[96px] lg:my-[12px] lg:w-[18px] ml-[8px] mr-[124.5px] my-[16px] object-contain w-[24px] xl:h-[22px] xl:ml-[7px] xl:mr-[110px] xl:my-[14px] xl:w-[21px]"
                    alt="Group18"
                  />
                </Row>
              </Column>
              <Row className="3xl:gap-[19px] 3xl:mb-[48px] 3xl:mt-[28px] 3xl:mx-[19px] gap-[16px] grid grid-cols-3 items-center justify-start lg:gap-[12px] lg:mb-[31px] lg:mt-[18px] lg:mx-[12px] mb-[40px] mt-[24px] mx-[16px] w-[38%] xl:gap-[14px] xl:mb-[35px] xl:mt-[21px] xl:mx-[14px]">
                <Column className="bg-orange_700 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Dr`}</Text>
                </Column>
                <Column className="bg-orange_700 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Be`}</Text>
                </Column>
                <Column className="bg-orange_700 font-dmsans items-center justify-start rounded-radius50 w-[100%]">
                  <Text className="3xl:mb-[12px] 3xl:mt-[13px] 3xl:text-fs19 font-medium lg:mb-[7px] lg:mt-[8px] lg:text-fs12 mb-[10px] mt-[11px] mx-[auto] text-fs16 text-left text-white_A700 tracking-ls1 xl:mb-[8px] xl:mt-[9px] xl:text-fs14">{`Ig`}</Text>
                </Column>
              </Row>
            </Column>
          </Row>
        </Column>
        <Text className="3xl:mt-[64px] 3xl:mx-[124px] 3xl:text-fs46 font-bold font-lora lg:mt-[42px] lg:mx-[80px] lg:text-fs30 mt-[54px] mx-[104px] text-fs39 text-gray_907 text-left tracking-ls1 xl:mt-[48px] xl:mx-[92px] xl:text-fs34">{`Story Campaign`}</Text>
        <Text className="3xl:mt-[28px] 3xl:mx-[124px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:mx-[80px] lg:text-fs12 mt-[24px] mx-[104px] text-fs16 text-gray_506 text-left tracking-ls1 w-[57%] xl:mt-[21px] xl:mx-[92px] xl:text-fs14">
          {
            <>
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor. Libero, amet amet ipsum eu velit neque hendrerit commodo. Orci nulla sed sed odio neque ut. Et, quis nibh at non ridiculus quis ac proin. Sit eu duis purus dictumst amet accumsan. Nullam vitae egestas neque sem cursus nec hendrerit sed viverra.   Elementum auctor nulla gravida pharetra, posuere velit, ultrices scelerisque. Diam tristique arcu sollicitudin placerat. Amet mauris risus non erat. Vulputate ut urna laoreet netus. Nulla placerat leo, arcu dignissim at consectetur rutrum magna integer. Ante urna, enim interdum eget libero. Scelerisque facilisis dui lacus, ornare sit. Pellentesque interdum semper magna vitae, quis mauris, sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
              <br />
              {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor. Libero, amet amet ipsum eu velit neque hendrerit commodo. Orci nulla sed sed odio neque ut. Et, quis nibh at non ridiculus quis ac proin. Sit eu duis purus dictumst amet accumsan. Nullam vitae egestas neque sem cursus nec hendrerit sed viverra.   Elementum auctor nulla gravida pharetra, posuere velit, ultrices scelerisque. Diam tristique arcu sollicitudin placerat. Amet mauris risus non erat. Vulputate ut urna laoreet netus. Nulla placerat leo, arcu dignissim at consectetur rutrum magna integer. Ante urna, enim interdum eget libero. Scelerisque facilisis dui lacus, ornare sit. Pellentesque interdum semper magna vitae, quis mauris, sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
            </>
          }
        </Text>
        <Text className="3xl:mt-[67px] 3xl:mx-[124px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[43px] lg:mx-[80px] lg:text-fs18 mt-[56px] mx-[104px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[49px] xl:mx-[92px] xl:text-fs21">{`Donation (420)`}</Text>
        <List
          className="3xl:mt-[38px] 3xl:mx-[124px] flex-wrap gap-[0] lg:mt-[24px] lg:mx-[80px] min-h-[auto] mt-[32px] mx-[104px] w-[57%] xl:mt-[28px] xl:mx-[92px]"
          orientation="vertical"
        >
          <Row className="3xl:my-[14px] justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[32px] 3xl:w-[48px] bg-gray_305 h-[40px] lg:h-[32px] lg:mb-[21px] lg:w-[31px] mb-[27px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[24px] xl:w-[35px]"></div>
            <Column className="font-dmsans justify-start w-[93%]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-lora justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold font-lora lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Karina Wangwang donated $25`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:mr-[529px] 3xl:text-fs16 font-dmsans font-normal lg:ml-[6px] lg:mr-[343px] lg:mt-[1px] lg:text-fs10 ml-[8px] mr-[441px] mt-[2px] text-fs14 text-gray_506 text-right tracking-ls1 xl:ml-[7px] xl:mr-[392px] xl:mt-[1px] xl:text-fs12">{`1 Hours Ago`}</Text>
                </Row>
              </Column>
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[7px] xl:text-fs14">{`I appreciate the dedication and hard work from the awesome people that are trying to save the old-growth forests. More power to you!`}</Text>
            </Column>
          </Row>
          <Row className="3xl:my-[14px] justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[32px] 3xl:w-[48px] bg-gray_305 h-[40px] lg:h-[32px] lg:mb-[21px] lg:w-[31px] mb-[27px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[24px] xl:w-[35px]"></div>
            <Column className="font-dmsans justify-start w-[93%]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-lora justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold font-lora lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Karina Wangwang donated $25`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:mr-[529px] 3xl:text-fs16 font-dmsans font-normal lg:ml-[6px] lg:mr-[343px] lg:mt-[1px] lg:text-fs10 ml-[8px] mr-[441px] mt-[2px] text-fs14 text-gray_506 text-right tracking-ls1 xl:ml-[7px] xl:mr-[392px] xl:mt-[1px] xl:text-fs12">{`1 Hours Ago`}</Text>
                </Row>
              </Column>
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[7px] xl:text-fs14">{`I appreciate the dedication and hard work from the awesome people that are trying to save the old-growth forests. More power to you!`}</Text>
            </Column>
          </Row>
          <Row className="3xl:my-[14px] justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[32px] 3xl:w-[48px] bg-gray_305 h-[40px] lg:h-[32px] lg:mb-[21px] lg:w-[31px] mb-[27px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[24px] xl:w-[35px]"></div>
            <Column className="font-dmsans justify-start w-[93%]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-lora justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold font-lora lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Karina Wangwang donated $25`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:mr-[529px] 3xl:text-fs16 font-dmsans font-normal lg:ml-[6px] lg:mr-[343px] lg:mt-[1px] lg:text-fs10 ml-[8px] mr-[441px] mt-[2px] text-fs14 text-gray_506 text-right tracking-ls1 xl:ml-[7px] xl:mr-[392px] xl:mt-[1px] xl:text-fs12">{`1 Hours Ago`}</Text>
                </Row>
              </Column>
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[7px] xl:text-fs14">{`I appreciate the dedication and hard work from the awesome people that are trying to save the old-growth forests. More power to you!`}</Text>
            </Column>
          </Row>
          <Row className="3xl:my-[14px] justify-between lg:my-[9px] my-[12px] px-[0] self-stretch w-[100%] xl:my-[10px]">
            <div className="2xl:h-[41px] 3xl:h-[49px] 3xl:mb-[32px] 3xl:w-[48px] bg-gray_305 h-[40px] lg:h-[32px] lg:mb-[21px] lg:w-[31px] mb-[27px] rounded-radius50 w-[40px] xl:h-[36px] xl:mb-[24px] xl:w-[35px]"></div>
            <Column className="font-dmsans justify-start w-[93%]">
              <Column className="items-center self-stretch w-[100%]">
                <Row className="font-lora justify-start self-stretch w-[100%]">
                  <Text className="3xl:text-fs19 font-bold font-lora lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`Karina Wangwang donated $25`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:mr-[529px] 3xl:text-fs16 font-dmsans font-normal lg:ml-[6px] lg:mr-[343px] lg:mt-[1px] lg:text-fs10 ml-[8px] mr-[441px] mt-[2px] text-fs14 text-gray_506 text-right tracking-ls1 xl:ml-[7px] xl:mr-[392px] xl:mt-[1px] xl:text-fs12">{`1 Hours Ago`}</Text>
                </Row>
              </Column>
              <Text className="3xl:mt-[9px] 3xl:text-fs19 font-normal lg:mt-[6px] lg:text-fs12 mt-[8px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[7px] xl:text-fs14">{`I appreciate the dedication and hard work from the awesome people that are trying to save the old-growth forests. More power to you!`}</Text>
            </Column>
          </Row>
        </List>
        <Button className="2xl:py-[20px] 3xl:mt-[48px] 3xl:mx-[124px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_700 border-bw font-bold font-dmsans lg:mt-[31px] lg:mx-[80px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mt-[40px] mx-[104px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[9%] xl:mt-[35px] xl:mx-[92px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`View More`}</Button>
        <Column className="3xl:mt-[96px] items-center lg:mt-[62px] mt-[80px] self-stretch w-[100%] xl:mt-[71px]">
          <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
            <Column className="3xl:mb-[129px] 3xl:ml-[124px] 3xl:mt-[128px] font-lora justify-start lg:mb-[84px] lg:ml-[80px] lg:mt-[83px] mb-[108px] ml-[104px] mt-[107px] w-[21%] xl:mb-[96px] xl:ml-[92px] xl:mt-[95px]">
              <Text className="3xl:text-fs46 font-bold font-lora lg:text-fs30 self-stretch text-fs39 text-gray_907 text-left tracking-ls1 w-[100%] xl:text-fs34">{`Help Other Campaigns`}</Text>
              <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor.`}</Text>
              <Button className="2xl:py-[20px] 3xl:mr-[12px] 3xl:mt-[67px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_700 border-bw font-bold font-dmsans lg:mr-[7px] lg:mt-[43px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[56px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[44%] xl:mr-[8px] xl:mt-[49px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`View More`}</Button>
            </Column>
            <List
              className="3xl:gap-[19px] 3xl:mr-[124px] flex-wrap gap-[16px] grid grid-cols-2 lg:gap-[12px] lg:mr-[80px] min-h-[auto] mr-[104px] w-[57%] xl:gap-[14px] xl:mr-[92px]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 font-dmsans justify-start rounded-radius16 w-[100%]">
                <div className="2xl:h-[289px] 3xl:h-[346px] bg-gray_305 h-[288px] lg:h-[224px] rounded-radius16 self-stretch w-[100%] xl:h-[257px]"></div>
                <Column className="3xl:mt-[28px] lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mx-[12px] lg:text-fs12 mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mx-[14px] xl:text-fs14">{`Llora, NY`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs28 font-bold font-lora lg:mt-[12px] lg:mx-[12px] lg:text-fs18 mt-[16px] mx-[16px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[14px] xl:mx-[14px] xl:text-fs21">{`Save the Llora Ice Park`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:mx-[12px] lg:text-fs12 mt-[16px] mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 w-[92%] xl:mt-[14px] xl:mx-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="3xl:mt-[28px] 3xl:mx-[19px] font-dmsans items-center justify-start lg:mt-[18px] lg:mx-[12px] mt-[24px] mx-[16px] w-[53%] xl:mt-[21px] xl:mx-[14px]">
                    <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`$20.000`}</Text>
                    <Text className="3xl:ml-[9px] 3xl:text-fs19 font-medium lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-gray_506 text-left tracking-ls1 xl:ml-[7px] xl:text-fs14">{`Rasied of $15.000`}</Text>
                  </Row>
                </Column>
                <Row className="3xl:mt-[28px] justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[92%] xl:mt-[21px]">
                  <ProgressBar.Line
                    className="2xl:h-[9px] 3xl:h-[10px] bg-gray_300_6c h-[8px] lg:h-[7px] lg:mb-[1px] lg:mt-[2px] mb-[2px] mt-[3px] rounded-radius8 w-[90%] xl:mb-[1px] xl:mt-[2px]"
                    percent="80"
                    strokeColor="#5c54ab"
                    trailColor="#e3e3eb6c"
                    name="Group426"
                  ></ProgressBar.Line>
                  <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:ml-[6px] lg:text-fs9 ml-[8px] text-fs12 text-gray_907 text-left tracking-ls1 xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
                </Row>
                <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_700 border-bw font-bold lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
              </Column>
              <Column className="bg-white_A700 font-dmsans justify-start rounded-radius16 w-[100%]">
                <div className="2xl:h-[289px] 3xl:h-[346px] bg-gray_305 h-[288px] lg:h-[224px] rounded-radius16 self-stretch w-[100%] xl:h-[257px]"></div>
                <Column className="3xl:mt-[28px] lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Text className="3xl:mx-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mx-[12px] lg:text-fs12 mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 xl:mx-[14px] xl:text-fs14">{`Llora, NY`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs28 font-bold font-lora lg:mt-[12px] lg:mx-[12px] lg:text-fs18 mt-[16px] mx-[16px] text-fs24 text-gray_907 text-left tracking-ls1 xl:mt-[14px] xl:mx-[14px] xl:text-fs21">{`Save the Llora Ice Park`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:mx-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:mx-[12px] lg:text-fs12 mt-[16px] mx-[16px] text-fs16 text-gray_506 text-left tracking-ls1 w-[92%] xl:mt-[14px] xl:mx-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
                  <Row className="3xl:mt-[28px] 3xl:mx-[19px] font-dmsans items-center justify-start lg:mt-[18px] lg:mx-[12px] mt-[24px] mx-[16px] w-[53%] xl:mt-[21px] xl:mx-[14px]">
                    <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-fs16 text-gray_907 text-left tracking-ls1 xl:text-fs14">{`$20.000`}</Text>
                    <Text className="3xl:ml-[9px] 3xl:text-fs19 font-medium lg:ml-[6px] lg:text-fs12 ml-[8px] text-fs16 text-gray_506 text-left tracking-ls1 xl:ml-[7px] xl:text-fs14">{`Rasied of $15.000`}</Text>
                  </Row>
                </Column>
                <Row className="3xl:mt-[28px] justify-start lg:mt-[18px] mt-[24px] mx-[auto] w-[92%] xl:mt-[21px]">
                  <ProgressBar.Line
                    className="2xl:h-[9px] 3xl:h-[10px] bg-gray_300_6c h-[8px] lg:h-[7px] lg:mb-[1px] lg:mt-[2px] mb-[2px] mt-[3px] rounded-radius8 w-[90%] xl:mb-[1px] xl:mt-[2px]"
                    percent="80"
                    strokeColor="#5c54ab"
                    trailColor="#e3e3eb6c"
                    name="Group425"
                  ></ProgressBar.Line>
                  <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:ml-[6px] lg:text-fs9 ml-[8px] text-fs12 text-gray_907 text-left tracking-ls1 xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
                </Row>
                <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-orange_700 border-bw font-bold lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
              </Column>
            </List>
          </Row>
          <div className="3xl:mt-[144px] lg:mt-[93px] mt-[120px] mx-[auto] w-[89%] xl:mt-[106px]">
            <Column className="bg-indigo_802 justify-end rounded-radius16 self-stretch w-[100%]">
              <Row className="3xl:mt-[76px] justify-evenly lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
                <Column className="3xl:mb-[121px] font-dmsans justify-start lg:mb-[78px] mb-[101px] w-[17%] xl:mb-[89px]">
                  <Image
                    src="img_dummylogo02_21.svg"
                    className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] h-[56px] lg:h-[44px] lg:mr-[7px] mr-[10px] object-contain w-[61%] xl:h-[50px] xl:mr-[8px]"
                    alt="DummyLogo02"
                  />
                  <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_200 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">
                    {
                      <>
                        {`OurStudio is a digital agency`}
                        <br />
                        {`UI / UX Design and Website`}
                        <br />
                        {`Development located in Ohio,`}
                        <br />
                        {`United States of America`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mt-[28px] font-lora justify-start lg:mt-[18px] mt-[24px] w-[7%] xl:mt-[21px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-lora lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`About us`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Donation`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Petition`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Events`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Blog`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`About`}</Text>
                  <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-gray_200 text-left tracking-ls1 xl:mt-[14px] xl:text-fs14">{`Contact Us`}</Text>
                </Column>
                <Column className="3xl:mb-[133px] 3xl:mt-[28px] font-lora justify-start lg:mb-[86px] lg:mt-[18px] mb-[111px] mt-[24px] w-[34%] xl:mb-[98px] xl:mt-[21px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Join a Newsletter`}</Text>
                  <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                    <Column className="font-dmsans justify-start self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Your Email`}</Text>
                      <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                        <Row className="font-dmsans items-center justify-between px-[0] self-stretch w-[100%]">
                          <Input
                            className="2xl:pb-[16px] 2xl:pt-[15px] 3xl:pb-[19px] 3xl:pl-[19px] 3xl:pt-[18px] 3xl:text-fs19 bg-white_A700 border border-gray_104 border-solid font-normal lg:pl-[12px] lg:py-[12px] lg:text-fs12 pb-[16.6px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 pt-[15.6px] rounded-radius8 text-fs16 text-gray_506 text-left tracking-ls1 w-[67%] xl:pb-[14px] xl:pl-[14px] xl:pt-[13px] xl:text-fs14"
                            name="TextInput"
                            placeholder={`Enter Your Email`}
                          ></Input>
                          <Button className="2xl:py-[16px] 3xl:px-[28px] 3xl:py-[19px] 3xl:text-fs19 bg-orange_700 border-bw font-bold lg:px-[18px] lg:py-[12px] lg:text-fs12 px-[24px] py-[16.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[31%] xl:px-[21px] xl:py-[14px] xl:text-fs14">{`Subscribes`}</Button>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Line className="3xl:mt-[57px] bg-gray_304 h-[1px] lg:mt-[37px] mt-[48px] mx-[auto] w-[80%] xl:mt-[42px]" />
              <Column className="3xl:mb-[48px] 3xl:mt-[27px] font-dmsans lg:mb-[31px] lg:mt-[17px] mb-[40px] mt-[23px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[20px]">
                <Text className="3xl:mx-[153px] 3xl:text-fs19 font-normal lg:mx-[99px] lg:text-fs12 mx-[128px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mx-[113px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
              </Column>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default DonationPage;
