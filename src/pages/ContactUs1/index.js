import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { Line } from "components/Line";

const ContactUs1Page = () => {
  return (
    <Column className="items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[461px] 3xl:h-[553px] bg-indigo_900 h-[460px] lg:h-[358px] self-stretch w-[100%] xl:h-[410px]">
        <Image
          src="img_background_5.png"
          className="2xl:h-[461px] 3xl:h-[553px] absolute h-[460px] inset-[0] lg:h-[358px] object-cover self-stretch w-[100%] xl:h-[410px]"
          alt="Background"
        />
        <Column className="3xl:top-[30px] absolute font-cabincondensed inset-x-[0] justify-start lg:top-[19px] mx-[auto] top-[25px] w-[85%] xl:top-[22px]">
          <Column className="items-center self-stretch w-[100%]">
            <div className="self-stretch w-[100%]">
              <Row className="font-cabincondensed items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_logo_6.svg"
                  className="2xl:h-[40px] 2xl:mb-[12px] 3xl:h-[48px] 3xl:mb-[14px] 3xl:mt-[12px] h-[39.74px] lg:h-[31px] lg:mb-[9px] lg:mt-[7px] mb-[12.2599945px] mt-[10px] object-contain w-[15%] xl:h-[36px] xl:mb-[10px] xl:mt-[8px]"
                  alt="Logo"
                />
                <Row className="2xl:ml-[241px] 3xl:ml-[289px] 3xl:my-[24px] items-center justify-center lg:ml-[187px] lg:my-[15px] ml-[241.04999px] my-[20px] w-[41%] xl:ml-[214px] xl:my-[17px]">
                  <Row className="justify-between px-[0] w-[13%]">
                    <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-left text-white_A700 tracking-ls1 xl:text-fs16">{`Home`}</Text>
                    <Image
                      src="img__6.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:mt-[6px] h-[15px] lg:h-[12px] lg:mb-[1px] lg:mt-[3px] mb-[2px] mt-[5px] object-contain w-[19%] xl:h-[14px] xl:mb-[1px] xl:mt-[4px]"
                      alt=""
                    />
                  </Row>
                  <Text className="3xl:ml-[36px] 3xl:text-fs21 font-medium lg:ml-[23px] lg:text-fs14 ml-[30px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[26px] xl:text-fs16">{`About Us`}</Text>
                  <Row className="3xl:ml-[36px] font-cabincondensed justify-center lg:ml-[23px] ml-[30px] w-[16%] xl:ml-[26px]">
                    <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-left text-white_A700 tracking-ls1 xl:text-fs16">{`Services`}</Text>
                    <Image
                      src="img__6.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[12px] 3xl:mt-[6px] h-[15px] lg:h-[12px] lg:mb-[1px] lg:ml-[7px] lg:mt-[3px] mb-[2px] ml-[10px] mt-[5px] object-contain w-[15%] xl:h-[14px] xl:mb-[1px] xl:ml-[8px] xl:mt-[4px]"
                      alt=""
                    />
                  </Row>
                  <Row className="3xl:ml-[36px] font-cabincondensed justify-center lg:ml-[23px] ml-[30px] w-[22%] xl:ml-[26px]">
                    <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-left text-white_A700 tracking-ls1 xl:text-fs16">{`Our Products`}</Text>
                    <Image
                      src="img__6.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[12px] 3xl:mt-[6px] h-[15px] lg:h-[12px] lg:mb-[1px] lg:ml-[7px] lg:mt-[3px] mb-[2px] ml-[10px] mt-[5px] object-contain w-[11%] xl:h-[14px] xl:mb-[1px] xl:ml-[8px] xl:mt-[4px]"
                      alt=""
                    />
                  </Row>
                  <Row className="3xl:ml-[36px] font-cabincondensed justify-between lg:ml-[23px] ml-[30px] px-[0] w-[12%] xl:ml-[26px]">
                    <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-fs18 text-left text-teal_A700 tracking-ls1 xl:text-fs16">{`Pages`}</Text>
                    <Image
                      src="img__7.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:mt-[6px] h-[15px] lg:h-[12px] lg:mb-[1px] lg:mt-[3px] mb-[2px] mt-[5px] object-contain w-[19%] xl:h-[14px] xl:mb-[1px] xl:mt-[4px]"
                      alt=""
                    />
                  </Row>
                </Row>
                <Button className="2xl:py-[21px] 3xl:ml-[154px] 3xl:px-[42px] 3xl:py-[26px] 3xl:text-fs21 bg-teal_A700 border-bw font-medium lg:ml-[100px] lg:px-[27px] lg:py-[17px] lg:text-fs14 ml-[129px] px-[35px] py-[21.95px] rounded-radius5 shadow-bs11 text-center text-fs18 text-white_A700 tracking-ls1 w-[15%] xl:ml-[114px] xl:px-[31px] xl:py-[19px] xl:text-fs16">{`Get Started`}</Button>
              </Row>
            </div>
          </Column>
          <Row className="3xl:mr-[12px] 3xl:mt-[120px] font-cabincondensed justify-start lg:mr-[7px] lg:mt-[77px] mr-[10px] mt-[100px] w-[13%] xl:mr-[8px] xl:mt-[88px]">
            <Text className="3xl:text-fs21 font-medium lg:text-fs14 mb-[1px] text-fs18 text-left text-teal_A700 tracking-ls1 xl:text-fs16">{`Home`}</Text>
            <Image
              src="img__8.svg"
              className="2xl:h-[24px] 3xl:h-[28px] 3xl:ml-[18px] h-[23px] lg:h-[18px] lg:ml-[11px] ml-[15px] object-contain w-[6%] xl:h-[21px] xl:ml-[13px]"
              alt=""
            />
            <Text className="3xl:ml-[18px] 3xl:text-fs21 font-medium lg:ml-[11px] lg:text-fs14 mb-[1px] ml-[15px] text-fs18 text-left text-teal_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Contact Us`}</Text>
          </Row>
          <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs72 font-bold font-robotocondensed lg:mr-[7px] lg:mt-[11px] lg:text-fs46 mr-[10px] mt-[15px] text-fs60 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:mt-[13px] xl:text-fs53">{`Contact Us`}</Text>
          <Text className="2xl:leading-lh25 3xl:leading-lh30 3xl:mr-[12px] 3xl:mt-[16px] 3xl:text-fs21 font-cabincondensed font-normal leading-lh2500 lg:leading-lh19 lg:mr-[7px] lg:mt-[10px] lg:text-fs14 mr-[10px] mt-[14px] text-fs18 text-left text-white_A700 tracking-ls1 w-[40%] xl:leading-lh22 xl:mr-[8px] xl:mt-[12px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}</Text>
        </Column>
      </Stack>
      <Column className="bg-gradient4  items-center justify-start self-stretch w-[100%]">
        <Row className="3xl:mt-[120px] items-end justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
          <Column className="3xl:ml-[126px] font-robotocondensed justify-start lg:ml-[81px] ml-[105px] w-[42%] xl:ml-[93px]">
            <Text className="3xl:mr-[12px] 3xl:text-fs20 font-bold lg:mr-[7px] lg:text-fs13 mr-[10px] text-fs17 text-left text-teal_A700 tracking-ls1 xl:mr-[8px] xl:text-fs15">{`Crypto For Future`}</Text>
            <Text className="2xl:leading-lh52 3xl:leading-lh63 3xl:mt-[18px] 3xl:text-fs54 font-bold leading-lh5270 lg:leading-lh40 lg:mt-[11px] lg:text-fs35 mt-[15px] self-stretch text-fs45 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh46 xl:mt-[13px] xl:text-fs40">{`Choose Best Coin From Our Cryptocurency & Bitcoin Company`}</Text>
            <List
              className="3xl:mr-[12px] 3xl:mt-[36px] flex-wrap gap-[0] lg:mr-[7px] lg:mt-[23px] min-h-[auto] mr-[10px] mt-[30px] w-[88%] xl:mr-[8px] xl:mt-[26px]"
              orientation="vertical"
            >
              <Row className="3xl:my-[18px] justify-between lg:my-[11px] my-[15px] px-[0] self-stretch w-[100%] xl:my-[13px]">
                <Image
                  src="img__9.svg"
                  className="2xl:h-[76px] 3xl:h-[91px] 3xl:w-[90px] h-[75px] lg:h-[59px] lg:w-[58px] object-contain w-[75px] xl:h-[67px] xl:w-[66px]"
                  alt=""
                />
                <Column className="3xl:mb-[13px] font-robotocondensed justify-start lg:mb-[8px] mb-[11px] w-[80%] xl:mb-[9px]">
                  <Text className="3xl:text-fs30 font-bold font-robotocondensed lg:text-fs19 self-stretch text-fs25 text-left text-white_A700 tracking-ls1 xl:text-fs22">{`Our Office`}</Text>
                  <Text className="3xl:mt-[10px] 3xl:text-fs21 font-cabincondensed font-normal lg:mt-[7px] lg:text-fs14 mt-[9px] self-stretch text-fs18 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs16">{`Madiun City East Java 63125`}</Text>
                </Column>
              </Row>
              <Row className="3xl:my-[18px] justify-between lg:my-[11px] my-[15px] px-[0] self-stretch w-[100%] xl:my-[13px]">
                <Image
                  src="img__10.svg"
                  className="2xl:h-[76px] 3xl:h-[91px] 3xl:w-[90px] h-[75px] lg:h-[59px] lg:w-[58px] object-contain w-[75px] xl:h-[67px] xl:w-[66px]"
                  alt=""
                />
                <Column className="3xl:mb-[13px] font-robotocondensed justify-start lg:mb-[8px] mb-[11px] w-[80%] xl:mb-[9px]">
                  <Text className="3xl:text-fs30 font-bold font-robotocondensed lg:text-fs19 self-stretch text-fs25 text-left text-white_A700 tracking-ls1 xl:text-fs22">{`Our Contact`}</Text>
                  <Text className="3xl:mt-[10px] 3xl:text-fs21 font-cabincondensed font-normal lg:mt-[7px] lg:text-fs14 mt-[9px] self-stretch text-fs18 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs16">{`Mail@Virtual.com`}</Text>
                </Column>
              </Row>
              <Row className="3xl:my-[18px] justify-between lg:my-[11px] my-[15px] px-[0] self-stretch w-[100%] xl:my-[13px]">
                <Image
                  src="img__11.svg"
                  className="2xl:h-[76px] 3xl:h-[91px] 3xl:w-[90px] h-[75px] lg:h-[59px] lg:w-[58px] object-contain w-[75px] xl:h-[67px] xl:w-[66px]"
                  alt=""
                />
                <Column className="3xl:mb-[13px] font-robotocondensed justify-start lg:mb-[8px] mb-[11px] w-[80%] xl:mb-[9px]">
                  <Text className="3xl:text-fs30 font-bold font-robotocondensed lg:text-fs19 self-stretch text-fs25 text-left text-white_A700 tracking-ls1 xl:text-fs22">{`Telephone`}</Text>
                  <Text className="3xl:mt-[10px] 3xl:text-fs21 font-cabincondensed font-normal lg:mt-[7px] lg:text-fs14 mt-[9px] self-stretch text-fs18 text-left text-white_A700 tracking-ls1 xl:mt-[8px] xl:text-fs16">{`( +62 ) 123 456 789`}</Text>
                </Column>
              </Row>
            </List>
          </Column>
          <Column className="3xl:ml-[36px] 3xl:mr-[126px] 3xl:mt-[92px] font-cabincondensed justify-start lg:ml-[23px] lg:mr-[81px] lg:mt-[59px] ml-[30px] mr-[105px] mt-[77px] w-[42%] xl:ml-[26px] xl:mr-[93px] xl:mt-[68px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="3xl:gap-[36px] font-cabincondensed gap-[30px] grid grid-cols-2 items-center justify-between lg:gap-[23px] self-stretch w-[100%] xl:gap-[26px]">
                <Input
                  className="2xl:py-[23px] 3xl:pl-[24px] 3xl:py-[28px] 3xl:text-fs21 bg-white_A700_3f border-0 font-normal lg:pl-[15px] lg:py-[18px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[23.5px] rounded-radius5 text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[17px] xl:py-[20px] xl:text-fs16"
                  name="FormColumn"
                  placeholder={`First Name`}
                ></Input>
                <Input
                  className="2xl:py-[23px] 3xl:pl-[24px] 3xl:py-[28px] 3xl:text-fs21 bg-white_A700_3f border-0 font-normal lg:pl-[15px] lg:py-[18px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[23.5px] rounded-radius5 text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[17px] xl:py-[20px] xl:text-fs16"
                  name="FormColumn"
                  placeholder={`Last Name`}
                ></Input>
              </Row>
              <Row className="3xl:gap-[36px] 3xl:mt-[36px] font-cabincondensed gap-[30px] grid grid-cols-2 items-center justify-between lg:gap-[23px] lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[26px]">
                <Input
                  className="2xl:py-[23px] 3xl:pl-[24px] 3xl:py-[28px] 3xl:text-fs21 bg-white_A700_3f border-0 font-normal lg:pl-[15px] lg:py-[18px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[23.5px] rounded-radius5 text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[17px] xl:py-[20px] xl:text-fs16"
                  name="FormColumn"
                  placeholder={`Email Address`}
                ></Input>
                <Input
                  className="2xl:py-[23px] 3xl:pl-[24px] 3xl:py-[28px] 3xl:text-fs21 bg-white_A700_3f border-0 font-normal lg:pl-[15px] lg:py-[18px] lg:text-fs14 pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 py-[23.5px] rounded-radius5 text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:pl-[17px] xl:py-[20px] xl:text-fs16"
                  name="FormColumn"
                  placeholder={`Subject`}
                ></Input>
              </Row>
            </Column>
            <TextArea
              className="2xl:pb-[38px] 2xl:pt-[23px] 3xl:mt-[36px] 3xl:pb-[46px] 3xl:pl-[24px] 3xl:pt-[28px] 3xl:text-fs21 bg-white_A700_3f border-0 font-normal lg:mt-[23px] lg:pb-[29px] lg:pl-[15px] lg:pt-[18px] lg:text-fs14 mt-[30px] pb-[38.5px] pl-[20px] placeholder:bg-transparent placeholder:text-white_A700 pt-[23.5px] rounded-radius5 self-stretch text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:mt-[26px] xl:pb-[34px] xl:pl-[17px] xl:pt-[20px] xl:text-fs16"
              name="FormColumn"
              placeholder={`Your Message ...`}
            ></TextArea>
            <Button className="2xl:py-[21px] 3xl:mr-[12px] 3xl:mt-[36px] 3xl:px-[42px] 3xl:py-[26px] 3xl:text-fs21 bg-teal_A700 border-bw font-medium lg:mr-[7px] lg:mt-[23px] lg:px-[27px] lg:py-[17px] lg:text-fs14 mr-[10px] mt-[30px] px-[35px] py-[21.95px] rounded-radius5 shadow-bs11 text-center text-fs18 text-white_A700 tracking-ls1 w-[30%] xl:mr-[8px] xl:mt-[26px] xl:px-[31px] xl:py-[19px] xl:text-fs16">{`Send Message`}</Button>
          </Column>
        </Row>
        <div className="2xl:h-[351px] 3xl:h-[421px] 3xl:mt-[120px] bg-gray_400 h-[350px] lg:h-[273px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:h-[312px] xl:mt-[88px]"></div>
      </Column>
      <div className="self-stretch w-[100%]">
        <Column className="bg-gradient5  items-center justify-end self-stretch w-[100%]">
          <Row className="3xl:mt-[60px] justify-evenly lg:mt-[38px] mt-[50px] px-[0] self-stretch w-[100%] xl:mt-[44px]">
            <Column className="2xl:mb-[83px] 3xl:mb-[100px] font-cabincondensed justify-start lg:mb-[64px] mb-[83.51001px] w-[20%] xl:mb-[74px]">
              <Image
                src="img_logo_7.svg"
                className="2xl:h-[40px] 3xl:h-[48px] 3xl:mr-[12px] h-[39.74px] lg:h-[31px] lg:mr-[7px] mr-[10px] object-contain w-[63%] xl:h-[36px] xl:mr-[8px]"
                alt="Logo"
              />
              <Text className="2xl:leading-lh25 2xl:mt-[30px] 3xl:leading-lh30 3xl:mt-[36px] 3xl:text-fs21 font-normal leading-lh2500 lg:leading-lh19 lg:mt-[23px] lg:text-fs14 mt-[30.75px] self-stretch text-fs18 text-left text-white_A700 tracking-ls1 w-[100%] xl:leading-lh22 xl:mt-[27px] xl:text-fs16">{`Virtual – Cryptocurency & Blockchain Elementor Template Kit`}</Text>
            </Column>
            <Column className="font-robotocondensed justify-start w-[20%]">
              <Text className="3xl:text-fs30 font-bold lg:text-fs19 self-stretch text-fs25 text-left text-teal_A700 tracking-ls1 xl:text-fs22">{`Navigation`}</Text>
              <Column className="3xl:mt-[34px] items-center lg:mt-[22px] mt-[29px] self-stretch w-[100%] xl:mt-[25px]">
                <Column className="items-center justify-start self-stretch w-[100%]">
                  <Row className="font-cabincondensed justify-start self-stretch w-[100%]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`About Us`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Our Services`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Our Products`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Contact Us`}</Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="font-robotocondensed justify-start w-[20%]">
              <Text className="3xl:text-fs30 font-bold lg:text-fs19 self-stretch text-fs25 text-left text-teal_A700 tracking-ls1 xl:text-fs22">{`Our Services`}</Text>
              <Column className="3xl:mt-[34px] items-center lg:mt-[22px] mt-[29px] self-stretch w-[100%] xl:mt-[25px]">
                <Column className="items-center justify-start self-stretch w-[100%]">
                  <Row className="font-cabincondensed justify-start self-stretch w-[100%]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Virtual Investment`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Coin Trading`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Coin Transaction`}</Text>
                  </Row>
                  <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Image
                      src="img__12.svg"
                      className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[4%] xl:h-[21px] xl:mb-[1px]"
                      alt=""
                    />
                    <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Coin Exchanger`}</Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="3xl:mb-[18px] font-robotocondensed justify-start lg:mb-[11px] mb-[15px] w-[20%] xl:mb-[13px]">
              <Text className="3xl:text-fs30 font-bold font-robotocondensed lg:text-fs19 self-stretch text-fs25 text-left text-teal_A700 tracking-ls1 xl:text-fs22">{`Our Company`}</Text>
              <Text className="2xl:leading-lh25 3xl:leading-lh30 3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs21 font-cabincondensed font-normal leading-lh2500 lg:leading-lh19 lg:mr-[7px] lg:mt-[22px] lg:text-fs14 mr-[10px] mt-[29px] text-fs18 text-left text-white_A700 tracking-ls1 w-[74%] xl:leading-lh22 xl:mr-[8px] xl:mt-[25px] xl:text-fs16">{`We Are Bigest Company With 10 Years Experience`}</Text>
              <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                <Row className="font-cabincondensed justify-start self-stretch w-[100%]">
                  <Image
                    src="img__13.svg"
                    className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[7%] xl:h-[21px] xl:mb-[1px]"
                    alt=""
                  />
                  <Text className="2xl:ml-[14px] 3xl:ml-[17px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[14.490112px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[12px] xl:text-fs16">{`Market Open 10:00 AM - 07:00 PM`}</Text>
                </Row>
                <Row className="3xl:mt-[18px] font-cabincondensed justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                  <Image
                    src="img__14.svg"
                    className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] object-contain w-[7%] xl:h-[21px] xl:mb-[1px]"
                    alt=""
                  />
                  <Text className="2xl:ml-[14px] 3xl:ml-[17px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[14.490112px] text-fs18 text-left text-white_A700 tracking-ls1 xl:ml-[12px] xl:text-fs16">{`Weekend & Special Days Are Closed`}</Text>
                </Row>
              </Column>
            </Column>
          </Row>
          <Column className="3xl:mb-[27px] 3xl:mt-[60px] items-center justify-start lg:mb-[17px] lg:mt-[38px] mb-[23px] mt-[50px] self-stretch w-[100%] xl:mb-[20px] xl:mt-[44px]">
            <Line className="bg-white_A700 h-[1px] mx-[auto] w-[85%]" />
            <Row className="3xl:mt-[26px] font-cabincondensed items-center justify-evenly lg:mt-[17px] mt-[22px] px-[0] self-stretch w-[100%] xl:mt-[19px]">
              <Text className="3xl:text-fs21 font-normal lg:my-[1px] lg:text-fs14 my-[2px] text-fs18 text-left text-white_A700 tracking-ls1 xl:my-[1px] xl:text-fs16">{`Allright Reserved - Virtual Blockchain Company`}</Text>
              <Image
                src="img_socialicon_1.svg"
                className="2xl:h-[30px] 3xl:h-[35px] h-[29px] lg:h-[23px] object-contain w-[11%] xl:h-[26px]"
                alt="SocialIcon"
              />
            </Row>
          </Column>
        </Column>
      </div>
    </Column>
  );
};

export default ContactUs1Page;
