import { ICON_COLOR } from '@components/editor/base/constants'
import PressButton from '@components/editor/base/press-button'
import { Ionicons } from '@expo/vector-icons'
import { RootState } from '@redux/root-reducer'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import Placeholder from '@components/editor/base/placeholder'
import { onMountTextAnimations } from '../workspace/erin-components/text/text-animation/text-animation.data'

type AnimationToggleInfiniteReduxProps = ConnectedProps<typeof connector>

interface AnimationToggleInfiniteProps extends AnimationToggleInfiniteReduxProps {}

const AnimationToggleInfinite: React.FC<AnimationToggleInfiniteProps> = ({
    iconSize,
    animationInfinite,
    focusedComponentType,
    textAnimationType
}) => {

    const renderIcon = () => (
        <Ionicons name="infinite" size={iconSize} color={animationInfinite ? "mediumorchid" : ICON_COLOR} />
    )

    const onPress = () => {}

    if (
        focusedComponentType === "text" &&
        onMountTextAnimations.includes(textAnimationType)
    ) {
        return (
            <PressButton 
                icon={renderIcon}
                onPress={onPress}
                bottomFloatHelpMessage={
                    animationInfinite ? 
                        "애니메이션이 계속 실행됩니다" : 
                        "애니메이션이 텍스트/스티커가 등장할 때만 실행됩니다"
                }
            />
        )
    }
    
    return <Placeholder />;
}

const mapStateToProps = (state: RootState) => ({
    iconSize: state.editor.generic.settings.iconSize,
    animationInfinite: state.editor.states.animationInfinite,
    focusedComponentType: state.editor.handle.focusedComponentType,
    textAnimationType: state.editor.states.textAnimationType
})

const connector = connect(mapStateToProps, {})

export default connector(AnimationToggleInfinite)
