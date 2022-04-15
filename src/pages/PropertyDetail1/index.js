import React from "react";

import ProgressBar from "rc-progress";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Image } from "components/Image";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { List } from "components/List";
import { Button } from "components/Button";

const PropertyDetail1Page = () => {
  return (
    <Column className="bg-bluegray_51 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[2241px] 3xl:h-[2689px] h-[2239px] lg:h-[1742px] self-stretch w-[100%] xl:h-[1992px]">
        <Column className="3xl:bottom-[60px] 3xl:right-[60px] absolute bottom-[50px] items-center justify-start lg:bottom-[38px] lg:right-[38px] right-[50px] w-[77%] xl:bottom-[44px] xl:right-[44px]">
          <Row className="font-poppins items-center justify-between px-[0] self-stretch w-[100%]">
            <Text className="3xl:text-fs40 font-poppins font-semibold lg:text-fs26 text-bluegray_916 text-fs34 text-left xl:text-fs30">{`Property Details`}</Text>
            <Text className="3xl:mb-[18px] 3xl:mt-[13px] 3xl:text-fs21 font-normal font-opensans lg:mb-[11px] lg:mt-[8px] lg:text-fs14 mb-[15px] mt-[11px] text-bluegray_503 text-fs18 text-right xl:mb-[13px] xl:mt-[9px] xl:text-fs16">
              <span className="text-blue_A400 text-fs18 font-opensans text-right font-bold lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                <>{`Property /`}</>
              </span>
              <span className="text-bluegray_503 text-fs18 font-opensans text-right font-normal lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                <>{` 221 XYZ Franklin State London`}</>
              </span>
            </Text>
          </Row>
          <Column className="3xl:mt-[60px] bg-white_A700 items-center justify-center lg:mt-[38px] mt-[50px] rounded-radius20 self-stretch shadow-bs45 w-[100%] xl:mt-[44px]">
            <Stack className="2xl:h-[958px] 3xl:h-[1150px] 3xl:mt-[36px] h-[957px] lg:h-[745px] lg:mt-[23px] mt-[30px] mx-[auto] w-[96%] xl:h-[852px] xl:mt-[26px]">
              <Stack className="2xl:h-[958px] 3xl:h-[1150px] absolute font-poppins h-[957px] inset-[0] lg:h-[745px] self-stretch w-[100%] xl:h-[852px]">
                <Column className="3xl:right-[24px] absolute bottom-[0] justify-start lg:right-[15px] right-[20px] w-[71%] xl:right-[17px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Description`}</Text>
                  <Text className="3xl:mt-[36px] 3xl:text-fs19 font-normal leading-lh lg:mt-[23px] lg:text-fs12 mt-[30px] self-stretch text-black_900_b3 text-fs16 text-left w-[100%] xl:mt-[26px] xl:text-fs14">
                    {
                      <>
                        {`vaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`}
                        <br />
                        {`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum`}
                      </>
                    }
                  </Text>
                </Column>
                <Image
                  src="img_productimage.png"
                  className="2xl:h-[569px] 3xl:h-[682px] absolute h-[568px] lg:h-[442px] object-cover self-stretch top-[0] w-[100%] xl:h-[506px]"
                  alt="productImage"
                />
                <div className="absolute bg-transparent border-0 left-[0] ml-[0] mt-[0] top-[0] w-[11%] input-wrap">
                  <div className="input-wrap">
                    <Image
                      src="img_flag_1.svg"
                      className="absolute left-[20px] bg-transparent border-0 lg:left-[15px] lg:inset-y-[15px] xl:left-[17px] xl:inset-y-[17px] 2xl:inset-y-[19px] 3xl:left-[24px] 3xl:inset-y-[23px] inset-y-[19.545px]"
                      alt="flag 1"
                    />
                    <Input
                      className="2xl:py-[19px] 3xl:pl-[64px] 3xl:py-[23px] 3xl:text-fs21 bg-yellow_904 border-0 font-semibold lg:pl-[42px] lg:py-[15px] lg:text-fs14 pl-[54px] placeholder:bg-transparent placeholder:text-white_A700 py-[19.545px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[0] text-fs18 text-left text-white_A700 w-[100%] xl:pl-[48px] xl:py-[17px] xl:text-fs16"
                      name="saleBadge"
                      placeholder={`FOR SALE`}
                    ></Input>
                  </div>
                </div>
                <Column className="3xl:bottom-[38px] 3xl:left-[27px] absolute bottom-[32px] font-poppins items-center justify-start left-[23px] lg:bottom-[24px] lg:left-[17px] w-[22%] xl:bottom-[28px] xl:left-[20px]">
                  <Image
                    src="img_profilepicture_2.svg"
                    className="2xl:h-[273px] 3xl:h-[327px] h-[272px] lg:h-[212px] mx-[auto] object-contain w-[79%] xl:h-[242px]"
                    alt="profilePicture"
                  />
                  <Text className="3xl:mt-[52px] 3xl:text-fs24 font-semibold lg:mt-[34px] lg:text-fs15 mt-[44px] mx-[auto] text-black_900 text-fs20 text-left xl:mt-[39px] xl:text-fs17">{`Samuel Rodriguez`}</Text>
                  <Text className="3xl:text-fs19 font-semibold lg:mt-[3px] lg:text-fs12 mt-[4px] mx-[auto] text-fs16 text-green_500 text-left xl:mt-[3px] xl:text-fs14">{`OWNER`}</Text>
                  <Text className="3xl:mt-[36px] 3xl:text-fs19 font-normal leading-lh lg:mt-[23px] lg:text-fs12 mt-[30px] self-stretch text-bluegray_503 text-center text-fs16 w-[100%] xl:mt-[26px] xl:text-fs14">{`Midnight Corner St. Suite 600 San Francisco, CADGE 94107`}</Text>
                  <Image
                    src="img_social_3.svg"
                    className="2xl:h-[57px] 3xl:h-[68px] 3xl:mt-[36px] h-[56px] lg:h-[44px] lg:mt-[23px] mt-[30px] mx-[auto] object-contain w-[68%] xl:h-[50px] xl:mt-[26px]"
                    alt="social"
                  />
                </Column>
              </Stack>
              <Row className="3xl:right-[60px] 3xl:top-[437px] absolute items-end justify-between lg:right-[38px] lg:top-[283px] px-[0] right-[50px] top-[364px] w-[69%] xl:right-[44px] xl:top-[323px]">
                <Column className="3xl:mt-[75px] font-poppins justify-start lg:mt-[49px] mt-[63px] w-[63%] xl:mt-[56px]">
                  <Text className="3xl:text-fs36 font-semibold lg:text-fs23 self-stretch text-fs30 text-left text-white_A700 xl:text-fs26">{`221 XYZ Franklin State Residence London`}</Text>
                  <Row className="3xl:mr-[12px] 3xl:mt-[22px] items-center justify-start lg:mr-[7px] lg:mt-[14px] mr-[10px] mt-[19px] w-[82%] xl:mr-[8px] xl:mt-[16px]">
                    <Row className="font-poppins items-center justify-start w-[28%]">
                      <Image
                        src="img_icon_68.svg"
                        className="2xl:h-[20px] 3xl:h-[23px] h-[19px] lg:h-[15px] lg:my-[3px] my-[4px] object-contain w-[20%] xl:h-[17px] xl:my-[3px]"
                        alt="icon"
                      />
                      <Text className="3xl:ml-[16px] 3xl:text-fs21 font-medium lg:ml-[10px] lg:text-fs14 ml-[14px] text-fs18 text-left text-white_A700_99 xl:ml-[12px] xl:text-fs16">{`4 Bedroom`}</Text>
                    </Row>
                    <Row className="3xl:ml-[36px] font-poppins items-center justify-center lg:ml-[23px] ml-[30px] w-[28%] xl:ml-[26px]">
                      <Image
                        src="img_shape_12.svg"
                        className="2xl:h-[23px] 3xl:h-[27px] h-[22px] lg:h-[18px] lg:mb-[1px] lg:mt-[2px] mb-[2px] mt-[3px] object-contain w-[14%] xl:h-[20px] xl:mb-[1px] xl:mt-[2px]"
                        alt="Shape"
                      />
                      <Text className="3xl:ml-[18px] 3xl:text-fs21 font-medium lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700_99 xl:ml-[13px] xl:text-fs16">{`2 Bathroom`}</Text>
                    </Row>
                    <Row className="3xl:ml-[36px] font-poppins items-center justify-start lg:ml-[23px] ml-[30px] w-[32%] xl:ml-[26px]">
                      <Image
                        src="img_icon_70.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[7px] 3xl:mt-[6px] h-[16px] lg:h-[13px] lg:mb-[4px] lg:mt-[3px] mb-[6px] mt-[5px] object-contain w-[14%] xl:h-[15px] xl:mb-[5px] xl:mt-[4px]"
                        alt="icon"
                      />
                      <Text className="2xl:ml-[12px] 3xl:ml-[15px] 3xl:text-fs21 font-medium lg:ml-[10px] lg:text-fs14 ml-[12.950073px] text-fs18 text-left text-white_A700_99 xl:ml-[11px] xl:text-fs16">{`Wifi Available`}</Text>
                    </Row>
                  </Row>
                </Column>
                <Column className="font-poppins justify-start w-[21%]">
                  <Image
                    src="img_actionbtn_1.svg"
                    className="2xl:h-[76px] 3xl:h-[91px] 3xl:ml-[12px] h-[75px] lg:h-[59px] lg:ml-[7px] ml-[10px] object-contain w-[12%] xl:h-[67px] xl:ml-[8px]"
                    alt="actionBtn"
                  />
                  <Text className="3xl:ml-[186px] 3xl:mt-[39px] 3xl:text-fs21 font-light lg:ml-[120px] lg:mr-[2px] lg:mt-[25px] lg:text-fs14 ml-[155px] mr-[3px] mt-[33px] text-fs18 text-left text-white_A700 xl:ml-[137px] xl:mr-[2px] xl:mt-[29px] xl:text-fs16">{`1 of 4`}</Text>
                  <Column className="3xl:mt-[14px] items-center lg:mt-[9px] mt-[12px] self-stretch w-[100%] xl:mt-[10px]"></Column>
                </Column>
              </Row>
            </Stack>
            <Row className="3xl:mb-[132px] 3xl:mt-[21px] items-center justify-between lg:mb-[85px] lg:mt-[14px] mb-[110px] mt-[18px] px-[0] self-stretch w-[100%] xl:mb-[97px] xl:mt-[16px]">
              <Column className="3xl:mb-[36px] 3xl:ml-[60px] font-poppins justify-start lg:mb-[23px] lg:ml-[38px] mb-[30px] ml-[50px] w-[21%] xl:mb-[26px] xl:ml-[44px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Price`}</Text>
                <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                  <Column className="bg-blue_A400 font-poppins items-center justify-center rounded-radius20 self-stretch w-[100%]">
                    <Text className="3xl:mt-[36px] 3xl:text-fs19 font-normal lg:mt-[23px] lg:text-fs12 mt-[30px] mx-[auto] text-center text-fs16 text-white_A700_99 xl:mt-[26px] xl:text-fs14">{`Start from`}</Text>
                    <Text className="3xl:text-fs36 font-semibold lg:mt-[1px] lg:text-fs23 mt-[2px] mx-[auto] text-center text-fs30 text-white_A700 xl:mt-[1px] xl:text-fs26">{`$ 500,000`}</Text>
                    <Text className="3xl:mb-[36px] 3xl:text-fs21 font-normal lg:mb-[23px] lg:text-fs14 mb-[30px] mx-[auto] text-center text-fs18 text-white_A700 xl:mb-[26px] xl:text-fs16">{`until $1,000k`}</Text>
                  </Column>
                  <Row className="3xl:mt-[24px] bg-green_500 font-poppins items-center justify-start lg:mt-[15px] mt-[20px] rounded-radius20 self-stretch w-[100%] xl:mt-[17px]">
                    <Image
                      src="img_speechbubble_2.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:ml-[42px] 3xl:my-[19px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:ml-[27px] lg:my-[12px] lg:w-[21px] ml-[35px] my-[16px] object-contain w-[28px] xl:h-[25px] xl:ml-[31px] xl:my-[14px] xl:w-[24px]"
                      alt="speechbubble"
                    />
                    <Text className="3xl:mb-[19px] 3xl:ml-[40px] 3xl:mr-[116px] 3xl:mt-[20px] 3xl:text-fs21 font-semibold lg:mb-[12px] lg:ml-[26px] lg:mr-[75px] lg:mt-[13px] lg:text-fs14 mb-[16px] ml-[34px] mr-[97px] mt-[17px] text-fs18 text-left text-white_A700 xl:mb-[14px] xl:ml-[30px] xl:mr-[86px] xl:mt-[15px] xl:text-fs16">{`Get in Touch`}</Text>
                  </Row>
                  <Column className="3xl:mt-[105px] font-poppins justify-start lg:mt-[68px] mt-[88px] self-stretch w-[100%] xl:mt-[78px]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Owner History`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="justify-start self-stretch w-[100%]">
                        <Stack className="2xl:h-[295px] 3xl:h-[354px] 3xl:mb-[39px] h-[294px] lg:h-[229px] lg:mb-[25px] mb-[33px] w-[17%] xl:h-[262px] xl:mb-[29px]">
                          <Line className="2xl:h-[246px] 3xl:bottom-[15px] 3xl:h-[295px] absolute border border-dashed border-gray_400 bottom-[13px] h-[245px] inset-x-[0] lg:bottom-[10px] lg:h-[191px] mx-[auto] w-[2px] xl:bottom-[11px] xl:h-[218px]" />
                          <Image
                            src="img_porfilepicture.svg"
                            className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] absolute h-[52px] lg:h-[41px] lg:w-[40px] object-cover self-stretch top-[0] w-[52px] xl:h-[47px] xl:w-[46px]"
                            alt="porfilePicture"
                          />
                          <Image
                            src="img_porfilepicture.svg"
                            className="2xl:h-[53px] 3xl:h-[63px] 3xl:inset-y-[145px] 3xl:w-[62px] absolute h-[52px] inset-x-[0] inset-y-[121px] lg:h-[41px] lg:inset-y-[94px] lg:w-[40px] object-cover self-stretch w-[52px] xl:h-[47px] xl:inset-y-[107px] xl:w-[46px]"
                            alt="porfilePicture"
                          />
                          <Image
                            src="img_porfilepicture.svg"
                            className="2xl:h-[53px] 3xl:h-[63px] 3xl:w-[62px] absolute bottom-[0] h-[52px] lg:h-[41px] lg:w-[40px] object-cover self-stretch w-[52px] xl:h-[47px] xl:w-[46px]"
                            alt="porfilePicture"
                          />
                        </Stack>
                        <Column className="3xl:ml-[25px] 3xl:mr-[84px] font-poppins justify-start lg:ml-[16px] lg:mr-[54px] lg:mt-[1px] ml-[21px] mr-[70px] mt-[2px] w-[54%] xl:ml-[18px] xl:mr-[62px] xl:mt-[1px]">
                          <Text className="3xl:mr-[12px] 3xl:text-fs19 font-medium font-poppins lg:mr-[7px] lg:text-fs12 mr-[10px] text-bluegray_916 text-fs16 text-left xl:mr-[8px] xl:text-fs14">{`Kevin Jean`}</Text>
                          <Text className="3xl:text-fs16 font-normal font-opensans lg:mt-[1px] lg:text-fs10 mt-[2px] self-stretch text-bluegray_503 text-fs14 text-left xl:mt-[1px] xl:text-fs12">{`2 June 2018 - 4 June 2019`}</Text>
                          <Image
                            src="img_rating_3.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[12px] 3xl:mt-[16px] h-[24px] lg:h-[19px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[14px] object-contain w-[82%] xl:h-[22px] xl:mr-[8px] xl:mt-[12px]"
                            alt="rating"
                          />
                          <Text className="3xl:mr-[12px] 3xl:mt-[45px] 3xl:text-fs19 font-medium font-poppins lg:mr-[7px] lg:mt-[29px] lg:text-fs12 mr-[10px] mt-[38px] text-bluegray_916 text-fs16 text-left xl:mr-[8px] xl:mt-[33px] xl:text-fs14">{`William Smith`}</Text>
                          <Text className="3xl:text-fs16 font-normal font-opensans lg:mt-[1px] lg:text-fs10 mt-[2px] self-stretch text-bluegray_503 text-fs14 text-left xl:mt-[1px] xl:text-fs12">{`2 June 2018 - 4 June 2019`}</Text>
                          <Image
                            src="img_rating_4.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[12px] 3xl:mt-[16px] h-[24px] lg:h-[19px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[14px] object-contain w-[82%] xl:h-[22px] xl:mr-[8px] xl:mt-[12px]"
                            alt="rating"
                          />
                          <Text className="3xl:mr-[12px] 3xl:mt-[45px] 3xl:text-fs19 font-medium font-poppins lg:mr-[7px] lg:mt-[29px] lg:text-fs12 mr-[10px] mt-[38px] text-bluegray_916 text-fs16 text-left xl:mr-[8px] xl:mt-[33px] xl:text-fs14">{`Nabilla Handerson`}</Text>
                          <Text className="3xl:text-fs16 font-normal font-opensans lg:mt-[1px] lg:text-fs10 mt-[2px] self-stretch text-bluegray_503 text-fs14 text-left xl:mt-[1px] xl:text-fs12">{`2 June 2018 - 4 June 2019`}</Text>
                          <Image
                            src="img_rating_5.svg"
                            className="2xl:h-[25px] 3xl:h-[29px] 3xl:mr-[12px] 3xl:mt-[16px] h-[24px] lg:h-[19px] lg:mr-[7px] lg:mt-[10px] mr-[10px] mt-[14px] object-contain w-[82%] xl:h-[22px] xl:mr-[8px] xl:mt-[12px]"
                            alt="rating"
                          />
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="3xl:mt-[38px] font-poppins justify-start lg:mt-[24px] mt-[32px] w-[72%] xl:mt-[28px]">
                <Column className="items-center self-stretch w-[100%]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Gallery`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                        <div className="2xl:h-[153px] 3xl:h-[183px] bg-gray_400 h-[152px] lg:h-[119px] rounded-radius20 w-[25%] xl:h-[136px]"></div>
                        <div className="2xl:h-[153px] 3xl:h-[183px] bg-gray_400 h-[152px] lg:h-[119px] rounded-radius20 w-[25%] xl:h-[136px]"></div>
                        <div className="2xl:h-[153px] 3xl:h-[183px] bg-gray_400 h-[152px] lg:h-[119px] rounded-radius20 w-[25%] xl:h-[136px]"></div>
                        <Stack className="2xl:h-[153px] 3xl:h-[183px] bg-gray_400 h-[152px] lg:h-[119px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[19%] xl:h-[136px]">
                          <Image
                            src="img_navigation_4.svg"
                            className="2xl:h-[51px] 3xl:h-[61px] 3xl:right-[72px] 3xl:w-[60px] absolute h-[50px] inset-y-[0] lg:h-[39px] lg:right-[46px] lg:w-[38px] my-[auto] object-contain right-[60px] w-[50px] xl:h-[45px] xl:right-[53px] xl:w-[44px]"
                            alt="navigation"
                          />
                        </Stack>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[61px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:mt-[39px] lg:text-fs23 mr-[10px] mt-[51px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:mt-[45px] xl:text-fs26">{`Location`}</Text>
                <Stack className="2xl:h-[223px] 3xl:h-[267px] 3xl:mr-[12px] 3xl:mt-[28px] bg-gray_400 h-[222px] lg:h-[173px] lg:mr-[7px] lg:mt-[18px] mr-[10px] mt-[24px] rounded-radius20 w-[95%] xl:h-[198px] xl:mr-[8px] xl:mt-[21px]">
                  <Stack className="2xl:h-[102px] 3xl:h-[122px] 3xl:left-[391px] 3xl:top-[20px] absolute h-[101px] left-[326px] lg:h-[79px] lg:left-[253px] lg:top-[13px] top-[17px] w-[18%] xl:h-[90px] xl:left-[290px] xl:top-[15px]">
                    <div className="2xl:h-[25px] 3xl:h-[29px] 3xl:right-[18px] 3xl:w-[28px] absolute bg-blue_A400 border-2 border-solid border-white_A700 bottom-[0] h-[24px] lg:h-[19px] lg:right-[11px] lg:w-[18px] right-[15px] rounded-radius50 shadow-bs45 w-[24px] xl:h-[22px] xl:right-[13px] xl:w-[21px]"></div>
                    <Image
                      src="img_background_49.svg"
                      className="2xl:h-[85px] 3xl:h-[101px] absolute h-[84px] lg:h-[66px] object-cover rounded-radius13 self-stretch top-[0] w-[100%] xl:h-[75px]"
                      alt="background"
                    />
                  </Stack>
                  <Column className="3xl:left-[415px] 3xl:top-[36px] absolute font-poppins items-center justify-start left-[346px] lg:left-[269px] lg:top-[23px] top-[30px] w-[14%] xl:left-[307px] xl:top-[26px]">
                    <Text className="3xl:text-fs21 font-poppins font-semibold lg:text-fs14 mx-[auto] text-fs18 text-gray_905 text-left xl:text-fs16">{`Here Is`}</Text>
                    <Text className="3xl:text-fs14 font-normal font-opensans lg:mt-[1px] lg:text-fs9 mt-[2px] self-stretch text-bluegray_503 text-fs12 text-left xl:mt-[1px] xl:text-fs10">{`37.7749° N, 122.4194° W`}</Text>
                  </Column>
                </Stack>
                <Column className="3xl:mt-[58px] items-center lg:mt-[38px] mt-[49px] self-stretch w-[100%] xl:mt-[43px]">
                  <Column className="font-poppins justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs36 font-semibold lg:mr-[7px] lg:text-fs23 mr-[10px] text-black_906 text-fs30 text-left xl:mr-[8px] xl:text-fs26">{`Features`}</Text>
                    <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                      <Row className="justify-between px-[0] self-stretch w-[100%]">
                        <List
                          className="3xl:gap-[100px] flex-wrap gap-[84px] grid grid-cols-4 lg:gap-[65px] min-h-[auto] w-[76%] xl:gap-[74px]"
                          orientation="horizontal"
                        >
                          <Column className="justify-start w-[100%]">
                            <Column className="items-center self-stretch w-[100%]">
                              <Row className="font-poppins items-center justify-start lg:mr-[1px] mr-[2px] w-[99%] xl:mr-[1px]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Swimming pool`}</Text>
                              </Row>
                              <Row className="3xl:mt-[21px] font-poppins items-center justify-start lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Air conditioning`}</Text>
                              </Row>
                            </Column>
                            <Row className="3xl:mr-[12px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[14px] mr-[10px] mt-[18px] w-[62%] xl:mr-[8px] xl:mt-[16px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Internet`}</Text>
                            </Row>
                          </Column>
                          <Column className="justify-start w-[100%]">
                            <Row className="3xl:mr-[12px] font-poppins items-center justify-start lg:mr-[7px] mr-[10px] w-[83%] xl:mr-[8px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Terrace`}</Text>
                            </Row>
                            <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                              <Row className="font-poppins items-center justify-start lg:mr-[2px] mr-[3px] w-[98%] xl:mr-[2px]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Cofee pot`}</Text>
                              </Row>
                              <Row className="3xl:mt-[21px] font-poppins items-center justify-start lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Towelwes`}</Text>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start w-[100%]">
                            <Row className="3xl:mr-[12px] font-poppins items-center justify-start lg:mr-[7px] mr-[10px] w-[63%] xl:mr-[8px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Radio`}</Text>
                            </Row>
                            <Row className="3xl:mr-[12px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[14px] mr-[10px] mt-[18px] w-[76%] xl:mr-[8px] xl:mt-[16px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Balcony`}</Text>
                            </Row>
                            <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                              <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Roof terrace`}</Text>
                              </Row>
                            </Column>
                          </Column>
                          <Column className="justify-start w-[100%]">
                            <Row className="3xl:mr-[12px] font-poppins items-center justify-start lg:mr-[7px] mr-[10px] w-[59%] xl:mr-[8px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Grill`}</Text>
                            </Row>
                            <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                              <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                                <Image
                                  src="img_tickmark1.svg"
                                  className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                  alt="tickmark1"
                                />
                                <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Computer`}</Text>
                              </Row>
                            </Column>
                            <Row className="3xl:mr-[12px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[14px] mr-[10px] mt-[18px] w-[68%] xl:mr-[8px] xl:mt-[16px]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Oven`}</Text>
                            </Row>
                          </Column>
                        </List>
                        <Column className="3xl:mb-[50px] 3xl:mr-[61px] justify-start lg:mb-[32px] lg:mr-[39px] mb-[42px] mr-[51px] w-[11%] xl:mb-[37px] xl:mr-[45px]">
                          <Column className="items-center self-stretch w-[100%]">
                            <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                              <Image
                                src="img_tickmark1.svg"
                                className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                                alt="tickmark1"
                              />
                              <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Cable TV`}</Text>
                            </Row>
                          </Column>
                          <Row className="3xl:mr-[10px] 3xl:mt-[21px] font-poppins items-center justify-start lg:mr-[7px] lg:mt-[14px] mr-[9px] mt-[18px] w-[92%] xl:mr-[8px] xl:mt-[16px]">
                            <Image
                              src="img_tickmark1.svg"
                              className="2xl:h-[25px] 3xl:h-[29px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:w-[18px] object-contain w-[24px] xl:h-[22px] xl:w-[21px]"
                              alt="tickmark1"
                            />
                            <Text className="3xl:ml-[21px] 3xl:text-fs19 font-normal lg:ml-[14px] lg:text-fs12 ml-[18px] text-black_900 text-fs16 text-left xl:ml-[16px] xl:text-fs14">{`Parquet`}</Text>
                          </Row>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack className="2xl:h-[2241px] 3xl:h-[2689px] absolute h-[2239px] inset-[0] lg:h-[1742px] self-stretch w-[100%] xl:h-[1992px]">
          <Row className="absolute bg-bluegray_51 items-center justify-end self-stretch top-[0] w-[100%]">
            <Row className="3xl:ml-[474px] 3xl:my-[38px] bg-blue_A400 font-poppins items-center justify-center lg:ml-[307px] lg:my-[24px] ml-[395px] my-[32px] rounded-radius46 w-[11%] xl:ml-[351px] xl:my-[28px]">
              <Image
                src="img_calendarsilhou_1.svg"
                className="2xl:h-[29px] 3xl:h-[34px] 3xl:ml-[27px] 3xl:my-[16px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:ml-[17px] lg:my-[10px] lg:w-[21px] ml-[23px] my-[14px] object-contain w-[28px] xl:h-[25px] xl:ml-[20px] xl:my-[12px] xl:w-[24px]"
                alt="calendarsilhou"
              />
              <Text className="3xl:mb-[19px] 3xl:ml-[22px] 3xl:mr-[27px] 3xl:mt-[15px] 3xl:text-fs21 font-medium lg:mb-[12px] lg:ml-[14px] lg:mr-[17px] lg:mt-[10px] lg:text-fs14 mb-[16px] ml-[19px] mr-[23px] mt-[13px] text-fs18 text-left text-white_A700 xl:mb-[14px] xl:ml-[16px] xl:mr-[20px] xl:mt-[11px] xl:text-fs16">
                <span className="text-white_A700 text-fs18 font-poppins text-left font-medium lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  <>{`Agenda `}</>
                </span>
                <span className="text-white_A700 text-fs18 font-poppins text-left font-bold lg:text-fs14 xl:text-fs16 3xl:text-fs21">
                  <>{`(24)`}</>
                </span>
              </Text>
            </Row>
            <Row className="3xl:ml-[48px] 3xl:my-[38px] bg-gray_107 font-opensans items-center justify-center lg:ml-[31px] lg:my-[24px] ml-[40px] my-[32px] rounded-radius46 shadow-bs45 w-[22%] xl:ml-[35px] xl:my-[28px]">
              <Text className="3xl:mb-[21px] 3xl:ml-[37px] 3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mb-[14px] lg:ml-[24px] lg:mt-[12px] lg:text-fs12 mb-[18px] ml-[31px] mt-[16px] text-bluegray_303 text-fs16 text-left xl:mb-[16px] xl:ml-[27px] xl:mt-[14px] xl:text-fs14">{`Search here`}</Text>
              <Image
                src="img_search31_1.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[288px] 3xl:mr-[34px] 3xl:my-[19px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[186px] lg:mr-[22px] lg:my-[12px] lg:w-[18px] ml-[240px] mr-[29px] my-[16px] object-contain w-[24px] xl:h-[22px] xl:ml-[213px] xl:mr-[25px] xl:my-[14px] xl:w-[21px]"
                alt="search31"
              />
            </Row>
            <Row className="3xl:gap-[24px] 3xl:mb-[38px] 3xl:ml-[201px] 3xl:mt-[32px] gap-[20px] grid grid-cols-3 items-center justify-center lg:gap-[15px] lg:mb-[24px] lg:ml-[130px] lg:mt-[21px] mb-[32px] ml-[168px] mt-[27px] w-[12%] xl:gap-[17px] xl:mb-[28px] xl:ml-[149px] xl:mt-[24px]">
              <Stack className="2xl:h-[62px] 3xl:h-[74px] h-[61px] lg:h-[48px] w-[100%] xl:h-[55px]">
                <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] absolute bg-bluegray_51 bottom-[0] h-[56px] left-[0] lg:h-[44px] lg:w-[43px] rounded-radius60 w-[56px] xl:h-[50px] xl:w-[49px]">
                  <Image
                    src="img_notification_2.svg"
                    className="2xl:h-[29px] 3xl:h-[34px] 3xl:w-[33px] absolute h-[28px] inset-[0] justify-center lg:h-[22px] lg:w-[21px] m-[auto] object-contain w-[28px] xl:h-[25px] xl:w-[24px]"
                    alt="notification"
                  />
                </Stack>
                <Column className="absolute bg-blue_A400 border-bluegray_51 border-bw3 border-solid font-opensans items-center justify-start right-[0] rounded-radius50 top-[0] w-[48%]">
                  <Text className="3xl:mb-[7px] 3xl:mt-[6px] 3xl:mx-[12px] 3xl:text-fs16 font-bold lg:mb-[4px] lg:mt-[3px] lg:mx-[7px] lg:text-fs10 mb-[6px] mt-[5px] mx-[10px] text-fs14 text-left text-white_A700 xl:mb-[5px] xl:mt-[4px] xl:mx-[8px] xl:text-fs12">{`4`}</Text>
                </Column>
              </Stack>
              <Stack className="2xl:h-[62px] 3xl:h-[74px] h-[61px] lg:h-[48px] w-[100%] xl:h-[55px]">
                <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] absolute bg-bluegray_51 bottom-[0] h-[56px] left-[0] lg:h-[44px] lg:w-[43px] rounded-radius60 w-[56px] xl:h-[50px] xl:w-[49px]">
                  <Image
                    src="img_mail2_1.svg"
                    className="2xl:h-[29px] 3xl:h-[34px] 3xl:w-[33px] absolute h-[28px] inset-[0] justify-center lg:h-[22px] lg:w-[21px] m-[auto] object-contain w-[28px] xl:h-[25px] xl:w-[24px]"
                    alt="mail2"
                  />
                </Stack>
                <Column className="absolute bg-green_500 border-bluegray_51 border-bw3 border-solid font-opensans items-center justify-start right-[0] rounded-radius50 top-[0] w-[48%]">
                  <Text className="3xl:mb-[7px] 3xl:mt-[6px] 3xl:text-fs16 font-bold lg:mb-[4px] lg:mt-[3px] lg:text-fs10 mb-[6px] mt-[5px] mx-[auto] text-fs14 text-left text-white_A700 xl:mb-[5px] xl:mt-[4px] xl:text-fs12">{`15`}</Text>
                </Column>
              </Stack>
              <Stack className="2xl:h-[62px] 3xl:h-[74px] h-[61px] lg:h-[48px] w-[100%] xl:h-[55px]">
                <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:w-[67px] absolute bg-bluegray_51 bottom-[0] h-[56px] left-[0] lg:h-[44px] lg:w-[43px] rounded-radius60 w-[56px] xl:h-[50px] xl:w-[49px]">
                  <Image
                    src="img_speechbubble_3.svg"
                    className="2xl:h-[29px] 3xl:h-[34px] 3xl:w-[33px] absolute h-[28px] inset-[0] justify-center lg:h-[22px] lg:w-[21px] m-[auto] object-contain w-[28px] xl:h-[25px] xl:w-[24px]"
                    alt="speechbubble"
                  />
                </Stack>
                <Column className="absolute bg-yellow_904 border-bluegray_51 border-bw3 border-solid font-opensans items-center justify-start right-[0] rounded-radius50 top-[0] w-[48%]">
                  <Text className="3xl:mb-[7px] 3xl:ml-[9px] 3xl:mr-[7px] 3xl:mt-[6px] 3xl:text-fs16 font-bold lg:mb-[4px] lg:ml-[6px] lg:mr-[4px] lg:mt-[3px] lg:text-fs10 mb-[6px] ml-[8px] mr-[6px] mt-[5px] text-fs14 text-left text-white_A700 xl:mb-[5px] xl:ml-[7px] xl:mr-[5px] xl:mt-[4px] xl:text-fs12">{`76`}</Text>
                </Column>
              </Stack>
            </Row>
            <Row className="3xl:ml-[48px] 3xl:my-[38px] font-poppins justify-center lg:ml-[31px] lg:my-[24px] ml-[40px] my-[32px] w-[12%] xl:ml-[35px] xl:my-[28px]">
              <Column className="3xl:mb-[7px] justify-start lg:mb-[4px] mb-[6px] mt-[1px] w-[69%] xl:mb-[5px]">
                <Text className="3xl:ml-[12px] 3xl:text-fs21 font-medium lg:ml-[7px] lg:text-fs14 ml-[10px] text-bluegray_916 text-fs18 text-right xl:ml-[8px] xl:text-fs16">{`Roberto`}</Text>
                <Column className="font-opensans lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                  <Text className="3xl:text-fs16 font-normal lg:text-fs10 self-stretch text-bluegray_503 text-fs14 text-right xl:text-fs12">{`robertocarloz@mail.com`}</Text>
                </Column>
              </Column>
              <Image
                src="img_profilepicture_1.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:ml-[21px] 3xl:w-[67px] h-[56px] lg:h-[44px] lg:ml-[14px] lg:w-[43px] ml-[18px] object-contain w-[56px] xl:h-[50px] xl:ml-[16px] xl:w-[49px]"
                alt="profilePicture"
              />
            </Row>
            <Row className="3xl:ml-[48px] 3xl:mr-[60px] 3xl:my-[38px] bg-gray_107 font-poppins items-center justify-center lg:ml-[31px] lg:mr-[38px] lg:my-[24px] ml-[40px] mr-[50px] my-[32px] rounded-radius46 shadow-bs45 w-[5%] xl:ml-[35px] xl:mr-[44px] xl:my-[28px]">
              <Text className="3xl:mb-[19px] 3xl:ml-[39px] 3xl:mt-[15px] 3xl:text-fs21 font-medium lg:mb-[12px] lg:ml-[25px] lg:mt-[10px] lg:text-fs14 mb-[16px] ml-[33px] mt-[13px] text-bluegray_916 text-fs18 text-left xl:mb-[14px] xl:ml-[29px] xl:mt-[11px] xl:text-fs16">{`EN`}</Text>
              <Image
                src="img_icchevron.svg"
                className="2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[9px] 3xl:mr-[16px] 3xl:my-[19px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[6px] lg:mr-[10px] lg:my-[12px] lg:w-[18px] ml-[8px] mr-[14px] my-[16px] object-contain w-[24px] xl:h-[22px] xl:ml-[7px] xl:mr-[12px] xl:my-[14px] xl:w-[21px]"
                alt="icchevron"
              />
            </Row>
          </Row>
          <aside className="absolute bg-gray_107 items-center justify-start left-[0] rounded-radius30 shadow-bs46 w-[18%]">
            <Column className="">
              <Column className="3xl:mb-[1446px] justify-start lg:mb-[937px] mb-[1205px] self-stretch w-[100%] xl:mb-[1071px]">
                <Image
                  src="img_header_1.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] h-[120px] lg:h-[94px] object-cover self-stretch w-[100%] xl:h-[107px]"
                  alt="header"
                />
                <Column className="3xl:mt-[24px] font-poppins lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Text className="3xl:mx-[57px] 3xl:text-fs19 font-semibold lg:mx-[37px] lg:text-fs12 mx-[48px] text-bluegray_303 text-fs16 text-left uppercase xl:mx-[42px] xl:text-fs14">{`Main Menu`}</Text>
                </Column>
                <Stack className="2xl:h-[68px] 3xl:h-[81px] 3xl:mt-[21px] h-[67px] lg:h-[53px] lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:h-[60px] xl:mt-[16px]">
                  <div className="2xl:h-[68px] 3xl:h-[81px] 3xl:inset-x-[34px] absolute bg-gray_107 h-[67px] inset-x-[29px] inset-y-[0] lg:h-[53px] lg:inset-x-[22px] rounded-radius55 w-[83%] xl:h-[60px] xl:inset-x-[25px]"></div>
                  <Row className="absolute bg-bluegray_50_00 font-poppins inset-[0] items-center justify-start rounded-radius4 self-stretch w-[100%]">
                    <Image
                      src="img_home1_1.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[24px] 3xl:ml-[57px] 3xl:mt-[22px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:mb-[15px] lg:ml-[37px] lg:mt-[14px] lg:w-[21px] mb-[20px] ml-[48px] mt-[19px] object-contain w-[28px] xl:h-[25px] xl:mb-[17px] xl:ml-[42px] xl:mt-[16px] xl:w-[24px]"
                      alt="home1"
                    />
                    <Text className="3xl:mb-[25px] 3xl:ml-[27px] 3xl:mr-[187px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[17px] lg:mr-[121px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[23px] mr-[156px] mt-[22px] text-bluegray_503 text-fs16 text-left xl:mb-[18px] xl:ml-[20px] xl:mr-[138px] xl:mt-[19px] xl:text-fs14">{`Dashboard`}</Text>
                  </Row>
                </Stack>
                <Column className="3xl:mt-[24px] lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                  <Row className="3xl:mr-[12px] font-poppins items-center justify-start lg:mr-[7px] mr-[10px] w-[86%] xl:mr-[8px]">
                    <div className="2xl:h-[52px] 3xl:h-[62px] bg-blue_A400 h-[51px] lg:h-[40px] rounded-bl-[0] rounded-br-[8px] rounded-tl-[0] rounded-tr-[8px] w-[2%] xl:h-[46px]"></div>
                    <Image
                      src="img_building11.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[14px] 3xl:ml-[50px] 3xl:mt-[13px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:mb-[9px] lg:ml-[32px] lg:mt-[8px] lg:w-[21px] mb-[12px] ml-[42px] mt-[11px] object-contain w-[28px] xl:h-[25px] xl:mb-[10px] xl:ml-[37px] xl:mt-[9px] xl:w-[24px]"
                      alt="building11"
                    />
                    <Text className="3xl:mb-[15px] 3xl:ml-[27px] 3xl:mt-[16px] 3xl:text-fs19 font-semibold lg:ml-[17px] lg:my-[10px] lg:text-fs12 mb-[13px] ml-[23px] mt-[14px] text-blue_A400 text-fs16 text-left xl:mb-[11px] xl:ml-[20px] xl:mt-[12px] xl:text-fs14">{`Property`}</Text>
                    <Image
                      src="img_icchevron_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[16px] 3xl:ml-[124px] 3xl:mt-[15px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:ml-[80px] lg:my-[10px] lg:w-[18px] mb-[14px] ml-[104px] mt-[13px] object-contain w-[24px] xl:h-[22px] xl:mb-[12px] xl:ml-[92px] xl:mt-[11px] xl:w-[21px]"
                      alt="icchevron"
                    />
                  </Row>
                </Column>
                <Column className="3xl:mt-[24px] font-poppins justify-start lg:mt-[15px] mt-[20px] mx-[auto] w-[83%] xl:mt-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="bg-gray_107 font-poppins items-center justify-start rounded-radius55 self-stretch w-[100%]">
                      <Image
                        src="img_layers1_1.svg"
                        className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[24px] 3xl:ml-[22px] 3xl:mt-[22px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:mb-[15px] lg:ml-[14px] lg:mt-[14px] lg:w-[21px] mb-[20px] ml-[19px] mt-[19px] object-contain w-[28px] xl:h-[25px] xl:mb-[17px] xl:ml-[16px] xl:mt-[16px] xl:w-[24px]"
                        alt="layers1"
                      />
                      <Text className="3xl:mb-[25px] 3xl:ml-[27px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[17px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[23px] mt-[22px] text-bluegray_503 text-fs16 text-left xl:mb-[18px] xl:ml-[20px] xl:mt-[19px] xl:text-fs14">{`Types`}</Text>
                      <Image
                        src="img_icchevron_2.svg"
                        className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[151px] 3xl:mr-[22px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[98px] lg:mr-[14px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[126px] mr-[19px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[112px] xl:mr-[16px] xl:mt-[19px] xl:w-[21px]"
                        alt="icchevron"
                      />
                    </Row>
                  </Column>
                  <Text className="3xl:pb-[14px] 3xl:pl-[42px] 3xl:pt-[15px] 3xl:text-fs19 bg-gray_107 font-normal leading-lh lg:pb-[9px] lg:pl-[27px] lg:pt-[10px] lg:text-fs12 pb-[12px] pl-[35px] pt-[13px] rounded-radius55 self-stretch text-bluegray_503 text-fs16 text-left w-[100%] xl:pb-[10px] xl:pl-[31px] xl:pt-[11px] xl:text-fs14">{`Add New Menu`}</Text>
                  <Text className="3xl:pb-[14px] 3xl:pl-[42px] 3xl:pt-[15px] 3xl:text-fs19 bg-gray_107 font-normal leading-lh lg:pb-[9px] lg:pl-[27px] lg:pt-[10px] lg:text-fs12 pb-[12px] pl-[35px] pt-[13px] rounded-radius55 self-stretch text-bluegray_503 text-fs16 text-left w-[100%] xl:pb-[10px] xl:pl-[31px] xl:pt-[11px] xl:text-fs14">{`Menu List`}</Text>
                  <Text className="3xl:pb-[14px] 3xl:pl-[42px] 3xl:pt-[15px] 3xl:text-fs19 bg-gray_107 font-normal leading-lh lg:pb-[9px] lg:pl-[27px] lg:pt-[10px] lg:text-fs12 pb-[12px] pl-[35px] pt-[13px] rounded-radius55 self-stretch text-bluegray_503 text-fs16 text-left w-[100%] xl:pb-[10px] xl:pl-[31px] xl:pt-[11px] xl:text-fs14">{`Categories`}</Text>
                </Column>
                <List
                  className="3xl:mt-[14px] flex-wrap gap-[0] lg:mt-[9px] min-h-[auto] mt-[12px] mx-[auto] w-[83%] xl:mt-[10px]"
                  orientation="vertical"
                >
                  <Row className="3xl:my-[7px] bg-gray_107 font-poppins items-center justify-start lg:my-[4px] my-[6px] rounded-radius55 self-stretch w-[100%] xl:my-[5px]">
                    <Image
                      src="img_user11_1.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[24px] 3xl:ml-[22px] 3xl:mt-[22px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:mb-[15px] lg:ml-[14px] lg:mt-[14px] lg:w-[21px] mb-[20px] ml-[19px] mt-[19px] object-contain w-[28px] xl:h-[25px] xl:mb-[17px] xl:ml-[16px] xl:mt-[16px] xl:w-[24px]"
                      alt="user11"
                    />
                    <Text className="3xl:mb-[25px] 3xl:ml-[27px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[17px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[23px] mt-[22px] text-bluegray_503 text-fs16 text-left xl:mb-[18px] xl:ml-[20px] xl:mt-[19px] xl:text-fs14">{`Customer`}</Text>
                    <Image
                      src="img_icchevron_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[111px] 3xl:mr-[22px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[72px] lg:mr-[14px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[93px] mr-[19px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[82px] xl:mr-[16px] xl:mt-[19px] xl:w-[21px]"
                      alt="icchevron"
                    />
                  </Row>
                  <Row className="3xl:my-[7px] bg-gray_107 font-poppins items-center justify-start lg:my-[4px] my-[6px] rounded-radius55 self-stretch w-[100%] xl:my-[5px]">
                    <Image
                      src="img_piechart11_1.svg"
                      className="2xl:h-[29px] 3xl:h-[34px] 3xl:mb-[24px] 3xl:ml-[22px] 3xl:mt-[22px] 3xl:w-[33px] h-[28px] lg:h-[22px] lg:mb-[15px] lg:ml-[14px] lg:mt-[14px] lg:w-[21px] mb-[20px] ml-[19px] mt-[19px] object-contain w-[28px] xl:h-[25px] xl:mb-[17px] xl:ml-[16px] xl:mt-[16px] xl:w-[24px]"
                      alt="piechart11"
                    />
                    <Text className="3xl:mb-[25px] 3xl:ml-[27px] 3xl:mt-[26px] 3xl:text-fs19 font-medium lg:mb-[16px] lg:ml-[17px] lg:mt-[17px] lg:text-fs12 mb-[21px] ml-[23px] mt-[22px] text-bluegray_503 text-fs16 text-left xl:mb-[18px] xl:ml-[20px] xl:mt-[19px] xl:text-fs14">{`Analytics`}</Text>
                    <Image
                      src="img_icchevron_1.svg"
                      className="2xl:h-[25px] 3xl:h-[29px] 3xl:mb-[25px] 3xl:ml-[118px] 3xl:mr-[22px] 3xl:mt-[26px] 3xl:w-[28px] h-[24px] lg:h-[19px] lg:mb-[16px] lg:ml-[77px] lg:mr-[14px] lg:mt-[17px] lg:w-[18px] mb-[21px] ml-[99px] mr-[19px] mt-[22px] object-contain w-[24px] xl:h-[22px] xl:mb-[18px] xl:ml-[88px] xl:mr-[16px] xl:mt-[19px] xl:w-[21px]"
                      alt="icchevron"
                    />
                  </Row>
                </List>
                <Stack className="2xl:h-[141px] 3xl:h-[169px] 3xl:mt-[48px] bg-blue_A400 h-[140px] lg:h-[109px] lg:mt-[31px] mt-[40px] mx-[auto] rounded-radius18 w-[72%] xl:h-[125px] xl:mt-[35px]">
                  <div className="absolute bottom-[0] overflow-x-scroll right-[0] w-[47%]">
                    <Stack className="2xl:h-[125px] 3xl:h-[149px] h-[124px] lg:h-[97px] rounded-radius18 self-stretch w-[100%] xl:h-[111px]">
                      <Image
                        src="img_group_15.png"
                        className="2xl:h-[125px] 3xl:h-[149px] absolute h-[124px] inset-[0] lg:h-[97px] object-contain rounded-radius18 w-[100%] xl:h-[111px]"
                        alt="Group"
                      />
                      <Stack className="2xl:h-[113px] 3xl:h-[135px] absolute h-[112.37px] inset-[0] justify-center lg:h-[88px] m-[auto] rounded-radius18 w-[87%] xl:h-[100px]">
                        <Stack className="2xl:h-[113px] 3xl:h-[135px] absolute h-[112.36px] inset-[0] justify-center lg:h-[88px] m-[auto] w-[100%] xl:h-[100px]">
                          <Image
                            src="img_group_16.svg"
                            className="2xl:h-[97px] 3xl:h-[117px] absolute bottom-[0] h-[96.86px] inset-x-[0] lg:h-[76px] mx-[auto] object-contain rounded-radius18 w-[96%] xl:h-[87px]"
                            alt="Group"
                          />
                          <Image
                            src="img_group_17.svg"
                            className="2xl:h-[107px] 3xl:h-[128px] absolute h-[106.55px] inset-x-[0] lg:h-[83px] mx-[auto] object-contain rounded-radius18 top-[0] w-[96%] xl:h-[95px]"
                            alt="Group"
                          />
                          <Image
                            src="img_vector_20.svg"
                            className="2xl:h-[7px] 2xl:top-[45px] 3xl:h-[8px] 3xl:top-[54px] absolute h-[6.3px] left-[0] lg:h-[5px] lg:top-[35px] object-contain rounded-radius18 top-[45.74px] w-[6%] xl:h-[6px] xl:top-[40px]"
                            alt="Vector"
                          />
                        </Stack>
                        <Column className="2xl:right-[4px] 3xl:right-[5px] absolute justify-start lg:right-[3px] right-[4.33px] top-[1px] w-[86%] xl:right-[3px]">
                          <Image
                            src="img_group_20.svg"
                            className="2xl:h-[5px] 2xl:mx-[25px] 3xl:h-[6px] 3xl:mx-[31px] h-[4.36px] lg:h-[4px] lg:mx-[20px] ml-[25.910004px] mr-[25.91px] object-contain rounded-radius18 w-[7%] xl:h-[4px] xl:mx-[23px]"
                            alt="Group"
                          />
                          <Column className="2xl:mt-[4px] 3xl:mt-[5px] items-center lg:mt-[3px] mt-[4.76001px] self-stretch w-[100%] xl:mt-[4px]">
                            <Stack className="2xl:h-[96px] 3xl:h-[115px] h-[95.650024px] lg:h-[75px] self-stretch w-[100%] xl:h-[86px]">
                              <Column className="absolute inset-[0] items-center justify-start rounded-radius18 self-stretch w-[100%]">
                                <Stack className="2xl:h-[96px] 3xl:h-[115px] h-[95.650024px] lg:h-[75px] rounded-radius18 self-stretch w-[100%] xl:h-[86px]">
                                  <Stack className="2xl:h-[69px] 2xl:right-[20px] 3xl:h-[83px] 3xl:right-[24px] absolute bottom-[0] h-[68.91px] lg:h-[54px] lg:right-[16px] right-[20.59px] w-[35%] xl:h-[62px] xl:right-[18px]">
                                    <Image
                                      src="img_vector_31.svg"
                                      className="2xl:h-[69px] 3xl:h-[83px] absolute h-[68.91px] inset-[0] lg:h-[54px] object-cover rounded-radius18 self-stretch w-[100%] xl:h-[62px]"
                                      alt="Vector"
                                    />
                                    <Stack className="2xl:h-[59px] 3xl:h-[70px] absolute h-[58.099976px] inset-x-[0] lg:h-[46px] top-[0] w-[100%] xl:h-[52px]">
                                      <Image
                                        src="img_vector_32.svg"
                                        className="2xl:h-[59px] 3xl:h-[70px] absolute h-[58.1px] inset-[0] justify-center lg:h-[46px] m-[auto] object-contain rounded-radius18 w-[100%] xl:h-[52px]"
                                        alt="Vector"
                                      />
                                      <Column className="2xl:top-[7px] 3xl:top-[9px] absolute inset-x-[0] justify-start lg:top-[6px] top-[7.81px] w-[100%] xl:top-[6px]">
                                        <Column className="items-end self-stretch w-[100%]">
                                          <Image
                                            src="img_vector_33.svg"
                                            className="2xl:h-[9px] 2xl:ml-[7px] 3xl:h-[10px] 3xl:ml-[8px] h-[8.32px] lg:h-[7px] lg:ml-[5px] ml-[7.1799927px] object-contain rounded-radius18 w-[76%] xl:h-[8px] xl:ml-[6px]"
                                            alt="Vector"
                                          />
                                        </Column>
                                        <Column className="items-center self-stretch w-[100%]">
                                          <Stack className="2xl:h-[26px] 3xl:h-[31px] h-[25.400024px] lg:h-[20px] w-[100%] xl:h-[23px]">
                                            <Image
                                              src="img_group_28.svg"
                                              className="2xl:h-[26px] 3xl:h-[31px] absolute h-[25.4px] inset-[0] justify-center lg:h-[20px] m-[auto] object-contain rounded-radius18 w-[100%] xl:h-[23px]"
                                              alt="Group"
                                            />
                                            <Image
                                              src="img_vector_24.svg"
                                              className="2xl:h-[9px] 2xl:top-[6px] 3xl:h-[10px] 3xl:top-[8px] absolute h-[8.32px] lg:h-[7px] lg:top-[5px] object-contain right-[0] rounded-radius18 top-[6.97px] w-[76%] xl:h-[8px] xl:top-[6px]"
                                              alt="Vector"
                                            />
                                            <Image
                                              src="img_group_23.svg"
                                              className="2xl:h-[9px] 2xl:top-[6px] 3xl:h-[10px] 3xl:top-[8px] absolute h-[8.32px] lg:h-[7px] lg:top-[5px] object-contain right-[0] rounded-radius18 top-[6.97px] w-[76%] xl:h-[8px] xl:top-[6px]"
                                              alt="Group"
                                            />
                                          </Stack>
                                        </Column>
                                        <Column className="items-end self-stretch w-[100%]">
                                          <Image
                                            src="img_vector_34.svg"
                                            className="2xl:h-[9px] 2xl:ml-[7px] 3xl:h-[10px] 3xl:ml-[8px] h-[8.32px] lg:h-[7px] lg:ml-[5px] ml-[7.1799927px] object-contain rounded-radius18 w-[76%] xl:h-[8px] xl:ml-[6px]"
                                            alt="Vector"
                                          />
                                        </Column>
                                      </Column>
                                    </Stack>
                                  </Stack>
                                  <Stack className="2xl:h-[96px] 3xl:h-[115px] absolute h-[95.65px] inset-[0] lg:h-[75px] rounded-radius18 self-stretch w-[100%] xl:h-[86px]">
                                    <Row className="2xl:top-[8px] 3xl:top-[10px] absolute items-center justify-evenly lg:top-[6px] px-[0] right-[0] top-[8.7px] w-[93%] xl:top-[7px]">
                                      <Stack className="2xl:h-[62px] 3xl:h-[74px] h-[61.21px] lg:h-[48px] w-[32%] xl:h-[55px]">
                                        <Image
                                          src="img_group_29.svg"
                                          className="2xl:h-[62px] 3xl:h-[74px] absolute h-[61.21px] inset-[0] lg:h-[48px] object-cover rounded-radius18 self-stretch w-[100%] xl:h-[55px]"
                                          alt="Group"
                                        />
                                        <Image
                                          src="img_group_30.svg"
                                          className="2xl:h-[52px] 2xl:inset-y-[4px] 3xl:h-[62px] 3xl:inset-y-[5px] absolute bottom-[4.95px] h-[51.49px] inset-x-[0] lg:h-[41px] lg:inset-y-[3px] object-cover rounded-radius18 self-stretch top-[4.77px] w-[100%] xl:h-[46px] xl:inset-y-[4px]"
                                          alt="Group"
                                        />
                                      </Stack>
                                      <Image
                                        src="img_group_31.svg"
                                        className="2xl:h-[42px] 2xl:mb-[9px] 2xl:mt-[10px] 3xl:h-[50px] 3xl:mb-[11px] 3xl:mt-[12px] h-[41.62px] lg:h-[33px] lg:my-[7px] mb-[9.560059px] mt-[10.029968px] object-contain rounded-radius18 w-[66%] xl:h-[38px] xl:my-[8px]"
                                        alt="Group"
                                      />
                                    </Row>
                                    <Stack className="2xl:h-[96px] 3xl:h-[115px] absolute h-[95.65px] left-[0] lg:h-[75px] w-[44%] xl:h-[86px]">
                                      <Image
                                        src="img_vector_35.svg"
                                        className="2xl:h-[96px] 3xl:h-[115px] absolute h-[95.65px] inset-[0] lg:h-[75px] object-cover rounded-radius18 self-stretch w-[100%] xl:h-[86px]"
                                        alt="Vector"
                                      />
                                      <ProgressBar.Line
                                        className="2xl:h-[19px] 3xl:h-[23px] absolute bg-indigo_100 bottom-[0] h-[18.94px] lg:h-[15px] rounded-radius18 self-stretch w-[100%] xl:h-[17px]"
                                        percent="37"
                                        strokeColor="#ffab66"
                                        trailColor="#b3b3ff"
                                        name="Group741"
                                      ></ProgressBar.Line>
                                    </Stack>
                                  </Stack>
                                </Stack>
                              </Column>
                              <Column className="2xl:bottom-[10px] 2xl:right-[1px] 3xl:bottom-[12px] 3xl:right-[2px] absolute bottom-[10.57px] justify-start lg:bottom-[8px] lg:right-[1px] right-[1.8px] w-[16%] xl:bottom-[9px] xl:right-[1px]">
                                <Image
                                  src="img_group_27.svg"
                                  className="2xl:h-[5px] 2xl:mr-[7px] 3xl:h-[6px] 3xl:mr-[8px] h-[4.36px] lg:h-[4px] lg:mr-[5px] mr-[7.480011px] object-contain rounded-radius18 w-[46%] xl:h-[4px] xl:mr-[6px]"
                                  alt="Group"
                                />
                                <Column className="2xl:mt-[17px] 3xl:mt-[20px] items-end lg:mt-[13px] mt-[17.179993px] w-[100%] xl:mt-[15px]">
                                  <Image
                                    src="img_vector_27.svg"
                                    className="2xl:h-[7px] 2xl:ml-[7px] 3xl:h-[8px] 3xl:ml-[8px] h-[6.3px] lg:h-[5px] lg:ml-[5px] ml-[7.4799805px] mr-[1px] object-contain rounded-radius18 w-[46%] xl:h-[6px] xl:ml-[6px]"
                                    alt="Vector"
                                  />
                                </Column>
                                <Image
                                  src="img_vector_28.svg"
                                  className="2xl:h-[7px] 2xl:ml-[1px] 2xl:mt-[3px] 3xl:h-[8px] 3xl:ml-[2px] 3xl:mr-[12px] 3xl:mt-[4px] h-[6.3px] lg:h-[5px] lg:ml-[1px] lg:mr-[7px] lg:mt-[2px] mb-[1px] ml-[1.9400024px] mr-[10px] mt-[3.380005px] object-contain rounded-radius18 w-[46%] xl:h-[6px] xl:ml-[1px] xl:mr-[8px] xl:mt-[3px]"
                                  alt="Vector"
                                />
                              </Column>
                            </Stack>
                          </Column>
                        </Column>
                      </Stack>
                    </Stack>
                  </div>
                  <Column className="3xl:left-[25px] absolute font-opensans h-[max-content] inset-y-[0] justify-start left-[21px] lg:left-[16px] my-[auto] w-[63%] xl:left-[18px]">
                    <Text className="3xl:text-fs16 font-opensans font-semibold leading-lh lg:text-fs10 self-stretch text-fs14 text-left text-white_A700 w-[100%] xl:text-fs12">
                      {
                        <>
                          {`Generate monthly report more easier `}
                          <br />
                          {`than before`}
                        </>
                      }
                    </Text>
                    <Button className="2xl:pb-[7px] 2xl:pt-[8px] 3xl:mr-[12px] 3xl:mt-[18px] 3xl:pb-[8px] 3xl:pt-[9px] 3xl:px-[22px] 3xl:text-fs14 bg-bluegray_51 border-bw font-poppins font-semibold lg:mr-[7px] lg:mt-[11px] lg:pb-[5px] lg:pt-[6px] lg:px-[14px] lg:text-fs9 mr-[10px] mt-[15px] pb-[7.03px] pt-[8.030001px] px-[19px] rounded-radius28 text-bluegray_916 text-center text-fs12 w-[68%] xl:mr-[8px] xl:mt-[13px] xl:pb-[6px] xl:pt-[7px] xl:px-[16px] xl:text-fs10">{`Learn more`}</Button>
                  </Column>
                </Stack>
                <Column className="3xl:mt-[52px] font-poppins lg:mt-[34px] mt-[44px] self-stretch w-[100%] xl:mt-[39px]">
                  <Text className="3xl:ml-[60px] 3xl:mr-[39px] 3xl:text-fs19 font-semibold lg:ml-[38px] lg:mr-[25px] lg:text-fs12 ml-[50px] mr-[33px] text-bluegray_503 text-fs16 text-left xl:ml-[44px] xl:mr-[29px] xl:text-fs14">{`Griya Real Estate Admin`}</Text>
                  <Text className="3xl:mt-[8px] 3xl:mx-[60px] 3xl:text-fs16 font-normal lg:mt-[5px] lg:mx-[38px] lg:text-fs10 mt-[7px] mx-[50px] text-bluegray_303 text-fs14 text-left xl:mt-[6px] xl:mx-[44px] xl:text-fs12">{`© 2020 All Rights Reserved`}</Text>
                  <Text className="3xl:mt-[30px] 3xl:mx-[60px] 3xl:text-fs16 font-normal lg:mt-[19px] lg:mx-[38px] lg:text-fs10 mt-[25px] mx-[50px] text-bluegray_303 text-fs14 text-left xl:mt-[22px] xl:mx-[44px] xl:text-fs12">{`Made with ♥ by Peterdraw`}</Text>
                </Column>
              </Column>
            </Column>
          </aside>
        </Stack>
      </Stack>
    </Column>
  );
};

export default PropertyDetail1Page;
