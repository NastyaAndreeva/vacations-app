import { TOTAL_DAYS } from 'constants/totalDays';
import dayjs from 'dayjs';

const getCalendarDays = (totalDays: number, payload = 0) => {
  const today = dayjs();
  const startDate = dayjs()
    .add(payload, 'day')
    .startOf('month')
    .startOf('week');

  const days = [...Array(totalDays)].map((_, index) => {
    const currentDay = startDate.add(1 + index, 'day');
    const isWeekend =
      Number(currentDay.day()) === 0 || Number(currentDay.day()) === 6
        ? true
        : false;
    const isToday =
      currentDay.format('YYYY-MM-DD') === today.format('YYYY-MM-DD');

    const formatedDay = {
      day: Number(currentDay.format('D')),
      isWeekend,
      isToday,
    };

    return formatedDay;
  });

  const currentMonth = dayjs()
    .add(payload / TOTAL_DAYS, 'month')
    .startOf('month')
    .format('MMMM');
  const currentYear = dayjs()
    .add(payload / TOTAL_DAYS, 'month')
    .year();
  return { days, currentMonth, currentYear };
};

export default getCalendarDays;
