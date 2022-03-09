import { TIMELINE_PROVIDER } from 'src/constants';
import { Timeline } from './timeline.entity';

export const timelineProvider = [
  {
    provide: TIMELINE_PROVIDER,
    useValue: Timeline,
  },
];
