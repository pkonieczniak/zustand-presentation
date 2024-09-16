import { IconBallFootball, IconBallVolleyball } from '@tabler/icons-react';
import { SportId } from '../types';

export function SportsEventsIcon({ sportId }: { sportId: SportId }) {
  if (sportId === SportId.Volleyball) {
    return <IconBallVolleyball size="1rem" color="blue" fill="white" />;
  }

  return <IconBallFootball size="1rem" color="black" fill="white" />;
}
