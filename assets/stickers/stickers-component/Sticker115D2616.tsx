import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 55
// height: 45
function Sticker115D2616(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={55 * stickerScale}
      height={45 * stickerScale}
      fill="none"
      {...props}
    >
      <Path
        d="M42.588 4.917c-1.82-.197-3.795-.187-5.88.034a53.664 53.664 0 00-7.044-1.325 53.489 53.489 0 00-7.164-.221c-1.99-.665-3.915-1.101-5.736-1.3-5.784-.63-10.538 1.15-13.048 4.89-2.326 3.465-2.32 7.952.017 12.305 2.482 4.626 4.102 7.448 6.452 8.173-1.163 1.897-2.563 5.154.822 9.338a7.268 7.268 0 003.7 2.45c1.416 2.627 4.284 4.51 7.622 4.873l5.833.636c3.338.363 6.541-.859 8.486-3.118a7.262 7.262 0 004.14-1.599c4.2-3.355 3.53-6.841 2.801-8.943 2.45-.202 4.637-2.612 8.05-6.594 3.216-3.75 4.18-8.13 2.65-12.016-1.654-4.187-5.918-6.952-11.7-7.583z"
        fill="#10181E"
      />
      <Path
        d="M40.613 2.938c-1.82-.199-3.795-.189-5.88.033a54.378 54.378 0 00-7.044-1.326 53.685 53.685 0 00-7.165-.221C18.535.76 16.61.324 14.788.124 9.005-.506 4.25 1.276 1.741 5.014-.586 8.48-.58 12.966 1.757 17.32c2.483 4.625 4.102 7.447 6.452 8.173-1.163 1.896-2.562 5.155.822 9.338a7.273 7.273 0 003.701 2.45c1.416 2.627 4.283 4.509 7.622 4.872l5.832.636c3.337.364 6.542-.859 8.486-3.119a7.268 7.268 0 004.14-1.597c4.2-3.357 3.53-6.841 2.801-8.944 2.451-.2 4.637-2.61 8.05-6.593 3.216-3.75 4.18-8.129 2.65-12.016-1.654-4.188-5.917-6.953-11.7-7.582z"
        fill="#fff"
      />
      <Path
        d="M15.657 27.728l-.589 5.445c-.303 2.796 2.22 5.363 5.635 5.734l5.833.636c3.415.371 6.428-1.595 6.73-4.39l.59-5.443-18.199-1.982z"
        fill="#703E1B"
      />
      <Path
        d="M26.473 40.116l-5.833-.635c-3.724-.407-6.48-3.264-6.144-6.37l.652-6.018 19.34 2.106-.65 6.018c-.337 3.107-3.641 5.305-7.365 4.9zM16.166 28.364l-.527 4.87c-.268 2.475 2.03 4.763 5.125 5.1l5.834.635c3.094.337 5.829-1.403 6.096-3.878l.527-4.87-17.055-1.857z"
        fill="#482511"
      />
      <Path
        d="M27.99 29.377l-3.266-.357-3.266-.355c-.616 3.504-.163 5.738.499 7.125.69 1.446 3.035 1.702 4.02.437.944-1.21 1.863-3.295 2.013-6.85z"
        fill="#F05A28"
      />
      <Path
        d="M37.791 26.18c.947-3.131 9.412-11.165 5.333-15.589-4.078-4.423-15.789-5.697-15.789-5.697S15.625 3.617 10.697 7.06c-4.93 3.443 1.619 13.11 1.873 16.372.255 3.26-4.763 4.704-1.01 9.34 3.75 4.638 13.035-2.559 13.035-2.559s7.53 9.028 12.185 5.306c4.657-3.72.066-6.21 1.012-9.34z"
        fill="#D08C61"
      />
      <Path
        d="M33.585 36.962c-3.826-.417-7.864-4.616-9.075-5.97-1.472 1.061-6.314 4.294-10.14 3.878-1.35-.147-2.447-.731-3.258-1.733-2.62-3.238-1.282-5.254-.209-6.874.604-.91 1.172-1.77 1.092-2.787-.066-.861-.688-2.388-1.347-4.003-1.752-4.299-4.152-10.185-.281-12.887 5.048-3.526 16.543-2.321 17.03-2.268.488.054 11.972 1.35 16.148 5.88 3.2 3.472-.402 8.706-3.032 12.526-.99 1.437-1.923 2.794-2.172 3.621-.296.977.075 1.938.47 2.957.703 1.814 1.575 4.07-1.674 6.669-1.005.806-2.2 1.14-3.552.991zm-8.928-7.322a.57.57 0 01.379.204c.046.054 4.664 5.535 8.673 5.973 1.053.114 1.94-.13 2.713-.748C39.01 33 38.45 31.553 37.74 29.72c-.447-1.154-.91-2.35-.499-3.707.303-1.001 1.241-2.364 2.328-3.942 2.41-3.5 5.71-8.294 3.134-11.088-3.886-4.217-15.313-5.504-15.427-5.516-.115-.013-11.555-1.212-16.25 2.068-3.113 2.173-.917 7.566.69 11.504.722 1.776 1.347 3.308 1.428 4.35.11 1.415-.596 2.482-1.281 3.515-1.085 1.638-1.943 2.93.144 5.51.622.768 1.437 1.197 2.49 1.313 4.014.436 9.692-3.923 9.75-3.967a.562.562 0 01.41-.119z"
        fill="#482511"
      />
      <Path
        d="M35.32 23.694c.94-.372 1.585-1.259 2.001-2.18 1.163-2.574.837-5.764-.82-8.049-1.658-2.284-4.584-3.575-7.383-3.256-.59.067-1.186.206-1.695.516-1.12.68-1.62 2.053-1.794 3.354-.379 2.839.562 5.95 2.827 7.694 1.042.8 2.29 1.277 3.537 1.683 1.08.353 2.271.657 3.327.238z"
        fill="#703E1B"
      />
      <Path
        d="M29.084 24.972c-2.281-1.436-5.217-1.754-7.753-.844-1.163.417-2.097 1.06-1.982 2.04.15 1.284 1.558 2.564 2.863 3.494a5.02 5.02 0 004.826.527c1.475-.627 3.122-1.575 3.545-2.797.324-.933-.452-1.762-1.499-2.42zM20.089 18.63a2.652 2.652 0 002.648-2.656 2.652 2.652 0 00-2.648-2.656 2.652 2.652 0 00-2.648 2.656 2.652 2.652 0 002.648 2.656z"
        fill="#161417"
      />
      <Path
        d="M20.413 16.664a.808.808 0 00.807-.81.808.808 0 10-.807.81zM21.542 17.719a.454.454 0 10-.001-.909.454.454 0 00.001.909z"
        fill="#fff"
      />
      <Path
        d="M32.043 19.93a2.652 2.652 0 002.648-2.655 2.652 2.652 0 00-2.648-2.656 2.652 2.652 0 00-2.648 2.656 2.652 2.652 0 002.648 2.656z"
        fill="#161417"
      />
      <Path
        d="M32.366 17.965a.808.808 0 00.807-.81.808.808 0 10-1.613 0c0 .447.36.81.806.81zM33.496 19.021a.454.454 0 10-.001-.909.454.454 0 00.001.909z"
        fill="#fff"
      />
      <Path
        d="M20.022 4.703s-8.274 14.01-9.47 16.585c-1.194 2.575-2.587.71-5.93-5.515C.24 7.602 6.787.015 20.022 4.703z"
        fill="#703E1B"
      />
      <Path
        d="M9.276 22.978c-1.306-.141-2.646-2.253-5.158-6.933-1.85-3.446-1.904-6.92-.152-9.529C5.9 3.635 9.739 2.281 14.5 2.799c1.795.194 3.718.654 5.714 1.36l.66.234-.356.605c-.082.14-8.273 14.012-9.441 16.534-.182.386-.728 1.564-1.801 1.446zm5.097-19.033c-4.321-.47-7.768.702-9.455 3.214-1.507 2.244-1.43 5.283.21 8.34 1.17 2.178 3.346 6.233 4.27 6.333.123.015.355-.186.634-.788 1.063-2.294 7.51-13.268 9.134-16.024-1.675-.548-3.283-.91-4.793-1.075z"
        fill="#482511"
      />
      <Path
        d="M34.52 6.282s5.083 15.464 5.699 18.237c.617 2.772 2.375 1.252 6.972-4.111 6.03-7.036 1.26-15.856-12.671-14.126z"
        fill="#703E1B"
      />
      <Path
        d="M41.106 26.446c-1.074-.117-1.355-1.385-1.448-1.801-.603-2.714-5.633-18.028-5.683-18.183l-.22-.664.694-.087c2.103-.261 4.08-.295 5.874-.099 4.761.519 8.221 2.668 9.493 5.898 1.153 2.927.356 6.307-2.189 9.274-3.453 4.03-5.215 5.803-6.52 5.662zm-5.82-19.67c.998 3.041 4.945 15.147 5.494 17.617.144.648.326.893.45.907.923.1 3.917-3.392 5.526-5.268 2.255-2.633 2.98-5.585 1.99-8.1-1.11-2.818-4.226-4.704-8.548-5.174-1.508-.166-3.158-.16-4.912.017z"
        fill="#482511"
      />
    </Svg>
  );
}

export default Sticker115D2616;
