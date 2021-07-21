import { ErinDeprecated } from "erin/deprecated";

declare module "erin"

/**
 * @description "Erin" namespace include severeal namespaces: Common, Editor, WebRenderer, NativeRenderer
 *              These namespaces have their own purposes, which can be found as description. 
 *              And there are types which exists at the top level of this namespace.
 *              These possibly can be used at every part of the app
 */
export namespace Erin {

    /* ==========APP GENERIC========== */

    export type AppPageNames = "main" | "friends" | "postbox" | "myPage" | "editor" | "viewer" | "not-main"

    /**
     * @description "Common" Namespace is set of types 
     *              which possibly can be used both editor and renderer
     */
    export namespace Common {

        /* ==========HITBOX========== */

        export interface PositionSpec {
            x: number,
            y: number
        }

        export interface RectangleSpec {
            width: number,
            height: number,
        }

        export interface RectPosSpec extends PositionSpec, RectangleSpec { }

        export interface MinMaxSpec {
            xmin: number,
            xmax: number,
            ymin: number,
            ymax: number
        }

        /* ==========COMPONENT========== */

        type ComponentTypes = 
        | "text" 
        // | "shape" 
        | "sticker" 
        // | "image"

        export type NonableComponentTypes = ComponentTypes | "none"

        /* ==========ANIMATION GENERAL========== */

        type GeneralAnimationTypes = "blink" | "fade" | "moving" | "bounce"

        type NonableGeneralAnimationTypes = GeneralAnimationTypes | "none"

        /* ==========TEXT COMPONENT========== */

        export type TextAlign = "center" | "left" | "right" | "justify"

        export type TextAnimationTypes = NonableGeneralAnimationTypes | "typing"

        export type TextStyle = 
            | "rectangle" 
            // | "circle" 
            // | "triangle" 
            // | "star" 
            // | "heart" 
            | "roundedRectangle"
            | "shadow"
            | "neon"
            | "emphasize"

        export type NonableTextStyle = TextStyle | "none"

        /* ==========LETTER CONFIG========== */

        type BackgroundType = "image" | "color" | "pattern"

        export interface LetterConfig {
            background: string,
            backgroundType: BackgroundType,
            music: string | null
        }
    }

    /**
     * @description "Editor" Namespace is set of types 
     *              which will be used only at editor page
     */
    export namespace Editor {

        /* ==========COMPONENT========== */

        /**
         * @todo Should include layer number to component interface
         *       which will be in renderer
         */
        export interface ComponentInterface {
            id: number, // Id should be the index of the array
            type: ComponentTypes,
            /** 
             * @deprecated Since the data structure of whole erin letters changed, 
             *             this property will highly likely not be used
             */
            animationId?: number, // If no animation, -1,
            zIndex: number
        }

        type Component = ComponentInterface | null

        /* ==========LAYER========== */

        /**
         * @todo Should make it as one single array 
         *       with layer number included in component interface
         */
        export interface Layer {
            id: number,
            /**
             * @deprecated Since the data structure of whole erin letters changed, 
             *             this property will highly likely not be used
             */
            animations?: ErinDeprecated.AnimationInterface[],
            components: Component[],
            autoZIndex: number // It always starts with 2 since workspace's zIndex is 1
        }

        /* ==========EDITOR MENU========== */

        export type BottomTabMenuType = 
            | "default" 
            | "create" 
            | "text" 
            | "shape"
            // | "image"
            | "sticker" 
            | "animationDefault" 
            | "animationConfig"

        export type TopFloatMenuType = "default" | "layer" | "text" | "editText" | "animationDefault"

        export type BottomFloatMenuType = 
            | "none" 
            | "animationTimeline" 
            | "deleteComponent"
            | "colorPicker"
            | "fontStyle"
            | "editText"
            | "fontSize"

        /* ==========LETTER CONFIG========== */

        export interface Settings {
            iconSize: number,
            iconGap: number,
        } 

    }

    export namespace NativeRenderer { }

    export namespace WebRenderer { }
}