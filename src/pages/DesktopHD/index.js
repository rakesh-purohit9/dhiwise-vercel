import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Row } from "components/Row";
import { List } from "components/List";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const DesktopHDPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[690px] 3xl:h-[828px] 3xl:ml-[12px] h-[689px] lg:h-[536px] lg:ml-[7px] ml-[10px] w-[90%] xl:h-[613px] xl:ml-[8px]">
          <Image
            src="img_heroimg.svg"
            className="2xl:h-[690px] 3xl:h-[828px] absolute h-[689px] lg:h-[536px] object-contain right-[0] w-[61%] xl:h-[613px]"
            alt="Heroimg"
          />
          <Column className="3xl:bottom-[147px] 3xl:left-[7px] absolute bottom-[123px] font-rubik justify-start left-[6px] lg:bottom-[95px] lg:left-[4px] w-[43%] xl:bottom-[109px] xl:left-[5px]">
            <Text className="2xl:leading-lh66 3xl:leading-lh79 3xl:text-fs62 font-normal leading-lh6600 lg:leading-lh51 lg:text-fs40 self-stretch text-black_900 text-fs52 text-left tracking-ls1 w-[100%] xl:leading-lh58 xl:text-fs46">
              {
                <>
                  {`Grow your brand`}
                  <br />
                  {`through digital`}
                </>
              }
            </Text>
            <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mr-[7px] lg:mt-[31px] lg:text-fs11 mr-[10px] mt-[40px] text-bluegray_912 text-fs15 text-left w-[76%] xl:leading-lh21 xl:mr-[8px] xl:mt-[35px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness. each of us has within our power the ability to disrupt`}</Text>
            <div className="3xl:mr-[12px] 3xl:mt-[48px] bg-transparent border-bw lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[38%] xl:mr-[8px] xl:mt-[35px] input-wrap">
              <Image
                src="img_group_13.svg"
                className="absolute top-[22.545px] bottom-[24.545px] right-[59px] border-bw bg-transparent lg:top-[17px] lg:bottom-[19px] lg:right-[45px] xl:top-[20px] xl:bottom-[21px] xl:right-[52px] 2xl:top-[22px] 2xl:bottom-[24px] 3xl:top-[27px] 3xl:bottom-[29px] 3xl:right-[70px]"
                alt="Group"
              />
              <Button className="2xl:pb-[24px] 2xl:pl-[27px] 2xl:pt-[22px] 3xl:pb-[29px] 3xl:pl-[32px] 3xl:pr-[116px] 3xl:pt-[27px] 3xl:text-fs21 bg-red_A203 border-bw font-normal lg:pb-[19px] lg:pl-[21px] lg:pr-[75px] lg:pt-[17px] lg:text-fs14 pb-[24.545px] pl-[27.100006px] pr-[97px] pt-[22.545px] text-fs18 text-left text-white_A700 w-[100%] xl:pb-[21px] xl:pl-[24px] xl:pr-[86px] xl:pt-[20px] xl:text-fs16">{`Learn More`}</Button>
            </div>
          </Column>
          <div className="3xl:top-[48px] absolute left-[0] lg:top-[31px] top-[40px] w-[90%] xl:top-[35px]">
            <Row className="font-rubik items-center justify-between px-[0] self-stretch w-[100%]">
              <Text className="3xl:text-fs57 font-normal lg:text-fs37 ml-[1px] text-fs48 text-left text-red_A203 xl:text-fs42">{`.logo`}</Text>
              <Row className="3xl:mb-[16px] 3xl:mt-[9px] font-rubik justify-between lg:mb-[10px] lg:mt-[6px] mb-[14px] mt-[8px] px-[0] w-[43%] xl:mb-[12px] xl:mt-[7px]">
                <Column className="justify-start mt-[1px] w-[22%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Text className="3xl:text-fs24 font-normal lg:text-fs15 ml-[1px] text-bluegray_913 text-center text-fs20 xl:text-fs17">{`Our Service`}</Text>
                  </Column>
                  <ProgressBar.Line
                    className="2xl:h-[5px] 3xl:h-[5px] 3xl:mr-[12px] 3xl:mt-[6px] bg-red_400 h-[4px] lg:mr-[7px] lg:mt-[3px] mr-[10px] mt-[5px] w-[40%] xl:mr-[8px] xl:mt-[4px]"
                    percent="100"
                    strokeColor="#ff4545"
                    trailColor="#f25245"
                    name="Group592"
                  ></ProgressBar.Line>
                </Column>
                <Text className="3xl:mb-[12px] 3xl:text-fs24 font-normal lg:mb-[7px] lg:text-fs15 mb-[10px] text-bluegray_913 text-center text-fs20 xl:mb-[8px] xl:text-fs17">{`About us`}</Text>
                <Text className="3xl:mb-[12px] 3xl:text-fs24 font-normal lg:mb-[7px] lg:text-fs15 mb-[10px] text-bluegray_913 text-center text-fs20 xl:mb-[8px] xl:text-fs17">{`Blog`}</Text>
                <Text className="3xl:mb-[12px] 3xl:text-fs24 font-normal lg:mb-[7px] lg:text-fs15 mb-[10px] text-bluegray_913 text-center text-fs20 xl:mb-[8px] xl:text-fs17">{`Contact us`}</Text>
              </Row>
            </Row>
          </div>
        </Stack>
        <Column className="3xl:mt-[135px] items-center lg:mt-[87px] mt-[113px] self-stretch w-[100%] xl:mt-[100px]">
          <Column className="justify-start self-stretch w-[100%]">
            <List
              className="3xl:gap-[36px] 3xl:mx-[180px] flex-wrap gap-[30px] grid grid-cols-2 lg:gap-[23px] lg:mx-[116px] min-h-[auto] mx-[150px] w-[52%] xl:gap-[26px] xl:mx-[133px]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 font-rubik items-center justify-center shadow-bs39 w-[100%]">
                <Image
                  src="img_icon_66.svg"
                  className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[88px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[57px] lg:w-[74px] mt-[74px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[65px] xl:w-[85px]"
                  alt="Icon"
                />
                <Text className="3xl:mt-[42px] 3xl:text-fs33 font-normal lg:mt-[27px] lg:text-fs21 mt-[35px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[31px] xl:text-fs24">{`Fast`}</Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[66px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[42px] lg:mt-[12px] lg:text-fs11 mb-[55px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[48px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
              </Column>
              <Column className="bg-white_A700 border border-bluegray_104 border-solid font-rubik items-center justify-center w-[100%]">
                <Image
                  src="img_icon_66.svg"
                  className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[88px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[57px] lg:w-[74px] mt-[74px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[65px] xl:w-[85px]"
                  alt="Icon"
                />
                <Text className="3xl:mt-[42px] 3xl:text-fs33 font-normal lg:mt-[27px] lg:text-fs21 mt-[35px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[31px] xl:text-fs24">{`Efficient`}</Text>
                <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[66px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[42px] lg:mt-[12px] lg:text-fs11 mb-[55px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[48px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
              </Column>
            </List>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Row className="justify-between px-[0] self-stretch w-[100%]">
                <Column className="3xl:mt-[168px] justify-start lg:mt-[108px] mt-[140px] w-[17%] xl:mt-[124px]">
                  <Column className="items-end self-stretch w-[100%]">
                    <Column className="3xl:ml-[12px] items-center justify-start lg:ml-[7px] ml-[10px] rounded-radius50 w-[38%] xl:ml-[8px]"></Column>
                  </Column>
                  <Image
                    src="img_backgroundoval.svg"
                    className="2xl:h-[269px] 3xl:h-[322px] 3xl:mr-[12px] 3xl:mt-[15px] h-[268px] lg:h-[209px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[13px] object-contain w-[85%] xl:h-[239px] xl:mr-[8px] xl:mt-[11px]"
                    alt="backgroundOval"
                  />
                </Column>
                <List
                  className="3xl:gap-[36px] 3xl:mb-[139px] 3xl:mr-[180px] flex-wrap gap-[30px] grid grid-cols-2 lg:gap-[23px] lg:mb-[90px] lg:mr-[116px] mb-[116px] min-h-[auto] mr-[150px] w-[52%] xl:gap-[26px] xl:mb-[103px] xl:mr-[133px]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 border border-bluegray_104 border-solid font-rubik items-center justify-center w-[100%]">
                    <Image
                      src="img_icon_66.svg"
                      className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[91px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[59px] lg:w-[74px] mt-[76px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[67px] xl:w-[85px]"
                      alt="Icon"
                    />
                    <Text className="3xl:mt-[39px] 3xl:text-fs33 font-normal lg:mt-[25px] lg:text-fs21 mt-[33px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[29px] xl:text-fs24">{`Strategy`}</Text>
                    <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[66px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[42px] lg:mt-[12px] lg:text-fs11 mb-[55px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[48px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
                  </Column>
                  <Column className="bg-white_A700 border border-bluegray_104 border-solid font-rubik items-center justify-center w-[100%]">
                    <Image
                      src="img_icon_66.svg"
                      className="2xl:h-[97px] 3xl:h-[116px] 3xl:mt-[91px] 3xl:w-[115px] h-[96px] lg:h-[75px] lg:mt-[59px] lg:w-[74px] mt-[76px] mx-[auto] object-contain w-[96px] xl:h-[86px] xl:mt-[67px] xl:w-[85px]"
                      alt="Icon"
                    />
                    <Text className="3xl:mt-[39px] 3xl:text-fs33 font-normal lg:mt-[25px] lg:text-fs21 mt-[33px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[29px] xl:text-fs24">{`Reliable`}</Text>
                    <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[66px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[42px] lg:mt-[12px] lg:text-fs11 mb-[55px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[48px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion`}</Text>
                  </Column>
                </List>
              </Row>
            </Column>
          </Column>
          <Column className="3xl:mt-[91px] justify-start lg:mt-[59px] mt-[76px] self-stretch w-[100%] xl:mt-[67px]">
            <Column className="items-end self-stretch w-[100%]">
              <Row className="3xl:mx-[181px] font-rubik items-center justify-end lg:mx-[117px] mx-[151px] w-[30%] xl:mx-[134px]">
                <ProgressBar.Line
                  className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[28px] 3xl:mt-[32px] bg-red_400 h-[3px] lg:mb-[18px] lg:mt-[21px] mb-[24px] mt-[27px] w-[38%] xl:mb-[21px] xl:mt-[24px]"
                  percent="100"
                  strokeColor="#ff4545"
                  trailColor="#f25245"
                  name="Group591"
                ></ProgressBar.Line>
                <Text className="3xl:ml-[20px] 3xl:text-fs57 font-normal lg:ml-[13px] lg:text-fs37 ml-[17px] mr-[1px] text-bluegray_912 text-fs48 text-left xl:ml-[15px] xl:text-fs42">{`Our Project`}</Text>
              </Row>
            </Column>
            <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
              <Row className="justify-start self-stretch w-[100%]">
                <Row className="3xl:mb-[856px] 3xl:ml-[181px] items-center justify-center lg:mb-[554px] lg:ml-[117px] lg:mt-[3px] mb-[713px] ml-[151px] mt-[4px] w-[12%] xl:mb-[634px] xl:ml-[134px] xl:mt-[3px]">
                  <Stack className="2xl:h-[298px] 3xl:h-[357px] bg-bluegray_103 h-[297px] lg:h-[231px] rounded-radius3 w-[4%] xl:h-[265px]">
                    <Image
                      src="img_colorblue.svg"
                      className="2xl:h-[58px] 3xl:h-[69px] 3xl:top-[56px] absolute h-[57px] lg:h-[45px] lg:top-[36px] object-cover rounded-radius3 self-stretch top-[47px] w-[100%] xl:h-[51px] xl:top-[41px]"
                      alt="ColorBlue"
                    />
                  </Stack>
                  <Column className="3xl:mb-[20px] 3xl:ml-[24px] 3xl:mt-[27px] font-rubik justify-start lg:mb-[13px] lg:ml-[15px] lg:mt-[17px] mb-[17px] ml-[20px] mr-[1px] mt-[23px] w-[84%] xl:mb-[15px] xl:ml-[17px] xl:mt-[20px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs15 font-normal lg:ml-[2px] lg:mr-[7px] lg:text-fs10 ml-[3px] mr-[10px] text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:ml-[2px] xl:mr-[8px] xl:text-fs11">{`All Pages`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[79px] 3xl:text-fs15 font-normal lg:ml-[2px] lg:mr-[7px] lg:mt-[51px] lg:text-fs10 ml-[3px] mr-[10px] mt-[66px] text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:ml-[2px] xl:mr-[8px] xl:mt-[58px] xl:text-fs11">{`Website`}</Text>
                    <Text className="2xl:ml-[2px] 3xl:ml-[3px] 3xl:mt-[78px] 3xl:text-fs15 font-normal lg:ml-[1px] lg:mt-[50px] lg:text-fs10 ml-[2.5px] mr-[1px] mt-[65px] text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:ml-[2px] xl:mt-[57px] xl:text-fs11">{`App Development`}</Text>
                    <Text className="3xl:mt-[79px] 3xl:text-fs15 font-normal lg:mt-[51px] lg:text-fs10 mt-[66px] self-stretch text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:mt-[58px] xl:text-fs11">{`Digital Marketing`}</Text>
                  </Column>
                </Row>
                <Column className="3xl:ml-[150px] 3xl:mr-[178px] items-center justify-start lg:ml-[97px] lg:mr-[115px] ml-[125px] mr-[149px] w-[59%] xl:ml-[111px] xl:mr-[132px]">
                  <List
                    className="flex-wrap gap-[0] min-h-[auto] self-stretch w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="3xl:gap-[36px] 3xl:my-[18px] gap-[30px] grid grid-cols-3 items-center justify-between lg:gap-[23px] lg:my-[11px] my-[15px] self-stretch w-[100%] xl:gap-[26px] xl:my-[13px]">
                      <Column className="bg-gray_102 justify-center w-[100%]">
                        <Image
                          src="img_icon_67.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:mx-[117px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:mx-[76px] lg:w-[43px] mt-[62px] mx-[98px] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:mx-[87px] xl:w-[49px]"
                          alt="Icon"
                        />
                        <Column className="3xl:mb-[54px] 3xl:mt-[19px] font-rubik items-center lg:mb-[35px] lg:mt-[12px] mb-[45px] mt-[16px] self-stretch w-[100%] xl:mb-[40px] xl:mt-[14px]">
                          <Text className="3xl:text-fs33 font-normal lg:text-fs21 mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:text-fs24">{`Blue ping`}</Text>
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[12px] lg:text-fs11 mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                        </Column>
                      </Column>
                      <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                        <Image
                          src="img_icon_67.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:w-[43px] mt-[62px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:w-[49px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`Zoolino`}</Text>
                        <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                      </Column>
                      <Stack className="2xl:h-[319px] 3xl:h-[382px] h-[318px] lg:h-[248px] w-[100%] xl:h-[283px]">
                        <Stack className="2xl:h-[319px] 3xl:h-[382px] absolute font-rubik h-[318px] inset-[0] lg:h-[248px] self-stretch w-[100%] xl:h-[283px]">
                          <Image
                            src="img_container.svg"
                            className="2xl:h-[319px] 3xl:h-[382px] absolute h-[318px] inset-[0] lg:h-[248px] object-cover self-stretch w-[100%] xl:h-[283px]"
                            alt="Container"
                          />
                          <Text className="3xl:bottom-[159px] 3xl:text-fs33 3xl:top-[160px] absolute bottom-[133px] font-normal inset-x-[0] lg:bottom-[103px] lg:text-fs21 lg:top-[104px] self-stretch text-center text-fs28 text-white_A700 top-[134px] tracking-ls11 xl:bottom-[118px] xl:text-fs24 xl:top-[119px]">{`Wifi Zone`}</Text>
                        </Stack>
                        <Column className="3xl:bottom-[54px] absolute bottom-[45px] font-rubik inset-x-[0] items-center justify-start lg:bottom-[35px] mx-[auto] w-[78%] xl:bottom-[40px]">
                          <Image
                            src="img_icon_67.svg"
                            className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:w-[43px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:w-[49px]"
                            alt="Icon"
                          />
                          <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[99px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[64px] lg:text-fs11 mt-[83px] self-stretch text-center text-fs15 text-white_A700 w-[100%] xl:leading-lh21 xl:mt-[73px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                        </Column>
                      </Stack>
                    </Row>
                    <Row className="3xl:gap-[36px] 3xl:my-[18px] gap-[30px] grid grid-cols-3 items-center justify-between lg:gap-[23px] lg:my-[11px] my-[15px] self-stretch w-[100%] xl:gap-[26px] xl:my-[13px]">
                      <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                        <Image
                          src="img_icon_67.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:w-[43px] mt-[62px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:w-[49px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`Net Jet`}</Text>
                        <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                      </Column>
                      <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                        <Image
                          src="img_icon_67.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:w-[43px] mt-[62px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:w-[49px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`Blue dot network`}</Text>
                        <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                      </Column>
                      <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                        <Image
                          src="img_icon_67.svg"
                          className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:w-[43px] mt-[62px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:w-[49px]"
                          alt="Icon"
                        />
                        <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`Minimise`}</Text>
                        <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                      </Column>
                    </Row>
                  </List>
                  <Row className="3xl:gap-[36px] 3xl:mt-[36px] gap-[30px] grid grid-cols-3 items-center justify-between lg:gap-[23px] lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[26px]">
                    <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                      <Image
                        src="img_iconscomputer.svg"
                        className="2xl:h-[49px] 3xl:h-[58px] 3xl:mt-[84px] 3xl:w-[57px] h-[48px] lg:h-[38px] lg:mt-[54px] lg:w-[37px] mt-[70px] mx-[auto] object-contain w-[48px] xl:h-[43px] xl:mt-[62px] xl:w-[42px]"
                        alt="Icon"
                      />
                      <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`Best pick`}</Text>
                      <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                    </Column>
                    <Column className="bg-gray_102 font-rubik items-center justify-center w-[100%]">
                      <Image
                        src="img_icon_67.svg"
                        className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[74px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:mt-[48px] lg:w-[43px] mt-[62px] mx-[auto] object-contain w-[56px] xl:h-[50px] xl:mt-[55px] xl:w-[49px]"
                        alt="Icon"
                      />
                      <Text className="3xl:mt-[19px] 3xl:text-fs33 font-normal lg:mt-[12px] lg:text-fs21 mt-[16px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs28 tracking-ls11 xl:mt-[14px] xl:text-fs24">{`klioso`}</Text>
                      <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mb-[54px] 3xl:mt-[19px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mb-[35px] lg:mt-[12px] lg:text-fs11 mb-[45px] mt-[16px] mx-[auto] text-center text-fs15 text-gray_610 w-[78%] xl:leading-lh21 xl:mb-[40px] xl:mt-[14px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                    </Column>
                    <Column className="bg-white_A700 border border-red_400 border-solid font-rubik items-center justify-center w-[100%]">
                      <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mb-[139px] 3xl:mt-[140px] 3xl:mx-[40px] 3xl:text-fs33 font-normal leading-lh3600 lg:leading-lh28 lg:mb-[90px] lg:mt-[91px] lg:mx-[26px] lg:text-fs21 mb-[116px] mt-[117px] mx-[34px] text-bluegray_912 text-fs28 text-left w-[74%] xl:leading-lh32 xl:mb-[103px] xl:mt-[104px] xl:mx-[30px] xl:text-fs24">
                        {
                          <>
                            {`Explore all 50+`}
                            <br />
                            {`Projects`}
                          </>
                        }
                      </Text>
                    </Column>
                  </Row>
                </Column>
              </Row>
            </Column>
          </Column>
          <Stack className="2xl:h-[551px] 3xl:h-[661px] 3xl:mt-[226px] h-[550px] lg:h-[428px] lg:mt-[147px] mt-[189px] self-stretch w-[100%] xl:h-[490px] xl:mt-[168px]">
            <Image
              src="img_backgoundmask.svg"
              className="2xl:h-[551px] 3xl:h-[661px] absolute h-[550px] inset-[0] lg:h-[428px] object-cover self-stretch w-[100%] xl:h-[490px]"
              alt="Backgoundmask"
            />
            <Row className="absolute font-rubik h-[max-content] inset-[0] justify-center m-[auto] px-[0] w-[79%]">
              <Column className="justify-start w-[60%]">
                <Text className="2xl:leading-lh80 3xl:leading-lh96 3xl:text-fs72 font-normal leading-lh8000 lg:leading-lh62 lg:text-fs46 self-stretch text-fs60 text-left text-white_A700 w-[100%] xl:leading-lh71 xl:text-fs53">{`The thing about us is we think big, huge`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mr-[7px] lg:mt-[24px] lg:text-fs14 mr-[10px] mt-[31px] text-fs18 text-left text-white_A700 w-[71%] xl:leading-lh24 xl:mr-[8px] xl:mt-[27px] xl:text-fs16">
                  {
                    <>
                      {`•  If the path is beautiful, let us not ask where it leads`}
                      <br />
                      {`•  my religion is very simple. my religion is kindness`}
                      <br />
                      {`•  each of us has within our power the ability to disrupt`}
                    </>
                  }
                </Text>
                <Column className="3xl:mr-[12px] 3xl:mt-[57px] bg-red_A203 font-rubik items-center justify-start lg:mr-[7px] lg:mt-[37px] mr-[10px] mt-[48px] w-[23%] xl:mr-[8px] xl:mt-[42px]">
                  <div className="bg-transparent border-bw m-[1px] w-[99%] input-wrap">
                    <Image
                      src="img_icons_1.svg"
                      className="absolute top-[9.545px] bottom-[12.545px] right-[12px] border-bw bg-transparent lg:top-[7px] lg:bottom-[9px] lg:right-[9px] xl:top-[8px] xl:bottom-[11px] xl:right-[10px] 2xl:top-[9px] 2xl:bottom-[12px] 3xl:top-[11px] 3xl:bottom-[15px] 3xl:right-[14px]"
                      alt="Icons"
                    />
                    <Button className="2xl:pb-[12px] 2xl:pl-[7px] 2xl:pt-[9px] 3xl:pb-[15px] 3xl:pl-[9px] 3xl:pr-[60px] 3xl:pt-[11px] 3xl:text-fs21 bg-white_A700 border-bw font-normal lg:pb-[9px] lg:pl-[5px] lg:pr-[38px] lg:pt-[7px] lg:text-fs14 pb-[12.545px] pl-[7.5px] pr-[50px] pt-[9.545px] text-fs18 text-left text-white_A700 w-[100%] xl:pb-[11px] xl:pl-[6px] xl:pr-[44px] xl:pt-[8px] xl:text-fs16">{`Know more`}</Button>
                  </div>
                </Column>
              </Column>
              <Image
                src="img_playbutton.svg"
                className="2xl:h-[265px] 2xl:mb-[13px] 2xl:mt-[83px] 2xl:w-[264px] 3xl:h-[318px] 3xl:mb-[16px] 3xl:mt-[100px] 3xl:w-[317px] h-[264.54px] lg:h-[206px] lg:mb-[10px] lg:mt-[65px] lg:w-[205px] mb-[13.72998px] mt-[83.72998px] object-contain w-[264.54px] xl:h-[236px] xl:mb-[12px] xl:mt-[74px] xl:w-[235px]"
                alt="PlayButton"
              />
            </Row>
          </Stack>
          <Column className="3xl:mt-[150px] font-rubik items-center justify-start lg:mt-[97px] mt-[125px] self-stretch w-[100%] xl:mt-[111px]">
            <Row className="items-center justify-start self-stretch w-[100%]">
              <ProgressBar.Line
                className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[30px] 3xl:ml-[178px] 3xl:mt-[33px] bg-red_400 h-[3px] lg:mb-[19px] lg:ml-[115px] lg:mt-[21px] mb-[25px] ml-[149px] mt-[28px] w-[12%] xl:mb-[22px] xl:ml-[132px] xl:mt-[24px]"
                percent="100"
                strokeColor="#ff4545"
                trailColor="#f25245"
                name="Group589"
              ></ProgressBar.Line>
              <Text className="3xl:ml-[13px] 3xl:text-fs57 font-normal lg:ml-[8px] lg:text-fs37 ml-[11px] text-bluegray_912 text-center text-fs48 xl:ml-[9px] xl:text-fs42">{`Blogs`}</Text>
              <Text className="3xl:ml-[865px] 3xl:my-[19px] 3xl:text-fs24 font-normal lg:ml-[560px] lg:my-[12px] lg:text-fs15 ml-[721px] my-[16px] text-bluegray_913 text-center text-fs20 xl:ml-[641px] xl:my-[14px] xl:text-fs17">{`View All`}</Text>
              <Image
                src="img_iconarrowprim.svg"
                className="2xl:h-[30px] 3xl:h-[35px] 3xl:mb-[15px] 3xl:ml-[15px] 3xl:mr-[180px] 3xl:mt-[16px] 3xl:w-[34px] h-[29px] lg:h-[23px] lg:ml-[10px] lg:mr-[116px] lg:my-[10px] lg:w-[22px] mb-[13px] ml-[13px] mr-[150px] mt-[14px] object-contain w-[29px] xl:h-[26px] xl:mb-[11px] xl:ml-[11px] xl:mr-[133px] xl:mt-[12px] xl:w-[25px]"
                alt="iconarrowprim"
              />
            </Row>
            <List
              className="3xl:gap-[34px] 3xl:mt-[87px] flex-wrap gap-[29px] grid grid-cols-3 lg:gap-[22px] lg:mt-[56px] min-h-[auto] mt-[73px] mx-[auto] w-[79%] xl:gap-[25px] xl:mt-[64px]"
              orientation="horizontal"
            >
              <Column className="bg-white_A700 justify-start w-[100%]">
                <div className="2xl:h-[282px] 3xl:h-[338px] bg-bluegray_103 h-[281px] lg:h-[219px] self-stretch w-[100%] xl:h-[250px]"></div>
                <Column className="3xl:my-[36px] font-rubik lg:my-[23px] my-[30px] self-stretch w-[100%] xl:my-[26px]">
                  <Stack className="2xl:h-[31px] 3xl:h-[37px] 3xl:mx-[36px] h-[30px] lg:h-[24px] lg:mx-[23px] mx-[30px] w-[22%] xl:h-[27px] xl:mx-[26px]">
                    <Image
                      src="img_colorblue_1.svg"
                      className="2xl:h-[31px] 3xl:h-[37px] absolute h-[30px] inset-[0] lg:h-[24px] object-cover self-stretch w-[100%] xl:h-[27px]"
                      alt="ColorBlue"
                    />
                    <Text className="3xl:text-fs15 3xl:top-[7px] absolute font-normal inset-x-[0] lg:text-fs10 lg:top-[4px] mx-[auto] text-center text-fs13 text-white_A700 top-[6px] tracking-ls1 w-[max-content] xl:text-fs11 xl:top-[5px]">{`Strategy`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[16px] 3xl:mx-[36px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[10px] lg:mx-[23px] lg:text-fs14 mt-[14px] mx-[30px] text-bluegray_912 text-fs18 text-left w-[83%] xl:leading-lh24 xl:mt-[12px] xl:mx-[26px] xl:text-fs16">{`Artistic growth is, more than it is anything else`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[21px] 3xl:mx-[36px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[23px] lg:text-fs11 mt-[18px] mx-[30px] text-fs15 text-gray_611 text-left w-[83%] xl:leading-lh21 xl:mt-[16px] xl:mx-[26px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                  <Row className="3xl:mt-[52px] 3xl:mx-[36px] font-rubik items-center justify-start lg:mt-[34px] lg:mx-[23px] mt-[44px] mx-[30px] w-[33%] xl:mt-[39px] xl:mx-[26px]">
                    <Text className="2xl:mb-[6px] 2xl:mt-[7px] 3xl:my-[8px] 3xl:text-fs15 font-normal lg:my-[5px] lg:text-fs10 mb-[6.9902344px] mt-[7.0097656px] text-bluegray_913 text-center text-fs13 tracking-ls1 uppercase xl:my-[6px] xl:text-fs11">{`Read More`}</Text>
                    <Image
                      src="img_iconarrowprim.svg"
                      className="2xl:h-[30px] 3xl:h-[35px] 3xl:w-[34px] h-[29px] lg:h-[23px] lg:ml-[3px] lg:w-[22px] ml-[4px] object-contain w-[29px] xl:h-[26px] xl:ml-[3px] xl:w-[25px]"
                      alt="iconarrowprim"
                    />
                  </Row>
                </Column>
              </Column>
              <Stack className="2xl:h-[603px] 3xl:h-[723px] h-[602px] lg:h-[469px] w-[100%] xl:h-[536px]">
                <Stack className="2xl:h-[603px] 3xl:h-[723px] absolute font-rubik h-[602px] inset-[0] lg:h-[469px] self-stretch w-[100%] xl:h-[536px]">
                  <Row className="absolute bg-white_A700 inset-y-[0] items-center justify-start left-[0] right-[1px] shadow-bs39 w-[100%]">
                    <Text className="3xl:mb-[44px] 3xl:ml-[37px] 3xl:mt-[660px] 3xl:text-fs15 font-normal lg:mb-[28px] lg:ml-[24px] lg:mt-[427px] lg:text-fs10 mb-[37px] ml-[31px] mt-[550px] text-bluegray_913 text-center text-fs13 tracking-ls1 uppercase xl:mb-[32px] xl:ml-[27px] xl:mt-[489px] xl:text-fs11">{`Read More`}</Text>
                    <Image
                      src="img_iconarrowprim.svg"
                      className="2xl:h-[30px] 2xl:ml-[6px] 2xl:mr-[209px] 3xl:h-[35px] 3xl:mb-[36px] 3xl:ml-[7px] 3xl:mr-[251px] 3xl:mt-[651px] 3xl:w-[34px] h-[29px] lg:h-[23px] lg:mb-[23px] lg:ml-[5px] lg:mr-[162px] lg:mt-[422px] lg:w-[22px] mb-[30px] ml-[6.5px] mr-[209.5px] mt-[543px] object-contain w-[29px] xl:h-[26px] xl:mb-[26px] xl:ml-[5px] xl:mr-[186px] xl:mt-[483px] xl:w-[25px]"
                      alt="iconarrowprim"
                    />
                  </Row>
                  <div className="2xl:h-[282px] 3xl:h-[338px] absolute bg-bluegray_103 h-[281px] inset-x-[0] lg:h-[219px] top-[0] w-[100%] xl:h-[250px]"></div>
                </Stack>
                <Column className="3xl:bottom-[123px] absolute bottom-[103px] font-rubik inset-x-[0] justify-start lg:bottom-[80px] mx-[auto] w-[83%] xl:bottom-[91px]">
                  <Stack className="2xl:h-[31px] 3xl:h-[37px] 3xl:mr-[12px] h-[30px] lg:h-[24px] lg:mr-[7px] mr-[10px] w-[46%] xl:h-[27px] xl:mr-[8px]">
                    <Image
                      src="img_colorblue_2.svg"
                      className="2xl:h-[31px] 3xl:h-[37px] absolute h-[30px] inset-[0] lg:h-[24px] object-cover self-stretch w-[100%] xl:h-[27px]"
                      alt="ColorBlue"
                    />
                    <Text className="3xl:text-fs15 3xl:top-[7px] absolute font-normal inset-x-[0] lg:text-fs10 lg:top-[4px] mx-[auto] text-center text-fs13 text-white_A700 top-[6px] tracking-ls1 w-[max-content] xl:text-fs11 xl:top-[5px]">{`Digital Marketing`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[16px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[10px] lg:text-fs14 mt-[14px] self-stretch text-bluegray_912 text-fs18 text-left w-[100%] xl:leading-lh24 xl:mt-[12px] xl:text-fs16">{`Novelist with an unpronounceable name`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[21px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:text-fs11 mt-[18px] self-stretch text-fs15 text-gray_611 text-left w-[100%] xl:leading-lh21 xl:mt-[16px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                </Column>
              </Stack>
              <Column className="3xl:mb-[36px] justify-start lg:mb-[23px] mb-[30px] w-[100%] xl:mb-[26px]">
                <div className="2xl:h-[282px] 3xl:h-[338px] bg-bluegray_103 h-[281px] lg:h-[219px] self-stretch w-[100%] xl:h-[250px]"></div>
                <Column className="3xl:mt-[36px] font-rubik lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                  <Stack className="2xl:h-[31px] 3xl:h-[37px] 3xl:mx-[36px] h-[30px] lg:h-[24px] lg:mx-[23px] mx-[30px] w-[40%] xl:h-[27px] xl:mx-[26px]">
                    <Image
                      src="img_colorblue_3.svg"
                      className="2xl:h-[31px] 3xl:h-[37px] absolute h-[30px] inset-[0] lg:h-[24px] object-cover self-stretch w-[100%] xl:h-[27px]"
                      alt="ColorBlue"
                    />
                    <Text className="3xl:text-fs15 3xl:top-[7px] absolute font-normal inset-x-[0] lg:text-fs10 lg:top-[4px] mx-[auto] text-center text-fs13 text-white_A700 top-[6px] tracking-ls1 w-[max-content] xl:text-fs11 xl:top-[5px]">{`Web Development`}</Text>
                  </Stack>
                  <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[16px] 3xl:mx-[36px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[10px] lg:mx-[23px] lg:text-fs14 mt-[14px] mx-[30px] text-bluegray_912 text-fs18 text-left w-[83%] xl:leading-lh24 xl:mt-[12px] xl:mx-[26px] xl:text-fs16">{`Like birds that fly across national borders`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[21px] 3xl:mx-[36px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[14px] lg:mx-[23px] lg:text-fs11 mt-[18px] mx-[30px] text-fs15 text-gray_611 text-left w-[83%] xl:leading-lh21 xl:mt-[16px] xl:mx-[26px] xl:text-fs13">{`If the path is beautiful, let us not ask where it leads.`}</Text>
                  <Row className="3xl:mt-[52px] 3xl:mx-[36px] font-rubik items-center justify-start lg:mt-[34px] lg:mx-[23px] mt-[44px] mx-[30px] w-[33%] xl:mt-[39px] xl:mx-[26px]">
                    <Text className="3xl:my-[8px] 3xl:text-fs15 font-normal lg:my-[5px] lg:text-fs10 my-[7px] text-bluegray_913 text-center text-fs13 tracking-ls1 uppercase xl:my-[6px] xl:text-fs11">{`Read More`}</Text>
                    <Image
                      src="img_iconarrowprim.svg"
                      className="2xl:h-[30px] 2xl:ml-[6px] 3xl:h-[35px] 3xl:ml-[7px] 3xl:w-[34px] h-[29px] lg:h-[23px] lg:ml-[5px] lg:w-[22px] ml-[6.5px] mr-[1px] object-contain w-[29px] xl:h-[26px] xl:ml-[5px] xl:w-[25px]"
                      alt="iconarrowprim"
                    />
                  </Row>
                </Column>
              </Column>
            </List>
            <Image
              src="img_arrow_10.svg"
              className="2xl:h-[69px] 3xl:h-[82px] 3xl:mt-[66px] h-[68px] lg:h-[53px] lg:mt-[42px] mt-[55px] mx-[auto] object-contain w-[12%] xl:h-[61px] xl:mt-[48px]"
              alt="Arrow"
            />
          </Column>
          <Stack className="2xl:h-[811px] 3xl:h-[973px] 3xl:mt-[25px] h-[810px] lg:h-[630px] lg:mt-[16px] mt-[21px] mx-[auto] w-[83%] xl:h-[721px] xl:mt-[18px]">
            <Stack className="2xl:h-[811px] 3xl:h-[973px] absolute h-[810px] inset-[0] lg:h-[630px] self-stretch w-[100%] xl:h-[721px]">
              <Image
                src="img_ornament.svg"
                className="2xl:h-[360px] 3xl:h-[432px] absolute h-[359px] lg:h-[280px] object-contain opacity-op6 right-[0] top-[0] w-[12%] xl:h-[320px]"
                alt="Ornament"
              />
              <Column className="absolute bottom-[0] items-center justify-start left-[0] w-[96%]">
                <Row className="justify-between px-[0] self-stretch w-[100%]">
                  <Column className="3xl:mb-[66px] font-rubik items-center justify-start lg:mb-[42px] lg:mt-[3px] mb-[55px] mt-[4px] w-[13%] xl:mb-[48px] xl:mt-[3px]">
                    <Image
                      src="img_person1_8.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-cover self-stretch w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`Stifan Rodd`}</Text>
                  </Column>
                  <Column className="3xl:mb-[66px] font-rubik items-center justify-start lg:mb-[42px] lg:mt-[3px] mb-[55px] mt-[4px] w-[15%] xl:mb-[48px] xl:mt-[3px]">
                    <Image
                      src="img_person1_9.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-contain w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`Amanda Nunes`}</Text>
                  </Column>
                  <Column className="font-rubik items-center justify-start w-[13%]">
                    <Image
                      src="img_photo.svg"
                      className="2xl:h-[155px] 3xl:h-[185px] 3xl:w-[184px] h-[154px] lg:h-[120px] lg:w-[119px] mx-[auto] object-cover self-stretch w-[154px] xl:h-[137px] xl:w-[136px]"
                      alt="Photo"
                    />
                    <Text className="3xl:mt-[24px] 3xl:text-fs28 font-normal lg:mt-[15px] lg:text-fs18 mt-[20px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[17px] xl:text-fs21">{`Tiara Lyodra`}</Text>
                    <Text className="3xl:ml-[12px] 3xl:mr-[9px] 3xl:mt-[10px] 3xl:text-fs15 font-normal lg:ml-[7px] lg:mr-[6px] lg:mt-[7px] lg:text-fs10 ml-[10px] mr-[8px] mt-[9px] text-bluegray_913 text-center text-fs13 tracking-ls1 uppercase xl:ml-[8px] xl:mr-[7px] xl:mt-[8px] xl:text-fs11">{`Head of Product`}</Text>
                    <Row className="3xl:mt-[19px] justify-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                      <Image
                        src="img_iconsocialfac_1.svg"
                        className="2xl:h-[15px] 2xl:ml-[39px] 3xl:h-[17px] 3xl:ml-[47px] h-[14px] lg:h-[11px] lg:ml-[30px] ml-[39.46997px] mt-[1px] object-contain w-[5%] xl:h-[13px] xl:ml-[35px]"
                        alt="iconSocialFac"
                      />
                      <Image
                        src="img_iconsocialins_1.svg"
                        className="2xl:h-[15px] 2xl:ml-[20px] 3xl:h-[17px] 3xl:ml-[24px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:ml-[15px] lg:w-[10px] mb-[1px] ml-[20.53003px] object-contain w-[14px] xl:h-[13px] xl:ml-[18px] xl:w-[12px]"
                        alt="iconSocialIns"
                      />
                      <Image
                        src="img_iconsociallin.svg"
                        className="2xl:h-[14px] 2xl:ml-[21px] 2xl:mr-[37px] 3xl:h-[16px] 3xl:ml-[25px] 3xl:mr-[45px] 3xl:w-[15px] h-[13px] lg:h-[11px] lg:ml-[16px] lg:mr-[29px] lg:w-[10px] ml-[21.5px] mr-[37.5px] my-[1px] object-contain w-[13px] xl:h-[12px] xl:ml-[19px] xl:mr-[33px] xl:w-[11px]"
                        alt="iconSocialLin"
                      />
                    </Row>
                  </Column>
                  <Column className="3xl:mb-[66px] font-rubik items-center justify-start lg:mb-[42px] lg:mt-[3px] mb-[55px] mt-[4px] w-[13%] xl:mb-[48px] xl:mt-[3px]">
                    <Image
                      src="img_person1_10.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-cover self-stretch w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`John Doe`}</Text>
                  </Column>
                </Row>
                <Row className="3xl:mt-[37px] items-center justify-between lg:mt-[24px] mt-[31px] px-[0] self-stretch w-[100%] xl:mt-[27px]">
                  <Column className="font-rubik items-center justify-start w-[13%]">
                    <Image
                      src="img_person1_11.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-cover self-stretch w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`Stifan Rodd`}</Text>
                  </Column>
                  <Column className="font-rubik items-center justify-start w-[15%]">
                    <Image
                      src="img_person1_12.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-contain w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] self-stretch text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`Amanda Nunes`}</Text>
                  </Column>
                  <Column className="font-rubik items-center justify-start w-[13%]">
                    <Image
                      src="img_person1_13.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-cover self-stretch w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`Tiara Lyodra`}</Text>
                  </Column>
                  <Column className="font-rubik items-center justify-start w-[13%]">
                    <Image
                      src="img_person1_14.svg"
                      className="2xl:h-[147px] 3xl:h-[176px] 3xl:w-[175px] h-[146px] lg:h-[114px] lg:w-[113px] mx-[auto] object-cover self-stretch w-[146px] xl:h-[130px] xl:w-[129px]"
                      alt="person1"
                    />
                    <Text className="3xl:mt-[28px] 3xl:text-fs28 font-normal lg:mt-[18px] lg:text-fs18 mt-[24px] mx-[auto] text-bluegray_912 text-center text-fs24 xl:mt-[21px] xl:text-fs21">{`John Doe`}</Text>
                  </Column>
                </Row>
              </Column>
            </Stack>
            <Row className="3xl:top-[216px] absolute font-rubik items-center justify-start left-[0] lg:top-[140px] top-[180px] w-[33%] xl:top-[160px]">
              <ProgressBar.Line
                className="2xl:h-[4px] 3xl:h-[4px] 3xl:mb-[28px] 3xl:mt-[32px] bg-red_400 h-[3px] lg:mb-[18px] lg:mt-[21px] mb-[24px] mt-[27px] w-[43%] xl:mb-[21px] xl:mt-[24px]"
                percent="100"
                strokeColor="#ff4545"
                trailColor="#f25245"
                name="Group588"
              ></ProgressBar.Line>
              <Text className="3xl:ml-[13px] 3xl:mr-[7px] 3xl:text-fs57 font-normal lg:ml-[8px] lg:mr-[4px] lg:text-fs37 ml-[11px] mr-[6px] text-bluegray_912 text-fs48 text-left xl:ml-[9px] xl:mr-[5px] xl:text-fs42">{`Our Team`}</Text>
            </Row>
          </Stack>
          <Stack className="2xl:h-[282px] 3xl:h-[338px] 3xl:mt-[301px] h-[281px] lg:h-[219px] lg:mt-[195px] mt-[251px] mx-[auto] w-[66%] xl:h-[250px] xl:mt-[223px]">
            <Image
              src="img_rectangle.svg"
              className="2xl:h-[282px] 3xl:h-[338px] absolute h-[281px] inset-[0] lg:h-[219px] object-cover self-stretch w-[100%] xl:h-[250px]"
              alt="Rectangle"
            />
            <Row className="3xl:bottom-[56px] absolute bottom-[47px] font-rubik inset-x-[0] items-center justify-start lg:bottom-[36px] mx-[auto] w-[93%] xl:bottom-[41px]">
              <Stack className="2xl:h-[171px] 3xl:h-[205px] h-[170px] lg:h-[133px] w-[29%] xl:h-[152px]">
                <Line className="2xl:bottom-[8px] 2xl:h-[139px] 3xl:bottom-[9px] 3xl:h-[166px] absolute bg-white_A700 bottom-[8.25px] h-[138px] lg:bottom-[6px] lg:h-[108px] right-[0] w-[1px] xl:bottom-[7px] xl:h-[123px]" />
                <Column className="absolute font-rubik inset-y-[0] items-center justify-start left-[0] right-[1px] w-[100%]">
                  <Text className="2xl:tracking-ls31 3xl:text-fs96 3xl:tracking-ls31 font-normal lg:text-fs62 lg:tracking-ls21 mx-[auto] self-stretch text-center text-fs80 text-white_A700 tracking-ls23529410362243652 xl:text-fs71 xl:tracking-ls31">{`124`}</Text>
                  <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[12px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-center text-fs18 text-white_A700 uppercase w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs16">
                    {
                      <>
                        {`Complete`}
                        <br />
                        {` Projects`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
              <Column className="2xl:ml-[38px] 3xl:ml-[46px] items-center justify-start lg:ml-[29px] ml-[38.5px] w-[29%] xl:ml-[34px]">
                <Text className="2xl:tracking-ls31 3xl:text-fs96 3xl:tracking-ls31 font-normal lg:text-fs62 lg:tracking-ls21 mx-[auto] self-stretch text-center text-fs80 text-white_A700 tracking-ls23529410362243652 xl:text-fs71 xl:tracking-ls31">{`99%`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[12px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-center text-fs18 text-white_A700 uppercase w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs16">
                  {
                    <>
                      {`Satisfied `}
                      <br />
                      {`Clients`}
                    </>
                  }
                </Text>
              </Column>
              <Line className="2xl:h-[139px] 2xl:mb-[14px] 2xl:mt-[17px] 3xl:h-[166px] 3xl:mb-[17px] 3xl:ml-[39px] 3xl:mt-[21px] bg-white_A700 h-[138px] lg:h-[108px] lg:mb-[11px] lg:ml-[25px] lg:mt-[13px] mb-[14.25px] ml-[33px] mt-[17.75px] w-[1px] xl:h-[123px] xl:mb-[12px] xl:ml-[29px] xl:mt-[15px]" />
              <Column className="3xl:ml-[6px] font-rubik items-center justify-start lg:ml-[3px] ml-[5px] w-[33%] xl:ml-[4px]">
                <Text className="2xl:tracking-ls31 3xl:text-fs96 3xl:tracking-ls31 font-normal lg:text-fs62 lg:tracking-ls21 mx-[auto] text-center text-fs80 text-white_A700 tracking-ls23529410362243652 xl:text-fs71 xl:tracking-ls31">{`235`}</Text>
                <Text className="2xl:leading-lh27 3xl:leading-lh32 3xl:mt-[12px] 3xl:text-fs21 font-normal leading-lh2700 lg:leading-lh21 lg:mt-[7px] lg:text-fs14 mt-[10px] self-stretch text-center text-fs18 text-white_A700 uppercase w-[100%] xl:leading-lh24 xl:mt-[8px] xl:text-fs16">
                  {
                    <>
                      {`Success`}
                      <br />
                      {`Campaign`}
                    </>
                  }
                </Text>
              </Column>
            </Row>
          </Stack>
          <Column className="bg-gray_101 font-rubik justify-start self-stretch w-[100%]">
            <Image
              src="img_quote.svg"
              className="2xl:h-[58px] 2xl:mt-[88px] 3xl:h-[69px] 3xl:mt-[106px] 3xl:mx-[180px] h-[57px] lg:h-[45px] lg:mt-[68px] lg:mx-[116px] mt-[88.37012px] mx-[150px] object-contain w-[4%] xl:h-[51px] xl:mt-[78px] xl:mx-[133px]"
              alt="Quote"
            />
            <Image
              src="img_ratings_1.svg"
              className="2xl:h-[25px] 2xl:mt-[95px] 3xl:h-[29px] 3xl:mt-[114px] 3xl:mx-[181px] h-[24px] lg:h-[19px] lg:mt-[74px] lg:mx-[117px] mt-[95.62988px] mx-[151px] object-contain w-[15%] xl:h-[22px] xl:mt-[85px] xl:mx-[134px]"
              alt="Ratings"
            />
            <Text className="2xl:leading-lh51 3xl:leading-lh61 3xl:mt-[46px] 3xl:mx-[178px] 3xl:text-fs40 font-normal leading-lh5100 lg:leading-lh39 lg:mt-[30px] lg:mx-[115px] lg:text-fs26 mt-[39px] mx-[149px] text-bluegray_912 text-fs34 text-left w-[79%] xl:leading-lh45 xl:mt-[34px] xl:mx-[132px] xl:text-fs30">{`If the path is beautiful, let us not ask where it leads. my religion is very simple. my religion is kindness….`}</Text>
            <Row className="3xl:mb-[136px] 3xl:mt-[44px] 3xl:mx-[177px] font-rubik justify-start lg:mb-[88px] lg:mt-[28px] lg:mx-[115px] mb-[114px] mt-[37px] mx-[148px] w-[26%] xl:mb-[101px] xl:mt-[32px] xl:mx-[131px]">
              <Column className="justify-start w-[38%]">
                <Image
                  src="img_member01.svg"
                  className="2xl:h-[103px] 3xl:h-[123px] 3xl:mr-[12px] 3xl:w-[122px] h-[102px] lg:h-[80px] lg:mr-[7px] lg:w-[79px] mr-[10px] object-contain w-[102px] xl:h-[91px] xl:mr-[8px] xl:w-[90px]"
                  alt="Member01"
                />
                <Column className="3xl:mt-[37px] items-center lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]">
                  <Text className="3xl:ml-[6px] 3xl:text-fs28 font-normal lg:ml-[3px] lg:text-fs18 ml-[5px] mr-[1px] text-bluegray_912 text-center text-fs24 xl:ml-[4px] xl:text-fs21">{`Tiara Lyodra`}</Text>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:text-fs15 font-normal lg:ml-[3px] lg:mr-[7px] lg:text-fs10 ml-[4px] mr-[10px] mt-[1px] text-bluegray_913 text-fs13 text-left tracking-ls1 uppercase xl:ml-[3px] xl:mr-[8px] xl:text-fs11">{`Head of Product`}</Text>
              </Column>
              <Image
                src="img_member.svg"
                className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[102px] 3xl:ml-[12px] 3xl:mt-[19px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[66px] lg:ml-[7px] lg:mt-[12px] lg:w-[62px] mb-[85px] ml-[10px] mt-[16px] object-contain w-[80px] xl:h-[72px] xl:mb-[75px] xl:ml-[8px] xl:mt-[14px] xl:w-[71px]"
                alt="Member"
              />
              <Image
                src="img_member_1.svg"
                className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[102px] 3xl:ml-[72px] 3xl:mt-[19px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[66px] lg:ml-[46px] lg:mt-[12px] lg:w-[62px] mb-[85px] ml-[60px] mt-[16px] object-contain w-[80px] xl:h-[72px] xl:mb-[75px] xl:ml-[53px] xl:mt-[14px] xl:w-[71px]"
                alt="Member"
              />
            </Row>
          </Column>
          <Stack className="2xl:h-[587px] 3xl:h-[704px] h-[586px] lg:h-[456px] mx-[auto] w-[66%] xl:h-[522px]">
            <Image
              src="img_background_47.svg"
              className="2xl:h-[587px] 3xl:h-[704px] absolute h-[586px] inset-[0] lg:h-[456px] object-cover self-stretch w-[100%] xl:h-[522px]"
              alt="background"
            />
            <Column className="3xl:top-[76px] absolute font-rubik inset-x-[0] justify-start lg:top-[49px] mx-[auto] top-[64px] w-[80%] xl:top-[56px]">
              <Text className="3xl:ml-[44px] 3xl:mr-[43px] 3xl:text-fs57 font-normal lg:mx-[28px] lg:text-fs37 ml-[37px] mr-[36px] text-center text-fs48 text-white_A700 xl:mx-[32px] xl:text-fs42">{`Start a New Project!`}</Text>
              <Row className="3xl:gap-[36px] 3xl:mt-[57px] font-rubik gap-[30px] grid grid-cols-2 items-center justify-between lg:gap-[23px] lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[42px]">
                <Input
                  className="2xl:pb-[19px] 2xl:pt-[22px] 3xl:pb-[23px] 3xl:pl-[21px] 3xl:pt-[27px] 3xl:text-fs21 bg-white_A700_33 border-0 font-normal lg:pb-[15px] lg:pl-[14px] lg:pt-[17px] lg:text-fs14 pb-[19.5px] pl-[18px] placeholder:bg-transparent placeholder:text-white_A700 pt-[22.5px] rounded-radius6 text-fs18 text-left text-white_A700 w-[100%] xl:pb-[17px] xl:pl-[16px] xl:pt-[20px] xl:text-fs16"
                  name="FirstName"
                  placeholder={`Full Name`}
                ></Input>
                <Input
                  className="2xl:pb-[19px] 2xl:pt-[22px] 3xl:pb-[23px] 3xl:pl-[21px] 3xl:pt-[27px] 3xl:text-fs21 bg-white_A700_33 border-0 font-normal lg:pb-[15px] lg:pl-[14px] lg:pt-[17px] lg:text-fs14 pb-[19.5px] pl-[18px] placeholder:bg-transparent placeholder:text-white_A700 pt-[22.5px] rounded-radius6 text-fs18 text-left text-white_A700 w-[100%] xl:pb-[17px] xl:pl-[16px] xl:pt-[20px] xl:text-fs16"
                  name="lastName"
                  placeholder={`Email Address`}
                ></Input>
              </Row>
              <Column className="3xl:mt-[36px] font-rubik lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                <TextArea
                  className="2xl:pb-[39px] 2xl:pt-[23px] 3xl:pb-[47px] 3xl:pl-[21px] 3xl:pt-[28px] 3xl:text-fs21 bg-white_A700_33 border-0 font-normal lg:pb-[30px] lg:pl-[14px] lg:pt-[18px] lg:text-fs14 pb-[39.5px] pl-[18px] placeholder:bg-transparent placeholder:text-white_A700 pt-[23.5px] rounded-radius6 text-fs18 text-left text-white_A700 w-[100%] xl:pb-[35px] xl:pl-[16px] xl:pt-[20px] xl:text-fs16"
                  name="message"
                  placeholder={`Drop us a message here`}
                ></TextArea>
                <Stack className="2xl:h-[43px] 3xl:h-[51px] 3xl:mr-[12px] 3xl:mt-[36px] font-rubik h-[42px] lg:h-[33px] lg:mr-[7px] lg:mt-[23px] ml-[1px] mr-[10px] mt-[30px] w-[20%] xl:h-[38px] xl:mr-[8px] xl:mt-[26px]">
                  <Image
                    src="img_placeholder_10.svg"
                    className="2xl:h-[43px] 3xl:h-[51px] absolute h-[42px] inset-[0] lg:h-[33px] object-cover self-stretch w-[100%] xl:h-[38px]"
                    alt="Placeholder"
                  />
                  <Text className="3xl:inset-y-[10px] 3xl:text-fs21 absolute font-normal inset-x-[0] inset-y-[9px] lg:inset-y-[7px] lg:text-fs14 self-stretch text-bluegray_913 text-center text-fs18 xl:inset-y-[8px] xl:text-fs16">{`Submit`}</Text>
                </Stack>
              </Column>
            </Column>
          </Stack>
          <Column className="3xl:mt-[168px] items-center justify-start lg:mt-[108px] mt-[140px] self-stretch w-[100%] xl:mt-[124px]">
            <Image
              src="img_11clients.svg"
              className="2xl:h-[215px] 3xl:h-[257px] h-[214px] lg:h-[167px] object-cover self-stretch w-[100%] xl:h-[191px]"
              alt="11Clients"
            />
            <div className="self-stretch w-[100%]">
              <Row className="bg-bluegray_914 items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="3xl:mb-[235px] 3xl:mt-[199px] justify-start lg:mb-[152px] lg:mt-[129px] mb-[196px] mt-[166px] w-[25%] xl:mb-[174px] xl:mt-[147px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Column className="font-rubik justify-start self-stretch w-[100%]">
                      <Text className="3xl:mr-[12px] 3xl:text-fs57 font-normal lg:mr-[7px] lg:text-fs37 mr-[10px] text-fs48 text-left text-white_A700 xl:mr-[8px] xl:text-fs42">
                        <span className="text-white_A700 text-fs48 font-rubik text-left font-normal lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                          <>{`.`}</>
                        </span>
                        <span className="text-white_A700 text-fs48 font-rubik text-left font-normal lg:text-fs37 xl:text-fs42 3xl:text-fs57">
                          <>{`logo`}</>
                        </span>
                      </Text>
                      <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[18px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:ml-[3px] lg:mt-[11px] lg:text-fs11 ml-[4px] mt-[15px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh21 xl:ml-[3px] xl:mt-[13px] xl:text-fs13">{`Funding freemium long tail hypotheses first mover advantage assets ownership niche market startup investor. Burn rate termsheet leverage backing stock channels long tail twitter conversion. Customer founders growth hacking ecosystem value proposition direct mailing graphical user interface innovator stock. Startup scrum project bootstrapping advisor infographic agile development bandwidth. Strategy ownership non-disclosure agreement learning curve entrepreneur niche market graphical user interface creative advisor hypotheses. Venture twitter assets disruptive partnership paradigm shift business-to-consumer.`}</Text>
                    </Column>
                  </Column>
                  <Row className="3xl:mt-[61px] font-rubik items-end justify-start lg:mt-[39px] mt-[51px] self-stretch w-[100%] xl:mt-[45px]">
                    <Image
                      src="img_fill1_2.svg"
                      className="2xl:h-[11px] 2xl:mb-[4px] 3xl:h-[13px] 3xl:mb-[5px] 3xl:mt-[8px] h-[10.29px] lg:h-[9px] lg:mb-[3px] lg:ml-[3px] lg:mt-[5px] mb-[4.709961px] ml-[4px] mt-[7px] object-contain w-[4%] xl:h-[10px] xl:mb-[4px] xl:ml-[3px] xl:mt-[6px]"
                      alt="Fill1"
                    />
                    <Text className="2xl:ml-[15px] 3xl:ml-[18px] 3xl:mr-[214px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[139px] lg:text-fs14 mb-[1px] ml-[15.279999px] mr-[179px] text-fs18 text-left text-white_A700 xl:ml-[13px] xl:mr-[159px] xl:text-fs16">{`agensi@mail.com`}</Text>
                  </Row>
                  <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Row className="font-rubik items-end justify-start self-stretch w-[100%]">
                      <Image
                        src="img_fill1_3.svg"
                        className="2xl:h-[16px] 2xl:w-[15px] 3xl:h-[19px] 3xl:mt-[7px] 3xl:w-[18px] h-[15.68px] lg:h-[13px] lg:ml-[3px] lg:mt-[4px] lg:w-[12px] mb-[1px] ml-[4px] mt-[6px] object-contain w-[15.68px] xl:h-[14px] xl:ml-[3px] xl:mt-[5px] xl:w-[13px]"
                        alt="Fill1"
                      />
                      <Text className="2xl:ml-[10px] 3xl:ml-[12px] 3xl:mr-[241px] 3xl:text-fs21 font-normal lg:ml-[8px] lg:mr-[156px] lg:text-fs14 mb-[1px] ml-[10.320007px] mr-[201px] text-fs18 text-left text-white_A700 xl:ml-[9px] xl:mr-[178px] xl:text-fs16">{`+ 12 3456 7890`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="3xl:mb-[248px] 3xl:mt-[211px] font-rubik justify-start lg:mb-[161px] lg:mt-[136px] mb-[207px] mt-[176px] w-[13%] xl:mb-[184px] xl:mt-[156px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Services`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mt-[15px] 3xl:text-fs18 font-normal leading-lh4400 lg:leading-lh34 lg:mt-[10px] lg:text-fs11 mt-[13px] mx-[1px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh39 xl:mt-[11px] xl:text-fs13">
                    {
                      <>
                        {`Digital Marketing`}
                        <br />
                        {`Branding`}
                        <br />
                        {`Market Promotion`}
                        <br />
                        {`Digital Campaign`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mb-[248px] 3xl:mt-[211px] font-rubik justify-start lg:mb-[161px] lg:mt-[136px] mb-[207px] mt-[176px] w-[13%] xl:mb-[184px] xl:mt-[156px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 ml-[1px] mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`About Us`}</Text>
                  <Text className="2xl:leading-lh44 3xl:leading-lh52 3xl:mt-[15px] 3xl:text-fs18 font-normal leading-lh4400 lg:leading-lh34 lg:mt-[10px] lg:text-fs11 mt-[13px] mx-[1px] text-fs15 text-left text-white_A700 w-[99%] xl:leading-lh39 xl:mt-[11px] xl:text-fs13">
                    {
                      <>
                        {`Milestone`}
                        <br />
                        {`Check Our Pricing Plan`}
                        <br />
                        {`Expert Team`}
                        <br />
                        {`Our Exciting News`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="3xl:mb-[273px] 3xl:mt-[211px] font-rubik justify-start lg:mb-[177px] lg:mt-[136px] mb-[228px] mt-[176px] w-[13%] xl:mb-[202px] xl:mt-[156px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs19 font-black lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 xl:mr-[8px] xl:text-fs14">{`Address`}</Text>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[15px] 3xl:text-fs18 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[10px] lg:text-fs11 mt-[13px] self-stretch text-fs15 text-left text-white_A700 w-[100%] xl:leading-lh21 xl:mt-[11px] xl:text-fs13">
                    {
                      <>
                        {`123 Lorem Ipsum Street`}
                        <br />
                        {`Jakarta, Indonesia`}
                      </>
                    }
                  </Text>
                  <Image
                    src="img_socialmedia_7.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:mr-[12px] 3xl:mt-[80px] h-[40px] lg:h-[32px] lg:mr-[7px] lg:mt-[52px] ml-[1px] mr-[10px] mt-[67px] object-contain w-[76%] xl:h-[36px] xl:mr-[8px] xl:mt-[59px]"
                    alt="SocialMedia"
                  />
                </Column>
              </Row>
            </div>
          </Column>
        </Column>
      </Column>
    </Column>
  );
};

export default DesktopHDPage;
