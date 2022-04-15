import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Input } from "components/Input";
import { Line } from "components/Line";
import { List } from "components/List";

const LandingPage1Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="justify-start self-stretch w-[100%]">
        <Column className="items-center self-stretch w-[100%]">
          <Stack className="2xl:h-[851px] 3xl:h-[1021px] bg-black_900 h-[850px] lg:h-[662px] self-stretch w-[100%] xl:h-[757px]">
            <Image
              src="img_etiennebeaureg.png"
              className="2xl:h-[851px] 3xl:h-[1021px] absolute h-[850px] inset-[0] lg:h-[662px] object-cover self-stretch w-[100%] xl:h-[757px]"
              alt="etiennebeaureg"
            />
            <Column className="absolute bg-gradient21  font-dmsans1 inset-[0] justify-end self-stretch w-[100%]">
              <Column className="3xl:mt-[38px] items-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                <div className="mx-[auto] w-[74%]">
                  <Row className="items-center justify-between px-[0] self-stretch w-[100%]">
                    <Image
                      src="img_logorealestate.svg"
                      className="2xl:h-[33px] 2xl:my-[8px] 3xl:h-[40px] 3xl:my-[10px] h-[32.92px] lg:h-[26px] lg:my-[6px] mb-[8.520004px] ml-[1px] mt-[8.560001px] object-contain w-[12%] xl:h-[30px] xl:my-[7px]"
                      alt="LogoRealEstate"
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
                          alt="ArrowWhite"
                        />
                      </Row>
                    </Row>
                  </Row>
                </div>
              </Column>
              <Text className="2xl:leading-lh80 2xl:tracking-ls31 3xl:leading-lh96 3xl:mt-[141px] 3xl:mx-[222px] 3xl:text-fs96 3xl:tracking-ls31 font-bold leading-lh8000 lg:leading-lh62 lg:mt-[91px] lg:mx-[143px] lg:text-fs62 lg:tracking-ls21 mt-[118px] mx-[185px] text-fs80 text-left text-white_A700 tracking-ls2010256052017212 w-[36%] xl:leading-lh71 xl:mt-[104px] xl:mx-[164px] xl:text-fs71 xl:tracking-ls21">{`Beautiful homes made for you`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[26px] 3xl:mx-[222px] 3xl:text-fs24 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[17px] lg:mx-[143px] lg:text-fs15 mt-[22px] mx-[185px] opacity-op6 text-fs20 text-left text-white_A700_90 tracking-ls11 w-[30%] xl:leading-lh24 xl:mt-[19px] xl:mx-[164px] xl:text-fs17">{`In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.`}</Text>
              <div className="3xl:mt-[211px] 3xl:mx-[222px] bg-transparent border-0 lg:mt-[136px] lg:mx-[143px] mt-[176px] mx-[185px] w-[74%] xl:mt-[156px] xl:mx-[164px] input-wrap">
                <Image
                  src="img_arrow_tellow.svg"
                  className="absolute left-[184px] bg-transparent border-0 lg:left-[143px] lg:inset-y-[35px] xl:left-[163px] xl:inset-y-[40px] 2xl:inset-y-[45px] 3xl:left-[220px] 3xl:inset-y-[55px] inset-y-[45.940002px]"
                  alt="Arrow Tellow"
                />
                <Input
                  className="2xl:py-[45px] 3xl:pl-[261px] 3xl:py-[55px] 3xl:text-fs24 bg-white_A700 border-0 font-bold lg:pl-[169px] lg:py-[35px] lg:text-fs15 pl-[218px] placeholder:bg-transparent placeholder:text-black_900 py-[45.940002px] text-black_900 text-fs20 text-left tracking-ls11 w-[100%] xl:pl-[193px] xl:py-[40px] xl:text-fs17"
                  name="Group704"
                  placeholder={`See all listings`}
                ></Input>
              </div>
            </Column>
          </Stack>
          <Stack className="2xl:h-[1569px] 3xl:h-[1882px] 3xl:mt-[180px] h-[1567px] lg:h-[1219px] lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:h-[1394px] xl:mt-[133px]">
            <Stack className="2xl:h-[1569px] 3xl:h-[1882px] absolute h-[1567px] inset-[0] lg:h-[1219px] self-stretch w-[100%] xl:h-[1394px]">
              <Stack className="2xl:h-[1569px] 3xl:h-[1882px] absolute h-[1567px] inset-[0] lg:h-[1219px] self-stretch w-[100%] xl:h-[1394px]">
                <Stack className="2xl:h-[1443px] 3xl:h-[1731px] absolute h-[1441px] lg:h-[1121px] self-stretch top-[0] w-[100%] xl:h-[1282px]">
                  <Column className="absolute bg-gray_102 bottom-[0] font-dmsans1 justify-start self-stretch w-[100%]">
                    <Line className="3xl:mt-[259px] 3xl:mx-[222px] h-[4px] lg:mt-[168px] lg:mx-[143px] mt-[216px] mx-[185px] w-[12%] xl:mt-[192px] xl:mx-[164px]" />
                    <Text className="2xl:tracking-ls21 3xl:mt-[20px] 3xl:mx-[222px] 3xl:text-fs60 3xl:tracking-ls21 font-bold lg:mt-[13px] lg:mx-[143px] lg:text-fs38 lg:tracking-ls11 mt-[17px] mx-[185px] text-black_900 text-fs50 text-left tracking-ls1256410002708435 xl:mt-[15px] xl:mx-[164px] xl:text-fs44 xl:tracking-ls21">{`Find your next place to live`}</Text>
                    <Column className="3xl:mb-[441px] 3xl:mt-[72px] items-center lg:mb-[286px] lg:mt-[46px] mb-[368px] mt-[60px] self-stretch w-[100%] xl:mb-[327px] xl:mt-[53px]">
                      <Row className="bg-white_A700 font-dmsans1 items-center justify-start mx-[auto] rounded-radius25 shadow-bs44 w-[74%]">
                        <Text className="3xl:ml-[36px] 3xl:my-[58px] 3xl:text-fs20 font-bold lg:ml-[23px] lg:my-[38px] lg:text-fs13 ml-[30px] my-[49px] text-black_900 text-fs17 text-left tracking-ls11 xl:ml-[26px] xl:my-[43px] xl:text-fs15">{`Looking for`}</Text>
                        <Image
                          src="img_arrowdown1.svg"
                          className="2xl:h-[8px] 2xl:ml-[9px] 2xl:my-[56px] 3xl:h-[9px] 3xl:ml-[10px] 3xl:my-[67px] h-[7.21px] lg:h-[6px] lg:ml-[7px] lg:my-[43px] mb-[56.56006px] ml-[9.01001px] mt-[56.22998px] object-contain w-[1%] xl:h-[7px] xl:ml-[8px] xl:my-[50px]"
                          alt="arrowdown1"
                        />
                        <Line className="2xl:h-[121px] 2xl:ml-[129px] 3xl:h-[145px] 3xl:ml-[155px] bg-gray_301 h-[120px] lg:h-[94px] lg:ml-[100px] ml-[129.47px] w-[1px] xl:h-[107px] xl:ml-[115px]" />
                        <Text className="3xl:ml-[48px] 3xl:my-[58px] 3xl:text-fs20 font-bold lg:ml-[31px] lg:my-[38px] lg:text-fs13 ml-[40px] my-[49px] text-black_900 text-fs17 text-left tracking-ls11 xl:ml-[35px] xl:my-[43px] xl:text-fs15">{`Location`}</Text>
                        <Image
                          src="img_arrowdown1.svg"
                          className="2xl:h-[8px] 2xl:ml-[10px] 2xl:my-[56px] 3xl:h-[9px] 3xl:ml-[12px] 3xl:my-[67px] h-[7.21px] lg:h-[6px] lg:ml-[7px] lg:my-[43px] mb-[56.56006px] ml-[10.01001px] mt-[56.22998px] object-contain w-[1%] xl:h-[7px] xl:ml-[8px] xl:my-[50px]"
                          alt="arrowdown1"
                        />
                        <Line className="2xl:h-[121px] 2xl:ml-[136px] 3xl:h-[145px] 3xl:ml-[163px] bg-gray_301 h-[120px] lg:h-[94px] lg:ml-[106px] ml-[136.46997px] w-[1px] xl:h-[107px] xl:ml-[121px]" />
                        <Text className="3xl:ml-[36px] 3xl:my-[58px] 3xl:text-fs20 font-bold lg:ml-[23px] lg:my-[38px] lg:text-fs13 ml-[30px] my-[49px] text-black_900 text-fs17 text-left tracking-ls11 xl:ml-[26px] xl:my-[43px] xl:text-fs15">{`Property Type`}</Text>
                        <Image
                          src="img_arrowdown1.svg"
                          className="2xl:h-[8px] 2xl:ml-[9px] 2xl:my-[56px] 3xl:h-[9px] 3xl:ml-[10px] 3xl:my-[67px] h-[7.21px] lg:h-[6px] lg:ml-[7px] lg:my-[43px] mb-[56.56006px] ml-[9.01001px] mt-[56.22998px] object-contain w-[1%] xl:h-[7px] xl:ml-[8px] xl:my-[50px]"
                          alt="arrowdown1"
                        />
                        <Line className="2xl:h-[121px] 2xl:ml-[103px] 3xl:h-[145px] 3xl:ml-[124px] bg-gray_301 h-[120px] lg:h-[94px] lg:ml-[80px] ml-[103.46997px] w-[1px] xl:h-[107px] xl:ml-[92px]" />
                        <Text className="3xl:ml-[36px] 3xl:my-[58px] 3xl:text-fs20 font-bold lg:ml-[23px] lg:my-[38px] lg:text-fs13 ml-[30px] my-[49px] text-black_900 text-fs17 text-left tracking-ls11 xl:ml-[26px] xl:my-[43px] xl:text-fs15">{`Price`}</Text>
                        <Image
                          src="img_arrowdown1.svg"
                          className="2xl:h-[8px] 2xl:ml-[9px] 2xl:mr-[174px] 2xl:my-[56px] 3xl:h-[9px] 3xl:ml-[10px] 3xl:mr-[209px] 3xl:my-[67px] h-[7.21px] lg:h-[6px] lg:ml-[7px] lg:mr-[135px] lg:my-[43px] mb-[56.56006px] ml-[9.01001px] mr-[174.46997px] mt-[56.22998px] object-contain w-[1%] xl:h-[7px] xl:ml-[8px] xl:mr-[155px] xl:my-[50px]"
                          alt="arrowdown1"
                        />
                      </Row>
                    </Column>
                  </Column>
                  <Row className="absolute justify-between left-[0] px-[0] top-[0] w-[86%]">
                    <Image
                      src="img_contentimagel.png"
                      className="2xl:h-[658px] 3xl:h-[789px] h-[657px] lg:h-[511px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[57px] w-[57%] xl:h-[585px]"
                      alt="ContentImagel"
                    />
                    <Column className="3xl:mb-[204px] 3xl:mt-[135px] font-dmsans1 justify-start lg:mb-[132px] lg:mt-[87px] mb-[170px] mt-[113px] w-[38%] xl:mb-[151px] xl:mt-[100px]">
                      <Line className="3xl:mr-[12px] h-[4px] lg:mr-[7px] mr-[10px] w-[36%] xl:mr-[8px]" />
                      <Text className="2xl:tracking-ls21 3xl:mt-[20px] 3xl:text-fs60 3xl:tracking-ls21 font-bold lg:mt-[13px] lg:text-fs38 lg:tracking-ls11 mt-[17px] self-stretch text-black_900 text-fs50 text-left tracking-ls1256410002708435 xl:mt-[15px] xl:text-fs44 xl:tracking-ls21">{`You’re in good hands`}</Text>
                      <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-normal leading-lh2800 lg:leading-lh21 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] opacity-op6 text-black_900_90 text-fs20 text-left tracking-ls11 w-[90%] xl:leading-lh24 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.`}</Text>
                      <Row className="3xl:mr-[12px] 3xl:mt-[36px] bg-black_900 font-dmsans1 items-center justify-start lg:mr-[7px] lg:mt-[23px] mr-[10px] mt-[30px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[44%] xl:mr-[8px] xl:mt-[26px]">
                        <Text className="3xl:mb-[27px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs20 font-bold lg:mb-[17px] lg:ml-[31px] lg:mt-[19px] lg:text-fs13 mb-[23px] ml-[40px] mt-[25px] text-fs17 text-left text-white_A700 tracking-ls11 xl:mb-[20px] xl:ml-[35px] xl:mt-[22px] xl:text-fs15">{`Learn more`}</Text>
                        <Image
                          src="img_keyboardarrow.svg"
                          className="2xl:h-[10px] 2xl:mb-[28px] 3xl:h-[12px] 3xl:mb-[34px] 3xl:ml-[22px] 3xl:mr-[48px] 3xl:mt-[38px] h-[9.63px] lg:h-[8px] lg:mb-[22px] lg:ml-[14px] lg:mr-[31px] lg:mt-[24px] mb-[28.369995px] ml-[19px] mr-[40px] mt-[32px] object-contain w-[10%] xl:h-[9px] xl:mb-[25px] xl:ml-[16px] xl:mr-[35px] xl:mt-[28px]"
                          alt="keyboardarrow"
                        />
                      </Row>
                    </Column>
                  </Row>
                </Stack>
                <Column className="3xl:left-[222px] absolute bg-white_A700 bottom-[0] font-dmsans1 justify-start left-[185px] lg:left-[143px] rounded-radius25 shadow-bs44 w-[23%] xl:left-[164px]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Image
                      src="img_houseexample1.png"
                      className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                      alt="HouseExample1"
                    />
                  </Column>
                  <Text className="3xl:mt-[36px] 3xl:mx-[36px] 3xl:text-fs28 font-bold lg:mt-[23px] lg:mx-[23px] lg:text-fs18 mt-[30px] mx-[30px] text-black_900 text-fs24 text-left tracking-ls11 xl:mt-[26px] xl:mx-[26px] xl:text-fs21">{`Malto House`}</Text>
                  <Column className="3xl:mt-[36px] items-center lg:mt-[23px] mt-[30px] self-stretch w-[100%] xl:mt-[26px]">
                    <Line className="bg-gray_301 h-[1px] self-stretch w-[100%]" />
                    <Row className="font-dmsans1 items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_bed.svg"
                        className="2xl:h-[11px] 2xl:mb-[25px] 2xl:mt-[23px] 3xl:h-[13px] 3xl:mb-[31px] 3xl:ml-[46px] 3xl:mt-[28px] h-[10.66px] lg:h-[9px] lg:mb-[20px] lg:ml-[30px] lg:mt-[18px] mb-[25.840088px] ml-[39px] mt-[23.5px] object-contain w-[4%] xl:h-[10px] xl:mb-[22px] xl:ml-[34px] xl:mt-[20px]"
                        alt="Bed"
                      />
                      <Row className="3xl:ml-[12px] items-center justify-center lg:ml-[7px] ml-[10px] w-[31%] xl:ml-[8px]">
                        <Text className="3xl:mb-[24px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:mt-[14px] lg:text-fs13 mb-[20px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:mt-[16px] xl:text-fs15">{`4`}</Text>
                        <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[45px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[29px] ml-[38px] w-[1px] xl:h-[54px] xl:ml-[33px]" />
                        <Image
                          src="img_shower.svg"
                          className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                          alt="Shower"
                        />
                      </Row>
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                      <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                      <Image
                        src="img_size.svg"
                        className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[24px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[32px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[28px] xl:mt-[18px] xl:w-[14px]"
                        alt="Size"
                      />
                      <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[50px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mr-[32px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mr-[42px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mr-[37px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                    </Row>
                  </Column>
                </Column>
              </Stack>
              <Column className="absolute bg-white_A700 bottom-[0] font-dmsans1 inset-x-[0] justify-start mx-[auto] rounded-radius25 shadow-bs44 w-[23%]">
                <Column className="items-center self-stretch w-[100%]">
                  <Image
                    src="img_houseexample2.png"
                    className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                    alt="HouseExample2"
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
            </Stack>
            <Column className="3xl:right-[222px] absolute bg-white_A700 bottom-[0] font-dmsans1 justify-start lg:right-[143px] right-[185px] rounded-radius25 shadow-bs44 w-[23%] xl:right-[164px]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_houseexample3.png"
                  className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                  alt="HouseExample3"
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
          </Stack>
          <List
            className="3xl:gap-[37px] 3xl:mt-[36px] flex-wrap gap-[31px] grid grid-cols-3 lg:gap-[24px] lg:mt-[23px] min-h-[auto] mt-[30px] mx-[auto] w-[74%] xl:gap-[27px] xl:mt-[26px]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 font-dmsans1 justify-start rounded-radius25 shadow-bs44 w-[100%]">
              <Column className="items-center self-stretch w-[100%]">
                <Image
                  src="img_houseexample4.png"
                  className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                  alt="HouseExample4"
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
                      src="img_bathroomtubto.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                      alt="bathroomtubto"
                    />
                  </Row>
                  <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                  <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                  <Image
                    src="img_gridartboard.svg"
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
                      src="img_bathroomtubto.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                      alt="bathroomtubto"
                    />
                  </Row>
                  <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                  <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                  <Image
                    src="img_gridartboard.svg"
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
                  src="img_houseexample5.png"
                  className="2xl:h-[267px] 3xl:h-[320px] h-[266px] lg:h-[207px] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[25px] rounded-tr-[25px] self-stretch w-[100%] xl:h-[237px]"
                  alt="HouseExample5"
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
                      src="img_bathroomtubto.svg"
                      className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[28px] 3xl:ml-[44px] 3xl:mt-[24px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[18px] lg:ml-[28px] lg:mt-[15px] lg:w-[12px] mb-[24px] ml-[37px] mt-[20px] object-contain w-[16px] xl:h-[15px] xl:mb-[21px] xl:ml-[32px] xl:mt-[17px] xl:w-[14px]"
                      alt="bathroomtubto"
                    />
                  </Row>
                  <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                  <Line className="2xl:h-[61px] 3xl:h-[73px] 3xl:ml-[46px] bg-gray_301 h-[60px] lg:h-[47px] lg:ml-[30px] ml-[39px] w-[1px] xl:h-[54px] xl:ml-[34px]" />
                  <Image
                    src="img_gridartboard.svg"
                    className="2xl:h-[17px] 3xl:h-[20px] 3xl:mb-[27px] 3xl:ml-[38px] 3xl:mt-[25px] 3xl:w-[19px] h-[16px] lg:h-[13px] lg:mb-[17px] lg:ml-[24px] lg:mt-[16px] lg:w-[12px] mb-[23px] ml-[32px] mt-[21px] object-contain w-[16px] xl:h-[15px] xl:mb-[20px] xl:ml-[28px] xl:mt-[18px] xl:w-[14px]"
                    alt="gridartboard"
                  />
                  <Text className="3xl:mb-[24px] 3xl:ml-[12px] 3xl:mr-[50px] 3xl:mt-[21px] 3xl:text-fs20 font-bold lg:mb-[15px] lg:ml-[7px] lg:mr-[32px] lg:mt-[14px] lg:text-fs13 mb-[20px] ml-[10px] mr-[42px] mt-[18px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[17px] xl:ml-[8px] xl:mr-[37px] xl:mt-[16px] xl:text-fs15">{`2`}</Text>
                </Row>
              </Column>
            </Column>
          </List>
        </Column>
        <Column className="3xl:mt-[266px] items-end lg:mt-[172px] mt-[222px] self-stretch w-[100%] xl:mt-[197px]">
          <Row className="3xl:ml-[12px] font-dmsans1 items-end justify-end lg:ml-[7px] ml-[10px] w-[87%] xl:ml-[8px]">
            <Column className="3xl:mt-[339px] justify-start lg:mt-[220px] mt-[283px] w-[38%] xl:mt-[251px]">
              <Line className="3xl:mr-[12px] h-[4px] lg:mr-[7px] mr-[10px] w-[36%] xl:mr-[8px]" />
              <Text className="2xl:tracking-ls21 3xl:mt-[20px] 3xl:text-fs60 3xl:tracking-ls21 font-bold lg:mt-[13px] lg:text-fs38 lg:tracking-ls11 mt-[17px] self-stretch text-black_900 text-fs50 text-left tracking-ls1256410002708435 xl:mt-[15px] xl:text-fs44 xl:tracking-ls21">{`You’re in good hands`}</Text>
              <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mr-[12px] 3xl:mt-[24px] 3xl:text-fs24 font-normal leading-lh2800 lg:leading-lh21 lg:mr-[7px] lg:mt-[15px] lg:text-fs15 mr-[10px] mt-[20px] opacity-op6 text-black_900_90 text-fs20 text-left tracking-ls11 w-[90%] xl:leading-lh24 xl:mr-[8px] xl:mt-[17px] xl:text-fs17">{`Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.`}</Text>
              <Row className="3xl:mr-[12px] 3xl:mt-[36px] bg-black_900 font-dmsans1 items-center justify-start lg:mr-[7px] lg:mt-[23px] mr-[10px] mt-[30px] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[44%] xl:mr-[8px] xl:mt-[26px]">
                <Text className="3xl:mb-[27px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs20 font-bold lg:mb-[17px] lg:ml-[31px] lg:mt-[19px] lg:text-fs13 mb-[23px] ml-[40px] mt-[25px] text-fs17 text-left text-white_A700 tracking-ls11 xl:mb-[20px] xl:ml-[35px] xl:mt-[22px] xl:text-fs15">{`Learn more`}</Text>
                <Image
                  src="img_keyboardarrow.svg"
                  className="2xl:h-[10px] 2xl:mb-[28px] 3xl:h-[12px] 3xl:mb-[34px] 3xl:ml-[22px] 3xl:mr-[48px] 3xl:mt-[38px] h-[9.63px] lg:h-[8px] lg:mb-[22px] lg:ml-[14px] lg:mr-[31px] lg:mt-[24px] mb-[28.370117px] ml-[19px] mr-[40px] mt-[32px] object-contain w-[10%] xl:h-[9px] xl:mb-[25px] xl:ml-[16px] xl:mr-[35px] xl:mt-[28px]"
                  alt="keyboardarrow"
                />
              </Row>
            </Column>
            <Image
              src="img_rectangle_3.png"
              className="2xl:h-[658px] 3xl:h-[789px] 3xl:ml-[92px] h-[657px] lg:h-[511px] lg:ml-[59px] ml-[77px] object-contain rounded-bl-[0] rounded-br-[0] rounded-tl-[57px] rounded-tr-[0] w-[56%] xl:h-[585px] xl:ml-[68px]"
              alt="Rectangle"
            />
          </Row>
        </Column>
        <Column className="3xl:mt-[180px] items-center lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:mt-[133px]">
          <Column className="bg-gradient22  font-dmsans1 items-center justify-center self-stretch w-[100%]">
            <Line className="3xl:mt-[180px] h-[4px] lg:mt-[116px] mt-[150px] mx-[auto] w-[12%] xl:mt-[133px]" />
            <Text className="2xl:tracking-ls21 3xl:mt-[20px] 3xl:text-fs60 3xl:tracking-ls21 font-bold lg:mt-[13px] lg:text-fs38 lg:tracking-ls11 mt-[17px] mx-[auto] text-center text-fs50 text-white_A700 tracking-ls1256410002708435 xl:mt-[15px] xl:text-fs44 xl:tracking-ls21">{`You’re in good hands`}</Text>
            <Text className="2xl:leading-lh28 3xl:leading-lh33 3xl:mt-[24px] 3xl:text-fs24 font-normal leading-lh2800 lg:leading-lh21 lg:mt-[15px] lg:text-fs15 mt-[20px] mx-[auto] opacity-op6 text-center text-fs20 text-white_A700_90 tracking-ls11 w-[30%] xl:leading-lh24 xl:mt-[17px] xl:text-fs17">{`Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.`}</Text>
            <Row className="3xl:mb-[180px] 3xl:mt-[36px] bg-amber_A701 font-dmsans1 items-center justify-center lg:mb-[116px] lg:mt-[23px] mb-[150px] mt-[30px] mx-[auto] rounded-bl-[0] rounded-br-[0] rounded-tl-[0] rounded-tr-[18px] w-[15%] xl:mb-[133px] xl:mt-[26px]">
              <Text className="3xl:mb-[27px] 3xl:ml-[48px] 3xl:mt-[30px] 3xl:text-fs20 font-bold lg:mb-[17px] lg:ml-[31px] lg:mt-[19px] lg:text-fs13 mb-[23px] ml-[40px] mt-[25px] text-black_900 text-fs17 text-left tracking-ls11 xl:mb-[20px] xl:ml-[35px] xl:mt-[22px] xl:text-fs15">{`Learn more`}</Text>
              <Image
                src="img_arrowwhite.svg"
                className="2xl:h-[10px] 2xl:mb-[28px] 3xl:h-[12px] 3xl:mb-[34px] 3xl:ml-[22px] 3xl:mr-[48px] 3xl:mt-[38px] h-[9.63px] lg:h-[8px] lg:mb-[22px] lg:ml-[14px] lg:mr-[31px] lg:mt-[24px] mb-[28.370117px] ml-[19px] mr-[40px] mt-[32px] object-contain w-[10%] xl:h-[9px] xl:mb-[25px] xl:ml-[16px] xl:mr-[35px] xl:mt-[28px]"
                alt="keyboardarrow"
              />
            </Row>
          </Column>
          <Column className="3xl:mt-[180px] font-dmsans1 items-center justify-start lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:mt-[133px]">
            <Line className="bg-gradient23  h-[4px] mx-[auto] rounded-radius2 w-[23%]" />
            <Text className="3xl:mt-[48px] 3xl:text-fs28 font-bold leading-lh lg:mt-[31px] lg:text-fs18 mt-[40px] mx-[auto] text-black_900 text-fs24 text-left tracking-ls11 w-[23%] xl:mt-[35px] xl:text-fs21">{`“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”`}</Text>
            <List
              className="3xl:gap-[37px] 3xl:mt-[72px] flex-wrap gap-[31px] grid grid-cols-3 lg:gap-[24px] lg:mt-[46px] min-h-[auto] mt-[60px] mx-[auto] w-[74%] xl:gap-[27px] xl:mt-[53px]"
              orientation="horizontal"
            >
              <Row className="bg-white_A700 items-center justify-start w-[100%]">
                <Image
                  src="img_oval.png"
                  className="2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[48px] 3xl:my-[55px] h-[49px] lg:h-[39px] lg:ml-[31px] lg:my-[35px] ml-[40px] my-[46px] object-contain rounded-radius50 w-[15%] xl:h-[44px] xl:ml-[35px] xl:my-[40px]"
                  alt="Oval"
                />
                <Column className="3xl:mb-[57px] 3xl:ml-[24px] 3xl:mr-[160px] 3xl:mt-[58px] font-dmsans1 justify-start lg:mb-[37px] lg:ml-[15px] lg:mr-[104px] lg:mt-[38px] mb-[48px] ml-[20px] mr-[134px] mt-[49px] w-[28%] xl:mb-[42px] xl:ml-[17px] xl:mr-[119px] xl:mt-[43px]">
                  <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-black_900 text-fs15 text-left tracking-ls11 xl:text-fs13">{`Lara Madrigal`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs11 mr-[10px] mt-[4px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[3px] xl:text-fs13">{`Client`}</Text>
                </Column>
              </Row>
              <Row className="bg-black_900 items-center justify-center w-[100%]">
                <Image
                  src="img_oval.png"
                  className="2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[48px] 3xl:my-[55px] h-[49px] lg:h-[39px] lg:ml-[31px] lg:my-[35px] ml-[40px] my-[46px] object-contain rounded-radius50 w-[15%] xl:h-[44px] xl:ml-[35px] xl:my-[40px]"
                  alt="Oval"
                />
                <Column className="3xl:mb-[57px] 3xl:ml-[24px] 3xl:mr-[160px] 3xl:mt-[58px] font-dmsans1 justify-start lg:mb-[37px] lg:ml-[15px] lg:mr-[104px] lg:mt-[38px] mb-[48px] ml-[20px] mr-[134px] mt-[49px] w-[28%] xl:mb-[42px] xl:ml-[17px] xl:mr-[119px] xl:mt-[43px]">
                  <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-fs15 text-left text-white_A700 tracking-ls11 xl:text-fs13">{`Lara Madrigal`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs11 mr-[10px] mt-[4px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[3px] xl:text-fs13">{`Client`}</Text>
                </Column>
              </Row>
              <Row className="bg-white_A700 items-center justify-center w-[100%]">
                <Image
                  src="img_oval.png"
                  className="2xl:h-[50px] 3xl:h-[59px] 3xl:ml-[48px] 3xl:my-[55px] h-[49px] lg:h-[39px] lg:ml-[31px] lg:my-[35px] ml-[40px] my-[46px] object-contain rounded-radius50 w-[15%] xl:h-[44px] xl:ml-[35px] xl:my-[40px]"
                  alt="Oval"
                />
                <Column className="3xl:mb-[57px] 3xl:ml-[24px] 3xl:mr-[160px] 3xl:mt-[58px] font-dmsans1 justify-start lg:mb-[37px] lg:ml-[15px] lg:mr-[104px] lg:mt-[38px] mb-[48px] ml-[20px] mr-[134px] mt-[49px] w-[28%] xl:mb-[42px] xl:ml-[17px] xl:mr-[119px] xl:mt-[43px]">
                  <Text className="3xl:text-fs18 font-bold lg:text-fs11 self-stretch text-black_900 text-fs15 text-left tracking-ls11 xl:text-fs13">{`Lara Madrigal`}</Text>
                  <Text className="3xl:mr-[12px] 3xl:text-fs18 font-normal lg:mr-[7px] lg:mt-[3px] lg:text-fs11 mr-[10px] mt-[4px] text-fs15 text-gray_503 text-left tracking-ls11 xl:mr-[8px] xl:mt-[3px] xl:text-fs13">{`Client`}</Text>
                </Column>
              </Row>
            </List>
          </Column>
          <div className="3xl:mt-[180px] lg:mt-[116px] mt-[150px] self-stretch w-[100%] xl:mt-[133px]">
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
                    src="img_group_14.svg"
                    className="2xl:h-[33px] 3xl:h-[40px] 3xl:mr-[12px] h-[32.92px] lg:h-[26px] lg:mr-[7px] ml-[1px] mr-[10px] object-contain w-[94%] xl:h-[30px] xl:mr-[8px]"
                    alt="Group"
                  />
                  <Column className="2xl:mt-[30px] 3xl:mt-[36px] items-center lg:mt-[23px] mt-[30.52002px] self-stretch w-[100%] xl:mt-[27px]">
                    <Image
                      src="img_social.svg"
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

export default LandingPage1Page;
