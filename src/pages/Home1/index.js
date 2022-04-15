import React from "react";

import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Image } from "components/Image";
import { Row } from "components/Row";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { TextArea } from "components/TextArea";

const Home1Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-start ml-[auto] mr-[auto] w-[100%]">
      <Column className="items-center justify-start self-stretch w-[100%]">
        <Stack className="2xl:h-[1171px] 3xl:h-[1405px] h-[1170px] lg:h-[910px] self-stretch w-[100%] xl:h-[1041px]">
          <Stack className="2xl:h-[1171px] 3xl:h-[1405px] absolute h-[1170px] inset-[0] lg:h-[910px] self-stretch w-[100%] xl:h-[1041px]">
            <Image
              src="img_rectangle1.svg"
              className="2xl:h-[1171px] 3xl:h-[1405px] absolute h-[1170px] inset-[0] lg:h-[910px] object-cover opacity-op95 self-stretch w-[100%] xl:h-[1041px]"
              alt="Rectangle1"
            />
            <div className="absolute self-stretch top-[0] w-[100%]">
              <Row className="font-raleway justify-end self-stretch w-[100%]">
                <Row className="3xl:mb-[33px] 3xl:ml-[76px] 3xl:mt-[21px] items-center justify-center lg:mb-[21px] lg:ml-[49px] lg:mt-[14px] mb-[28px] ml-[64px] mt-[18px] w-[13%] xl:mb-[24px] xl:ml-[56px] xl:mt-[16px]">
                  <Image
                    src="img_archive.svg"
                    className="2xl:h-[51px] 3xl:h-[61px] 3xl:w-[60px] h-[50px] lg:h-[39px] lg:w-[38px] object-contain w-[50px] xl:h-[45px] xl:w-[44px]"
                    alt="archive"
                  />
                  <Text className="2xl:text-fs28 3xl:ml-[19px] 3xl:mr-[18px] 3xl:text-fs34 font-extrabold lg:ml-[12px] lg:mr-[11px] lg:text-fs22 ml-[16px] mr-[15px] text-fs28432889938354492 text-left text-white_A700 uppercase xl:ml-[14px] xl:mr-[13px] xl:text-fs25">{`Logo Here`}</Text>
                </Row>
                <Row className="2xl:ml-[258px] 2xl:my-[2px] 3xl:ml-[310px] 3xl:my-[3px] items-center justify-center lg:ml-[201px] lg:my-[1px] ml-[258.44px] my-[2.5px] w-[41%] xl:ml-[229px] xl:my-[2px]">
                  <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Home`}</Text>
                  <Row className="3xl:ml-[74px] font-raleway items-center justify-center lg:ml-[48px] ml-[62px] w-[40%] xl:ml-[55px]">
                    <Text className="3xl:my-[38px] 3xl:text-fs19 font-bold lg:my-[24px] lg:text-fs12 my-[32px] text-center text-fs16 text-white_A700 uppercase xl:my-[28px] xl:text-fs14">{`About`}</Text>
                    <Row className="3xl:ml-[67px] items-center justify-center lg:ml-[43px] ml-[56px] w-[32%] xl:ml-[49px]">
                      <Text className="3xl:ml-[7px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[4px] lg:my-[24px] lg:text-fs12 ml-[6px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[5px] xl:my-[28px] xl:text-fs14">{`Project`}</Text>
                      <Image
                        src="img_chevrondown_8.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:ml-[6px] 3xl:mr-[7px] 3xl:my-[45px] h-[15px] lg:h-[12px] lg:ml-[3px] lg:mr-[4px] lg:my-[29px] ml-[5px] mr-[6px] my-[38px] object-contain w-[13%] xl:h-[14px] xl:ml-[4px] xl:mr-[5px] xl:my-[33px]"
                        alt="chevrondown"
                      />
                    </Row>
                    <Text className="3xl:ml-[67px] 3xl:my-[38px] 3xl:text-fs19 font-bold lg:ml-[43px] lg:my-[24px] lg:text-fs12 ml-[56px] my-[32px] text-center text-fs16 text-white_A700 uppercase xl:ml-[49px] xl:my-[28px] xl:text-fs14">{`Price`}</Text>
                  </Row>
                  <Row className="2xl:ml-[62px] 3xl:ml-[74px] 3xl:mr-[7px] 3xl:my-[38px] font-raleway items-center justify-between lg:ml-[48px] lg:mr-[4px] lg:my-[24px] ml-[62.00006px] mr-[6px] my-[32px] px-[0] w-[37%] xl:ml-[55px] xl:mr-[5px] xl:my-[28px]">
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Team`}</Text>
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Contact`}</Text>
                    <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-center text-fs16 text-white_A700 uppercase xl:text-fs14">{`Blog`}</Text>
                  </Row>
                </Row>
                <Button className="2xl:ml-[345px] 2xl:py-[21px] 3xl:mb-[18px] 3xl:ml-[414px] 3xl:mr-[68px] 3xl:mt-[26px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold lg:mb-[11px] lg:ml-[268px] lg:mr-[44px] lg:mt-[17px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mb-[15px] ml-[345.43994px] mr-[57px] mt-[22px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[9%] xl:mb-[13px] xl:ml-[307px] xl:mr-[50px] xl:mt-[19px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Order Now`}</Button>
              </Row>
            </div>
          </Stack>
          <Column className="3xl:top-[428px] absolute font-raleway inset-x-[0] items-center justify-start lg:top-[277px] mx-[auto] top-[357px] w-[40%] xl:top-[317px]">
            <Text className="2xl:text-fs67 3xl:text-fs80 font-extrabold font-raleway leading-lh lg:text-fs52 self-stretch text-center text-fs673431625366211 text-white_A700 uppercase w-[100%] xl:text-fs59">
              {
                <>
                  {`Easy Create Your`}
                  <br />
                  {`Awesome Package`}
                </>
              }
            </Text>
            <Text className="3xl:mt-[38px] 3xl:text-fs19 font-normal font-roboto lg:mt-[24px] lg:text-fs12 mt-[32px] mx-[auto] text-center text-fs16 text-gray_102 w-[74%] xl:mt-[28px] xl:text-fs14">{`Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
            <Row className="3xl:mt-[38px] font-raleway items-center justify-center lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
              <Button className="2xl:py-[21px] 3xl:ml-[250px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold lg:ml-[162px] lg:px-[24px] lg:py-[16px] lg:text-fs12 ml-[209px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[21%] xl:ml-[185px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`order Now`}</Button>
              <Button className="2xl:py-[21px] 3xl:ml-[38px] 3xl:mr-[250px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-transparent border border-gray_102 border-solid font-extrabold lg:ml-[24px] lg:mr-[162px] lg:px-[24px] lg:py-[16px] lg:text-fs12 ml-[32px] mr-[209px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-gray_102 uppercase w-[20%] xl:ml-[28px] xl:mr-[185px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Pre-Order`}</Button>
            </Row>
          </Column>
        </Stack>
        <Row className="3xl:gap-[36px] 3xl:px-[450px] gap-[30px] grid grid-cols-4 items-center justify-center lg:gap-[23px] lg:px-[291px] px-[375px] self-stretch w-[100%] xl:gap-[26px] xl:px-[333px]">
          <Image
            src="img_frame5.svg"
            className="2xl:h-[271px] 3xl:h-[325px] h-[270px] lg:h-[210px] object-contain w-[100%] xl:h-[241px]"
            alt="Frame5"
          />
          <Image
            src="img_frame6.svg"
            className="2xl:h-[271px] 3xl:h-[325px] h-[270px] lg:h-[210px] object-contain w-[100%] xl:h-[241px]"
            alt="Frame6"
          />
          <Image
            src="img_frame7.svg"
            className="2xl:h-[271px] 3xl:h-[325px] h-[270px] lg:h-[210px] object-contain w-[100%] xl:h-[241px]"
            alt="Frame7"
          />
          <Image
            src="img_frame8.svg"
            className="2xl:h-[271px] 3xl:h-[325px] h-[270px] lg:h-[210px] object-contain w-[100%] xl:h-[241px]"
            alt="Frame8"
          />
        </Row>
        <Row className="3xl:gap-[168px] 3xl:mt-[54px] 3xl:px-[516px] font-raleway gap-[140px] grid grid-cols-4 items-center justify-center lg:gap-[108px] lg:mt-[35px] lg:px-[334px] mt-[45px] px-[430px] self-stretch w-[100%] xl:gap-[124px] xl:mt-[40px] xl:px-[382px]">
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Service Ipsum dolor sit`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Service Ipsum dolor sit`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Service Ipsum dolor sit`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Service Ipsum dolor sit`}</Text>
        </Row>
      </Column>
      <Stack className="2xl:h-[1829px] 3xl:h-[2194px] 3xl:mt-[318px] h-[1827px] lg:h-[1421px] lg:mt-[206px] mt-[265px] self-stretch w-[100%] xl:h-[1626px] xl:mt-[235px]">
        <Stack className="2xl:h-[1829px] 3xl:h-[2194px] absolute font-raleway h-[1827px] inset-[0] lg:h-[1421px] self-stretch w-[100%] xl:h-[1626px]">
          <Stack className="2xl:h-[1829px] 3xl:h-[2194px] absolute h-[1827px] inset-[0] lg:h-[1421px] self-stretch w-[100%] xl:h-[1626px]">
            <Image
              src="img_union.svg"
              className="2xl:h-[1544px] 3xl:h-[1852px] absolute bottom-[0] h-[1542px] lg:h-[1200px] object-cover opacity-op95 self-stretch w-[100%] xl:h-[1372px]"
              alt="Union"
            />
            <Image
              src="img_maskgroup_30.svg"
              className="2xl:h-[571px] 3xl:h-[685px] 3xl:left-[450px] 3xl:w-[684px] absolute h-[570px] left-[375px] lg:h-[444px] lg:left-[291px] lg:w-[443px] object-contain top-[0] w-[570px] xl:h-[508px] xl:left-[333px] xl:w-[507px]"
              alt="MaskGroup"
            />
          </Stack>
          <Text className="2xl:text-fs50 3xl:right-[446px] 3xl:text-fs60 absolute font-extrabold lg:right-[289px] lg:text-fs39 right-[372px] text-fs5052069854736328 text-gray_910 text-left top-[0] uppercase xl:right-[330px] xl:text-fs44">{`About Our Service`}</Text>
        </Stack>
        <Column className="3xl:top-[117px] absolute inset-x-[0] justify-start lg:top-[76px] mx-[auto] top-[98px] w-[81%] xl:top-[87px]">
          <Column className="font-roboto items-end self-stretch w-[100%]">
            <Text className="3xl:mx-[228px] 3xl:text-fs19 font-normal font-roboto lg:mx-[147px] lg:text-fs12 mx-[190px] text-fs16 text-gray_600 text-left w-[37%] xl:mx-[169px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}</Text>
            <Button className="2xl:py-[21px] 3xl:mt-[38px] 3xl:mx-[614px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold font-raleway lg:mt-[24px] lg:mx-[398px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mt-[32px] mx-[512px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[16%] xl:mt-[28px] xl:mx-[455px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Design Your PAckage`}</Button>
          </Column>
          <Column className="3xl:mt-[563px] font-raleway items-center lg:mt-[364px] mt-[469px] self-stretch w-[100%] xl:mt-[417px]">
            <Text className="2xl:text-fs50 3xl:text-fs60 font-extrabold font-raleway lg:text-fs39 mx-[auto] text-center text-fs5052069854736328 text-white_A700 uppercase xl:text-fs44">{`Our Project Showcase`}</Text>
            <Text className="3xl:mt-[38px] 3xl:text-fs19 font-normal font-roboto lg:mt-[24px] lg:text-fs12 mt-[32px] mx-[auto] text-center text-fs16 text-gray_102 w-[37%] xl:mt-[28px] xl:text-fs14">{`Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
            <Row className="3xl:mt-[120px] font-raleway items-center justify-between lg:mt-[77px] mt-[100px] px-[0] self-stretch w-[100%] xl:mt-[88px]">
              <Image
                src="img_group49.svg"
                className="2xl:h-[101px] 3xl:h-[121px] 3xl:my-[162px] 3xl:w-[120px] h-[100px] lg:h-[78px] lg:my-[105px] lg:w-[77px] my-[135px] object-contain w-[100px] xl:h-[89px] xl:my-[120px] xl:w-[88px]"
                alt="Group49"
              />
              <Row className="3xl:gap-[36px] gap-[30px] grid grid-cols-3 items-center justify-start lg:gap-[23px] w-[75%] xl:gap-[26px]">
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_400 h-[370px] lg:h-[288px] rounded-radius2 w-[100%] xl:h-[330px]"></div>
                <Column className="bg-gray_400 items-center justify-center rounded-radius2 w-[100%]">
                  <Button className="2xl:py-[21px] 3xl:mb-[187px] 3xl:mt-[186px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-transparent border border-solid border-white_A700 font-extrabold lg:mb-[121px] lg:mt-[120px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mb-[156px] mt-[155px] mx-[auto] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[47%] xl:mb-[138px] xl:mt-[137px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`View details`}</Button>
                </Column>
                <div className="2xl:h-[371px] 3xl:h-[445px] bg-gray_400 h-[370px] lg:h-[288px] rounded-radius2 w-[100%] xl:h-[330px]"></div>
              </Row>
              <Image
                src="img_group50.svg"
                className="2xl:h-[101px] 3xl:h-[121px] 3xl:my-[162px] 3xl:w-[120px] h-[100px] lg:h-[78px] lg:my-[105px] lg:w-[77px] my-[135px] object-contain w-[100px] xl:h-[89px] xl:my-[120px] xl:w-[88px]"
                alt="Group50"
              />
            </Row>
          </Column>
        </Column>
      </Stack>
      <Column className="3xl:mt-[120px] font-raleway items-center justify-start lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:mt-[88px]">
        <Text className="2xl:text-fs50 3xl:text-fs60 font-extrabold font-raleway lg:text-fs39 mx-[auto] text-center text-fs5052069854736328 text-gray_910 uppercase xl:text-fs44">{`Meet Our Teams`}</Text>
        <Text className="3xl:mt-[38px] 3xl:text-fs19 font-normal font-roboto lg:mt-[24px] lg:text-fs12 mt-[32px] mx-[auto] text-center text-fs16 text-gray_600 w-[30%] xl:mt-[28px] xl:text-fs14">{`Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
        <Row className="3xl:gap-[36px] 3xl:mt-[120px] 3xl:px-[450px] gap-[30px] grid grid-cols-3 items-center justify-center lg:gap-[23px] lg:mt-[77px] lg:px-[291px] mt-[100px] px-[375px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[88px] xl:px-[333px]">
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
        </Row>
        <Row className="3xl:gap-[288px] 3xl:mt-[38px] 3xl:px-[576px] font-raleway gap-[240px] grid grid-cols-3 items-center justify-center lg:gap-[186px] lg:mt-[24px] lg:px-[373px] mt-[32px] px-[480px] self-stretch w-[100%] xl:gap-[213px] xl:mt-[28px] xl:px-[427px]">
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Alex Barton`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Marta Timoty`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Samuel Lee`}</Text>
        </Row>
        <Row className="3xl:gap-[36px] 3xl:mt-[115px] 3xl:px-[450px] gap-[30px] grid grid-cols-3 items-center justify-center lg:gap-[23px] lg:mt-[74px] lg:px-[291px] mt-[96px] px-[375px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[85px] xl:px-[333px]">
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
          <div className="2xl:h-[571px] 3xl:h-[685px] bg-gray_400 h-[570px] lg:h-[444px] rounded-radius2 w-[100%] xl:h-[508px]"></div>
        </Row>
        <Row className="3xl:gap-[288px] 3xl:mt-[38px] 3xl:px-[576px] font-raleway gap-[240px] grid grid-cols-3 items-center justify-center lg:gap-[186px] lg:mt-[24px] lg:px-[373px] mt-[32px] px-[480px] self-stretch w-[100%] xl:gap-[213px] xl:mt-[28px] xl:px-[427px]">
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Samuel Lee`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Emili Heart`}</Text>
          <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`Alex Barton`}</Text>
        </Row>
        <Stack className="2xl:h-[1171px] 2xl:mt-[149px] 3xl:h-[1405px] 3xl:mt-[179px] h-[1170px] lg:h-[910px] lg:mt-[116px] mt-[149.52002px] self-stretch w-[100%] xl:h-[1041px] xl:mt-[133px]">
          <Stack className="2xl:h-[1171px] 3xl:h-[1405px] absolute h-[1170px] inset-[0] lg:h-[910px] self-stretch w-[100%] xl:h-[1041px]">
            <Image
              src="img_rectangle12.png"
              className="2xl:h-[1171px] 3xl:h-[1405px] absolute h-[1170px] inset-[0] lg:h-[910px] object-cover self-stretch w-[100%] xl:h-[1041px]"
              alt="Rectangle12"
            />
            <Image
              src="img_maskgroup_31.svg"
              className="2xl:h-[1171px] 3xl:h-[1405px] absolute h-[1170px] inset-[0] lg:h-[910px] object-cover self-stretch w-[100%] xl:h-[1041px]"
              alt="MaskGroup"
            />
          </Stack>
          <Row className="2xl:bottom-[119px] 3xl:bottom-[143px] 3xl:right-[242px] absolute bottom-[119.52px] font-raleway items-center justify-center lg:bottom-[92px] lg:right-[157px] right-[202px] w-[58%] xl:bottom-[106px] xl:right-[179px]">
            <Column className="justify-start w-[63%]">
              <Text className="2xl:text-fs50 3xl:text-fs60 font-extrabold font-raleway lg:text-fs39 mx-[auto] text-center text-fs5052069854736328 text-white_A700 uppercase xl:text-fs44">{`Contact US`}</Text>
              <Text className="3xl:mt-[38px] 3xl:text-fs19 font-normal font-roboto lg:mt-[24px] lg:text-fs12 mt-[32px] mx-[auto] text-center text-fs16 text-gray_102 w-[81%] xl:mt-[28px] xl:text-fs14">{`Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
              <Row className="3xl:gap-[36px] 3xl:mt-[120px] font-roboto gap-[30px] grid grid-cols-2 items-center justify-between lg:gap-[23px] lg:mt-[77px] mt-[100px] self-stretch w-[100%] xl:gap-[26px] xl:mt-[88px]">
                <Input
                  className="2xl:pb-[27px] 2xl:pt-[26px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_910 pt-[26.6px] rounded-radius2 text-fs16 text-gray_910 text-left uppercase w-[100%] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                  name="Group336"
                  placeholder={`Your Name *`}
                ></Input>
                <Input
                  className="2xl:pb-[27px] 2xl:pt-[26px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border-0 font-normal lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_910 pt-[26.6px] rounded-radius2 text-fs16 text-gray_910 text-left uppercase w-[100%] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                  name="Group270"
                  placeholder={`Email Address *`}
                ></Input>
              </Row>
              <Column className="3xl:mt-[38px] font-roboto lg:mt-[24px] mt-[32px] self-stretch w-[100%] xl:mt-[28px]">
                <Input
                  className="2xl:pb-[27px] 2xl:pt-[26px] 3xl:pb-[33px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border-0 font-normal font-roboto lg:pb-[21px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 pb-[27.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_910 pt-[26.6px] rounded-radius2 self-stretch text-fs16 text-gray_910 text-left uppercase w-[100%] xl:pb-[24px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                  name="Group274"
                  placeholder={`Subject *`}
                ></Input>
                <TextArea
                  className="2xl:pb-[40px] 2xl:pt-[26px] 3xl:mt-[38px] 3xl:pb-[48px] 3xl:pl-[31px] 3xl:pt-[31px] 3xl:text-fs19 bg-white_A700 border-0 font-normal font-roboto lg:mt-[24px] lg:pb-[31px] lg:pl-[20px] lg:pt-[20px] lg:text-fs12 mt-[32px] pb-[40.6px] pl-[26px] placeholder:bg-transparent placeholder:text-gray_910 pt-[26.6px] rounded-radius2 self-stretch text-fs16 text-gray_910 text-left uppercase w-[100%] xl:mt-[28px] xl:pb-[36px] xl:pl-[23px] xl:pt-[23px] xl:text-fs14"
                  name="Group273"
                  placeholder={`Messages *`}
                ></TextArea>
                <Button className="2xl:py-[21px] 3xl:mr-[12px] 3xl:mt-[72px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold font-raleway lg:mr-[7px] lg:mt-[46px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mr-[10px] mt-[60px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[30%] xl:mr-[8px] xl:mt-[53px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`Submit Messages`}</Button>
              </Column>
            </Column>
            <Image
              src="img_50off.svg"
              className="2xl:h-[214px] 2xl:mb-[253px] 3xl:h-[257px] 3xl:mb-[304px] 3xl:ml-[214px] 3xl:mt-[338px] h-[213.51px] lg:h-[167px] lg:mb-[197px] lg:ml-[139px] lg:mt-[219px] mb-[253.49023px] ml-[179px] mt-[282px] object-contain w-[21%] xl:h-[190px] xl:mb-[225px] xl:ml-[159px] xl:mt-[250px]"
              alt="50Off"
            />
          </Row>
        </Stack>
        <Column className="2xl:mt-[250px] 3xl:mt-[300px] font-raleway items-center justify-start lg:mt-[194px] mt-[250.47998px] mx-[auto] w-[61%] xl:mt-[222px]">
          <Text className="2xl:text-fs50 3xl:text-fs60 font-extrabold font-raleway lg:text-fs39 mx-[auto] text-center text-fs5052069854736328 text-gray_910 uppercase xl:text-fs44">{`Our Process`}</Text>
          <Text className="3xl:mt-[38px] 3xl:text-fs19 font-normal font-roboto lg:mt-[24px] lg:text-fs12 mt-[32px] mx-[auto] text-center text-fs16 text-gray_600 w-[48%] xl:mt-[28px] xl:text-fs14">{`Nulla lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
          <Image
            src="img_group403.svg"
            className="2xl:h-[271px] 3xl:h-[325px] 3xl:mr-[7px] 3xl:mt-[120px] h-[270px] lg:h-[210px] lg:ml-[2px] lg:mr-[4px] lg:mt-[77px] ml-[3px] mr-[6px] mt-[100px] object-contain w-[99%] xl:h-[241px] xl:ml-[2px] xl:mr-[5px] xl:mt-[88px]"
            alt="Group403"
          />
          <Row className="3xl:gap-[168px] 3xl:mt-[54px] 3xl:pl-[69px] 3xl:pr-[73px] font-raleway gap-[140px] grid grid-cols-4 items-center justify-between lg:gap-[108px] lg:mt-[35px] lg:pl-[45px] lg:pr-[47px] mt-[45px] pl-[58px] pr-[61px] self-stretch w-[100%] xl:gap-[124px] xl:mt-[40px] xl:pl-[51px] xl:pr-[54px]">
            <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`first step`}</Text>
            <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`second step`}</Text>
            <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`third step`}</Text>
            <Text className="2xl:text-fs21 3xl:text-fs25 font-extrabold lg:text-fs16 text-center text-fs21327999114990234 text-gray_910 uppercase w-[100%] xl:text-fs18">{`four step`}</Text>
          </Row>
          <Row className="3xl:gap-[39px] 3xl:mt-[18px] font-roboto gap-[33px] grid grid-cols-4 items-center justify-between lg:gap-[25px] lg:mt-[11px] mt-[15px] self-stretch w-[100%] xl:gap-[29px] xl:mt-[13px]">
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-center text-fs16 text-gray_600 w-[100%] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-center text-fs16 text-gray_600 w-[100%] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-center text-fs16 text-gray_600 w-[100%] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
            <Text className="3xl:text-fs19 font-normal lg:text-fs12 text-center text-fs16 text-gray_600 w-[100%] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
          </Row>
        </Column>
        <div className="3xl:mt-[276px] lg:mt-[178px] mt-[230px] self-stretch w-[100%] xl:mt-[204px]">
          <Column className="items-center justify-start self-stretch w-[100%]">
            <div className="2xl:h-[21px] 3xl:h-[25px] bg-orange_600 h-[20px] lg:h-[16px] self-stretch w-[100%] xl:h-[18px]"></div>
            <Column className="bg-gray_910 font-raleway items-center justify-end self-stretch w-[100%]">
              <Row className="3xl:mt-[165px] font-raleway items-center justify-evenly lg:mt-[107px] mt-[138px] px-[0] self-stretch w-[100%] xl:mt-[122px]">
                <Image
                  src="img_windmilltwo.svg"
                  className="2xl:h-[61px] 3xl:h-[73px] 3xl:w-[72px] h-[60px] lg:h-[47px] lg:w-[46px] object-contain w-[60px] xl:h-[54px] xl:w-[53px]"
                  alt="windmilltwo"
                />
                <Text className="2xl:text-fs28 3xl:text-fs34 font-extrabold leading-lh lg:text-fs22 text-fs28432889938354492 text-left text-white_A700 uppercase w-[8%] xl:text-fs25">{`Logo Here`}</Text>
                <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Head Office`}</Text>
                <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Usefull Link`}</Text>
                <Text className="2xl:text-fs21 3xl:mb-[16px] 3xl:mt-[21px] 3xl:text-fs25 font-extrabold lg:mb-[10px] lg:mt-[14px] lg:text-fs16 mb-[14px] mt-[18px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:mb-[12px] xl:mt-[16px] xl:text-fs18">{`Opening Hour`}</Text>
              </Row>
              <Row className="3xl:mt-[19px] justify-evenly lg:mt-[12px] mt-[16px] px-[0] self-stretch w-[100%] xl:mt-[14px]">
                <Column className="font-raleway justify-start w-[30%]">
                  <Column className="items-center self-stretch w-[100%]">
                    <Row className="font-roboto justify-between px-[0] self-stretch w-[100%]">
                      <Text className="3xl:mb-[32px] 3xl:ml-[6px] 3xl:text-fs19 font-normal lg:mb-[21px] lg:ml-[3px] lg:text-fs12 mb-[27px] ml-[5px] text-fs16 text-gray_102 text-left w-[47%] xl:mb-[24px] xl:ml-[4px] xl:text-fs14">{`Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt.`}</Text>
                      <Column className="font-roboto justify-start mr-[1px] w-[47%]">
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left w-[100%] xl:text-fs14">{`4517 Washington Ave. Manchester, Kentucky 39495`}</Text>
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`deanna.curtis@example.com`}</Text>
                        <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`(671) 555-0110`}</Text>
                      </Column>
                    </Row>
                  </Column>
                  <Column className="3xl:mt-[6px] font-raleway lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Button className="2xl:py-[21px] 3xl:mr-[12px] 3xl:px-[38px] 3xl:py-[25px] 3xl:text-fs19 bg-pink_800 border-bw font-extrabold lg:mr-[7px] lg:px-[24px] lg:py-[16px] lg:text-fs12 mr-[10px] px-[32px] py-[21.6px] rounded-radius2 text-center text-fs16 text-white_A700 uppercase w-[29%] xl:mr-[8px] xl:px-[28px] xl:py-[19px] xl:text-fs14">{`order Now`}</Button>
                  </Column>
                  <Text className="2xl:text-fs21 3xl:ml-[12px] 3xl:mt-[39px] 3xl:text-fs25 font-extrabold font-raleway lg:ml-[7px] lg:mt-[25px] lg:text-fs16 ml-[10px] mt-[33px] text-fs21327999114990234 text-left text-white_A700 uppercase xl:ml-[8px] xl:mt-[29px] xl:text-fs18">{`Second Office`}</Text>
                  <Text className="3xl:ml-[363px] 3xl:mt-[36px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:mt-[23px] lg:text-fs12 ml-[303px] mr-[1px] mt-[30px] text-fs16 text-gray_102 text-left w-[47%] xl:ml-[269px] xl:mt-[26px] xl:text-fs14">{`2118 Thornridge Cir. Syracuse, Connecticut 35624`}</Text>
                  <Text className="3xl:ml-[363px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:text-fs12 ml-[303px] mr-[1px] text-fs16 text-gray_102 text-left xl:ml-[269px] xl:text-fs14">{`tim.jennings@example.com`}</Text>
                  <Text className="3xl:ml-[363px] 3xl:text-fs19 font-normal font-roboto lg:ml-[235px] lg:text-fs12 ml-[303px] mr-[1px] text-fs16 text-gray_102 text-left xl:ml-[269px] xl:text-fs14">{`(704) 555-0127`}</Text>
                </Column>
                <Column className="3xl:mb-[259px] justify-start lg:mb-[168px] mb-[216px] w-[8%] xl:mb-[192px]">
                  <Row className="font-raleway items-center justify-start self-stretch w-[100%]">
                    <Image
                      src="img_chevronright_5.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                      alt="chevronright"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[48px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[31px] lg:text-fs12 ml-[15px] mr-[40px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[35px] xl:text-fs14">{`About Us`}</Text>
                  </Row>
                  <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_chevronright_5.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                      alt="chevronright"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[45px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[29px] lg:text-fs12 ml-[15px] mr-[38px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[33px] xl:text-fs14">{`Our Team`}</Text>
                  </Row>
                  <Column className="3xl:mt-[6px] items-center lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Row className="font-raleway items-center justify-start self-stretch w-[100%]">
                      <Image
                        src="img_chevronright_5.svg"
                        className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                        alt="chevronright"
                      />
                      <Text className="3xl:ml-[18px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:text-fs12 ml-[15px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:text-fs14">{`Pricing Plans`}</Text>
                    </Row>
                  </Column>
                  <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_chevronright_5.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                      alt="chevronright"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[92px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[59px] lg:text-fs12 ml-[15px] mr-[77px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[68px] xl:text-fs14">{`Blog`}</Text>
                  </Row>
                  <Row className="3xl:mt-[6px] font-raleway items-center justify-start lg:mt-[3px] mt-[5px] self-stretch w-[100%] xl:mt-[4px]">
                    <Image
                      src="img_chevronright_5.svg"
                      className="2xl:h-[16px] 3xl:h-[19px] 3xl:my-[7px] h-[15px] lg:h-[12px] lg:my-[4px] my-[6px] object-contain w-[6%] xl:h-[14px] xl:my-[5px]"
                      alt="chevronright"
                    />
                    <Text className="3xl:ml-[18px] 3xl:mr-[57px] 3xl:text-fs19 font-bold lg:ml-[11px] lg:mr-[37px] lg:text-fs12 ml-[15px] mr-[48px] text-fs16 text-left text-white_A700 uppercase xl:ml-[13px] xl:mr-[42px] xl:text-fs14">{`404 Page`}</Text>
                  </Row>
                </Column>
                <Column className="3xl:mb-[380px] font-roboto justify-start lg:mb-[246px] mb-[317px] w-[14%] xl:mb-[281px]">
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`Mon - Sat : 8:00 - 17:00`}</Text>
                  <Text className="3xl:text-fs19 font-normal lg:text-fs12 self-stretch text-fs16 text-gray_102 text-left xl:text-fs14">{`Sun : Closed`}</Text>
                </Column>
              </Row>
              <Button className="2xl:py-[41px] 3xl:mt-[102px] 3xl:px-[42px] 3xl:py-[49px] 3xl:text-fs21 bg-black_903 border-bw font-manrope font-normal lg:mt-[66px] lg:px-[27px] lg:py-[32px] lg:text-fs14 mt-[85px] px-[35px] py-[41.2px] self-stretch text-center text-fs18 text-white_A700 tracking-ls1 w-[100%] xl:mt-[75px] xl:px-[31px] xl:py-[36px] xl:text-fs16">{`Copyright © 2020. All right reserved`}</Button>
            </Column>
          </Column>
        </div>
      </Column>
    </Column>
  );
};

export default Home1Page;
