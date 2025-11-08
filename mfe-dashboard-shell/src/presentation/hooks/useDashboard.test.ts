import { renderHook, act } from '@testing-library/react';
import { useDashboard } from './useDashboard';

global.fetch = jest.fn();

const mockFetch = global.fetch as jest.Mock;

describe('useDashboard', () => {
  it('should fetch data and update state', async () => {
    const mockData = {
      weather: { city: 'Santiago', temperature: 25 },
      crypto: { name: 'Bitcoin', price: 50000 },
    };

    mockFetch.mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const { result } = renderHook(() => useDashboard('Santiago', 'bitcoin'));

    await act(async () => {
      await result.current.fetchDashboardInfo('Santiago', 'bitcoin');
    });

    expect(result.current.weather).toEqual(mockData.weather);
    expect(result.current.crypto).toEqual(mockData.crypto);
    expect(result.current.isLoading).toEqual({ crypto: false, weather: false });
  });
});
