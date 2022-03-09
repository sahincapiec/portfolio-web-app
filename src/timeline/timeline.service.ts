import { Injectable } from '@nestjs/common';
import { Timeline } from './timeline.entity';

@Injectable()
export class TimelineService {
  constructor() {}

  async getByScreenName(screenName: string, limit: number): Promise<Timeline> {
    //TODO: Load user timeline
    return Promise.reject('Not implemented');
  }
}
