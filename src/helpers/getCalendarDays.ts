import moment from 'moment';

const getCalendarDays = (totalDays: number, payload = 0) => {
  moment.updateLocale('en', { week: { dow: 1 } });

  const today = moment();
  const startDate = moment()
    .add(payload, 'day')
    .startOf('month')
    .startOf('week');
  const day = startDate.subtract(1, 'day').clone();
  const days = [...Array(totalDays)].map(() => {
    const currentDay = day.add(1, 'day').clone();
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
  const currentMonth = moment()
    .add(payload / 42, 'month')
    .startOf('month')
    .format('MMMM');
  const currentYear = moment()
    .add(payload / 42, 'month')
    .year();
  return { days, currentMonth, currentYear };
};

export default getCalendarDays;
