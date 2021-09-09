import React from "react";
import AnimatedText from "../editor/workspace/erin-components/text/text-animation/animated-text";

const TextAnimationContext: React.Context<typeof AnimatedText> =
    React.createContext<typeof AnimatedText>(AnimatedText);
TextAnimationContext.displayName = "TextAnimationContext";

export default TextAnimationContext;
