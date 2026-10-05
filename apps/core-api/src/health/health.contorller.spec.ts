import { HealthController } from './health.controller.js';

describe('HealthController', () => {
  it('returns the liveness status', () => {
    const controller = new HealthController();

    expect(controller.getLiveness()).toEqual({
      status: 'ok',
    });
  });
});
