
declare module "erin/deprecated"

/**
* @deprecated Types which are belongs to this module has been belonged to: 
*             Erin.Editor  and Erin.Common
*/
export namespace ErinDeprecated {
        
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

        export interface TextConfig {
        fontFamily: string,
        color: string,
        }

        export type ShapeConfig = unknown

        export type StickerConfig = unknown

        export type ImageConfig = unknown

        export type BaseEditorButtonType = "press" | "toggle" | "on-hover" | "long-press" | "press-and-long-press"

        // Let's say that text is not clickable, and can be penetrated by tap
        type AnimationTriggerTypes = "onload" | "onButtonTap" | "onPrevEnd" | "onPrevSimultaneous" | "afterTimeout" | "afterPrevTimeout" 

        // Temporal declaration. Need to decide what to include in animation
        type AnimationTypes = string
}


