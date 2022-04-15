import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const Page1 = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Stack className="2xl:h-[1856px] 3xl:h-[2227px] h-[1854px] lg:h-[1442px] self-stretch w-[100%] xl:h-[1650px]">
        <Column className="absolute bg-gray_502 font-poppins items-center justify-start self-stretch top-[0] w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="font-poppins items-center justify-start self-stretch w-[100%]">
              <Row className="items-center justify-start mx-[auto] w-[93%]">
                <Image
                  src="img_logohomco1.png"
                  className="2xl:h-[64px] 3xl:h-[76px] 3xl:my-[36px] h-[63px] lg:h-[49px] lg:my-[23px] my-[30px] object-contain w-[18%] xl:h-[57px] xl:my-[26px]"
                  alt="LogoHomco1"
                />
                <Row className="3xl:ml-[274px] 3xl:my-[60px] items-center justify-center lg:ml-[178px] lg:my-[38px] ml-[229px] my-[50px] w-[25%] xl:ml-[203px] xl:my-[44px]">
                  <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:text-fs13">{`Home`}</Text>
                  <Text className="3xl:ml-[40px] 3xl:text-fs18 font-semibold lg:ml-[26px] lg:text-fs11 ml-[34px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:ml-[30px] xl:text-fs13">{`aBOUT uS`}</Text>
                  <Text className="3xl:ml-[40px] 3xl:text-fs18 font-semibold lg:ml-[26px] lg:text-fs11 ml-[34px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:ml-[30px] xl:text-fs13">{`oUR sERVICES`}</Text>
                </Row>
                <Row className="3xl:ml-[20px] items-center justify-center lg:ml-[13px] ml-[17px] w-[32%] xl:ml-[15px]">
                  <Row className="items-center justify-start w-[44%]">
                    <Text className="3xl:ml-[20px] 3xl:my-[60px] 3xl:text-fs18 font-semibold lg:ml-[13px] lg:my-[38px] lg:text-fs11 ml-[17px] my-[50px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:ml-[15px] xl:my-[44px] xl:text-fs13">{`oUR pROJECTS`}</Text>
                    <Image
                      src="img__2.svg"
                      className="2xl:h-[18px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[20px] 3xl:my-[63px] h-[17px] lg:h-[14px] lg:ml-[7px] lg:mr-[13px] lg:my-[41px] ml-[10px] mr-[17px] my-[53px] object-contain w-[7%] xl:h-[16px] xl:ml-[8px] xl:mr-[15px] xl:my-[47px]"
                      alt=""
                    />
                  </Row>
                  <Text className="3xl:ml-[20px] 3xl:my-[60px] 3xl:text-fs18 font-semibold lg:ml-[13px] lg:my-[38px] lg:text-fs11 ml-[17px] my-[50px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:ml-[15px] xl:my-[44px] xl:text-fs13">{`Portfolio`}</Text>
                  <Row className="3xl:ml-[20px] font-poppins items-center justify-center lg:ml-[13px] ml-[17px] w-[26%] xl:ml-[15px]">
                    <Text className="3xl:ml-[20px] 3xl:my-[60px] 3xl:text-fs18 font-semibold lg:ml-[13px] lg:my-[38px] lg:text-fs11 ml-[17px] my-[50px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase xl:ml-[15px] xl:my-[44px] xl:text-fs13">{`Pages`}</Text>
                    <Image
                      src="img__2.svg"
                      className="2xl:h-[18px] 3xl:h-[21px] 3xl:ml-[12px] 3xl:mr-[20px] 3xl:my-[63px] h-[17px] lg:h-[14px] lg:ml-[7px] lg:mr-[13px] lg:my-[41px] ml-[10px] mr-[17px] my-[53px] object-contain w-[12%] xl:h-[16px] xl:ml-[8px] xl:mr-[15px] xl:my-[47px]"
                      alt=""
                    />
                  </Row>
                </Row>
                <Image
                  src="img_offcanvasmenu.svg"
                  className="2xl:h-[53px] 3xl:h-[63px] 3xl:mb-[43px] 3xl:ml-[7px] 3xl:mt-[42px] h-[52px] lg:h-[41px] lg:mb-[28px] lg:ml-[4px] lg:mt-[27px] mb-[36px] ml-[6px] mt-[35px] object-contain w-[6%] xl:h-[47px] xl:mb-[32px] xl:ml-[5px] xl:mt-[31px]"
                  alt="OffcanvasMenu"
                />
              </Row>
              <Line className="bg-white_A700 h-[1px] self-stretch w-[100%]" />
            </Column>
          </div>
          <Text className="2xl:tracking-ls7 3xl:mt-[240px] 3xl:text-fs120 3xl:tracking-ls8 font-black lg:mt-[155px] lg:text-fs77 lg:tracking-ls5 mt-[200px] mx-[auto] text-center text-fs100 text-white_A700 tracking-ls7000000000000001 uppercase xl:mt-[177px] xl:text-fs88 xl:tracking-ls6">{`ERROR 404`}</Text>
          <Text className="2xl:tracking-ls1 3xl:mt-[36px] 3xl:text-fs30 3xl:tracking-ls2 font-black lg:mt-[23px] lg:text-fs19 lg:tracking-ls1 mt-[30px] mx-[auto] text-center text-fs25 text-white_A700 tracking-ls17500000000000002 uppercase xl:mt-[26px] xl:text-fs22 xl:tracking-ls1">{`PAGE NOT FOUND, PLEASE GO BACK`}</Text>
          <Text className="3xl:mb-[24px] 3xl:mt-[36px] 3xl:px-[42px] 3xl:py-[30px] 3xl:text-fs18 bg-gray_603 font-semibold leading-lh lg:mb-[15px] lg:mt-[23px] lg:px-[27px] lg:py-[19px] lg:text-fs11 mb-[20px] mt-[30px] mx-[auto] px-[35px] py-[25px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase w-[14%] xl:mb-[17px] xl:mt-[26px] xl:px-[31px] xl:py-[22px] xl:text-fs13">{`Order Now`}</Text>
        </Column>
        <div className="absolute bottom-[0] self-stretch w-[100%]">
          <Stack className="2xl:h-[1011px] 3xl:h-[1213px] h-[1010px] lg:h-[786px] self-stretch w-[100%] xl:h-[899px]">
            <Stack className="2xl:h-[1011px] 3xl:h-[1213px] absolute h-[1010px] inset-[0] lg:h-[786px] self-stretch w-[100%] xl:h-[899px]">
              <div className="2xl:h-[790px] 3xl:h-[948px] absolute bg-gray_901 bottom-[0] h-[789px] lg:h-[614px] self-stretch w-[100%] xl:h-[702px]"></div>
              <Column className="3xl:top-[121px] absolute bg-gray_603 font-poppins inset-x-[0] justify-center lg:top-[78px] mx-[auto] top-[101px] w-[93%] xl:top-[89px]">
                <Text className="2xl:tracking-ls4 3xl:mt-[123px] 3xl:mx-[136px] 3xl:text-fs72 3xl:tracking-ls5 font-black leading-lh lg:mt-[80px] lg:mx-[88px] lg:text-fs46 lg:tracking-ls3 mt-[103px] mx-[114px] text-fs60 text-left text-white_A700 tracking-ls42 uppercase w-[83%] xl:mt-[91px] xl:mx-[101px] xl:text-fs53 xl:tracking-ls3">{`LETS CHANGE YOUR OWN HOME INTERIOR DESIGN NOW`}</Text>
                <Text className="3xl:mb-[36px] 3xl:mx-[136px] 3xl:px-[42px] 3xl:py-[30px] 3xl:text-fs18 bg-gray_901 font-semibold leading-lh lg:mb-[23px] lg:mx-[88px] lg:px-[27px] lg:py-[19px] lg:text-fs11 mb-[30px] mx-[114px] px-[35px] py-[25px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase w-[15%] xl:mb-[26px] xl:mx-[101px] xl:px-[31px] xl:py-[22px] xl:text-fs13">{`Contact Us`}</Text>
              </Column>
              <Row className="absolute bg-white_A700 items-center justify-evenly px-[0] self-stretch top-[0] w-[100%]">
                <Image
                  src="img_logo141.png"
                  className="2xl:h-[113px] 3xl:h-[135px] 3xl:mb-[37px] 3xl:mt-[36px] h-[112px] lg:h-[88px] lg:mb-[24px] lg:mt-[23px] mb-[31px] mt-[30px] object-contain w-[14%] xl:h-[100px] xl:mb-[27px] xl:mt-[26px]"
                  alt="logo141"
                />
                <Image
                  src="img_logo161.png"
                  className="2xl:h-[113px] 3xl:h-[135px] 3xl:mb-[37px] 3xl:mt-[36px] h-[112px] lg:h-[88px] lg:mb-[24px] lg:mt-[23px] mb-[31px] mt-[30px] object-contain w-[14%] xl:h-[100px] xl:mb-[27px] xl:mt-[26px]"
                  alt="logo161"
                />
                <Image
                  src="img_logo251.png"
                  className="2xl:h-[114px] 3xl:h-[136px] 3xl:my-[36px] h-[113px] lg:h-[88px] lg:my-[23px] my-[30px] object-contain w-[14%] xl:h-[101px] xl:my-[26px]"
                  alt="logo251"
                />
                <Image
                  src="img_logo261.png"
                  className="2xl:h-[113px] 3xl:h-[135px] 3xl:mb-[37px] 3xl:mt-[36px] h-[112px] lg:h-[88px] lg:mb-[24px] lg:mt-[23px] mb-[31px] mt-[30px] object-contain w-[14%] xl:h-[100px] xl:mb-[27px] xl:mt-[26px]"
                  alt="logo261"
                />
              </Row>
            </Stack>
            <Column className="3xl:bottom-[36px] absolute bottom-[30px] inset-x-[0] items-center justify-start lg:bottom-[23px] mx-[auto] w-[93%] xl:bottom-[26px]">
              <Row className="justify-evenly px-[0] self-stretch w-[100%]">
                <Column className="3xl:mb-[148px] font-poppins justify-start lg:mb-[96px] mb-[124px] w-[32%] xl:mb-[110px]">
                  <Text className="2xl:tracking-ls1 3xl:text-fs30 3xl:tracking-ls2 font-black lg:text-fs19 lg:tracking-ls1 self-stretch text-fs25 text-left text-white_A700 tracking-ls17500000000000002 uppercase xl:text-fs22 xl:tracking-ls1">{`Information`}</Text>
                  <Text className="3xl:mt-[18px] 3xl:text-fs20 font-normal leading-lh lg:mt-[11px] lg:text-fs13 mt-[15px] self-stretch text-fs17 text-left text-white_A700 w-[100%] xl:mt-[13px] xl:text-fs15">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.`}</Text>
                  <Image
                    src="img_socialicon.svg"
                    className="2xl:h-[36px] 3xl:h-[43px] 3xl:mr-[12px] 3xl:mt-[36px] h-[35px] lg:h-[28px] lg:mr-[7px] lg:mt-[23px] mr-[10px] mt-[30px] object-contain w-[36%] xl:h-[32px] xl:mr-[8px] xl:mt-[26px]"
                    alt="SocialIcon"
                  />
                </Column>
                <Column className="3xl:mb-[141px] font-poppins justify-start lg:mb-[91px] mb-[118px] w-[23%] xl:mb-[104px]">
                  <Text className="2xl:tracking-ls1 3xl:text-fs30 3xl:tracking-ls2 font-black lg:text-fs19 lg:tracking-ls1 self-stretch text-fs25 text-left text-white_A700 tracking-ls17500000000000002 uppercase xl:text-fs22 xl:tracking-ls1">{`Navigation`}</Text>
                  <Column className="3xl:mt-[18px] items-center lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                    <Column className="items-center justify-start self-stretch w-[100%]">
                      <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                        <Image
                          src="img__3.svg"
                          className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[3%] xl:h-[21px] xl:mb-[1px]"
                          alt=""
                        />
                        <Text className="3xl:ml-[12px] 3xl:text-fs20 font-normal lg:ml-[7px] lg:text-fs13 ml-[10px] text-fs17 text-left text-white_A700 xl:ml-[8px] xl:text-fs15">{`Homepage`}</Text>
                      </Row>
                      <Row className="3xl:mt-[18px] font-poppins items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                        <Image
                          src="img__3.svg"
                          className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[3%] xl:h-[21px] xl:mb-[1px]"
                          alt=""
                        />
                        <Text className="3xl:ml-[12px] 3xl:text-fs20 font-normal lg:ml-[7px] lg:text-fs13 ml-[10px] text-fs17 text-left text-white_A700 xl:ml-[8px] xl:text-fs15">{`About Us`}</Text>
                      </Row>
                      <Row className="3xl:mt-[18px] font-poppins items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                        <Image
                          src="img__3.svg"
                          className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[3%] xl:h-[21px] xl:mb-[1px]"
                          alt=""
                        />
                        <Text className="3xl:ml-[12px] 3xl:text-fs20 font-normal lg:ml-[7px] lg:text-fs13 ml-[10px] text-fs17 text-left text-white_A700 xl:ml-[8px] xl:text-fs15">{`Services`}</Text>
                      </Row>
                      <Row className="3xl:mt-[18px] font-poppins items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                        <Image
                          src="img__3.svg"
                          className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[3%] xl:h-[21px] xl:mb-[1px]"
                          alt=""
                        />
                        <Text className="3xl:ml-[12px] 3xl:text-fs20 font-normal lg:ml-[7px] lg:text-fs13 ml-[10px] text-fs17 text-left text-white_A700 xl:ml-[8px] xl:text-fs15">{`Project`}</Text>
                      </Row>
                    </Column>
                  </Column>
                </Column>
                <Column className="font-poppins justify-start w-[23%]">
                  <Text className="2xl:tracking-ls1 3xl:text-fs30 3xl:tracking-ls2 font-black lg:text-fs19 lg:tracking-ls1 self-stretch text-fs25 text-left text-white_A700 tracking-ls17500000000000002 uppercase xl:text-fs22 xl:tracking-ls1">{`Contact Us`}</Text>
                  <Column className="3xl:mt-[37px] items-center lg:mt-[24px] mt-[31px] self-stretch w-[100%] xl:mt-[27px]">
                    <Row className="font-poppins items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img__4.svg"
                        className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[5%] xl:h-[21px] xl:mb-[1px]"
                        alt=""
                      />
                      <Text className="3xl:ml-[18px] 3xl:text-fs20 font-normal lg:ml-[11px] lg:text-fs13 ml-[15px] mr-[1px] text-fs17 text-left text-white_A700 xl:ml-[13px] xl:text-fs15">{`Lumbung Hidup East Java`}</Text>
                    </Row>
                    <Row className="3xl:mt-[18px] font-poppins items-center justify-start lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:mt-[13px]">
                      <Image
                        src="img__5.svg"
                        className="2xl:h-[24px] 3xl:h-[28px] h-[23px] lg:h-[18px] lg:mb-[1px] mb-[2px] mt-[1px] object-contain w-[6%] xl:h-[21px] xl:mb-[1px]"
                        alt=""
                      />
                      <Text className="3xl:ml-[12px] 3xl:text-fs20 font-normal lg:ml-[7px] lg:text-fs13 ml-[10px] mr-[1px] text-fs17 text-left text-white_A700 xl:ml-[8px] xl:text-fs15">{`Hello@Homco.com`}</Text>
                    </Row>
                    <Column className="3xl:mt-[27px] font-poppins justify-start lg:mt-[17px] mt-[23px] w-[100%] xl:mt-[20px]">
                      <Input
                        className="2xl:pb-[30px] 2xl:pt-[24px] 3xl:pb-[36px] 3xl:pl-[18px] 3xl:pt-[29px] 3xl:text-fs20 bg-transparent border-0 border-b-[5px] border-gray_603 border-solid font-normal lg:pb-[23px] lg:pl-[11px] lg:pt-[19px] lg:text-fs13 pb-[30.46px] pl-[15px] placeholder:bg-transparent placeholder:text-white_A700 pt-[24.46px] self-stretch text-fs17 text-left text-white_A700 w-[100%] xl:pb-[27px] xl:pl-[13px] xl:pt-[21px] xl:text-fs15"
                        name="Group102"
                        placeholder={`Email Address`}
                      ></Input>
                      <Button className="2xl:py-[26px] 3xl:mr-[12px] 3xl:mt-[12px] 3xl:px-[42px] 3xl:py-[31px] 3xl:text-fs18 bg-gray_603 border-bw font-semibold lg:mr-[7px] lg:mt-[7px] lg:px-[27px] lg:py-[20px] lg:text-fs11 mr-[10px] mt-[10px] px-[35px] py-[26.29px] text-center text-fs15 text-white_A700 tracking-ls1 uppercase w-[63%] xl:mr-[8px] xl:mt-[8px] xl:px-[31px] xl:py-[23px] xl:text-fs13">{`Subscribe`}</Button>
                    </Column>
                  </Column>
                </Column>
              </Row>
              <Line className="3xl:mt-[72px] bg-white_A700 h-[1px] lg:mt-[46px] mt-[60px] w-[100%] xl:mt-[53px]" />
              <Row className="3xl:mt-[34px] font-poppins items-center justify-evenly lg:mt-[22px] mt-[29px] px-[0] self-stretch w-[100%] xl:mt-[25px]">
                <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-fs15 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs13">{`Allright Reserved - Homco Interior`}</Text>
                <Row className="font-poppins items-center justify-between px-[0] w-[35%]">
                  <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-fs15 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs13">{`DIsclaimer`}</Text>
                  <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-fs15 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs13">{`Privacy Policy`}</Text>
                  <Text className="3xl:text-fs18 font-semibold lg:text-fs11 text-fs15 text-left text-white_A700 tracking-ls1 uppercase xl:text-fs13">{`Term Of Use`}</Text>
                </Row>
              </Row>
            </Column>
          </Stack>
        </div>
      </Stack>
    </Column>
  );
};

export default Page1;
