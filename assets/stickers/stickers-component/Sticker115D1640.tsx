import * as React from "react";
import { useContext } from "react";
import { StickerScaleContext } from "@components/editor/workspace/erin-components/sticker/sticker-scale-context";
import Svg, { SvgProps, Path } from "react-native-svg";

// Viewbox
// width: 65
// height: 65
function Sticker115D1640(props: SvgProps) {
  const stickerScale = useContext(StickerScaleContext);
  return (
    <Svg
      width={65 * stickerScale}
      height={65 * stickerScale}
      fill="none"
      {...props}
      viewBox="0 0 65 65"
    >
      <Path
        d="M26.023 64.732c-.13.002-.26-.002-.39-.007-.123-.004-.31-.01-.513-.027l.02-.302a10.425 10.425 0 00.883.031h.19l.006.303-.196.002zm12.074-.01c-.17 0-.338-.002-.506-.006l.007-.305c.292.009.59.01.869.002l.006.305c-.123.002-.248.004-.376.004zm-1.386-.043l-.079-.005a14.399 14.399 0 00-.401-.01l-.391-.006.006-.305.389.007c.148.002.286.004.41.01l.08.005-.014.304zm-9.609-.01l-.026-.302.116-.014c.076-.006.152-.015.233-.021.128-.011.295-.015.502-.02h.032l.008.304h-.034c-.195.005-.366.008-.487.02-.076.005-.152.013-.224.021l-.12.012zm12.257-.004l-.03-.303.028-.004c.332-.034.634-.08.833-.11l.045.3c-.202.031-.51.078-.849.112l-.027.005zm-4.396-.029l-.878-.022.01-.305.874.024-.006.303zm-10.73-.052l-.193-.04a6.431 6.431 0 01-.673-.186l.089-.29a6.503 6.503 0 00.83.216l-.052.3zm8.974-.002c-.099-.004-.197-.008-.298-.014l-.202-.01-.376-.02.017-.304.373.02.202.01.298.015-.014.303zm-4.36-.006l-.016-.305c.225-.012.451-.023.676-.031l.2-.009.013.305-.19.007c-.233.01-.457.02-.683.033zm1.75-.085l-.014-.304c.393-.019.623-.025.87-.017l.02.001-.015.304h-.013a11.485 11.485 0 00-.849.016zm10.5-.08l-.035-.301.082-.011c.233-.027.466-.058.7-.091l.085-.012.039.302-.086.012c-.234.032-.469.063-.704.091l-.082.01zm1.737-.235l-.035-.303c.242-.029.534-.07.855-.135l.057.299c-.33.066-.628.106-.877.139zm-20.3-.149a6.122 6.122 0 01-.794-.431l.153-.258c.238.153.484.288.759.41l-.118.28zm22.042-.218l-.087-.291a7.084 7.084 0 00.803-.318l.116.279a6.887 6.887 0 01-.832.33zm1.63-.74l-.141-.267c.104-.06.207-.121.31-.185.145-.089.285-.184.42-.285l.17.248c-.143.104-.291.204-.44.296a6.114 6.114 0 01-.319.193zm-25.194-.015a6.106 6.106 0 01-.573-.55l-.08-.09.213-.206.079.085c.168.184.352.362.546.526l-.184.235zm26.65-1.061l-.2-.223a5.903 5.903 0 00.58-.651l.23.19c-.15.196-.305.376-.475.551l-.135.133zm-27.87-.3a6.136 6.136 0 01-.461-.804l.263-.134c.123.262.271.519.436.764l-.239.175zm28.99-1.148l-.248-.16c.15-.253.285-.519.402-.789l.266.125c-.121.283-.264.56-.42.824zm-29.791-.516a7.504 7.504 0 01-.218-.811l-.018-.09.286-.06.018.085c.055.265.122.519.207.776l-.275.1zm30.525-1.182l-.282-.087c.065-.226.12-.46.162-.694l.03-.176.288.049-.032.183a7.388 7.388 0 01-.166.725zm-30.925-.621l-.008-.048a16.268 16.268 0 01-.571-.236l-.051-.02.108-.285.053.023c.212.091.427.18.64.263l.077.03.04.217-.288.056zm-1.444-.662l-.086-.041c-.152-.075-.305-.154-.456-.23l-.25-.127.128-.273.25.126c.151.077.302.153.454.228l.083.041-.123.276zm32.672-.544l-.29-.023c.007-.11.015-.214.02-.316l.005-.082.558-.34.151.263-.427.26c-.006.077-.01.155-.017.238zm-34.254-.26c-.202-.112-.47-.263-.74-.427l-.032-.02.15-.261.029.018c.268.161.531.31.73.423l-.137.267zm35.448-.717l-.155-.257c.11-.073.222-.146.331-.22.03-.022.057-.038.079-.055l.321-.22.163.251-.322.223a30.807 30.807 0 01-.417.278zm-36.975-.194a40.003 40.003 0 01-.749-.485l.158-.255c.238.158.487.32.742.48l-.151.26zm38.438-.83l-.17-.247c.236-.175.472-.355.705-.537l.175.244c-.234.184-.473.366-.71.54zm-39.92-.162c-.146-.105-.286-.206-.425-.311l-.292-.221.173-.246c.095.074.193.147.291.22.136.102.276.204.42.307l-.167.251zm41.327-.938l-.182-.238c.225-.188.453-.381.676-.575l.187.235c-.225.194-.453.389-.681.578zm-42.747-.146a47.81 47.81 0 01-.688-.57l.185-.236c.223.19.453.38.682.565l-.179.241zm44.095-1.032l-.194-.228c.218-.201.435-.406.646-.61l.198.223c-.211.206-.43.414-.65.615zm-45.459-.129l-.021-.021a26.153 26.153 0 01-.634-.592l.199-.224c.215.21.42.4.625.585l.023.021-.192.231zm46.745-1.124l-.206-.217c.203-.21.41-.429.609-.651l.213.21c-.205.223-.41.444-.616.658zM8.48 51.365a30.25 30.25 0 01-.623-.646l.209-.213c.195.212.39.41.619.64l-.205.219zm49.248-1.211l-.22-.204c.194-.226.386-.457.571-.686l.224.195c-.187.233-.382.465-.575.695zm-50.47-.11c-.197-.228-.392-.46-.58-.69l.222-.197c.187.228.38.457.575.684l-.217.203zm51.601-1.295l-.228-.19c.18-.237.358-.478.532-.72l.234.183c-.175.244-.355.488-.538.727zm-52.742-.102c-.183-.24-.366-.484-.541-.724l.233-.184c.173.238.354.479.536.718l-.228.19zm53.798-1.364l-.238-.177c.167-.246.333-.499.493-.75l.242.168c-.16.253-.327.508-.497.758zm-54.861-.101c-.17-.25-.337-.507-.499-.757l.244-.168c.158.248.325.5.494.748l-.24.177zm55.834-1.432l-.249-.16c.152-.256.302-.519.445-.781l.254.153c-.146.263-.297.528-.45.788zM4.082 45.65l-.005-.009c-.152-.257-.302-.52-.444-.781l.252-.153c.142.258.29.52.44.775l-.243.168zm57.681-1.495l-.26-.143a27.5 27.5 0 00.398-.807l.263.133c-.13.271-.264.547-.4.818zm-58.553-.1a29.513 29.513 0 01-.403-.816l.261-.134c.128.269.261.542.398.808l-.256.143zm59.33-1.547l-.266-.126.066-.154c.096-.224.19-.45.281-.68l.27.118c-.092.23-.186.458-.283.687l-.068.155zM2.43 42.41c-.12-.277-.239-.561-.35-.84l.268-.118c.112.28.23.56.349.834l-.267.124zm60.786-1.594l-.272-.11c.104-.283.203-.569.296-.854l.278.1c-.096.288-.197.578-.302.864zm-61.462-.101c-.068-.192-.138-.384-.203-.577-.034-.095-.065-.19-.096-.286l.278-.1c.03.096.062.189.094.284.065.191.131.382.2.57l-.273.109zm62.038-1.635l-.28-.09c.086-.286.17-.58.245-.872l.282.08c-.077.295-.16.593-.248.882zm-62.61-.102a38.282 38.282 0 01-.242-.882l.282-.078c.075.292.156.584.24.873l-.28.087zM64.26 37.31l-.283-.07c.05-.217.096-.434.142-.652l.047-.235.286.062-.048.237c-.045.22-.094.44-.144.658zM.727 37.206a26.96 26.96 0 01-.19-.897l.287-.06c.057.295.12.593.186.886l-.283.071zm63.885-1.696l-.287-.051c.048-.294.093-.596.132-.898l.29.043c-.04.305-.085.61-.135.906zM.38 35.406c-.05-.3-.094-.606-.135-.907l.292-.04c.038.297.08.599.13.897l-.287.05zm64.472-1.712l-.29-.033c.03-.298.056-.603.076-.904l.29.022c-.02.303-.047.61-.076.915zm-64.71-.108c-.029-.301-.056-.61-.075-.915l.29-.022c.02.3.047.606.075.905l-.29.032zM64.98 31.86l-.292-.01c.01-.254.016-.513.02-.768l.002-.202.09-.039.039.102H65l-.001.042H65l-.001.102c-.004.257-.01.517-.02.773zM.02 31.755A24.57 24.57 0 010 30.838l.291-.002c.001.3.008.606.019.908l-.29.011zm64.678-1.721c-.008-.298-.02-.604-.038-.909l.291-.019c.018.309.031.616.04.92l-.293.008zM.304 29.928l-.291-.01c.008-.306.021-.613.04-.917l.291.02c-.018.299-.032.605-.04.907zm64.288-1.708a27.483 27.483 0 00-.094-.903l.29-.038c.036.305.069.612.096.913l-.292.028zM.414 28.115l-.29-.03c.016-.186.036-.37.06-.554.014-.12.026-.24.042-.357l.288.04c-.015.114-.028.234-.043.353-.02.182-.04.365-.057.548zm63.964-1.697c-.045-.298-.095-.6-.149-.896l.287-.056c.054.3.104.604.15.905l-.288.047zm-63.74-.104l-.287-.048c.045-.308.098-.612.151-.905l.286.057c-.054.288-.104.59-.15.896zm63.419-1.681a32.237 32.237 0 00-.205-.883l.282-.077c.072.294.143.594.207.893l-.284.067zM.965 24.53l-.285-.069.048-.214c.054-.227.107-.453.163-.678l.282.078c-.055.223-.109.445-.161.67l-.047.213zm62.652-1.656c-.081-.288-.17-.58-.261-.868l.277-.095c.092.29.181.586.264.876l-.28.087zm-62.209-.102l-.28-.086c.085-.296.174-.59.267-.877l.276.098c-.09.282-.179.574-.263.865zm61.657-1.623a28.18 28.18 0 00-.315-.847l.272-.113c.111.288.218.576.318.857l-.275.103zm-61.101-.097l-.274-.108c.103-.285.21-.572.32-.854l.27.115c-.107.28-.214.563-.316.847zm60.45-1.588l-.075-.178a36.202 36.202 0 00-.285-.648l.265-.13c.098.216.195.435.288.654l.076.182-.27.12zM2.621 19.37l-.266-.124c.117-.278.242-.559.368-.833l.264.131c-.125.271-.248.549-.366.826zm59.045-1.545c-.133-.267-.27-.536-.412-.8l.255-.15c.142.267.281.54.416.81l-.26.14zm-58.29-.094l-.259-.14c.134-.27.275-.542.417-.807l.255.148c-.141.264-.28.532-.413.8zm57.44-1.493a31.51 31.51 0 00-.459-.772l.246-.164c.158.257.315.52.465.78l-.251.156zM4.23 16.146l-.25-.157a21.857 21.857 0 01.468-.778l.245.165a31.151 31.151 0 00-.463.77zm55.646-1.436a19.81 19.81 0 00-.505-.741l.236-.181c.05.068.097.138.145.206.124.18.245.36.366.543l-.242.173zm-54.698-.088l-.24-.172c.166-.252.338-.502.51-.747l.237.18c-.172.242-.342.491-.507.74zm53.67-1.38c-.177-.236-.36-.474-.544-.71l.226-.194c.187.238.372.479.549.717l-.231.188zm-52.638-.085l-.23-.187c.181-.242.366-.483.55-.715l.224.194c-.18.23-.365.47-.544.708zm51.53-1.317a30.105 30.105 0 00-.585-.675l.215-.206c.197.22.394.45.587.68l-.218.2zM7.32 11.758l-.22-.201c.196-.23.394-.459.591-.682l.215.208c-.196.22-.394.447-.586.675zm49.233-1.252a35.086 35.086 0 00-.62-.641l.203-.218c.209.21.42.427.626.645l-.21.213zM8.51 10.43l-.207-.214c.205-.216.416-.431.628-.642l.2.22c-.208.207-.417.421-.621.636zm46.787-1.186c-.212-.2-.432-.402-.654-.602l.19-.23c.225.2.447.404.66.607l-.196.225zM9.774 9.176l-.196-.227c.217-.204.44-.409.663-.606l.189.233c-.22.195-.44.398-.656.6zm44.2-1.116a34.84 34.84 0 00-.685-.562l.177-.242c.236.187.468.378.691.567l-.184.237zM11.1 7.997l-.183-.237c.225-.19.458-.382.69-.566l.18.243c-.232.18-.463.37-.687.56zm41.488-1.041a39.222 39.222 0 00-.714-.523l.164-.25c.244.173.487.35.72.528l-.17.245zm-40.102-.062l-.17-.247c.125-.095.253-.188.38-.281l.34-.246.165.251c-.112.08-.226.16-.337.244-.127.092-.252.186-.378.279zm38.662-.968l-.1-.066c-.21-.142-.424-.282-.64-.418l.153-.26c.218.138.433.28.644.422l.101.067-.158.255zm-37.22-.054l-.158-.256c.246-.163.498-.326.748-.485l.152.26c-.25.157-.499.317-.742.48zm35.731-.89a29.43 29.43 0 00-.763-.438l.138-.269c.258.144.517.294.77.442l-.145.265zM15.422 4.93l-.144-.265c.254-.151.513-.3.771-.443l.138.27c-.255.14-.513.288-.765.438zm32.699-.804a30.103 30.103 0 00-.787-.398l.124-.275c.267.13.533.264.793.4l-.13.273zm-31.16-.051l-.13-.274c.262-.135.529-.268.794-.396l.123.276c-.262.127-.527.26-.787.394zm29.58-.723c-.252-.115-.507-.23-.766-.342l-.037-.016.112-.282.038.018c.26.113.518.227.77.343l-.117.279zm-27.997-.044l-.115-.28c.27-.122.542-.241.81-.355l.11.282c-.266.114-.536.233-.805.353zm26.384-.65c-.27-.109-.545-.214-.819-.313l.098-.288c.277.102.552.207.825.317l-.104.284zM20.16 2.624l-.104-.285c.276-.11.554-.214.827-.314l.096.288c-.27.099-.547.203-.82.311zm23.121-.57a32.239 32.239 0 00-.833-.268l.081-.291c.28.084.562.175.842.269l-.09.29zm-21.474-.031l-.09-.29c.28-.094.563-.184.842-.269l.082.292c-.276.085-.557.176-.834.267zm19.8-.483c-.28-.077-.564-.153-.845-.22l.068-.298c.283.07.57.147.853.226l-.075.292zm-18.124-.026l-.074-.294c.28-.075.567-.15.853-.22l.066.296c-.284.069-.568.143-.845.218zM39.91 1.12a29.183 29.183 0 00-.854-.178l.053-.3c.288.055.577.116.863.18l-.062.298zm-14.729-.021L25.121.8c.285-.063.576-.121.864-.177l.053.298a40.18 40.18 0 00-.857.177zM38.195.786C37.91.736 37.62.693 37.33.65l.04-.3c.29.04.584.086.871.133l-.046.303zM26.897.77l-.044-.3c.285-.05.579-.093.869-.134l.04.301c-.29.042-.58.086-.865.133zm9.569-.23a32.03 32.03 0 00-.87-.092l.026-.303c.291.027.586.058.875.091l-.031.304zm-7.84-.012l-.03-.303.395-.042c.16-.017.32-.031.48-.046l.024.303a23.512 23.512 0 00-.868.088zm6.1-.15l-.047-.003c-.273-.018-.55-.034-.826-.044l.014-.305c.276.013.556.027.83.046l.047.003-.018.302zm-4.36-.005L30.349.07c.29-.02.587-.034.878-.046l.012.304c-.289.011-.583.026-.871.045zm2.618-.065a39.104 39.104 0 00-.874-.002l-.003-.303c.293-.004.585-.004.88 0l-.003.305zM26.006 62.297c-.101 0-.2-.002-.3-.005a6.36 6.36 0 01-1.177-.13 4.62 4.62 0 01-.74-.233l-.033-.013a4.242 4.242 0 01-1.625-1.095 3.92 3.92 0 01-.768-1.153 5.214 5.214 0 01-.305-.966c-.028-.133-.05-.267-.075-.4l-.046-.26c-.077-.426-.15-.83-.231-1.228a28.64 28.64 0 01-.09-.466c-.042-.017-.086-.032-.129-.05-.11-.04-.227-.081-.343-.124a23.44 23.44 0 01-.443-.16 20.79 20.79 0 01-.814-.33 11.565 11.565 0 01-.824-.363 50.26 50.26 0 01-.434-.218l-.225-.114c-.056-.027-.114-.057-.173-.084-.165-.081-.352-.174-.547-.282a23.287 23.287 0 01-.687-.397 29.373 29.373 0 01-2.501-1.657 32.082 32.082 0 01-2.219-1.82 25.19 25.19 0 01-1.097-1.061 20.503 20.503 0 01-.912-.96c-1.262-1.428-2.336-2.896-3.197-4.359a27.339 27.339 0 01-2.316-5.046 26.59 26.59 0 01-1.26-5.726 25.892 25.892 0 01.009-5.775c.127-1.118.292-2.101.499-3.01.223-.975.49-1.913.796-2.785a27.744 27.744 0 012.481-5.282 28.868 28.868 0 013.519-4.638 30.111 30.111 0 014.237-3.742A29.794 29.794 0 0118.62 5.61a31.673 31.673 0 015.227-1.99 32.338 32.338 0 0110.702-1.117c3.706.247 7.22 1.079 10.44 2.476 1.847.802 3.468 1.677 4.955 2.674a30.276 30.276 0 014.343 3.52 29.009 29.009 0 013.566 4.243 26.868 26.868 0 012.619 4.734c.778 1.837 1.326 3.586 1.671 5.345a27.812 27.812 0 01.521 5.481l-.001.066a27.041 27.041 0 01-.544 5.102 27.22 27.22 0 01-1.644 5.218 26.675 26.675 0 01-2.511 4.582 29.166 29.166 0 01-3.296 4.024 30.753 30.753 0 01-3.818 3.27l-.066.048-.115.083-.329.231-.2.138a29.178 29.178 0 01-1.145.74l-.239.146-.284.167-.194.113a35.46 35.46 0 01-.723.402c-.008.38-.019.77-.04 1.17-.021.372-.047.772-.124 1.195a4.726 4.726 0 01-.608 1.615 4.399 4.399 0 01-.627.84c-.24.249-.518.47-.822.66a7.568 7.568 0 01-1.131.58c-.663.271-1.278.347-1.775.407l-.172.023-.229.033-.453.069c-.225.031-.448.06-.67.086l-.283.036c-.132.02-.263.041-.393.064-.337.056-.686.116-1.065.154-.332.034-.68.05-1.064.05-.18 0-.36-.005-.539-.009-.27-.01-.542-.023-.812-.036-.158-.008-.335-.01-.522-.014l-.155-.003c-.49-.009-.978-.02-1.467-.034-.53-.015-1.05-.029-1.578-.057l-.205-.009c-.21-.01-.42-.021-.63-.035l-.285-.023c-.14-.011-.272-.023-.382-.025-.091-.005-.184-.005-.276-.005-.341 0-.703.018-1.106.038-.236.013-.47.023-.706.034-.257.013-.514.023-.768.038l-.027.002c-.239.013-.49.027-.753.034a10.5 10.5 0 00-.615.024c-.113.007-.224.02-.335.031-.114.012-.226.024-.34.032a6.891 6.891 0 01-.592.025z"
        fill="#fff"
      />
      <Path
        d="M57.607 27.423a23.982 23.982 0 00-1.472-5.62 24.936 24.936 0 00-2.948-5.23 26.515 26.515 0 00-4.423-4.59 27.918 27.918 0 00-5.982-3.634 28.962 28.962 0 00-7.348-2.084 29.815 29.815 0 00-7.915 0 28.91 28.91 0 00-7.323 2.069 27.804 27.804 0 00-5.997 3.635 26.443 26.443 0 00-4.435 4.592 24.992 24.992 0 00-2.95 5.23 23.995 23.995 0 00-1.484 5.644 23.92 23.92 0 00.01 5.823c.263 1.918.759 3.791 1.47 5.583a25.312 25.312 0 002.976 5.307c.33.442.669.877 1.026 1.293.368.43.741.86 1.133 1.267.418.433.846.863 1.294 1.265.41.37.831.733 1.262 1.082.258.205.518.409.784.606.245.182.492.367.741.542.281.195.565.384.852.565l.435.273c.116.071.229.153.344.224.295.181.589.351.892.515.151.084.298.171.448.258.111.067.228.123.34.186.279.158.558.307.842.457.257.133.522.252.787.372l.182.08c.24.097.481.185.725.27a.67.67 0 01.681.005c.14.087.289.256.317.43.057.356.111.71.175 1.065.06.326.138.647.21.97.072.314.135.632.2.948.055.256.097.52.176.77.01.02.022.039.034.06.044.05.09.098.139.143.069.046.14.088.215.125.16.063.322.112.49.142.257.032.518.05.776.04.333-.016.667-.051 1.002-.062.239-.009.48-.009.72-.016.24-.006.478-.022.717-.03l-.043-.106a4.234 4.234 0 01-.151-.543c-.093-.427-.156-.86-.226-1.291a.613.613 0 010-.307l.057-.138a.562.562 0 01.48-.288c.097 0 .195.027.28.08.114.068.234.204.256.345.055.345.108.69.174 1.03.056.291.12.579.218.856.017.037.035.072.054.106.07.053.125.12.162.2l.268-.013c.498-.023.997-.049 1.496-.022.52.027 1.04.046 1.56.055.195.004.388.007.581.008-.045-.19-.085-.38-.132-.568-.104-.42-.24-.82-.396-1.22l-.102-.249a.77.77 0 01-.099-.381c.007-.069.017-.134.025-.202a.75.75 0 01.333-.45.705.705 0 01.56-.078c.162.047.364.178.434.347.202.496.41.99.56 1.51.112.382.183.782.235 1.18.028.04.05.08.07.124.293.002.585.004.88.01.514.012 1.026.08 1.54.107.259.015.517.026.775.022.16-.005.32-.018.48-.035-.006-.014-.015-.026-.02-.039a4.2 4.2 0 01-.168-.45 4.845 4.845 0 01-.142-.657c-.075-.457-.142-.917-.22-1.374-.036-.216-.032-.41.077-.604a.754.754 0 01.647-.388c.134 0 .264.037.38.107.155.096.312.278.346.47.151.888.275 1.784.469 2.664.006.023.007.044.011.068.284-.031.569-.064.855-.102.218-.031.439-.065.658-.09.14-.02.28-.032.42-.05.238-.044.469-.112.695-.202.101-.049.2-.103.297-.158a4.53 4.53 0 00.288-.17c.036-.034.069-.071.102-.109a2.58 2.58 0 00.154-.264 2.07 2.07 0 00.079-.325c.061-.57.064-1.152.063-1.727 0-.281.002-.564-.02-.84-.021-.238-.064-.473-.067-.708a.679.679 0 01.152-.44l-.001-.033a.916.916 0 01.053-.31c.012-.031.024-.063.04-.094a.765.765 0 01.318-.345c.09-.044.18-.087.268-.132.012-.005.024-.012.036-.016a.688.688 0 01.119-.061c.029-.016.06-.03.088-.046a.701.701 0 01.064-.032c.005-.003.01-.008.016-.009a.334.334 0 01.06-.028 27.273 27.273 0 001.44-.794l.01-.007.137-.08a.05.05 0 01.016-.009c.03-.02.063-.039.094-.057l.008-.007a25.91 25.91 0 001.777-1.172 27.76 27.76 0 001.107-.84 26.448 26.448 0 004.442-4.613 24.868 24.868 0 002.927-5.2 23.965 23.965 0 001.478-5.627c.11-.917.169-1.838.177-2.761a24.695 24.695 0 00-.177-2.998zm-22.4 18.737c-.016.095-.036.19-.064.284a1.064 1.064 0 01-.126.03c-.08.006-.16.004-.24-.001a3.454 3.454 0 01-.608-.181 4.109 4.109 0 01-.678-.405 4.647 4.647 0 01-.32-.327 1.83 1.83 0 00-.17-.169c-.14-.12-.263-.213-.443-.26-.208-.055-.467-.038-.652.089a1.187 1.187 0 00-.385.428c-.043.08-.08.163-.125.244-.07.13-.151.254-.238.375a4.71 4.71 0 01-.54.629c-.023.017-.05.032-.075.047h-.039l-.073-.022a2.824 2.824 0 01-.107-.066c-.029-.03-.06-.061-.086-.093-.013-.02-.023-.039-.034-.058l-.01-.04c-.003-.127.01-.254.023-.382.058-.387.137-.77.244-1.149.106-.367.242-.722.383-1.076.134-.329.272-.656.429-.976.168-.341.36-.667.577-.977.104-.13.206-.26.31-.388l.357.28c.14.12.27.254.4.387.154.157.322.3.488.447.317.275.583.617.84.955.303.415.61.84.832 1.31.058.16.104.324.138.494.013.19.009.378-.009.57z"
        fill="#83EFF5"
      />
      <Path
        d="M57.607 27.423a23.982 23.982 0 00-1.472-5.62 24.93 24.93 0 00-2.948-5.23 26.514 26.514 0 00-4.423-4.59 27.914 27.914 0 00-5.982-3.634 28.962 28.962 0 00-7.348-2.084 29.843 29.843 0 00-7.759-.02c.057.008.111.013.167.02a28.911 28.911 0 017.347 2.084 27.914 27.914 0 015.981 3.634 26.514 26.514 0 014.423 4.59 24.934 24.934 0 012.948 5.23 23.92 23.92 0 011.473 5.62c.12.995.178 1.996.175 3a24.735 24.735 0 01-.175 2.76 24.01 24.01 0 01-1.478 5.629 25.038 25.038 0 01-2.928 5.2 26.525 26.525 0 01-4.441 4.611 29.118 29.118 0 01-1.643 1.216 27.65 27.65 0 01-1.241.797l-.01.007a3.002 3.002 0 00-.094.057c-.007.002-.01.006-.015.009a7.815 7.815 0 00-.146.087l-.26.15c-.39.225-.783.438-1.18.644a.74.74 0 00-.061.028l-.017.01c-.022.009-.041.02-.062.032l-.09.045a.607.607 0 00-.117.06l-.037.017c-.09.046-.178.088-.268.132a.77.77 0 00-.317.345.728.728 0 00-.065.173.874.874 0 00-.03.231l.002.034a.68.68 0 00-.154.439c.006.236.05.471.069.708.023.277.02.56.02.84 0 .574-.001 1.155-.063 1.728-.02.11-.044.216-.079.324a2.79 2.79 0 01-.154.264 1.394 1.394 0 01-.102.109c-.092.061-.191.116-.288.17-.098.056-.196.11-.296.158-.07.027-.143.053-.213.077.02.113.035.229.05.342a.66.66 0 01.07.125c.294.002.586.005.881.011.514.01 1.026.08 1.54.106.259.015.516.026.774.022a5.89 5.89 0 00.48-.035c-.005-.014-.014-.026-.02-.039a4.2 4.2 0 01-.167-.45 4.845 4.845 0 01-.142-.656c-.075-.458-.142-.917-.22-1.375-.036-.216-.033-.41.077-.604a.754.754 0 01.647-.388c.134 0 .264.037.38.108.155.095.312.277.346.469.151.888.275 1.784.469 2.664.006.023.007.045.011.069.284-.032.569-.064.855-.102.218-.032.439-.065.658-.091.14-.02.28-.032.42-.05.238-.044.469-.112.695-.202.101-.049.199-.103.297-.158a4.53 4.53 0 00.288-.17c.036-.034.069-.07.102-.109a2.6 2.6 0 00.154-.264c.035-.108.061-.214.079-.324.061-.572.064-1.152.063-1.728 0-.28.002-.564-.02-.84-.021-.237-.064-.473-.067-.708a.679.679 0 01.152-.439l-.001-.034a.916.916 0 01.053-.31c.012-.031.024-.063.04-.094a.765.765 0 01.317-.345c.09-.044.18-.086.269-.132.012-.005.024-.012.036-.016a.682.682 0 01.119-.06c.029-.017.06-.03.088-.046a.703.703 0 01.064-.033c.005-.003.01-.007.016-.008a.334.334 0 01.06-.029 27.326 27.326 0 001.44-.794l.01-.007.137-.08a.048.048 0 01.016-.009c.03-.02.063-.039.094-.057l.008-.007a25.963 25.963 0 001.777-1.172c.376-.271.746-.552 1.107-.84a26.448 26.448 0 004.441-4.613 24.87 24.87 0 002.928-5.2 23.965 23.965 0 001.478-5.627c.11-.917.169-1.837.177-2.76a24.311 24.311 0 00-.175-3.002z"
        fill="#6FE2E8"
      />
      <Path
        d="M58.472 40.43a24.667 24.667 0 001.502-4.765c.314-1.533.479-3.105.497-4.672.002-.009.002-.018.002-.027v-.157-.027a25.253 25.253 0 00-.478-4.831c-.33-1.685-.863-3.312-1.53-4.881a24.435 24.435 0 00-2.393-4.324 26.697 26.697 0 00-3.288-3.912 27.829 27.829 0 00-4.028-3.263c-1.458-.98-3.009-1.79-4.61-2.485-3.09-1.34-6.402-2.084-9.738-2.307a29.061 29.061 0 00-1.892-.063 30.47 30.47 0 00-8.106 1.107A29.4 29.4 0 0019.54 7.68a27.604 27.604 0 00-4.25 2.551 27.784 27.784 0 00-3.924 3.467 26.606 26.606 0 00-3.239 4.27 25.215 25.215 0 00-2.27 4.838c-.29.827-.529 1.674-.723 2.531-.207.909-.35 1.83-.457 2.754-.2 1.74-.195 3.506-.006 5.247.195 1.78.573 3.531 1.148 5.22a24.988 24.988 0 002.12 4.615c.844 1.435 1.849 2.77 2.942 4.007.264.299.544.585.824.869.327.333.66.658 1.007.97.662.597 1.353 1.16 2.063 1.694a27.379 27.379 0 002.318 1.535c.205.125.413.242.622.36.21.115.429.216.642.324.215.11.429.219.645.326.229.113.462.21.699.305l-.022-.01c.255.112.512.215.772.315.26.098.526.187.788.287.284.107.572.201.858.305.152.057.306.113.459.167.003.018.005.034.01.051.088.554.169 1.11.282 1.658.106.512.196 1.027.288 1.543.021.114.04.227.064.34.04.19.098.357.172.537.077.184.211.345.345.489.117.129.258.237.403.333.14.095.305.158.46.22.133.055.267.1.408.129.255.057.522.071.784.081.213.008.427.008.64-.013.231-.02.46-.048.692-.067.245-.02.491-.025.735-.03.235-.004.47-.019.705-.032.495-.028.988-.045 1.483-.07a17.568 17.568 0 011.567-.038c.248.008.495.035.742.052.265.02.531.029.796.044.51.024 1.02.041 1.53.054.482.013.963.025 1.445.034.25.004.5.006.752.018.256.013.514.026.768.035.443.014.887.013 1.325-.031.463-.046.919-.14 1.38-.207.316-.043.632-.078.948-.122.23-.032.458-.07.689-.104.484-.063.973-.1 1.432-.29.283-.115.55-.255.812-.419.147-.09.284-.198.405-.322.121-.127.222-.285.314-.435.152-.25.255-.532.308-.822.053-.296.07-.602.09-.902.026-.513.033-1.024.046-1.537a6.16 6.16 0 00-.015-.65c-.006-.087-.016-.173-.023-.258.018-.01.034-.019.052-.027.016-.008.029-.016.045-.023a.841.841 0 00.14-.068c.015-.008.03-.014.045-.023a.06.06 0 00.017-.009.682.682 0 00.123-.06c.023-.01.048-.021.07-.033l.038-.02a.783.783 0 00.079-.042c.06-.03.119-.062.179-.09.006-.005.012-.007.019-.012.351-.182.699-.373 1.043-.57.01-.003.018-.01.026-.014.054-.03.106-.062.157-.092.007-.006.014-.008.02-.012.024-.015.048-.027.071-.042l.019-.01.012-.008c.021-.013.041-.025.063-.035.005-.005.01-.007.014-.01l.06-.037c.01-.004.02-.01.028-.015l.011-.008.062-.037.015-.008c.036-.023.074-.045.11-.069l.013-.007c.358-.22.711-.448 1.06-.685l.022-.013.059-.041c.028-.021.057-.04.084-.059l.025-.017c.11-.076.22-.155.33-.233.002 0 .003-.003.005-.003l.1-.071.034-.025a28.345 28.345 0 003.557-3.044 26.971 26.971 0 003.041-3.712 24.445 24.445 0 002.287-4.182zm-9.799 9.49a28.435 28.435 0 01-1.775 1.173c-.002.003-.007.003-.008.005-.03.02-.064.04-.095.058l-.015.01c-.046.027-.093.053-.137.08l-.01.005a28.49 28.49 0 01-1.438.794l-.062.03a1.126 1.126 0 00-.08.042l-.088.044a.777.777 0 00-.12.061l-.035.017c-.088.044-.178.088-.268.13a.772.772 0 00-.318.347.944.944 0 00-.041.095.87.87 0 00-.054.31c0 .01.002.022.004.033a.651.651 0 00-.154.438c.005.238.048.473.067.707.024.28.02.563.022.841 0 .575-.003 1.155-.065 1.728-.02.111-.043.217-.079.323-.045.093-.098.18-.154.264-.03.04-.065.075-.1.11-.094.063-.192.115-.29.171-.098.054-.195.11-.295.158-.227.09-.458.159-.697.203-.14.016-.28.03-.42.048-.219.029-.438.06-.658.093-.284.038-.57.07-.855.1-.004-.022-.005-.045-.01-.066-.196-.882-.317-1.777-.469-2.666-.033-.192-.191-.375-.345-.468a.723.723 0 00-.579-.081.775.775 0 00-.451.36c-.11.196-.111.389-.075.603.078.46.147.92.22 1.377.036.22.075.442.141.654.048.155.103.305.169.451l.02.04c-.159.018-.32.03-.48.034a8.815 8.815 0 01-.776-.02c-.514-.026-1.023-.097-1.54-.106-.293-.006-.586-.01-.88-.013a.748.748 0 00-.07-.122 7.825 7.825 0 00-.234-1.182c-.149-.517-.359-1.012-.56-1.51-.07-.169-.273-.299-.435-.346a.71.71 0 00-.56.078.757.757 0 00-.333.452c-.008.066-.016.133-.026.201a.769.769 0 00.1.382l.102.248c.156.399.292.8.396 1.22.047.19.089.38.132.568l-.579-.007a46.903 46.903 0 01-1.562-.055c-.498-.027-.998-.002-1.495.021l-.27.011a.515.515 0 00-.16-.197.91.91 0 01-.054-.106 6.044 6.044 0 01-.218-.856c-.066-.34-.12-.687-.174-1.03-.022-.142-.143-.278-.254-.347a.55.55 0 00-.43-.058.563.563 0 00-.332.268l-.057.138a.665.665 0 000 .306c.069.432.133.864.226 1.291.04.185.09.365.153.542l.041.106c-.238.007-.477.023-.715.031-.24.008-.482.008-.722.016-.335.01-.668.045-1.002.06a4.906 4.906 0 01-.775-.037 2.624 2.624 0 01-.488-.142 1.979 1.979 0 01-.218-.126 1.753 1.753 0 01-.138-.143l-.034-.06c-.08-.25-.122-.514-.175-.77-.067-.317-.13-.633-.2-.949-.072-.323-.152-.642-.21-.969-.065-.355-.12-.71-.176-1.065-.029-.175-.175-.343-.316-.43a.667.667 0 00-.683-.005 19.4 19.4 0 01-.724-.27c-.06-.028-.12-.056-.182-.082a13.13 13.13 0 01-.786-.373c-.283-.147-.564-.3-.844-.455-.113-.064-.23-.12-.339-.185-.15-.088-.298-.176-.448-.256-.303-.165-.6-.337-.891-.517-.117-.073-.23-.155-.347-.226-.144-.09-.288-.18-.432-.272-.29-.183-.574-.373-.853-.566-.25-.174-.496-.36-.742-.543a23.42 23.42 0 01-.784-.605 33.446 33.446 0 01-1.263-1.083 26.768 26.768 0 01-2.426-2.53 25.555 25.555 0 01-1.026-1.293 25.384 25.384 0 01-2.975-5.306 23.995 23.995 0 01-1.47-5.584 24.025 24.025 0 01-.01-5.823 23.892 23.892 0 011.482-5.642 25.017 25.017 0 012.952-5.23 26.568 26.568 0 014.434-4.595 27.892 27.892 0 015.997-3.634 28.922 28.922 0 017.325-2.071 29.86 29.86 0 017.914.002 28.84 28.84 0 017.347 2.083c2.13.954 4.141 2.168 5.983 3.636a26.435 26.435 0 014.422 4.59 24.887 24.887 0 012.948 5.23 23.82 23.82 0 011.473 5.62c.12.994.178 1.996.175 3a24.504 24.504 0 01-.175 2.76 24.012 24.012 0 01-1.477 5.628 24.973 24.973 0 01-2.93 5.2 26.45 26.45 0 01-4.44 4.612c-.363.285-.731.565-1.11.837z"
        fill="#2C2C2C"
      />
      <Path
        d="M30.034 30.159a13.65 13.65 0 00.394-3.144 13.29 13.29 0 00-.093-1.645 10.384 10.384 0 00-.37-1.717 8.287 8.287 0 00-1.368-2.726 6.156 6.156 0 00-2.42-1.886c-.012-.006-.023-.011-.036-.014l-.052-.023-.003-.001c-.011-.003-.02-.008-.03-.012-1.18-.462-2.534-.52-3.809-.165-1.022.286-2.011.791-2.937 1.506-.053.038-.104.08-.154.12l-.026.022a10.23 10.23 0 00-.394.337c-.067.062-.134.122-.199.185a11.826 11.826 0 00-1.438 1.628c-.142.19-.279.386-.409.583-.397.6-.758 1.264-1.106 2.03-.164.365-.316.746-.452 1.14-.141.4-.268.832-.38 1.281-.07.288-.135.577-.189.864l-.007.037-.007.032v.013l-.005.011c-.068.38-.121.762-.16 1.137-.079.786-.079 1.622-.002 2.485.154 1.71.712 3.29 1.61 4.565.263.375.577.7.85.968.272.269.601.52.972.744.305.184.592.33.883.447.067.026.134.053.203.076.352.126.747.221 1.171.282.39.054.788.043 1.13.03.346-.015.713-.069 1.122-.169a7.825 7.825 0 002.227-.944c.7-.429 1.345-.94 1.916-1.514a12.873 12.873 0 001.604-1.974c.428-.646.823-1.385 1.179-2.197.32-.744.585-1.548.785-2.392zM50.544 28.4v-.011l-.002-.013-.008-.033-.006-.038c-.056-.287-.12-.577-.192-.863-.11-.448-.238-.879-.377-1.281a12.64 12.64 0 00-.454-1.137 14.423 14.423 0 00-1.105-2.032c-.13-.198-.269-.394-.41-.582a11.838 11.838 0 00-2.033-2.152l-.023-.022-.156-.12c-.925-.713-1.914-1.22-2.938-1.506-1.275-.355-2.628-.297-3.808.165l-.028.012-.005.001c-.018.009-.034.014-.052.022a6.154 6.154 0 00-2.455 1.901 8.31 8.31 0 00-1.37 2.726 10.408 10.408 0 00-.368 1.718c-.066.53-.098 1.084-.096 1.646.004 1.008.133 2.036.394 3.143.201.843.465 1.649.79 2.389.354.81.75 1.55 1.18 2.196.468.711 1.008 1.376 1.602 1.973a10.37 10.37 0 001.916 1.515c.713.437 1.46.756 2.229.944.408.1.776.155 1.119.17.344.012.743.022 1.131-.031a5.995 5.995 0 001.374-.359c.29-.116.58-.262.883-.446a5.19 5.19 0 00.974-.746c.272-.267.585-.59.848-.966.9-1.277 1.456-2.855 1.61-4.564.077-.864.076-1.7-.002-2.486a14.619 14.619 0 00-.162-1.133zM35.82 43.257a12.796 12.796 0 00-.767-1.085 4.084 4.084 0 00-.387-.455c-.151-.145-.31-.281-.46-.428-.12-.12-.235-.248-.357-.368-.168-.165-.356-.31-.542-.455-.274-.227-.538-.453-.89-.538a2.69 2.69 0 00-.521-.068.85.85 0 00-.44.12.867.867 0 00-.261.255c-.019.018-.037.036-.053.054-.395.487-.787.974-1.103 1.522-.273.475-.48.99-.685 1.5-.128.312-.256.628-.368.949-.098.276-.174.56-.242.844a9.355 9.355 0 00-.212 1.395 2.31 2.31 0 00-.004.188c.003.13.03.26.047.389.02.155.102.313.163.452.068.148.178.275.274.403.064.085.138.157.22.224.113.095.229.194.361.263.088.047.164.079.264.121.169.073.322.105.504.125.313.034.619-.037.9-.18.153-.08.285-.192.42-.304.109-.09.2-.206.287-.32.171-.217.331-.447.478-.686.217.189.467.337.72.462.257.127.527.235.802.312.104.029.208.047.313.063.194.033.39.059.586.049.482-.023 1.002-.189 1.327-.576.32-.385.399-.87.44-1.359a3.938 3.938 0 00-.185-1.628c-.157-.444-.382-.843-.63-1.24zm-.614 2.903c-.015.095-.035.19-.063.284a1.065 1.065 0 01-.126.03c-.08.006-.16.005-.24 0a3.442 3.442 0 01-.608-.182 4.094 4.094 0 01-.678-.405 4.605 4.605 0 01-.32-.327 1.84 1.84 0 00-.17-.169c-.14-.12-.263-.213-.443-.26-.208-.055-.467-.038-.652.089a1.187 1.187 0 00-.385.428c-.043.08-.08.163-.125.244-.07.13-.151.254-.238.375-.166.22-.338.442-.54.629-.023.017-.05.032-.075.047h-.039l-.073-.022a2.824 2.824 0 01-.107-.066 1.79 1.79 0 01-.086-.092c-.013-.02-.023-.04-.034-.06l-.01-.04c-.003-.126.01-.253.023-.38.058-.388.137-.771.244-1.15.106-.367.242-.722.383-1.076.134-.329.272-.656.429-.976a7.41 7.41 0 01.577-.977c.104-.13.206-.26.311-.388l.356.28c.14.12.27.254.4.387.154.157.322.3.488.447.317.275.583.617.84.955.303.415.61.84.832 1.31.058.16.104.325.138.494.013.19.009.378-.009.57z"
        fill="#2C2C2C"
      />
    </Svg>
  );
}

export default Sticker115D1640;
