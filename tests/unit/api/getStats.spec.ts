import * as stats_api from "@/api/stats";
import mockData from "../../mockdata/stats_api";
import sinon, { stub } from "sinon";
import fetch from "node-fetch";
import * as nodeFetch from "node-fetch";
import { mocked } from "ts-jest/utils";
jest.mock("node-fetch", () => {
  return jest.fn();
});

describe("getStats", () => {
  beforeEach(() => {
    mocked(fetch).mockClear();
  });

  it("should return data", async () => {
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.resolve({
        json() {
          return Promise.resolve(mockData);
        },
      });
    });

    const data = await stats_api.getStats("/foo");
    expect(data).toEqual(mockData.stats[0].leaders);
    expect(mocked(fetch).mock.calls.length).toBe(1);
  });
  it("should reject and return an empty array", async () => {
    mocked(fetch).mockImplementation((): Promise<any> => {
      return Promise.reject({
        json() {
          return Promise.reject(mockData);
        },
      });
    });
    const data = await stats_api.getStats("/foo");
    expect(data).toEqual([]);
    expect(mocked(fetch).mock.calls.length).toBe(1);
  });
});
