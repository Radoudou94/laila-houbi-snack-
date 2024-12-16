export interface HeartGroupProps {
  groupId: number;
}

export interface HeartAnimation {
  size: number;
  position: {
    x: number;
    y: number;
  };
  animation: {
    animation: string;
    animationDelay: string;
    transform: string;
    willChange: string;
  };
}