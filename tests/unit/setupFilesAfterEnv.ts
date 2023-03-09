import '@testing-library/jest-dom'
import { server } from '../../src/mocks/server'
import 'whatwg-fetch'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
