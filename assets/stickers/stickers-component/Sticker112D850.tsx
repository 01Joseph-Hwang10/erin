import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/context/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 65
// height: 58
function Sticker112D850(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={65 * stickerScale}
      height={58 * stickerScale}
      fill="none"
      {...props}
      viewBox="0 0 65 58"
    >
      <Path
        d="M25.867 8.354zm.001-1.025a1.253 1.253 0 00-.226.023c-.16.03-.311.062-.453.092-.572.126-.932.673-.803 1.224.111.476.55.8 1.037.8.077 0 .154-.009.231-.025.128-.027.259-.054.402-.08a1.067 1.067 0 00.586-.307 1.004 1.004 0 00.288-.7v-.001c0-.5-.37-.914-.86-1.006a1.03 1.03 0 00-.202-.02zM30.128 7.965c1.236 0 2.616.1 4.027.388a24.585 24.585 0 00-4.24-.376c-.446 0-.905.013-1.37.041a24.015 24.015 0 011.583-.053zm0-1.024c-.545 0-1.104.02-1.658.057-.583.04-1.026.526-.986 1.09.037.54.505.955 1.06.955l.068-.001c.429-.026.867-.04 1.305-.04 1.327 0 2.689.121 4.048.36.063.011.128.017.19.017.5 0 .944-.338 1.043-.826.112-.549-.255-1.084-.823-1.2a21.167 21.167 0 00-4.247-.412zM43.103 11.569c1.835.977 3.35 2.211 4.468 3.285a23.18 23.18 0 00-4.468-3.285zm.002-1.024c-.37 0-.728.186-.924.516a1.003 1.003 0 00.382 1.39 21.975 21.975 0 014.261 3.134c.208.196.477.294.747.294.273 0 .546-.1.754-.303a.996.996 0 00-.004-1.446c-1.476-1.418-3.059-2.58-4.702-3.457a1.086 1.086 0 00-.514-.128zM49.366 16.796zm0-1.023c-.228 0-.459.07-.654.216a.998.998 0 00-.185 1.436c.094.116.18.224.258.328.21.272.53.415.857.415.219 0 .439-.065.63-.2a1 1 0 00.225-1.431 13.558 13.558 0 00-.293-.37 1.078 1.078 0 00-.838-.394z"
        fill="#51332A"
      />
      <Path
        d="M22.298 1.024c1.925 0 3.845.295 5.702.88a20.348 20.348 0 014.28 1.917 19.9 19.9 0 013.17 2.32c2.167.45 3.699 1.035 4.183 1.232.499.156 2.053.68 3.995 1.707a21.087 21.087 0 018.149 1.354 18.652 18.652 0 014.642 2.574 18.637 18.637 0 014.236 4.55c1.45 2.188 2.434 4.727 2.925 7.551.42 2.418.47 4.574.152 6.409-.641 3.67-2.67 5.37-4.26 6.15a7.547 7.547 0 01-3.357.758c-.18 0-.359-.005-.54-.017a13.673 13.673 0 01-1.127 3.023c-.938 1.823-2.274 3.4-3.987 4.707.587 1.768.561 3.637-.105 5.36-.653 1.68-1.855 3.086-3.48 4.065-1.524.918-3.326 1.402-5.211 1.402-1.281 0-2.553-.223-3.778-.663-3.404-1.223-5.837-3.933-6.497-7.007a42.96 42.96 0 01-2.165-.378 7.931 7.931 0 01-2.811.515c-1.452 0-2.536-.401-2.974-.594a7.267 7.267 0 01-.372-.151l-.02-.01a.296.296 0 01-.024-.01l-.006-.002a7.803 7.803 0 01-.376-.177l-.008-.004-.021-.01a7.99 7.99 0 01-3.34-3.126 41.165 41.165 0 01-1.837-1.046l-.026-.015a28.608 28.608 0 00-.171-.103 9.214 9.214 0 01-1.603.895c-1.26.547-2.683.837-4.115.837-1.281 0-2.553-.223-3.777-.663-2.43-.873-4.414-2.512-5.587-4.612a8.442 8.442 0 01-1.054-3.33 7.706 7.706 0 01.488-3.553c.652-1.682 1.87-3.09 3.465-4.055-.376-2.022-.304-4.014.216-5.941a13.79 13.79 0 011.204-2.996 8.02 8.02 0 01-.659-.535A7.027 7.027 0 014.04 17.75c-.671-1.592-1.049-4.158.963-7.335C6.01 8.828 7.514 7.23 9.477 5.669c2.291-1.823 4.763-3.122 7.345-3.86a19.866 19.866 0 015.476-.785zM11.519 43.503c2.191 0 4.213-.87 5.457-2.383.353.237.719.475 1.096.712l.096.06.257.16.153.093c.06.038.123.075.184.112a38.322 38.322 0 002.406 1.34c.004.01.028.068.073.161.003.006.005.012.009.017l.063.13a5.55 5.55 0 002.48 2.442c.055.027.109.054.165.08.035.017.072.032.108.048l.008.003a4.982 4.982 0 00.35.14c0 .001.797.402 1.988.402.726 0 1.6-.149 2.53-.63h.003c.961.214 1.91.386 2.832.523l.076.012.257.036.235.033.153.02c.419.055.83.104 1.235.145-.236 2.832 1.766 5.714 5.029 6.885.965.347 1.95.511 2.9.511 2.841 0 5.4-1.462 6.343-3.897.694-1.79.37-3.734-.703-5.35.072-.04.142-.081.214-.123 4.68-2.77 5.827-6.837 5.967-9.756.278.115.544.211.792.291.595.193 1.22.295 1.838.295.768 0 1.526-.157 2.218-.497 3.523-1.728 3.356-6.667 2.774-10.01-.41-2.354-1.231-4.637-2.564-6.65-4.404-6.646-11.369-7.376-14.217-7.376-.781 0-1.252.055-1.277.058-2.413-1.366-4.293-1.902-4.293-1.902s-1.785-.78-4.537-1.27c-.064-.07-4.64-4.927-11.92-4.928h-.002c-1.48 0-3.072.2-4.763.684-2.377.68-4.55 1.886-6.46 3.408-2.715 2.159-6.201 5.784-4.715 9.313.528 1.253 1.63 2.196 2.928 2.71.242.098.509.192.797.28-1.88 2.295-3.78 6.091-2.128 11.136l.025.073c-1.853.563-3.365 1.81-4.044 3.562-1.26 3.252.835 7.008 4.682 8.39.966.342 1.95.507 2.902.507zM22.298 0c-1.917 0-3.862.278-5.78.827-2.72.777-5.318 2.14-7.72 4.052C6.744 6.514 5.161 8.196 4.094 9.88c-2.244 3.54-1.805 6.443-1.043 8.253a8.041 8.041 0 002.036 2.843l.066.059a14.576 14.576 0 00-.913 2.468A14.175 14.175 0 003.9 29.22C2.377 30.29 1.242 31.723.592 33.4a8.71 8.71 0 00-.551 4.005 9.43 9.43 0 001.177 3.72c1.295 2.32 3.48 4.127 6.152 5.087 1.344.483 2.74.728 4.15.728 1.58 0 3.155-.32 4.552-.929.409-.177.807-.382 1.187-.61.411.243.826.478 1.239.703a9.066 9.066 0 003.62 3.277l.02.01.015.007c.094.047.182.089.266.129l.158.07.002.001c.01.005.02.01.032.014l.018.008.148.063c.085.035.167.068.247.097a8.618 8.618 0 003.389.674c.986 0 1.959-.16 2.895-.476.401.078.809.151 1.218.218.428 1.44 1.21 2.802 2.285 3.974 1.26 1.368 2.885 2.436 4.703 3.09 1.345.483 2.741.728 4.15.728 2.085 0 4.083-.54 5.774-1.558 1.827-1.1 3.18-2.682 3.914-4.575a8.766 8.766 0 00.32-5.353c1.573-1.313 2.826-2.862 3.729-4.617.4-.776.73-1.594.989-2.44a8.592 8.592 0 003.561-.867c1.809-.887 4.115-2.803 4.828-6.894.34-1.946.287-4.216-.153-6.746-.514-2.96-1.549-5.628-3.076-7.932a19.702 19.702 0 00-4.473-4.803 19.75 19.75 0 00-4.91-2.723 22.2 22.2 0 00-8.286-1.433c-1.824-.941-3.28-1.447-3.878-1.636-.58-.233-2.023-.77-4.043-1.21a21.33 21.33 0 00-3.126-2.253A21.392 21.392 0 0028.328.93 20.11 20.11 0 0022.298 0zM11.519 42.478c-.854 0-1.706-.15-2.53-.446C5.7 40.85 3.88 37.677 4.935 34.96c.534-1.383 1.762-2.456 3.366-2.944.27-.082.495-.264.624-.506a.991.991 0 00.068-.784l-.014-.038-.01-.03c-1.51-4.613.225-8.089 1.95-10.192a.991.991 0 00.181-.933 1.047 1.047 0 00-.694-.676 8.998 8.998 0 01-.714-.251c-1.102-.436-1.956-1.22-2.348-2.149-.535-1.269-.305-2.66.703-4.252.788-1.243 2.07-2.586 3.702-3.886 1.918-1.527 3.966-2.609 6.088-3.215a16.246 16.246 0 014.46-.641c2.816 0 5.538.765 8.089 2.274 1.931 1.141 3.033 2.304 3.043 2.316.157.166.366.28.596.32 2.573.459 4.275 1.19 4.291 1.198.044.02.091.036.137.05.017.004 1.8.525 4.056 1.801a1.096 1.096 0 00.67.134c.004 0 .433-.05 1.147-.05 2.629 0 9.191.673 13.32 6.903 1.188 1.795 2.001 3.905 2.412 6.27.35 2.012.403 3.834.153 5.27-.32 1.839-1.093 3.034-2.36 3.656a3.912 3.912 0 01-1.736.385c-.498 0-1.003-.08-1.501-.242a9.746 9.746 0 01-.71-.26 1.093 1.093 0 00-.984.073 1.022 1.022 0 00-.5.82c-.128 2.675-1.18 6.397-5.46 8.93a8.463 8.463 0 01-.197.115 1.031 1.031 0 00-.494.643.994.994 0 00.14.79c.932 1.404 1.151 3.021.602 4.44-.76 1.963-2.86 3.23-5.347 3.23a7.48 7.48 0 01-2.53-.445c-2.76-.992-4.543-3.395-4.339-5.844.046-.553-.374-1.041-.947-1.1-.398-.04-.804-.089-1.204-.14l-.15-.02c-.076-.01-.152-.02-.228-.032-.083-.012-.167-.023-.25-.036l-.043-.007-.03-.004c-.944-.14-1.87-.311-2.755-.509a1.114 1.114 0 00-.747.097 4.39 4.39 0 01-2.027.507c-.89 0-1.489-.28-1.495-.283a1.134 1.134 0 00-.12-.052 4.293 4.293 0 01-.254-.102l-.024-.01c-.002 0-.003-.002-.003-.002a.045.045 0 01-.012-.004l-.012-.006-.073-.032a3.604 3.604 0 01-.138-.067l-.013-.006-.003-.002a4.49 4.49 0 01-2.054-2.085l-.004-.008-.002-.004c-.028-.058-.041-.091-.044-.097a.31.31 0 00-.017-.04s0-.002-.002-.003a1.046 1.046 0 00-.48-.502 38.311 38.311 0 01-2.339-1.299l-.026-.016-.154-.093c-.045-.026-.09-.055-.135-.082l-.013-.008-.252-.155-.093-.058a43.105 43.105 0 01-1.07-.695 1.088 1.088 0 00-.607-.184c-.314 0-.625.134-.834.389-1.025 1.243-2.753 1.988-4.62 1.988z"
        fill="#51332A"
      />
      <Path
        d="M53.165 31.818C55.533 14.416 38.754 9.636 38.754 9.636s-15.929-6.971-25.976 7.67c0 0-7.665 4.986-4.823 13.66.868 2.648 2.539 4.982 4.684 6.837 2.505 2.163 6.938 5.503 12.32 7.437 5.384 1.934 11.005 2.208 14.37 2.15 2.88-.047 5.732-.756 8.188-2.209 8.048-4.761 5.648-13.363 5.648-13.363z"
        fill="#F5D492"
      />
      <Path
        d="M38.522 47.91c-3.67 0-8.793-.41-13.748-2.19-5.333-1.916-9.737-5.155-12.49-7.535-2.303-1.99-3.973-4.432-4.836-7.063-1.53-4.67-.08-8.296 1.406-10.515 1.428-2.13 3.125-3.38 3.535-3.663 2.335-3.375 5.176-5.888 8.448-7.47 2.642-1.278 5.566-1.953 8.688-2.005 5.104-.085 8.988 1.505 9.415 1.687.447.132 4.466 1.381 8.263 4.665 2.323 2.008 4.072 4.362 5.201 6.995 1.396 3.26 1.832 6.95 1.301 10.972.117.474.55 2.488.18 4.998-.385 2.614-1.756 6.268-6.09 8.832-2.441 1.444-5.367 2.234-8.458 2.285-.264.005-.535.008-.815.008zm-8.61-39.42c-.136 0-.271 0-.409.003-6.747.125-12.226 3.185-16.282 9.095l-.059.085-.086.058c-.02.012-1.87 1.235-3.35 3.462-1.963 2.951-2.39 6.187-1.264 9.619.804 2.456 2.37 4.742 4.532 6.608 2.685 2.322 6.973 5.48 12.15 7.34 5.176 1.86 10.56 2.178 14.173 2.12 2.902-.049 5.64-.787 7.92-2.135 3.184-1.884 5.064-4.598 5.589-8.066.394-2.616-.172-4.708-.177-4.728l-.027-.098.014-.1c.956-7.025-1.102-12.792-6.115-17.143-3.763-3.266-7.877-4.47-7.919-4.482l-.034-.01-.033-.015c-.037-.017-3.756-1.614-8.623-1.614z"
        fill="#51332A"
      />
      <Path
        d="M37.374 43.932a10.658 10.658 0 01-2.09 3.358 42.696 42.696 0 01-6.34-.906 5.834 5.834 0 01-4.955.053c-.069-.032-.136-.063-.205-.099-.066-.03-.13-.067-.194-.102a5.543 5.543 0 01-2.127-2.07 4.619 4.619 0 01-.295-.575h-.002a41.346 41.346 0 01-5.402-3.314c-.012-1.28.214-2.583.706-3.855 1.016-2.622 2.984-4.636 5.38-5.813a11.516 11.516 0 0110.01-.066c2.524 1.199 4.401 3.225 5.402 5.604a10.33 10.33 0 01.112 7.785z"
        fill="#7D4D32"
      />
      <Path
        d="M23.26 25.303c-1.186-.425-1.788-1.696-1.346-2.838l.284-.733c.443-1.141 1.76-1.721 2.947-1.296 1.187.426 1.79 1.697 1.347 2.839l-.285.732c-.441 1.142-1.762 1.722-2.947 1.296z"
        fill="#51332A"
      />
      <Path
        d="M27.043 23.503c.986 0 1.785-.77 1.785-1.719 0-.948-.8-1.718-1.785-1.718-.985 0-1.784.77-1.784 1.718 0 .95.799 1.719 1.784 1.719z"
        fill="#fff"
      />
      <Path
        d="M39.805 31.248c1.187.426 2.507-.154 2.95-1.296l.283-.733c.443-1.141-.16-2.412-1.347-2.838-1.185-.426-2.505.154-2.948 1.296l-.283.733c-.443 1.141.16 2.412 1.345 2.838z"
        fill="#51332A"
      />
      <Path
        d="M39.34 27.92c.986 0 1.784-.77 1.784-1.718s-.798-1.717-1.783-1.717c-.985 0-1.783.77-1.783 1.718s.798 1.717 1.783 1.717z"
        fill="#fff"
      />
      <Path
        d="M31.532 28.276s-.294-.161-.707-.244c-.777-.155-1.472.542-1.275 1.281.127.476.428.978 1.107 1.223.679.243 1.249.055 1.67-.225.652-.434.6-1.401-.093-1.773-.368-.198-.702-.262-.702-.262z"
        fill="#51332A"
      />
      <Path
        d="M38.522 47.903c-3.668 0-8.792-.41-13.747-2.19-5.33-1.916-9.732-5.154-12.485-7.534-2.302-1.99-3.973-4.43-4.835-7.06-1.53-4.668-.08-8.29 1.404-10.509 1.428-2.132 3.127-3.38 3.536-3.661 2.333-3.374 5.174-5.887 8.444-7.469 2.643-1.278 5.565-1.952 8.686-2.004 5.102-.086 8.988 1.505 9.413 1.686.445.132 4.462 1.381 8.26 4.664 2.321 2.008 4.072 4.36 5.2 6.992 1.394 3.26 1.832 6.95 1.299 10.97.117.472.552 2.485.181 4.997-.386 2.613-1.755 6.264-6.087 8.826-2.44 1.444-5.363 2.234-8.454 2.286-.264.004-.535.006-.815.006zm-8.61-39.42c-.136 0-.271 0-.409.004-6.75.124-12.23 3.186-16.287 9.099a.51.51 0 01-.145.14c-.018.011-1.868 1.236-3.35 3.463-1.964 2.953-2.391 6.192-1.266 9.627.804 2.457 2.373 4.744 4.534 6.611 2.686 2.322 6.975 5.48 12.152 7.34 5.177 1.86 10.567 2.18 14.177 2.12 2.904-.048 5.643-.788 7.924-2.136 3.185-1.884 5.066-4.6 5.59-8.07.396-2.619-.17-4.711-.175-4.732a.481.481 0 01-.014-.196c.956-7.028-1.102-12.798-6.117-17.149-3.765-3.268-7.88-4.47-7.922-4.483a.652.652 0 01-.067-.024c-.037-.018-3.756-1.614-8.625-1.614z"
        fill="#51332A"
      />
      <Path
        d="M24.425 46.617c-2.939-1.056-4.433-4.207-3.336-7.038l1.069-2.758c1.096-2.83 4.369-4.27 7.307-3.213 2.94 1.056 4.434 4.207 3.338 7.038l-1.07 2.757c-1.097 2.832-4.368 4.27-7.308 3.214z"
        fill="#7D4D32"
      />
      <Path
        d="M34.219 8.367S27.592 1.246 17.533 4.12c-2.377.68-4.55 1.886-6.46 3.408-2.715 2.159-6.201 5.784-4.715 9.313.528 1.253 1.63 2.196 2.928 2.711 3.232 1.281 10.707 2.416 15.93-11.06 0-.002 4.337-1.097 9.003-.126zM43.044 11.538s9.853-1.2 15.498 7.318c1.333 2.014 2.155 4.296 2.564 6.651.582 3.341.75 8.281-2.774 10.01-1.251.613-2.724.63-4.056.2-3.313-1.069-9.733-4.928-4.513-18.405 0 0-2.53-3.564-6.718-5.774z"
        fill="#885D3F"
      />
      <Path
        d="M12.972 20.786c-1.525 0-2.865-.363-3.885-.767-1.492-.592-2.664-1.681-3.214-2.988-.727-1.726-.452-3.618.82-5.623.892-1.406 2.253-2.842 4.045-4.27 2.085-1.658 4.322-2.836 6.648-3.502 5.361-1.532 9.757-.26 12.5 1.078 2.969 1.446 4.654 3.239 4.727 3.314a.49.49 0 01.062.59.533.533 0 01-.564.24c-3.847-.8-7.515-.146-8.502.06-2.314 5.857-5.314 9.594-8.922 11.11a9.496 9.496 0 01-3.715.758zm9.348-16.85c-1.528 0-3.076.224-4.637.67-2.19.626-4.303 1.74-6.278 3.312-1.703 1.356-2.988 2.707-3.818 4.017-1.088 1.717-1.337 3.304-.744 4.716.445 1.058 1.409 1.944 2.642 2.434 1.603.636 4.08 1.155 6.779.02 3.39-1.424 6.236-5.055 8.46-10.79a.515.515 0 01.357-.312c.159-.04 3.489-.86 7.487-.409A17.763 17.763 0 0029.374 5.6c-2.283-1.108-4.644-1.664-7.054-1.664zM56.107 36.514c-.663 0-1.34-.106-1.997-.319-1.835-.592-4.324-1.904-5.75-4.784-1.695-3.423-1.422-8.139.815-14.022-.605-.78-2.93-3.587-6.38-5.409a.498.498 0 01-.264-.537.518.518 0 01.45-.407c.104-.012 2.597-.302 5.825.476 2.982.72 7.171 2.531 10.178 7.071 1.306 1.97 2.192 4.272 2.64 6.84.384 2.208.435 4.152.152 5.776-.404 2.317-1.482 3.92-3.205 4.766-.744.365-1.59.549-2.464.549zm-11.288-24.52c3.328 2.18 5.286 4.901 5.378 5.032a.489.489 0 01.059.462c-2.222 5.736-2.542 10.274-.95 13.489 1.268 2.56 3.494 3.73 5.137 4.26 1.265.409 2.595.346 3.652-.172 1.41-.692 2.3-2.05 2.646-4.033.263-1.513.212-3.345-.152-5.443-.423-2.433-1.261-4.608-2.49-6.463-2.258-3.408-5.457-5.637-9.51-6.625a18.405 18.405 0 00-3.77-.507zM32.068 38.528l-1.045 2.694a4.08 4.08 0 01-1.175 1.644 4.358 4.358 0 01-4.256.748c-1.507-.54-2.502-1.822-2.712-3.252a3.927 3.927 0 01.23-1.982l1.045-2.694c.814-2.104 3.245-3.177 5.435-2.39a4.145 4.145 0 012.366 2.123c.444.944.52 2.057.112 3.109z"
        fill="#51332A"
      />
      <Path
        d="M29.848 42.866a4.358 4.358 0 01-4.256.748c-1.507-.54-2.502-1.822-2.712-3.252a4.452 4.452 0 014.22-.641c1.48.53 2.479 1.75 2.748 3.145z"
        fill="#F16982"
      />
      <Path
        d="M27.065 44.376a4.894 4.894 0 01-1.656-.288c-1.635-.588-2.802-1.988-3.05-3.655a4.413 4.413 0 01.26-2.23l1.044-2.695a4.623 4.623 0 012.476-2.561 4.894 4.894 0 013.636-.126 4.652 4.652 0 012.659 2.387 4.41 4.41 0 01.125 3.497l-1.044 2.694a4.55 4.55 0 01-1.32 1.845 4.877 4.877 0 01-3.13 1.132zm1.046-10.834c-.524 0-1.046.108-1.536.324a3.597 3.597 0 00-1.929 1.996l-1.045 2.695a3.428 3.428 0 00-.201 1.738c.19 1.297 1.102 2.389 2.376 2.847a3.817 3.817 0 003.727-.656c.463-.394.81-.878 1.028-1.44l1.043-2.694c.345-.89.31-1.857-.096-2.725a3.629 3.629 0 00-2.072-1.858 3.793 3.793 0 00-1.295-.227zM26.414 47.525c-1.183 0-2.019-.36-2.199-.444-2.608-.95-3.502-3.218-3.54-3.314a.5.5 0 01.312-.648.529.529 0 01.67.297c.013.028.79 1.952 2.951 2.728.022.008.04.016.06.025.074.036 1.866.89 4.028-.227a.534.534 0 01.71.206.496.496 0 01-.213.684 6.002 6.002 0 01-2.78.693z"
        fill="#51332A"
      />
      <Path
        d="M36.64 37.146a.53.53 0 01-.404-.184.495.495 0 01.07-.711l2.4-1.907a.54.54 0 01.738.068.494.494 0 01-.07.711l-2.4 1.907a.536.536 0 01-.334.116zM39.174 38.056a.532.532 0 01-.406-.184.494.494 0 01.07-.71l2.4-1.908a.54.54 0 01.739.068.493.493 0 01-.07.711l-2.4 1.907a.534.534 0 01-.333.116zM41.556 38.912a.533.533 0 01-.406-.183.494.494 0 01.07-.712l2.4-1.907a.54.54 0 01.739.068.494.494 0 01-.07.712l-2.4 1.907a.533.533 0 01-.333.115zM21.982 31.88a.519.519 0 01-.516-.423l-.516-2.954a.507.507 0 01.43-.581.523.523 0 01.605.414l.515 2.955a.505.505 0 01-.43.58.565.565 0 01-.088.008zM19.45 30.97a.519.519 0 01-.517-.422l-.515-2.955a.506.506 0 01.43-.582.523.523 0 01.604.415l.515 2.954a.507.507 0 01-.43.582.48.48 0 01-.087.007zM17.067 30.114a.518.518 0 01-.516-.421l-.515-2.955a.505.505 0 01.43-.581.522.522 0 01.604.414l.515 2.954a.507.507 0 01-.518.589z"
        fill="#F16982"
      />
      <Path
        d="M8.607 43.012c3.845 1.381 7.984-.135 9.244-3.387 1.26-3.252-.835-7.008-4.68-8.39-3.846-1.382-7.984.134-9.245 3.387-1.26 3.252.836 7.008 4.681 8.39z"
        fill="#F5D492"
      />
      <Path
        d="M11.51 44.012a9.113 9.113 0 01-3.078-.54c-4.114-1.48-6.354-5.538-4.994-9.05 1.36-3.511 5.813-5.165 9.928-3.687 4.114 1.478 6.353 5.537 4.994 9.048-1.022 2.64-3.792 4.23-6.85 4.23zm-1.227-12.796c-2.625 0-4.985 1.337-5.85 3.564-1.154 2.983.805 6.45 4.37 7.73 3.564 1.281 7.404-.102 8.56-3.085 1.155-2.982-.805-6.45-4.368-7.732a8.035 8.035 0 00-2.712-.477z"
        fill="#51332A"
      />
      <Path
        d="M38.772 54.025c3.845 1.382 7.984-.134 9.244-3.386 1.26-3.253-.835-7.009-4.68-8.39-3.846-1.382-7.984.134-9.245 3.386-1.26 3.252.836 7.008 4.681 8.39z"
        fill="#F5D492"
      />
      <Path
        d="M41.654 55.061a9.108 9.108 0 01-3.077-.54c-1.982-.713-3.593-2.037-4.539-3.732-.956-1.716-1.118-3.605-.455-5.318 1.36-3.51 5.814-5.165 9.928-3.687 4.114 1.477 6.354 5.537 4.993 9.048-1.022 2.64-3.79 4.23-6.85 4.23zm-1.226-12.795c-2.626 0-4.986 1.336-5.849 3.564-.555 1.433-.415 3.022.396 4.475.823 1.475 2.233 2.632 3.973 3.256 3.563 1.28 7.403-.104 8.559-3.086 1.156-2.983-.804-6.45-4.368-7.73a8.016 8.016 0 00-2.711-.479zM11.51 44.006a9.102 9.102 0 01-3.076-.541c-4.11-1.477-6.348-5.532-4.99-9.04 1.36-3.508 5.81-5.16 9.92-3.684 4.108 1.477 6.347 5.532 4.989 9.04-1.02 2.636-3.788 4.225-6.843 4.225zM10.283 31.21c-2.629 0-4.991 1.338-5.854 3.567-1.158 2.987.804 6.458 4.372 7.741 3.568 1.281 7.414-.104 8.57-3.09 1.156-2.985-.806-6.458-4.374-7.74a8.038 8.038 0 00-2.714-.478z"
        fill="#51332A"
      />
      <Path
        d="M41.654 55.055a9.098 9.098 0 01-3.075-.541c-1.98-.712-3.59-2.035-4.534-3.728-.957-1.714-1.117-3.602-.456-5.311 1.36-3.508 5.81-5.161 9.919-3.684 4.111 1.477 6.349 5.532 4.99 9.04-1.022 2.636-3.788 4.224-6.844 4.224zM40.428 42.26c-2.628 0-4.99 1.337-5.856 3.567-.554 1.435-.415 3.026.398 4.481.824 1.477 2.235 2.634 3.975 3.26 3.57 1.281 7.413-.105 8.57-3.09 1.156-2.986-.804-6.46-4.372-7.74a8.042 8.042 0 00-2.715-.478zm7.578 8.394h.002-.002z"
        fill="#51332A"
      />
    </Svg>
  );
}

export default Sticker112D850;
