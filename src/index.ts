// assets
import { TBColor } from '@assets/defaultTheme'
import { lightTheme } from '@assets/lightTheme'
import { darkTheme } from '@assets/darkTheme'

// scss
import '@assets/scss/global.scss'
import breakpoints from '@assets/scss/variables/_breakpoint.variables.module.scss'
import colors from '@assets/scss/variables/_color.variables.module.scss'
import fonts from '@assets/scss/variables/_fonts.variables.module.scss'
import gradients from '@assets/scss/variables/_gradient.variables.module.scss'

// components
import { BadgePreview } from '@components/atoms/BadgePreview/v2/BadgePreview'
import { EmptyBadgePreview } from '@components/atoms/BadgePreview/empty/EmptyBadgePreview'
import { MiniBadgePreview } from '@components/atoms/BadgePreview/mini/MiniBadgePreview'
import { DiplomaPreview } from '@components/atoms/BadgePreview/diploma/DiplomaPreview'
import { BadgePreviewProps } from '@components/atoms/BadgePreview/BadgePreviewProps'
import { Button } from '@components/atoms/Button/v1/Button'
import { ButtonV2 } from '@components/atoms/Button/v2/Button'
import Editor, { EditorProps } from '@components/atoms/TextEditor/Editor'
import { NavigationHeader, NavigationHeaderProps } from '@components/atoms/NavigationHeader/NavigationHeader'
import { SpinningArrow, SpinningArrowProps } from '@components/atoms/SpinningArrow/SpinningArrow'
import { IconBadge } from '@components/icons/IconBadge/IconBadge'
import { IconCurator } from '@components/icons/IconCurator/IconCurator'
import { IconDecentralized } from '@components/icons/IconDecentralized/IconDecentralized'
import { IconDiscord } from '@components/icons/IconDiscord/IconDiscord'
import { IconEmail } from '@components/icons/IconEmail/IconEmail'
import { IconEvidence } from '@components/icons/IconEvidence/IconEvidence'
import { IconGithub } from '@components/icons/IconGithub/IconGithub'
import { IconMedium } from '@components/icons/IconMedium/IconMedium'
import { IconTwitter } from '@components/icons/IconTwitter/IconTwitter'
import { BackgroundGradient } from '@components/layout/BackgroundGradient/BackgroundGradient'
import { BoxGradient, BoxGradientProps } from '@components/layout/BoxGradient/BoxGradient'
import { BoxBorderGradient } from '@components/layout/BoxBorderGradient/BoxBorderGradient'
import { SectionLayout, SectionLayoutProps } from '@components/layout/SectionLayout/SectionLayout'
import { LogoProps } from '@components/logos/LogoProps'
import { LogoTheBadge } from '@components/logos/LogoTheBadge/LogoTheBadge'
import { LogoTheBadgeWithText } from '@components/logos/LogoTheBadgeWithText/LogoTheBadgeWithText'
import { Carousel } from '@components/molecules/Carousel/Carousel'
import { Roadmap, RoadmapItem, RoadmapProps } from '@components/molecules/Roadmap/Roadmap'
import { MultiBadgePreview, MultiBadgePreviewProps } from '@components/molecules/MultiBadgePreview/MultiBadgePreview'
import {
  ResizedBadgePreviewsList,
  ResizedBadgePreviewsListProps,
} from '@components/molecules/ResizedBadgePreviewsList/ResizedBadgePreviewsList'
import { Stepper, StepperProps } from '@components/molecules/Stepper/Stepper'
import {
  PendingBadgeOverlay,
  PendingBadgeOverlayProps,
} from '@components/overlays/PendingBadgeOverlay/PendingBadgeOverlay'
import {
  TimeToExpireBadgeOverlay,
  TimeToExpireBadgeOverlayProps,
} from '@components/overlays/TimeToExpireBadgeOverlay/TimeToExpireBadgeOverlay'
import { Flipper } from '@components/atoms/Flipper/Flipper'
import { IconMetamask } from '@components/icons/IconMetamask/IconMetamask'
import { IconVerified } from '@components/icons/IconVerified/IconVerified'

export {
  lightTheme,
  darkTheme,
  colors,
  gradients,
  breakpoints,
  fonts,
  Button,
  ButtonV2,
  BadgePreview,
  EmptyBadgePreview,
  MiniBadgePreview,
  DiplomaPreview,
  Editor,
  NavigationHeader,
  SpinningArrow,
  IconBadge,
  IconCurator,
  IconDecentralized,
  IconDiscord,
  IconEmail,
  IconEvidence,
  IconGithub,
  IconMedium,
  IconTwitter,
  IconMetamask,
  IconVerified,
  BackgroundGradient,
  BoxGradient,
  BoxBorderGradient,
  SectionLayout,
  LogoTheBadge,
  LogoTheBadgeWithText,
  Carousel,
  MultiBadgePreview,
  ResizedBadgePreviewsList,
  Stepper,
  Roadmap,
  PendingBadgeOverlay,
  TimeToExpireBadgeOverlay,
  Flipper,
}
export type {
  TBColor,
  EditorProps,
  StepperProps,
  MultiBadgePreviewProps,
  LogoProps,
  SectionLayoutProps,
  BoxGradientProps,
  SpinningArrowProps,
  NavigationHeaderProps,
  BadgePreviewProps,
  ResizedBadgePreviewsListProps,
  RoadmapProps,
  RoadmapItem,
  PendingBadgeOverlayProps,
  TimeToExpireBadgeOverlayProps,
}
