
type BackgroundType = "image" | "color" | "pattern"

interface LetterConfig {
    background: string,
    backgroundType: BackgroundType,
    music: string
}

type AnimationTypes = string // Temporal declaration. Need to decide what to include in animation

type Animation = [ AnimationTypes, unknown ] // unknown at second stands for animation spec

/* We'll do onload, onButtonTap, onPrevEnd, onPrevSimultaneous first */
type AnimationTriggerTypes = "onload" | "onButtonTap" | "onPrevEnd" | "onPrevSimultaneous" | "afterTimeout" | "afterPrevTimeout"

type AnimationTrigger = [ AnimationTriggerTypes, number ] // number at second stands for index, if onload, -1

// Consider to change data structure like [ id(or order), duration ]
interface AnimationInterface {
    id: number, // Id should be the index of the array
    targetId: number,
    animation: Animation,
    trigger: AnimationTrigger
}

type ComponentTypes = string // Temporal declaration. Need to decide what to include in components

interface ComponentInterface {
    id: number, // Id should be the index of the array
    type: ComponentTypes
}

type Component = ComponentInterface | null

interface Page {
    id: number,
    animations: AnimationInterface[],
    components: Component[]
}

export interface EditorState {
    /* publish: The value which will be used at onLayout functions 
    at each drag-and-dropped items in which if this variable is true, 
    it will measure the position and other properites for render it for viewers. */
    publish: boolean,
    pages: Page[],
    publishPages: [], // Components for publish will be stored at here
    config: LetterConfig,
    /* test: The value which will tell if it is testing the letter.
    This can be applied as component alternater */
    test: boolean,
}