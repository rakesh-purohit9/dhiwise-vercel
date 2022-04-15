import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { Button } from "components/Button";

const ContactUs6Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[628px] 3xl:h-[753px] h-[627px] lg:h-[488px] self-stretch w-[100%] xl:h-[558px]">
          <Stack className="2xl:h-[628px] 3xl:h-[753px] absolute h-[627px] inset-[0] lg:h-[488px] self-stretch w-[100%] xl:h-[558px]">
            <Image
              src="img_rectangle70.svg"
              className="2xl:h-[628px] 3xl:h-[753px] absolute h-[627px] inset-[0] lg:h-[488px] object-cover self-stretch w-[100%] xl:h-[558px]"
              alt="Rectangle70"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="font-lato items-center justify-start self-stretch w-[100%]">
                <Image
                  src="img_frame105.svg"
                  className="2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[67px] 3xl:my-[44px] 3xl:w-[58px] h-[49px] lg:h-[39px] lg:ml-[43px] lg:my-[28px] lg:w-[38px] ml-[56px] my-[37px] object-contain w-[49px] xl:h-[44px] xl:ml-[49px] xl:my-[32px] xl:w-[43px]"
                  alt="Frame105"
                />
                <Text className="3xl:mb-[54px] 3xl:ml-[28px] 3xl:mt-[52px] 3xl:text-fs33 font-bold lg:mb-[35px] lg:ml-[18px] lg:mt-[34px] lg:text-fs21 mb-[45px] ml-[24px] mt-[44px] text-black_900 text-fs28 text-left xl:mb-[40px] xl:ml-[21px] xl:mt-[39px] xl:text-fs24">{`YOURLOGO`}</Text>
                <Column className="3xl:mb-[34px] 3xl:ml-[246px] 3xl:mt-[48px] justify-start lg:mb-[22px] lg:ml-[159px] lg:mt-[31px] mb-[29px] ml-[205px] mt-[40px] w-[47%] xl:mb-[25px] xl:ml-[182px] xl:mt-[35px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="3xl:ml-[9px] font-manrope items-center justify-between lg:ml-[6px] ml-[8px] px-[0] w-[99%] xl:ml-[7px]">
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-extrabold lg:text-fs14 lg:tracking-ls2 text-center text-fs18 text-teal_900 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Home`}</Text>
                      <Row className="items-center justify-center w-[10%]">
                        <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Pages`}</Text>
                        <Image
                          src="img_chevrondown_11.svg"
                          className="2xl:h-[16px] 2xl:my-[8px] 3xl:h-[19px] 3xl:ml-[14px] 3xl:my-[10px] h-[15px] lg:h-[12px] lg:ml-[9px] lg:my-[6px] ml-[12px] my-[8.5px] object-contain w-[14%] xl:h-[14px] xl:ml-[10px] xl:my-[7px]"
                          alt="chevrondown"
                        />
                      </Row>
                      <Row className="items-center justify-center w-[14%]">
                        <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Services`}</Text>
                        <Image
                          src="img_chevrondown_12.svg"
                          className="2xl:h-[16px] 2xl:my-[8px] 3xl:h-[19px] 3xl:ml-[14px] 3xl:my-[10px] h-[15px] lg:h-[12px] lg:ml-[9px] lg:my-[6px] ml-[12px] my-[8.5px] object-contain w-[10%] xl:h-[14px] xl:ml-[10px] xl:my-[7px]"
                          alt="chevrondown"
                        />
                      </Row>
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Projects`}</Text>
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Blog`}</Text>
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Contact Us`}</Text>
                      <Text className="2xl:tracking-ls2 3xl:text-fs21 3xl:tracking-ls3 font-normal lg:text-fs14 lg:tracking-ls2 text-black_900 text-center text-fs18 tracking-ls288 uppercase xl:text-fs16 xl:tracking-ls2">{`Career`}</Text>
                    </Row>
                  </Column>
                  <Line className="3xl:mr-[12px] 3xl:mt-[26px] bg-teal_900 h-[3px] lg:mr-[7px] lg:mt-[17px] mr-[10px] mt-[22px] w-[9%] xl:mr-[8px] xl:mt-[19px]" />
                </Column>
                <Column className="2xl:ml-[405px] 3xl:mb-[56px] 3xl:ml-[485px] 3xl:mr-[81px] 3xl:mt-[55px] items-center justify-start lg:mb-[36px] lg:ml-[314px] lg:mr-[52px] lg:mt-[35px] mb-[47px] ml-[404.75px] mr-[68px] mt-[46px] w-[2%] xl:mb-[41px] xl:ml-[360px] xl:mr-[60px] xl:mt-[40px]">
                  <Line className="bg-black_900 h-[4px] self-stretch w-[100%]" />
                  <Line className="3xl:mt-[13px] bg-black_900 h-[4px] lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]" />
                  <Line className="3xl:mt-[13px] bg-black_900 h-[4px] lg:mt-[8px] mt-[11px] self-stretch w-[100%] xl:mt-[9px]" />
                </Column>
              </Row>
            </div>
          </Stack>
          <Column className="3xl:bottom-[234px] absolute bottom-[195px] font-playfairdisplay inset-x-[0] items-center justify-start lg:bottom-[151px] mx-[auto] w-[14%] xl:bottom-[173px]">
            <Text className="3xl:text-fs66 font-black font-playfairdisplay lg:text-fs42 mx-[auto] self-stretch text-black_900 text-center text-fs55 xl:text-fs48">{`Contact Us`}</Text>
            <Text className="3xl:mt-[42px] 3xl:text-fs21 font-manrope font-normal lg:mt-[27px] lg:text-fs14 mt-[35px] mx-[auto] text-center text-fs18 text-gray_600 tracking-ls1 xl:mt-[31px] xl:text-fs16">{`Home  /  Contact Us`}</Text>
          </Column>
        </Stack>
        <Row className="3xl:mt-[259px] items-end justify-center lg:mt-[168px] mt-[216px] self-stretch w-[100%] xl:mt-[192px]">
          <Column className="3xl:ml-[450px] font-playfairdisplay justify-start lg:ml-[291px] ml-[375px] w-[30%] xl:ml-[333px]">
            <Line className="3xl:mr-[12px] bg-teal_500 h-[10px] lg:mr-[7px] mr-[10px] w-[12%] xl:mr-[8px]" />
            <Text className="3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs57 font-black font-playfairdisplay lg:mr-[7px] lg:mt-[15px] lg:text-fs37 mr-[10px] mt-[20px] text-black_900 text-center text-fs48 xl:mr-[8px] xl:mt-[17px] xl:text-fs42">{`Write Us a Message`}</Text>
            <Text className="3xl:mt-[36px] 3xl:text-fs24 font-manrope font-normal lg:mt-[23px] lg:text-fs15 mt-[30px] self-stretch text-fs20 text-gray_600 text-left tracking-ls1 w-[100%] xl:mt-[26px] xl:text-fs17">{`Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor.`}</Text>
            <div className="3xl:mt-[120px] bg-transparent border-0 lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px] input-wrap">
              <Image
                src="img_useralt_2.svg"
                className="absolute left-[36px] bg-transparent border-0 lg:left-[28px] lg:inset-y-[35px] xl:left-[32px] xl:inset-y-[40px] 3xl:left-[43px] 3xl:inset-y-[54px] inset-y-[45px]"
                alt="user-alt"
              />
              <Input
                className="3xl:pl-[91px] 3xl:py-[54px] 3xl:text-fs24 bg-gray_101 border-0 font-manrope font-normal lg:pl-[59px] lg:py-[35px] lg:text-fs15 pl-[76px] placeholder:bg-transparent placeholder:text-black_900 py-[45px] rounded-radius20 text-black_900 text-fs20 text-left tracking-ls1 w-[100%] xl:pl-[67px] xl:py-[40px] xl:text-fs17"
                name="Group576"
                placeholder={`Paula Ramsey`}
              ></Input>
            </div>
            <div className="3xl:mt-[36px] bg-transparent border-0 lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px] input-wrap">
              <Image
                src="img_addresscard.svg"
                className="absolute left-[36px] bg-transparent border-0 lg:left-[28px] lg:inset-y-[35px] xl:left-[32px] xl:inset-y-[40px] 3xl:left-[43px] 3xl:inset-y-[54px] inset-y-[45px]"
                alt="address-card"
              />
              <Input
                className="2xl:pl-[79px] 3xl:pl-[95px] 3xl:py-[54px] 3xl:text-fs24 bg-gray_101 border-0 font-manrope font-normal lg:pl-[62px] lg:py-[35px] lg:text-fs15 pl-[79.75px] placeholder:bg-transparent placeholder:text-gray_600 py-[45px] rounded-radius20 text-fs20 text-gray_600 text-left tracking-ls1 w-[100%] xl:pl-[70px] xl:py-[40px] xl:text-fs17"
                name="Group577"
                placeholder={`Subject`}
              ></Input>
            </div>
            <Column className="3xl:mt-[36px] font-lato items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
              <Column className="bg-gray_101 font-lato justify-start rounded-radius20 self-stretch w-[100%]">
                <Text className="3xl:mt-[46px] 3xl:mx-[46px] 3xl:text-fs28 font-normal lg:mt-[30px] lg:mx-[30px] lg:text-fs18 mt-[39px] mx-[39px] text-fs24 text-gray_600 text-left xl:mt-[34px] xl:mx-[34px] xl:text-fs21">{`Enter Your Messages`}</Text>
                <Column className="2xl:mb-[58px] 2xl:mt-[59px] 3xl:mb-[70px] 3xl:mt-[71px] items-end lg:mb-[45px] lg:mt-[46px] mb-[58.870117px] mt-[59.68994px] self-stretch w-[100%] xl:mb-[52px] xl:mt-[53px]">
                  <Image
                    src="img_griphorizontal_4.svg"
                    className="2xl:h-[30px] 2xl:mx-[38px] 3xl:h-[36px] 3xl:mx-[46px] h-[29.44px] lg:h-[23px] lg:mx-[30px] mx-[38.75px] object-contain w-[5%] xl:h-[27px] xl:mx-[34px]"
                    alt="griphorizontal"
                  />
                </Column>
              </Column>
              <Button className="2xl:py-[31px] 2xl:tracking-ls2 3xl:mt-[72px] 3xl:px-[42px] 3xl:py-[37px] 3xl:text-fs21 3xl:tracking-ls3 bg-teal_500 border-bw font-extrabold font-manrope lg:mt-[46px] lg:px-[27px] lg:py-[24px] lg:text-fs14 lg:tracking-ls2 mt-[60px] px-[35px] py-[31.2px] rounded-radius40 self-stretch shadow-bs7 text-center text-fs18 text-white_A700 tracking-ls288 uppercase w-[100%] xl:mt-[53px] xl:px-[31px] xl:py-[27px] xl:text-fs16 xl:tracking-ls2">{`send`}</Button>
            </Column>
          </Column>
          <Stack className="2xl:h-[793px] 3xl:h-[951px] 3xl:ml-[36px] 3xl:mr-[450px] 3xl:mt-[156px] h-[792px] lg:h-[616px] lg:ml-[23px] lg:mr-[291px] lg:mt-[101px] ml-[30px] mr-[375px] mt-[130px] rounded-radius20 w-[30%] xl:h-[705px] xl:ml-[26px] xl:mr-[333px] xl:mt-[115px]">
            <Image
              src="img_maps_4.png"
              className="2xl:h-[793px] 3xl:h-[951px] absolute h-[792px] inset-[0] lg:h-[616px] object-cover rounded-radius20 self-stretch w-[100%] xl:h-[705px]"
              alt="maps"
            />
            <Stack className="2xl:h-[211px] 3xl:h-[253px] 3xl:right-[241px] absolute h-[210px] inset-y-[0] lg:h-[164px] lg:right-[156px] my-[auto] right-[201px] w-[23%] xl:h-[187px] xl:right-[178px]">
              <Stack className="2xl:h-[211px] 3xl:h-[253px] absolute h-[210px] inset-[0] lg:h-[164px] self-stretch w-[100%] xl:h-[187px]">
                <Stack className="2xl:h-[211px] 3xl:h-[253px] absolute h-[210px] inset-[0] lg:h-[164px] self-stretch w-[100%] xl:h-[187px]">
                  <Image
                    src="img_vector5_1.svg"
                    className="2xl:h-[162px] 2xl:top-[15px] 3xl:h-[194px] 3xl:top-[18px] absolute h-[161px] lg:h-[126px] lg:top-[12px] object-contain right-[0] rounded-radius20 top-[15.5px] w-[75%] xl:h-[144px] xl:top-[13px]"
                    alt="Vector5"
                  />
                  <div className="2xl:h-[34px] 3xl:h-[40px] 3xl:right-[31px] 3xl:w-[39px] absolute bg-teal_500_71 h-[33px] lg:h-[26px] lg:right-[20px] lg:w-[25px] opacity-op25 right-[26px] rounded-radius50 top-[0] w-[33px] xl:h-[30px] xl:right-[23px] xl:w-[29px]"></div>
                  <Image
                    src="img_oval5.svg"
                    className="2xl:h-[41px] 3xl:h-[49px] absolute bottom-[0] h-[40px] left-[0] lg:h-[32px] object-contain rounded-radius50 w-[31%] xl:h-[36px]"
                    alt="Oval5"
                  />
                </Stack>
                <Image
                  src="img_navigation_1.svg"
                  className="2xl:h-[13px] 3xl:bottom-[16px] 3xl:h-[15px] 3xl:left-[16px] absolute bottom-[14px] h-[12px] left-[14px] lg:bottom-[10px] lg:h-[10px] lg:left-[10px] object-contain rounded-radius20 w-[9%] xl:bottom-[12px] xl:h-[11px] xl:left-[12px]"
                  alt="navigation"
                />
              </Stack>
              <div className="2xl:h-[16px] 3xl:h-[19px] 3xl:right-[42px] 3xl:top-[10px] 3xl:w-[18px] absolute bg-teal_500 h-[15px] lg:h-[12px] lg:right-[27px] lg:top-[7px] lg:w-[11px] right-[35px] rounded-radius50 top-[9px] w-[15px] xl:h-[14px] xl:right-[31px] xl:top-[8px] xl:w-[13px]"></div>
            </Stack>
          </Stack>
        </Row>
        <div className="3xl:mt-[316px] lg:mt-[205px] mt-[264px] self-stretch w-[100%] xl:mt-[234px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <Line className="bg-black_900 h-[1px] mx-[auto] w-[61%]" />
            <Column className="3xl:mt-[166px] bg-white_A700 items-center justify-start lg:mt-[108px] mt-[139px] self-stretch w-[100%] xl:mt-[123px]">
              <Row className="3xl:mt-[78px] justify-evenly lg:mt-[50px] mt-[65px] px-[0] self-stretch w-[100%] xl:mt-[57px]">
                <Column className="3xl:mb-[104px] font-manrope justify-start lg:mb-[67px] mb-[87px] w-[14%] xl:mb-[77px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 ml-[1px] mr-[10px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`About Us`}</Text>
                  <Text className="3xl:mt-[43px] 3xl:text-fs21 font-normal lg:mt-[28px] lg:text-fs14 mt-[36px] text-fs18 text-gray_600 text-left tracking-ls1 w-[100%] xl:mt-[32px] xl:text-fs16">{`Lorem ipsum dolor sit amet, consectet ur adipisicing elit, incididunt ut labore.`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[45px] font-manrope items-center justify-start lg:mr-[7px] lg:mt-[29px] mr-[10px] mt-[38px] rounded-radius10 w-[87%] xl:mr-[8px] xl:mt-[33px]">
                    <Button className="2xl:py-[31px] 2xl:tracking-ls2 3xl:px-[42px] 3xl:py-[37px] 3xl:text-fs21 3xl:tracking-ls3 bg-white_A700 border-bw3 border-solid border-teal_500 font-normal lg:px-[27px] lg:py-[24px] lg:text-fs14 lg:tracking-ls2 px-[35px] py-[31.2px] rounded-radius40 self-stretch shadow-bs7 text-center text-fs18 text-teal_900 tracking-ls288 uppercase w-[100%] xl:px-[31px] xl:py-[27px] xl:text-fs16 xl:tracking-ls2">{`Let’s Talk`}</Button>
                  </Column>
                </Column>
                <Column className="font-manrope justify-start w-[14%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:text-fs18 mr-[10px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:text-fs21">{`Contact Us`}</Text>
                  <Column className="3xl:mt-[43px] items-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                    <Column className="font-manrope justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 w-[100%] xl:text-fs16">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`deanna.curtis@example.com`}</Text>
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`(671) 555-0110`}</Text>
                    </Column>
                  </Column>
                  <Text className="3xl:mr-[12px] 3xl:mt-[48px] 3xl:text-fs28 font-bold lg:mr-[7px] lg:mt-[31px] lg:text-fs18 mr-[10px] mt-[40px] text-black_900 text-fs24 text-left xl:mr-[8px] xl:mt-[35px] xl:text-fs21">{`Opening Hours`}</Text>
                  <Column className="3xl:mt-[43px] items-center lg:mt-[28px] mt-[36px] self-stretch w-[100%] xl:mt-[32px]">
                    <Column className="font-manrope justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Mon - Sat 8:00 - 17:30,`}</Text>
                      <Text className="3xl:text-fs21 font-normal lg:text-fs14 self-stretch text-fs18 text-gray_600 text-left tracking-ls1 xl:text-fs16">{`Sunday - CLOSED`}</Text>
                    </Column>
                  </Column>
                </Column>
                <Column className="3xl:mb-[145px] font-manrope justify-start lg:mb-[94px] mb-[121px] w-[8%] xl:mb-[107px]">
                  <Text className="3xl:text-fs28 font-bold lg:text-fs18 self-stretch text-black_900 text-fs24 text-left xl:text-fs21">{`Userfull Links`}</Text>
                  <Column className="3xl:mr-[12px] 3xl:mt-[43px] justify-start lg:mr-[7px] lg:mt-[28px] mr-[10px] mt-[36px] w-[86%] xl:mr-[8px] xl:mt-[32px]">
                    <Row className="font-manrope items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_chevronright_6.svg"
                        className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[38px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[24px] lg:text-fs14 ml-[15px] mr-[32px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[28px] xl:text-fs16">{`About Us`}</Text>
                    </Row>
                    <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_6.svg"
                        className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[36px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[23px] lg:text-fs14 ml-[15px] mr-[30px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[26px] xl:text-fs16">{`Our Team`}</Text>
                    </Row>
                    <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Row className="font-manrope items-center justify-start self-stretch w-[100%]">
                        <Image
                          src="img_chevronright_6.svg"
                          className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                          alt="chevronright"
                        />
                        <Text className="3xl:ml-[18px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:text-fs14 ml-[15px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:text-fs16">{`Pricing Plans`}</Text>
                      </Row>
                    </Column>
                    <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_6.svg"
                        className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[88px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[57px] lg:text-fs14 ml-[15px] mr-[74px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[65px] xl:text-fs16">{`Blog`}</Text>
                    </Row>
                    <Row className="3xl:mt-[6px] font-manrope items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                      <Image
                        src="img_chevronright_6.svg"
                        className="2xl:h-[11px] 3xl:h-[13px] 3xl:my-[13px] h-[10px] lg:h-[8px] lg:my-[8px] my-[11px] object-contain w-[5%] xl:h-[9px] xl:my-[9px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:mr-[37px] 3xl:text-fs21 font-normal lg:ml-[11px] lg:mr-[24px] lg:text-fs14 ml-[15px] mr-[31px] text-black_900 text-fs18 text-left tracking-ls1 xl:ml-[13px] xl:mr-[27px] xl:text-fs16">{`404 Page`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Stack className="2xl:h-[371px] 3xl:h-[445px] font-manrope h-[370px] lg:h-[288px] w-[14%] xl:h-[330px]">
                  <Text className="3xl:text-fs28 absolute font-bold left-[0] lg:text-fs18 text-black_900 text-fs24 text-left top-[0] xl:text-fs21">{`Keep Connect`}</Text>
                  <div className="2xl:h-[364px] 3xl:h-[436px] 3xl:top-[8px] absolute bg-gray_101 bottom-[0] h-[363px] inset-x-[0] lg:h-[283px] lg:top-[5px] rounded-radius20 self-stretch top-[7px] w-[100%] xl:h-[323px] xl:top-[6px]"></div>
                </Stack>
              </Row>
              <Row className="3xl:mb-[99px] 3xl:mt-[199px] font-manrope items-center justify-evenly lg:mb-[64px] lg:mt-[129px] mb-[83px] mt-[166px] px-[0] self-stretch w-[100%] xl:mb-[73px] xl:mt-[147px]">
                <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-black_900 text-fs18 text-left tracking-ls1 xl:text-fs16">{`Copyright © 2020. All right reserved`}</Text>
                <Row className="font-manrope items-center justify-between px-[0] w-[34%]">
                  <Text className="3xl:text-fs21 font-normal lg:text-fs14 text-black_900 text-fs18 text-left tracking-ls1 xl:text-fs16">{`Mobile Apps:`}</Text>
                  <Image
                    src="img_rsssquare_5.svg"
                    className="2xl:h-[26px] 2xl:my-[3px] 3xl:h-[31px] 3xl:my-[4px] h-[25px] lg:h-[20px] lg:my-[2px] my-[3.5px] object-contain w-[3%] xl:h-[23px] xl:my-[3px]"
                    alt="rsssquare"
                  />
                  <Image
                    src="img_blog_5.svg"
                    className="2xl:h-[26px] 2xl:mr-[418px] 2xl:my-[3px] 3xl:h-[31px] 3xl:mr-[502px] 3xl:my-[4px] 3xl:w-[30px] h-[25px] lg:h-[20px] lg:mr-[325px] lg:my-[2px] lg:w-[19px] mr-[418.12px] my-[3.5px] object-contain w-[25px] xl:h-[23px] xl:mr-[371px] xl:my-[3px] xl:w-[22px]"
                    alt="blog"
                  />
                </Row>
              </Row>
            </Column>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default ContactUs6Page;
