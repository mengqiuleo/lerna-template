import logger from '../src/index'

it('log test', () => {
  expect(logger('123')).toBe('123')
})
