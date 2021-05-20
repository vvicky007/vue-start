import * as leagues_api from '@/api/leagues' 
import mockData from '../../mockdata/leagues_api_mock'
import fetch from 'node-fetch';
import { mocked } from 'ts-jest/utils';
jest.mock('node-fetch', () => {
    return jest.fn();
  });
  
  
describe('getStats',()=>{
    
    beforeEach(() => {
        mocked(fetch).mockClear(); 
      });
      
    it('should return data',async ()=>{
        mocked(fetch).mockImplementation((): Promise<any> => {
            return Promise.resolve({
              json() {
                return Promise.resolve(mockData);
              }
            });
          });
       
        const data  = await leagues_api.getStandings('/foo')
        expect(data).toEqual(mockData.children[0].standings.entries)
        expect(mocked(fetch).mock.calls.length).toBe(1);
    })
    it('should reject and return an empty array',async ()=>{
        mocked(fetch).mockImplementation((): Promise<any> => {
            return Promise.reject({
              json() {
                return Promise.reject(mockData);
              }
            });
          });
       
        const data  = await leagues_api.getStandings('/foo')
        expect(data).toEqual([])
        expect(mocked(fetch).mock.calls.length).toBe(1);
    })
})