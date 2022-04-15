import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { List } from "components/List";
import { Button } from "components/Button";

const OrderListPage = () => {
  return (
    <Column className="bg-gray_53 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Row className="justify-start self-stretch w-[100%]">
        <aside className="bg-indigo_700 items-center justify-start w-[18%]">
          <Column className="">
            <div className="3xl:mb-[246px] lg:mb-[159px] mb-[205px] overflow-x-scroll w-[100%] xl:mb-[182px]">
              <Column className="font-poppins justify-start self-stretch w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <div className="self-stretch w-[100%]">
                    <Column className="items-center justify-start self-stretch w-[100%]">
                      <Stack className="2xl:h-[214px] 3xl:h-[256px] h-[213px] lg:h-[166px] self-stretch w-[100%] xl:h-[190px]">
                        <Stack className="2xl:h-[184px] 3xl:h-[220px] absolute h-[183px] lg:h-[143px] self-stretch top-[0] w-[100%] xl:h-[163px]">
                          <Column className="absolute inset-[0] justify-start self-stretch w-[100%]">
                            <Column className="items-center self-stretch w-[100%]">
                              <Row className="bg-white_A700 font-poppins items-center justify-end self-stretch w-[100%]">
                                <Image
                                  src="img_hamburgermenu.svg"
                                  className="2xl:h-[47px] 3xl:h-[56px] 3xl:ml-[474px] 3xl:my-[44px] 3xl:w-[55px] h-[46px] lg:h-[36px] lg:ml-[307px] lg:my-[28px] lg:w-[35px] ml-[395px] my-[37px] object-contain w-[46px] xl:h-[41px] xl:ml-[351px] xl:my-[32px] xl:w-[40px]"
                                  alt="hamburgermenu"
                                />
                                <Text className="3xl:mb-[45px] 3xl:ml-[45px] 3xl:mt-[44px] 3xl:text-fs36 font-semibold lg:mb-[29px] lg:ml-[29px] lg:mt-[28px] lg:text-fs23 mb-[38px] ml-[38px] mt-[37px] text-black_900 text-fs30 text-left xl:mb-[33px] xl:ml-[33px] xl:mt-[32px] xl:text-fs26">{`Orders`}</Text>
                                <Row className="3xl:ml-[391px] 3xl:my-[38px] border border-gray_301 border-solid items-center justify-center lg:ml-[253px] lg:my-[24px] ml-[326px] my-[32px] rounded-radius45 w-[22%] xl:ml-[290px] xl:my-[28px]">
                                  <Stack className="2xl:h-[27px] 3xl:h-[32px] 3xl:ml-[45px] 3xl:my-[18px] h-[26px] lg:h-[21px] lg:ml-[29px] lg:my-[11px] ml-[38px] my-[15px] w-[23%] xl:h-[24px] xl:ml-[33px] xl:my-[13px]">
                                    <Text className="3xl:text-fs19 absolute font-normal inset-x-[0] inset-y-[1px] lg:text-fs12 self-stretch text-fs16 text-gray_401 text-left xl:text-fs14">{`Search here`}</Text>
                                    <Line className="2xl:h-[27px] 3xl:h-[32px] absolute bg-teal_403 h-[26px] left-[0] lg:h-[21px] w-[2px] xl:h-[24px]" />
                                  </Stack>
                                  <Image
                                    src="img_search_5.svg"
                                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[276px] 3xl:mr-[30px] 3xl:my-[19px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[178px] lg:mr-[19px] lg:my-[12px] lg:w-[18px] ml-[230px] mr-[25px] my-[16px] object-contain w-[24px] xl:h-[22px] xl:ml-[204px] xl:mr-[22px] xl:my-[14px] xl:w-[21px]"
                                    alt="search"
                                  />
                                </Row>
                                <Row className="3xl:mb-[38px] 3xl:ml-[38px] 3xl:mt-[33px] justify-center lg:mb-[24px] lg:ml-[24px] lg:mt-[21px] mb-[32px] ml-[32px] mt-[28px] w-[11%] xl:mb-[28px] xl:ml-[28px] xl:mt-[24px]">
                                  <Image
                                    src="img_notification_1.svg"
                                    className="2xl:h-[60px] 3xl:h-[71px] h-[59px] lg:h-[46px] mb-[1px] object-contain w-[29%] xl:h-[53px]"
                                    alt="notification"
                                  />
                                  <Image
                                    src="img_chat.svg"
                                    className="2xl:h-[60px] 3xl:h-[71px] 3xl:ml-[20px] h-[59px] lg:h-[46px] lg:ml-[13px] mb-[1px] ml-[17px] object-contain w-[29%] xl:h-[53px] xl:ml-[15px]"
                                    alt="chat"
                                  />
                                  <Image
                                    src="img_profilepicture_1.svg"
                                    className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[20px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[13px] lg:mt-[3px] lg:w-[43px] ml-[17px] mt-[4px] object-contain w-[56px] xl:h-[50px] xl:ml-[15px] xl:mt-[3px] xl:w-[49px]"
                                    alt="profile"
                                  />
                                </Row>
                                <Line className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[31px] 3xl:my-[38px] bg-gray_103 h-[56px] lg:h-[44px] lg:ml-[20px] lg:my-[24px] ml-[26px] my-[32px] rounded-radius8 w-[1px] xl:h-[50px] xl:ml-[23px] xl:my-[28px]" />
                                <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[22px] 3xl:mr-[60px] 3xl:my-[38px] font-poppins h-[56px] lg:h-[44px] lg:ml-[14px] lg:mr-[38px] lg:my-[24px] ml-[19px] mr-[50px] my-[32px] w-[13%] xl:h-[50px] xl:ml-[16px] xl:mr-[44px] xl:my-[28px]">
                                  <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
                                    <div className="input-wrap">
                                      <Image
                                        src="img_calendar_1.svg"
                                        className="absolute left-[18px] bg-transparent border-0 lg:left-[14px] lg:inset-y-[13px] xl:left-[16px] xl:inset-y-[15px] 2xl:inset-y-[17px] 3xl:left-[21px] 3xl:inset-y-[20px] inset-y-[17.375px]"
                                        alt="calendar 1"
                                      />
                                      <Input
                                        className="2xl:py-[17px] 3xl:pl-[62px] 3xl:py-[20px] 3xl:text-fs19 bg-transparent border border-indigo_700 border-solid font-semibold lg:pl-[40px] lg:py-[13px] lg:text-fs12 pl-[52px] placeholder:bg-transparent placeholder:text-indigo_700 py-[17.375px] rounded-radius48 text-fs16 text-indigo_700 text-left w-[100%] xl:pl-[46px] xl:py-[15px] xl:text-fs14"
                                        name="Group729"
                                        placeholder={`Schedule Event`}
                                      ></Input>
                                    </div>
                                  </div>
                                  <Row className="3xl:right-[16px] absolute font-poppins h-[max-content] inset-y-[0] items-center justify-center lg:right-[10px] my-[auto] right-[14px] w-[23%] xl:right-[12px]">
                                    <Text className="3xl:text-fs19 font-semibold lg:text-fs12 text-fs16 text-indigo_700 text-left xl:text-fs14">{`(5)`}</Text>
                                    <Image
                                      src="img_icchevron_3.svg"
                                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[10px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[7px] lg:w-[18px] ml-[9px] object-contain w-[24px] xl:h-[22px] xl:ml-[8px] xl:w-[21px]"
                                      alt="icchevron"
                                    />
                                  </Row>
                                </Stack>
                              </Row>
                            </Column>
                            <Column className="3xl:ml-[12px] bg-white_A700 font-poppins items-center justify-end lg:ml-[7px] ml-[10px] w-[82%] xl:ml-[8px]">
                              <Row className="3xl:mt-[22px] items-center justify-start lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                                <Text className="3xl:ml-[92px] 3xl:text-fs19 font-semibold lg:ml-[59px] lg:text-fs12 ml-[77px] text-fs16 text-indigo_700 text-left xl:ml-[68px] xl:text-fs14">{`Event /`}</Text>
                                <Text className="3xl:ml-[22px] 3xl:mr-[1617px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:mr-[1047px] lg:text-fs12 ml-[19px] mr-[1347px] text-bluegray_504 text-fs16 text-left xl:ml-[16px] xl:mr-[1198px] xl:text-fs14">{`Order List`}</Text>
                              </Row>
                              <Line className="3xl:mt-[22px] bg-gray_301 h-[1px] lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]" />
                            </Column>
                          </Column>
                          <Row className="absolute bg-indigo_700 font-poppins items-center justify-start left-[0] top-[0] w-[18%]">
                            <Image
                              src="img_vector_29.svg"
                              className="2xl:h-[36px] 2xl:mb-[32px] 2xl:mt-[52px] 3xl:h-[43px] 3xl:mb-[38px] 3xl:ml-[68px] 3xl:mt-[62px] h-[35.24px] lg:h-[28px] lg:mb-[25px] lg:ml-[44px] lg:mt-[40px] mb-[32.379997px] ml-[57px] mt-[52.38px] object-contain w-[14%] xl:h-[32px] xl:mb-[28px] xl:ml-[50px] xl:mt-[46px]"
                              alt="Vector"
                            />
                            <Text className="3xl:mb-[28px] 3xl:ml-[27px] 3xl:mr-[153px] 3xl:mt-[54px] 3xl:text-fs40 font-semibold lg:mb-[18px] lg:ml-[17px] lg:mr-[99px] lg:mt-[35px] lg:text-fs26 mb-[24px] ml-[23px] mr-[128px] mt-[45px] text-fs34 text-left text-white_A700 xl:mb-[21px] xl:ml-[20px] xl:mr-[113px] xl:mt-[40px] xl:text-fs30">{`Tixia.`}</Text>
                          </Row>
                        </Stack>
                        <Row className="absolute bg-indigo_700 bottom-[0] font-poppins items-center justify-start left-[0] w-[18%]">
                          <Image
                            src="img_icdashboard.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[60px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[38px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[50px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[44px] xl:mt-[19px] xl:w-[21px]"
                            alt="icdashboard"
                          />
                          <Text className="3xl:mb-[25px] 3xl:ml-[62px] 3xl:mr-[154px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[40px] lg:mr-[100px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[52px] mr-[129px] mt-[22px] text-fs16 text-left text-white_A700_cc xl:mb-[18px] xl:ml-[46px] xl:mr-[114px] xl:mt-[19px] xl:text-fs14">{`Dashboard`}</Text>
                        </Row>
                      </Stack>
                      <Row className="3xl:mr-[60px] 3xl:mt-[10px] font-poppins justify-between lg:mr-[38px] lg:mt-[7px] mr-[50px] mt-[9px] px-[0] w-[97%] xl:mr-[44px] xl:mt-[8px]">
                        <Row className="3xl:mb-[7px] bg-indigo_700 items-center justify-end lg:mb-[4px] mb-[6px] w-[18%] xl:mb-[5px]">
                          <Image
                            src="img_iccalendar.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[60px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[38px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[50px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[44px] xl:mt-[19px] xl:w-[21px]"
                            alt="iccalendar"
                          />
                          <Text className="3xl:mb-[26px] 3xl:ml-[62px] 3xl:mt-[25px] 3xl:text-fs19 font-medium lg:mb-[17px] lg:ml-[40px] lg:mt-[16px] lg:text-fs12 mb-[22px] ml-[52px] mt-[21px] text-fs16 text-left text-white_A700_cc xl:mb-[19px] xl:ml-[46px] xl:mt-[18px] xl:text-fs14">{`Schedule`}</Text>
                          <Column className="3xl:ml-[15px] 3xl:my-[26px] bg-yellow_A400 items-center justify-start lg:ml-[10px] lg:my-[17px] ml-[13px] my-[22px] rounded-radius50 w-[7%] xl:ml-[11px] xl:my-[19px]">
                            <Text className="3xl:mb-[6px] 3xl:text-fs14 font-semibold lg:mb-[3px] lg:mt-[2px] lg:text-fs9 mb-[5px] mt-[3px] mx-[auto] text-black_900 text-fs12 text-left xl:mb-[4px] xl:mt-[2px] xl:text-fs10">{`2`}</Text>
                          </Column>
                          <Image
                            src="img_icchevron_4.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[52px] 3xl:mr-[48px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[34px] lg:mr-[31px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[44px] mr-[40px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[39px] xl:mr-[35px] xl:mt-[19px] xl:w-[21px]"
                            alt="icchevron"
                          />
                        </Row>
                        <div className="bg-transparent border-0 w-[16%] input-wrap">
                          <Image
                            src="img_edittools_1.svg"
                            className="absolute top-[21.375px] bottom-[20.375px] left-[42px] bg-transparent border-0 lg:top-[16px] lg:bottom-[15px] lg:left-[32px] xl:top-[19px] xl:bottom-[18px] xl:left-[37px] 2xl:top-[21px] 2xl:bottom-[20px] 3xl:top-[25px] 3xl:bottom-[24px] 3xl:left-[50px]"
                            alt="edit-tools 1"
                          />
                          <Input
                            className="2xl:pb-[20px] 2xl:pt-[21px] 3xl:pb-[24px] 3xl:pl-[103px] 3xl:pt-[25px] 3xl:text-fs19 bg-indigo_51 border-0 font-semibold lg:pb-[15px] lg:pl-[66px] lg:pt-[16px] lg:text-fs12 pb-[20.375px] pl-[86px] placeholder:bg-transparent placeholder:text-indigo_700 pt-[21.375px] rounded-radius30 text-fs16 text-indigo_700 text-left w-[100%] xl:pb-[18px] xl:pl-[76px] xl:pt-[19px] xl:text-fs14"
                            name="btnGenerate"
                            placeholder={`Generate Report`}
                          ></Input>
                        </div>
                        <Row className="bg-white_A700 font-poppins items-center justify-end rounded-radius30 shadow-bs47 w-[62%]">
                          <Row className="3xl:ml-[52px] 3xl:my-[13px] items-center justify-between lg:ml-[34px] lg:my-[8px] ml-[44px] my-[11px] px-[0] w-[72%] xl:ml-[39px] xl:my-[9px]">
                            <Text className="3xl:mb-[10px] 3xl:mt-[7px] 3xl:text-fs14 font-normal leading-lh lg:mb-[7px] lg:mt-[4px] lg:text-fs9 mb-[9px] mt-[6px] text-black_900_7f1 text-fs12 text-left w-[24%] xl:mb-[8px] xl:mt-[5px] xl:text-fs10">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit,`}</Text>
                            <Column className="justify-start w-[17%]">
                              <Column className="font-poppins self-stretch w-[100%]">
                                <Text className="3xl:mx-[50px] 3xl:text-fs14 font-normal lg:mx-[32px] lg:text-fs9 mx-[42px] text-fs12 text-gray_505 text-left xl:mx-[37px] xl:text-fs10">{`Income`}</Text>
                              </Column>
                              <Row className="font-poppins justify-start self-stretch w-[100%]">
                                <Image
                                  src="img_icstat.svg"
                                  className="2xl:h-[27px] 3xl:h-[32px] 3xl:mb-[8px] h-[26px] lg:h-[21px] lg:mb-[5px] mb-[7px] object-contain w-[18%] xl:h-[24px] xl:mb-[6px]"
                                  alt="icstat"
                                />
                                <Text className="2xl:ml-[17px] 3xl:ml-[20px] 3xl:text-fs26 font-semibold lg:ml-[13px] lg:text-fs17 ml-[17.180054px] text-black_900 text-fs22 text-left xl:ml-[15px] xl:text-fs19">{`$126,000`}</Text>
                              </Row>
                            </Column>
                            <Column className="font-poppins justify-start w-[20%]">
                              <Text className="2xl:mx-[44px] 3xl:mx-[53px] 3xl:text-fs14 font-normal lg:mx-[34px] lg:text-fs9 mx-[44.5px] text-fs12 text-gray_505 text-left xl:mx-[39px] xl:text-fs10">{`Customer`}</Text>
                              <Column className="items-center self-stretch w-[100%]">
                                <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                                  <Image
                                    src="img_icstat_1.svg"
                                    className="2xl:h-[19px] 2xl:mb-[9px] 2xl:mt-[5px] 3xl:h-[22px] 3xl:mb-[11px] 3xl:mt-[6px] h-[18px] lg:h-[14px] lg:mb-[7px] lg:mt-[4px] mb-[9.5px] mt-[5.5px] object-contain w-[18%] xl:h-[17px] xl:mb-[8px] xl:mt-[4px]"
                                    alt="icstat"
                                  />
                                  <Text className="3xl:ml-[18px] 3xl:text-fs26 font-semibold lg:ml-[11px] lg:text-fs17 ml-[15px] text-black_900 text-fs22 text-left xl:ml-[13px] xl:text-fs19">{`765 Person`}</Text>
                                </Row>
                              </Column>
                            </Column>
                            <Column className="font-poppins justify-start w-[16%]">
                              <Text className="3xl:ml-[12px] 3xl:text-fs14 font-normal lg:ml-[7px] lg:text-fs9 ml-[10px] text-fs12 text-gray_505 text-left xl:ml-[8px] xl:text-fs10">{`Than last week`}</Text>
                              <Column className="items-center self-stretch w-[100%]">
                                <Row className="font-poppins justify-start self-stretch w-[100%]">
                                  <Image
                                    src="img_icstat_2.svg"
                                    className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[9px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[6px] lg:w-[18px] mb-[8px] mt-[1px] object-contain w-[24px] xl:h-[22px] xl:mb-[7px] xl:w-[21px]"
                                    alt="icstat"
                                  />
                                  <Text className="3xl:ml-[21px] 3xl:text-fs26 font-semibold lg:ml-[14px] lg:text-fs17 ml-[18px] text-black_900 text-fs22 text-left xl:ml-[16px] xl:text-fs19">{`72%`}</Text>
                                  <Image
                                    src="img_vector_30.svg"
                                    className="2xl:h-[7px] 3xl:h-[8px] 3xl:mb-[16px] 3xl:ml-[9px] 3xl:mr-[31px] 3xl:mt-[15px] h-[6px] lg:h-[5px] lg:ml-[6px] lg:mr-[20px] lg:my-[10px] mb-[14px] ml-[8px] mr-[26px] mt-[13px] object-contain w-[9%] xl:mb-[12px] xl:ml-[7px] xl:mr-[23px] xl:mt-[11px]"
                                    alt="Vector"
                                  />
                                </Row>
                              </Column>
                            </Column>
                          </Row>
                          <Text className="3xl:mb-[27px] 3xl:ml-[145px] 3xl:mt-[31px] 3xl:text-fs19 font-normal lg:mb-[17px] lg:ml-[94px] lg:mt-[20px] lg:text-fs12 mb-[23px] ml-[121px] mt-[26px] text-fs16 text-indigo_700 text-right xl:mb-[20px] xl:ml-[107px] xl:mt-[23px] xl:text-fs14">{`This Week`}</Text>
                          <Image
                            src="img_icchevron_5.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[27px] 3xl:ml-[14px] 3xl:mr-[45px] 3xl:mt-[31px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[17px] lg:ml-[9px] lg:mr-[29px] lg:mt-[20px] lg:w-[18px] mb-[23px] ml-[12px] mr-[38px] mt-[26px] object-contain w-[24px] xl:h-[22px] xl:mb-[20px] xl:ml-[10px] xl:mr-[33px] xl:mt-[23px] xl:w-[21px]"
                            alt="icchevron"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </div>
                </Column>
                <Stack className="2xl:h-[578px] 3xl:h-[693px] 3xl:mr-[12px] h-[577px] lg:h-[449px] lg:mr-[7px] lg:mt-[1px] mr-[10px] mt-[2px] w-[18%] xl:h-[514px] xl:mr-[8px] xl:mt-[1px]">
                  <Line className="3xl:bottom-[229px] absolute bg-indigo_501 bottom-[191px] h-[1px] lg:bottom-[148px] self-stretch shadow-bs48 w-[100%] xl:bottom-[169px]" />
                  <Column className="absolute inset-[0] items-center justify-start self-stretch w-[100%]">
                    <Column className="justify-start self-stretch w-[100%]">
                      <Row className="bg-white_A700_35 font-poppins items-center justify-start mx-[auto] rounded-radius55 w-[83%]">
                        <Stack className="2xl:h-[68px] 3xl:h-[81px] 3xl:w-[80px] bg-white_A700 h-[67px] lg:h-[53px] lg:w-[52px] rounded-radius55 w-[67px] xl:h-[60px] xl:w-[59px]">
                          <Image
                            src="img_icticket.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] absolute h-[24px] inset-[0] justify-center lg:h-[19px] lg:w-[18px] m-[auto] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                            alt="icticket"
                          />
                        </Stack>
                        <Text className="3xl:mb-[26px] 3xl:ml-[36px] 3xl:mt-[25px] 3xl:text-fs19 font-semibold lg:mb-[17px] lg:ml-[23px] lg:mt-[16px] lg:text-fs12 mb-[22px] ml-[30px] mt-[21px] text-fs16 text-left text-white_A700 xl:mb-[19px] xl:ml-[26px] xl:mt-[18px] xl:text-fs14">{`Tickets`}</Text>
                        <Image
                          src="img_icchevron_6.svg"
                          className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[116px] 3xl:mr-[13px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[75px] lg:mr-[8px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[97px] mr-[11px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[86px] xl:mr-[9px] xl:mt-[19px] xl:w-[21px]"
                          alt="icchevron"
                        />
                      </Row>
                      <Column className="font-poppins self-stretch w-[100%]">
                        <Text className="3xl:pb-[12px] 3xl:pl-[42px] 3xl:pt-[10px] 3xl:text-fs19 bg-indigo_700 font-normal leading-lh lg:pl-[27px] lg:py-[7px] lg:text-fs12 pb-[10px] pl-[35px] pt-[9px] self-stretch text-fs16 text-left text-white_A700_cc w-[100%] xl:pl-[31px] xl:py-[8px] xl:text-fs14">{`Add New`}</Text>
                        <Text className="3xl:mt-[9px] 3xl:pb-[12px] 3xl:pl-[42px] 3xl:pt-[10px] 3xl:text-fs19 bg-indigo_700 font-normal leading-lh lg:mt-[6px] lg:pl-[27px] lg:py-[7px] lg:text-fs12 mt-[8px] pb-[10px] pl-[35px] pt-[9px] self-stretch text-fs16 text-left text-white_A700_cc w-[100%] xl:mt-[7px] xl:pl-[31px] xl:py-[8px] xl:text-fs14">{`Check Schedule`}</Text>
                        <Text className="3xl:mt-[9px] 3xl:pb-[12px] 3xl:pl-[42px] 3xl:pt-[10px] 3xl:text-fs19 bg-indigo_700 font-semibold leading-lh lg:mt-[6px] lg:pl-[27px] lg:py-[7px] lg:text-fs12 mt-[8px] pb-[10px] pl-[35px] pt-[9px] self-stretch text-fs16 text-left text-white_A700 w-[100%] xl:mt-[7px] xl:pl-[31px] xl:py-[8px] xl:text-fs14">{`Oreder List`}</Text>
                      </Column>
                    </Column>
                    <Row className="3xl:mt-[9px] bg-indigo_700 font-poppins items-center justify-end lg:mt-[6px] mt-[8px] self-stretch w-[100%] xl:mt-[7px]">
                      <Image
                        src="img_icuser.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[60px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[38px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[50px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[44px] xl:mt-[19px] xl:w-[21px]"
                        alt="icuser"
                      />
                      <Text className="3xl:mb-[26px] 3xl:ml-[62px] 3xl:mt-[25px] 3xl:text-fs19 font-medium lg:mb-[17px] lg:ml-[40px] lg:mt-[16px] lg:text-fs12 mb-[22px] ml-[52px] mt-[21px] text-fs16 text-left text-white_A700_cc xl:mb-[19px] xl:ml-[46px] xl:mt-[18px] xl:text-fs14">{`Customer`}</Text>
                      <Image
                        src="img_icchevron_4.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[88px] 3xl:mr-[48px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[57px] lg:mr-[31px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[74px] mr-[40px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[65px] xl:mr-[35px] xl:mt-[19px] xl:w-[21px]"
                        alt="icchevron"
                      />
                    </Row>
                    <Row className="3xl:mt-[8px] bg-indigo_700 font-poppins items-center justify-start lg:mt-[5px] mt-[7px] self-stretch w-[100%] xl:mt-[6px]">
                      <Image
                        src="img_icstreaming.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[24px] 3xl:ml-[60px] 3xl:mt-[27px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[15px] lg:ml-[38px] lg:mt-[17px] lg:w-[18px] mb-[20px] ml-[50px] mt-[23px] object-contain w-[24px] xl:h-[22px] xl:mb-[17px] xl:ml-[44px] xl:mt-[20px] xl:w-[21px]"
                        alt="icstreaming"
                      />
                      <Text className="3xl:mb-[25px] 3xl:ml-[62px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[40px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[52px] mt-[22px] text-fs16 text-left text-white_A700_cc xl:mb-[18px] xl:ml-[46px] xl:mt-[19px] xl:text-fs14">{`Streaming`}</Text>
                      <Text className="3xl:mb-[22px] 3xl:ml-[9px] 3xl:mr-[72px] 3xl:mt-[25px] 3xl:pl-[27px] 3xl:text-fs16 bg-red_A402 font-semibold lg:mb-[14px] lg:ml-[6px] lg:mr-[46px] lg:mt-[16px] lg:pl-[17px] lg:py-[2px] lg:text-fs10 mb-[19px] ml-[8px] mr-[60px] mt-[21px] pl-[23px] py-[3px] rounded-radius23 text-fs14 text-left text-white_A700 xl:mb-[16px] xl:ml-[7px] xl:mr-[53px] xl:mt-[18px] xl:pl-[20px] xl:py-[2px] xl:text-fs12">{`LIVE`}</Text>
                    </Row>
                    <Row className="3xl:mt-[54px] bg-indigo_700 font-poppins items-center justify-start lg:mt-[35px] mt-[45px] self-stretch w-[100%] xl:mt-[40px]">
                      <Image
                        src="img_icsetting.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[19px] 3xl:ml-[60px] 3xl:mt-[20px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[12px] lg:ml-[38px] lg:mt-[13px] lg:w-[18px] mb-[16px] ml-[50px] mt-[17px] object-contain w-[24px] xl:h-[22px] xl:mb-[14px] xl:ml-[44px] xl:mt-[15px] xl:w-[21px]"
                        alt="icsetting"
                      />
                      <Text className="3xl:mb-[20px] 3xl:ml-[62px] 3xl:mr-[183px] 3xl:mt-[19px] 3xl:text-fs19 font-medium lg:mb-[13px] lg:ml-[40px] lg:mr-[119px] lg:mt-[12px] lg:text-fs12 mb-[17px] ml-[52px] mr-[153px] mt-[16px] text-fs16 text-left text-white_A700_cc xl:mb-[15px] xl:ml-[46px] xl:mr-[136px] xl:mt-[14px] xl:text-fs14">{`Settings`}</Text>
                    </Row>
                    <Row className="bg-indigo_700 font-poppins items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_icsetting_1.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[19px] 3xl:ml-[60px] 3xl:mt-[20px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[12px] lg:ml-[38px] lg:mt-[13px] lg:w-[18px] mb-[16px] ml-[50px] mt-[17px] object-contain w-[24px] xl:h-[22px] xl:mb-[14px] xl:ml-[44px] xl:mt-[15px] xl:w-[21px]"
                        alt="icsetting"
                      />
                      <Text className="3xl:mb-[20px] 3xl:ml-[62px] 3xl:mr-[224px] 3xl:mt-[19px] 3xl:text-fs19 font-medium lg:mb-[13px] lg:ml-[40px] lg:mr-[145px] lg:mt-[12px] lg:text-fs12 mb-[17px] ml-[52px] mr-[187px] mt-[16px] text-fs16 text-left text-white_A700_cc xl:mb-[15px] xl:ml-[46px] xl:mr-[166px] xl:mt-[14px] xl:text-fs14">{`Hep`}</Text>
                    </Row>
                    <Row className="bg-indigo_700 font-poppins items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_iclogout.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[19px] 3xl:ml-[60px] 3xl:mt-[20px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[12px] lg:ml-[38px] lg:mt-[13px] lg:w-[18px] mb-[16px] ml-[50px] mt-[17px] object-contain w-[24px] xl:h-[22px] xl:mb-[14px] xl:ml-[44px] xl:mt-[15px] xl:w-[21px]"
                        alt="iclogout"
                      />
                      <Text className="3xl:mb-[20px] 3xl:ml-[62px] 3xl:mr-[196px] 3xl:mt-[19px] 3xl:text-fs19 font-medium lg:mb-[13px] lg:ml-[40px] lg:mr-[127px] lg:mt-[12px] lg:text-fs12 mb-[17px] ml-[52px] mr-[164px] mt-[16px] text-fs16 text-left text-white_A700_cc xl:mb-[15px] xl:ml-[46px] xl:mr-[145px] xl:mt-[14px] xl:text-fs14">{`Logout`}</Text>
                    </Row>
                  </Column>
                </Stack>
                <Text className="3xl:mt-[81px] 3xl:mx-[60px] 3xl:text-fs16 font-semibold lg:mt-[52px] lg:mx-[38px] lg:text-fs10 mt-[68px] mx-[50px] text-fs14 text-left text-white_A700 xl:mt-[60px] xl:mx-[44px] xl:text-fs12">{`Tixia Ticketing Admin Dashboard`}</Text>
                <Text className="3xl:mx-[60px] 3xl:text-fs16 font-normal lg:mt-[3px] lg:mx-[38px] lg:text-fs10 mt-[4px] mx-[50px] text-fs14 text-left text-white_A700 xl:mt-[3px] xl:mx-[44px] xl:text-fs12">{`© 2020 All Rights Reserved`}</Text>
                <Text className="3xl:mt-[30px] 3xl:mx-[60px] 3xl:text-fs16 font-normal lg:mt-[19px] lg:mx-[38px] lg:text-fs10 mt-[25px] mx-[50px] text-fs14 text-indigo_A202 text-left xl:mt-[22px] xl:mx-[44px] xl:text-fs12">{`Made with ♥ by Peterdraw`}</Text>
              </Column>
            </div>
          </Column>
        </aside>
        <Column className="3xl:mb-[57px] 3xl:mt-[402px] 3xl:mx-[60px] items-center justify-start lg:mb-[37px] lg:mt-[260px] lg:mx-[38px] mb-[48px] mt-[335px] mx-[50px] w-[77%] xl:mb-[42px] xl:mt-[298px] xl:mx-[44px]">
          <Column className="bg-white_A700 items-center justify-start rounded-radius30 self-stretch shadow-bs47 w-[100%]">
            <Column className="bg-white_A700 font-poppins items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[30px] rounded-tr-[30px] self-stretch w-[100%]">
              <Row className="3xl:mt-[36px] items-center justify-start lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                <Text className="3xl:ml-[36px] 3xl:text-fs21 font-medium lg:ml-[23px] lg:text-fs14 ml-[30px] text-black_900 text-fs18 text-left xl:ml-[26px] xl:text-fs16">{`Order ID`}</Text>
                <Row className="3xl:ml-[57px] items-center justify-center lg:ml-[37px] ml-[48px] w-[32%] xl:ml-[42px]">
                  <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-black_900 text-fs18 text-left xl:text-fs16">{`Date`}</Text>
                  <Text className="3xl:ml-[98px] 3xl:text-fs21 font-medium lg:ml-[63px] lg:text-fs14 ml-[82px] text-black_900 text-fs18 text-left xl:ml-[72px] xl:text-fs16">{`Event Name`}</Text>
                  <Text className="3xl:ml-[103px] 3xl:text-fs21 font-medium lg:ml-[66px] lg:text-fs14 ml-[86px] text-black_900 text-fs18 text-left xl:ml-[76px] xl:text-fs16">{`Customer Name`}</Text>
                </Row>
                <Image
                  src="img_icsort.svg"
                  className="2xl:h-[15px] 2xl:mb-[6px] 3xl:h-[18px] 3xl:ml-[6px] 3xl:my-[7px] h-[14.5px] lg:h-[12px] lg:mb-[5px] lg:ml-[3px] lg:mt-[4px] mb-[6.5px] ml-[5px] mt-[6px] object-contain w-[1%] xl:h-[13px] xl:ml-[4px] xl:my-[5px]"
                  alt="icsort"
                />
                <Text className="2xl:ml-[30px] 3xl:ml-[36px] 3xl:text-fs21 font-medium lg:ml-[23px] lg:text-fs14 ml-[30.449951px] text-black_900 text-fs18 text-left xl:ml-[27px] xl:text-fs16">{`Location`}</Text>
                <Row className="3xl:ml-[105px] items-center justify-center lg:ml-[68px] ml-[88px] w-[26%] xl:ml-[78px]">
                  <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-black_900 text-fs18 text-left xl:text-fs16">{`Sold Ticket`}</Text>
                  <Text className="3xl:ml-[84px] 3xl:text-fs21 font-medium lg:ml-[54px] lg:text-fs14 ml-[70px] text-black_900 text-fs18 text-left xl:ml-[62px] xl:text-fs16">{`Available`}</Text>
                  <Text className="3xl:ml-[84px] 3xl:text-fs21 font-medium lg:ml-[54px] lg:text-fs14 ml-[70px] text-black_900 text-fs18 text-left xl:ml-[62px] xl:text-fs16">{`Refund`}</Text>
                </Row>
                <Text className="3xl:ml-[42px] 3xl:mr-[106px] 3xl:text-fs21 font-medium lg:ml-[27px] lg:mr-[69px] lg:text-fs14 ml-[35px] mr-[89px] text-black_900 text-fs18 text-left xl:ml-[31px] xl:mr-[79px] xl:text-fs16">{`Total Revenue`}</Text>
              </Row>
              <Line className="3xl:mt-[33px] bg-gray_200 h-[2px] lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]" />
            </Column>
            <Stack className="2xl:h-[638px] 3xl:h-[765px] 3xl:mb-[34px] h-[637px] lg:h-[496px] lg:mb-[22px] mb-[29px] self-stretch w-[100%] xl:h-[567px] xl:mb-[25px]">
              <List
                className="absolute flex-wrap gap-[0] inset-[0] min-h-[auto] self-stretch w-[100%]"
                orientation="vertical"
              >
                <Column className="bg-white_A700 font-poppins items-center justify-center my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Bella Simatupang`}</Text>
                    <Text className="3xl:ml-[78px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[50px] lg:my-[10px] lg:text-fs10 ml-[65px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[57px] xl:my-[11px] xl:text-fs12">{`London, US`}</Text>
                    <Text className="3xl:ml-[108px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[70px] lg:my-[10px] lg:text-fs10 ml-[90px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[80px] xl:my-[11px] xl:text-fs12">{`1 Pcs`}</Text>
                    <Text className="3xl:ml-[162px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[105px] lg:my-[10px] lg:text-fs10 ml-[135px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[120px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`NO`}</Text>
                    <Text className="3xl:ml-[93px] 3xl:mr-[135px] 3xl:pl-[28px] 3xl:py-[15px] 3xl:text-fs16 bg-indigo_700_1e font-medium leading-lh lg:ml-[60px] lg:mr-[87px] lg:pl-[18px] lg:py-[10px] lg:text-fs10 ml-[78px] mr-[113px] pl-[24px] py-[13px] rounded-radius33 text-fs14 text-indigo_700 text-left w-[7%] xl:ml-[69px] xl:mr-[100px] xl:pl-[21px] xl:py-[11px] xl:text-fs12">{`$125,70`}</Text>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
                <Column className="bg-white_A700 font-poppins items-center justify-center my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Elisabeth Queen`}</Text>
                    <Text className="3xl:ml-[91px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[59px] lg:my-[10px] lg:text-fs10 ml-[76px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[67px] xl:my-[11px] xl:text-fs12">{`Medan, Indonesia`}</Text>
                    <Text className="3xl:ml-[50px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:my-[10px] lg:text-fs10 ml-[42px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[37px] xl:my-[11px] xl:text-fs12">{`4 Pcs`}</Text>
                    <Text className="3xl:ml-[157px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[101px] lg:my-[10px] lg:text-fs10 ml-[131px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[116px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`NO`}</Text>
                    <Button className="2xl:py-[14px] 3xl:ml-[93px] 3xl:mr-[135px] 3xl:px-[28px] 3xl:py-[17px] 3xl:text-fs16 bg-indigo_700_1e border-bw font-medium lg:ml-[60px] lg:mr-[87px] lg:px-[18px] lg:py-[11px] lg:text-fs10 ml-[78px] mr-[113px] px-[24px] py-[14.205px] rounded-radius33 text-center text-fs14 text-indigo_700 w-[7%] xl:ml-[69px] xl:mr-[100px] xl:px-[21px] xl:py-[12px] xl:text-fs12">{`$536,00`}</Button>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
                <Column className="bg-white_A700 font-poppins items-center justify-center my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Andrew Stevano`}</Text>
                    <Text className="3xl:ml-[90px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[58px] lg:my-[10px] lg:text-fs10 ml-[75px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[66px] xl:my-[11px] xl:text-fs12">{`Jakarta, Indonesia`}</Text>
                    <Text className="3xl:ml-[44px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[28px] lg:my-[10px] lg:text-fs10 ml-[37px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[32px] xl:my-[11px] xl:text-fs12">{`2 Pcs`}</Text>
                    <Text className="3xl:ml-[158px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[102px] lg:my-[10px] lg:text-fs10 ml-[132px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[117px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-fs14 text-left text-red_A402 xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`REFUND`}</Text>
                    <Button className="2xl:py-[14px] 3xl:ml-[54px] 3xl:mr-[135px] 3xl:pl-[28px] 3xl:pr-[33px] 3xl:py-[17px] 3xl:text-fs16 bg-indigo_700_1e border-bw font-medium lg:ml-[35px] lg:mr-[87px] lg:pl-[18px] lg:pr-[21px] lg:py-[11px] lg:text-fs10 ml-[45px] mr-[113px] pl-[24px] pr-[28px] py-[14.205px] rounded-radius33 text-center text-fs14 text-indigo_700 w-[7%] xl:ml-[40px] xl:mr-[100px] xl:pl-[21px] xl:pr-[24px] xl:py-[12px] xl:text-fs12">{`$124,55`}</Button>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
                <Column className="bg-white_A700 font-poppins items-center justify-center my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Cive Slauw`}</Text>
                    <Text className="3xl:ml-[135px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[87px] lg:my-[10px] lg:text-fs10 ml-[113px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[100px] xl:my-[11px] xl:text-fs12">{`Penang, Malaysia`}</Text>
                    <Text className="3xl:ml-[51px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[33px] lg:my-[10px] lg:text-fs10 ml-[43px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[38px] xl:my-[11px] xl:text-fs12">{`4 Pcs`}</Text>
                    <Text className="3xl:ml-[157px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[101px] lg:my-[10px] lg:text-fs10 ml-[131px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[116px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`NO`}</Text>
                    <Button className="2xl:py-[14px] 3xl:ml-[93px] 3xl:mr-[135px] 3xl:px-[28px] 3xl:py-[17px] 3xl:text-fs16 bg-indigo_700_1e border-bw font-medium lg:ml-[60px] lg:mr-[87px] lg:px-[18px] lg:py-[11px] lg:text-fs10 ml-[78px] mr-[113px] px-[24px] py-[14.205px] rounded-radius33 text-center text-fs14 text-indigo_700 w-[7%] xl:ml-[69px] xl:mr-[100px] xl:px-[21px] xl:py-[12px] xl:text-fs12">{`$536,00`}</Button>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
                <Row className="bg-white_A700 font-poppins items-center justify-start my-[0] rounded-radius30 self-stretch shadow-bs49 w-[100%]">
                  <Text className="3xl:ml-[32px] 3xl:my-[42px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[27px] lg:text-fs10 ml-[27px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[31px] xl:text-fs12">{`#0012451`}</Text>
                  <Text className="3xl:mb-[30px] 3xl:ml-[73px] 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh lg:mb-[19px] lg:ml-[47px] lg:mt-[18px] lg:text-fs10 mb-[25px] ml-[61px] mt-[24px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[22px] xl:ml-[54px] xl:mt-[21px] xl:text-fs12">
                    {
                      <>
                        {`04/08/2020`}
                        <br />
                        {`12:34 AM`}
                      </>
                    }
                  </Text>
                  <Text className="3xl:mb-[30px] 3xl:ml-[50px] 3xl:mt-[28px] 3xl:text-fs16 font-normal leading-lh lg:mb-[19px] lg:ml-[32px] lg:mt-[18px] lg:text-fs10 mb-[25px] ml-[42px] mt-[24px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[22px] xl:ml-[37px] xl:mt-[21px] xl:text-fs12">
                    {
                      <>
                        {`The Story of Danau Toba`}
                        <br />
                        {`(Musical Drama)`}
                      </>
                    }
                  </Text>
                  <Text className="3xl:ml-[32px] 3xl:my-[42px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[27px] lg:text-fs10 ml-[27px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[31px] xl:text-fs12">{`David Bekam`}</Text>
                  <Text className="3xl:ml-[116px] 3xl:my-[42px] 3xl:text-fs16 font-normal lg:ml-[75px] lg:my-[27px] lg:text-fs10 ml-[97px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[86px] xl:my-[31px] xl:text-fs12">{`Sydney, Australia`}</Text>
                  <Text className="3xl:ml-[55px] 3xl:my-[42px] 3xl:text-fs16 font-normal lg:ml-[35px] lg:my-[27px] lg:text-fs10 ml-[46px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[40px] xl:my-[31px] xl:text-fs12">{`4 Pcs`}</Text>
                  <Text className="3xl:ml-[157px] 3xl:my-[42px] 3xl:text-fs16 font-normal lg:ml-[101px] lg:my-[27px] lg:text-fs10 ml-[131px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[116px] xl:my-[31px] xl:text-fs12">{`567k left`}</Text>
                  <Text className="3xl:ml-[115px] 3xl:my-[42px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[27px] lg:text-fs10 ml-[96px] my-[35px] text-black_900_cc text-fs14 text-left xl:ml-[85px] xl:my-[31px] xl:text-fs12">{`NO`}</Text>
                  <Text className="3xl:ml-[93px] 3xl:mr-[135px] 3xl:my-[26px] 3xl:pl-[28px] 3xl:py-[15px] 3xl:text-fs16 bg-indigo_700_1e font-medium leading-lh lg:ml-[60px] lg:mr-[87px] lg:my-[17px] lg:pl-[18px] lg:py-[10px] lg:text-fs10 ml-[78px] mr-[113px] my-[22px] pl-[24px] py-[13px] rounded-radius33 text-fs14 text-indigo_700 text-left w-[7%] xl:ml-[69px] xl:mr-[100px] xl:my-[19px] xl:pl-[21px] xl:py-[11px] xl:text-fs12">{`$65,22`}</Text>
                </Row>
                <Column className="bg-white_A700 font-poppins items-center justify-center my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Eddy Cusuma`}</Text>
                    <Text className="3xl:ml-[110px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[71px] lg:my-[10px] lg:text-fs10 ml-[92px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[81px] xl:my-[11px] xl:text-fs12">{`Medan, Indonesia`}</Text>
                    <Text className="3xl:ml-[50px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[32px] lg:my-[10px] lg:text-fs10 ml-[42px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[37px] xl:my-[11px] xl:text-fs12">{`3 Pcs`}</Text>
                    <Text className="3xl:ml-[158px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[102px] lg:my-[10px] lg:text-fs10 ml-[132px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[117px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`NO`}</Text>
                    <Text className="3xl:ml-[93px] 3xl:mr-[135px] 3xl:pl-[28px] 3xl:py-[15px] 3xl:text-fs16 bg-indigo_700_1e font-medium leading-lh lg:ml-[60px] lg:mr-[87px] lg:pl-[18px] lg:py-[10px] lg:text-fs10 ml-[78px] mr-[113px] pl-[24px] py-[13px] rounded-radius33 text-fs14 text-indigo_700 text-left w-[7%] xl:ml-[69px] xl:mr-[100px] xl:pl-[21px] xl:py-[11px] xl:text-fs12">{`$44,00`}</Text>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
                <Column className="bg-white_A700 font-poppins items-center justify-end my-[0] self-stretch w-[100%]">
                  <Row className="3xl:mt-[26px] items-center justify-start lg:mt-[17px] mt-[22px] self-stretch w-[100%] xl:mt-[19px]">
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`#0012451`}</Text>
                    <Text className="3xl:ml-[73px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[47px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[61px] mt-[2px] text-black_900_cc text-fs14 text-left w-[6%] xl:mb-[2px] xl:ml-[54px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`04/08/2020`}
                          <br />
                          {`12:34 AM`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[50px] 3xl:text-fs16 font-normal leading-lh lg:mb-[2px] lg:ml-[32px] lg:mt-[1px] lg:text-fs10 mb-[3px] ml-[42px] mt-[2px] text-black_900_cc text-fs14 text-left w-[12%] xl:mb-[2px] xl:ml-[37px] xl:mt-[1px] xl:text-fs12">
                      {
                        <>
                          {`The Story of Danau Toba`}
                          <br />
                          {`(Musical Drama)`}
                        </>
                      }
                    </Text>
                    <Text className="3xl:ml-[32px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[21px] lg:my-[10px] lg:text-fs10 ml-[27px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[24px] xl:my-[11px] xl:text-fs12">{`Frank Azire`}</Text>
                    <Text className="3xl:ml-[138px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[89px] lg:my-[10px] lg:text-fs10 ml-[115px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[102px] xl:my-[11px] xl:text-fs12">{`Bangkok, Thailand`}</Text>
                    <Text className="3xl:ml-[45px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[29px] lg:my-[10px] lg:text-fs10 ml-[38px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[33px] xl:my-[11px] xl:text-fs12">{`5 Pcs`}</Text>
                    <Text className="3xl:ml-[157px] 3xl:my-[15px] 3xl:text-fs16 font-normal lg:ml-[101px] lg:my-[10px] lg:text-fs10 ml-[131px] my-[13px] text-black_900_cc text-fs14 text-left xl:ml-[116px] xl:my-[11px] xl:text-fs12">{`567k left`}</Text>
                    <Text className="3xl:ml-[115px] 3xl:my-[15px] 3xl:text-fs16 font-bold lg:ml-[74px] lg:my-[10px] lg:text-fs10 ml-[96px] my-[13px] text-fs14 text-left text-red_A402 xl:ml-[85px] xl:my-[11px] xl:text-fs12">{`REFUND`}</Text>
                    <Text className="3xl:ml-[54px] 3xl:mr-[135px] 3xl:pl-[28px] 3xl:py-[15px] 3xl:text-fs16 bg-indigo_700_1e font-medium leading-lh lg:ml-[35px] lg:mr-[87px] lg:pl-[18px] lg:py-[10px] lg:text-fs10 ml-[45px] mr-[113px] pl-[24px] py-[13px] rounded-radius33 text-fs14 text-indigo_700 text-left w-[7%] xl:ml-[40px] xl:mr-[100px] xl:pl-[21px] xl:py-[11px] xl:text-fs12">{`$51,50`}</Text>
                  </Row>
                  <Line className="3xl:mr-[28px] 3xl:mt-[25px] bg-gray_101 h-[1px] lg:mr-[18px] lg:mt-[16px] mr-[24px] mt-[21px] rounded-radius14 shadow-bs47 w-[98%] xl:mr-[21px] xl:mt-[18px]" />
                </Column>
              </List>
            </Stack>
          </Column>
          <Row className="3xl:mr-[12px] 3xl:mt-[50px] font-poppins items-center justify-between lg:mr-[7px] lg:mt-[32px] mr-[10px] mt-[42px] px-[0] w-[99%] xl:mr-[8px] xl:mt-[37px]">
            <Text className="3xl:mb-[21px] 3xl:mt-[22px] 3xl:text-fs19 font-medium lg:my-[14px] lg:text-fs12 mb-[18px] mt-[19px] text-black_900 text-fs16 text-left xl:my-[16px] xl:text-fs14">
              <span className="text-black_900 text-fs16 font-poppins text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`Showing `}</>
              </span>
              <span className="text-black_900 text-fs16 font-poppins text-left font-semibold lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`10`}</>
              </span>
              <span className="text-black_900 text-fs16 font-poppins text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{` from `}</>
              </span>
              <span className="text-black_900 text-fs16 font-poppins text-left font-semibold lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{`46`}</>
              </span>
              <span className="text-black_900 text-fs16 font-poppins text-left font-medium lg:text-fs12 xl:text-fs14 3xl:text-fs19">
                <>{` data`}</>
              </span>
            </Text>
            <Row className="border border-indigo_700 border-solid font-poppins items-center justify-between px-[0] rounded-radius30 w-[22%]">
              <Row className="3xl:ml-[16px] items-center justify-between lg:ml-[10px] ml-[14px] px-[0] w-[40%] xl:ml-[12px]">
                <Image
                  src="img_icchevron_7.svg"
                  className="2xl:h-[25px] 2xl:my-[18px] 3xl:h-[29px] 3xl:my-[22px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:my-[14px] lg:w-[18px] my-[18.5px] object-contain w-[24px] xl:h-[22px] xl:my-[16px] xl:w-[21px]"
                  alt="icchevron"
                />
                <Button className="2xl:py-[18px] 3xl:px-[32px] 3xl:py-[22px] 3xl:text-fs21 bg-indigo_700 border-bw font-medium lg:px-[21px] lg:py-[14px] lg:text-fs14 px-[27px] py-[18.545px] rounded-radius30 text-center text-fs18 text-gray_53 w-[47%] xl:px-[24px] xl:py-[16px] xl:text-fs16">{`1`}</Button>
                <Text className="3xl:my-[20px] 3xl:text-fs21 font-medium lg:my-[13px] lg:text-fs14 my-[17px] text-fs18 text-indigo_700 text-left xl:my-[15px] xl:text-fs16">{`2`}</Text>
              </Row>
              <Text className="3xl:my-[20px] 3xl:text-fs21 font-medium lg:my-[13px] lg:text-fs14 my-[17px] text-fs18 text-indigo_700 text-left xl:my-[15px] xl:text-fs16">{`3`}</Text>
              <Text className="3xl:my-[20px] 3xl:text-fs21 font-medium lg:my-[13px] lg:text-fs14 my-[17px] text-fs18 text-indigo_700 text-left xl:my-[15px] xl:text-fs16">{`4`}</Text>
              <Image
                src="img_icchevron_8.svg"
                className="2xl:h-[25px] 2xl:my-[18px] 3xl:h-[29px] 3xl:mr-[18px] 3xl:my-[22px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mr-[11px] lg:my-[14px] lg:w-[18px] mr-[15px] my-[18.5px] object-contain w-[24px] xl:h-[22px] xl:mr-[13px] xl:my-[16px] xl:w-[21px]"
                alt="icchevron"
              />
            </Row>
          </Row>
        </Column>
      </Row>
    </Column>
  );
};

export default OrderListPage;
