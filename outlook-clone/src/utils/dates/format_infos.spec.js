import { formatDay, formatDateInfo, formatWeekName, formatWeekDay } from "@/utils/dates/format_infos";
import { formattedDateInfo } from "@/utils/dates/get_infos";

describe('format Infos util', () => {
    describe('formatDay', () => {
        it('should format single-digit days correctly', () => {
            const date = new Date('2024-04-05');
            const formatted = formatDay(date);

            expect(formatted).toBe('05');
        });

        it('should format double-digit days correctly', () => {
            const date = new Date('2024-04-15');
            const formatted = formatDay(date);

            expect(formatted).toBe('15');
        });
    });

    describe('formatDateInfo', () => {
        const dataWeek = formattedDateInfo.week;
        it('should format the date range of a week correctly', () => {
            const result = formatDateInfo(dataWeek);
            expect(result.formattedRange).toBe('March 31 - April 06');
        });
    });

    describe('formatWeekName', () => {
        it('should return the full weekday name', () => {
            const date = new Date('2024-04-04');
            const weekName = formatWeekName(date);
            expect(weekName).toBe('Thursday');
        });
    });

    describe('formatWeekDay', () => {
        it('should return the short weekday name', () => {
            const date = new Date('2024-04-04');
            const weekDayName = formatWeekDay(date);
            expect(weekDayName).toBe('Thu');
        });
    });

    describe('format date range correctly', () => {
        it('should format range within the same month correctly', () => {
          const mockWeekSameMonth = [
            { date: '2024-04-01', weekDay: 'Monday' },
            { date: '2024-04-07', weekDay: 'Sunday' }
          ];
          const info = formatDateInfo(mockWeekSameMonth);
          expect(info.formattedRange).toBe('April 01 - 07');
        });
      
        it('should format range across different months correctly', () => {
          const mockWeekDifferentMonth = [
            { date: '2024-03-31', weekDay: 'Sunday' },
            { date: '2024-04-06', weekDay: 'Saturday' }
          ];
          const info = formatDateInfo(mockWeekDifferentMonth);
          expect(info.formattedRange).toBe('March 31 - April 06');
        });
      });
});