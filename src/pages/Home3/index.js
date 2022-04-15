import React from "react";

import { Column } from "components/Column";
import { Row } from "components/Row";
import { Image } from "components/Image";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { List } from "components/List";
import { Grid } from "components/Grid";
import { Stack } from "components/Stack";
import { Input } from "components/Input";
import { Line } from "components/Line";

const Home3Page = () => {
  return (
    <Column className="bg-white_A700 items-center justify-end ml-[auto] mr-[auto] w-[100%]">
      <div className="3xl:mt-[38px] lg:mt-[24px] mt-[32px] mx-[auto] w-[85%] xl:mt-[28px]">
        <Row className="font-dmsans items-center justify-start self-stretch w-[100%]">
          <Image
            src="img_dummylogo02_22.svg"
            className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[11%] xl:h-[50px]"
            alt="DummyLogo02"
          />
          <Row className="3xl:mb-[21px] 3xl:ml-[96px] 3xl:mt-[22px] items-center justify-center lg:ml-[62px] lg:my-[14px] mb-[18px] ml-[80px] mt-[19px] w-[41%] xl:ml-[71px] xl:my-[16px]">
            <Text className="3xl:text-fs19 font-bold lg:text-fs12 text-bluegray_407 text-fs16 text-left tracking-ls1 xl:text-fs14">{`Home`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_900 text-fs16 text-left tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Donation`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_900 text-fs16 text-left tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Petition`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_900 text-fs16 text-left tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Events`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_900 text-fs16 text-left tracking-ls1 xl:ml-[35px] xl:text-fs14">{`Blogs`}</Text>
            <Text className="3xl:ml-[48px] 3xl:text-fs19 font-normal lg:ml-[31px] lg:text-fs12 ml-[40px] text-bluegray_900 text-fs16 text-left tracking-ls1 xl:ml-[35px] xl:text-fs14">{`About`}</Text>
          </Row>
          <Button className="2xl:py-[12px] 3xl:ml-[438px] 3xl:my-[9px] 3xl:px-[28px] 3xl:py-[14px] 3xl:text-fs19 bg-red_A100 border-bw font-bold lg:ml-[283px] lg:my-[6px] lg:px-[18px] lg:py-[9px] lg:text-fs12 ml-[365px] my-[8px] px-[24px] py-[12.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[12%] xl:ml-[324px] xl:my-[7px] xl:px-[21px] xl:py-[10px] xl:text-fs14">{`Donate Now`}</Button>
        </Row>
      </div>
      <Row className="3xl:mt-[38px] font-playfairdisplay items-center justify-between lg:mt-[24px] mt-[32px] px-[0] self-stretch w-[100%] xl:mt-[28px]">
        <Column className="3xl:mb-[205px] 3xl:ml-[124px] 3xl:mt-[204px] justify-start lg:mb-[133px] lg:ml-[80px] lg:mt-[132px] mb-[171px] ml-[104px] mt-[170px] w-[35%] xl:mb-[152px] xl:ml-[92px] xl:mt-[151px]">
          <Text className="3xl:text-fs76 font-bold font-playfairdisplay lg:text-fs49 self-stretch text-fs64 text-gray_907 text-left tracking-ls1 w-[100%] xl:text-fs56">{`How do we change the world?`}</Text>
          <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal font-roboto lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_506 text-left w-[100%] xl:mt-[21px] xl:text-fs14">{`SeaWire Web is a wireframe kit that has more than 15 popular categories and more than 200 screens. do eiusmod tempor incididunt ut labore et dolore magna aliqua`}</Text>
          <Button className="2xl:py-[20px] 3xl:mr-[12px] 3xl:mt-[67px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mr-[7px] lg:mt-[43px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mr-[10px] mt-[56px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[28%] xl:mr-[8px] xl:mt-[49px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
        </Column>
        <div className="2xl:h-[781px] 3xl:h-[937px] 3xl:mr-[124px] bg-gray_305 h-[780px] lg:h-[607px] lg:mr-[80px] mr-[104px] w-[42%] xl:h-[694px] xl:mr-[92px]"></div>
      </Row>
      <Row className="3xl:mt-[144px] items-center justify-between lg:mt-[93px] mt-[120px] px-[0] self-stretch w-[100%] xl:mt-[106px]">
        <div className="2xl:h-[689px] 3xl:h-[827px] 3xl:ml-[124px] bg-gray_305 h-[688px] lg:h-[536px] lg:ml-[80px] ml-[104px] w-[42%] xl:h-[613px] xl:ml-[92px]"></div>
        <Column className="3xl:mb-[142px] 3xl:mr-[124px] 3xl:mt-[165px] font-playfairdisplay justify-start lg:mb-[92px] lg:mr-[80px] lg:mt-[107px] mb-[119px] mr-[104px] mt-[138px] w-[35%] xl:mb-[105px] xl:mr-[92px] xl:mt-[122px]">
          <Text className="3xl:text-fs46 font-bold font-playfairdisplay lg:text-fs30 self-stretch text-fs39 text-gray_907 text-left tracking-ls1 xl:text-fs34">{`Faith in Humanity Restored`}</Text>
          <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">
            {
              <>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor. Libero, amet amet ipsum eu velit neque hendrerit commodo. Orci nulla sed sed odio neque ut. Et, quis nibh at non ridiculus quis ac proin. Sit eu duis purus dictumst amet accumsan. Nullam vitae egestas neque sem cursus nec hendrerit sed viverra.   Elementum auctor nulla gravida pharetra, posuere velit, ultrices scelerisque. Diam tristique arcu sollicitudin placerat. Amet mauris risus non erat. Vulputate ut urna laoreet netus. Nulla placerat leo, arcu dignissim at consectetur rutrum magna integer. Ante urna, enim interdum eget libero. Scelerisque facilisis dui lacus, ornare sit. Pellentesque interdum semper magna vitae, quis mauris, sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `}
                <br />
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
              </>
            }
          </Text>
        </Column>
      </Row>
      <Column className="3xl:mt-[144px] font-playfairdisplay items-center justify-start lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
        <Text className="3xl:text-fs46 font-bold font-playfairdisplay lg:text-fs30 mx-[auto] text-center text-fs39 text-gray_907 tracking-ls1 xl:text-fs34">{`Why Choose Us`}</Text>
        <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[35%] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor.`}</Text>
        <List
          className="3xl:gap-[19px] 3xl:mt-[67px] flex-wrap gap-[16px] grid grid-cols-3 lg:gap-[12px] lg:mt-[43px] min-h-[auto] mt-[56px] mx-[auto] w-[86%] xl:gap-[14px] xl:mt-[49px]"
          orientation="horizontal"
        >
          <Column className="bg-white_A700 font-playfairdisplay items-center justify-start w-[100%]">
            <div className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[48px] 3xl:w-[144px] bg-gray_305 h-[120px] lg:h-[94px] lg:mt-[31px] lg:w-[93px] mt-[40px] mx-[auto] rounded-radius16 w-[120px] xl:h-[107px] xl:mt-[35px] xl:w-[106px]"></div>
            <Text className="3xl:mt-[48px] 3xl:text-fs37 font-bold font-playfairdisplay lg:mt-[31px] lg:text-fs24 mt-[40px] mx-[auto] text-center text-fs31 text-gray_907 tracking-ls1 xl:mt-[35px] xl:text-fs27">{`Personalized Service`}</Text>
            <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}</Text>
          </Column>
          <Column className="bg-white_A700 font-playfairdisplay items-center justify-start w-[100%]">
            <div className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[48px] 3xl:w-[144px] bg-gray_305 h-[120px] lg:h-[94px] lg:mt-[31px] lg:w-[93px] mt-[40px] mx-[auto] rounded-radius16 w-[120px] xl:h-[107px] xl:mt-[35px] xl:w-[106px]"></div>
            <Text className="3xl:mt-[48px] 3xl:text-fs37 font-bold font-playfairdisplay lg:mt-[31px] lg:text-fs24 mt-[40px] mx-[auto] text-center text-fs31 text-gray_907 tracking-ls1 xl:mt-[35px] xl:text-fs27">{`Fast and Easy Process`}</Text>
            <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}</Text>
          </Column>
          <Column className="bg-white_A700 font-playfairdisplay items-center justify-start w-[100%]">
            <div className="2xl:h-[121px] 3xl:h-[145px] 3xl:mt-[48px] 3xl:w-[144px] bg-gray_305 h-[120px] lg:h-[94px] lg:mt-[31px] lg:w-[93px] mt-[40px] mx-[auto] rounded-radius16 w-[120px] xl:h-[107px] xl:mt-[35px] xl:w-[106px]"></div>
            <Text className="3xl:mt-[48px] 3xl:text-fs37 font-bold font-playfairdisplay lg:mt-[31px] lg:text-fs24 mt-[40px] mx-[auto] text-center text-fs31 text-gray_907 tracking-ls1 xl:mt-[35px] xl:text-fs27">{`Safe and Reliable`}</Text>
            <Text className="3xl:mb-[48px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mb-[31px] lg:mt-[18px] lg:text-fs12 mb-[40px] mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mb-[35px] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit...`}</Text>
          </Column>
        </List>
      </Column>
      <Column className="3xl:mt-[144px] font-playfairdisplay items-center justify-start lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
        <Text className="3xl:text-fs46 font-bold font-playfairdisplay lg:text-fs30 mx-[auto] text-center text-fs39 text-gray_907 tracking-ls1 xl:text-fs34">{`Trending Fundraiser`}</Text>
        <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[35%] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim nulla a laoreet arcu tortor.`}</Text>
        <Grid className="3xl:gap-[19px] 3xl:mt-[67px] gap-[16px] grid grid-cols-3 lg:gap-[12px] lg:mt-[43px] mt-[56px] mx-[auto] w-[86%] xl:gap-[14px] xl:mt-[49px]">
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Llora, NY`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`Save the Llora Ice Park`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Carolina Beach, NC`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`Paradise Cove Fire`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Brooklyn, NY`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`College Fund for African`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Llora, NY`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`Save the Llora Ice Park`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Carolina Beach, NC`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`Paradise Cove Fire`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
          <Column className="bg-white_A700 font-dmsans items-center justify-start w-[100%]">
            <div className="2xl:h-[401px] 3xl:h-[481px] 3xl:w-[480px] bg-gray_305 h-[400px] lg:h-[312px] lg:w-[311px] mx-[auto] self-stretch w-[400px] xl:h-[356px] xl:w-[355px]"></div>
            <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 xl:mt-[21px] xl:text-fs14">{`Brooklyn, NY`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs28 font-bold font-playfairdisplay lg:mt-[12px] lg:text-fs18 mt-[16px] mx-[auto] text-center text-fs24 text-gray_907 tracking-ls1 xl:mt-[14px] xl:text-fs21">{`College Fund for African`}</Text>
            <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] mx-[auto] text-center text-fs16 text-gray_506 tracking-ls1 w-[92%] xl:mt-[14px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
            <Row className="3xl:mt-[28px] items-center justify-between lg:mt-[18px] mt-[24px] px-[0] self-stretch w-[100%] xl:mt-[21px]">
              <Column className="3xl:ml-[96px] font-dmsans items-center justify-start lg:ml-[62px] ml-[80px] w-[20%] xl:ml-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Goals`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$3000`}</Text>
              </Column>
              <Column className="3xl:mr-[96px] font-dmsans items-center justify-start lg:mr-[62px] mr-[80px] w-[18%] xl:mr-[71px]">
                <Text className="3xl:text-fs19 font-medium lg:text-fs12 mx-[auto] text-center text-fs16 text-gray_907 tracking-ls1 xl:text-fs14">{`Raised`}</Text>
                <Text className="3xl:mt-[9px] 3xl:text-fs28 font-bold lg:mt-[6px] lg:text-fs18 mt-[8px] mx-[auto] self-stretch text-bluegray_502 text-center text-fs24 tracking-ls1 xl:mt-[7px] xl:text-fs21">{`$2100`}</Text>
              </Column>
            </Row>
            <Row className="3xl:mt-[38px] font-dmsans justify-start lg:mt-[24px] mt-[32px] mx-[auto] w-[92%] xl:mt-[28px]">
              <div className="bg-gray_300_6c rounded-radius8 w-[90%]"></div>
              <Text className="3xl:ml-[9px] 3xl:text-fs14 font-bold lg:mb-[1px] lg:ml-[6px] lg:text-fs9 mb-[2px] ml-[8px] mt-[1px] text-fs12 text-gray_907 text-left tracking-ls1 xl:mb-[1px] xl:ml-[7px] xl:text-fs10">{`80%`}</Text>
            </Row>
            <Button className="2xl:py-[20px] 3xl:mb-[28px] 3xl:mt-[38px] 3xl:px-[42px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[18px] lg:mt-[24px] lg:px-[27px] lg:py-[15px] lg:text-fs12 mb-[24px] mt-[32px] mx-[auto] px-[35px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[92%] xl:mb-[21px] xl:mt-[28px] xl:px-[31px] xl:py-[17px] xl:text-fs14">{`Donate Now`}</Button>
          </Column>
        </Grid>
      </Column>
      <Row className="3xl:mt-[144px] bg-bluegray_702 font-playfairdisplay items-center justify-between lg:mt-[93px] mt-[120px] px-[0] self-stretch w-[100%] xl:mt-[106px]">
        <Column className="3xl:mb-[211px] 3xl:ml-[124px] 3xl:mt-[210px] justify-start lg:ml-[80px] lg:my-[136px] mb-[176px] ml-[104px] mt-[175px] w-[35%] xl:mb-[156px] xl:ml-[92px] xl:mt-[155px]">
          <Text className="3xl:text-fs46 font-bold font-playfairdisplay lg:text-fs30 self-stretch text-fs39 text-left text-white_A700 tracking-ls1 w-[100%] xl:text-fs34">{`Planting 50,000 tree seedlings in the arizona forest`}</Text>
          <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-left text-white_A700 tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`‘’Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pretium in at sit placerat. Leo platea pulvinar egestas arcu, cursus tincidunt diam. Euismod auctor diam vivamus tristique morbi molestie. Nullam massa arcu sit nunc fermentum, tempus magnis. Vulputate ipsum lectus nulla ultrices aenean mi tortor. Commodo eu id eget semper feugiat nulla sed nisi. Eget diam aliquam gravida’’`}</Text>
          <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
            <Row className="items-center justify-start self-stretch w-[100%]">
              <div className="2xl:h-[65px] 3xl:h-[77px] 3xl:w-[76px] bg-gray_305 h-[64px] lg:h-[50px] lg:w-[49px] rounded-radius8 w-[64px] xl:h-[57px] xl:w-[56px]"></div>
              <Column className="3xl:ml-[19px] 3xl:mr-[225px] font-playfairdisplay justify-start lg:ml-[12px] lg:mr-[146px] lg:my-[3px] ml-[16px] mr-[188px] my-[4px] w-[47%] xl:ml-[14px] xl:mr-[167px] xl:my-[3px]">
                <Text className="3xl:text-fs28 font-bold font-playfairdisplay lg:text-fs18 self-stretch text-fs24 text-left text-white_A700 tracking-ls1 xl:text-fs21">{`Cameron Williamson`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[9px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[6px] lg:text-fs12 mr-[10px] mt-[8px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[7px] xl:text-fs14">{`Environmental Activist`}</Text>
              </Column>
            </Row>
            <Row className="3xl:gap-[19px] 3xl:mt-[105px] 3xl:pr-[451px] gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[12px] lg:mt-[68px] lg:pr-[292px] mt-[88px] pr-[376px] self-stretch w-[100%] xl:gap-[14px] xl:mt-[78px] xl:pr-[334px]">
              <Image
                src="img_button_22.svg"
                className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[100%] xl:h-[50px]"
                alt="Button"
              />
              <Image
                src="img_button_23.svg"
                className="2xl:h-[57px] 3xl:h-[68px] h-[56px] lg:h-[44px] object-contain w-[100%] xl:h-[50px]"
                alt="Button"
              />
            </Row>
          </Column>
        </Column>
        <div className="2xl:h-[821px] 3xl:h-[985px] 3xl:mr-[124px] 3xl:my-[48px] bg-gray_305 h-[820px] lg:h-[638px] lg:mr-[80px] lg:my-[31px] mr-[104px] my-[40px] w-[42%] xl:h-[730px] xl:mr-[92px] xl:my-[35px]"></div>
      </Row>
      <Row className="3xl:mt-[144px] items-center justify-between lg:mt-[93px] mt-[120px] px-[0] self-stretch w-[100%] xl:mt-[106px]">
        <Stack className="2xl:h-[750px] 3xl:h-[900px] 3xl:ml-[124px] h-[749px] lg:h-[583px] lg:ml-[80px] ml-[104px] shadow-bs40 w-[43%] xl:h-[667px] xl:ml-[92px]">
          <Stack className="2xl:h-[542px] 2xl:left-[11px] 3xl:h-[650px] 3xl:left-[13px] absolute h-[540.9199px] inset-y-[0] left-[11.51px] lg:h-[421px] lg:left-[8px] my-[auto] shadow-bs41 w-[42%] xl:h-[482px] xl:left-[10px]">
            <Image
              src="img_iphonebody.svg"
              className="2xl:h-[542px] 3xl:h-[650px] absolute h-[540.92px] inset-[0] lg:h-[421px] object-cover self-stretch w-[100%] xl:h-[482px]"
              alt="iPhoneBody"
            />
            <Image
              src="img_pasteyourdesi.png"
              className="2xl:h-[526px] 3xl:h-[631px] absolute h-[525.39px] inset-[0] justify-center lg:h-[409px] m-[auto] object-contain rounded-radius2935 w-[93%] xl:h-[468px]"
              alt="Pasteyourdesi"
            />
          </Stack>
          <Image
            src="img_iphonebody_1.svg"
            className="2xl:h-[720px] 2xl:right-[14px] 3xl:h-[863px] 3xl:right-[17px] absolute h-[718.66px] inset-y-[0] lg:h-[559px] lg:right-[11px] my-[auto] object-contain right-[14.6px] w-[56%] xl:h-[640px] xl:right-[12px]"
            alt="iPhoneBody"
          />
          <Image
            src="img_pasteyourdesi_1.png"
            className="2xl:h-[699px] 2xl:right-[26px] 3xl:h-[839px] 3xl:right-[31px] absolute h-[698.03px] inset-y-[0] lg:h-[543px] lg:right-[20px] my-[auto] object-contain right-[26.64px] rounded-radius2935 w-[53%] xl:h-[621px] xl:right-[23px]"
            alt="Pasteyourdesi"
          />
        </Stack>
        <Column className="3xl:mb-[285px] 3xl:mr-[124px] 3xl:mt-[284px] font-playfairdisplay justify-start lg:mb-[185px] lg:mr-[80px] lg:mt-[184px] mb-[238px] mr-[104px] mt-[237px] w-[35%] xl:mb-[211px] xl:mr-[92px] xl:mt-[210px]">
          <Text className="3xl:text-fs46 font-bold font-playfairdisplay lg:text-fs30 self-stretch text-fs39 text-gray_907 text-left tracking-ls1 w-[100%] xl:text-fs34">{`The mobile application is now available`}</Text>
          <Text className="3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_506 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}</Text>
          <Column className="3xl:mt-[67px] items-center lg:mt-[43px] mt-[56px] self-stretch w-[100%] xl:mt-[49px]">
            <Row className="3xl:gap-[19px] 3xl:pr-[98px] gap-[16px] grid grid-cols-2 items-center justify-start lg:gap-[12px] lg:pr-[63px] pr-[82px] self-stretch w-[100%] xl:gap-[14px] xl:pr-[72px]">
              <Image
                src="img_appstorelogo.svg"
                className="2xl:h-[61px] 3xl:h-[73px] h-[60px] lg:h-[47px] object-contain w-[100%] xl:h-[54px]"
                alt="AppstoreLogo"
              />
              <Image
                src="img_googleplaylog.svg"
                className="2xl:h-[61px] 3xl:h-[73px] h-[60px] lg:h-[47px] object-contain w-[100%] xl:h-[54px]"
                alt="GooglePlayLog"
              />
            </Row>
          </Column>
        </Column>
      </Row>
      <Column className="3xl:mt-[144px] items-center justify-start lg:mt-[93px] mt-[120px] self-stretch w-[100%] xl:mt-[106px]">
        <Row className="font-playfairdisplay justify-between px-[0] self-stretch w-[100%]">
          <Text className="3xl:ml-[124px] 3xl:text-fs46 font-bold font-playfairdisplay lg:ml-[80px] lg:text-fs30 ml-[104px] text-fs39 text-gray_907 text-left tracking-ls1 w-[35%] xl:ml-[92px] xl:text-fs34">{`Follow our Instagram (@helping_earth)`}</Text>
          <Button className="2xl:py-[20px] 3xl:mb-[8px] 3xl:mr-[129px] 3xl:mt-[37px] 3xl:px-[28px] 3xl:py-[24px] 3xl:text-fs19 bg-red_A100 border-bw font-bold font-dmsans lg:mb-[5px] lg:mr-[84px] lg:mt-[24px] lg:px-[18px] lg:py-[15px] lg:text-fs12 mb-[7px] mr-[108px] mt-[31px] px-[24px] py-[20.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[9%] xl:mb-[6px] xl:mr-[96px] xl:mt-[27px] xl:px-[21px] xl:py-[17px] xl:text-fs14">{`Follow Now`}</Button>
        </Row>
        <List
          className="3xl:mt-[67px] flex-wrap gap-[0] lg:mt-[43px] min-h-[auto] mt-[56px] mx-[auto] w-[86%] xl:mt-[49px]"
          orientation="vertical"
        >
          <Row className="3xl:gap-[19px] 3xl:my-[9px] gap-[16px] grid grid-cols-3 items-center justify-between lg:gap-[12px] lg:my-[6px] my-[8px] self-stretch w-[100%] xl:gap-[14px] xl:my-[7px]">
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
          </Row>
          <Row className="3xl:gap-[19px] 3xl:my-[9px] gap-[16px] grid grid-cols-3 items-center justify-between lg:gap-[12px] lg:my-[6px] my-[8px] self-stretch w-[100%] xl:gap-[14px] xl:my-[7px]">
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
            <div className="2xl:h-[401px] 3xl:h-[481px] bg-gray_305 h-[400px] lg:h-[312px] w-[100%] xl:h-[356px]"></div>
          </Row>
        </List>
      </Column>
      <div className="3xl:mt-[174px] lg:mt-[112px] mt-[145px] self-stretch w-[100%] xl:mt-[128px]">
        <Column className="bg-bluegray_702 justify-end self-stretch w-[100%]">
          <Row className="3xl:mt-[76px] justify-evenly lg:mt-[49px] mt-[64px] px-[0] self-stretch w-[100%] xl:mt-[56px]">
            <Column className="3xl:mb-[121px] font-dmsans justify-start lg:mb-[78px] mb-[101px] w-[15%] xl:mb-[89px]">
              <Image
                src="img_dummylogo02_23.svg"
                className="2xl:h-[57px] 3xl:h-[68px] 3xl:mr-[12px] h-[56px] lg:h-[44px] lg:mr-[7px] mr-[10px] object-contain w-[61%] xl:h-[50px] xl:mr-[8px]"
                alt="DummyLogo02"
              />
              <Text className="3xl:mt-[28px] 3xl:text-fs19 font-normal lg:mt-[18px] lg:text-fs12 mt-[24px] self-stretch text-fs16 text-gray_200 text-left tracking-ls1 w-[100%] xl:mt-[21px] xl:text-fs14">
                {
                  <>
                    {`OurStudio is a digital agency`}
                    <br />
                    {`UI / UX Design and Website`}
                    <br />
                    {`Development located in Ohio,`}
                    <br />
                    {`United States of America`}
                  </>
                }
              </Text>
            </Column>
            <Row className="3xl:mt-[28px] justify-between lg:mt-[18px] mt-[24px] px-[0] w-[71%] xl:mt-[21px]">
              <Column className="font-playfairdisplay justify-start w-[8%]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold font-playfairdisplay lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`About us`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Donation`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Petition`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Events`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Blog`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`About`}</Text>
                <Text className="3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mt-[12px] lg:text-fs12 mt-[16px] self-stretch text-fs16 text-gray_200 text-left tracking-ls1 xl:mt-[14px] xl:text-fs14">{`Contact Us`}</Text>
              </Column>
              <Column className="3xl:mb-[84px] font-playfairdisplay justify-start lg:mb-[54px] mb-[70px] w-[9%] xl:mb-[62px]">
                <Text className="3xl:text-fs19 font-bold font-playfairdisplay lg:text-fs12 self-stretch text-fs16 text-left text-white_A700 tracking-ls1 xl:text-fs14">{`Social Media`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[28px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[18px] lg:text-fs12 mr-[10px] mt-[24px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[21px] xl:text-fs14">{`Facebook`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Instagram`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Youtube`}</Text>
                <Text className="3xl:mr-[12px] 3xl:mt-[19px] 3xl:text-fs19 font-dmsans font-normal lg:mr-[7px] lg:mt-[12px] lg:text-fs12 mr-[10px] mt-[16px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:mt-[14px] xl:text-fs14">{`Twitter`}</Text>
              </Column>
              <Column className="3xl:mb-[133px] 3xl:mr-[121px] font-playfairdisplay justify-start lg:mb-[86px] lg:mr-[78px] mb-[111px] mr-[101px] w-[43%] xl:mb-[98px] xl:mr-[89px]">
                <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Join a Newsletter`}</Text>
                <Column className="3xl:mt-[28px] items-center lg:mt-[18px] mt-[24px] self-stretch w-[100%] xl:mt-[21px]">
                  <Column className="font-dmsans justify-start self-stretch w-[100%]">
                    <Text className="3xl:mr-[12px] 3xl:text-fs19 font-bold lg:mr-[7px] lg:text-fs12 mr-[10px] text-fs16 text-gray_200 text-left tracking-ls1 xl:mr-[8px] xl:text-fs14">{`Your Email`}</Text>
                    <Column className="3xl:mt-[19px] items-center lg:mt-[12px] mt-[16px] self-stretch w-[100%] xl:mt-[14px]">
                      <Row className="font-dmsans items-center justify-between px-[0] self-stretch w-[100%]">
                        <Input
                          className="2xl:pb-[16px] 2xl:pt-[15px] 3xl:pb-[19px] 3xl:pl-[19px] 3xl:pt-[18px] 3xl:text-fs19 bg-white_A700 border border-gray_104 border-solid font-normal lg:pl-[12px] lg:py-[12px] lg:text-fs12 pb-[16.6px] pl-[16px] placeholder:bg-transparent placeholder:text-gray_506 pt-[15.6px] rounded-radius8 text-fs16 text-gray_506 text-left tracking-ls1 w-[67%] xl:pb-[14px] xl:pl-[14px] xl:pt-[13px] xl:text-fs14"
                          name="Group296"
                          placeholder={`Enter Your Email`}
                        ></Input>
                        <Button className="2xl:py-[16px] 3xl:px-[28px] 3xl:py-[19px] 3xl:text-fs19 bg-red_A100 border-bw font-bold lg:px-[18px] lg:py-[12px] lg:text-fs12 px-[24px] py-[16.1px] rounded-radius8 text-center text-fs16 text-white_A700 tracking-ls1 w-[31%] xl:px-[21px] xl:py-[14px] xl:text-fs14">{`Subscribes`}</Button>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
          </Row>
          <Line className="3xl:mt-[57px] bg-gray_304 h-[1px] lg:mt-[37px] mt-[48px] mx-[auto] w-[86%] xl:mt-[42px]" />
          <Column className="3xl:mb-[48px] 3xl:mt-[27px] font-dmsans lg:mb-[31px] lg:mt-[17px] mb-[40px] mt-[23px] self-stretch w-[100%] xl:mb-[35px] xl:mt-[20px]">
            <Text className="3xl:mx-[124px] 3xl:text-fs19 font-normal lg:mx-[80px] lg:text-fs12 mx-[104px] text-fs16 text-left text-white_A700 tracking-ls1 xl:mx-[92px] xl:text-fs14">{`Copyright Tanah Air Studio`}</Text>
          </Column>
        </Column>
      </div>
    </Column>
  );
};

export default Home3Page;
