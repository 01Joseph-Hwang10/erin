import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 100
// height: 37
function Sticker115D1632(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={100 * stickerScale}
      height={37 * stickerScale}
      fill="none"
      {...props}
    >
      <Path
        d="M29.419 36.274c-.291-.017-.59-.035-.882-.06l.022-.305c.378.03.76.053 1.138.072l-.015.304c-.088-.002-.175-.008-.263-.011zm1.147.042l.005-.305c.29.007.587.01.878.01v.305c-.294 0-.59-.002-.883-.01zm-2.91-.181c-.292-.03-.588-.067-.878-.104l.036-.303c.288.036.58.07.872.102l-.03.305zm4.677.178l-.008-.304a61.1 61.1 0 00.877-.032l.014.306c-.295.013-.59.024-.883.03zm-6.43-.406c-.289-.042-.584-.094-.872-.145l.048-.3c.29.05.581.099.867.143l-.043.302zm8.194.321l-.02-.304a62.4 62.4 0 00.875-.071l.026.303c-.294.028-.587.052-.88.072zm-9.934-.631c-.29-.06-.581-.123-.866-.19l.065-.297c.282.065.57.127.857.187l-.056.3zm11.694.468l-.032-.304c.29-.034.58-.07.87-.111l.04.304c-.292.038-.586.076-.878.11zm-13.421-.866a36.572 36.572 0 01-.855-.23l.076-.294c.28.078.565.155.849.227l-.07.297zm15.174.623l-.045-.302c.287-.044.576-.093.865-.147l.05.302a44.16 44.16 0 01-.87.147zm-16.88-1.104c-.28-.087-.564-.179-.844-.272l.09-.292c.279.094.559.184.838.27l-.084.294zm18.62.79l-.057-.3c.287-.058.573-.116.86-.18l.062.297c-.29.065-.579.125-.866.183zm-20.301-1.353c-.278-.1-.556-.205-.83-.312l.102-.288c.272.108.548.212.824.31l-.096.29zm22.027.97l-.066-.298c.283-.069.569-.14.852-.217l.07.296c-.285.075-.57.148-.856.218zM17.393 33.51c-.268-.113-.544-.23-.817-.351l.114-.282c.273.12.545.238.812.348l-.109.285zm25.396 1.158l-.08-.294c.281-.083.562-.172.838-.263l.09.291c-.28.094-.565.183-.848.266zm-27.022-1.88a35.97 35.97 0 01-.8-.386l.124-.276c.265.131.53.259.798.385l-.122.278zm28.707 1.317l-.099-.287c.272-.103.548-.21.818-.324l.109.286c-.274.112-.552.222-.828.325zM14.172 32a36.59 36.59 0 01-.789-.417l.136-.27c.26.14.52.277.783.413l-.13.274zm31.947 1.427l-.116-.28c.263-.119.532-.247.798-.377l.124.277c-.268.13-.54.259-.806.38zm-33.516-2.271c-.26-.144-.517-.292-.774-.44l.142-.267c.256.147.512.295.77.438l-.138.268zM56.77 33.43c-.295-.02-.591-.041-.882-.068l.025-.306c.288.027.582.05.875.068l-.018.306zm.883.04l.01-.303c.208.006.418.012.63.016l.246.003-.002.305a24.333 24.333 0 01-.884-.02zm-2.644-.2c-.294-.035-.59-.074-.878-.117l.042-.302c.284.042.578.081.868.115l-.032.304zm4.411.214l-.006-.303c.288-.007.582-.018.878-.03l.012.306c-.298.013-.595.022-.884.027zm-6.162-.474c-.292-.053-.584-.11-.87-.171l.059-.297c.283.06.572.116.86.167l-.05.3zm7.927.396l-.019-.306c.292-.02.584-.04.874-.066l.024.303c-.29.027-.583.05-.879.069zm-13.463-.774l-.144-.268c.234-.134.476-.29.743-.47l.16.253c-.272.188-.52.347-.76.485zm15.222.624l-.028-.305c.292-.03.584-.063.874-.095l.03.304c-.29.033-.583.065-.876.096zm-11.423-.638a12.922 12.922 0 01-.843-.302l.106-.285c.286.114.555.21.82.294l-.083.293zm-40.46-2.352a66.822 66.822 0 01-.765-.456l.145-.264c.253.152.508.304.764.455l-.144.265zm53.635 2.79l-.034-.305.871-.11.037.303-.874.111zm-14.836-1.1c-.24-.111-.465-.223-.679-.326l-.061-.031.03-.066-.108-.158.125-.091.133.065c.216.107.442.217.68.328l-.12.279zm16.583.876l-.035-.304.737-.093.137-.018.035.304-.137.018-.737.093zm1.748-.22l-.035-.305.873-.114.037.303-.875.115zM9.535 29.346c-.255-.157-.508-.311-.76-.47l.151-.262c.251.157.503.313.758.468l-.15.264zm60.404 3.027l-.039-.303c.287-.04.579-.083.87-.127l.042.301a89.64 89.64 0 01-.873.129zm1.745-.263l-.044-.301c.288-.047.577-.096.867-.145l.049.302c-.293.05-.583.098-.872.144zM8.02 28.406l-.756-.473.152-.26.755.472-.151.261zm65.404 3.405l-.051-.3c.287-.053.577-.108.865-.163l.055.3c-.291.056-.58.112-.869.163zm1.733-.34l-.058-.3c.285-.061.573-.124.859-.19l.063.299c-.287.066-.574.128-.864.19zm-68.64-4.028c-.243-.166-.49-.341-.732-.522l.17-.25c.24.18.484.352.72.517l-.159.255zm70.366 3.63l-.068-.297c.284-.07.569-.142.852-.218l.073.296c-.286.075-.572.149-.857.22zm1.71-.457l-.08-.295c.283-.08.563-.165.844-.252l.084.292c-.281.087-.564.173-.849.255zm-73.52-4.245c-.23-.183-.462-.377-.692-.572l.185-.238c.229.196.458.386.687.567l-.18.243zm75.21 3.715l-.089-.291c.279-.095.558-.194.83-.293l.098.288c-.274.101-.556.2-.838.296zm1.668-.607l-.102-.288c.27-.103.544-.21.823-.32l.106.285c-.281.111-.557.218-.827.323zM3.705 25.203a48.736 48.736 0 01-.656-.615l.197-.226c.216.207.434.413.652.611l-.193.23zM83.6 28.825l-.108-.285c.269-.11.54-.223.815-.34l.11.282c-.274.118-.548.233-.817.343zM2.406 23.952c-.12-.123-.24-.25-.361-.375-.09-.096-.178-.191-.261-.287L2 23.084a19.62 19.62 0 00.611.649l-.206.219zm82.827 4.176l-.115-.28c.267-.119.536-.241.805-.366l.12.279c-.272.125-.54.249-.81.367zm1.612-.75l-.125-.277c.264-.13.527-.262.79-.398l.13.275c-.265.136-.53.27-.795.4zM1.22 22.566a7.297 7.297 0 01-.482-.792l.257-.145c.135.254.29.511.462.755l-.237.182zm87.209 3.993l-.136-.27c.26-.144.521-.289.77-.433l.144.266c-.253.147-.516.293-.778.437zM.362 20.924c-.106-.296-.19-.6-.249-.904l.287-.06c.058.287.137.575.238.856l-.276.108zm89.614 4.743l-.15-.264c.252-.155.504-.316.749-.476l.155.26c-.245.162-.5.322-.754.48zm1.496-.983l-.164-.253c.245-.173.487-.348.718-.523l.172.249c-.234.175-.476.352-.726.527zM.004 19.088a6.257 6.257 0 01.038-.942l.29.037a5.973 5.973 0 00-.034.892l-.294.013zm92.901 4.514l-.178-.242c.233-.186.461-.375.687-.564l.185.238c-.228.192-.46.381-.694.568zm1.377-1.15l-.187-.236c.226-.196.45-.393.67-.589l.193.232a77.12 77.12 0 01-.676.594zM.502 17.31l-.281-.085c.085-.301.193-.6.32-.88l.267.131a5.683 5.683 0 00-.305.834zm95.123 3.954l-.19-.232.074-.069.593-.529.191.232-.593.53-.075.068zM1.236 15.706l-.239-.176c.17-.253.365-.497.576-.724l.21.211c-.2.218-.384.449-.547.69zm95.724 4.35l-.199-.224c.217-.21.428-.424.626-.635l.21.215c-.203.214-.416.432-.637.644zM2.423 14.427l-.179-.244c.233-.185.485-.358.75-.518l.147.266a6.505 6.505 0 00-.718.496zM98.2 18.731l-.223-.2c.195-.236.372-.475.535-.709l.24.176c-.169.243-.353.49-.552.733zM3.913 13.53l-.116-.28c.263-.119.544-.23.836-.328l.09.293a8.8 8.8 0 00-.81.315zm1.646-.562l-.07-.296c.276-.072.558-.138.864-.203l.059.3c-.303.064-.581.127-.853.199zm1.715-.363l-.05-.3.63-.107.24-.041.047.304-.24.038c-.205.033-.413.07-.627.106zM99.23 17.21l-.256-.15c.143-.267.268-.54.37-.808l.274.112a7.32 7.32 0 01-.388.846zM9.012 12.3l-.055-.3c.341-.07.606-.143.832-.223l.094.292a6.592 6.592 0 01-.87.23zm1.696-.588l-.116-.282c.282-.128.544-.25.8-.374l.122.278c-.253.124-.525.25-.806.378zm1.604-.778l-.131-.273c.27-.143.53-.285.772-.426l.143.268c-.245.142-.509.287-.784.431zm87.571 4.532l-.287-.067c.06-.276.096-.555.11-.83l.001-.053.293.016-.003.054a5.536 5.536 0 01-.114.88zm-86.022-5.433l-.157-.26c.101-.066.198-.132.297-.2.143-.101.287-.202.43-.306l.167.252a35.343 35.343 0 01-.737.514zm85.804 3.598a5.39 5.39 0 00-.193-.868l.28-.093c.093.303.162.613.203.919l-.29.042zM15.317 8.986l-.17-.249c.234-.176.47-.356.706-.541l.176.246c-.239.184-.474.366-.712.544zm1.414-1.098l-.179-.244c.232-.184.464-.37.699-.559l.18.245-.7.558zm82.411 4.057a4.962 4.962 0 00-.465-.745l.231-.19c.186.248.352.513.495.79l-.26.145zM18.13 6.77l-.18-.243c.233-.185.466-.37.7-.558l.178.245c-.235.186-.468.37-.699.556zm79.962 3.783a5.059 5.059 0 00-.684-.531l.154-.26c.257.166.501.355.726.564l-.196.227zM86.12 9.668c-.27-.014-.535-.032-.794-.05l.02-.305c.258.018.52.036.79.05l.085.004-.014.306-.087-.005zm.97.045l.009-.306.438.014c.136.006.281.006.434.002l.006.306c-.157.002-.308.002-.449-.002l-.439-.014zm-2.645-.17c-.3-.029-.595-.061-.879-.097l.035-.303c.282.036.573.068.871.097l-.027.304zm4.42.134l-.024-.305c.252-.022.529-.051.872-.09l.03.304c-.344.04-.624.069-.879.09zm-6.175-.354c-.298-.047-.591-.1-.873-.156l.055-.3c.278.055.567.107.862.154l-.044.302zM19.53 5.669l-.173-.247c.235-.182.471-.362.713-.542l.17.25a55 55 0 00-.71.539zm61.42 3.308c-.292-.072-.58-.15-.858-.234l.08-.295c.274.082.558.16.845.23l-.067.299zm9.67.504l-.035-.303c.291-.035.582-.07.876-.103l.032.302a69.32 69.32 0 00-.874.104zm6.025.139a4.95 4.95 0 00-.816-.266l.064-.297c.296.069.586.163.863.279l-.11.284zm-4.28-.331l-.025-.304c.314-.027.604-.049.884-.063l.014.306c-.277.014-.562.033-.873.061zm-13.12-.825l-.043-.017a31.292 31.292 0 01-.787-.3l.103-.285c.258.102.522.202.783.297l.04.015-.096.29zm14.866.74V8.9c.282-.002.559.007.826.022l.064.002-.019.306-.06-.004a15.207 15.207 0 00-.811-.022zM77.593 7.81c-.272-.116-.545-.24-.813-.362l.119-.28c.265.122.537.243.805.358l-.111.284zM20.957 4.602l-.168-.25c.243-.174.486-.345.734-.516l.16.255c-.245.169-.485.34-.726.51zm55.02 2.461a32.43 32.43 0 01-.795-.408l.135-.273c.258.138.523.275.784.406l-.125.275zM22.42 3.6l-.152-.26c.248-.16.505-.314.766-.462l.142.267c-.256.147-.51.3-.756.455zm51.982 2.623c-.256-.146-.515-.3-.768-.454l.147-.264c.251.154.508.305.762.451l-.141.267zM47.728 4.289l-.093-.07c-.07-.052-.14-.102-.21-.15l.166-.253c.039.027.08.057.12.088.141-.122.275-.233.407-.337l.173.246c-.151.118-.307.25-.475.398l-.088.078zM23.952 2.725l-.13-.275c.262-.135.533-.267.805-.39l.117.28c-.268.122-.533.252-.792.385zm48.925 2.568a30.451 30.451 0 01-.745-.496l.16-.254c.244.168.494.332.738.492l-.153.258zm-26.192-1.7c-.25-.15-.508-.298-.767-.44l.137-.27c.263.143.525.293.778.445l-.148.264zm2.329-.274l-.147-.264c.253-.153.516-.301.779-.441l.135.27c-.26.14-.518.287-.767.435zM25.55 1.99l-.108-.284c.273-.113.552-.22.831-.32l.096.289c-.274.099-.55.206-.819.315zM71.4 4.286a24.334 24.334 0 00-.74-.491l.155-.26c.249.159.5.326.746.495l-.162.256zm-26.263-1.54a24.646 24.646 0 00-.798-.373l.114-.281c.272.12.544.248.808.379l-.124.275zM27.2 1.391l-.086-.292c.28-.088.568-.173.853-.251l.074.296a26.15 26.15 0 00-.841.247zm23.365 1.098l-.122-.277c.268-.128.541-.25.814-.366l.11.284c-.269.113-.538.234-.802.36zm-7.039-.458c-.27-.107-.546-.21-.823-.308l.096-.29c.279.1.559.204.833.313l-.106.285zm26.382 1.301a19.608 19.608 0 00-.768-.432l.133-.272c.258.14.52.286.78.438l-.145.266zM28.892.927L28.828.63c.287-.067.578-.129.868-.185l.053.3c-.284.057-.573.118-.857.182zm12.978.517c-.276-.087-.559-.17-.841-.25L41.102.9c.288.078.574.163.853.25l-.085.294zm10.316.364l-.1-.29c.276-.101.56-.199.842-.29l.087.292c-.28.09-.558.188-.83.288zM30.612.595l-.043-.303c.29-.044.585-.085.878-.118l.032.302c-.29.034-.58.074-.867.119zm9.567.383a28.6 28.6 0 00-.857-.186l.055-.3c.29.057.582.121.867.189l-.065.297zm28.176 1.517a26.234 26.234 0 00-.798-.37l.113-.282c.268.117.54.245.808.375l-.123.277zM32.351.39l-.023-.305c.29-.023.589-.042.883-.057l.015.306c-.294.013-.587.031-.874.056zm6.107.245a23.65 23.65 0 00-.865-.126l.034-.303c.292.037.587.08.876.129l-.045.3zM34.098.31L34.094 0c.293-.003.59 0 .884.006l-.005.306a23.528 23.528 0 00-.877-.004zm2.624.103a26.36 26.36 0 00-.874-.064l.017-.306c.291.016.59.038.883.065l-.026.305zm17.132.856L53.78.973c.283-.079.573-.154.86-.22l.064.296c-.284.067-.57.14-.849.219zm12.891.52c-.272-.106-.55-.207-.824-.3l.09-.291c.28.094.56.198.838.304l-.104.286zM55.56.865l-.053-.3c.29-.057.584-.107.873-.152l.043.302c-.287.045-.576.094-.863.15zm9.526.36c-.28-.081-.563-.157-.845-.224l.066-.297c.285.068.575.144.857.227l-.078.293zM57.29.6l-.03-.303c.294-.033.59-.06.882-.08l.02.304c-.289.022-.582.048-.872.08zm6.095.216a18.3 18.3 0 00-.863-.146l.041-.303c.292.043.586.092.874.147l-.052.302zm-4.35-.34l-.008-.305c.295-.008.593-.013.886-.008l-.005.306c-.288-.004-.581 0-.873.007zm2.62.089c-.29-.03-.583-.053-.872-.068l.014-.306c.295.016.592.04.884.069l-.027.305z"
        fill="#fff"
      />
      <Path
        d="M29.54 33.832a34.087 34.087 0 01-11.007-2.482c-3.622-1.472-6.924-3.545-10.116-5.548-1.554-.976-3.177-2.338-4.703-3.945-1.458-1.536-1.493-2.94-1.267-3.848.339-1.354 1.398-2.308 3.147-2.835.92-.278 1.79-.421 2.628-.562 1.013-.168 1.887-.312 2.678-.657 1.197-.525 2.959-1.339 4.408-2.349 1.184-.825 2.313-1.729 3.506-2.685 1.387-1.11 2.823-2.26 4.372-3.291 3.417-2.281 7.851-3.4 12.483-3.15 3.821.208 7.536 1.365 10.46 3.26.297.193.63.466 1.047.807.167.139.418.342.668.538.178-.167.354-.338.484-.467.588-.573 1.095-1.067 1.624-1.391 2.928-1.785 6.708-2.735 10.376-2.608.114.004.23.01.344.016 3.469.188 6.71 1.382 9.91 3.652a33.324 33.324 0 007.944 4.179c2.038.748 4.418 1.174 7.49 1.34.458.023.933.044 1.456.06 1.017.03 2.116-.104 3.282-.248 1.328-.161 2.7-.332 4.066-.256 1.529.082 2.39 1.091 2.686 2.007.601 1.856-.766 3.412-1.282 3.998A15.3 15.3 0 0195 18.605c-.274.243-.549.489-.824.735-1.058.945-2.151 1.924-3.324 2.813-3.176 2.413-7.136 4.06-10.232 5.229-4.444 1.675-9.409 2.39-13.715 2.927-.372.047-.746.094-1.119.143-2.416.311-4.914.633-7.458.59A35.118 35.118 0 0157.135 31a27.727 27.727 0 01-4.412-.586c-.914-.202-1.782-.626-2.546-1.002-.37-.18-.883-.43-1.224-.55a15.61 15.61 0 00-.997.695c-.537.394-1.092.804-1.664 1.094-1.554.79-3.063 1.38-4.611 1.798-4.153 1.128-8.237 1.593-12.14 1.383z"
        fill="#fff"
      />
      <Path
        d="M10.42 16.655c7.004-2.249 11.594-9.547 18.71-11.098 3.61-.788 7.603-.704 11.144.445 1.806.587 3.404 1.674 4.941 2.8.868.635 1.631 1.63 2.702 1.146 1.431-.65 2.565-2.403 4.052-3.17 1.364-.704 2.935-1.183 4.432-1.442 4.092-.704 7.98.263 11.384 2.7 6.452 4.619 13.506 6.457 21.302 6.37-7.496 2.264-15.127 3.253-22.879 4.018-6.772.666-12.477-.951-19.056-1.61-6.397-.64-12.387 1.897-18.63 2.756-3.228.444-6.604-.005-9.84-.264-3.45-.276-7.24-.917-10.514-2.115.766-.12 1.51-.3 2.251-.536z"
        fill="#E060AE"
      />
      <Path
        d="M89.577 16.277c-4.371 3.974-10.545 6.15-16.123 7.397-5.862 1.312-12.667 2.615-18.662 1.829-1.532-.203-3.051-.55-4.474-1.176-.674-.297-1.657-1.126-2.41-1.08-.894.053-1.788 1.244-2.532 1.724a18.21 18.21 0 01-4.154 1.964c-5.38 1.753-11.044 2.33-16.585.998-6.84-1.647-13.003-5.217-18.365-9.837 1.598.032 3.517.821 5.08 1.198 1.758.426 3.425.902 5.225 1.112 3.306.385 6.76.741 10.088.649 7.397-.206 14.181-4.032 21.72-2.733 3.17.547 6.34 1.22 9.547 1.494 4.127.351 8.118-.078 12.212-.561 7.072-.834 13.908-1.794 20.697-4.123-.428.373-.85.753-1.264 1.145z"
        fill="#E060AE"
      />
      <Path
        d="M94.686 13.965c-2.266-.123-4.847.58-7.29.507-3.274-.098-6.592-.407-9.703-1.545a35.702 35.702 0 01-8.521-4.484c-2.727-1.935-5.603-3.102-8.93-3.218-3.049-.106-6.382.638-9.029 2.252-.745.455-2.422 2.524-3.232 2.628-.626.081-2.563-1.756-3.174-2.151-5.742-3.723-14.525-3.968-20.274-.132-2.73 1.822-5.148 4.074-7.835 5.95-1.475 1.028-3.199 1.87-4.834 2.585-1.826.797-3.721.76-5.577 1.319-1.502.453-1.935 1.146-.795 2.347 1.243 1.31 2.696 2.59 4.208 3.541 3.142 1.974 6.316 3.967 9.74 5.36 7.105 2.886 14.314 2.986 21.609 1.004a21.554 21.554 0 004.146-1.619c1.09-.553 2.708-2.193 3.696-2.111 1.314.107 2.961 1.364 4.344 1.665 1.692.37 3.401.544 5.128.573 2.749.047 5.514-.373 8.241-.714 4.371-.545 9.01-1.225 13.162-2.79 3.226-1.216 6.833-2.778 9.61-4.885 1.387-1.053 2.693-2.273 4.003-3.428.142-.126 2.825-2.572 1.307-2.654zm-83.67 4.113C18.02 15.83 22.613 8.532 29.727 6.982c3.61-.788 7.605-.705 11.145.445 1.807.586 3.403 1.672 4.94 2.798.87.635 1.633 1.632 2.703 1.148 1.432-.651 2.563-2.404 4.054-3.17 1.362-.703 2.935-1.185 4.432-1.442 4.091-.704 7.98.263 11.382 2.7 6.453 4.619 13.507 6.455 21.303 6.367-7.497 2.267-15.127 3.256-22.88 4.019-6.77.667-12.476-.95-19.055-1.608-6.397-.64-12.388 1.896-18.63 2.756-3.227.444-6.605-.005-9.84-.264-3.45-.278-7.24-.918-10.513-2.117.763-.117 1.508-.299 2.248-.536zm79.157-.377c-4.372 3.974-10.544 6.147-16.122 7.396-5.861 1.312-12.668 2.615-18.662 1.827-1.532-.202-3.052-.546-4.476-1.174-.673-.297-1.655-1.127-2.411-1.082-.892.056-1.784 1.247-2.53 1.727-1.269.82-2.731 1.5-4.154 1.963-5.38 1.752-11.044 2.331-16.584.997-6.841-1.645-13.003-5.216-18.366-9.837 1.599.033 3.518.821 5.08 1.2 1.758.425 3.425.9 5.227 1.112 3.304.385 6.76.74 10.085.648 7.4-.207 14.184-4.031 21.721-2.732 3.171.546 6.34 1.22 9.548 1.494 4.126.351 8.118-.078 12.211-.561 7.072-.834 13.909-1.794 20.696-4.123-.427.372-.85.754-1.263 1.145z"
        fill="#2C2C2C"
      />
    </Svg>
  );
}

export default Sticker115D1632;