import { FC, ReactNode } from "react";

import { PageHeader } from "@components/index";
import {
  AIDetectorIcon,
  AIHumanizerIcon,
  ChromeExtensionIcon,
  GrammarCheckIcon,
  ParaphraserIcon,
  PlagiarismCheckIcon,
  SummarizerIcon,
} from "@public/index";

import "./index.css";

interface CarouselItemProps {
  icon: ReactNode;
  text: string;
}

const CarouselItem: FC<CarouselItemProps> = ({ icon, text }) => (
  <li className="header__carousel-item">
    {icon}
    {text}
  </li>
);

export const HomePageHeader: FC = () => {
  const CAROUSEL_ITEMS: Array<{ icon: ReactNode; text: string }> = [
    { icon: <ParaphraserIcon />, text: "Paraphraser" },
    { icon: <GrammarCheckIcon />, text: "Grammar Check" },
    { icon: <PlagiarismCheckIcon />, text: "Plagiarism Check" },
    { icon: <AIHumanizerIcon />, text: "AI Humanizer" },
    { icon: <AIDetectorIcon />, text: "AI Detector" },
    { icon: <SummarizerIcon />, text: "Summarizer" },
    { icon: <ChromeExtensionIcon />, text: "Chrome Extension" },
  ];

  return (
    <header className="header">
      <PageHeader className="header__title">Choose Your Plan:</PageHeader>
      <ul className="header__carousel">
        {CAROUSEL_ITEMS.map((item) => (
          <CarouselItem key={item.text} {...item} />
        ))}
      </ul>
    </header>
  );
};
