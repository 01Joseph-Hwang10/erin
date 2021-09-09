import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 40
// height: 58
function Sticker111D4(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={40 * stickerScale}
      height={58 * stickerScale}
      fill="none"
      {...props}
      viewBox="0 0 40 58"
    >
      <Path
        d="M38.603 8.359A2.55 2.55 0 0036.59 6.19a2.515 2.515 0 00-.196-2.351 2.564 2.564 0 00-2.996-1.029 4.089 4.089 0 00-.267-.128 2.549 2.549 0 00-2.072-1.427 2.56 2.56 0 00-2.427 1.238 2.542 2.542 0 00-1.965 1.141 2.533 2.533 0 00-.366 1.893 2.6 2.6 0 00-.752.446 2.52 2.52 0 00-.804-1.051 2.56 2.56 0 00-2.006-.487 2.518 2.518 0 00-1.33-1.241 2.552 2.552 0 00-1.958.01l-.113.05a2.55 2.55 0 00-2.898-.999 2.543 2.543 0 00-1.763 2.215 7.55 7.55 0 00-.506.295 2.548 2.548 0 00-1.158-.157 2.541 2.541 0 00-1.724.905 2.522 2.522 0 00-.276 2.832l-.01.02c-.694.08-1.35.44-1.785 1.045a2.525 2.525 0 00-.012 2.925c-.363.33-.633.768-.756 1.278a2.526 2.526 0 00.768 2.464 2.548 2.548 0 00-.545 1.416 2.389 2.389 0 00-1.565-.128l-.173.046a2.22 2.22 0 00-.14.04l-.17.055a2.36 2.36 0 00-1.621 1.997 2.54 2.54 0 00-1.344.381c-.58.358-.986.919-1.14 1.574a2.505 2.505 0 00.471 2.137 2.51 2.51 0 00-.55.99 2.54 2.54 0 001.108 2.86c-.053.153-.09.312-.111.477-.09.672.088 1.338.502 1.874.263.342.598.602.973.771a2.518 2.518 0 00.886 2.284c.446.373 1 .576 1.57.592a2.54 2.54 0 001.446 1.558c.403.166.848.227 1.281.175a2.556 2.556 0 001.951 1.497c-.689.9-1.142 2.377-.3 4.7l.08.222c.403 1.146 1.144 3.243 3.065 3.827a87.012 87.012 0 003.905 8.218l.195.356c.073.13.15.263.23.394a12.2 12.2 0 00.358.572c.099.146.197.281.296.413.52.687 1.074 1.219 1.698 1.626l.002.001c.005.003.01.008.016.01.129.083.263.163.408.241 1.657.893 3.468.808 4.862.635a27.468 27.468 0 003.758-.743 33.59 33.59 0 003.894-1.324c.793-.323 3.202-1.305 4.113-3.9.099-.285.177-.587.237-.912a17.95 17.95 0 00.266-2.483c.011-.308.017-.622.016-.936a28.332 28.332 0 00-.127-2.489 56.892 56.892 0 00-.919-6.252c.115-.117.229-.25.334-.402.636-.916.587-1.924.57-2.254a9.353 9.353 0 00-1.045-3.85c-.206-.395-.514-.905-1.054-1.336-.99-.792-2.116-.78-2.485-.774-.199.002-.4.01-.608.023a2.556 2.556 0 00-1.337-1.167 2.508 2.508 0 00-.504-2.814 2.507 2.507 0 00-.272-2.904c.248.014.5-.01.747-.069.022-.006.046-.01.067-.018a2.527 2.527 0 001.822-1.873 2.569 2.569 0 002.348-1.105c.326-.48.465-1.035.431-1.574a2.55 2.55 0 00.94-.634 2.51 2.51 0 00.68-1.82 2.51 2.51 0 00-.439-1.333 2.535 2.535 0 001.302-2.058 2.537 2.537 0 00-1.625-2.518 2.562 2.562 0 00.631-2.011z"
        fill="#CADBE3"
      />
      <Path
        d="M36.264 7.114A2.512 2.512 0 0035.3 5.43a2.546 2.546 0 00-1.047-.482 2.521 2.521 0 00-.196-2.352 2.565 2.565 0 00-2.996-1.028 5.401 5.401 0 00-.267-.13 2.579 2.579 0 00-.338-.522 2.562 2.562 0 00-4.163.334 2.553 2.553 0 00-1.965 1.14 2.536 2.536 0 00-.365 1.893 2.567 2.567 0 00-.752.447 2.529 2.529 0 00-.803-1.052 2.561 2.561 0 00-2.007-.486 2.522 2.522 0 00-1.331-1.243 2.551 2.551 0 00-2.07.061 2.559 2.559 0 00-.951-.842A2.581 2.581 0 0014.1 1.01a2.54 2.54 0 00-1.76 2.215c-.172.09-.342.19-.508.294a2.562 2.562 0 00-1.158-.158 2.546 2.546 0 00-1.725.905 2.526 2.526 0 00-.276 2.832.186.186 0 01-.01.02 2.528 2.528 0 00-1.795 3.97c-.363.33-.634.768-.757 1.278a2.526 2.526 0 00.768 2.464 2.517 2.517 0 00-.546 1.416 2.389 2.389 0 00-1.564-.128l-.173.044a2.228 2.228 0 00-.14.041l-.17.056a2.361 2.361 0 00-1.621 1.997 2.543 2.543 0 00-1.344.381c-.58.357-.985.917-1.14 1.574a2.506 2.506 0 00.471 2.137 2.524 2.524 0 00-.333 2.916c.22.394.528.709.89.933-.052.153-.089.314-.11.477-.091.672.089 1.338.501 1.875.263.341.598.602.973.77a2.522 2.522 0 00.888 2.285c.446.372 1 .576 1.568.592.224.678.732 1.26 1.446 1.556.404.168.849.227 1.282.177a2.556 2.556 0 001.951 1.496c-.688.901-1.142 2.379-.3 4.7l.08.223c.403 1.145 1.145 3.242 3.065 3.826.188.46.378.91.567 1.35a86.733 86.733 0 003.338 6.87c.063.115.127.234.196.354.073.132.148.264.228.395.102.174.214.354.34.546l.019.027c.099.145.197.28.296.411.52.688 1.074 1.22 1.698 1.627l.003.001.015.01c.128.082.262.162.408.24 1.658.893 3.47.808 4.862.635a27.477 27.477 0 003.758-.742 33.49 33.49 0 003.895-1.325c.791-.323 3.201-1.306 4.112-3.9.099-.286.178-.587.237-.912a17.885 17.885 0 00.266-2.484c.01-.307.016-.621.016-.936a27.596 27.596 0 00-.127-2.489 56.517 56.517 0 00-.919-6.252c.115-.117.229-.25.334-.403.637-.916.588-1.923.57-2.253a9.353 9.353 0 00-1.045-3.85c-.206-.396-.514-.905-1.053-1.337-.992-.792-2.117-.777-2.485-.774-.2.002-.4.01-.609.024a2.556 2.556 0 00-1.337-1.168 2.51 2.51 0 00-.505-2.814c.03-.053.06-.106.085-.16.297-.61.336-1.297.112-1.936a2.555 2.555 0 00-.468-.81 2.58 2.58 0 00.814-.085 2.528 2.528 0 001.822-1.874 2.561 2.561 0 002.348-1.105c.326-.48.464-1.034.431-1.573a2.545 2.545 0 001.622-2.454 2.515 2.515 0 00-.44-1.334 2.537 2.537 0 001.302-2.059 2.54 2.54 0 00-1.626-2.519c.474-.53.725-1.254.631-2.002z"
        fill="#fff"
      />
      <Path
        d="M32.782 35.986c.295 1.194.545 2.399.757 3.607.263 1.487.46 2.983.596 4.486.07.758.115 1.515.117 2.27a17.418 17.418 0 01-.074 1.73c-.04.413-.096.826-.17 1.24a3.678 3.678 0 01-.14.533c-.416 1.185-1.429 1.87-2.668 2.377-2.25.915-4.586 1.596-7 1.896-1.125.14-2.333.19-3.33-.347a3.759 3.759 0 01-.237-.142c-.519-.339-.927-.814-1.281-1.337a16.373 16.373 0 01-.654-1.11l-.01-.02a83.375 83.375 0 01-4.427-9.573l9.019-3.682 9.502-1.928z"
        fill="#F6CD6C"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.782 35.986c.295 1.194.545 2.399.757 3.607-.4.298-.905.455-1.385.337-.683-.165-1.126-.8-1.504-1.39-.237.636-.48 1.28-.903 1.81-.423.53-1.066.932-1.744.896-.908-.045-1.596-.825-2.034-1.614-.056 1.054-.661 2.124-1.655 2.504-.99.38-2.304-.153-2.553-1.18-.193.595-.41 1.193-.795 1.688-.38.497-.954.88-1.583.899-.858.021-1.57-.612-2.188-1.205.181.892-.419 1.872-1.3 2.124-.141.041-.286.06-.432.061a84.632 84.632 0 01-1.2-2.926l9.018-3.682 9.5-1.929z"
        fill="#F27C88"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.401 44.106c-.347.189-.248.73.108.861.319.118.716-.179.679-.516-.039-.338-.475-.499-.77-.355-.004.004-.01.007-.017.01zM22.369 42.766c.397-.013.586.505.347.797-.216.262-.71.206-.849-.104-.14-.312.156-.668.482-.692h.02zM26.872 42.057c.131.371-.308.706-.661.567-.316-.126-.41-.61-.155-.835.257-.226.688-.053.81.249a.146.146 0 00.006.019zM30.716 41.016c.077.385.627.455.86.157.21-.267.044-.733-.29-.798-.336-.066-.621.299-.572.62l.002.021zM34.179 48.078c-.04.414-.096.827-.17 1.24a3.678 3.678 0 01-.14.534 34.969 34.969 0 01-6.93 2.687c-2.06.556-4.17.922-6.304 1.097-.519-.339-.927-.814-1.282-1.337a33.622 33.622 0 0014.826-4.221z"
        fill="#4CBBE6"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M34.253 46.348c0 .28-.004.56-.014.839-2.079 1.242-4.496 2.26-7.212 3.043-.22.064-.441.124-.662.183-2.454.663-4.923 1.094-7.292 1.433-.13-.215-.254-.44-.373-.66 2.638-.374 5.405-.852 8.13-1.636 2.824-.813 5.315-1.887 7.423-3.202z"
        fill="#F27C88"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.543 36.44c.541 2.126 1.155 4.252 1.213 6.457.046 1.677-.275 3.322-1.096 4.798-.713 1.282-1.751 2.363-2.955 3.204-2.215 1.548-4.997 2.294-7.705 2.203.193.2.401.382.635.535.077.05.156.097.237.141.997.537 2.205.487 3.33.347 2.414-.3 4.75-.981 7-1.896 1.24-.505 2.253-1.192 2.669-2.377.057-.167.105-.346.14-.534a15.336 15.336 0 00.229-2.13c.01-.28.014-.558.014-.84a25.966 25.966 0 00-.116-2.27 53.747 53.747 0 00-.597-4.485 53.844 53.844 0 00-.757-3.607l-2.241.455z"
        fill="#EED8BC"
      />
      <Path
        d="M14.96 30.677c-2.468 1.159-5.608 1.102-7.754-.572-1.261-.984-2.066-2.409-2.595-3.89-.491-1.374-.962-3.113-.802-4.581.072-.679.404-1.366 1.005-1.696.367-.202.795-.253 1.212-.295.45-.045.922-.079 1.336.1.371.159.652.469.905.782.495.613.931 1.274 1.298 1.97.436.826.795 1.726 1.486 2.357.524.478 1.13.613 1.815.597.756-.018.8.103 1.157.844.659 1.373 1.059 2.865 1.341 4.355l-.405.029z"
        fill="#67C7C6"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.147 19.798c-.574 3.191.163 6.622 2.354 9.025.442.487.941.94 1.535 1.228 1.552.757 3.398.272 5.054-.225"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.547 19.74c.546 1.594 1.186 3.154 1.825 4.712.293.714.586 1.429.926 2.123.142.292.297.585.531.81.35.336.842.483 1.32.576a8.302 8.302 0 003.6-.098"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.33 19.597c1.278 1.324 2.122 2.999 2.813 4.701.253.626.526 1.305 1.105 1.659.726.443 1.658.22 2.508.289"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.702 13.048c-.669-2.196-1.553-4.407-3.171-6.047-1.617-1.64-4.117-2.594-6.301-1.844-1.527.525-2.706 1.81-3.37 3.273-.666 1.463-.865 3.093-.889 4.698-.084 5.727 1.954 11.25 3.992 16.608.853 2.238 1.71 4.481 2.82 6.606l11.537-3.127c-2.193-6.547-2.61-13.562-4.618-20.167z"
        fill="#67C7C6"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.702 13.048c-.669-2.197-1.553-4.407-3.171-6.047a7.385 7.385 0 00-2.042-1.46c1.221 1.287 2.173 2.862 2.909 4.421 1.256 2.669 1.793 5.528 2.067 8.445.222 2.368.292 4.702-.274 7.031-.495 2.037-1.432 3.986-2.863 5.54-1.279 1.384-2.911 2.366-4.696 2.937.358.82.737 1.632 1.151 2.425l11.538-3.126c-2.194-6.546-2.61-13.561-4.619-20.166z"
        fill="#B8D2E3"
      />
      <Path
        d="M18.6 35.753c-.725-2.121-1.418-4.13-2.144-6.252-.919-2.688-1.84-5.38-2.535-8.134-.838-3.313-1.347-6.717-1.362-10.133-.01-2.007.179-4.098 1.208-5.824M14.85 5.118c.611 3.207 1.171 6.22 1.984 9.383 1.757 6.849 4.415 13.333 5.686 20.285M26.303 33.674c-.956-6.167-2.608-12.072-4.222-18.09-.4-1.485-.799-2.97-1.2-4.454-.364-1.352-.832-2.342-1.42-3.62-.39-.847-1.419-2.074-2.28-2.445"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.158 20.67c.23.058.473.056.726-.019.896-.267 1.793-.523 2.672-.85 1.572-.588 3.11-1.368 4.287-2.582a7.61 7.61 0 001.285-1.777c.736-1.405 1.05-3.53.825-5.1-.303-2.12-.896-4.277-2.337-5.928-1.391-1.595-3.351-.696-4.213.789-1.19 2.052.023 4.3-.377 6.481-.424 2.31-3.379 1.724-4.608 3.274-1.02 1.289-.024 5.266 1.74 5.712z"
        fill="#67C7C6"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M27.84 3.912c-1.46 2.827.72 6.551-.8 9.348-.558 1.03-1.557 1.767-2.637 2.234-1.08.467-2.248.69-3.404.907"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.272 3.796c.262 1.516.566 3.395.715 4.926.125 1.279.21 2.574.024 3.847-.186 1.272-.66 2.532-1.536 3.478-1.503 1.627-3.873 2.067-6.067 2.418"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M28.445 3.686c.805-.309 1.271 1.497 1.451 1.95 1.32 3.305 2.584 7.302.222 10.436-1.783 2.364-4.86 3.593-7.714 4.044"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M30.353 31.69a11.576 11.576 0 011.756-.173c.292-.002.606.017.855.215.167.133.284.331.388.53.45.86.715 1.836.762 2.804.012.245.005.508-.122.691-.099.142-.253.214-.404.275-.647.265-1.324.437-2 .608-2.93.74-5.915 1.314-8.8 2.194-2.951.901-5.83 2.046-8.806 2.87-.204.057-.417.11-.63.06-.796-.188-1.265-1.727-1.541-2.485-.282-.78-.566-1.882.06-2.467.5-.47 1.502-.574 2.125-.8 2.96-1.07 5.963-2.02 9.015-2.788a72.39 72.39 0 014.74-1.028c.854-.156 1.726-.362 2.602-.507z"
        fill="#4CBBE6"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M33.352 32.261c-.104-.198-.22-.396-.387-.529-.25-.198-.564-.217-.856-.215a9.645 9.645 0 00-.681.037c-.248 1.227-.817 2.337-1.731 3.233-.876.858-1.96 1.481-3.062 2.007a31.803 31.803 0 01-4.441 1.738c-3.203.972-6.524 1.461-9.763 2.293.244.464.545.852.92.942.213.05.426-.004.63-.062 2.977-.822 5.854-1.968 8.807-2.869 2.884-.88 5.87-1.454 8.8-2.194.675-.171 1.353-.343 1.999-.608.15-.062.306-.133.404-.275.127-.183.134-.446.122-.691a6.832 6.832 0 00-.76-2.807z"
        fill="#CDE0E9"
      />
      <Path
        d="M20.085 6.555c.27-.276.525-.567.762-.87M22.59 9.795c.335-.23.69-.432 1.06-.604M25.735 21.617l.7-.323M26.175 24.193l1.241-.43M26.81 27.155l.998-.355M27.636 30.653a17.39 17.39 0 011.587-.446M15.516 33.776c-.36.16-.704.352-1.027.575M14.629 31.825l-1.281.589M11.294 22.35c-.4.106-.827.116-1.232.025M10.722 19.785l-1.213-.11M10.053 16.708a3.047 3.047 0 01-1.174-.306M9.928 13.043c-.446.044-.9.014-1.336-.09M10.287 10.028a2.172 2.172 0 01-1.33-.394M11.81 6.776a6.834 6.834 0 00-.9-.891M17.915 5.215c.004-.315.067-.629.187-.92M15.216 4.811c-.08-.47-.192-.934-.334-1.389M25.34 12.915l-.635-.824M25.774 7.189a1.281 1.281 0 01-.896-.543M26.791 4.601a3.12 3.12 0 01-.33-.821M28.612 3.46a2.127 2.127 0 01-.122-.925M30.897 4.593l1.006-.635M32.424 7.78a4.93 4.93 0 011.308-.35M33.023 11.423c.5.005 1.186.03 1.685.06M32.628 14.424c.45.14.869.38 1.215.699M31.332 16.744c.236.352.542.657.895.895M29.078 18.694c.2.267.346.573.425.896M26.876 19.864l.243.892M5.483 19.542a439.47 439.47 0 01-.288-1.098M7.194 19.554l.798-.916M3.844 21.067l-1.18-.275M3.829 23.582c-.447.085-.88.24-1.278.46M4.566 26.447a5.03 5.03 0 00-.94.563M5.894 28.911c-.292.22-.56.473-.795.753M7.8 30.582c-.115.277-.232.554-.348.83M10.16 31.515c.028.468.007.94-.064 1.404M15.795 10.03l1.012-.598M17.065 15.088l1.493-.522M19.3 22.393l1.101-.658M20.768 27.337c.386-.13.75-.328 1.07-.581M17.455 32.11a3.86 3.86 0 00.884-.632M15.845 27.054a7.16 7.16 0 001.314-1.177M13.48 19.719c.381-.314.8-.583 1.244-.798M12.835 13.475l1.056-.785M19.36 10.844c.555-.002 1.109.038 1.657.122M23.115 23.736c.382.187.81.279 1.236.269M24.298 29.721l1.242.332"
        stroke="#243645"
        strokeWidth={0.352}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Sticker111D4;
