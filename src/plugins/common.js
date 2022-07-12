function fillZero(n) {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
}
function formatTimestamp(timestamp) {
  const time = new Date(timestamp);

  const year = time.getFullYear();
  const month = fillZero(time.getMonth() + 1);
  const date = fillZero(time.getDate());
  const hour = fillZero(time.getHours());
  const minute = fillZero(time.getMinutes());

  return `${year}-${month}-${date} ${hour}:${minute}`;
}

export default {
  install: (app) => {
    // 将 axios 绑定到全局属性中
    app.config.globalProperties.$common = {
      formatTimestamp,
    };
  },
};
