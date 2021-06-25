
type NullableComponent = JSX.Element | null
type NullableComponentList = NullableComponent[]

export type IconMembers<T extends string> = Record<T, NullableComponentList>