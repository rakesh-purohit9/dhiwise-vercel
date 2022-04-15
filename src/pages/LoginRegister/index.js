import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Button } from "components/Button";

const LoginRegisterPage = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="font-lato justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-gradient14  font-lato justify-start self-stretch shadow-bs30 w-[100%]">
                <Row className="3xl:mb-[13px] 3xl:ml-[488px] 3xl:mt-[15px] justify-center lg:mb-[8px] lg:ml-[316px] lg:mt-[10px] mb-[11px] ml-[407px] mt-[13px] w-[10%] xl:mb-[9px] xl:ml-[362px] xl:mt-[11px]">
                  <Image
                    src="img_envelope_4.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mt-[1px] lg:w-[10px] mt-[2px] object-contain w-[14px] xl:h-[13px] xl:mt-[1px] xl:w-[12px]"
                    alt="envelope"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs16 font-normal lg:ml-[3px] lg:text-fs10 ml-[5px] text-fs14 text-gray_101 text-left xl:ml-[4px] xl:text-fs12">{`rotorsmail@email.com`}</Text>
                </Row>
                <Row className="3xl:mb-[13px] 3xl:mt-[15px] justify-center lg:mb-[8px] lg:ml-[1px] lg:mt-[10px] mb-[11px] ml-[2px] mt-[13px] w-[10%] xl:mb-[9px] xl:ml-[1px] xl:mt-[11px]">
                  <Image
                    src="img_phone_4.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mt-[1px] lg:w-[10px] mt-[2px] object-contain w-[14px] xl:h-[13px] xl:mt-[1px] xl:w-[12px]"
                    alt="phone"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs16 font-normal lg:ml-[3px] lg:text-fs10 ml-[5px] text-fs14 text-gray_101 text-left xl:ml-[4px] xl:text-fs12">{`+1-202-555-0156`}</Text>
                </Row>
                <Image
                  src="img_rightside_3.svg"
                  className="2xl:h-[15px] 3xl:h-[17px] 3xl:mb-[14px] 3xl:ml-[702px] 3xl:mr-[491px] 3xl:mt-[16px] h-[14px] lg:h-[11px] lg:mb-[9px] lg:ml-[455px] lg:mr-[318px] lg:mt-[10px] mb-[12px] ml-[585px] mr-[409px] mt-[14px] object-contain w-[7%] xl:h-[13px] xl:mb-[10px] xl:ml-[520px] xl:mr-[363px] xl:mt-[12px]"
                  alt="rightside"
                />
              </Row>
              <Column className="bg-gray_900_5a1 items-center justify-start self-stretch w-[100%]">
                <Row className="items-center justify-center self-stretch w-[100%]">
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[946px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[612px] ml-[788px] w-[2%] xl:ml-[700px]"></div>
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[40px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[26px] ml-[34px] w-[3%] xl:ml-[30px]"></div>
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[40px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[26px] ml-[34px] w-[3%] xl:ml-[30px]"></div>
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[40px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[26px] ml-[34px] w-[2%] xl:ml-[30px]"></div>
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[38px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[24px] ml-[32px] w-[2%] xl:ml-[28px]"></div>
                  <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:ml-[38px] 3xl:mr-[772px] bg-red_A700_00 h-[8px] lg:h-[7px] lg:ml-[24px] lg:mr-[500px] ml-[32px] mr-[643px] w-[4%] xl:ml-[28px] xl:mr-[572px]"></div>
                </Row>
                <Row className="3xl:mb-[27px] 3xl:mt-[14px] font-lato items-center justify-end lg:mb-[17px] lg:mt-[9px] mb-[23px] mt-[12px] self-stretch w-[100%] xl:mb-[20px] xl:mt-[10px]">
                  <Image
                    src="img_logomain.png"
                    className="2xl:h-[35px] 2xl:ml-[408px] 3xl:h-[41px] 3xl:ml-[490px] h-[34px] lg:h-[27px] lg:ml-[317px] lg:mt-[2px] ml-[408.11px] mt-[3px] object-contain w-[1%] xl:h-[31px] xl:ml-[363px] xl:mt-[2px]"
                    alt="LogoMain"
                  />
                  <Text className="2xl:ml-[5px] 3xl:ml-[6px] 3xl:mt-[8px] 3xl:text-fs27 font-bold lg:mb-[3px] lg:ml-[3px] lg:mt-[5px] lg:text-fs17 mb-[4px] ml-[5.100006px] mt-[7px] text-fs23 text-left text-white_A700 uppercase xl:mb-[3px] xl:ml-[4px] xl:mt-[6px] xl:text-fs20">{`Rotors`}</Text>
                  <Row className="3xl:mb-[8px] 3xl:ml-[278px] 3xl:mt-[12px] items-center justify-center lg:mb-[5px] lg:ml-[180px] lg:mt-[7px] mb-[7px] ml-[232px] mt-[10px] w-[25%] xl:mb-[6px] xl:ml-[206px] xl:mt-[8px]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-fs16 text-left text-white_A700 xl:text-fs14">{`Home`}</Text>
                    <Text className="3xl:ml-[37px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[31px] text-fs16 text-left text-white_A700 xl:ml-[27px] xl:text-fs14">{`Our Cars`}</Text>
                    <Text className="3xl:ml-[39px] 3xl:text-fs19 font-normal lg:ml-[25px] lg:text-fs12 ml-[33px] text-fs16 text-left text-white_A700 xl:ml-[29px] xl:text-fs14">{`Reviews`}</Text>
                    <Text className="3xl:ml-[39px] 3xl:text-fs19 font-normal lg:ml-[25px] lg:text-fs12 ml-[33px] text-fs16 text-left text-white_A700 xl:ml-[29px] xl:text-fs14">{`About`}</Text>
                    <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-white_A700 xl:ml-[28px] xl:text-fs14">{`Pages`}</Text>
                    <Text className="3xl:ml-[38px] 3xl:text-fs19 font-normal lg:ml-[24px] lg:text-fs12 ml-[32px] text-fs16 text-left text-white_A700 xl:ml-[28px] xl:text-fs14">{`Contact Us`}</Text>
                  </Row>
                  <Image
                    src="img_search_10.svg"
                    className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[10px] 3xl:ml-[102px] 3xl:mt-[14px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[7px] lg:ml-[66px] lg:mt-[9px] lg:w-[12px] mb-[9px] ml-[85px] mt-[12px] object-contain w-[16px] xl:h-[15px] xl:mb-[8px] xl:ml-[75px] xl:mt-[10px] xl:w-[14px]"
                    alt="search"
                  />
                  <Stack className="2xl:h-[32px] 3xl:h-[38px] 3xl:mb-[7px] 3xl:ml-[34px] h-[31px] lg:h-[25px] lg:mb-[4px] lg:ml-[22px] mb-[6px] ml-[29px] w-[2%] xl:h-[28px] xl:mb-[5px] xl:ml-[25px]">
                    <Image
                      src="img_shoppingcart_2.svg"
                      className="2xl:h-[21px] 3xl:h-[25px] absolute bottom-[1px] h-[20px] left-[0] lg:h-[16px] object-contain w-[70%] xl:h-[18px]"
                      alt="shoppingcart"
                    />
                    <Column className="absolute bg-red_A700 font-lato items-center justify-start right-[0] rounded-radius50 shadow-bs31 top-[0] w-[61%]">
                      <Text className="3xl:text-fs12 font-bold lg:my-[3px] lg:text-fs7 mx-[auto] my-[4px] text-fs10 text-left text-white_A700 xl:my-[3px] xl:text-fs8">{`01`}</Text>
                    </Column>
                  </Stack>
                  <Image
                    src="img_user.svg"
                    className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[10px] 3xl:ml-[14px] 3xl:mt-[14px] h-[16px] lg:h-[13px] lg:mb-[7px] lg:ml-[9px] lg:mt-[9px] mb-[9px] ml-[12px] mt-[12px] object-contain w-[1%] xl:h-[15px] xl:mb-[8px] xl:ml-[10px] xl:mt-[10px]"
                    alt="User"
                  />
                  <Image
                    src="img_alignright.svg"
                    className="2xl:h-[19px] 3xl:h-[22px] 3xl:mb-[9px] 3xl:ml-[36px] 3xl:mr-[489px] 3xl:mt-[13px] h-[18px] lg:h-[14px] lg:mb-[6px] lg:ml-[23px] lg:mr-[317px] lg:mt-[8px] mb-[8px] ml-[30px] mr-[408px] mt-[11px] object-contain w-[1%] xl:h-[17px] xl:mb-[7px] xl:ml-[26px] xl:mr-[362px] xl:mt-[9px]"
                    alt="alignright"
                  />
                </Row>
              </Column>
            </Column>
          </div>
          <Column className="bg-gradient15  font-goldman items-center justify-start self-stretch w-[100%]">
            <Text className="3xl:my-[76px] 3xl:text-fs57 font-normal lg:my-[49px] lg:text-fs37 mx-[auto] my-[64px] text-center text-fs48 text-white_A700 xl:my-[56px] xl:text-fs42">{`Login`}</Text>
          </Column>
        </Column>
        <Text className="3xl:pb-[10px] 3xl:pl-[42px] 3xl:pt-[9px] 3xl:text-fs16 bg-gray_101 font-normal leading-lh lg:pb-[7px] lg:pl-[27px] lg:pt-[6px] lg:text-fs10 pb-[9px] pl-[35px] pt-[8px] self-stretch text-bluegray_500 text-fs14 text-left w-[100%] xl:pb-[8px] xl:pl-[31px] xl:pt-[7px] xl:text-fs12">{`Home / LogIn`}</Text>
        <Column className="3xl:mt-[129px] items-center lg:mt-[84px] mt-[108px] self-stretch w-[100%] xl:mt-[96px]">
          <Stack className="2xl:h-[1105px] 3xl:h-[1326px] h-[1104px] lg:h-[859px] mx-[auto] w-[58%] xl:h-[983px]">
            <Stack className="2xl:h-[628px] 3xl:h-[753px] absolute bottom-[0] font-goldman h-[627px] inset-x-[0] lg:h-[488px] w-[100%] xl:h-[558px]">
              <div className="2xl:h-[516px] 3xl:h-[619px] absolute bg-gray_101 bottom-[0] h-[515px] lg:h-[401px] self-stretch shadow-bs38 w-[100%] xl:h-[459px]"></div>
              <Row className="3xl:bottom-[74px] 3xl:right-[70px] absolute bg-red_A700 bottom-[62px] items-center justify-center lg:bottom-[48px] lg:right-[45px] right-[59px] rounded-radius4 shadow-bs27 w-[43%] xl:bottom-[55px] xl:right-[52px]">
                <Text className="3xl:mb-[25px] 3xl:ml-[195px] 3xl:mt-[26px] 3xl:text-fs16 font-bold lg:mb-[16px] lg:ml-[126px] lg:mt-[17px] lg:text-fs10 mb-[21px] ml-[163px] mt-[22px] text-fs14 text-right text-white_A700 uppercase xl:mb-[18px] xl:ml-[145px] xl:mt-[19px] xl:text-fs12">{`Register`}</Text>
                <Image
                  src="img_path_4.svg"
                  className="2xl:h-[14px] 2xl:mr-[163px] 3xl:h-[16px] 3xl:mb-[27px] 3xl:ml-[12px] 3xl:mr-[196px] 3xl:mt-[28px] h-[13px] lg:h-[11px] lg:mb-[17px] lg:ml-[7px] lg:mr-[127px] lg:mt-[18px] mb-[23px] ml-[10px] mr-[163.54004px] mt-[24px] object-contain w-[11%] xl:h-[12px] xl:mb-[20px] xl:ml-[8px] xl:mr-[145px] xl:mt-[21px]"
                  alt="Path"
                />
              </Row>
              <Input
                className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:bottom-[243px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:right-[70px] 3xl:text-fs19 absolute bg-white_A700 border border-bluegray_500_53 border-solid bottom-[203px] font-bold lg:bottom-[157px] lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:right-[45px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] right-[59px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[43%] xl:bottom-[180px] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:right-[52px] xl:text-fs14"
                name="CardNumber"
                placeholder={`Billing Address`}
              ></Input>
              <Row className="3xl:gap-[42px] absolute font-lato gap-[35px] grid grid-cols-2 h-[max-content] inset-[0] items-center justify-center lg:gap-[27px] m-[auto] w-[89%] xl:gap-[31px]">
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="Email"
                  placeholder={`E-mail*`}
                ></Input>
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="CardNumber"
                  placeholder={`Country`}
                ></Input>
              </Row>
              <Row className="3xl:gap-[42px] 3xl:top-[268px] absolute font-lato gap-[35px] grid grid-cols-2 inset-x-[0] items-center justify-start lg:gap-[27px] lg:top-[174px] mx-[auto] top-[224px] w-[89%] xl:gap-[31px] xl:top-[199px]">
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="Name"
                  placeholder={`Your name*`}
                ></Input>
                <div className="bg-transparent border-bw w-[100%] input-wrap">
                  <Image
                    src="img_caretdown_2.svg"
                    className="absolute top-[21.375px] bottom-[17.375px] right-[24px] border-bw bg-transparent lg:top-[16px] lg:bottom-[13px] lg:right-[18px] xl:top-[19px] xl:bottom-[15px] xl:right-[21px] 2xl:top-[21px] 2xl:bottom-[17px] 3xl:top-[25px] 3xl:bottom-[20px] 3xl:right-[28px]"
                    alt="caret-down"
                  />
                  <Button className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pr-[55px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pr-[35px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] pr-[46px] pt-[21.375px] rounded-radius4 text-bluegray_910 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pr-[40px] xl:pt-[19px] xl:text-fs14">{`Choose Payment Details`}</Button>
                </div>
              </Row>
              <Column className="3xl:bottom-[75px] 3xl:left-[70px] absolute bottom-[63px] font-lato justify-start left-[59px] lg:bottom-[49px] lg:left-[45px] w-[43%] xl:bottom-[56px] xl:left-[52px]">
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="Password"
                  placeholder={`Password*`}
                ></Input>
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:mt-[12px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:mt-[7px] lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 mt-[10px] pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[8px] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="ConfirmPasswor"
                  placeholder={`Confirm Password*`}
                ></Input>
                <Input
                  className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:mt-[12px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold lg:mt-[7px] lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 mt-[10px] pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[8px] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                  name="ConfirmPasswor"
                  placeholder={`Phone Number`}
                ></Input>
              </Column>
              <Column className="3xl:right-[72px] absolute font-lato justify-start lg:right-[46px] right-[60px] top-[0] w-[42%] xl:right-[53px]">
                <Text className="3xl:mx-[110px] 3xl:text-fs16 font-normal lg:mx-[71px] lg:text-fs10 mx-[92px] text-blue_900 text-fs14 text-left xl:mx-[81px] xl:text-fs12">{`Privacy Policy`}</Text>
                <Text className="3xl:mt-[505px] 3xl:text-fs16 font-normal leading-lh lg:mt-[327px] lg:text-fs10 mt-[421px] self-stretch text-bluegray_500 text-fs14 text-left w-[100%] xl:mt-[374px] xl:text-fs12">{`Your personal data will be used in mapping with the vehicles you added to the website, to manage access to your account, and for other purposes described in our`}</Text>
              </Column>
              <Row className="3xl:top-[183px] absolute font-goldman inset-x-[0] justify-center lg:top-[119px] mx-[auto] top-[153px] w-[23%] xl:top-[136px]">
                <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:mb-[7px] 3xl:mt-[32px] bg-red_A700 h-[8px] lg:h-[7px] lg:mb-[4px] lg:mt-[21px] mb-[6px] mt-[27px] w-[8%] xl:mb-[5px] xl:mt-[24px]"></div>
                <Text className="3xl:ml-[20px] 3xl:text-fs48 font-normal lg:ml-[13px] lg:text-fs31 ml-[17px] text-black_907 text-fs40 text-left xl:ml-[15px] xl:text-fs35">{`Register`}</Text>
                <div className="2xl:h-[9px] 3xl:h-[10px] 3xl:mb-[7px] 3xl:ml-[12px] 3xl:mt-[32px] bg-red_A700 h-[8px] lg:h-[7px] lg:mb-[4px] lg:ml-[7px] lg:mt-[21px] mb-[6px] ml-[10px] mt-[27px] w-[8%] xl:mb-[5px] xl:ml-[8px] xl:mt-[24px]"></div>
              </Row>
            </Stack>
            <Row className="absolute bg-gray_101 inset-x-[0] items-center justify-start shadow-bs38 top-[0] w-[100%]">
              <div className="2xl:h-[438px] 3xl:h-[525px] 3xl:mb-[50px] 3xl:ml-[72px] 3xl:mt-[54px] bg-gray_400 h-[437px] lg:h-[340px] lg:mb-[32px] lg:ml-[46px] lg:mt-[35px] mb-[42px] ml-[60px] mt-[45px] w-[43%] xl:h-[389px] xl:mb-[37px] xl:ml-[53px] xl:mt-[40px]"></div>
              <Column className="3xl:ml-[42px] 3xl:mr-[67px] 3xl:my-[48px] font-goldman justify-start lg:ml-[27px] lg:mr-[43px] lg:my-[31px] ml-[35px] mr-[56px] my-[40px] w-[43%] xl:ml-[31px] xl:mr-[49px] xl:my-[35px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs48 font-goldman font-normal lg:mr-[7px] lg:text-fs31 mr-[10px] text-black_907 text-fs40 text-left xl:mr-[8px] xl:text-fs35">{`LogIn:`}</Text>
                <Text className="2xl:leading-lh21 3xl:leading-lh25 3xl:text-fs19 font-lato font-normal leading-lh2100 lg:leading-lh16 lg:text-fs12 text-bluegray_910 text-fs16 text-left w-[100%] xl:leading-lh18 xl:text-fs14">{`Savings of up to 15% with our car rental solutions, global coverage and a dedicated customer team`}</Text>
                <Row className="3xl:mr-[12px] 3xl:mt-[16px] font-lato items-center justify-start lg:ml-[1px] lg:mr-[7px] lg:mt-[10px] ml-[2px] mr-[10px] mt-[14px] w-[50%] xl:ml-[1px] xl:mr-[8px] xl:mt-[12px]">
                  <Text className="3xl:text-fs21 font-bold lg:text-fs14 text-bluegray_910 text-fs18 text-left xl:text-fs16">{`Log In`}</Text>
                  <Text className="3xl:ml-[7px] 3xl:text-fs21 font-bold lg:ml-[4px] lg:text-fs14 ml-[6px] text-bluegray_910 text-fs18 text-left xl:ml-[5px] xl:text-fs16">{`or`}</Text>
                  <Text className="3xl:ml-[9px] 3xl:text-fs21 font-bold lg:ml-[6px] lg:text-fs14 ml-[8px] text-blue_900 text-fs18 text-left xl:ml-[7px] xl:text-fs16">{`Create an Account?`}</Text>
                </Row>
                <Column className="3xl:mt-[13px] items-center lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]">
                  <Column className="font-lato justify-start w-[100%]">
                    <Input
                      className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold font-lato lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                      name="Form"
                      placeholder={`Your email`}
                    ></Input>
                    <Input
                      className="2xl:pb-[17px] 2xl:pt-[21px] 3xl:mt-[12px] 3xl:pb-[20px] 3xl:pl-[22px] 3xl:pt-[25px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold font-lato lg:mt-[7px] lg:pb-[13px] lg:pl-[14px] lg:pt-[16px] lg:text-fs12 mt-[10px] pb-[17.375px] pl-[19px] placeholder:bg-transparent placeholder:text-bluegray_500 pt-[21.375px] rounded-radius4 self-stretch text-bluegray_500 text-fs16 text-left w-[100%] xl:mt-[8px] xl:pb-[15px] xl:pl-[16px] xl:pt-[19px] xl:text-fs14"
                      name="Password"
                      placeholder={`Password`}
                    ></Input>
                    <div className="3xl:mt-[25px] bg-transparent border-bw lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px] input-wrap">
                      <Image
                        src="img_path_4.svg"
                        className="absolute top-[24.205px] bottom-[21.205px] right-[176.54004px] border-bw bg-transparent lg:top-[18px] lg:bottom-[16px] lg:right-[137px] xl:top-[21px] xl:bottom-[18px] xl:right-[157px] 2xl:top-[24px] 2xl:bottom-[21px] 2xl:right-[176px] 3xl:top-[29px] 3xl:bottom-[25px] 3xl:right-[211px]"
                        alt="Path"
                      />
                      <Button className="2xl:pb-[21px] 2xl:pr-[237px] 2xl:pt-[24px] 3xl:pb-[25px] 3xl:pr-[284px] 3xl:pt-[29px] 3xl:text-fs16 bg-red_A700 border-bw font-bold font-goldman lg:pb-[16px] lg:pr-[184px] lg:pt-[18px] lg:text-fs10 pb-[21.205px] pr-[237.00004px] pt-[24.205px] rounded-radius4 shadow-bs27 text-fs14 text-right text-white_A700 uppercase w-[100%] xl:pb-[18px] xl:pr-[210px] xl:pt-[21px] xl:text-fs12">{`Login`}</Button>
                    </div>
                  </Column>
                </Column>
                <Text className="3xl:mr-[12px] 3xl:mt-[37px] 3xl:text-fs19 font-bold font-lato lg:ml-[1px] lg:mr-[7px] lg:mt-[24px] lg:text-fs12 ml-[2px] mr-[10px] mt-[31px] text-blue_900 text-fs16 text-left xl:ml-[1px] xl:mr-[8px] xl:mt-[27px] xl:text-fs14">{`Reset Your Password by e-mail?`}</Text>
                <Column className="items-center lg:mt-[2px] mt-[3px] self-stretch w-[100%] xl:mt-[2px]">
                  <Row className="font-lato justify-start lg:ml-[2px] lg:mr-[1px] ml-[3px] mr-[2px] w-[99%] xl:ml-[2px] xl:mr-[1px]">
                    <div className="2xl:h-[21px] 3xl:h-[25px] 3xl:mb-[12px] 3xl:w-[24px] bg-white_A701 border border-gray_503 border-solid h-[20px] lg:h-[16px] lg:mb-[7px] lg:mt-[3px] lg:w-[15px] mb-[10px] mt-[4px] rounded-radius2 w-[20px] xl:h-[18px] xl:mb-[8px] xl:mt-[3px] xl:w-[17px]"></div>
                    <Text className="3xl:ml-[19px] 3xl:text-fs16 font-normal leading-lh lg:ml-[12px] lg:text-fs10 ml-[16px] text-bluegray_500 text-fs14 text-left w-[92%] xl:ml-[14px] xl:text-fs12">{`Save my name, email, and website in this browser for the next time I comment`}</Text>
                  </Row>
                </Column>
              </Column>
            </Row>
          </Stack>
          <div className="3xl:mt-[151px] lg:mt-[98px] mt-[126px] self-stretch w-[100%] xl:mt-[112px]">
            <Column className="items-center justify-start self-stretch w-[100%]">
              <Row className="bg-gray_100_98 items-center justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="2xl:mb-[122px] 2xl:mt-[131px] 3xl:mb-[146px] 3xl:mt-[158px] font-goldman justify-start lg:mb-[94px] lg:mt-[102px] mb-[122.10986px] mt-[131.73999px] w-[17%] xl:mb-[108px] xl:mt-[117px]">
                  <Row className="font-goldman items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_logomain.png"
                      className="2xl:h-[35px] 2xl:ml-[5px] 3xl:h-[41px] 3xl:ml-[6px] h-[34px] lg:h-[27px] lg:ml-[4px] ml-[5.6099854px] object-contain w-[9%] xl:h-[31px] xl:ml-[4px]"
                      alt="LogoMain"
                    />
                    <Text className="2xl:mb-[3px] 2xl:ml-[5px] 2xl:mt-[4px] 3xl:mb-[4px] 3xl:ml-[6px] 3xl:mr-[204px] 3xl:mt-[5px] 3xl:text-fs27 font-bold lg:mb-[2px] lg:ml-[4px] lg:mr-[132px] lg:mt-[3px] lg:text-fs17 mb-[3.7399902px] ml-[5.600006px] mr-[170px] mt-[4.26001px] text-black_907 text-fs23 text-left uppercase xl:ml-[4px] xl:mr-[151px] xl:my-[3px] xl:text-fs20">{`Rotors`}</Text>
                  </Row>
                  <Column className="2xl:mt-[13px] 3xl:mt-[15px] items-center lg:mt-[10px] mt-[13.26001px] self-stretch w-[100%] xl:mt-[11px]">
                    <Stack className="2xl:h-[147px] 3xl:h-[176px] font-lato h-[146px] lg:h-[114px] self-stretch w-[100%] xl:h-[130px]">
                      <Row className="absolute bottom-[0] justify-start left-[0] self-stretch w-[100%]">
                        <Image
                          src="img_angleright.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[2px] lg:mt-[3px] mb-[1px] ml-[3px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[2px] xl:mt-[3px]"
                          alt="angleright"
                        />
                        <Text className="3xl:ml-[12px] 3xl:mr-[208px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[135px] lg:text-fs12 ml-[10px] mr-[174px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[154px] xl:text-fs14">{`Rental Information`}</Text>
                      </Row>
                      <Text className="2xl:leading-lh21 3xl:leading-lh25 3xl:text-fs19 absolute font-normal leading-lh2100 lg:leading-lh16 lg:text-fs12 self-stretch text-bluegray_910 text-fs16 text-left top-[0] w-[100%] xl:leading-lh18 xl:text-fs14">{`Cras sit amet mi non orci pretium consectetur. Donec iaculis ante ac sollicitudin luctus. Phasellus ut lacus lacus. Phasellus sagittis ex id tortor tincidunt luctus. Donec consectetur consequat bibendum`}</Text>
                    </Stack>
                  </Column>
                  <Row className="3xl:mt-[15px] font-lato justify-start lg:mt-[10px] mt-[13px] self-stretch w-[100%] xl:mt-[11px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[2px] lg:mt-[3px] mb-[1px] ml-[3px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[2px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[327px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[212px] lg:text-fs12 ml-[10px] mr-[273px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[242px] xl:text-fs14">{`FAQ`}</Text>
                  </Row>
                  <div className="3xl:mt-[24px] bg-transparent border-bw lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px] input-wrap">
                    <Image
                      src="img_search_12.svg"
                      className="absolute top-[22.375px] bottom-[21.375px] right-[18px] border-bw bg-transparent lg:top-[17px] lg:bottom-[16px] lg:right-[14px] xl:right-[16px] xl:inset-y-[19px] 2xl:top-[22px] 2xl:bottom-[21px] 3xl:top-[26px] 3xl:bottom-[25px] 3xl:right-[21px]"
                      alt="search"
                    />
                    <Button className="2xl:pb-[21px] 2xl:pt-[22px] 3xl:pb-[25px] 3xl:pl-[19px] 3xl:pr-[52px] 3xl:pt-[26px] 3xl:text-fs19 bg-white_A700 border border-bluegray_500_53 border-solid font-bold font-lato lg:pb-[16px] lg:pl-[12px] lg:pr-[34px] lg:pt-[17px] lg:text-fs12 pb-[21.375px] pl-[16px] pr-[44px] pt-[22.375px] rounded-radius4 text-bluegray_500 text-fs16 text-left w-[100%] xl:pl-[14px] xl:pr-[39px] xl:py-[19px] xl:text-fs14">{`Search`}</Button>
                  </div>
                </Column>
                <Column className="2xl:mb-[161px] 3xl:mb-[193px] 3xl:mt-[157px] font-goldman justify-start lg:mb-[125px] lg:mt-[101px] mb-[161.10986px] mt-[131px] w-[16%] xl:mb-[143px] xl:mt-[116px]">
                  <Text className="3xl:ml-[6px] 3xl:mr-[12px] 3xl:text-fs28 font-normal lg:ml-[3px] lg:mr-[7px] lg:mt-[1px] lg:text-fs18 ml-[5px] mr-[10px] mt-[2px] text-black_907 text-fs24 text-left xl:ml-[4px] xl:mr-[8px] xl:mt-[1px] xl:text-fs21">{`Contact Us:`}</Text>
                  <Column className="3xl:mt-[25px] items-center lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px]">
                    <Stack className="2xl:h-[108px] 3xl:h-[129px] font-lato h-[107px] lg:h-[84px] self-stretch w-[100%] xl:h-[96px]">
                      <Text className="3xl:left-[30px] 3xl:text-fs19 absolute bottom-[0] font-normal left-[25px] lg:left-[19px] lg:text-fs12 text-bluegray_910 text-fs16 text-left xl:left-[22px] xl:text-fs14">{`8:00am-9:30pm`}</Text>
                      <Text className="2xl:bottom-[17px] 2xl:leading-lh20 3xl:bottom-[21px] 3xl:leading-lh24 3xl:text-fs19 absolute bottom-[17.5px] font-normal inset-x-[0] leading-lh2000 lg:bottom-[13px] lg:leading-lh15 lg:text-fs12 mx-[auto] text-bluegray_910 text-fs16 text-left w-[max-content] xl:bottom-[15px] xl:leading-lh17 xl:text-fs14">{`Unit 9, Manor Industrial Estate, Lower Wash Lane, Warrington, WA4`}</Text>
                      <Column className="absolute h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[56%]">
                        <Column className="items-center self-stretch w-[100%]">
                          <Row className="font-lato justify-evenly px-[0] self-stretch w-[100%]">
                            <Image
                              src="img_mapmarkeralt_8.svg"
                              className="2xl:h-[15px] 3xl:h-[17px] h-[14px] lg:h-[11px] lg:mb-[2px] lg:mt-[1px] mb-[3px] mt-[2px] object-contain w-[6%] xl:h-[13px] xl:mb-[2px] xl:mt-[1px]"
                              alt="mapmarkeralt"
                            />
                            <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_910 text-fs16 text-left xl:text-fs14">{`Main Office Address:`}</Text>
                          </Row>
                        </Column>
                        <Image
                          src="img_clock_4.svg"
                          className="2xl:h-[15px] 3xl:h-[17px] 3xl:mr-[12px] 3xl:mt-[84px] h-[14px] lg:h-[11px] lg:mr-[7px] lg:mt-[54px] mr-[10px] mt-[70px] object-contain w-[12%] xl:h-[13px] xl:mr-[8px] xl:mt-[62px]"
                          alt="clock"
                        />
                      </Column>
                    </Stack>
                  </Column>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[8px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[5px] lg:mt-[3px] mb-[2px] ml-[7px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[6px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[151px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[98px] lg:text-fs12 ml-[10px] mr-[126px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[112px] xl:text-fs14">{`Other Office Locations`}</Text>
                  </Row>
                  <Row className="3xl:mt-[22px] font-lato justify-start lg:mt-[14px] mt-[19px] self-stretch w-[100%] xl:mt-[16px]">
                    <Image
                      src="img_envelope_6.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[2px] lg:w-[10px] mb-[2px] ml-[4px] mt-[3px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[3px] xl:mt-[2px] xl:w-[12px]"
                      alt="envelope"
                    />
                    <Text className="3xl:ml-[14px] 3xl:mr-[184px] 3xl:text-fs19 font-bold lg:ml-[9px] lg:mr-[119px] lg:text-fs12 ml-[12px] mr-[154px] text-bluegray_910 text-fs16 text-left xl:ml-[10px] xl:mr-[136px] xl:text-fs14">{`rotorseml@eml.fr`}</Text>
                  </Row>
                  <Row className="3xl:mt-[25px] font-lato justify-start lg:mt-[16px] mt-[21px] self-stretch w-[100%] xl:mt-[18px]">
                    <Image
                      src="img_phone_5.svg"
                      className="2xl:h-[15px] 3xl:h-[17px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[2px] lg:w-[10px] mb-[2px] ml-[4px] mt-[3px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[3px] xl:mt-[2px] xl:w-[12px]"
                      alt="phone"
                    />
                    <Text className="3xl:ml-[14px] 3xl:mr-[206px] 3xl:text-fs19 font-bold lg:ml-[9px] lg:mr-[133px] lg:text-fs12 ml-[12px] mr-[172px] text-bluegray_910 text-fs16 text-left xl:ml-[10px] xl:mr-[153px] xl:text-fs14">{`01967 411232`}</Text>
                  </Row>
                </Column>
                <Column className="2xl:mb-[144px] 3xl:mb-[173px] 3xl:mt-[157px] font-goldman justify-start lg:mb-[112px] lg:mt-[101px] mb-[144.10986px] mt-[131px] w-[16%] xl:mb-[128px] xl:mt-[116px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-normal lg:mr-[7px] lg:mt-[1px] lg:text-fs18 mr-[10px] mt-[2px] text-black_907 text-fs24 text-left xl:mr-[8px] xl:mt-[1px] xl:text-fs21">{`Information:`}</Text>
                  <Column className="3xl:mt-[21px] items-center lg:mt-[14px] mt-[18px] self-stretch w-[100%] xl:mt-[16px]">
                    <Row className="font-lato justify-start self-stretch w-[100%]">
                      <Image
                        src="img_angleright.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[1px] lg:mt-[3px] mb-[1px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[1px] xl:mt-[3px]"
                        alt="angleright"
                      />
                      <Text className="3xl:ml-[12px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:text-fs12 ml-[10px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:text-fs14">{`Find a Car for Rent in the Nearest Location`}</Text>
                    </Row>
                  </Column>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:ml-[1px] lg:mt-[3px] mb-[1px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[249px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[161px] lg:text-fs12 ml-[10px] mr-[208px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[185px] xl:text-fs14">{`Cars Catalog`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[318px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[206px] lg:text-fs12 ml-[10px] mr-[265px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[235px] xl:text-fs14">{`FAQ`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[277px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[179px] lg:text-fs12 ml-[10px] mr-[231px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[205px] xl:text-fs14">{`About Us`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[280px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[182px] lg:text-fs12 ml-[10px] mr-[234px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[208px] xl:text-fs14">{`Contacts`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[253px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[164px] lg:text-fs12 ml-[10px] mr-[211px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[187px] xl:text-fs14">{`Help Center`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-lato justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img_angleright.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] h-[16px] lg:h-[13px] lg:mb-[1px] lg:ml-[1px] lg:mt-[3px] mb-[2px] ml-[2px] mt-[4px] object-contain w-[2%] xl:h-[15px] xl:mb-[1px] xl:ml-[1px] xl:mt-[3px]"
                      alt="angleright"
                    />
                    <Text className="3xl:ml-[12px] 3xl:mr-[240px] 3xl:text-fs19 font-normal lg:ml-[7px] lg:mr-[155px] lg:text-fs12 ml-[10px] mr-[200px] text-bluegray_910 text-fs16 text-left xl:ml-[8px] xl:mr-[177px] xl:text-fs14">{`Privacy Police`}</Text>
                  </Row>
                </Column>
              </Row>
              <Row className="bg-black_907 font-lato items-center justify-evenly mt-[1px] px-[0] self-stretch w-[100%]">
                <Row className="2xl:mb-[25px] 2xl:mt-[23px] 3xl:mb-[31px] 3xl:mt-[28px] justify-center lg:mb-[20px] lg:mt-[18px] mb-[25.929932px] mt-[23.95996px] w-[36%] xl:mb-[23px] xl:mt-[21px]">
                  <Text className="3xl:ml-[489px] 3xl:text-fs19 font-normal lg:ml-[317px] lg:text-fs12 ml-[408px] text-fs16 text-left text-white_A700 xl:ml-[362px] xl:text-fs14">{`Copyright`}</Text>
                  <Image
                    src="img_copyright.svg"
                    className="2xl:h-[15px] 3xl:h-[17px] 3xl:ml-[6px] 3xl:w-[16px] h-[14px] lg:h-[11px] lg:mb-[1px] lg:ml-[3px] lg:mt-[3px] lg:w-[10px] mb-[2px] ml-[5px] mt-[4px] object-contain w-[14px] xl:h-[13px] xl:mb-[1px] xl:ml-[4px] xl:mt-[3px] xl:w-[12px]"
                    alt="Copyright"
                  />
                  <Text className="3xl:ml-[6px] 3xl:text-fs19 font-normal lg:ml-[3px] lg:text-fs12 ml-[5px] text-fs16 text-left text-white_A700 xl:ml-[4px] xl:text-fs14">{`2020. Rotors  by Merkulove`}</Text>
                </Row>
                <Image
                  src="img_arrowup_3.svg"
                  className="2xl:h-[48px] 2xl:my-[10px] 3xl:h-[58px] 3xl:my-[13px] h-[47.92px] lg:h-[38px] lg:my-[8px] mb-[10.98999px] mt-[10.97998px] object-contain w-[3%] xl:h-[43px] xl:my-[9px]"
                  alt="Arrowup"
                />
                <Image
                  src="img_socialmedia_6.svg"
                  className="2xl:h-[16px] 2xl:mb-[24px] 2xl:mt-[28px] 3xl:h-[20px] 3xl:mb-[29px] 3xl:mt-[34px] h-[15.97px] lg:h-[13px] lg:mb-[19px] lg:mt-[22px] mb-[24.96997px] mt-[28.949951px] object-contain w-[5%] xl:h-[15px] xl:mb-[22px] xl:mt-[25px]"
                  alt="socialmedia"
                />
              </Row>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default LoginRegisterPage;
