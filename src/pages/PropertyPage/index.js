import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Line } from "components/Line";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";
import { List } from "components/List";

const PropertyPagePage = () => {
  return (
    <Column className="bg-gray_102 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <div className="self-stretch w-[100%]">
            <Column className="justify-end self-stretch w-[100%]">
              <Column className="bg-gradient25  items-center justify-end self-stretch w-[100%]">
                <Row className="3xl:mt-[38px] items-center justify-between lg:mt-[24px] mt-[32px] mx-[auto] px-[0] w-[74%] xl:mt-[28px]">
                  <Image
                    src="img_logorealestate.svg"
                    className="2xl:h-[33px] 2xl:my-[8px] 3xl:h-[40px] 3xl:my-[10px] h-[32.92px] lg:h-[26px] lg:my-[6px] mb-[8.520004px] ml-[1px] mt-[8.560001px] object-contain w-[12%] xl:h-[30px] xl:my-[7px]"
                    alt="Group"
                  />
                  <Row className="font-dmsans1 items-center justify-between px-[0] w-[64%]">
                    <Text className="3xl:my-[18px] 3xl:text-fs18 font-bold lg:my-[11px] lg:text-fs11 my-[15px] text-fs15 text-left text-white_A700 tracking-ls11 xl:my-[13px] xl:text-fs13">{`Nav Link`}</Text>
                    <Text className="3xl:my-[18px] 3xl:text-fs18 font-bold lg:my-[11px] lg:text-fs11 my-[15px] text-fs15 text-left text-white_A700 tracking-ls11 xl:my-[13px] xl:text-fs13">{`Nav Link`}</Text>
                    <Text className="3xl:my-[18px] 3xl:text-fs18 font-bold lg:my-[11px] lg:text-fs11 my-[15px] text-fs15 text-left text-white_A700 tracking-ls11 xl:my-[13px] xl:text-fs13">{`Nav Link`}</Text>
                    <Text className="3xl:my-[18px] 3xl:text-fs18 font-bold lg:my-[11px] lg:text-fs11 my-[15px] text-fs15 text-left text-white_A700 tracking-ls11 xl:my-[13px] xl:text-fs13">{`Nav Link`}</Text>
                    <Row className="bg-amber_A701 font-dmsans1 items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[31%]">
                      <Text className="3xl:ml-[48px] 3xl:my-[16px] 3xl:text-fs20 font-bold lg:ml-[31px] lg:my-[10px] lg:text-fs13 ml-[40px] my-[14px] text-black_900 text-fs17 text-left tracking-ls11 xl:ml-[35px] xl:my-[12px] xl:text-fs15">{`Work with us`}</Text>
                      <Image
                        src="img_arrowwhite.svg"
                        className="2xl:h-[10px] 2xl:mb-[19px] 3xl:h-[12px] 3xl:mb-[23px] 3xl:ml-[10px] 3xl:mr-[48px] 3xl:mt-[25px] h-[9.63px] lg:h-[8px] lg:mb-[15px] lg:ml-[7px] lg:mr-[31px] lg:mt-[16px] mb-[19.369999px] ml-[9px] mr-[40px] mt-[21px] object-contain w-[9%] xl:h-[9px] xl:mb-[17px] xl:ml-[8px] xl:mr-[35px] xl:mt-[18px]"
                        alt="keyboardarrow"
                      />
                    </Row>
                  </Row>
                </Row>
                <Line className="3xl:mt-[38px] bg-white_A700_63 h-[1px] lg:mt-[24px] mt-[32px] opacity-op1 self-stretch w-[100%] xl:mt-[28px]" />
                <Column className="3xl:mb-[26px] 3xl:mt-[25px] items-center justify-start lg:mb-[17px] lg:mt-[16px] mb-[22px] mt-[21px] self-stretch w-[100%] xl:mb-[19px] xl:mt-[18px]">
                  <Row className="font-dmsans1 items-center justify-between px-[0] self-stretch w-[100%]">
                    <Text className="3xl:ml-[222px] 3xl:text-fs38 font-bold lg:ml-[143px] lg:text-fs24 ml-[185px] text-fs32 text-left text-white_A700 tracking-ls11 xl:ml-[164px] xl:text-fs28">{`Modern House`}</Text>
                    <Text className="3xl:mr-[223px] 3xl:text-fs38 font-bold lg:mr-[144px] lg:text-fs24 mr-[186px] text-fs32 text-right text-white_A700 tracking-ls11 xl:mr-[165px] xl:text-fs28">{`$450,000`}</Text>
                  </Row>
                  <Row className="font-dmsans1 items-center justify-between lg:mt-[3px] mt-[4px] px-[0] self-stretch w-[100%] xl:mt-[3px]">
                    <Text className="3xl:ml-[222px] 3xl:text-fs18 font-normal lg:ml-[143px] lg:text-fs11 ml-[185px] opacity-op6 text-fs15 text-left text-white_A700_90 tracking-ls11 xl:ml-[164px] xl:text-fs13">{`3002 Foster Ave, Brooklyn, NY 11210, USA`}</Text>
                    <Text className="3xl:mr-[223px] 3xl:text-fs18 font-normal lg:mr-[144px] lg:text-fs11 mr-[186px] opacity-op6 text-fs15 text-left text-white_A700_90 tracking-ls11 xl:mr-[165px] xl:text-fs13">{`$2,800/sq ft`}</Text>
                  </Row>
                </Column>
              </Column>
              <Column className="3xl:mt-[420px] font-dmsans1 lg:mt-[272px] mt-[350px] self-stretch w-[100%] xl:mt-[311px]">
                <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mx-[222px] 3xl:text-fs24 font-normal leading-lh2800 lg:leading-lh21 lg:mx-[143px] lg:text-fs15 mx-[185px] opacity-op6 text-fs20 text-left text-white_A700_90 tracking-ls11 w-[30%] xl:leading-lh24 xl:mx-[164px] xl:text-fs17">{`In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.`}</Text>
              </Column>
              <Row className="3xl:mt-[72px] bg-white_A700 font-dmsans1 items-center justify-center lg:mt-[46px] mt-[60px] mx-[auto] w-[74%] xl:mt-[53px]">
                <Text className="3xl:ml-[48px] 3xl:my-[44px] 3xl:text-fs24 font-bold lg:ml-[31px] lg:my-[28px] lg:text-fs15 ml-[40px] my-[37px] text-black_900 text-fs20 text-left tracking-ls11 xl:ml-[35px] xl:my-[32px] xl:text-fs17">{`See all listings`}</Text>
                <Image
                  src="img_arrow_tellow.svg"
                  className="2xl:h-[12px] 2xl:my-[44px] 3xl:h-[14px] 3xl:ml-[18px] 3xl:mr-[1033px] 3xl:my-[53px] h-[11.56px] lg:h-[9px] lg:ml-[11px] lg:mr-[669px] lg:my-[34px] mb-[44.22003px] ml-[15px] mr-[861px] mt-[44.21997px] object-contain w-[2%] xl:h-[11px] xl:ml-[13px] xl:mr-[765px] xl:my-[39px]"
                  alt="keyboardarrow"
                />
              </Row>
            </Column>
          </div>
          <Row className="3xl:mt-[72px] items-center justify-start lg:mt-[46px] mt-[60px] self-stretch w-[100%] xl:mt-[53px]">
            <Image
              src="img_propertyhouse.png"
              className="2xl:h-[521px] 3xl:h-[625px] 3xl:ml-[222px] h-[520px] lg:h-[405px] lg:ml-[143px] ml-[185px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[57px] w-[49%] xl:h-[463px] xl:ml-[164px]"
              alt="PropertyHouse"
            />
            <Column className="3xl:ml-[27px] 3xl:mr-[230px] bg-white_A700 font-dmsans1 justify-start lg:ml-[17px] lg:mr-[149px] ml-[23px] mr-[192px] rounded-radius25 shadow-bs44 w-[23%] xl:ml-[20px] xl:mr-[170px]">
              <Column className="3xl:mt-[24px] items-center lg:mt-[15px] mt-[20px] self-stretch w-[100%] xl:mt-[17px]">
                <Row className="bg-gray_102 items-center justify-start mx-[auto] rounded-radius10 w-[88%]">
                  <Image
                    src="img_avatarimage.png"
                    className="2xl:h-[41px] 3xl:h-[49px] 3xl:ml-[20px] 3xl:my-[18px] h-[40px] lg:h-[32px] lg:ml-[13px] lg:my-[11px] ml-[17px] my-[15px] object-contain rounded-radius50 w-[14%] xl:h-[36px] xl:ml-[15px] xl:my-[13px]"
                    alt="AvatarImage"
                  />
                  <Column className="3xl:mb-[18px] 3xl:ml-[12px] 3xl:mr-[189px] 3xl:mt-[19px] font-dmsans1 justify-start lg:mb-[11px] lg:ml-[7px] lg:mr-[122px] lg:mt-[12px] mb-[15px] ml-[10px] mr-[158px] mt-[16px] w-[24%] xl:mb-[13px] xl:ml-[8px] xl:mr-[140px] xl:mt-[14px]">
                    <Text className="3xl:text-fs18 font-normal lg:text-fs11 mr-[1px] text-black_900 text-fs15 text-left tracking-ls11 xl:text-fs13">{`Kayley Hall`}</Text>
                    <Text className="3xl:text-fs15 font-bold lg:mt-[1px] lg:text-fs10 mt-[2px] self-stretch text-amber_A701 text-fs13 text-left tracking-ls11 xl:mt-[1px] xl:text-fs11">{`View profile`}</Text>
                  </Column>
                </Row>
              </Column>
              <Input
                className="2xl:py-[21px] 3xl:mt-[24px] 3xl:mx-[24px] 3xl:pl-[24px] 3xl:py-[25px] 3xl:text-fs18 bg-transparent border border-gray_200 border-solid font-normal lg:mt-[15px] lg:mx-[15px] lg:pl-[15px] lg:py-[16px] lg:text-fs11 mt-[20px] mx-[20px] pl-[20px] placeholder:bg-transparent placeholder:text-black_900 py-[21.29px] rounded-radius10 text-black_900 text-fs15 text-left tracking-ls11 w-[88%] xl:mt-[17px] xl:mx-[17px] xl:pl-[17px] xl:py-[18px] xl:text-fs13"
                name="Name"
                placeholder={`Name`}
              ></Input>
              <Input
                className="2xl:py-[21px] 3xl:mt-[12px] 3xl:mx-[24px] 3xl:pl-[24px] 3xl:py-[25px] 3xl:text-fs18 bg-transparent border border-gray_200 border-solid font-normal lg:mt-[7px] lg:mx-[15px] lg:pl-[15px] lg:py-[16px] lg:text-fs11 mt-[10px] mx-[20px] pl-[20px] placeholder:bg-transparent placeholder:text-black_900 py-[21.29px] rounded-radius10 text-black_900 text-fs15 text-left tracking-ls11 w-[88%] xl:mt-[8px] xl:mx-[17px] xl:pl-[17px] xl:py-[18px] xl:text-fs13"
                name="Name"
                placeholder={`Phone`}
              ></Input>
              <Input
                className="2xl:py-[21px] 3xl:mt-[12px] 3xl:mx-[24px] 3xl:pl-[24px] 3xl:py-[25px] 3xl:text-fs18 bg-transparent border border-gray_200 border-solid font-normal lg:mt-[7px] lg:mx-[15px] lg:pl-[15px] lg:py-[16px] lg:text-fs11 mt-[10px] mx-[20px] pl-[20px] placeholder:bg-transparent placeholder:text-black_900 py-[21.29px] rounded-radius10 text-black_900 text-fs15 text-left tracking-ls11 w-[88%] xl:mt-[8px] xl:mx-[17px] xl:pl-[17px] xl:py-[18px] xl:text-fs13"
                name="Name"
                placeholder={`Email`}
              ></Input>
              <TextArea
                className="2xl:pb-[36px] 2xl:pt-[21px] 3xl:mt-[12px] 3xl:mx-[24px] 3xl:pb-[43px] 3xl:pl-[24px] 3xl:pt-[25px] 3xl:text-fs18 bg-transparent border border-gray_200 border-solid font-normal lg:mt-[7px] lg:mx-[15px] lg:pb-[28px] lg:pl-[15px] lg:pt-[16px] lg:text-fs11 mt-[10px] mx-[20px] pb-[36.29px] pl-[20px] placeholder:bg-transparent placeholder:text-black_900 pt-[21.29px] rounded-radius10 text-black_900 text-fs15 text-left tracking-ls11 w-[88%] xl:mt-[8px] xl:mx-[17px] xl:pb-[32px] xl:pl-[17px] xl:pt-[18px] xl:text-fs13"
                name="Name"
                placeholder={`Hello, I am interested in…`}
              ></TextArea>
              <Column className="3xl:mb-[24px] 3xl:mt-[12px] items-center lg:mb-[15px] lg:mt-[7px] mb-[20px] mt-[10px] self-stretch w-[100%] xl:mb-[17px] xl:mt-[8px]">
                <Row className="bg-black_900 font-dmsans1 items-center justify-center mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[88%]">
                  <Text className="3xl:mb-[27px] 3xl:ml-[100px] 3xl:mt-[30px] 3xl:text-fs20 font-bold lg:mb-[17px] lg:ml-[65px] lg:mt-[19px] lg:text-fs13 mb-[23px] ml-[84px] mt-[25px] text-fs17 text-left text-white_A700 tracking-ls11 xl:mb-[20px] xl:ml-[74px] xl:mt-[22px] xl:text-fs15">{`Learn more`}</Text>
                  <Image
                    src="img_keyboardarrow.svg"
                    className="2xl:h-[10px] 2xl:mb-[28px] 3xl:h-[12px] 3xl:mb-[34px] 3xl:ml-[22px] 3xl:mr-[99px] 3xl:mt-[38px] h-[9.63px] lg:h-[8px] lg:mb-[22px] lg:ml-[14px] lg:mr-[64px] lg:mt-[24px] mb-[28.369995px] ml-[19px] mr-[83px] mt-[32px] object-contain w-[7%] xl:h-[9px] xl:mb-[25px] xl:ml-[16px] xl:mr-[73px] xl:mt-[28px]"
                    alt="keyboardarrow"
                  />
                </Row>
              </Column>
            </Column>
          </Row>
          <Row className="3xl:gap-[28px] 3xl:mt-[24px] 3xl:pl-[222px] 3xl:pr-[661px] gap-[24px] grid grid-cols-7 items-center justify-start lg:gap-[18px] lg:mt-[15px] lg:pl-[143px] lg:pr-[428px] mt-[20px] pl-[185px] pr-[551px] self-stretch w-[100%] xl:gap-[21px] xl:mt-[17px] xl:pl-[164px] xl:pr-[490px]">
            <Image
              src="img_rectangle_4.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mt-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_5.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mt-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_6.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mt-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_7.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mb-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_8.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mb-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_9.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mb-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
            <Image
              src="img_rectangle_10.png"
              className="2xl:h-[81px] 3xl:h-[97px] h-[80px] lg:h-[63px] mb-[1px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[16px] w-[100%] xl:h-[72px]"
              alt="Rectangle"
            />
          </Row>
        </Column>
        <Column className="3xl:mt-[48px] 3xl:mx-[222px] bg-white_A700 font-dmsans1 justify-start lg:mt-[31px] lg:mx-[143px] mt-[40px] mx-[185px] rounded-radius25 shadow-bs44 w-[49%] xl:mt-[35px] xl:mx-[164px]">
          <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs24 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs15 mt-[30px] mx-[30px] text-black_900 text-fs20 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs17">{`Details`}</Text>
          <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
            <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
            <Row className="font-dmsans1 items-center justify-end self-stretch w-[100%]">
              <Image
                src="img_bed.svg"
                className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[70px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[45px] lg:mt-[18px] mb-[25.839966px] ml-[59px] mt-[23.5px] object-contain w-[2%] xl:h-[10px] xl:mb-[22px] xl:ml-[52px] xl:mt-[20px]"
                alt="hotelsinglebe"
              />
              <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
              <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[55px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[35px] ml-[46px] w-[1px] xl:h-[54px] xl:ml-[40px]" />
              <Image
                src="img_shower.svg"
                className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[62px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[40px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[52px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[46px] xl:mt-[17px] xl:w-[14px]"
                alt="bathroomtubto"
              />
              <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[19%] xl:ml-[8px]">
                <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[62px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[40px] ml-[52px] w-[1px] xl:h-[54px] xl:ml-[46px]" />
                <Image
                  src="img_size.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[62px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[40px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[52px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[46px] xl:mt-[18px] xl:w-[14px]"
                  alt="gridartboard"
                />
              </Row>
              <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[19%] xl:ml-[8px]">
                <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[62px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[40px] ml-[52px] w-[1px] xl:h-[54px] xl:ml-[46px]" />
                <Image
                  src="img_garage.svg"
                  className="2xl:h-[15px] 2xl:mb-[23px] 2xl:mt-[21px] 3xl:h-[18px] 3xl:mb-[28px] 3xl:ml-[62px] 3xl:mt-[25px] h-[14.83px] lg:h-[12px] lg:mb-[18px] lg:ml-[40px] lg:mt-[16px] mb-[23.590088px] ml-[52px] mt-[21.579956px] object-contain w-[12%] xl:h-[14px] xl:mb-[20px] xl:ml-[46px] xl:mt-[19px]"
                  alt="Garage"
                />
              </Row>
              <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`1`}</Text>
              <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[67px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[43px] ml-[56px] w-[1px] xl:h-[54px] xl:ml-[49px]" />
              <Image
                src="img_date.svg"
                className="2xl:h-[17px] 2xl:ml-[35px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[42px] 3xl:mt-[25px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[27px] lg:mt-[16px] mb-[23px] ml-[35.330017px] mt-[21px] object-contain w-[2%] xl:h-[15px] xl:mb-[20px] xl:ml-[31px] xl:mt-[18px]"
                alt="Date"
              />
              <Text className="2xl:ml-[10px] 3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[44px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[8px] lg:mr-[28px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10.339966px] mr-[37px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[9px] xl:mr-[32px] xl:mt-[16px] xl:text-fs15">{`2007`}</Text>
            </Row>
          </Column>
        </Column>
        <Column className="3xl:mt-[48px] 3xl:mx-[222px] bg-white_A700 font-dmsans1 justify-start lg:mt-[31px] lg:mx-[143px] mt-[40px] mx-[185px] rounded-radius25 shadow-bs44 w-[49%] xl:mt-[35px] xl:mx-[164px]">
          <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs24 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs15 mt-[30px] mx-[30px] text-black_900 text-fs20 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs17">{`Description`}</Text>
          <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
            <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
          </Column>
          <Text className="2xl:leading-lh22 3xl:leading-lh26 3xl:mb-[36px] 3xl:mt-[42px] 3xl:mx-[36px] 3xl:text-fs18 font-normal leading-lh2200 lg:leading-lh17 lg:mb-[23px] lg:mt-[27px] lg:mx-[23px] lg:text-fs11 mb-[30px] mt-[35px] mx-[30px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 w-[91%] xl:leading-lh19 xl:mb-[26px] xl:mt-[31px] xl:mx-[26px] xl:text-fs13">
            {
              <>
                {`At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.`}
                <br />
                {`Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.`}
                <br />
                {`Omne animal, simul atque in sanguinem suum tam inportuno tamque crudeli; sin, ut earum motus et accusamus et argumentandum et dolore suo sanciret militaris imperii disciplinam exercitumque in liberos atque haec ratio late patet in quo pertineant non possim.`}
              </>
            }
          </Text>
        </Column>
        <Column className="3xl:mt-[48px] 3xl:mx-[222px] bg-white_A700 font-dmsans1 justify-start lg:mt-[31px] lg:mx-[143px] mt-[40px] mx-[185px] rounded-radius25 shadow-bs44 w-[49%] xl:mt-[35px] xl:mx-[164px]">
          <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs24 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs15 mt-[30px] mx-[30px] text-black_900 text-fs20 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs17">{`Features`}</Text>
          <Column className="3xl:mb-[36px] 3xl:mt-[73px] items-center lg:mb-[23px] lg:mt-[47px] mb-[30px] mt-[61px] self-stretch w-[100%] xl:mb-[26px] xl:mt-[54px]">
            <List
              className="flex-wrap gap-[0] min-h-[auto] mx-[auto] w-[91%]"
              orientation="vertical"
            >
              <Row className="3xl:my-[12px] font-dmsans1 items-center justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:my-[2px] lg:w-[12px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:my-[2px] xl:w-[14px]"
                  alt="CheckYellow"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
              </Row>
              <Line className="w-[49%] bg-gray_301 flex-wrap min-h-[auto]" />
              <Row className="3xl:my-[12px] font-dmsans1 items-center justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:my-[2px] lg:w-[12px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
              </Row>
              <Line className="w-[49%] bg-gray_301 flex-wrap min-h-[auto]" />
              <Row className="3xl:my-[12px] font-dmsans1 items-center justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:my-[2px] lg:w-[12px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
              </Row>
              <Line className="w-[49%] bg-gray_301 flex-wrap min-h-[auto]" />
              <Row className="3xl:my-[12px] font-dmsans1 items-center justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:my-[2px] lg:w-[12px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
              </Row>
              <Line className="w-[49%] bg-gray_301 flex-wrap min-h-[auto]" />
              <Row className="3xl:my-[12px] font-dmsans1 items-center justify-start lg:my-[7px] my-[10px] self-stretch w-[100%] xl:my-[8px]">
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:my-[2px] lg:w-[12px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
                <Image
                  src="img_checkyellow.svg"
                  className="2xl:h-[17px] 3xl:h-[20px] 3xl:ml-[148px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:ml-[96px] lg:my-[2px] lg:w-[12px] ml-[124px] my-[3px] object-contain w-[16px] xl:h-[15px] xl:ml-[110px] xl:my-[2px] xl:w-[14px]"
                  alt="checkcircle1"
                />
                <Text className="3xl:ml-[12px] 3xl:text-fs18 font-normal lg:ml-[7px] lg:text-fs11 ml-[10px] opacity-op6 text-black_900_90 text-fs15 text-left tracking-ls11 xl:ml-[8px] xl:text-fs13">{`Air Conditioning`}</Text>
              </Row>
            </List>
          </Column>
        </Column>
        <Column className="3xl:mt-[180px] items-end lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:mt-[133px]">
          <Column className="3xl:ml-[12px] font-dmsans1 justify-start lg:ml-[7px] ml-[10px] w-[87%] xl:ml-[8px]">
            <Line className="3xl:mr-[12px] h-[4px] lg:mr-[7px] mr-[10px] w-[13%] xl:mr-[8px]" />
            <Text className="2xl:tracking-ls21 3xl:mr-[12px] 3xl:mt-[20px] 3xl:text-fs60 3xl:tracking-ls21 font-bold lg:mr-[7px] lg:mt-[13px] lg:text-fs38 lg:tracking-ls11 mr-[10px] mt-[17px] text-black_900 text-fs50 text-left tracking-ls1256410002708435 xl:mr-[8px] xl:mt-[15px] xl:text-fs44 xl:tracking-ls21">{`Similar listings`}</Text>
            <Column className="3xl:mt-[72px] items-center lg:mt-[46px] mt-[60px] self-stretch w-[100%] xl:mt-[53px]">
              <List
                className="3xl:gap-[37px] flex-wrap gap-[31px] grid grid-cols-4 lg:gap-[24px] min-h-[auto] self-stretch w-[100%] xl:gap-[27px]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 font-dmsans1 justify-start rounded-radius25 shadow-bs44 w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_houseexample1.png"
                      className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                      alt="Rectangle"
                    />
                  </Column>
                  <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs28 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs18 mt-[30px] mx-[30px] text-black_900 text-fs24 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs21">{`Malto House`}</Text>
                  <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
                    <Row className="font-dmsans1 items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_bed.svg"
                        className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[46px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[30px] lg:mt-[18px] mb-[25.840088px] ml-[39px] mt-[23.5px] object-contain w-[4%] xl:h-[10px] xl:mb-[22px] xl:ml-[34px] xl:mt-[20px]"
                        alt="hotelsinglebe"
                      />
                      <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[31%] xl:ml-[8px]">
                        <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[45px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[29px] ml-[38px] w-[1px] xl:h-[54px] xl:ml-[33px]" />
                        <Image
                          src="img_shower.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                          alt="bathroomtubto"
                        />
                      </Row>
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                      <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                      <Image
                        src="img_size.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[24px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[32px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[28px] xl:mt-[18px] xl:w-[14px]"
                        alt="gridartboard"
                      />
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[50px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mr-[32px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mr-[42px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mr-[37px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 font-dmsans1 justify-start rounded-radius25 shadow-bs44 w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_houseexample2.png"
                      className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                      alt="Rectangle"
                    />
                  </Column>
                  <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs28 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs18 mt-[30px] mx-[30px] text-black_900 text-fs24 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs21">{`Malto House`}</Text>
                  <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
                    <Row className="font-dmsans1 items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_bed.svg"
                        className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[46px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[30px] lg:mt-[18px] mb-[25.840088px] ml-[39px] mt-[23.5px] object-contain w-[4%] xl:h-[10px] xl:mb-[22px] xl:ml-[34px] xl:mt-[20px]"
                        alt="hotelsinglebe"
                      />
                      <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[31%] xl:ml-[8px]">
                        <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[45px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[29px] ml-[38px] w-[1px] xl:h-[54px] xl:ml-[33px]" />
                        <Image
                          src="img_shower.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                          alt="bathroomtubto"
                        />
                      </Row>
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                      <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                      <Image
                        src="img_size.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[24px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[32px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[28px] xl:mt-[18px] xl:w-[14px]"
                        alt="gridartboard"
                      />
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[50px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mr-[32px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mr-[42px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mr-[37px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 font-dmsans1 justify-start rounded-radius25 shadow-bs44 w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_houseexample3.png"
                      className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                      alt="Rectangle"
                    />
                  </Column>
                  <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs28 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs18 mt-[30px] mx-[30px] text-black_900 text-fs24 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs21">{`Malto House`}</Text>
                  <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
                    <Row className="font-dmsans1 items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_bed.svg"
                        className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[46px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[30px] lg:mt-[18px] mb-[25.840088px] ml-[39px] mt-[23.5px] object-contain w-[4%] xl:h-[10px] xl:mb-[22px] xl:ml-[34px] xl:mt-[20px]"
                        alt="hotelsinglebe"
                      />
                      <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[31%] xl:ml-[8px]">
                        <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[45px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[29px] ml-[38px] w-[1px] xl:h-[54px] xl:ml-[33px]" />
                        <Image
                          src="img_shower.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                          alt="bathroomtubto"
                        />
                      </Row>
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                      <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                      <Image
                        src="img_gridartboard_1.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[24px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[32px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[28px] xl:mt-[18px] xl:w-[14px]"
                        alt="gridartboard"
                      />
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[50px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mr-[32px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mr-[42px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mr-[37px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                    </Row>
                  </Column>
                </Column>
                <Column className="bg-white_A700 justify-start rounded-radius25 shadow-bs44 w-[100%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_houseexample4.png"
                      className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                      alt="Rectangle"
                    />
                  </Column>
                  <Column className="3xl:mt-[36px] font-dmsans1 items-end lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Text className="3xl:ml-[12px] 3xl:text-fs28 font-bold lg:ml-[7px] lg:text-fs18 ml-[10px] text-black_900 text-fs24 text-left tracking-ls11 xl:ml-[8px] xl:text-fs21">{`Malto House`}</Text>
                  </Column>
                  <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
                    <Row className="font-dmsans1 items-center justify-end overflow-auto self-stretch w-[100%]">
                      <Image
                        src="img_hotelsinglebe.svg"
                        className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[46px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[30px] lg:mt-[18px] mb-[25.840088px] ml-[39px] mt-[23.5px] object-contain w-[9%] xl:h-[10px] xl:mb-[22px] xl:ml-[34px] xl:mt-[20px]"
                        alt="hotelsinglebe"
                      />
                      <Row className="3xl:ml-[12px] items-center justify-between lg:ml-[7px] ml-[10px] px-[0] w-[59%] xl:ml-[8px]">
                        <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] bg-gray_301 h-[60px] lg:h-[47px] w-[1px] xl:h-[54px]" />
                        <Line className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:mt-[24px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:mt-[15px] mb-[24px] mt-[20px] w-[4px] xl:h-[15px] xl:mb-[21px] xl:mt-[17px]" />
                      </Row>
                      <Text className="3xl:mb-[24px] 3xl:ml-[26px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[17px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[22px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[19px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                      <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[85px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[55px] ml-[71px] w-[1px] xl:h-[54px] xl:ml-[63px]" />
                      <Line className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[124px] 3xl:mt-[25px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[80px] lg:mt-[16px] mb-[23px] ml-[104px] mt-[21px] w-[1px] xl:h-[15px] xl:mb-[20px] xl:ml-[92px] xl:mt-[18px]" />
                      <Text className="3xl:mb-[24px] 3xl:ml-[156px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[101px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[130px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[115px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                    </Row>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Column className="3xl:mt-[180px] items-center lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:mt-[133px]">
          <div className="self-stretch w-[100%]">
            <Column className="bg-gradient24  items-center justify-center self-stretch w-[100%]">
              <Row className="3xl:mt-[96px] items-center justify-evenly lg:mt-[62px] mt-[80px] px-[0] self-stretch w-[100%] xl:mt-[71px]">
                <Row className="3xl:mb-[8px] 3xl:mt-[9px] font-dmsans1 items-center justify-between lg:mb-[5px] lg:mt-[6px] mb-[7px] mt-[8px] px-[0] w-[50%] xl:mb-[6px] xl:mt-[7px]">
                  <Text className="2xl:tracking-ls21 3xl:ml-[222px] 3xl:text-fs50 3xl:tracking-ls21 font-bold lg:ml-[143px] lg:text-fs32 lg:tracking-ls11 ml-[185px] text-fs42 text-left text-white_A700 tracking-ls10553843975067139 xl:ml-[164px] xl:text-fs37 xl:tracking-ls11">{`Make your dreams a`}</Text>
                  <Text className="2xl:tracking-ls21 3xl:text-fs50 3xl:tracking-ls21 font-bold lg:text-fs32 lg:tracking-ls11 text-amber_A702 text-fs42 text-left tracking-ls10553843975067139 xl:text-fs37 xl:tracking-ls11">{`reality`}</Text>
                </Row>
                <Row className="bg-amber_A701 font-dmsans1 items-center justify-center rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[28%]">
                  <Text className="3xl:mb-[27px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs20 font-bold lg:mb-[17px] lg:ml-[31px] lg:mt-[19px] lg:text-fs13 mb-[23px] ml-[40px] mt-[25px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[20px] xl:ml-[35px] xl:mt-[22px] xl:text-fs15">{`Work with us`}</Text>
                  <Image
                    src="img_arrowwhite.svg"
                    className="2xl:h-[10px] 2xl:mb-[28px] 3xl:h-[12px] 3xl:mb-[34px] 3xl:ml-[10px] 3xl:mr-[271px] 3xl:mt-[38px] h-[9.63px] lg:h-[8px] lg:mb-[22px] lg:ml-[7px] lg:mr-[175px] lg:mt-[24px] mb-[28.370117px] ml-[9px] mr-[226px] mt-[32px] object-contain w-[5%] xl:h-[9px] xl:mb-[25px] xl:ml-[8px] xl:mr-[201px] xl:mt-[28px]"
                    alt="keyboardarrow"
                  />
                </Row>
              </Row>
              <Line className="3xl:mt-[60px] bg-white_A700_63 h-[1px] lg:mt-[38px] mt-[50px] mx-[auto] opacity-op1 w-[74%] xl:mt-[44px]" />
              <Row className="3xl:mb-[180px] 3xl:mt-[72px] justify-evenly lg:mb-[116px] lg:mt-[46px] mb-[150px] mt-[60px] px-[0] self-stretch w-[100%] xl:mb-[133px] xl:mt-[53px]">
                <Column className="3xl:mb-[64px] justify-start lg:mb-[42px] mb-[54px] mt-[1px] w-[9%] xl:mb-[48px]">
                  <Image
                    src="img_logorealestate.svg"
                    className="2xl:h-[33px] 3xl:h-[40px] 3xl:mr-[12px] h-[32.92px] lg:h-[26px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[94%] xl:h-[30px] xl:mr-[8px]"
                    alt="Group"
                  />
                  <Column className="2xl:mt-[30px] 3xl:mt-[36px] items-center lg:mt-[23px] mt-[30.52002px] self-stretch w-[100%] xl:mt-[27px]">
                    <Image
                      src="img_social_1.svg"
                      className="2xl:h-[23px] 3xl:h-[27px] h-[22px] lg:h-[18px] object-cover self-stretch w-[100%] xl:h-[20px]"
                      alt="Social"
                    />
                  </Column>
                </Column>
                <Row className="3xl:gap-[190px] 3xl:pr-[223px] gap-[159px] grid grid-cols-3 items-center justify-center lg:gap-[123px] lg:pr-[144px] pr-[186px] w-[59%] xl:gap-[141px] xl:pr-[165px]">
                  <Column className="font-dmsans1 justify-start w-[100%]">
                    <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-fs15 text-left text-white_A700 tracking-ls11 xl:text-fs13">{`Column Heading`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                  </Column>
                  <Column className="font-dmsans1 justify-start w-[100%]">
                    <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-fs15 text-left text-white_A700 tracking-ls11 xl:text-fs13">{`Column Heading`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                  </Column>
                  <Column className="font-dmsans1 justify-start w-[100%]">
                    <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-fs15 text-left text-white_A700 tracking-ls11 xl:text-fs13">{`Column Heading`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                    <Text className="3xl:mr-[12px] 3xl:mt-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[7px] lg:text-fs11 mr-[10px] mt-[10px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[8px] xl:text-fs13">{`Link goes here`}</Text>
                  </Column>
                </Row>
              </Row>
            </Column>
          </div>
        </Column>
      </Column>
    </Column>
  );
};

export default PropertyPagePage;
