import React from "react";
import AnimatedGeneric from "../editor/workspace/erin-components/common/animation/animated-generic";

const GenericAnimationContext: React.Context<typeof AnimatedGeneric> = 
    React.createContext<typeof AnimatedGeneric>(AnimatedGeneric);
GenericAnimationContext.displayName = "GenericAnimationContext";

export default GenericAnimationContext;