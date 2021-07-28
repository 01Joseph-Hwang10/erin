import * as React from "react";
import { Animated } from "react-native";
import Svg, { G, Path } from "react-native-svg";


export const AnimatedSvg = Animated.createAnimatedComponent(Svg);
export const AnimatedPath = Animated.createAnimatedComponent(Path);
export const AnimatedG = Animated.createAnimatedComponent(G);

// class SvgRoot extends React.Component {
//     state = {
//       initAnim: new Animated.Value(0),
//     };
  
//     componentDidMount() {
//       Animated.timing(
//         // Animate over time
//         this.state.initAnim,
//         {
//           toValue: 1,
//           duration: 3000,
//           useNativeDriver: false,
//         }
//       ).start();
//     }
  
//     render() {
//       const { initAnim } = this.state;
//       let animateWidth = initAnim.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['0', '80'],
//       });
//       return (
//         <AnimatedSvg width={width} height={height} viewBox="0 0 100 100">
//           <AnimatedRect
//             y="10"
//             x="10"
//             height="80"
//             width={animateWidth}
//           />
//         </AnimatedSvg>
//       );
//     }
//   }