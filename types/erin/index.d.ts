
declare module "erin"

export namespace Erin {
    export namespace Common {

        export interface PositionSpec {
            x: number,
            y: number
        }

        export interface RectangleSpec {
            width: number,
            height: number,
        }

        export interface RectPosSpec extends PositionSpec, RectangleSpec { }
    }

    export namespace Editor {

        export type BottomTabMenuType = "default" | "create" | "text" | "shape" | "image" | "sticker" | "animationDefault" | "animationConfig"

        export type TopFloatMenuType = "default" | "pages"

        export type SideFloatMenuType = "none" | "animation"

        type BackgroundType = "image" | "color" | "pattern"

        type AnimationTriggerTypes = "onload" | "onButtonTap" | "onPrevEnd" | "onPrevSimultaneous" | "afterTimeout" | "afterPrevTimeout"

        type AnimationTypes = string // Temporal declaration. Need to decide what to include in animation

        export interface LetterConfig {
            background: string,
            backgroundType: BackgroundType,
            music: string | null
        }


        type Animation = [AnimationTypes, unknown] // unknown at second stands for animation spec

        /* We'll do onload, onButtonTap, onPrevEnd, onPrevSimultaneous first */

        type AnimationTrigger = [AnimationTriggerTypes, number] // number at second stands for index, if onload, -1

        // Consider to change data structure like [ id(or order), duration ]
        interface AnimationInterface {
            id: number, // Id should be the index of the array
            targetId: number,
            animation: Animation,
            trigger: AnimationTrigger
        }

        type ComponentTypes = string // Temporal declaration. Need to decide what to include in components

        export interface ComponentInterface {
            id: number, // Id should be the index of the array
            type: ComponentTypes,
            animationId: number, // If no animation, -1
            layout: Erin.Common.RectPosSpec
        }

        type Component = ComponentInterface | null

        export interface Page {
            id: number,
            animations: AnimationInterface[],
            components: Component[]
        }

    }

    export namespace NativeRenderer { }

    export namespace WebRenderer { }
}