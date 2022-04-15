import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { List } from "components/List";
import { Line } from "components/Line";
import { Button } from "components/Button";
import { Input } from "components/Input";

const Travel1Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[801px] 3xl:h-[961px] h-[800px] lg:h-[623px] self-stretch w-[100%] xl:h-[712px]">
          <Stack className="2xl:h-[801px] 3xl:h-[961px] absolute h-[800px] inset-[0] lg:h-[623px] self-stretch w-[100%] xl:h-[712px]">
            <Image
              src="img_insertimagehe_17.svg"
              className="2xl:h-[801px] 3xl:h-[961px] absolute h-[800px] inset-[0] lg:h-[623px] object-cover self-stretch w-[100%] xl:h-[712px]"
              alt="InsertImageHe"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                <Image
                  src="img_logomainlogo.png"
                  className="2xl:h-[30px] 2xl:mb-[25px] 3xl:h-[36px] 3xl:ml-[45px] 3xl:my-[30px] h-[29.7px] lg:h-[24px] lg:ml-[29px] lg:my-[19px] mb-[25.3px] ml-[38px] mt-[25px] object-contain w-[10%] xl:h-[27px] xl:ml-[33px] xl:my-[22px]"
                  alt="LogoMainLogo"
                />
                <Row className="3xl:mr-[38px] 3xl:my-[24px] font-ubuntu items-center justify-between lg:mr-[24px] lg:my-[15px] mr-[32px] my-[20px] px-[0] w-[47%] xl:mr-[28px] xl:my-[17px]">
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`Home`}</Text>
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`About`}</Text>
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`features`}</Text>
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`News`}</Text>
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`Contact`}</Text>
                  <Text className="3xl:my-[7px] 3xl:text-fs19 font-normal lg:my-[4px] lg:text-fs12 my-[6px] text-fs16 text-left text-white_A700 xl:my-[5px] xl:text-fs14">{`Login`}</Text>
                  <Stack className="2xl:h-[41px] 3xl:h-[49px] font-ubuntu h-[40px] lg:h-[32px] w-[15%] xl:h-[36px]">
                    <Image
                      src="img_background_24.svg"
                      className="2xl:h-[41px] 3xl:h-[49px] absolute h-[40px] inset-[0] lg:h-[32px] object-cover self-stretch w-[100%] xl:h-[36px]"
                      alt="Background"
                    />
                    <Text className="3xl:text-fs16 3xl:top-[10px] absolute font-medium inset-x-[0] lg:text-fs10 lg:top-[7px] mx-[auto] text-center text-fs14 text-white_A700 top-[9px] w-[max-content] xl:text-fs12 xl:top-[8px]">{`Sign Up`}</Text>
                  </Stack>
                </Row>
              </Row>
            </div>
          </Stack>
          <Column className="3xl:bottom-[36px] 3xl:left-[178px] absolute bottom-[30px] font-ubuntu justify-start left-[149px] lg:bottom-[23px] lg:left-[115px] w-[74%] xl:bottom-[26px] xl:left-[132px]">
            <Column className="items-center self-stretch w-[100%]">
              <Row className="font-playfairdisplay justify-start self-stretch w-[100%]">
                <Text className="2xl:leading-lh72 3xl:leading-lh86 3xl:mb-[26px] 3xl:text-fs76 font-bold font-playfairdisplay leading-lh7200 lg:leading-lh56 lg:mb-[17px] lg:text-fs49 mb-[22px] text-fs64 text-left text-white_A700 tracking-ls1 w-[52%] xl:leading-lh64 xl:mb-[19px] xl:text-fs56">{`let's have a relaxing vacation with us!`}</Text>
                <Image
                  src="img_button_6.svg"
                  className="2xl:h-[65px] 3xl:h-[77px] 3xl:ml-[367px] 3xl:mt-[208px] 3xl:w-[76px] h-[64px] lg:h-[50px] lg:ml-[238px] lg:mt-[135px] lg:w-[49px] ml-[306px] mt-[174px] object-contain w-[64px] xl:h-[57px] xl:ml-[272px] xl:mt-[154px] xl:w-[56px]"
                  alt="Button"
                />
                <Text className="3xl:mb-[16px] 3xl:ml-[24px] 3xl:mt-[225px] 3xl:text-fs24 font-normal font-ubuntu lg:mb-[10px] lg:ml-[15px] lg:mt-[146px] lg:text-fs15 mb-[14px] ml-[20px] mt-[188px] text-fs20 text-left text-white_A700 xl:mb-[12px] xl:ml-[17px] xl:mt-[167px] xl:text-fs17">{`Watch Video`}</Text>
              </Row>
            </Column>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[25px] 3xl:text-fs24 font-normal leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[16px] lg:text-fs15 mr-[10px] mt-[21px] text-fs20 text-left text-white_A700 w-[50%] xl:leading-lh32 xl:mr-[8px] xl:mt-[18px] xl:text-fs17">{`A company engaged in travel that will make it easier for you when you want to vacation`}</Text>
            <Stack className="2xl:h-[111px] 3xl:h-[133px] 3xl:mr-[12px] 3xl:mt-[56px] h-[110px] lg:h-[86px] lg:mr-[7px] lg:mt-[36px] ml-[1px] mr-[10px] mt-[47px] w-[71%] xl:h-[98px] xl:mr-[8px] xl:mt-[41px]">
              <div className="2xl:h-[82px] 3xl:h-[98px] absolute bg-gray_900_51 bottom-[0] h-[81px] inset-x-[0] lg:h-[63px] mx-[auto] opacity-op1 rounded-radius6 w-[94%] xl:h-[73px]"></div>
              <Row className="absolute bg-white_A700 border border-black_900_19 border-dashed font-ubuntu items-center justify-between px-[0] rounded-radius12 self-stretch top-[0] w-[100%]">
                <Column className="3xl:ml-[28px] 3xl:my-[24px] justify-start lg:ml-[18px] lg:my-[15px] ml-[24px] my-[20px] w-[21%] xl:ml-[21px] xl:my-[17px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_900 text-fs16 text-left xl:text-fs14">{`Location`}</Text>
                      <Image
                        src="img_vector_12.svg"
                        className="2xl:h-[7px] 3xl:h-[8px] 3xl:ml-[9px] 3xl:mr-[88px] 3xl:mt-[10px] h-[6px] lg:h-[5px] lg:mb-[2px] lg:ml-[6px] lg:mr-[57px] lg:mt-[7px] mb-[3px] ml-[8px] mr-[74px] mt-[9px] object-contain w-[6%] xl:mb-[2px] xl:ml-[7px] xl:mr-[65px] xl:mt-[8px]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                  <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mr-[1px] mt-[16px] text-fs16 text-gray_503 text-left xl:mt-[14px] xl:text-fs14">{`Where you gonna go?`}</Text>
                </Column>
                <List
                  className="3xl:gap-[57px] 3xl:my-[24px] flex-wrap gap-[48px] grid grid-cols-2 lg:gap-[37px] lg:my-[15px] min-h-[auto] my-[20px] w-[42%] xl:gap-[42px] xl:my-[17px]"
                  orientation="horizontal"
                >
                  <Column className="font-ubuntu justify-start w-[100%]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_900 text-fs16 text-left xl:text-fs14">{`Date`}</Text>
                        <Image
                          src="img_vector_12.svg"
                          className="2xl:h-[7px] 3xl:h-[8px] 3xl:ml-[9px] 3xl:mr-[91px] 3xl:mt-[10px] h-[6px] lg:h-[5px] lg:mb-[2px] lg:ml-[6px] lg:mr-[59px] lg:mt-[7px] mb-[3px] ml-[8px] mr-[76px] mt-[9px] object-contain w-[8%] xl:mb-[2px] xl:ml-[7px] xl:mr-[67px] xl:mt-[8px]"
                          alt="Vector"
                        />
                      </Row>
                    </Column>
                    <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-gray_503 text-left xl:mt-[14px] xl:text-fs14">{`When will it start?`}</Text>
                  </Column>
                  <Column className="font-ubuntu justify-start w-[100%]">
                    <Column className="items-center self-stretch w-[100%]">
                      <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                        <Text className="3xl:text-fs19 font-medium lg:text-fs12 text-bluegray_900 text-fs16 text-left xl:text-fs14">{`People`}</Text>
                        <Image
                          src="img_vector_12.svg"
                          className="2xl:h-[7px] 3xl:h-[8px] 3xl:ml-[9px] 3xl:mr-[80px] 3xl:mt-[10px] h-[6px] lg:h-[5px] lg:mb-[2px] lg:ml-[6px] lg:mr-[52px] lg:mt-[7px] mb-[3px] ml-[8px] mr-[67px] mt-[9px] object-contain w-[7%] xl:mb-[2px] xl:ml-[7px] xl:mr-[59px] xl:mt-[8px]"
                          alt="Vector"
                        />
                      </Row>
                    </Column>
                    <Text className="3xl:mt-[19px] 3xl:text-fs19 font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-gray_503 text-left xl:mt-[14px] xl:text-fs14">{`How many people?`}</Text>
                  </Column>
                </List>
                <Text className="2xl:leading-lh26 2xl:pb-[15px] 3xl:leading-lh31 3xl:mr-[28px] 3xl:my-[21px] 3xl:pb-[18px] 3xl:pl-[30px] 3xl:pt-[19px] 3xl:text-fs19 bg-yellow_902 font-medium leading-lh2600 lg:leading-lh20 lg:mr-[18px] lg:my-[14px] lg:pb-[11px] lg:pl-[19px] lg:pt-[12px] lg:text-fs12 mr-[24px] my-[18px] pb-[15.200012px] pl-[25px] pt-[16px] rounded-radius12 text-fs16 text-left text-white_A700 w-[18%] xl:leading-lh23 xl:mr-[21px] xl:my-[16px] xl:pb-[13px] xl:pl-[22px] xl:pt-[14px] xl:text-fs14">{`Search Now`}</Text>
              </Row>
            </Stack>
            <Line className="3xl:mr-[12px] 3xl:mt-[100px] h-[4px] lg:mr-[7px] lg:mt-[65px] ml-[1px] mr-[10px] mt-[84px] w-[10%] xl:mr-[8px] xl:mt-[74px]" />
          </Column>
        </Stack>
        <Column className="items-center justify-start self-stretch w-[100%]">
          <Column className="bg-white_A700 font-playfairdisplay items-center justify-center self-stretch w-[100%]">
            <Stack className="2xl:h-[113px] 3xl:h-[135px] 3xl:mt-[115px] h-[112px] lg:h-[88px] lg:mt-[74px] mt-[96px] self-stretch w-[100%] xl:h-[100px] xl:mt-[85px]">
              <Stack className="2xl:h-[113px] 3xl:h-[135px] absolute font-playfairdisplay h-[112px] inset-[0] lg:h-[88px] self-stretch w-[100%] xl:h-[100px]">
                <div className="2xl:h-[113px] 3xl:h-[135px] absolute h-[112px] inset-[0] lg:h-[88px] self-stretch w-[100%] xl:h-[100px]"></div>
                <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:left-[180px] 3xl:text-fs48 absolute font-bold leading-lh5200 left-[150px] lg:leading-lh40 lg:left-[116px] lg:text-fs31 text-fs40 text-gray_911 text-left top-[0] tracking-ls1 w-[37%] xl:leading-lh46 xl:left-[133px] xl:text-fs35">
                  {
                    <>
                      {`Explore All Corners Of`}
                      <br />
                      {`The World with us`}
                    </>
                  }
                </Text>
              </Stack>
              <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:right-[297px] 3xl:text-fs24 absolute font-normal font-ubuntu h-[max-content] inset-y-[0] leading-lh3600 lg:leading-lh28 lg:right-[192px] lg:text-fs15 my-[auto] right-[248px] text-fs20 text-gray_911 text-left w-[32%] xl:leading-lh32 xl:right-[220px] xl:text-fs17">{`We always our customers happy by providing as many choices as possible top tourist destinations for you with advantage.`}</Text>
            </Stack>
            <Image
              src="img_insertimagehe_18.svg"
              className="2xl:h-[319px] 3xl:h-[382px] 3xl:mt-[76px] h-[318px] lg:h-[248px] lg:mt-[49px] mt-[64px] mx-[auto] object-contain w-[79%] xl:h-[283px] xl:mt-[56px]"
              alt="InsertImageHe"
            />
            <List
              className="3xl:gap-[36px] 3xl:mb-[116px] 3xl:mt-[66px] flex-wrap gap-[30px] grid grid-cols-3 lg:gap-[23px] lg:mb-[75px] lg:mt-[42px] mb-[97px] min-h-[auto] mt-[55px] mx-[auto] w-[79%] xl:gap-[26px] xl:mb-[86px] xl:mt-[48px]"
              orientation="horizontal"
            >
              <Row className="justify-between px-[0] w-[100%]">
                <Image
                  src="img_background_25.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[63px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[41px] lg:w-[62px] mb-[53px] mt-[1px] object-contain w-[80px] xl:h-[72px] xl:mb-[47px] xl:w-[71px]"
                  alt="Background"
                />
                <Column className="font-ubuntu justify-start w-[71%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-medium lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:text-fs17">{`Best Quality`}</Text>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[13px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[8px] lg:text-fs12 mt-[11px] self-stretch text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[9px] xl:text-fs14">{`It start with our fund and easy project questionnaire.`}</Text>
                  <Column className="3xl:mt-[20px] items-center lg:mt-[13px] mt-[17px] self-stretch w-[100%] xl:mt-[15px]">
                    <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:text-fs12 mb-[4px] ml-[1px] text-center text-fs16 text-gray_911 xl:mb-[3px] xl:text-fs14">{`Learn More`}</Text>
                      <Image
                        src="img_icon_39.svg"
                        className="2xl:h-[15px] 2xl:ml-[8px] 2xl:mr-[155px] 3xl:h-[17px] 3xl:ml-[10px] 3xl:mr-[186px] 3xl:mt-[8px] h-[14px] lg:h-[11px] lg:ml-[6px] lg:mr-[120px] lg:mt-[5px] mb-[1px] ml-[8.76001px] mr-[155.01999px] mt-[7px] object-contain w-[2%] xl:h-[13px] xl:ml-[7px] xl:mr-[137px] xl:mt-[6px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
              <Row className="justify-center w-[100%]">
                <Image
                  src="img_background_26.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[63px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[41px] lg:w-[62px] mb-[53px] mt-[1px] object-contain w-[80px] xl:h-[72px] xl:mb-[47px] xl:w-[71px]"
                  alt="Background"
                />
                <Column className="3xl:ml-[30px] font-ubuntu justify-start lg:ml-[19px] ml-[25px] w-[71%] xl:ml-[22px]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-medium lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:text-fs17">{`Excelent Trip`}</Text>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[13px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[8px] lg:text-fs12 mt-[11px] self-stretch text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[9px] xl:text-fs14">{`After Getting matched, you can consultation your travel`}</Text>
                  <Column className="3xl:mt-[20px] items-center lg:mt-[13px] mt-[17px] self-stretch w-[100%] xl:mt-[15px]">
                    <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:text-fs12 mb-[4px] ml-[1px] text-center text-fs16 text-gray_911 xl:mb-[3px] xl:text-fs14">{`Learn More`}</Text>
                      <Image
                        src="img_icon_39.svg"
                        className="2xl:h-[15px] 2xl:ml-[7px] 2xl:mr-[155px] 3xl:h-[17px] 3xl:ml-[9px] 3xl:mr-[186px] 3xl:mt-[8px] h-[14px] lg:h-[11px] lg:ml-[6px] lg:mr-[120px] lg:mt-[5px] mb-[1px] ml-[7.76001px] mr-[155.02002px] mt-[7px] object-contain w-[2%] xl:h-[13px] xl:ml-[6px] xl:mr-[137px] xl:mt-[6px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
              <Row className="justify-between px-[0] w-[100%]">
                <Image
                  src="img_background_27.svg"
                  className="2xl:h-[81px] 3xl:h-[97px] 3xl:mb-[63px] 3xl:w-[96px] h-[80px] lg:h-[63px] lg:mb-[41px] lg:w-[62px] mb-[53px] mt-[1px] object-contain w-[80px] xl:h-[72px] xl:mb-[47px] xl:w-[71px]"
                  alt="Background"
                />
                <Column className="font-ubuntu justify-start w-[71%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs24 font-medium lg:mr-[7px] lg:text-fs15 mr-[10px] text-fs20 text-gray_911 text-left xl:mr-[8px] xl:text-fs17">{`Guaranted Traveling`}</Text>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[13px] 3xl:text-fs19 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[8px] lg:text-fs12 mt-[11px] self-stretch text-fs16 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[9px] xl:text-fs14">
                    {
                      <>
                        {`Sometimes features require `}
                        <br />
                        {`a short description.`}
                      </>
                    }
                  </Text>
                  <Column className="3xl:mt-[20px] items-center lg:mt-[13px] mt-[17px] self-stretch w-[100%] xl:mt-[15px]">
                    <Row className="font-ubuntu items-end justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs19 font-medium lg:mb-[3px] lg:text-fs12 mb-[4px] ml-[1px] text-center text-fs16 text-gray_911 xl:mb-[3px] xl:text-fs14">{`Learn More`}</Text>
                      <Image
                        src="img_icon_39.svg"
                        className="2xl:h-[15px] 2xl:ml-[8px] 2xl:mr-[155px] 3xl:h-[17px] 3xl:ml-[10px] 3xl:mr-[186px] 3xl:mt-[8px] h-[14px] lg:h-[11px] lg:ml-[6px] lg:mr-[120px] lg:mt-[5px] mb-[1px] ml-[8.76001px] mr-[155.02002px] mt-[7px] object-contain w-[2%] xl:h-[13px] xl:ml-[7px] xl:mr-[137px] xl:mt-[6px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                </Column>
              </Row>
            </List>
          </Column>
          <Column className="bg-white_A700 justify-center self-stretch w-[100%]">
            <Column className="3xl:mt-[75px] items-center lg:mt-[49px] mt-[63px] self-stretch w-[100%] xl:mt-[56px]">
              <Row className="font-playfairdisplay justify-between px-[0] self-stretch w-[100%]">
                <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:ml-[180px] 3xl:text-fs48 font-bold leading-lh5200 lg:leading-lh40 lg:ml-[116px] lg:mt-[1px] lg:text-fs31 ml-[150px] mt-[2px] text-fs40 text-gray_911 text-left tracking-ls1 w-[37%] xl:leading-lh46 xl:ml-[133px] xl:mt-[1px] xl:text-fs35">
                  {
                    <>
                      {`We Provide Top Destination `}
                      <br />
                      {`Especially For you`}
                    </>
                  }
                </Text>
                <Image
                  src="img_nav_1.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] 3xl:mb-[60px] 3xl:mr-[181px] h-[56px] lg:h-[44px] lg:mb-[38px] lg:mr-[117px] mb-[50px] mr-[151px] object-contain w-[9%] xl:h-[50px] xl:mb-[44px] xl:mr-[134px]"
                  alt="Nav"
                />
              </Row>
            </Column>
            <List
              className="3xl:gap-[28px] 3xl:ml-[12px] 3xl:mt-[73px] flex-wrap gap-[24px] grid grid-cols-4 lg:gap-[18px] lg:ml-[7px] lg:mt-[47px] min-h-[auto] ml-[10px] mt-[61px] w-[90%] xl:gap-[21px] xl:ml-[8px] xl:mt-[54px]"
              orientation="horizontal"
            >
              <Stack className="2xl:h-[545px] 3xl:h-[654px] h-[544px] lg:h-[424px] w-[100%] xl:h-[484px]">
                <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
                  <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute bg-white_A700 h-[544px] inset-y-[0] left-[0] lg:h-[424px] right-[1px] rounded-radius12 shadow-bs15 w-[100%] xl:h-[484px]">
                    <Image
                      src="img_star_2.svg"
                      className="2xl:h-[21px] 3xl:bottom-[33px] 3xl:h-[25px] 3xl:right-[19px] absolute bottom-[28px] h-[20px] lg:bottom-[21px] lg:h-[16px] lg:right-[12px] object-contain right-[16px] w-[33%] xl:bottom-[24px] xl:h-[18px] xl:right-[14px]"
                      alt="Star"
                    />
                  </Stack>
                  <Image
                    src="img_bitmap_3.svg"
                    className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                    alt="Bitmap"
                  />
                </Stack>
                <Column className="3xl:bottom-[28px] absolute bottom-[24px] font-ubuntu inset-x-[0] justify-start lg:bottom-[18px] mx-[auto] w-[91%] xl:bottom-[21px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ubuntu justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs31 font-bold lg:text-fs20 text-fs26 text-left text-yellow_902 xl:text-fs23">{`$ 1444`}</Text>
                      <Text className="3xl:ml-[12px] 3xl:mr-[189px] 3xl:text-fs16 font-normal lg:mb-[3px] lg:ml-[7px] lg:mr-[122px] lg:mt-[1px] lg:text-fs10 mb-[4px] ml-[10px] mr-[158px] mt-[2px] text-fs14 text-gray_911 text-left xl:mb-[3px] xl:ml-[8px] xl:mr-[140px] xl:mt-[1px] xl:text-fs12">{`Per person`}</Text>
                    </Row>
                  </Column>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[18px] 3xl:text-fs24 font-medium leading-lh2800 lg:leading-lh21 lg:mt-[11px] lg:text-fs15 mt-[15px] self-stretch text-fs20 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[13px] xl:text-fs17">{`Enjoy The Beuty of horyuji temple Japan`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[11px] lg:text-fs12 mr-[10px] mt-[15px] text-fs16 text-gray_911 text-left xl:mr-[8px] xl:mt-[13px] xl:text-fs14">{`Ikagura, Japan`}</Text>
                </Column>
              </Stack>
              <Stack className="2xl:h-[545px] 3xl:h-[654px] h-[544px] lg:h-[424px] w-[100%] xl:h-[484px]">
                <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
                  <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute bg-white_A700 border border-dashed border-gray_306 h-[544px] inset-y-[0] left-[0] lg:h-[424px] right-[1px] rounded-radius12 w-[100%] xl:h-[484px]">
                    <Image
                      src="img_star_2.svg"
                      className="2xl:h-[21px] 3xl:bottom-[33px] 3xl:h-[25px] 3xl:right-[19px] absolute bottom-[28px] h-[20px] lg:bottom-[21px] lg:h-[16px] lg:right-[12px] object-contain right-[16px] w-[33%] xl:bottom-[24px] xl:h-[18px] xl:right-[14px]"
                      alt="Star"
                    />
                  </Stack>
                  <Image
                    src="img_insertimagehe_19.svg"
                    className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                    alt="InsertImageHe"
                  />
                </Stack>
                <Column className="3xl:bottom-[28px] absolute bottom-[24px] font-ubuntu inset-x-[0] justify-start lg:bottom-[18px] mx-[auto] w-[91%] xl:bottom-[21px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ubuntu justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs31 font-bold lg:text-fs20 text-fs26 text-left text-yellow_902 xl:text-fs23">{`$ 1444`}</Text>
                      <Text className="3xl:ml-[12px] 3xl:mr-[189px] 3xl:text-fs16 font-normal lg:mb-[3px] lg:ml-[7px] lg:mr-[122px] lg:mt-[1px] lg:text-fs10 mb-[4px] ml-[10px] mr-[158px] mt-[2px] text-fs14 text-gray_911 text-left xl:mb-[3px] xl:ml-[8px] xl:mr-[140px] xl:mt-[1px] xl:text-fs12">{`Per person`}</Text>
                    </Row>
                  </Column>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[18px] 3xl:text-fs24 font-medium leading-lh2800 lg:leading-lh21 lg:mt-[11px] lg:text-fs15 mt-[15px] self-stretch text-fs20 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[13px] xl:text-fs17">{`Enjoy The Beuty of dewata bali beach`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[11px] lg:text-fs12 mr-[10px] mt-[15px] text-fs16 text-gray_911 text-left xl:mr-[8px] xl:mt-[13px] xl:text-fs14">{`Bali, Indonesia`}</Text>
                </Column>
              </Stack>
              <Stack className="2xl:h-[545px] 3xl:h-[654px] h-[544px] lg:h-[424px] w-[100%] xl:h-[484px]">
                <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute h-[544px] inset-[0] lg:h-[424px] self-stretch w-[100%] xl:h-[484px]">
                  <Stack className="2xl:h-[545px] 3xl:h-[654px] absolute bg-white_A700 border border-dashed border-gray_306 h-[544px] inset-y-[0] left-[0] lg:h-[424px] right-[1px] rounded-radius12 w-[100%] xl:h-[484px]">
                    <Image
                      src="img_star_2.svg"
                      className="2xl:h-[21px] 3xl:bottom-[33px] 3xl:h-[25px] 3xl:right-[19px] absolute bottom-[28px] h-[20px] lg:bottom-[21px] lg:h-[16px] lg:right-[12px] object-contain right-[16px] w-[33%] xl:bottom-[24px] xl:h-[18px] xl:right-[14px]"
                      alt="Star"
                    />
                  </Stack>
                  <Image
                    src="img_bitmap_4.svg"
                    className="2xl:h-[349px] 3xl:h-[418px] absolute h-[348px] lg:h-[271px] object-cover self-stretch top-[0] w-[100%] xl:h-[310px]"
                    alt="Bitmap"
                  />
                </Stack>
                <Column className="3xl:bottom-[28px] absolute bottom-[24px] font-ubuntu inset-x-[0] justify-start lg:bottom-[18px] mx-[auto] w-[91%] xl:bottom-[21px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ubuntu justify-start self-stretch w-[100%]">
                      <Text className="3xl:text-fs31 font-bold lg:text-fs20 text-fs26 text-left text-yellow_902 xl:text-fs23">{`$ 1444`}</Text>
                      <Text className="3xl:ml-[12px] 3xl:mr-[189px] 3xl:text-fs16 font-normal lg:mb-[3px] lg:ml-[7px] lg:mr-[122px] lg:mt-[1px] lg:text-fs10 mb-[4px] ml-[10px] mr-[158px] mt-[2px] text-fs14 text-gray_911 text-left xl:mb-[3px] xl:ml-[8px] xl:mr-[140px] xl:mt-[1px] xl:text-fs12">{`Per person`}</Text>
                    </Row>
                  </Column>
                  <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[18px] 3xl:text-fs24 font-medium leading-lh2800 lg:leading-lh21 lg:mt-[11px] lg:text-fs15 mt-[15px] self-stretch text-fs20 text-gray_911 text-left w-[100%] xl:leading-lh24 xl:mt-[13px] xl:text-fs17">{`Travel on the desert with the beatiful views`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:mt-[18px] 3xl:text-fs19 font-normal lg:mr-[7px] lg:mt-[11px] lg:text-fs12 mr-[10px] mt-[15px] text-fs16 text-gray_911 text-left xl:mr-[8px] xl:mt-[13px] xl:text-fs14">{`Skye, Skotlandia`}</Text>
                </Column>
              </Stack>
              <Column className="bg-white_A700 border border-dashed border-gray_306 font-ubuntu justify-start rounded-radius12 w-[100%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Image
                    src="img_bitmap_5.svg"
                    className="2xl:h-[349px] 3xl:h-[418px] h-[348px] lg:h-[271px] object-cover self-stretch w-[100%] xl:h-[310px]"
                    alt="Bitmap"
                  />
                  <Row className="3xl:mt-[33px] font-ubuntu justify-end lg:mt-[21px] mt-[28px] self-stretch w-[100%] xl:mt-[24px]">
                    <Text className="3xl:ml-[19px] 3xl:text-fs31 font-bold lg:ml-[12px] lg:text-fs20 ml-[16px] text-fs26 text-left text-yellow_902 xl:ml-[14px] xl:text-fs23">{`$ 1444`}</Text>
                    <Text className="3xl:ml-[12px] 3xl:text-fs16 font-normal lg:mb-[3px] lg:ml-[7px] lg:mt-[1px] lg:text-fs10 mb-[4px] ml-[10px] mt-[2px] text-fs14 text-gray_911 text-left xl:mb-[3px] xl:ml-[8px] xl:mt-[1px] xl:text-fs12">{`Per person`}</Text>
                  </Row>
                </Column>
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:ml-[19px] 3xl:mt-[18px] 3xl:text-fs24 font-medium leading-lh2800 lg:leading-lh21 lg:ml-[12px] lg:mt-[11px] lg:text-fs15 ml-[16px] mt-[15px] text-fs20 text-gray_911 text-left w-[90%] xl:leading-lh24 xl:ml-[14px] xl:mt-[13px] xl:text-fs17">{`Enjoy The Beuty of horyuji temple Japan`}</Text>
                <Column className="3xl:mb-[28px] 3xl:mt-[18px] items-center lg:mb-[18px] lg:mt-[11px] mb-[24px] mt-[15px] self-stretch w-[100%] xl:mb-[21px] xl:mt-[13px]">
                  <Row className="font-ubuntu items-center justify-between overflow-auto px-[0] self-stretch w-[100%]">
                    <Text className="3xl:ml-[19px] 3xl:text-fs19 font-normal lg:ml-[12px] lg:text-fs12 ml-[16px] text-fs16 text-gray_911 text-left xl:ml-[14px] xl:text-fs14">{`Ikagura, Japan`}</Text>
                    <Line className="2xl:h-[21px] 3xl:h-[25px] h-[20px] lg:h-[16px] lg:my-[3px] my-[4px] w-[1px] xl:h-[18px] xl:my-[3px]" />
                  </Row>
                </Column>
              </Column>
            </List>
            <Column className="3xl:mb-[84px] 3xl:mt-[64px] items-center lg:mb-[54px] lg:mt-[42px] mb-[70px] mt-[54px] self-stretch w-[100%] xl:mb-[62px] xl:mt-[48px]">
              <Stack className="2xl:h-[57px] 3xl:h-[68px] font-ubuntu h-[56px] lg:h-[44px] mx-[auto] w-[13%] xl:h-[50px]">
                <Image
                  src="img_background_28.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs21 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Explore More`}</Text>
              </Stack>
            </Column>
          </Column>
        </Column>
        <Row className="bg-teal_901 items-center justify-start self-stretch w-[100%]">
          <Column className="3xl:mb-[136px] 3xl:ml-[178px] 3xl:mt-[120px] font-playfairdisplay justify-start lg:mb-[88px] lg:ml-[115px] lg:mt-[77px] mb-[114px] ml-[149px] mt-[100px] w-[37%] xl:mb-[101px] xl:ml-[132px] xl:mt-[88px]">
            <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:mr-[12px] 3xl:text-fs48 font-bold font-playfairdisplay leading-lh5200 lg:leading-lh40 lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 tracking-ls1 w-[85%] xl:leading-lh46 xl:mr-[8px] xl:text-fs35">{`With Our Experiennce We Will Serve You`}</Text>
            <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mr-[12px] 3xl:mt-[34px] 3xl:text-fs24 font-normal font-ubuntu leading-lh3600 lg:leading-lh28 lg:mr-[7px] lg:mt-[22px] lg:text-fs15 mr-[10px] mt-[29px] text-fs20 text-left text-white_A700 w-[86%] xl:leading-lh32 xl:mr-[8px] xl:mt-[25px] xl:text-fs17">{`Since we frist opened we have always prioritized the conveniemce of our users by providing low price and with easy process`}</Text>
            <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] 3xl:mt-[48px] font-ubuntu h-[56px] lg:h-[44px] lg:mr-[7px] lg:mt-[31px] mr-[10px] mt-[40px] w-[35%] xl:h-[50px] xl:mr-[8px] xl:mt-[35px]">
              <Image
                src="img_background_29.svg"
                className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                alt="Background"
              />
              <Text className="3xl:text-fs21 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Explore More`}</Text>
            </Stack>
            <Column className="3xl:mt-[48px] items-center lg:mt-[31px] mt-[40px] self-stretch w-[100%] xl:mt-[35px]">
              <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                <Column className="font-playfairdisplay justify-start w-[27%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs48 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 xl:mr-[8px] xl:text-fs35">{`20`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[12px] 3xl:text-fs24 font-normal font-ubuntu leading-lh3600 lg:leading-lh28 lg:mt-[7px] lg:text-fs15 mt-[10px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[8px] xl:text-fs17">{`Years Experiences`}</Text>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[24%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs48 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 xl:mr-[8px] xl:text-fs35">{`65`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[12px] 3xl:text-fs24 font-normal font-ubuntu leading-lh3600 lg:leading-lh28 lg:mt-[7px] lg:text-fs15 mt-[10px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[8px] xl:text-fs17">
                    {
                      <>
                        {`Destination`}
                        <br />
                        {`Collaboration`}
                      </>
                    }
                  </Text>
                </Column>
                <Column className="font-playfairdisplay justify-start w-[27%]">
                  <Text className="3xl:mr-[12px] 3xl:text-fs48 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs31 mr-[10px] text-fs40 text-left text-white_A700 xl:mr-[8px] xl:text-fs35">{`674+`}</Text>
                  <Text className="2xl:leading-lh36 3xl:leading-lh43 3xl:mt-[12px] 3xl:text-fs24 font-normal font-ubuntu leading-lh3600 lg:leading-lh28 lg:mt-[7px] lg:text-fs15 mt-[10px] self-stretch text-fs20 text-left text-white_A700 w-[100%] xl:leading-lh32 xl:mt-[8px] xl:text-fs17">
                    {
                      <>
                        {`Tourist`}
                        <br />
                        {`Destination`}
                      </>
                    }
                  </Text>
                </Column>
              </Row>
            </Column>
          </Column>
          <Stack className="2xl:h-[527px] 3xl:h-[632px] 3xl:ml-[31px] 3xl:mr-[180px] 3xl:my-[120px] h-[526px] lg:h-[410px] lg:ml-[20px] lg:mr-[116px] lg:my-[77px] ml-[26px] mr-[150px] my-[100px] w-[40%] xl:h-[468px] xl:ml-[23px] xl:mr-[133px] xl:my-[88px]">
            <Image
              src="img_insertimagehe_20.svg"
              className="2xl:h-[527px] 3xl:h-[632px] absolute h-[526px] lg:h-[410px] object-contain right-[0] w-[96%] xl:h-[468px]"
              alt="InsertImageHe"
            />
            <Row className="3xl:bottom-[36px] absolute bg-white_A700 bottom-[30px] font-ubuntu items-center justify-start left-[0] lg:bottom-[23px] rounded-radius12 shadow-bs21 w-[68%] xl:bottom-[26px]">
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:ml-[34px] 3xl:my-[24px] 3xl:text-fs21 font-medium leading-lh2800 lg:leading-lh21 lg:ml-[22px] lg:my-[15px] lg:text-fs14 ml-[29px] my-[20px] text-black_905 text-fs18 text-left w-[56%] xl:leading-lh24 xl:ml-[25px] xl:my-[17px] xl:text-fs16">{`We Have more than 10 years of experience`}</Text>
              <Image
                src="img_star_2.svg"
                className="2xl:h-[21px] 3xl:h-[25px] 3xl:mr-[36px] 3xl:my-[45px] h-[20px] lg:h-[16px] lg:mr-[23px] lg:my-[29px] mr-[30px] my-[38px] object-contain w-[29%] xl:h-[18px] xl:mr-[26px] xl:my-[33px]"
                alt="Star"
              />
            </Row>
          </Stack>
        </Row>
        <Column className="bg-white_A700 font-inter justify-start self-stretch w-[100%]">
          <Column className="3xl:mt-[144px] font-inter items-center lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
            <Text className="3xl:text-fs57 font-inter font-normal lg:text-fs37 mx-[auto] text-center text-fs48 text-gray_911 tracking-ls1 xl:text-fs42">{`Frequently ask question`}</Text>
            <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[21px] 3xl:text-fs19 font-normal font-ubuntu leading-lh2800 lg:leading-lh21 lg:mt-[14px] lg:text-fs12 mt-[18px] mx-[auto] text-center text-fs16 text-gray_911 w-[43%] xl:leading-lh24 xl:mt-[16px] xl:text-fs14">{`Everything you need to know right here at your fingertips. Ask questions, browse around for answers, or submit your feature requests.`}</Text>
            <Row className="3xl:mt-[57px] justify-start lg:mt-[37px] mt-[48px] self-stretch w-[100%] xl:mt-[42px]">
              <Stack className="2xl:h-[121px] 3xl:h-[145px] 3xl:mb-[14px] 3xl:ml-[260px] h-[120px] lg:h-[94px] lg:mb-[9px] lg:ml-[168px] mb-[12px] ml-[217px] w-[34%] xl:h-[107px] xl:mb-[10px] xl:ml-[193px]">
                <Image
                  src="img_base_3.svg"
                  className="2xl:h-[121px] 3xl:h-[145px] absolute h-[120px] inset-[0] lg:h-[94px] object-cover self-stretch w-[100%] xl:h-[107px]"
                  alt="Base"
                />
                <Column className="absolute font-ubuntu h-[max-content] inset-[0] justify-center m-[auto] w-[92%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-ubuntu justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:mb-[7px] 3xl:text-fs19 font-medium lg:mb-[4px] lg:text-fs12 mb-[6px] text-fs16 text-gray_911 text-left xl:mb-[5px] xl:text-fs14">{`What is the difference between Short & Long Trip?`}</Text>
                      <Image
                        src="img_icon_40.svg"
                        className="2xl:h-[19px] 3xl:h-[22px] 3xl:mt-[7px] h-[18px] lg:h-[14px] lg:mt-[4px] mr-[1px] mt-[6px] object-contain w-[4%] xl:h-[17px] xl:mt-[5px]"
                        alt="Icon"
                      />
                    </Row>
                  </Column>
                  <Text className="2xl:leading-lh24 3xl:leading-lh28 3xl:mt-[12px] 3xl:text-fs16 font-normal leading-lh2400 lg:leading-lh18 lg:mt-[7px] lg:text-fs10 mt-[10px] self-stretch text-bluegray_403 text-fs14 text-left w-[100%] xl:leading-lh21 xl:mt-[8px] xl:text-fs12">
                    {
                      <>
                        {`Free version contains a limited amount of pre-designed`}
                        <br />
                        {`blocks in comparison to Pro version with more than 100 blocks.`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
              <Column className="3xl:ml-[37px] 3xl:mr-[261px] font-ubuntu justify-start lg:ml-[24px] lg:mr-[169px] ml-[31px] mr-[218px] w-[34%] xl:ml-[27px] xl:mr-[193px]">
                <div className="bg-transparent border-bw self-stretch w-[100%] input-wrap">
                  <Image
                    src="img_icon_41.svg"
                    className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[15px] xl:right-[17px] xl:inset-y-[18px] 2xl:inset-y-[20px] 3xl:right-[24px] 3xl:inset-y-[24px] inset-y-[20.375px]"
                    alt="Icon"
                  />
                  <Button className="2xl:py-[20px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[15px] lg:pr-[35px] lg:py-[15px] lg:text-fs12 pl-[20px] pr-[46px] py-[20.375px] rounded-radius8 text-fs16 text-gray_911 text-left w-[100%] xl:pl-[17px] xl:pr-[40px] xl:py-[18px] xl:text-fs14">{`Do you provide any support?`}</Button>
                </div>
                <div className="3xl:mt-[24px] bg-transparent border-bw lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px] input-wrap">
                  <Image
                    src="img_icon_41.svg"
                    className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[15px] xl:right-[17px] xl:inset-y-[18px] 2xl:inset-y-[20px] 3xl:right-[24px] 3xl:inset-y-[24px] inset-y-[20.375px]"
                    alt="Icon"
                  />
                  <Button className="2xl:py-[20px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[15px] lg:pr-[35px] lg:py-[15px] lg:text-fs12 pl-[20px] pr-[46px] py-[20.375px] rounded-radius8 text-fs16 text-gray_911 text-left w-[100%] xl:pl-[17px] xl:pr-[40px] xl:py-[18px] xl:text-fs14">{`Why do my trip extend?`}</Button>
                </div>
              </Column>
            </Row>
            <Row className="3xl:gap-[37px] 3xl:mt-[9px] 3xl:pl-[260px] 3xl:pr-[261px] font-ubuntu gap-[31px] grid grid-cols-2 justify-start lg:gap-[24px] lg:mt-[6px] lg:pl-[168px] lg:pr-[169px] mt-[8px] pl-[217px] pr-[218px] self-stretch w-[100%] xl:gap-[27px] xl:mt-[7px] xl:px-[193px]">
              <div className="3xl:mb-[14px] bg-transparent border-bw lg:mb-[9px] mb-[12px] w-[100%] xl:mb-[10px] input-wrap">
                <Image
                  src="img_icon_41.svg"
                  className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[15px] xl:right-[17px] xl:inset-y-[18px] 2xl:inset-y-[20px] 3xl:right-[24px] 3xl:inset-y-[24px] inset-y-[20.375px]"
                  alt="Icon"
                />
                <Button className="2xl:py-[20px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[15px] lg:pr-[35px] lg:py-[15px] lg:text-fs12 pl-[20px] pr-[46px] py-[20.375px] rounded-radius8 text-fs16 text-gray_911 text-left w-[100%] xl:pl-[17px] xl:pr-[40px] xl:py-[18px] xl:text-fs14">{`Can I request a get a refund?`}</Button>
              </div>
              <div className="3xl:mt-[14px] bg-transparent border-bw lg:mt-[9px] mt-[12px] w-[100%] xl:mt-[10px] input-wrap">
                <Image
                  src="img_icon_41.svg"
                  className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[15px] xl:right-[17px] xl:inset-y-[18px] 2xl:inset-y-[20px] 3xl:right-[24px] 3xl:inset-y-[24px] inset-y-[20.375px]"
                  alt="Icon"
                />
                <Button className="2xl:py-[20px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border-bw font-normal lg:pl-[15px] lg:pr-[35px] lg:py-[15px] lg:text-fs12 pl-[20px] pr-[46px] py-[20.375px] rounded-radius8 text-fs16 text-gray_911 text-left w-[100%] xl:pl-[17px] xl:pr-[40px] xl:py-[18px] xl:text-fs14">{`Can I edit my booking trip`}</Button>
              </div>
            </Row>
          </Column>
          <div className="3xl:mb-[144px] 3xl:mt-[9px] 3xl:mx-[260px] bg-transparent border-bw lg:mb-[93px] lg:mt-[6px] lg:mx-[168px] mb-[120px] mt-[8px] mx-[217px] w-[34%] xl:mb-[106px] xl:mt-[7px] xl:mx-[193px] input-wrap">
            <Image
              src="img_icon_41.svg"
              className="absolute right-[20px] border-bw bg-transparent lg:right-[15px] lg:inset-y-[15px] xl:right-[17px] xl:inset-y-[18px] 2xl:inset-y-[20px] 3xl:right-[24px] 3xl:inset-y-[24px] inset-y-[20.375px]"
              alt="Icon"
            />
            <Button className="2xl:py-[20px] 3xl:pl-[24px] 3xl:pr-[55px] 3xl:py-[24px] 3xl:text-fs19 bg-white_A700 border-bw font-normal font-ubuntu lg:pl-[15px] lg:pr-[35px] lg:py-[15px] lg:text-fs12 pl-[20px] pr-[46px] py-[20.375px] rounded-radius8 text-fs16 text-gray_911 text-left w-[100%] xl:pl-[17px] xl:pr-[40px] xl:py-[18px] xl:text-fs14">{`Can I pay trap for termin?`}</Button>
          </div>
        </Column>
        <Column className="bg-white_A700 items-center justify-start self-stretch w-[100%]">
          <Column className="bg-teal_901 font-playfairdisplay items-center justify-center mx-[auto] rounded-radius20 w-[79%]">
            <Text className="2xl:leading-lh52 3xl:leading-lh62 3xl:mt-[76px] 3xl:text-fs48 font-bold font-playfairdisplay leading-lh5200 lg:leading-lh40 lg:mt-[49px] lg:text-fs31 mt-[64px] mx-[auto] text-center text-fs40 text-white_A700 tracking-ls1 w-[51%] xl:leading-lh46 xl:mt-[56px] xl:text-fs35">{`Subscrive To Get The Latest News About Us`}</Text>
            <Text className="2xl:leading-lh26 3xl:leading-lh31 3xl:mt-[25px] 3xl:text-fs19 font-normal font-ubuntu leading-lh2600 lg:leading-lh20 lg:mt-[16px] lg:text-fs12 mt-[21px] mx-[auto] text-center text-fs16 text-white_A700 w-[49%] xl:leading-lh23 xl:mt-[18px] xl:text-fs14">{`We recommended you to subscribe to our newspaper, enter your email below to get daily update us.`}</Text>
            <Stack className="2xl:h-[73px] 3xl:h-[87px] 3xl:mb-[96px] 3xl:mt-[28px] h-[72px] lg:h-[56px] lg:mb-[62px] lg:mt-[18px] mb-[80px] mt-[24px] mx-[auto] w-[49%] xl:h-[65px] xl:mb-[71px] xl:mt-[21px]">
              <Stack className="2xl:h-[73px] 3xl:h-[87px] absolute font-ubuntu h-[72px] inset-[0] lg:h-[56px] self-stretch w-[100%] xl:h-[65px]">
                <div className="2xl:h-[73px] 3xl:h-[87px] 3xl:left-[27px] 3xl:right-[26px] absolute bg-black_900_00 h-[72px] inset-y-[0] left-[23px] lg:h-[56px] lg:inset-x-[17px] right-[22px] rounded-radius8 shadow-bs16 w-[92%] xl:h-[65px] xl:left-[20px] xl:right-[19px]"></div>
                <div className="absolute bg-transparent border-0 inset-[0] m-[0] self-stretch w-[100%] input-wrap">
                  <div className="input-wrap">
                    <Image
                      src="img_icon_21.svg"
                      className="absolute top-[29.375px] bottom-[24.375px] left-[20px] bg-transparent border-0 lg:top-[22px] lg:bottom-[18px] lg:left-[15px] xl:top-[26px] xl:bottom-[21px] xl:left-[17px] 2xl:top-[29px] 2xl:bottom-[24px] 3xl:top-[35px] 3xl:bottom-[29px] 3xl:left-[24px]"
                      alt="Icon"
                    />
                    <Input
                      className="2xl:pb-[24px] 2xl:pt-[29px] 3xl:pb-[29px] 3xl:pl-[57px] 3xl:pt-[35px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[18px] lg:pl-[37px] lg:pt-[22px] lg:text-fs12 pb-[24.375px] pl-[48px] placeholder:bg-transparent placeholder:text-bluegray_403 pt-[29.375px] rounded-radius12 text-bluegray_403 text-fs16 text-left w-[100%] xl:pb-[21px] xl:pl-[42px] xl:pt-[26px] xl:text-fs14"
                      name="Group398"
                      placeholder={`Enter your email address`}
                    ></Input>
                  </div>
                </div>
              </Stack>
              <Stack className="2xl:h-[57px] 3xl:h-[68px] 3xl:right-[16px] absolute font-ubuntu h-[56px] inset-y-[0] lg:h-[44px] lg:right-[10px] my-[auto] right-[14px] w-[33%] xl:h-[50px] xl:right-[12px]">
                <Image
                  src="img_background_30.svg"
                  className="2xl:h-[57px] 3xl:h-[68px] absolute h-[56px] inset-[0] lg:h-[44px] object-cover self-stretch w-[100%] xl:h-[50px]"
                  alt="Background"
                />
                <Text className="3xl:text-fs21 absolute font-medium h-[max-content] inset-[0] justify-center lg:text-fs14 m-[auto] text-center text-fs18 text-white_A700 w-[max-content] xl:text-fs16">{`Get Started`}</Text>
              </Stack>
            </Stack>
          </Column>
          <Row className="3xl:mb-[45px] 3xl:mt-[84px] font-ubuntu justify-center lg:mb-[29px] lg:mt-[54px] mb-[38px] mt-[70px] mx-[auto] w-[32%] xl:mb-[33px] xl:mt-[62px]">
            <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-gray_911 xl:text-fs16">{`Home`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs21 font-medium lg:ml-[31px] lg:text-fs14 ml-[40px] text-center text-fs18 text-gray_911 xl:ml-[35px] xl:text-fs16">{`About`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs21 font-medium lg:ml-[31px] lg:text-fs14 ml-[40px] text-center text-fs18 text-gray_911 xl:ml-[35px] xl:text-fs16">{`Features`}</Text>
            <Row className="3xl:ml-[48px] font-ubuntu items-center justify-between lg:ml-[31px] ml-[40px] px-[0] w-[35%] xl:ml-[35px]">
              <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-gray_911 xl:text-fs16">{`News`}</Text>
              <Text className="3xl:text-fs21 font-medium lg:text-fs14 text-center text-fs18 text-gray_911 xl:text-fs16">{`Contact`}</Text>
            </Row>
          </Row>
        </Column>
      </Column>
    </Column>
  );
};

export default Travel1Page;
