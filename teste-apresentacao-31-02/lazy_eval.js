import moment from "moment";

const DATE_TIME_FORMAT = "DD/MM/YYYY HH:MM";

function formatDate(format) {
  return function (time) {
    return moment(time).format(format);
  };
}

const formattedDate = formatDate(DATE_TIME_FORMAT);

console.log(formattedDate(Date.now()));
