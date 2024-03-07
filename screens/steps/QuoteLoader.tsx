import React from "react";
import { Components } from "../../styles/components";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import InfinitePulseAnimation from "../../animations/InfinitePulseAnimation";
import { Typography } from "../../styles/typography";

export default function QuoteLoader() {
  return (
    <Components.Container
      style={{ alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <View style={{ maxWidth: 300, alignItems: "center" }}>
        <InfinitePulseAnimation>
          <Svg width="32" height="33" viewBox="0 0 32 33" fill="none">
            <Path
              d="M18 0.428577C16.4473 0.427327 14.9158 0.788239 13.527 1.48261C12.1383 2.17699 10.9305 3.18568 10 4.42857C12.1264 4.42791 14.2149 4.99239 16.0514 6.06424C17.8879 7.13606 19.4067 8.67681 20.452 10.5286C20.9653 10.4622 21.4824 10.4288 22 10.4286H27.9999V3.09857C27.9999 1.62457 26.8039 0.428577 25.3299 0.428577H18ZM10.674 26.4065C9.30704 26.4989 7.93571 26.3093 6.64505 25.8497C5.3544 25.39 4.17197 24.6702 3.17111 23.7345C2.17025 22.7989 1.37232 21.6677 0.826823 20.4108C0.281324 19.154 -9.99732e-05 17.7985 2.66407e-08 16.4285V9.09856C2.66407e-08 7.62456 1.196 6.42857 2.66999 6.42857H10C13.514 6.42857 16.604 8.24056 18.388 10.9826C15.481 11.9034 13.032 13.8934 11.536 16.5505L8.70805 13.7206C8.52017 13.5328 8.26553 13.4273 7.99998 13.4273C7.73444 13.4273 7.47976 13.5328 7.29199 13.7206C7.10421 13.9083 6.99872 14.163 6.99872 14.4285C6.99872 14.694 7.10421 14.9488 7.29199 15.1365L10.658 18.5005C10.221 19.764 9.99867 21.0917 10 22.4285C10 23.8225 10.238 25.1605 10.674 26.4065ZM12 22.4285C12 19.7764 13.0535 17.2328 14.9289 15.3574C16.8043 13.4822 19.3478 12.4286 22 12.4286H29.33C30.804 12.4286 32 13.6246 32 15.0985V22.4285C32.0001 24.3212 31.4631 26.1749 30.4516 27.7744C29.44 29.374 27.9953 30.6536 26.2851 31.4646C24.5751 32.2756 22.6701 32.5848 20.7914 32.356C18.9127 32.1274 17.1374 31.3701 15.672 30.1725L13.708 32.1365C13.5202 32.324 13.2657 32.4293 13.0003 32.429C12.7349 32.4289 12.4805 32.3233 12.2929 32.1355C12.1054 31.9478 12.0003 31.6931 12.0004 31.4278C12.0007 31.1624 12.1062 30.908 12.294 30.7205L14.258 28.7565C12.795 26.9724 11.997 24.7358 12 22.4285ZM17.094 28.7485L23.708 22.1365C23.8958 21.949 24.0013 21.6947 24.0015 21.4293C24.0016 21.1639 23.8965 20.9093 23.7089 20.7215C23.5214 20.5338 23.267 20.4282 23.0016 20.428C22.7363 20.4278 22.4818 20.533 22.294 20.7205L15.68 27.3345C16.09 27.8625 16.566 28.3385 17.094 28.7485Z"
              fill="#00D76C"
            />
          </Svg>
        </InfinitePulseAnimation>
        <Typography.H5 style={{ marginTop: 20, textAlign: "center" }}>
          Preparing your quote...
        </Typography.H5>
        <Typography.P style={{ marginTop: 10, textAlign: "center" }}>
          Please wait while we calculate the most suitable rates based on the
          information you provided
        </Typography.P>
        <Typography.Small style={{ marginTop: 10, textAlign: "center" }}>
          At Lumeo, We pride ourselves in fast mortgage approval. With a
          fool-proof quick vetting system that saves you time and money
        </Typography.Small>
      </View>
    </Components.Container>
  );
}
